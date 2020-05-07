<template>
	<BgPanelVIX>
		<ScrollCard :scrollHeight='scrollHeight'>
			<CardVIX>
				<div class="class-pass" v-loading='loading' v-if="!loading">
					<h3>本周课程 </h3>
					<span v-if="passClass.length==0">暂无课程</span>
					<div class="class-box" v-for="(item,index) in passClass">
						<van-image class='cohPic' round :src="item.cohPic" />
						<div class="cohInfo">
							<h3>{{item.username}}</h3>
							<span>{{item.date | dataFormat}}</span>
							<h3>{{item.date | Time}}点-60mins</h3>
						</div>
						<van-button type="warning" size='mini' @click='cancelClass(item._id)'>取消</van-button>
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
					<span v-if="futureClass.length==0">暂无课程</span>
					<div class="class-box" v-for="(item,index) in futureClass" @click="toRate(item)">
						<van-image class='cohPic' round :src="item.cohPic" />
						<div class="cohInfo">
							<h3>{{item.username}}</h3>
							<span>{{item.date | dataFormat}}</span>
							<h3>{{item.date | Time}}点-60mins</h3>
						</div>
						<van-rate class='readyRate' :size="15" v-model="item.rate" readonly />
						<h3>
							¥{{item.price}}
						</h3>
					</div>
				</div>
			</CardVIX>
		</ScrollCard>
	</BgPanelVIX>
</template>

<script>
	import ScrollCard from 'components/common/ScrollCard/ScrollCard.vue'
	import CardVIX from 'components/common/CardVIX/CardVIX.vue'
	import BgPanelVIX from 'components/common/BgPanelVIX/BgPanelVIX.vue'
	import {
		mapState
	} from 'vuex'
	import {
		reqBookedClass,
		deleteCoachClass
	} from 'network/NetTrain.js'

	export default {
		data() {
			return {
				loading: true,
				myClass: undefined,
				passClass: [],
				futureClass: [],
				showRate: false,
				currentCoach: Object,
				scrollHeight: undefined,
				coach_id: undefined
			}
		},
		created() {
			this.coach_id = this.$store.state.User.coach_id
			if (!this.coach_id) {
				return vant.Notify('您不是教练，无权查看')
			}
			this.init()
		},
		methods: {
			toRate(info) {
				this.currentCoach = info
				this.currentCoach.rate == null ? this.showRate = true : null,
					console.log(this.showRate)
			},
			init() {

				reqBookedClass(this.coach_id).then(res => {
					this.passClass = res.passClass
					this.futureClass = res.futureClass
					this.loading = false
				})
				console.log(this.passClass)

				let height = this.passClass.length + this.futureClass.length
				if (height > 7) {
					this.scrollHeight = ((height * 82) / 1.31) / 16
				}
			},
			clickRate(rateStar) {
				let {
					_id
				} = this.currentCoach
				let rate = rateStar
				let data = {
					_id,
					rate,
				}
				const reqRateCoach = async () => {
					let res = await rateCoach(data)
				}

			},
			cancelClass(classId) {
				deleteCoachClass(classId).then(res => {
					if (res.data) {
						this.$store.dispatch('reqMyClass').then(res => {
							this.$notify({
								type: 'success',
								message: '取消成功'
							})
							this.init()
						})
					} else {
						this.$notify.info({
							title: '消息',
							message: `${res}`
						});
						console.log(res)
					}
				})
			}
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
			ScrollCard,
			BgPanelVIX,
		}
	}
</script>

<style scoped>
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
</style>
