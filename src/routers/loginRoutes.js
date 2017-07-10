/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 23:11:25
 * @Description: 登录路由
 */

const login = r => require.ensure( [], () => r(require('Login/login')), 'Login');

export default [
  {
    path: '/login',
    component: login
  }
]
