const state = {
    errorOn: false,
};

const getters = {
    isError: state => state.errorOn,
};

const mutations = {
    setError: (state, arg) => {
        state.errorOn = arg;
    }
};

const actions = {
    setErrorOn: ({commit}, arg) => {
        commit('setError', arg);
        console.log(arg)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}