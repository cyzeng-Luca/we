webpackJsonp([3],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loginRoutes = __webpack_require__(185);

var _loginRoutes2 = _interopRequireDefault(_loginRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loginRoutes2.default; /**
                                          * @Author:      cyzeng
                                          * @DateTime:    2017-06-16 23:01:49
                                          * @Description: 路由
                                          */

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(161)(
  /* script */
  null,
  /* template */
  __webpack_require__(220),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(160);

var _vuex2 = _interopRequireDefault(_vuex);

var _vueRouter = __webpack_require__(159);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _elementUi = __webpack_require__(155);

var _elementUi2 = _interopRequireDefault(_elementUi);

var _pace = __webpack_require__(157);

var _pace2 = _interopRequireDefault(_pace);

var _jquery = __webpack_require__(156);

var _jquery2 = _interopRequireDefault(_jquery);

var _App = __webpack_require__(158);

var _App2 = _interopRequireDefault(_App);

var _routers = __webpack_require__(154);

var _routers2 = _interopRequireDefault(_routers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 22:07:55
 * @Description: main.js
 */

//引入相关依赖
_vue2.default.use(_vuex2.default);
_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_elementUi2.default

//设置全局变量
);window.$ = _jquery2.default;
window.Pace = _pace2.default;

//引入路由
var router = new _vueRouter2.default({
  linkActiveClass: 'red',
  routes: _routers2.default
});
console.log(1899999921054069811);
console.log(_routers2.default);
var app = new _vue2.default({
  el: '#app',
  router: router,
  render: function render(h) {
    return h(_App2.default);
  }
});

var moment = __webpack_require__(0);
console.log(moment().format());

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @Author:      cyzeng
 * @DateTime:    2017-06-16 23:11:25
 * @Description: 登录路由
 */

// const login = r => require.ensure( [], () => r(require('Login/login')), 'Login');


var login = function login(r) {
  return __webpack_require__.e/* require.ensure */(1).then((function () {
    return r(__webpack_require__(223));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var test = function test(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(224));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

exports.default = [{
  path: '/login',
  component: login
}, {
  path: '/test',
  component: test
}];

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "vueRouter"
    }
  }, [_c('h1', [_vm._v("Hello App!")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Go to first")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/test"
    }
  }, [_vm._v("Go to second")]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[184]);