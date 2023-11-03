import{d as m,g as c,r as d,i as w,o as a,c as s,a as u,e as i,F as v,w as x,h as b,m as k,b as C}from"./index-8570f262.js";import{_ as y}from"./PreView.vue_vue_type_script_setup_true_lang-edde7871.js";const P=m({__name:"input1.preview",setup(o){const n=c("");return(p,e)=>{const t=d("ViInput");return a(),w(t,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])}}});function V(o){o.__sourceCode=`<template>\r
  <ViInput v-model="text1" placeholder="Please input"></ViInput>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const text1 = ref('')\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>使用 v-model 来绑定输入的数据。</p>\r
</div>`}typeof V=="function"&&V(P);const j={class:"item"},T={class:"item"},B={class:"item"},g=m({__name:"input2.preview",setup(o){const n=c("");return(p,e)=>{const t=d("ViInput");return a(),s(v,null,[u("div",j,[i(t,{width:"250px",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])]),u("div",T,[i(t,{width:"50%",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])]),u("div",B,[i(t,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])])],64)}}});function f(o){o.__sourceCode=`<template>\r
  <div class="item">\r
    <ViInput width="250px" v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
  <div class="item">\r
    <ViInput width="50%" v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
  <div class="item">\r
    <ViInput v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const text = ref('')\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>禁用状态</h2>\r
    <p>通过 disabled 属性指定是否禁用 input 组件</p>\r
</div>`}typeof f=="function"&&f(g);const N={class:"item"},F={class:"item"},M={class:"item"},$=m({__name:"input3.preview",setup(o){const n=c("");return(p,e)=>{const t=d("ViInput");return a(),s(v,null,[u("div",N,[i(t,{width:"250px",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])]),u("div",F,[i(t,{width:"50%",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])]),u("div",M,[i(t,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])])],64)}}});function I(o){o.__sourceCode=`<template>\r
  <div class="item">\r
    <ViInput width="250px" v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
  <div class="item">\r
    <ViInput width="50%" v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
  <div class="item">\r
    <ViInput v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const text = ref('')\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>指定input宽度</h2>\r
    <p>可以通过width属性来设置宽度，默认为100%。</p>\r
</div>`}typeof I=="function"&&I($);const E={class:"item"},L={class:"item"},U=m({__name:"input4.preview",setup(o){const n=c("");return(p,e)=>{const t=d("ViInput"),l=d("ViIcon");return a(),s(v,null,[u("div",E,[i(t,{prefixIcon:"shijian",width:"250px",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r),placeholder:"Please input"},null,8,["modelValue"]),i(t,{suffixIcon:"sousuo",width:"250px",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=r=>n.value=r),placeholder:"Please input"},null,8,["modelValue"])]),u("div",L,[i(t,{width:"250px",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=r=>n.value=r),placeholder:"Please input"},{prefix:x(()=>[i(l,{name:"lingdang"})]),_:1},8,["modelValue"]),i(t,{width:"250px",placeholder:"Please input",modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=r=>n.value=r)},{suffix:x(()=>[i(l,{name:"bianjishuru-xianxing"})]),_:1},8,["modelValue"])])],64)}}});function h(o){o.__sourceCode=`<template>\r
  <div class="item">\r
    <ViInput prefixIcon="shijian" width="250px" v-model="text" placeholder="Please input"></ViInput>\r
    <ViInput suffixIcon="sousuo" width="250px" v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
  <div class="item">\r
    <ViInput width="250px" v-model="text" placeholder="Please input">\r
      <template #prefix>\r
        <ViIcon name="lingdang"></ViIcon>\r
      </template>\r
    </ViInput>\r
    <ViInput width="250px" placeholder="Please input" v-model="text">\r
      <template #suffix>\r
        <ViIcon name="bianjishuru-xianxing"></ViIcon>\r
      </template>\r
    </ViInput>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const text = ref('')\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>带图标的输入框</h2>\r
    <p>带有图标标记输入类型</p>\r
    <p>\r
      要在输入框中添加图标，你可以简单地使用 prefixIcon 和 suffixIcon 属性。 另外， prefix 和 suffix\r
      命名的插槽也能正常工作。\r
    </p>\r
</div>`}typeof h=="function"&&h(U);const O={class:"item"},R={class:"item"},q={class:"item"},z=m({__name:"input5.preview",setup(o){const n=c("");return(p,e)=>{const t=d("ViInput");return a(),s(v,null,[u("div",O,[i(t,{width:"250px",size:"small",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"]),i(t,{width:"250px",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"]),i(t,{width:"250px",size:"large",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])]),u("div",R,[i(t,{prefixIcon:"caiwu-xianxing",width:"250px",size:"small",modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"]),i(t,{prefixIcon:"caiwu-xianxing",width:"250px",modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"]),i(t,{prefixIcon:"caiwu-xianxing",width:"250px",size:"large",modelValue:n.value,"onUpdate:modelValue":e[5]||(e[5]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])]),u("div",q,[i(t,{suffixIcon:"mianfei-xianxing",width:"250px",size:"small",modelValue:n.value,"onUpdate:modelValue":e[6]||(e[6]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"]),i(t,{suffixIcon:"mianfei-xianxing",width:"250px",modelValue:n.value,"onUpdate:modelValue":e[7]||(e[7]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"]),i(t,{suffixIcon:"mianfei-xianxing",width:"250px",size:"large",modelValue:n.value,"onUpdate:modelValue":e[8]||(e[8]=l=>n.value=l),placeholder:"Please input"},null,8,["modelValue"])])],64)}}});function _(o){o.__sourceCode=`<template>\r
  <div class="item">\r
    <ViInput width="250px" size="small" v-model="text" placeholder="Please input"></ViInput>\r
    <ViInput width="250px" v-model="text" placeholder="Please input"></ViInput>\r
    <ViInput width="250px" size="large" v-model="text" placeholder="Please input"></ViInput>\r
  </div>\r
  <div class="item">\r
    <ViInput\r
      prefixIcon="caiwu-xianxing"\r
      width="250px"\r
      size="small"\r
      v-model="text"\r
      placeholder="Please input"\r
    ></ViInput>\r
    <ViInput\r
      prefixIcon="caiwu-xianxing"\r
      width="250px"\r
      v-model="text"\r
      placeholder="Please input"\r
    ></ViInput>\r
    <ViInput\r
      prefixIcon="caiwu-xianxing"\r
      width="250px"\r
      size="large"\r
      v-model="text"\r
      placeholder="Please input"\r
    ></ViInput>\r
  </div>\r
  <div class="item">\r
    <ViInput\r
      suffixIcon="mianfei-xianxing"\r
      width="250px"\r
      size="small"\r
      v-model="text"\r
      placeholder="Please input"\r
    ></ViInput>\r
    <ViInput\r
      suffixIcon="mianfei-xianxing"\r
      width="250px"\r
      v-model="text"\r
      placeholder="Please input"\r
    ></ViInput>\r
    <ViInput\r
      suffixIcon="mianfei-xianxing"\r
      width="250px"\r
      size="large"\r
      v-model="text"\r
      placeholder="Please input"\r
    ></ViInput>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const text = ref('')\r
<\/script>`,o.__sourceCodeTitle=`<div>\r
    <h2>尺寸</h2>\r
    <p>使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。</p>\r
</div>`}typeof _=="function"&&_(z);const A={class:"demo"},D=u("h1",null,"Input 输入框",-1),G=u("p",null,"通过鼠标或键盘输入字符",-1),K=m({__name:"input",setup(o){const n=c([]);return b(async()=>{const p=await Object.assign({"../preview/input/input1.preview.vue":P,"../preview/input/input2.preview.vue":g,"../preview/input/input3.preview.vue":$,"../preview/input/input4.preview.vue":U,"../preview/input/input5.preview.vue":z});for(const e in p){const t=e,l=p[e];n.value.push({name:t,component:k(l)})}}),(p,e)=>(a(),s("div",A,[D,G,(a(!0),s(v,null,C(n.value,t=>(a(),w(y,{key:t.name,component:t.component},null,8,["component"]))),128))]))}});export{K as default};
