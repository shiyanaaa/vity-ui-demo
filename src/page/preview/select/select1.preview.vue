<preview>
    <h2>基础用法</h2>
    <p>适用广泛的基础单选 v-model 的值为当前被选中的 options 的 value 属性值</p>
</preview>

<template>
  <div class="item">
    <ViSelect size="small" v-model="value" :options="options"></ViSelect>
    <ViSelect size="default" v-model="value" :options="options"></ViSelect>
    <ViSelect size="large" v-model="value" :options="options"></ViSelect>
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
