<template>
	<div id='mycalendar'>
		<Calendar></Calendar>
		<p style="margin: 3rem;">· 打卡入场后即可在打卡日历中显示</p>
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
