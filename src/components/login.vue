<template>
  <div class="main">
    <div>
      <div class="login-title-txt">Welcome</div>
    </div>
    <div class="login-main">
      <mdui-text-field label="账号" class="login-ipt" v-model="fromdata.account" ></mdui-text-field>
      <mdui-text-field label="密码" class="login-ipt" v-model="fromdata.passwd" ></mdui-text-field>
      <div class="btn-grop">
      	<mdui-button  class="login-btn" @click="login">登录</mdui-button>
      	<mdui-button  class="login-btn" @click="reg">注册</mdui-button>
      </div>
    </div>
	<mdui-snackbar placement="top-end" ref='huplac'>Photo archived</mdui-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ipcRenderer } from 'electron';
import  {client}  from "../samples/client"
import { ElMessage } from 'element-plus'
import axios from 'axios'
let fromdata = ref({
	account:'',
	passwd:''
})
let huplac = ref(null)
//登录
function login() {
	client.post('/api/auth/register',{
		params:{
			account:fromdata.value.account,
			password:fromdata.value.passwd,
		}
	}).then(
		res=>{
			console.log(res)
		}
	).catch(
		err=>{
			console.log(err)
		}
	)
  // ipcRenderer.send("sync-message", "发个同步消息");
  console.log('1212')
}
//注册
function reg(){
	 
	 // console.log(huplac.value)
	axios.post('/api/auth/register',{
		data:JSON.stringify({
			account:fromdata.value.account,
			password:fromdata.value.passwd
		})
	}).then(
	res=>{
		console.log(res)
		ElNotification({ title: '注册成功！', message: '成功注册', type: 'success' });
	}
	).catch(
	err=>{
		console.log(err)
	}
	)
}
</script>

<style scoped>
.login-main {
  position: absolute;
  top: 35%;
  width: 100%;

}
.btn-grop{
	left: 30%;
	position: absolute;
}
/* 欢迎文字 */
.login-title-txt {
  font-size: xx-large;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-ipt {}

/* 登录按钮 */
.login-btn {
  margin-top: 20px;
  width: 85px;
  margin-right: 40px;
}
</style>