<template>
	<div>
	<transition name="van-slide-right">
		<div id="News" v-show="showNews">
			<NewsNav :title='title'></NewsNav>
			<div id="NewsBar">
				<van-skeleton title avatar :row="28" :loading="loading" title-width='40%' avatar-size='40' row-width=''>
					<div class="LoadCont">
						<NewsInfoBar :loadInfo='loadInfo'></NewsInfoBar>
						<NewsArticle :article='article' @ArtcileFinish='ArtcileFinish'></NewsArticle>
						<NewsImg :imgs='img'></NewsImg>
					</div>
				</van-skeleton>
			</div>
		</div>
	</transition>
	</div>
</template>

<script>
	import NewsNav from './childCpn/NewsNav.vue'
	import NewsInfoBar from './childCpn/NewsInfoBar.vue'
	import NewsArticle from './childCpn/NewsArticle.vue'
	import NewsImg from './childCpn/NewsImg.vue'
	
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
				img:undefined,
				loading: true,
				showNews:false
			}
		},
		created() {
			this.loading = true;
			this.getNews() // 同名本地的getnews
			// this.contLoad()
		},
		beforeUpdate(){
			this.showNews=true
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
					this.img =data.img
					console.log(this.loadInfo)
				})
			}
		},
		components: {
			NewsNav,
			NewsInfoBar,
			NewsArticle,
			NewsImg
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;

			}, 650)
		}
	}
</script>

<style scoped>
	#NewsBar {
		padding-top: 44px;
	}
</style>
