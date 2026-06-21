import type { Config } from '@/types/config'
import type { Notificacao, NotificacaoAdmin } from '@/types/notificacao'
import { db } from './init'
import {
  doc,
  setDoc,
  addDoc,
  collection,
  getDoc,
  Timestamp,
} from 'firebase/firestore'

function t(base: string) { return base + '0'.repeat(32 - base.length) }

const now = Date.now()
const day = 24 * 60 * 60 * 1000

export const SEED_CONFIG: Config = {
  canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'],
  usdToBrl: 5.0,
  eurToBrl: 5.5,
}

export const SEED_EMPRESAS = [
  { id: 'empresa-1', nome: 'Luna Filmes', slug: 'luna-filmes', token: t('luna-filmes-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 30 * day).toISOString() },
  { id: 'empresa-2', nome: 'Pixel Produtora', slug: 'pixel-produtora', token: t('pixel-produtora-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 15 * day).toISOString() },
  { id: 'empresa-3', nome: 'Studio Zen', slug: 'studio-zen', token: t('studio-zen-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 7 * day).toISOString() },
  { id: 'empresa-4', nome: 'Agência Click', slug: 'agencia-click', token: t('agencia-click-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 5 * day).toISOString() },
  { id: 'empresa-5', nome: 'CineMakers', slug: 'cine-makers', token: t('cine-makers-tkn-'), locale: 'pt-BR', criadoEm: new Date(now - 3 * day).toISOString() },
]

export const SEED_PESSOAS: Record<string, any[]> = {
  'empresa-1': [
    { id: 'pessoa-1', nome: 'Ana Silva', token: t('ana-silva-tkn-'), empresaId: 'empresa-1', ordem: 0, criadoEm: new Date(now - 25 * day).toISOString() },
    { id: 'pessoa-2', nome: 'Carlos Oliveira', token: t('carlos-oliveira-tkn-'), empresaId: 'empresa-1', ordem: 1, criadoEm: new Date(now - 20 * day).toISOString() },
    { id: 'pessoa-3', nome: 'Beatriz Costa', token: t('beatriz-costa-tkn-'), empresaId: 'empresa-1', ordem: 2, criadoEm: new Date(now - 18 * day).toISOString() },
    { id: 'pessoa-13', nome: 'Daniela Martins', token: t('daniela-martins-tkn-'), empresaId: 'empresa-1', ordem: 3, criadoEm: new Date(now - 10 * day).toISOString() },
  ],
  'empresa-2': [
    { id: 'pessoa-4', nome: 'Mariana Santos', token: t('mariana-santos-tkn-'), empresaId: 'empresa-2', ordem: 0, criadoEm: new Date(now - 10 * day).toISOString() },
    { id: 'pessoa-5', nome: 'Pedro Costa', token: t('pedro-costa-tkn-'), empresaId: 'empresa-2', ordem: 1, criadoEm: new Date(now - 8 * day).toISOString() },
    { id: 'pessoa-6', nome: 'Lucas Almeida', token: t('lucas-almeida-tkn-'), empresaId: 'empresa-2', ordem: 2, criadoEm: new Date(now - 6 * day).toISOString() },
  ],
  'empresa-3': [
    { id: 'pessoa-7', nome: 'Julia Lima', token: t('julia-lima-tkn-'), empresaId: 'empresa-3', ordem: 0, criadoEm: new Date(now - 5 * day).toISOString() },
    { id: 'pessoa-8', nome: 'Rafael Torres', token: t('rafael-torres-tkn-'), empresaId: 'empresa-3', ordem: 1, criadoEm: new Date(now - 3 * day).toISOString() },
    { id: 'pessoa-14', nome: 'Camila Ribeiro', token: t('camila-ribeiro-tkn-'), empresaId: 'empresa-3', ordem: 2, criadoEm: new Date(now - 2 * day).toISOString() },
  ],
  'empresa-4': [
    { id: 'pessoa-9', nome: 'Fernanda Rocha', token: t('fernanda-rocha-tkn-'), empresaId: 'empresa-4', ordem: 0, criadoEm: new Date(now - 4 * day).toISOString() },
    { id: 'pessoa-10', nome: 'Thiago Martins', token: t('thiago-martins-tkn-'), empresaId: 'empresa-4', ordem: 1, criadoEm: new Date(now - 3 * day).toISOString() },
  ],
  'empresa-5': [
    { id: 'pessoa-11', nome: 'Amanda Souza', token: t('amanda-souza-tkn-'), empresaId: 'empresa-5', ordem: 0, criadoEm: new Date(now - 2 * day).toISOString() },
    { id: 'pessoa-12', nome: 'Gabriel Faria', token: t('gabriel-faria-tkn-'), empresaId: 'empresa-5', ordem: 1, criadoEm: new Date(now - 1 * day).toISOString() },
  ],
}

export const SEED_VIDEOS: Record<string, Record<string, any[]>> = {
  'empresa-1': {
    'pessoa-1': [
      { id: 'video-1', titulo: 'Review Novo Smartphone', status: 'postado', ordem: 0, dataPostagem: new Date(now - 7 * day).toISOString(), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Thumbnail aprovada pelo cliente. Performance acima da média no primeiro dia.', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 14 * day).toISOString(), atualizadoEm: new Date(now - 14 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 500, moeda: 'BRL' },
      { id: 'video-2', titulo: 'Tutorial Vue 3 + Firebase', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: 'Esperando feedback do roteiro', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 5 * day).toISOString(), atualizadoEm: new Date(now - 5 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 250, moeda: 'BRL' },
      { id: 'video-3', titulo: 'Vlog Trabalhando Home Office', status: 'revisao', ordem: 2, dataPostagem: null, canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Ajustar transição no minuto 3:20', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 3 * day).toISOString(), atualizadoEm: new Date(now - 3 * day).toISOString(), priorizado: true, linkMaterialBruto: 'https://drive.google.com/drive/folders/raw-material-1', linkVideoFinal: '', valor: 180, moeda: 'USD' },
      { id: 'video-4', titulo: 'Setup Gamer 2025', status: 'gravado', ordem: 3, dataPostagem: null, canais: ['YouTube', 'Facebook'], ads: true, observacoes: '', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 1 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 100, moeda: 'BRL' },
      { id: 'video-17', titulo: 'Review Fones de Ouvido 2025', status: 'editando', ordem: 4, dataPostagem: new Date(now + 7 * day).toISOString(), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Aguardando roteiro do patrocinador', pessoaId: 'pessoa-1', empresaId: 'empresa-1', criadoEm: new Date(now - 1 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 400, moeda: 'USD' },
    ],
    'pessoa-2': [
      { id: 'video-5', titulo: 'Unboxing Câmera Sony', status: 'revisao', ordem: 0, dataPostagem: null, canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Revisar corte final — cliente solicita versão estendida', pessoaId: 'pessoa-2', empresaId: 'empresa-1', criadoEm: new Date(now - 3 * day).toISOString(), atualizadoEm: new Date(now - 3 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 200, moeda: 'USD' },
      { id: 'video-6', titulo: 'Dicas de Edição no Premiere', status: 'gravado', ordem: 1, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: 'Material bruto capturado, esperando B-roll do cliente', pessoaId: 'pessoa-2', empresaId: 'empresa-1', criadoEm: new Date(now - 1 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 80, moeda: 'BRL' },
    ],
    'pessoa-3': [
      { id: 'video-7', titulo: 'Comparativo iPhone vs Android', status: 'postado', ordem: 0, dataPostagem: new Date(now - 4 * day).toISOString(), canais: ['YouTube', 'TikTok'], ads: true, observacoes: 'Melhor desempenho do canal até agora', pessoaId: 'pessoa-3', empresaId: 'empresa-1', criadoEm: new Date(now - 10 * day).toISOString(), atualizadoEm: new Date(now - 10 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: 'https://drive.google.com/file/d/final-video-7', valor: 1200, moeda: 'BRL' },
      { id: 'video-8', titulo: 'Montando PC Gamer Custo-Benefício', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram', 'Facebook'], ads: true, observacoes: 'Roteiro em revisão pelo patrocinador', pessoaId: 'pessoa-3', empresaId: 'empresa-1', criadoEm: new Date(now - 2 * day).toISOString(), atualizadoEm: new Date(now - 2 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 220, moeda: 'EUR' },
    ],
    'pessoa-13': [
      { id: 'video-28', titulo: 'Entrevista com Especialista', status: 'postado', ordem: 0, dataPostagem: new Date(now + 14 * day).toISOString(), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Entrevista gravada, aguardando edição final', pessoaId: 'pessoa-13', empresaId: 'empresa-1', criadoEm: new Date(now - 5 * day).toISOString(), atualizadoEm: new Date(now - 2 * day).toISOString(), priorizado: true, linkMaterialBruto: '', linkVideoFinal: '', valor: 2500, moeda: 'BRL' },
      { id: 'video-29', titulo: 'Vlog Diário: Trabalho Criativo', status: 'editando', ordem: 1, dataPostagem: null, canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Inserir legendas e chamadas', pessoaId: 'pessoa-13', empresaId: 'empresa-1', criadoEm: new Date(now - 3 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 350, moeda: 'BRL' },
    ],
  },
  'empresa-2': {
    'pessoa-4': [],
    'pessoa-5': [
      { id: 'video-9', titulo: 'Make Tutorial: Carnaval', status: 'postado', ordem: 0, dataPostagem: new Date(now - 2 * day).toISOString(), canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Alta performance! 50k views em 24h', pessoaId: 'pessoa-5', empresaId: 'empresa-2', criadoEm: new Date(now - 10 * day).toISOString(), atualizadoEm: new Date(now - 10 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 150, moeda: 'USD' },
      { id: 'video-10', titulo: 'Skincare Routine 2025', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Inserir cards de produtos na descrição', pessoaId: 'pessoa-5', empresaId: 'empresa-2', criadoEm: new Date(now - 4 * day).toISOString(), atualizadoEm: new Date(now - 4 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 280, moeda: 'USD' },
      { id: 'video-11', titulo: 'Haul Renner: Promoção de Inverno', status: 'gravado', ordem: 2, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: '', pessoaId: 'pessoa-5', empresaId: 'empresa-2', criadoEm: new Date(now - 1 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 120, moeda: 'BRL' },
    ],
    'pessoa-6': [
      { id: 'video-12', titulo: 'Análise Tática Futebol BR', status: 'revisao', ordem: 0, dataPostagem: null, canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Aguardando aprovação do patrocinador — prazo: sexta', pessoaId: 'pessoa-6', empresaId: 'empresa-2', criadoEm: new Date(now - 6 * day).toISOString(), atualizadoEm: new Date(now - 6 * day).toISOString(), priorizado: true, linkMaterialBruto: '', linkVideoFinal: '', valor: 350, moeda: 'USD' },
      { id: 'video-13', titulo: 'Highlights da Semana', status: 'gravado', ordem: 1, dataPostagem: null, canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Legendas pendentes — contratar legendador', pessoaId: 'pessoa-6', empresaId: 'empresa-2', criadoEm: new Date(now - 2 * day).toISOString(), atualizadoEm: new Date(now - 2 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 90, moeda: 'BRL' },
    ],
  },
  'empresa-3': {
    'pessoa-7': [
      { id: 'video-14', titulo: 'Receita Fit Panqueca de Banana', status: 'postado', ordem: 0, dataPostagem: new Date(now - 1 * day).toISOString(), canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Boa recepção nos comentários', pessoaId: 'pessoa-7', empresaId: 'empresa-3', criadoEm: new Date(now - 5 * day).toISOString(), atualizadoEm: new Date(now - 5 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 80, moeda: 'EUR' },
      { id: 'video-15', titulo: 'Meditação Guiada 10 Minutos', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Gravar áudio em estúdio — microfone condensador', pessoaId: 'pessoa-7', empresaId: 'empresa-3', criadoEm: new Date(now - 2 * day).toISOString(), atualizadoEm: new Date(now - 2 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 150, moeda: 'EUR' },
    ],
    'pessoa-8': [
      { id: 'video-16', titulo: 'Alongamento para Escritório', status: 'revisao', ordem: 0, dataPostagem: null, canais: ['YouTube', 'Instagram', 'TikTok', 'Facebook'], ads: false, observacoes: 'Verificar direitos musicais da trilha sonora', pessoaId: 'pessoa-8', empresaId: 'empresa-3', criadoEm: new Date(now - 3 * day).toISOString(), atualizadoEm: new Date(now - 3 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 120, moeda: 'EUR' },
    ],
    'pessoa-14': [
      { id: 'video-30', titulo: 'Yoga para Iniciantes', status: 'gravado', ordem: 0, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: 'Gravar takes adicionais do professor', pessoaId: 'pessoa-14', empresaId: 'empresa-3', criadoEm: new Date(now - 2 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: 'https://drive.google.com/drive/folders/yoga-raw', linkVideoFinal: '', valor: 60, moeda: 'EUR' },
      { id: 'video-31', titulo: 'Alimentação Consciente', status: 'revisao', ordem: 1, dataPostagem: null, canais: ['Instagram', 'TikTok'], ads: false, observacoes: 'Ajustar cor do grading', pessoaId: 'pessoa-14', empresaId: 'empresa-3', criadoEm: new Date(now - 1 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 95, moeda: 'EUR' },
    ],
  },
  'empresa-4': {
    'pessoa-9': [
      { id: 'video-18', titulo: 'Marketing Digital 2025', status: 'postado', ordem: 0, dataPostagem: new Date(now - 1 * day).toISOString(), canais: ['YouTube', 'Instagram'], ads: true, observacoes: 'Excelente engajamento no primeiro dia', pessoaId: 'pessoa-9', empresaId: 'empresa-4', criadoEm: new Date(now - 7 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: 'https://drive.google.com/file/d/final-video-18', valor: 3000, moeda: 'BRL' },
      { id: 'video-19', titulo: 'SEO para Iniciantes', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: 'Adicionar exemplos práticos', pessoaId: 'pessoa-9', empresaId: 'empresa-4', criadoEm: new Date(now - 3 * day).toISOString(), atualizadoEm: new Date(now - 2 * day).toISOString(), priorizado: true, linkMaterialBruto: '', linkVideoFinal: '', valor: 800, moeda: 'BRL' },
      { id: 'video-20', titulo: 'Case de Sucesso Cliente X', status: 'revisao', ordem: 2, dataPostagem: new Date(now + 14 * day).toISOString(), canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Aguardando dados de resultados do cliente', pessoaId: 'pessoa-9', empresaId: 'empresa-4', criadoEm: new Date(now - 5 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: 'https://drive.google.com/drive/folders/case-cliente-x', linkVideoFinal: '', valor: 500, moeda: 'USD' },
    ],
    'pessoa-10': [
      { id: 'video-21', titulo: 'Tráfego Pago: Guia Completo', status: 'gravado', ordem: 0, dataPostagem: null, canais: ['YouTube', 'Instagram', 'TikTok'], ads: true, observacoes: 'Material bruto capturado, iniciar edição', pessoaId: 'pessoa-10', empresaId: 'empresa-4', criadoEm: new Date(now - 2 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 200, moeda: 'BRL' },
      { id: 'video-22', titulo: 'Copywriting para Redes', status: 'postado', ordem: 1, dataPostagem: new Date(now - 3 * day).toISOString(), canais: ['Instagram'], ads: false, observacoes: 'Bom alcance orgânico', pessoaId: 'pessoa-10', empresaId: 'empresa-4', criadoEm: new Date(now - 6 * day).toISOString(), atualizadoEm: new Date(now - 3 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 450, moeda: 'BRL' },
    ],
  },
  'empresa-5': {
    'pessoa-11': [
      { id: 'video-23', titulo: 'Curta Metragem: Making Of', status: 'postado', ordem: 0, dataPostagem: new Date(now - 5 * day).toISOString(), canais: ['YouTube'], ads: false, observacoes: 'Melhor recepção da crítica até agora', pessoaId: 'pessoa-11', empresaId: 'empresa-5', criadoEm: new Date(now - 14 * day).toISOString(), atualizadoEm: new Date(now - 5 * day).toISOString(), priorizado: true, linkMaterialBruto: '', linkVideoFinal: 'https://drive.google.com/file/d/final-video-23', valor: 2000, moeda: 'BRL' },
      { id: 'video-24', titulo: 'Dicas de Direção', status: 'editando', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram'], ads: false, observacoes: 'Roteiro em desenvolvimento', pessoaId: 'pessoa-11', empresaId: 'empresa-5', criadoEm: new Date(now - 3 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 100, moeda: 'EUR' },
      { id: 'video-25', titulo: 'Roteiro Criativo Workshop', status: 'gravado', ordem: 2, dataPostagem: null, canais: ['YouTube', 'Facebook'], ads: true, observacoes: 'Material bruto de 2h, editar para 20min', pessoaId: 'pessoa-11', empresaId: 'empresa-5', criadoEm: new Date(now - 1 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: 'https://drive.google.com/drive/folders/workshop-raw', linkVideoFinal: '', valor: 150, moeda: 'BRL' },
    ],
    'pessoa-12': [
      { id: 'video-26', titulo: 'Iluminação para Cena Noturna', status: 'revisao', ordem: 0, dataPostagem: null, canais: ['YouTube'], ads: false, observacoes: 'Verificar consistência de cor entre cenas', pessoaId: 'pessoa-12', empresaId: 'empresa-5', criadoEm: new Date(now - 4 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 120, moeda: 'USD' },
      { id: 'video-27', titulo: 'Equipamentos Essenciais 2025', status: 'gravado', ordem: 1, dataPostagem: null, canais: ['YouTube', 'Instagram', 'TikTok'], ads: true, observacoes: 'Adicionar links afiliados na descrição', pessoaId: 'pessoa-12', empresaId: 'empresa-5', criadoEm: new Date(now - 2 * day).toISOString(), atualizadoEm: new Date(now - 1 * day).toISOString(), priorizado: false, linkMaterialBruto: '', linkVideoFinal: '', valor: 80, moeda: 'USD' },
    ],
  },
}

export const SEED_NOTIFICACOES_ADMIN = [
  {
    tipo: 'priorizado' as const,
    videoId: 'video-3',
    videoTitulo: 'Vlog Trabalhando Home Office',
    pessoaNome: 'Ana Silva',
    empresaNome: 'Luna Filmes',
    empresaId: 'empresa-1',
    pessoaId: 'pessoa-1',
    timestamp: now - 2 * day,
    lida: false,
  },
  {
    tipo: 'linkBruto' as const,
    videoId: 'video-4',
    videoTitulo: 'Setup Gamer 2025',
    pessoaNome: 'Ana Silva',
    empresaNome: 'Luna Filmes',
    empresaId: 'empresa-1',
    pessoaId: 'pessoa-1',
    timestamp: now - 1 * day,
    lida: false,
  },
  {
    tipo: 'priorizado' as const,
    videoId: 'video-19',
    videoTitulo: 'SEO para Iniciantes',
    pessoaNome: 'Fernanda Rocha',
    empresaNome: 'Agência Click',
    empresaId: 'empresa-4',
    pessoaId: 'pessoa-9',
    timestamp: now - 12 * day,
    lida: true,
  },
]

export const SEED_NOTIFICACOES_CLIENTE = [
  {
    videoTitulo: 'Review Novo Smartphone',
    statusAntigo: 'gravado',
    statusNovo: 'postado',
    timestamp: now - 7 * day,
    empresaId: 'empresa-1',
    pessoaId: 'pessoa-1',
  },
  {
    videoTitulo: 'Tutorial Vue 3 + Firebase',
    statusAntigo: 'gravado',
    statusNovo: 'editando',
    timestamp: now - 3 * day,
    empresaId: 'empresa-1',
    pessoaId: 'pessoa-1',
  },
  {
    videoTitulo: 'SEO para Iniciantes',
    statusAntigo: 'gravado',
    statusNovo: 'editando',
    timestamp: now - 2 * day,
    empresaId: 'empresa-4',
    pessoaId: 'pessoa-9',
  },
]

export async function povoarBanco() {
  const configDoc = doc(db!, 'config', 'global')
  const configSnap = await getDoc(configDoc)
  if (configSnap.exists()) {
    console.log('[seed] Banco já populado — pulando')
    return
  }

  console.log('[seed] Populando banco...')

  await setDoc(configDoc, {
    canais: SEED_CONFIG.canais,
    usdToBrl: SEED_CONFIG.usdToBrl,
    eurToBrl: SEED_CONFIG.eurToBrl,
  })

  for (const emp of SEED_EMPRESAS) {
    await setDoc(doc(db!, 'empresas', emp.id), {
      nome: emp.nome,
      slug: emp.slug,
      token: emp.token,
      locale: emp.locale,
      criadoEm: Timestamp.fromDate(new Date(emp.criadoEm)),
    })
  }

  for (const [empresaId, pessoas] of Object.entries(SEED_PESSOAS)) {
    for (const p of pessoas) {
      await setDoc(doc(db!, 'empresas', empresaId, 'pessoas', p.id), {
        nome: p.nome,
        token: p.token,
        ordem: p.ordem,
        criadoEm: Timestamp.fromDate(new Date(p.criadoEm)),
      })
    }
  }

  for (const [empresaId, pessoas] of Object.entries(SEED_VIDEOS)) {
    for (const [pessoaId, videos] of Object.entries(pessoas)) {
      for (const v of videos) {
        await setDoc(doc(db!, 'empresas', empresaId, 'pessoas', pessoaId, 'videos', v.id), {
          titulo: v.titulo,
          status: v.status,
          ordem: v.ordem,
          dataPostagem: v.dataPostagem ? Timestamp.fromDate(new Date(v.dataPostagem)) : null,
          canais: v.canais,
          ads: v.ads,
          observacoes: v.observacoes,
          criadoEm: Timestamp.fromDate(new Date(v.criadoEm)),
          atualizadoEm: Timestamp.fromDate(new Date(v.atualizadoEm)),
          priorizado: v.priorizado,
          linkMaterialBruto: v.linkMaterialBruto,
          linkVideoFinal: v.linkVideoFinal,
          valor: v.valor,
          moeda: v.moeda,
        })
      }
    }
  }

  for (const n of SEED_NOTIFICACOES_ADMIN) {
    await addDoc(collection(db!, 'empresas', n.empresaId, 'notificacoesAdmin'), {
      tipo: n.tipo,
      videoId: n.videoId,
      videoTitulo: n.videoTitulo,
      pessoaNome: n.pessoaNome,
      empresaNome: n.empresaNome,
      empresaId: n.empresaId,
      pessoaId: n.pessoaId,
      timestamp: n.timestamp,
      lida: n.lida,
    })
  }

  for (const n of SEED_NOTIFICACOES_CLIENTE) {
    await addDoc(
      collection(db!, 'empresas', n.empresaId, 'pessoas', n.pessoaId, 'notificacoes'),
      {
        videoTitulo: n.videoTitulo,
        statusAntigo: n.statusAntigo,
        statusNovo: n.statusNovo,
        timestamp: n.timestamp,
      }
    )
  }

  console.log('[seed] Banco populado com sucesso!')
}

if (typeof window !== 'undefined') {
  ;(window as any).__povoarBanco = povoarBanco
}
