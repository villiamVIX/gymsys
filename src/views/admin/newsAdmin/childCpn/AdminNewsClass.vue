<template>
	<div class="adminNewslist" >
		<table class="table_default1" width="100%">
			<tr>
				<th v-for="(th,index) in tableTh" :key='index'>
					{{th}}
				</th>
			</tr>
			<tr v-for="(tr,index) in newsList" :key='index' >
				<td width="5%"><p class="news_id">{{tr._id | idFormat}}</p></td>
				<td width="20%"><p class="news_author">{{tr.author}}</p></td>
				<td width="5%"><p class="news_floor">{{tr.floor}}</p></td>
				<td width="50%"><p class="news_title">{{tr.title}}</p></td>
				<td width="2%">
					<van-image v-for="(img,i) in tr.imgs" :key='i'
					width="2rem" height="2rem" fit="fill" Lazyload :src="baseUrl+img" @click="getImg( tr.imgs,i)" />
				</td>
				<td width="18%">
					<van-swipe-cell>
						<template slot="left">
							<van-button type="primary" size="mini" text="置顶" />
						</template>
						←→
						<template slot="right">
							<van-button size="mini" type="danger" @click='clickDelete(tr.floor)' text="删除" />
						</template>
					</van-swipe-cell>
				</td>
			</tr>
		</table>
		<span>显示{{newsList.length}}条</span>
		<span>共{{pageInfo.totalCount}}条</span>
		<div class="slider-size">
		</div>
		
		<van-pagination v-model="pageInfo.page"
		 :page-count="pageInfo.pageCount"  force-ellipses
		  @change='changePage'/>
	</div>
</template>

<script>
	
	import {
		mapState
	} from 'vuex';
	
	export default {
		created() {
			this.$store.dispatch('reqNewsList', this.reqData).then(res=>{
				this.pageInfo=res
				console.log(this.pageInfo)
			})
		},
		mounted() {
			console.log(this.$store.state.newsList)
		},
		data() {
			return {
				tableTh: ['_id', '用户名','楼层', '标题',  '配图', '操作'],
				baseUrl: this.GLOBAL.baseUrl,
				reqData:{
					pageSize :3,
					page: 1,
				},
				pageInfo:Object,
			}
		},
		methods: {
			getImg(images, index) {
				let imgUrl = []
				for (let u in images) { //加上Baseurl
					let a = this.baseUrl + images[u]
					imgUrl.push(a)
				}
				ImagePreview({
					images: imgUrl,
					showIndex: true,
					loop: false,
					startPosition: index
				})
			},
			changePage(page){
				this.reqData.page=page
				this.$store.dispatch('reqAdminNews', this.reqData).then(res=>{
					console.log(res)
					this.pageInfo=res
				})
			}
		},
		filters: {
			idFormat(id) {
				return id.substring(id.length - 4)
			}
		},
		computed: {
			...mapState(['newsList']),
		},
	}
</script>

<style scoped>
	.adminNewslist{
		background-color:white;
	}
	table {
			border-collapse: collapse;
		}
		th{
			font-size: 0.9375rem;
			background-color: #f6f7f9;
			height: 3.5rem;
		}
	td {
		border-bottom: 1px solid #e8ebee;
		/* width: 2rem; */
		/* padding: 1px 1px; */
		height: 5.1875rem;
		text-align: center;
	}
	.news_title{
		color: #4da1da;
		text-align: center;
		font-weight: bold;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		text-overflow: ellipsis;
		overflow: hidden;     
	} 
	tr:nth-child(odd) {
	            background: #f1f1f1;
	        }
/* 	
	
	
	td p {
		width: 1rem;
	}
	td:nth-child(1){
		width: 1px;
	}
	td:nth-child(4){
		margin: 55px;
	}
	
	.news_id{
		text-align: center;
	}
	.news_author{
		width: 5rem;
		font-size: 10px;
		color: #9B9B9B;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		font-weight: bold;
	}
	.news_floor{
		width:15px;
		text-align: center;
	}
	*/
</style>
