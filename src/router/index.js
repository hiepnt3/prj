import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/feature',
    name: 'feature',
    
    component: () => import('../views/FeatureView.vue')
  },
  {
    path: '/pages',
    name: 'pages',
    component: () => import('../views/PagesView.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/BlogsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
