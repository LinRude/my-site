<template>
    <div style="position:relative;">
        <Loading v-if="isLoading"/>
        <button @click="isLoading = !isLoading ">隐藏与显示</button>
    </div>
 
</template>

<script>
import Loading from '@/components/Loading'
export default {
    components:{
        Loading
    },
    data(){
        return{
            isLoading:false
        }
    }

}
</script>

<style>

</style>