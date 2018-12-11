import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'
import store from './store'

// console.log('_', _);

new Vue({
	el: '#app',
	render: h => h(App),
	store,
})