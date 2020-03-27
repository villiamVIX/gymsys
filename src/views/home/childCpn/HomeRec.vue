<template>
	<SlotHome v-if="!loading">
			<img slot='title-img' src="~assets/img/home/rec.png" />
			<span slot='title-left'>推荐课程</span>
			<div slot='slot-content' class="slot-content">
				<div class="cont-img">
					<img :src="recommend.img" />
				</div>
				<h3 class="cont-title">{{recommend.title}}</h3>
				<span class="cont-desc">{{recommend.desc}}</span>
			</div>
	</SlotHome>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	
	import SlotHome from 'components/common/Slot/SlotHome.vue'
	export default {
		components: {
			SlotHome
		},
		computed:{
		...mapState({
			recommend: state => state.common.recommend
		})
		},
	
		props: {
			loading: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style scoped>
	.cont-img img {
		height: 140px;
		padding: 2px 8px;
		width: 100%;
	}

	.slot-content {
		text-align: center;
	}
</style>
