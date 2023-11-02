<preview>
    <h2>禁用状态</h2>
    <p>禁用整个选择器组件</p>
    <p>为 vi-select 设置 disabled属性，则整个选择器不可用。</p>
</preview>
<template>
  <div class="item">
    <ViSelect disabled v-model="value" :options="options"></ViSelect>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref()
const options = [
  { label: '测试1', value: '1' },
  { label: '测试2', value: '2' },
  { label: '测试3', value: '3' }
]
</script>
