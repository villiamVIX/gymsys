<template>
	<div id="News">
		<NewsNav :title='title'></NewsNav>
		<div id="NewsBar">
			<van-skeleton title avatar :row="28" :loading="loading" title-width='40%' avatar-size='40' row-width=''>
				<div class="LoadCont">
					<NewsInfoBar :loadInfo='loadInfo'></NewsInfoBar>
					<NewsArticle :article='article' @ArtcileFinish='ArtcileFinish'></NewsArticle>
				</div>
			</van-skeleton>
		</div>
	</div>
</template>

<script>
	import NewsNav from './childCpn/NewsNav.vue'
	import NewsInfoBar from './childCpn/NewsInfoBar.vue'
	import NewsArticle from './childCpn/NewsArticle.vue'
	import Vue from 'vue';
	import {
		Skeleton
	} from 'vant';

	Vue.use(Skeleton);
	// 网络请求
	import {
		getNews,
		LoadInfo
	} from 'network/NetNews.js'
	export default {
		name: 'News',
		data() {
			return {
				newsId: '',
				title: '',
				loadInfo: {},
				article: '',
				loading: true
			}
		},
		created() {
			this.loading = true;
			this.getNews() // 同名本地的getnews
			// this.contLoad()
		},
		methods: {
			infoFinish() {
				console.log("infoFinish")
			},
			ArtcileFinish() {
				console.log('ArtcileFinish')
			},
			getNews() {
				this.newsId = this.$route.params.newsId
				console.log(this.newsId)
				getNews(this.newsId).then(res => {
					let data = res.data
					console.log(data)
					this.loadInfo = new LoadInfo(data) //构造器取出的数据
					this.title = data.desc
					this.article = data.article
					console.log(this.loadInfo)
				})
			}
		},
		components: {
			NewsNav,
			NewsInfoBar,
			NewsArticle
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;

			}, 1500)
		}
	}
</script>

<style scoped>
	#NewsBar {
		padding-top: 44px;
	}
</style>
