import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/lineups'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
        /*
      {
        path: '',
        redirect: '/tabs/updates'
      },
         */
      {
        path: 'updates',
        component: () => import('@/views/UpdatesPage.vue')
      },
      {
        path: 'lineups',
        component: () => import('@/views/LineupListPage.vue')
      },
      {
        path: 'news',
        component: () => import('@/views/NewsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
