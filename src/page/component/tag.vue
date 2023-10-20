<template>
  <div class="demo">
    <h1>Tag 标签</h1>
    <p>用于标记和选择。</p>
    <h2>基础用法</h2>
    <p>由 type 属性来选择 tag 的类型。 也可以通过 color 属性来自定义背景色。</p>
    <div class="example">
        <div>
            <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>
        </div>
    </div>
    <h2>不同尺寸</h2>
    <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <p>使用 size 属性来设置额外尺寸, 可选值包括 large, default 或 small.</p>
    <div class="example">
        <div>
            <ViTag size="small" type="primary">small</ViTag>
            <ViTag size="default" type="primary">default</ViTag>
            <ViTag size="large" type="primary">large</ViTag>
        </div>
    </div>
    <h2>镂空</h2>
    <p>设置 plain 为 true ，可以显示镂空Tag</p>
    <div class="example">
        <div>
            <ViTag v-for="item in tagType" :type="item">{{ item }}</ViTag>
        </div>
        <div>
            <ViTag plain v-for="item in tagType" :type="item">{{ item }}</ViTag>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tagType=['primary','warning','error','success','info']
</script>

<style></style>
