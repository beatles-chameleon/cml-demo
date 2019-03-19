var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([6],{

/***/ "../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/com.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/navigateTo/index.js");

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _routerConfig = __webpack_require__("./src/router.config.json");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var routes = _routerConfig2.default.routes;

var routeObj = {};
routes.forEach(function (route) {
  routeObj[route['name']] = route;
});

var Home = function () {
  function Home() {
    _classCallCheck(this, Home);

    this.data = {
      iconApiUri: __webpack_require__("./src/assets/images/api/icon-api.png"),
      cells: [{
        title: '基础内容',
        iconUri: __webpack_require__("./src/assets/images/component/kind/content.png"),
        list: [{
          method: '',
          url: routeObj["text"].path,
          title: routeObj["text"].name
        }, {
          method: '',
          url: routeObj["view"].path,
          title: routeObj["view"].name
        }]
      }, {
        title: '视图容器',
        iconUri: __webpack_require__("./src/assets/images/component/kind/view.png"),
        list: [{
          method: '',
          url: routeObj["list"].path,
          title: routeObj["list"].name
        }, {
          method: '',
          url: routeObj["scroller"].path,
          title: routeObj["scroller"].name
        }, {
          method: '',
          url: routeObj["carousel"].path,
          title: routeObj["carousel"].name
        }]
      }, {
        title: '布局容器',
        iconUri: __webpack_require__("./src/assets/images/component/kind/view.png"),
        list: [{
          method: '',
          url: routeObj["row"].path,
          title: routeObj["row"].name
        }, {
          method: '',
          url: routeObj["layout"].path,
          title: routeObj["layout"].name
        }]
      }, {
        title: '表单组件',
        iconUri: __webpack_require__("./src/assets/images/component/kind/form.png"),
        list: [{
          method: '',
          url: routeObj["button"].path,
          title: routeObj["button"].name
        }, {
          method: '',
          url: routeObj["input"].path,
          title: routeObj["input"].name
        }, {
          method: '',
          url: routeObj["textarea"].path,
          title: routeObj["textarea"].name
        }, {
          method: '',
          url: routeObj["switch"].path,
          title: routeObj["switch"].name
        }, {
          method: '',
          url: routeObj["radio"].path,
          title: routeObj["radio"].name
        }, {
          method: '',
          url: routeObj["checkbox"].path,
          title: routeObj["checkbox"].name
        }]
      }, {
        title: '媒体组件',
        iconUri: __webpack_require__("./src/assets/images/component/kind/media.png"),
        list: [{
          method: '',
          url: routeObj["image"].path,
          title: routeObj["image"].name
        }, {
          method: '',
          url: routeObj["video"].path,
          title: routeObj["video"].name
        }]
      }, {
        title: '扩展组件',
        iconUri: __webpack_require__("./src/assets/images/component/kind/media.png"),
        list: [{
          method: '',
          url: routeObj["c-dialog"].path,
          title: routeObj["c-dialog"].name
        }, {
          method: '',
          url: routeObj["c-loading"].path,
          title: routeObj["c-loading"].name
        }, {
          method: '',
          url: routeObj["c-toast"].path,
          title: routeObj["c-toast"].name
        }, {
          method: '',
          url: routeObj["c-tip"].path,
          title: routeObj["c-tip"].name
        }, {
          method: '',
          url: routeObj["c-popup"].path,
          title: routeObj["c-popup"].name
        }, {
          method: '',
          url: routeObj["c-actionsheet"].path,
          title: routeObj["c-actionsheet"].name
        }, {
          method: '',
          url: routeObj["c-picker"].path,
          title: routeObj["c-picker"].name
        }, {
          method: '',
          url: routeObj["c-tab"].path,
          title: routeObj["c-tab"].name
        }, {
          method: '',
          url: routeObj["c-refresh"].path,
          title: routeObj["c-refresh"].name
        }, {
          method: '',
          url: routeObj["c-checkbox-group"].path,
          title: routeObj["c-checkbox-group"].name
        }, {
          method: '',
          url: routeObj["c-radio-group"].path,
          title: routeObj["c-radio-group"].name
        }]
      }]
    };
    this.methods = {
      cellItemSeleted: function cellItemSeleted(e) {
        var _e$detail = e.detail,
            method = _e$detail.method,
            extraData = _e$detail.extraData,
            url = _e$detail.url;

        if (url) {
          (0, _index2.default)({
            path: url
          });
        } else {
          this[method] && this[method](extraData);
        }
      }
    };
  }

  _createClass(Home, [{
    key: 'created',
    value: function created() {}
  }]);

  return Home;
}();

exports.default = new Home();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/com.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/assets/images/component/kind/content.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/content_615612b.png";

/***/ }),

/***/ "./src/assets/images/component/kind/form.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/form_1d8d4bd.png";

/***/ }),

/***/ "./src/assets/images/component/kind/media.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/media_1c79816.png";

/***/ }),

/***/ "./src/assets/images/component/kind/view.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/view_b6fa835.png";

/***/ }),

/***/ "./src/pages/com/com.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/com.cml");
var __cml__script = __webpack_require__("../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/com.cml");


/***/ })

},["./src/pages/com/com.cml"]);