import Vue from 'vue'
<%_ if (isComponentHeader) { _%>
import AppHeader from '@/components/AppHeader'
<%_ } _%>
<%_ if (isComponentFooter) { _%>
import AppFooter from '@/components/AppFooter'
<%_ } _%>
<%_ if (isComponentInputmask) { _%>
import InputMask from '@/components/InputMask'
<%_ } _%>
<%_ if (isComponentVideoJS) { _%>
import VideoPlayer from '@/components/VideoPlayer'
<%_ } _%>

<%_ if (isComponentHeader) { _%>
Vue.component(AppHeader.name, AppHeader)
<%_ } _%>
<%_ if (isComponentFooter) { _%>
Vue.component(AppFooter.name, AppFooter)
<%_ } _%>
<%_ if (isComponentInputmask) { _%>
Vue.component(InputMask.name, InputMask)
<%_ } _%>
<%_ if (isComponentVideoJS) { _%>
Vue.component(VideoPlayer.name, VideoPlayer)
<%_ } _%>


