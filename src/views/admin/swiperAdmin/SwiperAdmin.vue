<template>
	<div>
		<el-card class="box-card">		
		<AdminSwiperShow></AdminSwiperShow>
		</el-card>
		<AdminSwiperAdd></AdminSwiperAdd>
	</div>
	  		
</template>

<script>
	import AdminSwiperShow from './childCpn/AdminSwiperShow'
	import AdminSwiperAdd from './childCpn/AdminSwiperAdd'
	
	 
	export default{
		created() {
			this.$store.dispatch('reqHomeCommon')
		},
		components:{
			AdminSwiperShow,
			AdminSwiperAdd
		}
	}
</script>

<style>
</style>
