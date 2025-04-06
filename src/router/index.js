import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'
import AuthPage from '../views/AuthPage.vue'
import ProductInfoPage from '../views/ProductInfoPage.vue'
import OrderPage from '../views/OrderPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/basket',
    name: 'basketPage',
    component: BasketPage
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/info/:id',
    name: 'ProductInfoPage',
    component: ProductInfoPage
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: OrderPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
