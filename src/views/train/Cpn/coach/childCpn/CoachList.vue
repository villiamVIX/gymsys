<template>
	<div class="CoachList">
		<div class="CoachItems activeCoh" v-for="(item,index) in coachDetail" :key='index'
		 @click="clickCoach(item._id)">
			<div class="coach-img">
				<img :src="item.cohPic" />
			</div>
			<div class="coach-info">
				<span class="coach-name">{{item.name}}-教练</span>
				<div class="coach-level">教练评级{{item.level}}</div>
				<p class="coach-freq">累计上课{{item.totalCount}}节</p>
				主攻:<span class="coach-major" v-for='major in item.major'>{{major}}.</span>
			</div>
			<span class="coach-price right">¥{{item.price}}</span>
		</div>
		<div class="list-bottom-slot"></div>
		<BtnConfirm class='btn-bottom' @clickBtn='clickBtn' :btnTitle="'确认选择'"></BtnConfirm>
	</div>
</template>

<script>
	import {checkLoginMixin	} from 'common/mixin.js';
	import BtnConfirm from 'components/common/BtnConfirm/BtnConfirm.vue'
	export default {
		name: "CoachList",
		mixins: [checkLoginMixin],
		data() {
			return {
				coachId: null,
			}
		},
		methods: {
			clickCoach(coachId) {
				this.coachId = coachId
			},
			clickBtn(){
				if(!this.isLogin){
				 return	this.$router.push('/login/shade')
				}
				if (this.coachId==null) {
				   return this.$toast("请先选择教练o")
				}
				this.$router.push('/confirm/' + this.coachId)
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
			},
		},
		components:{
			BtnConfirm
		}

	}
</script>

<style scoped>
	.list-bottom-slot{
		height: 2.8rem;
	}
	.CoachItems:hover {
		border: 1px solid #7bec75a1;
		background-color: #e0f5de69;
	}

	.CoachItems {
		display: flex;
		border: 1px solid #E5F0F7;
		border-radius: 5px;
		margin: 1.25rem;
		padding: 10px 10px;
		align-items: center;
	}
	
	.coach-img {
		flex: 1;
		padding-top: 0.187rem;
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
		margin: 0.125rem 1.8rem 0 0;
	}

	.coach-freq {
		padding: 0.5rem 0;
		color: #A3A2A3;
	}

	.coach-price {
		color: #E57464;
		font-size: 1.125rem;
		width: 3.125rem;
	}
	.btn-bottom{
		position: fixed;
	}
	
</style>
