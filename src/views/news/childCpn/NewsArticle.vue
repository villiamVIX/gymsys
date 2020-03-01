<template>
	<div id="NewsArticle">
		<p id="article" >{{article}}</p>
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
	}
</script>

<style scoped>
	#NewsArticle{
		padding: 7px 0.9rem ;
	}
	#article{
		font-size: 18px;
		color: darkcyan;
		line-height: 30px;
	}
</style>
