<preview>
    <h2>尺寸</h2>
    <p>使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。</p>
</preview>
<template>
  <div class="item">
    <ViInput width="250px" size="small" v-model="text" placeholder="Please input"></ViInput>
    <ViInput width="250px" v-model="text" placeholder="Please input"></ViInput>
    <ViInput width="250px" size="large" v-model="text" placeholder="Please input"></ViInput>
  </div>
  <div class="item">
    <ViInput
      prefixIcon="caiwu-xianxing"
      width="250px"
      size="small"
      v-model="text"
      placeholder="Please input"
    ></ViInput>
    <ViInput
      prefixIcon="caiwu-xianxing"
      width="250px"
      v-model="text"
      placeholder="Please input"
    ></ViInput>
    <ViInput
      prefixIcon="caiwu-xianxing"
      width="250px"
      size="large"
      v-model="text"
      placeholder="Please input"
    ></ViInput>
  </div>
  <div class="item">
    <ViInput
      suffixIcon="mianfei-xianxing"
      width="250px"
      size="small"
      v-model="text"
      placeholder="Please input"
    ></ViInput>
    <ViInput
      suffixIcon="mianfei-xianxing"
      width="250px"
      v-model="text"
      placeholder="Please input"
    ></ViInput>
    <ViInput
      suffixIcon="mianfei-xianxing"
      width="250px"
      size="large"
      v-model="text"
      placeholder="Please input"
    ></ViInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>
