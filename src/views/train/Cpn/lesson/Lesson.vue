<template>
	<div id="Lesson">
		<LessonCohInfo></LessonCohInfo>
		<LessonSchedule></LessonSchedule>
	</div>
</template>

<script>
	import LessonCohInfo from './childCpn/LessonCohInfo.vue'
	import LessonSchedule from './childCpn/LessonSchedule.vue'
	
	export default{
		components:{
			LessonCohInfo,
			LessonSchedule
		}
	}
</script>

<style>
</style>
