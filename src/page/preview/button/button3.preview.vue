<preview>
    <h2>文字按钮</h2>
    <p>你可以使用 link 属性来定义文字按钮。</p>
</preview>
<template>
  <div>
    <ViButton link v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>
  </div>
  <div>
    <ViButton disabled link v-for="item in btn" :key="item" :type="item">{{ item }}</ViButton>
  </div>
</template>

<script setup lang="ts">
const btn = ['primary', 'warning', 'success', 'info', 'error']
</script>
