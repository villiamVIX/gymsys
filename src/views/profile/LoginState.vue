<template>
	<div>
		<transition name="fade-transform" :duration="{ enter: 260, leave: 251 }" mode="out-in">
		<router-view class="router"></router-view>
		</transition>
	</div>
</template>

<script>
</script>

<style scoped>
	.router{
		height: 100vh;
	}

</style>
