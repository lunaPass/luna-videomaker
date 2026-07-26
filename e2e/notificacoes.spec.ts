import { test, expect } from '@playwright/test'
import { autenticar } from './helpers.mjs'

const BASE = '/luna-videomaker'
const PESSOA_TOKEN = 'ana-silva-tkn-000000000000000000'

// ─── Helpers: public notifications (subcoleção pessoa) ──────

async function criarNotificacaoFirestore(page, dados) {
  await page.evaluate(async (data) => {
    const { collection, addDoc } = window.__firestoreHelpers
    const col = collection(window.__firestore, 'empresas/empresa-1/pessoas/pessoa-1/notificacoes')
    await addDoc(col, data)
  }, dados)
}

async function contarNotificacoesFirestore(page) {
  const count = await page.evaluate(async () => {
    const { collection, getDocs } = window.__firestoreHelpers
    const col = collection(window.__firestore, 'empresas/empresa-1/pessoas/pessoa-1/notificacoes')
    const snap = await getDocs(col)
    return snap.docs.length
  })
  return count
}

// ─── Helpers: admin notifications (subcoleção notificacoesAdmin) ──

async function criarNotificacaoAdmin(page, empresaId, dados) {
  const payload = { ...dados, timestamp: Date.now(), lida: false }
  await page.evaluate(async (args) => {
    const { collection, addDoc } = window.__firestoreHelpers
    const col = collection(window.__firestore, `empresas/${args.empresaId}/notificacoesAdmin`)
    await addDoc(col, args.payload)
  }, { empresaId, payload })
}

async function limparNotificacoesAdmin(page) {
  await page.evaluate(async () => {
    const { collection, getDocs, deleteDoc } = window.__firestoreHelpers
    for (const empresaId of ['empresa-1', 'empresa-2']) {
      const col = collection(window.__firestore, `empresas/${empresaId}/notificacoesAdmin`)
      const snap = await getDocs(col)
      for (const doc of snap.docs) {
        await deleteDoc(doc.ref)
      }
    }
  })
}

function buildNotif(overrides = {}) {
  return {
    tipo: 'priorizado',
    videoId: 'video-1',
    videoTitulo: 'Review Novo Smartphone',
    pessoaNome: 'Ana Silva',
    empresaNome: 'Luna Filmes',
    empresaId: 'empresa-1',
    pessoaId: 'pessoa-1',
    timestamp: Date.now(),
    lida: false,
    ...overrides,
  }
}

test.describe('Notificações', () => {

  test.beforeEach(async ({ page }) => {
    await autenticar(page)
    await page.addInitScript(() => {
      // Speed up the polling interval for notification checks on VerView
      const origSetInterval = window.setInterval
      window.setInterval = ((fn: any, delay: any, ...args: any[]) => {
        if (delay === 60000) delay = 100
        return origSetInterval(fn, delay, ...args)
      }) as typeof window.setInterval

      ;(window as any).__dispatchedNotifications = []
      const OrigNotify = window.Notification
      window.Notification = function Mock(title: string, options?: any) {
        ;(window as any).__dispatchedNotifications.push({ title, options })
      } as any
      window.Notification.permission = 'granted'
      window.Notification.requestPermission = async () => 'granted'
    })
  })

  test.afterEach(async ({ page }) => {
    await limparNotificacoesAdmin(page)
  })

  // ─── Public notification tests ─────────────────────────────

  test('admin salva notificação no Firebase ao mudar status do vídeo', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    const editButtons = page.getByRole('button', { name: 'Editar vídeo' })
    await editButtons.nth(3).click()

    await page.getByRole('combobox').filter({ has: page.locator('option[value="editando"]') }).selectOption('editando')
    await page.getByRole('button', { name: 'Salvar' }).click()

    await expect(page.getByText('+ Novo Vídeo')).toBeVisible()

    await page.waitForTimeout(500)

    const count = await contarNotificacoesFirestore(page)
    expect(count).toBeGreaterThan(0)
  })

  test('VerView lê e limpa notificações do Firebase', async ({ page }) => {
    await criarNotificacaoFirestore(page, {
      videoTitulo: 'Review Novo Smartphone',
      statusAntigo: 'gravado',
      statusNovo: 'postado',
      timestamp: Date.now(),
    })

    await page.goto(`${BASE}/v/luna-filmes?token=${PESSOA_TOKEN}`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    await page.waitForTimeout(2000)

    const restantes = await contarNotificacoesFirestore(page)
    expect(restantes).toBe(0)

    const dispatched = await page.evaluate(() => (window as any).__dispatchedNotifications)
    expect(dispatched).toHaveLength(1)
    expect(dispatched[0].title).toContain('Review Novo Smartphone')
  })

  test('VerView não dispara notificação se não há notificações', async ({ page }) => {
    await page.goto(`${BASE}/v/luna-filmes?token=${PESSOA_TOKEN}`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    await page.waitForTimeout(2000)

    const dispatched = await page.evaluate(() => (window as any).__dispatchedNotifications)
    expect(dispatched).toHaveLength(0)
  })

  test('VerView processa múltiplas notificações acumuladas', async ({ page }) => {
    const base = Date.now()
    await criarNotificacaoFirestore(page, { videoTitulo: 'Review Novo Smartphone', statusAntigo: 'gravado', statusNovo: 'postado', timestamp: base })
    await criarNotificacaoFirestore(page, { videoTitulo: 'Tutorial Vue 3', statusAntigo: 'editando', statusNovo: 'revisao', timestamp: base + 1000 })
    await criarNotificacaoFirestore(page, { videoTitulo: 'Vlog Home Office', statusAntigo: 'revisao', statusNovo: 'postado', timestamp: base + 2000 })

    await page.goto(`${BASE}/v/luna-filmes?token=${PESSOA_TOKEN}`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    await page.waitForTimeout(2000)

    const restantes = await contarNotificacoesFirestore(page)
    expect(restantes).toBe(0)

    const dispatched = await page.evaluate(() => (window as any).__dispatchedNotifications)
    expect(dispatched).toHaveLength(3)
    const titles = dispatched.map((d: any) => d.title)
    expect(titles.some((t: string) => t.includes('Review Novo Smartphone'))).toBe(true)
    expect(titles.some((t: string) => t.includes('Tutorial Vue 3'))).toBe(true)
    expect(titles.some((t: string) => t.includes('Vlog Home Office'))).toBe(true)
  })

  // ─── Admin notification page tests ─────────────────────────

  test('navega para notificacoes admin via sidebar', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await page.getByRole('link', { name: 'Notificações' }).click()
    await expect(page.getByRole('heading', { name: 'Notificações' })).toBeVisible()
  })

  test('admin notification exibe empty state', async ({ page }) => {
    await page.goto(`${BASE}/admin/notificacoes`)
    await expect(page.getByRole('heading', { name: 'Notificações' })).toBeVisible()
    await expect(page.getByText('Nenhuma notificação')).toBeVisible()
  })

  test('admin notification exibe notificacoes na tabela', async ({ page }) => {
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif())
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Setup Gamer 2025', tipo: 'linkBruto' }))
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Dicas de Edição', tipo: 'despriorizado' }))

    await page.goto(`${BASE}/admin/notificacoes`)
    await expect(page.getByRole('heading', { name: 'Notificações' })).toBeVisible()

    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
    await expect(page.getByText('Setup Gamer 2025').first()).toBeVisible()
    await expect(page.getByText('Dicas de Edição').first()).toBeVisible()
    await expect(page.getByText('Ana Silva').first()).toBeVisible()
    await expect(page.getByText('Luna Filmes').first()).toBeVisible()
  })

  test('admin notification mostra tipo correto', async ({ page }) => {
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ tipo: 'priorizado', videoTitulo: 'Video Priorizado' }))
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ tipo: 'despriorizado', videoTitulo: 'Video Despriorizado' }))
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ tipo: 'linkBruto', videoTitulo: 'Video Link Bruto' }))

    await page.goto(`${BASE}/admin/notificacoes`)

    await expect(page.getByText('Priorizou').first()).toBeVisible()
    await expect(page.getByText('Removeu prioridade').first()).toBeVisible()
    await expect(page.getByText('Atualizou link').first()).toBeVisible()
  })

  test('admin notification filtra por empresa', async ({ page }) => {
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Video Luna' }))
    await criarNotificacaoAdmin(page, 'empresa-2', buildNotif({ videoTitulo: 'Video Pixel', empresaNome: 'Pixel Produtora', empresaId: 'empresa-2' }))

    await page.goto(`${BASE}/admin/notificacoes`)
    await expect(page.getByText('Video Luna').first()).toBeVisible()
    await expect(page.getByText('Video Pixel').first()).toBeVisible()

    // Filter by empresa-1
    await page.locator('select').first().selectOption('empresa-1')
    await page.waitForTimeout(300)

    await expect(page.getByText('Video Luna').first()).toBeVisible()
    await expect(page.getByText('Video Pixel')).toHaveCount(0)
  })

  test('admin notification filtra lidas/naoLidas', async ({ page }) => {
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Nao Lida 1' }))
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Nao Lida 2' }))

    // Mark one as read via Firestore
    await page.evaluate(async () => {
      const { collection, getDocs, updateDoc } = window.__firestoreHelpers
      const col = collection(window.__firestore, 'empresas/empresa-1/notificacoesAdmin')
      const snap = await getDocs(col)
      if (snap.docs.length > 0) {
        await updateDoc(snap.docs[0].ref, { lida: true })
      }
    })

    await page.goto(`${BASE}/admin/notificacoes`)

    // Filter "Não lidas"
    await page.locator('select').nth(1).selectOption('naoLidas')
    await page.waitForTimeout(300)

    const naoLidasCount = await page.locator('table tbody tr').count()
    expect(naoLidasCount).toBe(1)

    // Filter "Lidas"
    await page.locator('select').nth(1).selectOption('lidas')
    await page.waitForTimeout(300)

    const lidasCount = await page.locator('table tbody tr').count()
    expect(lidasCount).toBe(1)
  })

  test('admin notification marca como lida ao clicar', async ({ page }) => {
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Clicar Marcar Lida' }))

    await page.goto(`${BASE}/admin/notificacoes`)
    await expect(page.getByText('Clicar Marcar Lida').first()).toBeVisible()

    // Click the notification row
    await page.getByText('Clicar Marcar Lida').first().click()
    await page.waitForTimeout(500)

    // Reload page to verify the unread state persisted as read
    await page.reload()
    await page.waitForTimeout(500)

    // After marking as read, the row should not have bg-primary-soft/30 highlight
    const row = page.locator('tr').filter({ hasText: 'Clicar Marcar Lida' })
    await expect(row).not.toHaveClass(/bg-primary-soft/)
  })

  test('admin notification marca todas como lidas', async ({ page }) => {
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Todas Lidas 1' }))
    await criarNotificacaoAdmin(page, 'empresa-1', buildNotif({ videoTitulo: 'Todas Lidas 2' }))
    await criarNotificacaoAdmin(page, 'empresa-2', buildNotif({ videoTitulo: 'Todas Lidas 3', empresaNome: 'Pixel Produtora', empresaId: 'empresa-2' }))

    await page.goto(`${BASE}/admin/notificacoes`)
    await expect(page.getByText('Todas Lidas 1').first()).toBeVisible()

    // Click "Marcar todas como lidas"
    await page.getByText('Marcar todas como lidas').click()
    await page.waitForTimeout(500)

    // Reload page
    await page.reload()
    await page.waitForTimeout(500)

    // No unread rows should remain (all should be marked as read)
    const unreadRows = page.locator('tbody tr[class*="bg-primary-soft"]')
    await expect(unreadRows).toHaveCount(0)
  })
})
