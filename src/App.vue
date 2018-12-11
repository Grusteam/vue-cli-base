<template>
	<div class="container">
		<div class="wrapper">
			<input type="text" v-model="test">
			<div>{{ test }}</div>
		</div>
		<div class="wrapper">
			<div v-show="show1()">show1</div>
		</div>
		<div class="wrapper">
			<button
				v-on:click="show2 = !show2"
				v-bind:title="show2 ? 'Hide' : 'Show'"
			>
				__show2
			</button>
			
			<div
				class="wrapper"
				v-show="show2"
			>
				show2__
			</div>

		</div>
		<div class="wrapper">
			<button
				@click="add"
			>
				random
			</button>
			<ul class="list">
				<li v-for="num in arr" class="list-item">{{ num }}</li>
			</ul>
		</div>
		<div class="wrapper">
			{{ a }}
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';

	export default {
		data() {
			return	{
				test: 'default',
				show2: true,
				ten: 10,
				arr: [],
			}
		},
		computed: mapState(['a']),
		methods: {
			show1: () => true,
			add(e) {
				const { target } = e;

				console.log('target', target);
				this.arr.push(Math.random())
			},
		},
	}
</script>
<style scoped>
	.container {
		color: red;
	}
</style>
