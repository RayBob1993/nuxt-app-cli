import <%= upperCaseName %> from './modules/<%= upperCaseName %>'
import '../middleware'

export default (context, inject) => {
  const options = <%= moduleOptionsTemplate %>
  const <%= name %> = new <%= upperCaseName %>(context, options)

  inject('<%= name %>', <%= name %>)
  context.$<%= name %> = <%= name %>
}
