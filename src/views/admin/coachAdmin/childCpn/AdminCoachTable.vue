<template>
	<div>
		<div slot="header" class="clearfix">
			<span class="slot-title">月业绩排名</span>
			<el-button style="float: right; padding: 3px 0" @click='toCreate' type="primary" plain>新增教练</el-button>
		</div>
		<el-table :data="Data" style="width: 100%"  >
			<el-table-column fixed prop="name" label="姓名" min-width="77" :show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column prop="major" label="主攻" min-width="60">
			</el-table-column>
			<el-table-column prop="totalCount" label="授课次数" min-width="60">
			</el-table-column>
			<el-table-column prop="price" label="授课单价" min-width="60">
			</el-table-column>
			<el-table-column prop="level" label="等级" min-width="60">
			</el-table-column>
			<el-table-column label="照片" width="77rem">
				<template slot-scope="scope">
					<img :src="scope.row.cohPic" alt="" style="width: 36px;height:36px">
				</template>
			</el-table-column>
			<el-table-column prop="monthCount" label="月授课数">
			</el-table-column>
			<el-table-column prop="gender" label="操作" min-width="95">
				<template v-slot:default="slotProps">
					<el-button class='btn' type="primary" icon="el-icon-edit" size="mini" @click="showForm(slotProps.row)"></el-button>
					<el-button class='btn' type="danger" icon="el-icon-delete" size="mini" @click="delCoach(slotProps.row._id)"></el-button>
				</template>
			</el-table-column>
			</el-table-column>
		</el-table>
		<AdminCoachForm ></AdminCoachForm>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import AdminCoachForm from './AdminCoachForm'
	
	export default {
		data() {
			return {
				dialogFormVisible: false
			}
		},
		methods:{
			showForm(info){
				this.$store.dispatch('coach/toggleForm',info)
			},
			delCoach(info){
				this.$store.dispatch('coach/deleteCoach',info).then(res=>{
					this.$notify('删除成功')
					this.$store.dispatch('reqAdminCoachPie', '2020-03')
				})
			},
			toCreate(){
				this.$router.push('addcoach')
			}
		},
		computed: {
			...mapState({
				Data: state => state.Admin.CoachTable
			})
		},
		components:{
			AdminCoachForm
		}
	}
</script>

<style>
</style>
