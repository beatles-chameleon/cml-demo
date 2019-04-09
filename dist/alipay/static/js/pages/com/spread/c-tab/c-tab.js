var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([28],{

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tab/c-tab.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
 * prefixStyle  suffixStyle 可以用来放置图标
*/
var CTab = function CTab() {
  _classCallCheck(this, CTab);

  this.data = {
    headerTitle: 'c-tabs',
    headerDesc: 'c-tabs',
    tabsAlone: [{
      label: 'label11'
      // prefixStyle:"width:50cpx;height:20cpx;background-color:red;",
    }, {
      label: "label22"
      // suffixStyle:"width:50cpx;height:20cpx;background-color:red;"
    }, {
      label: 'label33'
    }],
    activeLabelAlone: 'label33',
    tabs: [{
      label: 'label1'
      // prefixStyle:"width:50cpx;height:20cpx;background-color:red"
    }, {
      label: "label2"
      // suffixStyle:"width:50cpx;height:20cpx;background-color:red"
    }, {
      label: 'label3'
      // labelStyle:"color:green"

    }],
    activeLabel: 'label3'
  };
  this.methods = {
    handleTabTap: function handleTabTap(e) {
      this.activeLabel = e.detail.label;
    },
    handleTabTapAlone: function handleTabTapAlone(e) {
      this.activeLabelAlone = e.detail.label;
    }
  };
};

exports.default = new CTab();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tab/c-tab.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/com/spread/c-tab/c-tab.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tab/c-tab.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/com/spread/c-tab/c-tab.cml");


/***/ })

},["./src/pages/com/spread/c-tab/c-tab.cml"]);