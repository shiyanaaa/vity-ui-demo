import{d as p,r as l,c as i,e as d,w as g,j as f,o as r,f as v,F as y,b as h,t as C,g as w,h as B,m as b,a as m,i as M}from"./index-781cca63.js";import{_ as x}from"./PreView.vue_vue_type_script_setup_true_lang-6fae67ac.js";const $={class:"item"},k=p({__name:"message1.preview",setup(e){const s=()=>{f.ViMessage.message("提示消息")};return(o,t)=>{const n=l("ViButton");return r(),i("div",$,[d(n,{onClick:s,type:"primary"},{default:g(()=>[v("显示消息")]),_:1})])}}});function _(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViButton @click="btnClick" type="primary">显示消息</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ViMessage } from 'vity-ui';\r
const btnClick=()=>{\r
    ViMessage.message("提示消息")\r
}\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>从顶部出现，3 秒后自动消失。</p>\r
</div>`}typeof _=="function"&&_(k);const N={class:"item"},V=p({__name:"message2.preview",setup(e){const s=["info","primary","warning","success","error"],o=t=>{f.ViMessage.message({type:t,message:"这是提示消息"})};return(t,n)=>{const c=l("ViButton");return r(),i("div",N,[(r(),i(y,null,h(s,a=>d(c,{onClick:F=>o(a),type:a},{default:g(()=>[v(C(a),1)]),_:2},1032,["onClick","type"])),64))])}}});function u(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViButton v-for="item in typeList" @click="btnClick(item)" :type="item">{{ item }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ViMessage } from 'vity-ui'\r
const typeList = ['info', 'primary', 'warning', 'success', 'error']\r
const btnClick = (type: string) => {\r
  ViMessage.message({\r
      type,\r
      message: '这是提示消息'\r
    })\r
}\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>不同状态</h2>\r
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>\r
</div>`}typeof u=="function"&&u(V);const L={class:"demo"},T=m("h1",null,"Message 消息提示",-1),j=m("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1),E=m("h4",null,"使用前，需 import { ViMessage } from 'vity-ui'; 导入组件。",-1),P=p({__name:"message",setup(e){const s=w([]);return B(async()=>{const o=await Object.assign({"../preview/message/message1.preview.vue":k,"../preview/message/message2.preview.vue":V});for(const t in o){const n=t,c=o[t];s.value.push({name:n,component:b(c)})}}),(o,t)=>(r(),i("div",L,[T,j,E,(r(!0),i(y,null,h(s.value,n=>(r(),M(x,{key:n.name,component:n.component},null,8,["component"]))),128))]))}});export{P as default};
