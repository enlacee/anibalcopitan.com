import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import SectionBlog from '../components/SectionBlog';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/blog',
    name: 'blog',
    // component: SectionBlog
  },
  {
    path: '/qr',
    name: 'qr',
  },
  {
    path: '/skills',
    name: 'skills',
  },
  {
    path: '/yape',
    name: 'yape',
  },
  {
    path: '/bank',
    name: 'bank',
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
