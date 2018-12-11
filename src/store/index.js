import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        a: 'b',
    }
});

export default store;