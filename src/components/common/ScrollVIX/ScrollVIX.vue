<template>
	<div class="wrapper" ref="wrapper">
		<div class="content" ref='cont'>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	// import BScroll from 'better-scroll'
	export default {
		name: "ScrollVIX",
		data() {
			return {
				scroll: null,
			}
		},
		mounted() {
			// this.scroll = new BScroll(this.$refs.wrapper, {
			// 	scrollX:true,
			// 	// scrollY:false,
			// 	freeScroll:true,
			// 	eventPassthrough:'horizontal',
			// 	click: true,
			// 	probeType: this.probeType,
			// 	PullUpLoad:this.PullUpLoad
			// })
			
			// 监听拉动位置 并emit排出去
			// this.scroll.on('scroll', (position) => {
			// 	// console.log(position)
			// 	this.$emit('scrollPosition', position)
			// })
			// // 监听上拉事件  if上拉调用pullingup属性  并emit传出去
			// this.scroll.on('pullingUp', () => {
			// 	// console.log(123)
			// 	this.$emit('pullingUp')
			// })
		},
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			PullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			finishload() {
				this.scroll.finishPullUp()
			},
			// 刷新页面高度
			scrollReflesh(){
				// console.log(122)
				this.scroll.refresh()
			},
			// 滚回顶部方法
			scrollTop(){
				this.scroll.scrollTo(0, 0, 1500)
			},
			CalScroll() {
				
				this.$refs.cont.setContHeight
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
		}

	}
</script>

<style>
</style>
