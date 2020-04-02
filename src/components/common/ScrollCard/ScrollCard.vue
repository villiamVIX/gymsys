<template>
	<div class="scroll-tap">
		<slot></slot>
		</div>
</template>

<script>
</script>

<style scoped>
	.scroll-tap {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		padding: 15rem 1rem;
		height: 100vh;
		overflow: scroll;
	}
</style>
