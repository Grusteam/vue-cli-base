<template>
	<div class="container">
		<p>{{ dataStructure.questions[currentQuestion].text }}</p>
		<ul>
			<li v-for="(answer, index) in dataStructure.questions[currentQuestion].answers">
				<input :id="'checkbox_' + currentQuestion + '_' + index" :checked="controlled[currentQuestion] ? controlled[currentQuestion][index] : false" @change="(e) => setAnswer(e, currentQuestion, index)" type="checkbox">
				<label :for="'checkbox_' + currentQuestion + '_' + index">{{ answer.text }}</label>
			</li>
			<div v-show="dataStructure.questions[currentQuestion].multi" class="multi">Можно multi</div>
			<button @click="ACCEPT_ANSWER">Ответить</button>
		</ul>
	</div>
</template>
<script>
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

	export default {
		name: 'question',
		data() {
			return	{
			}
		},
		computed: {
			...mapState(['currentQuestion', 'dataStructure', 'controlled']),
			...mapGetters([]),
		},
		methods: {
			...mapMutations(['SET_CHECKBOX', 'ACCEPT_ANSWER']),
			...mapActions([]),
			acceptAnswer() {
				console.log('acceptAnswer');
			},
			setAnswer(e, question, answer) {
				const { target: { value, checked } } = e;

				this.SET_CHECKBOX({question, answer, checked, reset: !this.dataStructure.questions[question].multi})

				/* if (dataStructure.questions[currentQuestion].multi) {

				} else {

				} */

			}
		},
	}
</script>