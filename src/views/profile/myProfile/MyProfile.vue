<template>
	<div id="profile">
		<!-- <Calendar></Calendar> -->
		<ProfileInfo></ProfileInfo>
		<ProfileCell v-for='item in titleInfo' :CellInfo='item' :key='item.route'
		 @clickCell='DealClickCell'></ProfileCell>
		<button @click="logout">登出</button>
	</div>

</template>

<script>

	import Calendar from 'components/content/Calendar/Calendar.vue';
	import ProfileCell from './childCpn/ProfileCell.vue'
	import ProfileInfo from './childCpn/ProfileInfo.vue'
	export default {
		data() {
			return {
				titleInfo: [
					{
						LeftTitle:'我的数据',
						route:'/profile/data'
					},
					{
						LeftTitle:'场馆管理',
						route:'/admin/user'
					}
				]
			}
		},
		methods: {
			logout() {
					this.$store.dispatch('reqLogout')
					this.refresh()
			},
			refresh(){
				location.reload()
			},
			DealClickCell(route){
				this.$router.replace(route)
			}
		},
		components: {
			Calendar,
			ProfileInfo,
			ProfileCell,
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
