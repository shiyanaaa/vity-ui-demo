import{d,g as m,r as i,o as t,c as r,a as o,k as u,n as _,e as c,l as v,w as h,i as f,p as C,F as g}from"./index-5b2f987f.js";const x={class:"codeDemo"},k={class:"example"},w={class:"content"},B={class:"inner"},$=d({__name:"codeDemo",props:{code:{}},setup(a){const e=m(!1);return(s,n)=>{const l=i("vi-icon"),p=i("highlightjs");return t(),r("div",x,[o("div",k,[o("div",w,[u(s.$slots,"default")]),o("div",{class:_(["example-tools",e.value?"is-chose":""])},[o("span",{class:"tools-btn",onClick:n[0]||(n[0]=y=>e.value=!e.value)},[c(l,{size:"24",name:"kaifa-xianxing"})])],2),o("div",{class:_(["codeBox",e.value?"is-show":""])},[o("div",B,[c(p,{autodetect:"",code:s.$props.code},null,8,["code"])])],2)])])}}});const D=["innerHTML"],V=d({__name:"PreView",props:{component:{}},setup(a){const e=a,s=v(()=>e.component.__sourceCode);return(n,l)=>(t(),r(g,null,[o("div",{class:"demo-item",innerHTML:e.component.__sourceCodeTitle},null,8,D),c($,{code:s.value},{default:h(()=>[(t(),f(C(e.component)))]),_:1},8,["code"])],64))}});export{V as _};