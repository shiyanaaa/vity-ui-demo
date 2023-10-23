<template>
  <div class="demo">
    <h1>Container 布局容器</h1>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p>
      ViContainer：外层容器。 当子元素中包含 ViHeader 或 ViFooter 时，全部子元素会垂直上下排列，
      否则会水平左右排列。
    </p>
    <p>ViHeader：顶栏容器。</p>
    <p>ViAside：侧边栏容器。</p>
    <p>ViMain：主要区域容器。</p>
    <p>ViFooter：底栏容器。</p>
    <h2>常见页面布局</h2>
    <div class="example">
      <div class="item" style="height: 200px; width: 100%">
        <ViContainer>
          <ViHeader>Header</ViHeader>
          <ViMain> Main</ViMain>
        </ViContainer>
      </div>
    </div>
    <div class="example">
      <div class="item" style="height: 200px; width: 100%">
        <ViContainer>
          <ViHeader>Header</ViHeader>
          <ViMain> Main</ViMain>
          <ViFooter> Footer</ViFooter>
        </ViContainer>
      </div>
    </div>
    <div class="example">
      <div class="item" style="height: 200px; width: 100%">
        <ViContainer>
          <ViAside>Aside</ViAside>
          <ViMain> Main</ViMain>
        </ViContainer>
      </div>
    </div>
    <div class="example">
      <div class="item" style="height: 200px; width: 100%">
        <ViContainer>
          <ViHeader>Header</ViHeader>
          <ViContainer>
            <ViAside>Aside</ViAside>
            <ViMain> Main</ViMain>
          </ViContainer>
        </ViContainer>
      </div>
    </div>
    <div class="example">
      <div class="item" style="height: 200px; width: 100%">
        <ViContainer>
          <ViHeader>Header</ViHeader>
          <ViContainer>
            <ViAside>Aside</ViAside>
            <ViContainer>
              <ViMain> Main</ViMain>
              <ViFooter> Footer</ViFooter>
            </ViContainer>
          </ViContainer>
        </ViContainer>
      </div>
    </div>
    <div class="example">
      <div class="item" style="height: 200px; width: 100%">
        <ViContainer>
          <ViAside>Aside</ViAside>

          <ViContainer>
            <ViHeader>Header</ViHeader>
            <ViMain> Main</ViMain>
            
          </ViContainer>
        </ViContainer>
      </div>
    </div>
    <div class="example">
      <div class="item" style="height: 200px; width: 100%">
        <ViContainer>
          <ViAside>Aside</ViAside>
          <ViContainer>
            <ViHeader>Header</ViHeader>
            <ViMain> Main</ViMain>
            <ViFooter> Footer</ViFooter>
          </ViContainer>
        </ViContainer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vi-container {
  .vi-header {
    background-color: var(--vi-color-light-primary-7);
    @include center;
  }
  .vi-main {
    background-color: var(--vi-color-light-primary-9);
    @include center;
  }
  .vi-footer {
    background-color: var(--vi-color-light-primary-7);
    @include center;
  }
  .vi-aside {
    background-color: var(--vi-color-light-primary-8);
    @include center;
    flex-shrink: 0;
  }
}
</style>
