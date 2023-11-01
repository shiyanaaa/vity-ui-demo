<preview>
    <h2>图标按钮</h2>
    <p>使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。</p>
    <p>
      使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。
      通过向右方添加标签来添加图标， 你也可以使用自定义图标。
    </p>
</preview>
<template>
  <div>
    <ViButton square icon="xihuan" v-for="item in btn" :key="item.type" :type="item.type" />
  </div>
  <div>
    <ViButton circle icon="shoucang" v-for="item in btn" :key="item.type" :type="item.type" />
  </div>
  <div>
    <ViButton
      disabled
      circle
      icon="suoding"
      v-for="item in btn"
      :key="item.type"
      :type="item.type"
    />
  </div>
  <div>
    <ViButton square icon="xihuan" plain v-for="item in btn" :key="item.type" :type="item.type" />
  </div>
  <div>
    <ViButton circle icon="xihuan" plain v-for="item in btn" :key="item.type" :type="item.type" />
  </div>
  <div>
    <ViButton v-for="item in btn" :key="item.type" :type="item.type" icon="weizhi"></ViButton>
  </div>
  <div>
    <ViButton round v-for="item in btn" :key="item.type" :type="item.type" icon="weizhi"></ViButton>
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
