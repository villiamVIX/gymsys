<template>
	<div id="Confirm">
		<FatHr></FatHr>
		<ConfirmCohInfo :selectCoh='selectCoh'></ConfirmCohInfo>
		<FatHr></FatHr>
		<ConfirmSchedule @bookCoach='bookCoach' :booked='booked'></ConfirmSchedule>
		<button class="confirm-btn" @click="clickBook">确认预约</button>
	</div>
</template>

<script>

	import ConfirmCohInfo from './childCpn/ConfirmCohInfo.vue'
	import ConfirmSchedule from './childCpn/ConfirmSchedule.vue'
	// import comfirmPRO from './childCpn/comfirmPRO.vue'
	
	import BtnConfirm from 'components/common/BtnConfirm/BtnConfirm.vue'
	import NavBarVIX from 'components/common/NavBarVIX/NavBarVIX.vue'
	import FatHr from 'components/common/FatHr/FatHr.vue'

	import {
		bookCoach
	} from 'network/NetTrain.js'
	export default {
		
		props: {
			selectCoh: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				bookInfo: {},
				bookedList:this.selectCoh.bookInfo,
				booked:[]
			}
		},
		created() {
			this.getBooked()
		},
		updated() {
			// this.getBooked()
		},
		methods: {
			getBooked(){
				let k=this.bookedList
				let kL=k.length
				for(let i=0;i<kL;i++){
					this.booked.push(k[i].Sid)
				}
				console.log(this.booked)
			},
			bookCoach(info) {
				this.bookInfo = { ...info}
				let _id=this.selectCoh._id
				this.bookInfo._id=_id
				console.log(this.bookInfo)
			},
			clickBook() {
				if(this.bookInfo._id==null){
					this.$toast('先选择预约时间')
					console.log('先选择预约时间')
				}else{
					
				bookCoach(this.bookInfo).then(res => {
					console.log('res=>', res);
					this.$toast(res.message)
					
				})
				}
			}
		},
		components: {
			NavBarVIX,
			FatHr,
			ConfirmCohInfo,
			ConfirmSchedule,
			BtnConfirm,
			// comfirmPRO
		},
	}
</script>

<style scoped>
	.confirm-btn {
		/* position: fixed; */
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
