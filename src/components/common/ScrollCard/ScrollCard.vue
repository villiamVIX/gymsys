<template>
	<div id="scroll-tap">
		<div id="scroll-content">
		<slot></slot>
			
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			scrollHeight: {
				type: Number,
				default: 8
			}
		},
		watch: {
			scrollHeight: function(val, old) {
				console.log(val, old)
				let scrollTap = document.getElementById('scroll-content')
				scrollTap.style.marginTop = val + 'rem'
			}
		}
	}
</script>

<style scoped>
	#scroll-tap {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		padding: 15rem 1rem;
		height: 100vh;
		overflow-y: scroll;
	}
	#scroll-content{
		
		
	}
</style>
