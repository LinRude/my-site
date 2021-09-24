<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList :list="tocWithSelect" @select="handleSelect"/>
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
    data(){
      return {
        activeAnchor:'article-md-title-4'
      }
    },
    methods:{
        handleSelect(item){
            location.hash = item.anchor;
        },
        // 设置activeAnchor为正确的值
        setSelect(){

        }
    },
    computed:{
      // 根据toc属性以及activeAnchor得到带有isSelect属性的toc属性
      tocWithSelect(){
        const getTOC = (toc = []) =>{
          return toc.map((t)=>({
            ...t,
            isSelect: t.anchor === this.activeAnchor,
            children: getTOC(t.children)
          }))
        }
        return getTOC(this.toc);
      },
      // 根据toc得到它们对应的元素数组
      doms(){
        const doms = [];
        const addToDoms = toc =>{
          for(const t of toc){
            console.log(t.anchor);
            if(t.children && t.children.length){
              addToDoms(t.children)
            }
          }
        };
        addToDoms(this.toc);
        return doms;
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
