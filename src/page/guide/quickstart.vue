<template>
  <div class="demo">
    <h1>快速开始</h1>
    <p>本节将介绍如何在项目中使用 Vity UI。</p>
    <h2>用法</h2>
    <h3>完整引入</h3>
    <p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p>
    <div class="code"><highlightjs autodetect :code="codeHtml1" /></div>
    <h3>手动导入</h3>
    <p>在需要使用组件的地方导入组件后使用。</p>
    <div class="code"><highlightjs autodetect :code="codeHtml2" /></div>
    <p>手动导入任然需要导入css。</p>
    <div class="code"><highlightjs autodetect :code="codeHtml3" /></div>
    <h2>开始使用</h2>
    <p>现在你可以启动项目了。 对于每个组件的用法，请查阅对应的独立文档。</p>
  </div>
</template>
  
<script setup lang='ts'>
const codeHtml1=`// main.ts
import { createApp } from 'vue'
import VityUi from 'vity-ui'
import 'vity-ui/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(VityUi)
app.mount('#app')`
const codeHtml2=`<template>
<el-button>我是 ElButton</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
<\/script>
`
const codeHtml3=`import 'vity-ui/style.css'`
</script>
  
<style></style>