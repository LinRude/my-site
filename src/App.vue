<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template>
        <div class="main">
          <RouterView />
        </div>
      </template>
      <!-- <template #right>
        <div class="right">Right</div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Layout,
    SiteAside,
  },
};
// 方法计算：会被多次调用（如果计算复杂就很耗时）【一个操作，用于处理一些事情】
// 计算属性:多了个缓存 如果这有关的值不变就不会变。【一个数据 可以读可以赋值】
// 有getter（无参） 和 setter （一个参数）
//  要有响应式的数据
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.app-container{
  .self-fill(fixed);
}
.aside{
  width: 250px;height: 100%;
}
</style>


