<preview>
    <h2>适应容器</h2>
    <p>当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致</p>
</preview>
<template>
  <div class="item">
    <ViAvatar size="80" v-for="fit in fits" :key="fit" :fit="fit" shape="square" src="/imgs/demo.jpg" />
  </div>
</template>
<script setup lang="ts">
const fits=['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
