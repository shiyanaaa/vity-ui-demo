import{_ as u}from"./codeDemo.vue_vue_type_style_index_0_lang-d9774bc2.js";import{d as g,r as f,c as r,e as l,w as a,a as e,o as s,F as n,b as p,f as o,t as c}from"./index-40fa1f0c.js";const y={class:"demo"},T=e("h1",null,"Tag 标签",-1),V=e("p",null,"用于标记和选择。",-1),h=e("h2",null,"基础用法",-1),F=e("p",null,"由 type 属性来选择 tag 的类型。 也可以通过 color 属性来自定义背景色。",-1),v=e("h2",null,"不同尺寸",-1),C=e("p",null,"Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。",-1),z=e("p",null,"使用 size 属性来设置额外尺寸, 可选值包括 large, default 或 small.",-1),L=e("h2",null,"镂空",-1),w=e("p",null,"设置 plain 为 true ，可以显示镂空Tag",-1),x=e("h2",null,"自定义颜色",-1),B=e("p",null,"设置 color 可以显示不同颜色",-1),E=g({__name:"tag",setup(N){const _=["primary","warning","error","success","info"],m=["#996699","#003399","#9933FF","#FF99CC","#0099CC","#FF0033"],d=[`<template>
    <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>
</template>

<script>
    const tagType=['primary','warning','error','success','info']
<\/script>`,`<template>
    <ViTag size="small" type="primary">small</ViTag>
    <ViTag size="default" type="primary">default</ViTag>
    <ViTag size="large" type="primary">large</ViTag>
</template>`,`<template>
    <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>
    <ViTag plain v-for="item in tagType" :type="item">{{ item }}</ViTag>
</template>`,`<template>
    <ViTag v-for="item in colorList" :color="item">{{ item }}</ViTag>
    <ViTag plain v-for="item in colorList" :color="item">{{ item }}</ViTag>
</template>

<script>
    const colorList: Array<string> = ['#996699', '#003399', '#9933FF', '#FF99CC', '#0099CC', '#FF0033']
<\/script>`];return(k,b)=>{const i=f("ViTag");return s(),r("div",y,[T,V,h,F,l(u,{code:d[0]},{default:a(()=>[e("div",null,[(s(),r(n,null,p(_,t=>l(i,{type:t},{default:a(()=>[o(c(t),1)]),_:2},1032,["type"])),64))])]),_:1},8,["code"]),v,C,z,l(u,{code:d[1]},{default:a(()=>[e("div",null,[l(i,{size:"small",type:"primary"},{default:a(()=>[o("small")]),_:1}),l(i,{size:"default",type:"primary"},{default:a(()=>[o("default")]),_:1}),l(i,{size:"large",type:"primary"},{default:a(()=>[o("large")]),_:1})])]),_:1},8,["code"]),L,w,l(u,{code:d[2]},{default:a(()=>[e("div",null,[(s(),r(n,null,p(_,t=>l(i,{type:t},{default:a(()=>[o(c(t),1)]),_:2},1032,["type"])),64))]),e("div",null,[(s(),r(n,null,p(_,t=>l(i,{plain:"",type:t},{default:a(()=>[o(c(t),1)]),_:2},1032,["type"])),64))])]),_:1},8,["code"]),x,B,l(u,{code:d[3]},{default:a(()=>[e("div",null,[(s(),r(n,null,p(m,t=>l(i,{color:t},{default:a(()=>[o(c(t),1)]),_:2},1032,["color"])),64))]),e("div",null,[(s(),r(n,null,p(m,t=>l(i,{plain:"",color:t},{default:a(()=>[o(c(t),1)]),_:2},1032,["color"])),64))])]),_:1},8,["code"])])}}});export{E as default};
