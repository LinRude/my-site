<template>
  <Pager
    :total="302"
    :current="current"
    @pageChange="handleChangePage($event)"
  />
</template>

<script>
import Pager from "@/components/Pager";
export default {
  data() {
    return {
      current: 10,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handleChangePage(newPage) {
      console.log("父组件接受到子组件的信息了");
      this.current = newPage;
    },
  },
};
</script>

<style>
</style>