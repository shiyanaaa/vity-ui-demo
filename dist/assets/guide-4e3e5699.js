import{d as _,s as h,l as m,r as n,v,x as g,a as s,c as x,e as t,b as d,o as V}from"./index-63cd9dd5.js";const f={style:{display:"flex",height:"100%"}},y={style:{height:"calc(100vh - 60px)","padding-left":"var(--main-padding)"}},b={style:{padding:"15px",height:"calc(100vh - 60px)",width:"100%","overflow-y":"auto"}},w={style:{"padding-right":"var(--main-padding)"}},k=_({__name:"guide",setup(B){const i=h(),l=m(),e=n("button"),r=n([{index:1,label:"基础",isGroup:!0,children:[{index:"installation",label:"安装"},{index:"quickstart",label:"快速开始"}]}]);return v(e,a=>{l.push(a)}),g(()=>{e.value=i.name}),(a,o)=>{const u=s("ViMenu"),c=s("RouterView");return V(),x("div",f,[t("div",y,[d(u,{rightBorder:"",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=p=>e.value=p),data:r.value},null,8,["modelValue","data"])]),t("div",b,[t("div",w,[d(c)])])])}}});export{k as default};
