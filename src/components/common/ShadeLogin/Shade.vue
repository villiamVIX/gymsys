<template>
	<div id="shade">
		<h2>您还未登录，请先登录获取入场码</h2>
		<van-button class='btn' type="default" size="large" @click='ToLogin'>请先登录</van-button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Button
	} from 'vant';
	Vue.use(Button)
	export default {
		data() {
			return {
			}
		},
		methods: {
			ToLogin() {
				this.$router.replace('/profile/login')
			},
		}
	}
</script>

<style scoped>
	#shade{
		height: 100vh;
		width: 100%;
	}
	#shade {
		height: 100vw;
		flex-direction: column;
		padding: 35vh 10vw;
		color: white;
	} 
	
	#shade h2 {
		flex: 1;
		font-size: 20px;
		margin: 15px auto;
	}

	#shade van-button {
		flex: 1;
	}
</style>
