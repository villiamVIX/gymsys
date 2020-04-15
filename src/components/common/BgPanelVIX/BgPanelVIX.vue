<template>
	<div id="bg">
		<div class="panel" :style="{background: 'url(' + BgUrl + ') -5px -1rem / 105% no-repeat',}">
			<i class="el-icon-arrow-left" @click="back"></i>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				imgBaseUrl:this.GLOBAL.imgBaseUrl,
				BgUrl:''
			}
		},
		created() {
			this.BgUrl=`${this.imgBaseUrl}/bg5.jpg`
		},
		methods:{
			back(){
				this.$router.replace('/profile/login')
			}
		}
	}
</script>

<style scoped>
	#bg {
		background-color: #f5f5fd;
		height: 100vh;
		position: relative;
		color: #676f79;
	}

	.panel {
		/* background: url(https://www.z4a.net/images/2020/04/08/bg5.6cb12b85.jpg) bottom no-repeat; */
		/* background: url(~assets/img/profile/bg5.jpg) bottom no-repeat; */
		background-size: 155%;
		background-position: -5px -15rem;
		height: 45rem;
	}
	.el-icon-arrow-left{
		font-size: 1.5rem;
		color: white;
		position: absolute;
		left: .6rem;
		top: .7rem;
	}
</style>
