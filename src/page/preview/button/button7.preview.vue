<preview>
    <h2>自定义颜色</h2>
    <p>您可以自定义按钮的颜色。</p>
    <p>我们将自动计算按钮处于 hover 和 active 状态时的颜色。</p>
</preview>
<template>
  <div>
    <ViButton :color="item" v-for="item in colorList" :key="item"> {{ item }}</ViButton>
  </div>
  <div>
    <ViButton :color="item" v-for="item in colorList" plain :key="item">{{ item }}</ViButton>
  </div>
  <div>
    <ViButton disabled :color="item" v-for="item in colorList" plain :key="item">{{
      item
    }}</ViButton>
  </div>
</template>

<script setup lang="ts">
const colorList = ['#996699', '#003399', '#9933FF', '#FF99CC', '#0099CC', '#FF0033'];
</script>

<style></style>
