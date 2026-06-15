import { db, isLocalMode } from './init'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  setDoc,
  Timestamp,
  writeBatch,
} from 'firebase/firestore'
import type { Empresa, EmpresaFormData } from '@/types/empresa'
import type { Pessoa, PessoaFormData } from '@/types/pessoa'
import type { Video, VideoFormData, VideoStatus } from '@/types/video'
import type { Config } from '@/types/config'
import { nanoid } from 'nanoid'

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function generateToken(): string {
  return nanoid(32)
}

// ─── Local mode helpers ────────────────────────────────

function getLocalEmpresas(): any[] {
  return JSON.parse(localStorage.getItem('luna_empresas') || '[]')
}

function setLocalEmpresas(empresas: any[]) {
  localStorage.setItem('luna_empresas', JSON.stringify(empresas))
}

function getLocalPessoas(empresaId: string): any[] {
  return JSON.parse(localStorage.getItem(`luna_pessoas_${empresaId}`) || '[]')
}

function setLocalPessoas(empresaId: string, pessoas: any[]) {
  localStorage.setItem(`luna_pessoas_${empresaId}`, JSON.stringify(pessoas))
}

function getLocalVideos(empresaId: string, pessoaId: string): any[] {
  return JSON.parse(localStorage.getItem(`luna_videos_${empresaId}_${pessoaId}`) || '[]')
}

function setLocalVideos(empresaId: string, pessoaId: string, videos: any[]) {
  localStorage.setItem(`luna_videos_${empresaId}_${pessoaId}`, JSON.stringify(videos))
}

// ─── Seed data ─────────────────────────────────────────

function t(base: string) { return base + '0'.repeat(32 - base.length) }

function initializeLocalData() {
  if (localStorage.getItem('luna_empresas')) return

  const config: Config = { canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'] }
  localStorage.setItem('luna_config', JSON.stringify(config))

  const now = Date.now()
  const day = 24 * 60 * 60 * 1000

  const empresas = [
    { id: 'empresa-1', nome: 'Luna Filmes', slug: 'luna-filmes', token: t('luna-filmes-tkn-'), criadoEm: new Date(now - 30 * day).toISOString() },
    { id: 'empresa-2', nome: 'Pixel Produtora', slug: 'pixel-produtora', token: t('pixel-produtora-tkn-'), criadoEm: new Date(now - 15 * day).toISOString() },
    { id: 'empresa-3', nome: 'Studio Zen', slug: 'studio-zen', token: t('studio-zen-tkn-'), criadoEm: new Date(now - 7 * day).toISOString() },
  ]
  setLocalEmpresas(empresas)

  const pessoas1 = [
    { id: 'pessoa-1', nome: 'Ana Silva', token: t('ana-silva-tkn-'), empresaId: 'empresa-1', ordem: 0, criadoEm: new Date(now - 25 * day).toISOString() },
    { id: 'pessoa-2', nome: 'Carlos Oliveira', token: t('carlos-oliveira-tkn-'), empresaId: 'empresa-1', ordem: 1, criadoEm: new Date(now - 20 * day).toISOString() },
    { id: 'pessoa-3', nome: 'Beatriz Costa', token: t('beatriz-costa-tkn-'), empresaId: 'empresa-1', ordem: 2, criadoEm: new Date(now - 18 * day).toISOString() },
  ]
  setLocalPessoas('empresa-1', pessoas1)

  const pessoas2 = [
    { id: 'pessoa-4', nome: 'Mariana Santos', token: t('mariana-santos-tkn-'), empresaId: 'empresa-2', ordem: 0, criadoEm: new Date(now - 10 * day).toISOString() },
    { id: 'pessoa-5', nome: 'Pedro Costa', token: t('pedro-costa-tkn-'), empresaId: 'empresa-2', ordem: 1, criadoEm: new Date(now - 8 * day).toISOString() },
    { id: 'pessoa-6', nome: 'Lucas Almeida', token: t('lucas-almeida-tkn-'), empresaId: 'empresa-2', ordem: 2, criadoEm: new Date(now - 6 * day).toISOString() },
  ]
  setLocalPessoas('empresa-2', pessoas2)

  const pessoas3 = [
    { id: 'pessoa-7', nome: 'Julia Lima', token: t('julia-lima-tkn-'), empresaId: 'empresa-3', ordem: 0, criadoEm: new Date(now - 5 * day).toISOString() },
    { id: 'pessoa-8', nome: 'Rafael Torres', token: t('rafael-torres-tkn-'), empresaId: 'empresa-3', ordem: 1, criadoEm: new Date(now - 3 * day).toISOString() },
  ]
  setLocalPessoas('empresa-3', pessoas3)

  setLocalVideos('empresa-1', 'pessoa-1', [
    { id: 'video-1', titulo: 'Review Novo Smartphone', status: 'postado', ordem: 0, dataPostagem: new Date(now - 7 * day).toISOString(), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Thumbnail aprovada pelo cliente. Performance acima da média no primeiro dia.', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 14 * day).toISOString() },
    { id: 'video-2', titulo: 'Tutorial Vue 3 + Firebase', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: 'Esperando feedback do roteiro', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 5 * day).toISOString() },
    { id: 'video-3', titulo: 'Vlog Trabalhando Home Office', status: 'revisao', ordem: 2, dataPostagem: null, canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Ajustar transição no minuto 3:20', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 3 * day).toISOString() },
    { id: 'video-4', titulo: 'Setup Gamer 2025', status: 'gravado', ordem: 3, dataPostagem: null, canais: ['YouTube', 'Facebook'], ads: true, observacoes: '', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 1 * day).toISOString() },
  ])

  setLocalVideos('empresa-1', 'pessoa-2', [
    { id: 'video-5', titulo: 'Unboxing Câmera Sony', status: 'revisao', ordem: 0, dataPostagem: null, canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Revisar corte final — cliente solicita versão estendida', pessoaId: 'pessoa-2', empresaId: 'empresa-1', criadoEm: new Date(now - 3 * day).toISOString() },
    { id: 'video-6', titulo: 'Dicas de Edição no Premiere', status: 'gravado', ordem: 1, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: 'Material bruto capturado, esperando B-roll do cliente', pessoaId: 'pessoa-2', empresaId: 'empresa-1', criadoEm: new Date(now - 1 * day).toISOString() },
  ])

  setLocalVideos('empresa-1', 'pessoa-3', [
    { id: 'video-7', titulo: 'Comparativo iPhone vs Android', status: 'postado', ordem: 0, dataPostagem: new Date(now - 4 * day).toISOString(), canais: ['YouTube', 'TikTok'], ads: true, observacoes: 'Melhor desempenho do canal até agora', pessoaId: 'pessoa-3', empresaId: 'empresa-1', criadoEm: new Date(now - 10 * day).toISOString() },
    { id: 'video-8', titulo: 'Montando PC Gamer Custo-Benefício', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram', 'Facebook'], ads: true, observacoes: 'Roteiro em revisão pelo patrocinador', pessoaId: 'pessoa-3', empresaId: 'empresa-1', criadoEm: new Date(now - 2 * day).toISOString() },
  ])

  setLocalVideos('empresa-2', 'pessoa-4', [])

  setLocalVideos('empresa-2', 'pessoa-5', [
    { id: 'video-9', titulo: 'Make Tutorial: Carnaval', status: 'postado', ordem: 0, dataPostagem: new Date(now - 2 * day).toISOString(), canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Alta performance! 50k views em 24h', pessoaId: 'pessoa-5', empresaId: 'empresa-2', criadoEm: new Date(now - 10 * day).toISOString() },
    { id: 'video-10', titulo: 'Skincare Routine 2025', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Inserir cards de produtos na descrição', pessoaId: 'pessoa-5', empresaId: 'empresa-2', criadoEm: new Date(now - 4 * day).toISOString() },
    { id: 'video-11', titulo: 'Haul Renner: Promoção de Inverno', status: 'gravado', ordem: 2, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: '', pessoaId: 'pessoa-5', empresaId: 'empresa-2', criadoEm: new Date(now - 1 * day).toISOString() },
  ])

  setLocalVideos('empresa-2', 'pessoa-6', [
    { id: 'video-12', titulo: 'Análise Tática Futebol BR', status: 'revisao', ordem: 0, dataPostagem: null, canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Aguardando aprovação do patrocinador — prazo: sexta', pessoaId: 'pessoa-6', empresaId: 'empresa-2', criadoEm: new Date(now - 6 * day).toISOString() },
    { id: 'video-13', titulo: 'Highlights da Semana', status: 'gravado', ordem: 1, dataPostagem: null, canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Legendas pendentes — contratar legendador', pessoaId: 'pessoa-6', empresaId: 'empresa-2', criadoEm: new Date(now - 2 * day).toISOString() },
  ])

  setLocalVideos('empresa-3', 'pessoa-7', [
    { id: 'video-14', titulo: 'Receita Fit Panqueca de Banana', status: 'postado', ordem: 0, dataPostagem: new Date(now - 1 * day).toISOString(), canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Boa recepção nos comentários', pessoaId: 'pessoa-7', empresaId: 'empresa-3', criadoEm: new Date(now - 5 * day).toISOString() },
    { id: 'video-15', titulo: 'Meditação Guiada 10 Minutos', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Gravar áudio em estúdio — microfone condensador', pessoaId: 'pessoa-7', empresaId: 'empresa-3', criadoEm: new Date(now - 2 * day).toISOString() },
  ])

  setLocalVideos('empresa-3', 'pessoa-8', [
    { id: 'video-16', titulo: 'Alongamento para Escritório', status: 'revisao', ordem: 0, dataPostagem: null, canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'], ads: false, observacoes: 'Verificar direitos musicais da trilha sonora', pessoaId: 'pessoa-8', empresaId: 'empresa-3', criadoEm: new Date(now - 3 * day).toISOString() },
  ])
}

if (isLocalMode) {
  initializeLocalData()
}

// ─── Empresas ───────────────────────────────────────────

export async function listarEmpresas(): Promise<Empresa[]> {
  if (isLocalMode) {
    return getLocalEmpresas().map((e: any) => ({ ...e, criadoEm: new Date(e.criadoEm) }))
  }
  const snapshot = await getDocs(collection(db!, 'empresas'))
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Empresa))
}

export async function criarEmpresa(data: EmpresaFormData): Promise<Empresa> {
  if (isLocalMode) {
    const empresas = getLocalEmpresas()
    const empresa = {
      id: nanoid(20),
      nome: data.nome,
      slug: slugify(data.nome),
      token: generateToken(),
      criadoEm: new Date().toISOString(),
    }
    empresas.push(empresa)
    setLocalEmpresas(empresas)
    return { ...empresa, criadoEm: new Date(empresa.criadoEm) }
  }
  const docRef = await addDoc(collection(db!, 'empresas'), {
    nome: data.nome,
    slug: slugify(data.nome),
    token: generateToken(),
    criadoEm: Timestamp.now(),
  })
  const snap = await getDoc(docRef)
  return { id: docRef.id, ...snap.data() } as Empresa
}

export async function atualizarEmpresa(id: string, data: Partial<EmpresaFormData>) {
  if (isLocalMode) {
    const empresas = getLocalEmpresas()
    const index = empresas.findIndex((e: any) => e.id === id)
    if (index !== -1) {
      empresas[index] = { ...empresas[index], ...data }
      setLocalEmpresas(empresas)
    }
    return
  }
  await updateDoc(doc(db!, 'empresas', id), data)
}

export async function excluirEmpresa(id: string) {
  if (isLocalMode) {
    const empresas = getLocalEmpresas().filter((e: any) => e.id !== id)
    setLocalEmpresas(empresas)
    return
  }
  await deleteDoc(doc(db!, 'empresas', id))
}

export async function getEmpresaByToken(token: string): Promise<Empresa | null> {
  if (isLocalMode) {
    const empresas = getLocalEmpresas()
    const found = empresas.find((e: any) => e.token === token)
    return found ? { ...found, criadoEm: new Date(found.criadoEm) } : null
  }
  const q = query(collection(db!, 'empresas'), where('token', '==', token))
  const snap = await getDocs(q)
  if (snap.empty) return null
  const d = snap.docs[0]
  return { id: d.id, ...d.data() } as Empresa
}

export async function getEmpresaById(id: string): Promise<Empresa | null> {
  if (isLocalMode) {
    const empresas = getLocalEmpresas()
    const found = empresas.find((e: any) => e.id === id)
    return found ? { ...found, criadoEm: new Date(found.criadoEm) } : null
  }
  const snap = await getDoc(doc(db!, 'empresas', id))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() } as Empresa
}

// ─── Pessoas ────────────────────────────────────────────

export async function listarPessoas(empresaId: string): Promise<Pessoa[]> {
  if (isLocalMode) {
    const pessoas = getLocalPessoas(empresaId)
    return pessoas
      .sort((a: any, b: any) => a.ordem - b.ordem)
      .map((p: any) => ({ ...p, criadoEm: new Date(p.criadoEm) }))
  }
  const q = query(
    collection(db!, 'empresas', empresaId, 'pessoas'),
    orderBy('ordem', 'asc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Pessoa))
}

export async function criarPessoa(empresaId: string, data: PessoaFormData): Promise<Pessoa> {
  if (isLocalMode) {
    const pessoas = getLocalPessoas(empresaId)
    const ordem = pessoas.length
    const pessoa = {
      id: nanoid(20),
      nome: data.nome,
      token: generateToken(),
      empresaId,
      ordem,
      criadoEm: new Date().toISOString(),
    }
    pessoas.push(pessoa)
    setLocalPessoas(empresaId, pessoas)
    return { ...pessoa, criadoEm: new Date(pessoa.criadoEm) }
  }
  const pessoas = await listarPessoas(empresaId)
  const ordem = pessoas.length
  const docRef = await addDoc(collection(db!, 'empresas', empresaId, 'pessoas'), {
    nome: data.nome,
    token: generateToken(),
    ordem,
    criadoEm: Timestamp.now(),
  })
  const snap = await getDoc(docRef)
  return { id: docRef.id, empresaId, ...snap.data() } as Pessoa
}

export async function atualizarPessoa(empresaId: string, pessoaId: string, data: Partial<PessoaFormData>) {
  if (isLocalMode) {
    const pessoas = getLocalPessoas(empresaId)
    const index = pessoas.findIndex((p: any) => p.id === pessoaId)
    if (index !== -1) {
      pessoas[index] = { ...pessoas[index], ...data }
      setLocalPessoas(empresaId, pessoas)
    }
    return
  }
  await updateDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId), data)
}

export async function excluirPessoa(empresaId: string, pessoaId: string) {
  if (isLocalMode) {
    const pessoas = getLocalPessoas(empresaId).filter((p: any) => p.id !== pessoaId)
    setLocalPessoas(empresaId, pessoas)
    return
  }
  await deleteDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId))
}

export async function getPessoaById(empresaId: string, pessoaId: string): Promise<Pessoa | null> {
  if (isLocalMode) {
    const pessoas = getLocalPessoas(empresaId)
    const found = pessoas.find((p: any) => p.id === pessoaId)
    return found ? { ...found, criadoEm: new Date(found.criadoEm) } : null
  }
  const snap = await getDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId))
  if (!snap.exists()) return null
  return { id: snap.id, empresaId, ...snap.data() } as Pessoa
}

export async function getPessoaByToken(token: string): Promise<{ pessoa: Pessoa; empresaId: string } | null> {
  if (isLocalMode) {
    const empresas = getLocalEmpresas()
    for (const empresa of empresas) {
      const pessoas = getLocalPessoas(empresa.id)
      const found = pessoas.find((p: any) => p.token === token)
      if (found) {
        return { pessoa: { ...found, criadoEm: new Date(found.criadoEm) }, empresaId: empresa.id }
      }
    }
    return null
  }
  const empresasSnap = await getDocs(collection(db!, 'empresas'))
  for (const empresaDoc of empresasSnap.docs) {
    const q = query(
      collection(db!, 'empresas', empresaDoc.id, 'pessoas'),
      where('token', '==', token)
    )
    const snap = await getDocs(q)
    if (!snap.empty) {
      const d = snap.docs[0]
      return { pessoa: { id: d.id, ...d.data() } as Pessoa, empresaId: empresaDoc.id }
    }
  }
  return null
}

// ─── Videos ─────────────────────────────────────────────

export async function listarVideos(empresaId: string, pessoaId: string): Promise<Video[]> {
  if (isLocalMode) {
    const videos = getLocalVideos(empresaId, pessoaId)
    return videos
      .sort((a: any, b: any) => a.ordem - b.ordem)
      .map((v: any) => ({
        ...v,
        dataPostagem: v.dataPostagem ? new Date(v.dataPostagem) : null,
        criadoEm: new Date(v.criadoEm),
      }))
  }
  const q = query(
    collection(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos'),
    orderBy('ordem', 'asc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => {
    const data = d.data()
    return {
      id: d.id,
      empresaId,
      pessoaId,
      titulo: data.titulo,
      status: data.status as VideoStatus,
      ordem: data.ordem,
      dataPostagem: data.dataPostagem?.toDate() ?? null,
      canais: data.canais ?? [],
      ads: data.ads ?? false,
      observacoes: data.observacoes ?? '',
      criadoEm: data.criadoEm?.toDate() ?? new Date(),
    } as Video
  })
}

export async function criarVideo(
  empresaId: string,
  pessoaId: string,
  data: VideoFormData
): Promise<Video> {
  if (isLocalMode) {
    const videos = getLocalVideos(empresaId, pessoaId)
    const ordem = videos.length
    const video = {
      id: nanoid(20),
      titulo: data.titulo,
      status: data.status,
      ordem,
      dataPostagem: data.dataPostagem ? new Date(data.dataPostagem).toISOString() : null,
      canais: data.canais,
      ads: data.ads,
      observacoes: data.observacoes,
      pessoaId,
      empresaId,
      criadoEm: new Date().toISOString(),
    }
    videos.push(video)
    setLocalVideos(empresaId, pessoaId, videos)
    return {
      ...video,
      dataPostagem: video.dataPostagem ? new Date(video.dataPostagem) : null,
      criadoEm: new Date(video.criadoEm),
    }
  }
  const videos = await listarVideos(empresaId, pessoaId)
  const ordem = videos.length
  const docRef = await addDoc(
    collection(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos'),
    {
      titulo: data.titulo,
      status: data.status,
      ordem,
      dataPostagem: data.dataPostagem ? Timestamp.fromDate(new Date(data.dataPostagem)) : null,
      canais: data.canais,
      ads: data.ads,
      observacoes: data.observacoes,
      criadoEm: Timestamp.now(),
    }
  )
  const snap = await getDoc(docRef)
  const snapData = snap.data()!
  return {
    id: docRef.id,
    empresaId,
    pessoaId,
    titulo: snapData.titulo,
    status: snapData.status as VideoStatus,
    ordem: snapData.ordem,
    dataPostagem: snapData.dataPostagem?.toDate() ?? null,
    canais: snapData.canais ?? [],
    ads: snapData.ads ?? false,
    observacoes: snapData.observacoes ?? '',
    criadoEm: snapData.criadoEm?.toDate() ?? new Date(),
  } as Video
}

export async function atualizarVideo(
  empresaId: string,
  pessoaId: string,
  videoId: string,
  data: Partial<VideoFormData>
) {
  if (isLocalMode) {
    const videos = getLocalVideos(empresaId, pessoaId)
    const index = videos.findIndex((v: any) => v.id === videoId)
    if (index !== -1) {
      const updatePayload: Record<string, any> = {}
      if (data.titulo !== undefined) updatePayload.titulo = data.titulo
      if (data.status !== undefined) updatePayload.status = data.status
      if (data.canais !== undefined) updatePayload.canais = data.canais
      if (data.ads !== undefined) updatePayload.ads = data.ads
      if (data.observacoes !== undefined) updatePayload.observacoes = data.observacoes
      if (data.dataPostagem !== undefined) {
        updatePayload.dataPostagem = data.dataPostagem
          ? new Date(data.dataPostagem).toISOString()
          : null
      }
      videos[index] = { ...videos[index], ...updatePayload }
      setLocalVideos(empresaId, pessoaId, videos)
    }
    return
  }
  const updatePayload: Record<string, any> = {}
  if (data.titulo !== undefined) updatePayload.titulo = data.titulo
  if (data.status !== undefined) updatePayload.status = data.status
  if (data.canais !== undefined) updatePayload.canais = data.canais
  if (data.ads !== undefined) updatePayload.ads = data.ads
  if (data.observacoes !== undefined) updatePayload.observacoes = data.observacoes
  if (data.dataPostagem !== undefined) {
    updatePayload.dataPostagem = data.dataPostagem
      ? Timestamp.fromDate(new Date(data.dataPostagem))
      : null
  }
  await updateDoc(
    doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', videoId),
    updatePayload
  )
}

export async function excluirVideo(empresaId: string, pessoaId: string, videoId: string) {
  if (isLocalMode) {
    const videos = getLocalVideos(empresaId, pessoaId).filter((v: any) => v.id !== videoId)
    setLocalVideos(empresaId, pessoaId, videos)
    return
  }
  await deleteDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', videoId))
}

export async function reordenarVideos(
  empresaId: string,
  pessoaId: string,
  videoIds: string[]
) {
  if (isLocalMode) {
    const videos = getLocalVideos(empresaId, pessoaId)
    const updated = videos.map((v: any) => {
      const idx = videoIds.indexOf(v.id)
      return { ...v, ordem: idx !== -1 ? idx : v.ordem }
    })
    updated.sort((a: any, b: any) => a.ordem - b.ordem)
    setLocalVideos(empresaId, pessoaId, updated)
    return
  }
  const batch = writeBatch(db!)
  videoIds.forEach((videoId, index) => {
    batch.update(
      doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', videoId),
      { ordem: index }
    )
  })
  await batch.commit()
}

export async function listarTodosVideos(): Promise<Video[]> {
  if (isLocalMode) {
    const empresas = getLocalEmpresas()
    const todos: Video[] = []
    for (const empresa of empresas) {
      const pessoas = getLocalPessoas(empresa.id)
      for (const pessoa of pessoas) {
        const videos = getLocalVideos(empresa.id, pessoa.id)
        for (const v of videos) {
          todos.push({
            ...v,
            dataPostagem: v.dataPostagem ? new Date(v.dataPostagem) : null,
            criadoEm: new Date(v.criadoEm),
          })
        }
      }
    }
    return todos
  }
  const empresasSnap = await getDocs(collection(db!, 'empresas'))
  const todos: Video[] = []
  for (const empresaDoc of empresasSnap.docs) {
    const pessoasSnap = await getDocs(collection(db!, 'empresas', empresaDoc.id, 'pessoas'))
    for (const pessoaDoc of pessoasSnap.docs) {
      const videosSnap = await getDocs(
        collection(db!, 'empresas', empresaDoc.id, 'pessoas', pessoaDoc.id, 'videos')
      )
      for (const videoDoc of videosSnap.docs) {
        const data = videoDoc.data()
        todos.push({
          id: videoDoc.id,
          empresaId: empresaDoc.id,
          pessoaId: pessoaDoc.id,
          titulo: data.titulo,
          status: data.status as VideoStatus,
          ordem: data.ordem,
          dataPostagem: data.dataPostagem?.toDate() ?? null,
          canais: data.canais ?? [],
          ads: data.ads ?? false,
          observacoes: data.observacoes ?? '',
          criadoEm: data.criadoEm?.toDate() ?? new Date(),
        })
      }
    }
  }
  return todos
}

export async function listarVideosPorEmpresa(empresaId: string): Promise<(Video & { pessoaNome: string })[]> {
  if (isLocalMode) {
    const pessoas = getLocalPessoas(empresaId)
    const todos: (Video & { pessoaNome: string })[] = []
    for (const pessoa of pessoas) {
      const videos = getLocalVideos(empresaId, pessoa.id)
      for (const v of videos) {
        todos.push({
          ...v,
          dataPostagem: v.dataPostagem ? new Date(v.dataPostagem) : null,
          criadoEm: new Date(v.criadoEm),
          pessoaNome: pessoa.nome,
        })
      }
    }
    return todos.sort((a, b) => a.ordem - b.ordem)
  }
  const pessoasSnap = await getDocs(
    query(collection(db!, 'empresas', empresaId, 'pessoas'), orderBy('ordem', 'asc'))
  )
  const promises = pessoasSnap.docs.map(async (pessoaDoc) => {
    const videosSnap = await getDocs(
      query(
        collection(db!, 'empresas', empresaId, 'pessoas', pessoaDoc.id, 'videos'),
        orderBy('ordem', 'asc')
      )
    )
    return videosSnap.docs.map((videoDoc) => {
      const data = videoDoc.data()
      return {
        id: videoDoc.id,
        empresaId,
        pessoaId: pessoaDoc.id,
        pessoaNome: pessoaDoc.data().nome,
        titulo: data.titulo,
        status: data.status as VideoStatus,
        ordem: data.ordem,
        dataPostagem: data.dataPostagem?.toDate() ?? null,
        canais: data.canais ?? [],
        ads: data.ads ?? false,
        observacoes: data.observacoes ?? '',
        criadoEm: data.criadoEm?.toDate() ?? new Date(),
      } as Video & { pessoaNome: string }
    })
  })
  const nested = await Promise.all(promises)
  return nested.flat()
}

// ─── Config ─────────────────────────────────────────────

const CONFIG_DOC = 'global'

export async function getConfig(): Promise<Config> {
  if (isLocalMode) {
    const stored = localStorage.getItem('luna_config')
    if (!stored) {
      const defaultConfig: Config = { canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'] }
      localStorage.setItem('luna_config', JSON.stringify(defaultConfig))
      return defaultConfig
    }
    return JSON.parse(stored)
  }
  const snap = await getDoc(doc(db!, 'config', CONFIG_DOC))
  if (!snap.exists()) {
    await setDoc(doc(db!, 'config', CONFIG_DOC), { canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'] })
    return { canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'] }
  }
  return snap.data() as Config
}

export async function atualizarCanais(canais: string[]) {
  if (isLocalMode) {
    localStorage.setItem('luna_config', JSON.stringify({ canais }))
    return
  }
  await updateDoc(doc(db!, 'config', CONFIG_DOC), { canais })
}
