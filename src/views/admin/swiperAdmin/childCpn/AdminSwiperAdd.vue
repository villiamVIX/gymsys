<template>
	<div id="SwiperAdd">
		<el-tag effect="dark" class='swiperTag'>
		   点击↑图片即可移出轮播
		  </el-tag>
		<van-field name="uploader" class='upload'>
			<template #input>
				<van-uploader v-model="banner" :before-read="beforeRead" 
				multiple :max-count="5" accept="image/png, image/jpeg" />
			</template>
		</van-field>
		
		<el-button type="primary" @click="clickCreate">新增</el-button>
	</div>


</template>

<script>
	export default {
		data() {
			return {
				banner: []
			}
		},
		methods: {
			clickCreate() {
				// if(!this.isLogin){
				// 	return vant.Toast('请先登录');
				// }
				if (this.banner.length == 0) {
					return this.$notify({
						type: 'warning',
						message: '选择一张展示照片'
					})
				}
				let files=this.banner
				var Form =new FormData()
				for(let p=0;p<files.length;p++){ //循环放入Form中 不然数组塞不进FORM  
					Form.append('imgs'+p,files[p].file)
				}

					// console.log( Form.getAll("imgs"))
					this.$store.dispatch('app/AddSwiper', Form).then(res => {
						this.$notify({
							type: 'success',
							message: '新增成功，可在首页查看'
						})
						return this.$store.dispatch('reqHomeCommon')
					})
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
	.swiperTag{
		margin-top: 0.9375rem;
		font-size: 1rem;
	}
</style>
