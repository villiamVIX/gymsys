<template>
	<div>
		<div id="newslist">
			<div class="news-box" v-for="(item,index) in newsDetail" :key="index" @click.stop="ToNews(item._id)">
				<div class="news-avatar">
					<van-image width="  2rem" height=" 2rem" :src="baseUrl+item.avatar" round lazy-load />
				</div>
				<div class="news-content">
					<div class="news-auther">
						<span>{{item.author}}</span>
					</div>
					<div class="news-title">
						<h2 class="van-ellipsis">{{item.desc}}</h2>
					</div>
					<div class="news-img">
						<van-image class="van-image" width=" 10rem" height=" 10rem" v-for="(i,k) in item.img" :key='k' :src="baseUrl+i"
						 fit='cover' lazy-load @click.stop='showImg(i)'>
						</van-image>
						<!-- 套一层DIV为了防止冒泡  先阻止了组件的点击遮罩关闭 -->
						<div @click.stop='clickHover'>
							<van-popup v-model="isShowImg" :overlay-style="{ backgroundColor: 'white' }" :style="{ height: '30rem'} ,{width: '104%'}"
							 :close-on-click-overlay=false>
								<van-image class="van-image" :src="baseUrl+popImg" @click.stop='prevent'>
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
							{{item.reply.floor}}
							<i class="gymIcon-praise">
								<span v-for="i in 2" :class="'path'+i"></span>
							</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Lazyload,
		Image,
		Popup
	} from 'vant';
	import {
		mapState
	} from 'vuex'

	Vue.use(Lazyload).use(Image).use(Popup)
	export default {
		created() {
			this.$store.dispatch('reqHomeNews')
			console.log(this.newsDetail)
		},
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
				ss: false,
				isShowImg: false,
				popImg: "",
			}
		},
		methods: {
			changeSs() {
				this.ss = !this.ss
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
			}
		},
		computed: {
			...mapState(['newsDetail'])
		},
		components: {

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
	.news-bottom{
		color: #C0C7D1;
	}
</style>
