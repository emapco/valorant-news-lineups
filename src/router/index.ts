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
        redirect: 'lineups',
      },
      {
        path: 'updates',
        redirect: 'updates/patches',
      },
      {
        path: 'updates/patches',
        component: () => import('@/views/updatesTabPages/GamePatchesPage.vue')
      },
      {
        path: 'updates/dev',
        component: () => import('@/views/updatesTabPages/GameDevPage.vue')
      },
      {
        path: 'news',
        component: () => import('@/views/newsTabPages/NewsPage.vue')
      },
      {
        path: 'lineups',
        component: () => import('@/views/lineupsTabPages/MapSelectionPage.vue'),
      },
      {
        path: 'lineups/:map',
        component: () => import('@/views/lineupsTabPages/AgentSelectionPage.vue')
      },
      {
        path: 'lineups/:map/:agent',
        component: () => import('@/views/lineupsTabPages/AgentLineupPage.vue')
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
