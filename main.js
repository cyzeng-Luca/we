/**
 * Project: webpack_study
 * Created Date: 2017年6月9日 15:48:11
 * Last Edit Date: 2017年6月9日 15:48:17
 * Author: 曾崇云
 * Description: webpack_study
 */

//引入相关依赖
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import pace from 'pace'
import $ from 'jquery'
import App from '../src/App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

//设置全局变量
window.$ = $;
window.Pace = pace;

var app = new Vux({
  $el: 'app',
  template: '<App/>',
  components: {
    App
  }
});