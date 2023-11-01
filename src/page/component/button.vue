<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/button/*.vue',{eager:true,import: 'default',})
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
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<style scoped lang="scss"></style>
