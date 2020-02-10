import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
// let .. create object 'actions' whose props are the exported values
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0 // global variable
    },
    getters,
    mutations,
    actions,
    modules: {
        counter // same as counter: counter.
    }
});