<template>
  <div class="loading-button-container">
    <button @click="handleClick" :disabled="isLoading">
      {{ isLoading ? "loading" : "submit" }}
    </button>
    <div class="err">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      error: "",
    };
  },
  methods: {
    async handleClick() {
      /**
       * 点击次数+1
       * 错误信息清空
       * 为了防止重复点击，需要先将isLoading 设置为 true
       * 通知父组件：【我被点击了】,先传递当前的点击次数
       * 等待父组件处理（有可能是异步的），将父组件处理的结果设置到error
       */
      this.count++;
      this.error = "";
      this.isLoading = true;
      // 第一种方法  比较适合单项数据流  调试较容易 
      // this.$emit('click',this.count,(err)=>{
      //     this.isLoading = false;
      //     this.error = err;
      // })

      // 第二种方法  直接拿到父组件的函数  调试监听不到这个事件
      // $listeners 用于获取父组件传过来的所有事件函数
      if (this.$listeners.click) {
        // 判断父组件是否传递了事件处理函数 click
        const err = await this.$listeners.click(this.count);
        this.isLoading = false;
        this.error = err;
      }
    },
  },
};
</script>

<style>
</style>