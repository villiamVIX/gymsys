<template>
	<div id="home">
		<HomeTopBar></HomeTopBar>
		<HomeSwiper></HomeSwiper>
		<HomeGrid></HomeGrid>
		<FatHr></FatHr>
		<HomeNews></HomeNews>
		<FatHr></FatHr>
		<HomeRec :loading='loading'></HomeRec>
	</div>
</template>

<script>
	import HomeTopBar from './childCpn/HomeTopBar'
	import HomeSwiper from './childCpn/HomeSwiper'
	import HomeGrid from './childCpn/HomeGrid'
	import HomeNews from './childCpn/HomeNews'
	import HomeRec from './childCpn/HomeRec'

	import FatHr from 'components/common/FatHr/FatHr.vue'
	// 接口数据 ->转为VUEX统一管理


	export default {
		created() {
			this.$store.dispatch('reqHomeCommon').then(res=>{
				this.loading=false
			})
			this.$store.dispatch('reqNewsList')
		},
		data() {
			return {
				reKey: 1,
				username: "",
				recommend: Object,
				loading:true
			}
		},
		methods: {
			// mapData() {
			// 	console.log(this.$store.state.common.recommend)
			// 	this.recommend = this.$store.state.common.recommend
			// }
		},
		components: {
			HomeTopBar,
			HomeSwiper,
			HomeGrid,
			// HomeTip,
			HomeNews,
			FatHr,
			HomeRec,
		}
	}
</script>

<style scoped>
	.home {
		height: 100vh;

	}
</style>
