<template>
    <el-card>
        <div slot="header">
            步骤1：基本信息
        </div>
        <div>
            <el-row>
                <el-col :span="20" :offset="2">
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
                        <el-form-item label="是否免费：" prop="isFreeShipping">
                            <el-switch v-model="form.isFreeShipping"></el-switch>
                        </el-form-item>
                        <el-form-item label="商品主图：" :required="true">

                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            form: {
                goodsName: "",
                thumbnail: "",
                shopPrice: "",
                marketPrice: "",
                costPrice: "",
                isFreeShipping: false
            },
            rules: {
                goodsName: [
                    { required: true, message: "请输入商品名称", trigger: "blur" },
                    { min: 3, max: 15, message: '请控制长度在3到15个字符', trigger: 'blur' }
                ],
                shopPrice: [
                    { required: true, message: "请输入商品价格", trigger: "blur" },
                    { type: "number", message: '商品价格必须为数字', trigger: 'blur' }
                ],
                marketPrice: [
                    { type: "number", message: '商品价格必须为数字', trigger: 'blur' }
                ]
            }
        }
    }
}
</script>

<style scoped>
</style>