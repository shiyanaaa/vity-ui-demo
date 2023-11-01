import{_ as m}from"./PreView.vue_vue_type_script_setup_true_lang-f0a1868c.js";import{d as c,i as p,r as u,c as i,b as d,u as f,F as I,o as e,j as V,e as h,a as r}from"./index-8af5188c.js";import"./codeDemo.vue_vue_type_style_index_0_lang-a445144f.js";const a=c({__name:"icon1.preview",setup(n){const o=p.ViIconConfig.getAllIconList();return(_,k)=>{const l=u("ViIcon");return e(!0),i(I,null,d(f(o),t=>(e(),V(l,{size:"30",name:t.font_class,key:t.unicode},null,8,["name"]))),128)}}});function s(n){n.__sourceCode=`<template>\r
  <ViIcon size="30" v-for="item in iconList" :name="item.font_class" :key="item.unicode"></ViIcon>\r
</template>\r
\r
<script setup lang="ts">\r
import { ViIconConfig } from 'vity-ui'\r
const iconList = ViIconConfig.getAllIconList()\r
<\/script>\r
\r
<style></style>`,n.__sourceCodeTitle=`<div>\r
    <h2>展示所有图标</h2>\r
</div>`}typeof s=="function"&&s(a);const g={class:"demo"},v=r("h1",null,"Icon 图标",-1),y=r("p",null,"Vity UI 提供了一套常用的图标集合。",-1),B=c({__name:"icon",setup(n){return(o,_)=>(e(),i("div",g,[v,y,h(m,{component:a})]))}});export{B as default};
