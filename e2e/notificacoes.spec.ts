import { test, expect } from '@playwright/test'

const BASE = '/luna-videomaker'
const PESSOA_TOKEN = 'ana-silva-tkn-000000000000000000'
const NOTIFICACOES_KEY = `luna_notificacoes_${PESSOA_TOKEN}`

test.describe('Notificações (local mode)', () => {

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('luna_local_auth', JSON.stringify({ email: 'lunaheloisaa82@gmail.com' }))

      // Speed up 60s polling to 100ms
      const origSetInterval = window.setInterval
      window.setInterval = ((fn: any, delay: any, ...args: any[]) => {
        if (delay === 60000) delay = 100
        return origSetInterval(fn, delay, ...args)
      }) as typeof window.setInterval

      // Mock Notification API — track calls, grant permission
      ;(window as any).__dispatchedNotifications = []
      const OrigNotify = window.Notification
      window.Notification = function Mock(title: string, options?: any) {
        ;(window as any).__dispatchedNotifications.push({ title, options })
      } as any
      window.Notification.permission = 'granted'
      window.Notification.requestPermission = async () => 'granted'
    })
  })

  test('admin salva notificação no localStorage ao mudar status do vídeo', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Click edit on last video (Setup Gamer 2025, status: gravado)
    const editButtons = page.getByRole('button', { name: 'Editar vídeo' })
    await editButtons.last().click()

    // Change status from Gravado to Editando
    await page.locator('form select').selectOption('editando')
    await page.getByRole('button', { name: 'Salvar' }).click()

    // Wait for form to close
    await expect(page.getByText('+ Novo Vídeo')).toBeVisible()

    // Check localStorage for notification
    const raw = await page.evaluate((key) => localStorage.getItem(key), NOTIFICACOES_KEY)
    expect(raw).not.toBeNull()

    const notificacoes = JSON.parse(raw!)
    expect(notificacoes).toHaveLength(1)
    expect(notificacoes[0].videoTitulo).toBe('Setup Gamer 2025')
    expect(notificacoes[0].statusAntigo).toBe('gravado')
    expect(notificacoes[0].statusNovo).toBe('editando')
    expect(typeof notificacoes[0].timestamp).toBe('number')
  })

  test('VerView lê e limpa notificações do localStorage', async ({ page }) => {
    const notificacao = {
      videoTitulo: 'Review Novo Smartphone',
      statusAntigo: 'gravado',
      statusNovo: 'postado',
      timestamp: Date.now(),
    }

    // Pre-populate localStorage before navigation
    await page.addInitScript((args: any) => {
      localStorage.setItem(args.key, JSON.stringify([args.notificacao]))
    }, { key: NOTIFICACOES_KEY, notificacao })

    await page.goto(`${BASE}/v/luna-filmes?token=${PESSOA_TOKEN}`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Wait for polling to fire (100ms mock, wait generously)
    await page.waitForTimeout(2000)

    // localStorage should be cleared after read
    const raw = await page.evaluate((key) => localStorage.getItem(key), NOTIFICACOES_KEY)
    expect(raw).toBeNull()

    // Notification should have been dispatched
    const dispatched = await page.evaluate(() => (window as any).__dispatchedNotifications)
    expect(dispatched).toHaveLength(1)
    expect(dispatched[0].title).toContain('Review Novo Smartphone')
  })

  test('VerView não dispara notificação se não há notificações', async ({ page }) => {
    await page.goto(`${BASE}/v/luna-filmes?token=${PESSOA_TOKEN}`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    await page.waitForTimeout(2000)

    const raw = await page.evaluate((key) => localStorage.getItem(key), NOTIFICACOES_KEY)
    expect(raw).toBeNull()

    const dispatched = await page.evaluate(() => (window as any).__dispatchedNotifications)
    expect(dispatched).toHaveLength(0)
  })

  test('VerView processa múltiplas notificações acumuladas', async ({ page }) => {
    const notificacoes = [
      { videoTitulo: 'Review Novo Smartphone', statusAntigo: 'gravado', statusNovo: 'postado', timestamp: Date.now() },
      { videoTitulo: 'Tutorial Vue 3', statusAntigo: 'editando', statusNovo: 'revisao', timestamp: Date.now() + 1000 },
      { videoTitulo: 'Vlog Home Office', statusAntigo: 'revisao', statusNovo: 'postado', timestamp: Date.now() + 2000 },
    ]

    await page.addInitScript((args: any) => {
      localStorage.setItem(args.key, JSON.stringify(args.notificacoes))
    }, { key: NOTIFICACOES_KEY, notificacoes })

    await page.goto(`${BASE}/v/luna-filmes?token=${PESSOA_TOKEN}`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    await page.waitForTimeout(2000)

    // All notifications should be consumed
    const raw = await page.evaluate((key) => localStorage.getItem(key), NOTIFICACOES_KEY)
    expect(raw).toBeNull()

    // All 3 notifications should have been dispatched
    const dispatched = await page.evaluate(() => (window as any).__dispatchedNotifications)
    expect(dispatched).toHaveLength(3)
    expect(dispatched[0].title).toContain('Review Novo Smartphone')
    expect(dispatched[1].title).toContain('Tutorial Vue 3')
    expect(dispatched[2].title).toContain('Vlog Home Office')
  })
})
