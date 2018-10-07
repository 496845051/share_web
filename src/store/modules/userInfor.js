export default {
    state: {
        userInfor: undefined
    },
    getters: {
        GET_USERINFOR: (state) => {
            return state.userInfor
        }
    },
    mutations: {
        EDIT_USERINFOR: (state, newUserInfor) => {
            state.userInfor = newUserInfor
        }
    }
}
