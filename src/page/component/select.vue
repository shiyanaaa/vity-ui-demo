<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/select/*.vue',{eager:true,import: 'default',})
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
    <h1>Select 选择器</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<style scoped lang="scss"></style>