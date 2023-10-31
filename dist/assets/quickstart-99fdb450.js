import{d as s,a as c,c as n,e as t,b as e,o as i}from"./index-63cd9dd5.js";const l={class:"demo"},p=t("h1",null,"快速开始",-1),_=t("p",null,"本节将介绍如何在项目中使用 Vity UI。",-1),d=t("h2",null,"用法",-1),a=t("h3",null,"完整引入",-1),u=t("p",null,"如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。",-1),m={class:"code"},r=t("h3",null,"手动导入",-1),h=t("p",null,"在需要使用组件的地方导入组件后使用。",-1),v={class:"code"},f=t("p",null,"手动导入任然需要导入css。",-1),y={class:"code"},B=t("h2",null,"开始使用",-1),A=t("p",null,"现在你可以启动项目了。 对于每个组件的用法，请查阅对应的独立文档。",-1),V=`// main.ts
import { createApp } from 'vue'
import VityUi from 'vity-ui'
import 'vity-ui/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(VityUi)
app.mount('#app')`,g=`<template>
<el-button>我是 ElButton</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
<\/script>
`,E="import 'vity-ui/style.css'",U=s({__name:"quickstart",setup(b){return(k,x)=>{const o=c("highlightjs");return i(),n("div",l,[p,_,d,a,u,t("div",m,[e(o,{autodetect:"",code:V})]),r,h,t("div",v,[e(o,{autodetect:"",code:g})]),f,t("div",y,[e(o,{autodetect:"",code:E})]),B,A])}}});export{U as default};
