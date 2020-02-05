<template>
	<div id="app">
			<router-view class="router-view"></router-view>
		<!-- <keep-alive exclude="News,Coach"> -->
		<!-- </keep-alive> -->
		<div v-show="!isShow" class="isShow" @click="clickShow">
			<img src="~assets/img/app/ShowMore.png"/>
		</div>
		<div class="bottom-bar" v-show="isShow">
			<div class="bar-item bar-left" >
				<div>
					<router-link to="/home">
						<i class="icon server"></i>
						<span class="text">主页</span>
					</router-link>
				</div>
				<div  to="/cart">
					<router-link to='/news'>
						<i class="icon shop"></i>
						<span class="text">信息</span>
					</router-link>
				</div>
				<div>
					<router-link to='/train'>
						<i class="icon select"></i>
						<span class="text">课程</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const Home = () => import('views/home/Home')
	export default{
		data() {
			return {
				isShow: false
			}
		},
		methods:{
			clickShow(){
				this.isShow=!this.isShow
			}
		}
	}
</script>

<style scoped>
	@import "assets/css/base.css";

	#app{
	
	}
	.isShow{
		height: 50px;
		width: 50px;
		position: fixed;
		display: flex;
		right: 10px;
		bottom: 10px;
		background-color: white;
		/* align-content: center; */
		border-radius: 58px;
		box-shadow:-1px 1px 7px 0px #7d6969cf;
		border: 1px solid white;
	}
	.isShow img{
		height: 40px;
		width: 40px;
		margin: auto;
	}
	.router-view{
		height: 100vh;
	}
	.router-view{
		/* padding: 15px 5px 0 5px; */
	}
	.bottom-bar {
		height: 49px;
		position: fixed;
		/* background-color: #F2F2F2; */
		display: flex;
		left: 11px;
		right: 10px;
		bottom: 16px;
		text-align: center;
		border: 0px solid transparent;

		border-radius: 53px;
		box-shadow: 0px 2px 8px 0px #98969675;
	}

	.bar-item {
		flex: 1;
		display: flex;
	}

	.bar-left {
		background-color: #F2F2F2;
		border-radius: 38px;
	}

	.bar-item>div {
		flex: 1;
	}

	.bar-item .text {
		font-size: 11px;
	}

	.bar-left .icon {
		display: block;
		width: 22px;
		height: 22px;
		background: url("assets/img/detail/detail_bottom.png") 0 0/100%;
		margin: 6px auto 0px;
	}

	.bar-left .server {
		background-position: 0 -53px;
	}

	.bar-left .shop {
		background-position: 0 -98px;
	}
</style>
