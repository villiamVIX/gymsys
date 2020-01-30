<template>
	<div id="Login">
		<div class="loginForm" :model='loginForm'>
			<label for="">账号</label>
			<input type="text" class="username" placeholder="账号" v-model="loginForm.username" autofocus>
			<label for="">密码</label>
			<a class="pull-right" href="/forgot">忘记密码？</a>
			<input type="password" class="password" autocomplete='password' v-model="loginForm.password" placeholder="Password">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					username: '',
					password: ''
				}
			}
		},
		updated(){
			console.log(this.loginForm)
		}
	}
</script>

<style>
</style>
