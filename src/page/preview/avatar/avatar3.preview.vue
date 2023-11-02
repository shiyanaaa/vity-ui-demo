<preview>
    <h2>回退行为</h2>
    <p>图片加载失败时的回退行为。</p>
</preview>
<template>
  <div class="item">
    <ViAvatar shape="circle" @error="onError" src="/imgs/error.jpg">
      <ViIcon size="30" name="tupian" />
    </ViAvatar>
  </div>
</template>
<script setup lang="ts">
const onError = (e: Event) => {
  console.log(e)
}
</script>
