<template>
	<div>
		<el-button @click='clickPay'>立即支付</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
			clickPay(){
				this.code = ''
				// var local = window.location.href // 获取页面url
				var local='http://api.xdclass.net'
				
				var appid = 'wxr83v2rb19j0u674s'
				this.code = getUrlCode().code // 截取code
				if (this.code == null || this.code === '') {
					window.location.href =
						`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${local}&response_type=code&scope=snsapi_base&state=123#wechat_redirect`
				};
				
				function getUrlCode() {
					var url = location.search 
					// this.winUrl = url
					// alert(this.winUrl)
					var theRequest = new Object()
					if (url.indexOf("?") != -1) {
						var str = url.substr(1)
						var strs = str.split("&")
						for (var i = 0; i < strs.length; i++) {
							theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1])
						}
					}
					return theRequest
				};
			}
			}
	}
</script>

<style>
</style>
