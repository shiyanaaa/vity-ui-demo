<template>
  <div class="demo container">
    <h1>Container 布局容器</h1>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p>
      ViContainer：外层容器。 当子元素中包含 ViHeader 或 ViFooter 时，全部子元素会垂直上下排列，
      否则会水平左右排列。
    </p>
    <p>ViHeader：顶栏容器。</p>
    <p>ViAside：侧边栏容器。</p>
    <p>ViMain：主要区域容器。</p>
    <p>ViFooter：底栏容器。</p>
    <PreView v-for="item in components" :key="item.name" :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref,markRaw  } from 'vue'
import PreView from '@/components/PreView.vue'
const components = ref<any>([])
onMounted(async () => {
  const componentContext = await import.meta.glob('../preview/container/*.vue',{eager:true,import: 'default',})
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

<style lang="scss">
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container.demo{
  .vi-container {
  .vi-header {
    background-color: var(--vi-color-light-primary-7);
    @include center;
  }
  .vi-main {
    background-color: var(--vi-color-light-primary-9);
    @include center;
  }
  .vi-footer {
    background-color: var(--vi-color-light-primary-7);
    @include center;
  }
  .vi-aside {
    background-color: var(--vi-color-light-primary-8);
    @include center;
    flex-shrink: 0;
  }
}
}
</style>
