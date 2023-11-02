<preview>
    <h2>指定input宽度</h2>
    <p>可以通过width属性来设置宽度，默认为100%。</p>
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
