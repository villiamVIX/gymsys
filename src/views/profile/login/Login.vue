<template>
	<div class="loginForm" :model='loginForm'>
		<div class="Login-icon">
			<img src="~assets/img/logo.png" />
		</div>
		<section class="switch-type">
			<span :class="{activeType:loginMode}" @click="changeMode(true)">验证码登录</span>
			<span :class="{activeType:!loginMode}" @click="changeMode(false)">密码登录</span>
		</section>
		<div v-show="loginMode" class="mod">
			<section class="login-form">
				<div class="phoneCheck">
					<input maxlength="11" type="tel" class="username" placeholder="手机号" v-model="phoneForm.phone" autofocus style="width:56vw">
					<button class="BtnDef" :disabled="!phoneRight" v-if="!countDown" :class="{BtnOk:phoneRight}" @click.prevent="countLoad">发送验证码</button>
					<button class="BtnDef" v-else="countDown" disabled="disabled">已发送 {{countDown}}s</button>
				</div>
				<input type="text" class="password" maxlength="5" autocomplete='password' v-model="phoneForm.randomCode"
				 placeholder="验证码">
			</section>
		</div>
		<div v-show='!loginMode' class="mod">
			<section class="login-form">
				<input contenteditable="true" type="text" class="username" placeholder="用户名" v-model="loginForm.username" autofocus>
				<div class="psw-switch">
					<input v-show="pswShow" type="password" class="password" autocomplete='password' v-model="loginForm.password"
					 placeholder="密码">
					<input v-show="!pswShow" type="text" class="password" autocomplete='password' v-model="loginForm.password"
					 placeholder="密码">
					<img @click.prevent="PswMode" v-show="!pswShow" src="~assets/img/profile/login/show.png" />
					<img @click.prevent="PswMode" v-show="pswShow" src="~assets/img/profile/login/hide.png" />
				</div>
				<div id="captcheCode">
					<input type="text" style="width: 46vw;" class="checkCode" v-model="loginForm.checkCode" placeholder="验证码">
					<img ref='captcheImg' style="width: 30vw;" src="" @click.prevent="flashCaptche" />
				</div>
			</section>
		</div>
		<el-button type="success" class='btn' size="large" @click='Login'>登录</el-button>
		<el-button type="primary" class='btn' size="large" @click='back' plain>返回</el-button>

	</div>
</template>

<script>
	import {
		LoginCaptche,
		phoneCode,
		phoneLogin,
		pwdLogin
	} from 'network/NetLogin.js'
	import {
		checkLoginMixin
	} from 'common/mixin.js'


	export default {
		mixins: [checkLoginMixin],
		data() {
			return {
				baseUrl:this.GLOBAL.baseUrl,
				countDown: 0,
				loginMode: true,
				pswShow: true,
				catpcheImg: '',
				loginForm: {
					username: '',
					password: '',
					checkCode: ''
				},
				phoneForm: {
					phone: '',
					randomCode: ''
				},
				typeNow: false
			}
		},
		mounted() {
			this.flashCaptche()
		},
		updated() {
			// console.log(this.loginForm)
			if (this.phoneForm.phone.length == 11) {
				if (this.typeNow == false) { //去调用自动发送
					if (this.phoneRight) {
						this.countLoad()
						this.typeNow = true
					}
				}
			}
		},
		computed: {
			phoneRight() {
				return /^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.phoneForm.phone)
			},
			randomCodeRight() {
				return /^\d{5}$/.test(this.phoneForm.randomCode)
			}
		},
		methods: {
			flashCaptche() { //发动态图片验证码1
				this.$refs.captcheImg.src = this.baseUrl+"/users/api/login/captche?time=" + new Date()
			},
			PswMode() { //切换密码是否隐藏 
				this.pswShow = !this.pswShow
			},
			changeMode(flag) { //切换登录模式
				this.loginMode = flag
			},
			countLoad() { //发送短信之后倒计时 和check模块
				phoneCode(this.phoneForm.phone).then(res => {
					console.log(res)
					// alert('验证码：' + res.randomCode || "")
					this.phoneForm.randomCode = res.randomCode
				})
				this.countDown = 5
				let timer = setInterval(() => {
					this.countDown--
					if (this.countDown === 0) {
						clearInterval(timer)
					}
				}, 1000)
			},
			back() {
				this.$router.back()
			},
			Login() { //登录按钮点击后
				if (this.loginMode === true) {
					if (this.phoneForm.phone.length < 11) {
						vant.Toast('输入完整手机号码')
						return;
					} else if (!this.phoneRight) {
						vant.Toast('输入正确手机号码')
						return;
					}
					if (!this.phoneForm.randomCode) {
						vant.Toast('输入完整验证码')
						return;
					} else if (!this.randomCodeRight) {
						console.log(this.phoneForm.randomCode)
						vant.Toast('输入正确验证码')
						return;
					}

					let {
						phone,
						randomCode
					} = this.phoneForm //按需拨取出

					phoneLogin(phone, randomCode).then(res => { // 网络请求
						console.log(res.data)
						// vant.Toast(res.data.message)
						let {
							phone,
							username,
							_id,
							deadLine,
							avatar,
							role
						} = res.data
						this.$store.dispatch('rewriteUserInfo', {
							phone: phone || '',
							_id: _id,
							username: username,
							deadline: deadLine,
							avatar: avatar,
							role: role
						})
						this.refresh()
					})
					console.log(phone, randomCode)
				} else {
					// 账号登陆
					if (!this.loginForm.username || !this.loginForm.password || !this.loginForm.checkCode) {
						vant.Toast('输入完整登陆信息')
						return;
					}
					let {
						username,
						password,
						checkCode
					} = this.loginForm //按需拨取出

					pwdLogin(username, password, checkCode).then(res => {
						console.log(res)
						// vant.Toast(res.data.message)
						let {
							phone,
							username,
							_id,
							deadLine,
							avatar
						} = res.data
						this.$store.dispatch('rewriteUserInfo', {
							phone: phone || '',
							_id: _id,
							username: username,
							deadline: deadLine,
							avatar: avatar
						})
						this.refresh()
					})
				}
			},
			refresh() {
				this.$router.replace('/')
				location.reload()
			}
		},

	}
</script>

<style scoped>
	.loginForm {
		font: 15px 'Microsoft YaHei', arial, tahoma, \5b8b\4f53, sans-serif;
		height: 70vh;
		display: flex;
		flex-direction: column;
		display: -webkit-flex;
		align-items: center;
		justify-content: center;
	}

	.Login-icon {
		margin-top: 50px;
	}

	.Login-icon img {
		height: 6.25rem;
		width: 6.25rem;
	}

	.loginForm section {
		flex: 1;
	}

	.switch-type span {
		padding: 8px 7.5px;
	}

	.activeType {
		border-bottom: 3px #41b88361 dashed;
	}

	.login-form {
		display: flex;
		display: -webkit-flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.phoneCheck {
		float: left;

	}

	.phoneCheck input {
		float: left;
		width: 20%;
	}

	.BtnDef {
		color: gray;
	}

	.BtnOk {
		color: #41b883;
	}

	.phoneCheck button {
		width: 20vw;
		border: none;
		border-bottom: #41b88361 solid;
		height: 2.8rem;
		background-color: white;
	}

	.login-form input {
		height: 2.8rem;
		width: 76vw;
		border-color: #41b88361;
		border: none;
		border-bottom: #41b88361 solid;
		outline: none;
		border-radius: 0;
	}

	.psw-switch {
		float: left;
	}

	.psw-switch input {
		width: 70vw;
		float: left;
	}

	.psw-switch img {
		border: none;
		/* width: 18px; */
		border-bottom: #41b88361 solid;
		padding: 8px 3px;
		height: 39px;
		margin-top: 25.8px;
		background-color: white;
	}

	#captcheCode {
		float: left;
	}

	#captcheCode input {
		float: left;
	}

	#captcheCode img {
		border: none;
		border-bottom: #41b88361 solid;
		height: 44px;
		margin-top: 0.85px;
		background-color: white;
	}

	.password {
		margin: 20px 0;
	}
	
	.btn{
		width: 76vw;
		margin: 15px 0;
	}
	.btn:first-of-type {
		
		background-color: #07c160;
	}
	
</style>
