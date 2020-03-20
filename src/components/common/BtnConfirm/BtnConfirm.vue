<template>
	<button class="confirm-btn" @click="clickBtn">{{btnTitle}}</button>
</template>

<script>
	export default{
		props:{
			btnTitle:{
				type:String,
				default(){
					return "确认"
				}
			}
		},
		methods:{
			clickBtn(){
				this.$emit('clickBtn')
			}
		}
	}
</script>

<style scoped>
	.confirm-btn {
		/* position: fixed; */
		height: 49px;
		left: 10px;
		bottom: 10px;
		text-align: center;
		width: 95vw;
		border: 0px solid transparent;
		background-color: #60cd5c;
		font: 15px sans-serif;
		border-radius: 53px;
		box-shadow: 0px 2px 8px 0px #98969675;
	}
</style>
