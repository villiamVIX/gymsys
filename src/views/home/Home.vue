<template>
	<div id="home">
		<HomeTopBar></HomeTopBar>
		<HomeSwiper></HomeSwiper>
		<HomeGrid></HomeGrid>
		<HomeTip></HomeTip>
		<FatHr></FatHr>
		<HomeNews></HomeNews>
		<FatHr></FatHr>
		<HomeRec></HomeRec>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Toast
	} from 'vant';

	import HomeTopBar from './childCpn/HomeTopBar'
	import HomeSwiper from './childCpn/HomeSwiper'
	import HomeGrid from './childCpn/HomeGrid'
	import HomeTip from './childCpn/HomeTip'
	import HomeNews from './childCpn/HomeNews'
	import HomeRec from './childCpn/HomeRec'

	import FatHr from 'components/common/FatHr/FatHr.vue'
	// 接口数据 ->转为VUEX统一管理


	export default {
		created() {
			this.$store.dispatch('reqHomeNews')
		},
		data() {
			return {
				reKey: 1,
				username: ""
			}
		},
		methods: {
		},
		components: {
			HomeTopBar,
			HomeSwiper,
			HomeGrid,
			HomeTip,
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
