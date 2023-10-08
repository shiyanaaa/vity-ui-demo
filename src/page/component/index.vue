<template>
       <div>
        <ViMenu :data="data"></ViMenu>
       </div> 
</template>
    
<script setup lang='ts'>
import {ref} from "vue"
    const data=ref([
        {id:1,label:'基础组件',children:[
            {id:1001,label:"Button 按钮"},
            {id:1002,label:"Icon 图标"}
        ]},
        {id:2,label:'Form 表单组件',children:[
        {id:2001,label:"Switch 开关"},
        {id:2001,label:"Input 输入框"},
        {id:2001,label:"Radio 单选框"},
        ]},
        {id:3,label:'Data 数据展示'},
        {id:4,label:'Navigation 导航'},
        {id:5,label:'Feedback 反馈组件'},
        {id:6,label:'Others 其他'},
    ])
</script>
    
<style>
    
</style>