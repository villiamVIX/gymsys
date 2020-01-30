<template>
		<div class="CoachList">
			<div class="CoachItems" v-for="(item,index) in coachDetail" :key='index'>
				<div class="coach-box">
					<div class="coach-img">
						<img />
					</div>
					<div class="coach-info">
						<span class="coach-name">{{item.name}}</span>
						<div class="coach-level">{{item.level}}</div>
						<p class="coach-freq">{{item.freq}}</p>
						<span class="coach-major" v-for='major in item.major'>{{major}}.</span>
						<span class="right">{{item.price}}</span>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		name: "CoachList",
		data() {
			return {
				isShow: false
			}
		},
		props: {
			isShowList: {
				type: Boolean,
				default () {
					return false
				}
			},
			coachDetail: {
				type: Array,
				default () {
					return []
				}
			}
		},

	}
</script>

<style scoped>
	.content {
		padding: 16px 16px 80vh;
	}
</style>
