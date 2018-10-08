<template>
    <div>
        商户管理
        <el-button type="primary" @click="submit">提交</el-button>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
    methods: {
        ...mapMutations([
            'OPEN_LOADING',
            'CLOSE_LOADING',
            'SET_LOADING_TEXT'
        ]),
        submit() {
            this.OPEN_LOADING()
            this.SET_LOADING_TEXT('加载中')
            console.log(this.GET_LOADING);
            setTimeout(() => {
                this.CLOSE_LOADING()
            }, 3000)
        }
    },
    computed: {
        ...mapGetters([
            'GET_LOADING'
        ])
    }
}
</script>
<style scoped>
</style>

