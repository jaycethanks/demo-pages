import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from '../views/CustomersView/index.vue'
import PaymentsView from '../views/PaymentsView/index.vue'
import NotFound from "../views/404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      redirect: '/payments'
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersView
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
