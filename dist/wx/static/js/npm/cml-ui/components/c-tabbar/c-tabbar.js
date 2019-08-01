var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([75],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-ui/components/c-tabbar/c-tabbar.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "clickDetail": {
      "compName": "String"
    },
    "inputDetail": {
      "value": "String"
    }
  },
  "interfaces": {
    "TabbarInterface": {
      "tabbar": "CMLObject",
      "value": "String",
      "onclick": {
        "input": ["clickDetail"],
        "output": "Undefined"
      },
      "input": {
        "input": ["inputDetail"],
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
    "Tabbar": ["TabbarInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");
/*** 
以下列举下tabbar的一些默认值
tabbar:{
  "tabbarStyle": "";
  "tabLineStyle":"background-color:#FC9153;height:2cpx;", //当选择tabbar在top的时候，会显示出来一个下划线，用来设置下划线的颜色和高度；
  "textStyle":'color:#000000', //文案默认style ,可以这里控制文案的大小，样式等
  "selectedTextStyle":'color:#61c7fc',//文案被选择style
  "position":"bottom", //tabbar的位置 top/bottom
  "useFixedLayout":默认不使用fixed布局,  //是否通过fixed布局进行tabbar的布局
  "list":[
    { 
      "compName":"bar-detail", //这里如果外部组件通过component is进行关联，则这个值必须传，且要和useingComponents中的key的保持一致；
      "text": "detail",//tabbar的文案
      "icon": require("../../../assets/images/index/icon_API.png"),
      "selectedIcon": require("../../../assets/images/index/icon_API_HL.png"),
      // "iconStyle":"width:50cpx;height:50cpx;",//默认的icon的宽高是40cpx;这里可以自定义
      // "selectedIconStyle":"width:70cpx;height:70cpx;",//默认的icon的宽高是40cpx;这里可以自定义
  ]
},*/
var Tabbar = function () {
  function Tabbar() {
    _classCallCheck(this, Tabbar);

    this.props = {
      tabbar: {
        type: Object,
        default: {}
      },
      value: {
        //接受c-model的值
        type: String,
        dafault: ''
      }
    };
    this.data = {
      tapedIndex: 0
    };
    this.computed = {
      layoutClass: function layoutClass() {
        //默认不用fixed布局
        if (!this.useFixedLayout) {
          return '';
        } else if (this.useFixedLayout && this.top) {
          //tabbar在top
          return 'tab-bar-root-top';
        } else if (this.useFixedLayout && !this.top) {
          //tabbar在bottom
          return 'tab-bar-root-bottom';
        }
      },
      useFixedLayout: function useFixedLayout() {
        return this.tabbar.useFixedLayout;
      },
      top: function top() {
        return this.tabbar.position === 'top';
      },
      tabLineStyle: function tabLineStyle() {
        if (!this.tabbar.list.length) {
          return '';
        }

        var width = 750 / this.tabbar.list.length; //line的总宽度；

        var leftOffset = this.tapedIndex * width;
        var style = ";width:" + width + "cpx;transform: translateX(" + leftOffset + "cpx);" + (this.tabbar.tabLineStyle || 'background-color:#FC9153;height:2cpx;');
        return style;
      },
      hasIcon: function hasIcon() {
        var necessaryKeys = ['icon'];
        return (this.tabbar.list || []).every(function (item) {
          return necessaryKeys.every(function (key) {
            return Object.keys(item).includes(key);
          });
        });
      },


      //根据c-model的值计算出选中的哪个tab
      activeIndex: function activeIndex() {
        var _this = this;

        var tabIndex = this.tabbar.list.findIndex(function (item) {
          return item.compName === _this.value;
        });

        if (tabIndex >= 0) {
          return tabIndex;
        } else {
          throw new Error('未在tabbar 中配置的list中compName中找到对应的组件名');
        }
      }
    };
    this.watch = {
      //兼容支付宝不跳转的问题
      value: function value() {
        this.tapedIndex = this.activeIndex;
      }
    };
    this.methods = {
      onTabbarItemTap: function onTabbarItemTap(index) {
        this.tapedIndex = index;
        var compName = this.tabbar.list[index].compName;
        this.$cmlEmit('onclick', {
          compName: compName
        }); /*这里是为了方便和使用c-tabbar的组件进行关联，如果是通过 
            <component is="{{currentComp}}"></component>
            <c-tabbar c-model="{{currentComp}}"></c-tabbar>
            这里方式使用，可以关联currentComp的值*/
        this.$cmlEmit('input', {
          value: compName
        });
      }
    };
  }

  _createClass(Tabbar, [{
    key: "mounted",
    value: function mounted() {
      this.tapedIndex = this.activeIndex;

      if (!this.tabbar.length) {
        return '';
      }

      var width = 750 / this.tabbar.length; //line的总宽度；

      var leftOffset = this.activeIndex * width;
      this.tabLineStyle = ";width:" + width + "cpx;transform: translateX(" + leftOffset + "cpx);";
    }
  }]);

  return Tabbar;
}();

exports.default = __CML__WRAPPER__(new Tabbar(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml");
var __cml__script = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml");


/***/ })

},["./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml"]);