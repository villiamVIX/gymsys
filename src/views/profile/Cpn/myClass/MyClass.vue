<template>
	<div id="class-father">
		<div class="MyClass">
			<van-popup v-model="showRate" position="right" round :style="{ height: '11rem' }">
				<div class="rate-box">
					<h3>{{currentCoach.coachName}}-教练打分</h3>
					<span>只可评价一次哦</span>
					<div class="rate-main">
						<span>
							服务态度
						</span>
						<van-rate class='rate' v-model="rateStar" />
					</div>
					<van-button type="primary" @click='clickRate' size="small">确认评分</van-button>
				</div>
			</van-popup>
			<ScrollCard>

				<CardVIX>
					<div class="class-pass" v-loading='loading' v-if="!loading">
						<h3>本周课程</h3>
						<div class="class-box" v-for="(item,index) in passClass">
							<van-image class='cohPic' round :src="item.cohPic" />
							<div class="cohInfo">
								<h3>{{item.coachName}}</h3>
								<span>{{item.date | dataFormat}}</span>
								<h3>{{item.date | Time}}点-60mins</h3>
							</div>
							<h3 class='readyRate'>待课后即可评价</h3>
							<h3>
								¥{{item.price}}
							</h3>
						</div>
					</div>
				</CardVIX>
				<CardVIX>
					<van-loading size="24" v-if='loading' />
					<div class="class-pass" v-loading='loading' v-if="!loading">
						<h3>往期课程</h3>
						<div class="class-box" v-for="(item,index) in futureClass" @click="toRate(item)">
							<van-image class='cohPic' round :src="item.cohPic" />
							<div class="cohInfo">
								<h3>{{item.coachName}}</h3>
								<span>{{item.date | dataFormat}}</span>
								<h3>{{item.date | Time}}点-60mins</h3>
							</div>
							<van-rate class='readyRate' v-model="item.rate" readonly />
							<h3>
								¥{{item.price}}
							</h3>
						</div>
					</div>
				</CardVIX>
			</ScrollCard>
		</div>
	</div>
</template>

<script>
	import CardVIX from 'components/common/CardVIX/CardVIX.vue'
	import ScrollCard from 'components/common/ScrollCard/ScrollCard.vue'

	import {
		mapState
	} from 'vuex'
	import {
		rateCoach
	} from 'network/NetTrain.js'

	export default {
		data() {
			return {
				loading: true,
				myClass: undefined,
				passClass: [],
				futureClass: [],
				showRate: false,
				rateStar: 2,
				currentCoach: Object
			}
		},
		methods: {
			toRate(info) {
				this.currentCoach = info
				this.currentCoach.rate == null ? this.showRate = true : null
			},
			init() {
				this.passClass = this.$store.state.User.myClass.passClass
				this.futureClass = this.$store.state.User.myClass.futureClass
			},
			clickRate() {
				let {
					_id
				} = this.currentCoach
				let rate = this.rateStar
				let data = {
					_id,
					rate,
				}
				const reqRateCoach = async () => {
					let res = await rateCoach(data)
				}
				reqRateCoach().then(res => {
					this.$store.dispatch('reqMyClass').then(res => {
						this.$notify({
							type: 'success',
							message: '评价成功'
						})
						this.init()
						this.showRate = false
					})
				})

			}
		},
		created() {
			this.$store.dispatch('reqMyClass').then(res => {
				this.init()
				this.loading = false
			})
		},
		mounted() {
			console.log(this.$store.state.User.myClass)
		},
		filters: {
			dataFormat(date) {
				return date.substring(0, 10)
			},
			Time(date) {
				return date.split('-')[3]
			}
		},
		components: {
			CardVIX,
			ScrollCard
		}
	}
</script>

<style scoped>
	#class-father {
		background-color: #f5f5fd;
		height: 100vh;
		position: relative;
		color: #676f79;
	}

	.rate-box {
		display: flex;
		flex-direction: column;
		padding: 2rem 3rem;
		font-size: .8rem;
	}

	.rate-main {
		margin: .8rem 0;
	}



	.class-box {
		display: flex;
		border-bottom: .5px solid #8080808c;
		padding: .65rem 0;
		align-items: center;
	}

	.cohPic {
		margin-right: .5rem;
		border-radius: .4rem;
		height: 3.3rem;
		width: 3.3rem;
	}

	.cohInfo {
		flex: 1;
		align-self: flex-start;
	}

	.readyRate {
		margin-right: 1rem;
	}

	.MyClass {
		background: url(~assets/img/profile/bg5.jpg) bottom no-repeat;
		background-size: 155%;
		background-position: -5px -15rem;
		/* height: 10rem; */
	}
</style>
