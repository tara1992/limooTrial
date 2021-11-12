import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home/Home.vue'
import TheContainer from '@/containers/TheContainer'

const routes = [
  {
      path: '/',
      redirect: '/Home',
      name: 'Container',
      meta: {
          label: 'خانه',
      },
      component: TheContainer,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home,
          meta: {
              label: 'پیشخوان',
          },
        },
        {
          path: 'About',
          name: 'About',
          component: () => import('../views/About.vue'),
          meta: {
              label: 'درباره ما',
          },
        },
      ]
    }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
