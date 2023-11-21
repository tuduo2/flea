<template>
	这里是商品
	<addCombtn id="addBtn" @click="openform" />
	<mdui-dialog close-on-overlay-click ref="dialog" id="exampleDialog">
		<mdui-top-app-bar slot="header">
			<mdui-list-item headline="添加商品" nonclickable></mdui-list-item>
		</mdui-top-app-bar>
		<div>
			<addcommodfrom></addcommodfrom>
		</div>
		<mdui-button slot="action" variant="tonal">添加</mdui-button>
	</mdui-dialog>
</template>

<script lang="ts" setup>
import addCombtn from './addComBtn.vue';
import { onMounted, ref } from "vue";
import addcommodfrom from './Comminfo/addcommodfrom.vue'
const dialog = ref(null);

onMounted(() => {
	console.log(dialog.value)
})
function openform() {
	dialog.value.open = true
}
</script>

<style scoped>
#addBtn {
	position: absolute;
	bottom: 20vh;
	right: 5vw;
}
</style>