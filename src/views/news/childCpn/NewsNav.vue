<template>
	<div id="NewsNav">
		<NavBarVIX>
			<div id="nav-icon" slot='left' @click="backClick" >
				<i class="back gymIcon-back" ></i>
			</div>
			<div slot='center' class="title">
				<h3 class="title">{{title}}</h3>
			</div>
			<div id="nav-icon" slot='right'>
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
				this.$router.go(-1)
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
			}
		}
	}
</script>

<style scoped>
	.title {
		overflow: hidden;
		width: 250px;
		height: 44px;
		text-align: center;
		margin-left: 10px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.share < div{
		
		margin-top: 5px;
	}
	.share {
		font-size: 22px;
	}
	.back{
		font-size: 18px;
	}
	#nav-icon{
		margin-top: 6px;
	}
</style>
