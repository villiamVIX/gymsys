<template>
	<div id="homeTopBar">
		<div class="left profile" @click="ClickLogin">
			<img src="~assets/img/home/profile.png" />
			<span>{{}}</span>
		</div>
		<div class="right location">
			<span id="loaclSpan">{{}}</span>
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
		methods:{
			ClickLogin(){
				this.$emit('isShowLogin')
			}
		}
	}
</script>

<style scoped>
	#homeTopBar{
		height: 44px;
	}
	#homeTopBar img{
		height: 1.75rem;
		width: 1.75rem;
	}
</style>
