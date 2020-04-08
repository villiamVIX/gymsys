<template>
	<div>
		<h2 class="info-title">我的会员卡</h2>
		<div id="vipCard-father" :style="{background: 'url(' + cardBgUrl + ') -5px -1rem / 105% no-repeat',
		}">
			<img :src="logoUrl" style="margin: .95rem; width: 8rem;height: 1rem;" />
			<div class="vipCard-box" v-if="User._id">
				<strong>到期:{{User.deadLine | formatDate}}</strong>
				<strong class="vipCard-id">{{User._id}}</strong>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				logoUrl: this.GLOBAL.logoUrl,
				imgBaseUrl:this.GLOBAL.imgBaseUrl,
				// cardBgUrl: "http://q87v0ejnw.bkt.clouddn.com/0BG.jpg",
				cardBgUrl:undefined,
				zoom: 105,
				X: -5,
				Y: -1
			}
		},
		created() {
			this.cardBgUrl = `${this.imgBaseUrl}/${this.User.level||0}BG.jpg`
		},
		watch: {
			'User.level': function(newValue, oldValue) {
				if (newValue == oldValue) return
				this.cardBgUrl = `${this.imgBaseUrl}/${newValue}BG.jpg`
				// console.log(this.cardBgUrl)
			}
		},
		computed: {
			...mapState({
				User: state => state.User
			}),
		},
		filters: {
			formatDate(date) {
				return date.substr(0, 10)
			}
		}
	}
</script>

<style scoped>
	#vipCard-father {
		border-radius: 3.2px;
		box-shadow: 1px 1px 5px 0px #8c8c8c;
		/* background: url(https://www.z4a.net/images/2020/04/08/userBG.jpg) bottom no-repeat; */
		/* background: url(https://www.z4a.net/images/2020/04/08/3BG.jpg) bottom no-repeat; */
		/* background: url(https://www.z4a.net/images/2020/04/08/vipBG.jpg) bottom no-repeat; */
		height: 10.5rem;
		color: white;
	}

	.vipCard-box {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		height: 6.8rem;
		margin: .92rem;
	}

	.vipCard-id {
		/* position: absolute; */
		/* 	bottom: 0.7rem;
		left: 0.7rem; */
		font-size: .8rem;
		font-weight: 530;
		/* align-self: flex-end; */
	}
</style>
