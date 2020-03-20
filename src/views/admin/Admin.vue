<template>
	<div>
		<AdminTopBar></AdminTopBar>
		<router-view></router-view>
	</div>
</template>

<script>
	import AdminTopBar from './childCpn/AdminTopBar'
	export default {
		components: {
			AdminTopBar
		},
	}
</script>

<style>
</style>
