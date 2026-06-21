import { db } from './init'
import {
  collection,
  collectionGroup,
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
import type { Notificacao, NotificacaoAdmin } from '@/types/notificacao'
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

// ─── Empresas ───────────────────────────────────────────

export async function listarEmpresas(): Promise<Empresa[]> {
  const snapshot = await getDocs(collection(db!, 'empresas'))
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Empresa))
}

export async function criarEmpresa(data: EmpresaFormData): Promise<Empresa> {
  const docRef = await addDoc(collection(db!, 'empresas'), {
    nome: data.nome,
    slug: slugify(data.nome),
    token: generateToken(),
    locale: data.locale,
    criadoEm: Timestamp.now(),
  })
  const snap = await getDoc(docRef)
  return { id: docRef.id, ...snap.data() } as Empresa
}

export async function atualizarEmpresa(id: string, data: Partial<EmpresaFormData>) {
  await updateDoc(doc(db!, 'empresas', id), data)
}

export async function excluirEmpresa(id: string) {
  await deleteDoc(doc(db!, 'empresas', id))
}

export async function getEmpresaByToken(token: string): Promise<Empresa | null> {
  const q = query(collection(db!, 'empresas'), where('token', '==', token))
  const snap = await getDocs(q)
  if (snap.empty) return null
  const d = snap.docs[0]
  return { id: d.id, ...d.data() } as Empresa
}

export async function getEmpresaById(id: string): Promise<Empresa | null> {
  const snap = await getDoc(doc(db!, 'empresas', id))
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() } as Empresa
}

// ─── Pessoas ────────────────────────────────────────────

export async function listarPessoas(empresaId: string): Promise<Pessoa[]> {
  const q = query(
    collection(db!, 'empresas', empresaId, 'pessoas'),
    orderBy('ordem', 'asc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Pessoa))
}

export async function criarPessoa(empresaId: string, data: PessoaFormData): Promise<Pessoa> {
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
  await updateDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId), data)
}

export async function excluirPessoa(empresaId: string, pessoaId: string) {
  await deleteDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId))
}

export async function getPessoaById(empresaId: string, pessoaId: string): Promise<Pessoa | null> {
  const snap = await getDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId))
  if (!snap.exists()) return null
  return { id: snap.id, empresaId, ...snap.data() } as Pessoa
}

export async function getPessoaByToken(token: string): Promise<{ pessoa: Pessoa; empresaId: string } | null> {
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
      atualizadoEm: data.atualizadoEm?.toDate() ?? data.criadoEm?.toDate() ?? new Date(),
      priorizado: data.priorizado ?? false,
      linkMaterialBruto: data.linkMaterialBruto ?? '',
      linkVideoFinal: data.linkVideoFinal ?? '',
      valor: data.valor ?? 0,
      moeda: data.moeda ?? 'BRL',
    } as Video
  })
}

export async function criarVideo(
  empresaId: string,
  pessoaId: string,
  data: VideoFormData
): Promise<Video> {
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
      atualizadoEm: Timestamp.now(),
      priorizado: false,
      linkMaterialBruto: data.linkMaterialBruto ?? '',
      linkVideoFinal: data.linkVideoFinal ?? '',
      valor: data.valor ?? 0,
      moeda: data.moeda ?? 'BRL',
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
    atualizadoEm: snapData.atualizadoEm?.toDate() ?? new Date(),
    priorizado: snapData.priorizado ?? false,
    linkMaterialBruto: snapData.linkMaterialBruto ?? '',
    linkVideoFinal: snapData.linkVideoFinal ?? '',
    valor: snapData.valor ?? 0,
    moeda: snapData.moeda ?? 'BRL',
  } as Video
}

export async function atualizarVideo(
  empresaId: string,
  pessoaId: string,
  videoId: string,
  data: Partial<VideoFormData>
) {
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
  if (data.priorizado !== undefined) updatePayload.priorizado = data.priorizado
  if (data.linkMaterialBruto !== undefined) updatePayload.linkMaterialBruto = data.linkMaterialBruto
  if (data.linkVideoFinal !== undefined) updatePayload.linkVideoFinal = data.linkVideoFinal
  if (data.valor !== undefined) updatePayload.valor = data.valor
  if (data.moeda !== undefined) updatePayload.moeda = data.moeda
  updatePayload.atualizadoEm = Timestamp.now()
  await updateDoc(
    doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', videoId),
    updatePayload
  )
}

export async function atualizarVideoPublic(
  empresaId: string,
  pessoaId: string,
  videoId: string,
  data: { priorizado?: boolean; linkMaterialBruto?: string },
  token?: string
) {
  const updatePayload: Record<string, any> = {}
  if (data.priorizado !== undefined) updatePayload.priorizado = data.priorizado
  if (data.linkMaterialBruto !== undefined) updatePayload.linkMaterialBruto = data.linkMaterialBruto
  if (token) updatePayload._token = token
  await updateDoc(
    doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', videoId),
    updatePayload
  )
}

export async function excluirVideo(empresaId: string, pessoaId: string, videoId: string) {
  await deleteDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', videoId))
}

export async function reordenarVideos(
  empresaId: string,
  pessoaId: string,
  videoIds: string[]
) {
  const batch = writeBatch(db!)
  videoIds.forEach((videoId, index) => {
    batch.update(
      doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', videoId),
      { ordem: index }
    )
  })
  await batch.commit()
}

export async function listarTodosVideos(): Promise<(Video & { pessoaNome: string; empresaNome: string })[]> {
  const empresasSnap = await getDocs(collection(db!, 'empresas'))
  const todos: (Video & { pessoaNome: string; empresaNome: string })[] = []
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
          atualizadoEm: data.atualizadoEm?.toDate() ?? data.criadoEm?.toDate() ?? new Date(),
          priorizado: data.priorizado ?? false,
          linkMaterialBruto: data.linkMaterialBruto ?? '',
          linkVideoFinal: data.linkVideoFinal ?? '',
          valor: data.valor ?? 0,
          moeda: data.moeda ?? 'BRL',
          pessoaNome: pessoaDoc.data().nome,
          empresaNome: empresaDoc.data().nome,
        })
      }
    }
  }
  return todos
}

export async function listarVideosPorEmpresa(empresaId: string): Promise<(Video & { pessoaNome: string })[]> {
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
        atualizadoEm: data.atualizadoEm?.toDate() ?? data.criadoEm?.toDate() ?? new Date(),
        priorizado: data.priorizado ?? false,
        linkMaterialBruto: data.linkMaterialBruto ?? '',
        linkVideoFinal: data.linkVideoFinal ?? '',
        valor: data.valor ?? 0,
        moeda: data.moeda ?? 'BRL',
      } as Video & { pessoaNome: string }
    })
  })
  const nested = await Promise.all(promises)
  return nested.flat()
}

export async function listarTodasPessoas(): Promise<Pessoa[]> {
  const empresasSnap = await getDocs(collection(db!, 'empresas'))
  const todas: Pessoa[] = []
  for (const empresaDoc of empresasSnap.docs) {
    const pessoasSnap = await getDocs(collection(db!, 'empresas', empresaDoc.id, 'pessoas'))
    for (const pessoaDoc of pessoasSnap.docs) {
      const data = pessoaDoc.data()
      todas.push({
        id: pessoaDoc.id,
        empresaId: empresaDoc.id,
        nome: data.nome,
        token: data.token,
        ordem: data.ordem,
        criadoEm: data.criadoEm?.toDate() ?? new Date(),
      } as Pessoa)
    }
  }
  return todas
}

// ─── Config ─────────────────────────────────────────────

const CONFIG_DOC = 'global'

const CONFIG_DEFAULTS: Config = {
  canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'],
  usdToBrl: 5.0,
  eurToBrl: 5.5,
}

function mergeConfig(raw: Partial<Config>): Config {
  return { ...CONFIG_DEFAULTS, ...raw }
}

export async function getConfig(): Promise<Config> {
  const snap = await getDoc(doc(db!, 'config', CONFIG_DOC))
  if (!snap.exists()) {
    await setDoc(doc(db!, 'config', CONFIG_DOC), CONFIG_DEFAULTS)
    return CONFIG_DEFAULTS
  }
  return mergeConfig(snap.data() as Partial<Config>)
}

export async function atualizarCanais(canais: string[]) {
  await updateDoc(doc(db!, 'config', CONFIG_DOC), { canais })
}

export async function atualizarTaxasCambio(usdToBrl: number, eurToBrl: number) {
  await updateDoc(doc(db!, 'config', CONFIG_DOC), { usdToBrl, eurToBrl })
}

// ─── Notificações (cliente) ─────────────────────────────

export async function criarNotificacao(
  empresaId: string,
  pessoaId: string,
  dados: Notificacao
) {
  await addDoc(
    collection(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'notificacoes'),
    dados
  )
}

export async function listarNotificacoes(
  empresaId: string,
  pessoaId: string
): Promise<Notificacao[]> {
  const snap = await getDocs(
    collection(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'notificacoes')
  )
  const lista = snap.docs.map((d) => d.data() as Notificacao)
  const batch = writeBatch(db!)
  snap.docs.forEach((d) => batch.delete(d.ref))
  await batch.commit()
  return lista
}

// ─── Notificações (admin) ───────────────────────────────

export async function criarNotificacaoAdmin(
  empresaId: string,
  dados: Omit<NotificacaoAdmin, 'id' | 'timestamp' | 'lida'>
) {
  await addDoc(collection(db!, 'empresas', empresaId, 'notificacoesAdmin'), {
    ...dados,
    timestamp: Date.now(),
    lida: false,
  })
}

export async function listarNotificacoesAdmin(
  empresaId: string
): Promise<NotificacaoAdmin[]> {
  const snap = await getDocs(
    collection(db!, 'empresas', empresaId, 'notificacoesAdmin')
  )
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as NotificacaoAdmin))
}

export async function listarTodasNotificacoesAdmin(): Promise<NotificacaoAdmin[]> {
  const grupos = await getDocs(query(collectionGroup(db!, 'notificacoesAdmin')))
  return grupos.docs.map((d) => ({ id: d.id, ...d.data() } as NotificacaoAdmin))
}

export async function marcarNotificacaoAdminLida(
  empresaId: string,
  notificacaoId: string
) {
  await updateDoc(
    doc(db!, 'empresas', empresaId, 'notificacoesAdmin', notificacaoId),
    { lida: true }
  )
}

export async function marcarTodasNotificacoesAdminLidas(empresaId: string) {
  const snap = await getDocs(
    query(
      collection(db!, 'empresas', empresaId, 'notificacoesAdmin'),
      where('lida', '==', false)
    )
  )
  const batch = writeBatch(db!)
  snap.docs.forEach((d) => batch.update(d.ref, { lida: true }))
  await batch.commit()
}

export async function limparNotificacoesAdminAntigas(empresaId: string) {
  const trintaDias = Date.now() - 30 * 24 * 60 * 60 * 1000
  const snap = await getDocs(
    query(
      collection(db!, 'empresas', empresaId, 'notificacoesAdmin'),
      where('lida', '==', true),
      where('timestamp', '<', trintaDias)
    )
  )
  const batch = writeBatch(db!)
  snap.docs.forEach((d) => batch.delete(d.ref))
  await batch.commit()
}
