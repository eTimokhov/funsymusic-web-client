import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import TrackPage from '../views/TrackPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/browse/tracks',
    name: 'tracks',
    // lazy-loaded
    component: () => import('../views/Tracks.vue')
  },
  {
    path: '/browse/playlists',
    name: 'playlists',
    // lazy-loaded
    component: () => import('../views/Playlists.vue')
  },
  {
    path: '/browse/users',
    name: 'users',
    // lazy-loaded
    component: () => import('../views/Users.vue')
  },
  {
    path: '/feed',
    name: 'feed',
    // lazy-loaded
    component: () => import('../views/Feed.vue')
  },
  {
    path: '/users/:id',
    name: 'userPage',
    // lazy-loaded
    component: () => import('../views/UserPage.vue')
  },
  {
    path: '/tracks/:id',
    component: TrackPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
