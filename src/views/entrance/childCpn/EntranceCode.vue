<template>
	<CardVIX class='entrance-code'>

		<h1>人脸识别入场</h1>
		<div class="setEntranceAva">
			<imgCut @imageBase64='getImg'></imgCut>
		</div>
		<div class="code-tip">
			<p>· 人脸识别由百度Ai开放平台提供技术支持</p>
			<p>· 识别前确保您已在<a href="/profile/login">个人资料</a>中设置入场头像</p>
			<p>· 识别通过即可记入当日打卡</p>
			<p>· 当日只可打卡一次哦</p>
			<p>· 打卡记录可在<a href="/profile/calendar">打卡墙</a>中查看</p>
		</div>
	</CardVIX>
</template>


<script>
	import CardVIX from 'components/common/CardVIX/CardVIX.vue'
	import {
		checkEntranceAvatar,
		EntranceClock
	} from 'network/NetEntrance.js'
	import imgCut from './imgCut.vue'


	export default {
		data() {
			return {
				baseUrl: this.GLOBAL.baseUrl,
			}
		},
		methods: {
			getImg(imgb64) {
				const toast = vant.Toast.loading({
					duration: 0, // 持续展示 toast
					forbidClick: true,
					message: '识别中...'
				});
				const closeToast=setTimeout(()=>{
					console.log(toast)
					vant.Toast.clear();
				},5000)
				clearTimeout(closeToast)
				let dom=document.getElementsByClassName('setEntranceAva')[0].childNodes[0].childNodes[1]
				dom.style.marginLeft='1.8rem'
				let img = imgb64.split(',')[1]
				checkEntranceAvatar(img).then(res => {
					console.log(res.data.result.user_list[0])
					console.log(res)
					let second = 3;
					const timer = setInterval(() => {
						second--;
						if (second) {
							toast.message = `${res.message}
						 ${second}秒后自动打卡`;
						} else {
							this.reqEntranceClock()
							clearInterval(timer);
							// 手动清除 Toast
							vant.Toast.clear();
						}
					}, 1000);
				})
			},
			reqEntranceClock() {
				EntranceClock().then(res => {
					console.log(res)
					vant.Toast(res.message)
				})
			}
		},
		components: {
			CardVIX,
			imgCut
		}
	}
</script>

<style scoped>
	.entrance-code {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1.562rem 0.937rem;
	}

	.entrance-code h1 {
		flex: 1;
		color: #38383B;
		margin: 15px auto;
	}
	
	.setEntranceAva{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20vw;
		
	}
	.avatar-label {
		font-size: 1rem;
		border-radius: .21rem;
		line-height: 3rem;
		color: white;
		background: #07c160;
		padding: .05rem .185rem;
	}

	.code-tip {
		padding-bottom: 27px;
		flex: 1;
		margin: auto;
		color: #9B9BA0;
	}

	.code-tip img {
		width: 15px;
		height: 15px;
	}
</style>
