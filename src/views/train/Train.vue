<template>
	<div id="Train">
		<NavBarVIX>
			<div slot='center' class="nav-title">
				<div v-for="(item,index) in routeData"
				     :key='index'
					 @click="clickTitle(index)"
					 >
					<router-link :to="item.route">
						<span :class="currentIndex==index? 'actRouter':''">{{item.title}}</span>
					</router-link>
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
			clickTitle(index){
				this.currentIndex=index
				// console.log(this.currentIndex)
			}
		},
		data() {
			return {
				isAct: 0,
				coach:'/coach',
				currentIndex:1,
				routeData:[
					{
						route:'/train/lesson',
						title:"团课"
					},
					{
						route:'/train/coach',
						title:"私教"
					},
					{
						route:'/train/bodydata',
						title:"数据",
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
	.Rview{
		padding-top: 44px;
		height: 80vh;
	}
	.actRouter{
		color: #333333;
		border-bottom: #008B8B 2px solid;
		font-family:HYQihei 60S;
		padding: 0 15px 5px 15px;
		font-weight: bold;
	}
</style>
