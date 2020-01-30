<template>
	<div id="NewsArticle">
		<p id="article" @onload="oklo">{{article}}</p>
	</div>
</template>

<script>
	export default{
		name:"NewsArticle",
		props:{
			article:{
				type:String,
				default(){
					return ''
				}
			}
		},
		mounted(){
			this.$emit('ArtcileFinish')
		},
		methods:{
			oklo(){
				console.log(12323)
			}
		}
	}
</script>

<style scoped>
	#NewsArticle{
		padding: 7px 0 0 55px;
	}
	#article{
		font-size: 18px;
		color: darkcyan;
		line-height: 30px;
	}
</style>
