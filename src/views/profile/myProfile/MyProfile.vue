<template>
	<div id="profile">
		<!-- <Calendar></Calendar> -->
		<ProfileInfo></ProfileInfo>
		<ProfileCell LeftTitle='我的数据' @clickCell='DealClickCell'></ProfileCell>
		<ProfileCell LeftTitle='个人中心' @clickCell='DealClickCell'></ProfileCell>
		<ProfileCell LeftTitle='打卡日历' @clickCell='DealClickCell'></ProfileCell>
		<ProfileCell LeftTitle='我的私教课程' @clickCell='DealClickCell'></ProfileCell>
		<img src="~assets/img/profile/login/hide.png" />
		
				<button @click="logout">登出</button>
	</div>

</template>

<script>
	import Vue from 'vue'
	import {Toast,Divider} from 'vant'
	import Calendar from 'components/content/Calendar/Calendar.vue';
	import ProfileCell from './childCpn/ProfileCell.vue'
	import ProfileInfo from './childCpn/ProfileInfo.vue'
	
	Vue.use(Toast).use(Divider);
	export default {
		// inject: ['reload'], //不会闪白的刷新方法 ==》在app.js中先定义好
		components: {
			Calendar,
			ProfileInfo,
			ProfileCell,
		},
		methods: {
			logout() {
					this.$store.dispatch('reqLogout')
					this.refresh()
			},
			refresh(){
				location.reload()
			},
			DealClickCell(prop){
				this.$toast(prop)
			}
		},
		
	}
</script>

<style scoped>
	#profile{
		padding: 5px 15px;
	}
	button{
		margin-top: 188px;
		height: 38px;
		width: 188px;
	}
</style>
