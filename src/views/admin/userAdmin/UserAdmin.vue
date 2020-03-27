<template>
	<div>
		<el-card class="box-card">
		<AdminUserTable></AdminUserTable>
		</el-card>
	</div>
</template>

<script>
	import AdminUserTable from './childCpn/AdminUserTable'
	export default{
		components:{
			AdminUserTable
		},
		
	}
</script>

<style>
</style>
