import Toggle from './toggle'
<%_ if (isElementUI) { _%>
import Loading from './loading'
import Errors from './errors'
<%_ } _%>

export {
  Toggle,
  <%_ if (isElementUI) { _%>
  Loading,
  Errors,
  <%_ } _%>
}
