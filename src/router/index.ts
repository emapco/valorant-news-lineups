import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const defaultHref = '/tabs/lineups/'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: defaultHref
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: defaultHref
      },
      {
        path: 'updates',
        component: () => import('@/views/UpdatesPage.vue')
      },
      {
        path: 'news',
        component: () => import('@/views/NewsPage.vue')
      },
      {
        path: 'lineups',
        component: () => import('@/views/LineupsPage.vue'),
      },
      {
        path: 'lineups/:map',
        component: () => import('@/views/AgentSelectionPage.vue')
      },
      {
        path: 'lineups/:map/:agent',
        component: () => import('@/views/AgentLineupPage.vue')
      }
    ]
  }, 
  {
    path: '/:catchAll(.*)',
    redirect: defaultHref
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
