import Vue from 'vue'
import { Form,
	FormItem,
	Input,
	Notification,
	Loading,
	Dialog,
	Button } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Loading.directive)

Vue.prototype.$notify = Notification
