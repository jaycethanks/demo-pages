import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '../views/Page1/index.vue'
import Page2 from '../views/Page2/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})

export default router
