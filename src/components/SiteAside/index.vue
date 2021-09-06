<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar
        url="https://img0.baidu.com/it/u=155346741,3953923104&fm=26&fmt=auto&gp=0.jpg"
        :size="150"
      />
    </div>
    <h1 class="title">满天飞絮</h1>
    <Menu />
    <Contact />
    <p class="footer">黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
  .title {
    font-size: 1em;color:#fff;text-align: center;
  }
}
</style>