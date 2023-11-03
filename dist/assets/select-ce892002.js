import{d as c,g as p,r as d,c as u,e as s,o as i,h as z,m as w,F as g,b as $,a as V,i as k}from"./index-25e59a09.js";import{_ as U}from"./PreView.vue_vue_type_script_setup_true_lang-18d824b1.js";const h={class:"item"},f=c({__name:"select1.preview",setup(o){const l=p(),n=[{label:"测试1",value:"1"},{label:"测试2",value:"2"},{label:"测试3",value:"3"}];return(r,e)=>{const a=d("ViSelect");return i(),u("div",h,[s(a,{size:"small",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),options:n},null,8,["modelValue"]),s(a,{size:"default",modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),options:n},null,8,["modelValue"]),s(a,{size:"large",modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),options:n},null,8,["modelValue"])])}}});function v(o){o.__sourceCode=`<template>\r
  <div class="item">\r
    <ViSelect size="small" v-model="value" :options="options"></ViSelect>\r
    <ViSelect size="default" v-model="value" :options="options"></ViSelect>\r
    <ViSelect size="large" v-model="value" :options="options"></ViSelect>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref()\r
const options = [\r
  { label: '测试1', value: '1' },\r
  { label: '测试2', value: '2' },\r
  { label: '测试3', value: '3' }\r
]\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>适用广泛的基础单选 v-model 的值为当前被选中的 options 的 value 属性值</p>\r
</div>`}typeof v=="function"&&v(f);const x={class:"item"},b=c({__name:"select2.preview",setup(o){const l=p(),n=[{label:"测试1",value:"1",disabled:!0},{label:"测试2",value:"2"},{label:"测试3",value:"3"}];return(r,e)=>{const a=d("ViSelect");return i(),u("div",x,[s(a,{size:"small",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),options:n},null,8,["modelValue"]),s(a,{size:"default",modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),options:n},null,8,["modelValue"]),s(a,{size:"large",modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),options:n},null,8,["modelValue"])])}}});function m(o){o.__sourceCode=`<template>\r
  <div class="item">\r
    <ViSelect size="small" v-model="value" :options="options"></ViSelect>\r
    <ViSelect size="default" v-model="value" :options="options"></ViSelect>\r
    <ViSelect size="large" v-model="value" :options="options"></ViSelect>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref()\r
\r
const options = [\r
  { label: '测试1', value: '1', disabled: true },\r
  { label: '测试2', value: '2' },\r
  { label: '测试3', value: '3' }\r
]\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>有禁用选项</h2>\r
    <p>在 option 中，设定 disabled 值为 true，即可禁用该选项</p>\r
</div>`}typeof m=="function"&&m(b);const C={class:"item"},S=c({__name:"select3.preview",setup(o){const l=p(),n=[{label:"测试1",value:"1"},{label:"测试2",value:"2"},{label:"测试3",value:"3"}];return(r,e)=>{const a=d("ViSelect");return i(),u("div",C,[s(a,{disabled:"",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),options:n},null,8,["modelValue"])])}}});function _(o){o.__sourceCode=`<template>\r
  <div class="item">\r
    <ViSelect disabled v-model="value" :options="options"></ViSelect>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref()\r
const options = [\r
  { label: '测试1', value: '1' },\r
  { label: '测试2', value: '2' },\r
  { label: '测试3', value: '3' }\r
]\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>禁用状态</h2>\r
    <p>禁用整个选择器组件</p>\r
    <p>为 vi-select 设置 disabled属性，则整个选择器不可用。</p>\r
</div>`}typeof _=="function"&&_(S);const y={class:"demo"},B=V("h1",null,"Select 选择器",-1),N=V("p",null,"当选项过多时，使用下拉菜单展示并选择内容。",-1),M=c({__name:"select",setup(o){const l=p([]);return z(async()=>{const n=await Object.assign({"../preview/select/select1.preview.vue":f,"../preview/select/select2.preview.vue":b,"../preview/select/select3.preview.vue":S});for(const r in n){const e=r,a=n[r];l.value.push({name:e,component:w(a)})}}),(n,r)=>(i(),u("div",y,[B,N,(i(!0),u(g,null,$(l.value,e=>(i(),k(U,{key:e.name,component:e.component},null,8,["component"]))),128))]))}});export{M as default};
