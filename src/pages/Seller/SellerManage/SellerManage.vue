<template>
    <div>

    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  created() {
    this.TOGGLE_LOADING(true);
    this.$GET("tenant/trade").then(res => {
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