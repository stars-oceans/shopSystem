import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// /:pathMatch(.*)*

const router = new VueRouter( {
    routes : [
    {
      path: '/',
      name: 'login',
      component: ()=> import('@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('@/views/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('@/views/Register.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: ()=> import('@/views/Search.vue')
    },
  ]})

  
router.addRoute('login',{
  path : '/aa',
  component : ()=>import('@/views/aa.vue')
})

export default router
