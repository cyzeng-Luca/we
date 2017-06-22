/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 23:11:25
 * @Description: 登录路由
 */


// const login = r => require.ensure( [], () => r(require('Login/login')), 'Login');




const login = r => require.ensure( [], () => r(require('Login/login')), 'Login');



const test = r => require.ensure( [], () => r(require('Login/test')), 'Test');


export default [
  {
    path: '/login',
    component: login
  },
  {
    path: '/test',
    component: test
  }
]
