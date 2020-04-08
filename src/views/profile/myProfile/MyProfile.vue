<template>
	<div id="profile-box">
		<ProfileInfo></ProfileInfo>
		<div id="profile">
			<CardVIX>
				<ProfileCell v-for='item in titleInfo' :CellInfo='item' :key='item.route' @clickCell='DealClickCell'></ProfileCell>
				<el-button type="danger" @click="logout">登出</el-button>
			</CardVIX>
		</div>
	</div>
</template>

<script>
	import ProfileCell from './childCpn/ProfileCell.vue'
	import ProfileInfo from './childCpn/ProfileInfo.vue'
	import CardVIX from 'components/common/CardVIX/CardVIX.vue'

	export default {
		data() {
			return {
				titleInfo: [{
						LeftTitle: '打卡墙',
						route: '/profile/calendar'
					},
					{
						LeftTitle: '我的私教课',
						route: '/profile/class'
					},
					{
						LeftTitle: '我的资料',
						route: '/profile/edit'
					},
					{
						LeftTitle: '场馆管理   (pc端使用)',
						route: '/admin/user'
					},
					{
						LeftTitle: '会员续费',
						route: '/profile/recharge'
					},
				]
			}
		},
		methods: {
			logout() {
				this.$store.dispatch('reqLogout')
				// this.refresh()
			},
			refresh() {
				location.reload()
			},
			DealClickCell(route) {
				this.$router.replace(route)
			}
		},
		
		components: {
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
