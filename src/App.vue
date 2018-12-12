<template>
	<question :testProp="null"></question>
</template>
<script>
	import question from './components/question.vue';
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
	

	export default {
		name: 'App',
		components: {
			question,
		},
		data() {
			return	{
			}
		},
		computed: {
			...mapState(['testVuexProp', 'counter']),
			...mapGetters(['testVuexGetter']),
		},
		methods: {
			...mapMutations(['COUNTER_INCREASE']),
			...mapActions(['counterIncrease']),
		},
	}
</script>
<style scoped>
	.container {
		color: red;
	}
</style>
