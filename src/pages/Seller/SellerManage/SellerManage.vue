<template>
    <div>
        商户管理
        <el-button type="primary" @click="submit">提交</el-button>
        {{GET_USERINFOR}}
    </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
    methods: {
        ...mapMutations([
            'EDIT_USERINFOR'
        ]),
        submit() {
            this.EDIT_USERINFOR({
                username: 1,
                psd: 2
            })
        }
    },
    computed: {
        ...mapGetters([
            'GET_USERINFOR'
        ])
    }
}
</script>
<style scoped>
</style>

