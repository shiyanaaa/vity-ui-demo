<preview>
    <h2>禁用状态</h2>
    <p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>
    <p>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>
</preview>
<template>
  <div>
    <ViButton disabled v-for="item in btn" :key="item.type" :type="item.type">{{
      item.type
    }}</ViButton>
  </div>
  <div>
    <ViButton disabled plain v-for="item in btn" :key="item.type" :type="item.type">{{
      item.type
    }}</ViButton>
  </div>
</template>

<script setup lang="ts">
interface Btn {
  type: string
}
const btn = [
  { type: 'primary' },
  { type: 'warning' },
  { type: 'success' },
  { type: 'info' },
  { type: 'error' }
]
</script>

<style></style>
