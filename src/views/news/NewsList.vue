<template>
	<div>
		<van-pull-refresh v-model="LoadMore" @refresh="onRefresh">
			<div class="news-publish" @click="publish">
				<i class="gymIcon-write"></i>
			</div>
			<PullLoadVIX ref='pull' @loadMore='loadMore'>
				<div id="newslist">
					<div class="news-box" v-for="(item,index) in newsList" :key="item._id" @click.stop="ToNews(item._id)">

						<div class="news-avatar">
							<van-image width="  2rem" height=" 2rem" :src="baseUrl+item.avatar" round lazy-load />
						</div>
						<div class="news-content">
							<span class="gymIcon-delete" @click.stop="deleteNews(item._id,item.title)"></span>
							<div class="news-auther">
								<span>{{item.author}}</span>
							</div>
							<div class="news-title">
								<h2 class="van-ellipsis">{{item.title}}</h2>
							</div>

							<div class="news-img">
								<van-image class="van-image" width=" 10rem" height=" 10rem" v-for="(i,k) in item.imgs" :key='k' :src="baseUrl+i"
								 fit='cover' lazy-load @click.stop='showImg(i)'>
								</van-image>
								<!-- 套一层DIV为了防止冒泡  先阻止了组件的点击遮罩关闭 -->
								<div @click.stop='clickHover'>
									<van-popup v-model="isShowImg" safe-area-inset-bottom :overlay-style="{ backgroundColor: 'white' }" :style="{ height: '30rem'} ,{width: '104%'}"
									 :close-on-click-overlay=false>
										<van-image class="van-image" :src="baseUrl+popImg" >
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
		</van-pull-refresh>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Lazyload,
		Image,
		Popup,
		Toast,
		PullRefresh,
		Dialog
	} from 'vant';
	import {
		mapState
	} from 'vuex'
	import {
		checkLoginMixin
	} from 'common/mixin.js'
	import PullLoadVIX from 'components/common/PullLoadVIX/PullLoadVIX.vue'

	Vue.use(Lazyload).use(Image).use(Popup).use(Toast).use(PullRefresh)


	export default {
		mixins: [checkLoginMixin],
		created() {
			let page = this.page
			this.$store.dispatch('reqNewsList', page)
		},
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
				isShowImg: false,
				popImg: "",
				LoadMore: false,
				page: 1,
				deleteId: undefined
			}
		},
		methods: {
			onRefresh() {
				this.page = 1
				this.$store.state.newsList = []
				this.$store.dispatch('reqNewsList', this.page).then(res => {
					this.LoadMore = false
					this.$refs.pull.$emit('reLoad') // 到底了
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
				}).catch(() => {
					// on cancel
				});
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
				if (!this.isLogin) {
					return Toast('登录后即可发文')
				}
				this.$router.replace("/newslist/publish")
			},
			// 上拉加载更多
			loadMore() {
				this.page = this.page + 1
				this.$store.dispatch('reqNewsList', this.page).then(res => {
					this.$refs.pull.$emit('loadEnd') //加载完毕
					if (res < 3) {
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
	}

	.news-content {
		margin-left: 0.9375rem;
	}

	.news-title {
		width: 21rem;
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
