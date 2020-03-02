import { noun } from 'plural-ru'

export default (count, words) => {
	if (typeof count !== 'number') {
		console.error('count не является числом')

		return ''
	}

	return noun(count, ...words)
}
