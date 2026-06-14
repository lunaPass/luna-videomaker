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
  ],
})

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth)
  const user = auth.currentUser

  if (requiresAuth && !user) {
    next('/login')
  } else if (to.path === '/login' && user) {
    next('/admin/dashboard')
  } else {
    next()
  }
})

export default router
