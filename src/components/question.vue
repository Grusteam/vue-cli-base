<template>
	<div class="container">
		<p>{{ dataStructure.questions[currentQuestion].text }}</p>
		<ul>
			<li v-for="(answer, index) in dataStructure.questions[currentQuestion].answers">
				<input
					:id="'checkbox_' + currentQuestion + '_' + index"
					:checked="controlled[currentQuestion] && controlled[currentQuestion][index] ? true : false"
					@change="SET_CHECKBOX({
						question: currentQuestion,
						answer: index,
						checked: $event.target.checked,
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
			<button
				v-on:click="SET_PROMPT(1)"
				v-bind:title="showPrompt ? 'Hide' : 'Show'"
			>
				Подсказка
			</button>
			
			<div
				class="prompt"
				v-show="showPrompt"
			>
				{{ dataStructure.questions[currentQuestion].prompt }}
			</div>
			
			<div v-if="false" class="tests">
				<hr>
				{{ testProp }}
				<hr>
				<button
					@click="$emit('parent-method', $event, Math.random())"
				>
					эмутятор родительского метода
				</button>

				<hr>
				<component :is="showedComponent"/>
				<button
					@click="showedComponent='Yyy'"
				>
					сменить компонент
				</button>
			</div>
		</ul>
	</div>
</template>
<script>
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
	import dataStructure from '../consts.js';
	import Xxx from './Xxx.vue';
	import Yyy from './Yyy.vue';

	export default {
		name: 'question',
		props: {
			testProp: String,
		},
		components: {
			Xxx,
			Yyy,
		},
		data(_this) {
			return	{
				dataStructure,
				showedComponent: 'Xxx'
			}
		},
		computed: {
			...mapState(['currentQuestion', 'controlled', 'showPrompt']),
			...mapGetters([]),
		},
		methods: {
			...mapMutations(['SET_CHECKBOX', 'ACCEPT_ANSWER', 'SET_PROMPT']),
			...mapActions(['acceptAnswer']),
		},
	}
</script>