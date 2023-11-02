<preview>
    <h2>基础用法</h2>
    <p>由 type 属性来选择 tag 的类型。</p>
</preview>
<template>
  <div>
    <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>
  </div>
</template>

<script setup lang="ts">
const tagType = ['primary', 'warning', 'error', 'success', 'info']
</script>
