<preview>
    <h2>不同状态</h2>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
</preview>

<template>
  <div class="item">
    <ViButton v-for="item in typeList" @click="btnClick(item)" :type="item">{{ item }}</ViButton>
  </div>
</template>

<script setup lang="ts">
import { ViMessage } from 'vity-ui'
const typeList = ['info', 'primary', 'warning', 'success', 'error']
const btnClick = (type: string) => {
  ViMessage.message({
      type,
      message: '这是提示消息'
    })
}
</script>
