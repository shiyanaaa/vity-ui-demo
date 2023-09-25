<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <ViContainer>
    <ViHeader>
      <Header ></Header>
    </ViHeader>
    <ViMain style="padding:var(--main-padding);">
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
