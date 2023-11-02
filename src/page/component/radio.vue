<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/radio/*.vue',{eager:true,import: 'default',})
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
    <h1>Radio 单选框</h1>
    <p>在一组备选项中进行单选</p>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<style scoped lang="scss"></style>

