<template>
	<van-grid :border="false" :column-num="4">
	  <van-grid-item class='grids' v-for="item in gridInfo">
	    <van-image :src="item.image" width="38" height="38" />
		<span>{{item.title}}</span>
	  </van-grid-item>
	</van-grid>
</template>

<script>
	import Vue from 'vue';
	import { Grid, GridItem } from 'vant';
	import { Image } from 'vant';
	
	Vue.use(Image);
	Vue.use(Grid);
	Vue.use(GridItem);
	export default{
		data(){
			return{
				'gridInfo':[
					{
						'image':require('assets/img/home/coach.png'),
						'title':'私教'
					},
					{
						'image':require('assets/img/home/team_class.png'),
						'title':'团课'
					},
					{
						'image':require('assets/img/home/body_info.png'),
						'title':'身体数据'
					},
					{
						'image':require('assets/img/home/home_news.png'),
						'title':'健康资讯'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.grids{
		margin-top: 5px;
		font-size: 13px;
	}
	.grids van-image{
		height: 1.125rem;
		width: 1.155rem;
	}
</style>
