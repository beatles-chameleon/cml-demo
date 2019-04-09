var __CML__GLOBAL = require("../../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([24],{

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/index.js");

var _index4 = _interopRequireDefault(_index3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getHomeImgList = __webpack_require__("./src/pages/demo/yanxuan/assets/getHomeImgList.json");

var _getHomeImgList2 = _interopRequireDefault(_getHomeImgList);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var animation = (0, _index4.default)();
var chameleonIcon = __webpack_require__("./src/assets/images/chameleon.png");

var Index = function () {
  function Index() {
    _classCallCheck(this, Index);

    this.data = {
      title: "chameleon",
      scrollHeight: -1,
      animationData: {},
      num: 1,
      currentCom: 'home',
      selectedIndex: 0,
      tabbar: {
        tabbarStyle: "height:120cpx;",
        textStyle: "font-size: 24cpx",
        selectedTextStyle: "font-size: 24cpx;color:#61c7fc;",
        list: [{
          compName: 'home',
          text: '首页',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'classify',
          text: '分类',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'topic',
          text: '识物',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'shop',
          text: '购物车',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }, {
          compName: 'my',
          text: '个人',
          icon: chameleonIcon,
          "iconStyle": "width:40cpx;height:40cpx;",
          "selectedIconStyle": "width:45cpx;height:45cpx;"
        }]
      }
    };
    this.methods = {};
  }

  _createClass(Index, [{
    key: 'created',
    value: function created() {
      var _homePageData$data = _getHomeImgList2.default.data,
          special = _homePageData$data.special,
          disscountPriceImgUrl = _homePageData$data.disscountPriceImgUrl;

      this.special = special;
      this.disscountPriceImgUrl = disscountPriceImgUrl;
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      (0, _index2.default)().then(function (info) {
        if (info.env == 'weex') {
          _this.scrollHeight = Number(info.viewportHeight) - 100 - 88;
        } else {
          _this.scrollHeight = Number(info.viewportHeight) - 100;
        }
      });
    }
  }]);

  return Index;
}();

exports.default = new Index();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/index/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/demo/yanxuan/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/index/index.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/index/index.cml");


/***/ })

},["./src/pages/demo/yanxuan/pages/index/index.cml"]);