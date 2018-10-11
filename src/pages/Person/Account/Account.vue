<template>
    <div>
        账户管理
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$GET("/tenant/tenant").then(res => {
      console.log(res);
    });
  }
};
</script>
<style scoped>
</style>

