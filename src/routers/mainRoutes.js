/**
 * @Author:      cyzeng
 * @DateTime:    2017年7月10日 17:40:01
 * @Description: 主业务路由
 */


const main = r => require.ensure( [], () => r(require('View/main')), 'Main');
// const test = r => require.ensure( [], () => r(require('Login/test')), 'Test');

// export default [{
//   path: '/myView',
//   component: main,
//   children: [{
//       path: 'test',
//       component: test
//     }
//   ]
// }]
export default [
  {
    path: '/',
    component: main
  }
]
