<template>
	<BgPanelVIX>
		<ScrollCard>
			<CardVIX>
				<van-form>
					<div class="user_avatar">

						<div class="changeAva avaBox">
							<h3>贴吧头像</h3>
							<div class="Info-avantar cell-right">
								<van-image round class="avatar-img" :src="baseUrl+User.avatar" fit="scale-down" />
							</div>
							<label class="avatar-label" for="my_file">更改头像</label>
							<input type="file" name="avatar" style="display:none;" id='my_file' accept="image/x-png, image/jpeg" @change="changeAvatar">
						</div>
						<div class="setEntranceAva avaBox">
							<h3>入场识别头像</h3>
							<div class="Info-avantar">
								<van-image round class="avatar-img" :src="baseUrl+User.entrance_avatar" fit="scale-down" />
							</div>
							<div v-if="!User.entrance_avatar">
								
							<label class="avatar-label" for="my_avatar">上传头像</label>
							<input type="file" name="avatar" style="display:none;" id='my_avatar' accept="image/x-png, image/jpeg" @change="setEntranceAva">
							</div>
						</div>
					</div>
					<van-field class="input" label="到期时间" disabled :value="User.deadLine | formatDeadLine" readonly />
					<van-field class="input" v-model="User.phone" disabled name="电话" label="电话" />
					<van-field class="input" v-model="User.username" name="用户名" label="用户名" />
					<van-field class="input" v-model="User.password" name="密码" label="密码" />
					<div style="margin: 16px;">
						<van-button round block type="primary" @click="onSubmit">
							修改
						</van-button>
					</div>
					<div class="ent_tip">
						<p style="margin-left: 3rem;">· 入场头像请上传真实照片</p>
						<p style="margin-left: 3rem;">· 以便进场识别</p>
						<p style="margin-left: 3rem;">· 入场头像仅能上传一次！</p>
					</div>
				</van-form>
			</CardVIX>
		</ScrollCard>
	</BgPanelVIX>
</template>

<script>
	import BgPanelVIX from 'components/common/BgPanelVIX/BgPanelVIX.vue'
	import CardVIX from 'components/common/CardVIX/CardVIX.vue'
	import ScrollCard from 'components/common/ScrollCard/ScrollCard.vue'

	export default {
		data() {
			return {
				User: this.$store.state.User,
				baseUrl: this.GLOBAL.baseUrl,
			}
		},
		methods: {
			onSubmit() {
				const {username,password}=this.$store.state.User
				const data={
					username,
					password
				}
				this.$store.dispatch('reqEditProfile',data).then(res=>{
					this.$toast('修改成功')
				})
			},
			changeAvatar(event) {
				let img = event.target.files[0]
				console.log(event.target.files)
				let size = img.size
				if (size > 2145728) {
					vant.Toast('2m以内图片被允许')
					return false
				}
				let Form = new FormData() //star!!!!!!!!!!!!!!!!
				Form.append('avatar', img)
				// 可加上D3参数-文件名 --haiweidingyi
				// console.log(Form.get('avatar'))
				this.$store.dispatch('reqChangeAvatar', Form).then(res => {
					this.$toast(res)
				})
			},
			setEntranceAva() {
				let img = event.target.files[0]
				console.log(event.target.files)
				let size = img.size
				if (size > 10485760) {
					vant.Toast('10m以内图片被允许')
					return false
				}
				let Form = new FormData() //star!!!!!!!!!!!!!!!!
				Form.append('avatar', img)

				this.$store.dispatch('reqChangeEntranceAvatar', Form).then(res => {
					this.$toast(res)
				})
			}
		},
		components: {
			BgPanelVIX,
			CardVIX,
			ScrollCard
		},
		filters: {
			formatDeadLine(date) {
				return date.substr(0, 10)
			}
		}
	}
</script>

<style scoped>
	.input {
		height: 2.8rem;
		width: 100%;
		border: none;
		border-bottom: #41b88361 solid;
		outline: none;
		border-radius: 0;
		line-height: 2.5rem;
		font-size: .8rem;
		font-weight: bold;
	}

	.user_avatar {
		display: flex;
		justify-content: space-around;
	}

	.Info-avantar {
		height: 3.99rem;
		width: 3.99rem;
		background-color: white;
		border-radius: 15rem;
		padding: .1rem;
	}

	.avatar-img {
		height: 3.8rem;
		width: 3.8rem;
	}

	.avatar-label {
		border-radius: .21rem;
		line-height:.78rem;
		color: white;
		background: #07c160;
		padding: .05rem .185rem;
	}

	.ent_tip {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.avaBox{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
