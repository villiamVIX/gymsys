<template>
	<BgPanelVIX>
		<ScrollCard >
			<CardVIX class='Scroll'>
				<MyRechargeInfo></MyRechargeInfo>
			</CardVIX>
			<CardVIX>
				<MyRechargePay></MyRechargePay>
			</CardVIX>
		</ScrollCard>
	</BgPanelVIX>
</template>

<script>
	import BgPanelVIX from 'components/common/BgPanelVIX/BgPanelVIX.vue'
	import CardVIX from 'components/common/CardVIX/CardVIX.vue'
	import ScrollCard from 'components/common/ScrollCard/ScrollCard.vue'
	import MyRechargePay from './childCpn/MyRechargePay.vue'
	import MyRechargeInfo from './childCpn/MyRechargeInfo.vue'
	
	export default {
		components: {
			BgPanelVIX,
			CardVIX,
			ScrollCard,
			MyRechargePay,
			MyRechargeInfo,
		},
	}
</script>

<style scoped>
.Scroll{
	margin-top: 5rem;
}
</style>
