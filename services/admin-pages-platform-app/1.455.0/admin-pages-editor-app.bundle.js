(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("admin-pages", [], factory);
	else if(typeof exports === 'object')
		exports["admin-pages"] = factory();
	else
		root["admin-pages"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/admin-pages-platform-app/1.455.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 296);
/******/ })
/************************************************************************/
/******/ ({

/***/ 101:
/*!******************************************************************!*\
  !*** ../node_modules/i18next-xhr-backend/dist/commonjs/index.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ./utils */ 102);

var utils = _interopRequireWildcard(_utils);

var _ajax = __webpack_require__(/*! ./ajax */ 103);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: 'locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: JSON.parse,
    crossDomain: false,
    ajax: _ajax2.default
  };
}

var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Backend);

    this.init(services, options);

    this.type = 'backend';
  }

  _createClass(Backend, [{
    key: 'init',
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.services = services;
      this.options = utils.defaults(options, this.options || {}, getDefaults());
    }
  }, {
    key: 'readMulti',
    value: function readMulti(languages, namespaces, callback) {
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }

      var url = this.services.interpolator.interpolate(loadPath, { lng: languages.join('+'), ns: namespaces.join('+') });

      this.loadUrl(url, callback);
    }
  }, {
    key: 'read',
    value: function read(language, namespace, callback) {
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath([language], [namespace]);
      }

      var url = this.services.interpolator.interpolate(loadPath, { lng: language, ns: namespace });

      this.loadUrl(url, callback);
    }
  }, {
    key: 'loadUrl',
    value: function loadUrl(url, callback) {
      var _this = this;

      this.options.ajax(url, this.options, function (data, xhr) {
        if (xhr.status >= 500 && xhr.status < 600) return callback('failed loading ' + url, true /* retry */);
        if (xhr.status >= 400 && xhr.status < 500) return callback('failed loading ' + url, false /* no retry */);

        var ret = void 0,
            err = void 0;
        try {
          ret = _this.options.parse(data, url);
        } catch (e) {
          err = 'failed parsing ' + url + ' to json';
        }
        if (err) return callback(err, false);
        callback(null, ret);
      });
    }
  }, {
    key: 'create',
    value: function create(languages, namespace, key, fallbackValue) {
      var _this2 = this;

      if (typeof languages === 'string') languages = [languages];

      var payload = {};
      payload[key] = fallbackValue || '';

      languages.forEach(function (lng) {
        var url = _this2.services.interpolator.interpolate(_this2.options.addPath, { lng: lng, ns: namespace });

        _this2.options.ajax(url, _this2.options, function (data, xhr) {
          //const statusCode = xhr.status.toString();
          // TODO: if statusCode === 4xx do log
        }, payload);
      });
    }
  }]);

  return Backend;
}();

Backend.type = 'backend';

exports.default = Backend;

/***/ }),

/***/ 102:
/*!******************************************************************!*\
  !*** ../node_modules/i18next-xhr-backend/dist/commonjs/utils.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = defaults;
exports.extend = extend;
var arr = [];
var each = arr.forEach;
var slice = arr.slice;

function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

function extend(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

/***/ }),

/***/ 103:
/*!*****************************************************************!*\
  !*** ../node_modules/i18next-xhr-backend/dist/commonjs/ajax.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function addQueryString(url, params) {
  if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
    var queryString = '',
        e = encodeURIComponent;

    // Must encode data
    for (var paramName in params) {
      queryString += '&' + e(paramName) + '=' + e(params[paramName]);
    }

    if (!queryString) {
      return url;
    }

    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }

  return url;
}

// https://gist.github.com/Xeoncross/7663273
function ajax(url, options, callback, data, cache) {

  if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    if (!cache) {
      data['_t'] = new Date();
    }
    // URL encoded form data must be in querystring format
    data = addQueryString('', data).slice(1);
  }

  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  try {
    var x;
    if (XMLHttpRequest) {
      x = new XMLHttpRequest();
    } else {
      x = new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
    x.open(data ? 'POST' : 'GET', url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    x.withCredentials = !!options.withCredentials;
    if (data) {
      x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data);
  } catch (e) {
    console && console.log(e);
  }
}

exports.default = ajax;

/***/ }),

/***/ 109:
/*!******************************************!*\
  !*** ../node_modules/axios/lib/axios.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 8);
var bind = __webpack_require__(/*! ./helpers/bind */ 61);
var Axios = __webpack_require__(/*! ./core/Axios */ 111);
var defaults = __webpack_require__(/*! ./defaults */ 41);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 65);
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 126);
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 64);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ 127);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 110:
/*!******************************************!*\
  !*** ../node_modules/is-buffer/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 111:
/*!***********************************************!*\
  !*** ../node_modules/axios/lib/core/Axios.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ 41);
var utils = __webpack_require__(/*! ./../utils */ 8);
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 121);
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 122);
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 124);
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 125);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 112:
/*!*************************************************************************!*\
  !*** ../node_modules/node-libs-browser/node_modules/process/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
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

/***/ 113:
/*!****************************************************************!*\
  !*** ../node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ 8);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 114:
/*!************************************************!*\
  !*** ../node_modules/axios/lib/core/settle.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ 63);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 115:
/*!******************************************************!*\
  !*** ../node_modules/axios/lib/core/enhanceError.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ 116:
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/helpers/buildURL.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 117:
/*!*********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),

/***/ 118:
/*!************************************************************!*\
  !*** ../node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 119:
/*!*************************************************!*\
  !*** ../node_modules/axios/lib/helpers/btoa.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 12:
/*!********************************************************!*\
  !*** ../node_modules/@wix/headers/dist/esm/globals.js ***!
  \********************************************************/
/*! exports provided: maybeGetDocument, maybeGetGlobal */
/*! exports used: maybeGetDocument, maybeGetGlobal */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return maybeGetDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return maybeGetGlobal; });
function maybeGetDocument() {
    if (typeof document === 'object') {
        return document;
    }
    return undefined;
}
function maybeGetGlobal() {
    if (typeof self === 'object') {
        return self;
    }
    else {
        return global;
    }
}
//# sourceMappingURL=globals.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ 39)))

/***/ }),

/***/ 120:
/*!****************************************************!*\
  !*** ../node_modules/axios/lib/helpers/cookies.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 121:
/*!************************************************************!*\
  !*** ../node_modules/axios/lib/core/InterceptorManager.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 122:
/*!*********************************************************!*\
  !*** ../node_modules/axios/lib/core/dispatchRequest.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);
var transformData = __webpack_require__(/*! ./transformData */ 123);
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 64);
var defaults = __webpack_require__(/*! ../defaults */ 41);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 123:
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/core/transformData.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 124:
/*!**********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 125:
/*!********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/combineURLs.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 126:
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/cancel/CancelToken.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ 65);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 127:
/*!***************************************************!*\
  !*** ../node_modules/axios/lib/helpers/spread.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 16:
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/@wix/wix-experiments/dist/src/conduction-utils/global-defaults.js (referenced with cjs require), ../node_modules/@wix/wix-experiments/dist/src/experiments-cache.js (referenced with cjs require), ../node_modules/@wix/wix-experiments/dist/src/index.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 256:
/*!**************************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/conduction-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConductionMethod = void 0;
var ConductionMethod;
(function (ConductionMethod) {
    ConductionMethod["Default"] = "";
    ConductionMethod["OwnerAccount"] = "owner-account";
})(ConductionMethod = exports.ConductionMethod || (exports.ConductionMethod = {}));
//# sourceMappingURL=conduction-method.js.map

/***/ }),

/***/ 257:
/*!*******************************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/experiments-data-utils.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParse = void 0;
function tryParse(data) {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        }
        catch (e) {
            /* Ignore */
        }
    }
    return data;
}
exports.tryParse = tryParse;
//# sourceMappingURL=experiments-data-utils.js.map

/***/ }),

/***/ 258:
/*!***************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/urlMap.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrlOfExperiment = exports.getExperimentPath = exports.isValidScopeUrl = exports.getAllInScopePath = exports.petriUrlMap = void 0;
exports.petriUrlMap = {
    new: {
        conductAllInScope: '/_api/wix-laboratory-server/v1/laboratory/platform/conductAllInScope',
        conductExperiment: '/_api/wix-laboratory-server/v1/laboratory/platform/conductExperiment',
    },
    old: {
        conductAllInScope: '/_api/wix-laboratory-server/laboratory/conductAllInScope',
        conductExperiment: '/_api/wix-laboratory-server/laboratory/conductExperiment',
    },
};
exports.getAllInScopePath = function (scope, useNewApi) {
    if (scope === void 0) { scope = ''; }
    if (useNewApi === void 0) { useNewApi = false; }
    var urlApi = useNewApi
        ? exports.petriUrlMap.new.conductAllInScope + "?scope=" + encodeURIComponent(scope)
        : exports.petriUrlMap.old.conductAllInScope + "?scope=" + encodeURIComponent(scope);
    return urlApi;
};
function isValidScopeUrl(url, useNewApi) {
    return (url.indexOf(useNewApi
        ? exports.petriUrlMap.new.conductAllInScope
        : exports.petriUrlMap.old.conductAllInScope) !== -1);
}
exports.isValidScopeUrl = isValidScopeUrl;
exports.getExperimentPath = function (key, fallback, useNewApi) {
    if (key === void 0) { key = ''; }
    if (fallback === void 0) { fallback = ''; }
    if (useNewApi === void 0) { useNewApi = false; }
    var urlApi = useNewApi
        ? exports.petriUrlMap.new.conductExperiment + "?key=" + encodeURIComponent(key) + "&fallbackValue=" + encodeURIComponent(fallback)
        : exports.petriUrlMap.old.conductExperiment + "?key=" + encodeURIComponent(key) + "&fallback=" + encodeURIComponent(fallback);
    return urlApi;
};
function isUrlOfExperiment(url, specName, useNewApi) {
    var pattern = "" + exports.getExperimentPath(specName, '', useNewApi);
    return url.includes(pattern);
}
exports.isUrlOfExperiment = isUrlOfExperiment;
//# sourceMappingURL=urlMap.js.map

/***/ }),

/***/ 293:
/*!**************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/index.js ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 16);
var base_url_1 = __webpack_require__(/*! ./base-url */ 301);
var global_defaults_1 = __webpack_require__(/*! ./conduction-utils/global-defaults */ 302);
var global_defaults_checks_1 = __webpack_require__(/*! ./conduction-utils/global-defaults-checks */ 303);
var request_context_1 = __webpack_require__(/*! ./conduction-utils/request-context */ 304);
var experiments_cache_1 = __webpack_require__(/*! ./experiments-cache */ 305);
var experiments_data_utils_1 = __webpack_require__(/*! ./experiments-data-utils */ 257);
var http_request_1 = __webpack_require__(/*! ./http-request */ 306);
var urlMap_1 = __webpack_require__(/*! ./urlMap */ 258);
var noop = function () {
    /* */
};
var Experiments = /** @class */ (function () {
    function Experiments(obj) {
        if (obj === void 0) { obj = {}; }
        var globalDefaults = global_defaults_1.getGlobalDefaults();
        this.useNewApi =
            typeof obj.useNewApi !== 'undefined'
                ? obj.useNewApi
                : globalDefaults.useNewApi || false;
        this.experiments = obj.experiments || {};
        this.loaders = new Map();
        this.baseUrl = base_url_1.baseUrl(this.useNewApi, obj.baseUrl);
        this.requestContext =
            obj.requestContext || global_defaults_checks_1.getGlobalRequestContext(globalDefaults);
        this.onError = obj.onError || noop;
        if (obj.scope) {
            this.load(obj.scope);
        }
        if (obj.scopes) {
            obj.scopes.forEach(this.load.bind(this));
        }
    }
    Experiments.prototype.add = function (obj) {
        this.experiments = tslib_1.__assign(tslib_1.__assign({}, this.experiments), obj);
    };
    Experiments.prototype.get = function (key) {
        return this.experiments[key];
    };
    Experiments.prototype.enabled = function (key) {
        return this.get(key) === 'true';
    };
    Experiments.prototype.all = function () {
        return this.experiments;
    };
    Experiments.prototype._addLoader = function (url, promise) {
        var _this = this;
        this.loaders.set(url, promise);
        promise.then(function () {
            _this.loaders.delete(url);
        });
        return promise;
    };
    Experiments.prototype._getUrlWithFallback = function (url, fallback) {
        var _this = this;
        var cachedResponse = experiments_cache_1.getCacheInstance().getUrlResponse(url);
        if (cachedResponse !== undefined) {
            return Promise.resolve(cachedResponse);
        }
        var existingRequest = this.loaders.get(url);
        if (existingRequest !== undefined) {
            return existingRequest;
        }
        return http_request_1.httpRequest(url)
            .then(function (response) {
            experiments_cache_1.getCacheInstance().addUrlResponse(url, response);
            return response;
        })
            .catch(function (error) {
            _this.onError(error);
            return fallback;
        });
    };
    Experiments.prototype.load = function (scope) {
        var _this = this;
        var scopeConductionPath = urlMap_1.getAllInScopePath(scope, this.useNewApi);
        var requestContextQuery = this.useNewApi
            ? request_context_1.getRequestContextQuery(this.requestContext)
            : '';
        var url = "" + this.baseUrl + scopeConductionPath + requestContextQuery;
        var result = this._getUrlWithFallback(url, {})
            .then(experiments_data_utils_1.tryParse)
            .then(function (response) { return (_this.useNewApi ? response.values : response); })
            .then(function (obj) {
            _this.add(obj);
            return obj;
        });
        return this._addLoader(url, result);
    };
    Experiments.prototype.conduct = function (spec, fallbackValue) {
        var _this = this;
        // check if a spec value was already loaded to the cache indirectly through another request
        var cachedResponse = experiments_cache_1.getCacheInstance().getExperimentValue(spec, this.useNewApi);
        if (cachedResponse !== undefined) {
            return this._addConductResult(spec, cachedResponse);
        }
        var experimentsPath = urlMap_1.getExperimentPath(spec, fallbackValue, this.useNewApi);
        var requestContextQuery = this.useNewApi
            ? request_context_1.getRequestContextQuery(this.requestContext)
            : '';
        var url = "" + this.baseUrl + experimentsPath + requestContextQuery;
        var result = this._getUrlWithFallback(url, fallbackValue).then(function (response) { return _this._addConductResult(spec, response); });
        return this._addLoader(url, result);
    };
    Experiments.prototype.pending = function () {
        return !!this.loaders.size;
    };
    Experiments.prototype.ready = function () {
        return Promise.all(Array.from(this.loaders.values()));
    };
    Experiments.prototype._addConductResult = function (spec, conductResponse) {
        var _a;
        var value = this.useNewApi
            ? JSON.parse(conductResponse).value
            : conductResponse;
        this.add((_a = {}, _a[spec] = value, _a));
        return Promise.resolve(value);
    };
    return Experiments;
}());
exports.default = Experiments;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 296:
/*!**********************************!*\
  !*** ./editor-app/editor-app.ts ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var eventNames = __webpack_require__(/*! ../constants/eventNames */ 297).eventNames;
var panelDefinitions = __webpack_require__(/*! ../panels/panel-definitions */ 298).panelDefinitions;
var getBaseUrl = __webpack_require__(/*! ../utils/urlBuilders */ 38).getBaseUrl;
var Translations = __webpack_require__(/*! ../utils/translations */ 299).Translations;
var _a = __webpack_require__(/*! ../utils/editorUtils */ 59), createPage = _a.createPage, markNewDynamicPageAsAdminPage = _a.markNewDynamicPageAsAdminPage;
var _b = __webpack_require__(/*! ../constants/helpIds */ 99), DASHBOARD_PAGES_HELP_ID = _b.DASHBOARD_PAGES_HELP_ID, PAGE_INFO_HELP_ID = _b.PAGE_INFO_HELP_ID, PAGE_PERMISSIONS_PANEL_ID = _b.PAGE_PERMISSIONS_PANEL_ID;
var isExperimentEnabled = __webpack_require__(/*! ../utils/experiments */ 300).isExperimentEnabled;
var AdminPagesEditorApp = /** @class */ (function () {
    function AdminPagesEditorApp() {
    }
    AdminPagesEditorApp.prototype.editorReady = function (editorSDK, appDefinitionId, _a) {
        var firstInstall = _a.firstInstall, initialAppData = _a.initialAppData;
        return __awaiter(this, void 0, void 0, function () {
            var _b, adminPages;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.firstPage = firstInstall;
                        this.editorSDK = editorSDK;
                        this.appDefinitionId = appDefinitionId;
                        _b = this;
                        return [4 /*yield*/, editorSDK.environment.getLocale()];
                    case 1:
                        _b.locale = _c.sent();
                        this.translation = new Translations();
                        this.adminPagesScriptUrl = initialAppData.editorScriptUrl;
                        return [4 /*yield*/, this.translation.editorInit(this.locale, getBaseUrl(this.adminPagesScriptUrl))];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.editorSDK.pages.getApplicationPages()];
                    case 3:
                        adminPages = _c.sent();
                        if (!firstInstall) {
                            return [2 /*return*/];
                        }
                        if (adminPages && adminPages.length === 0) {
                            return [2 /*return*/, this.openModalPanel()];
                        }
                        return [2 /*return*/, createPage(editorSDK, appDefinitionId)];
                }
            });
        });
    };
    AdminPagesEditorApp.prototype.openModalPanel = function () {
        var sdkScriptSrc = this.editorSDK.info.getSdkVersion().scriptSrc;
        return this.editorSDK.editor.openModalPanel('token', panelDefinitions.addPagePanel(sdkScriptSrc));
    };
    AdminPagesEditorApp.prototype.handleAddPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, createPage(this.editorSDK, this.appDefinitionId)];
            });
        });
    };
    AdminPagesEditorApp.prototype.handleAppPageIfNotFirstTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.firstPage) {
                    return [2 /*return*/, this.handleAddPage()];
                }
                this.firstPage = false;
                return [2 /*return*/];
            });
        });
    };
    AdminPagesEditorApp.prototype.handleRemovePage = function (pageRef) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorSDK.pages.remove('token', { pageRef: pageRef })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPagesEditorApp.prototype.handleSetAsDynamicPage = function (pageRef) {
        return __awaiter(this, void 0, void 0, function () {
            var databindingApi, pageRefs, newPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorSDK.document.application.getPublicAPI('token', { appDefinitionId: 'dataBinding' })];
                    case 1:
                        databindingApi = _a.sent();
                        return [4 /*yield*/, databindingApi.convertStaticPageToDynamic({
                                pageRef: pageRef,
                            })];
                    case 2:
                        pageRefs = _a.sent();
                        newPage = pageRefs.filter(function (page) { return page.id !== pageRef.id; })[0];
                        return [2 /*return*/, markNewDynamicPageAsAdminPage(this.editorSDK, this.appDefinitionId, newPage)];
                }
            });
        });
    };
    AdminPagesEditorApp.prototype.onEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (event.eventType) {
                    case eventNames.addPage:
                        return [2 /*return*/, this.handleAddPage()];
                    case eventNames.deletePage:
                        return [2 /*return*/, this.handleRemovePage(event.eventPayload.pageRef)];
                    case eventNames.dataSectionAppClicked:
                        return [2 /*return*/, this.handleAppPageIfNotFirstTime()];
                    case eventNames.setAsADynamicPage:
                        return [2 /*return*/, this.handleSetAsDynamicPage(event.eventPayload.pageRef)];
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    AdminPagesEditorApp.prototype.getDefaultPageActions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var defaultActionsArr;
            return __generator(this, function (_a) {
                defaultActionsArr = [];
                defaultActionsArr.push('Pages_Actions_Page_Rename', {
                    title: this.translation.t('page_actions.delete_page'),
                    event: eventNames.deletePage,
                    icon: 'delete_icon',
                    type: 'remove_page',
                });
                defaultActionsArr.push({
                    //TODO hide if its already a dynamic page
                    title: this.translation.t('page_actions.set_as_dynamic_page'),
                    event: eventNames.setAsADynamicPage,
                    icon: 'page_dynamic_icon',
                });
                return [2 /*return*/, defaultActionsArr];
            });
        });
    };
    AdminPagesEditorApp.prototype.getAppManifest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sdkScriptSrc, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        sdkScriptSrc = this.editorSDK.info.getSdkVersion().scriptSrc;
                        _a = {
                            controllersStageData: {
                                singleAdminPageController: {
                                    default: {
                                        visibility: 'NEVER',
                                    },
                                },
                            }
                        };
                        _b = {};
                        _c = {};
                        return [4 /*yield*/, this.getDefaultPageActions()];
                    case 1: return [2 /*return*/, (_a.pages = (_b.pageActions = (_c.default = _d.sent(),
                            _c.overrides = [
                                {
                                    condition: {
                                        advanced: false,
                                    },
                                    override: [],
                                },
                            ],
                            _c),
                            _b.pageSettings = {
                                default: [
                                    {
                                        title: this.translation.t('page_settings.page_info'),
                                        event: 'pageInfo',
                                        icon: 'page_dynamic_icon',
                                        url: panelDefinitions.pageInfoPanel(sdkScriptSrc).url,
                                        helpId: PAGE_INFO_HELP_ID,
                                        type: 'page_info',
                                    },
                                    {
                                        title: this.translation.t('page_settings.page_permissions'),
                                        event: 'pagePermissions',
                                        icon: 'page_dynamic_icon',
                                        url: panelDefinitions.permissionsPanel(sdkScriptSrc).url,
                                        helpId: PAGE_PERMISSIONS_PANEL_ID,
                                        type: 'permissions',
                                    },
                                ],
                            },
                            _b.applicationSettings = {
                                default: {
                                    displayName: this.translation.t('dashboard-pages'),
                                    helpId: DASHBOARD_PAGES_HELP_ID,
                                    grouping: {
                                        groupBy: 'routers',
                                    },
                                },
                            },
                            _b.applicationActions = {
                                default: [
                                    {
                                        title: this.translation.t('page_actions.add_page'),
                                        event: eventNames.addPage,
                                        icon: 'addPagePagesPanel',
                                        type: 'add_page',
                                    },
                                ],
                                overrides: [
                                    {
                                        condition: {
                                            advanced: false,
                                        },
                                        override: [],
                                    },
                                ],
                            },
                            _b),
                            _a)];
                }
            });
        });
    };
    return AdminPagesEditorApp;
}());
function autoBind(obj) {
    var bound = {};
    var props = Reflect.ownKeys(Reflect.getPrototypeOf(obj));
    props.forEach(function (p) {
        if (p !== 'constructor' && typeof obj[p] === 'function') {
            bound[p] = obj[p].bind(obj);
        }
    });
    return bound;
}
module.exports = autoBind(new AdminPagesEditorApp());


/***/ }),

/***/ 297:
/*!*********************************!*\
  !*** ./constants/eventNames.ts ***!
  \*********************************/
/*! exports provided: eventNames */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./editor-app/editor-app.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventNames", function() { return eventNames; });
var eventNames = {
    addPage: 'addPage',
    deletePage: 'deletePage',
    emptyState: 'emptyState',
    renamePage: 'renamePage',
    dataSectionAppClicked: 'data_section_app_clicked',
    setAsADynamicPage: 'setAsADynamicPage',
};


/***/ }),

/***/ 298:
/*!*************************************!*\
  !*** ./panels/panel-definitions.ts ***!
  \*************************************/
/*! exports provided: panelDefinitions */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./editor-app/editor-app.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panelDefinitions", function() { return panelDefinitions; });
var panelPrefix = 'https://editor.wix.com/admin-pages-platform-app';
var panelDefinitions = {
    addPagePanel: function (sdkScriptSrc) { return ({
        width: 744,
        height: 533,
        shouldHideHeader: true,
        url: panelPrefix + "/add-page-panel.html?wix-sdk-version=" + sdkScriptSrc,
    }); },
    emptyStatePanel: function (sdkScriptSrc) { return ({
        title: 'Empty State',
        width: 666,
        height: 508,
        url: panelPrefix + "/empty-state-panel.html?wix-sdk-version=" + sdkScriptSrc,
    }); },
    pageInfoPanel: function (sdkScriptSrc) { return ({
        title: 'Page Settings',
        url: panelPrefix + "/page-info-panel.html?wix-sdk-version=" + sdkScriptSrc,
    }); },
    permissionsPanel: function (sdkScriptSrc) { return ({
        title: 'Page Permissions',
        url: panelPrefix + "/permissions-panel.html?wix-sdk-version=" + sdkScriptSrc,
    }); },
};


/***/ }),

/***/ 299:
/*!*******************************!*\
  !*** ./utils/translations.ts ***!
  \*******************************/
/*! exports provided: Translations */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./editor-app/editor-app.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translations", function() { return Translations; });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n */ 58);

var Translations = /** @class */ (function () {
    function Translations() {
        this.editorInit = this.editorInit.bind(this);
    }
    Translations.prototype.editorInit = function (locale, baseUrl) {
        var _this = this;
        return Object(_i18n__WEBPACK_IMPORTED_MODULE_0__[/* i18n */ "a"])({ locale: locale, baseUrl: baseUrl }).then(function (_a) {
            var t = _a.t;
            _this._t = t;
        });
    };
    Translations.prototype.t = function (key, options) {
        if (options === void 0) { options = {}; }
        if (!this._t) {
            throw new Error('Translation service was not initialized yet!');
        }
        return this._t(key, options);
    };
    return Translations;
}());



/***/ }),

/***/ 300:
/*!******************************!*\
  !*** ./utils/experiments.ts ***!
  \******************************/
/*! exports provided: isExperimentEnabled */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./editor-app/editor-app.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExperimentEnabled", function() { return isExperimentEnabled; });
/* harmony import */ var _wix_wix_experiments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wix/wix-experiments */ 293);
/* harmony import */ var _wix_wix_experiments__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wix_wix_experiments__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var experiments;
var isExperimentEnabled = function (experiment) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!experiments) return [3 /*break*/, 2];
                return [4 /*yield*/, conduct()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, experiments.get(experiment) === 'true'];
        }
    });
}); };
var conduct = function () {
    experiments = new _wix_wix_experiments__WEBPACK_IMPORTED_MODULE_0___default.a();
    return experiments.load('admin-pages');
};


/***/ }),

/***/ 301:
/*!*****************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/base-url.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUrl = void 0;
function baseUrl(isNewApi, maybeBaseUrl) {
    var maybeTestkitUrl =  false && false;
    return maybeBaseUrl || maybeTestkitUrl || '';
}
exports.baseUrl = baseUrl;
//# sourceMappingURL=base-url.js.map

/***/ }),

/***/ 302:
/*!*****************************************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/conduction-utils/global-defaults.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalDefaults = exports.GlobalDefaultKeys = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ 16);
var conduction_method_1 = __webpack_require__(/*! ../conduction-method */ 256);
exports.GlobalDefaultKeys = {
    UseNewApi: '__WIXEXP_USE_NEW_API',
    ConductionMethod: '__WIXEXP_CONDUCTION_METHOD_',
    OwnerAccountId: '__WIXEXP_OWNER_ACCOUNT_ID_',
    LoggedInUserId: '__WIXEXP_LOGGED_IN_USER_ID_',
};
function getValueOrEmptyObject(objectKey, globalValueKey, type) {
    var _a, _b;
    if (typeof self !== 'undefined') {
        if (typeof type === 'function') {
            if (typeof type(self[globalValueKey]) !== 'undefined') {
                return _a = {}, _a[objectKey] = type(self[globalValueKey]), _a;
            }
        }
        else if (typeof self[globalValueKey] === type) {
            return _b = {}, _b[objectKey] = self[globalValueKey], _b;
        }
    }
    return {};
}
var checkConductionMethod = function (conductionMethod) {
    return Object.keys(conduction_method_1.ConductionMethod).filter(function (cm) { return conduction_method_1.ConductionMethod[cm] === conductionMethod; }).length > 0
        ? conductionMethod
        : undefined;
};
function getGlobalDefaults() {
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, getValueOrEmptyObject('useNewApi', exports.GlobalDefaultKeys.UseNewApi, 'boolean')), getValueOrEmptyObject('conductionMethod', exports.GlobalDefaultKeys.ConductionMethod, checkConductionMethod)), getValueOrEmptyObject('siteOwnerId', exports.GlobalDefaultKeys.OwnerAccountId, 'string')), getValueOrEmptyObject('loggedInUserId', exports.GlobalDefaultKeys.LoggedInUserId, 'string'));
}
exports.getGlobalDefaults = getGlobalDefaults;
//# sourceMappingURL=global-defaults.js.map

/***/ }),

/***/ 303:
/*!************************************************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/conduction-utils/global-defaults-checks.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalRequestContext = exports.shouldConductByAccountByDefault = void 0;
var conduction_method_1 = __webpack_require__(/*! ../conduction-method */ 256);
function shouldConductByAccountByDefault(globalDefaults) {
    return (globalDefaults.conductionMethod === conduction_method_1.ConductionMethod.OwnerAccount &&
        globalDefaults.siteOwnerId &&
        globalDefaults.loggedInUserId);
}
exports.shouldConductByAccountByDefault = shouldConductByAccountByDefault;
function getGlobalRequestContext(globalDefaults) {
    if (shouldConductByAccountByDefault(globalDefaults)) {
        return {
            forSiteOwner: {
                siteOwnerId: globalDefaults.siteOwnerId,
                loggedInUserId: globalDefaults.loggedInUserId,
            },
        };
    }
    return {};
}
exports.getGlobalRequestContext = getGlobalRequestContext;
//# sourceMappingURL=global-defaults-checks.js.map

/***/ }),

/***/ 304:
/*!*****************************************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/conduction-utils/request-context.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestContextQuery = void 0;
var isNonEmptyString = function (value) {
    return typeof value === 'string' && value !== '';
};
var buildForSiteOwnerQuery = function (forSiteOwner) {
    if (isNonEmptyString(forSiteOwner.loggedInUserId) &&
        isNonEmptyString(forSiteOwner.siteOwnerId)) {
        return ('&' +
            ("requestContext.forSiteOwner.loggedInUserId=" + forSiteOwner.loggedInUserId + "&") +
            ("requestContext.forSiteOwner.siteOwnerId=" + forSiteOwner.siteOwnerId));
    }
    return '';
};
var buildForSiteVisitorsQuery = function (forSiteVisitors) {
    if (isNonEmptyString(forSiteVisitors.visitorId) &&
        isNonEmptyString(forSiteVisitors.siteOwnerId)) {
        return ('&' +
            ("requestContext.forSiteVisitors.visitorId=" + forSiteVisitors.visitorId + "&") +
            ("requestContext.forSiteVisitors.siteOwnerId=" + forSiteVisitors.siteOwnerId));
    }
    return '';
};
var buildOverrideCriteriaQuery = function (overrideCriteria) {
    if (isNonEmptyString(overrideCriteria.entityId)) {
        return "&requestContext.overrideCriteria.entityId=" + overrideCriteria.entityId;
    }
    return '';
};
function getRequestContextQuery(requestContext) {
    if (requestContext === void 0) { requestContext = {}; }
    var forSiteOwner = requestContext.forSiteOwner, forSiteVisitors = requestContext.forSiteVisitors, overrideCriteria = requestContext.overrideCriteria;
    var query = '';
    var fieldsPassed = ['forSiteOwner', 'forSiteVisitors'].reduce(function (acc, cur) { return (requestContext[cur] ? acc + 1 : acc); }, 0);
    if (fieldsPassed > 1) {
        throw new Error('Only one of "forSiteOwner" or "forSiteVisitors" is accepted.');
    }
    if (forSiteOwner) {
        query += buildForSiteOwnerQuery(forSiteOwner);
    }
    if (forSiteVisitors) {
        query += buildForSiteVisitorsQuery(forSiteVisitors);
    }
    if (overrideCriteria) {
        query += buildOverrideCriteriaQuery(overrideCriteria);
    }
    return query;
}
exports.getRequestContextQuery = getRequestContextQuery;
//# sourceMappingURL=request-context.js.map

/***/ }),

/***/ 305:
/*!**************************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/experiments-cache.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheInstance = exports.NullCache = exports.ExperimentsRequestsCache = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ 16);
var experiments_data_utils_1 = __webpack_require__(/*! ./experiments-data-utils */ 257);
var urlMap_1 = __webpack_require__(/*! ./urlMap */ 258);
var ExperimentsRequestsCache = /** @class */ (function () {
    function ExperimentsRequestsCache() {
        this.urlMap = new Map();
    }
    ExperimentsRequestsCache.prototype.addUrlResponse = function (url, response) {
        this.urlMap.set(url, response);
    };
    ExperimentsRequestsCache.prototype.getUrlResponse = function (url) {
        return this.urlMap.get(url);
    };
    ExperimentsRequestsCache.prototype.getExperimentValue = function (specName, useNewApi) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.urlMap.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var url = _c.value;
                if (urlMap_1.isUrlOfExperiment(url, specName, useNewApi)) {
                    return this.urlMap.get(url);
                }
                else if (urlMap_1.isValidScopeUrl(url, useNewApi)) {
                    var jsonObject = experiments_data_utils_1.tryParse(this.urlMap.get(url));
                    if (typeof jsonObject === 'object' && specName in jsonObject) {
                        return jsonObject[specName];
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return ExperimentsRequestsCache;
}());
exports.ExperimentsRequestsCache = ExperimentsRequestsCache;
var NullCache = /** @class */ (function () {
    function NullCache() {
    }
    NullCache.prototype.addUrlResponse = function () {
        //
    };
    NullCache.prototype.getUrlResponse = function () {
        //
    };
    NullCache.prototype.getExperimentValue = function () {
        //
    };
    return NullCache;
}());
exports.NullCache = NullCache;
function getCacheInstance() {
    if (false) {}
    if (self.experimentsCache === undefined) {
        self.experimentsCache = new ExperimentsRequestsCache();
    }
    return self.experimentsCache;
}
exports.getCacheInstance = getCacheInstance;
//# sourceMappingURL=experiments-cache.js.map

/***/ }),

/***/ 306:
/*!*********************************************************************!*\
  !*** ../node_modules/@wix/wix-experiments/dist/src/http-request.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequest = void 0;
function httpRequest(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.withCredentials = true;
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr.responseText);
            }
            else {
                reject(new Error("Failed to load " + url + ", status " + xhr.status));
            }
        };
        xhr.onerror = function () { return reject(new Error("Failed to load " + url)); };
        xhr.send();
    });
}
exports.httpRequest = httpRequest;
//# sourceMappingURL=http-request.js.map

/***/ }),

/***/ 38:
/*!******************************!*\
  !*** ./utils/urlBuilders.ts ***!
  \******************************/
/*! exports provided: getQueryParams, getBaseUrl, getImagesStaticsUrl, buildBusinessManagerUrl */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./editor-app/editor-app.ts (referenced with cjs require), ./viewer-app/viewer-app.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParams", function() { return getQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagesStaticsUrl", function() { return getImagesStaticsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBusinessManagerUrl", function() { return buildBusinessManagerUrl; });
var QUERY_CHAR_INDEX = 1;
function getQueryParams() {
    return window.location.search
        .substring(QUERY_CHAR_INDEX)
        .split('&')
        .map(function (param) { return param.split('='); })
        .reduce(function (total, _a) {
        var key = _a[0], value = _a[1];
        total[key] = value;
        return total;
    }, {});
}
var getStaticsUrl = function () { return window.__STATICS_BASE_URL__; };
var getBaseUrl = function (adminPagesScriptUrl) {
    var url = adminPagesScriptUrl.match(/((?:\/[^\/]+)+)(?=\/[^\/]+)/);
    return "https://" + ((url && url.length && url[0].substring(1)) || '') + "/";
};
var getImagesStaticsUrl = function () { return getStaticsUrl() + 'assets/images/'; };
var buildBusinessManagerUrl = function (metasiteId, pageId) {
    return "https://www.wix.com/dashboard/" + metasiteId + "/admin-pages/" + pageId + "?referralInfo=sidebar";
};


/***/ }),

/***/ 39:
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 41:
/*!*********************************************!*\
  !*** ../node_modules/axios/lib/defaults.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ 8);
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 113);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ 62);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ 62);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/node_modules/process/browser.js */ 112)))

/***/ }),

/***/ 57:
/*!****************************************************!*\
  !*** ../node_modules/i18next-xhr-backend/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/commonjs/index.js */ 101).default;


/***/ }),

/***/ 58:
/*!******************************!*\
  !*** ./i18n.ts + 15 modules ***!
  \******************************/
/*! exports provided: i18n */
/*! exports used: i18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ i18n_i18n; });

// CONCATENATED MODULE: ../node_modules/i18next/dist/es/logger.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var consoleLogger = {
  type: 'logger',

  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    var _console;

    /* eslint no-console: 0 */
    if (console && console[type]) (_console = console)[type].apply(_console, _toConsumableArray(args));
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Logger);

    this.init(concreteLogger, options);
  }

  Logger.prototype.init = function init(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  };

  Logger.prototype.setDebug = function setDebug(bool) {
    this.debug = bool;
  };

  Logger.prototype.log = function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.forward(args, 'log', '', true);
  };

  Logger.prototype.warn = function warn() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.forward(args, 'warn', '', true);
  };

  Logger.prototype.error = function error() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.forward(args, 'error', '');
  };

  Logger.prototype.deprecate = function deprecate() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  };

  Logger.prototype.forward = function forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (typeof args[0] === 'string') args[0] = '' + prefix + this.prefix + ' ' + args[0];
    return this.logger[lvl](args);
  };

  Logger.prototype.create = function create(moduleName) {
    return new Logger(this.logger, _extends({ prefix: this.prefix + ':' + moduleName + ':' }, this.options));
  };

  return Logger;
}();

/* harmony default export */ var logger = (new Logger());
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/EventEmitter.js
function EventEmitter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    EventEmitter_classCallCheck(this, EventEmitter);

    this.observers = {};
  }

  EventEmitter.prototype.on = function on(events, listener) {
    var _this = this;

    events.split(' ').forEach(function (event) {
      _this.observers[event] = _this.observers[event] || [];
      _this.observers[event].push(listener);
    });
  };

  EventEmitter.prototype.off = function off(event, listener) {
    var _this2 = this;

    if (!this.observers[event]) {
      return;
    }

    this.observers[event].forEach(function () {
      if (!listener) {
        delete _this2.observers[event];
      } else {
        var index = _this2.observers[event].indexOf(listener);
        if (index > -1) {
          _this2.observers[event].splice(index, 1);
        }
      }
    });
  };

  EventEmitter.prototype.emit = function emit(event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (this.observers[event]) {
      var cloned = [].concat(this.observers[event]);
      cloned.forEach(function (observer) {
        observer.apply(undefined, args);
      });
    }

    if (this.observers['*']) {
      var _cloned = [].concat(this.observers['*']);
      _cloned.forEach(function (observer) {
        var _ref;

        observer.apply(observer, (_ref = [event]).concat.apply(_ref, args));
      });
    }
  };

  return EventEmitter;
}();

/* harmony default export */ var es_EventEmitter = (EventEmitter);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/utils.js
function makeString(object) {
  if (object == null) return '';
  /* eslint prefer-template: 0 */
  return '' + object;
}

function utils_copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};

    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}

function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}

function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}

function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

function regexEscape(str) {
  /* eslint no-useless-escape: 0 */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

/* eslint-disable */
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};
/* eslint-enable */

function utils_escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/ResourceStore.js
var ResourceStore_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function ResourceStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }




var ResourceStore_ResourceStore = function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  function ResourceStore() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { ns: ['translation'], defaultNS: 'translation' };

    ResourceStore_classCallCheck(this, ResourceStore);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.data = data;
    _this.options = options;
    return _this;
  }

  ResourceStore.prototype.addNamespaces = function addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  };

  ResourceStore.prototype.removeNamespaces = function removeNamespaces(ns) {
    var index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  };

  ResourceStore.prototype.getResource = function getResource(lng, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var keySeparator = options.keySeparator || this.options.keySeparator;
    if (keySeparator === undefined) keySeparator = '.';

    var path = [lng, ns];
    if (key && typeof key !== 'string') path = path.concat(key);
    if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    }

    return getPath(this.data, path);
  };

  ResourceStore.prototype.addResource = function addResource(lng, ns, key, value) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { silent: false };

    var keySeparator = this.options.keySeparator;
    if (keySeparator === undefined) keySeparator = '.';

    var path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    setPath(this.data, path, value);

    if (!options.silent) this.emit('added', lng, ns, key, value);
  };

  ResourceStore.prototype.addResources = function addResources(lng, ns, resources) {
    /* eslint no-restricted-syntax: 0 */
    for (var m in resources) {
      if (typeof resources[m] === 'string') this.addResource(lng, ns, m, resources[m], { silent: true });
    }
    this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
    var path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    var pack = getPath(this.data, path) || {};

    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = ResourceStore_extends({}, pack, resources);
    }

    setPath(this.data, path, pack);

    this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.removeResourceBundle = function removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);

    this.emit('removed', lng, ns);
  };

  ResourceStore.prototype.hasResourceBundle = function hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  };

  ResourceStore.prototype.getResourceBundle = function getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;

    // COMPATIBILITY: remove extend in v2.1.0
    if (this.options.compatibilityAPI === 'v1') return ResourceStore_extends({}, this.getResource(lng, ns));

    return this.getResource(lng, ns);
  };

  ResourceStore.prototype.toJSON = function toJSON() {
    return this.data;
  };

  return ResourceStore;
}(es_EventEmitter);

/* harmony default export */ var es_ResourceStore = (ResourceStore_ResourceStore);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/postProcessor.js
/* harmony default export */ var postProcessor = ({

  processors: {},

  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });

    return value;
  }
});
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/compatibility/v1.js
/* eslint no-param-reassign: 0 */


function convertInterpolation(options) {

  options.interpolation = {
    unescapeSuffix: 'HTML'
  };

  options.interpolation.prefix = options.interpolationPrefix || '__';
  options.interpolation.suffix = options.interpolationSuffix || '__';
  options.interpolation.escapeValue = options.escapeInterpolation || false;

  options.interpolation.nestingPrefix = options.reusePrefix || '$t(';
  options.interpolation.nestingSuffix = options.reuseSuffix || ')';

  return options;
}

function convertAPIOptions(options) {
  if (options.resStore) options.resources = options.resStore;

  if (options.ns && options.ns.defaultNs) {
    options.defaultNS = options.ns.defaultNs;
    options.ns = options.ns.namespaces;
  } else {
    options.defaultNS = options.ns || 'translation';
  }

  if (options.fallbackToDefaultNS && options.defaultNS) options.fallbackNS = options.defaultNS;

  options.saveMissing = options.sendMissing;
  options.saveMissingTo = options.sendMissingTo || 'current';
  options.returnNull = !options.fallbackOnNull;
  options.returnEmptyString = !options.fallbackOnEmpty;
  options.returnObjects = options.returnObjectTrees;
  options.joinArrays = '\n';

  options.returnedObjectHandler = options.objectTreeKeyHandler;
  options.parseMissingKeyHandler = options.parseMissingKey;
  options.appendNamespaceToMissingKey = true;

  options.nsSeparator = options.nsseparator || ':';
  options.keySeparator = options.keyseparator || '.';

  if (options.shortcutFunction === 'sprintf') {
    options.overloadTranslationOptionHandler = function handle(args) {
      var values = [];

      for (var i = 1; i < args.length; i++) {
        values.push(args[i]);
      }

      return {
        postProcess: 'sprintf',
        sprintf: values
      };
    };
  }

  options.whitelist = options.lngWhitelist;
  options.preload = options.preload;
  if (options.load === 'current') options.load = 'currentOnly';
  if (options.load === 'unspecific') options.load = 'languageOnly';

  // backend
  options.backend = options.backend || {};
  options.backend.loadPath = options.resGetPath || 'locales/__lng__/__ns__.json';
  options.backend.addPath = options.resPostPath || 'locales/add/__lng__/__ns__';
  options.backend.allowMultiLoading = options.dynamicLoad;

  // cache
  options.cache = options.cache || {};
  options.cache.prefix = 'res_';
  options.cache.expirationTime = 7 * 24 * 60 * 60 * 1000;
  options.cache.enabled = options.useLocalStorage;

  options = convertInterpolation(options);
  if (options.defaultVariables) options.interpolation.defaultVariables = options.defaultVariables;

  // COMPATIBILITY: deprecation
  // if (options.getAsync === false) throw deprecation error

  return options;
}

function convertJSONOptions(options) {
  options = convertInterpolation(options);
  options.joinArrays = '\n';

  return options;
}

function convertTOptions(options) {
  if (options.interpolationPrefix || options.interpolationSuffix || options.escapeInterpolation !== undefined) {
    options = convertInterpolation(options);
  }

  options.nsSeparator = options.nsseparator;
  options.keySeparator = options.keyseparator;

  options.returnObjects = options.returnObjectTrees;

  return options;
}

function appendBackwardsAPI(i18n) {
  i18n.lng = function () {
    logger.deprecate('i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.');
    return i18n.services.languageUtils.toResolveHierarchy(i18n.language)[0];
  };

  i18n.preload = function (lngs, cb) {
    logger.deprecate('i18next.preload() can be replaced with i18next.loadLanguages()');
    i18n.loadLanguages(lngs, cb);
  };

  i18n.setLng = function (lng, options, callback) {
    logger.deprecate('i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.');
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options) options = {};

    if (options.fixLng === true) {
      if (callback) return callback(null, i18n.getFixedT(lng));
    }

    return i18n.changeLanguage(lng, callback);
  };

  i18n.addPostProcessor = function (name, fc) {
    logger.deprecate('i18next.addPostProcessor() can be replaced by i18next.use({ type: \'postProcessor\', name: \'name\', process: fc })');
    i18n.use({
      type: 'postProcessor',
      name: name,
      process: fc
    });
  };
}
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/Translator.js
var Translator_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Translator_defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function Translator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Translator_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Translator_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : Translator_defaults(subClass, superClass); }







var Translator_Translator = function (_EventEmitter) {
  Translator_inherits(Translator, _EventEmitter);

  function Translator(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Translator_classCallCheck(this, Translator);

    var _this = Translator_possibleConstructorReturn(this, _EventEmitter.call(this));

    utils_copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector'], services, _this);

    _this.options = options;
    _this.logger = logger.create('translator');
    return _this;
  }

  Translator.prototype.changeLanguage = function changeLanguage(lng) {
    if (lng) this.language = lng;
  };

  Translator.prototype.exists = function exists(key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { interpolation: {} };

    if (this.options.compatibilityAPI === 'v1') {
      options = convertTOptions(options);
    }

    return this.resolve(key, options) !== undefined;
  };

  Translator.prototype.extractFromKey = function extractFromKey(key, options) {
    var nsSeparator = options.nsSeparator || this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';
    var keySeparator = options.keySeparator || this.options.keySeparator || '.';

    var namespaces = options.ns || this.options.defaultNS;
    if (nsSeparator && key.indexOf(nsSeparator) > -1) {
      var parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === 'string') namespaces = [namespaces];

    return {
      key: key,
      namespaces: namespaces
    };
  };

  Translator.prototype.translate = function translate(keys) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      /* eslint prefer-rest-params: 0 */
      options = this.options.overloadTranslationOptionHandler(arguments);
    } else if (this.options.compatibilityAPI === 'v1') {
      options = convertTOptions(options);
    }

    // non valid keys handling
    if (keys === undefined || keys === null || keys === '') return '';
    if (typeof keys === 'number') keys = String(keys);
    if (typeof keys === 'string') keys = [keys];

    // separators
    var keySeparator = options.keySeparator || this.options.keySeparator || '.';

    // get namespace(s)

    var _extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
        key = _extractFromKey.key,
        namespaces = _extractFromKey.namespaces;

    var namespace = namespaces[namespaces.length - 1];

    // return key on CIMode
    var lng = options.lng || this.language;
    var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        var nsSeparator = options.nsSeparator || this.options.nsSeparator;
        return namespace + nsSeparator + key;
      }

      return key;
    }

    // resolve from store
    var res = this.resolve(keys, options);

    var resType = Object.prototype.toString.apply(res);
    var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;

    // object
    if (res && typeof res !== 'string' && noObject.indexOf(resType) < 0 && !(joinArrays && resType === '[object Array]')) {
      if (!options.returnObjects && !this.options.returnObjects) {
        this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(key, res, options) : 'key \'' + key + ' (' + this.language + ')\' returned an object instead of string.';
      }

      // if we got a separator we loop over children - else we just return object as is
      // as having it set to false means no hierarchy so no lookup for nested values
      if (options.keySeparator || this.options.keySeparator) {
        var copy = resType === '[object Array]' ? [] : {}; // apply child translation on a copy

        /* eslint no-restricted-syntax: 0 */
        for (var m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            copy[m] = this.translate('' + key + keySeparator + m, Translator_extends({}, options, { joinArrays: false, ns: namespaces }));
          }
        }
        res = copy;
      }
    } else if (joinArrays && resType === '[object Array]') {
      // array special treatment
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, key, options);
    } else {
      // string, empty or null
      var usedDefault = false;
      var usedKey = false;

      // fallback value
      if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
        usedDefault = true;
        res = options.defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }

      // save missing
      if (usedKey || usedDefault) {
        this.logger.log('missingKey', lng, namespace, key, res);

        var lngs = [];
        var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (var i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }

        if (this.options.saveMissing) {
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(lngs, namespace, key, res);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(lngs, namespace, key, res);
          }
        }

        this.emit('missingKey', lngs, namespace, key, res);
      }

      // extend
      res = this.extendTranslation(res, key, options);

      // append namespace if still key
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = namespace + ':' + key;

      // parseMissingKeyHandler
      if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
    }

    // return
    return res;
  };

  Translator.prototype.extendTranslation = function extendTranslation(res, key, options) {
    var _this2 = this;

    if (options.interpolation) this.interpolator.init(Translator_extends({}, options, { interpolation: Translator_extends({}, this.options.interpolation, options.interpolation) }));

    // interpolate
    var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
    if (this.options.interpolation.defaultVariables) data = Translator_extends({}, this.options.interpolation.defaultVariables, data);
    res = this.interpolator.interpolate(res, data, options.lng || this.language);

    // nesting
    if (options.nest !== false) res = this.interpolator.nest(res, function () {
      return _this2.translate.apply(_this2, arguments);
    }, options);

    if (options.interpolation) this.interpolator.reset();

    // post process
    var postProcess = options.postProcess || this.options.postProcess;
    var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

    if (res !== undefined && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, options, this);
    }

    return res;
  };

  Translator.prototype.resolve = function resolve(keys) {
    var _this3 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var found = void 0;

    if (typeof keys === 'string') keys = [keys];

    // forEach possible key
    keys.forEach(function (k) {
      if (_this3.isValidLookup(found)) return;

      var extracted = _this3.extractFromKey(k, options);
      var key = extracted.key;
      var namespaces = extracted.namespaces;
      if (_this3.options.fallbackNS) namespaces = namespaces.concat(_this3.options.fallbackNS);

      var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';

      var codes = options.lngs ? options.lngs : _this3.languageUtils.toResolveHierarchy(options.lng || _this3.language);

      namespaces.forEach(function (ns) {
        if (_this3.isValidLookup(found)) return;

        codes.forEach(function (code) {
          if (_this3.isValidLookup(found)) return;

          var finalKey = key;
          var finalKeys = [finalKey];

          var pluralSuffix = void 0;
          if (needsPluralHandling) pluralSuffix = _this3.pluralResolver.getSuffix(code, options.count);

          // fallback for plural if context not found
          if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);

          // get key for context if needed
          if (needsContextHandling) finalKeys.push(finalKey += '' + _this3.options.contextSeparator + options.context);

          // get key for plural if needed
          if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);

          // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only
          var possibleKey = void 0;
          /* eslint no-cond-assign: 0 */
          while (possibleKey = finalKeys.pop()) {
            if (!_this3.isValidLookup(found)) {
              found = _this3.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });

    return found;
  };

  Translator.prototype.isValidLookup = function isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  };

  Translator.prototype.getResource = function getResource(code, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    return this.resourceStore.getResource(code, ns, key, options);
  };

  return Translator;
}(es_EventEmitter);

/* harmony default export */ var es_Translator = (Translator_Translator);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/LanguageUtils.js
function LanguageUtils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtils_LanguageUtil = function () {
  function LanguageUtil(options) {
    LanguageUtils_classCallCheck(this, LanguageUtil);

    this.options = options;

    this.whitelist = this.options.whitelist || false;
    this.logger = logger.create('languageUtils');
  }

  LanguageUtil.prototype.getScriptPartFromCode = function getScriptPartFromCode(code) {
    if (!code || code.indexOf('-') < 0) return null;

    var p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    return this.formatLanguageCode(p.join('-'));
  };

  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
    if (!code || code.indexOf('-') < 0) return code;

    var p = code.split('-');
    return this.formatLanguageCode(p[0]);
  };

  LanguageUtil.prototype.formatLanguageCode = function formatLanguageCode(code) {
    // http://www.iana.org/assignments/language-tags/language-tags.xhtml
    if (typeof code === 'string' && code.indexOf('-') > -1) {
      var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      var p = code.split('-');

      if (this.options.lowerCaseLng) {
        p = p.map(function (part) {
          return part.toLowerCase();
        });
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();

        // if lenght 2 guess it's a country
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }

      return p.join('-');
    }

    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  };

  LanguageUtil.prototype.isWhitelisted = function isWhitelisted(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
  };

  LanguageUtil.prototype.getFallbackCodes = function getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'string') fallbacks = [fallbacks];
    if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;

    if (!code) return fallbacks.default || [];

    // asume we have an object defining fallbacks
    var found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks.default;

    return found || [];
  };

  LanguageUtil.prototype.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
    var _this = this;

    var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);

    var codes = [];
    var addCode = function addCode(c) {
      if (!c) return;
      if (_this.isWhitelisted(c)) {
        codes.push(c);
      } else {
        _this.logger.warn('rejecting non-whitelisted language code: ' + c);
      }
    };

    if (typeof code === 'string' && code.indexOf('-') > -1) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === 'string') {
      addCode(this.formatLanguageCode(code));
    }

    fallbackCodes.forEach(function (fc) {
      if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
    });

    return codes;
  };

  return LanguageUtil;
}();

/* harmony default export */ var LanguageUtils = (LanguageUtils_LanguageUtil);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/PluralResolver.js
function PluralResolver_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
/* eslint-disable */
var sets = [{ lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1 }, { lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'es_ar', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt', 'pt_br', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2 }, { lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3 }, { lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 }, { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 }, { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 }, { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ['fr'], nr: [1, 2], fc: 9 }, { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ['is'], nr: [1, 2], fc: 12 }, { lngs: ['jv'], nr: [0, 1], fc: 13 }, { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ['lt'], nr: [1, 2, 10], fc: 15 }, { lngs: ['lv'], nr: [1, 2, 0], fc: 16 }, { lngs: ['mk'], nr: [1, 2], fc: 17 }, { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 }, { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ['or'], nr: [2, 1], fc: 2 }, { lngs: ['ro'], nr: [1, 2, 20], fc: 20 }, { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 }];

var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  }
};
/* eslint-enable */

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver_PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    PluralResolver_classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;

    this.logger = logger.create('pluralResolver');

    this.rules = createRules();
  }

  PluralResolver.prototype.addRule = function addRule(lng, obj) {
    this.rules[lng] = obj;
  };

  PluralResolver.prototype.getRule = function getRule(code) {
    return this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  };

  PluralResolver.prototype.needsPlural = function needsPlural(code) {
    var rule = this.getRule(code);

    return rule && rule.numbers.length > 1;
  };

  PluralResolver.prototype.getSuffix = function getSuffix(code, count) {
    var _this = this;

    var rule = this.getRule(code);

    if (rule) {
      if (rule.numbers.length === 1) return ''; // only singular

      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];

      // special treatment for lngs only having singular and plural
      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }

      var returnSuffix = function returnSuffix() {
        return _this.options.prepend && suffix.toString() ? _this.options.prepend + suffix.toString() : suffix.toString();
      };

      // COMPATIBILITY JSON
      // v1
      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return '_plural_' + suffix.toString();
        return returnSuffix();
      } else if ( /* v2 */this.options.compatibilityJSON === 'v2' || rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      } else if ( /* v3 - gettext index */rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }
      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }

    this.logger.warn('no plural rule found for: ' + code);
    return '';
  };

  return PluralResolver;
}();

/* harmony default export */ var es_PluralResolver = (PluralResolver_PluralResolver);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/Interpolator.js
var Interpolator_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Interpolator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Interpolator_Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Interpolator_classCallCheck(this, Interpolator);

    this.logger = logger.create('interpolator');

    this.init(options, true);
  }

  /* eslint no-param-reassign: 0 */


  Interpolator.prototype.init = function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var reset = arguments[1];

    if (reset) {
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || function (value) {
        return value;
      };
      this.escape = options.interpolation && options.interpolation.escape || utils_escape;
    }
    if (!options.interpolation) options.interpolation = { escapeValue: true };

    var iOpts = options.interpolation;

    this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;

    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';

    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';

    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';

    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');

    // the regexp
    this.resetRegExp();
  };

  Interpolator.prototype.reset = function reset() {
    if (this.options) this.init(this.options);
  };

  Interpolator.prototype.resetRegExp = function resetRegExp() {
    // the regexp
    var regexpStr = this.prefix + '(.+?)' + this.suffix;
    this.regexp = new RegExp(regexpStr, 'g');

    var regexpUnescapeStr = '' + this.prefix + this.unescapePrefix + '(.+?)' + this.unescapeSuffix + this.suffix;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');

    var nestingRegexpStr = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
  };

  Interpolator.prototype.interpolate = function interpolate(str, data, lng) {
    var _this = this;

    var match = void 0;
    var value = void 0;

    function regexSafe(val) {
      return val.replace(/\$/g, '$$$$');
    }

    var handleFormat = function handleFormat(key) {
      if (key.indexOf(_this.formatSeparator) < 0) return getPath(data, key);

      var p = key.split(_this.formatSeparator);
      var k = p.shift().trim();
      var f = p.join(_this.formatSeparator).trim();

      return _this.format(getPath(data, k), f, lng);
    };

    this.resetRegExp();

    // unescape if has unescapePrefix/Suffix
    /* eslint no-cond-assign: 0 */
    while (match = this.regexpUnescape.exec(str)) {
      value = handleFormat(match[1].trim());
      str = str.replace(match[0], value);
      this.regexpUnescape.lastIndex = 0;
    }

    // regular escape on demand
    while (match = this.regexp.exec(str)) {
      value = handleFormat(match[1].trim());
      if (typeof value !== 'string') value = makeString(value);
      if (!value) {
        this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
        value = '';
      }
      value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  };

  Interpolator.prototype.nest = function nest(str, fc) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var match = void 0;
    var value = void 0;

    var clonedOptions = Interpolator_extends({}, options);
    clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

    // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"
    function handleHasOptions(key) {
      if (key.indexOf(',') < 0) return key;

      var p = key.split(',');
      key = p.shift();
      var optionsString = p.join(',');
      optionsString = this.interpolate(optionsString, clonedOptions);
      optionsString = optionsString.replace(/'/g, '"');

      try {
        clonedOptions = JSON.parse(optionsString);
      } catch (e) {
        this.logger.error('failed parsing options string in nesting for key ' + key, e);
      }

      return key;
    }

    // regular escape on demand
    while (match = this.nestingRegexp.exec(str)) {
      value = fc(handleHasOptions.call(this, match[1].trim()), clonedOptions);

      // is only the nesting key (key1 = '$(key2)') return the value without stringify
      if (value && match[0] === str && typeof value !== 'string') return value;

      // no string to include or empty
      if (typeof value !== 'string') value = makeString(value);
      if (!value) {
        this.logger.warn('missed to resolve ' + match[1] + ' for nesting ' + str);
        value = '';
      }
      // Nested keys should not be escaped by default #854
      // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  };

  return Interpolator;
}();

/* harmony default export */ var es_Interpolator = (Interpolator_Interpolator);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/BackendConnector.js
var BackendConnector_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function BackendConnector_defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function BackendConnector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BackendConnector_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BackendConnector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : BackendConnector_defaults(subClass, superClass); }





function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var BackendConnector_Connector = function (_EventEmitter) {
  BackendConnector_inherits(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    BackendConnector_classCallCheck(this, Connector);

    var _this = BackendConnector_possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.options = options;
    _this.logger = logger.create('backendConnector');

    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }
    return _this;
  }

  Connector.prototype.queueLoad = function queueLoad(languages, namespaces, callback) {
    var _this2 = this;

    // find what needs to be loaded
    var toLoad = [];
    var pending = [];
    var toLoadLanguages = [];
    var toLoadNamespaces = [];

    languages.forEach(function (lng) {
      var hasAllNamespaces = true;

      namespaces.forEach(function (ns) {
        var name = lng + '|' + ns;

        if (_this2.store.hasResourceBundle(lng, ns)) {
          _this2.state[name] = 2; // loaded
        } else if (_this2.state[name] < 0) {
          // nothing to do for err
        } else if (_this2.state[name] === 1) {
          if (pending.indexOf(name) < 0) pending.push(name);
        } else {
          _this2.state[name] = 1; // pending

          hasAllNamespaces = false;

          if (pending.indexOf(name) < 0) pending.push(name);
          if (toLoad.indexOf(name) < 0) toLoad.push(name);
          if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
        }
      });

      if (!hasAllNamespaces) toLoadLanguages.push(lng);
    });

    if (toLoad.length || pending.length) {
      this.queue.push({
        pending: pending,
        loaded: {},
        errors: [],
        callback: callback
      });
    }

    return {
      toLoad: toLoad,
      pending: pending,
      toLoadLanguages: toLoadLanguages,
      toLoadNamespaces: toLoadNamespaces
    };
  };

  Connector.prototype.loaded = function loaded(name, err, data) {
    var _this3 = this;

    var _name$split = name.split('|'),
        _name$split2 = _slicedToArray(_name$split, 2),
        lng = _name$split2[0],
        ns = _name$split2[1];

    if (err) this.emit('failedLoading', lng, ns, err);

    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }

    // set loaded
    this.state[name] = err ? -1 : 2;

    // callback if ready
    this.queue.forEach(function (q) {
      pushPath(q.loaded, [lng], ns);
      remove(q.pending, name);

      if (err) q.errors.push(err);

      if (q.pending.length === 0 && !q.done) {
        _this3.emit('loaded', q.loaded);
        /* eslint no-param-reassign: 0 */
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });

    // remove done load requests
    this.queue = this.queue.filter(function (q) {
      return !q.done;
    });
  };

  Connector.prototype.read = function read(lng, ns, fcName) {
    var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var _this4 = this;

    var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
    var callback = arguments[5];

    if (!lng.length) return callback(null, {}); // noting to load

    return this.backend[fcName](lng, ns, function (err, data) {
      if (err && data /* = retryFlag */ && tried < 5) {
        setTimeout(function () {
          _this4.read.call(_this4, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    });
  };

  /* eslint consistent-return: 0 */


  Connector.prototype.load = function load(languages, namespaces, callback) {
    var _this5 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    var options = BackendConnector_extends({}, this.backend.options, this.options.backend);

    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];

    var toLoad = this.queueLoad(languages, namespaces, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now
      return null; // pendings will trigger callback
    }

    // load with multi-load
    if (options.allowMultiLoading && this.backend.readMulti) {
      this.read(toLoad.toLoadLanguages, toLoad.toLoadNamespaces, 'readMulti', null, null, function (err, data) {
        if (err) _this5.logger.warn('loading namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading failed', err);
        if (!err && data) _this5.logger.log('successfully loaded namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading', data);

        toLoad.toLoad.forEach(function (name) {
          var _name$split3 = name.split('|'),
              _name$split4 = _slicedToArray(_name$split3, 2),
              l = _name$split4[0],
              n = _name$split4[1];

          var bundle = getPath(data, [l, n]);
          if (bundle) {
            _this5.loaded(name, err, bundle);
          } else {
            var error = 'loading namespace ' + n + ' for language ' + l + ' via multiloading failed';
            _this5.loaded(name, error);
            _this5.logger.error(error);
          }
        });
      });
    } else {
      toLoad.toLoad.forEach(function (name) {
        _this5.loadOne(name);
      });
    }
  };

  Connector.prototype.reload = function reload(languages, namespaces) {
    var _this6 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
    }
    var options = BackendConnector_extends({}, this.backend.options, this.options.backend);

    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];

    // load with multi-load
    if (options.allowMultiLoading && this.backend.readMulti) {
      this.read(languages, namespaces, 'readMulti', null, null, function (err, data) {
        if (err) _this6.logger.warn('reloading namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading failed', err);
        if (!err && data) _this6.logger.log('successfully reloaded namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading', data);

        languages.forEach(function (l) {
          namespaces.forEach(function (n) {
            var bundle = getPath(data, [l, n]);
            if (bundle) {
              _this6.loaded(l + '|' + n, err, bundle);
            } else {
              var error = 'reloading namespace ' + n + ' for language ' + l + ' via multiloading failed';
              _this6.loaded(l + '|' + n, error);
              _this6.logger.error(error);
            }
          });
        });
      });
    } else {
      languages.forEach(function (l) {
        namespaces.forEach(function (n) {
          _this6.loadOne(l + '|' + n, 're');
        });
      });
    }
  };

  Connector.prototype.loadOne = function loadOne(name) {
    var _this7 = this;

    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var _name$split5 = name.split('|'),
        _name$split6 = _slicedToArray(_name$split5, 2),
        lng = _name$split6[0],
        ns = _name$split6[1];

    this.read(lng, ns, 'read', null, null, function (err, data) {
      if (err) _this7.logger.warn(prefix + 'loading namespace ' + ns + ' for language ' + lng + ' failed', err);
      if (!err && data) _this7.logger.log(prefix + 'loaded namespace ' + ns + ' for language ' + lng, data);

      _this7.loaded(name, err, data);
    });
  };

  Connector.prototype.saveMissing = function saveMissing(languages, namespace, key, fallbackValue) {
    if (this.backend && this.backend.create) this.backend.create(languages, namespace, key, fallbackValue);

    // write to store to avoid resending
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  };

  return Connector;
}(es_EventEmitter);

/* harmony default export */ var BackendConnector = (BackendConnector_Connector);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/CacheConnector.js
var CacheConnector_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function CacheConnector_defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function CacheConnector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheConnector_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function CacheConnector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : CacheConnector_defaults(subClass, superClass); }




var CacheConnector_Connector = function (_EventEmitter) {
  CacheConnector_inherits(Connector, _EventEmitter);

  function Connector(cache, store, services) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    CacheConnector_classCallCheck(this, Connector);

    var _this = CacheConnector_possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.cache = cache;
    _this.store = store;
    _this.services = services;
    _this.options = options;
    _this.logger = logger.create('cacheConnector');

    if (_this.cache && _this.cache.init) _this.cache.init(services, options.cache, options);
    return _this;
  }

  /* eslint consistent-return: 0 */


  Connector.prototype.load = function load(languages, namespaces, callback) {
    var _this2 = this;

    if (!this.cache) return callback && callback();
    var options = CacheConnector_extends({}, this.cache.options, this.options.cache);

    var loadLngs = typeof languages === 'string' ? this.services.languageUtils.toResolveHierarchy(languages) : languages;

    if (options.enabled) {
      this.cache.load(loadLngs, function (err, data) {
        if (err) _this2.logger.error('loading languages ' + loadLngs.join(', ') + ' from cache failed', err);
        if (data) {
          /* eslint no-restricted-syntax: 0 */
          for (var l in data) {
            if (Object.prototype.hasOwnProperty.call(data, l)) {
              for (var n in data[l]) {
                if (Object.prototype.hasOwnProperty.call(data[l], n)) {
                  if (n !== 'i18nStamp') {
                    var bundle = data[l][n];
                    if (bundle) _this2.store.addResourceBundle(l, n, bundle);
                  }
                }
              }
            }
          }
        }
        if (callback) callback();
      });
    } else if (callback) {
      callback();
    }
  };

  Connector.prototype.save = function save() {
    if (this.cache && this.options.cache && this.options.cache.enabled) this.cache.save(this.store.data);
  };

  return Connector;
}(es_EventEmitter);

/* harmony default export */ var CacheConnector = (CacheConnector_Connector);
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/defaults.js

function get() {
  return {
    debug: false,
    initImmediate: true,

    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false, // string or array of namespaces

    whitelist: false, // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all', // | currentOnly | languageOnly
    preload: false, // array with preload languages

    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',

    saveMissing: false, // enable to send missing values
    saveMissingTo: 'fallback', // 'current' || 'all'
    missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling

    postProcess: false, // string or array of postProcessor names
    returnNull: true, // allows null value as valid translation
    returnEmptyString: true, // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false, // or string to join array
    returnedObjectHandler: function returnedObjectHandler() {}, // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false, // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      return { defaultValue: args[1] };
    },

    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',

      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
    }
  };
}

/* eslint no-param-reassign: 0 */
function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  // extend whitelist with cimode
  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) options.whitelist.push('cimode');

  return options;
}
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/i18next.js
var i18next_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function i18next_defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function i18next_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function i18next_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function i18next_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : i18next_defaults(subClass, superClass); }















function noop() {}

var i18next_I18n = function (_EventEmitter) {
  i18next_inherits(I18n, _EventEmitter);

  function I18n() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments[1];

    i18next_classCallCheck(this, I18n);

    var _this = i18next_possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = logger;
    _this.modules = { external: [] };

    if (callback && !_this.isInitialized && !options.isClone) {
      var _ret;

      // https://github.com/i18next/i18next/issues/879
      if (!_this.options.initImmediate) return _ret = _this.init(options, callback), i18next_possibleConstructorReturn(_this, _ret);
      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }
    return _this;
  }

  I18n.prototype.init = function init(options, callback) {
    var _this2 = this;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options) options = {};

    if (options.compatibilityAPI === 'v1') {
      this.options = i18next_extends({}, get(), transformOptions(convertAPIOptions(options)), {});
    } else if (options.compatibilityJSON === 'v1') {
      this.options = i18next_extends({}, get(), transformOptions(convertJSONOptions(options)), {});
    } else {
      this.options = i18next_extends({}, get(), this.options, transformOptions(options));
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;

    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    }

    // init services
    if (!this.options.isClone) {
      if (this.modules.logger) {
        logger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        logger.init(null, this.options);
      }

      var lu = new LanguageUtils(this.options);
      this.store = new es_ResourceStore(this.options.resources, this.options);

      var s = this.services;
      s.logger = logger;
      s.resourceStore = this.store;
      s.resourceStore.on('added removed', function (lng, ns) {
        s.cacheConnector.save();
      });
      s.languageUtils = lu;
      s.pluralResolver = new es_PluralResolver(lu, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix });
      s.interpolator = new es_Interpolator(this.options);

      s.backendConnector = new BackendConnector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      // pipe events from backendConnector
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      s.backendConnector.on('loaded', function (loaded) {
        s.cacheConnector.save();
      });

      s.cacheConnector = new CacheConnector(createClassOnDemand(this.modules.cache), s.resourceStore, s, this.options);
      // pipe events from backendConnector
      s.cacheConnector.on('*', function (event) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        s.languageDetector.init(s, this.options.detection, this.options);
      }

      this.translator = new es_Translator(this.services, this.options);
      // pipe events from translator
      this.translator.on('*', function (event) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      this.modules.external.forEach(function (m) {
        if (m.init) m.init(_this2);
      });
    }

    // append api
    var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle'];
    storeApi.forEach(function (fcName) {
      _this2[fcName] = function () {
        var _store;

        return (_store = _this2.store)[fcName].apply(_store, arguments);
      };
    });

    // COMPATIBILITY: remove this
    if (this.options.compatibilityAPI === 'v1') appendBackwardsAPI(this);

    var load = function load() {
      _this2.changeLanguage(_this2.options.lng, function (err, t) {
        _this2.isInitialized = true;
        _this2.logger.log('initialized', _this2.options);
        _this2.emit('initialized', _this2.options);

        callback(err, t);
      });
    };

    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }

    return this;
  };

  /* eslint consistent-return: 0 */


  I18n.prototype.loadResources = function loadResources() {
    var _this3 = this;

    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

    if (!this.options.resources) {
      if (this.language && this.language.toLowerCase() === 'cimode') return callback(); // avoid loading resources for cimode

      var toLoad = [];

      var append = function append(lng) {
        if (!lng) return;
        var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };

      if (!this.language) {
        // at least load fallbacks in this case
        var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(function (l) {
          return append(l);
        });
      } else {
        append(this.language);
      }

      if (this.options.preload) {
        this.options.preload.forEach(function (l) {
          return append(l);
        });
      }

      this.services.cacheConnector.load(toLoad, this.options.ns, function () {
        _this3.services.backendConnector.load(toLoad, _this3.options.ns, callback);
      });
    } else {
      callback(null);
    }
  };

  I18n.prototype.reloadResources = function reloadResources(lngs, ns) {
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    this.services.backendConnector.reload(lngs, ns);
  };

  I18n.prototype.use = function use(module) {
    if (module.type === 'backend') {
      this.modules.backend = module;
    }

    if (module.type === 'cache') {
      this.modules.cache = module;
    }

    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }

    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }

    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }

    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }

    return this;
  };

  I18n.prototype.changeLanguage = function changeLanguage(lng, callback) {
    var _this4 = this;

    var done = function done(err, l) {
      if (l) {
        _this4.emit('languageChanged', l);
        _this4.logger.log('languageChanged', l);
      }

      if (callback) callback(err, function () {
        return _this4.t.apply(_this4, arguments);
      });
    };

    var setLng = function setLng(l) {
      if (l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);

        _this4.translator.changeLanguage(l);

        if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
      }

      _this4.loadResources(function (err) {
        done(err, l);
      });
    };

    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      this.services.languageDetector.detect(setLng);
    } else {
      setLng(lng);
    }
  };

  I18n.prototype.getFixedT = function getFixedT(lng, ns) {
    var _this5 = this;

    var fixedT = function fixedT(key) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = i18next_extends({}, opts);
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      return _this5.t(key, options);
    };
    if (typeof lng === 'string') {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    return fixedT;
  };

  I18n.prototype.t = function t() {
    var _translator;

    return this.translator && (_translator = this.translator).translate.apply(_translator, arguments);
  };

  I18n.prototype.exists = function exists() {
    var _translator2;

    return this.translator && (_translator2 = this.translator).exists.apply(_translator2, arguments);
  };

  I18n.prototype.setDefaultNamespace = function setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  };

  I18n.prototype.loadNamespaces = function loadNamespaces(ns, callback) {
    var _this6 = this;

    if (!this.options.ns) return callback && callback();
    if (typeof ns === 'string') ns = [ns];

    ns.forEach(function (n) {
      if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
    });

    this.loadResources(callback);
  };

  I18n.prototype.loadLanguages = function loadLanguages(lngs, callback) {
    if (typeof lngs === 'string') lngs = [lngs];
    var preloaded = this.options.preload || [];

    var newLngs = lngs.filter(function (lng) {
      return preloaded.indexOf(lng) < 0;
    });
    // Exit early if all given languages are already preloaded
    if (!newLngs.length) return callback();

    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(callback);
  };

  I18n.prototype.dir = function dir(lng) {
    if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
    if (!lng) return 'rtl';

    var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];

    return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
  };

  /* eslint class-methods-use-this: 0 */


  I18n.prototype.createInstance = function createInstance() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments[1];

    return new I18n(options, callback);
  };

  I18n.prototype.cloneInstance = function cloneInstance() {
    var _this7 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

    var mergedOptions = i18next_extends({}, this.options, options, { isClone: true });
    var clone = new I18n(mergedOptions, callback);
    var membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(function (m) {
      clone[m] = _this7[m];
    });
    clone.translator = new es_Translator(clone.services, clone.options);
    clone.translator.on('*', function (event) {
      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      clone.emit.apply(clone, [event].concat(args));
    });
    clone.init(mergedOptions, callback);

    return clone;
  };

  return I18n;
}(es_EventEmitter);

/* harmony default export */ var i18next = (new i18next_I18n());
// CONCATENATED MODULE: ../node_modules/i18next/dist/es/index.js


/* harmony default export */ var es = (i18next);

var changeLanguage = i18next.changeLanguage.bind(i18next);
var es_cloneInstance = i18next.cloneInstance.bind(i18next);
var createInstance = i18next.createInstance.bind(i18next);
var dir = i18next.dir.bind(i18next);
var es_exists = i18next.exists.bind(i18next);
var getFixedT = i18next.getFixedT.bind(i18next);
var es_init = i18next.init.bind(i18next);
var loadLanguages = i18next.loadLanguages.bind(i18next);
var loadNamespaces = i18next.loadNamespaces.bind(i18next);
var loadResources = i18next.loadResources.bind(i18next);
var off = i18next.off.bind(i18next);
var on = i18next.on.bind(i18next);
var setDefaultNamespace = i18next.setDefaultNamespace.bind(i18next);
var t = i18next.t.bind(i18next);
var es_use = i18next.use.bind(i18next);
// EXTERNAL MODULE: ../node_modules/i18next-xhr-backend/index.js
var i18next_xhr_backend = __webpack_require__(57);

// CONCATENATED MODULE: ./i18n.ts


var i18nextCore = function (locale, baseUrl, cb) {
    return es_use(i18next_xhr_backend).init({
        lng: locale,
        fallbackLng: 'en',
        keySeparator: '$',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: baseUrl + "assets/locale/admin-pages-platform-app/messages_{{lng}}.json",
            crossDomain: true,
        },
    }, cb);
};
var i18n_i18n = function (_a) {
    var locale = _a.locale, _b = _a.baseUrl, baseUrl = _b === void 0 ? '' : _b;
    return new Promise(function (resolve, reject) {
        var i18nInstance = i18nextCore(locale, baseUrl, function (err, t) { return (err ? reject(err) : resolve({ t: t, i18nInstance: i18nInstance })); });
    });
};


/***/ }),

/***/ 59:
/*!*******************************************!*\
  !*** ./utils/editorUtils.ts + 20 modules ***!
  \*******************************************/
/*! exports provided: markNewDynamicPageAsAdminPage, createPage, renamePage, changePageUrl, getIsHiddenFromController, saveIsHiddenToController */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/headers/dist/esm/globals.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/base-64/base64.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/tslib/tslib.es6.js (<- Module is referenced from these modules with unsupported syntax: ../node_modules/@wix/wix-experiments/dist/src/conduction-utils/global-defaults.js (referenced with cjs require), ../node_modules/@wix/wix-experiments/dist/src/experiments-cache.js (referenced with cjs require), ../node_modules/@wix/wix-experiments/dist/src/index.js (referenced with cjs require)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "markNewDynamicPageAsAdminPage", function() { return /* binding */ markNewDynamicPageAsAdminPage; });
__webpack_require__.d(__webpack_exports__, "createPage", function() { return /* binding */ createPage; });
__webpack_require__.d(__webpack_exports__, "renamePage", function() { return /* binding */ renamePage; });
__webpack_require__.d(__webpack_exports__, "changePageUrl", function() { return /* binding */ changePageUrl; });
__webpack_require__.d(__webpack_exports__, "getIsHiddenFromController", function() { return /* binding */ getIsHiddenFromController; });
__webpack_require__.d(__webpack_exports__, "saveIsHiddenToController", function() { return /* binding */ saveIsHiddenToController; });

// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/axios-interceptors-loader.js
var register = function register(axiosInstance, interceptor) {
  var interceptorIdsToUnregister = [];

  if (interceptor.requestSuccess || interceptor.requestError) {
    var interceptorId = axiosInstance.interceptors.request.use(interceptor.requestSuccess, interceptor.requestError);
    interceptorIdsToUnregister.push(interceptorId);
  }

  if (interceptor.responseSuccess || interceptor.responseError) {
    var _interceptorId = axiosInstance.interceptors.response.use(interceptor.responseSuccess, interceptor.responseError);

    interceptorIdsToUnregister.push(_interceptorId);
  }

  return function () {
    return interceptorIdsToUnregister.map(function (id) {
      return axiosInstance.interceptors.response.eject(id);
    });
  };
};

var load = function load(axiosInstance, interceptors) {
  if (interceptors === void 0) {
    interceptors = [];
  }

  var unregister = interceptors.map(function (interceptor) {
    return register(axiosInstance, interceptor);
  });
  return function () {
    return unregister.map(function (x) {
      return x();
    });
  };
};

var loadIfNeeded = function loadIfNeeded(axiosInstance, _ref) {
  var shouldLoadInterceptors = _ref.shouldLoadInterceptors,
      interceptors = _ref.interceptors;

  if (shouldLoadInterceptors) {
    return load(axiosInstance, interceptors);
  }

  return function () {};
};

/* harmony default export */ var axios_interceptors_loader = ({
  load: load,
  loadIfNeeded: loadIfNeeded
});
// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/axios-intercept-wix-result.js
var wixResultInterceptor = function wixResultInterceptor(response) {
  // Do something with response data
  if (response.data) {
    if (response.data.success === false) {
      response.status = 500;
      return Promise.reject(response);
    } else if (response.data.success === true && response.data.payload !== undefined) {
      var payload = response.data.payload;

      if (typeof payload === 'object' && !Array.isArray(payload)) {
        delete response.data.payload;
        delete response.data.success;
        delete response.data.errorCode;
        delete response.data.errorDescription;
        response.data = Object.assign(response.data, payload);
      } else {
        response.data = response.data.payload;
      }
    }
  }

  return response;
};

/* harmony default export */ var axios_intercept_wix_result = ({
  responseSuccess: wixResultInterceptor
});
// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/url-utils.js
var absoluteUrlRegex = /^https?:\/\/|^\/\//i;
var protocolExpression = /^[a-z][a-z0-9.+-]*$/i;

var trimSlashes = function trimSlashes(str) {
  return str.replace(/^\/|\/$/g, '');
};

var isRelativeUrl = function isRelativeUrl(url) {
  return !absoluteUrlRegex.test(url);
};
var getWindowLocationOrigin = function getWindowLocationOrigin() {
  var location = typeof self !== 'undefined' && self.location;
  return location ? extractOrigin(location) : '';
};
var escapeRegExp = function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}; // eslint-disable-line no-useless-escape

function isReqToOriginDomain(url, maybeBaseUrl) {
  var isUrlRelative = isRelativeUrl(url);
  var isBaseUrlAbsolute = maybeBaseUrl && absoluteUrlRegex.test(maybeBaseUrl);

  if (isUrlRelative && !isBaseUrlAbsolute) {
    return true;
  }

  var origin = getWindowLocationOrigin();

  if (!origin) {
    return false;
  }

  var originMatchRegex = new RegExp('^' + escapeRegExp(origin));
  var reqDomain = !isUrlRelative ? url : maybeBaseUrl;
  return originMatchRegex.test(reqDomain);
}
var joinPath = function joinPath() {
  var joinedPath = '';

  for (var _len = arguments.length, pathParts = new Array(_len), _key = 0; _key < _len; _key++) {
    pathParts[_key] = arguments[_key];
  }

  pathParts.forEach(function (pathPart) {
    var pathPartWithoutSlashes = pathPart && trimSlashes(pathPart);

    if (pathPartWithoutSlashes) {
      var separator = joinedPath && '/';
      var prefix = joinedPath === '' && /^\//.test(pathPart) ? '/' : '';
      joinedPath = "" + prefix + joinedPath + separator + pathPartWithoutSlashes;
    }
  });
  var lastPart = pathParts[pathParts.length - 1];

  if (lastPart[lastPart.length - 1] === '/') {
    joinedPath += '/';
  }

  return joinedPath;
};
var extractOrigin = function extractOrigin(location, extendedProtocolSeperator) {
  if (extendedProtocolSeperator === void 0) {
    extendedProtocolSeperator = false;
  }

  var protocolSeparator = extendedProtocolSeperator ? '://' : '//';
  var protocol = location.protocol,
      hostname = location.hostname,
      port = location.port;
  var host = hostname + (port ? ':' + port : '');
  var origin = [protocol, host].join(protocolSeparator);
  return location.origin || origin;
};
var extractQueryParam = function extractQueryParam(location, queryParam) {
  var queryParams = decodeURI(location.search);
  var keyValuePairs = queryParams.replace('?', '').split('&').map(function (param) {
    return param.split('=');
  }).filter(function (_ref) {
    var key = _ref[0];
    return key === queryParam;
  });

  if (keyValuePairs.length > 0) {
    return keyValuePairs[0][1];
  }
};

var parseHost = function parseHost(string, parts) {
  string = string.replace(/\\/g, '/'); // extract host:port

  var pos = string.indexOf('/');

  if (pos === -1) {
    pos = string.length;
  }

  var t = string.substring(0, pos).split(':');
  parts.hostname = t[0] || null;
  parts.port = t[1] || null;

  if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
    pos++;
    string = '/' + string;
  }

  return string.substring(pos) || '/';
};

var parseUrl = function parseUrl(string) {
  var parts = {};
  var pos; // extract fragment

  pos = string.indexOf('#');

  if (pos > -1) {
    parts.fragment = string.substring(pos + 1) || null;
    string = string.substring(0, pos);
  } // extract query


  pos = string.indexOf('?');

  if (pos > -1) {
    parts.query = string.substring(pos + 1) || null;
    string = string.substring(0, pos);
  }

  if (string.substring(0, 2) === '//') {
    // relative-scheme
    parts.protocol = null;
    string = string.substring(2); // extract "user:pass@host:port"

    string = parseHost(string, parts);
  } else {
    pos = string.indexOf(':');

    if (pos > -1) {
      parts.protocol = string.substring(0, pos) || null;

      if (parts.protocol && !parts.protocol.match(protocolExpression)) {
        // : may be within the path
        parts.protocol = undefined;
      } else if (string.substring(pos + 1, pos + 3) === '//') {
        string = string.substring(pos + 3); // extract "user:pass@host:port"

        string = parseHost(string, parts);
      } else {
        string = string.substring(pos + 1);
      }
    }
  }

  parts.path = string;
  return parts;
};
// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/axios-intercept-baseurl.js


var isDispatcherUrl = function isDispatcherUrl(url) {
  return /_api/.test(url);
};

var axios_intercept_baseurl_requestSuccess = function requestSuccess(config) {
  var url = config.url,
      baseURL = config.baseURL;
  var parsedBaseUrl = parseUrl(baseURL);
  var baseUrlOrigin = isRelativeUrl(baseURL) ? getWindowLocationOrigin() : extractOrigin(parsedBaseUrl, true);
  var baseUrlWithoutOrigin = baseURL.replace(baseUrlOrigin, '');
  var baseUrlRegex = new RegExp('^' + escapeRegExp(baseURL));
  var relativeUrl = url.replace(baseUrlRegex, ''); // get the original relative path without baseURL

  if (!isRelativeUrl(relativeUrl)) {
    return config;
  }

  var finalUrl = isDispatcherUrl(url) ? joinPath(baseUrlOrigin, relativeUrl) : joinPath(baseUrlOrigin, baseUrlWithoutOrigin, relativeUrl);
  return Object.assign({}, config, {
    url: finalUrl
  });
};

/* harmony default export */ var axios_intercept_baseurl = ({
  requestSuccess: axios_intercept_baseurl_requestSuccess
});
// EXTERNAL MODULE: ../node_modules/base-64/base64.js
var base64 = __webpack_require__(94);
var base64_default = /*#__PURE__*/__webpack_require__.n(base64);

// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/axios-intercept-multilingual.js


function getInterceptor(_ref) {
  var lang = _ref.lang,
      siteInstance = _ref.siteInstance,
      locale = _ref.locale,
      isPrimaryLanguage = _ref.isPrimaryLanguage;

  var requestSuccess = function requestSuccess(config) {
    if (checkParameters({
      lang: lang,
      siteInstance: siteInstance,
      locale: locale,
      isPrimaryLanguage: isPrimaryLanguage
    })) {
      var instanceId;
      var encodedInstance = siteInstance.split('.')[1];

      try {
        instanceId = encodedInstance && JSON.parse(base64_default.a.decode(encodedInstance)).instanceId;
      } catch (e) {}

      if (instanceId !== undefined) {
        config.headers['x-wix-linguist'] = [lang, locale, isPrimaryLanguage, instanceId].join('|');
      }
    }

    return config;
  };

  return {
    requestSuccess: requestSuccess
  };
}

function checkParameters(_ref2) {
  var lang = _ref2.lang,
      siteInstance = _ref2.siteInstance,
      locale = _ref2.locale,
      isPrimaryLanguage = _ref2.isPrimaryLanguage;

  if (/^(true|false)$/.test(isPrimaryLanguage)) {
    isPrimaryLanguage = isPrimaryLanguage.toString();
  } else {
    return false;
  }

  return lang && siteInstance && locale && isPrimaryLanguage;
}

/* harmony default export */ var axios_intercept_multilingual = ({
  getInterceptor: getInterceptor
});
// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/axios-intercept-artifactid.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var axios_intercept_artifactid_getInterceptor = function getInterceptor(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      shouldAddArtifactIdOverride = _ref.shouldAddArtifactIdOverride;

  var requestSuccess = function requestSuccess(config) {
    var artifactId = "admin-pages-platform-app";
    var shouldAddArtifactId = config.url.includes('/_api/') || config.url.includes('/api/') || shouldAddArtifactIdOverride;

    if (artifactId && shouldAddArtifactId) {
      var _objectSpread2;

      var headers = _objectSpread(_objectSpread({}, config.headers), {}, (_objectSpread2 = {}, _objectSpread2[artifactIdHeader] = artifactId, _objectSpread2));

      return _objectSpread(_objectSpread({}, config), {}, {
        headers: headers
      });
    }

    return config;
  };

  return {
    requestSuccess: requestSuccess
  };
};

/* harmony default export */ var axios_intercept_artifactid = ({
  getInterceptor: axios_intercept_artifactid_getInterceptor
});
var artifactIdHeader = 'X-Wix-Client-Artifact-Id';
// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/axios-intercept-site-revision.js
function axios_intercept_site_revision_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function axios_intercept_site_revision_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { axios_intercept_site_revision_ownKeys(Object(source), true).forEach(function (key) { axios_intercept_site_revision_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { axios_intercept_site_revision_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function axios_intercept_site_revision_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global Wix, publicModel, editorModel  */


function axios_intercept_site_revision_getInterceptor(_ref) {
  var wixCodeApi = _ref.wixCodeApi;

  var requestSuccess = function requestSuccess(config) {
    var shouldAddSiteRevision = config.url.includes('/_api/');

    if (shouldAddSiteRevision) {
      var siteRevision = getSiteRevision(wixCodeApi);

      if (siteRevision) {
        var _objectSpread2;

        var headers = axios_intercept_site_revision_objectSpread(axios_intercept_site_revision_objectSpread({}, config.headers), {}, (_objectSpread2 = {}, _objectSpread2[siteRevisionHeader] = siteRevision, _objectSpread2));

        return axios_intercept_site_revision_objectSpread(axios_intercept_site_revision_objectSpread({}, config), {}, {
          headers: headers
        });
      }
    }

    return config;
  };

  return {
    requestSuccess: requestSuccess
  };
}

var getSiteRevision = function getSiteRevision(wixCodeApi) {
  if (typeof Wix !== 'undefined' && Wix.Utils && Wix.Utils.getSiteRevision) {
    return Wix.Utils.getSiteRevision();
  }

  var siteRevisionFromQueryParam = axios_intercept_site_revision_getSiteRevisionFromQueryParam();

  if (siteRevisionFromQueryParam) {
    return siteRevisionFromQueryParam;
  }

  if (wixCodeApi) {
    return wixCodeApi.site.revision;
  }

  if (typeof publicModel !== 'undefined' && publicModel.siteRevision) {
    return publicModel.siteRevision;
  }

  if (typeof editorModel !== 'undefined' && editorModel.siteHeader && editorModel.siteHeader.revision) {
    return editorModel.siteHeader.revision;
  }
};

var axios_intercept_site_revision_getSiteRevisionFromQueryParam = function getSiteRevisionFromQueryParam() {
  if (typeof window !== 'undefined' && window.location) {
    return extractQueryParam(window.location, 'siteRevision');
  }
};

/* harmony default export */ var axios_intercept_site_revision = ({
  getInterceptor: axios_intercept_site_revision_getInterceptor
});
var siteRevisionHeader = 'x-wix-site-revision';
// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(16);

// EXTERNAL MODULE: ../node_modules/@wix/headers/dist/esm/globals.js
var globals = __webpack_require__(12);

// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/cookies.js

function readCookie(name) {
    var cookieValue = getCookieByName(name);
    if (cookieValue) {
        return cookieValue.split('=')[1];
    }
    return '';
}
function loadCookies() {
    var documentObj = Object(globals["a" /* maybeGetDocument */])();
    if (documentObj && documentObj.cookie) {
        return decodeURIComponent(documentObj.cookie).split(';');
    }
    return [];
}
function getCookieByName(name) {
    return loadCookies().filter(function (cookie) { return name === cookie.split('=')[0].trim(); })[0];
}
//# sourceMappingURL=cookies.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/headers/csrf.js

var XSRF_TOKEN_COOKIE_NAME = 'XSRF-TOKEN';
var XSRF_HEADER_NAME = 'x-xsrf-token';
function csrf() {
    var _a;
    var value = readCookie(XSRF_TOKEN_COOKIE_NAME);
    return _a = {}, _a[XSRF_HEADER_NAME] = value, _a;
}
//# sourceMappingURL=csrf.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/headers/x-wix-brand.js

var X_WIX_BRAND_NAME = 'x-wix-brand';
function xWixBrand() {
    var _a;
    var value = extractBrand();
    return _a = {}, _a[X_WIX_BRAND_NAME] = value, _a;
}
function extractBrand() {
    var globalObj = Object(globals["b" /* maybeGetGlobal */])();
    if (globalObj &&
        globalObj.commonConfig &&
        typeof globalObj.commonConfig.brand === 'string') {
        return globalObj.commonConfig.brand;
    }
    return '';
}
//# sourceMappingURL=x-wix-brand.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/headers/consent-policy.js

function consentPolicy() {
    return tryResolveNativeAPI() || tryResolveJsSDK() || none();
}
function tryResolveJsSDK() {
    var globalObj = Object(globals["b" /* maybeGetGlobal */])();
    if (globalObj &&
        globalObj.Wix &&
        globalObj.Wix.Utils &&
        typeof globalObj.Wix.Utils._getConsentPolicyHeader === 'function') {
        return globalObj.Wix.Utils._getConsentPolicyHeader();
    }
    return undefined;
}
function tryResolveNativeAPI() {
    var globalObj = Object(globals["b" /* maybeGetGlobal */])();
    if (globalObj &&
        globalObj.consentPolicyManager &&
        typeof globalObj.consentPolicyManager._getConsentPolicyHeader === 'function') {
        return globalObj.consentPolicyManager._getConsentPolicyHeader();
    }
    return undefined;
}
function none() {
    return {};
}
//# sourceMappingURL=consent-policy.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/headers/authorization.js
function authorization(signedInstance) {
    return { authorization: signedInstance };
}
//# sourceMappingURL=authorization.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/headers/artifact-id.js
function artifactId() {
    return { 'X-Wix-Client-Artifact-Id': "admin-pages-platform-app" };
}
//# sourceMappingURL=artifact-id.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/headers/common-config.js

var COMMON_CONFIG_NAME = 'commonConfig';
var IGNORE_KEYS = ['consentPolicy', 'consentPolicyHeader'];
var MAP_KEYS = {
    bsi: 'BSI',
};
function extractCommonConfigValues() {
    var globalObj = Object(globals["b" /* maybeGetGlobal */])();
    var commonConfigObj = globalObj === null || globalObj === void 0 ? void 0 : globalObj.commonConfig;
    if (!commonConfigObj) {
        return null;
    }
    var res = {};
    var addedKeys = false;
    Object.keys(commonConfigObj).forEach(function (key) {
        // @ts-ignore
        var newKey = MAP_KEYS[key];
        if (newKey) {
            res[newKey] = commonConfigObj[key];
            addedKeys = true;
        }
        else if (IGNORE_KEYS.indexOf(key) < 0 &&
            typeof commonConfigObj[key] !== 'function') {
            res[key] = commonConfigObj[key];
            addedKeys = true;
        }
    });
    return addedKeys ? res : null;
}
var commonConfig = function () {
    var _a;
    var commonConfigValues = extractCommonConfigValues();
    var value = commonConfigValues ? JSON.stringify(commonConfigValues) : '';
    return _a = {}, _a[COMMON_CONFIG_NAME] = encodeURIComponent(value), _a;
};
//# sourceMappingURL=common-config.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/errors.js

var errors_WixHeadersParsingError = /** @class */ (function (_super) {
    Object(tslib_es6["__extends"])(WixHeadersParsingError, _super);
    function WixHeadersParsingError(header, value) {
        return _super.call(this, "WixHeadersParsingError: " + header + " evaluated with " + JSON.stringify(value) + " but should be a string!") || this;
    }
    return WixHeadersParsingError;
}(Error));

var errors_WixHeadersValidationError = /** @class */ (function (_super) {
    Object(tslib_es6["__extends"])(WixHeadersValidationError, _super);
    function WixHeadersValidationError(type, key, value) {
        return _super.call(this, "WixHeadersValidationError: expected " + key + " to be " + type + " but got " + JSON.stringify(value)) || this;
    }
    return WixHeadersValidationError;
}(Error));

//# sourceMappingURL=errors.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/assert.js

function assertBoolean(key, value) {
    if (typeof value !== 'boolean') {
        throw new errors_WixHeadersValidationError('boolean', key, value);
    }
}
function assertString(key, value) {
    if (typeof value !== 'string') {
        throw new errors_WixHeadersValidationError('string', key, value);
    }
}
//# sourceMappingURL=assert.js.map
// CONCATENATED MODULE: ../node_modules/@wix/headers/dist/esm/index.js








function createHeaders(opts) {
    if (opts === void 0) { opts = {}; }
    opts = Object(tslib_es6["__assign"])({ csrf: true, signedInstance: '' }, opts);
    verifyOptsOrThrow(opts);
    var headers = [
        xWixBrand(),
        consentPolicy(),
        authorization(opts.signedInstance),
        artifactId(),
        commonConfig(),
    ];
    if (opts.csrf) {
        headers.push(csrf());
    }
    return headers
        .filter(function (hdrs) { return Object.values(hdrs).every(function (v) { return v; }); })
        .reduce(function (result, hdrs) { return (Object(tslib_es6["__assign"])(Object(tslib_es6["__assign"])({}, result), hdrs)); }, {});
}
function verifyOptsOrThrow(opts) {
    assertBoolean('opts.csrf', opts.csrf);
    assertString('opts.signedInstance', opts.signedInstance);
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/axios-intercept-wix-headers.js
function axios_intercept_wix_headers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function axios_intercept_wix_headers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { axios_intercept_wix_headers_ownKeys(Object(source), true).forEach(function (key) { axios_intercept_wix_headers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { axios_intercept_wix_headers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function axios_intercept_wix_headers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var API_PREFIX = '/_api/';

function axios_intercept_wix_headers_getInterceptor(_ref) {
  var signedInstance = _ref.signedInstance;

  var requestSuccess = function requestSuccess(config) {
    var shouldAddWixHeaders = config.url.includes(API_PREFIX) || config.baseURL && config.baseURL.includes(API_PREFIX);
    var withSignedInstance = signedInstanceAllowed(signedInstance, config);
    var wixHeaders = shouldAddWixHeaders ? createHeaders({
      csrf: false,
      signedInstance: withSignedInstance
    }) : {};

    var headers = axios_intercept_wix_headers_objectSpread(axios_intercept_wix_headers_objectSpread({}, config.headers), wixHeaders);

    return axios_intercept_wix_headers_objectSpread(axios_intercept_wix_headers_objectSpread({}, config), {}, {
      headers: headers
    });
  };

  return {
    requestSuccess: requestSuccess
  };
}

function signedInstanceAllowed(signedInstance, _ref2) {
  var url = _ref2.url,
      baseURL = _ref2.baseURL;
  return signedInstance && isReqToOriginDomain(url, baseURL) ? signedInstance : '';
}

/* harmony default export */ var axios_intercept_wix_headers = ({
  getInterceptor: axios_intercept_wix_headers_getInterceptor
});
// CONCATENATED MODULE: ../node_modules/@wix/wix-axios-config/dist/es/src/wix-axios-instance-config.js







/* harmony default export */ var wix_axios_instance_config = (function (axios, _ref) {
  var req = _ref.req,
      adapter = _ref.adapter,
      baseURL = _ref.baseURL,
      lang = _ref.lang,
      locale = _ref.locale,
      isPrimaryLanguage = _ref.isPrimaryLanguage,
      siteInstance = _ref.siteInstance,
      signedInstance = _ref.signedInstance,
      _ref$loadInterceptors = _ref.loadInterceptors,
      loadInterceptors = _ref$loadInterceptors === void 0 ? true : _ref$loadInterceptors,
      wixCodeApi = _ref.wixCodeApi,
      _ref$shouldAddArtifac = _ref.shouldAddArtifactIdOverride,
      shouldAddArtifactIdOverride = _ref$shouldAddArtifac === void 0 ? false : _ref$shouldAddArtifac;
  var config = {
    baseURL: baseURL || axios.defaults.baseURL,
    adapter: adapter,
    lang: lang,
    locale: locale,
    isPrimaryLanguage: isPrimaryLanguage,
    siteInstance: siteInstance
  };

  if (req) {
    config.headers = req.headers;
  }

  var instance = axios.create(config);
  instance.unregisterWixInterceptors = axios_interceptors_loader.loadIfNeeded(instance, {
    shouldLoadInterceptors: loadInterceptors,
    interceptors: [axios_intercept_wix_result, axios_intercept_baseurl, axios_intercept_multilingual.getInterceptor({
      lang: lang,
      siteInstance: siteInstance,
      locale: locale,
      isPrimaryLanguage: isPrimaryLanguage
    }), axios_intercept_artifactid.getInterceptor({
      shouldAddArtifactIdOverride: shouldAddArtifactIdOverride
    }), axios_intercept_site_revision.getInterceptor({
      wixCodeApi: wixCodeApi
    }), axios_intercept_wix_headers.getInterceptor({
      signedInstance: signedInstance
    })]
  });
  return instance;
});
// EXTERNAL MODULE: ../node_modules/axios/index.js
var node_modules_axios = __webpack_require__(93);
var axios_default = /*#__PURE__*/__webpack_require__.n(node_modules_axios);

// CONCATENATED MODULE: ./utils/api.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PERMISSIONS_PARAMS = {
    group_id: '00000000-0000-0000-0000-000000000001',
    permissions_id: 'cce6b124-b14c-4383-aee9-5e0814811ae2',
    context: 'Pages',
};
var axiosInstance = null;
function getPlatformizedAxiosInstance(getAppInstance) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (!!axiosInstance) return [3 /*break*/, 2];
                    _a = wix_axios_instance_config;
                    _b = [axios_default.a];
                    _c = {
                        baseURL: '/'
                    };
                    _d = {};
                    _e = {};
                    return [4 /*yield*/, getAppInstance()];
                case 1:
                    axiosInstance = _a.apply(void 0, _b.concat([(_c.req = (_d.headers = (_e.Authorization = _f.sent(), _e), _d),
                            _c)]));
                    _f.label = 2;
                case 2: return [2 /*return*/, axiosInstance];
            }
        });
    });
}
var setPagePermissions = function (pageRef, editorSDK) { return __awaiter(void 0, void 0, void 0, function () {
    var data, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getPlatformizedAxiosInstance(editorSDK.info.getAppInstance)];
            case 1:
                axiosInstance = _a.sent();
                data = {
                    permissions: [{
                            id: PERMISSIONS_PARAMS.permissions_id,
                            context: PERMISSIONS_PARAMS.context,
                            resourceIds: [pageRef.id]
                        }]
                };
                url = "https://editor.wix.com/_api/members-groups-web/v1/groups/" + PERMISSIONS_PARAMS.group_id + "/permissions";
                axiosInstance.post(url, data);
                return [2 /*return*/];
        }
    });
}); };

// CONCATENATED MODULE: ./utils/editorUtils.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var editorUtils_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var editorUtils_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var getPageStructure = function (appDefinitionId) { return ({
    data: {
        hideTitle: false,
        isLandingPage: true,
        indexable: false,
        hidePage: true,
        managingAppDefId: appDefinitionId,
        pageSecurity: {
            requireLogin: true,
        },
    },
    components: [],
}); };
function addPageToComponent(editorSDK, appDefinitionId, pageRef) {
    return editorUtils_awaiter(this, void 0, void 0, function () {
        return editorUtils_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, editorSDK.components.add('token', {
                        componentDefinition: {
                            componentType: 'platform.components.AppController',
                            data: {
                                controllerType: 'singleAdminPageController',
                                name: 'admin-pages-controller',
                                applicationId: appDefinitionId,
                                settings: JSON.stringify({
                                    pageId: pageRef.id,
                                }),
                            },
                        },
                        pageRef: pageRef,
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updatePageDefinitions(pageRef, appDefinitionId, editorSDK) {
    return editorUtils_awaiter(this, void 0, void 0, function () {
        return editorUtils_generator(this, function (_a) {
            editorSDK.pages.data.update('token', {
                pageRef: pageRef,
                data: { managingAppDefId: appDefinitionId, isLandingPage: true }
            });
            return [2 /*return*/];
        });
    });
}
function openPagesPanel(editorSDK, pageRef) {
    return editorSDK.editor.openPagesPanel('token', {
        renameEnabled: true,
        pageRef: pageRef,
    });
}
function markNewDynamicPageAsAdminPage(editorSDK, appDefinitionId, pageRef) {
    return editorUtils_awaiter(this, void 0, void 0, function () {
        return editorUtils_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updatePageDefinitions(pageRef, appDefinitionId, editorSDK)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, setPagePermissions(pageRef, editorSDK)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, addPageToComponent(editorSDK, appDefinitionId, pageRef)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, openPagesPanel(editorSDK, pageRef)];
            }
        });
    });
}
function createPage(editorSDK, appDefinitionId) {
    return editorUtils_awaiter(this, void 0, void 0, function () {
        var pageRef;
        return editorUtils_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, editorSDK.history.add('token', { label: 'History' })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, editorSDK.pages.add('token', {
                            title: 'New Page',
                            definition: getPageStructure(appDefinitionId),
                            shouldAddMenuItem: false,
                        })];
                case 2:
                    pageRef = _a.sent();
                    return [4 /*yield*/, setPagePermissions(pageRef, editorSDK)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, addPageToComponent(editorSDK, appDefinitionId, pageRef)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, openPagesPanel(editorSDK, pageRef)];
            }
        });
    });
}
function renamePage(_a) {
    var editorSDK = _a.editorSDK, pageRef = _a.pageRef, title = _a.title;
    return editorUtils_awaiter(this, void 0, void 0, function () {
        return editorUtils_generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, editorSDK.history.add('token', { label: 'History' })];
                case 1:
                    _b.sent();
                    return [2 /*return*/, editorSDK.pages.rename('token', { title: title, pageRef: pageRef })];
            }
        });
    });
}
function changePageUrl(_a) {
    var editorSDK = _a.editorSDK, pageRef = _a.pageRef, newPageUri = _a.newPageUri;
    return editorUtils_awaiter(this, void 0, void 0, function () {
        return editorUtils_generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, editorSDK.history.add('token', { label: 'History' })];
                case 1:
                    _b.sent();
                    saveCustomUrlToController(editorSDK, newPageUri);
                    return [2 /*return*/, editorSDK.pages.data.update('token', {
                            pageRef: pageRef,
                            data: { pageUriSEO: newPageUri },
                        })];
            }
        });
    });
}
function getAdminPagesController(editorSDK) {
    return editorUtils_awaiter(this, void 0, void 0, function () {
        var controllerRefs;
        var _this = this;
        return editorUtils_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, editorSDK.controllers.listControllers()];
                case 1:
                    controllerRefs = _a.sent();
                    return [2 /*return*/, controllerRefs.find(function (item) { return editorUtils_awaiter(_this, void 0, void 0, function () {
                            return editorUtils_generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, editorSDK.controllers.getData('token', item)];
                                    case 1: return [2 /*return*/, (_a.sent()).type ===
                                            'singleAdminPageController'];
                                }
                            });
                        }); })];
            }
        });
    });
}
function saveCustomUrlToController(editorSdk, customUrl) {
    return editorUtils_awaiter(this, void 0, void 0, function () {
        var controllerRef, currentData;
        return editorUtils_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAdminPagesController(editorSdk)];
                case 1:
                    controllerRef = _a.sent();
                    return [4 /*yield*/, editorSdk.controllers.getData('token', controllerRef)];
                case 2:
                    currentData = _a.sent();
                    editorSdk.controllers.saveConfiguration('token', __assign(__assign({}, controllerRef), { config: __assign(__assign({}, currentData.config), { customUrl: customUrl }) }));
                    return [2 /*return*/];
            }
        });
    });
}
function getIsHiddenFromController(editorSdk) {
    return editorUtils_awaiter(this, void 0, Promise, function () {
        var controllerRef, currentData;
        return editorUtils_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAdminPagesController(editorSdk)];
                case 1:
                    controllerRef = _a.sent();
                    return [4 /*yield*/, editorSdk.controllers.getData('token', controllerRef)];
                case 2:
                    currentData = _a.sent();
                    return [2 /*return*/, !!currentData.config.isHiddenInDashboard];
            }
        });
    });
}
function saveIsHiddenToController(editorSdk, isHiddenInDashboard) {
    return editorUtils_awaiter(this, void 0, void 0, function () {
        var controllerRef, currentData;
        return editorUtils_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAdminPagesController(editorSdk)];
                case 1:
                    controllerRef = _a.sent();
                    return [4 /*yield*/, editorSdk.controllers.getData('token', controllerRef)];
                case 2:
                    currentData = _a.sent();
                    editorSdk.controllers.saveConfiguration('token', __assign(__assign({}, controllerRef), { config: __assign(__assign({}, currentData.config), { isHiddenInDashboard: isHiddenInDashboard }) }));
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ 60:
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 61:
/*!*************************************************!*\
  !*** ../node_modules/axios/lib/helpers/bind.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 62:
/*!*************************************************!*\
  !*** ../node_modules/axios/lib/adapters/xhr.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ 8);
var settle = __webpack_require__(/*! ./../core/settle */ 114);
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 116);
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 117);
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 118);
var createError = __webpack_require__(/*! ../core/createError */ 63);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ 119);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ( true &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 120);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 63:
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/core/createError.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ 115);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 64:
/*!****************************************************!*\
  !*** ../node_modules/axios/lib/cancel/isCancel.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 65:
/*!**************************************************!*\
  !*** ../node_modules/axios/lib/cancel/Cancel.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 8:
/*!******************************************!*\
  !*** ../node_modules/axios/lib/utils.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ 61);
var isBuffer = __webpack_require__(/*! is-buffer */ 110);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 93:
/*!**************************************!*\
  !*** ../node_modules/axios/index.js ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ 109);

/***/ }),

/***/ 94:
/*!*****************************************!*\
  !*** ../node_modules/base-64/base64.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var d;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return base64;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ 60)(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ 39)))

/***/ }),

/***/ 99:
/*!******************************!*\
  !*** ./constants/helpIds.ts ***!
  \******************************/
/*! exports provided: PAGE_INFO_HELP_ID, PAGE_PERMISSIONS_PANEL_ID, DASHBOARD_PAGES_HELP_ID, CONTRIBUTORS_HELP_ID, WELCOME_HELP_ID */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./editor-app/editor-app.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_INFO_HELP_ID", function() { return PAGE_INFO_HELP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_PERMISSIONS_PANEL_ID", function() { return PAGE_PERMISSIONS_PANEL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHBOARD_PAGES_HELP_ID", function() { return DASHBOARD_PAGES_HELP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTRIBUTORS_HELP_ID", function() { return CONTRIBUTORS_HELP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WELCOME_HELP_ID", function() { return WELCOME_HELP_ID; });
var PAGE_INFO_HELP_ID = '8e2e70af-a650-4292-86c5-c640259f84f4';
var PAGE_PERMISSIONS_PANEL_ID = '421b455a-39cd-44bb-9c25-59de50165d6a';
var DASHBOARD_PAGES_HELP_ID = '7b6f66ee-83d9-493a-9f7f-4c75fd135d2f';
var CONTRIBUTORS_HELP_ID = '4a72c650-767a-4344-b6da-c59df84ad89c';
var WELCOME_HELP_ID = '521b6ae6-9227-4d6b-894c-ada6a93bea8d';


/***/ })

/******/ });
});
//# sourceMappingURL=admin-pages-editor-app.bundle.js.map