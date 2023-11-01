<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const search = ref('')
const List = ref([
  { name: '指南', to: '/guide' },
  { name: '组件', to: '/component' },
  { name: '资源', to: '' },
  { name: '切换', to: '' },
  { name: '英汉', to: '' },
  { name: 'github', to: '' }
])
const page = computed(() => {
  if (route.matched.length > 1) return route.matched[1].path
  else return '-1'
})
</script>

<template>
  <div class="header">
    <div class="logo">
      <RouterLink to="/">
        <img src="../assets/img/vity-ui-logo.svg" alt="" />
      </RouterLink>
    </div>
    <div class="nav">
      <span>
        <ViInput v-model="search" prefixIcon="sousuo"></ViInput>
      </span>
      <RouterLink
        v-for="item in List"
        :class="{ active: item.to === page }"
        :key="item.to"
        :to="item.to"
        class="link"
        >{{ item.name }}</RouterLink
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  display: flex;
  padding: 0 var(--main-padding);
  height: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
  position: sticky;
  top: 0;
  .logo {
    display: flex;
    align-items: center;

    img {
      height: 28px;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 100%;
    .link {
      flex-shrink: 0;
      padding: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 2px solid transparent;
      &:hover {
        color: var(--vi-color-primary);
      }
      &.active {
        color: var(--vi-color-primary);
        border-bottom: 2px solid var(--vi-color-primary);
      }
    }
  }
}
</style>
