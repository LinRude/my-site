<template>
    <div class="image-loader-container">
        <img v-if="!everythingDone" class="placehold" :src="placehold">
        <img :src="src" alt="" @load="handleLoad" :style="{ opacity : originOpacity , transition : `${duration}ms`}">
        <!-- 这个@load是组件注册过的事件 ---click那种 监听图片加载完成 -->
    </div>
</template>

<script>
export default {
    props:{
        src:{
            type : String,
            required: true
        },
        placehold:{
            type: String,
            required : true
        },
        duration:{
            type : Number,
            default : 500
        }
    },
    data(){
        return{
            originLoaded:false, //原图是否加载完成
            everythingDone:false //是否一起都尘埃落定了
        }
    },
    computed:{
        originOpacity(){
            return this.originLoaded ? 1 : 0;
        }
    },
    methods:{
        handleLoad(){
            this.originLoaded = true;
            setTimeout(()=>{
                this.everythingDone = true;
                this.$emit('load');
            },this.duration);
            console.log("原图加载完成");
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
    width: 100%;height: 100%;position: relative;overflow:hidden;
    img{.self-fill();object-fit: cover;}
    .placehold{filter: blur(2vw);}
}

</style>