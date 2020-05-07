<template>
	<div id="app">
		<keep-alive exclude="confirm,Admin,News,NewsList,Train,HomeSwiper">
				<router-view class="router-view" v-if="isRouterAlive"></router-view>
		</keep-alive>
		<div class="bottom-bar" :style="{width:wid+'%'}">
			<i class="el-icon-caret-right" style="color: #1fd094;flex: 1;" :class="Min==wid?'moreRotate':''" @click="clickBar"></i>
			<div>
				<router-link to="/home">
					<i :class="Rname=='home'?'icon gymIcon-home2':'icon gymIcon-home1'"></i>
				</router-link>
			</div>
			<div>
				<router-link to='/newslist'>
					<i :class="Rname=='newslist'?'gymIcon-news2':'gymIcon-news1'"></i>
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
				<router-link to='/train/coach'>
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
		mounted() {
			this.$store.dispatch('reqIsLogin')
		},
		data() {
			return {
				isRouterAlive: true,
				Rname: undefined,
				wid: 95,
				Min: 20,
				Max: 95
			}
		},
		updated() {
			this.Rname = this.$route.path.split('/')[1]
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

	.bottom-bar {
		height: 3.062rem;
		position: fixed;
		display: flex;
		flex-wrap: nowrap;
		right: -3rem;
		top:75vh;
		text-align: center;
		border: 0px solid transparent;
		border-radius: 3.312rem;
		box-shadow: 0 0.125rem 0.5rem 0 #98969675;
		width: 3.125rem;
		background-color: #F2F2F2;
		transition: width 0.5s;
		transition-timing-function: cubic-bezier(0.17, 0.45, 0.69, 1.09);
	}

	.bar-item {
		flex: 1;
		display: flex;
	}

	.bottom-bar>div {
		flex: 1;
		border-radius: 2.375rem;
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

	.gymIcon-news1,
	.gymIcon-news2,
	.gymIcon-train1,
	.gymIcon-train2 {
		margin: 0.383rem auto 0px;
		font-size: 2.375rem;
	}
</style>
