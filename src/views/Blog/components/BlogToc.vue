<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList :list="toc" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from './RightList';
export default {
    components:{
        RightList
    },
    props:{
        toc:{
            type :Array
        }
    },
    methods:{
        handleSelect(item){
            location.hash = item.anchor;
        }
    }
};
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
