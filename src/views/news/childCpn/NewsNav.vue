<template>
	<div id="NewsNav">
		<NavBarVIX>
			<div id="nav-icon" slot='left' @click="backClick" >
				<i class="back gymIcon-back" ></i>
			</div>
			<div slot='center' class="title">
				<h3 class="title">{{title}}</h3>
			</div>
			<div id="nav-icon" slot='right' v-show="right">
				<i class="share gymIcon-share">
					<span v-for="i in 7" :class="'path'+i"></span>
				</i>
			</div>
		</NavBarVIX>
	</div>
</template>
 
<script>
	import NavBarVIX from 'components/common/NavBarVIX/NavBarVIX.vue'
	export default {
		name: "NewsNav",
		methods: {
			backClick() {
				console.log(this.$router)
				console.log(this.$route)
				this.$router.replace('/newslist')
			}
		},
		components: {
			NavBarVIX
		},
		props: {
			title: {
				type: String,
				default () {
					return '标题'
				}
			},
			right:{
				type:Boolean,
				default(){
					return true
				}
			}
		}
	}
</script>

<style scoped>
	#NewsNav{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		background-color: white;
		z-index: 14;
		}
	.title {
		overflow: hidden;
		width: 250px;
		height: 44px;
		text-align: center;
		/* margin-left: 10px; */
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.title h3{
		font-weight: bold;
		font-size: 1.0625rem;
	}
	
	.share {
		font-size: 22px;
	}
	#nav-icon{
		margin-top: 4px;
	}
	.gymIcon-back{
		font-size: 21px;
	}
	.share < div{
		margin-top: 8px;
	}
</style>
