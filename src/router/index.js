import HomeView from '@/components/HomeView.vue'
import UserManagementView from '@/components/UserManagementView.vue'
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
      // component: UserManagementView
    },
  ]
})

export default router
