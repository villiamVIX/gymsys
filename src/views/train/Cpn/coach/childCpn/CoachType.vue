<template>
	<div id="CoachType">
		<div class="coachType">
			<div class="TypeItem" v-for="(item,index) in coachTypes" :key='index' @click="clickType(index)">
				<img class="type-img" :src="item.imgUrl" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			clickType(index){
				this.$emit('clickType',index)
			}
		},
		props:{
			coachTypes:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.coachType {
		padding: 2px 10px;
	}
	
	.type-img {
		width: 100%;
		border-radius: 10px;
	}
</style>
