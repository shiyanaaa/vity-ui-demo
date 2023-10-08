<script setup lang="ts">
import { ref } from 'vue';

const search=ref("")
</script>

<template>
    <div class="header">
        <div class="logo">
            <RouterLink to="/">
                <img src="../assets/img/element-plus-logo.svg" alt="">
            </RouterLink>
        </div>
        <div class="nav">
            <span >
                <ViInput v-model="search" prefixIcon="sousuo"></ViInput>
            </span>
            <RouterLink to="" class="link">指南</RouterLink>
            <RouterLink to="/component" class="link">组件</RouterLink>
            <RouterLink to="" class="link">资源</RouterLink>
            <RouterLink to="" class="link">切换</RouterLink>
            <RouterLink to="" class="link">英汉</RouterLink>
            <RouterLink to="" class="link">github</RouterLink>
        </div>
    </div>
</template>
<style scoped lang="scss">
.header {
    display: flex;
    padding: var(--main-padding);
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

        .link {
            padding: 0 10px;
            &:hover{
                color: var(--vi-color-primary);
            }
        }
    }
}</style>
