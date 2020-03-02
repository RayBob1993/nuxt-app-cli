<%_ if (isI18N) { _%>
import { locales } from './locale'
<%_ } _%>
<%_ if (isDotenv) { _%>
import { config } from 'dotenv'

config()
<%_ } _%>

const isDev = process.env.NODE_ENV === 'development'

export default {
	mode: '<%= mode %>',
  dev: isDev,
  server: {
    port: process.env.APP_PORT,
  },
  head: {
		title: '<%= name %>',
		meta: [
			{
				charset: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico',
			},
		],
	},
	buildModules: [
    <%_ if (isDotenv) { _%>
		'@nuxtjs/dotenv',
    <%_ } _%>
		'@nuxtjs/style-resources',
	],
	modules: [
    'nuxt-client-init-module',
    <%_ if (isAxios) { _%>
		'@nuxtjs/axios',
    <%_ } _%>
    <%_ if (isScrollTo) { _%>
    'vue-scrollto/nuxt',
    <%_ } _%>
    <%_ if (isGTM) { _%>
		[
			'@nuxtjs/google-tag-manager',
			{
				id: 'GTM-XXXXXXX',
				pageTracking: true,
				dev: false,
			},
		],
    <%_ } _%>
    <%_ if (isI18N) { _%>
    'nuxt-i18n',
    <%_ } _%>
    <%_ if (isMediaQuery) { _%>
		[
			'nuxt-mq',
			{
				defaultBreakpoint: 'default',
				breakpoints: {
					xs: 576,
					sm: 768,
					md: 992,
					lg: 1200,
					xl: Infinity,
				},
			},
		],
    <%_ } _%>
    '@bazzite/nuxt-optimized-images',
	],
	plugins: [
    <%_ if (isAxios) { _%>
		'@/plugins/axios',
    <%_ } _%>
    '@/plugins/components',
    <%_ if (isElementUI) { _%>
		'@/plugins/element-ui',
    <%_ } _%>
    <%_ if (isComponentSwiper) { _%>
    {
      src: '@/plugins/swiper',
      ssr: false,
    },
    <%_ } _%>
    <%_ if (isFingerprint) { _%>
    {
      src: '@/plugins/fingerprint',
      ssr: false,
    },
    <%_ } _%>
  ],
	css: [
    <%_ if (isBootstrap) { _%>
		{
			src: '@/assets/styles/bootstrap/index.scss',
			lang: 'scss',
		},
    <%_ } _%>
    <%_ if (isElementUI) { _%>
		{
			src: '@/assets/styles/element-ui/index.scss',
			lang: 'scss',
		},
    <%_ } _%>
		{
			src: '@/assets/styles/index.scss',
			lang: 'scss',
		},
	],
	styleResources: {
		scss: [
			'@/assets/styles/variables.scss',
		],
	},
  optimizedImages: {
    handleImages: [
      'jpeg',
      'png',
      'gif',
    ],
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
      progressive: true,
      sample: [
        '2x2',
      ],
    },
    pngquant: {
      quality: '80-100',
    },
    optipng: {
      optimizationLevel: 3,
    },
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
  },
  <%_ if (isAxios) { _%>
	axios: {
		https: true,
    <%_ if (isModeUniversal) { _%>
    debug: isDev,
    <%_ } _%>
	},
  <%_ } _%>
  <%_ if (isI18N) { _%>
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'ru',
        name: 'Russian',
      },
    ],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'ru',
      messages: locales,
    }
  },
  <%_ } _%>
}
