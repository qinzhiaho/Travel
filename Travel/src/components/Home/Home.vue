<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>

  // import Header from './Header'
  import HomeHeader from './HomeHeader'

  export default {
    name: 'Home',
    data () {
      return {
        msg: 'this is home page'
      }
    },
    components: {HomeHeader},
    comments: {
      HomeHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
