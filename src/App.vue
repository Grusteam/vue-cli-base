<template>
	<question :testProp="'testProp'" @parentMethod="parentMethod"></question>
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
			parentMethod(e, rand) {
				console.log('e, rand', e, rand);
			},
		},
	}
</script>
<style scoped>
	.container {
		color: red;
	}
</style>
