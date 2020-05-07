<template>
		<div class="rate-box">
			<h3>{{coachName}}-教练打分</h3>
			<span>只可评价一次哦</span>
			<div class="rate-main">
				<span>
					服务态度
				</span>
				<van-rate class='rate' v-model="rateStar" />
			</div>
			<van-button type="primary" @click='clickRate' size="small">确认评分</van-button>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				rateStar: 2,
			}
		},
		props: {
			showRate: {
				type: Boolean,
				default () {
					return false
				}
			},
			coachName: {
				type: String,
				default: '无'
			},
		},
		methods: {
			clickRate() {
				this.$emit('clickRate', this.rateStar)
			}
		},

	}
</script>

<style scoped>
	.rate-box {
		display: flex;
		flex-direction: column;
		padding: 2rem 3rem;
		font-size: .8rem;
	}

	.rate-main {
		margin: .8rem 0;
	}
</style>
