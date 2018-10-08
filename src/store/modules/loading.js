const DEFAULT_LOADING_TEXT = "拼命加载中..."
export default {
    state: {
        loading: false,
        loadingText: DEFAULT_LOADING_TEXT
    },
    getters: {
        GET_LOADING: (state) => {
            return state.loading
        },
        GET_LOADING_TEXT: (state) => {
            return state.loadingText
        },
    },
    mutations: {
        OPEN_LOADING: (state, text = DEFAULT_LOADING_TEXT) => {
            state.loading = true
            state.text = text
        },
        CLOSE_LOADING: (state) => {
            state.loading = false
        },
        SET_LOADING_TEXT: (state, text) => {
            state.loadingText = text
        }
    }
}
