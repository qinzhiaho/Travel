<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <div class="border-1px"></div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .border-1px:after{
    border-color: black;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
