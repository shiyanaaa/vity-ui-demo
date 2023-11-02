import{d,g as u,r as p,c,e as s,o as a,h as S,m as C,F as b,b as $,a as V,i as g}from"./index-f790aab3.js";import{_ as k}from"./PreView.vue_vue_type_script_setup_true_lang-4b2a4df7.js";const U={class:"item"},w=d({__name:"switch1.preview",setup(l){const o=u(!0),r=u(!0);return(n,e)=>{const t=p("ViSwitch");return a(),c("div",U,[s(t,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value=i)},null,8,["modelValue"]),s(t,{closeColor:"red",openColor:"purple",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=i=>r.value=i)},null,8,["modelValue"])])}}});function m(l){l.__sourceCode=`<template>\r
  <div class="item">\r
    <ViSwitch v-model="value1"></ViSwitch>\r
    <ViSwitch closeColor="red" openColor="purple" v-model="value2"></ViSwitch>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value1 = ref(true)\r
const value2 = ref(true)\r
<\/script>`,l.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>\r
      绑定 v-model 到一个 Boolean 类型的变量。 可以使用 closeColor 属性与 openColor\r
      属性来设置开关的背景色。\r
    </p>\r
</div>`}typeof m=="function"&&m(w);const x={class:"item"},h=d({__name:"switch2.preview",setup(l){const o=u(!0);return(r,n)=>{const e=p("ViSwitch");return a(),c("div",x,[s(e,{size:"small",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=t=>o.value=t)},null,8,["modelValue"]),s(e,{size:"default",modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=t=>o.value=t)},null,8,["modelValue"]),s(e,{size:"large",modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=t=>o.value=t)},null,8,["modelValue"])])}}});function v(l){l.__sourceCode=`<template>\r
  <div class="item">\r
    <ViSwitch size="small" v-model="value1"></ViSwitch>\r
    <ViSwitch size="default" v-model="value1"></ViSwitch>\r
    <ViSwitch size="large" v-model="value1"></ViSwitch>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value1 = ref(true)\r
<\/script>`,l.__sourceCodeTitle=`<div>\r
    <h2>尺寸</h2>\r
</div>`}typeof v=="function"&&v(h);const z={class:"item"},f=d({__name:"switch3.preview",setup(l){const o=u(!0),r=u(!0);return(n,e)=>{const t=p("ViSwitch");return a(),c("div",z,[s(t,{disabled:"",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value=i)},null,8,["modelValue"]),s(t,{disabled:"",closeColor:"red",openColor:"purple",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=i=>r.value=i)},null,8,["modelValue"])])}}});function _(l){l.__sourceCode=`<template>\r
  <div class="item">\r
    <ViSwitch disabled v-model="value1"></ViSwitch>\r
    <ViSwitch disabled closeColor="red" openColor="purple" v-model="value2"></ViSwitch>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value1 = ref(true)\r
const value2 = ref(true)\r
<\/script>`,l.__sourceCodeTitle=`<div>\r
    <h2>禁用状态</h2>\r
    <p>设置disabled属性，接受一个Boolean，设置true即可禁用。</p>\r
</div>`}typeof _=="function"&&_(f);const B={class:"demo"},y=V("h1",null,"Switch 开关",-1),N=V("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1),M=d({__name:"switch",setup(l){const o=u([]);return S(async()=>{const r=await Object.assign({"../preview/switch/switch1.preview.vue":w,"../preview/switch/switch2.preview.vue":h,"../preview/switch/switch3.preview.vue":f});for(const n in r){const e=n,t=r[n];o.value.push({name:e,component:C(t)})}}),(r,n)=>(a(),c("div",B,[y,N,(a(!0),c(b,null,$(o.value,e=>(a(),g(k,{key:e.name,component:e.component},null,8,["component"]))),128))]))}});export{M as default};
