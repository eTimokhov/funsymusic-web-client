import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

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
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: () => import('../views/Profile.vue')
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
    path: '/users/:id',
    name: 'userPage',
    // lazy-loaded
    component: () => import('../views/UserPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
