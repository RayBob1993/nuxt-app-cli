import <%= name %> from './modules/<%= name %>'

export default ({ store }) => {
  const options = <%= moduleOptionsTemplate %>

  store.registerModule('<%= name %>', <%= name %>(options), {
    preserveState: Boolean(store.state.<%= name %>),
  })
}
