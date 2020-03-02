module.exports = [
	{
		name: 'addons',
		type: 'checkbox',
		message: 'Выберите аддоны',
		choices: [
			{
				name: 'Авторизация/Регистрация',
				value: 'auth',
			},
      {
        name: 'User',
        value: 'user',
      },
			{
				name: 'Cookie',
				value: 'cookie',
			},
      {
        name: 'Gallery',
        value: 'gallery',
      },
      {
        name: 'Tests',
        value: 'tests',
      },
		],
	},
]
