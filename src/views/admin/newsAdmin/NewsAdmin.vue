<template>
	<div id="admin">
		<el-card class="box-card">
		<AdminNewsChart></AdminNewsChart>
		</el-card>
		<el-card class="box-card">
		<AdminNewsClass></AdminNewsClass>
		</el-card>
	</div>
</template>

<script>
	import AdminNewsClass from './childCpn/AdminNewsClass.vue'
	import AdminNewsChart from './childCpn/AdminNewsChart.vue'
	export default{
		name:'NewsAdmin',
		components:{
			AdminNewsClass,
			AdminNewsChart
		}
	}
</script>

<style scoped>
	#admin{
		background-color: #f2f3f5;
		width: 50rem !important;
	}
	.box-card:last-of-type{
		margin-top: 25rem;
	}
</style>
