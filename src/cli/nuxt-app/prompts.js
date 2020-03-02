module.exports = [
	{
		name: 'name',
		type: 'string',
		message: 'Имя проекта (как в git)',
		default: '{outFolder}',
	},
	{
		name: 'description',
		type: 'string',
		message: 'Описание проекта',
		default: 'Новый CMG Nuxt проект',
	},
	{
		name: 'author',
		type: 'string',
		message: 'Имя автора',
		default: '{gitUser.name} <{gitUser.email}>',
		store: true,
	},
	{
		name: 'ui',
		type: 'checkbox',
		message: 'Выберите UI фреймворк',
		choices: [
			{
				name: 'Bootstrap',
				value: 'bootstrap',
				checked: true,
			},
			{
				name: 'Element',
				value: 'element-ui',
				checked: true,
			},
		],
		default: ['bootstrap', 'element-ui'],
	},
	{
		name: 'components',
		type: 'checkbox',
		message: 'Выберите компоненты',
		choices: [
			{
				name: 'Header',
				value: 'header',
				checked: true,
			},
			{
				name: 'Footer',
				value: 'footer',
				checked: true,
			},
			{
				name: 'InputMask',
				value: 'inputmask',
				checked: true,
			},
      {
        name: 'Swiper',
        value: 'swiper',
        checked: true,
      },
      {
        name: 'VideoJS',
        value: 'videojs',
        checked: true,
      },
		],
	},
	{
		name: 'modules',
		type: 'checkbox',
		message: 'Укажите nuxt модули',
		choices: [
			{
				name: 'Axios',
				value: 'axios',
				checked: true,
			},
			{
				name: 'GTM',
				value: 'gtm',
				checked: true,
			},
			{
				name: 'MediaQuery',
				value: 'mq',
				checked: true,
			},
			{
				name: 'Dotenv',
				value: 'dotenv',
				checked: true,
			},
			{
				name: 'ScrollTo',
				value: 'scroll-to',
				checked: true,
			},
			{
				name: 'ClickOutside',
				value: 'clickOutside',
				checked: true,
			},
			{
				name: 'Fingerprint',
				value: 'fingerprint',
				checked: false,
			},
      {
        name: 'i18n',
        value: 'i18n',
        checked: false,
      },
      {
        name: 'Новости',
        value: 'news',
        checked: false,
      },
      {
        name: 'Галерея',
        value: 'gallery',
        checked: false,
      },
      {
        name: 'Авторизация',
        value: 'auth',
        checked: false,
      },
      {
        name: 'Пользователь',
        value: 'user',
        checked: false,
      }
		],
	},
	{
		name: 'filters',
		type: 'checkbox',
		message: 'Выберите фильтры',
		choices: [
			{
				name: 'Склонение слов',
				value: 'plural',
			},
			{
				name: 'Формат цен',
				value: 'price',
			},
		],
	},
  {
    name: 'test',
    type: 'confirm',
    message: 'Добавить jest для тестов?',
    default: false,
  },
	{
		name: 'mode',
		type: 'list',
		message: 'Выберите режим рендеринга',
		choices: [
			{
				name: 'SSR',
				value: 'universal'
			},
			{
				name: 'SPA',
				value: 'spa',
			},
		],
		default: 'spa',
	},
	{
		name: 'pm',
		type: 'list',
		message: 'Выберите менеджер пакетов',
		choices: [
			{
				name: 'Yarn',
				value: 'yarn'
			},
			{
				name: 'Npm',
				value: 'npm'
			}
		],
		default: 'yarn',
	},
]
