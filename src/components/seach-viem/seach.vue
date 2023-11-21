<template>
	<mdui-text-field clearable label="搜索商品" :value="seachvalue" @change="seachnewliem" id="seach"></mdui-text-field>
	<div style=" height:89%; overflow: auto;" class="map">
		<comcard v-for="(item, index) in seachliem" :key="index" :imgurl="item.image_id" :name="item.name" :price="item.price"
			class="card" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import comcard from '../mainviem/Home-view/comcard.vue'
import { getAllOrderList, searchOrder } from '../../apis'
const seachvalue = ref(null)
const seachliem = ref([])
onMounted(() => {
	getAllOrderList()
		.then(
			res => {
				console.log(res)
				seachliem.value = res.data
			}
		)
		.catch(
			err => {
				console.log(err)
			}
		)
})
function seachnewliem(event) {
	// const token = localStorage.getItem('token');
	searchOrder(event.target.value)
		.then(
			res => {
				seachliem.value = res.data
			}
		)
		.catch(
			err => {
				console.log(err)
			}
		)
}
</script>

<style scoped>
.card {
	display: inline-block;
	margin: 15px;
	margin-left: 40px;
}

.map::-webkit-scrollbar {
	display: none;
	/* 隐藏滚动条 */
}
</style>