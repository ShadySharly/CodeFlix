import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import SearchVideos from '../views/SearchVideos'
import SearchForos from '../views/SearchForos'
import SearchArticulos from '../views/SearchArticulos'
import Video from '../views/Video'
import Foro from '../views/Foro'
import Explorar from '../views/Explorar'
import Comousar from '../views/Comousar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/search/videos',
    name: 'SearchVideos',
    component: SearchVideos
  },
  {
    path: '/search/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/foro',
    name: 'Foro',
    component: Foro
  },
  {
    path: '/search/foros',
    name: 'SearchForos',
    component: SearchForos
  },
  {
    path: '/search/articulos',
    name: 'SearchArticulos',
    component: SearchArticulos
  },
  {
    path: '/explorar',
    name: 'Explorar',
    component: Explorar
  },
  {
    path: '/comousar',
    name: 'Comousar',
    component: Comousar
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
