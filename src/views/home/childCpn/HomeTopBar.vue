<template>
	<div id="homeTopBar">
		<div class="left profile" @click="ClickLogin">
			<img src="~assets/img/home/profile.png" />
			<span>{{Username}}</span>
		</div>
		<div class="right location">
			<span id="loaclSpan">闽江学院店</span>
			<img src="~assets/img/home/local.png" />
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Button from 'vant/lib/button';
	import 'vant/lib/button/style';
	Vue.use(Button);
	export default {
		name: 'HomeTopBar',
		data() {
			return {
				Username: ''
			}
		},
		mounted() {
			this.showName()
		},
		methods: {
			showName() {
				let Username = localStorage.getItem("nickname")
				let role=localStorage.getItem('Role')
				var Role=''
				switch (role){
					case "admin":
					Role='管理员'
						break;
						case "user":
						Role='会员'
							break;
				}
				if (Username == '') {
					this.Username = '请登录'
				} else {
					this.Username = Role +'-'+ Username
				}
			},
			ClickLogin() {
				let Username = localStorage.getItem("nickname")
				console.log(Username)
				if (Username == null) {
					this.$emit('isShowLogin')
				}else{
					window.location.href = '/'
				}
			},
		},

	}
</script>

<style scoped>
	#homeTopBar {
		height: 44px;
	}

	#homeTopBar img {
		height: 1.75rem;
		width: 1.75rem;
	}
</style>
