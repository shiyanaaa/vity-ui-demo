<preview>
    <h2>基础用法</h2>
    <p>使用 type、plain、round 和 circle 来定义按钮的样式。</p>
</preview>
<template>
  <div>
    <ViButton v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>
  </div>
  <div>
    <ViButton plain v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>
  </div>
  <div>
    <ViButton round v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>
  </div>
</template>

<script setup lang="ts">
const btn = ['primary', 'warning', 'success', 'info', 'error']
</script>
