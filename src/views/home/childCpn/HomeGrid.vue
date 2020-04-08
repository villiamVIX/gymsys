<template>
	<van-grid :border="false" :column-num="4">
		<van-grid-item class='grids'
		 @click='gridTo(item.route)' v-for='(item,index) in gridInfo' :key='index'>
			<i :class="['gymIcon-home-'+item.image,item.color]" >
				<span v-for="i in 2" :class="'path'+i"></span>
			</i>
			<span>{{item.title}}</span>
		</van-grid-item>
	</van-grid>
</template>

<script>
	export default {
		methods: {
			gridTo(route) {
				this.$router.replace(route)
			}
		},
		data() {
			return {
				'gridInfo': [{
						'image': 'coach',
						'title': '私教',
						'route': '/train/coach',
						'color':'color1'
					},
					{
						'image': 'lesson',
						'title': '团课',
						'route': '/train/lesson',
						'color' :'color2'
					},
					{
						'image': 'data',
						'title': '身体数据',
						'route': '/train/data',
						'color' :'color3'
					},
					{
						'image': 'news',
						'title': '健康资讯',
						'route': '/newslist',
						'color':'color4'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.grids {
		margin-top: 5px;
		font-size: 13px;
	}
	.grids i{
		/* background-color: #00d0ff69; */
		border-radius: 2rem;
		font-size: 1.8rem;
		padding: .488rem;
		margin-bottom: .65rem;
	}
	.color1{
		background-color: #00d0ff69;
	}
	.color2{
		background-color: #979aef;
	}
	.color3{
		background-color: #fa7e7d;
	}
	.color4{
		background-color: #1dcab4;
	}
	
</style>
