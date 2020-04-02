<template>
	<div class="father">
		<div class="week" v-for="(i,index) in 7">周{{weekList[index]}}</div>
		<div class="lesson-box" v-for="(item,index) in Lessons" :class="index==currentIndex?'lesson-hover':''" :key='index' @click="clickLesson(item,index)">
			<span class="lesson-time">{{item.time}}-{{item.during}}mins</span>
			<h3>{{item.lessonName}}</h3>
			<span>{{item.type}}</span>
			<h3>{{item.teacher}}</h3>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		
		methods:{
			clickLesson(data,index){
				this.currentIndex=index
				this.$store.dispatch('lesson/changeLesson',data)
			}
		},
		computed: {
			...mapState(['Lessons'])
		},
		data() {
			return {
				weekList: ["一", "二", "三", "四", "五", "六", "天"],
				currentIndex:undefined
			}
		},
	}
</script>

<style scoped>
	.father {
		display: grid;
		justify-content: space-around;
		font-size: .8rem;
		height:400px;
		grid-template-columns:  repeat(7, 13%);
		grid-template-rows:  20% 40% 40%;
		align-items: center;
		justify-items: center;
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
		padding: 0.5rem;
		border-radius: 5px;
		font-family: Arial, Helvetica, sans-serif;
	}
	.lesson-hover{
		background-color:#B2FFDD ;
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
