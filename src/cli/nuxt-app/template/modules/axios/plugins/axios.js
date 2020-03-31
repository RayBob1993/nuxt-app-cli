export default ({ $axios, $error }) => {
  $axios.setHeader('X-Client-Version', process.env.NODE_ENV)

  $axios.onError(error => {
    const response = error.response
    const data = response.data

    $error.errorsNotifications(data)
  })
}
