<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <ViContainer style="height: 100vh;">
    <ViHeader>
      <Header ></Header>
    </ViHeader>
    <ViMain >
      <RouterView />
    </ViMain>
  </ViContainer>
</template>

<style scoped lang="scss">
.vi-header{
  position: sticky;top: 0;z-index:99;
  background-color: #fff;
}
</style>
