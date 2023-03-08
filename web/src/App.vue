<template>
  <div id="app">
    <router-view/>
    <Header/>
    <Footer v-if=" $route.path === '/home' || $route.path ==='/search' "/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default{
    name : 'App',
    components : {Header,Footer},
    data() {
      return {
        
      }
    },
  
}
</script>

<style lang="less">

</style>
