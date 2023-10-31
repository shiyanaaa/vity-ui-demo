<template>
  <div class="demo">
    <h1>Icon 图标</h1>
    <p>Vity UI 提供了一套常用的图标集合。</p>
    <!-- <h2>基础用法</h2>
    <p>使用 type、plain、round 和 circle 来定义按钮的样式。</p> -->
    <codeDemo code="">
      <ViIcon size="30" v-for="item in iconList" :name="item.font_class" :key="item.unicode"></ViIcon>
    </codeDemo>
  </div>
</template>

<script setup lang="ts">
import { ViIconConfig } from 'vity-ui'
import codeDemo from '@/components/codeDemo.vue'
const iconList=ViIconConfig.getAllIconList();

</script>

<style></style>
