import{d as u,r as p,c as o,a as v,F as _,b as l,o as s,e as i,_ as $,w as m,f as j,g as k,h as q,m as x,i as y}from"./index-781cca63.js";import{_ as b}from"./PreView.vue_vue_type_script_setup_true_lang-6fae67ac.js";const C={class:"item"},I={class:"item"},V=u({__name:"avatar1.preview",setup(e){const t=[20,30,40,50,60];return(r,c)=>{const a=p("ViAvatar");return s(),o(_,null,[v("div",C,[(s(),o(_,null,l(t,n=>i(a,{shape:"square",src:"../imgs/avatar.jpg",size:n},null,8,["size"])),64))]),v("div",I,[(s(),o(_,null,l(t,n=>i(a,{shape:"circle",src:"../imgs/avatar.jpg",size:n},null,8,["size"])),64))])],64)}}});function d(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViAvatar shape="square" src="../imgs/avatar.jpg" v-for="item in sizes" :size="item"></ViAvatar>\r
  </div>\r
  <div class="item">\r
    <ViAvatar shape="circle" src="../imgs/avatar.jpg" v-for="item in sizes" :size="item"></ViAvatar>\r
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
    <ViAvatar shape="square" src="../imgs/avatar.jpg"></ViAvatar>\r
    <ViAvatar shape="square" size="50"><ViIcon size="40" name="yonghu" /></ViAvatar>\r
    <ViAvatar shape="square" size="50">user</ViAvatar>\r
  </div>\r
</template>`,e.__sourceCodeTitle=`<div>\r
    <h2>展示类型</h2>\r
    <p>支持使用图片，图标或者文字作为 Avatar。</p>\r
</div>`}const A={},E={class:"item"};function T(e,t){const r=p("ViAvatar"),c=p("ViIcon");return s(),o("div",E,[i(r,{shape:"square",src:"../imgs/avatar.jpg"}),i(r,{shape:"square",size:"50"},{default:m(()=>[i(c,{size:"40",name:"yonghu"})]),_:1}),i(r,{shape:"square",size:"50"},{default:m(()=>[j("user")]),_:1})])}typeof f=="function"&&f(A);const B=$(A,[["render",T]]),N={class:"item"},z=u({__name:"avatar3.preview",setup(e){const t=r=>{console.log(r)};return(r,c)=>{const a=p("ViIcon"),n=p("ViAvatar");return s(),o("div",N,[i(n,{shape:"circle",onError:t,src:"../imgs/error.jpg"},{default:m(()=>[i(a,{size:"30",name:"tupian"})]),_:1})])}}});function h(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViAvatar shape="circle" @error="onError" src="../imgs/error.jpg">\r
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
</div>`}typeof h=="function"&&h(z);const F={class:"item"},w=u({__name:"avatar4.preview",setup(e){const t=["fill","contain","cover","none","scale-down"];return(r,c)=>{const a=p("ViAvatar");return s(),o("div",F,[(s(),o(_,null,l(t,n=>i(a,{size:"80",key:n,fit:n,shape:"square",src:"../imgs/demo.jpg"},null,8,["fit"])),64))])}}});function g(e){e.__sourceCode=`<template>\r
  <div class="item">\r
    <ViAvatar size="80" v-for="fit in fits" :key="fit" :fit="fit" shape="square" src="../imgs/demo.jpg" />\r
  </div>\r
</template>\r
<script setup lang="ts">\r
const fits=['fill', 'contain', 'cover', 'none', 'scale-down']\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>适应容器</h2>\r
    <p>当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致</p>\r
</div>`}typeof g=="function"&&g(w);const M={class:"demo"},L=v("h1",null,"Avatar 头像",-1),O=v("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1),D=u({__name:"avatar",setup(e){const t=k([]);return q(async()=>{const r=await Object.assign({"../preview/avatar/avatar1.preview.vue":V,"../preview/avatar/avatar2.preview.vue":B,"../preview/avatar/avatar3.preview.vue":z,"../preview/avatar/avatar4.preview.vue":w});for(const c in r){const a=c,n=r[c];t.value.push({name:a,component:x(n)})}}),(r,c)=>(s(),o("div",M,[L,O,(s(!0),o(_,null,l(t.value,a=>(s(),y(b,{key:a.name,component:a.component},null,8,["component"]))),128))]))}});export{D as default};
