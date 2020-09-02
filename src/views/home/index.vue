<template>
  <!--  -->
  <div class="m-">首页</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getHot();
  },
  methods: {
    async getHot() {
      let data = {
        id: "109810624"
      };
      const res = await this.$post("/api/weapi/v3/playlist/detail", data);
      if (res.code == 200) {
        console.log(res);
      } else {
          this.$msg.error(res.msg)
      }
    }
  }
};
</script>
<style scoped>
.m- {
}
</style>