<template>
	<div>
		<el-card class="box-card">
			<AdminLessonTable></AdminLessonTable>
		</el-card>
		<el-card class="box-card">
			<AdminLessonUpdate></AdminLessonUpdate>
		</el-card>
	</div>

</template>

<script>
	import AdminLessonTable from './childCpn/AdminLessonTable'
	import AdminLessonUpdate from './childCpn/AdminLessonUpdate'
	
	export default {
		created() {
			this.$store.dispatch('reqLesson')
		},
		components: {
			AdminLessonTable,
			AdminLessonUpdate
		}
	}
</script>

<style scoped>
.box-card:first-of-type{
	margin: 2.2rem 0;
}
</style>
