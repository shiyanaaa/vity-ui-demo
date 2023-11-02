<template>
    <div style="display: flex; height: 100%">
      <div style="height: calc(100vh - 60px); padding-left: var(--main-padding)">
        <ViMenu rightBorder v-model="menuData" :data="data"></ViMenu>
      </div>
  
      <div style="padding: 15px; height: calc(100vh - 60px); width: 100%; overflow-y: auto">
        <div style="padding-right: var(--main-padding)"><RouterView></RouterView></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute()
  const router = useRouter()
  const menuData = ref('button')
  const data = ref([
    {
      index: 1,
      label: '基础组件',
      isGroup: true,
      children: [
        { index: 'button', label: 'Button 按钮' },
        { index: 'icon', label: 'Icon 图标' },
        { index: 'container', label: 'Container 布局容器' },
      ]
    },
    {
      index: 2,
      label: 'Form 表单组件',
      isGroup: true,
      children: [
        { index: 'switch', label: 'Switch 开关' },
        { index: 'input', label: 'Input 输入框' },
        { index: 'radio', label: 'Radio 单选框' },
        { index: 'select', label: 'Select 选择框' }
      ]
    },
    { index: 3, label: 'Data 数据展示', isGroup: true,children:[
    { index: 'avatar', label: 'Avatar 头像' },
    { index: 'tag', label: 'Tag 标签' },
    
    ] },
    { index: 4, label: 'Navigation 导航', isGroup: true },
    {
      index: 5,
      label: 'Feedback 反馈组件',
      isGroup: true,
      children: [{ index: 'message', label: 'Message 消息提示' }]
    },
    { index: 6, label: 'Others 其他', isGroup: true }
  ])
  watch(menuData, (newValue) => {
    router.push(newValue)
  })
  onMounted(() => {
    menuData.value = route.name as string
  })
  </script>
  
  <style></style>
  