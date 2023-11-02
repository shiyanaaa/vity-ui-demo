import{d as m,r as v,c as o,a as _,F as p,b as u,o as s,e as i,_ as w,w as l,f as $,g as j,h as k,m as q,i as x}from"./index-5b2f987f.js";import{_ as b}from"./PreView.vue_vue_type_script_setup_true_lang-6d310631.js";const C={class:"item"},I={class:"item"},V=m({__name:"avatar1.preview",setup(e){const a=[20,30,40,50,60];return(t,c)=>{const r=v("ViAvatar");return s(),o(p,null,[_("div",C,[(s(),o(p,null,u(a,n=>i(r,{shape:"square",src:"/vity-ui-demo/imgs/avatar.jpg",size:n},null,8,["size"])),64))]),_("div",I,[(s(),o(p,null,u(a,n=>i(r,{shape:"circle",src:"/vity-ui-demo/imgs/avatar.jpg",size:n},null,8,["size"])),64))])],64)}}});function d(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViAvatar shape="square" src="/vity-ui-demo/imgs/avatar.jpg" v-for="item in sizes" :size="item"></ViAvatar>\r
  </div>\r
  <div class="item">\r
    <ViAvatar shape="circle" src="/vity-ui-demo/imgs/avatar.jpg" v-for="item in sizes" :size="item"></ViAvatar>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const sizes=[20,30,40,50,60]\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>使用 shape 和 size 属性来设置 Avatar 的形状和大小。</p>\r
</div>`}typeof d=="function"&&d(V);function f(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViAvatar shape="square" src="/vity-ui-demo/imgs/avatar.jpg"></ViAvatar>\r
    <ViAvatar shape="square" size="50"><ViIcon size="40" name="yonghu" /></ViAvatar>\r
    <ViAvatar shape="square" size="50">user</ViAvatar>\r
  </div>\r
</template>`,e.__sourceCodeTitle=`<div>\r
    <h2>展示类型</h2>\r
    <p>支持使用图片，图标或者文字作为 Avatar。</p>\r
</div>`}const A={},E={class:"item"};function T(e,a){const t=v("ViAvatar"),c=v("ViIcon");return s(),o("div",E,[i(t,{shape:"square",src:"/vity-ui-demo/imgs/avatar.jpg"}),i(t,{shape:"square",size:"50"},{default:l(()=>[i(c,{size:"40",name:"yonghu"})]),_:1}),i(t,{shape:"square",size:"50"},{default:l(()=>[$("user")]),_:1})])}typeof f=="function"&&f(A);const B=w(A,[["render",T]]),N={class:"item"},z=m({__name:"avatar3.preview",setup(e){const a=t=>{console.log(t)};return(t,c)=>{const r=v("ViIcon"),n=v("ViAvatar");return s(),o("div",N,[i(n,{shape:"circle",onError:a,src:"/vity-ui-demo/imgs/error.jpg"},{default:l(()=>[i(r,{size:"30",name:"tupian"})]),_:1})])}}});function h(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViAvatar shape="circle" @error="onError" src="/vity-ui-demo/imgs/error.jpg">\r
      <ViIcon size="30" name="tupian" />\r
    </ViAvatar>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
const onError = (e: Event) => {\r
  console.log(e)\r
}\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>回退行为</h2>\r
    <p>图片加载失败时的回退行为。</p>\r
</div>`}typeof h=="function"&&h(z);const F={class:"item"},y=m({__name:"avatar4.preview",setup(e){const a=["fill","contain","cover","none","scale-down"];return(t,c)=>{const r=v("ViAvatar");return s(),o("div",F,[(s(),o(p,null,u(a,n=>i(r,{size:"80",key:n,fit:n,shape:"square",src:"/vity-ui-demo/imgs/demo.jpg"},null,8,["fit"])),64))])}}});function g(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViAvatar size="80" v-for="fit in fits" :key="fit" :fit="fit" shape="square" src="/vity-ui-demo/imgs/demo.jpg" />\r
  </div>\r
</template>\r
<script setup lang="ts">\r
const fits=['fill', 'contain', 'cover', 'none', 'scale-down']\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>适应容器</h2>\r
    <p>当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致</p>\r
</div>`}typeof g=="function"&&g(y);const M={class:"demo"},L=_("h1",null,"Avatar 头像",-1),O=_("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1),D=m({__name:"avatar",setup(e){const a=j([]);return k(async()=>{const t=await Object.assign({"../preview/avatar/avatar1.preview.vue":V,"../preview/avatar/avatar2.preview.vue":B,"../preview/avatar/avatar3.preview.vue":z,"../preview/avatar/avatar4.preview.vue":y});for(const c in t){const r=c,n=t[c];a.value.push({name:r,component:q(n)})}}),(t,c)=>(s(),o("div",M,[L,O,(s(!0),o(p,null,u(a.value,r=>(s(),x(b,{key:r.name,component:r.component},null,8,["component"]))),128))]))}});export{D as default};
