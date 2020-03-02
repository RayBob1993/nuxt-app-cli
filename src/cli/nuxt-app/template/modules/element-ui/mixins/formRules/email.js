export const emailRules = [
	{
		type: 'email',
		pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		message: 'Неверный формат email адреса. Пример: test@mail.ru',
		trigger: 'blur',
	},
]
