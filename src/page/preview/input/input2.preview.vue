<preview>
    <h2>禁用状态</h2>
    <p>通过 disabled 属性指定是否禁用 input 组件</p>
</preview>
<template>
  <div class="item">
    <ViInput width="250px" v-model="text" placeholder="Please input"></ViInput>
  </div>
  <div class="item">
    <ViInput width="50%" v-model="text" placeholder="Please input"></ViInput>
  </div>
  <div class="item">
    <ViInput v-model="text" placeholder="Please input"></ViInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>
