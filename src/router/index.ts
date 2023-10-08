import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'index',
          component: ()=>import("../page/index/index.vue") ,
        },
        {
          path: '/component',
          name: 'component',
          component: ()=>import("../page/component/index.vue") ,
        },
      ]
    }
  ]
})

export default router
