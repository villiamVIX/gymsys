<template>
	<div>
		<el-card class="box-card">
			<el-container>
				<el-main>
					<el-row :gutter="10">
						<!-- :xs="7" :sm="10" :md="10" :lg="10" :xl="11" -->
						<el-col >
							<AdminCoachChart></AdminCoachChart>
						</el-col>
					</el-row>
				</el-main>
			</el-container>
		</el-card>
		<el-card class="box-card">
			<AdminCoachTable @showForm='showForm'></AdminCoachTable>
		</el-card>
		<!-- <AdminCoachForm  ></AdminCoachForm> -->
		
	</div>
</template>

<script>
	import AdminCoachChart from './childCpn/AdminCoachChart'
	import AdminCoachTable from './childCpn/AdminCoachTable'
	import AdminCoachForm from './childCpn/AdminCoachForm'
	export default {
		methods:{
			showForm(info){
				this.coachInfo=info
			}
		},
		data() {
			return {
				coachInfo: Object
			}
		},
		components: {
			AdminCoachChart,
			AdminCoachTable,
			AdminCoachForm
		}
	}
</script>

<style scoped>
	.box-card {
		margin: 15px 0;
	}
</style>
