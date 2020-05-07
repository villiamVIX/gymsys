<template>
	<div>

		<imgCut ref="Uppicinput" @callback="callback" :width="200" :height="200">
		</imgCut>
		<img :src="imgsrc">
	</div>

</template>

<script>
	import {
		imgCut
	} from 'vue-imgcut'

	export default {
		data() {
			return {
				imgsrc: '',
			}
		},
		components: {
			imgCut
		},
		methods: {
			callback(img) {
				this.imgsrc=img
				this.$emit('imageBase64',img)
			}
		}
	}
</script>

<style>
</style>
