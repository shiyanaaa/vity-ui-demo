<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/avatar/*.vue',{eager:true,import: 'default',})
  for (const componentPath in componentContext) {
    const componentName = componentPath;
    const componentModule = componentContext[componentPath] as object

    // Push components to the array for rendering
    components.value.push({
      name: componentName,
      component: markRaw(componentModule)
    })
  }
})
</script>

<template>
  <div class="demo">
    <h1>Avatar 头像</h1>
    <p>Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。</p>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<style scoped lang="scss"></style>