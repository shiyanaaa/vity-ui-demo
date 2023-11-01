<template>
  <div class="demo">
    <h1>Icon 图标</h1>
    <p>Vity UI 提供了一套常用的图标集合。</p>
    <!-- <h2>基础用法</h2>
    <p>使用 type、plain、round 和 circle 来定义按钮的样式。</p> -->
    <PreView :component="iconPreview1"></PreView>
    <!-- <codeDemo code="">
      <ViIcon size="30" v-for="item in iconList" :name="item.font_class" :key="item.unicode"></ViIcon>
    </codeDemo> -->
  </div>
</template>

<script setup lang="ts">

import PreView from '@/components/PreView.vue';
import iconPreview1 from "../preview/icon/icon1.preview.vue"


</script>

<style></style>
