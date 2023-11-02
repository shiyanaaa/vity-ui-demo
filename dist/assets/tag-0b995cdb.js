import{d,r as f,c as i,F as s,b as u,o as r,e as c,w as p,f as l,t as g,_ as x,a as m,g as k,h as $,m as b,i as z}from"./index-c21b326a.js";import{_ as L}from"./PreView.vue_vue_type_script_setup_true_lang-83741132.js";const h=d({__name:"tag1.preview",setup(e){const a=["primary","warning","error","success","info"];return(o,_)=>{const n=f("ViTag");return r(),i("div",null,[(r(),i(s,null,u(a,t=>c(n,{type:t},{default:p(()=>[l(g(t),1)]),_:2},1032,["type"])),64))])}}});function v(e){e.__sourceCode=`<template>\r
  <div>\r
    <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const tagType = ['primary', 'warning', 'error', 'success', 'info']\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>由 type 属性来选择 tag 的类型。</p>\r
</div>`}typeof v=="function"&&v(h);function y(e){e.__sourceCode=`<template>\r
  <div>\r
    <ViTag size="small" type="primary">small</ViTag>\r
    <ViTag size="default" type="primary">default</ViTag>\r
    <ViTag size="large" type="primary">large</ViTag>\r
  </div>\r
</template>`,e.__sourceCodeTitle=`<div>\r
    <h2>不同尺寸</h2>\r
    <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>\r
    <p>使用 size 属性来设置额外尺寸, 可选值包括 large, default 或 small.</p>\r
</div>`}const w={};function B(e,a){const o=f("ViTag");return r(),i("div",null,[c(o,{size:"small",type:"primary"},{default:p(()=>[l("small")]),_:1}),c(o,{size:"default",type:"primary"},{default:p(()=>[l("default")]),_:1}),c(o,{size:"large",type:"primary"},{default:p(()=>[l("large")]),_:1})])}typeof y=="function"&&y(w);const N=x(w,[["render",B]]),C=d({__name:"tag3.preview",setup(e){const a=["primary","warning","error","success","info"];return(o,_)=>{const n=f("ViTag");return r(),i(s,null,[m("div",null,[(r(),i(s,null,u(a,t=>c(n,{type:t},{default:p(()=>[l(g(t),1)]),_:2},1032,["type"])),64))]),m("div",null,[(r(),i(s,null,u(a,t=>c(n,{plain:"",type:t},{default:p(()=>[l(g(t),1)]),_:2},1032,["type"])),64))])],64)}}});function T(e){e.__sourceCode=`<template>\r
  <div>\r
    <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>\r
  </div>\r
  <div>\r
    <ViTag plain v-for="item in tagType" :type="item">{{ item }}</ViTag>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const tagType = ['primary', 'warning', 'error', 'success', 'info']\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>镂空</h2>\r
    <p>设置 plain 为 true ，可以显示镂空Tag</p>\r
</div>`}typeof T=="function"&&T(C);const F=d({__name:"tag4.preview",setup(e){const a=["#996699","#003399","#9933FF","#FF99CC","#0099CC","#FF0033"];return(o,_)=>{const n=f("ViTag");return r(),i(s,null,[m("div",null,[(r(),i(s,null,u(a,t=>c(n,{color:t},{default:p(()=>[l(g(t),1)]),_:2},1032,["color"])),64))]),m("div",null,[(r(),i(s,null,u(a,t=>c(n,{plain:"",color:t},{default:p(()=>[l(g(t),1)]),_:2},1032,["color"])),64))])],64)}}});function V(e){e.__sourceCode=`<template>\r
  <div>\r
    <ViTag v-for="item in colorList" :color="item">{{ item }}</ViTag>\r
  </div>\r
  <div>\r
    <ViTag plain v-for="item in colorList" :color="item">{{ item }}</ViTag>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const colorList = ['#996699', '#003399', '#9933FF', '#FF99CC', '#0099CC', '#FF0033']\r
<\/script>`,e.__sourceCodeTitle=`<div>\r
    <h2>自定义颜色</h2>\r
    <p>设置 color 可以显示不同颜色</p>\r
</div>`}typeof V=="function"&&V(F);const M={class:"demo"},j=m("h1",null,"Tag 标签",-1),D=m("p",null,"用于标记和选择。",-1),P=d({__name:"tag",setup(e){const a=k([]);return $(async()=>{const o=await Object.assign({"../preview/tag/tag1.preview.vue":h,"../preview/tag/tag2.preview.vue":N,"../preview/tag/tag3.preview.vue":C,"../preview/tag/tag4.preview.vue":F});for(const _ in o){const n=_,t=o[_];a.value.push({name:n,component:b(t)})}}),(o,_)=>(r(),i("div",M,[j,D,(r(!0),i(s,null,u(a.value,n=>(r(),z(L,{key:n.name,component:n.component},null,8,["component"]))),128))]))}});export{P as default};
