<template>
	<div id="homeTopBar">
		<div class="left profile" @click="toProfile" >
			<i class="gymIcon-mine"></i>
			<!-- <span>{{Username}}</span> -->
		</div>
		<!-- <div class="right location">
			<span id="loaclSpan">闽江学院店</span>
			<img src="~assets/img/home/local.png" />
		</div> -->
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
			toProfile(){
				this.$router.replace('/profile/login')
			}
		},
		computed:{
			...mapState(['User'])
		}

	}
</script>

<style scoped>
	.profile{
		margin: 0 .43rem;
		font-size: 1.5rem;
		font-weight: bold;
	}
	#homeTopBar {
		height: 44px;
		z-index: 11;
		position: absolute;
		top: 0;
	}

</style>
