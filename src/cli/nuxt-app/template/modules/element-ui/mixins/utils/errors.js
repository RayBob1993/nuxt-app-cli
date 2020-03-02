export default {
  methods: {
    showErrors (error) {
      let errorData = error && error.response && error.response.data

      if (errorData) {
        if (Array.isArray(errorData)) {
          errorData.forEach(({ message }) => {
            setTimeout(() => {
              this.$notify({
                title: 'Ошибка',
                message,
                type: 'error',
                position: 'bottom-left',
              })
            }, 1)
          })
        } else {
          this.$notify({
            title: 'Ошибка',
            message: errorData.message,
            type: 'error',
            position: 'bottom-left',
          })
        }
      }
    },
  },
}
