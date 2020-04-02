<template>
	<div class="app-container">
				<el-card class="box-card">	
		<transition name="fade-transform">
			<el-form  v-show="show" ref="form" :model="CreateForm" label-width="120px" :rules="rule">
				<el-form-item label="教练名" prop='name'>
					<el-input v-model="CreateForm.name" />
				</el-form-item>
				<el-form-item label="擅长/主攻" prop='major'>
					<el-checkbox-group v-model="CreateForm.major">
						<el-checkbox label="减脂" name="减脂"></el-checkbox>
						<el-checkbox label="增肌" name="增肌"></el-checkbox>
						<el-checkbox label="瑜伽" name="瑜伽"></el-checkbox>
						<el-checkbox label="体能" name="体能"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="授课单价" prop='price'>
					<el-radio-group v-model="CreateForm.price">
						<el-radio label="299"></el-radio>
						<el-radio label="199"></el-radio>
						<el-radio label="59"></el-radio>

					</el-radio-group>
				</el-form-item>
				<el-form-item label="自我介绍" prop='desc'>
					<el-input v-model="CreateForm.desc" type="textarea" />
				</el-form-item>
				<el-form-item label="上传照片" prop='cohPic'>
					<van-field name="uploader">
						<template #input>
							<van-uploader v-model="CreateForm.img" :before-read="beforeRead" multiple :max-count="1" accept="image/png, image/jpeg" />
						</template>
					</van-field>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="clickCreate">新增</el-button>
					<el-button @click="onCancel">取消</el-button>
				</el-form-item>

			</el-form>

		</transition>
		</el-card>
	</div>
</template>

<script>
	import {
		checkLoginMixin
	} from 'common/mixin.js'

	export default {
		mixins: [checkLoginMixin],
		mounted() {
			this.show=true
		},
		data() {
			return {
				show:false,
				CreateForm: {
					img: [],
					name: '',
					desc: '',
					major: ['增肌'],
					price: Number
				},
				files: [],
				rule: {
					name: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 4,
							message: '长度在 2 到 4 个字符',
							trigger: 'blur'
						},
						{
							required: true,
							pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
							message: '姓名不支持特殊字符',
							trigger: 'blur'
						}
					],
					price: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					major: [{
						type: 'array',
						required: true,
						message: '请至少选一个擅长',
						trigger: 'change'
					}],
					cohPic: [{
						type: 'array',
						required: true,
						message: '请至少选一个擅长',
						trigger: 'change'
					}]
				}
			}
		},
		methods: {
			clickCreate() {
				// if(!this.isLogin){
				// 	return vant.Toast('请先登录');
				// }
				if (this.CreateForm.img.length == 0) {
					return this.$notify({
						type: 'warning',
						message: '选择一张展示照片'
					})
				}
				let files = this.CreateForm.img[0].file
				var Form = new FormData()
				console.log(files)
				Form.append('cohPic', files)

				let {
					name,
					desc,
					major,
					price
				} = this.CreateForm
				for (let i = 0; i < major.length; i++) {
					Form.append('major', major[i])
				}
				Form.append('name', name)
				Form.append('price', price)
				Form.append('desc', desc)

				// console.log(Form.get("major"))
				this.$store.dispatch('coach/createCoach', Form).then(res => {
					return this.$notify({
						type: 'success',
						message: '新增成功，可在教练中心查看'
					})
				})
				// this.CreateForm.img=[]


			},
			onCancel() {
				this.$router.go(-1)
			},
			beforeRead(file) {
				if (file.type !== 'image/jpeg' & 'image/png') {
					vant.Toast('请上传 jpg/png 格式图片');
					return false;
				}
				return true;
			},
		}
	}
</script>

<style scoped>
	.line {
		text-align: center;
	}
</style>
