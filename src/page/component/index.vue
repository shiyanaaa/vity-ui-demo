<template>
  <div style="display: flex; height: 100%">
    <div style="height: calc(100vh - 60px);padding-left: 300px;"><ViMenu v-model="menuData" :data="data"></ViMenu></div>

    <div style="padding: 15px;  height: calc(100vh - 60px);width: 100%;overflow-y: auto;">
      <div style="padding-right: 300px;"><RouterView></RouterView></div>
      
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
      { index: 'icon', label: 'Icon 图标' }
    ]
  },
  {
    index: 2,
    label: 'Form 表单组件',
    isGroup: true,
    children: [
      { index: 'switch', label: 'Switch 开关' },
      { index: 'input', label: 'Input 输入框' },
      { index: 'radio', label: 'Radio 单选框' }
    ]
  },
  { index: 3, label: 'Data 数据展示', isGroup: true },
  { index: 4, label: 'Navigation 导航', isGroup: true },
  { index: 5, label: 'Feedback 反馈组件', isGroup: true },
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
