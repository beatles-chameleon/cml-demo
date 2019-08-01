var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([86],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/textarea/textarea.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "inputEventDetail": {
      "value": "String"
    }
  },
  "interfaces": {
    "TextareaInterface": {
      "cStyle": "String",
      "cstyle": "String",
      "value": "String",
      "placeholder": "String",
      "disabled": "Boolean",
      "focus": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "maxlength": "Number",
      "returnKeyType": "String",
      "placerHolderColor": "String",
      "rows": "Number",
      "inputevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "blurevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "focusevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "confirmevent": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "input": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "blur": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "confirm": {
        "input": ["inputEventDetail"],
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
    "Textarea": ["TextareaInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");
/*
event: cinput cblur cfocus cconfirm
*/
var Textarea = function Textarea() {
  _classCallCheck(this, Textarea);

  this.props = {
    cStyle: {
      type: String,
      default: ''
    },
    cstyle: {
      type: String,
      default: ''
    },
    //textarea的内容
    value: {
      type: String,
      default: ''
    },
    //textarea的placerholder
    placeholder: {
      type: String,
      default: ''
    },
    //是否禁用textarea输入
    disabled: {
      type: Boolean,
      default: false
    },
    //控制textarea是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    //最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    //右下角返回键类型
    returnKeyType: {
      //枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#666'
    },
    rows: {
      type: Number,
      default: 2
    }
  };
  this.data = {};
  this.computed = {
    placeHolderStyle: function placeHolderStyle() {
      return "color: " + this.placerHolderColor;
    },
    computedStyle: function computedStyle() {
      // props 必须经过计算属性，否则没有经过 cpx 转换
      return this.cStyle || this.cstyle;
    }
  };
  this.watch = {
    focus: function focus(newVal, oldVal) {}
  };
  this.methods = {
    inputEvent: function inputEvent(e) {
      this.$cmlEmit('input', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('inputevent', {
        value: e.detail.value || ''
      });
    },
    blurEvent: function blurEvent(e) {
      this.$cmlEmit('blur', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('blurevent', {
        value: e.detail.value || ''
      });
    },
    focusEvent: function focusEvent(e) {
      this.$cmlEmit('focus', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('focusevent', {
        value: e.detail.value || ''
      });
    },
    confirmEvent: function confirmEvent(e) {
      this.$cmlEmit('confirm', {
        value: e.detail.value || ''
      });
      this.$cmlEmit('confirmevent', {
        value: e.detail.value || ''
      });
    }
  };
};

exports.default = __CML__WRAPPER__(new Textarea(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.qq.cml":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Failed to find 'chameleon-runtime/src/platform/qq/style/index.css'\n  in [\n    /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail/myscroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/detail,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/home,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/classify,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/shop,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/my,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/common,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/components/topic,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo/yanxuan/pages/map,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip/com/c-tip-angle,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/view,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/text,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/image,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/radio,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/checkbox,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/row,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/base/layout,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com/spread/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api/sub-pages,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/switch,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-loading,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/button,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-dialog,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/carousel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tip,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-popup,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-panel,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-toast,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-checkbox-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-pane-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-actionsheet,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-picker-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-refresh,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/input,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/richtext,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tab-item,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-radio-group,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-ui/components/c-tabbar,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/page,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/video,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/textarea,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/scroller,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/collapse,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/demo-list,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryHeader,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/secondaryCell,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/textareademo,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/components/header,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/index,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/com,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/api,\n        /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/src/pages/demo\n  ]\n    at resolveModule.catch.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-import/lib/resolve-id.js:35:13)\n    at runLoaders (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js:194:71)");

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/textarea/textarea.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.qq.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/textarea/textarea.qq.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/textarea/textarea.qq.cml"]);