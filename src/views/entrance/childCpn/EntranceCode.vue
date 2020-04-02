<template>
	<div class="entrance-code">
		<h1>健身房入场码</h1>
		<img :src="baseUrl+'/users/entrance'" />
		<div class="code-flash">
			<img src="~assets/img/common/refresh.png" />
			<span>入场码自动 <span class="refreshCode" @click="refreshCode">刷新</span></span>
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		refreshCode(){
			location.reload()
		}
	},
	data() {
		return {
			baseUrl: this.GLOBAL.baseUrl
		}
	},
}
</script>

<style scoped>
	.entrance-code {
		margin: 1.562rem 0.937rem;
		background-color: white;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 7px 0px #27262652;
		padding: 25px  0; 
	}

	.entrance-code h1 {
		flex: 1;
		color: #38383B;
		margin: 15px auto;
	}

	.entrance-code img {
		flex: 1;
		margin: auto;
	}
	.code-flash{
		padding-bottom: 27px;
		flex: 1;
		margin: auto;
		color: #9B9BA0;
		display: flex;

	}
	
	.refreshCode{
		color:#58BE87 ;
	}
	
	.code-flash img{
		width:  15px;
		height: 15px;
	}
</style>
