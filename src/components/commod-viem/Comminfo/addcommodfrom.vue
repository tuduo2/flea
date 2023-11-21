<template>
	<div>

		<form @submit="submitForm">
			<input v-model="formData.name" type="text" placeholder="Name" />
			<input v-model="formData.email" type="email" placeholder="Email" />
			<button type="submit">Submit</button>
		</form>
		<input type="file" accept="image/*" ref="fileInput" style="display: none" @change="upimg" />
		<mdui-button full-width @click="addimg">上传图片</mdui-button>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Upload } from '../../../apis'
const formData = ref({
	name: '',
	email: ''
})
const fileInput = ref(null)// 文件输入框的引用
const previewImageUrl = ref('')// 用于图片的 URL
function addimg() {
	fileInput.value.click();
}
function upimg(event) {
	const token = localStorage.getItem('token');
	const file = event.target.files[0];
	Upload(file, token)
		.then(
			res => {
				console.log(res.data)
			}
		).catch(
			err => {
				console.log(err)
			}
		)
}
function submitForm() {

}
</script>

<style></style>