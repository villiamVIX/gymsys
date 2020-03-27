<template>
	<div class="adminNewslist">
		<table class="table_default1" width="100%" v-loading="loading">
			<tr>
				<th v-for="(th,index) in tableTh" :key='index'>
					{{th}}
				</th>
			</tr>
			<tr v-for="(tr,index) in newsList" :key='index'>
				<td width="5%">
					<p class="news_id">{{tr._id | idFormat}}</p>
				</td>
				<td width="20%">
					<p class="news_author">{{tr.author}}</p>
				</td>
				<td width="5%">
					<p class="news_floor">{{tr.floor}}</p>
				</td>
				<td width="50%">
					<p class="news_title">{{tr.title}}</p>
				</td>
				<td width="2%">
					<van-image v-for="(img,i) in tr.imgs" :key='i' width="2rem" height="2rem" fit="fill" Lazyload :src="baseUrl+img"
					 @click="getImg( tr.imgs,i)" />
				</td>
				<td width="18%">
					<van-swipe-cell>
						<template slot="left">
							<!-- <van-button type="primary" size="mini" text="置顶" /> -->
						</template>
						←→
						<template slot="right">
							<el-button type="danger" icon="el-icon-delete" class='btn2' @click='clickDelete(tr.floor)' size='mini'></el-button>
						</template>
					</van-swipe-cell>
				</td>
			</tr>
		</table>
		<span>显示{{newsList.length}}条</span>
		<span>共{{pageInfo.totalCount}}条</span>
		<div class="slider-size">
		</div>

		<van-pagination v-model="pageInfo.page" :page-count="pageInfo.pageCount" force-ellipses @change='changePage' />
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex';

	export default {
		created() {
			this.$store.dispatch('reqNewsList', this.reqData).then(res => {
				this.pageInfo = res
				console.log(this.pageInfo)
				this.loading = false
			})
		},
		mounted() {
			console.log(this.$store.state.newsList)
		},
		data() {
			return {
				loading: true,
				tableTh: ['_id', '用户名', '楼层', '标题', '配图', '操作'],
				baseUrl: this.GLOBAL.baseUrl,
				reqData: {
					pageSize: 3,
					page: 1,
				},
				pageInfo: Object,
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
			changePage(page) {
				this.reqData.page = page
				this.$store.dispatch('reqAdminNews', this.reqData).then(res => {
					console.log(res)
					this.pageInfo = res
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
	.adminNewslist {
		background-color: white;
	}

	table {
		border-collapse: collapse;
	}

	th {
		font-size: 0.9375rem;
		background-color: #f6f7f9;
		height: 3.5rem;
	}

	td {
		border-bottom: 1px solid #e8ebee;
		height: 5.1875rem;
		text-align: center;
	}

	.news_title {
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

	.btn2 {
		
		font-size: 10px;
		line-height: 1px;
	}

</style>
