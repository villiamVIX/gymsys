<template>
	<div>
		<transition name="van-slide-right">
			<div id="News" v-show="showNews">
				<NewsNav :title='title'></NewsNav>
				<div id="NewsBar">
					<!-- g骨架屏 -->
					<van-skeleton title avatar :row="28" :loading="loading" title-width='40%' avatar-size='40' row-width=''>
						<div class="LoadCont">
							<NewsInfoBar :loadInfo='loadInfo'></NewsInfoBar>
							<NewsArticle :article='article'></NewsArticle>
							<NewsImg :imgs='imgs'></NewsImg>
						</div>
					</van-skeleton>
				</div>
				<FatHr></FatHr>
				<NewsComment :reply='reply'></NewsComment>
			</div>
		</transition>
	</div>
</template>

<script>
	import NewsNav from './childCpn/NewsNav.vue'
	import NewsInfoBar from './childCpn/NewsInfoBar.vue'
	import NewsArticle from './childCpn/NewsArticle.vue'
	import NewsImg from './childCpn/NewsImg.vue'
	import NewsComment from './childCpn/NewsComment.vue'
	import FatHr from 'components/common/FatHr/FatHr.vue'

	export default {
		name: 'News',
		data() {
			return {
				newsId: '',
				title: '',
				loadInfo: {},
				article: '',
				reply: {},
				imgs: undefined,
				loading: true,
				showNews: false,
				news:{}
			}
		},
		watch:{
			'$store.state.news': function () {
			  this.distributeNews()
			  //监听VUex数据变化后重新渲染  
			},
		},
		beforeUpdate() {
			this.showNews = true
		},
		methods: {
			distributeNews() {
				let data =this.$store.state.news
				// console.log(data)
				this.loadInfo={
					avatar:data.avatar,
					date:data.date,
					author:data.author
				}
				this.imgs = data.imgs
				this.title = data.title
				this.reply = data.reply
				this.article = data.article
			}
		},
		components: {
			NewsNav,
			NewsInfoBar,
			NewsArticle,
			NewsImg,
			NewsComment,
			FatHr
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
