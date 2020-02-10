<template>
	<div id="LessonCohInfo">
		<div class="coach-img">
			<img :src="teacherInfo.cohPic" />
		</div>
		<div class="coach-info">
			<h3 class="coach-name">{{teacherInfo.name}}</h3>
			
			<div class="coach-level">教练评级{{teacherInfo.level}}</div>
主攻:<span class="coach-major" v-for='major in teacherInfo.major'>{{major}}.</span>	
	</div>
	</div>
</template>

<script>
	export default {
		props: {
			teacherInfo: {
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
		margin-left: 5px
	}
	
	.coach-name {
		font-size: 1rem;
		font-weight: bold;
	}
	
	.coach-level {
		border: 1px solid #FDF6D3;
		background-color: #FDF6D3;
		width: 80px;
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
