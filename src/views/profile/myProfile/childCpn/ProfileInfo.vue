<template>
	<div id="ProfileInfo" :style="{background: 'url(' + BgUrl + ') -5px -1rem / 105% no-repeat',}">
		<div class="profile-left">
			<span class="Info-name">{{User.username}}
			</span>
			<div class="profile-freq">
				<div>
					<h2 class="Info-freq">{{User.calendar.length}}</h2>
					<div class="lable">坚持天数</div>
				</div>
				<div>
					<h2 class="Info-freq">{{User.remain | remainDay}}</h2>
					<div class="lable">剩余天数</div>
				</div>
			</div>
		</div>

		<div class="Info-avantar cell-right">
			<van-image class="avatar-img" round :src="baseUrl+User.avatar" fit="scale-down" />
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: {
			...mapState({
				User: state => state.User
			})
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
		created() {
			this.BgUrl=`${this.imgBaseUrl}/bg5.jpg`
		},
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
				imgBaseUrl:this.GLOBAL.imgBaseUrl,
				BgUrl:''
			}
		},
		filters: {
			remainDay(date) {
				let formatDate = date
				console.log(date)
				date <= 0 ? formatDate = '过期' : null
				return formatDate
			}
		}
	}
</script>

<style scoped>
	#ProfileInfo {
		padding: 1.22rem 15px 0;
		display: flex;
		/* background-color: #00B176; */
		/* background: url(https://www.z4a.net/images/2020/04/08/bg5.6cb12b85.jpg) bottom no-repeat; */
		/* background: url(~assets/img/profile/bg5.jpg) bottom no-repeat; */
		background-size: 105%;
		background-position: -4px 0;
		height: 9rem;
		font-size: 1.28rem;
		align-items: center;
		color: white;
		margin: 0;
	}

	.profile-left {
		flex: 1;

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

	.profile-freq {
		margin-top: 1rem;
		font-size: .9rem;
		font-family: "comic sans ms";
		display: flex;
		justify-content: space-between;
		width: 7.5rem;
	}

	.Info-freq {
		font-style: italic;
	}

	.lable {
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
