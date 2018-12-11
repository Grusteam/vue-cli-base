import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        testVuexProp: 'testVuexPropValue',
        counter: 0,
    },
    getters: {
        testVuexGetter: () => 'testVuexGetterValue',
    },
    mutations: {
        COUNTER_INCREASE: (state, x) => {
            state.counter += 1;
        }
    },
    actions: {
        counterIncrease: (context) => {
            context.commit('COUNTER_INCREASE')
        }
    },
});

export default store;