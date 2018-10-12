<template>
  <el-card>
    <div slot="header">
      步骤1：基本信息
    </div>
    <div>
      <el-form ref="form" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="商品名称：" prop="goodsName">
          <el-input v-model="form.goodsName" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品价格：" prop="shopPrice">
          <el-input v-model.number="form.shopPrice" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="市场价格：" prop="marketPrice">
          <el-input v-model.number="form.marketPrice" placeholder="请输入市场价格，默认为商品价格"></el-input>
        </el-form-item>
        <el-form-item label="进货价格：" prop="costPrice">
          <el-input v-model.number="form.costPrice" placeholder="请输入进货价格，默认为商品价格"></el-input>
        </el-form-item>
        <el-form-item label="是否免费：" prop="isFreeShipping">
          <el-switch v-model="form.isFreeShipping"></el-switch>
        </el-form-item>
        <el-form-item label="商品主图：" :required="true">
          <el-upload class="upload-demo" action="api/base/file" name="file" :drag="true" :show-file-list="false" :headers="{'Authorization': GET_TOKEN}" :on-success="handleSuccess" :before-upload="beforeUpload">
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
          <img v-if="form.thumbnail" :src="form.thumbnail" class="thumbnail">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" icon="el-icon-plus">新建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        goodsName: "iphoneXs",
        thumbnail:
          "http://pez70po4p.bkt.clouddn.com/2632ff30-d125-41b8-a481-3f1c1758ea81.jpg",
        shopPrice: "13000",
        marketPrice: "",
        costPrice: "",
        isFreeShipping: false
      },
      rules: {
        goodsName: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "请控制长度在3到15个字符",
            trigger: "blur"
          }
        ],
        shopPrice: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          { type: "number", message: "商品价格必须为数字", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["GET_TOKEN"]),
    uploadHeaders() {
      return {
        Authorization: this.GET_TOKEN
      };
    }
  },
  methods: {
    handleSuccess(res, file) {
      this.form.thumbnail = res.data.url;
      this.$message({
        type: "success",
        message: "图片上传成功！"
      });
    },
    beforeUpload(file) {
      const isImage = file.type === "image/jpeg" || file.type === "image/png";
      if (!isImage) {
        this.$message({
          message: "上传文件必须是jpg或png格式!",
          type: "warning"
        });
      }
      return isImage;
    },
    onSubmit() {
      let postData = this.form;

      if (postData.goodsName == "") {
        this.$message.error("商品名称为空");
        return;
      }
      if (postData.shopPrice == "") {
        this.$message.error("商品价格为空");
        return;
      }
      if (postData.thumbnail == undefined) {
        this.$message.error("商品主图为空");
        return;
      }
      postData.marketPrice = postData.marketPrice
        ? postData.marketPrice
        : postData.shopPrice;
      postData.costPrice = postData.costPrice
        ? postData.costPrice
        : postData.marketPrice;
      // this.$POST('goods', postData).then(res => {
      //   console.log(res);
      // })
      this.$emit('nextStep')
    }
  }
};
</script>

<style scoped>
.thumbnail {
  height: 200px;
  width: 200px;
}
</style>