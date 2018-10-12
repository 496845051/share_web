<template>
    <el-card>
        <div slot="header">步骤2：详细信息</div>
        <div>
            <el-form ref="form" :rules="rules" :model="form" label-width="100px">
                <el-form-item label="商品描述：" prop="goodsBrief">
                    <el-input v-model="form.goodsBrief" placeholder="请输入商品描述"></el-input>
                </el-form-item>
                <el-form-item label="商品详情：" prop="goodsBrief">
                    <div quill-editor="line-height:18px">
                        <quillEditor v-model="form.goodsContent" :options="quillEditorOption"></quillEditor>
                    </div>
                </el-form-item>
                <el-form-item label="商品描述：" prop="quantity">
                    <el-input-number v-model="form.quantity" :min="1" label="请输入销量"></el-input-number>
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
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    data() {
        return {
            form: {
                "goodsBrief": "iphoneXS的商品描述",
                "goodsContent": "",
                "quantity": 1
            },
            rules: {
                goodsBrief: [
                    { min: 3, max: 100, message: "请控制长度在3到100个字符", trigger: "blur" }
                ],
            },
            quillEditorOption: {
                placeholder: '请输入您的商品详情'
            }
        }
    },
    methods: {
        frontStep() {
            this.$emit("frontStep")
        },
        onSubmit() {
            this.$emit('nextStep')
        }
    },
    components: {
        quillEditor
    },
    props: {
        goodsId: {
            type: Number
        },
    }
}
</script>

<style scoped>
.quill-editor {
  line-height: 18px;
}
</style>