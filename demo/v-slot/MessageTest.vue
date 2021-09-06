<template>
  <Message>
      <!-- 1》可以用v-slot:xxx  2》也可以用#  3》v-slot:default === 默认 -->
      <template v-slot:header>头部内容</template>
      <template>默认内容</template>
      <template #footer>尾部内容</template>
  </Message>
</template>

<script>
import Message from './Message.vue';
export default {
    components:{
        Message
    }
}
</script>

<style>

</style>