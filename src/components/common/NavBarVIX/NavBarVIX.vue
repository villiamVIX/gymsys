<template>
  <div id="nav-bar">
	  <div class="nav-left"><slot name="left"></slot></div>
      <div class="nav-center"><slot name="center"></slot></div>
      <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
  #nav-bar{
  	position: fixed;
  	display: flex;
  	z-index: 10;
  	height: 44px;
  	background: white;
  	line-height: 44px;
  	text-align: center;
	width: 100%;
  }
  .nav-center{
  	flex: 1;
  }
  .nav-left{
  	width:60px;
  }
  .nav-right{
  	width:60px;
  }
</style>
