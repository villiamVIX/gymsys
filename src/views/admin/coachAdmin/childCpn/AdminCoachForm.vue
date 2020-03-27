<template>
	<div>
		<el-dialog title="收货地址" :visible.sync="showForm">
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
						<el-option v-for='level in 5' :label="level" :value="level"></el-option>
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
				
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="closeForm">取 消</el-button>
				<el-button type="primary" @click="upDateCoach">确 定</el-button>
			</div>
		</el-dialog>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		computed:{
			...mapGetters(['showForm','coachInfo'])
		},
		methods:{
			closeForm(){
				this.$store.dispatch('coach/closeForm').then(res=>{
					this.$store.dispatch('reqAdminCoachPie', '2020-03')
				})
			},
			upDateCoach(){
				let {_id,price,level,major}=this.coachInfo
				let data={_id,price,level,price,major}
				this.$store.dispatch('coach/upDateCoach',data).then(res=>{
					this.$store.dispatch('coach/closeForm')
					this.$notify({type: 'success', message: '修改成功'} )
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
