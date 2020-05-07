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
			<el-main :xs="4" :sm="6" :md="8" :lg="9" v-if='isAdmin'>
				<!-- out-in 先让老元素滚出去 -->
				<transition name="fade-transform" mode="out-in">
					<router-view></router-view>
				</transition>
			</el-main>
			<el-main :xs="4" :sm="6" :md="8" :lg="9" v-else>
				<Page401></Page401>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import AdminTopBar from './childCpn/AdminTopBar'
	import AdminSideBar from './childCpn/AdminSideBar'
	import Page401 from 'views/err-page/401-page/401'
	import {
		mapGetters
	} from 'vuex'
	import {checkLoginMixin} from 'common/mixin.js'
	export default {
		mixins: [checkLoginMixin],
		name: 'Admin',
		components: {
			AdminTopBar,
			AdminSideBar,
			Page401
		},
		created() {
			let screem = 'mobile'
			if (document.body.clientWidth < 700) {
				this.$store.dispatch('app/catchScreem', screem)
			}
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
