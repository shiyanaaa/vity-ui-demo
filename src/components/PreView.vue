<template>
    <div class="demo-item" v-html="props.component.__sourceCodeTitle">
    </div>
  <codeDemo :code="html">
    <component :is="props.component" />
  </codeDemo>
</template>

<script setup lang="ts">
import { computed, type DefineComponent } from 'vue'
import codeDemo from './codeDemo.vue'
interface Props {
  component: any
}
const props = defineProps<Props>()
const html = computed(() => {
    console.log(props.component);
    
  return props.component.__sourceCode
})
</script>

<style></style>
