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
