import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    alias: ['/home','/home2'],   // 别名，可以定义很多个
    component: () => import('../components/HelloWorld.vue'),
    // 重定向
    // redirect: '/welcome',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
