<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/message/*.vue',{eager:true,import: 'default',})
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
    <h1>Message 消息提示</h1>
    <p>常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <h4>使用前，需 import { ViMessage } from 'vity-ui'; 导入组件。</h4>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<style scoped lang="scss"></style>