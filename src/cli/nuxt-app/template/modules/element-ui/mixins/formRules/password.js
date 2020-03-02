export const passwordRules = [
	{
		min: 8,
		message: 'Длина пароля должна быть не менее 8 символов',
		trigger: 'blur',
	},
	{
		pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm,
		message: 'Пароль должен содержать в себе цифры и буквы',
		trigger: 'blur',
	},
]
