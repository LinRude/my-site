<template>
  <img class="loading-container" :src="loadingUrl" alt="">
</template>

<script>
import loadingUrl from '@/assets/loading.svg'
export default {
  data(){
    return{
      loadingUrl
    }
  }

}
// 如果路径是静态路径并写到template webpack会处理成打包路径 （不用担心） 如果svg比较大会处理成bate:64
// 如果一定要把静态资源的路径放到data里面 可以用import导入方式

</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';
.loading-container{
    .self-center();
}

</style>