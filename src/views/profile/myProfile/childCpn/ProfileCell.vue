<template>
	<div class="ProfileCell" @click="clickCell">
		<van-divider />
		<div class="cell-left">
			<!-- <i :class="LeftIcon"></i> -->
			<span class="cell-text">{{CellInfo.LeftTitle}}</span>
		</div>
		<div class="cell-right ">
			<!-- <span>{{RightTitle}}</span> -->
			<i class="gymIcon-more"></i>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			CellInfo:{
				type:Object,
				default () {
					return {}
				} ,
			// LeftIcon:{type:String,default:''},
			}
		},
		methods:{
			clickCell(){
				this.$emit('clickCell',this.CellInfo.route)
			}
		}
	}
</script>

<style scoped>
	.ProfileCell{
		padding: 5px 0rem;
		display: flex;
		font-size: 1rem;
		font-weight: 545;
	}
	.cell-left{
		flex: 1;
	}
	.cell-right{
		float: right;
	}
	
</style>
