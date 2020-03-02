export default {
  data: () => ({
    isLoading: false,
  }),
  methods: {
    setLoading (boolean) {
      this.isLoading = boolean
    },
  },
}
