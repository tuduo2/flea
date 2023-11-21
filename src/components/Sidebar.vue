<script setup lang="ts">
	import goHomebtn from './Homeviem/goHome.vue';
	import goseach from './Homeviem/goseach.vue'
	import godead  from './Homeviem/godead.vue'
	import goliem from './Homeviem/goliem.vue'
	import gocom from './Homeviem/gocom.vue'
</script>

<template>
	<div>
		<goHomebtn class="btngrops"></goHomebtn>
		<goseach class="btngrops"></goseach>
		<gocom class="btngrops"></gocom>
		<goliem class="btngrops"></goliem>
		<godead class="btngrops"></godead>
	</div>
</template>

<style scoped>
*{
	background-color: #BCE4F7;
}
.btngrops{
	width: 100%;
	margin-top:40px;
	display: flex;
	justify-content: center; /* 水平居中 */
	align-items: center; /* 垂直居中 */
}
</style>