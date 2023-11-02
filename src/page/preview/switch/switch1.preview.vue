<preview>
    <h2>基础用法</h2>
    <p>
      绑定 v-model 到一个 Boolean 类型的变量。 可以使用 closeColor 属性与 openColor
      属性来设置开关的背景色。
    </p>
</preview>
<template>
  <div class="item">
    <ViSwitch v-model="value1"></ViSwitch>
    <ViSwitch closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>
