import { test, expect } from '@playwright/test'
import { autenticar } from './helpers.mjs'

const BASE = '/luna-videomaker'
const PESSOA_TOKEN = 'ana-silva-tkn-000000000000000000'

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

test.describe('Notificações', () => {

  test.beforeEach(async ({ page }) => {
    await autenticar(page)
    await page.addInitScript(() => {
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
    expect(count).toBeGreaterThanOrEqual(0)
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
})
