<template>
	<div class="container">
		<p>{{ dataStructure.questions[currentQuestion].text }}</p>
		<ul>
			<li v-for="(answer, index) in dataStructure.questions[currentQuestion].answers">
				<input
					:id="'checkbox_' + currentQuestion + '_' + index"
					:checked="controlled[currentQuestion] && controlled[currentQuestion][index] ? true : false"
					@change="(e) => SET_CHECKBOX({
						question: currentQuestion,
						answer: index,
						checked: e.target.checked,
						reset: !dataStructure.questions[currentQuestion].multi
					})"
					type="checkbox"
				>
				<label
					:for="'checkbox_' + currentQuestion + '_' + index"
				>
					{{ answer.text }}
				</label>
			</li>
			<div v-show="dataStructure.questions[currentQuestion].multi" class="multi">Можно multi</div>
			<button @click="acceptAnswer">Ответить</button>
			<!-- <button v-model="propmpt">Подсказка</button> -->
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
			...mapActions(['acceptAnswer']),
		},
	}
</script>