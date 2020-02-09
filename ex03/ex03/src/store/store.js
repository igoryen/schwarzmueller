import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0 // global variable
    },
    // to see the state
    getters: {
        gValue: state => {
            return state.value;
        },
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks';
        }
    },
    // aka 'setters'. To overwrite the state
    // 'Setting' can be performed directly from components,
    // but it's better done via actions
    // especially if you have an async task to run
    mutations: {
        mUpdateValue: (state, payload) => {
            state.value = payload;
        },
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        aUpdateValue: ({ commit }, payload) => {
            commit('mUpdateValue', payload);
        },
        increment: ({ commit }, payload) => {
            commit('increment', payload)
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload)
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by)
            }, payload.duration);
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by)
            }, payload.duration);
        }
    }
});