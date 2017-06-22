/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 22:07:55
 * @Description: main.js
 */

//引入相关依赖
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import pace from 'pace'
import $ from 'jquery'
import App from 'Src/App'
import routes from 'Src/routers'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)



//设置全局变量
window.$ = $;
window.Pace = pace;

//引入路由
const router = new VueRouter(
  {
    linkActiveClass: 'red',
    routes
  }
);
console.log(1111111111)
console.log(routes)
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
