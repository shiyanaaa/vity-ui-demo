<template>
  <div class="demo">
    <h1>Switch 开关</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h2>基础用法</h2>
    <p>
      绑定 v-model 到一个 Boolean 类型的变量。 可以使用 closeColor 属性与 openColor
      属性来设置开关的背景色。
    </p>
    <codeDemo :code="codeList[0]">
      <div class="item">
        <ViSwitch v-model="value1"></ViSwitch>
        <ViSwitch closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
      </div>
    </codeDemo>
    <h2>尺寸</h2>
    <codeDemo :code="codeList[0]">
      <div class="item">
        <ViSwitch size="small" v-model="value1"></ViSwitch>
        <ViSwitch size="default" v-model="value1"></ViSwitch>
        <ViSwitch size="large" v-model="value1"></ViSwitch>
      </div>
    </codeDemo>
    <h2>禁用状态</h2>
    <p>设置disabled属性，接受一个Boolean，设置true即可禁用。</p>
    <codeDemo :code="codeList[0]">
      <div class="item">
        <ViSwitch disabled v-model="value1"></ViSwitch>
        <ViSwitch disabled closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
      </div>
    </codeDemo>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import codeDemo from '@/components/codeDemo.vue'
const value1 = ref(true)
const value2 = ref(true)
const codeList = [
  `<template>
    <ViSwitch v-model="value1"></ViSwitch>
    <ViSwitch closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
</template>

<script setup lang="ts">
    const value1 = ref(true)
    const value2 = ref(true)
<\/script>
`,
`<template>
    <ViSwitch size="small" v-model="value1"></ViSwitch>
    <ViSwitch size="default" v-model="value1"></ViSwitch>
    <ViSwitch size="large" v-model="value1"></ViSwitch>
</template>`,
`<template>
    <ViSwitch disabled v-model="value1"></ViSwitch>
    <ViSwitch disabled closeColor="red" openColor="purple" v-model="value2"></ViSwitch>
</template>`
]
</script>

<style lang="scss" scoped></style>
