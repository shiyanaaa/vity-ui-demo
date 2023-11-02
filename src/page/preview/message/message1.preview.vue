<preview>
    <h2>基础用法</h2>
    <p>从顶部出现，3 秒后自动消失。</p>
</preview>
<template>
  <div class="item">
    <ViButton @click="btnClick" type="primary">显示消息</ViButton>
  </div>
</template>

<script setup lang="ts">
import { ViMessage } from 'vity-ui';
const btnClick=()=>{
    ViMessage.message("提示消息")
}
</script>
