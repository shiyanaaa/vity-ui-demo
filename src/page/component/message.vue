<template>
  <div class="demo">
    <h1>Message 消息提示</h1>
    <p>常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <h2>基础用法</h2>
    <p>从顶部出现，3 秒后自动消失。</p>
    <p>使用前，需 import { ViMessage } from 'vity-ui'; 导入组件。</p>
    <codeDemo code="">
      <div class="item">
        <ViButton @click="btnClick" type="primary">显示消息</ViButton>
      </div>
    </codeDemo>
    <h2>不同状态</h2>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    <codeDemo code="">
      <div class="item">
        <ViButton v-for="item in typeList" @click="btnClick(item)" :type="item">{{item}}</ViButton>
      </div>
    </codeDemo>
  </div>
</template>

<script setup lang="ts">
import { ViMessage } from 'vity-ui';
import codeDemo from '@/components/codeDemo.vue'
const typeList=['info','primary','warning','success','error']
const btnClick=(type:string|undefined)=>{
    if(type){
        ViMessage.message({
            type,
            message:"这是提示消息"
        })
    }else
    ViMessage.message("提示消息")
}
</script>

<style></style>
