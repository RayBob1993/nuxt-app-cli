import Fingerprint2 from 'fingerprintjs2'

export default ({ $axios }) => {
	const HASH_LENGTH = 31
	const FALLBACK_TIMEOUT = 500

	const createFingerprintHeader = components => {
		let valuesArray = components.map(component => component.value)
		let valuesString = valuesArray.join('')
		let hash = Fingerprint2.x64hash128(valuesString, HASH_LENGTH)

		$axios.setHeader('X-Referer-Id', hash)
	}

	if (window.requestIdleCallback) {
		requestIdleCallback(() => {
			Fingerprint2
			.getPromise()
			 .then(createFingerprintHeader)
		})
	} else {
		setTimeout(() => {
			Fingerprint2
			.getPromise()
			 .then(createFingerprintHeader)
		}, FALLBACK_TIMEOUT)
	}
}
