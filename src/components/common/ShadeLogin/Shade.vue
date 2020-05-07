<template>
	<div id="shade">
		<h2>您还未登录，请先登录再进行识别</h2>
		<el-button type="primary" class='btn' :xs="4" :sm="6" :md="8" :lg="9" :xl="11" @click='ToLogin' plain>请先登录</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			ToLogin() {
				this.$router.replace('/profile/login')
			},
		}
	}
</script>

<style scoped>
	#shade {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		margin: 0 auto;
	}

	#shade h2 {
		/* flex: 1; */
		font-size: 20px;
		margin: 15px auto;
	}

	.btn {
		width: 76vw;
		margin: 15px 0;
	}
</style>
