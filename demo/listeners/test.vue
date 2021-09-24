<template>
  <LoadingButton @click="handleClick" />
</template>

<script>
import LoadingButton from "./LoadingButton";
export default {
  components: {
    LoadingButton,
  },
  methods: {
    // async handleClick(count,callback){
    //   console.log(count)
    //   setTimeout(() => {
    //       //处理完成
    //       callback('请填写账号');
    //   }, 3000);
    // }

    async handleClick(count) {
      console.log(count);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("有一个未知错误");
        }, 3000);
      });
    },
  },
};
</script>

<style>
body {
  text-align: center;
}
</style>