<template>
	<div>

		<div class="img" v-for="(i,k) in imgs" :key='k'>
			<van-image class="van-image" fit='cover' :src="baseUrl+i" Lazyload>
			</van-image>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		Image,
		Lazyload
	} from 'vant';

	Vue.use(Image).use(Lazyload)
	export default {
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
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
