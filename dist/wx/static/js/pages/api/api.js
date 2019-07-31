var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([6],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/api.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import bridge from 'chameleon-bridge';


var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _unsupported = __webpack_require__("./src/components/unsupported/unsupported.interface");

var _unsupported2 = _interopRequireDefault(_unsupported);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  function Home() {
    _classCallCheck(this, Home);

    this.data = {
      iconApiUri: __webpack_require__("./src/assets/images/api/icon-api.png"),
      cells: [{
        title: '启动参数',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          method: 'getLaunchOptionsSync',
          url: '',
          title: '获取启动参数'
        }]
      }, {
        title: 'CanIUse',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          method: 'canIUse',
          url: '',
          title: 'CanIUse:showToast',
          extraData: {
            apiName: 'showToast'
          }
        }, {
          method: 'canIUse',
          url: '',
          title: 'CanIUse:showAnyToast',
          extraData: {
            apiName: 'showAnyToast'
          }
        }]
      }, {
        title: '设置页面标题',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '设置标题为: 自定义标题',
          method: 'setTitle',
          extraData: {
            title: '自定义标题'
          }
        }]
      }, {
        title: '交互反馈',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: 'toast 弹框',
          method: 'showUx',
          extraData: {
            uX: 'showToast',
            message: 'toast 弹框'
          }
        }, {
          title: 'alert 弹框',
          method: 'showUx',
          extraData: {
            uX: 'alert',
            message: 'alert 弹框'
          }
        }, {
          title: 'confirm 弹框',
          method: 'showUx',
          extraData: {
            uX: 'confirm',
            message: 'confirm 弹框'
          }
        }]
      }, {
        title: '选取照片',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '从相机获取',
          method: 'chooseImage',
          extraData: {
            type: 'camera'
          }
        }, {
          title: '从相册获取',
          method: 'chooseImage',
          extraData: {
            type: 'album'
          }
        }, {
          title: '菜单选择',
          method: 'chooseImage',
          extraData: {
            type: 'choice'
          }
        }]
      }, {
        title: '路由导航',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: 'cml.navigateTo',
          method: 'navigateTo'
        }, {
          title: 'cml.redirectTo',
          method: 'redirectTo'
        }]
      }, {
        title: '网络请求',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: 'cml.get 请求',
          method: 'request',
          extraData: {
            method: 'get'
          }
        }, {
          title: 'cml.post 请求',
          method: 'request',
          extraData: {
            method: 'post'
          }
        }, {
          title: 'cml.request 发起 put 请求',
          method: 'request',
          extraData: {
            method: 'request'
          }
        }]
      }, {
        title: 'WebSocket',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '查看 WebSocket 展示',
          method: 'webSocket'
        }]
      }, {
        title: '数据存储',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '存储 name: "ironman"',
          method: 'storage',
          extraData: {
            action: 'set'
          }
        }, {
          title: '获取 name 值',
          method: 'storage',
          extraData: {
            action: 'get'
          }
        }, {
          title: '删除 name 值',
          method: 'storage',
          extraData: {
            action: 'remove'
          }
        }]
      }, {
        title: '地理位置',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '获取地理位置',
          method: 'getGeo'
        }]
      }, {
        title: '系统信息',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '获取系统信息',
          method: 'getSystemInfo'
        }]
      }, {
        title: '单位转换',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: 'px 转 cpx',
          method: 'px2cpx'
        }, {
          title: 'cpx 转 px',
          method: 'cpx2px'
        }]
      }, {
        title: '剪贴板',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '设置剪贴板为 AA',
          method: 'clipBoard',
          extraData: {
            action: 'set',
            text: 'AA'
          }
        }, {
          title: '获取剪贴内容',
          method: 'clipBoard',
          extraData: {
            action: 'get'
          }
        }]
      }, {
        title: '元素属性',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '获取页面顶部API文本的属性',
          method: 'getRect'
        }]
      }, {
        title: '动画',
        iconUri: __webpack_require__("./src/assets/images/api/icon-default.png"),
        list: [{
          title: '查看动画展示',
          method: 'goAnimation'
        }]
      }]
    };
    this.methods = {
      cellItemSeleted: function cellItemSeleted(e) {
        var _e$detail = e.detail,
            method = _e$detail.method,
            extraData = _e$detail.extraData;

        this[method] && this[method](extraData);
      },
      getLaunchOptionsSync: function getLaunchOptionsSync() {
        var options = _cmlTtApi2.default.getLaunchOptionsSync();
        _cmlTtApi2.default.showToast({
          message: JSON.stringify(options)
        });
      },
      openNewBeatlesPage: function openNewBeatlesPage() {
        // bridge.callNative('beatlesCommunicate', 'openNativeWebPage', {
        //   close_web: false,
        //   url: 'https://cmljs.org'
        // })
      },
      callNativeLogin: function callNativeLogin() {
        // bridge.callNative('beatlesCommunicate', 'callNativeLogin', {}, res => {
        //   cml.showToast({
        //     message: '返回登录结果: ' + JSON.stringify(res)
        //   })
        // })
      },
      onLoginChange: function onLoginChange() {
        // bridge.listenNative('beatlesCommunicate', 'onLoginChange', res => {
        //   cml.showToast({
        //     message: '登录状态发生变化: ' + JSON.stringify(res)
        //   })
        // })
        // cml.showToast({
        //   message: '注册登录状态变化事件成功'
        // })
      },
      canIUse: function canIUse(_ref) {
        var _ref$apiName = _ref.apiName,
            apiName = _ref$apiName === undefined ? '' : _ref$apiName;

        _cmlTtApi2.default.canIUse(apiName).then(function (res) {
          _cmlTtApi2.default.showToast({
            message: ['当前版本支持', apiName].join(" ")
          });
        }, function (err) {
          _cmlTtApi2.default.showToast({
            message: ['当前版本不支持', apiName].join(" ")
          });
        });
      },
      setTitle: function setTitle(_ref2) {
        var _ref2$title = _ref2.title,
            title = _ref2$title === undefined ? '' : _ref2$title;

        _cmlTtApi2.default.setTitle(title);
      },
      showUx: function showUx(_ref3) {
        var _ref3$uX = _ref3.uX,
            uX = _ref3$uX === undefined ? '' : _ref3$uX,
            _ref3$message = _ref3.message,
            message = _ref3$message === undefined ? '' : _ref3$message;

        uX === 'showToast' && _cmlTtApi2.default.showToast({ message: message });
        uX === 'alert' && _cmlTtApi2.default.alert({ message: message, confirmTitle: '好的' });
        uX === 'confirm' && _cmlTtApi2.default.confirm({ message: message });
      },
      chooseImage: function chooseImage(_ref4) {
        var _ref4$type = _ref4.type,
            type = _ref4$type === undefined ? '' : _ref4$type;

        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/chooseImage',
          query: {
            type: type
          }
        });
      },
      getGeo: function getGeo() {
        _cmlTtApi2.default.getLocationInfo().then(function (res) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(res)
          });
        }).catch(function (err) {
          _cmlTtApi2.default.showToast({
            message: err.message
          });
        });
      },
      getSystemInfo: function getSystemInfo() {
        _cmlTtApi2.default.getSystemInfo().then(function (res) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(res),
            duration: 2000
          });
        });
      },
      px2cpx: function px2cpx() {
        _cmlTtApi2.default.showToast({ message: ['1px 合 ', _cmlTtApi2.default.px2cpx(1), 'cpx'].join("") });
      },
      cpx2px: function cpx2px() {
        _cmlTtApi2.default.showToast({ message: ['1cpx 合 ', _cmlTtApi2.default.cpx2px(1), 'px'].join("") });
      },
      clipBoard: function clipBoard(_ref5) {
        var _ref5$action = _ref5.action,
            action = _ref5$action === undefined ? '' : _ref5$action,
            _ref5$text = _ref5.text,
            text = _ref5$text === undefined ? '' : _ref5$text;

        if (action === 'get') {
          _cmlTtApi2.default.getClipBoardData().then(function (res) {
            _cmlTtApi2.default.showToast({
              message: JSON.stringify(res)
            });
          });
        } else {
          _cmlTtApi2.default.setClipBoardData('AA').then(function (res) {
            _cmlTtApi2.default.showToast({
              message: '剪贴板内容已设置为:AA'
            });
          });
        }
      },
      storage: function storage(_ref6) {
        var _ref6$action = _ref6.action,
            action = _ref6$action === undefined ? '' : _ref6$action;

        action === 'set' && _cmlTtApi2.default.setStorage('name', 'ironman').then(function (res) {
          _cmlTtApi2.default.showToast({
            message: 'name 已设置为 ironman'
          });
        });
        action === 'get' && _cmlTtApi2.default.getStorage('name').then(function (res) {
          _cmlTtApi2.default.showToast({
            message: res
          });
        }, function (err) {
          _cmlTtApi2.default.showToast({
            message: err.message || 'name 值已不存在'
          });
        });
        action === 'remove' && _cmlTtApi2.default.removeStorage('name').then(function (res) {
          _cmlTtApi2.default.showToast({
            message: 'name 值已删除'
          });
        });
      },
      getRect: function getRect() {
        _cmlTtApi2.default.getRect('titleText', this).then(function (res) {
          _cmlTtApi2.default.showToast({
            message: JSON.stringify(res)
          });
        });
      },
      goAnimation: function goAnimation() {
        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/animation'
        });
      },
      request: function request(_ref7) {
        var _ref7$method = _ref7.method,
            method = _ref7$method === undefined ? '' : _ref7$method;

        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/request',
          query: {
            method: method
          }
        });
      },
      webSocket: function webSocket() {
        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/webSocket'
        });
      },
      navigateTo: function navigateTo() {
        _cmlTtApi2.default.navigateTo({
          path: '/pages/api/sub-pages/navigate',
          query: {
            method: 'navigateTo'
          }
        });
      },
      redirectTo: function redirectTo() {
        _cmlTtApi2.default.redirectTo({
          path: '/pages/api/sub-pages/navigate',
          query: {
            method: 'redirectTo'
          }
        });
      }
    };
  }

  _createClass(Home, [{
    key: 'created',
    value: function created() {
      var unsupportedApis = _unsupported2.default.getUnsupportApis();
      this.cells = this.cells.filter(function (cell) {
        return !~unsupportedApis.indexOf(cell.title);
      });
    }
  }]);

  return Home;
}();

exports.default = new Home();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/api.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/assets/images/api/icon-default.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon-default_aeb0517.png";

/***/ }),

/***/ "./src/components/unsupported/unsupported.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/unsupported/unsupported.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "res": ["String"]
  },
  "interfaces": {
    "UnsupportedInterface": {
      "getUnsupportApis": {
        "input": [],
        "output": "res"
      }
    }
  },
  "classes": {
    "Method": ["UnsupportedInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getUnsupportApis",
    value: function getUnsupportApis() {
      // 线上版微信小程序未配置demo请求的域名为可信域名，发版时去掉'网络请求'
      // return ['网络请求', 'WebSocket'];
      return [];
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../chameleon-open/chameleon/packages/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./src/pages/api/api.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/api.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/api.cml");


/***/ })

},["./src/pages/api/api.cml"]);