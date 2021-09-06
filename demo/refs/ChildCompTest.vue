<template>
    <div>
        <p ref="para">some paragraph</p>
        <child-comp ref="comp"/>
        <button @click="handleClick">查看所有应用</button>
    </div>
</template>

<script>
import ChildComp from './ChildComp.vue'
export default {
    components:{
        ChildComp
    },
    methods:{
        handleClick(){
            // 获取持有的所有引用
            this.$refs.comp.a = 4
            this.$refs.comp.b = 3
            console.log(this.$refs,this.$refs.comp.a,this.$refs.comp.b);
            
            /**
             * {
             *  para:p元素（原生DOM）
             *  comp:ChildComp的组件实例
             * }
             */
            // 可以父组件获取子组件的数据 但是不符合Vue设计理念 如果迫不得已 不要使用。
        }
    }
}
</script>

<style>

</style>