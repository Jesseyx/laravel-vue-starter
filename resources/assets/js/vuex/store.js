import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import middlewares from './middlewares';

/* register plugin */
/* http://vuex.vuejs.org/zh-cn/ */
Vue.use(Vuex);

const state = {
    name: '',
    token: '',
    authenticated: false,
    validate_errors: {},
};

/* eslint-disable no-new */
export default new Vuex.Store({
    state,
    mutations,
    middlewares,
});
