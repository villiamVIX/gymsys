<template>
	<div>
		<el-backtop class='backTop' :right='18.5'>
			<i class="el-icon-arrow-up"></i>
		</el-backtop>
		<div class="news-publish" @click="publish">
			<i class="gymIcon-write"></i>
		</div>
		<PullFreshVIX ref='fresh' @onFresh='onRefresh'>

			<PullLoadVIX ref='pull' @loadMore='loadMore'>
				<div id="newslist" v-loading='loading'>
					<div class="newsSlot"></div>
					<div class="news-box" v-for="(item,index) in newsList" :key="item._id" @click.stop="ToNews(item._id)">
						<div class="news-avatar">
							<van-image width="2rem" height=" 2rem" fit="scale-down" :src="item.avatar" round v-lazy='item.avatar' />
						</div>
						<div class="news-content">
							<span class="gymIcon-delete" v-if="isAdmin||isMine(item.userId)" @click.stop="deleteNews(item._id,item.title)"></span>
							<el-tag type="warning" class='Top' v-if='item.lastUpdate'>置顶</el-tag>
							<el-tag v-if='item.Author_Role=="admin"' class='Top'>店内资讯</el-tag>
							<el-tag type='success' v-if='item.Author_Role=="coach"' class='Top'>教练</el-tag>
							<div class="news-auther">
								<span>{{item.author}}</span>
							</div>
							<div class="news-title">
								<h2 class="van-ellipsis">{{item.title}}</h2>
							</div>

							<div class="news-img">
								<div>
									<van-image class="van-image" width="7.9rem" height="7.9rem" v-for="(i,k) in item.imgs" :key='k' :src="i" fit='cover'
									 v-lazy="i" @click.stop='showImg(i)'>
									</van-image>
								</div>
								<!-- 套一层DIV为了防止冒泡  先阻止了组件的点击遮罩关闭 -->
								<div @click.stop='clickHover'>
									<van-popup v-model="isShowImg" safe-area-inset-bottom
									 :overlay-style="{ backgroundColor: 'white' }" 
									 :style="{ height: '30rem'} ,{width: '104%'}"
									 :close-on-click-overlay='false'>
										<van-image class="van-image" :src="popImg">
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
					<div class="newsSlot"></div>
				</div>
			</PullLoadVIX>
		</PullFreshVIX>
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
	import PullFreshVIX from 'components/common/PullFreshVIX/PullFreshVIX.vue'

	export default {
		mixins: [checkLoginMixin],
		name:"NewsList",
		created() {
			loading: true,
			this.init()
		},
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
				isShowImg: false,
				popImg: "",
				deleteId: undefined,
				reqData: {
					pageSize: 8,
					page: 1,
				},
				loading: Boolean,
			}
		},
		methods: {
			init(){
				this.$store.dispatch('reqNewsList', this.reqData).then(res=>{
					this.loading=false
				})
			},
			onRefresh() { // 上拉刷新
				this.reqData.page = 1
				// this.$store.state.newsList = [] //清空 不然乱插
				this.$store.dispatch('reqNewsList', this.reqData).then(res => {
					this.$refs.fresh.$emit('freshEnd') //刷新完毕
					this.$refs.pull.$emit('reLoad')
				})
			},
			isMine(userId){
				if(userId==this.$store.state.User._id){
					return true
				}
			},
			deleteNews(id, title) {
				this.deleteId = id
				vant.Dialog.confirm({
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
				if (!this.isLogin) {
					return vant.Toast('登录后即可发文')
				}
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
			PullLoadVIX,
			PullFreshVIX
		}
	}
</script>

<style scoped>
	.element::-webkit-scrollbar { width: 0 !important }
	.news-box {
		display: flex;
		padding: 0.65rem 0.9375rem;
		border-bottom: #E7EAED 0.1px solid;
		color: #2A313B;
	}
	.news-box:active{
		background-color: #ebebeb6b;
	}
	.newsSlot{
		height: .8rem;
	}

	.gymIcon-delete {
		float: right;
		font-size: 1.45rem;
	}

	.news-content {
		margin-left: .5rem;
	}

	.Top {
		float: right;
		height: .9rem;
		line-height: .8rem;
		font-size: .5rem;
		margin-right: .5rem;
	}

	.news-title {
		margin-bottom: 0.55rem;
	}

	.news-img {
		width: 19rem;
		display: flex;
	}

	.news-img .van-image {
		margin: 0 .2rem;
	}

	.news-bottom {
		color: #C0C7D1;
	}
	.backTop{
		position: fixed;
		top: 59.7vh;
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
		top: 66vh;
		box-shadow: 0 0 7px 0px #7b7b7bcc;
	}

	.gymIcon-write {
		font-size: 1.5625rem;
	}
</style>
