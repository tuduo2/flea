import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/mainviem/HelloWorld.vue'),
  },
  {
    path: '/commod',
    name: 'commod',
    component: () => import('../components/commod-viem/commod.vue'),
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('../components/item-viem/item-viem.vue'),
  },
  {
    path: '/seach',
    name: 'seach',
    component: () => import('../components/seach-viem/seach.vue'),
  },
  {
	  path:'/commodinfo/?id',
	  component:()=>import('../components/commodinfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
