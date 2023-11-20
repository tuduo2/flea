<template>
	<div>
		111
	</div>
  <div>
    <sidebar id="sidabar"></sidebar>
	<div id="viem-main">
		121212312
		<router-view></router-view>
	</div>
  </div>
</template>
<script setup lang="ts">
import sidebar from './Sidebar.vue';
</script>

<style scoped>
	#sidabar{
		float: left;
		width:8%;
		border-radius:10px;
		height: 80vh;
	}
	#viem-main{
		float: right;
		/* width: 60%; */
		width: 75vw;
		height: 80vh;
		background-color: blue;
		margin-right: 30px;
	}
</style>