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
	import {mapState} from 'vuex'
	Vue.use(Button);
	export default {
		name: 'HomeTopBar',
		data() {
			return {
				Username: '',
				getName:false
			}
		},
		mounted() {
			this.showName()
		},
		methods: {
			showName() {
				
				let Username=this.User.username
				console.log(this.Username)

				if (Username == undefined) {
					this.Username = '请登录'
				} else {
					this.Username =  Username
				}
			},
			ClickLogin() {
				
			},
		},
		computed:{
			...mapState(['User'])
		}

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
