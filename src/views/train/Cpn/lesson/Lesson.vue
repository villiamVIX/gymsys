<template>
	<div id="Lesson">
		<LessonCohInfo :teacherInfo='teacherInfo'></LessonCohInfo>
		<LessonSchedule  @clickTeacher='clickTeacher'></LessonSchedule>
	</div>
</template>

<script>
	import LessonCohInfo from './childCpn/LessonCohInfo.vue'
	import LessonSchedule from './childCpn/LessonSchedule.vue'
	
	import {getLsTeacher} from 'network/NetTrain.js'
	export default{
		created() {
			this.$store.dispatch('reqLesson')
		},
		data() {
			return {
				teacherInfo:{}
			}
		},
		methods:{
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
