<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>

  // import Header from './Header'
  import HomeHeader from './HomeHeader'
  import HomeSwiper from '../Swiper'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'this is home page'
      }
    },
    components: {HomeSwiper, HomeHeader},
    comments: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
