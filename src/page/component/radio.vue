<template>
  <div class="demo">
    <h1>Radio 单选框</h1>
    <p>在一组备选项中进行单选</p>
    <h2>基础用法</h2>
    <p>单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。</p>
    <p>
      要使用 Radio 组件，只需要设置v-model绑定变量， 选中意味着变量的值为相应 Radio label属性的值，
      label可以是String、Number 或 Boolean。
    </p>
    <div class="example">
      <div class="item">
        <ViRadioGroup v-model="radio">
          <ViRadio :label="1">Options 1</ViRadio>
          <ViRadio :label="2">Options 2</ViRadio>
        </ViRadioGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const radio = ref(1)
</script>

<style></style>
