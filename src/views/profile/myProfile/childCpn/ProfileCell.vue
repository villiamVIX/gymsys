<template>
	<div class="ProfileCell" @click="clickCell(LeftTitle)">
		<van-divider />
		<div class="cell-left">
			<i :class="LeftIcon"></i>
			<span class="cell-text">{{LeftTitle}}</span>
		</div>
		<div class="cell-right ">
			<!-- <span>{{RightTitle}}</span> -->
			<i class="gymIcon-more"></i>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {Divider} from 'vant'
	
	Vue.use(Divider);
	export default{
		props:{
			LeftTitle:{type:String,default:""},
			LeftIcon:{type:String,default:''},
		},
		methods:{
			clickCell(){
				this.$emit('clickCell',this.LeftTitle)
			}
		}
	}
</script>

<style scoped>
	.ProfileCell{
		padding: 5px 0rem;
		display: flex;
		font-size: 1.185rem;
		font-weight: 553;
	}
	.cell-left{
		flex: 1;
		/* float: left; */
	}
	.cell-right{
		float: right;
	}
	
</style>
