<template>
	<div id="Lesson">
		<LessonCohInfo :teacherInfo='teacherInfo'></LessonCohInfo>
		<LessonSchedule :Lessons='Lessons' @clickTeacher='clickTeacher'></LessonSchedule>
	</div>
</template>

<script>
	import LessonCohInfo from './childCpn/LessonCohInfo.vue'
	import LessonSchedule from './childCpn/LessonSchedule.vue'
	
	import {getLesson,getLsTeacher} from 'network/NetTrain.js'
	export default{
		created() {
			this.getLesson()
		},
		data() {
			return {
				Lessons: [],
				teacherInfo:{}
			}
		},
		methods:{
			getLesson(){
				getLesson().then(res=>{
					console.log(res.data)
					this.Lessons=res.data
				})
			},
			clickTeacher(teacherid){
				getLsTeacher(teacherid).then(res=>{
					this.teacherInfo=res.data
					console.log(res.data)
					})
			}
		},
		components:{
			LessonCohInfo,
			LessonSchedule
		}
	}
</script>

<style scoped>
</style>
