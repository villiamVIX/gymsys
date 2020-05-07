<template>
	<div id="Train">
		<NavBarVIX>
			<div slot='center' class="nav-title">
				<div v-for="(item,index) in routeData" :key='item.title' @click="clickTitle(index,item.route)">
					<span :class="currentIndex==index? 'actRouter':''">{{item.title}}</span>
				</div>
			</div>
		</NavBarVIX>

		<keep-alive>
			<transition name="el-fade-in-linear">
				<router-view class="Rview"></router-view>
			</transition>
		</keep-alive>
	</div>
</template>

<script>
	import NavBarVIX from 'components/common/NavBarVIX/NavBarVIX.vue'
	 
	export default {
		name: "Train",
		components: {
			NavBarVIX
		},
		mounted() {
			this.checkCurrentIndex()
		},
		methods: {
			checkCurrentIndex(){
				let route=this.$route.name
				if(route=='coach'){
					this.currentIndex=0
				}else{
					this.currentIndex=1
				}
			},
			clickTitle(index, route) {
				this.currentIndex = index
				this.$router.replace(route)
			}
		},
		data() {
			return {
				currentIndex: undefined,
				routeData: [{
						route: '/train/coach',
						title: "私教"
					},
					{
						route: '/train/lesson',
						title: "团课"
					}

				]
			}
		},
	}
</script>

<style scoped>
	
	.nav-title {
		display: flex;
	}
	.nav-title>div {
		flex: 1;
	}

	.actRouter {
		color: #333333;
		border-bottom: #008B8B 2px solid;
		font-family: HYQihei 60S;
		padding: 0 15px 5px 15px;
		font-weight: bold;
	}
</style>
