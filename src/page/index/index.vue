<template>
    <div class="index">
        <img class="index-logo" src="../../assets/img/vity-ui-logo.svg" />
        <h1 class="title">Vity UI</h1>
        <ViButton color="#42b883" size="large">快速上手<ViIcon name="zhixiangyou"></ViIcon>
        </ViButton>
        <div class="container">
            <div class="item">
                <div class="item-title">易学易用</div>
                <div>基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档。</div>
            </div>
            <div  class="item">
                <div class="item-title">性能出色</div>
                <div>经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。</div>
            </div>
            <div class="item" >
                <div class="item-title">灵活多变</div>
                <div>丰富的、可渐进式集成的生态系统，可以根据应用规模在库和框架间切换自如。</div>
            </div>
        </div>
        <div class="footer">
            <p>Copyright © 2023 vity-ui by Chen</p>
            <p>本中文文档内容版权为 Vue 官方团队及翻译贡献者所有，保留所有权利。</p>
        </div>
    </div>
</template>
    
<script setup lang='ts'>


</script>
    
<style lang="scss" scoped>
.index {
    height: 100%;
    padding: var(--main-padding);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .title {
        margin: 30px 0;
        font-size: 2em;
    }
    .container{
        display: flex;
        justify-content: space-between;
        margin: 100px 0;
        .item{
            width: 30%;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 20px;
            .item-title{
                font-size: 1.3em;
                font-weight: bold;
                margin-bottom: 5px;
            }
        }
    }
    .footer{
        p{
            text-align: center;
            margin: 6px 0;
        }
    }
}
</style>