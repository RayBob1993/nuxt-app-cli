export default ({ $axios, error }) => {
	$axios.setHeader('X-Client-Version', process.env.NODE_ENV)

	$axios.onError(e => {
		const statusCode = e.response.status
		const message = e.response.data.message

		switch (statusCode) {
			case 401:
				break

			case 422:
				break

			default:
				error({
					statusCode,
					message,
				})
		}
	})
}
