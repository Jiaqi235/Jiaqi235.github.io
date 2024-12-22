import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeContent.vue'

Vue.use(Router)

// Create the router instance
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
