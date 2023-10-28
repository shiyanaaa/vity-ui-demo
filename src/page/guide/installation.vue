<template>
  <div class="demo">
    <h1>安装</h1>
    <h2>环境支持</h2>
    <p>Vity UI 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill 。</p>
    <p>由于 Vue 3 不再支持 IE11，Vity UI 也不再支持 IE 浏览器。</p>
    <h3>版本</h3>
    <p>Vity UI 目前还处于快速开发迭代中。</p>
    <p>当前最新版本：<strong>{{ version }}</strong></p>
    <h2>使用包管理器</h2>
    <p>我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 Vity UI，然后您就可以使用打包工具，例如 Vite 或 webpack。</p>
    <div class="code"><highlightjs autodetect :code="codeHtml1" /></div>
  </div>
</template>
  
<script setup lang='ts'>
import config from '../../../package.json'
const version=config.dependencies['vity-ui']
const codeHtml1=`# NPM
$ npm install vity-ui --save

# Yarn
$ yarn add vity-ui

# pnpm
$ pnpm install vity-ui`
</script>
  
<style></style>