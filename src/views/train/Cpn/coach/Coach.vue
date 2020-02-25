<template>
	<div id="Coach">
		<div v-if="!isShowConfirm">
			<div class="ad-box">
				<div class="ad-cont">
					<img src="http://106.53.7.24:3008/images/coach/AD-01.png" />
				</div>
			</div>
			<SlotHome>
				<span slot='title-left' class="title-left">私教课程</span>
				<div slot='slot-content'>
					<CoachType :coachTypes='coachTypes' @clickType='clickType'></CoachType>
					<van-action-sheet v-model="isShowList" :title="currentType+'教练'">
						<CoachList :coachDetail='coachDetail' :isShowList='isShowList' @ShowConfirm='ShowConfirm'></CoachList>
					</van-action-sheet>
				</div>
			</SlotHome>
		</div>
		<Confirm v-else-if='isShowConfirm&&isLogin' :selectCoh='selectCoh'></Confirm>
			<Shade v-else> </Shade>
	</div>
</template>

<script>
	import Vue from 'vue';
	import CoachType from './childCpn/CoachType.vue'
	import CoachList from './childCpn/CoachList.vue'

	import Confirm from 'components/content/Confirm/Confirm.vue'
	import SlotHome from 'components/common/Slot/SlotHome.vue'
	import Shade from 'components/common/ShadeLogin/Shade.vue'

	import {
		ActionSheet,
		Toast
	} from 'vant';
	import {
		mapState
	} from 'vuex';
	import {
		checkLoginMixin
	} from 'common/mixin.js';

	Vue.use(ActionSheet).use(Toast);

	export default {
		mixins: [checkLoginMixin],
		components: {
			SlotHome,
			CoachType,
			CoachList,
			Confirm,
			Shade
		},
		data() {
			return {
				isShowList: false,
				isShowConfirm: false,
				selectCoh: {},
				coachTypes: [{
						'imgUrl': require('assets/img/train/coach/defat.png'),
					},
					{
						'imgUrl': require('assets/img/train/coach/muscle.png'),
					},
					{
						'imgUrl': require('assets/img/train/coach/yoga.png'),
					},
				],
				currentType: '',
				coachDetail: []
			}
		},
		created() {
			this.$store.dispatch('reqCoachList')
		},
		mounted() {
			this.$bus.$on('clickBtn', this.changeCoh) //接收确认页面发来的车子 且调用changeCoh 关闭确认页面
		},
		destroyed() {
			this.$bus.$off('clickBtn', this.changeCoh)
		},
		methods: {
			changeCoh() {
				this.isShowConfirm = false
			},

			filterCoach() {
				// 先清空教练栏目 防止重复PUSH
				this.coachDetail = []
				let CoachList = this.coachList
				for (let i = 0; i < CoachList.length; i++) {
					if (CoachList[i].major.indexOf(this.currentType) !== -1) { //在专业里看是否包含对应专业 若有PUSH进传送数据的数组
						this.coachDetail.push(CoachList[i])
					}
				}
				console.log(this.coachDetail)
			},
			clickType(index) {
				switch (index) {
					case 0:
						this.currentType = '减脂'
						break;
					case 1:
						this.currentType = '增肌'
						break;
					case 2:
						this.currentType = '瑜伽'
						break;
				}
				this.filterCoach()
				this.isShowList = true
			},
			ShowConfirm(info) {
				console.log(info)
				this.selectCoh = info //接收子组件装好的教练资料  
				if (info == undefined) {
					this.$toast("请先选择教练o")
				} else {
					this.isShowConfirm = true //再把确认页面打开 -------确认页面中包含另一车事件总线点击事件
				}
			}
		},
		computed: {
			...mapState(['coachList'])
		}
	}
</script>

<style scoped>
	.ad-box {
		background-color: #d1d1d11c;
	}

	.ad-cont {
		height: 18vh;
	}

	.ad-cont img {
		border-radius: 25px;
		height: 100%;
		width: 100%;
		padding: 0.9375rem;
	}

	.content {
		padding: 16px 16px 80vh;
	}

	.title-left {
		margin-top: 5px;
		padding: 3px 10px;
		font-family: serif;
		font-size: 18px;
	}

	.shade {
		background: #008B8B;
		height: 100vh;
	}
</style>
