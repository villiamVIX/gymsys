<template>
	<div id="LessonCohInfo">
		<div class="coach-img">
			<img :src="selectCoh.cohPic" />
		</div>
		<div class="coach-info">
			<h3 class="coach-name">{{selectCoh.name}}</h3>
			<span class="coach-price">¥{{selectCoh.price}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			selectCoh: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#LessonCohInfo {
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
