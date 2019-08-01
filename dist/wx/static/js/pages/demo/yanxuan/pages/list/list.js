var __CML__GLOBAL = require("../../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([12],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/list/list.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _listImages = __webpack_require__("./src/pages/demo/yanxuan/assets/listImages.json");

var _listImages2 = _interopRequireDefault(_listImages);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Refresh = function () {
  function Refresh() {
    _classCallCheck(this, Refresh);

    this.data = {
      topRefreshing: false,
      bottomRefreshing: false,
      bottomOffset: 20,
      scrollDirection: 'vertical',
      loadingTextStyle: '',
      page: 0,
      sumPage: 5,
      list: [],
      topImg: ''
    };
    this.methods = {
      change: function change(e) {
        _cmlTtApi2.default.navigateTo({
          "path": "/pages/demo/yanxuan/pages/detail/detail",
          query: {
            a: 1,
            b: 'test'
          }
        });
      },
      onBottom: function onBottom(e) {
        var _this = this;

        if (this.bottomRefreshing || this.page >= this.sumPage) return;
        setTimeout(function () {
          _this.getData();
        }, 200);
      },
      onScroll: function onScroll() {},
      getData: function getData() {
        var _listData$data = _listImages2.default.data,
            topImgUrl = _listData$data.topImgUrl,
            list = _listData$data.list;

        this.list = [].concat(_toConsumableArray(this.list), _toConsumableArray(list));
        this.topImg = topImgUrl;
        this.page = this.page + 1;
      }
    };
  }

  _createClass(Refresh, [{
    key: 'created',
    value: function created(res) {
      this.loadingTextStyle = 'color:#666;font-size:36cpx;margin:30cpx auto;';
      this.getData();
    }
  }]);

  return Refresh;
}();

exports.default = new Refresh();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/list/list.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/demo/yanxuan/assets/listImages.json":
/***/ (function(module, exports) {

module.exports = {"code":0,"data":{"topImgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4972949f269e7295a4f37e99a303553e.jpg","list":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/8635c42f2b3a92768b12015c491821b5.png","des":"400跟纯棉贡缎","name":"60s锦绵贡缎四件套","money":"￥400","tag":["APP特惠"]},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4a00fd1035efe874d70d51dfc04c5cee.png","des":"少女粉润贡缎","name":"朱莉.粉唐四件套","money":"￥359","tag":["年货节特卖","满赠"]},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/9f3c89c8b98fb06968c67edb12a195cf.png","des":"少女粉润贡缎","name":"朱莉.粉唐四件套","money":"￥359","tag":[]},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/cc863b46d890633445fb2a1354b01841.png","des":"入门享受奢华感受","name":"60s锦绵贡缎四件套","money":"￥400"}]}}

/***/ }),

/***/ "./src/pages/demo/yanxuan/pages/list/list.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/list/list.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/list/list.cml");


/***/ })

},["./src/pages/demo/yanxuan/pages/list/list.cml"]);