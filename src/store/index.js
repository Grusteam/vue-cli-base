import Vue from 'vue'
import Vuex from 'vuex'
import dataStructure from '../consts.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        testVuexProp: 'testVuexPropValue',
        counter: 0,
        currentQuestion: 0,
        dataStructure,
        answers: {},
        controlled:{
            0: {
                0: true
            }
        }
    },
    getters: {
        testVuexGetter: () => 'testVuexGetterValue',
    },
    mutations: {
        COUNTER_INCREASE: (state, x) => {
            state.counter += 1;
        },
        SET_CHECKBOX: (state, { question, answer, checked, reset }) => {
            if (!state.controlled[question]) state.controlled[question] = {};

            if (reset) state.controlled[question] = {};

            console.log('reset', reset);

            state.controlled[question][answer] = checked;
        },
        ACCEPT_ANSWER(state, {  }) {
            console.log('ACCEPT_ANSWER');
           state.currentQuestion++;
        }
    },
    actions: {
        counterIncrease: (context) => {
            context.commit('COUNTER_INCREASE')
        },
        setAnswer: ({ commit }, question, answer) => {
            state.answers[question] = answer
        }
    },
});

export default store;