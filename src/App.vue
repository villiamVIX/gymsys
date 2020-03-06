<template>
	<div id="app">
		<keep-alive exclude="News">
			<router-view class="router-view" v-if="isRouterAlive"></router-view>
		</keep-alive>

		<div v-show="!isShow" class="isShow" @click="clickShow">
			<img src="~assets/img/app/ShowMore.png"/>
		</div>
		<div class="bottom-bar" v-show="isShow">
			<div class="bar-item bar-left" >
				<div>
					<router-link to="/home">
						<i :class="Rname=='home'?'icon gymIcon-home2':'icon gymIcon-home1'"></i>
						<!-- <span class="text">主页</span> -->
					</router-link>
				</div>
				<div>
					<router-link to='/newslist'>
						<i :class="Rname=='news'?'gymIcon-news2':'gymIcon-news1'"></i>
						<!-- <span class="text">信息</span> -->
					</router-link>
				</div>
				<div>
					<router-link to='/entrance'>
						<i  :class="Rname=='entrance'?'icon gymIcon-scan2':'icon gymIcon-scan1'">
							<span class="path1"></span>
							<span class="path2"></span>
							<span class="path3"></span>
						</i>
						<!-- <span class="text">入场码</span> -->
					</router-link>
				</div>
				<div>
					<router-link to='/train'>
						<i :class="Rname=='train'?'gymIcon-train2':'gymIcon-train1'"></i>
						<!-- <span class="text">课程</span> -->
					</router-link>
				</div>
				<div>
					<router-link to='/profile/login'>
						<i :class="Rname=='profile'?'icon gymIcon-my2':'icon gymIcon-my1'">
							<span class="path1"></span>
							<span class="path2"></span>
							<span class="path3"></span>
						</i>
						<!-- <span class="text">我的</span> -->
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const Home = () => import('views/home/Home')
	export default{
		created() {
			this.$store.dispatch('reqIsLogin')
		},
		data() {
			return {
				isShow: false,
				isRouterAlive:true,
				Rname:undefined
			}
		},
		updated(){
			this.Rname=this.$route.name
		},
		mounted(){
		},
		methods:{
			clickShow(){
				this.isShow=!this.isShow
			},
			reload(){
				this.isRouterAlive=false;
				this.$nextTick(function(){
					this.isRouterAlive=true
				})
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
		/* width: 22px; */
		/* height: 22px; */
		margin: 9px auto 0px;
		font-size: 30px;
	}
	
	.gymIcon-news1,.gymIcon-news2{
		display: block;
		margin: 4px auto 0px;
		font-size: 38px;
	}
	.gymIcon-train1,.gymIcon-train2{
		display: block;
		margin: 4px auto 0px;
		font-size: 38px;
	}
</style>
