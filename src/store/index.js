import Vue from 'vue'
import Vuex from 'vuex'
import dataStructure from '../consts.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        testVuexProp: 'testVuexPropValue',
        counter: 0,
        currentQuestion: 0,
        showPrompt: false,
        answers: {},
        controlled:{
            0: {
                0: !!0,
                1: !!1,
                2: !!0,
            },
            1: {
               0: !!0,
                1: !!0,
                2: !!1,
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
            if (reset && state.controlled[question]) {
                for (const [key, val] of Object.entries(state.controlled[question])) {
                    state.controlled[question][key] = false;
                }
            }

            if (!state.controlled[question]) state.controlled[question] = {};

            state.controlled[question][answer] = checked;
        },
        NEXT_QUSTION: (state) => {
            /* если есть следующий вопрос */
            if (dataStructure.questions[state.currentQuestion + 1]) {
                /* увеличить номер вопроса */
                state.currentQuestion++;
                
                /* скрыть подсказку */
                state.showPrompt = false;
            } else {
                console.log('finish him!');
            }
        },
        SET_PROMPT: (state, val = false) => {
           state.showPrompt = val;
        },
        SET_ANSWER: (state, { question, answer }) => {
            state.answers[question] = answer
        },
    },
    actions: {
        counterIncrease: (context) => {
            context.commit('COUNTER_INCREASE')
        },
        acceptAnswer: (context) => {
            context.commit('NEXT_QUSTION');
        },
    },
});

export default store;