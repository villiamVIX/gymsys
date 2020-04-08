<template>
	<div>
		<el-card class="box-card">
			<EntranceAdmin></EntranceAdmin>
		</el-card>
		<el-card class="box-card">
			<AdminUserTable></AdminUserTable>
		</el-card>
	</div>
</template>

<script>
	import AdminUserTable from './childCpn/AdminUserTable'
	import EntranceAdmin from '../entranceAdmin/EntranceAdmin.vue'
	export default {
		components: {
			AdminUserTable,
			EntranceAdmin
		},

	}
</script>

<style scoped>
	.box-card:last-of-type{
		margin-top: 1.8rem;
	}
</style>
