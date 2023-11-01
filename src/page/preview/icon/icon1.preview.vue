
<preview>
    <h2>展示所有图标</h2>
</preview>
<template>
  <ViIcon size="30" v-for="item in iconList" :name="item.font_class" :key="item.unicode"></ViIcon>
</template>

<script setup lang="ts">
import { ViIconConfig } from 'vity-ui'
const iconList = ViIconConfig.getAllIconList()
</script>

<style></style>
