var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([58],{

/***/ "../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/luohuan/.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-picker-panel/c-picker-panel.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CPickerPanel = function () {
  function CPickerPanel() {
    _classCallCheck(this, CPickerPanel);

    this.props = {
      show: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number,
        default: 500
      },
      title: {
        type: String,
        default: "请选择"
      },
      headerHeight: {
        type: Number,
        default: 100
      },
      cancelBtnStyle: {
        type: String,
        default: ''
      },
      confirmBtnStyle: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {
      wraperStyle: function wraperStyle() {
        var style = 'height: ' + this.height + 'cpx';
        return style;
      },
      headerStyle: function headerStyle() {
        var style = 'height: ' + this.headerHeight + 'cpx';
        return style;
      },
      computedCancelBtn: function computedCancelBtn() {
        return this.cancelBtnStyle;
      },
      computedConfirmBtn: function computedConfirmBtn() {
        return this.confirmBtnStyle;
      }
    };
    this.watch = {};
    this.methods = {
      cancelclick: function cancelclick() {
        this.$cmlEmit("cancel");
      },
      confirmclick: function confirmclick() {
        this.$cmlEmit("confirm");
      }
    };
  }

  _createClass(CPickerPanel, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return CPickerPanel;
}();

exports.default = new CPickerPanel();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/luohuan/.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-picker-panel/c-picker-panel.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/cml-ui/components/c-picker-panel/c-picker-panel.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/luohuan/.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-picker-panel/c-picker-panel.cml");
var __cml__script = __webpack_require__("../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/luohuan/.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v10.12.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-picker-panel/c-picker-panel.cml");


/***/ })

},["./node_modules/cml-ui/components/c-picker-panel/c-picker-panel.cml"]);