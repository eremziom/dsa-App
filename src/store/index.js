import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import login from './modules/login'
import error404 from './modules/error404'

export default new Vuex.Store({
    modules: {
        login,
        error404
    },
})