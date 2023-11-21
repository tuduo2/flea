import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'
import 'element-plus/dist/index.css'
import 'mdui/mdui.css';
import 'mdui';

import VueRouter from 'vue-router';
import router from './router';

const app =  createApp(App);
app.use(router)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
