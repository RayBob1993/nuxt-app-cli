<%_ if (isElementUI) { _%>
import Vue from 'vue'
import ElementUI from 'element-ui'
<%_ } _%>
import { config } from '@vue/test-utils'
<%_ if (isElementUI) { _%>
Vue.use(ElementUI)
<%_ } _%>

config.stubs['nuxt-link'] = '<a><slot /></a>'
config.stubs['client-only'] = '<span><slot /></span>'
