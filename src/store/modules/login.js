const state = {
    login: false,
};

const getters = {
    isLogged: state => state.token
};

const mutations = {
    setLogin: (state, login) => {
        state.token = login;
    }
};

const actions = {
    logIn: ({commit}) => {
        commit('setLogin', true);
    },
    logOut: ({commit}) => {
        commit('setLogin', false);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}