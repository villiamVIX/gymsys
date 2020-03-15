<template>
	<div>
		
	<Login v-if='!isLogin' ></Login>
	<MyProfile v-else class='MyProfile'  ></MyProfile>
	</div>
</template>

<script>
	import Login from './login/Login.vue'
	import MyProfile from './myProfile/MyProfile'
	import {
		checkLoginMixin
	} from 'common/mixin.js'
	export default {
		components: {
			Login,
			MyProfile
		},
		mixins: [checkLoginMixin],
		methods:{
		}
	}
</script>

<style scoped>
	.MyProfile{
		background-color: #F9F9F9;
	}
</style>
