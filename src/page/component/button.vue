<script setup lang="ts">
// import {ViButton,ViIcon} from 'vity-ui'
import { ref } from 'vue'
interface Btn {
  type?: string
  icon?: string
  circle?: boolean
}
const btn: Array<Btn> = [
  { type: 'default' },
  { type: 'primary' },
  { type: 'warning' },
  { type: 'success' },
  { type: 'info' },
  { type: 'error' }
]
const colorList: Array<string> = ['#996699', '#003399', '#9933FF', '#FF99CC', '#0099CC', '#FF0033']
const loading = ref(false)
</script>

<template>
  <div class="demo">
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>
    <h2>基础用法</h2>
    <p>使用 type、plain、round 和 circle 来定义按钮的样式。</p>
    <div class="example">
      <div>
        <ViButton v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
      </div>
      <div>
        <ViButton plain v-for="item in btn" :key="item.type" :type="item.type">{{
          item.type
        }}</ViButton>
      </div>
      <div>
        <ViButton round v-for="item in btn" :key="item.type" :type="item.type">{{
          item.type
        }}</ViButton>
      </div>
    </div>
    <h2>禁用状态</h2>
    <p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>
    <p>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>
    <div class="example">
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
    </div>
    <h2>图标按钮</h2>
    <p>使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。</p>
    <p>
      使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。
      通过向右方添加标签来添加图标， 你也可以使用自定义图标。
    </p>
    <div class="example">
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
        <ViButton
          square
          icon="xihuan"
          plain
          v-for="item in btn"
          :key="item.type"
          :type="item.type"
        />
      </div>
      <div>
        <ViButton
          circle
          icon="xihuan"
          plain
          v-for="item in btn"
          :key="item.type"
          :type="item.type"
        />
      </div>
      <div>
        <ViButton v-for="item in btn" :key="item.type" :type="item.type" icon="weizhi"></ViButton>
      </div>
      <div>
        <ViButton
          round
          v-for="item in btn"
          :key="item.type"
          :type="item.type"
          icon="weizhi"
        ></ViButton>
      </div>
    </div>
    <h2>加载状态按钮</h2>
    <p>点击按钮来加载数据，并向用户反馈加载状态。</p>
    <p>通过设置 loading 属性为 true 来显示加载中状态。</p>
    <div class="example">
      <div>
        <ViButton
          @click="loading = !loading"
          :loading="loading"
          icon="weizhi"
          v-for="item in btn"
          :key="item.type"
          :type="item.type"
          >{{ item.type }}</ViButton
        >
      </div>
      <div>
        <ViButton
          @click="loading = !loading"
          :loading="loading"
          icon="haoping"
          plain
          v-for="item in btn"
          :key="item.type"
          :type="item.type"
          >{{ item.type }}</ViButton
        >
      </div>
    </div>
    <h2>调整尺寸</h2>
    <p>除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</p>
    <p>使用 size 属性额外配置尺寸，可使用 large和small两种值。</p>
    <div class="example">
      <div>
        <ViButton size="small" v-for="item in btn" :key="item.type" :type="item.type">{{ item.type }}</ViButton>
      </div>
      <div>
        <ViButton size="default"  v-for="item in btn" :key="item.type" :type="item.type">{{
          item.type
        }}</ViButton>
      </div>
      <div>
        <ViButton size="large"  v-for="item in btn" :key="item.type" :type="item.type">{{
          item.type
        }}</ViButton>
      </div>
    </div>
    <h2>自定义颜色</h2>
    <p>您可以自定义按钮的颜色。</p>
    <p>我们将自动计算按钮处于 hover 和 active 状态时的颜色。</p>
    <div class="example">
      <div>
        <ViButton
          :color="item"
          v-for="item in colorList"
          :key="item"
        >
          {{ item }}</ViButton
        >
      </div>
      <div>
        <ViButton
          :color="item"
          v-for="item in colorList"
          plain
          :key="item"
          >{{ item }}</ViButton
        >
      </div>
      <div>
        <ViButton
          disabled
          :color="item"
          v-for="item in colorList"
          plain
          :key="item"
          >{{ item }}</ViButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
