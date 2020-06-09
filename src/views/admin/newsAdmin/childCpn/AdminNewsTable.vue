<template>
	<div class="adminNewslist"> 
		<el-table :data="newsList" v-loading='loading' style="width: 100%" stripe >
			<el-table-column fixed prop="author" label="发帖人" min-width="77" :show-overflow-tooltip="true">
			</el-table-column>
			<el-table-column prop="floor" label="楼层" min-width="60">
			</el-table-column>
			<el-table-column prop="title" label="标题" min-width="60">
			</el-table-column>
			<el-table-column prop="date" label="发帖时间" min-width="60">
			</el-table-column>
			<el-table-column prop="lastUpdate" sortable label="置顶" min-width="60">
				<template slot-scope="scope">
					<el-tag v-if='scope.row.lastUpdate' effect="plain" type='success' class='swiperTag'>
					   置顶
					  </el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="imgs" label="配图" min-width="77">
		       <template slot-scope="scope">
		           <img v-for="item in scope.row.imgs" :src="item" style="width: 36px;height:36px" />
		      </template>
		   </el-table-column>
			<el-table-column prop="gender" label="操作" min-width="95">
				<template v-slot:default="slotProps">
					<el-button class='btn' type="primary" icon="el-icon-upload2" size="mini" @click="TopPlacement(slotProps.row._id)">置顶</el-button>
					<el-button class='btn' type="danger" icon="el-icon-delete" size="mini" @click="delNews(slotProps.row._id)"></el-button>
				</template>
			</el-table-column>
			</el-table-column>
		</el-table>
		<span >显示{{newsList.length}}条</span>
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
	
	import {
		getNewsTop
	}from 'network/NetAdmin'
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
				baseUrl: this.GLOBAL.baseUrl,
				reqData: {
					pageSize: 5,
					page: 1,
				},
				pageInfo: Object,
			}
		},
		methods: {
			changePage(page) {
				this.reqData.page = page
				this.$store.dispatch('reqAdminNews', this.reqData).then(res => {
					console.log(res)
					this.pageInfo = res
				})
			},
			TopPlacement(data){
				getNewsTop(data).then(res=>{
					this.$notify({
						type: 'success',
						message: '操作成功'
					})
					this.reload()
				})
			},
			delNews(id){
				vant.Dialog.confirm({
					title: '删除',
					message: `确定删除？`
				}).then(() => {
					this.$store.dispatch('reqDeleteNews', id).then(res => {
						this.$notify({
							type: 'success',
							message: '删除帖子成功'
						})
						this.reload()
					})
				}).catch(() => {});
			},
			reload(){
				
				this.$store.dispatch('reqAdminNews', this.reqData).then(res => {
					this.pageInfo = res
				})
			}
		},
		filters: {
			// idFormat(id) {
			// 	return id.substring(id.length - 4)
			// }
		},
		computed: {
			...mapState({
				newsList: state => state.newsList
			})
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
