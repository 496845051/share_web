import Vue from "vue";
import Vuex from "vuex";
import userInforModule from "./modules/userInfor";
import loadingModule from "./modules/loading";
import tokenModule from "./modules/token";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userInforModule,
        loadingModule,
        tokenModule
    }
});
