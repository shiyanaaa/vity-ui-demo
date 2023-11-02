<preview>
    <h2>带图标的输入框</h2>
    <p>带有图标标记输入类型</p>
    <p>
      要在输入框中添加图标，你可以简单地使用 prefixIcon 和 suffixIcon 属性。 另外， prefix 和 suffix
      命名的插槽也能正常工作。
    </p>
</preview>
<template>
  <div class="item">
    <ViInput prefixIcon="shijian" width="250px" v-model="text" placeholder="Please input"></ViInput>
    <ViInput suffixIcon="sousuo" width="250px" v-model="text" placeholder="Please input"></ViInput>
  </div>
  <div class="item">
    <ViInput width="250px" v-model="text" placeholder="Please input">
      <template #prefix>
        <ViIcon name="lingdang"></ViIcon>
      </template>
    </ViInput>
    <ViInput width="250px" placeholder="Please input" v-model="text">
      <template #suffix>
        <ViIcon name="bianjishuru-xianxing"></ViIcon>
      </template>
    </ViInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>
