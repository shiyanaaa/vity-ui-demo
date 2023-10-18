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
          redirect:'/component/button',
          children:[
            {
              path: 'button',
              name: 'button',
              component: ()=>import("../page/component/button.vue") ,
            },
            {
              path: 'icon',
              name: 'icon',
              component: ()=>import("../page/component/icon.vue") ,
            },
            {
              path: 'switch',
              name: 'switch',
              component: ()=>import("../page/component/switch.vue") ,
            },
            {
              path: 'input',
              name: 'input',
              component: ()=>import("../page/component/input.vue") ,
            },
            {
              path: 'radio',
              name: 'radio',
              component: ()=>import("../page/component/radio.vue") ,
            },
          ]
        },
      ]
    }
  ]
})

export default router
