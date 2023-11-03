import{d as s,r as c,c as i,a as t,e,o as n}from"./index-8570f262.js";const p={class:"demo"},l=t("h1",null,"快速开始",-1),_=t("p",null,"本节将介绍如何在项目中使用 Vity UI。",-1),d=t("h2",null,"用法",-1),a=t("h3",null,"完整引入",-1),u=t("p",null,"如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。",-1),r={class:"code"},m=t("h3",null,"手动导入",-1),h=t("p",null,"在需要使用组件的地方导入组件后使用。",-1),v={class:"code"},f=t("p",null,"手动导入任然需要导入css。",-1),y={class:"code"},V=t("h2",null,"开始使用",-1),B=t("p",null,"现在你可以启动项目了。 对于每个组件的用法，请查阅对应的独立文档。",-1),A=`// main.ts
import { createApp } from 'vue'
import VityUi from 'vity-ui'
import 'vity-ui/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(VityUi)
app.mount('#app')`,g=`<template>
<vi-button>我是 ViButton</vi-button>
</template>
<script>
  import { ViButton } from ''vity-ui'
  export default {
    components: { ViButton },
  }
<\/script>
`,k="import 'vity-ui/style.css'",j=s({__name:"quickstart",setup(x){return(H,U)=>{const o=c("highlightjs");return n(),i("div",p,[l,_,d,a,u,t("div",r,[e(o,{autodetect:"",code:A})]),m,h,t("div",v,[e(o,{autodetect:"",code:g})]),f,t("div",y,[e(o,{autodetect:"",code:k})]),V,B])}}});export{j as default};
