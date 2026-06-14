import { test, expect } from '@playwright/test'

const BASE = '/luna-videomaker'

const TOKENS = {
  empresa: {
    'luna-filmes': 'luna-filmes-tkn-0000000000000000',
    'pixel-produtora': 'pixel-produtora-tkn-000000000000',
    'studio-zen': 'studio-zen-tkn-00000000000000000',
  },
  pessoa: {
    'ana-silva': 'ana-silva-tkn-000000000000000000',
    'mariana-santos': 'mariana-santos-tkn-0000000000000',
  },
}

test.describe('Páginas públicas', () => {

  test('carrega lista de pessoas da empresa com token válido', async ({ page }) => {
    await page.goto(`${BASE}/v/luna-filmes?token=${TOKENS.empresa['luna-filmes']}`)
    await expect(page.getByRole('heading', { name: 'Luna Filmes' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Ana Silva' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Carlos Oliveira' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Beatriz Costa' })).toBeVisible()
  })

  test('carrega vídeos de uma pessoa com token pessoal', async ({ page }) => {
    await page.goto(`${BASE}/v/luna-filmes?token=${TOKENS.pessoa['ana-silva']}`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Review Novo Smartphone' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Setup Gamer 2025' })).toBeVisible()
  })

  test('mostra estado vazio para pessoa sem vídeos', async ({ page }) => {
    await page.goto(`${BASE}/v/pixel-produtora?token=${TOKENS.pessoa['mariana-santos']}`)
    await expect(page.getByRole('heading', { name: 'Mariana Santos' })).toBeVisible()
    await expect(page.getByText('Nenhum vídeo cadastrado ainda')).toBeVisible()
  })

  test('mostra erro para token inválido', async ({ page }) => {
    await page.goto(`${BASE}/v/luna-filmes?token=token-invalido`)
    await expect(page.getByText('Link inválido: token não reconhecido')).toBeVisible()
  })

  test('mostra erro quando token não é fornecido', async ({ page }) => {
    await page.goto(`${BASE}/v/luna-filmes`)
    await expect(page.getByText('Link inválido: token não encontrado')).toBeVisible()
  })

  test('nova empresa Studio Zen funciona', async ({ page }) => {
    await page.goto(`${BASE}/v/studio-zen?token=${TOKENS.empresa['studio-zen']}`)
    await expect(page.getByRole('heading', { name: 'Studio Zen' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Julia Lima' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Rafael Torres' })).toBeVisible()
  })

})
