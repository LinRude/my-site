<template>
  <img 
    class="avatar-container"
    :src="url" 
    :style="{width:size + 'px',height : size + 'px'}" 
    alt="">
</template>

<script>
export default {
    props:{
        url:{
            type : String, //url属性必须是一个字符串
            required: true, //属性必传
        },
        size:{
            type : Number, 
            default: 100
        },
      
    }
}
</script>

<style scoped>
/* 代用作用域的样式 */
.avatar-container{border-radius: 50%;object-fit: cover;display: block;}
</style>