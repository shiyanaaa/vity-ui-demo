import{_ as m}from"./PreView.vue_vue_type_script_setup_true_lang-222fe167.js";import{d as i,j as p,r as u,c as s,b as d,u as f,F as I,o as e,i as V,e as h,a as r}from"./index-40fa1f0c.js";import"./codeDemo.vue_vue_type_style_index_0_lang-d9774bc2.js";const a=i({__name:"icon1.preview",setup(n){const o=p.ViIconConfig.getAllIconList();return(_,C)=>{const l=u("ViIcon");return e(!0),s(I,null,d(f(o),t=>(e(),V(l,{size:"30",name:t.font_class,key:t.unicode},null,8,["name"]))),128)}}});function c(n){n.__sourceCode=`<template>\r
  <ViIcon size="30" v-for="item in iconList" :name="item.font_class" :key="item.unicode"></ViIcon>\r
</template>\r
\r
<script setup lang="ts">\r
import { ViIconConfig } from 'vity-ui'\r
const iconList = ViIconConfig.getAllIconList()\r
<\/script>`,n.__sourceCodeTitle=`<div>\r
    <h2>所有图标</h2>\r
</div>`}typeof c=="function"&&c(a);const g={class:"demo"},v=r("h1",null,"Icon 图标",-1),k=r("p",null,"Vity UI 提供了一套常用的图标集合。",-1),B=i({__name:"icon",setup(n){return(o,_)=>(e(),s("div",g,[v,k,h(m,{component:a})]))}});export{B as default};
