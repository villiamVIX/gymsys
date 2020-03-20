<template>
	<div id="homeTopBar">
		<div class="left profile" >
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
	import {mapState} from 'vuex'
	export default {
		name: 'HomeTopBar',
		data() {
			return {
				Username: '',
				getName:false
			}
		},
		watch:{
			'$store.state.User.username':function(){
				this.showName
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
					this.Username = Username
				}
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
