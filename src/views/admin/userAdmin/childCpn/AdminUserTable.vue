<template>
	<div id="AdminCoachTable">
		<div slot="header" class="clearfix">
			<span class="slot-title">人员列表</span>
		</div>
		<el-table :data="tableData" style="width: 100%"
		 v-loading="loading">
			<el-table-column fixed prop="username" sortable label="姓名" min-width="77" :show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column prop="joinDate" label="开卡日" min-width="60">
			</el-table-column>
			<el-table-column prop="deadLine" sortable label="到期" min-width="60">
			</el-table-column>
			<el-table-column prop="remain" sortable label="剩余" min-width="60">
			</el-table-column>
			<el-table-column prop="age" label="年龄" min-width="60">
			</el-table-column>
			<el-table-column label="照片" width="77rem">
				<template slot-scope="scope">
					<img :src="scope.row.avatar" alt="" style="width: 36px;height:36px">
				</template>
			</el-table-column>
			<el-table-column prop="phone" label="电话">
			</el-table-column>
			<el-table-column prop="gender" label="性别" min-width="50">
			</el-table-column>
			<el-table-column prop="gender" label="操作" >
				<template v-slot:default="slotProps">
					<!-- <el-button class='btn' type="primary" icon="el-icon-edit" size="mini" @click="updateUser(slotProps.row)"></el-button> -->
					<el-button class='btn' type="danger" icon="el-icon-delete" size="mini" @click="delUser(slotProps.row._id,slotProps.row.username)"></el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>

</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		created() {
			this.init()
		},
		methods: {
			init() {
				this.$store.dispatch('reqAdminUserTable').then(data => {
					this.mapData()
					this.loading=false
				})
			},
			mapData() {
				let data = this.UserTable
				for (let i = 0; i < data.length; i++) {
					data[i].avatar = this.baseUrl + data[i].avatar
					data[i].joinDate = data[i].joinDate.substring(0, 10)
					data[i].deadLine = data[i].deadLine.substring(0, 10)
					// 算剩余天数
					data[i].remain<0?data[i].remain='-过期':data[i].remain+= '天'
					
				}
				this.tableData = data
			},
			updateUser(a) {
				console.log(a)
			},
			delUser(id,name) {
				this.$store.dispatch('reqDeleteUser', id).then(data => {
					this.$notify({
						type: 'success',
						message: `${name} 已被删除`
					})
					this.init()
				})
			},
		},
		data() {
			return {
				tableData: [],
				baseUrl: this.GLOBAL.baseUrl,
				loading: true
			}
		},
		computed: {
			...mapState({
				UserTable: state => state.Admin.UserTable
			})
		}
	}
</script>

<style scoped>
	.btn {
		width: 1.75rem;
		text-align: center;
		padding: 7px 6px;
	}
	
</style>
