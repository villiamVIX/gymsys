<template>
	<PullLoadVIX  ref='pull'  @loadMore='loadMore'>
		<p v-for="val in 20">列表了{{val}}</p>
	</PullLoadVIX>
</template>

<script>
	import PullLoadVIX from 'components/common/PullLoadVIX/PullLoadVIX.vue'
	export default {
		data() {
			return {
				
			}
		}, 

		methods: {
			loadMore() {
				console.log('加载更多')
				setTimeout(() => {
					this.$refs.pull.$emit('loadEnd')
				}, 200)
			},
			//这里就是加载更多的处理函数了，这里只是用定时器模拟了一下，需要将加载状态回传到子组件中去
			// pull(num) {
			// 	console.log('pull回调');
			// 	setTimeout(() => {
			// 		this.num = num;
			// 		if (this.history_list.length >= this.pk_list_data.others_family_list.length) {
			// 			console.log('完了');
			// 			this.$refs.pull.$emit('loadOver') // 加载完毕
			// 		} else {
			// 			this.$refs.pull.$emit('loadEnd') // 加载完毕
			// 		}

			// 	}, 2000)

			// },
		},
		components: {
			PullLoadVIX
		},
	}
</script>
