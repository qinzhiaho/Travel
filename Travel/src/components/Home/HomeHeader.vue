<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-xiala"></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'HomeHeader',
    data () {
      return {
        msg: 'this is header page'
      }
    }
  }
</script>
<!--1rem = html font-size = 10px,默认16px-->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~stylus/varibles.styl"
  .header
    width 100%
    height 4.3rem
    line-height 4.3rem
    background $bgColor
    display flex
    color white
    font-size 1.4rem
    .header-left
      width 3.8rem
      float left
      height 4.3rem
    .input
      padding-left 1rem
      background #fff
      height 3.2rem
      margin-top .55rem
      line-height 3.2rem
      color #ccc
      text-align left
      border-radius .5rem
      flex 1
    .header-right
      height 4.3rem
      width 6.2rem
      float right
      .icon-xiala
        margin-left -0.3rem
</style>
