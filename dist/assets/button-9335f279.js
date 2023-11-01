import{_ as m}from"./PreView.vue_vue_type_script_setup_true_lang-f0a1868c.js";import{d as _,r as f,c as e,a as l,F as p,b as u,o as r,e as o,w as c,f as s,t as a,g as x}from"./index-8af5188c.js";import"./codeDemo.vue_vue_type_style_index_0_lang-a445144f.js";const $=_({__name:"button1.preview",setup(y){const i=[{type:"primary"},{type:"warning"},{type:"success"},{type:"info"},{type:"error"}];return(d,B)=>{const t=f("ViButton");return r(),e(p,null,[l("div",null,[(r(),e(p,null,u(i,n=>o(t,{key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{plain:"",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{round:"",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))])],64)}}});function k(y){y.__sourceCode=`<template>\r
  <div>\r
    <ViButton v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton plain v-for="item in btn" :key="item.type" :type="item.type">{{\r
      item.type\r
    }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton round v-for="item in btn" :key="item.type" :type="item.type">{{\r
      item.type\r
    }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
interface Btn {\r
  type: string\r
}\r
const btn = [\r
  { type: 'primary' },\r
  { type: 'warning' },\r
  { type: 'success' },\r
  { type: 'info' },\r
  { type: 'error' }\r
]\r
<\/script>`,y.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>使用 type、plain、round 和 circle 来定义按钮的样式。</p>\r
</div>`}typeof k=="function"&&k($);const F=_({__name:"button2.preview",setup(y){const i=[{type:"primary"},{type:"warning"},{type:"success"},{type:"info"},{type:"error"}];return(d,B)=>{const t=f("ViButton");return r(),e(p,null,[l("div",null,[(r(),e(p,null,u(i,n=>o(t,{disabled:"",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{disabled:"",plain:"",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))])],64)}}});function b(y){y.__sourceCode=`<template>\r
  <div>\r
    <ViButton disabled v-for="item in btn" :key="item.type" :type="item.type">{{\r
      item.type\r
    }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton disabled plain v-for="item in btn" :key="item.type" :type="item.type">{{\r
      item.type\r
    }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
interface Btn {\r
  type: string\r
}\r
const btn = [\r
  { type: 'primary' },\r
  { type: 'warning' },\r
  { type: 'success' },\r
  { type: 'info' },\r
  { type: 'error' }\r
]\r
<\/script>\r
\r
<style></style>`,y.__sourceCodeTitle=`<div>\r
    <h2>禁用状态</h2>\r
    <p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>\r
    <p>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>\r
</div>`}typeof b=="function"&&b(F);const z=_({__name:"button3.preview",setup(y){const i=[{type:"primary"},{type:"warning"},{type:"success"},{type:"info"},{type:"error"}];return(d,B)=>{const t=f("ViButton");return r(),e(p,null,[l("div",null,[(r(),e(p,null,u(i,n=>o(t,{link:"",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{disabled:"",link:"",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))])],64)}}});function V(y){y.__sourceCode=`<template>\r
  <div>\r
    <ViButton link v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton disabled link v-for="item in btn" :key="item.type" :type="item.type">{{\r
      item.type\r
    }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
interface Btn {\r
  type: string\r
}\r
const btn = [\r
  { type: 'primary' },\r
  { type: 'warning' },\r
  { type: 'success' },\r
  { type: 'info' },\r
  { type: 'error' }\r
]\r
<\/script>\r
\r
<style></style>`,y.__sourceCodeTitle=`<div>\r
    <h2>文字按钮</h2>\r
    <p>你可以使用 link 属性来定义文字按钮。</p>\r
</div>`}typeof V=="function"&&V(z);const T=_({__name:"button4.preview",setup(y){const i=[{type:"primary"},{type:"warning"},{type:"success"},{type:"info"},{type:"error"}];return(d,B)=>{const t=f("ViButton");return r(),e(p,null,[l("div",null,[(r(),e(p,null,u(i,n=>o(t,{square:"",icon:"xihuan",key:n.type,type:n.type},null,8,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{circle:"",icon:"shoucang",key:n.type,type:n.type},null,8,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{disabled:"",circle:"",icon:"suoding",key:n.type,type:n.type},null,8,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{square:"",icon:"xihuan",plain:"",key:n.type,type:n.type},null,8,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{circle:"",icon:"xihuan",plain:"",key:n.type,type:n.type},null,8,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{key:n.type,type:n.type,icon:"weizhi"},null,8,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{round:"",key:n.type,type:n.type,icon:"weizhi"},null,8,["type"])),64))])],64)}}});function g(y){y.__sourceCode=`<template>\r
  <div>\r
    <ViButton square icon="xihuan" v-for="item in btn" :key="item.type" :type="item.type" />\r
  </div>\r
  <div>\r
    <ViButton circle icon="shoucang" v-for="item in btn" :key="item.type" :type="item.type" />\r
  </div>\r
  <div>\r
    <ViButton\r
      disabled\r
      circle\r
      icon="suoding"\r
      v-for="item in btn"\r
      :key="item.type"\r
      :type="item.type"\r
    />\r
  </div>\r
  <div>\r
    <ViButton square icon="xihuan" plain v-for="item in btn" :key="item.type" :type="item.type" />\r
  </div>\r
  <div>\r
    <ViButton circle icon="xihuan" plain v-for="item in btn" :key="item.type" :type="item.type" />\r
  </div>\r
  <div>\r
    <ViButton v-for="item in btn" :key="item.type" :type="item.type" icon="weizhi"></ViButton>\r
  </div>\r
  <div>\r
    <ViButton round v-for="item in btn" :key="item.type" :type="item.type" icon="weizhi"></ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
interface Btn {\r
  type: string\r
}\r
const btn = [\r
  { type: 'primary' },\r
  { type: 'warning' },\r
  { type: 'success' },\r
  { type: 'info' },\r
  { type: 'error' }\r
]\r
<\/script>\r
\r
<style></style>`,y.__sourceCodeTitle=`<div>\r
    <h2>图标按钮</h2>\r
    <p>使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。</p>\r
    <p>\r
      使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。\r
      通过向右方添加标签来添加图标， 你也可以使用自定义图标。\r
    </p>\r
</div>`}typeof g=="function"&&g(T);const L=_({__name:"button5.preview",setup(y){const i=[{type:"primary"},{type:"warning"},{type:"success"},{type:"info"},{type:"error"}];return x(!1),(d,B)=>{const t=f("ViButton");return r(),e(p,null,[l("div",null,[(r(),e(p,null,u(i,n=>o(t,{size:"small",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{size:"default",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{size:"large",key:n.type,type:n.type},{default:c(()=>[s(a(n.type),1)]),_:2},1032,["type"])),64))])],64)}}});function h(y){y.__sourceCode=`<template>\r
  <div>\r
        <ViButton size="small" v-for="item in btn" :key="item.type" :type="item.type">{{\r
          item.type\r
        }}</ViButton>\r
      </div>\r
      <div>\r
        <ViButton size="default" v-for="item in btn" :key="item.type" :type="item.type">{{\r
          item.type\r
        }}</ViButton>\r
      </div>\r
      <div>\r
        <ViButton size="large" v-for="item in btn" :key="item.type" :type="item.type">{{item.type}}</ViButton>\r
      </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
interface Btn {\r
  type: string\r
}\r
const btn = [\r
  { type: 'primary' },\r
  { type: 'warning' },\r
  { type: 'success' },\r
  { type: 'info' },\r
  { type: 'error' }\r
]\r
const loading = ref(false)\r
<\/script>\r
\r
<style></style>`,y.__sourceCodeTitle=`<div>\r
    <h2>调整尺寸</h2>\r
    <p>除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</p>\r
    <p>使用 size 属性额外配置尺寸，可使用 large和small两种值。</p>\r
</div>`}typeof h=="function"&&h(L);const q=_({__name:"button6.preview",setup(y){const i=[{type:"primary"},{type:"warning"},{type:"success"},{type:"info"},{type:"error"}],d=x(!1);return(B,t)=>{const n=f("ViButton");return r(),e(p,null,[l("div",null,[(r(),e(p,null,u(i,v=>o(n,{onClick:t[0]||(t[0]=D=>d.value=!d.value),loading:d.value,icon:"weizhi",key:v.type,type:v.type},{default:c(()=>[s(a(v.type),1)]),_:2},1032,["loading","type"])),64))]),l("div",null,[(r(),e(p,null,u(i,v=>o(n,{onClick:t[1]||(t[1]=D=>d.value=!d.value),loading:d.value,icon:"haoping",plain:"",key:v.type,type:v.type},{default:c(()=>[s(a(v.type),1)]),_:2},1032,["loading","type"])),64))])],64)}}});function w(y){y.__sourceCode=`<template>\r
<div>\r
  <ViButton\r
    @click="loading = !loading"\r
    :loading="loading"\r
    icon="weizhi"\r
    v-for="item in btn"\r
    :key="item.type"\r
    :type="item.type"\r
    >{{ item.type }}</ViButton\r
  >\r
</div>\r
<div>\r
  <ViButton\r
    @click="loading = !loading"\r
    :loading="loading"\r
    icon="haoping"\r
    plain\r
    v-for="item in btn"\r
    :key="item.type"\r
    :type="item.type"\r
    >{{ item.type }}</ViButton\r
  >\r
</div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
interface Btn {\r
type: string\r
}\r
const btn = [\r
{ type: 'primary' },\r
{ type: 'warning' },\r
{ type: 'success' },\r
{ type: 'info' },\r
{ type: 'error' }\r
]\r
const loading = ref(false)\r
<\/script>\r
\r
<style></style>`,y.__sourceCodeTitle=`<div>\r
  <h2>加载状态按钮</h2>\r
  <p>点击按钮来加载数据，并向用户反馈加载状态。</p>\r
  <p>通过设置 loading 属性为 true 来显示加载中状态。</p>\r
</div>`}typeof w=="function"&&w(q);const N=_({__name:"button7.preview",setup(y){const i=["#996699","#003399","#9933FF","#FF99CC","#0099CC","#FF0033"];return(d,B)=>{const t=f("ViButton");return r(),e(p,null,[l("div",null,[(r(),e(p,null,u(i,n=>o(t,{color:n,key:n},{default:c(()=>[s(a(n),1)]),_:2},1032,["color"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{color:n,plain:"",key:n},{default:c(()=>[s(a(n),1)]),_:2},1032,["color"])),64))]),l("div",null,[(r(),e(p,null,u(i,n=>o(t,{disabled:"",color:n,plain:"",key:n},{default:c(()=>[s(a(n),1)]),_:2},1032,["color"])),64))])],64)}}});function C(y){y.__sourceCode=`<template>\r
  <div>\r
    <ViButton :color="item" v-for="item in colorList" :key="item"> {{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton :color="item" v-for="item in colorList" plain :key="item">{{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton disabled :color="item" v-for="item in colorList" plain :key="item">{{\r
      item\r
    }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const colorList = ['#996699', '#003399', '#9933FF', '#FF99CC', '#0099CC', '#FF0033'];\r
<\/script>\r
\r
<style></style>`,y.__sourceCodeTitle=`<div>\r
    <h2>自定义颜色</h2>\r
    <p>您可以自定义按钮的颜色。</p>\r
    <p>我们将自动计算按钮处于 hover 和 active 状态时的颜色。</p>\r
</div>`}typeof C=="function"&&C(N);const E={class:"demo"},I=l("h1",null,"Button 按钮",-1),S=l("p",null,"常用的操作按钮。",-1),H=_({__name:"button",setup(y){return(i,d)=>(r(),e("div",E,[I,S,o(m,{component:$}),o(m,{component:F}),o(m,{component:z}),o(m,{component:T}),o(m,{component:L}),o(m,{component:q}),o(m,{component:N})]))}});export{H as default};
