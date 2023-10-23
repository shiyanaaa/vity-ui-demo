import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routerFile=import.meta.glob("../page/component/*.vue")
interface routeType{
  path:string,
  name:string,
  component:any
}
let children:routeType[] =[]
Object.keys(routerFile).forEach(key=>{
  const routeComponent = routerFile[key];
  const routeName = key.match(/\.\.\/page\/component\/(.*?).vue$/);
  if(routeName){
    children.push({
      path: `/component/${routeName[1].toLowerCase()}`,
      name: routeName[1] as string,
      component: routeComponent
    })
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('../page/index/index.vue')
        },
        {
          path: '/component',
          name: 'component',
          component: () => import('../page/index/component.vue'),
          redirect: '/component/button',
          children:children
        }
      ]
    }
  ]
})

export default router
