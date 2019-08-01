var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([2],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-dialog/c-dialog.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__("./node_modules/cml-tt-ui/assets/js/style.js");

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-ui/components/c-dialog/c-dialog.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "EventDetail": {
      "value": "Boolean"
    }
  },
  "interfaces": {
    "CDialogInterface": {
      "show": {
        "input": ["EventDetail"],
        "output": "Undefined"
      },
      "mask": "Boolean",
      "title": "String",
      "content": "String",
      "type": "String",
      "showClose": "Boolean",
      "closeSrc": "String",
      "cancelText": "String",
      "confirmText": "String",
      "iconType": "String",
      "iconUrl": "String",
      "iconStyle": "CMLObject",
      "confirmStyle": "CMLObject",
      "cancelStyle": "CMLObject",
      "cancel": {
        "input": ["Undefined"],
        "output": "Undefined"
      },
      "confirm": {
        "input": ["Undefined"],
        "output": "Undefined"
      },
      "close": {
        "input": ["Undefined"],
        "output": "Undefined"
      }
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "CDialog": ["CDialogInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");

var IconMap = {
  network: __webpack_require__("./node_modules/cml-tt-ui/components/c-dialog/images/network.png?inline"),
  warn: __webpack_require__("./node_modules/cml-tt-ui/components/c-dialog/images/warn.png?inline"),
  success: __webpack_require__("./node_modules/cml-tt-ui/components/c-dialog/images/success.png?inline")
};

var CDialog = function CDialog() {
  _classCallCheck(this, CDialog);

  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "alert" //alert confirm

    },
    showClose: {
      type: Boolean,
      default: false
    },
    closeSrc: {
      type: String,
      default: __webpack_require__("./node_modules/cml-tt-ui/components/c-dialog/images/close.png?inline")
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    iconType: {
      type: String,
      default: "warn" //warn  success

    },
    iconUrl: {
      type: String,
      default: "" //warn  success

    },
    iconStyle: {
      type: Object,
      default: {}
    },
    confirmStyle: {
      type: Object,
      default: {}
    },
    cancelStyle: {
      type: Object,
      default: {}
    },
    dialogStyle: {
      type: Object,
      default: {}
    },
    titleStyle: {
      type: Object,
      default: {}
    },
    contentStyle: {
      type: Object,
      default: {}
    }
  };
  this.data = {
    defaultCloseIcon: __webpack_require__("./node_modules/cml-tt-ui/components/c-dialog/images/close.png?inline")
  };
  this.computed = {
    iconSrc: function iconSrc() {
      return IconMap[this.iconType];
    },
    computedIconStyle: function computedIconStyle() {
      return (0, _style.obj2str)(this.iconStyle || {});
    },
    computedConfirmStyle: function computedConfirmStyle() {
      return (0, _style.obj2str)(this.confirmStyle || {});
    },
    computedCancelStyle: function computedCancelStyle() {
      return (0, _style.obj2str)(this.cancelStyle || {});
    },
    computedDialogStyle: function computedDialogStyle() {
      return (0, _style.obj2str)(this.dialogStyle || {});
    },
    computedTitleStyle: function computedTitleStyle() {
      return (0, _style.obj2str)(this.titleStyle || {});
    },
    computedContentStyle: function computedContentStyle() {
      return (0, _style.obj2str)(this.contentStyle || {});
    }
  };
  this.watch = {};
  this.methods = {
    cancelTap: function cancelTap() {
      this.$cmlEmit("show", {
        value: false
      });
      this.$cmlEmit("cancel");
    },
    confirmTap: function confirmTap() {
      this.$cmlEmit("show", {
        value: false
      });
      this.$cmlEmit("confirm");
    },
    closeTap: function closeTap() {
      this.$cmlEmit("show", {
        value: false
      });
      this.$cmlEmit("close");
    }
  };
};

exports.default = __CML__WRAPPER__(new CDialog(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-dialog/c-dialog.cml":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Failed to find 'chameleon-runtime/src/platform/qq/style/index.css'\n  in [\n    /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail/myscroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/home,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/classify,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/shop,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/my,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/common,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/topic,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip/com/c-tip-angle,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/view,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/text,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/image,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/radio,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/checkbox,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/row,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/layout,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api/sub-pages,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-panel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tabbar,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/page,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/collapse,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/demo-list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryHeader,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryCell,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/textareademo,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/header,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo\n  ]\n    at resolveModule.catch.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-import/lib/resolve-id.js:35:13)\n    at runLoaders (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js:194:71)");

/***/ }),

/***/ "./node_modules/cml-tt-ui/assets/js/style.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obj2str = obj2str;
function obj2str() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.keys(obj).map(function (key) {
    return key + ":" + obj[key];
  }).join(";");
}

/***/ }),

/***/ "./node_modules/cml-tt-ui/components/c-dialog/c-dialog.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-dialog/c-dialog.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-tt-ui/components/c-dialog/c-dialog.cml");


/***/ }),

/***/ "./node_modules/cml-tt-ui/components/c-dialog/images/close.png?inline":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/close_816a4e2.png";

/***/ }),

/***/ "./node_modules/cml-tt-ui/components/c-dialog/images/network.png?inline":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/network_5ae2413.png";

/***/ }),

/***/ "./node_modules/cml-tt-ui/components/c-dialog/images/success.png?inline":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/success_1674452.png";

/***/ }),

/***/ "./node_modules/cml-tt-ui/components/c-dialog/images/warn.png?inline":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warn_7953d27.png";

/***/ })

},["./node_modules/cml-tt-ui/components/c-dialog/c-dialog.cml"]);