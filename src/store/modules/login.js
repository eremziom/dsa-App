const state = {
    login: false,
    user: 'Niezalogowany'
};

const getters = {
    isLogged: state => state.login,
    isUser: state => state.user,
};

const mutations = {
    setLogin: (state, login) => {
        state.login = login;
    },
    setUser: (state, user) => {
        state.user = user;
    }
};

const actions = {
    logIn: ({commit}, user) => {
        commit('setLogin', true);
        commit('setUser', user)
        console.log(user)
    },
    logOut: ({commit}) => {
        commit('setLogin', false);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}