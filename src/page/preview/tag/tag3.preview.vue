<preview>
    <h2>镂空</h2>
    <p>设置 plain 为 true ，可以显示镂空Tag</p>
</preview>
<template>
  <div>
    <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>
  </div>
  <div>
    <ViTag plain v-for="item in tagType" :type="item">{{ item }}</ViTag>
  </div>
</template>

<script setup lang="ts">
const tagType = ['primary', 'warning', 'error', 'success', 'info']
</script>
