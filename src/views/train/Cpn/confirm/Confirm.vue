<template>
	<div id="Confirm">
		<ConfirmCohInfo :coachInfo='coachInfo'></ConfirmCohInfo>
		<FatHr></FatHr>
		<ConfirmSchedule @bookCoach='bookCoach' :booked='booked'></ConfirmSchedule>
		<button class="confirm-btn" @click="clickBook">确认预约</button>
	</div>
</template>

<script>
import ConfirmCohInfo from './childCpn/ConfirmCohInfo.vue'
import ConfirmSchedule from './childCpn/ConfirmSchedule.vue'


import NavBarVIX from 'components/common/NavBarVIX/NavBarVIX.vue'
import FatHr from 'components/common/FatHr/FatHr.vue'
import {
		checkLoginMixin
	} from 'common/mixin.js';

export default {
	name: 'confirm',
	mixins: [checkLoginMixin],
	data() {
		return {
			coachId: this.$route.params.coachId,
			bookInfo: {},
			booked: [],
			coachInfo: {}
		}
	},
	created(){
		this.$store.dispatch('reqCoachDetail',this.coachId)// 初始加载教练数据
	},
	watch: {
		'$store.state.coachDetail': function() { //数据一变就重新分发
			this.getBooked()
			this.distributeCoachInfo()
		}
	},
	methods: {
		getBooked() {
			let k = this.$store.state.coachDetail.bookInfo
			let kL = k.length
			for (let i = 0; i < kL; i++) {
				this.booked.push(k[i].Sid)
			}
		},
		distributeCoachInfo() {
			let data = this.$store.state.coachDetail
			this.coachInfo = {
				cohPic: data.cohPic,
				coachName: data.name,
				price: data.price
			}
		},
		bookCoach(info) {  //接收教练信息
			// this.bookInfo = {...info}
			this.bookInfo=Object.assign(info,this.coachInfo)
		},
		clickBook() {
			if(!this.isLogin){
			return	this.$router.push('/login/shade')
			}
			if (this.bookInfo.userId == null) {
				 return this.$toast('先选择预约时间')
			} else {
				// 预约教练
				this.$store.dispatch('reqBookCoach', this.bookInfo).then(res => { 
					this.$toast(res)
					this.$store.dispatch('reqCoachDetail',this.coachId)// 重新加载
				}).catch(err=>{
					this.$toast('预约失败')
				})
			}
		}
	},
	components: {
		NavBarVIX,
		FatHr,
		ConfirmCohInfo,
		ConfirmSchedule,
	},

}
</script>

<style scoped>
	.confirm-btn {
		height: 49px;
		left: 10px;
		bottom: 10px;
		text-align: center;
		width: 95vw;
		border: 0px solid transparent;
		background-color: #60cd5c;
		font: 15px sans-serif;
		border-radius: 53px;
		box-shadow: 0px 2px 8px 0px #98969675;
	}
</style>
