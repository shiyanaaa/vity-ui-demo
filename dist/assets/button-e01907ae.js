import{d as _,r as f,c as i,a as l,F as o,b as c,o as e,e as p,w as a,f as d,t as v,g as b,h as M,m as j,i as D}from"./index-40fa1f0c.js";import{_ as E}from"./PreView.vue_vue_type_script_setup_true_lang-222fe167.js";import"./codeDemo.vue_vue_type_style_index_0_lang-d9774bc2.js";const x=_({__name:"button1.preview",setup(u){const r=["primary","warning","success","info","error"];return(s,y)=>{const t=f("ViButton");return e(),i(o,null,[l("div",null,[(e(),i(o,null,c(r,n=>p(t,{key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{plain:"",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{round:"",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))])],64)}}});function k(u){u.__sourceCode=`<template>\r
  <div>\r
    <ViButton v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton plain v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton round v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const btn = ['primary', 'warning', 'success', 'info', 'error']\r
<\/script>`,u.__sourceCodeTitle=`<div>\r
    <h2>基础用法</h2>\r
    <p>使用 type、plain、round 和 circle 来定义按钮的样式。</p>\r
</div>`}typeof k=="function"&&k(x);const $=_({__name:"button2.preview",setup(u){const r=["primary","warning","success","info","error"];return(s,y)=>{const t=f("ViButton");return e(),i(o,null,[l("div",null,[(e(),i(o,null,c(r,n=>p(t,{disabled:"",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{disabled:"",plain:"",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))])],64)}}});function B(u){u.__sourceCode=`<template>\r
  <div>\r
    <ViButton disabled v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton disabled plain v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const btn = ['primary', 'warning', 'success', 'info', 'error']\r
<\/script>`,u.__sourceCodeTitle=`<div>\r
    <h2>禁用状态</h2>\r
    <p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>\r
    <p>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>\r
</div>`}typeof B=="function"&&B($);const F=_({__name:"button3.preview",setup(u){const r=["primary","warning","success","info","error"];return(s,y)=>{const t=f("ViButton");return e(),i(o,null,[l("div",null,[(e(),i(o,null,c(r,n=>p(t,{link:"",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{disabled:"",link:"",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))])],64)}}});function V(u){u.__sourceCode=`<template>\r
  <div>\r
    <ViButton link v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton disabled link v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const btn = ['primary', 'warning', 'success', 'info', 'error']\r
<\/script>`,u.__sourceCodeTitle=`<div>\r
    <h2>文字按钮</h2>\r
    <p>你可以使用 link 属性来定义文字按钮。</p>\r
</div>`}typeof V=="function"&&V(F);const z=_({__name:"button4.preview",setup(u){const r=["primary","warning","success","info","error"];return(s,y)=>{const t=f("ViButton");return e(),i(o,null,[l("div",null,[(e(),i(o,null,c(r,n=>p(t,{square:"",icon:"xihuan",key:n,type:n},null,8,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{circle:"",icon:"shoucang",key:n,type:n},null,8,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{disabled:"",circle:"",icon:"suoding",key:n,type:n},null,8,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{square:"",icon:"xihuan",plain:"",key:n,type:n},null,8,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{circle:"",icon:"xihuan",plain:"",key:n,type:n},null,8,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{key:n,type:n,icon:"weizhi"},null,8,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{round:"",key:n,type:n,icon:"weizhi"},null,8,["type"])),64))])],64)}}});function g(u){u.__sourceCode=`<template>\r
  <div>\r
    <ViButton square icon="xihuan" v-for="item in btn" :key="item" :type="item" />\r
  </div>\r
  <div>\r
    <ViButton circle icon="shoucang" v-for="item in btn" :key="item" :type="item" />\r
  </div>\r
  <div>\r
    <ViButton disabled circle icon="suoding" v-for="item in btn" :key="item" :type="item" />\r
  </div>\r
  <div>\r
    <ViButton square icon="xihuan" plain v-for="item in btn" :key="item" :type="item" />\r
  </div>\r
  <div>\r
    <ViButton circle icon="xihuan" plain v-for="item in btn" :key="item" :type="item" />\r
  </div>\r
  <div>\r
    <ViButton v-for="item in btn" :key="item" :type="item" icon="weizhi"></ViButton>\r
  </div>\r
  <div>\r
    <ViButton round v-for="item in btn" :key="item" :type="item" icon="weizhi"></ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const btn = ['primary', 'warning', 'success', 'info', 'error']\r
<\/script>`,u.__sourceCodeTitle=`<div>\r
    <h2>图标按钮</h2>\r
    <p>使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。</p>\r
    <p>\r
      使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。\r
      通过向右方添加标签来添加图标， 你也可以使用自定义图标。\r
    </p>\r
</div>`}typeof g=="function"&&g(z);const T=_({__name:"button5.preview",setup(u){const r=["primary","warning","success","info","error"];return b(!1),(s,y)=>{const t=f("ViButton");return e(),i(o,null,[l("div",null,[(e(),i(o,null,c(r,n=>p(t,{size:"small",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{size:"default",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{size:"large",key:n,type:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["type"])),64))])],64)}}});function h(u){u.__sourceCode=`<template>\r
  <div>\r
        <ViButton size="small" v-for="item in btn" :key="item" :type="item">{{\r
          item\r
        }}</ViButton>\r
      </div>\r
      <div>\r
        <ViButton size="default" v-for="item in btn" :key="item" :type="item">{{\r
          item\r
        }}</ViButton>\r
      </div>\r
      <div>\r
        <ViButton size="large" v-for="item in btn" :key="item" :type="item">{{item}}</ViButton>\r
      </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const btn = ['primary', 'warning', 'success', 'info', 'error']\r
const loading = ref(false)\r
<\/script>`,u.__sourceCodeTitle=`<div>\r
    <h2>调整尺寸</h2>\r
    <p>除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</p>\r
    <p>使用 size 属性额外配置尺寸，可使用 large和small两种值。</p>\r
</div>`}typeof h=="function"&&h(T);const L=_({__name:"button6.preview",setup(u){const r=["primary","warning","success","info","error"],s=b(!1);return(y,t)=>{const n=f("ViButton");return e(),i(o,null,[l("div",null,[(e(),i(o,null,c(r,m=>p(n,{onClick:t[0]||(t[0]=N=>s.value=!s.value),loading:s.value,icon:"weizhi",key:m,type:m},{default:a(()=>[d(v(m),1)]),_:2},1032,["loading","type"])),64))]),l("div",null,[(e(),i(o,null,c(r,m=>p(n,{onClick:t[1]||(t[1]=N=>s.value=!s.value),loading:s.value,icon:"haoping",plain:"",key:m,type:m},{default:a(()=>[d(v(m),1)]),_:2},1032,["loading","type"])),64))])],64)}}});function w(u){u.__sourceCode=`<template>\r
  <div>\r
    <ViButton\r
      @click="loading = !loading"\r
      :loading="loading"\r
      icon="weizhi"\r
      v-for="item in btn"\r
      :key="item"\r
      :type="item"\r
      >{{ item }}</ViButton\r
    >\r
  </div>\r
  <div>\r
    <ViButton\r
      @click="loading = !loading"\r
      :loading="loading"\r
      icon="haoping"\r
      plain\r
      v-for="item in btn"\r
      :key="item"\r
      :type="item"\r
      >{{ item }}</ViButton\r
    >\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const btn = ['primary', 'warning', 'success', 'info', 'error']\r
const loading = ref(false)\r
<\/script>\r
\r
<style></style>`,u.__sourceCodeTitle=`<div>\r
  <h2>加载状态按钮</h2>\r
  <p>点击按钮来加载数据，并向用户反馈加载状态。</p>\r
  <p>通过设置 loading 属性为 true 来显示加载中状态。</p>\r
</div>`}typeof w=="function"&&w(L);const q=_({__name:"button7.preview",setup(u){const r=["#996699","#003399","#9933FF","#FF99CC","#0099CC","#FF0033"];return(s,y)=>{const t=f("ViButton");return e(),i(o,null,[l("div",null,[(e(),i(o,null,c(r,n=>p(t,{color:n,key:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["color"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{color:n,plain:"",key:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["color"])),64))]),l("div",null,[(e(),i(o,null,c(r,n=>p(t,{disabled:"",color:n,plain:"",key:n},{default:a(()=>[d(v(n),1)]),_:2},1032,["color"])),64))])],64)}}});function C(u){u.__sourceCode=`<template>\r
  <div>\r
    <ViButton :color="item" v-for="item in colorList" :key="item"> {{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton :color="item" v-for="item in colorList" plain :key="item">{{ item }}</ViButton>\r
  </div>\r
  <div>\r
    <ViButton disabled :color="item" v-for="item in colorList" plain :key="item">{{ item }}</ViButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
const colorList = ['#996699', '#003399', '#9933FF', '#FF99CC', '#0099CC', '#FF0033']\r
<\/script>`,u.__sourceCodeTitle=`<div>\r
    <h2>自定义颜色</h2>\r
    <p>您可以自定义按钮的颜色。</p>\r
    <p>我们将自动计算按钮处于 hover 和 active 状态时的颜色。</p>\r
</div>`}typeof C=="function"&&C(q);const I={class:"demo"},O=l("h1",null,"Button 按钮",-1),P=l("p",null,"常用的操作按钮。",-1),G=_({__name:"button",setup(u){const r=b([]);return M(async()=>{const s=await Object.assign({"../preview/button/button1.preview.vue":x,"../preview/button/button2.preview.vue":$,"../preview/button/button3.preview.vue":F,"../preview/button/button4.preview.vue":z,"../preview/button/button5.preview.vue":T,"../preview/button/button6.preview.vue":L,"../preview/button/button7.preview.vue":q});for(const y in s){const t=y,n=s[y];r.value.push({name:t,component:j(n)})}}),(s,y)=>(e(),i("div",I,[O,P,(e(!0),i(o,null,c(r.value,t=>(e(),D(E,{key:t.name,component:t.component},null,8,["component"]))),128))]))}});export{G as default};
