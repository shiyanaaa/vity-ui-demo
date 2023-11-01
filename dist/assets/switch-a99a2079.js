import{_ as i}from"./codeDemo.vue_vue_type_style_index_0_lang-d9774bc2.js";import{d as r,g as m,r as p,c as V,e as t,w as n,a,o as c}from"./index-40fa1f0c.js";const v={class:"demo"},_=a("h1",null,"Switch 开关",-1),h=a("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1),w=a("h2",null,"基础用法",-1),S=a("p",null," 绑定 v-model 到一个 Boolean 类型的变量。 可以使用 closeColor 属性与 openColor 属性来设置开关的背景色。 ",-1),f={class:"item"},C=a("h2",null,"尺寸",-1),U={class:"item"},z=a("h2",null,"禁用状态",-1),b=a("p",null,"设置disabled属性，接受一个Boolean，设置true即可禁用。",-1),B={class:"item"},E=r({__name:"switch",setup(g){const o=m(!0),u=m(!0),s=[`<template>
    <ViSwitch v-model="value1"></ViSwitch>
    <ViSwitch closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
</template>

<script setup lang="ts">
    const value1 = ref(true)
    const value2 = ref(true)
<\/script>
`,`<template>
    <ViSwitch size="small" v-model="value1"></ViSwitch>
    <ViSwitch size="default" v-model="value1"></ViSwitch>
    <ViSwitch size="large" v-model="value1"></ViSwitch>
</template>`,`<template>
    <ViSwitch disabled v-model="value1"></ViSwitch>
    <ViSwitch disabled closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
</template>`];return(x,e)=>{const d=p("ViSwitch");return c(),V("div",v,[_,h,w,S,t(i,{code:s[0]},{default:n(()=>[a("div",f,[t(d,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l)},null,8,["modelValue"]),t(d,{closeColor:"red",openColor:"purple",modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=l=>u.value=l)},null,8,["modelValue"])])]),_:1},8,["code"]),C,t(i,{code:s[0]},{default:n(()=>[a("div",U,[t(d,{size:"small",modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l)},null,8,["modelValue"]),t(d,{size:"default",modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l)},null,8,["modelValue"]),t(d,{size:"large",modelValue:o.value,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value=l)},null,8,["modelValue"])])]),_:1},8,["code"]),z,b,t(i,{code:s[0]},{default:n(()=>[a("div",B,[t(d,{disabled:"",modelValue:o.value,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value=l)},null,8,["modelValue"]),t(d,{disabled:"",closeColor:"red",openColor:"purple",modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=l=>u.value=l)},null,8,["modelValue"])])]),_:1},8,["code"])])}}});export{E as default};
