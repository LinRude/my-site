<template>
  <div class="model-container">
    <div class="left">
      <form action="">
        <input
          type="text"
          :value="formData.loginId"
          @input="formData.loginId = $event.target.value"
        />
        <input type="text" v-model="formData.loginId" />
        <div class="form-item">
            <label for="">
                <label for="">爱好</label>
                <label >
                    <input type="checkbox" value="sports" v-model="formData.loves">
                    运动
                </label>
                <label>
                     <input type="checkbox" value="film" v-model="formData.loves">
                    电影
                </label>
                <label>
                     <input type="checkbox" value="music" v-model="formData.loves">
                    音乐
                </label>
                <label>
                     <input type="checkbox" value="other" v-model="formData.loves">
                    其他
                </label>
            </label>
            <label for="">
                <label>
                    <input type="radio" value="male" v-model="formData.sex">
                    男
                </label>
                <label>
                    <input type="radio" value="female" v-model="formData.sex">
                    女
                </label>
            </label>
        </div>
      </form>
    </div>

    <div class="right">
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        loginId: "123",
        loginPwd: "",
        loves:["sports",'music','film','other'],
        sex:'female'
      },
    };
  },
};
</script>

<style>
</style>