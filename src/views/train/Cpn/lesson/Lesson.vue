<template>
	<div id="Lesson">
		<LessonPro></LessonPro>
		<!-- <LessonCohInfo :teacherInfo='teacherInfo'></LessonCohInfo> -->
		<!-- <LessonSchedule  @clickTeacher='clickTeacher'></LessonSchedule> -->
	</div>
</template>

<script>
	import LessonCohInfo from './childCpn/LessonCohInfo.vue'
	import LessonSchedule from './childCpn/LessonSchedule.vue'
	import LessonPro from './childCpn/LessonPro.vue'
	
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
			LessonSchedule,
			LessonPro
		}
	}
</script>

<style scoped>
</style>
