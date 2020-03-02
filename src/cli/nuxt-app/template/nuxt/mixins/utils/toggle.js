export default {
	data: () => ({
		isVisible: false,
	}),
	methods: {
		toggle () {
			this.isVisible = !this.isVisible
		},

		hide () {
			this.isVisible = false
		},

		show () {
			this.isVisible = true
		},
	},
}
