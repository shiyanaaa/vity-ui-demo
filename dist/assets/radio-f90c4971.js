import{_ as c}from"./codeDemo.vue_vue_type_style_index_0_lang-d9774bc2.js";import{d as r,g as u,r as n,c as m,e,w as t,a as o,o as p,f as d}from"./index-40fa1f0c.js";const f={class:"demo"},V=o("h1",null,"Radio 单选框",-1),h=o("p",null,"在一组备选项中进行单选",-1),R=o("h2",null,"基础用法",-1),v=o("p",null,"单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。",-1),b=o("p",null," 要使用 Radio 组件，只需要设置v-model绑定变量， 选中意味着变量的值为相应 Radio label属性的值， label可以是String、Number 或 Boolean。 ",-1),x={class:"item"},k=r({__name:"radio",setup(B){const a=u(1);return(N,s)=>{const l=n("ViRadio"),i=n("ViRadioGroup");return p(),m("div",f,[V,h,R,v,b,e(c,{code:""},{default:t(()=>[o("div",x,[e(i,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=_=>a.value=_)},{default:t(()=>[e(l,{label:1},{default:t(()=>[d("Options 1")]),_:1}),e(l,{label:2},{default:t(()=>[d("Options 2")]),_:1})]),_:1},8,["modelValue"])])]),_:1})])}}});export{k as default};