<template>
	<div id="Lesson">
		<LessonPro></LessonPro>
	</div>
</template>

<script>
	import LessonPro from './childCpn/LessonPro.vue'
	
	export default{
		created() {
			this.$store.dispatch('reqLesson')
		},
		data() {
			return {
			}
		},
		methods:{
			
		},
		components:{
			LessonPro
		}
	}
</script>

<style scoped>
</style>
