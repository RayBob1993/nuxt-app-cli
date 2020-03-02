import wNumb from 'wnumb'

export default price => {
	if (typeof price !== 'number') {
		console.error('price не является числом')

		return price
	}

	const Format = wNumb({
		decimals: 0,
		thousand: ' ',
	})

	// https://refreshless.com/wnumb/
	return Format.to(price)
}

