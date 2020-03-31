import Error from './modules/Error'

export default (context, inject) => {
  const options = JSON.parse('<%= JSON.stringify(options) %>')

  const error = new Error(context, options)

  inject('error', error)
  context.$error = error
}
