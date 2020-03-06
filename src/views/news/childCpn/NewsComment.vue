<template>
	<div id="newComment">
		<div class="comment-box" v-for='(item,index) in reply.comment' :key="index">
			<van-swipe-cell>
				<div class="comment-inBox">
					<div class="comment-avatar">
						<van-image width="  2rem" height=" 2rem" :src="baseUrl+item.avatar" round lazy-load />
					</div>
					<div class="comment-detail">
						<div class="comment-name">
							<span>{{item.username}}</span>
						</div>
						<div class="comment-info">
							<span>{{item.floor}}楼</span>
							<span class="time">{{item.date |caldate}}前</span>
						</div>
						<div class="comment-content">
							<p>{{item.content}}</p>
						</div>
					</div>
				</div>
				<template slot="right">
					<van-button square type="danger"
					@click='clickDelete(item.floor)'
					 text="删除" v-if='item.userId==userId' />
				</template>
			</van-swipe-cell>
		</div>
		<div class="text-box" :class="isInput?'safeAera':''">
			<textarea class="comment-text" :disabled='!isLogin' @focus="textareaFocus" @blur="textareaBlur" :placeholder="isLogin?'回复楼主' :'登录后可回复哦'"
			 v-model="content"></textarea>
			<i class="gymIcon-send" @click="SendComment">
				<span class="path1"></span>
				<span class="path2"></span>
			</i>
		</div>

	</div>
</template>

<script>
	import Vue from 'vue'
	import {
		Toast,
		SwipeCell,
		Button
	} from 'vant'
	import {
		checkLoginMixin
	} from 'common/mixin.js'
	Vue.use(Toast).use(SwipeCell).use(Button)
	
	export default {
		mixins: [checkLoginMixin],
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
				isInput: false,
				content: '',
				newsId: this.$route.params.newsId,
				userId: this.$store.state.User._id,
				floor: this.reply.floor,
				date: 121
			}
		},
		created() {
			this.$store.dispatch('reqNews', this.newsId) //重新获取数据，数据驱动dom重新弄加载
			// console.log(this.floor)
		},
		filters: {
			caldate: function(date) {
				// let d = (+new Date() - date) / 1000
				let d=155440
				let Day = parseInt(d / 3600 / 24)
				let Hour = parseInt((d - (Day * 3600 * 24)) / 3600)
				let Min = parseInt((d - (Day * 3600 * 24) - (Hour * 3600)) / 60)
				let Second= parseInt((d-((Day * 3600 * 24)+(Hour*3600)+(Min*60))))
				
				console.log('天'+Day+'小时'+Hour+'***分钟'+Min+'***秒'+Second)
				
				if (Number(d)<60 && Number(Second)>0){
					return Second+'秒'
				}else if (Number(d)<3600 && Number(Second)>0)  {
						return Min + '分钟'
				}else if(Number(d)<86400 && Number(Second)>0){
					return Hour +'小时'
				}else if(Number(d)>=86400 && Number(Second)>0){
					return Day +'天'
				}else{
					return 0+'秒'
				}
		
			}
		},
		methods: {
			textareaFocus() { //监听是否对焦
				return this.isInput = true
			},
			textareaBlur() {
				this.isInput = false
			},
			SendComment() {
				if (this.content === '') {
					return Toast('先写点什么吧')
				} else {
					let {
						username,
						_id,
						avatar
					} = this.User
					//剥离基础路径
					let avatarUrl = avatar.replace(this.baseUrl, '')
					//楼层数发回给后台
					console.log('用户是' + username)
					let newsId = this.newsId
					let data = {
						data: {
							username: username,
							userId: _id,
							content: this.content,
							avatar: avatarUrl,
							floor: null,
							date: null
						},
						newsId: newsId,
					}
					this.$store.dispatch('reqSendComment', data).then(res => {
						Toast(res)
						this.$store.dispatch('reqNews', newsId) //重新获取数据，数据驱动dom重新弄加载
					}).catch((reject) => {
						Toast(reject)
					}); //提交评论请求
					this.content = '' // 清除输入

				}
			},
			clickDelete(floor){//删除评论
				console.log(floor)
				let data={
					floor:floor,
					_id:this.newsId
					}
				this.$store.dispatch('reqDeleteComment',data).then(res => {
						Toast(res)
						this.$store.dispatch('reqNews', this.newsId) //重新获取数据，数据驱动dom重新弄加载
					}).catch((reject) => {
						Toast(reject)
					}); 
			}
		},
		props: {
			reply: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	#newComment {
		padding: 0 0.5rem 5.1875rem 0.5rem;
		font-size: 0.863rem;
	}

	.comment-inBox {
		display: flex;
	}

	.comment-box {
		padding: 0.45rem 0;
		/* display: flex; */
		border-bottom: 0.02px #e9e8e8 solid;
	}

	.comment-detail {
		margin-left: 0.76rem;
		color: #121212;
	}

	.comment-info {
		color: #8E959E;
		-webkit-text-size-adjust: none;
		font-size: 10px;
		margin: 0.225rem 0;
	}

	.comment-info span {
		margin: 0 0.3125rem 0 0;
	}

	.text-box {
		width: 100%;
		border-top: 1px solid #cfcfcf;
		background-color: #FDFDFD;
		position: fixed;
		bottom: -8px;
		left: 0;
		right: 0;
		z-index: 1111;
		height: 5.1875rem;
		padding: 0.4125rem 0.9375rem;
		display: flex;
	}

	.safeAera {
		height: 8.1875rem;
	}

	.comment-text {
		width: 88%;
		border: 0.5px solid #e7e7e7;
	}

	.comment-send {
		height: 1.25rem;
		margin-top: 1.25rem;
	}

	.gymIcon-send {
		margin: 0.5rem 0 0 0.5rem;
		font-size: 50px;
	}
</style>
