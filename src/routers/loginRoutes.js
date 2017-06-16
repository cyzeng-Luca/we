/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 23:11:25
 * @Description: 登录路由
 */

const login = r => require.ensure( [], r => r(require('Login/login')), 'Login');
