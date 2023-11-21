<template>
  <div>
    <mdui-card clickable style="width: 200px;height: 204px">
      <img :src="imgurl" style="width: 200px;height: 150px;object-fit: cover;">
      <div class="bootm">
        {{ props.name }}
        <div class="bootm-price">
          ¥ {{ props.price }}
        </div>
      </div>
    </mdui-card>

  </div>
</template>

<script setup lang="ts">
import { Getimg } from '../../../apis'
import { onMounted, ref } from 'vue';
onMounted(() => {
  const token = localStorage.getItem('token');
  console.log(props.imgurl)
  Getimg(props.imgurl, token)
    .then(
      res => {
        console.log(res)
        var url = URL.createObjectURL(res);
        imgurl.value = url

      }
    )
})
const imgurl = ref('')
const props = defineProps({
  imgurl: String,
  name: String,
  price: Number
})
</script>

<style scoped>
.bootm {
  position: relative;
  font-size: x-large;
}

.bootm-price {
  position: absolute;
  right: 20px;
  bottom: 1px;
  font-size: large;
  color: #f50;
}
</style>