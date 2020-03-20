<template>
	<div id="admin">
		<AdminNewsClass></AdminNewsClass>
		<AdminNewsChart></AdminNewsChart>
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
		
	}
</style>
