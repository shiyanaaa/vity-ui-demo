import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const componentFile=import.meta.glob("../page/component/*.vue")
const guideFile=import.meta.glob("../page/guide/*.vue")
interface routeType{
  path:string,
  name:string,
  component:any
}
let componentChildren:routeType[] =[]
Object.keys(componentFile).forEach(key=>{
  const routeComponent = componentFile[key];
  const routeName = key.match(/\.\.\/page\/component\/(.*?).vue$/);
  if(routeName){
    componentChildren.push({
      path: `/component/${routeName[1].toLowerCase()}`,
      name: routeName[1] as string,
      component: routeComponent
    })
  }
})
let guideChildren:routeType[] =[]
Object.keys(guideFile).forEach(key=>{
  const routeComponent = guideFile[key];
  const routeName = key.match(/\.\.\/page\/guide\/(.*?).vue$/);
  if(routeName){
    guideChildren.push({
      path: `/guide/${routeName[1].toLowerCase()}`,
      name: routeName[1] as string,
      component: routeComponent
    })
  }
})
console.log(guideChildren);

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
          children:componentChildren
        },
        {
          path: '/guide',
          name: 'guide',
          component: () => import('../page/index/guide.vue'),
          redirect: '/guide/installation',
          children:guideChildren
        }
      ]
    }
  ]
})

export default router
