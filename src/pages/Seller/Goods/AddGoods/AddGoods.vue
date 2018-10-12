<template>
    <el-row>
        <el-col :span="20" :offset="2">
            <!-- 添加商品的步骤条 -->
            <el-steps class="step-bar" :active="stepActive" finish-status="success">
                <el-step title="基本信息" description="填写商品的基本信息"></el-step>
                <el-step title="详细信息" description="填写商品的详细信息"></el-step>
                <el-step title="商品图片" description="上传商品的详细图片"></el-step>
            </el-steps>

            <!-- 操作区 -->
            <div class="operate-panel">
                <step1 v-if="stepActive==0"></step1>
                <step2 v-if="stepActive==1"></step2>
                <step3 v-if="stepActive==2"></step3>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import step1 from "./Step1";
import step2 from "./Step2";
import step3 from "./Step3";

export default {
  data() {
    return {
      stepActive: 0
    };
  },
  methods: {
    frontStep() {
      this.stepActive -= 1;
    },
    nextStep() {
      this.stepActive += 1;
    }
  },
  components: {
    step1,
    step2,
    step3
  }
};
</script>

<style scoped>
.step-bar {
  margin-top: 30px;
}
.operate-panel {
  margin-top: 30px;
}
.jump-step-btn-group {
  margin-top: 10px;
}
.jump-step-btn-group .next-page-btn {
  text-align: right;
}
</style>