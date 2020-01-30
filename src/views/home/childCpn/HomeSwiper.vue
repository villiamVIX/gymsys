<template>
	<div>
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item, index) in banner" :key="index">
		    <img :src="item.image" />
		  </van-swipe-item>
		</van-swipe>
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	export default {
	  data() {
	    return {
	      banner: [
			  {'image':require('assets/img/home/banner1.png')},
			  {'image':require('assets/img/home/banner2.png')}
		  ]
	    }
	  }
	}
</script>

<style scoped>
	img {
		width: 100%;
		height: 187px;
	}
</style>
