/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 22:07:55
 * @Description: main.js
 */

// 引入相关依赖
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Pace from 'pace'
import $ from 'jquery'
import App from '@Src/App'
import storeMain from '@Src/store/storeMain'
import routes from '@Src/routers'
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

// 引入Vuex配置文件
const store = new Vuex.Store({
  modules: storeMain
});

// 引入路由
const router = new VueRouter({
  linkActiveClass: 'red',
  routes
});



const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

// 设置全局变量
window.$ = $;
window.Pace = Pace;
window.app = app;

