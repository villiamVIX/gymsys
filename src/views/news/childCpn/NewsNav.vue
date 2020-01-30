<template>
	<div id="NewsNav">
		<NavBarVIX>
			<div id="nav-icon" slot='left' @click="backClick" >
				<img class="back" src="@/assets/img/common/back.svg" />
			</div>
			<div slot='center' class="title">
				<h3 class="title">{{title}}</h3>
			</div>
			<div id="nav-icon" slot='right' style="height: 44px;">
				<img class="share" src="@/assets/img/common/share2.png" />
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
		height: 30px;
		width: 40px;
	}
	#nav-icon{
		margin-top: 6px;
	}
</style>
