<template>
  <div class="demo">
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入字符</p>
    <h2>基础用法</h2>
    <p>使用 v-model 来绑定输入的数据。</p>
    <div class="example">
      <ViInput v-model="text1" placeholder="Please input"></ViInput>
    </div>
    <h2>禁用状态</h2>
    <p>通过 disabled 属性指定是否禁用 input 组件</p>
    <div class="example">
      <ViInput disabled v-model="text2" placeholder="Please input"></ViInput>
    </div>
    <h2>指定input宽度</h2>
    <p>可以通过width属性来设置宽度，默认为100%。</p>
    <div class="example">
      <div class="item">
        <ViInput width="250px" v-model="text2" placeholder="Please input"></ViInput>
      </div>
      <div class="item">
        <ViInput width="50%" v-model="text2" placeholder="Please input"></ViInput>
      </div>
      <div class="item">
        <ViInput v-model="text2" placeholder="Please input"></ViInput>
      </div>
    </div>
    <h2>带图标的输入框</h2>
    <p>带有图标标记输入类型</p>
    <p>
      要在输入框中添加图标，你可以简单地使用 prefixIcon 和 suffixIcon 属性。 另外， prefix 和 suffix
      命名的插槽也能正常工作。
    </p>
    <div class="example">
      <div class="item">
        <ViInput
          prefixIcon="shijian"
          width="250px"
          v-model="text2"
          placeholder="Please input"
        ></ViInput>
        <ViInput
          suffixIcon="sousuo"
          width="250px"
          v-model="text2"
          placeholder="Please input"
        ></ViInput>
      </div>
      <div class="item">
        <ViInput width="250px" v-model="text2" placeholder="Please input">
          <template #prefix>
            <ViIcon name="lingdang"></ViIcon>
          </template>
        </ViInput>
        <ViInput width="250px" placeholder="Please input" v-model="text2">
          <template #suffix>
            <ViIcon name="bianjishuru-xianxing"></ViIcon>
          </template>
        </ViInput>
      </div>
    </div>
    <h2>尺寸</h2>
    <p>使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。</p>
    <div class="example">
      <div class="item">
        <ViInput width="250px" size="small" v-model="text2" placeholder="Please input"></ViInput>
        <ViInput width="250px" v-model="text2" placeholder="Please input"></ViInput>
        <ViInput width="250px" size="large" v-model="text2" placeholder="Please input"></ViInput>
      </div>
      <div class="item">
        <ViInput prefixIcon="caiwu-xianxing" width="250px" size="small" v-model="text2" placeholder="Please input"></ViInput>
        <ViInput prefixIcon="caiwu-xianxing" width="250px" v-model="text2" placeholder="Please input"></ViInput>
        <ViInput prefixIcon="caiwu-xianxing" width="250px" size="large" v-model="text2" placeholder="Please input"></ViInput>
      </div>
      <div class="item">
        <ViInput suffixIcon="mianfei-xianxing" width="250px" size="small" v-model="text2" placeholder="Please input"></ViInput>
        <ViInput suffixIcon="mianfei-xianxing" width="250px" v-model="text2" placeholder="Please input"></ViInput>
        <ViInput suffixIcon="mianfei-xianxing" width="250px" size="large" v-model="text2" placeholder="Please input"></ViInput>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ViIcon } from 'vity-ui'
import { ref } from 'vue'
const text1 = ref('')
const text2 = ref('')
</script>

<style></style>
