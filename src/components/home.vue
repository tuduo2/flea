<template>
	<div>
		 
	</div>
  <div>
    <sidebar id="sidabar"></sidebar>
	<div id="viem-main">
		<router-view></router-view>
	</div>
  </div>
</template>
<script setup lang="ts">
import sidebar from './Sidebar.vue';
import router from './router'
</script>

<style scoped>
	#sidabar{
		float: left;
		width:8%;
		border-radius:10px;
		height: 85vh;
	}
	#viem-main{
		float: right;
		/* width: 60%; */
		width: 80vw;
		height: 85vh;
		background-color: aqua;
		margin-right: 40px;
	}
</style>