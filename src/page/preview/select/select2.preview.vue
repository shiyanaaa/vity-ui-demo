<preview>
    <h2>有禁用选项</h2>
    <p>在 option 中，设定 disabled 值为 true，即可禁用该选项</p>
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
  { label: '测试1', value: '1', disabled: true },
  { label: '测试2', value: '2' },
  { label: '测试3', value: '3' }
]
</script>
