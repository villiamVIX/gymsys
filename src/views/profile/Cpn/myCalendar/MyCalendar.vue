<template>
	<div id='mycalendar'>
		<Calendar></Calendar>
		<p style="margin: 5rem 3rem;">· 识别入场后即可在打卡墙查看</p>
	</div>
</template>

<script>
	import Calendar from 'components/content/Calendar/Calendar.vue';
	export default {
		components: {
			Calendar,
		}
	}
</script>

<style>
</style>
