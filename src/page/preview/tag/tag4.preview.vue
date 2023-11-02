<preview>
    <h2>自定义颜色</h2>
    <p>设置 color 可以显示不同颜色</p>
</preview>

<template>
  <div>
    <ViTag v-for="item in colorList" :color="item">{{ item }}</ViTag>
  </div>
  <div>
    <ViTag plain v-for="item in colorList" :color="item">{{ item }}</ViTag>
  </div>
</template>

<script setup lang="ts">
const colorList = ['#996699', '#003399', '#9933FF', '#FF99CC', '#0099CC', '#FF0033']
</script>
