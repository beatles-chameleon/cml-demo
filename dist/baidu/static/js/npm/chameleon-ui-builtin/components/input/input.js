var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([18],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/input/input.baidu.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("./node_modules/chameleon-ui-builtin/assets/js/utils/utils.js");

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-ui-builtin/components/input/input.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "inputEventDetail": {
      "value": "String"
    },
    "blurEventDetail": {},
    "focusEventDetail": {},
    "confirEventDetail": {}
  },
  "interfaces": {
    "InputInterface": {
      "cStyle": "String",
      "cstyle": "String",
      "value": "String",
      "type": "String",
      "placeholder": "String",
      "disabled": "Boolean",
      "focus": {
        "input": ["inputEventDetail"],
        "output": "Undefined"
      },
      "maxlength": "Number",
      "returnKeyType": "String",
      "placerHolderColor": "String",
      "maxValue": "Number",
      "minValue": "Number",
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
    "Input": ["InputInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-loader/src/runtime/check.js");

var Input = function () {
  function Input() {
    _classCallCheck(this, Input);

    this.props = {
      cStyle: {
        type: String,
        default: ''
      },
      cstyle: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      //input的类型
      type: {
        type: String,
        default: 'text' //枚举值 text number password

      },
      //input的placerholder
      placeholder: {
        type: String,
        default: ''
      },
      //是否禁用input输入
      disabled: {
        type: Boolean,
        default: false
      },
      //控制input是否聚焦
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
        default: '#bebebe'
      },
      maxValue: {
        //type=number 最大值
        type: Number,
        default: 9007199254740991
      },
      minValue: {
        //type=number 最小值
        type: Number,
        default: -9007199254740991
      }
    };
    this.data = {
      inputValue: ""
    };
    this.computed = {
      wxPlaceHolderStyle: function wxPlaceHolderStyle() {
        return "color: " + this.placerHolderColor + ";";
      },
      isInputNumber: function isInputNumber() {
        return this.type === 'number';
      },
      computedStyle: function computedStyle() {
        // props 必须经过计算属性，否则没有经过 cpx 转换
        return this.cStyle || this.cstyle;
      }
    };
    this.watch = {
      focus: function focus(newVal, oldVal) {},
      value: function value(newVal, oldVal) {
        this.inputValue = newVal;
      }
    };
    this.methods = {
      inputEvent: function inputEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('input', {
          value: this.inputValue
        });
        this.$cmlEmit('inputevent', {
          value: this.inputValue
        });
      },
      blurEvent: function blurEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('blurevent', {
          value: this.inputValue
        });
        this.$cmlEmit('blur', {
          value: this.inputValue
        });
      },
      focusEvent: function focusEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('focusevent', {
          value: this.inputValue
        });
        this.$cmlEmit('focus', {
          value: this.inputValue
        });
      },
      confirmEvent: function confirmEvent(e) {
        this.handleDetail(e);
        this.$cmlEmit('confirmevent', {
          value: this.inputValue
        });
        this.$cmlEmit('confirm', {
          value: this.inputValue
        });
      },
      handleDetail: function handleDetail(e) {
        if (!e) {
          return '';
        }

        var value = e.detail.value;

        if (this.isInputNumber) {
          value = (0, _utils.getValBetweenMaxAndMin)(value, this.maxValue, this.minValue);
        }

        return this.inputValue = value || '';
      }
    };
  }

  _createClass(Input, [{
    key: "mounted",
    value: function mounted() {
      this.inputValue = this.value;
    }
  }]);

  return Input;
}();

exports.default = __CML__WRAPPER__(new Input(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/input/input.baidu.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/assets/js/utils/utils.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/cpx2px/index.js");

var _index2 = _interopRequireDefault(_index);

exports.str2obj = str2obj;
exports.pxTransform = pxTransform;
exports.cmlStyleTransfer = cmlStyleTransfer;
exports.getValBetweenMaxAndMin = getValBetweenMaxAndMin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function str2obj(str) {
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        var classValue = String(classObj[1]).replace(/(^\s*)|(\s*)$/g, "");
        obj[className] = classValue;
    });
    return obj;
}

function pxTransform(s) {
    if (!s) return '';
    if (!!~s.indexOf('cpx')) {
        return s.replace(/(-?\d*\.?\d*)cpx/ig, function (matchs, $1) {
            return (0, _index2.default)(Number($1)) + 'px';
        });
    }
    return s;
}

function cmlStyleTransfer(str) {
    if (!str) return {};
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        if (className) {
            var classValue = pxTransform(String(classObj[1]).replace(/(^\s*)|(\s*)$/g, ""));
            obj[className] = classValue;
        }
    });
    return obj;
}

function getValBetweenMaxAndMin(value, maxValue, minValue) {
    if (isNaN(Number(value))) {
        return '';
    }
    if (isNaN(maxValue) || isNaN(minValue)) {
        return value;
    }
    if (maxValue != Infinity && maxValue <= Number(value)) {
        value = String(maxValue);
    }
    if (minValue != -Infinity && minValue >= Number(value)) {
        value = String(minValue);
    }
    return value;
}

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/input/input.baidu.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/input/input.baidu.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/input/input.baidu.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/input/input.baidu.cml"]);