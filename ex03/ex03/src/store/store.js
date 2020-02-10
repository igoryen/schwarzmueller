import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
// let .. create object 'actions' whose props are the exported values
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0 // global variable
    },
    // to see the state
    getters,
    // aka 'setters'. To overwrite the state
    // 'Setting' can be performed directly from components,
    // but it's better done via actions
    // especially if you have an async task to run
    mutations,
    actions,
    modules: {
        counter // same as counter: counter.
    }
});