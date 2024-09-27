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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/admin-pages-platform-app/1.469.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 296);
/******/ })
/************************************************************************/
/******/ ({

/***/ 296:
/*!**********************************!*\
  !*** ./viewer-app/viewer-app.ts ***!
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
var buildBusinessManagerUrl = __webpack_require__(/*! ../utils/urlBuilders */ 38).buildBusinessManagerUrl;
var metaSiteId;
function initAppForPage() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    metaSiteId = args[3].bi.metaSiteId;
}
function pageReady($w, wix, config) {
    return __awaiter(this, void 0, void 0, function () {
        var pageId;
        return __generator(this, function (_a) {
            pageId = config.pageId;
            AuthenticateBusinessManager(wix, pageId);
            return [2 /*return*/];
        });
    });
}
function notifyBizMgr(wix, pageId) {
    return __awaiter(this, void 0, void 0, function () {
        var port, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!wix.window.getContainerPort) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wix.window.getContainerPort()];
                case 2:
                    port = _a.sent();
                    port.postMessage({ isLoaded: true, pageId: pageId });
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    wix.dashboard.notifyListeners('admin-pages.pageUpdated', { pageId: pageId });
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function redirectToBizMgr(wix, metasiteId, pageId) {
    wix.location.to(buildBusinessManagerUrl(metaSiteId, pageId));
}
function AuthenticateBusinessManager(wix, pageId) {
    wix.location.query.inBizMgr
        ? notifyBizMgr(wix, pageId)
        : redirectToBizMgr(wix, metaSiteId, pageId);
}
function createControllers(controllerConfigs) {
    return controllerConfigs.map(function (controllerConfig) {
        return {
            pageReady: function ($w, Wix) { return pageReady($w, Wix, controllerConfig.config); },
        };
    });
}
module.exports = {
    initAppForPage: initAppForPage,
    createControllers: createControllers,
};


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


/***/ })

/******/ });
});
//# sourceMappingURL=admin-pages-viewer-app.bundle.js.map