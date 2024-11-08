import BlogView from '@/views/BlogView.vue'
import CalculatorView from '@/views/CalculatorView.vue'
import CourseDetailView from '@/views/CourseDetailView.vue'
import CourseView from '@/views/CourseView.vue'
import CreateUserView from '@/views/CreateUserView.vue'
import HomeView from '@/views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import ProductView from '@/views/ProductView.vue'
import TodoView from '@/views/TodoView.vue'
import UserManagementView from '@/views/UserManagementView.vue'
import WeatherView from '@/views/WeatherView.vue'
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
    {
      path: '/todo-list',
      name: 'TodoList',
      component: TodoView
    },
    {
      path: '/weather',
      name: 'Weather',
      component: WeatherView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/blog/get-all',
      name: 'PostBlog',
      component: PostView
    },
    {
      path: '/blog/course',
      name: 'Course',
      component: CourseView
    },
    {
      path: '/blog/get/:id',
      name: 'CourseDetail',
      component: CourseDetailView
    },
  ]
})

export default router
