<template>
	<div class="header-Box">
		<div class="header-left">
			<div class="toggle" @click="$store.dispatch('app/toggleSideBar')">
				<i class="gymIcon-sideClose"></i>
			</div>
			<el-breadcrumb separator-class="el-icon-caret-right" style="display: inline-block">
				<el-breadcrumb-item><a href="javascript:;">首页</a></el-breadcrumb-item>
				<transition-group name="breadcrumb">
					<el-breadcrumb-item v-for="(item) in levelList" :key="item.path" v-if="item.meta.title" :to="item.redirect||item.path">
						{{item.meta.title}}
					</el-breadcrumb-item>
				</transition-group>
			</el-breadcrumb>
		</div>
		<div class="header-mid">
			<h2 class="">健身房后台管理</h2>
		</div>

		<div class="header-right">
			<span>管理员-{{username}}</span>
			<el-dropdown>
				<i class="el-icon-setting"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="logout">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		computed: {
			...mapGetters(["username"]),
		},
		watch: {
			$route(to, from) {
				this.getBreadcrumb()
			}
		},
		mounted() {
			this.getBreadcrumb()
		},
		data() {
			return {
				levelList: undefined
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			getBreadcrumb() {
				let matched = this.$route.matched.filter(item => item.meta.title)
				this.levelList = matched;
			},
		}
	}
</script>

<style scoped>
	.gymIcon-sideClose {
		font-size: 1.125rem;
	}

	.header-Box {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin-top: 15px
	}

	.toggle {
		width: 0.9375rem;
	}

	.header-left {
		/* flex: 1; */
	}

	.header-mid {
		align-self: flex-start;

	}

	.head-right {
		margin-right: 0.9375rem;
	}
</style>
