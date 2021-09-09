<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
    <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden; //触发bfc避免外边距合并
  ul {
    margin: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 1s;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  transform: translate(-50%);
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  @gap: 25px;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
// import Loading from "@/components/Loading";
import fetchData from '@/mixins/fetchData.js';
export default {
  mixins:[fetchData([])],
  components: {
    CarouselItem,
    Icon,
    // Loading,
  },
  data() {
    return {
      // isLoading: true, //是否正在加载中
      // banners: [],
      index: 0, //当前显示的是第几章轮播图
      containerHeight: 0, //整个容器的高度
      switching: false, // 是否正在切换中
    };
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
    
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    async fetchData(){
      return await getBanners();
    },
    handleWheel(e) {
      // console.log(e, e.deltaY);
      // 这个地方我只打印100 -100 有的机子会打印具体的数字
      if (this.switching) {
        return;
      }
      if (e.deltaY < 0 && this.index > 0) {
        //往上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 0 && this.index < this.data.length - 1) {
        //往下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      // console.log("切换结束");
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

