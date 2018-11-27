<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wraper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img class="swiper-img" src="https://img1.qunarzz.com/vc/a4/36/26/07c5904b545d66b3abe72e9dfa.jpg"
                         alt=""></swiper-slide>
      <swiper-slide><img class="swiper-img" src="https://img1.qunarzz.com/vc/2f/8e/51/cb4d31b360c836f7d1bbe83c13.jpg"
                         alt=""></swiper-slide>
      <swiper-slide><img class="swiper-img" src="https://img1.qunarzz.com/vc/a4/29/dd/4a0734b77f675da2a8ca4a9879.jpg"
                         alt=""></swiper-slide>
      <swiper-slide><img class="swiper-img" src="https://img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg"
                         alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--左右按键-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--下边滚动条-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>
<!--//支持es6-->
<script type="text/ecmascript-6">
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      this.swiper.slideTo(0, 1000, false)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wraper >>> .swiper-pagination-bullet-active
    background #fff
  .wraper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
