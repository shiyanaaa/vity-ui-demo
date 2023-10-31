<template>
  <div class="demo">
    <h1>Select 选择器</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <h2>基础用法</h2>
    <p>适用广泛的基础单选 v-model 的值为当前被选中的 options 的 value 属性值</p>
    <codeDemo code="">
        <div class="item">
            <ViSelect size="small" v-model="value" :options="options"></ViSelect>
            <ViSelect size="default" v-model="value" :options="options"></ViSelect>
            <ViSelect size="large" v-model="value" :options="options"></ViSelect>
        </div>
    </codeDemo>
    <h2>有禁用选项</h2>
    <p>在 option 中，设定 disabled 值为 true，即可禁用该选项</p>
    <codeDemo code="">
        <div class="item">
            <ViSelect size="small" v-model="value" :options="options2"></ViSelect>
            <ViSelect size="default" v-model="value" :options="options2"></ViSelect>
            <ViSelect size="large" v-model="value" :options="options2"></ViSelect>
        </div>
    </codeDemo>
    <h2>禁用状态</h2>
    <p>禁用整个选择器组件</p>
    <p>为 vi-select 设置 disabled属性，则整个选择器不可用。</p>
    <codeDemo code="">
        <div class="item">
            <ViSelect disabled  v-model="value" :options="options2"></ViSelect>
        </div>
    </codeDemo>
  </div>
</template>

<script setup lang="ts">
import codeDemo from '@/components/codeDemo.vue'
import {ref} from "vue"
const value=ref()
const options=[
    {label:'测试1',value:'1'},
    {label:'测试2',value:'2'},
    {label:'测试3',value:'3'},
]
const options2=[
    {label:'测试1',value:'1',disabled:true},
    {label:'测试2',value:'2'},
    {label:'测试3',value:'3'},
]
</script>

<style></style>
