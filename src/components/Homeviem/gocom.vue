<template>
  <div>
	<mdui-button variant="outlined" class="btnmian" @click="gocom">
		<svg t="1700529849388" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2581" width="32" height="32"><path d="M832 256H640V160.8c0-17.6-14.4-32.8-32.8-32.8H416c-17.6 0-32.8 14.4-32.8 32.8V256H192l-64 576c0 35.2 28.8 64 64 64h640c35.2 0 64-28.8 64-64l-64-576z m-384-64h128v64H448v-64z m326.4 128l56.8 512H192l56.8-512" p-id="2582"></path><path d="M447.2 352.8H384V416h63.2v-63.2zM640 352.8h-63.2V416H640v-63.2z" p-id="2583"></path></svg>
	</mdui-button>
  </div>
</template>

<script setup lang="ts">
import router from '../../router'
function gocom(){
	router.push({
		name:'commod'
	})
}
</script>

<style scoped>
	.btnmian{
		width: 6vw;
		height: 8vh;
		border-radius: 10px;
	}
</style>