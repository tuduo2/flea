<template>
  <div>
    <swipe></swipe>
    <div>
      <comcard class="card-liem" v-for="(item, index) in liemArr" :key="index" :imgurl="item.image_id" :name="item.name"
        :price="item.price">
      </comcard>
    </div>
  </div>
</template>

<script  lang="ts" setup>
import { onMounted, ref } from 'vue';
import swipe from './Home-view/swipe.vue';
import comcard from './Home-view/comcard.vue';
import { getRomOrder } from '../../apis';
onMounted(() => {
  getRomliem()
})
const liemArr = ref([])
function getRomliem() {
  getRomOrder(3)
    .then(
      res => {
        console.log(res.data)
        liemArr.value = res.data
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
}
</script>

<style scoped>
.card-liem {
  display: inline-block;
  margin: 30px;
}
</style>