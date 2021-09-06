<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placehold="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="2000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("图片加载完成");
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 1920px;
  height: 1080px;
  margin: 0 auto;
  border:2px solid blue;
}

</style>