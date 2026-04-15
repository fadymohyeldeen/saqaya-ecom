import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
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
    component: () => import('../views/ProductsView.vue'), // lazy loadings
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('@/views/ProductView.vue'),
  },
  {
    path: '/about-us',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/ErrorView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  // hash mode: better performance but looks ugly and not SEO friendly.
  // history mode: looks clean and SEO friendly but requires server config (in dev vite/vue-cli handles it, config only needed in prod or it will return 404 on refresh)
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
