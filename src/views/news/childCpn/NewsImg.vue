<template>
	<div>

		<div class="img" v-for="(i,k) in imgs" :key='k'>
			<van-image class="van-image" fit='cover' :src="i">
			</van-image>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				ss: false
			}
		},
		props: {
			imgs: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.img {
		padding: 0.3125rem 0.9375rem;
	}
</style>
