//是整个程序的入口

import Vue from 'vue'
//先加载APP的vue
import App from './App'
import router from './router'
//引入重置css文件
import './assets/style/reset.css'
//引入swiper样式
import 'swiper/dist/css/swiper.css'
//引入iconfont
import './assets/style/iconfont/iconfont.css'
//引入vue-awesome-swiper插件
import VueSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueSwiper)

new Vue({ //new一个vue实例
  el: '#app',
  router,
  template: '<App/>',//<App/>：vue的一个组件
  components: { App }//在此处先声明<App/>这个组件
})
