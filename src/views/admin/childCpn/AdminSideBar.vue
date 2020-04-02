<template>
	<el-menu :class="[screem=='mobile'&&sidebar==false?'mobileSM':'',
	screem=='mobile'&&sidebar==true?'mobileTH':'']" 
	@select='menuSelect'
	 :default-active="this.$route.path"
	 :show-timeout='10' :hide-timeout='10' :collapse-transition='false'
	 router class="sidebar el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
	 :collapse="sidebar">
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-pie-chart"></i>
				<span slot="title">数据监控</span>
			</template>
			<el-menu-item-group>
				<span slot="title">流量监控</span>
				<el-menu-item index="/admin/analysis/entrance">进场流量</el-menu-item>
				<el-menu-item index="/admin/analysis/news">新闻区流量</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		
		<el-menu-item :index="item.name"  v-for='(item,index) in navList'>
			<i :class="item.class">
			</i>
			<span slot="title">{{item.navItem}}</span>
		</el-menu-item>
	</el-menu>

</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		computed: {
			...mapGetters(["sidebar",'screem']),
		},
		data() {
			return {
				isCollapse: true,
				navList: [{
						name: '/admin/user',
						navItem: '管理中心',
						class:'el-icon-s-custom'
					},
					{
						name: '/admin/analysis/news',
						navItem: '新闻管理',
						class:'el-icon-receiving'
					},
					{
						name: '/admin/coach',
						navItem: '教练中心',
						class:'el-icon-c-scale-to-original'
					},
					{
						name: '/admin/addcoach',
						navItem: '新增教练',
						class:'el-icon-circle-plus-outline'
					},
					{
						name: '/admin/swiper',
						navItem: '轮播图',
						class:'el-icon-picture-outline-round'
					},
					{
						name: '/admin/lesson',
						navItem: '排课区',
						class:'el-icon-notebook-2'
					},
					
				],
				slotList: [{
						slotName: '/admin/entrance',
						slotItem: '进场流量监控'
					},
					{
						slotName: '/admin/data',
						slotItem: 'asdasdsad'
					}

				]
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			menuSelect() {
			  if (this.screem === "mobile") {
			    this.$store.dispatch("app/closeSideBar");
			  }
			}
		}
	}
</script>

<style scoped>
	.sidebar{
		height: 68vh;
		border-top-right-radius: 35px;
		border-bottom-right-radius: 35px;
		 box-shadow: 3px 1px 7px 2px #ebeef5;
		top: 60px;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.mobileSM{
		display: none;
	}
	.mobileTH{
		position: fixed;
		top: 100px;
		z-index: 888;
	}
</style>
