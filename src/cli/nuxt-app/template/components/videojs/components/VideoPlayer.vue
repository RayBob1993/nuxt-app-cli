<template>
	<div class="video-player">
		<video
			ref="video"
			class="video-js"
		/>

		<div
			v-if="description"
			class="video-player__description"
			v-html="description"
		/>
	</div>
</template>

<script>
import VideoJS from 'video.js'

export default {
	name: 'VideoPlayer',
	props: {
		src: {
			type: String,
			required: true,
		},
		poster: {
			type: String,
			default: '',
		},
		controls: {
			type: Boolean,
			default: true,
		},
		description: {
			type: String,
			default: '',
		},
	},
	data: () => ({
		player: null,
		progress: 0,
	}),
	mounted () {
		this.createPlayer()
	},
	beforeDestroy () {
		this.destroyPlayer()
	},
	methods: {
		createPlayer () {
			if (this.player) {
				return
			}

			this.player = VideoJS(this.$refs.video, {
				controls: this.controls,
				preload: 'auto',
				poster: this.poster,
			})

			this.player.src({
				type: 'video/mp4',
				src: this.src,
			})

			this.bindEvents()
		},

		destroyPlayer () {
			if (!this.player) {
				return
			}

			this.player.dispose()
			this.player = null
		},

		onTimeupdate () {
			let currentTime = this.player.currentTime()
			let duration = this.player.duration()
			let percent = (currentTime / duration) || 0
			let currentPercent = Math.round((percent >= 1 ? 1 : percent) * 100)

			if (this.progress !== currentPercent) {
				this.progress = currentPercent

				this.$emit('timeupdate', this.progress)
			}
		},

		bindEvents () {
			this.player.on('timeupdate', this.onTimeupdate)
		},
	},
}
</script>
