<template>
	<el-menu :default-active="this.$route.path" router mode="horizontal">
		<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
			{{ item.navItem }}
		</el-menu-item>
		<el-submenu index=''>
			<template slot="title">数据监控</template>
			<el-menu-item v-for="(slot,index) in slotList" :key="index" :index="slot.slotName">
				{{slot.slotItem}}
			</el-menu-item>
		</el-submenu>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
						name: '/admin/entrance',
						navItem: '管理中心'
					},
					{
						name: '/admin/news',
						navItem: '新闻管理'
					},
				],
				slotList: [{
						slotName: '/admin/data/chart',
						slotItem: '哒哒哒'
					},
					{
						slotName: '/admin/data',
						slotItem: 'asdasdsad'
					}

				]
			};
		},
		methods: {}
	}
</script>

<style>
</style>
