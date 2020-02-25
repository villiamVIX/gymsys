<template>
	<div class="recomma2nd-wrap">
		<SlotHome>
			<img slot='title-img' src="~assets/img/home/scence.png" />
			<span slot='title-left'>最新讯息</span>
			<span slot='title-right'>更多></span>
			<div slot='slot-content'>
				<HomeNewsItem></HomeNewsItem>
			</div>
		</SlotHome>
	</div>
</template>

<script>
	
	import SlotHome from 'components/common/Slot/SlotHome.vue'
	import HomeNewsItem from './HomeNewsItem.vue'

	export default {
		name: 'HomeRecommand',
		components: {
			SlotHome,
			HomeNewsItem
		}
	}
</script>

<style scoped>


</style>
