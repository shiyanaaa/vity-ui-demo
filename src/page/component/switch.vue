<template>
  <div class="demo">
    <h1>Switch 开关</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/switch/*.vue',{eager:true,import: 'default',})
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
