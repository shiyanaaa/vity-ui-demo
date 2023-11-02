<preview>
    <h2>尺寸</h2>
</preview>
<template>
  <div class="item">
    <ViSwitch size="small" v-model="value1"></ViSwitch>
    <ViSwitch size="default" v-model="value1"></ViSwitch>
    <ViSwitch size="large" v-model="value1"></ViSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
</script>
