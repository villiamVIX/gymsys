<template>
	<el-container>
		<div v-if="screem=='mobile'&&sidebar" class="drawer-bg" @click="$store.dispatch('app/closeSideBar')" />
		<el-header style="height:44px;">
			<AdminTopBar></AdminTopBar>
		</el-header>
		<el-container>
			<transition name="fade-transform" mode="out-in">
				<AdminSideBar></AdminSideBar>
			</transition>
			<el-main :xs="4" :sm="6" :md="8" :lg="9">
				<!-- out-in 先让老元素滚出去 -->
				<transition name="fade-transform" mode="out-in">
					<router-view></router-view>
				</transition>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import AdminTopBar from './childCpn/AdminTopBar'
	import AdminSideBar from './childCpn/AdminSideBar'
	import {
		mapGetters
	} from 'vuex'

	export default {
		name: 'Admin',
		components: {
			AdminTopBar,
			AdminSideBar
		},
		created() {
			let screem = 'mobile'
			if (document.body.clientWidth < 700) {
				this.$store.dispatch('app/catchScreem', screem)
			}
			console.log()
		},
		computed: {
			...mapGetters(["sidebar", 'screem']),
		},
	}
</script>

<style scoped>
	.drawer-bg {
		background: #000;
		opacity: 0.1;
		width: 100%;
		top: 0;
		height: 100%;
		position: absolute;
		z-index: 887;
	}
</style>
