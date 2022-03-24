import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import movie from '../components/movie.vue'
// import times from '../components/times.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Movie',
    component: movie
  },
  // {
  //   path: '/:id',
  //   name: 'times',
  //   component: times
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
