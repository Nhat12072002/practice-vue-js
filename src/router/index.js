import CalculatorView from '@/views/CalculatorView.vue'
import CreateUserView from '@/views/CreateUserView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import UserManagementView from '@/views/UserManagementView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'UserManagement',
      component: UserManagementView
    },
    {
      path: '/user/createUser',
      name: 'CreateUser',
      component: CreateUserView
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: CalculatorView
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductView
    },
  ]
})

export default router
