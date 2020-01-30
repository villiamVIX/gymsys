<template>
	<div id="HomeTip">
		<van-icon id='TipIcon' name="info" size="25" />
		<span id="TipTitle">{{}}</span>
		<van-button id='TipBtn' color="#00d8a0"
		 size="mini">
		 查看详情</van-button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Icon,
		Button
	} from 'vant';

	Vue.use(Button);
	Vue.use(Icon);
	export default {
	}
</script>

<style scoped>
	#HomeTip {
		margin-top: 5px;
		height: 28px;
		background-color: #00d8a04d;
		display: flex;
		border-radius: 15px;
		justify-content: flex-start;
		align-items:center;
		color: #707070;
	}
	#HomeTip span{
		color: #707070 !important;
	}
	#HomeTip #TipIcon{
		margin-left: 15px;
	}
	#TipBtn{
		position: absolute;
		right: 25px;
	}
</style>
