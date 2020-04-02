<template>
	<div id="entrance">
		<EntranceCode v-if='isLogin'></EntranceCode>
		<Shade v-else></Shade>
	</div>
</template>

<script>
	import EntranceCode from './childCpn/EntranceCode.vue'
	import Shade from 'components/common/ShadeLogin/Shade.vue'
	import {checkLoginMixin} from 'common/mixin.js'
	export default {
		components: {
			EntranceCode,
			Shade
		},
		mixins:[checkLoginMixin],
	}
</script>

<style scoped>
	#entrance {
		height: 100vh;
		padding-top: 10vh;
		/* display: flex; */
		/* flex-direction: column; */
		background-color: #09cd8a;
		position: relative;
	}
	
</style>
