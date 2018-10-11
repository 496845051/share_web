<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">

      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tenantTrades: []
    }
  },
  created() {
    this.TOGGLE_LOADING(true);
    this.$GET("tenant/trade").then(res => {
      this.tenantTrades = res.data.tenantTrades
      this.TOGGLE_LOADING(false);
    });
  },
  methods: {
    ...mapMutations(["TOGGLE_LOADING", "CLOSE_LOADING"])
  }
};
</script>

<style scoped>
</style>