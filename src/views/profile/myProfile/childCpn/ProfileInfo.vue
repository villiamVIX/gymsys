<template>
	<div id="ProfileInfo">
		<!-- <div class="changeAva">
			<label for="my_file">修改头像</label>
			<input type="file" name="avatar" style="display:none;"
			 id='my_file' accept="image/x-png, image/jpeg" @change="changeAvatar">
		</div> -->
		<div class="profile-left">
			<span class="Info-name">{{User.username}}

			</span>

			<div class="profile-freq">
				<h2 class="Info-freq">{{User.calendar.length}}</h2>
				<div class="lable">坚持天数</div>
			</div>
		</div>

		<div class="Info-avantar cell-right">
			<van-image round :src="baseUrl+User.avatar" fit="contain" />
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

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
					vant.Toast('3m以内图片被允许')
					return false
				}
				let Form = new FormData() //star!!!!!!!!!!!!!!!!
				Form.append('avatar', img)
				// 可加上D3参数-文件名 --haiweidingyi
				// console.log(Form.get('avatar'))
				this.$store.dispatch('reqChangeAvatar', Form).then(res => {
					this.$toast(res)
				})
			}
		},
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
			}
		}
	}
</script>

<style>
	#ProfileInfo {
		padding: 1.22rem 15px 0;
		display: flex;
		/* background-color: #00B176; */
		background: url(~assets/img/profile/bg5.jpg) bottom  no-repeat  ;
		background-size: 105%;
		background-position: -4px 0;
		height: 9rem;
		font-size: 1.28rem;
		align-items: center;
		color: white;
		margin:0 ;
	}
	.profile-left{
		flex: 1;
		
	}
	.Info-avantar{
		height: 3.99rem;
		width:  3.99rem;
		background-color: white;
		border-radius: 15rem;
	}
	.Info-avantar img {
		margin: 0 auto;
		height: 3.99rem;
		width:  3.99rem;
		border: .188rem solid white;
	}

	.Info-name {
		font-weight: bold;
	}

	.changeAva {
		border-radius: 0.9375rem;
		background-color: #008B8B;
		height: 1.375rem;
		width: 5rem;
		text-align: center;
		line-height: 1.25rem;
		font-size: 0.937rem;
		color: white;
		margin-top: 0.937rem;
	}
	.profile-freq{
		margin-top: 1rem;
		font-size: .9rem;
		font-family:"comic sans ms";
	}
	.Info-freq {
		font-style: italic;
	}
	.lable{
		font-size: .65rem;
		color: gainsboro;
	}
	.cell-right {
		float: right;
		align-self: center;
		font-size: 1.185rem;
		font-weight: bold;
	}
</style>
