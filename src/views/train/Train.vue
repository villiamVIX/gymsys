<template>
	<div id="Train">
		<NavBarVIX>
			<div slot='center' class="nav-title">
				<div v-for="(item,index) in routeData"
				     :key='item.title'
					 @click="clickTitle(index,item.route)">
						<span :class="currentIndex==index? 'actRouter':''">{{item.title}}</span>
				</div>
			</div>
		</NavBarVIX>
		<router-view class="Rview"></router-view>
	</div>
</template>

<script>
	import NavBarVIX from 'components/common/NavBarVIX/NavBarVIX.vue'
	export default{
		name:"Train",
		components:{
			NavBarVIX
		},
		methods:{
			clickTitle(index,route){
				this.currentIndex=index
				console.log(route)
				this.$router.replace(route)
				// console.log(this.currentIndex)
			}
		},
		data() {
			return {
				currentIndex:0,
				routeData:[
					{
						route:'/train/coach',
						title:"私教"
					},
					{
						route:'/train/lesson',
						title:"团课"
					}
					
					]
			}
		},
	}
</script>

<style scoped>
	.nav-title{
		display: flex;
	}
	.nav-title>div{
		flex: 1;
	}
	.actRouter{
		color: #333333;
		border-bottom: #008B8B 2px solid;
		font-family:HYQihei 60S;
		padding: 0 15px 5px 15px;
		font-weight: bold;
	}
</style>
