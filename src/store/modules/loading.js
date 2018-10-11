const DEFAULT_LOADING_TEXT = "拼命加载中...";
export default {
    state: {
        // 当前loading状态
        loading: false,

        // 当前loading显示的文本
        loadingText: ""
    },
    getters: {
        GET_LOADING: state => {
            return state.loading;
        },
        GET_LOADING_TEXT: state => {
            return state.loadingText;
        }
    },
    mutations: {
        OPEN_LOADING: (state, text = DEFAULT_LOADING_TEXT) => {
            state.text = text;
            state.loading = true;
        },
        CLOSE_LOADING: state => {
            state.text = "";
            state.loading = false;
        },
        TOGGLE_LOADING: (state, loading, text = DEFAULT_LOADING_TEXT) => {
            if (state.loading) {
                state.text = "";
                state.loading = loading;
            } else {
                state.text = text;
                state.loading = loading;
            }
        }
    }
};
