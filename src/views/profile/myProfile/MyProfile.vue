<template>
	<div id="profile-box">
		<ProfileInfo></ProfileInfo>
		<!-- <Calendar></Calendar> -->
		<div id="profile">
			<CardVIX>
				<ProfileCell v-for='item in titleInfo' :CellInfo='item' :key='item.route' @clickCell='DealClickCell'></ProfileCell>
				<el-button type="danger" @click="logout">登出</el-button>
			</CardVIX>
		</div>
	</div>
</template>

<script>
	import Calendar from 'components/content/Calendar/Calendar.vue';
	import ProfileCell from './childCpn/ProfileCell.vue'
	import ProfileInfo from './childCpn/ProfileInfo.vue'
	import CardVIX from 'components/common/CardVIX/CardVIX.vue'

	export default {
		data() {
			return {
				titleInfo: [{
						LeftTitle: '我的数据',
						route: '/profile/data'
					},
					{
						LeftTitle: '场馆管理',
						route: '/admin/user'
					},
					{
						LeftTitle: '我的课程',
						route: '/profile/class'
					}
				]
			}
		},
		methods: {
			logout() {
				this.$store.dispatch('reqLogout')
				this.refresh()
			},
			refresh() {
				location.reload()
			},
			DealClickCell(route) {
				this.$router.replace(route)
			}
		},
		components: {
			Calendar,
			ProfileInfo,
			ProfileCell,
			CardVIX
		},
	}
</script>

<style scoped>
	#profile-box {
		background-color: #f5f5fd;
		height: 100vh;
	}

	#profile {
		padding: 5px 15px;
	}

	button {
		margin-top: 188px;
		height: 38px;
		width: 188px;
	}
</style>
