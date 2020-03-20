<template>
	<div id="ConfirmCohInfo">
		<div class="coach-img">
			<img :src="coachInfo.cohPic" />
		</div>
		<div class="coach-info">
			<h3 class="coach-name">{{coachInfo.name}}</h3>
			<span class="coach-price">¥{{coachInfo.price}}</span>
		</div>
		<BtnConfirm class='btn-change' :btnTitle="'更换教练'"  @clickBtn='goBack'></BtnConfirm> 
		                                        <!-- 此处的更换教练用事件总线发射出去给COach操作了-->
	</div>
</template>

<script>
	import BtnConfirm from 'components/common/BtnConfirm/BtnConfirm.vue'
	export default {
		props: {
			coachInfo: {
				type: Object
			}
		},
		components: {
			BtnConfirm
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	#ConfirmCohInfo {
		display: flex;
		font: 14px/1.5 'Microsoft YaHei', arial, tahoma, \5b8b\4f53, sans-serif;
		padding: 0px 15px;
		height: 82px;
	}
	.coach-img{
		align-self: center;
	}
	.coach-img img {
		border-radius: 65px;
		flex: 2;
		height: 70px;
		width: 70px;
		/* padding-top: 5px; */
	}

	.coach-info {
		flex: 1;
		margin-left: 13px;
		align-self: center;
	}
	.coach-name{
		margin-bottom: 4%;
		font-size: 18px;
	}
	.coach-price{
		padding-top: 20px;
		color: #E57464;
		font-size: 15px;
		font-weight: bolder;
	}

	.btn-change {
		width: 80px;
		height: 40px;
		background-color: transparent;
		border: 1px solid;
		color: #60cd5c;
		float: right;
		align-self: center;
	}
</style>
