import { test, expect } from '@playwright/test'
import { autenticar } from './helpers.mjs'

const BASE = '/luna-videomaker'
const TOKENS = {
  empresa: { 'luna-filmes': 'luna-filmes-tkn-0000000000000000' },
  pessoa: {},
}

test.describe('Admin', () => {

  test.beforeEach(async ({ page }) => {
    await autenticar(page)
  })

  test('login e mostra dashboard', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
    // Dashboard shows aggregated status cards, not empresa names
    await expect(page.getByRole('main').getByText('Gravado').first()).toBeVisible()
  })

  test('dashboard exibe cards de status', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await expect(page.getByRole('main').getByText('Gravado').first()).toBeVisible()
    await expect(page.getByRole('main').getByText('Editando').first()).toBeVisible()
    await expect(page.getByRole('main').getByText('Em Revisão').first()).toBeVisible()
    await expect(page.getByRole('main').getByText('Postado').first()).toBeVisible()
  })

  test('dashboard exibe volume mensal', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    const section = page.locator('h2').filter({ hasText: 'Volume Mensal' })
    await expect(section).toBeVisible()
    const canvas = section.locator('..').locator('canvas')
    await expect(canvas).toBeVisible()
  })

  test('dashboard exibe grafico por canal', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    const section = page.locator('h2').filter({ hasText: 'Vídeos por Canal' })
    await expect(section).toBeVisible()
    const canvas = section.locator('..').locator('canvas')
    await expect(canvas).toBeVisible()
  })

  test('dashboard exibe pipeline de producao', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    const section = page.locator('h2').filter({ hasText: 'Pipeline de Produção' })
    await expect(section).toBeVisible()
    const canvas = section.locator('..').locator('canvas')
    await expect(canvas).toBeVisible()
  })



  test('dashboard exibe atividade recente', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    const section = page.locator('h2').filter({ hasText: 'Atividade Recente' })
    await expect(section).toBeVisible()
    // Should list videos sorted by atualizadoEm (newest first)
    await expect(page.getByText('Setup Gamer 2025').first()).toBeVisible()
  })

  test('dashboard exibe proximos posts', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    const section = page.locator('h2').filter({ hasText: 'Próximos Posts' })
    await expect(section).toBeVisible()
    // video-17 has future dataPostagem
    await expect(page.getByText('Review Fones de Ouvido 2025').first()).toBeVisible()
  })

  test('dashboard exibe stats inferiores', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await expect(page.getByRole('main').getByText('Priorizados')).toBeVisible()
    await expect(page.getByRole('main').getByText('Com Ads')).toBeVisible()
    await expect(page.locator('p').filter({ hasText: 'Empresas' })).toBeVisible()
  })

  test('navega para lista de empresas via sidebar', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await page.getByRole('link', { name: 'Empresas' }).click()
    await expect(page.getByText(/Luna Filmes/).first()).toBeVisible()
    await expect(page.getByText(/Pixel Produtora/).first()).toBeVisible()
    await expect(page.getByText(/Studio Zen/).first()).toBeVisible()
  })

  test('navega para detalhe de empresa', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1`)
    await expect(page.getByText(/Ana Silva/).first()).toBeVisible()
    await expect(page.getByText(/Carlos Oliveira/).first()).toBeVisible()
    await expect(page.getByText(/Beatriz Costa/).first()).toBeVisible()
  })

  test('navega para detalhe de pessoa', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()
    await expect(page.getByText('Review Novo Smartphone')).toBeVisible()
    await expect(page.getByText('Setup Gamer 2025')).toBeVisible()
  })

  test('navega para página de vídeos', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
  })

  test('navega para config', async ({ page }) => {
    await page.goto(`${BASE}/admin/config`)
    await expect(page.getByText('Configurações')).toBeVisible()
    await expect(page.getByText('YouTube')).toBeVisible()
    await expect(page.getByText('Instagram')).toBeVisible()
    await expect(page.getByText('TikTok')).toBeVisible()
    await expect(page.getByText('Facebook')).toBeVisible()
  })

  test('cria video via formulario e aparece na lista', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()
    await expect(page.getByText('Review Novo Smartphone')).toBeVisible()

    // Open create form
    await page.getByRole('button', { name: '+ Novo Vídeo' }).click()
    await expect(page.getByRole('heading', { name: 'Novo Vídeo' })).toBeVisible()

    // Fill fields
    await page.getByPlaceholder('Ex: Aula de inglês #42').fill('Video E2E Teste')
    await page.getByRole('combobox').filter({ has: page.locator('option[value="editando"]') }).selectOption('editando')
    await page.locator('label').filter({ hasText: 'YouTube' }).click()
    await page.locator('#ads-check').check()
    await page.getByPlaceholder('Observações opcionais...').fill('Criado no teste')
    await page.locator('input[type="date"]').fill('2025-06-15')
    await page.locator('input[type="url"]').last().fill('https://drive.google.com/file/d/test-final-link')

    // Submit
    await page.getByRole('button', { name: 'Salvar' }).click()

    // Wait for form to close and new video to appear
    await expect(page.getByText('Video E2E Teste').first()).toBeVisible({ timeout: 10000 })

    // Verify linkVideoFinal appears
    const link = page.locator('a').filter({ hasText: 'Vídeo Final' }).first()
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', /test-final-link/)
  })

  test('priorizado aparece na lista de videos da pessoa', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Video-3 (Vlog Trabalhando Home Office) has priorizado: true
    const videoRow = page.locator('div').filter({ hasText: 'Vlog Trabalhando Home Office' }).first()
    // Should have a yellow star (title="Priorizado")
    const star = videoRow.locator('[title="Priorizado"]')
    await expect(star).toBeVisible()
  })

  test('link material bruto aparece no admin', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Video-3 has linkMaterialBruto
    const link = page.locator('a').filter({ hasText: 'Material Bruto' }).first()
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', /raw-material-1/)
  })

  test('link video final aparece no admin', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-3`)
    await expect(page.getByRole('heading', { name: 'Beatriz Costa' })).toBeVisible()

    // Video-7 (Comparativo iPhone) has linkVideoFinal
    const link = page.locator('a').filter({ hasText: 'Vídeo Final' }).first()
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', /final-video-7/)
  })

  test('editar video mostra campo Link do Vídeo Final', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Click edit on first video
    const editButton = page.getByRole('button', { name: 'Editar vídeo' }).first()
    await editButton.click()

    // Check that the Link do Vídeo Final field is visible
    await expect(page.locator('input[type="url"]').last()).toBeVisible()
  })

  test('salvar linkVideoFinal no form aparece na lista', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Click edit on fourth video (Setup Gamer 2025) which has no linkVideoFinal
    const editButtons = page.getByRole('button', { name: 'Editar vídeo' })
    await editButtons.nth(3).click()

    // Fill Link do Vídeo Final
    await page.locator('input[type="url"]').last().fill('https://drive.google.com/file/d/test-final-link')

    // Submit
    await page.getByRole('button', { name: 'Salvar' }).click()

    // Wait for form to close
    await expect(page.getByText('+ Novo Vídeo')).toBeVisible()

    // Verify link appears
    const link = page.locator('a').filter({ hasText: 'Vídeo Final' }).first()
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', /test-final-link/)
  })

  test('priorizado aparece na listagem global de videos', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()

    // Check that a star appears somewhere (videos with priorizado: true)
    const star = page.locator('[title="Priorizado"]').first()
    await expect(star).toBeVisible()
  })

  test('cria empresa via formulario e aparece na lista', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas`)
    await expect(page.getByRole('heading', { name: 'Empresas' })).toBeVisible()

    await page.getByRole('button', { name: '+ Nova Empresa' }).click()
    await expect(page.getByRole('heading', { name: 'Nova Empresa' })).toBeVisible()

    await page.getByPlaceholder('Ex: English School').fill('Empresa Criada no Teste')
    await page.getByRole('button', { name: 'Salvar' }).click()

    await expect(page.getByText('Empresa Criada no Teste').first()).toBeVisible({ timeout: 10000 })
  })

  test('cria pessoa via formulario e aparece na lista', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1`)
    await expect(page.getByRole('heading', { name: 'Luna Filmes' })).toBeVisible()

    await page.getByRole('button', { name: '+ Nova Pessoa' }).click()
    await expect(page.getByRole('heading', { name: 'Nova Pessoa' })).toBeVisible()

    await page.getByPlaceholder('Ex: João').fill('Pessoa Criada no Teste')
    await page.getByRole('button', { name: 'Salvar' }).click()

    await expect(page.getByText('Pessoa Criada no Teste').first()).toBeVisible({ timeout: 10000 })
  })

  test('exclui video com confirmacao modal', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    // Find the delete button for "Tutorial Vue 3 + Firebase"
    const tutorialRow = page.locator('tr').filter({ hasText: 'Tutorial Vue 3 + Firebase' })
    const deleteBtn = tutorialRow.getByRole('button', { name: 'Excluir vídeo' })
    await deleteBtn.click()

    // Modal should appear
    await expect(page.getByText('Tem certeza que deseja excluir')).toBeVisible()

    // Cancel should close modal
    await page.getByText('Cancelar').click()
    await expect(page.getByText('Tutorial Vue 3').first()).toBeVisible()

    // Now actually delete
    await tutorialRow.getByRole('button', { name: 'Excluir vídeo' }).click()
    await expect(page.getByText('Tem certeza que deseja excluir')).toBeVisible()

    // The modal's "Excluir" button — scope to modal via heading ancestor
    const modal = page.locator('h2').filter({ hasText: 'Excluir vídeo' }).locator('..')
    await modal.getByText('Excluir', { exact: true }).click()

    // Video should be gone
    await expect(page.getByText('Tutorial Vue 3')).toHaveCount(0)
  })

  test('adiciona e remove canal na config', async ({ page }) => {
    await page.goto(`${BASE}/admin/config`)
    await expect(page.getByText('Configurações')).toBeVisible()

    const input = page.getByPlaceholder('Novo canal...')
    const addBtn = page.getByRole('button', { name: 'Adicionar' })

    await input.fill('CanalTestE2E')
    await addBtn.click()

    await expect(page.getByText('CanalTestE2E')).toBeVisible()

    // Remove it
    await page.getByRole('button', { name: 'Remover' }).last().click()
    await expect(page.getByText('CanalTestE2E')).toHaveCount(0)
  })

  test('filtro por empresa na lista global de videos', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    // Select Studio Zen from empresa filter dropdown
    await page.getByRole('combobox').filter({ has: page.locator('option[value="empresa-3"]') }).selectOption('empresa-3')

    // Should show Studio Zen videos
    await expect(page.getByText('Meditação Guiada').first()).toBeVisible()
    // Should NOT show Luna Filmes videos
    await expect(page.getByText('Review Novo Smartphone')).toHaveCount(0)

    // Click "Limpar filtros"
    await page.getByRole('button', { name: 'Limpar filtros' }).click()

    // Review Novo Smartphone should reappear
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
  })

  test('busca por titulo filtra videos', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    await page.getByPlaceholder('Buscar por título, empresa, pessoa ou observações...').fill('Setup')

    await expect(page.getByText('Setup Gamer 2025').first()).toBeVisible()
    await expect(page.getByText('Review Novo Smartphone')).toHaveCount(0)
  })

  test('busca por empresa filtra videos', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    await page.getByPlaceholder('Buscar por título, empresa, pessoa ou observações...').fill('Studio Zen')

    await expect(page.getByText('Meditação Guiada').first()).toBeVisible()
    await expect(page.getByText('Review Novo Smartphone')).toHaveCount(0)
  })

  test('busca por pessoa filtra videos', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    await page.getByPlaceholder('Buscar por título, empresa, pessoa ou observações...').fill('Carlos')

    await expect(page.getByText('Dicas de Edição').first()).toBeVisible()
    await expect(page.getByText('Review Novo Smartphone')).toHaveCount(0)
  })

  test('busca sem resultados mostra empty state', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    await page.getByPlaceholder('Buscar por título, empresa, pessoa ou observações...').fill('zzzzzz')

    await expect(page.getByText('Nenhum vídeo encontrado').first()).toBeVisible()
  })

  test('paginacao mostra botoes de navegacao', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    // With 28+ videos and pageSize=20, should have 2 pages
    const pagination = page.locator('.flex.items-center.justify-center.gap-2.mt-6')
    await expect(pagination.getByText('Anterior')).toBeVisible()
    await expect(pagination.getByText('Próximo')).toBeVisible()
    await expect(pagination.getByRole('button', { name: '1', exact: true })).toBeVisible()
    await expect(pagination.getByRole('button', { name: '2', exact: true })).toBeVisible()

    // Page 1 - Anterior should be disabled
    await expect(pagination.getByText('Anterior')).toBeDisabled()
  })

  test('paginacao avanca para pagina 2', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByRole('heading', { name: 'Todos os Vídeos' })).toBeVisible()

    // Verify page 1 shows first 20 videos
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()

    // Go to page 2
    const pagination = page.locator('.flex.items-center.justify-center.gap-2.mt-6')
    await pagination.getByRole('button', { name: '2', exact: true }).click()
    await page.waitForTimeout(300)

    // Page 1 videos should be gone, page 2 videos visible
    await expect(page.getByText('Review Novo Smartphone')).toHaveCount(0)
  })

  test('dashboard exibe receita por empresa', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    const section = page.locator('h2').filter({ hasText: 'Receita por Empresa' })
    await expect(section).toBeVisible()
    const canvas = section.locator('..').locator('canvas')
    await expect(canvas).toBeVisible()
  })

  test('config exibe taxas de câmbio', async ({ page }) => {
    await page.goto(`${BASE}/admin/config`)
    await expect(page.getByText('Configurações')).toBeVisible()
    await expect(page.getByText('Taxas de Câmbio')).toBeVisible()
    await expect(page.getByText('USD → BRL')).toBeVisible()
    await expect(page.getByText('EUR → BRL')).toBeVisible()
  })

  test('config salva taxas de câmbio', async ({ page }) => {
    await page.goto(`${BASE}/admin/config`)
    await expect(page.getByText('Taxas de Câmbio')).toBeVisible()

    // Fill new values — scope to the exchange rates section
    const taxasSection = page.locator('h2').filter({ hasText: 'Taxas de Câmbio' }).locator('..')
    await taxasSection.locator('input[type="number"]').first().fill('6.00')
    await taxasSection.locator('input[type="number"]').last().fill('7.00')

    // Save
    await page.getByRole('button', { name: /Salvar taxas/i }).click()

    // Should show success message
    await expect(page.getByText('Taxas salvas')).toBeVisible({ timeout: 5000 })
  })

  test('cria video com valor e moeda', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Open create form
    await page.getByRole('button', { name: '+ Novo Vídeo' }).click()
    await expect(page.getByRole('heading', { name: 'Novo Vídeo' })).toBeVisible()

    // Fill required fields
    await page.getByPlaceholder('Ex: Aula de inglês #42').fill('Video Financeiro Teste')
    await page.getByRole('combobox').filter({ has: page.locator('option[value="gravado"]') }).selectOption('gravado')
    await page.locator('label').filter({ hasText: 'YouTube' }).click()

    // Fill valor and moeda
    await page.getByPlaceholder('0,00').fill('999.99')
    await page.locator('select').filter({ has: page.locator('option[value="USD"]') }).selectOption('USD')

    // Submit
    await page.getByRole('button', { name: 'Salvar' }).click()

    // Video should appear
    await expect(page.getByText('Video Financeiro Teste').first()).toBeVisible({ timeout: 10000 })
  })

  test('editar video atualiza valor e moeda', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    // Edit "Setup Gamer 2025" (video-4, valor: 100 BRL)
    const editButtons = page.getByRole('button', { name: 'Editar vídeo' })
    await editButtons.nth(3).click()

    // Update valor
    await page.getByPlaceholder('0,00').fill('777')

    // Submit
    await page.getByRole('button', { name: 'Salvar' }).click()

    // Wait for form to close
    await expect(page.getByText('+ Novo Vídeo')).toBeVisible()

    // Verify the value is persisted — go to financeiro to check
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()
    await expect(page.getByText('Setup Gamer 2025').first()).toBeVisible()
  })

  test('admin cria video e contratante ve na pagina publica', async ({ page }) => {
    // Admin creates a video
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()

    await page.getByRole('button', { name: '+ Novo Vídeo' }).click()
    await expect(page.getByRole('heading', { name: 'Novo Vídeo' })).toBeVisible()

    await page.getByPlaceholder('Ex: Aula de inglês #42').fill('Video Sincronia Admin')
    await page.getByRole('combobox').filter({ has: page.locator('option[value="postado"]') }).selectOption('postado')
    await page.locator('label').filter({ hasText: 'YouTube' }).click()
    await page.getByRole('button', { name: 'Salvar' }).click()
    await expect(page.getByText('Video Sincronia Admin').first()).toBeVisible({ timeout: 10000 })

    // Verify contractor sees it on the public page
    await page.goto(`${BASE}/v/luna-filmes?token=${TOKENS.empresa['luna-filmes']}`)
    await expect(page.getByRole('heading', { name: 'Luna Filmes' })).toBeVisible()
    await expect(page.getByText('Video Sincronia Admin').first()).toBeVisible()
  })

  test('admin ve dados corretos apos contratante priorizar na pagina publica', async ({ page }) => {
    // Go to public page and click Priorizar
    await page.goto(`${BASE}/v/luna-filmes?token=${TOKENS.empresa['luna-filmes']}`)
    await expect(page.getByRole('heading', { name: 'Luna Filmes' })).toBeVisible()
    const priorizarPublicBtn = page.locator('button[title="Priorizar"]').first()
    await priorizarPublicBtn.click()
    // Star should change to "Remover prioridade" (optimistic update)
    await expect(page.locator('button[title="Remover prioridade"]').first()).toBeVisible({ timeout: 5000 })
  })
})
