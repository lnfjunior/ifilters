(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_index__ = __webpack_require__(1);


var iFilters = {
  install: function(Vue) {
    Vue.mixin({
      methods: {
        concat: __WEBPACK_IMPORTED_MODULE_0__array_index__["a" /* concat */]
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (iFilters);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(iFilters);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concat__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__concat__["default"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(3);

/**
 * Filter filter for arrays
 *
 * @param {Array|Object} arr
 * @param {Object|Array} joined
 * @return {Array}
 */
function concat(arr, joined) {
    if (isUndefined(joined)) return arr;

    if (__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isArray(arr)) {
        return __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isObject(joined)
            ? arr.concat(__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].toArray(joined))
            : arr.concat(joined);
    }

    if (__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isObject(arr)) {
        let array = __WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].toArray(arr);
        return (__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].isObject(joined))
            ? array.concat(__WEBPACK_IMPORTED_MODULE_0__util_index__["a" /* default */].toArray(joined))
            : array.concat(joined);
    }
    return arr;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var
    ArrayProto = Array.prototype,
    ObjProto = Object.prototype;

var
    slice = ArrayProto.slice,
    toString = ObjProto.toString;

var util = {};

util.isArray = function(obj) {
    return Array.isArray(obj);
};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
util.isArrayLike = function(obj) {
    if(typeof obj !== 'object' || !obj){
        return false;
    }
    var length = obj.length;
    return typeof length === 'number'
        && length % 1 === 0 && length >= 0 && length <= MAX_ARRAY_INDEX;
};

util.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};


util.each = function(obj, callback) {
    var i,
        len;
    if (util.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
            if (callback(obj[i], i, obj) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback(obj[i], i, obj) === false) {
                break;
            }
        }
    }
    return obj;
};

util.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    util['is' + name] = function(obj) {
        return toString.call(obj) === '[object ' + name + ']';
    };
});

util.toArray = function(list, start) {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

util.toNumber = function(value) {
  if (typeof value !== 'string') {
    return value
  } else {
    var parsed = Number(value)
    return isNaN(parsed)
      ? value
      : parsed
  }
};

util.convertArray = function (value) {
    if (util.isArray(value)) {
      return value
    } else if (util.isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value)
      var i = keys.length
      var res = new Array(i)
      var key
      while (i--) {
        key = keys[i]
        res[i] = {
          $key: key,
          $value: value[key]
        }
      }
      return res
    } else {
      return value || []
    }
}

function multiIndex(obj,is) {  // obj,['1','2','3'] -> ((obj['1'])['2'])['3']
    return is.length ? multiIndex(obj[is[0]],is.slice(1)) : obj
}

util.getPath = function(obj,is) {   // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
    return multiIndex(obj,is.split('.'))
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
util.isPlainObject = function (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ })
/******/ ]);
});