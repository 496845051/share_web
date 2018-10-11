const DEFAULT_LOADING_TEXT = "拼命加载中...";
export default {
    state: {
        token: undefined
    },
    getters: {
        GET_TOKEN: state => {
            return state.token;
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = "Bearer " + token;
        },
        CLEAR_TOKEN: state => {
            state.token = undefined;
        }
    }
};
