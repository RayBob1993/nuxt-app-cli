class Error {
  constructor (context, options) {
    this.context = context
    this.options = options

    this.isDev = context.isDev
    this.store = context.store

    this.app = this.context.app
  }

  throwError (error) {
    const response = error.response
    const data = response.data
    const message = data.message
    const statusCode = response.status
    const stackTrace = this.isDev ? data['stack-trace'] : null

    switch (statusCode) {
      case 500:
        this.serverError(statusCode, message, stackTrace)
        break

      case 404:
        this.notFoundError(statusCode, message)
        break
    }
  }

  serverError (statusCode, message, stackTrace) {
    return this.errorPage({
      statusCode,
      message,
      stackTrace,
    })
  }

  notFoundError (statusCode, message) {
    return this.errorPage({
      statusCode,
      message,
    })
  }

  createNotification (message) {
    if (process.server) {
      return
    }

    this.app.$notify({
      title: 'Ошибка',
      type: 'error',
      position: 'bottom-left',
      message,
    })
  }

  errorsNotifications (data) {
    if (data) {
      if (Array.isArray(data)) {
        data.forEach(({ message }) => {
          setTimeout(() => {
            this.createNotification(message)
          }, 1)
        })
      } else {
        this.createNotification(data.message)
      }
    }
  }
}

export default Error
