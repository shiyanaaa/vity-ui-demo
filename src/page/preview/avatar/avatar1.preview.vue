<preview>
    <h2>基础用法</h2>
    <p>使用 shape 和 size 属性来设置 Avatar 的形状和大小。</p>
</preview>
<template>
  <div class="item">
    <ViAvatar shape="square" src="/vity-ui-demo/imgs/avatar.jpg" v-for="item in sizes" :size="item"></ViAvatar>
  </div>
  <div class="item">
    <ViAvatar shape="circle" src="/vity-ui-demo/imgs/avatar.jpg" v-for="item in sizes" :size="item"></ViAvatar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const sizes=[20,30,40,50,60]
</script>
