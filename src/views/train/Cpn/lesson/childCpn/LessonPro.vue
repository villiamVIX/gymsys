<template>
	<div class="father">
		<div class="week-father">
			<div class="week" v-for="(i,index) in 7">周{{weekList[index]}}</div>
		</div>
		<div class="Lesson-father">
			<el-tooltip class="item" effect="dark" v-for="(item,index) in Lessons" :key='index'
			:content="'课程简介:'+item.desc" placement="right-end">
				<div class="lesson-box">
					<span class="lesson-time">{{item.time}}-{{item.during}}mins</span>
					<h3>{{item.lessonName}}</h3>
					<span>{{item.type}}</span>
					<h3>{{item.teacher}}</h3>
				</div>
			</el-tooltip>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: {
			...mapState(['Lessons'])
		},
		data() {
			return {
				weekList: ["一", "二", "三", "四", "五", "六", "天"]
			}
		},
	}
</script>

<style scoped>
	.father {
		display: flex;
		justify-content: space-around;
		width: 90%;
		font-size: .8rem;
		height: 49.7rem;
	}

	.Lesson-father {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-wrap: wrap;
		flex: 1;
	}

	.week-father {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 0 2rem;
	}

	.week {
		padding: .3rem;
		border-radius: 3px;
		font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
		font-size: 12px;
		color: #80807f;
		font-weight: bold;
		background: var(--lesson-bgc);


	}

	.lesson-box {
		margin-top: .4rem;
		background-color: var(--lesson-bgc);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 7rem;
		height: 6.5rem;
		padding: 0.5rem;
		border-radius: 5px;
		font-family: Arial, Helvetica, sans-serif;
	}

	h3 {
		color: black;
	}

	span:first-of-type {
		font-size: .66rem;
	}

	span {
		font-weight: bold;
		color: #80807f;
	}
</style>
