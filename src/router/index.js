import { createRouter, createWebHistory } from 'vue-router'
import BasketPage from '../views/BasketPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BasketPage
  },
  {
    path: '/basket/:id',
    name: 'basket',
    component: () => import('../views/BasketPage.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
