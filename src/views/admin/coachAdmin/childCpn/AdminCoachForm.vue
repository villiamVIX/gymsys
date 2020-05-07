<template>
	<el-dialog title="编辑教练信息" :visible.sync="showForm">
		<el-form :model="coachInfo">
			<el-form-item label="姓名" :label-width="formLabelWidth">
				<span>{{coachInfo.name}}</span>
			</el-form-item>
			<el-form-item label="授课单价" :label-width="formLabelWidth">
				<el-select v-model="coachInfo.price" placeholder="定价">
					<el-option label="299" value="199"></el-option>
					<el-option label="199" value="199"></el-option>
					<el-option label="59" value="59"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="等级" :label-width="formLabelWidth">
				<el-select v-model="coachInfo.level" placeholder="选择等级">
					<el-option v-for='level in 5' :key='level' :label="level" :value="level"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="主攻" :label-width="formLabelWidth">
				<el-checkbox-group v-model="coachInfo.major">
					<el-checkbox label="减脂" name="减脂"></el-checkbox>
					<el-checkbox label="增肌" name="增肌"></el-checkbox>
					<el-checkbox label="瑜伽" name="瑜伽"></el-checkbox>
					<el-checkbox label="体能" name="体能"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="绑定手机号" :label-width="formLabelWidth" prop='phone'>
				<el-input style='width: 9rem; margin-right:.6rem;'
				 maxlength='11' 
				 v-model="coachInfo.phone" />
				<el-button type="primary" size='mini' @click="bindPhone">绑定</el-button>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="closeForm">取 消</el-button>
			<el-button type="primary" @click="upDateCoach">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	
	export default {
		computed: {
			...mapGetters(['showForm', 'coachInfo'])
		},
		methods: {
			closeForm() {
				this.$store.dispatch('coach/closeForm').then(res => {
					this.$store.dispatch('reqAdminCoachPie', '2020-03')
				})
			},
			bindPhone(){
				const {_id,phone}=this.coachInfo
				const data={
					coachId:_id,
					phone
				}
				this.$store.dispatch('coach/bindCoachPhone', data).then(res => {
					this.$notify({
						message: res
					})
				})
			},
			upDateCoach() {
				let {
					_id,
					price,
					level,
					major
				} = this.coachInfo
				let data = {
					_id,
					price,
					level,
					price,
					major
				}
				this.$store.dispatch('coach/upDateCoach', data).then(res => {
					this.$store.dispatch('coach/closeForm')
					this.$notify({
						type: 'success',
						message: '修改成功'
					})
					this.$store.dispatch('reqAdminCoachPie', '2020-03')
				})
				console.log(data)
			}
		},
		data() {
			return {
				// dialogFormVisible: false,
				formLabelWidth: '120px'
			};
		}
	};
</script>

<style>
</style>
