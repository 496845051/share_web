import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";
import vuex from "../store/index";
import { from } from "array-flatten";
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "/api";

let token = undefined;

//http request 拦截器
axios.interceptors.request.use(
    // 设置请求头和token
    config => {
        config.data = JSON.stringify(config.data);
        config.headers = (() => {
            let header = {
                "Content-Type": "application/json;charset=utf-8"
            };
            token = vuex.getters["GET_TOKEN"];
            if (token) {
                header["Authorization"] = token;
            }
            return header;
        })();
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        // 做状态的检测，如果访问需要token的接口但请求暂无token则跳转到登陆界面
        if (response.data.errCode == 400) {
            router.push({
                path: "/login",
                query: {
                    redirect: router.currentRoute.fullPath
                } //从哪个页面跳转
            });
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function GET(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function POST(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            response => {
                resolve(response.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function DELETE(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, data).then(
            response => {
                resolve(response.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function PUT(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            response => {
                resolve(response.data);
            },
            err => {
                reject(err);
            }
        );
    });
}
