import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, // eager loading
      meta: {
        layout: 'DefaultLayout',
      },
    },
    // used eager loading for home and lazy loading for others for performance
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'), // lazy loadings
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/ErrorView.vue'),
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
export default router
