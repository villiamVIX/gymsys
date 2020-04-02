<template>
	<div id="admin">
		<el-card class="box-card">
		<AdminNewsChart></AdminNewsChart>
		</el-card>
		<el-card class="box-card">
		<AdminNewsTable></AdminNewsTable>
				</el-card>
	</div>
</template>

<script>
	// import AdminNewsClass from './childCpn/AdminNewsClass.vue'
	import AdminNewsChart from './childCpn/AdminNewsChart.vue'
	import AdminNewsTable from './childCpn/AdminNewsTable.vue'
	
	export default{
		name:'NewsAdmin',
		components:{
			// AdminNewsClass,
			AdminNewsChart,
			AdminNewsTable
		}
	}
</script>

<style scoped>
	#admin{
	}
	.box-card:last-of-type{
		margin-top: 1.2rem;
	}
</style>
