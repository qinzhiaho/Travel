// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

// 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，
// 这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
