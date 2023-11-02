<preview>
    <h2>禁用状态</h2>
    <p>设置disabled属性，接受一个Boolean，设置true即可禁用。</p>
</preview>
<template>
  <div class="item">
    <ViSwitch disabled v-model="value1"></ViSwitch>
    <ViSwitch disabled closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>
