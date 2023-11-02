<template>
  <div class="demo">
    <h1>Tag 标签</h1>
    <p>用于标记和选择。</p>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/tag/*.vue',{eager:true,import: 'default',})
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

<style lang="scss" scoped></style>