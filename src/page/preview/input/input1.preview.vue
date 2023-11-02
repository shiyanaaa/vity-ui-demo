<preview>
    <h2>基础用法</h2>
    <p>使用 v-model 来绑定输入的数据。</p>
</preview>
<template>
  <ViInput v-model="text1" placeholder="Please input"></ViInput>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text1 = ref('')
</script>
