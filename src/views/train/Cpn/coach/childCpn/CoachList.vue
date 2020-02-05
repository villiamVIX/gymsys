<template>
	<div class="CoachList">
		<div class="CoachItems activeCoh" v-for="(item,index) in coachDetail" :key='index' @click="clickCoach(index)">
			<div class="coach-img">
				<img :src="item.cohPic" />
			</div>
			<div class="coach-info">
				<span class="coach-name">{{item.name}}-教练</span>
				<div class="coach-level">教练评级{{item.level}}</div>
				<span class="coach-price right">¥{{item.price}}</span>
				<p class="coach-freq">累计上课{{item.freq}}节</p>
				主攻:<span class="coach-major" v-for='major in item.major'>{{major}}.</span>
			</div>
		</div>
		<BtnConfirm class='btn-bottom' :btnTitle="'确认选择'"></BtnConfirm>
	</div>
</template>

<script>
	import BtnConfirm from 'components/common/BtnConfirm/BtnConfirm.vue'
	export default {
		name: "CoachList",
		data() {
			return {
				isShow: false,
				coachIndex: null,
				// selectCoh: {}
			}
		},
		mounted() {
			this.$bus.$on('clickBtn',this.confirmCoh)//接收调用的BTN的按钮点击事件，调用confirmCoh
		},
		destroyed() {
			this.$bus.$off('clickBtn',this.confirmCoh)//用完自己处理掉，因外部用的是V-if所以 在销毁前off即可
		},
		methods: {
			clickCoach(i) {
				this.coachIndex = i
			},
			confirmCoh() {
				let selectCoh=this.coachDetail[this.coachIndex] //把被选的教练的资料装好
				this.$emit('ShowConfirm',selectCoh)  //把装好的教练资料发给调用者-coach没用BUS
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
		components:{
			BtnConfirm
		}

	}
</script>

<style scoped>
	.CoachItems:hover {
		border: 1px solid #7bec75a1;
		background-color: #e0f5de69;
	}

	.CoachItems {
		display: flex;
		border: 1px solid #E5F0F7;
		border-radius: 5px;
		margin: 20px 20px;
		padding: 10px 10px;
		align-items: center;
	}

	.coach-img {
		flex: 1;
		padding-top: 3px;
	}

	.coach-img img {
		border-radius: 55px;
		height: 70px;
		width: 70px;
	}

	.coach-info {
		flex: 4;
		font-size: 15px;
		font: 13px/1.2 Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
		margin-left: 5px
	}

	.coach-name {
		font-size: 1rem;
		font-weight: bold;
	}

	.coach-level {
		border: 1px solid #FDF6D3;
		background-color: #FDF6D3;
		width: 65px;
		color: #645D2E;
		float: right;

		margin: 2px 35% 0 0;
	}

	.coach-freq {
		padding: 8px 0;
		color: #A3A2A3;
	}

	.coach-major {}

	.coach-price {
		color: #E57464;
		font-size: 18px;
	}
	.btn-bottom{
		position: fixed;
	}
	
</style>
