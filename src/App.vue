<template>
  <login :changehome="changehome" v-if="islogin" />
  <home v-else />
</template>

<script setup lang="ts">
import '@mdui/icons/clear.js';
import { ref } from 'vue';
import login from './components/login.vue';
import home from './components/home.vue';
import { ipcRenderer } from 'electron'
let islogin = ref(true)
function changehome() {
  islogin.value = !islogin.value
}
function closwin() {
  console.log('121')
  ipcRenderer.send('colswin', '11')
}

</script>

<style scoped>
.top-btn-grm {
  display: flex;
  justify-content: flex-end;
}

.top {
  /* background-color: aqua; */
  height: 4vh;
  width: 100%;
}

.btn {
  z-index: 50;
  -webkit-app-region: no-drag;
}

.btn:hover {
  cursor: hand;
}
</style>