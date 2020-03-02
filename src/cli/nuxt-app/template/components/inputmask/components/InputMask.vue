<template>
	<el-input
		v-bind="$attrs"
		:type="type"
		:placeholder="placeholder"
		@input="onInput"
	/>
</template>

<script>
export default {
	name: 'InputMask',
	props: {
		mask: {
			type: Object,
			default: () => {},
		},
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '',
		}
	},
	data: () => ({
		phoneMask: {
			mask: '+7(999)999-9999',
			placeholder: '+7(___)___-____',
		},
	}),
	mounted () {
		this.maskInit()
	},
	methods: {
		maskInit () {
			const field = this.$el.querySelector('.el-input__inner')
			const Inputmask = require('inputmask')
			let mask = null

			switch (this.type) {
				case 'tel':
					mask = new Inputmask(this.phoneMask)
					break

				default:
					mask = new Inputmask(this.mask)
			}

			mask.mask(field)
		},
		onInput (value) {
			this.$emit('input', value)
		},
	},
}
</script>
