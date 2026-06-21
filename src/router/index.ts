import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/init'

const router = createRouter({
  history: createWebHistory('/luna-videomaker/'),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/admin',
      component: () => import('@/components/layout/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/admin/DashboardView.vue'),
        },
        {
          path: 'empresas',
          name: 'Empresas',
          component: () => import('@/views/admin/EmpresasView.vue'),
        },
        {
          path: 'empresas/:id',
          name: 'EmpresaDetail',
          component: () => import('@/views/admin/EmpresaDetailView.vue'),
        },
        {
          path: 'empresas/:id/pessoas/:pessoaId',
          name: 'PessoaDetail',
          component: () => import('@/views/admin/PessoaDetailView.vue'),
        },
        {
          path: 'videos',
          name: 'Videos',
          component: () => import('@/views/admin/VideosView.vue'),
        },
        {
          path: 'financeiro',
          name: 'Financeiro',
          component: () => import('@/views/admin/FinanceiroView.vue'),
        },
        {
          path: 'config',
          name: 'Config',
          component: () => import('@/views/admin/ConfigView.vue'),
        },
      ],
    },
    {
      path: '/v/:slug',
      name: 'PublicView',
      component: () => import('@/views/public/VerView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

router.beforeEach(async (to, _from, next) => {
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth)

  // Wait for Firebase Auth to restore session from IndexedDB
  if (typeof auth.authStateReady === 'function') {
    await auth.authStateReady()
  }

  const user = auth.currentUser

  if (user && user.email && user.email !== 'lunaheloisaa82@gmail.com') {
    if (typeof auth.signOut === 'function') {
      await auth.signOut()
    }
    next('/login')
    return
  }

  if (requiresAuth && !user) {
    next('/login')
  } else if (to.path === '/login' && user) {
    next('/admin/dashboard')
  } else {
    next()
  }
})

export default router
