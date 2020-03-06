<template>
	<div id="ProfileInfo">
		<div class="Info-avantar">
			<van-image
				round
			  height="5.375rem"
			   :src="User.avatar" 
			    fit="contain"
			/>
			
		</div>
		
		<span class="Info-name">{{User.username}}
			<div class="changeAva">
				<label for="my_file">修改头像</label>
				<input type="file" name="avatar" style="display:none;"
				 id='my_file' accept="image/x-png, image/jpeg" @change="changeAvatar">
			</div>
		</span>
		
		<div class="Info-freq">{{User.freq}}</div>

		<div class="cell-right ">
			<i class="gymIcon-more"></i>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		mapState
	} from 'vuex'
	import {
		Toast,Image 
	} from 'vant'
	Vue.use(Toast).use(Image )
	export default {
		computed: {
			...mapState(['User'])
		},
		methods: {
			changeAvatar(event) {
				let img = event.target.files[0]
				console.log(event.target.files)
				let size = img.size
				if (size > 3145728) {
					this.$toast('3m以内图片被允许')
					return false
				}
				let Form = new FormData() //star!!!!!!!!!!!!!!!!
				Form.append('avatar', img)
				// 可加上D3参数-文件名 --haiweidingyi
				// console.log(Form.get('avatar'))
				this.$store.dispatch('reqChangeAvatar', Form).then(res=>{
					this.$toast(res)
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	#ProfileInfo {
		display: flex;
	}

	.Info-avantar {
		height: 5.375rem;
		width: 5.375rem;
		background: white;
		border-radius: 5.3125rem;
	}

	/* .Info-avantar img {
		height: 5.375rem;
		width: 5.375rem;
	}
 */
	.Info-name {
		flex: 1;
		margin-left: 15px;
		font-weight: bold;
		font-size: 20px;
		color: black;
	}

	.changeAva {
		border-radius: 0.9375rem;
		background-color: #008B8B;
		height: 22px;
		width: 5rem;
		text-align: center;
		line-height: 20px;
		font-size: 15px;
		color: white;
		margin-top: 15px;
	}

	.cell-right {
		float: right;
		align-self: center;
		font-size: 1.185rem;
		font-weight: 553;
	}
</style>
