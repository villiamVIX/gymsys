<template>
	<BgPanelVIX>
		<ScrollCard>
			<CardVIX>
				<van-form>
					<div class="changeAva">
						<div class="Info-avantar cell-right">
							<van-image round class="avatar-img" :src="baseUrl+User.avatar" fit="fill" />
						</div>
						<label class="avatar-label" for="my_file">更改头像</label>
						<input type="file" name="avatar" style="display:none;" id='my_file' accept="image/x-png, image/jpeg" @change="changeAvatar">
					</div>
					<van-field label="到期时间" :value="User.deadLine | formatDeadLine" readonly />
					<van-field class="input" v-model="User.username" name="用户名" label="用户名" />
					<van-field class="input" v-model="User.phone" disabled name="电话" label="电话" />
					<van-field class="input" v-model="User.passWord" disabled name="密码" label="密码" />
					<div style="margin: 16px;">
						<van-button round block type="primary" @click="onSubmit">
							修改
						</van-button>
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
			onSubmit(values) {
				console.log(this.User)
			},
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
		margin-left: .2rem;
		line-height: 1rem;
		color: white;
		background: #07c160;
		padding: .05rem .185rem;
	}
</style>
