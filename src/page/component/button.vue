<script setup lang="ts">

import PreView from '@/components/PreView.vue';
import buttonPreview1 from "../preview/button/button1.preview.vue"
import buttonPreview2 from "../preview/button/button2.preview.vue"
import buttonPreview3 from "../preview/button/button3.preview.vue"
import buttonPreview4 from "../preview/button/button4.preview.vue"
import buttonPreview5 from "../preview/button/button5.preview.vue"
import buttonPreview6 from "../preview/button/button6.preview.vue"
import buttonPreview7 from "../preview/button/button7.preview.vue"
</script>

<template>
  <div class="demo">
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>
    <PreView  :component="buttonPreview1"/>
    <PreView  :component="buttonPreview2"/>
    <PreView  :component="buttonPreview3"/>
    <PreView  :component="buttonPreview4"/>
    <PreView  :component="buttonPreview5"/>
    <PreView  :component="buttonPreview6"/>
    <PreView  :component="buttonPreview7"/>
  </div>
</template>

<style scoped lang="scss"></style>
