var __CML__GLOBAL = require("../../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([13],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/detail/detail.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _detailInfo = __webpack_require__("./src/pages/demo/yanxuan/assets/detailInfo.json");

var _detailInfo2 = _interopRequireDefault(_detailInfo);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Detail = function () {
  function Detail() {
    _classCallCheck(this, Detail);

    this.data = {
      bannerImg: [],
      descriptionInfo: [],
      money: 0,
      appTag: '',
      scrollHeight: -1
    };
    this.methods = {
      goto: function goto() {},
      change: function change() {
        console.log('change');
      },
      forbinding: function forbinding(e) {}
    };
  }

  _createClass(Detail, [{
    key: 'created',
    value: function created() {
      var _detailData$data = _detailInfo2.default.data,
          carouselList = _detailData$data.carouselList,
          description = _detailData$data.description,
          money = _detailData$data.money,
          tag = _detailData$data.tag;

      this.bannerImg = carouselList;
      this.descriptionInfo = description;
      this.money = money;
      this.appTag = tag;
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      var _this = this;

      _cmlTtApi2.default.getSystemInfo().then(function (info) {
        if (info.env == 'weex') {
          _this.scrollHeight = Number(info.viewportHeight) - 80 - 88;
        } else {
          _this.scrollHeight = Number(info.viewportHeight) - 80;
        }
      });
    }
  }]);

  return Detail;
}();

exports.default = new Detail();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/detail/detail.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/demo/yanxuan/assets/detailInfo.json":
/***/ (function(module, exports) {

module.exports = {"code":0,"data":{"carouselList":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5240f52c0f410054fe9c20abc54aa7b9.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5142255cef97dafd012bb73423eff4d4.png"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e72c98273b50c0959d34662c2fad4e8.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/44334a3a100aa6fa974c17e352969a6f.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bf216b5af1dc8cdb5a70e87b8271028c.png"}],"description":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/17e5327561f5b9df04f7d000a8c71bb2.jpg","tag1":"贡缎细糯","tag2":"如绸光泽"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/459cfd6a33991746fc2cf452642c7c68.jpg","tag1":"高支纯棉","tag2":"新贵臻密"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/964045a4796d70488adfef26a3093e35.jpg","tag1":"同色边框","tag2":"精致恰好"}],"money":"￥469","tag":"App特惠￥455.00"}}

/***/ }),

/***/ "./src/pages/demo/yanxuan/pages/detail/detail.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/detail/detail.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/demo/yanxuan/pages/detail/detail.cml");


/***/ })

},["./src/pages/demo/yanxuan/pages/detail/detail.cml"]);