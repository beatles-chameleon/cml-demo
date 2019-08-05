var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([67],{

/***/ "../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/chooseImage.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cmlTtApi = __webpack_require__("./node_modules/cml-tt-api/index.js");

var _cmlTtApi2 = _interopRequireDefault(_cmlTtApi);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chooseType = 'camera';
exports.default = {
  data: {
    chooseType: 'camera',
    title: 'cml.chooseImage',
    subtitle: '选择图片',
    imgSrc: '',
    cell: {
      title: '选择图片',
      list: [{
        title: '相册',
        btnText: '点击选择'
      }]
    },
    map: {
      'camera': '从相机直接拍摄',
      'album': '从相册获取',
      'choice': '菜单选项获取'
    }
  },
  methods: {
    onBtnClicked: function onBtnClicked(e) {
      var _this = this;

      _cmlTtApi2.default.chooseImage({
        type: this.chooseType
      }).then(function (res) {
        _this.imgSrc = res.base64 || res.tempFilePaths[0];
      });
    }
  },

  beforeCreate: function beforeCreate(res) {
    chooseType = res.type;
  },
  created: function created() {
    this.chooseType = chooseType;
    this.cell.list[0].title = this.map[this.chooseType];
  }
};


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/chooseImage.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/api/sub-pages/chooseImage.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../chameleon-open/chameleon/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../chameleon-open/chameleon/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/chooseImage.cml");
var __cml__script = __webpack_require__("../../../chameleon-open/chameleon/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/chameleon/packages/chameleon-tool/chameleon.js\"}!../../../chameleon-open/chameleon/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/api/sub-pages/chooseImage.cml");


/***/ })

},["./src/pages/api/sub-pages/chooseImage.cml"]);