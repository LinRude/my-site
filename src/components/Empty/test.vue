<template>
    <div class="test-container">
        <Empty :text="text"/>
    </div>
    
</template>
<script>
import Empty from '@/components/Empty'
export default {
    components:{
        Empty
    },
    data(){
        return{
            text : '无数据'
        }
    }
}
</script>

<style>
    .test-container{
        width: 500px;height:500px;margin:0 auto;border:1px solid #000;position: relative;
    }
</style>