import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/icon.css';
import 'babel-polyfill';
import './assets/icons/iconfont.css';
import './assets/css/animate.min.css';
import Vuex from 'vuex';
import store from './store/index';

import { GET, POST, DELETE, PUT } from './utils/http';
Vue.prototype.$POST = POST;
Vue.prototype.$GET = GET;
Vue.prototype.$DELETE = DELETE;
Vue.prototype.$PUT = PUT;
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
if (sessionStorage.getItem('store')) {
	store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))));
}

//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener('beforeunload', () => {
	sessionStorage.setItem('store', JSON.stringify(store.state));
});

Vue.use(Vuex);

// 使用钩子函数对路由进行权限跳转
// 以是否有vuex中是否有token判断其是否登录
router.beforeEach((to, from, next) => {
	const token = store.getters.GET_TOKEN;
	if (!token && to.path !== '/login') {
		next('/login');
	} else {
		next();
	}
});

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
