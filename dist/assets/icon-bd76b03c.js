import{_ as m}from"./PreView.vue_vue_type_script_setup_true_lang-18d824b1.js";import{d as s,j as u,r as p,c as i,b as d,u as f,F as I,o as e,i as V,e as h,a as r}from"./index-25e59a09.js";const a=s({__name:"icon1.preview",setup(n){const o=u.ViIconConfig.getAllIconList();return(_,C)=>{const l=p("ViIcon");return e(!0),i(I,null,d(f(o),t=>(e(),V(l,{size:"30",name:t.font_class,key:t.unicode},null,8,["name"]))),128)}}});function c(n){n.__sourceCode=`<template>\r
  <ViIcon size="30" v-for="item in iconList" :name="item.font_class" :key="item.unicode"></ViIcon>\r
</template>\r
\r
<script setup lang="ts">\r
import { ViIconConfig } from 'vity-ui'\r
const iconList = ViIconConfig.getAllIconList()\r
<\/script>`,n.__sourceCodeTitle=`<div>\r
    <h2>所有图标</h2>\r
</div>`}typeof c=="function"&&c(a);const g={class:"demo"},v=r("h1",null,"Icon 图标",-1),k=r("p",null,"Vity UI 提供了一套常用的图标集合。",-1),y=s({__name:"icon",setup(n){return(o,_)=>(e(),i("div",g,[v,k,h(m,{component:a})]))}});export{y as default};
