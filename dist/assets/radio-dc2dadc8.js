import{d as c,r,a as n,c as u,b as e,f as o,w as t,o as p,g as d}from"./index-906fd595.js";const m={class:"demo"},h=e("h1",null,"Radio 单选框",-1),V=e("p",null,"在一组备选项中进行单选",-1),f=e("h2",null,"基础用法",-1),v=e("p",null,"单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。",-1),R=e("p",null," 要使用 Radio 组件，只需要设置v-model绑定变量， 选中意味着变量的值为相应 Radio label属性的值， label可以是String、Number 或 Boolean。 ",-1),b={class:"example"},x={class:"item"},g=c({__name:"radio",setup(B){const a=r(1);return(N,s)=>{const l=n("ViRadio"),i=n("ViRadioGroup");return p(),u("div",m,[h,V,f,v,R,e("div",b,[e("div",x,[o(i,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=_=>a.value=_)},{default:t(()=>[o(l,{label:1},{default:t(()=>[d("Options 1")]),_:1}),o(l,{label:2},{default:t(()=>[d("Options 2")]),_:1})]),_:1},8,["modelValue"])])])])}}});export{g as default};
