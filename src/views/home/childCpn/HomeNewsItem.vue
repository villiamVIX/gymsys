<template>
	<div ref="wrapper" class="wrapper">
		<ul class="cont" ref="cont">
			<li class="cont-item" v-for="(item,index) in newsDetail" :key="index">
				<div @click="ToNews(index)">
					<div class="cont-img">
						<img :src="item.img" @load="itemImgLoad">
					</div>
					<div class="cont-dest">{{item.desc}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		
		data() {
			return {
				
			}
		},
		methods:{
			// =图片加载完 在回调计算宽度的函数  ==》》》》》》》》》》后续可加上 防抖提高性能
			itemImgLoad(){
				this.$nextTick(() => {
					let timer = setTimeout(() => { // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
						if (timer) {
							clearTimeout(timer)
							this.verScroll()
						}
					}, 0)
				})
			},
			ToNews(index) {
				const newsId=this.newsDetail[index].newsId
				this.$router.push('/news/'+newsId) 
			},
			verScroll() {
				// console.log('长度5：'+this.newsDetail.length)
				let width = this.newsDetail.length * 130 // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
				this.$refs.cont.style.width = width + 'px' // 修改滚动区域的宽度
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
							click: true,
							scrollX: true,
							scrollY: false,
							eventPassthrough: 'vertical'
						})
					} else {
						this.scroll.refresh() //如果dom结构发生改变调用该方法
					}
				})
			}
		},
		components:{
			BScroll
		},
		props: {
			newsDetail: {
				type: Array,
				default () {
					[]
				}
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 10%;
		overflow: hidden;
	}
	
	.cont {
		display: flex;
		white-space: nowrap;
		justify-content: center;
	}
	.cont-item {
		display: inline-block;
		flex: 1;
		margin: 0.3125rem 5px;

	}

	.cont-item img {
		height: 75px;
		width: 110px;
	}

	.cont-dest {
		margin-top: 3px;
		font-size: 13px;
		width: 6.5625rem;
		white-space: normal;
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/

		-webkit-line-clamp: 2;
		/** 显示的行数 **/

		overflow: hidden;
		/** 隐藏超出的内容 **/
	}
</style>
