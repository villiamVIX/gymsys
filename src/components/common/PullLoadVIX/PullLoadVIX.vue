<template>
	<div class="pull-wrap" @touchstart="start" @touchmove="move" @touchend="end">
		<!--上拉加载组件-->
		<slot class="pull-content"></slot>
		<div class="status-box">
			<div class="is-moving" v-show="isMoving">
				<img class="Moving" :style="{opacity:opCT/3+'%'}" src='./img/pullUp.png'></img>
			</div>
			<div class="is-loading" v-show="isLoading">
				<img class="loading" src="./img/loading2.gif">
			</div>
			<div class="is-done" v-if="isDone">没有数据了</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'PullLoadVIX',
		data() {
			return {
				startY: 0,
				moveY: 0,
				isMoving: false,
				isLoading: false,
				isDone: false, //到底了
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
				let flag = this.scrollToTheEnd(); //监视是否到底
				this.moveY = e.touches[0].clientY - this.startY;
				if (flag && this.moveY <= 0) { //方向向下 且 到底
					this.isMoving = true
					this.opCT = Math.abs(this.moveY)

				}
				// console.log(this.opCT)
				// console.log('滑到的'+e.touches[0].clientY );
			},
			end() {
				if (this.isLoading || this.isDone) return;
				// console.log('touchend', this.moveY);
				if (this.moveY > -20) { //没超过20px就不触发
					this.isMoving = false;
				} else { //超出就触发加载
					let flag = this.scrollToTheEnd();
					if (!flag) return;
					this.isMoving = false; //关上拉动画
					this.isLoading = true; //开加载动画
					this.loadMore()
				}
				this.startY = 0;
				this.moveY = 0;
			},

			//判断滚动条是否到底
			scrollToTheEnd() {
				let scrollTop = document.documentElement.scrollTop || window.pageYOffset // 滚动的距离
				let viewHeight = document.documentElement.clientHeight; // 可视区域高度
				let offsetHeight = document.body.scrollHeight; // 内容高度
				// console.log(scrollTop, viewHeight, offsetHeight, '----------------');
				// 滚动条到底部的条件
				return (viewHeight + scrollTop) >= offsetHeight //等于即可
			},

			//  发送加载请求
			loadMore() {
				this.$emit('loadMore')
			},
		},
		mounted() {
			//3状态 ：加载完毕/加载到底/刷新重置状态
			this.$on('loadEnd', () => {
				// console.log('load完毕了');
				this.isLoading = false
			})
			this.$on('loadOver', () => {
				// console.log('没有了');
				this.isDone = true;
				this.isLoading = false;
				this.isMoving = false;
			})
			this.$on('reLoad',()=>{
				this.isDone=false
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
