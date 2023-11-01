<template>
  <div class="codeDemo">
    <div class="example">
      <div class="content">
        <slot></slot>
      </div>
      <div class="example-tools" :class="showCode?'is-chose':''">
        <span class="tools-btn" @click="showCode = !showCode">
          <vi-icon size="24" name="kaifa-xianxing" />
        </span>
      </div>
      <div class="codeBox" :class="showCode?'is-show':''">
        <div class="inner">
          <highlightjs autodetect :code="$props.code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  code: string
}
const props = defineProps<Props>()
const showCode = ref(false)
</script>

<style lang="scss">
.example {
  width: 100%;
  border: 1px solid #ccc;
  //   padding: 24px 24px 15px 24px;
  border-radius: 4px;
  margin: 10px 0;
  position: relative;
  .content {
    padding: 15px 24px;
  }
  .content > div:not(:last-child) {
    margin-bottom: 15px;
  }
  .example-tools {
    border-top: 1px solid #ccc;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 0 20px;
    border-bottom: 1px solid transparent;
    transition: all .5s;
    &.is-chose{
      border-bottom: 1px solid #ccc;
      .tools-btn{
        color: var(--vi-color-primary);
      }
        
      }
    .tools-btn {
      cursor: pointer;
      &:hover {
        color: var(--vi-color-primary);
      }
      
    }
  }
  .codeBox {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: all .5s;
    overflow-x: auto;
    &.is-show{
      grid-template-rows: 1fr;
    }
    .inner {
      min-height: 0;
    }
  }
}
</style>
