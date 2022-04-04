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
        path: 'game-patches',
        component: () => import('@/views/GamePatchesPage.vue')
      },
      {
        path: 'dev-news',
        component: () => import('@/views/GameDevPage.vue')
      },
      {
        path: 'news',
        component: () => import('@/views/NewsPage.vue')
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
      },
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
