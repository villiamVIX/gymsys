<template>
	<div id="app">
		<keep-alive exclude="confirm,Admin">
			<!-- <transition name="fade-transform"> -->
				<router-view class="router-view" v-if="isRouterAlive"></router-view>
			<!-- </transition> -->
		</keep-alive>


		<div class="bottom-bar" :style="{width:wid+'%'}">
			<i class="gymIcon-Lmore" :class="Min==wid?'moreRotate':''" @click="clickBar"></i>
			<div>
				<router-link to="/home">
					<i :class="Rname=='home'?'icon gymIcon-home2':'icon gymIcon-home1'"></i>
				</router-link>
			</div>
			<div>
				<router-link to='/newslist'>
					<i :class="Rname=='news'?'gymIcon-news2':'gymIcon-news1'"></i>
				</router-link>
			</div>
			<div>
				<router-link to='/entrance'>
					<i :class="Rname=='entrance'?'icon gymIcon-scan2':'icon gymIcon-scan1'">
						<span class="path1"></span>
						<span class="path2"></span>
						<span class="path3"></span>
					</i>
				</router-link>
			</div>
			<div>
				<router-link to='/train'>
					<i :class="Rname=='train'?'gymIcon-train2':'gymIcon-train1'"></i>
				</router-link>
			</div>
			<div>
				<router-link to='/profile/login'>
					<i :class="Rname=='profile'?'icon gymIcon-my2':'icon gymIcon-my1'">
						<span class="path1"></span>
						<span class="path2"></span>
						<span class="path3"></span>
					</i>
				</router-link>
			</div>
			<div></div> <!-- 顶位子 -->
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			this.$store.dispatch('reqIsLogin')
		},
		data() {
			return {
				isShow: false,
				isRouterAlive: true,
				Rname: undefined,
				wid: 20,
				Min: 20,
				Max: 95
			}
		},
		updated() {
			this.Rname = this.$route.name
		},
		methods: {
			reload() {
				this.isRouterAlive = false;
				this.$nextTick(function() {
					this.isRouterAlive = true
				})
			},
			clickBar() {
				if (this.wid == this.Min) {
					this.wid = this.Max
				} else {
					this.wid = this.Min
				}
			}
		}
	}
</script>

<style scoped>
	@import "assets/css/base.css";
	/* .isShow {
		height: 50px;
		width: 50px;
		position: fixed;
		display: flex;
		right: 10px;
		bottom: 10px;
		background-color: white;
		border-radius: 58px;
		box-shadow: -1px 1px 7px 0px #7d6969cf;
		border: 1px solid white;
	}

	.isShow img {
		height: 40px;
		width: 40px;
		margin: auto;
	} */



	.bottom-bar {
		height: 49px;
		position: fixed;
		display: flex;
		flex-wrap: nowrap;
		right: -55px;
		bottom: 16px;
		text-align: center;
		border: 0px solid transparent;
		border-radius: 53px;
		box-shadow: 0px 2px 8px 0px #98969675;
		width: 50px;
		background-color: #F2F2F2;
		transition: width 0.7s;
		transition-timing-function: cubic-bezier(0.17, 0.45, 0.69, 1.09);
	}

	.bar-item {
		flex: 1;
		display: flex;
	}

	.bottom-bar>div {
		flex: 1;
		border-radius: 38px;
	}

	i {
		display: block;
		margin: 9px auto 0px;
		font-size: 1.875rem;
	}

	.moreRotate {
		transition: rotateY 7s;
		transform: rotateY(180deg)
	}

	.gymIcon-Lmore {
		flex: 1;
	}

	.gymIcon-news1,
	.gymIcon-news2,
	.gymIcon-train1,
	.gymIcon-train2 {
		margin: 4px auto 0px;
		font-size: 2.375rem;
	}
</style>
