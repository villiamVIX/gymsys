<template>
	<div>
		<div class="news-publish" @click="publish">
			<i class="gymIcon-write"></i>
		</div>
		<PullLoadVIX ref='pull' @loadMore='loadMore'>
			<div id="newslist">
				<div class="news-box" v-for="(item,index) in newsList" :key="item._id" @click.stop="ToNews(item._id)">
					<div class="news-avatar">
						<van-image width="2rem" height=" 2rem" :src="baseUrl+item.avatar" round v-lazy='item.avatar' />
					</div>
					<div class="news-content">
						<span class="gymIcon-delete" v-if="isAdmin" @click.stop="deleteNews(item._id,item.title)"></span>
						<div class="news-auther">
							<span>{{item.author}}</span>
						</div>
						<div class="news-title">
							<h2 class="van-ellipsis">{{item.title}}</h2>
						</div>

						<div class="news-img">
							<div>
								<van-image class="van-image" width="8.9rem" height="8.9rem"
								v-for="(i,k) in item.imgs" :key='k' :src="baseUrl+i"
								 fit='cover'  v-lazy="baseUrl+i" @click.stop='showImg(i)'>
								</van-image>
							</div>
							
							<!-- 套一层DIV为了防止冒泡  先阻止了组件的点击遮罩关闭 -->
							<div @click.stop='clickHover'>
								<van-popup v-model="isShowImg" safe-area-inset-bottom :overlay-style="{ backgroundColor: 'white' }" :style="{ height: '30rem'} ,{width: '104%'}"
								 :close-on-click-overlay=false>
									<van-image class="van-image" :src="baseUrl+popImg">
									</van-image>
								</van-popup>
							</div>
						</div>
						<div class="news-bottom">
							<span class="news-date">{{item.date}}</span>
							<div class="news-reply right">
								<i class="gymIcon-reply">
									<span v-for="i in 4" :class="'path'+i"></span>
								</i>
								{{item.floor}}
								<i class="gymIcon-praise">
									<span v-for="i in 2" :class="'path'+i"></span>
								</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PullLoadVIX>
	</div>
</template>

<script>

	import {
		mapState
	} from 'vuex'
	import {
		checkLoginMixin
	} from 'common/mixin.js'
	import PullLoadVIX from 'components/common/PullLoadVIX/PullLoadVIX.vue'
	
	// import Vue from 'vue';
	// 	import {
	// 		Lazyload,
			
	// 	} from 'vant';
	// Vue.use(Lazyload)
	
	export default {
		mixins: [checkLoginMixin],
		created() {
			this.$store.dispatch('reqNewsList', this.reqData)
		},
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
				isShowImg: false,
				popImg: "",
				deleteId: undefined,
				reqData: {
					pageSize: 3,
					page: 1,
				}
			}
		},
		methods: {
			onRefresh() { // 上拉刷新
				this.reqData.page = 1
				this.$store.state.newsList = [] //清空 不然乱插
				this.$store.dispatch('reqNewsList', this.reqData).then(res => {
					this.LoadMore = false
					this.$refs.pull.$emit('reLoad')
				})
			},
			deleteNews(id, title) {
				this.deleteId = id
				Dialog.confirm({
					title: '删除',
					message: `确定删除${title}？`
				}).then(() => {
					this.$store.dispatch('reqDeleteNews', this.deleteId).then(res => {
						this.onRefresh()
					})
				}).catch(() => {});
			},
			showImg(img) {
				this.isShowImg = true
				this.popImg = img
				console.log(this.popImg)
			},
			ToNews(newsId) {
				// let newsId = e.target.dataset.nid
				this.$store.dispatch('reqNews', newsId)
				this.$router.push('/news/' + newsId)
			},
			clickHover() {
				// 自定义点击遮罩关闭图层
				this.isShowImg = false
			},
			prevent() {
				event.stopPropagation(); //原生阻止冒泡事件
				// return false
			},
			publish() {
				// if (!this.isLogin) {
				// 	return vant.Toast('登录后即可发文')
				// }
				

				this.$router.replace("publish")
			},
			// 上拉加载更多
			loadMore() {
				this.reqData.page++
				this.$store.dispatch('reqNewsList', this.reqData).then(res => {
					console.log(res)
					this.$refs.pull.$emit('loadEnd') //加载完毕
					if (res.pageCount == this.reqData.page) {
						return this.$refs.pull.$emit('loadOver') // 到底了
					}
				})
			}
		},
		computed: {
			...mapState(['newsList'])
		},
		components: {
			PullLoadVIX
		}
	}
</script>

<style scoped>
	.news-box {
		display: flex;
		padding: 0.65rem 0.9375rem;
		border-bottom: #E7EAED 0.1px solid;
		color: #2A313B;
	}

	.news-avatar img {
		height: 2rem;
		width: 2rem;
	}

	.gymIcon-delete {
		float: right;
		font-size: 1.45rem;
	}

	.news-content {
		margin-left: 0.9375rem;
	}

	.news-title {
		/* width: 21rem; */
		margin-bottom: 0.55rem;
	}

	.news-img {
		width: 21rem;
		display: flex;
	}

	.news-img .van-image {
		/* flex: 1; */
		margin: 0 0.2rem;
	}

	.news-bottom {
		color: #C0C7D1;
	}

	.news-publish {
		background: #09CD8A;
		border-radius: 88px;
		width: 2.83rem;
		height: 2.83rem;
		position: fixed;
		z-index: 4;
		padding: 0.51rem;
		border: 2px whitesmoke solid;
		right: 0.85rem;
		bottom: 4.8rem;
		box-shadow: 0 0 7px 0px #7b7b7bcc;
	}

	.gymIcon-write {
		font-size: 1.5625rem;
	}
</style>
