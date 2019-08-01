var __CML__GLOBAL = require("./manifest.js");
__CML__GLOBAL.webpackJsonp([0],{

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js":
/***/ (function(module, exports) {


/* istanbul ignore next */
module.exports = function (obj, __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__) {
  var className = obj.constructor.name;
  var interfaceDefines = __INTERFAE__DEFINES__;
  var enableTypes = __enableTypes__; // ['Object','Array','Nullable']
  var types = interfaceDefines.types;
  var interfaceKey = Object.keys(interfaceDefines.interfaces)[0]; // interface Name
  var interfaceObj = interfaceDefines.interfaces[interfaceKey];
  var cmlDefines = __CML__DEFINES__;
  var isImplementInterface = false;
  // 找到class
  if (cmlDefines.classes[className]) {
    // class 的interface数组中有interface中的定义
    if (~cmlDefines.classes[className].indexOf(interfaceKey)) {
      isImplementInterface = true;
    } else {
      console.error('class ' + className + ' not implements interface ' + interfaceKey);
    }
  }

  var props = [];
  var events = {};

  Object.keys(interfaceObj).forEach(function (key) {
    var item = interfaceObj[key];
    if (is(item, 'Object')) {
      // 是事件  有output和input
      events[key] = item;
    } else {
      // 是属性
      props.push({
        key: key,
        value: item
      });
    }
  });

  // created 时做props校验  同时建立watch属性检测props类型
  // 包装this.$cmlEmit 校验自定义事件参数类型
  function isFunc(target) {
    return target && is(target, 'Function');
  }

  function is(source, type) {
    return Object.prototype.toString.call(source) === '[object ' + type + ']';
  }

  var getType = function getType(value) {
    var type = Object.prototype.toString.call(value);
    return type.replace(/\[object\s(.*)\]/g, '$1').replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  };

  // beforeCreate时 vue中还获取不到mixins的this.$cmlEmit方法
  var oldCreated = obj.created || function () {};
  obj.created = function () {
    checkProps.call(this);
    oldCreated.call(this);
  };

  obj.methods = obj.methods || {};

  obj.methods.$__checkCmlEmit__ = function (eventName, eventDetail) {
    if (events[eventName]) {
      var input = events[eventName].input;

      var detailType = input[0];
      var _errList = checkType(eventDetail, detailType, []);
      if (_errList && _errList.length) {
        __CML_ERROR__('errorinfo: event ' + eventName + ' detail verification fails\n           ' + _errList.join('\n') + '\n         ');
      }
    } else {
      __CML_ERROR__('errorinfo:  event ' + eventName + ' is not defined in interface\n           ' + errList.join('\n') + '\n         ');
    }
  };

  function checkProps() {
    var _this = this;

    props.forEach(function (item) {
      var errList = checkType(_this[item.key], item.value, []);
      if (errList && errList.length) {
        __CML_ERROR__('error: prop [' + item.key + '] verification fails\n         ' + errList.join('\n') + '\n       ');
      }
    });
  }

  obj.watch = obj.watch || {};

  props.forEach(function (item) {
    var oldWatch = obj.watch[item.key];
    obj.watch[item.key] = function (newVal, oldVal) {
      var errList = checkType(newVal, item.value, []);
      if (errList && errList.length) {
        __CML_ERROR__('errorinfo: prop [' + item.key + '] verification fails\n           ' + errList.join('\n') + '\n         ');
      }
      if (isFunc(oldWatch)) {
        oldWatch.call(this, newVal, oldVal);
      }
    };
  });

  /**
   * 校验类型  两个loader共用代码
   *
   * @param  {*}      value 实际传入的值
   * @param  {string} type  静态分析时候得到的值得类型
   * @param  {array[string]} errList 校验错误信息  类型
   * @return {bool}         校验结果
   */
  var checkType = function checkType(value, originType) {
    var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var isNullableReg = /_cml_nullable_lmc_/g;
    var type = originType.replace('_cml_nullable_lmc_', '');
    type === "Void" && (type = "Undefined");
    var currentType = getType(value); // Undefined Null Object Array Number String  Function只可能是这几种类型；
    // 但是对于type的值则可能是 Undefined Null Number String NullUndefinedStiring
    // Object Array Function EventDetail(...这种自定义的复杂数据类型) 这几种；
    // 判断nullable类型的参数
    // 如果 currentType === type 那么就会直接返回 [];
    var canUseNullable = enableTypes.includes("Nullable");
    var canUseObject = enableTypes.includes("Object");
    var canUseArray = enableTypes.includes("Array");
    if (currentType == 'Null') {
      // 如果传入的值是 null类型，那么可能的情况是该值在接口处的被定义为Null或者是 ?string 这种可选参数的形式；
      if (type == "Null") {
        // 如果定义的参数的值就是 Null，那么校验通过
        errList = [];
      } else {
        // 实际定义的参数的值不是 Null  ?string这种形式的定义，type = new String('String') ?Callback type = new String('Callback')
        // 那么判断是否是可选参数的情况
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E');
      }
      return errList;
    }
    if (currentType == 'Undefined') {
      // 如果运行时传入的真实值是undefined,那么可能改值在接口处就是被定义为 Undefined类型或者是 ?string 这种可选参数 nullable的情况；
      if (type == "Undefined") {
        errList = [];
      } else {
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E\u6216\u8005\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'String') {
      if (type == 'String') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Boolean') {
      if (type == 'Boolean') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Number') {
      if (type == 'Number') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Object') {
      if (type == 'Object') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Object \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else if (type == 'CMLObject') {
        errList = [];
      } else {
        // 这种情况的对象就是自定义的对象；
        if (types[type]) {
          var keys = Object.keys(types[type]);
          // todo 这里是同样的问题，可能多传递
          keys.forEach(function (key) {
            var subError = checkType(value[key], types[type][key], []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          });
          if (Object.keys(value).length > keys.length) {
            errList.push('type [' + type + '] \u53C2\u6570\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26');
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }
      return errList;
    }
    if (currentType == 'Array') {
      if (type == 'Array') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Array \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else {
        if (types[type]) {
          // 数组元素的类型
          var itemType = types[type][0];
          for (var i = 0; i < value.length; i++) {
            var subError = checkType(value[i], itemType, []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }
    if (currentType == 'Function') {
      if (types[type]) {
        if (!types[type].input && !types[type].output) {
          errList.push('\u627E\u4E0D\u5230' + types[type] + ' \u51FD\u6570\u5B9A\u4E49\u7684\u8F93\u5165\u8F93\u51FA');
        }
      } else {
        errList.push('找不到定义的type [' + type + ']!');
      }
    }
    if (currentType == 'Promise') {
      if (type == 'Promise') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Date') {
      if (type == 'Date') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'RegExp') {
      if (type == 'RegExp') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }

    return errList;
  };

  return obj;
};

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js":
/***/ (function(module, exports) {

/**
* 对象包裹器
*运行时的错误信息，根据端传入不同的方法，
* @param  {Object} obj 需要处理的对象
* @return {Object}     对象
*/
/* istanbul ignore next */
module.exports = function (obj, __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__) {
  var className = obj.constructor.name;
  /* eslint-disable no-undef */
  var defines = __CHECK__DEFINES__;
  var enableTypes = __enableTypes__.split(',') || []; // ['Object','Array','Nullable']
  /* eslint-disable no-undef */
  var types = defines.types;
  var interfaceNames = defines.classes[className];
  var methods = {};

  interfaceNames && interfaceNames.forEach(function (interfaceName) {
    var keys = Object.keys(defines.interfaces);
    keys.forEach(function (key) {
      Object.assign(methods, defines.interfaces[key]);
    });
  });

  /**
  * 获取类型
  *
  * @param  {*}      value 值
  * @return {string}       类型
  */
  var getType = function getType(value) {
    if (value instanceof Promise) {
      return "Promise";
    }
    var type = Object.prototype.toString.call(value);
    return type.replace(/\[object\s(.*)\]/g, '$1').replace(/( |^)[a-z]/g, function (L) {
      return L.toUpperCase();
    });
  };

  /**
  * 校验类型  两个loader共用代码
  *
  * @param  {*}      value 实际传入的值
  * @param  {string} type  静态分析时候得到的值得类型
  * @param  {array[string]} errList 校验错误信息  类型
  * @return {bool}         校验结果
  */

  /* eslint complexity:[2,39] */
  var checkType = function checkType(value, originType) {
    var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var isNullableReg = /_cml_nullable_lmc_/g;
    var type = originType.replace('_cml_nullable_lmc_', '');
    type === "Void" && (type = "Undefined");
    var currentType = getType(value);
    var canUseNullable = enableTypes.includes("Nullable");
    var canUseObject = enableTypes.includes("Object");
    if (currentType == 'Null') {
      if (type == "Null") {
        // 如果定义的参数的值就是 Null，那么校验通过
        errList = [];
      } else {
        // 那么判断是否是可选参数的情况
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E');
      }
      return errList;
    }
    if (currentType == 'Undefined') {
      // 如果运行时传入的真实值是undefined,那么可能改值在接口处就是被定义为 Undefined类型或者是 ?string 这种可选参数 nullable的情况；
      if (type == "Undefined") {
        errList = [];
      } else {
        canUseNullable && isNullableReg.test(originType) ? errList = [] : errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542Fnullable\u914D\u7F6E\u6216\u8005\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'String') {
      if (type == 'String') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Boolean') {
      if (type == 'Boolean') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Number') {
      if (type == 'Number') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Object') {
      if (type == 'Object') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Object \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else if (type == 'CMLObject') {
        errList = [];
      } else {
        // 这种情况的对象就是自定义的对象；
        if (types[type]) {
          var _keys = Object.keys(types[type]);
          // todo 这里是同样的问题，可能多传递
          _keys.forEach(function (key) {
            var subError = checkType(value[key], types[type][key], []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          });
          if (Object.keys(value).length > _keys.length) {
            errList.push('type [' + type + '] \u53C2\u6570\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26');
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }
      return errList;
    }
    if (currentType == 'Array') {
      if (type == 'Array') {
        !canUseObject ? errList.push('\u4E0D\u80FD\u76F4\u63A5\u5B9A\u4E49\u7C7B\u578B' + type + '\uFF0C\u9700\u8981\u4F7F\u7528\u7B26\u5408\u7C7B\u578B\u5B9A\u4E49\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5F00\u542F\u4E86\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49 Array \u7C7B\u578B\u53C2\u6570\uFF1B') : errList = [];
      } else {
        if (types[type]) {
          // 数组元素的类型
          var itemType = types[type][0];
          for (var i = 0; i < value.length; i++) {
            var subError = checkType(value[i], itemType, []);
            if (subError && subError.length) {
              errList = errList.concat(subError);
            }
          }
        } else {
          errList.push('找不到定义的type [' + type + ']!');
        }
      }

      return errList;
    }
    if (currentType == 'Function') {
      // if (type == 'Function') {
      //   errList = [];
      // } else {
      //   errList.push(`定义了${type}类型的参数，传入的却是${currentType},请检查所传参数是否和接口定义的一致`)
      // }
      if (types[type]) {
        if (!types[type].input && !types[type].output) {
          errList.push('\u627E\u4E0D\u5230' + types[type] + ' \u51FD\u6570\u5B9A\u4E49\u7684\u8F93\u5165\u8F93\u51FA');
        }
      } else {
        errList.push('找不到定义的type [' + type + ']!');
      }
      return errList;
    }
    if (currentType == 'Promise') {
      if (type == 'Promise') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'Date') {
      if (type == 'Date') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }
    if (currentType == 'RegExp') {
      if (type == 'RegExp') {
        errList = [];
      } else {
        errList.push('\u5B9A\u4E49\u4E86' + type + '\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F20\u5165\u7684\u5374\u662F' + currentType + ',\u8BF7\u68C0\u67E5\u6240\u4F20\u53C2\u6570\u662F\u5426\u548C\u63A5\u53E3\u5B9A\u4E49\u7684\u4E00\u81F4');
      }
      return errList;
    }

    return errList;
  };

  /**
  * 校验参数类型
  *
  * @param  {string} methodName 方法名称
  * @param  {Array}  argNames   参数名称列表
  * @param  {Array}  argValues  参数值列表
  * @return {bool}              校验结果
  */
  var checkArgsType = function checkArgsType(methodName, argValues) {
    var argList = void 0;

    if (getType(methodName) == 'Array') {
      // 回调函数的校验    methodName[0] 方法的名字 methodName[1]该回调函数在方法的参数索引
      argList = types[methods[methodName[0]].input[methodName[1]]].input;
      // 拿到这个回调函数的参数定义
    } else {
      argList = methods[methodName].input;
    }
    // todo 函数可能多传参数
    argList.forEach(function (argType, index) {
      var errList = checkType(argValues[index], argType, []);
      if (errList && errList.length > 0) {
        __CML_ERROR__('\n       \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5' + methodName + '\u7B2C' + (index + 1) + '\u4E2A\u53C2\u6570\n       \u9519\u8BEF\u4FE1\u606F: ' + errList.join('\n'));
      }
    });
    if (argValues.length > argList.length) {
      __CML_ERROR__('[' + methodName + ']\u65B9\u6CD5\u53C2\u6570\u4F20\u9012\u4E2A\u6570\u4E0E\u5B9A\u4E49\u4E0D\u7B26');
    }
  };

  /**
  * 校验返回值类型
  *
  * @param  {string} methodName 方法名称
  * @param  {*}      returnData 返回值
  * @return {bool}              校验结果
  */
  var checkReturnType = function checkReturnType(methodName, returnData) {
    var output = void 0;
    if (getType(methodName) == 'Array') {
      output = types[methods[methodName[0]].input[methodName[1]]].output;
    } else {
      output = methods[methodName].output;
    }
    // todo output 为什么可以是数组
    // if (output instanceof Array) {
    //   output.forEach(type => {

    //     //todo 而且是要有一个校验不符合就check失败？ 应该是有一个校验通过就可以吧
    //     checkType(returnData, type,[])
    //   });
    // }
    var errList = checkType(returnData, output, []);
    if (errList && errList.length > 0) {
      __CML_ERROR__('\n     \u6821\u9A8C\u4F4D\u7F6E: \u65B9\u6CD5' + methodName + '\u8FD4\u56DE\u503C\n     \u9519\u8BEF\u4FE1\u606F: ' + errList.join('\n'));
    }
  };

  /**
  * 创建warpper
  *
  * @param  {string}   funcName   方法名称
  * @param  {Function} originFunc 原有方法
  * @return {Function}            包裹后的方法
  */
  var createWarpper = function createWarpper(funcName, originFunc) {
    return function () {
      var argValues = Array.prototype.slice.call(arguments).map(function (arg, index) {
        // 对传入的方法要做特殊的处理，这个是传入的callback，对callback函数再做包装
        if (getType(arg) == 'Function') {
          return createWarpper([funcName, index], arg);
        }
        return arg;
      });

      checkArgsType(funcName, argValues);

      var result = originFunc.apply(this, argValues);

      checkReturnType(funcName, result);
      return result;
    };
  };

  // 获取所有方法
  var keys = Object.keys(methods);

  // 处理包装方法
  keys.forEach(function (key) {
    var originFunc = obj[key];
    if (!originFunc) {
      __CML_ERROR__('method [' + key + '] not found!');
      return;
    }

    if (obj.hasOwnProperty(key)) {
      obj[key] = createWarpper(key, originFunc);
    } else {
      Object.getPrototypeOf(obj)[key] = createWarpper(key, originFunc);
    }
  });

  return obj;
};

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js":
/***/ (function(module, exports) {


module.exports = function copyProtoProperty(obj) {
  var EXPORT_OBJ = obj || {};
  var EXPORT_PROTO = Object.getPrototypeOf(EXPORT_OBJ);
  if (EXPORT_PROTO.constructor !== Object) {
    Object.getOwnPropertyNames(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        // 原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }
  return EXPORT_OBJ;
};

/***/ }),

/***/ "../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/chameleon-api/src/config.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var api = {
  alert: {
    baseOn: {
      sdk: 'alert',
      web: 'alert',
      wx: 'showModal',
      qq: 'showModal',
      baidu: 'showModal',
      alipay: 'alert',
      weex: 'modal.alert'
    }
  },
  cancelAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'cancelAnimationFrame',
      web: 'cancelAnimationFrame',
      wx: 'cancelAnimationFrame',
      qq: 'cancelAnimationFrame',
      baidu: 'cancelAnimationFrame',
      weex: 'cancelAnimationFrame',
      alipay: 'cancelAnimationFrame'
    }
  },
  canIUse: {
    allCanUse: true,
    baseOn: {
      sdk: 'canIUse',
      web: 'canIUse',
      wx: 'canIUse',
      qq: 'canIUse',
      baidu: 'canIUse',
      weex: 'canIUse',
      alipay: 'canIUse'
    }
  },
  inSDK: {
    allCanUse: true,
    baseOn: {
      sdk: 'inSDK',
      web: 'inSDK',
      wx: '',
      qq: '',
      baidu: '',
      weex: ''
    }
  },
  chooseImage: {
    baseOn: {
      sdk: 'chooseImage',
      web: 'chooseImage',
      wx: 'chooseImage',
      qq: 'chooseImage',
      baidu: 'chooseImage',
      weex: '',
      alipay: 'chooseImage'
    }
  },
  close: {
    baseOn: {
      sdk: 'close',
      web: 'close',
      wx: 'navigateBack',
      qq: 'navigateBack',
      baidu: 'navigateBack',
      weex: '',
      alipay: 'navigateBack'
    }
  },
  confirm: {
    baseOn: {
      sdk: 'confirm',
      web: 'confirm',
      wx: 'showModal',
      qq: 'showModal',
      baidu: 'showModal',
      weex: 'modal.confirm',
      alipay: 'confirm'
    }
  },
  cpx2px: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      qq: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfoSync'
    }
  },
  get: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  getClipBoardData: {
    baseOn: {
      sdk: 'getClipBoardData',
      web: 'getClipboardData',
      wx: 'getClipboardData',
      qq: 'getClipboardData',
      baidu: 'getClipboardData',
      weex: 'clipboard.getString',
      alipay: 'getClipboard'
    }
  },
  getLocationInfo: {
    baseOn: {
      sdk: 'getLocationInfo',
      web: 'getCurrentPosition',
      wx: 'getLocation',
      qq: 'getLocation',
      baidu: 'getLocation',
      weex: '',
      alipay: 'getLocation'
    }
  },
  getRect: {
    baseOn: {
      sdk: 'getComponentRect',
      web: 'getComputedStyle',
      wx: 'createSelectorQuery',
      qq: 'createSelectorQuery',
      baidu: 'createSelectorQuery',
      weex: 'getComponentRect',
      alipay: ''
    }
  },
  getStorage: {
    baseOn: {
      sdk: 'getStorage',
      web: 'localStorage.getItem',
      wx: 'getStorageSync',
      qq: 'getStorageSync',
      baidu: 'getStorageSync',
      weex: 'storage.getItem',
      alipay: 'getStorageSync'
    }
  },
  getSystemInfo: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfo',
      qq: 'getSystemInfo',
      baidu: 'getSystemInfo',
      weex: 'getSystemInfo',
      alipay: 'getSystemInfo'
    }
  },
  initSocket: {
    baseOn: {
      sdk: 'initSocket',
      web: 'initSocket',
      wx: 'connectSocket',
      qq: 'connectSocket',
      baidu: 'connectSocket',
      weex: '',
      alipay: 'connectSocket'
    }
  },
  getLaunchOptionsSync: {
    baseOn: {
      sdk: 'getQueryObjSync',
      web: 'location.href',
      wx: 'getLaunchOptionsSync',
      qq: 'getLaunchOptionsSync',
      baidu: '',
      weex: 'weex.config.bundleUrl',
      alipay: ''
    }
  },
  navigateBack: {
    baseOn: {
      sdk: 'navigateBack',
      web: 'navigateBack',
      wx: 'navigateBack',
      qq: 'navigateBack',
      baidu: 'navigateBack',
      weex: 'navigateBack',
      alipay: 'navigateBack'
    }
  },
  navigateTo: {
    baseOn: {
      sdk: 'navigateTo',
      web: 'navigateTo',
      wx: 'navigateTo',
      qq: 'navigateTo',
      baidu: 'navigateTo',
      weex: 'navigateTo',
      alipay: 'navigateTo'
    }
  },
  open: {
    baseOn: {
      sdk: 'open',
      web: 'location.href',
      wx: 'navigateToMiniProgram',
      qq: 'navigateToMiniProgram',
      baidu: 'navigateToSmartProgram',
      weex: 'navigator.push',
      alipay: 'navigateToMiniProgram'
    }
  },
  post: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  px2cpx: {
    baseOn: {
      sdk: 'getSystemInfo',
      web: 'getSystemInfo',
      wx: 'getSystemInfoSync',
      qq: 'getSystemInfoSync',
      baidu: 'getSystemInfoSync',
      weex: 'getSystemInfo',
      alipay: ''
    }
  },
  redirectTo: {
    baseOn: {
      sdk: 'redirectTo',
      web: 'router.replace',
      wx: 'redirectTo',
      qq: 'redirectTo',
      baidu: 'redirectTo',
      weex: 'router.replace',
      alipay: 'redirectTo'
    }
  },
  reload: {
    baseOn: {
      sdk: 'reload',
      web: 'location.reload',
      wx: '',
      qq: '',
      baidu: '',
      weex: '',
      alipay: ''
    }
  },
  removeStorage: {
    baseOn: {
      sdk: 'removeStorage',
      web: 'localStorage.removeItem',
      wx: 'removeStorageSync',
      qq: 'removeStorageSync',
      baidu: 'removeStorageSync',
      weex: 'storage.removeItem',
      alipay: 'removeStorageSync'
    }
  },
  request: {
    baseOn: {
      sdk: 'request',
      web: 'fetch',
      wx: 'request',
      qq: 'request',
      baidu: 'request',
      weex: 'fetch',
      alipay: 'httpRequest'
    }
  },
  requestAnimationFrame: {
    allCanUse: true,
    baseOn: {
      sdk: 'setTimeout',
      web: 'requestAnimationFrame',
      wx: 'setTimeout',
      qq: 'setTimeout',
      baidu: 'setTimeout',
      weex: 'requestAnimationFrame',
      alipay: 'requestAnimationFrame'
    }
  },
  setClipBoardData: {
    baseOn: {
      sdk: 'setClipBoardData',
      web: 'setClipBoardData',
      wx: 'setClipBoardData',
      qq: 'setClipBoardData',
      baidu: 'setClipBoardData',
      weex: 'clipboard.setString',
      alipay: 'setClipboard'
    }
  },
  setStorage: {
    baseOn: {
      sdk: 'setStorage',
      web: 'localStorage.setItem',
      wx: 'setStorageSync',
      qq: 'setStorageSync',
      baidu: 'setStorageSync',
      weex: 'storage.setItem',
      alipay: 'setStorageSync'
    }
  },
  setTitle: {
    baseOn: {
      sdk: 'setTitle',
      web: 'document.title',
      wx: 'setNavigationBarTitle',
      qq: 'setNavigationBarTitle',
      baidu: 'setNavigationBarTitle',
      weex: '',
      alipay: 'setNavigationBar'
    }
  },
  showToast: {
    baseOn: {
      sdk: 'showToast',
      web: 'showToast',
      wx: 'showToast',
      qq: 'showToast',
      baidu: 'showToast',
      weex: 'modal.toast',
      alipay: 'showToast'
    }
  }
};

exports.api = api;

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/cpx2px/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cpx2px;

var _getWidth = __webpack_require__("./node_modules/chameleon-api/src/interfaces/px2cpx/getWidth.interface");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cpx2px(cpx) {
  if (typeof cpx !== 'number') {
    console.error('Parameter must be a number');
    return;
  }
  var viewportWidth = _getWidth2.default.getWidth();
  var px = +(viewportWidth / 750 * cpx).toFixed(3);
  return px;
}

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/_util.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpx2px = exports.descriptionPipe = exports.stylePipe = undefined;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylePipe = exports.stylePipe = function stylePipe(styles, descriptions, quene) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var current = styles;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, descriptions].concat(args));
  });
  return current;
};

var descriptionPipe = exports.descriptionPipe = function descriptionPipe(descriptions, styles, quene) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var current = descriptions;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, styles].concat(args));
  });
  return current;
};

var cpx2px = exports.cpx2px = function cpx2px(v) {
  return +(_index2.default.getViewportWidth() / 750 * v).toFixed(3);
};

exports.default = {};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/descriptionLoader/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commonLoader = exports.commonLoader = function commonLoader(descriptions) {
  return descriptions;
};

var transformOriginMap = {};
var cacheTransformOriginLoader = exports.cacheTransformOriginLoader = function cacheTransformOriginLoader(descriptions, styles, id) {
  var returnDescriptions = descriptions;

  var transformOrigin = descriptions.transformOrigin;
  if (!transformOriginMap[id]) {
    transformOriginMap[id] = {};
  }

  if (transformOrigin) {
    transformOriginMap[id].transformOrigin = transformOrigin;
  }

  returnDescriptions.transformOrigin = transformOriginMap[id].transformOrigin;
  return returnDescriptions;
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/common.js");

var _qq = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/qq.js");

var _common2 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/descriptionLoader/common.js");

var _util = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/_util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-api/src/interfaces/createAnimation/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "CreateAnimationInterface": {
      "initAnimation": {
        "input": [],
        "output": "Undefined"
      },
      "exportMiddleWare": {
        "input": ["CMLObject"],
        "output": "CMLObject"
      },
      "checkNumber": {
        "input": ["Number"],
        "output": "Undefined"
      },
      "checkString": {
        "input": ["String"],
        "output": "Undefined"
      },
      "checkObject": {
        "input": ["CMLObject"],
        "output": "Undefined"
      },
      "getViewportWidth": {
        "input": [],
        "output": "Number"
      }
    }
  },
  "classes": {
    "Method": ["CreateAnimationInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var styleLoaderQueue = [_common.commonLoader, _common.cacheTransformStylesLoader, _qq.transformLoader];
var descriptionLoaderQueue = [_common2.commonLoader, _common2.cacheTransformOriginLoader];

var createAnimationFuc = function createAnimationFuc(quene) {
  var animation = qq.createAnimation();
  var cbs = {};
  quene.forEach(function (tick, i) {
    var styles = tick.styles,
        descriptions = tick.descriptions;

    cbs[i] = descriptions.cb;
    Object.keys(styles).forEach(function (key) {
      var value = styles[key];
      animation[key](value);
    });
    animation.step(descriptions);
  });
  var temp = animation.export();
  temp.cbs = cbs;
  temp.index = 0;
  return temp;
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "initAnimation",
    value: function initAnimation() {}
  }, {
    key: "checkNumber",
    value: function checkNumber(number) {}
  }, {
    key: "checkString",
    value: function checkString(string) {}
  }, {
    key: "checkObject",
    value: function checkObject(object) {}
  }, {
    key: "getViewportWidth",
    value: function getViewportWidth() {
      var _qq$getSystemInfoSync = qq.getSystemInfoSync(),
          windowWidth = _qq$getSystemInfoSync.windowWidth;

      return windowWidth;
    }
  }, {
    key: "exportMiddleWare",
    value: function exportMiddleWare(param) {
      return createAnimationFuc(param.updateQueue.map(function (tick) {
        return {
          styles: (0, _util.stylePipe)(tick.styles, tick.descriptions, styleLoaderQueue, param.id),
          descriptions: (0, _util.descriptionPipe)(tick.descriptions, tick.styles, descriptionLoaderQueue, param.id)
        };
      }));
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rotateStyles = exports.rotateStyles = ['rotate', 'rotateX', 'retateY'];

var isNumTypeStyles = exports.isNumTypeStyles = ['width', 'height', 'translateX', 'translateY'];

var transformStyles = exports.transformStyles = ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY'];

var compositeStyles = exports.compositeStyles = ['translate', 'scale'];

var commonLoader = exports.commonLoader = function commonLoader(styles) {
  var returnStyles = {};

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];
    //
    if (value.length === 1 && key !== 'scale') {
      returnStyles[key] = value[0];
    } else {
      if (compositeStyles.includes(key)) {
        // scale的值只传递一个的情况
        if (key === 'scale' && value.length === 1) {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[0];
        } else {
          returnStyles[key + 'X'] = value[0];
          returnStyles[key + 'Y'] = value[1];
        }

        // returnStyles[`${key}Z`] = value[2];
      } else {
          // redLog(`${key}属性不支持传多个参数`);
        }
    }
  });
  return returnStyles;
};

// 缓存transform属性
var transformStylesMap = {};
var cacheTransformStylesLoader = exports.cacheTransformStylesLoader = function cacheTransformStylesLoader(styles, descriptions, id) {
  var returnStyles = {};

  if (!transformStylesMap[id]) {
    transformStylesMap[id] = {};
  }

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    if (transformStyles.includes(key)) {
      transformStylesMap[id][key] = value;
    }
    returnStyles[key] = value;
  });

  if (JSON.stringify(transformStylesMap[id]) !== '{}') {
    Object.keys(transformStylesMap[id]).forEach(function (key) {
      var value = transformStylesMap[id][key];

      returnStyles[key] = value;
    });
  }

  return returnStyles;
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/qq.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformLoader = undefined;

var _util = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/_util.js");

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

var _common = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/common.js");

var transformLoader = exports.transformLoader = function transformLoader(styles, description) {
  var returnStyles = {};

  Object.keys(styles).forEach(function (key) {
    var value = styles[key];

    // 目前不支持自动转换，所以loader来做
    if (_common.isNumTypeStyles.includes(key)) {
      if ((0, _utils.isNum)(value)) {
        // 转换单位
        value = (0, _util.cpx2px)(value);
      } else {
        console.error('Parameter must be a number');
      }
    }

    // // 目前不支持转换，所以loader来做
    // if (isStr(value) && value.includes('px')) {
    //   value = value.replace('px', 'rpx');
    // }

    // 100deg -> 100
    if (_common.rotateStyles.includes(key) && (0, _utils.isStr)(value)) {

      if (value.includes('deg')) {
        value = value.split('deg')[0];
      } else {
        console.error('Parameter format error');
      }
    }

    // 此处使用transformMap保留transform状态。因为weex每次会初始化transform。行为会跟web，wx端不一致
    returnStyles[key] = value;
  });

  return returnStyles;
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/getRect/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/px2cpx/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-api/src/interfaces/getRect/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "resData": {
      "width": "Number",
      "height": "Number",
      "left": "Number",
      "top": "Number",
      "right": "Number",
      "bottom": "Number"
    },
    "CallBack": {
      "input": ["resData"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UserInfoInterface": {
      "getRect": {
        "input": ["CMLObject", "CallBack"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UserInfoInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getRect",
    value: function getRect(refObj, cb) {
      var query = qq.createSelectorQuery().in(refObj.context);
      query.select("#" + refObj.id).boundingClientRect();
      query.exec(function (res) {
        var rectObj = {
          width: res[0] && (0, _index2.default)(res[0].width) || 0,
          height: res[0] && (0, _index2.default)(res[0].height) || 0,
          left: res[0] && (0, _index2.default)(res[0].left) || 0,
          top: res[0] && (0, _index2.default)(res[0].top) || 0,
          right: res[0] && (0, _index2.default)(res[0].right) || 0,
          bottom: res[0] && (0, _index2.default)(res[0].bottom) || 0
        };
        cb(rectObj);
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/getRect/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRect;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getRect/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRect(ref, context) {
  return new Promise(function (resolve, reject) {
    var refObj = (0, _utils.getRefObj)(ref, context);
    _index2.default.getRect(refObj, function (res) {
      resolve(res);
    });
  });
}

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-api/src/interfaces/getSystemInfo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "res": {
      "os": "String",
      "env": "String",
      "viewportWidth": "Number",
      "viewportHeight": "Number",
      "extraParams": "CMLObject"
    },
    "CallBack": {
      "input": ["res"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UserInfoInterface": {
      "getSystemInfo": {
        "input": ["CallBack"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UserInfoInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var systemInfo = null;

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getSystemInfo",
    value: function getSystemInfo(cb) {
      if (systemInfo) {
        cb(systemInfo);
        return;
      }

      qq.getSystemInfo({
        success: function success(res) {
          var os = /android/i.test(res.system) ? 'android' : 'ios';
          var viewportWidth = res.windowWidth;
          var viewportHeight = res.windowHeight;
          systemInfo = {
            os: os,
            env: 'qq',
            viewportWidth: viewportWidth,
            viewportHeight: viewportHeight,
            extraParams: res || {}
          };
          cb(systemInfo);
        },
        fail: function fail(err) {
          // 获取失败时不做存储
          var failSystemInfo = {
            os: '',
            env: 'qq',
            viewportWidth: 0,
            viewportHeight: 0,
            extraParams: {}
          };
          cb(failSystemInfo);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getSystemInfo;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getSystemInfo(function (res) {
      res.extraParams = (0, _utils.tryJsonParse)(res.extraParams);
      // px2viewpx
      var pxRpxRate = 750 / res.viewportWidth;
      var viewportHeight = +(res.viewportHeight * pxRpxRate).toFixed(3);
      var viewportWidth = +(res.viewportWidth * pxRpxRate).toFixed(3);

      if (res.os) {
        resolve(_extends({}, res, {
          viewportHeight: viewportHeight,
          viewportWidth: viewportWidth
        }));
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/initSocket/qqSocket.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QqSocket = function () {
  function QqSocket(url) {
    _classCallCheck(this, QqSocket);

    this.instance = qq.connectSocket({
      url: url
    });
  }

  _createClass(QqSocket, [{
    key: "onopen",
    value: function onopen(cb) {
      this.instance.onOpen(function () {
        cb();
      });
    }
  }, {
    key: "onmessage",
    value: function onmessage(cb) {
      this.instance.onMessage(function (res) {
        cb(res);
      });
    }
  }, {
    key: "onerror",
    value: function onerror(cb) {
      this.instance.onError(function (err) {
        cb(err);
      });
    }
  }, {
    key: "onclose",
    value: function onclose(cb) {
      this.instance.onClose(function () {
        cb();
      });
    }
  }, {
    key: "send",
    value: function send(data) {
      data = JSON.stringify(data);
      this.instance.send({
        data: data
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.instance.close();
    }
  }]);

  return QqSocket;
}();

exports.default = QqSocket;

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/px2cpx/getWidth.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-api/src/interfaces/px2cpx/getWidth.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "getWidthInterface": {
      "getWidth": {
        "input": [],
        "output": "Number"
      }
    }
  },
  "classes": {
    "Method": ["getWidthInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var _qq$getSystemInfoSync = qq.getSystemInfoSync(),
    windowWidth = _qq$getSystemInfoSync.windowWidth;

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getWidth",
    value: function getWidth() {
      return windowWidth;
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/px2cpx/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = px2cpx;

var _getWidth = __webpack_require__("./node_modules/chameleon-api/src/interfaces/px2cpx/getWidth.interface");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function px2cpx(px) {

  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/request/common.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHeader = parseHeader;
var defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

var defaultOptions = {
  credentials: 'same-origin'
};

var defaultType = 'form';
var contentTypeMap = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json'
};

// 处理基本的错误, 如500, 404等等
function filterStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res;
    error.type = 'http';
    throw error;
  }
}

// 解析为json格式
function parseJSON(res) {
  return res.json()["catch"](function (err) {
    if (err) {
      err.type = 'json';
      err.res = res;
    }
    throw err;
  });
}

// 转换成form表单形式
function toForm(body) {
  var form = new FormData();
  Object.keys(body).forEach(function (key) {
    if (body[key] !== undefined) {
      form.append(key, body[key]);
    }
  });
  return form;
}

function parseHeader(headers) {
  // fetch中的headers value为数组形式,其他端为字符串形式， 统一为字符串
  // header的key值统一为小写
  var result = {};
  Object.keys(headers).forEach(function (key) {
    var value = headers[key];
    if (value instanceof Array) {
      value = value[0];
    }
    result[key.toLowerCase()] = value;
  });
  return JSON.stringify(result);
}

exports.default = {
  defaultHeaders: defaultHeaders,
  defaultOptions: defaultOptions,
  defaultType: defaultType,
  contentTypeMap: contentTypeMap,
  filterStatus: filterStatus,
  parseJSON: parseJSON,
  toForm: toForm,
  parseHeader: parseHeader
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/requestAnimationFrame/animationShim.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterPageTime = Date.now();

var TARGET_FPS = 60;

var requests = Object.create(null);

var raf_handle = 0;

var timeout_handle = -1;

function onFrameTimer() {
  var cur_requests = requests;
  requests = Object.create(null);
  timeout_handle = -1;
  Object.keys(cur_requests).forEach(function (id) {
    var request = cur_requests[id];

    request(Date.now() - enterPageTime);
  });
}

var requestAnimationFrame = exports.requestAnimationFrame = function requestAnimationFrame(callback) {
  var cb_handle = ++raf_handle;
  requests[cb_handle] = callback;
  if (timeout_handle === -1) {
    timeout_handle = setTimeout(onFrameTimer, 1000 / TARGET_FPS);
  }
  return cb_handle;
};

var cancelAnimationFrame = exports.cancelAnimationFrame = function cancelAnimationFrame(handle) {
  delete requests[handle];
  if (Object.keys(requests).length === 0) {
    clearTimeout(timeout_handle);
    timeout_handle = -1;
  }
};

/***/ }),

/***/ "./node_modules/chameleon-api/src/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFn = isFn;
exports.isStr = isStr;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.buildQueryStringUrl = buildQueryStringUrl;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromUrl = getQueryParamsFromUrl;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.getRefObj = getRefObj;
exports.compareVersion = compareVersion;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isNum(obj) {
  return typeof obj === 'number';
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var strArr = [];
  var keys = null;
  if (obj && Object.keys(obj).length > 0) {
    keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      strArr.push(key + '=' + encodeURIComponent(obj[key]));
    }
  }
  return strArr.join('&');
}

function buildQueryStringUrl(params) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!url) return queryStringify(params);
  var retUrl = url;
  if (queryStringify(params)) {
    retUrl = url.indexOf('?') > -1 ? url + '&' + queryStringify(params) : url + '?' + queryStringify(params);
  }
  return retUrl;
}

function queryParse() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return !/^(https?\:\/\/)|^(\/\/)/.test(url);
}

function addApiPrefix(url, domainkey) {
  var domainMap = process.env.domainMap;
  // 新版cli
  if (domainMap) {
    var prefix = domainMap[domainkey] || process.env.devApiPrefix;
    return prefix + url;
  } else {
    // 老版本配置apiPrefix
    if (true) {
      return "http://172.24.40.90:5556" + url;
    }
  }
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    try {
      some = JSON.parse(some);
    } catch (err) {}
  }
  return some;
}

function getQueryParamsFromUrl(url) {
  var arr = url.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromUrl(url);

  var _queryObj$path = queryObj.path,
      path = _queryObj$path === undefined ? '' : _queryObj$path,
      _queryObj$envVersion = queryObj.envVersion,
      envVersion = _queryObj$envVersion === undefined ? '' : _queryObj$envVersion,
      _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$qq_appid = queryObj.qq_appid,
      qq_appid = _queryObj$qq_appid === undefined ? '' : _queryObj$qq_appid,
      _queryObj$qq_path = queryObj.qq_path,
      qq_path = _queryObj$qq_path === undefined ? '' : _queryObj$qq_path,
      _queryObj$qq_envVersi = queryObj.qq_envVersion,
      qq_envVersion = _queryObj$qq_envVersi === undefined ? '' : _queryObj$qq_envVersi,
      _queryObj$baidu_appid = queryObj.baidu_appid,
      baidu_appid = _queryObj$baidu_appid === undefined ? '' : _queryObj$baidu_appid,
      _queryObj$baidu_path = queryObj.baidu_path,
      baidu_path = _queryObj$baidu_path === undefined ? '' : _queryObj$baidu_path,
      _queryObj$baidu_envVe = queryObj.baidu_envVersion,
      baidu_envVersion = _queryObj$baidu_envVe === undefined ? '' : _queryObj$baidu_envVe,
      _queryObj$alipay_appi = queryObj.alipay_appid,
      alipay_appid = _queryObj$alipay_appi === undefined ? '' : _queryObj$alipay_appi,
      _queryObj$alipay_path = queryObj.alipay_path,
      alipay_path = _queryObj$alipay_path === undefined ? '' : _queryObj$alipay_path,
      _queryObj$alipay_envV = queryObj.alipay_envVersion,
      alipay_envVersion = _queryObj$alipay_envV === undefined ? '' : _queryObj$alipay_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$cml_addr = queryObj.cml_addr,
      cml_addr = _queryObj$cml_addr === undefined ? '' : _queryObj$cml_addr,
      extraData = _objectWithoutProperties(queryObj, ['path', 'envVersion', 'weixin_appid', 'weixin_path', 'weixin_envVersion', 'qq_appid', 'qq_path', 'qq_envVersion', 'baidu_appid', 'baidu_path', 'baidu_envVersion', 'alipay_appid', 'alipay_path', 'alipay_envVersion', 'weex_path', 'cml_addr']);

  var objTreated = {
    weex: cml_addr ? webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&cml_addr=' + cml_addr : null,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path || path,
      extraData: extraData,
      envVersion: weixin_envVersion || envVersion
    },
    qq: {
      appId: qq_appid,
      path: qq_path || path,
      extraData: extraData,
      envVersion: qq_envVersion || envVersion
    },
    alipay: {
      appId: alipay_appid,
      path: alipay_path || path,
      extraData: extraData,
      envVersion: alipay_envVersion || envVersion
    },
    baidu: {
      appKey: baidu_appid,
      path: baidu_path || path,
      extraData: extraData
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

// 获取ref的通用对象
function getRefObj(ref, context) {
  var refObj = {
    webDom: '',
    id: '',
    weexRef: '',
    context: context
  };
  // 容错处理
  if (!ref) return refObj;

  // 兼容新版ref, 为字符串
  if (typeof ref == 'string') {
    refObj.id = ref;
    if (false) {
      refObj.weexRef = context.$refs && context.$refs[ref];
    } else if (false) {
      refObj.webDom = context.$refs[ref] && context.$refs[ref][0] || context.$refs[ref] && context.$refs[ref].$el || context.$refs[ref];
    }
    return refObj;
  }

  // 向下兼容旧版ref
  if (true) {
    refObj.id = ref.id;
  } else if (process.env.platform === 'weex') {
    refObj.weexRef = ref;
  } else if (ref.$el) {
    refObj.webDom = ref.$el;
  } else {
    refObj.webDom = ref;
  }
  return refObj;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}

/**
 * 判断targetMap中的属性是否被checkMap的属性包含，不是则抛出错误
 * @param {Object || Array} checkMap 
 * @param {Object} targetMap 
 * @returns {Boolean}
 */
var checkValue = exports.checkValue = function checkValue(check, targetMap) {
  if (isObj(check) || isArray(check)) {
    var checkArray = isObj(check) ? Object.keys(check) : check;
    Object.keys(targetMap).forEach(function (key) {
      if (!checkArray.includes(key)) {
        throw Error(key + '\u503C\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u68C0\u67E5\uFF01');
      }
    });
  } else {
    // redLog('请传入数组或对象')
    return false;
  }
  return true;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/chameleon-runtime/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/createApp/index.js");

var _index2 = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/createPage/index.js");

var _index3 = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/createComponent/index.js");

var _index4 = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/bootstrap/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({
  createApp: _index.createApp,
  createPage: _index2.createPage,
  createComponent: _index3.createComponent
}, _index5.default);

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/bootstrap/index.interface":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: not find <script cml-type='qq'></script> in /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-runtime/src/interfaces/bootstrap/index.interface\n    at getRawContent (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:79:13)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:83:48)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/index.js:11:22)\n    at Object.module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/interface-loader/src/index.js:11:27)");

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/bootstrap/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/bootstrap/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
exports.default = {
  bootstrap: function bootstrap() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _index2.default.bootstrap.call(_index2.default, options);
  },
  getInfo: _index2.default.getInfo

};

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/createApp/index.interface":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: not find <script cml-type='qq'></script> in /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-runtime/src/interfaces/createApp/index.interface\n    at getRawContent (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:79:13)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:83:48)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/index.js:11:22)\n    at Object.module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/interface-loader/src/index.js:11:27)");

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/createApp/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _index = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/createApp/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApp(options) {
  return _index2.default.createApp(options);
}

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/createComponent/index.interface":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: not find <script cml-type='qq'></script> in /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-runtime/src/interfaces/createComponent/index.interface\n    at getRawContent (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:79:13)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:83:48)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/index.js:11:22)\n    at Object.module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/interface-loader/src/index.js:11:27)");

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/createComponent/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;

var _index = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/createComponent/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createComponent(options) {
  return _index2.default.createComponent(options);
}

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/createPage/index.interface":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: not find <script cml-type='qq'></script> in /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-runtime/src/interfaces/createPage/index.interface\n    at getRawContent (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:79:13)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:83:48)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/index.js:11:22)\n    at Object.module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/interface-loader/src/index.js:11:27)");

/***/ }),

/***/ "./node_modules/chameleon-runtime/src/interfaces/createPage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _index = __webpack_require__("./node_modules/chameleon-runtime/src/interfaces/createPage/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPage(options) {
  return _index2.default.createPage(options);
}

/***/ }),

/***/ "./node_modules/chameleon-store/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-store/src/interfaces/createStore/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _index2.default;

/***/ }),

/***/ "./node_modules/chameleon-store/src/interfaces/createStore/index.interface":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: not find <script cml-type='qq'></script> in /Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/chameleon-store/src/interfaces/createStore/index.interface\n    at getRawContent (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:79:13)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/lib/getMethodCode.js:83:48)\n    at module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/index.js:11:22)\n    at Object.module.exports (/Users/didi/.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/interface-loader/src/index.js:11:27)");

/***/ }),

/***/ "./node_modules/chameleon-store/src/interfaces/createStore/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _index = __webpack_require__("./node_modules/chameleon-store/src/interfaces/createStore/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(options) {
  return _index2.default.createStore(options);
}

/***/ }),

/***/ "./node_modules/cml-tt-api/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/alert/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/confirm/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/showToast/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/setTitle/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/requestAnimationFrame/index.js");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/cancelAnimationFrame/index.js");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/inSDK/index.js");

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/chooseImage/index.js");

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/close/index.js");

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/open/index.js");

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/setStorage/index.js");

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getStorage/index.js");

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/removeStorage/index.js");

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getClipBoardData/index.js");

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/setClipBoardData/index.js");

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/reload/index.js");

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/redirectTo/index.js");

var _index34 = _interopRequireDefault(_index33);

var _index35 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/navigateTo/index.js");

var _index36 = _interopRequireDefault(_index35);

var _index37 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/navigateBack/index.js");

var _index38 = _interopRequireDefault(_index37);

var _index39 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getSystemInfo/index.js");

var _index40 = _interopRequireDefault(_index39);

var _index41 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getLaunchOptionsSync/index.js");

var _index42 = _interopRequireDefault(_index41);

var _index43 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getRect/index.js");

var _index44 = _interopRequireDefault(_index43);

var _index45 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/px2cpx/index.js");

var _index46 = _interopRequireDefault(_index45);

var _index47 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/cpx2px/index.js");

var _index48 = _interopRequireDefault(_index47);

var _index49 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/initSocket/index.js");

var _index50 = _interopRequireDefault(_index49);

var _index51 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/canIUse/index.js");

var _index52 = _interopRequireDefault(_index51);

var _index53 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getLocationInfo/index.js");

var _index54 = _interopRequireDefault(_index53);

var _index55 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/request/index.js");

var _index56 = _interopRequireDefault(_index55);

var _index57 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/get/index.js");

var _index58 = _interopRequireDefault(_index57);

var _index59 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/post/index.js");

var _index60 = _interopRequireDefault(_index59);

var _index61 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/createAnimation/index.js");

var _index62 = _interopRequireDefault(_index61);

var _index63 = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/createInnerAudioContext/index.js");

var _index64 = _interopRequireDefault(_index63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  alert: _index2.default,
  confirm: _index4.default,
  showToast: _index6.default,
  setTitle: _index8.default,
  requestAnimationFrame: _index10.default,
  cancelAnimationFrame: _index12.default,
  inSDK: _index14.default,
  chooseImage: _index16.default,
  close: _index18.default,
  open: _index20.default,
  setStorage: _index22.default,
  getStorage: _index24.default,
  removeStorage: _index26.default,
  getClipBoardData: _index28.default,
  setClipBoardData: _index30.default,
  reload: _index32.default,
  redirectTo: _index34.default,
  navigateTo: _index36.default,
  navigateBack: _index38.default,
  getSystemInfo: _index40.default,
  getLaunchOptionsSync: _index42.default,
  getRect: _index44.default,
  px2cpx: _index46.default,
  cpx2px: _index48.default,
  initSocket: _index50.default,
  canIUse: _index52.default,
  getLocationInfo: _index54.default,
  request: _index56.default,
  get: _index58.default,
  post: _index60.default,
  createAnimation: _index62.default,
  createInnerAudioContext: _index64.default
};

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/alert/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/alert/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "alertOpt": {
      "message": "String",
      "confirmTitle": "String"
    },
    "successCallBack": {
      "input": ["String"],
      "output": "Undefined"
    },
    "failCallBack": {
      "input": ["String"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "uiInterface": {
      "alert": {
        "input": ["alertOpt", "successCallBack", "failCallBack"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["uiInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "alert",
    value: function alert(opt, successCallBack, failCallBack) {
      var message = opt.message,
          confirmTitle = opt.confirmTitle;

      qq.showModal({
        showCancel: false,
        title: '',
        content: message,
        confirmText: confirmTitle,

        success: function success() {
          successCallBack(confirmTitle);
        },
        fail: function fail() {
          failCallBack(confirmTitle);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/alert/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = alert;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/alert/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alert(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle;

  return new Promise(function (resolve, reject) {
    _index2.default.alert({ message: message, confirmTitle: confirmTitle }, function () {
      resolve();
    }, function () {
      reject();
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/canIUse/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__("./node_modules/chameleon-api/src/config.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/canIUse/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "callback": {
      "input": ["Boolean"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "canIUseInterface": {
      "canIUse": {
        "input": ["String", "callback"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["canIUseInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "canIUse",
    value: function canIUse(metName, cb) {
      if (!_config.api[metName]) {
        cb(false);
        return;
      }

      var allCan = _config.api[metName].allCanUse;

      if (allCan) {
        cb(true);
        return;
      }

      var method = _config.api[metName].baseOn.qq;
      var result = qq.canIUse(method);
      cb(result);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/canIUse/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canIUse;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/canIUse/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canIUse(metName) {
  return new Promise(function (resolve, reject) {
    _index2.default.canIUse(metName, function (res) {
      if (res) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/cancelAnimationFrame/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animationShim = __webpack_require__("./node_modules/chameleon-api/src/interfaces/requestAnimationFrame/animationShim.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/cancelAnimationFrame/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "AnimationFrameFactory": {
      "input": [],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "CancelAnimationInterface": {
      "init": {
        "input": [],
        "output": "AnimationFrameFactory"
      }
    }
  },
  "classes": {
    "Method": ["CancelAnimationInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "init",
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: "cancelAnimationFrame",
          value: function cancelAnimationFrame() {
            return _animationShim.cancelAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/cancelAnimationFrame/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/cancelAnimationFrame/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CancelAnimationFactory = _index2.default.init();

var animationFrame = new CancelAnimationFactory();

exports.default = animationFrame.cancelAnimationFrame();

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/chooseImage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/chooseImage/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "params": {
      "type": "String"
    },
    "callbackSuccessReturn__tempFilePaths": ["String"],
    "callbackSuccessReturn": {
      "base64": "String",
      "tempFilePaths": "callbackSuccessReturn__tempFilePaths"
    },
    "callbackFailReturn": {
      "errMsg": "String"
    },
    "callbackSuccess": {
      "input": ["callbackSuccessReturn"],
      "output": "Undefined"
    },
    "callbackFail": {
      "input": ["callbackFailReturn"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "chooseImageInterface": {
      "chooseImage": {
        "input": ["params", "callbackSuccess", "callbackFail"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["chooseImageInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "chooseImage",
    value: function chooseImage(params, callbackSuccess, callbackFail) {
      var sourceType = [];

      switch (params.type) {
        case 'camera':
          sourceType = ['camera'];
          break;

        case 'album':
          sourceType = ['album'];
          break;

        default:
          sourceType = ['album', 'camera'];
      }

      qq.chooseImage({
        count: 1,
        sizeType: ['original'],
        sourceType: sourceType,

        success: function success(res) {
          callbackSuccess({
            base64: '',
            tempFilePaths: res.tempFilePaths
          });
        },
        fail: function fail(err) {
          callbackFail(err);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/chooseImage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chooseImage;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/chooseImage/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function chooseImage() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    type: 'choice'
  };

  return new Promise(function (resolve, reject) {
    _index2.default.chooseImage(params, function (res) {
      resolve(res);
    }, function (err) {
      reject(err);
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/close/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/close/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "closeInterface": {
      "close": {
        "input": [],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["closeInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "close",
    value: function close() {
      qq.navigateBack({
        delta: 1
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/close/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = close;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/close/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function close() {
  _index2.default.close();
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/confirm/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/confirm/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "confirmOpt": {
      "message": "String",
      "confirmTitle": "String",
      "cancelTitle": "String"
    },
    "successCallBack": {
      "input": ["String"],
      "output": "Undefined"
    },
    "failCallBack": {
      "input": [],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "uiInterface": {
      "confirm": {
        "input": ["confirmOpt", "successCallBack", "failCallBack"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["uiInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "confirm",
    value: function confirm(opt, successCallBack, failCallBack) {
      var message = opt.message,
          confirmTitle = opt.confirmTitle,
          cancelTitle = opt.cancelTitle;

      qq.showModal({
        title: '',
        content: message,
        confirmText: confirmTitle,
        cancelText: cancelTitle,

        success: function success(res) {
          if (res.confirm) {
            successCallBack(confirmTitle);
          } else {
            successCallBack(cancelTitle);
          }
        },
        fail: function fail() {
          failCallBack();
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/confirm/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/confirm/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function confirm(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$confirmTitle = opt.confirmTitle,
      confirmTitle = _opt$confirmTitle === undefined ? '确定' : _opt$confirmTitle,
      _opt$cancelTitle = opt.cancelTitle,
      cancelTitle = _opt$cancelTitle === undefined ? '取消' : _opt$cancelTitle;

  return new Promise(function (resolve, reject) {
    _index2.default.confirm({ message: message, confirmTitle: confirmTitle, cancelTitle: cancelTitle }, function (value) {
      resolve(value);
    }, function () {
      reject();
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/cpx2px/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cpx2px;

var _getWidth = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/px2cpx/getWidth.interface");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cpx2px(cpx) {
  if (typeof cpx !== 'number') {
    console.error('Parameter must be a number');
    return;
  }
  var viewportWidth = _getWidth2.default.getWidth();
  var px = +(viewportWidth / 750 * cpx).toFixed(3);
  return px;
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/createAnimation/createAnimationFactory.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var exportMiddleWare = _index2.default.exportMiddleWare,
    checkNumber = _index2.default.checkNumber,
    checkString = _index2.default.checkString;


var id = 0;

// 可用options
var STYLES = [{ key: 'width', type: 'number' }, { key: 'height', type: 'number' }, { key: 'opacity', type: 'number' }, { key: 'backgroundColor', type: 'string' }, // 16进制数值
{ key: 'translate', type: 'number' }, // web不支持
{ key: 'translateX', type: 'number' }, { key: 'translateY', type: 'number' }, { key: 'scale', type: 'number' }, // web不支持
{ key: 'scaleX', type: 'number' }, { key: 'scaleY', type: 'number' },
// {key:'skew', type: 'string'}, //weex不支持
// {key:'skewX', type: 'string'},
// {key:'skewY', type: 'string'},
// 暂时不支持校验，因为cml底层不支持校验多种类型
{ key: 'rotate', type: '' }, // web不支持,
{ key: 'rotateX', type: '' }, { key: 'rotateY', type: '' }, { key: 'transform', type: 'string' }];
// 可用descriptions
// const DESCRIPTIONS = [
//   'duration',
//   'timingFunction',
//   'delay',
//   'transformOrigin',
//   'cb'
// ];

var utils = {
  // 将styles的值 变为原型上的方法
  enhanceAnimationPrototype: function enhanceAnimationPrototype(target, styles) {
    var transformProps = Array.isArray(styles) ? styles : Object.keys(styles);
    transformProps.forEach(function (item) {
      target[item.key] = function () {
        for (var _len = arguments.length, style = Array(_len), _key = 0; _key < _len; _key++) {
          style[_key] = arguments[_key];
        }

        // 校验类型
        if (item.type === 'number') {
          checkNumber(style[0]);
        } else if (item.type === 'string') {
          checkString(style[0]);
        }
        this.styles[item.key] = style;
        return this;
      };
    }, this);
  }
};

var createAnimationFactory = function createAnimationFactory() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var updateQueue = [];
  // let stashQueue = [];

  this.id = id;
  id = id + 1;

  this.descriptions = description;

  this.styles = {};

  // 判断用户是否使用export
  this.useExport = '0';

  this.enqueue = function (param) {
    updateQueue.push(param);
  };

  this["export"] = function () {
    this.useExport = '1';

    var result = exportMiddleWare({
      id: this.id,
      useExport: this.useExport,
      updateQueue: [].concat(_toConsumableArray(updateQueue))
    });
    // 清空
    updateQueue = [];
    this.useExport = '0';
    if (_index2.default && _index2.default.isTTAnimation) {
      console.log('Index', _index2.default);
      return JSON.stringify(result); //头条小程序接受的是字符串
    }
    return result;
  };

  // 此操作与重新构建类重复
  // this.reset = function() {
  //   updateQueue = [];
  // }
  // 暂存
  // this.stash = function() {
  //   stashQueue = [...updateQueue];
  // };

  // this.stashExport = function() {
  //   this.useExport = '1';

  //   const result = exportMiddleWare({
  //     id: this.id,
  //     useExport: this.useExport,
  //     updateQueue: [...updateQueue]
  //   });
  //   // 清空
  //   this.useExport = '0';
  //   stashQueue = [];
  //   return result;
  // };
};

createAnimationFactory.prototype = {
  clear: function clear() {
    this.styles = {};
    this.descriptions = {};
    return this;
  },

  styles: function styles(_styles) {
    this.styles = Object.assign({}, this.styles, _styles);
    return this;
  },

  step: function step(descriptions) {
    this.enqueue({
      styles: this.styles,
      descriptions: Object.assign({ cb: function cb() {
          return false;
        }, duration: 400 }, this.descriptions, descriptions)
    });
    this.clear();
    return this;
  }
};

utils.enhanceAnimationPrototype(createAnimationFactory.prototype, STYLES);

exports.default = createAnimationFactory;

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/createAnimation/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/common.js");

var _qq = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/styleLoader/qq.js");

var _common2 = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/descriptionLoader/common.js");

var _util = __webpack_require__("./node_modules/chameleon-api/src/interfaces/createAnimation/_util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/createAnimation/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "CreateAnimationInterface": {
      "initAnimation": {
        "input": [],
        "output": "Undefined"
      },
      "exportMiddleWare": {
        "input": ["CMLObject"],
        "output": "CMLObject"
      },
      "checkNumber": {
        "input": ["Number"],
        "output": "Undefined"
      },
      "checkString": {
        "input": ["String"],
        "output": "Undefined"
      },
      "checkObject": {
        "input": ["CMLObject"],
        "output": "Undefined"
      },
      "getViewportWidth": {
        "input": [],
        "output": "Number"
      }
    }
  },
  "classes": {
    "Method": ["CreateAnimationInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var styleLoaderQueue = [_common.commonLoader, _common.cacheTransformStylesLoader, _qq.transformLoader];
var descriptionLoaderQueue = [_common2.commonLoader, _common2.cacheTransformOriginLoader];

var createAnimationFuc = function createAnimationFuc(quene) {
  var animation = qq.createAnimation();
  var cbs = {};
  quene.forEach(function (tick, i) {
    var styles = tick.styles,
        descriptions = tick.descriptions;

    cbs[i] = descriptions.cb;
    Object.keys(styles).forEach(function (key) {
      var value = styles[key];
      animation[key](value);
    });
    animation.step(descriptions);
  });
  var temp = animation.export();
  temp.cbs = cbs;
  temp.index = 0;
  return temp;
};

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "initAnimation",
    value: function initAnimation() {}
  }, {
    key: "checkNumber",
    value: function checkNumber(number) {}
  }, {
    key: "checkString",
    value: function checkString(string) {}
  }, {
    key: "checkObject",
    value: function checkObject(object) {}
  }, {
    key: "getViewportWidth",
    value: function getViewportWidth() {
      var _qq$getSystemInfoSync = qq.getSystemInfoSync(),
          windowWidth = _qq$getSystemInfoSync.windowWidth;

      return windowWidth;
    }
  }, {
    key: "exportMiddleWare",
    value: function exportMiddleWare(param) {
      return createAnimationFuc(param.updateQueue.map(function (tick) {
        return {
          styles: (0, _util.stylePipe)(tick.styles, tick.descriptions, styleLoaderQueue, param.id),
          descriptions: (0, _util.descriptionPipe)(tick.descriptions, tick.styles, descriptionLoaderQueue, param.id)
        };
      }));
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/createAnimation/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/createAnimation/index.interface");

var _index2 = _interopRequireDefault(_index);

var _createAnimationFactory = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/createAnimation/createAnimationFactory.js");

var _createAnimationFactory2 = _interopRequireDefault(_createAnimationFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.initAnimation();

exports.default = function (description) {
  return new _createAnimationFactory2.default(description);
};

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/createInnerAudioContext/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/createInnerAudioContext/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "callback": {
      "input": ["CMLObject"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "AudioInterfaceInterface": {
      "createInnerAudioContext": {
        "input": [],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["AudioInterfaceInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "createInnerAudioContext",
    value: function createInnerAudioContext() {
      return qq.createInnerAudioContext();
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/createInnerAudioContext/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInnerAudioContext;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/createInnerAudioContext/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createInnerAudioContext() {
  return _index2.default.createInnerAudioContext();
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/get/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/request/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function post(options) {
  options.method = "GET";
  return (0, _index2.default)(options);
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getClipBoardData/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/getClipBoardData/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "res": {
      "errno": "Number",
      "errMsg": "String",
      "data": "String"
    },
    "callback": {
      "input": ["res"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "ClipBoardDataInterface": {
      "getClipBoardData": {
        "input": ["callback"],
        "output": "Undefined"
      },
      "setClipBoardData": {
        "input": ["String", "callback"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["ClipBoardDataInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getClipBoardData",
    value: function getClipBoardData(cb) {
      qq.getClipboardData({
        success: function success(res) {
          cb({
            errno: 0,
            errMsg: '',
            data: res.data
          });
        },
        fail: function fail(res) {
          cb({
            errno: -1,
            errMsg: 'qq.getClipboardData fail',
            data: ''
          });
        }
      });
    }
  }, {
    key: "setClipBoardData",
    value: function setClipBoardData(text, cb) {
      qq.setClipboardData({
        data: text,
        success: function success(res) {
          cb({
            errno: 0,
            errMsg: '',
            data: text
          });
        },
        fail: function fail(res) {
          cb({
            errno: -1,
            data: '',
            errMsg: 'qq.setClipboardData fail'
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getClipBoardData/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClipBoardData;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getClipBoardData/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClipBoardData() {
  return new Promise(function (resolve, reject) {
    _index2.default.getClipBoardData(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.msg);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getLaunchOptionsSync/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/getLaunchOptionsSync/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "launchOptionsInterface": {
      "getLaunchOptionsSync": {
        "input": [],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["launchOptionsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getLaunchOptionsSync",
    value: function getLaunchOptionsSync() {
      return qq.getLaunchOptionsSync();
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getLaunchOptionsSync/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLaunchOptionsSync;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getLaunchOptionsSync/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLaunchOptionsSync() {
  return _index2.default.getLaunchOptionsSync();
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getLocationInfo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/getLocationInfo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "data": {
      "lat": "Number",
      "lng": "Number"
    },
    "resData": {
      "errno": "Number",
      "errMsg": "String",
      "data": "data"
    },
    "callback": {
      "input": ["resData"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "getLocationInfo": {
        "input": ["callback"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getLocationInfo",
    value: function getLocationInfo(cb) {
      qq.getLocation({
        type: 'wgs84',
        success: function success(res) {
          var latitude = +res.latitude;
          var longitude = +res.longitude;
          cb({
            errno: 0,
            errMsg: '',
            data: {
              lat: latitude,
              lng: longitude
            }
          });
        },

        fail: function fail() {
          cb({
            errno: -1,
            errMsg: 'getLocation failed',
            data: {
              lat: 0,
              lng: 0
            }
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getLocationInfo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocationInfo;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getLocationInfo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocationInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getLocationInfo(function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getRect/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/px2cpx/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/getRect/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "resData": {
      "width": "Number",
      "height": "Number",
      "left": "Number",
      "top": "Number",
      "right": "Number",
      "bottom": "Number"
    },
    "CallBack": {
      "input": ["resData"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UserInfoInterface": {
      "getRect": {
        "input": ["CMLObject", "CallBack"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UserInfoInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getRect",
    value: function getRect(refObj, cb) {
      var query = qq.createSelectorQuery().in(refObj.context);
      query.select("#" + refObj.id).boundingClientRect();
      query.exec(function (res) {
        var rectObj = {
          width: res[0] && (0, _index2.default)(res[0].width) || 0,
          height: res[0] && (0, _index2.default)(res[0].height) || 0,
          left: res[0] && (0, _index2.default)(res[0].left) || 0,
          top: res[0] && (0, _index2.default)(res[0].top) || 0,
          right: res[0] && (0, _index2.default)(res[0].right) || 0,
          bottom: res[0] && (0, _index2.default)(res[0].bottom) || 0
        };
        cb(rectObj);
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getRect/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRect;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getRect/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRect(ref, context) {
  return new Promise(function (resolve, reject) {
    var refObj = (0, _utils.getRefObj)(ref, context);
    _index2.default.getRect(refObj, function (res) {
      resolve(res);
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getStorage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/getStorage/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "obj": {
      "errno": "Number",
      "errMsg": "String",
      "data": "String"
    },
    "getCallback": {
      "input": ["obj"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "getStorage": {
        "input": ["String", "getCallback"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getStorage",
    value: function getStorage(key, cb) {
      try {
        var _data = qq.getStorageSync(key);

        if (_data && typeof _data !== 'string') {
          _data = JSON.stringify(_data);
        }

        cb({
          errno: 0,
          errMsg: 'success',
          data: _data !== null ? _data : ''
        });
      } catch (e) {
        var _errMsg = void 0;

        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }

        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getStorage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStorage;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getStorage/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.getStorage(key, function (res) {
      if (res.errno === 0) {
        res.data = (0, _utils.tryJsonParse)(res.data);
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getSystemInfo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/getSystemInfo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "res": {
      "os": "String",
      "env": "String",
      "viewportWidth": "Number",
      "viewportHeight": "Number",
      "extraParams": "CMLObject"
    },
    "CallBack": {
      "input": ["res"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UserInfoInterface": {
      "getSystemInfo": {
        "input": ["CallBack"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UserInfoInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var systemInfo = null;

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getSystemInfo",
    value: function getSystemInfo(cb) {
      if (systemInfo) {
        cb(systemInfo);
        return;
      }

      qq.getSystemInfo({
        success: function success(res) {
          var os = /android/i.test(res.system) ? 'android' : 'ios';
          var viewportWidth = res.windowWidth;
          var viewportHeight = res.windowHeight;
          systemInfo = {
            os: os,
            env: 'qq',
            viewportWidth: viewportWidth,
            viewportHeight: viewportHeight,
            extraParams: res || {}
          };
          cb(systemInfo);
        },
        fail: function fail(err) {
          // 获取失败时不做存储
          var failSystemInfo = {
            os: '',
            env: 'qq',
            viewportWidth: 0,
            viewportHeight: 0,
            extraParams: {}
          };
          cb(failSystemInfo);
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/getSystemInfo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getSystemInfo;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getSystemInfo/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    _index2.default.getSystemInfo(function (res) {
      res.extraParams = (0, _utils.tryJsonParse)(res.extraParams);
      // px2viewpx
      var pxRpxRate = 750 / res.viewportWidth;
      var viewportHeight = (res.viewportHeight * pxRpxRate).toFixed(3);
      var viewportWidth = (res.viewportWidth * pxRpxRate).toFixed(3);

      if (res.os) {
        resolve(_extends({}, res, {
          viewportHeight: viewportHeight,
          viewportWidth: viewportWidth
        }));
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/inSDK/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/inSDK/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "InSDKInterface": {
      "inSDK": {
        "input": [],
        "output": "Boolean"
      }
    }
  },
  "classes": {
    "Method": ["InSDKInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "inSDK",
    value: function inSDK() {
      return false;
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/inSDK/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inSDK;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/inSDK/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inSDK() {
  return _index2.default.inSDK();
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/initSocket/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qqSocket = __webpack_require__("./node_modules/chameleon-api/src/interfaces/initSocket/qqSocket.js");

var _qqSocket2 = _interopRequireDefault(_qqSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/initSocket/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "socketInterface": {
      "initSocket": {
        "input": ["String"],
        "output": "CMLObject"
      }
    }
  },
  "classes": {
    "Method": ["socketInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "initSocket",
    value: function initSocket(url) {
      return new _qqSocket2.default(url);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/initSocket/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initSocket;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/initSocket/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initSocket() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var instance = _index2.default.initSocket(url);
  return instance;
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/navigateBack/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/navigateBack/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "UtilsInterface": {
      "navigateBack": {
        "input": ["Number"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "navigateBack",
    value: function navigateBack(backPageNum) {
      qq.navigateBack({
        delta: Math.abs(backPageNum)
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/navigateBack/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateBack;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/navigateBack/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateBack() {
  var backPageNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

  _index2.default.navigateBack(backPageNum);
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/navigateTo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/navigateTo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "options": {
      "path": "String",
      "query": "CMLObject",
      "url": "String"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "navigateTo": {
        "input": ["options"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "navigateTo",
    value: function navigateTo(opt) {
      var path = opt.path,
          query = opt.query;

      path = (0, _utils.buildQueryStringUrl)(query, path);
      qq.navigateTo({
        url: path
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/navigateTo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateTo;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/navigateTo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateTo(opt) {
  // 转换为字符串通过多态不支持object，需改
  var query = opt.query || {};
  var path = opt.path || '';
  var url = opt.url || '';

  // 不能通过直接转换类型对opt.query重新赋值的操作, 否则会造成opt原始传入对象数据被篡改的问题
  _index2.default.navigateTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/open/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/open/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "extraOptions": {
      "closeCurrent": "Boolean"
    }
  },
  "interfaces": {
    "openPageInterface": {
      "open": {
        "input": ["String", "CMLObject", "extraOptions"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["openPageInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "open",
    value: function open(url, commonPatchParams, extraOptions) {
      url = (0, _utils.buildQueryStringUrl)(commonPatchParams, url);
      qq.navigateToMiniProgram((0, _utils.getOpenObj)(url).qq);
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/open/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = open;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/open/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function open() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var commonPatchParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { closeCurrent: false };

  _index2.default.open(url, commonPatchParams, extraOptions);
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/post/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/request/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function post(options) {
  options.method = "POST";
  return (0, _index2.default)(options);
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/px2cpx/getWidth.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/px2cpx/getWidth.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "getWidthInterface": {
      "getWidth": {
        "input": [],
        "output": "Number"
      }
    }
  },
  "classes": {
    "Method": ["getWidthInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var _qq$getSystemInfoSync = qq.getSystemInfoSync(),
    windowWidth = _qq$getSystemInfoSync.windowWidth;

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "getWidth",
    value: function getWidth() {
      return windowWidth;
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/px2cpx/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = px2cpx;

var _getWidth = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/px2cpx/getWidth.interface");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function px2cpx(px) {

  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/redirectTo/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/redirectTo/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "options": {
      "path": "String",
      "query": "CMLObject",
      "url": "String"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "redirectTo": {
        "input": ["options"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "redirectTo",
    value: function redirectTo(opt) {
      var path = opt.path,
          query = opt.query;

      path = (0, _utils.buildQueryStringUrl)(query, path);
      qq.redirectTo({
        url: path
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/redirectTo/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = redirectTo;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/redirectTo/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function redirectTo(opt) {
  var query = opt.query || {};
  var path = opt.path || '';
  var url = opt.url || '';

  _index2.default.redirectTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/reload/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/reload/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "reloadInterface": {
      "reload": {
        "input": [],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["reloadInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "reload",
    value: function reload() {}
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/reload/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reload;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/reload/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reload() {
  _index2.default.reload();
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/removeStorage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/removeStorage/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "obj": {
      "errno": "Number",
      "errMsg": "String",
      "data": "String"
    },
    "removeCallback": {
      "input": ["obj"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "removeStorage": {
        "input": ["String", "removeCallback"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "removeStorage",
    value: function removeStorage(key, cb) {
      try {
        qq.removeStorageSync(key);
        cb({
          errno: 0,
          errMsg: 'success',
          data: ''
        });
      } catch (e) {
        var _errMsg = void 0;

        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }

        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/removeStorage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStorage;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/removeStorage/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeStorage(key) {
  return new Promise(function (resolve, reject) {
    _index2.default.removeStorage(key, function (res) {
      if (res.errno === 0) {
        resolve();
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/request/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = __webpack_require__("./node_modules/chameleon-api/src/interfaces/request/common.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/request/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "responseType": {
      "status": "Number",
      "data": "String",
      "headers": "String"
    },
    "requestParams__cb": {
      "input": ["responseType"],
      "output": "Undefined"
    },
    "requestParams": {
      "url": "String",
      "body": "String",
      "headers": "CMLObject",
      "setting": "CMLObject",
      "method": "String",
      "cb": "requestParams__cb"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "request": {
        "input": ["requestParams"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "request",
    value: function request(params) {
      var url = params.url,
          body = params.body,
          headers = params.headers,
          method = params.method,
          cb = params.cb;

      qq.request({
        url: url,
        data: body,
        dataType: 'text',
        method: method,
        header: headers,
        success: function success(res) {
          cb({
            status: res.statusCode,
            data: res.data,
            headers: (0, _common.parseHeader)(res.header)
          });
        },
        fail: function fail(e) {
          cb({
            status: -1,
            data: 'request failed',
            headers: '{}'
          });
        }
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/request/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = request;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/request/index.interface");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("./node_modules/chameleon-api/src/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(_ref) {
  var domain = _ref.domain,
      url = _ref.url,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$header = _ref.header,
      header = _ref$header === undefined ? {} : _ref$header,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === undefined ? 'form' : _ref$contentType,
      _ref$setting = _ref.setting,
      setting = _ref$setting === undefined ? {} : _ref$setting,
      _ref$resDataType = _ref.resDataType,
      resDataType = _ref$resDataType === undefined ? 'json' : _ref$resDataType;

  method = method.toUpperCase();
  var _setting$apiPrefix = setting.apiPrefix,
      apiPrefix = _setting$apiPrefix === undefined ? (0, _utils.isNeedApiPrefix)(url) : _setting$apiPrefix,
      _setting$jsonp = setting.jsonp,
      jsonp = _setting$jsonp === undefined ? false : _setting$jsonp,
      _setting$credentials = setting.credentials,
      credentials = _setting$credentials === undefined ? 'include' : _setting$credentials;

  var media = "dev";
  // 如果用户配置了domain
  if (domain) {
    if (media === 'dev') {
      // dev模式对domain做分割处理
      if (~domain.indexOf('__DEV_SPLIT__')) {
        var splitArray = domain.split('__DEV_SPLIT__');
        domain = splitArray[0];
        var domainKey = splitArray[1];
        url = (0, _utils.buildQueryStringUrl)({ domainKey: domainKey }, url);
      }
    }
    url = domain + url;
  } else {
    // 如果没有配置domain
    if (apiPrefix) {
      // 有apiPrefix优先
      if (true) {
        url = "http://172.24.40.90:5556" + url;
      }
    }
  }

  if (['GET', 'PUT', 'DELETE'].indexOf(method) > -1) {
    url = (0, _utils.buildQueryStringUrl)(data, url);
  }
  switch (contentType) {
    case 'form':
      if (typeof data !== 'string') {
        data = (0, _utils.buildQueryStringUrl)(data);
      }
      header = _extends({}, header, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      break;
    case 'json':
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      header = _extends({}, header, {
        'Content-Type': 'application/json'
      });
      break;
  }
  if (typeof data !== 'string') {
    data = '';
  }

  return new Promise(function (resolve, reject) {
    _index2.default.request({
      url: url,
      body: data,
      setting: {
        apiPrefix: apiPrefix,
        jsonp: jsonp,
        credentials: credentials
      },
      method: method,
      headers: header,
      cb: function cb(res) {
        var status = res.status,
            headers = res.headers,
            data = res.data;

        if (status >= 200 && status < 300) {
          if (resDataType === 'json' && typeof data == 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              console.warn('resDataType默认为"json", 尝试对返回内容进行JSON.parse, 但似乎出了些问题(若不希望对结果进行parse, 可传入resDataType: "text"): ', e);
            }
          }
          resolve(data);
        } else {
          if (resDataType === 'json') {
            data = (0, _utils.tryJsonParse)(data);
          }
          headers = (0, _utils.tryJsonParse)(headers);
          reject({ data: data, headers: headers, status: status });
        }
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/requestAnimationFrame/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animationShim = __webpack_require__("./node_modules/chameleon-api/src/interfaces/requestAnimationFrame/animationShim.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/requestAnimationFrame/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "AnimationFrameFactory": {
      "input": [],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "RequestAnimationInterface": {
      "init": {
        "input": [],
        "output": "AnimationFrameFactory"
      }
    }
  },
  "classes": {
    "Method": ["RequestAnimationInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "init",
    value: function init() {
      return function () {
        function AnimationFrameFactory() {
          _classCallCheck(this, AnimationFrameFactory);
        }

        _createClass(AnimationFrameFactory, [{
          key: "requestAnimationFrame",
          value: function requestAnimationFrame() {
            return _animationShim.requestAnimationFrame;
          }
        }]);

        return AnimationFrameFactory;
      }();
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/requestAnimationFrame/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/requestAnimationFrame/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestAnimationFactory = _index2.default.init();

var animationFrame = new RequestAnimationFactory();
exports.default = animationFrame.requestAnimationFrame();

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/setClipBoardData/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setClipBoardData;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/getClipBoardData/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setClipBoardData(text) {
  return new Promise(function (resolve, reject) {
    _index2.default.setClipBoardData(text, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/setStorage/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/setStorage/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "obj": {
      "errno": "Number",
      "errMsg": "String",
      "data": "String"
    },
    "setCallback": {
      "input": ["obj"],
      "output": "Undefined"
    }
  },
  "interfaces": {
    "UtilsInterface": {
      "setStorage": {
        "input": ["String", "String", "setCallback"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["UtilsInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "setStorage",
    value: function setStorage(key, value, cb) {
      try {
        qq.setStorage({
          key: key,
          data: value,
          success: function success() {
            cb({
              errno: 0,
              errMsg: 'success',
              data: value
            });
          },
          fail: function fail() {
            cb({
              errno: -1,
              errMsg: 'fail',
              data: ''
            });
          }
        });
      } catch (e) {
        var _errMsg = void 0;

        if (typeof e !== 'string') {
          _errMsg = JSON.stringify(e);
        } else {
          _errMsg = e;
        }

        cb({
          errno: -1,
          errMsg: _errMsg,
          data: ''
        });
      }
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/setStorage/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = setStorage;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/setStorage/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setStorage(key, value) {
  var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (valueType !== 'string') {
    value = JSON.stringify(value);
  }
  if (valueType === 'undefined') {
    console.warn('The type of storage value can not be "undefined"');
    return Promise.reject('The type of storage value cannot be "undefined"');
  }
  return new Promise(function (resolve, reject) {
    _index2.default.setStorage(key, value, function (res) {
      if (res.errno === 0) {
        resolve(res.data);
      } else {
        reject(res.errMsg);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/setTitle/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/setTitle/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "setTitleInterface": {
      "setTitle": {
        "input": ["String"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["setTitleInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "setTitle",
    value: function setTitle(title) {
      qq.setNavigationBarTitle({
        title: title
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/setTitle/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTitle;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/setTitle/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _index2.default.setTitle(title);
}

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/showToast/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/didi/work/chameleon-space/cml-open-demos/cml-demo/node_modules/cml-tt-api/src/interfaces/showToast/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {
    "toastOpt": {
      "message": "String",
      "duration": "Number"
    }
  },
  "interfaces": {
    "uiInterface": {
      "showToast": {
        "input": ["toastOpt"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["uiInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "showToast",
    value: function showToast(opt) {
      var message = opt.message,
          duration = opt.duration;

      qq.showToast({
        icon: 'none',
        title: message,
        duration: duration
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../../.nvm/versions/node/v10.7.0/lib/node_modules/chameleon-tool/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/cml-tt-api/src/interfaces/showToast/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showToast;

var _index = __webpack_require__("./node_modules/cml-tt-api/src/interfaces/showToast/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showToast(opt) {
  var _opt$message = opt.message,
      message = _opt$message === undefined ? '' : _opt$message,
      _opt$duration = opt.duration,
      duration = _opt$duration === undefined ? 2000 : _opt$duration;

  _index2.default.showToast({
    message: message,
    duration: duration
  });
}

/***/ }),

/***/ "./node_modules/cml-tt-ui/assets/images/loading.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./src/assets/images/api/icon-api.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon-api_e8d66df.png";

/***/ }),

/***/ "./src/assets/images/chameleon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/chameleon_83ee00e.png";

/***/ }),

/***/ "./src/assets/images/component/kind/content.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/content_615612b.png";

/***/ }),

/***/ "./src/assets/images/icons/icon-arrow-up.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon-arrow-up_56472bc.png";

/***/ }),

/***/ "./src/pages/demo/yanxuan/assets/getHomeImgList.json":
/***/ (function(module, exports) {

module.exports = {"code":0,"data":{"bannerImgList":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/288bf88910aeba6d89689b99bec93133.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3804d6f02516e59927e07f091c8f1b27.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ce535663c045b5e877540b0e0be16bb3.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/06af49f2a59b00ad080aeb03fb8d408f.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/7c94908d8e197cc99e942324c5cc526e.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/96cf611743d7b382c11031f29152fa04.jpg"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/973e299ac2e80c03acfb5d2d4501231c.jpg"}],"classifyImgList":[{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/9cdedb90a09cf061cfa19f3e21321c73.png","title":"居家"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/57e39dc404f1ce90b959d76b9abe4314.png","title":"鞋包分配"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/2b580df265124836dcd96b1c88068127.png","title":"服装"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a53fff4d3cf0f4dedd78a8a0f2b129c9.png","title":"电器"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/6147b31404d5ddf1207a8363605aebf9.png","title":"婴童"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/8d29af79c24d78a3dcf7d61249702dcf.png","title":"饮食"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/2b9a25b6ea81655eb431944d3d57185f.png","title":"洗护"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/293f2341415d70bf7c6460c77fa07f41.png","title":"餐厨"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/2fbba45f945ee592d5470269d9e61f1c.png","title":"文体"},{"imgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/54947b070f8af594dd46069f2d3bdd34.png","title":"特色区"}],"disscountPriceImgUrl":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468670774810413.gif","special":{"newPerson":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468671496890421.png","temai":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468671650860425.png","qingdan":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15468671650860425.png"}}}

/***/ }),

/***/ "./src/pages/demo/yanxuan/assets/yanxuan.json":
/***/ (function(module, exports) {

module.exports = {"errno":"0","errmsg":"","data":{"result":{"banners":[{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/630439320dae9f1ce3afef3c39721383.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5100f0176e27a167cc2aea08b1bd11d8.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-1.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-8.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-2.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-4.jpg"},{"title":"","url":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/banner-6.jpg"}],"makers":{"title":"品牌制造商直供","list":[{"name":"新秀丽制造商","price":"59","state":"上新","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ppbg-1.jpg","url":""},{"name":"MUJI制造商","price":"12.9","state":"上新","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ppbg-2.jpg","url":""},{"name":"CK制造商","price":"29","state":"上新","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ppbg-3.jpg","url":""},{"name":"Adidas制造商","price":"29","bg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/75523d4274d85825ece16370cdb1693f.jpg","url":""}]},"recommend":{"head1":{"tlt":"周一周四 · 新品发布","tltBg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bg-new.png","url":""},"goods1":[{"tlt":"日式和风声波式电动牙刷","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/e5474a8f4fd5748079e2ba2ead806b51.png","info":"进口刷毛，专利技术","price":"119"},{"tlt":"小馒头 多色双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/455eee1712358dbcb2e33d54ab287808.png","info":"奶油色泽，小巧减龄","price":"79"},{"tlt":"多功能商务双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/795884dc6d995eca9a091a6358e3634d.png","info":"17个功能分区，内置分层收纳","price":"334"},{"tlt":"切尔西牛皮女靴","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e9ddf1a0ed5af78e8ec12cb9489df17.png","info":"经典牛皮切尔西，时尚帅气","price":"289"},{"tlt":"清心花茶壶套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a2a0f13385d67220b29e7a1124a361e6.png","info":"明亮通透，滤茶迅速","price":"119"},{"tlt":"全棉色织磨毛四件套","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3e1c00ce7b49a78e645538a8c45cabcb.png","info":"优雅色织，温暖磨毛","price":"299"},{"tlt":"黑凤梨 20寸PC膜拉链登机箱","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3108aaae80416b1cf27c3d7cc5661cea.png","info":"热卖9万只，网易人手1只","price":"185"},{"tlt":"日式和风敞口保温杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3aa67fee1c7d046a09f4ce878f4485ac.png","info":"真空隔热，保温保冷","price":"32"}],"head2":{"tlt":"周一周四 · 新品发布","tltBg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bg-new.png","url":""},"goods2":[{"tlt":"日式和风声波式电动牙刷","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/e5474a8f4fd5748079e2ba2ead806b51.png","info":"进口刷毛，专利技术","price":"119"},{"tlt":"小馒头 多色双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/455eee1712358dbcb2e33d54ab287808.png","info":"奶油色泽，小巧减龄","price":"79"},{"tlt":"多功能商务双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/795884dc6d995eca9a091a6358e3634d.png","info":"17个功能分区，内置分层收纳","price":"334"},{"tlt":"切尔西牛皮女靴","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e9ddf1a0ed5af78e8ec12cb9489df17.png","info":"经典牛皮切尔西，时尚帅气","price":"289"},{"tlt":"清心花茶壶套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a2a0f13385d67220b29e7a1124a361e6.png","info":"明亮通透，滤茶迅速","price":"119"},{"tlt":"全棉色织磨毛四件套","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3e1c00ce7b49a78e645538a8c45cabcb.png","info":"优雅色织，温暖磨毛","price":"299"},{"tlt":"黑凤梨 20寸PC膜拉链登机箱","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3108aaae80416b1cf27c3d7cc5661cea.png","info":"热卖9万只，网易人手1只","price":"185"},{"tlt":"日式和风敞口保温杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3aa67fee1c7d046a09f4ce878f4485ac.png","info":"真空隔热，保温保冷","price":"32"}]},"goods":[{"tlt":"日式和风敞口保温杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3aa67fee1c7d046a09f4ce878f4485ac.png","info":"真空隔热，保温保冷","url":"","price":"32"},{"tlt":"切尔西牛皮女靴","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/0e9ddf1a0ed5af78e8ec12cb9489df17.png","info":"奶油色泽，小巧减龄","url":"","price":"32"},{"tlt":"小馒头多色双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/455eee1712358dbcb2e33d54ab287808.png","info":"奶油色泽，小巧减龄","url":"","price":"79"},{"tlt":"全棉色织磨毛四件套","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3e1c00ce7b49a78e645538a8c45cabcb.png","info":"优雅色织，温暖磨毛","url":"","price":"299"},{"tlt":"日式和风声波式电动牙刷","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/e5474a8f4fd5748079e2ba2ead806b51.png","info":"进口刷毛，专利技术","url":"","price":"119"},{"tlt":"多功能商务双肩包","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/795884dc6d995eca9a091a6358e3634d.png","info":"17个功能分区，内置分层收纳","url":"","price":"334"},{"tlt":"黑凤梨20寸PC膜拉链登机箱","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3108aaae80416b1cf27c3d7cc5661cea.png","info":"热卖9万只，网易人手1只","url":"","price":"185"},{"tlt":"日式蓬软太鼓抱枕","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/ad953e16ad8c33b714e7af941ce8cd56.png","info":"萌趣太鼓造型 软糯轻柔回弹","url":"","price":"29"},{"tlt":"可水洗抗菌防螨丝羽绒枕","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a6c9e142fd008b3734c690a71a78ae5b.png","info":"进口防螨布，热销50万件","url":"","price":"99"},{"tlt":"双宫茧桑蚕丝被 空调被","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/6b341648f59d0c3eb48fa81e1d2de06e.png","info":"一级桑蚕丝，吸湿透气柔软","url":"","price":"479"},{"tlt":"怀抱休闲椅组合（皮款）","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/b5289125e9b55cf72e9a9623d006415e.png","info":"葛优躺神器皮款","url":"","price":"3999"},{"tlt":"欧式哑光餐具套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/431e86c88b4a6c9f065d1d8abea6b603.png","info":"德化白瓷，坚实耐用","url":"","price":"189"},{"tlt":"清新两用杯","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/431f5d142e3dd9946dc8e38c2aa3cd34.png","info":"办公杯优选 轻松饮茶","url":"","price":"52"},{"tlt":"两带式男/女款拖鞋","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/7d1c130c7d80edf824e4218c6829b7c8.png","info":"鞋杯随脚型而变，舒适呵护","url":"","price":"69.9"}],"topics":[{"name":"严选look","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15030393722652401.jpg"},{"name":"严选推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/d943675462a06f817d33062d4eb059f5.jpg"},{"name":"丁磊私物推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/1de4da49367dd7c01af1f7a2b23b0237.jpg"},{"name":"挑款师推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/437cc656ff529f8f84db6efc48df9bf4.png"}],"articles":[{"auther":"严选推荐","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3d860cbf663253590da6a64ff07f9919.png","tlt":"年中扫一扫，下半年运势好","info":"6个家庭清洁小技巧","price":"6.9","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/5a1df92d48fa3214bec9bb40ab067683.jpg"},{"auther":"服装组：小服","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772608140418.png","tlt":"小姐姐们的运动衣提前上架啦","info":"前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。","price":"","img":["https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772896010423.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772808640420.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15041772808640420.jpg"]},{"auther":"居家组：朵朵","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040896357740404.png","tlt":"初秋，最想用它来裸睡","info":"连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...","price":"","img":["https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040927525260414.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040927586650416.jpg","https://cmljs.org/cml-demo/src/assets/images/yanxuan/15040927556820415.jpg"]},{"auther":"严选推荐","autherimg":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/3d860cbf663253590da6a64ff07f9919.png","tlt":"不为繁华易匠心","info":"那些值得珍藏的严选手作好物","price":"29","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/4d72145e48e65ee3deaf2e1403e6ec73.jpg"}],"classes":["推荐区","家装区","居家","餐厨","配件","服装","电器","洗护","杂货","饮食","婴童","志趣"],"subclasses":[{"name":"中秋系列","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/82ae05c313b93355239ca1795917a5ac.png"},{"name":"超值套装","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/bd6f7deba69c8af2f6bb80025d7b98de.png"},{"name":"热卖爆品","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/c3418cc60d3968263c5b2ac7fb153c34.png"},{"name":"999+好评","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/87d1cb1bc196c5775b17788aea1c2239.png"},{"name":"boss推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/fbee769af73c0f63f6120eb27ff3ce96.png"},{"name":"明星推荐","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/7dea8f7e0e706804c3307504e2e7c463.png"},{"name":"黑凤梨系列","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/a4a14669ce1fa497aece9a20c669196e.png"},{"name":"趣味粉系列","img":"https://cmljs.org/cml-demo/src/assets/images/yanxuan/87fc01e5876482d521ecca13aea42653.png"}]}}}

/***/ }),

/***/ "./src/router.config.json":
/***/ (function(module, exports) {

module.exports = {"mode":"hash","domain":"https://cmljs.org","routes":[{"url":"/","path":"/pages/index/index","name":"首页","mock":"index.php"},{"name":"com","url":"/pages/com/com","path":"/pages/com/com","mock":"index.php"},{"name":"api","url":"/pages/api/api","path":"/pages/api/api","mock":"index.php"},{"name":"demo","url":"/pages/demo/demo","path":"/pages/demo/demo","mock":"index.php"},{"name":"chooseImage","url":"/pages/api/sub-pages/chooseImage","path":"/pages/api/sub-pages/chooseImage","mock":"index.php"},{"name":"animation","url":"/pages/api/sub-pages/animation","path":"/pages/api/sub-pages/animation","mock":"index.php"},{"name":"request","url":"/pages/api/sub-pages/request","path":"/pages/api/sub-pages/request","mock":"index.php"},{"name":"webSocket","url":"/pages/api/sub-pages/webSocket","path":"/pages/api/sub-pages/webSocket","mock":"index.php"},{"name":"navigate","url":"/pages/api/sub-pages/navigate","path":"/pages/api/sub-pages/navigate","mock":"index.php"},{"name":"list","url":"/pages/com/base/list/list","path":"/pages/com/base/list/list","mock":"index.php"},{"name":"scroller","url":"/pages/com/base/scroller/scroller","path":"/pages/com/base/scroller/scroller","mock":"index.php"},{"name":"view","url":"/pages/com/base/view/view","path":"/pages/com/base/view/view","mock":"index.php"},{"name":"text","url":"/pages/com/base/text/text","path":"/pages/com/base/text/text","mock":"index.php"},{"name":"button","url":"/pages/com/base/button/button","path":"/pages/com/base/button/button","mock":"index.php"},{"name":"input","url":"/pages/com/base/input/input","path":"/pages/com/base/input/input","mock":"index.php"},{"name":"textarea","url":"/pages/com/base/textarea/textarea","path":"/pages/com/base/textarea/textarea","mock":"index.php"},{"name":"image","url":"/pages/com/base/image/image","path":"/pages/com/base/image/image","mock":"index.php"},{"name":"video","url":"/pages/com/base/video/video","path":"/pages/com/base/video/video","mock":"index.php"},{"name":"richtext","url":"/pages/com/base/richtext/richtext","path":"/pages/com/base/richtext/richtext"},{"name":"switch","url":"/pages/com/base/switch/switch","path":"/pages/com/base/switch/switch"},{"name":"radio","url":"/pages/com/base/radio/radio","path":"/pages/com/base/radio/radio"},{"name":"checkbox","url":"/pages/com/base/checkbox/checkbox","path":"/pages/com/base/checkbox/checkbox"},{"name":"carousel","url":"/pages/com/base/carousel/carousel","path":"/pages/com/base/carousel/carousel"},{"name":"row","url":"/pages/com/base/row/row","path":"/pages/com/base/row/row","mock":"index.php"},{"name":"layout","url":"/pages/com/base/layout/layout","path":"/pages/com/base/layout/layout","mock":"index.php"},{"name":"c-dialog","url":"/pages/com/spread/c-dialog/c-dialog","path":"/pages/com/spread/c-dialog/c-dialog","mock":"index.php"},{"name":"c-loading","url":"/pages/com/spread/c-loading/c-loading","path":"/pages/com/spread/c-loading/c-loading","mock":"index.php"},{"name":"c-toast","url":"/pages/com/spread/c-toast/c-toast","path":"/pages/com/spread/c-toast/c-toast","mock":"index.php"},{"name":"c-tip","url":"/pages/com/spread/c-tip/c-tip","path":"/pages/com/spread/c-tip/c-tip","mock":"index.php"},{"name":"c-popup","url":"/pages/com/spread/c-popup/c-popup","path":"/pages/com/spread/c-popup/c-popup","mock":"index.php"},{"name":"c-actionsheet","url":"/pages/com/spread/c-actionsheet/c-actionsheet","path":"/pages/com/spread/c-actionsheet/c-actionsheet","mock":"index.php"},{"name":"c-picker","url":"/pages/com/spread/c-picker/c-picker","path":"/pages/com/spread/c-picker/c-picker","mock":"index.php"},{"name":"c-tab","url":"/pages/com/spread/c-tab/c-tab","path":"/pages/com/spread/c-tab/c-tab","mock":"index.php"},{"name":"c-refresh","url":"/pages/com/spread/c-refresh/c-refresh","path":"/pages/com/spread/c-refresh/c-refresh","mock":"index.php"},{"name":"c-checkbox-group","url":"/pages/com/spread/c-checkbox-group/c-checkbox-group","path":"/pages/com/spread/c-checkbox-group/c-checkbox-group","mock":"index.php"},{"name":"c-radio-group","url":"/pages/com/spread/c-radio-group/c-radio-group","path":"/pages/com/spread/c-radio-group/c-radio-group","mock":"index.php"},{"url":"/cml/demo/yanxuan","path":"/pages/demo/yanxuan/pages/index/index","name":"yanxuan","mock":"index.php"},{"url":"/cml/demo/yanxuan/list","path":"/pages/demo/yanxuan/pages/list/list","name":"yanxuan_list","mock":"index.php"},{"url":"/cml/demo/yanxuan/detail","path":"/pages/demo/yanxuan/pages/detail/detail","name":"yanxuan_detail","mock":"index.php"},{"url":"/cml/demo/yanxuan/map","path":"/pages/demo/yanxuan/pages/map/map","name":"yanxuan_map","mock":"index.php"}]}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/chameleon-runtime/index.js");
module.exports = __webpack_require__("./node_modules/chameleon-store/index.js");


/***/ })

},[0]);