<template>
	<div id="Pubilsh">
		<NewsNav class='newsNav' :title="'发布场馆资讯'" :right='false'></NewsNav>
		<div class="publish-box">
			<div class="publish-title">
				<input placeholder="标题" v-model="publish.title" />
			</div>
			<div class="publish-article">
				<textarea class="article" placeholder="写些什么吧" v-model="publish.article"></textarea>
			</div>
		</div>
		<van-field name="uploader">
			<template #input>
				<van-uploader  v-model="publish.img" :before-read="beforeRead" 
				multiple :max-count="2"
				 accept="image/png, image/jpeg" />
			</template>
		</van-field>
		<van-button class='btn' type="primary" size="large" @click='ClickPublish'>发布</van-button>

	</div>
</template>

<script>

	import NewsNav from './childCpn/NewsNav.vue'
	import {
		checkLoginMixin
	} from 'common/mixin.js'

	export default {
		mixins: [checkLoginMixin],
		data() {
			return {
				publish: {
					img: [{url:'https://img.yzcdn.cn/vant/leaf.jpg'}],
					title: undefined,
					article: undefined,
				},
					files:[],
					
			};
		},
		components: {
			NewsNav
		},
		methods: {
			ClickPublish() {
				if(!this.isLogin){
					return vant.Toast('请先登录');
				}
				let files=this.publish.img
				var Form =new FormData()
				for(let p=0;p<files.length;p++){ //循环放入Form中 不然数组塞不进FORM  
					Form.append('imgs'+p,files[p].file)
				}

				let {
					avatar,
					username
				} = this.$store.state.User
				
				let publish=this.publish
				Form.append('avatar',avatar)
				Form.append('username',username)
				Form.append('title',publish.title)
				Form.append('article',publish.article)
				
				// console.log(Form.get("imgs"))
				this.$store.dispatch('reqPublishNews', Form)
				this.publish.img=[]
			},
		
			beforeRead(file) {
				if (file.type !== 'image/jpeg'&'image/png' ) {
					vant.Toast('请上传 jpg/png 格式图片');
					return false;
				}
				return true;
			},
		}
	};
</script>

<style scoped>
	#Pubilsh {
		font-size: 1rem;
	}

	.newsNav {
		/* margin: 44px; */
	}

	.publish-box {
		margin-top: 44px;
	}

	.publish-title input {
		height: 2.8rem;
		width: 100vw;
		/* border-color: #41b88361; */
		border: none;
		border-bottom: #41b88361 solid;
		outline: none;
		border-radius: 0;
	}

	.publish-article {
		margin-top: 0.9rem;
	}

	.article {
		height: 18.8rem;
		width: 99.5vw;
		/* border-color: #41b88361; */
		border: #41b88361 solid;
		outline: none;
		border-radius: 0.1875rem;
	}
</style>
