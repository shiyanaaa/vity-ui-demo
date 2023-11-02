import{d as u,g as _,r as l,c as d,e as s,w as c,o as r,f as p,h as R,m as h,F as b,b as w,a as f,i as k}from"./index-781cca63.js";import{_ as x}from"./PreView.vue_vue_type_script_setup_true_lang-6fae67ac.js";const g={class:"item"},v=u({__name:"radio1.preview",setup(t){const n=_(1);return(a,e)=>{const o=l("ViRadio"),i=l("ViRadioGroup");return r(),d("div",g,[s(i,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=V=>n.value=V)},{default:c(()=>[s(o,{label:1},{default:c(()=>[p("Options 1")]),_:1}),s(o,{label:2},{default:c(()=>[p("Options 2")]),_:1})]),_:1},8,["modelValue"])])}}});function m(t){t.__sourceCode=`<template>\r
  <div class="item">\r
    <ViRadioGroup v-model="radio">\r
      <ViRadio :label="1">Options 1</ViRadio>\r
      <ViRadio :label="2">Options 2</ViRadio>\r
    </ViRadioGroup>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const radio = ref(1)\r
<\/script>`,t.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。</p>\r
    <p>\r
      要使用 Radio 组件，只需要设置v-model绑定变量， 选中意味着变量的值为相应 Radio label属性的值，\r
      label可以是String、Number 或 Boolean。\r
    </p>\r
</div>`}typeof m=="function"&&m(v);const B={class:"demo"},C=f("h1",null,"Radio 单选框",-1),N=f("p",null,"在一组备选项中进行单选",-1),y=u({__name:"radio",setup(t){const n=_([]);return R(async()=>{const a=await Object.assign({"../preview/radio/radio1.preview.vue":v});for(const e in a){const o=e,i=a[e];n.value.push({name:o,component:h(i)})}}),(a,e)=>(r(),d("div",B,[C,N,(r(!0),d(b,null,w(n.value,o=>(r(),k(x,{key:o.name,component:o.component},null,8,["component"]))),128))]))}});export{y as default};
