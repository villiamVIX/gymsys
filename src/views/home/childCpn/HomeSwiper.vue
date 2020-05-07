<template>
	<div>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(item, index) in swipers" :key="index">
				<img :src="item" />
			</van-swipe-item>
		</van-swipe>
	</div>

</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name:"HomeSwiper",
		computed:{
		...mapState({
			swipers: state => state.common.swipers
		})
		}
			
	}
</script>

<style scoped>
	img {
		width: 100%;
		height: 187px;
	}
</style>
