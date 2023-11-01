<preview>
    <h2>调整尺寸</h2>
    <p>除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</p>
    <p>使用 size 属性额外配置尺寸，可使用 large和small两种值。</p>
</preview>
<template>
  <div>
        <ViButton size="small" v-for="item in btn" :key="item" :type="item">{{
          item
        }}</ViButton>
      </div>
      <div>
        <ViButton size="default" v-for="item in btn" :key="item" :type="item">{{
          item
        }}</ViButton>
      </div>
      <div>
        <ViButton size="large" v-for="item in btn" :key="item" :type="item">{{item}}</ViButton>
      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const btn = ['primary', 'warning', 'success', 'info', 'error']
const loading = ref(false)
</script>