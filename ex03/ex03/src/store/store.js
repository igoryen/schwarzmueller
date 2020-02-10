import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0 // global variable
    },
    // to see the state
    getters: {
        gValue: state => {
            return state.value;
        }
    },
    // aka 'setters'. To overwrite the state
    // 'Setting' can be performed directly from components,
    // but it's better done via actions
    // especially if you have an async task to run
    mutations: {
        mUpdateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        aUpdateValue: ({ commit }, payload) => {
            commit('mUpdateValue', payload);
        }
    },
    modules: {
        counter // same as counter: counter.
    }
});