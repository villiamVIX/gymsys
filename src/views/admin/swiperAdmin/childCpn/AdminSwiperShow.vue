<template>
	 <el-carousel :interval="4000" type="card" height="12rem">
	    <el-carousel-item v-for="(item,index) in swipers" :key="index">
			<el-popconfirm
			  title="删除这个轮播图？"
			   confirmButtonText='删除'
			    cancelButtonText='不用了'
			    icon="el-icon-delete-solid"
			    iconColor="red"
				@onConfirm='deletePic(item)'>
			<el-button slot="reference" style='width: 0;border: 0;  padding: 0;'>
				<van-image
				  width= "800px"
				  height='240px'
				  fit="contain"
				  :src="item" 
				/>
			</el-button>
			</el-popconfirm>
	    </el-carousel-item>
	  </el-carousel>
</template>

<script>
	import{
		deleteSwiper
	}from 'network/NetAdmin.js'
	import {mapState} from 'vuex'
	export default{
		methods:{
		},
		computed:{
			...mapState({
				swipers: state => state.common.swipers
			})
		},
		data() {
			return {
				
			}
		},
		methods:{
			deletePic(img){
				deleteSwiper(img).then(res=>{
					
					this.$notify({
						type: 'warning',
						message: '删除成功'
					})
					this.$store.dispatch('reqHomeCommon')
				})
			},
		}
	}
</script>

<style scoped>

	.el-icon-delete{
		  /* box-shadow: 10px 10px 5px #888888; */
		  border-radius: 88px;
		  /* border: #1f2d3d1c 1px solid; */
		  padding: 0.35rem;
		  /* font-size: 1.2rem; */
		  color: white;
		  background-color: #1f2d3d1c;
	}
</style>
