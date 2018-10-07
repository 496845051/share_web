import Vue from 'vue'
import Vuex from 'vuex'
import userInforModule from './modules/userInfor'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userInforModule
    }
})
