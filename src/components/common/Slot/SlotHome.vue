<template>
	<div class="recommand-wrap">
		<div class="title">
			<div class="title-img">
				<slot name='title-img'></slot>
			</div>
			<div class="title-left">
				<slot name='title-left'>
				</slot>
			</div>
			<div class="title-right">
				<slot name='title-right'>
				</slot>
			</div>
		</div>
		<slot name="slot-content"></slot>
	</div>
</template>

<script>
</script>

<style scoped>
	.title {
		display: flex;
		padding: 5px 0;
		box-sizing: border-box;
	}

	.title-img img{
		height: 19px;
		width:  19px;
		margin: 0 5px;
	}

	.title-left {
		font-size: 16px;
		font-weight: bold;
		margin-top: 2px;
		
	}

	.title-right {
		position: absolute;
		right: 5px;
		font-size: 13px;
		color: gray;
		margin-top: 3px;
	}
</style>
