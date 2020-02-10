<template>
	<div id="home">
		<HomeTopBar @isShowLogin='isShowLogin'></HomeTopBar>
		<van-dialog :key="reKey" v-model="isShow" title="欢迎登录" showCancelButton :beforeClose='beforeClose'>
			<Login ref='Login'></Login>
		</van-dialog>
		<HomeSwiper></HomeSwiper>
		<HomeGrid></HomeGrid>
		<HomeTip></HomeTip>
		<FatHr></FatHr>
		<HomeNews :newsDetail='newsDetail'></HomeNews>
		<FatHr></FatHr>
		<HomeRec :recommend='recommend'></HomeRec>
		<div v-for="item in 1000">{{item}}</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Dialog,Toast
	} from 'vant';

	import HomeTopBar from './childCpn/HomeTopBar'
	import HomeSwiper from './childCpn/HomeSwiper'
	import HomeGrid from './childCpn/HomeGrid'
	import HomeTip from './childCpn/HomeTip'
	import HomeNews from './childCpn/HomeNews'
	import HomeRec from './childCpn/HomeRec'

	import FatHr from 'components/common/FatHr/FatHr.vue'
	import Login from 'components/common/Account/Login.vue'
	// 接口数据
	import {
		getHomeNews
	} from 'network/NetHome.js'
	// import {NetLogin} from 'network/NetLogin.js'
	
	Vue.use(Dialog).use(Toast);
	export default {

		created() {
			this.getHomeNews()
		},
		data() {
			return {
				newsDetail: [],
				recommend: {},
				isShow: false,
				// accountData:{}
				reKey: 1,
				username:""
			}
		},
		methods: {
			getHomeNews() {
				// 面向getmultidata请求
				getHomeNews().then(res => {
					this.newsDetail = res.data
					this.recommend = res.data[0].recommend
				})
			},
			isShowLogin() {
				this.isShow = !this.isShow //登录框显示
			},
			beforeClose(action, done) {
				let LoginForm = this.$refs.Login.$data.loginForm
				var AccData = { ...LoginForm
				} //整理取出账号密码 
				console.log(LoginForm)
				if (action === 'confirm') {
					if (!LoginForm.username || LoginForm.userpass) {
						this.$toast("请输入用户名和密码")
						done(false) //不关闭弹框
					} else {
						// NetLogin(AccData).then(res => {
						// 		console.log('res=>', res);
					// 			let data = res
					// 			if (data.code === 10000) {
					// 				sessionStorage.setItem("authorization", data.data.sessionId)
					// 				localStorage.setItem("nickname", data.data.nickname)
					// 				localStorage.setItem("Role",data.data.role[0])
					// 				this.username=data.data.nickname
					// 				this.$toast("登录成功!")
					// 				window.location.href = '/' //成功滚回主页
					// 			} else {
					// 				this.$toast(data.message) //没成跳错误信息
					// 				setTimeout(()=>{done()},1500)
					// 			}
					// 		})
					}
				} else if (action === 'cancel') {
					done() //关闭
				}
			}
		},
		components: {
			HomeTopBar,
			HomeSwiper,
			HomeGrid,
			HomeTip,
			HomeNews,
			FatHr,
			HomeRec,
			Login,
			// [Dialog.Component.name]: Dialog.Component
		}
	}
</script>

<style scoped>
	.home {
		height: 100vh;
		
	}
</style>
