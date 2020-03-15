<template>
	<div id="NewsInfoBar">
		<div class="avatar-box">
			<img :src="loadInfo.avatar" />
		</div>
		<div class="info-box">
			<span class="info-author">楼主:{{loadInfo.author}}</span>
			<p class="info-date">发布时间:{{loadInfo.date}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "NewsInfoBar",
		props: {
			loadInfo: {
				type: Object,
			}
		}
	}
</script>

<style scoped>
	#NewsInfoBar {
		padding: 3px 10px;
		display: inline-flex;
	}

	.avatar-box img {
		height: 40px;
		width: 40px;
	}

	.info-box {
		white-space: normal;
		direction: left;
		padding-left: 14px;
	}

	.info-author {
		font-size: 16px;
		font-weight: bold;
		font-family: sans-serif;
	}

	.info-date {
		margin-top: 5px;
		font-size: 10px;
	}
</style>
