<template>
	<div class="pull-wrap" @touchstart="start" @touchmove="move" @touchend="end">
		<!--上拉加载组件-->
		<div class="status-box">
			<div class="is-moving" v-show="isMoving">
				<img class="Moving" :style="{opacity:opCT/3+'%'}" src='./img/pullUp.png'></img>
			</div>
			<div class="is-loading" v-show="isLoading">
				<img class="loading" src="./img/loading2.gif">
			</div>
		</div>
		<slot class="pull-content"></slot>
	</div>
</template>

<script>
	export default {
		name: 'PullFreshVIX',
		data() {
			return {
				startY: 0,
				moveY: 0,
				isMoving: false,
				isLoading: false,
				opCT: 0
			}
		},
		methods: {
			start(e) {
				this.startY = e.touches[0].clientY; //手指放的高度
				// console.log('放上去的'+this.startY);
			},
			move(e) {
				if (this.isDone) return
				// 滑动时需要检测是否到底了，如果还没到底，就不要loading
				if (this.isLoading || this.isDone) return;
				
				let flag = this.scrollToTheEnd(); //监视是否是最上面
				
				this.moveY = e.touches[0].clientY - this.startY;
				if (flag && this.moveY >= 0) { //方向向上 且 到天
					this.isMoving = true
					this.opCT = Math.abs(this.moveY)
				}
				// console.log(this.opCT)
				// console.log('滑到的'+e.touches[0].clientY );
			},
			end() {
				if (this.isLoading || this.isDone) return;
				// console.log('touchend', this.moveY);
				console.log(this.moveY)
				if (this.moveY < 88) { //没超过88px就不触发
					this.isMoving = false;
				} else { //超出就触发加载
					let flag = this.scrollToTheEnd();
					if (!flag) return;
					this.isMoving = false; //关上拉动画
					this.isLoading = true; //开加载动画
					this.onFresh()
				}
				this.startY = 0;
				this.moveY = 0;
			},

			//判断滚动条是否是头部
			scrollToTheEnd() {
				let scrollTop = document.documentElement.scrollTop || window.pageYOffset // 滚动的距离
				// 滚动条到底部的条件
				return scrollTop==0//等于即可
			},
			//  发送加载请求
			onFresh() {
				this.$emit('onFresh')
			},
		},
		mounted() {
			//状态 ：加载完毕
			this.$on('freshEnd', () => {
				// console.log('load完毕了');
				this.isLoading = false
			})
		}
	}
</script>

<style scoped>
	

	.status-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.Moving {
		height: 2.125rem;
	}

	.loading {
		height: 2.55rem;
	}
</style>
