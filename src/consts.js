const dataStructure = {
	questions: [
		{
            text: 'Какие ?',
			multi: false,
			answers: [
				{
					text:'Такие'
				},
				{
					text:'Не такие'
				},
				{
					text:'Любые'
				},
			],
			trasures: [8],
			prompt: 'Какие надо!'
		},
		{
            text: 'Щачло ?',
			multi: false,
			answers: [
				{
					text:'Попятчся'
				},
				{
					text:'Ололо'
				},
				{
					text:'Пыщь-пыщь'
				},
			],
			trasures: [4],
			prompt: 'Онотоле!'
		},
		{
            text: 'Мжвячне ?',
			multi: true,
			answers: [
				{
					text:'Ага'
				},
				{
					text:'Бага'
				},
				{
					text:'В 8пу нога'
				},
			],
			trasures: false,
			prompt: 'перше та друге!'
		},
	],
};

export default dataStructure;