var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([77],{

/***/ "../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tab-item/c-tab-item.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CTabsItem = function CTabsItem() {
  _classCallCheck(this, CTabsItem);

  this.props = {
    tab: { //label labelStyle prefixIcon  suffixIcon
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inline: {
      type: Boolean,
      default: true
    },
    activeLabel: {
      type: String
    },
    activeLabelStyle: {
      // 这个在微信中可以
      type: String,
      default: "color:#FC9153"
    },
    activeIconStyle: {
      // 这个在微信中可以
      type: String,
      default: ""
    }
  };
  this.data = {
    defaultPrefixStyle: "font-size: 28cpx;\n        text-align: center;",
    defaultLabelStyle: "line-height: 88cpx;\n        font-size: 28cpx;\n        text-align: center;\n        height: 88cpx;\n        padding-left:5cpx;\n        padding-right:5cpx;\n        padding-top:5cpx;\n        padding-bottom:5cpx;",
    defaultSuffixStyle: "font-size: 28cpx;\n        text-align: center;"
  };
  this.computed = {
    cTabsItem: function cTabsItem() {
      return this.inline ? "c-tabs-item-row" : "c-tabs-item-column";
    },
    finalPrefix: function finalPrefix() {
      var activeIconStyle = this.isActive ? this.activeIconStyle : ';';
      return this.defaultPrefixStyle + (this.tab.prefixStyle || ';') + (activeIconStyle || ';');
    },
    finalLabel: function finalLabel() {
      var activeLabelStyle = this.isActive ? this.activeLabelStyle : ';';
      return this.defaultLabelStyle + (this.tab.labelStyle || ';') + activeLabelStyle;
    },
    finalSuffix: function finalSuffix() {
      var activeIconStyle = this.isActive ? this.activeIconStyle : ';';
      return this.defaultSuffixStyle + (this.tab.suffixStyle || ';') + (activeIconStyle || ';');
    },
    isActive: function isActive() {
      return this.activeLabel === this.tab.label;
    }
  };
  this.watch = {};
  this.methods = {
    handleTabTap: function handleTabTap() {
      this.$cmlEmit('tabclick', this.tab);
    }
  };
};

exports.default = new CTabsItem();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tab-item/c-tab-item.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tab-item/c-tab-item.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tab-item/c-tab-item.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v8.13.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tab-item/c-tab-item.cml");


/***/ })

},["./node_modules/cml-ui/components/c-tab-item/c-tab-item.cml"]);