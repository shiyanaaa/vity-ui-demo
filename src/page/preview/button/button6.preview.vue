<preview>
  <h2>加载状态按钮</h2>
  <p>点击按钮来加载数据，并向用户反馈加载状态。</p>
  <p>通过设置 loading 属性为 true 来显示加载中状态。</p>
</preview>
<template>
  <div>
    <ViButton
      @click="loading = !loading"
      :loading="loading"
      icon="weizhi"
      v-for="item in btn"
      :key="item"
      :type="item"
      >{{ item }}</ViButton
    >
  </div>
  <div>
    <ViButton
      @click="loading = !loading"
      :loading="loading"
      icon="haoping"
      plain
      v-for="item in btn"
      :key="item"
      :type="item"
      >{{ item }}</ViButton
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const btn = ['primary', 'warning', 'success', 'info', 'error']
const loading = ref(false)
</script>

<style></style>
