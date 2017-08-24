/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 22:07:55
 * @Description: main.js
 */

// 引入相关依赖
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@Src/routers';
import App from '@Src/App';



Vue.use(VueRouter);



const router = new VueRouter({
  routes
});

const app = new Vue({
  el: '#app',
  router,
  components:{
    App: App
  },
  template: '<App/>',
});
