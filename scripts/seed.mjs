import admin from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'

const adminAuth = getAuth(admin.initializeApp({ projectId: 'test' }))

const AUTH_URL = 'http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1'
const FS_URL = 'http://127.0.0.1:8080/v1/projects/test/databases/(default)/documents'

function t(base) { return base + '0'.repeat(32 - base.length) }

const now = Date.now()
const day = 24 * 60 * 60 * 1000

function ts(date) { return { timestampValue: new Date(date).toISOString() } }
function str(v) { return { stringValue: v } }
function num(v) { return { doubleValue: v } }
function bool(v) { return { booleanValue: v } }
function arr(values) { return { arrayValue: { values } } }
function nullVal() { return { nullValue: null } }

async function getToken() {
  const res = await fetch(`${AUTH_URL}/accounts:signInWithPassword?key=test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'lunaheloisaa82@gmail.com', password: 'admin123', returnSecureToken: true }),
  })
  const data = await res.json()
  if (!data.idToken) throw new Error('Auth failed: ' + JSON.stringify(data))
  return data.idToken
}

async function patchDoc(token, path, fields) {
  // Delete existing document first to ensure CREATE (not UPDATE)
  await fetch(`${FS_URL}/${path}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` },
  }).catch(() => {})

  const body = JSON.stringify({ fields })
  const res = await fetch(`${FS_URL}/${path}`, {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body,
  })
  const data = await res.json()
  if (data.error) throw new Error(`Write ${path}: ${data.error.message}`)
  return data
}

const EMPRESAS = [
  { id: 'empresa-1', nome: 'Luna Filmes', slug: 'luna-filmes', token: t('luna-filmes-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 30 * day) },
  { id: 'empresa-2', nome: 'Pixel Produtora', slug: 'pixel-produtora', token: t('pixel-produtora-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 15 * day) },
  { id: 'empresa-3', nome: 'Studio Zen', slug: 'studio-zen', token: t('studio-zen-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 7 * day) },
  { id: 'empresa-4', nome: 'Agência Click', slug: 'agencia-click', token: t('agencia-click-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 5 * day) },
  { id: 'empresa-5', nome: 'CineMakers', slug: 'cine-makers', token: t('cine-makers-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 3 * day) },
]

const PESSOAS = [
  { emp: 'empresa-1', items: [
    { id: 'pessoa-1', nome: 'Ana Silva', token: t('ana-silva-tkn-'), ordem: 0, criadoEm: new Date(now - 25 * day) },
    { id: 'pessoa-2', nome: 'Carlos Oliveira', token: t('carlos-oliveira-tkn-'), ordem: 1, criadoEm: new Date(now - 20 * day) },
    { id: 'pessoa-3', nome: 'Beatriz Costa', token: t('beatriz-costa-tkn-'), ordem: 2, criadoEm: new Date(now - 18 * day) },
    { id: 'pessoa-13', nome: 'Daniela Martins', token: t('daniela-martins-tkn-'), ordem: 3, criadoEm: new Date(now - 10 * day) },
  ]},
  { emp: 'empresa-2', items: [
    { id: 'pessoa-4', nome: 'Mariana Santos', token: t('mariana-santos-tkn-'), ordem: 0, criadoEm: new Date(now - 10 * day) },
    { id: 'pessoa-5', nome: 'Pedro Costa', token: t('pedro-costa-tkn-'), ordem: 1, criadoEm: new Date(now - 8 * day) },
    { id: 'pessoa-6', nome: 'Lucas Almeida', token: t('lucas-almeida-tkn-'), ordem: 2, criadoEm: new Date(now - 6 * day) },
  ]},
  { emp: 'empresa-3', items: [
    { id: 'pessoa-7', nome: 'Julia Lima', token: t('julia-lima-tkn-'), ordem: 0, criadoEm: new Date(now - 5 * day) },
    { id: 'pessoa-8', nome: 'Rafael Torres', token: t('rafael-torres-tkn-'), ordem: 1, criadoEm: new Date(now - 3 * day) },
    { id: 'pessoa-14', nome: 'Camila Ribeiro', token: t('camila-ribeiro-tkn-'), ordem: 2, criadoEm: new Date(now - 2 * day) },
  ]},
  { emp: 'empresa-4', items: [
    { id: 'pessoa-9', nome: 'Fernanda Rocha', token: t('fernanda-rocha-tkn-'), ordem: 0, criadoEm: new Date(now - 4 * day) },
    { id: 'pessoa-10', nome: 'Thiago Martins', token: t('thiago-martins-tkn-'), ordem: 1, criadoEm: new Date(now - 3 * day) },
  ]},
  { emp: 'empresa-5', items: [
    { id: 'pessoa-11', nome: 'Amanda Souza', token: t('amanda-souza-tkn-'), ordem: 0, criadoEm: new Date(now - 2 * day) },
    { id: 'pessoa-12', nome: 'Gabriel Faria', token: t('gabriel-faria-tkn-'), ordem: 1, criadoEm: new Date(now - 1 * day) },
  ]},
]

function v(id, titulo, status, ordem, o = {}) {
  return { id, titulo, status, ordem, dataPostagem: null, canais: [], ads: false, observacoes: '', criadoEm: new Date(now), atualizadoEm: new Date(now), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 0, moeda: 'BRL', ...o }
}

const VIDEOS = [
  { emp: 'empresa-1', pes: 'pessoa-1', items: [
    v('video-1', 'Review Novo Smartphone', 'postado', 0, { dataPostagem: new Date(now - 7 * day), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Thumbnail aprovada pelo cliente. Performance acima da média no primeiro dia.', criadoEm: new Date(now - 14 * day), atualizadoEm: new Date(now - 14 * day), valor: 500, moeda: 'BRL' }),
    v('video-2', 'Tutorial Vue 3 + Firebase', 'editando', 1, { canais: ['YouTube'], observacoes: 'Esperando feedback do roteiro', criadoEm: new Date(now - 5 * day), atualizadoEm: new Date(now - 5 * day), valor: 250, moeda: 'BRL' }),
    v('video-3', 'Vlog Trabalhando Home Office', 'revisao', 2, { canais: ['Instagram', 'TikTok'], observacoes: 'Ajustar transição no minuto 3:20', criadoEm: new Date(now - 3 * day), atualizadoEm: new Date(now - 3 * day), priorizado: true, linkMaterialBruto: 'https://drive.google.com/drive/folders/raw-material-1', valor: 180, moeda: 'USD' }),
    v('video-4', 'Setup Gamer 2025', 'gravado', 3, { canais: ['YouTube', 'Facebook'], ads: true, criadoEm: new Date(now - 1 * day), atualizadoEm: new Date(now - 1 * day), valor: 100, moeda: 'BRL' }),
    v('video-17', 'Review Fones de Ouvido 2025', 'editando', 4, { dataPostagem: new Date(now + 7 * day), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Aguardando roteiro do patrocinador', criadoEm: new Date(now - 1 * day), atualizadoEm: new Date(now - 1 * day), valor: 400, moeda: 'USD' }),
  ]},
  { emp: 'empresa-1', pes: 'pessoa-2', items: [
    v('video-5', 'Unboxing Câmera Sony', 'revisao', 0, { canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Revisar corte final — cliente solicita versão estendida', criadoEm: new Date(now - 3 * day), atualizadoEm: new Date(now - 3 * day), valor: 200, moeda: 'USD' }),
    v('video-6', 'Dicas de Edição no Premiere', 'gravado', 1, { canais: ['YouTube'], observacoes: 'Material bruto capturado, esperando B-roll do cliente', criadoEm: new Date(now - 1 * day), atualizadoEm: new Date(now - 1 * day), valor: 80, moeda: 'BRL' }),
  ]},
  { emp: 'empresa-1', pes: 'pessoa-3', items: [
    v('video-7', 'Comparativo iPhone vs Android', 'postado', 0, { dataPostagem: new Date(now - 4 * day), canais: ['YouTube', 'TikTok'], ads: true, observacoes: 'Melhor desempenho do canal até agora', criadoEm: new Date(now - 10 * day), atualizadoEm: new Date(now - 10 * day), linkVideoFinal: 'https://drive.google.com/file/d/final-video-7', valor: 1200, moeda: 'BRL' }),
    v('video-8', 'Montando PC Gamer Custo-Benefício', 'editando', 1, { canais: ['YouTube', 'Instagram', 'Facebook'], ads: true, observacoes: 'Roteiro em revisão pelo patrocinador', criadoEm: new Date(now - 2 * day), atualizadoEm: new Date(now - 2 * day), valor: 220, moeda: 'EUR' }),
  ]},
  { emp: 'empresa-1', pes: 'pessoa-13', items: [
    v('video-28', 'Entrevista com Especialista', 'postado', 0, { dataPostagem: new Date(now + 14 * day), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Entrevista gravada, aguardando edição final', criadoEm: new Date(now - 5 * day), atualizadoEm: new Date(now - 2 * day), priorizado: true, valor: 2500, moeda: 'BRL' }),
    v('video-29', 'Vlog Diário: Trabalho Criativo', 'editando', 1, { canais: ['Instagram', 'TikTok'], observacoes: 'Inserir legendas e chamadas', criadoEm: new Date(now - 3 * day), atualizadoEm: new Date(now - 1 * day), valor: 350, moeda: 'BRL' }),
  ]},
  { emp: 'empresa-2', pes: 'pessoa-4', items: [] },
  { emp: 'empresa-2', pes: 'pessoa-5', items: [
    v('video-9', 'Make Tutorial: Carnaval', 'postado', 0, { dataPostagem: new Date(now - 2 * day), canais: ['Instagram', 'TikTok'], observacoes: 'Alta performance! 50k views em 24h', criadoEm: new Date(now - 10 * day), atualizadoEm: new Date(now - 10 * day), valor: 150, moeda: 'USD' }),
    v('video-10', 'Skincare Routine 2025', 'editando', 1, { canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Inserir cards de produtos na descrição', criadoEm: new Date(now - 4 * day), atualizadoEm: new Date(now - 4 * day), valor: 280, moeda: 'USD' }),
    v('video-11', 'Haul Renner: Promoção de Inverno', 'gravado', 2, { canais: ['YouTube'], criadoEm: new Date(now - 1 * day), atualizadoEm: new Date(now - 1 * day), valor: 120, moeda: 'BRL' }),
  ]},
  { emp: 'empresa-2', pes: 'pessoa-6', items: [
    v('video-12', 'Análise Tática Futebol BR', 'revisao', 0, { canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Aguardando aprovação do patrocinador — prazo: sexta', criadoEm: new Date(now - 6 * day), atualizadoEm: new Date(now - 6 * day), priorizado: true, valor: 350, moeda: 'USD' }),
    v('video-13', 'Highlights da Semana', 'gravado', 1, { canais: ['Instagram', 'TikTok'], observacoes: 'Legendas pendentes — contratar legendador', criadoEm: new Date(now - 2 * day), atualizadoEm: new Date(now - 2 * day), valor: 90, moeda: 'BRL' }),
  ]},
  { emp: 'empresa-3', pes: 'pessoa-7', items: [
    v('video-14', 'Receita Fit Panqueca de Banana', 'postado', 0, { dataPostagem: new Date(now - 1 * day), canais: ['Instagram', 'TikTok'], observacoes: 'Boa recepção nos comentários', criadoEm: new Date(now - 5 * day), atualizadoEm: new Date(now - 5 * day), valor: 80, moeda: 'EUR' }),
    v('video-15', 'Meditação Guiada 10 Minutos', 'editando', 1, { canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Gravar áudio em estúdio — microfone condensador', criadoEm: new Date(now - 2 * day), atualizadoEm: new Date(now - 2 * day), valor: 150, moeda: 'EUR' }),
  ]},
  { emp: 'empresa-3', pes: 'pessoa-8', items: [
    v('video-16', 'Alongamento para Escritório', 'revisao', 0, { canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'], observacoes: 'Verificar direitos musicais da trilha sonora', criadoEm: new Date(now - 3 * day), atualizadoEm: new Date(now - 3 * day), valor: 120, moeda: 'EUR' }),
  ]},
  { emp: 'empresa-3', pes: 'pessoa-14', items: [
    v('video-30', 'Yoga para Iniciantes', 'gravado', 0, { canais: ['YouTube'], observacoes: 'Gravar takes adicionais do professor', criadoEm: new Date(now - 2 * day), atualizadoEm: new Date(now - 1 * day), linkMaterialBruto: 'https://drive.google.com/drive/folders/yoga-raw', valor: 60, moeda: 'EUR' }),
    v('video-31', 'Alimentação Consciente', 'revisao', 1, { canais: ['Instagram', 'TikTok'], observacoes: 'Ajustar cor do grading', criadoEm: new Date(now - 1 * day), atualizadoEm: new Date(now - 1 * day), valor: 95, moeda: 'EUR' }),
  ]},
  { emp: 'empresa-4', pes: 'pessoa-9', items: [
    v('video-18', 'Marketing Digital 2025', 'postado', 0, { dataPostagem: new Date(now - 1 * day), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Excelente engajamento no primeiro dia', criadoEm: new Date(now - 7 * day), atualizadoEm: new Date(now - 1 * day), linkVideoFinal: 'https://drive.google.com/file/d/final-video-18', valor: 3000, moeda: 'BRL' }),
    v('video-19', 'SEO para Iniciantes', 'editando', 1, { canais: ['YouTube'], observacoes: 'Adicionar exemplos práticos', criadoEm: new Date(now - 3 * day), atualizadoEm: new Date(now - 2 * day), priorizado: true, valor: 800, moeda: 'BRL' }),
    v('video-20', 'Case de Sucesso Cliente X', 'revisao', 2, { dataPostagem: new Date(now + 14 * day), canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Aguardando dados de resultados do cliente', criadoEm: new Date(now - 5 * day), atualizadoEm: new Date(now - 1 * day), linkMaterialBruto: 'https://drive.google.com/drive/folders/case-cliente-x', valor: 500, moeda: 'USD' }),
  ]},
  { emp: 'empresa-4', pes: 'pessoa-10', items: [
    v('video-21', 'Tráfego Pago: Guia Completo', 'gravado', 0, { canais: ['YouTube', 'Instagram', 'TikTok'], ads: true, observacoes: 'Material bruto capturado, iniciar edição', criadoEm: new Date(now - 2 * day), atualizadoEm: new Date(now - 1 * day), valor: 200, moeda: 'BRL' }),
    v('video-22', 'Copywriting para Redes', 'postado', 1, { dataPostagem: new Date(now - 3 * day), canais: ['Instagram'], observacoes: 'Bom alcance orgânico', criadoEm: new Date(now - 6 * day), atualizadoEm: new Date(now - 3 * day), valor: 450, moeda: 'BRL' }),
  ]},
  { emp: 'empresa-5', pes: 'pessoa-11', items: [
    v('video-23', 'Curta Metragem: Making Of', 'postado', 0, { dataPostagem: new Date(now - 5 * day), canais: ['YouTube'], observacoes: 'Melhor recepção da crítica até agora', criadoEm: new Date(now - 14 * day), atualizadoEm: new Date(now - 5 * day), priorizado: true, linkVideoFinal: 'https://drive.google.com/file/d/final-video-23', valor: 2000, moeda: 'BRL' }),
    v('video-24', 'Dicas de Direção', 'editando', 1, { canais: ['YouTube', 'Instagram'], observacoes: 'Roteiro em desenvolvimento', criadoEm: new Date(now - 3 * day), atualizadoEm: new Date(now - 1 * day), valor: 100, moeda: 'EUR' }),
    v('video-25', 'Roteiro Criativo Workshop', 'gravado', 2, { canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Material bruto de 2h, editar para 20min', criadoEm: new Date(now - 1 * day), atualizadoEm: new Date(now - 1 * day), linkMaterialBruto: 'https://drive.google.com/drive/folders/workshop-raw', valor: 150, moeda: 'BRL' }),
  ]},
  { emp: 'empresa-5', pes: 'pessoa-12', items: [
    v('video-26', 'Iluminação para Cena Noturna', 'revisao', 0, { canais: ['YouTube'], observacoes: 'Verificar consistência de cor entre cenas', criadoEm: new Date(now - 4 * day), atualizadoEm: new Date(now - 1 * day), valor: 120, moeda: 'USD' }),
    v('video-27', 'Equipamentos Essenciais 2025', 'gravado', 1, { canais: ['YouTube', 'Instagram', 'TikTok'], ads: true, observacoes: 'Adicionar links afiliados na descrição', criadoEm: new Date(now - 2 * day), atualizadoEm: new Date(now - 1 * day), valor: 80, moeda: 'USD' }),
  ]},
]

function toFields(o) {
  const fields = {}
  for (const [k, v] of Object.entries(o)) {
    if (v === null || v === undefined) fields[k] = nullVal()
    else if (typeof v === 'string') fields[k] = str(v)
    else if (typeof v === 'number') fields[k] = num(v)
    else if (typeof v === 'boolean') fields[k] = bool(v)
    else if (v instanceof Date) fields[k] = ts(v)
    else if (Array.isArray(v)) fields[k] = arr(v.map(i => typeof i === 'string' ? str(i) : i))
    else if (typeof v === 'object') fields[k] = toFields(v)
  }
  return fields
}

async function limparTudo(token) {
  // Delete any leftover test-created videos (xlsx import targets empresa-2/pessoa-4)
  for (const [empId, pesId] of [['empresa-2', 'pessoa-4'], ['empresa-1', 'pessoa-1']]) {
    const res = await fetch(`${FS_URL}/empresas/${empId}/pessoas/${pesId}/videos`, {
      headers: { 'Authorization': `Bearer ${token}` },
    })
    if (res.ok) {
      const data = await res.json()
      for (const doc of (data.documents || [])) {
        // doc.name already has full path: projects/.../documents/...
        await fetch(`http://127.0.0.1:8080/v1/${doc.name}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` },
        }).catch(() => {})
      }
    }
  }
}

async function criarUsuario() {
  try {
    await adminAuth.createUser({
      uid: 'admin-test',
      email: 'lunaheloisaa82@gmail.com',
      password: 'admin123',
      emailVerified: true,
    })
    console.log('Usuário criado com email_verified=true')
  } catch (e) {
    if (e.code === 'auth/email-already-exists') {
      const user = await adminAuth.getUserByEmail('lunaheloisaa82@gmail.com')
      if (!user.emailVerified) {
        await adminAuth.updateUser(user.uid, { emailVerified: true })
        console.log('email_verified atualizado')
      } else {
        console.log('Usuário já verificado')
      }
    } else {
      console.error('Erro ao criar usuário:', e.message)
    }
  }
}

async function seed() {
  // Create user first so getToken() works even on fresh emulator
  console.log('Criando usuário de teste...')
  await criarUsuario()

  const token = await getToken()
  console.log('Token obtido.')

  // Clean all existing data from previous test runs
  console.log('Limpando dados existentes...')
  await limparTudo(token)

  // Config
  console.log('Criando config...')
  await patchDoc(token, 'config/global', toFields({
    canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'],
    usdToBrl: 5.0,
    eurToBrl: 5.5,
  }))

  // Empresas
  for (const emp of EMPRESAS) {
    console.log(`Empresa: ${emp.nome}...`)
    const { id, ...data } = emp
    await patchDoc(token, `empresas/${id}`, toFields(data))
  }

  // Pessoas
  for (const grupo of PESSOAS) {
    for (const pes of grupo.items) {
      console.log(`  Pessoa: ${pes.nome}...`)
      const { id, ...data } = pes
      await patchDoc(token, `empresas/${grupo.emp}/pessoas/${id}`, toFields(data))
    }
  }

  // Videos
  for (const grupo of VIDEOS) {
    for (const vid of grupo.items) {
      console.log(`    Video: ${vid.titulo}...`)
      const { id, ...data } = vid
      await patchDoc(token, `empresas/${grupo.emp}/pessoas/${grupo.pes}/videos/${id}`, toFields(data))
    }
  }

  console.log('Seed concluído!')
}

seed().catch((err) => {
  console.error('Seed error:', err.message)
  process.exit(1)
})
