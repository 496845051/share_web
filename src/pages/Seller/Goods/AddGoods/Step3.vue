<template>
    <el-card>
        <div slot="header">步骤3：商品图片</div>
        <div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-upload action="api/base/multi_file" name="file" :multiple="true" :drag="true" :headers="{'Authorization': GET_TOKEN}" :on-remove="handleRemove" :on-success="handleSuccess" :before-upload="beforeUpload">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button type="default" @click="frontStep">返回</el-button>
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
                goodsImages: []
            }
        }
    },
    computed: {
        ...mapGetters(['GET_TOKEN'])
    },
    methods: {
        handleSuccess(res, file) {
            let newUrl = res.data.urls["0"]
            let imageList = this.form.goodsImages
            imageList.push(newUrl)
            this.form.goodsImages = imageList
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
        handleRemove(e) {
            let goodsImages = this.form.goodsImages
            const index = goodsImages.indexOf(e.response.data.urls[0])
            goodsImages.splice(index, 1)
            this.form.goodsImages = goodsImages
        },
        onSubmit() {

        },
        frontStep(){
            this.$emit("frontStep")
        }
    }
}
</script>

<style scoped>
</style>