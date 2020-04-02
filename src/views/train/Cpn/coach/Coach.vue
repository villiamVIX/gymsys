<template>
	<div id="Coach">
		<div>
			<div class="ad-box">
				<div class="ad-cont">
					<img :src="baseUrl+'/images/coach/AD-01.png'" />
				</div>
			</div>
			<SlotHome>
				<span slot='title-left' class="title-left">私教课程</span>
				<div slot='slot-content'>
					<CoachType :coachTypes='coachTypes' @clickType='clickType'></CoachType>
					<van-action-sheet v-model="isShowList" :title="currentType+'教练'">
						<CoachList :coachDetail='coachDetail' :isShowList='isShowList' ></CoachList>
					</van-action-sheet>
				</div>
			</SlotHome>
		</div>
	</div>
</template>

<script>

	import CoachType from './childCpn/CoachType.vue'
	import CoachList from './childCpn/CoachList.vue'
	import SlotHome from 'components/common/Slot/SlotHome.vue'
	
	import {
		mapState
	} from 'vuex';
	
	export default {
		data() {
			return {
				baseUrl:this.GLOBAL.baseUrl,
				isShowList: false,
				coachTypes: [{	'imgUrl': require('assets/img/train/coach/defat.png'),},
					{'imgUrl': require('assets/img/train/coach/muscle.png'),},
					{
						'imgUrl': require('assets/img/train/coach/yoga.png'),
					},
				],
				currentType: '',
				coachDetail: []
			}
		},
		created() {
			this.$store.dispatch('reqCoachList').then(res=>{
				console.log(this.$store.state.coachList)
			})
		},
		methods: {
			filterCoach() {
				// 先清空教练栏目 防止重复PUSH
				this.coachDetail = []
				let CoachList = this.coachList
				for (let i = 0; i < CoachList.length; i++) {
					if (CoachList[i].major.indexOf(this.currentType) !== -1) { //在专业里看是否包含对应专业 若有PUSH进传送数据的数组
						this.coachDetail.push(CoachList[i])
					}
				}
				// console.log(this.coachDetail)
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
		},
		components: {
			SlotHome,
			CoachType,
			CoachList,
		},
		computed: {
			...mapState(['coachList'])
		}
	}
</script>

<style scoped>
	.van-popup{
		max-height: 80%;
	}
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
