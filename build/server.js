require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 261);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick }),
      children
    );
  }
}

Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const Admin = {
  App: __webpack_require__(108).default,
  Dashboard: __webpack_require__(115).default,
  Library: __webpack_require__(121).default,
  Setting: __webpack_require__(138).default,
  Home: __webpack_require__(144).default,
  Contact: __webpack_require__(123).default,
  About: __webpack_require__(118).default,
  Tracking: __webpack_require__(142).default,
  Common: __webpack_require__(140).default,
  AllService: __webpack_require__(110).default,
  Editor: __webpack_require__(117).default,
  Login: __webpack_require__(125).default,

  ListNews: __webpack_require__(128).default,
  EditNews: __webpack_require__(127).default,

  ListProduct: __webpack_require__(131).default,
  EditProduct: __webpack_require__(130).default,

  EditCategory: __webpack_require__(112).default,
  ListCategories: __webpack_require__(113).default,

  EditProductCategory: __webpack_require__(133).default,
  ListProductCategories: __webpack_require__(134).default,

  Seo: __webpack_require__(136).default
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// import LoadingBar from 'react-redux-loading-bar';

var _ref = _jsx("span", {
  id: "mobile_btn"
}, void 0, "\xA0");

var _ref2 = _jsx("ul", {
  className: "clearfix"
}, void 0, _jsx("li", {
  className: true
}, void 0, _jsx("a", {
  href: "/cua-hang"
}, void 0, "M\xC1Y L\u1ECCC N\u01AF\u1EDAC")), _jsx("li", {
  className: true
}, void 0, _jsx("a", {
  href: "/linh-kien"
}, void 0, "PH\u1EE4 KI\u1EC6N M\xC1Y L\u1ECCC N\u01AF\u1EDAC")));

var _ref3 = _jsx("li", {
  className: "pickup"
}, void 0, _jsx("a", {
  href: "/phan-phoi"
}, void 0, "H\u1EC7 th\u1ED1ng", _jsx("br", {}), " ph\xE2n ph\u1ED1i"));

var _ref4 = _jsx("li", {});

var _ref5 = _jsx("hr", {});

var _ref6 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "V\xEC sao ch\u1ECDn Ho\xE0ng Gia Kh\xE1nh"), _jsx("i", {
  className: "icon-arrow"
})), _jsx("ul", {
  className: "dropdown-menu"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#tai-sao-chon-sp-karofi-sg18.html"
}, void 0, "V\xEC sao ch\u1ECDn SP Ho\xE0ng Gia Kh\xE1nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#dat-qcvn6-1-2010-byt/"
}, void 0, "\u0110\u1EA1t QCVN6-1:2010/BYT")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#cong-nghe-loc-nuoc-ro-tien-tien-cho-may-loc-nuoc-sg19.html\n  "
}, void 0, "C\xF4ng ngh\u1EC7 RO ti\xEAn ti\u1EBFn")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#san-pham-thong-minh-sg20.html"
}, void 0, "S\u1EA3n ph\u1EA9m th\xF4ng minh"))));

var _ref7 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "S\u1EA3n ph\u1EA9m"), " ", _jsx("i", {
  className: "icon-arrow"
})), _jsx("ul", {
  className: "dropdown-menu"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#may-loc-nuoc-28"
}, void 0, "M\xE1y l\u1ECDc n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#cay-nuoc-nong-lanh-13"
}, void 0, "C\xE2y n\u01B0\u1EDBc n\xF3ng l\u1EA1nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "http://karofi.com/thiet-bi-diet-khuan"
}, void 0, "Thi\u1EBFt b\u1ECB di\u1EC7t khu\u1EA9n")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#linh-phu-kien-18"
}, void 0, "Ph\u1EE5 ki\u1EC7n"))));

var _ref8 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "Trang chuy\xEAn gia"), _jsx("i", {
  className: "icon-arrow"
})), _jsx("ul", {
  className: "dropdown-menu"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/tra-cuu-nguon-nuoc/"
}, void 0, "Tra c\u1EE9u ngu\u1ED3n n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/quy-chuan-chat-luong-nuoc/"
}, void 0, "Quy chu\u1EA9n CL n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/giai-phap-xu-ly-nuoc/"
}, void 0, "Gi\u1EA3i ph\xE1p XL n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/huong-dan-su-dung-xu-ly-su-co/"
}, void 0, "HD x\u1EED l\xFD s\u1EF1 c\u1ED1"))));

var _ref9 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "H\u1ED7 tr\u1EE3"), " ", _jsx("i", {
  className: "icon-arrow"
})), _jsx("ul", {
  className: "dropdown-menu"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#faq.html"
}, void 0, "H\u1ECFi \u0111\xE1p")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#tu-van-su-dung-cc13"
}, void 0, "T\u01B0 v\u1EA5n s\u1EED d\u1EE5ng")), _jsx("li", {}, void 0, _jsx("a", {
  href: "http://karofi.com/dang-ky-bao-hanh.html"
}, void 0, "\u0110\u0103ng k\xFD b\u1EA3o h\xE0nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "http://karofi.com/dang-ky-bao-duong.html"
}, void 0, "D\u1ECBch v\u1EE5 b\u1EA3o d\u01B0\u1EE1ng"))));

var _ref10 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "Gi\u1EDBi thi\u1EC7u"), " ", _jsx("i", {
  className: "icon-arrow"
})), _jsx("ul", {
  className: "dropdown-menu"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#ve-chung-toi-sg1.html"
}, void 0, "V\u1EC1 ch\xFAng t\xF4i")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#tin-su-kien-cc5"
}, void 0, "B\u1EA3n tin Ho\xE0ng Gia Kh\xE1nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trach-nhiem-xa-hoi-cc25"
}, void 0, "Tr\xE1ch nhi\u1EC7m x\xE3 h\u1ED9i")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#bao-chi-noi-ve-karofi-cc6"
}, void 0, "B\xE1o ch\xED n\xF3i g\xEC v\u1EC1 Ho\xE0ng Gia Kh\xE1nh"))));

var _ref11 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "Tin t\u1EE9c"), " ", _jsx("i", {
  className: "icon-arrow"
})), _jsx("ul", {
  className: "dropdown-menu"
}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#tin-san-pham-cc4"
}, void 0, "Tin s\u1EA3n ph\u1EA9m")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#tin-khuyen-mai-cc27"
}, void 0, "Tin khuy\u1EBFn m\xE3i")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#tin-tuyen-dung-cc20"
}, void 0, "Tin tuy\u1EC3n d\u1EE5ng"))));

var _ref12 = _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "B\u1EA1n c\xF3 bi\u1EBFt"), " ", _jsx("i", {
  className: "icon-arrow"
}));

var _ref13 = _jsx("li", {}, void 0, _jsx("a", {
  href: "#hieu-ve-nuoc-cc17"
}, void 0, "Hi\u1EC3u v\u1EC1 n\u01B0\u1EDBc"));

var _ref14 = _jsx("li", {}, void 0, _jsx("a", {
  href: "#nuoc-va-suc-khoe-cc18"
}, void 0, "N\u01B0\u1EDBc v\xE0 s\u1EE9c kh\u1ECFe"));

var _ref15 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "Li\xEAn h\u1EC7"), " ", _jsx("i", {
  className: "icon-arrow"
})), _jsx("ul", {
  className: "dropdown-menu"
}, void 0, _jsx("li", {
  className: "hotline"
}, void 0, _jsx("a", {
  href: "tel:0985 340 830"
}, void 0, "0985 340 830")), _jsx("li", {
  className: "mail"
}, void 0, _jsx("a", {
  href: "mailto:contact@maylocnuocmokin.com"
}, void 0, "contact@maylocnuocmokin.com"))));

var _ref16 = _jsx("li", {
  className: "dropdown"
}, void 0, _jsx("a", {
  href: "#",
  "data-toggle": "dropdown"
}, void 0, _jsx("b", {}, void 0, "Hotline: 1900 6333362"), " ", _jsx("i", {
  className: "icon-arrow"
})));

var _ref17 = _jsx("li", {});

var _ref18 = _jsx("div", {
  className: "clearfix"
});

var _ref19 = _jsx("h3", {}, void 0, "V\xEC sao ch\u1ECDn Ho\xE0ng Gia Kh\xE1nh");

var _ref20 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#tai-sao-chon-sp-karofi-sg18.html"
}, void 0, "V\xEC sao ch\u1ECDn SP Ho\xE0ng Gia Kh\xE1nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#dat-qcvn6-1-2010-byt/"
}, void 0, "\u0110\u1EA1t QCVN6-1:2010/BYT")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#cong-nghe-loc-nuoc-ro-tien-tien-cho-may-loc-nuoc-sg19.html"
}, void 0, "C\xF4ng ngh\u1EC7 RO ti\xEAn ti\u1EBFn")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#san-pham-thong-minh-sg20.html"
}, void 0, "S\u1EA3n ph\u1EA9m th\xF4ng minh")));

var _ref21 = _jsx("h3", {}, void 0, "S\u1EA3n ph\u1EA9m");

var _ref22 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#may-loc-nuoc-28"
}, void 0, "M\xE1y l\u1ECDc n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#cay-nuoc-nong-lanh-13"
}, void 0, "C\xE2y n\u01B0\u1EDBc n\xF3ng l\u1EA1nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#thiet-bi-diet-khuan"
}, void 0, "Thi\u1EBFt b\u1ECB di\u1EC7t khu\u1EA9n")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#linh-phu-kien-18"
}, void 0, "Ph\u1EE5 ki\u1EC7n")));

var _ref23 = _jsx("h3", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia"
}, void 0, "Trang chuy\xEAn gia"));

var _ref24 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/tra-cuu-nguon-nuoc/"
}, void 0, "Tra c\u1EE9u ngu\u1ED3n n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/quy-chuan-chat-luong-nuoc/"
}, void 0, "Quy chu\u1EA9n CL n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/giai-phap-xu-ly-nuoc/"
}, void 0, "Gi\u1EA3i ph\xE1p XL n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trang-chuyen-gia/huong-dan-su-dung-xu-ly-su-co/"
}, void 0, "HD x\u1EED l\xFD s\u1EF1 c\u1ED1")));

var _ref25 = _jsx("h3", {}, void 0, "H\u1ED7 tr\u1EE3");

var _ref26 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#faq.html"
}, void 0, "H\u1ECFi \u0111\xE1p")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#tu-van-su-dung-cc13"
}, void 0, "T\u01B0 v\u1EA5n s\u1EED d\u1EE5ng")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#dang-ky-bao-hanh.html"
}, void 0, "\u0110\u0103ng k\xFD b\u1EA3o h\xE0nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#dang-ky-bao-duong.html"
}, void 0, "D\u1ECBch v\u1EE5 b\u1EA3o d\u01B0\u1EE1ng")));

var _ref27 = _jsx("h3", {}, void 0, "Gi\u1EDBi thi\u1EC7u");

var _ref28 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#ve-chung-toi-sg1.html"
}, void 0, "V\u1EC1 ch\xFAng t\xF4i")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#ban-tin-karofi-cc5"
}, void 0, "B\u1EA3n tin Ho\xE0ng Gia Kh\xE1nh")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#trach-nhiem-xa-hoi-cc25"
}, void 0, "Tr\xE1ch nhi\u1EC7m x\xE3 h\u1ED9i")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#bao-chi-noi-ve-karofi-cc6"
}, void 0, "B\xE1o ch\xED n\xF3i g\xEC v\u1EC1 Ho\xE0ng Gia Kh\xE1nh")));

var _ref29 = _jsx("h3", {}, void 0, _jsx("a", {
  href: "#tin-tuc-cc3"
}, void 0, "Tin t\u1EE9c"));

var _ref30 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#tin-san-pham-cc4"
}, void 0, "Tin s\u1EA3n ph\u1EA9m")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#tin-khuyen-mai-cc27"
}, void 0, "Tin khuy\u1EBFn m\xE3i")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#tin-tuyen-dung-cc20"
}, void 0, "Tin tuy\u1EC3n d\u1EE5ng")));

var _ref31 = _jsx("h3", {}, void 0, _jsx("a", {
  href: "#ban-co-biet-cc16"
}, void 0, "B\u1EA1n c\xF3 bi\u1EBFt"));

var _ref32 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("a", {
  href: "#hieu-ve-nuoc-cc17"
}, void 0, "Hi\u1EC3u v\u1EC1 n\u01B0\u1EDBc")), _jsx("li", {}, void 0, _jsx("a", {
  href: "#nuoc-va-suc-khoe-cc18"
}, void 0, "N\u01B0\u1EDBc v\xE0 s\u1EE9c kh\u1ECFe")));

var _ref33 = _jsx("h3", {}, void 0, "Li\xEAn h\u1EC7");

var _ref34 = _jsx("ul", {}, void 0, _jsx("li", {}, void 0, _jsx("span", {}, void 0, _jsx("img", {
  src: "phone.png"
})), _jsx("span", {}, void 0, "0911 535 999")), _jsx("li", {
  className: "clearfix"
}, void 0, _jsx("span", {}, void 0, _jsx("img", {
  src: "social.png"
})), _jsx("a", {
  href: "#",
  target: "_blank",
  rel: "nofollow"
}, void 0, _jsx("img", {
  src: "facebook.png"
})), _jsx("a", {
  href: "#",
  target: "_blank",
  rel: "nofollow"
}, void 0, _jsx("img", {
  src: "plus.png"
}))));

var _ref35 = _jsx("div", {
  id: "goToTop"
}, void 0, _jsx("i", {
  className: "fa fa-angle-up fa-3x",
  "aria-hidden": "true"
}));

var _ref36 = _jsx("li", {}, void 0, _jsx("a", {
  href: "#",
  title: "DMCA.com Protection Status",
  className: "dmca-badge"
}, void 0, " ", _jsx("img", {
  src: "//images.dmca.com/Badges/dmca_protected_sml_120aj.png?ID=18992782-b75d-45a8-a019-e1dbbdb5291f",
  alt: "DMCA.com Protection Status"
})), " ");

var _ref37 = _jsx("li", {}, void 0, "B\u1EA3n quy\u1EC1n thu\u1ED9c v\u1EC1 C\xF4ng ty Ho\xE0ng Gia Kh\xE1nh");

var _ref38 = _jsx("div", {
  className: "footer-mobile"
}, void 0, _jsx("div", {
  id: "copyright_wrapper"
}, void 0, _jsx("div", {
  id: "copyright",
  className: "main"
}, void 0, _jsx("ul", {
  className: "floatLeft"
}, void 0, _jsx("li", {}, void 0, "Copyright \xA9 2015 Ho\xE0ng Gia Kh\xE1nh Vietnam. All Rights Reserved")), _jsx("ul", {
  className: "language floatRight"
}, void 0, _jsx("li", {
  className: "en"
}, void 0, _jsx("a", {
  href: "http://karofi.com/en/"
}, void 0, "English"))))));

class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  componentDidMount() {
    init();
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5a95014dd7591465c7080c1b/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }

  render() {

    // const en = this.props.data && this.props.data.lang === 'en'
    return _jsx("div", {
      id: "wrapper"
    }, void 0, _jsx("div", {
      id: "header_wrapper"
    }, void 0, _jsx("div", {
      className: "main clearfix"
    }, void 0, _jsx("div", {
      className: "logo floatLeft"
    }, void 0, _jsx("a", {
      href: "/"
    }, void 0, _jsx("img", {
      src: "/logo/logo.png",
      style: { width: 'auto', height: 50 },
      alt: "Ho\xE0ng Gia Kh\xE1nh - Chuy\xEAn gia v\u1EC1 thi\u1EBFt b\u1ECB l\u1ECDc n\u01B0\u1EDBc, di\u1EC7t khu\u1EA9n, c\xE2y n\u01B0\u1EDBc n\xF3ng l\u1EA1nh"
    }))), _jsx("div", {
      className: "header_right floatRight"
    }, void 0, _jsx("div", {
      id: "menu",
      className: "clearfix"
    }, void 0, _ref, _jsx("ul", {
      className: "menu clearfix"
    }, void 0, _jsx("li", {
      className: true
    }, void 0, _jsx("a", {
      href: "/",
      style: { lineHeight: '40px !important' }
    }, void 0, "Trang ch\u1EE7")), _jsx("li", {
      className: true
    }, void 0, _jsx("a", {
      href: "/gioi-thieu",
      style: { lineHeight: '40px !important' }
    }, void 0, "Gi\u1EDBi thi\u1EC7u")), _jsx("li", {
      className: "unclickable"
    }, void 0, _jsx("a", {
      href: "#",
      style: { lineHeight: '40px !important' }
    }, void 0, "S\u1EA3n ph\u1EA9m"), _ref2), _ref3, _jsx("li", {
      className: "pickup"
    }, void 0, _jsx("a", {
      href: "/tin-tuc",
      style: { lineHeight: '40px !important' }
    }, void 0, "Tin t\u1EE9c")), _jsx("li", {
      className: "pickup"
    }, void 0, _jsx("a", {
      href: "/lien-he",
      style: { lineHeight: '40px !important' }
    }, void 0, "Li\xEAn h\u1EC7")), _ref4))))), this.props.children, _ref5, _jsx("div", {
      id: "footer_wrapper"
    }, void 0, _jsx("div", {
      id: "footer",
      className: "main clearfix"
    }, void 0, _jsx("div", {
      className: "footer-menu-mobile"
    }, void 0, _jsx("div", {
      className: "container"
    }, void 0, _jsx("ul", {}, void 0, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _jsx("li", {
      className: "dropdown"
    }, void 0, _ref12, _jsx("ul", {
      className: "dropdown-menu"
    }, void 0, _ref13, _ref14)), _ref15, _ref16, _ref17))), _ref18, _jsx("div", {
      className: "footer-menu-desktop clearfix"
    }, void 0, _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 22 }
    }, void 0, _ref19, _ref20), _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 60 }
    }, void 0, _ref21, _ref22), _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 60 }
    }, void 0, _ref23, _ref24), _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 100 }
    }, void 0, _ref25, _ref26), _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 22 }
    }, void 0, _ref27, _ref28), _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 60 }
    }, void 0, _ref29, _ref30), _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 60 }
    }, void 0, _ref31, _ref32), _jsx("div", {
      className: "footer_box",
      style: { paddingLeft: 100 }
    }, void 0, _ref33, _ref34)))), _ref35, _jsx("div", {
      className: "footer-desktop"
    }, void 0, _jsx("div", {
      id: "copyright_wrapper"
    }, void 0, _jsx("div", {
      id: "copyright",
      className: "main"
    }, void 0, _jsx("ul", {
      style: { color: 'white' }
    }, void 0, _ref36, _jsx("li", {}, void 0, _jsx("a", {
      rel: "nofollow",
      href: "#",
      style: { color: 'white' }
    }, void 0, "H\u1ECFi \u0111\xE1p")), _jsx("li", {}, void 0, _jsx("a", {
      rel: "nofollow",
      href: "#",
      style: { color: 'white' }
    }, void 0, "Li\xEAn h\u1EC7")), _ref37)))), _ref38);
  }
}

const init = () => {

  // $("#flexiselDemo3").flexisel({
  //   visibleItems: 4,
  //   itemsToScroll: 1,
  //   animationSpeed: 1000,
  //   autoPlay: false,
  //   // autoPlaySpeed: 3000,
  //   pauseOnHover: true,
  //   enableResponsiveBreakpoints: true,
  //   responsiveBreakpoints: {
  //     portrait: {
  //       changePoint:480,
  //       visibleItems: 1
  //     },
  //     landscape: {
  //       changePoint:640,
  //       visibleItems: 2
  //     },
  //     tablet: {
  //       changePoint:768,
  //       visibleItems: 3
  //     }
  //   }
  // });
  // $("#pSlider").flexisel({
  //   visibleItems: 1,
  //   // itemsToScroll: 2,
  //   infinite: true,
  //   // animationSpeed: 400,
  //   autoPlay: true,
  //   autoPlaySpeed: 4000,
  //   pauseOnHover: true,
  // });

  $(document).ready(function () {
    // Flexslider
    $('.flexslider').flexslider({
      animation: "slide"
    });
    $("a[rel=Phoenix]").fancybox({
      'transitionIn': 'elastic',
      'transitionOut': 'elastic',
      'speedIn': 600,
      'speedOut': 200,
      'overlayShow': true,
      'overlayColor': '#000',
      'overlayOpacity': '0.8'
    });
    $('.unclickable > a').each(function () {
      var _this = $(this);
      _this.click(function () {
        _this.parent().toggleClass("show");
        return false;
      });
    });
    $('body').not(".unclickable").click(function () {
      $('#menu .show').removeClass("show");
    });
    $("#menu #mobile_btn").live("click", function () {
      $("#menu").toggleClass("open");
    });
    if ($("#carousel_image_list").length > 0) {
      $("#carousel_image_list").carouFredSel({
        scroll: 1,
        auto: true,
        prev: '#Prev',
        next: '#Next',
        items: {
          width: 320,
          height: 100,
          visible: {
            min: 1,
            max: 3
          }
        }
      });
    }

    $('#tab-container').easytabs();

    $(".accordion_inside").accordion({
      active: 1,
      collapsible: true
    });

    $('#wait_1').hide();
    $('#wait_2').hide();

    // Thắng fix
    function change_alias(alias) {
      var str = alias;
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ  |ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ  |ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/\.|php|html/g, "");
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
      /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
      str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
      str = str.replace(/^\-+|\-+$/g, "");
      //cắt bỏ ký tự - ở đầu và cuối chuỗi
      return str;
    }
    var pathname = $(location).attr('pathname');

    pathname = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    pathname = change_alias(pathname);

    $('body').addClass("page-" + pathname);

    // set default value

    $('#categoriesNews').change(function (event) {
      if ($(this).val() != 0) {
        window.location.href = $(this).val();
      }
    });

    $(window).scroll(function (event) {
      var flug = $(window).scrollTop();
      if (flug > 400) {
        $('#goToTop').fadeIn('slow');
      } else {
        $('#goToTop').fadeOut('slow');
      }
    });

    $('#goToTop').click(function (event) {
      $('html ,body').animate({ scrollTop: 0 }, 'slow');
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* eslint-disable import/prefer-default-export */



function setData(value = {}) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(255);


const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

var _ref = _jsx('p', {
  className: 'ant-upload-drag-icon'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], {
  type: 'inbox'
}));

var _ref2 = _jsx('p', {
  className: 'ant-upload-text'
}, void 0, 'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.');

var _ref3 = _jsx('p', {
  className: 'ant-upload-hint'
}, void 0, 'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh');

var _ref4 = _jsx('img', {
  src: 'https://www.loadebar.com/images/template/load-more.png'
});

class ImageSelect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {}
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 16
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
      onClick: () => {
        this.setState((preState, curProps) => {
          return _extends({}, preState, {
            uploadArea: !preState.uploadArea
          });
        });
      }
    }, void 0, 'Th\xEAm \u1EA3nh')), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 8
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], {
      size: 'large',
      placeholder: 'Search by name',
      onChange: e => {
        let newInput = e.target.value;
        this.setState(prevState => {
          return _extends({}, prevState, {
            filter: newInput
          });
        });
        this.fetchImage(40, this.state.time);
      }
    }))), this.state.uploadArea && _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx('div', {
      style: { marginTop: 16, height: 180 }
    }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Dragger,
      _extends({}, props, {
        onChange: info => this.onChange(info),
        beforeUpload: this.beforeUpload
      }),
      _ref,
      _ref2,
      _ref3
    ))), _jsx('div', {
      style: { background: '#ECECEC' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {}, void 0, this.state.imgs.map((el, key) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
        className: 'padding-5'
      }, key, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
        bordered: false,
        className: 'imgWr',
        onClick: () => this.props.handleSelect(el)
      }, void 0, _jsx('img', {
        src: "/image/small/" + el.name
      })));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
    }, void 0, _ref4)))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageSelect);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




const Dragger = __WEBPACK_IMPORTED_MODULE_1_antd__["Upload"].Dragger;

var _ref = _jsx('p', {
  className: 'ant-upload-drag-icon'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'inbox'
}));

var _ref2 = _jsx('p', {
  className: 'ant-upload-text'
}, void 0, 'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.');

var _ref3 = _jsx('p', {
  className: 'ant-upload-hint'
}, void 0, 'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh');

class ImageUpload extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      uploadArea: false,
      visible: false,
      selectedImage: {}
    };
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.props.handleUpload(info.file.response);
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  render() {
    return _jsx(Dragger, {
      name: 'image',
      multiple: this.props.isMultiple,
      showUploadList: false,
      action: '/upload/image',
      onChange: info => this.onChange(info),
      beforeUpload: this.beforeUpload
    }, void 0, _ref, _ref2, _ref3);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageUpload);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js_editor_lib_components_defaultDecorator__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js_editor_lib_components_defaultDecorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_draft_js_editor_lib_components_defaultDecorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js_export_html__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js_export_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_draft_js_export_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_draft_js_import_html__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_draft_js_import_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_draft_js_import_html__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








class MultipleEditorsDemo extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);

    this.render = () => {
      return _jsx('div', {}, void 0, _jsx('div', {
        style: { padding: 5, border: 'solid 1px #ddd' }
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor___default.a, {
        onChange: editorState1 => {
          this.setState({ editorState1 });
          this.props.handleChange(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_draft_js_export_html__["stateToHTML"])(this.state.editorState1.getCurrentContent()));
        },
        editorState: this.state.editorState1
      })));
    };

    const blocksFromHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_draft_js__["convertFromHTML"])(this.props.initValue);
    const state = __WEBPACK_IMPORTED_MODULE_3_draft_js__["ContentState"].createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
    this.state = {
      editorState1: __WEBPACK_IMPORTED_MODULE_3_draft_js__["EditorState"].createWithContent(state)
    };
  }

}

/* harmony default export */ __webpack_exports__["a"] = (MultipleEditorsDemo);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("graphql-type-json");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (false) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3458,

  mongoDBURL: 'mongodb://localhost/hgk',
  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || `http://localhost:${process.env.PORT || 3458}`
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID },

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },

    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },

    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["b"] = SET_RUNTIME_VARIABLE;


const SET_SETTING = 'SET_SETTING';
/* harmony export (immutable) */ __webpack_exports__["c"] = SET_SETTING;

const SET_DATA = 'SET_DATA';
/* harmony export (immutable) */ __webpack_exports__["a"] = SET_DATA;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config___default.a.databaseUrl, {
  define: {
    freezeTableName: true
  }
});

/* harmony default export */ __webpack_exports__["a"] = (sequelize);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(228);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(229);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CKEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageSelect__ = __webpack_require__(11);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global CKEDITOR */






var _ref = _jsx('div', {
  id: 'toolbarLocation'
});

class CKEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      oldEditorSize: 0,
      isEndEditor: false,
      showModalSelectImage: false,
      selectImageType: ''
    };
    this.elementName = "editor_" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleSelectImage(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        modalSelectImage: false
      });
    });
    this.editor.insertHtml('<p style="text-align:center"><img alt="eS9cTTQzZT-3.jpg" src="' + '/image/' + img.name + '" /></p><br/>');
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx('span', {
      id: 'addImage',
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('editor')
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default.a, {
      handleWidth: true,
      handleHeight: true,
      onResize: (w, h) => {
        let diff = h - this.state.oldEditorSize;
        if (this.state.isEndEditor && diff > 0) {
          var y = $(window).scrollTop();
          $(window).scrollTop(y + diff);
        }
        this.setState({
          oldEditorSize: h
        });
      }
    }), _ref, _jsx('textarea', {
      name: this.elementName,
      defaultValue: this.props.value
    }), _jsx('div', {
      style: { height: 20 }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default.a, {
      onChange: isVisible => {
        this.setState({
          isEndEditor: !isVisible
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })))));
  }

  componentDidMount() {
    let configuration = {
      // removePlugins : 'magicline',
      extraPlugins: 'autogrow,image2,sharedspace,colorbutton,justify,font',
      uploadUrl: '/upload/imageCKEditor',
      disallowedContent: 'img{width,height}',
      sharedSpaces: {
        top: 'toolbarLocation'
      }
    };
    this.editor = CKEDITOR.replace(this.elementName, configuration);
    CKEDITOR.instances[this.elementName].on("change", function () {
      let data = CKEDITOR.instances[this.elementName].getData();
      this.props.onChange(data);
    }.bind(this));

    CKEDITOR.on('instanceReady', function (ev) {
      ev.editor.focus();
    });
    $("#toolbarLocation").sticky({ topSpacing: 0 });

    this.editor.addCommand("mySimpleCommand", { // create named command
      exec: function (edt) {
        $("#addImage").trigger("click");
      }
    });

    this.editor.ui.addButton('SuperButton', { // add new button and bind our command
      label: "Click me",
      command: 'mySimpleCommand',
      toolbar: 'insert',
      icon: '/assets/add-image.png'
    });
  }

  componentWillUnmount() {
    console.log('destroy');
    this.editor.destroy();
  }

}



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slug__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





class EditableTagGroup extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClose = removedTag => {
      const tags = this.state.tags.filter(tag => tag.slug !== removedTag);
      this.setState({ tags });
      this.props.handleChange(tags || []);
    };

    this.showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    };

    this.handleInputChange = e => {
      this.setState({ inputValue: e.target.value });
    };

    this.handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && indexByField(tags, 'slug', __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }))) {
        tags = [...tags, { name: inputValue, slug: __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }) }];
      }
      this.setState({
        tags,
        inputVisible: false,
        inputValue: ''
      });
      this.props.handleChange(tags || []);
    };

    this.saveInputRef = input => this.input = input;

    this.state = {
      tags: this.props.defaultValue || [],
      inputVisible: false,
      inputValue: ''
    };
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return _jsx('div', {}, void 0, tags.map((tag, index) => {
      const isLongTag = tag.name.length > 20;
      const tagElem = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tag"], {
        closable: true,
        afterClose: () => this.handleClose(tag)
      }, index, isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name);
      return isLongTag ? _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tooltip"], {
        title: tag.name
      }, void 0, tagElem) : tagElem;
    }), inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      ref: this.saveInputRef,
      type: 'text', size: 'small',
      style: { width: 78 },
      value: inputValue,
      onChange: this.handleInputChange,
      onBlur: this.handleInputConfirm,
      onPressEnter: this.handleInputConfirm
    }), !inputVisible && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'small',
      type: 'dashed',
      onClick: this.showInput
    }, void 0, '+ New Tag'));
  }
}

function indexByField(list = [], fieldName, value) {
  let lenth = list.length;
  for (let i = 0; i < lenth; i++) {
    if (list[i][fieldName] === value) {
      return i;
    }
  }
  return -1;
}

/* unused harmony default export */ var _unused_webpack_default_export = (EditableTagGroup);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = __webpack_require__(225);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(32);

var _en_US4 = _interopRequireDefault(_en_US3);

var _objectAssign = __webpack_require__(267);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _objectAssign2["default"])({
        placeholder: 'Select date',
        rangePlaceholder: ['Start date', 'End date']
    }, _en_US2["default"]),
    timePickerLocale: (0, _objectAssign2["default"])({}, _en_US4["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale = {
    placeholder: 'Select time'
};
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a" /* default */], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a" /* default */], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a" /* default */], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

function sync(...args) {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync(...args);
}

/* harmony default export */ __webpack_exports__["a"] = ({ sync });


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);


const SHOW_PARENT = __WEBPACK_IMPORTED_MODULE_1_antd__["TreeSelect"].SHOW_PARENT;

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-0',
    key: '0-0-0'
  }]
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
  children: [{
    label: 'Child Node3',
    value: '0-1-0',
    key: '0-1-0'
  }, {
    label: 'Child Node4',
    value: '0-1-1',
    key: '0-1-1'
  }, {
    label: 'Child Node5',
    value: '0-1-2',
    key: '0-1-2'
  }]
}];

class TreeSelectComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      value: ['0-0-0']
    }, this.onChange = value => {
      console.log('onChange ', value, arguments);
      this.setState({ value });
    }, _temp;
  }

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: 300
      }
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["TreeSelect"], tProps);
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (TreeSelectComponent);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




// import {Title, BreadCrumb} from './components'

var _ref = _jsx('div', {
  id: 'breadCrumb',
  className: 'clearfix t-breadCrumb'
}, void 0, _jsx('div', {
  className: 'main clearfix'
}, void 0, _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('a', {
  href: '#',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'Trang ch\u1EE7'))), _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('span', {
  className: 'breadSep'
}, void 0, '>'), _jsx('a', {
  className: 'current',
  href: '#tin-tuc-cc3',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'Tin t\u1EE9c')))));

var _ref2 = _jsx('input', {
  type: 'hidden',
  id: 'thisIDCate',
  defaultValue: 'content_category_id in (3,5,6,27,4)'
});

var _ref3 = _jsx('input', {
  type: 'hidden',
  id: 'totalPost',
  defaultValue: 8
});

var _ref4 = _jsx('div', {
  id: 'product_info',
  className: 'fullwidth'
}, void 0, _jsx('h1', {
  className: 'title-news'
}, void 0, 'Tin t\u1EE9c'));

var _ref5 = _jsx('div', {}, void 0, 'Th\xF4ng tin \u0111ang c\u1EADp nh\u1EADp ....');

var _ref6 = _jsx('div', {
  className: 'clearfix'
});

var _ref7 = _jsx('div', {
  className: 'btn-loadmore'
}, void 0, _jsx('a', {
  href: 'javascript:void(0)',
  id: 'load_more'
}, void 0, 'XEM TH\xCAM'));

var _ref8 = _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-1'
}, void 0, '1')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-2'
}, void 0, '2')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-3'
}, void 0, '3')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-4'
}, void 0, '4')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-5'
}, void 0, '5')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-6'
}, void 0, '6')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-7'
}, void 0, '7')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#tin-tuc-cc3/trang-8'
}, void 0, '8')));

var _ref9 = _jsx('div', {
  className: 't-main_sidebar col-md-3'
}, void 0, _jsx('h2', {}, void 0, 'Tin m\u1EDBi nh\u1EA5t'));

function News(props) {
  let news = props.data.allNews.value;
  let recentNews = props.data.recentNews.value;
  let categories = props.data.categories.value;

  let category = undefined;

  if (props.slug) {
    category = categories.find(p => p.slug === props.slug);
  }

  return _jsx('div', {}, void 0, _ref, _jsx('div', {
    id: 'content_wrapper',
    className: 'product_layout product_detail_layout main clearfix'
  }, void 0, _ref2, _ref3, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-md-9',
    id: 'content'
  }, void 0, _ref4, _ref5, _ref6, _ref7, _jsx('div', {
    className: 'paging',
    style: { display: 'none' }
  }, void 0, _ref8)), _ref9)));
}
//
// function findCategoryBySlug(slug, categories) {
//   for (let i = 0; i < categories.length; i++){
//     if(categories[i].slug === slug) {
//       return categories[i]
//     }
//   }
//   return {slug:'/', title: 'Không tồn tại'}
// }

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx('div', {
  id: 'breadCrumb',
  className: 'clearfix t-breadCrumb'
}, void 0, _jsx('div', {
  className: 'main clearfix'
}, void 0, _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('a', {
  href: '/',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'Trang ch\u1EE7'))), _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('span', {
  className: 'breadSep'
}, void 0, '>'), _jsx('a', {
  className: 'current',
  href: '#',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'M\xC1Y L\u1ECCC N\u01AF\u1EDAC')))));

var _ref2 = _jsx('div', {
  className: 'product_image_wrapper'
}, void 0, _jsx('div', {
  className: 'product_image'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc uRO 1.0'
}, void 0, _jsx('img', {
  src: '/product/hokodai.jpg',
  alt: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc uRO 1.0',
  'data-pin-nopin': 'true'
}))));

var _ref3 = _jsx('h2', {
  className: 'product_title'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc uRO 1.0'
}, void 0, 'M\xE1y l\u1ECDc n\u01B0\u1EDBc HOKODAI'));

var _ref4 = _jsx('div', {
  className: 'product_model'
}, void 0, 'Model: 2018');

var _ref5 = _jsx('li', {}, void 0, _jsx('div', {}, void 0, '\u0110i\u1EC7n \xE1p v\xE0o: 220V'));

var _ref6 = _jsx('li', {}, void 0, _jsx('div', {}, void 0, '\u0110i\u1EC7n \xE1p ra: 24V'));

var _ref7 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'K\xEDch th\u01B0\u1EDBc: 330 x 440 x 940 (mm)'));

var _ref8 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'C\xF4ng su\u1EA5t l\u1ECDc: 10-15L/H'));

var _ref9 = _jsx('strong', {}, void 0, 'X.000.000 VN\u0110');

var _ref10 = _jsx('a', {
  rel: 'nofollow',
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc HOKODAI',
  className: 'readmore'
}, void 0, 'Xem chi ti\u1EBFt');

var _ref11 = _jsx('div', {
  className: 'product_image_wrapper'
}, void 0, _jsx('div', {
  className: 'product_image'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y L\u1ECDc N\u01B0\u1EDBc RO Karofi Plus'
}, void 0, _jsx('img', {
  src: '/product/otawa.jpg',
  alt: 'M\xE1y L\u1ECDc N\u01B0\u1EDBc RO Karofi Plus',
  'data-pin-nopin': 'true'
}))));

var _ref12 = _jsx('h2', {
  className: 'product_title'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y L\u1ECDc N\u01B0\u1EDBc RO Karofi Plus'
}, void 0, 'M\xE1y l\u1ECDc n\u01B0\u1EDBc n\xF3ng l\u1EA1nh OTAWA'));

var _ref13 = _jsx('div', {
  className: 'product_model'
}, void 0, 'Model: OTW F12 Modern');

var _ref14 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, _jsx('span', {}, void 0, ' ')));

var _ref15 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'T\xEDch h\u1EE3p thi\u1EBFt b\u1ECB di\u1EC7t khu\u1EA9n NanoSilver')));

var _ref16 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, _jsx('span', {}, void 0, 'B\u1EA3o v\u1EC7 to\xE0n di\u1EC7n 2 trong 1')));

var _ref17 = _jsx('span', {}, void 0, 'Gi\xE1 ni\xEAm y\u1EBFt:\xA0');

var _ref18 = _jsx('a', {
  rel: 'nofollow',
  href: '#',
  title: 'M\xE1y L\u1ECDc N\u01B0\u1EDBc RO Karofi Plus',
  className: 'readmore'
}, void 0, 'Xem chi ti\u1EBFt');

var _ref19 = _jsx('div', {
  className: 'clear'
});

var _ref20 = _jsx('div', {
  className: 'divider'
});

var _ref21 = _jsx('div', {
  className: 'product_image_wrapper'
}, void 0, _jsx('div', {
  className: 'product_image'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 7 c\u1EA5p'
}, void 0, _jsx('img', {
  src: '/product/hokodai2.jpg',
  alt: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 7 c\u1EA5p',
  'data-pin-nopin': 'true'
}))));

var _ref22 = _jsx('h2', {
  className: 'product_title'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 7 c\u1EA5p'
}, void 0, 'M\xE1y l\u1ECDc n\u01B0\u1EDBc HOKODAI'));

var _ref23 = _jsx('div', {
  className: 'product_model'
}, void 0, 'Model: 2018');

var _ref24 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'M\xE0n h\xECnh c\u1EA3m \u1EE9ng hi\u1EC3n th\u1ECB TDS'));

var _ref25 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'B\u1ED9 vi \u0111i\u1EC1u khi\u1EC3n th\xF4ng minh'));

var _ref26 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'M\xE0ng RO Filmtec DOW - USA'));

var _ref27 = _jsx('strong', {}, void 0, '7.360.000 VN\u0110');

var _ref28 = _jsx('a', {
  rel: 'nofollow',
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 7 c\u1EA5p',
  className: 'readmore'
}, void 0, 'Xem chi ti\u1EBFt');

var _ref29 = _jsx('div', {
  className: 'product_image_wrapper'
}, void 0, _jsx('div', {
  className: 'product_image'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 8 c\u1EA5p'
}, void 0, _jsx('img', {
  src: '/product/otawa.jpg',
  alt: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 8 c\u1EA5p',
  'data-pin-nopin': 'true'
}))));

var _ref30 = _jsx('h2', {
  className: 'product_title'
}, void 0, _jsx('a', {
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 8 c\u1EA5p'
}, void 0, 'M\xE1y l\u1ECDc n\u01B0\u1EDBc n\xF3ng l\u1EA1nh OTAWA'));

var _ref31 = _jsx('div', {
  className: 'product_model'
}, void 0, 'Model: 2018');

var _ref32 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'M\xE0n h\xECnh c\u1EA3m \u1EE9ng hi\u1EC3n th\u1ECB TDS'));

var _ref33 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'B\u1ED9 vi \u0111i\u1EC1u khi\u1EC3n th\xF4ng minh'));

var _ref34 = _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'M\xE0ng RO Filmtec DOW - USA'));

var _ref35 = _jsx('strong', {}, void 0, '7.660.000 VN\u0110');

var _ref36 = _jsx('a', {
  rel: 'nofollow',
  href: '#',
  title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO 2.0, 8 c\u1EA5p',
  className: 'readmore'
}, void 0, 'Xem chi ti\u1EBFt');

var _ref37 = _jsx('div', {
  className: 'clear'
});

function About(props) {

  // let recentNews = this.props.data.recentNews.value
  // let allProducts = this.props.data.allProducts.value
  // let productCategories = this.props.data.productCategories.value
  //
  // let category = undefined
  //
  // if(this.props.slug){
  //   category = productCategories.find(p => p.slug === this.props.slug)
  // }

  return _jsx('div', {}, void 0, _ref, _jsx('div', {
    id: 'content_wrapper',
    className: 'product_layout main clearfix'
  }, void 0, _jsx('div', {
    className: 'product_box clearfix'
  }, void 0, _ref2, _jsx('div', {
    className: 'product_info'
  }, void 0, _ref3, _ref4, _jsx('div', {
    className: 'short_desc'
  }, void 0, _jsx('ul', {}, void 0, _ref5, _ref6, _ref7, _ref8, _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'Gi\xE1 ni\xEAm y\u1EBFt:', _jsx('span', {
    style: { color: 'rgb(255, 0, 0)' }
  }, void 0, '\xA0', _ref9))))), _ref10)), _jsx('div', {
    className: 'product_box clearfix'
  }, void 0, _ref11, _jsx('div', {
    className: 'product_info'
  }, void 0, _ref12, _ref13, _jsx('div', {
    className: 'short_desc'
  }, void 0, _jsx('ul', {}, void 0, _ref14, _ref15, _ref16, _jsx('li', {}, void 0, _jsx('p', {}, void 0, _ref17, _jsx('a', {
    href: '#'
  }, void 0, _jsx('span', {
    style: { color: '#ff0000' }
  }, void 0, 'Xem th\xEAm')))))), _ref18)), _ref19, _ref20, _jsx('div', {
    className: 'product_box clearfix'
  }, void 0, _ref21, _jsx('div', {
    className: 'product_info'
  }, void 0, _ref22, _ref23, _jsx('div', {
    className: 'short_desc'
  }, void 0, _jsx('ul', {}, void 0, _ref24, _ref25, _ref26, _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'Gi\xE1 ni\xEAm y\u1EBFt:', _jsx('span', {
    style: { color: '#ff0000' }
  }, void 0, ' ', _ref27)))), _jsx('p', {
    style: { textAlign: 'right' }
  }, void 0, '\xA0')), _ref28)), _jsx('div', {
    className: 'product_box clearfix'
  }, void 0, _ref29, _jsx('div', {
    className: 'product_info'
  }, void 0, _ref30, _ref31, _jsx('div', {
    className: 'short_desc'
  }, void 0, _jsx('ul', {}, void 0, _ref32, _ref33, _ref34, _jsx('li', {}, void 0, _jsx('p', {}, void 0, 'Gi\xE1 ni\xEAm y\u1EBFt: ', _jsx('span', {
    style: { color: '#ff0000' }
  }, void 0, _ref35)))), _jsx('p', {
    style: { textAlign: 'right' }
  }, void 0, '\xA0')), _ref36)), _ref37));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(219);
    var insertCss = __webpack_require__(24);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("gm");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_App__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Html__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_HtmlAdmin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__createFetch__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__passport__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_models__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_schema__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_json__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__store_configureStore__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_runtime__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mongoose__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





















 // eslint-disable-line import/no-unresolved




const session = __webpack_require__(236);
const MongoStore = __webpack_require__(231)(session);
var routeCache = __webpack_require__(258);

//mongoose

__WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.Promise = Promise;
connect();
const Setting = __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.model('Setting');

const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------

global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------


var jsonParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' });

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use('/assets', (req, res) => {
  res.sendStatus(400);
});

app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(session({
  cookie: { maxAge: 24 * 3600 * 1000 * 30 },
  resave: true,
  saveUninitialized: false,
  secret: 'luuVANluan',
  ttl: 7 * 24 * 60 * 60,
  store: new MongoStore({ mongooseConnection: __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connection })
}));

app.use(__WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].initialize());
app.use(__WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].session());
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());

//
// Authentication
// -----------------------------------------------------------------------------


if (false) {
  app.enable('trust proxy');
}

app.use('/image', __webpack_require__(210));
app.use('/api', __webpack_require__(208));
app.use('/upload', __webpack_require__(212));
app.use('/auth', __webpack_require__(209));

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', __WEBPACK_IMPORTED_MODULE_5_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_19__data_schema__["a" /* default */],
  graphiql: false,
  rootValue: { request: req },
  pretty: false
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {

    let routeUrl = req.originalUrl;
    let isAdmin = routeUrl.slice(0, 6) === '/admin';
    if (isAdmin) {
      if (!req.user || !req.user.isAdmin) {
        // return res.redirect('/login')
      }
    }

    try {
      let setting = yield Setting.findOne({});

      const fetch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__createFetch__["a" /* default */])({
        baseUrl: __WEBPACK_IMPORTED_MODULE_23__config___default.a.api.serverUrl,
        cookie: req.headers.cookie
      });

      let lang = 'vi';
      if (req.cookies && req.cookies.lang) lang = req.cookies.lang;
      if (req.query && req.query.lang === 'en') {
        res.cookie('lang', 'en');
        lang = 'en';
      }

      if (req.query && req.query.lang === 'vi') {
        res.cookie('lang', 'vi');
        lang = 'vi';
      }

      // console.log(lang)
      const initialState = {
        user: req.user || null,
        data: {
          recentProduct: {
            needUpdate: true,
            value: []
          },
          productByCategory: {
            needUpdate: true,
            value: []
          },
          productCategories: {
            needUpdate: true,
            value: []
          },
          categories: {
            needUpdate: true,
            value: []
          },
          category: {
            needUpdate: true,
            value: {}
          },
          news: {
            needUpdate: true,
            value: {}
          },
          product: {
            needUpdate: true,
            value: {}
          },
          allNews: {
            needUpdate: true,
            value: []
          },
          allProducts: {
            needUpdate: true,
            value: []
          },
          productRelative: {
            needUpdate: true,
            value: []
          },
          allNewsByCategory: {
            needUpdate: true,
            value: []
          },
          recentNews: {
            needUpdate: true,
            value: []
          },
          information: {
            needUpdate: true,
            value: {}
          },
          lang: lang
        }
      };

      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__store_configureStore__["a" /* default */])(initialState, {
        fetch
      });

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));

      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        fetch,
        // You can access redux through react-redux connect
        store,
        storeSubscription: null
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__router__["a" /* default */].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);

      if (data.disableSSR) {
        data.children = '';
      } else {
        data.children = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_10__components_App__["a" /* default */], {
          context: context,
          store: store
        }, void 0, route.component));
      }

      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_20__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_20__assets_json___default.a.client.js];
      if (__WEBPACK_IMPORTED_MODULE_20__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_20__assets_json___default.a[route.chunk].js);
      }
      data.app = {
        apiUrl: __WEBPACK_IMPORTED_MODULE_23__config___default.a.api.clientUrl,
        state: context.store.getState()
      };

      let version = 7;

      if (isAdmin) {
        const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_HtmlAdmin__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      } else {
        const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Html__["a" /* default */], _extends({ v: version }, data, { lang: lang, isAdmin: isAdmin, scriptTop: setting ? setting.scriptTop || '' : '', scriptBottom: setting ? setting.scriptBottom || '' : '', css: setting ? setting.css || '' : '' })));

        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      }
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_9_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.error(pe.render(err));
  const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(_jsx(__WEBPACK_IMPORTED_MODULE_11__components_Html__["a" /* default */], {
    title: 'Internal Server Error',
    description: err.message,
    styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default.a._getCss() }]
  }, void 0, __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err
  }))));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
__WEBPACK_IMPORTED_MODULE_18__data_models__["a" /* default */].sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(__WEBPACK_IMPORTED_MODULE_23__config___default.a.port, () => {
    console.info(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_23__config___default.a.port}/`);
  });
});

function connect() {
  var options = { server: { socketOptions: { keepAlive: 1 } }, promiseLibrary: Promise };
  return __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_23__config__["mongoDBURL"], options).connection;
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(31);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _en_US2["default"];
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = __webpack_require__(15);

var _moment2 = _interopRequireDefault(_moment);

var _en_US = __webpack_require__(226);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(31);

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__(32);

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__(48);

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment2["default"].locale('en');
exports["default"] = {
    locale: 'en',
    Pagination: _en_US2["default"],
    DatePicker: _en_US4["default"],
    TimePicker: _en_US6["default"],
    Calendar: _en_US8["default"],
    Table: {
        filterTitle: 'Filter Menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No Data',
        selectAll: 'Select Current Page',
        selectInvert: 'Select Invert'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
/* eslint-disable import/prefer-default-export */



function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"].childContextTypes);

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
  }

}

App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* eslint-disable react/no-danger */
const version = 0;

var _ref = _jsx('meta', {
  charSet: 'utf-8'
});

var _ref2 = _jsx('meta', {
  httpEquiv: 'x-ua-compatible',
  content: 'ie=edge'
});

var _ref3 = _jsx('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
});

var _ref4 = _jsx('link', {
  rel: 'shortcut icon',
  href: 'favicon.ico'
});

var _ref5 = _jsx('link', {
  rel: 'stylesheet',
  type: 'text/css',
  href: '/css/bootstrap.min.css'
});

var _ref6 = _jsx('link', {
  rel: 'stylesheet',
  href: "/css/main_style.css?v=" + version,
  type: 'text/css',
  media: 'screen'
});

var _ref7 = _jsx('link', {
  href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  rel: 'stylesheet'
});

var _ref8 = _jsx('link', {
  rel: 'stylesheet',
  href: 'animate.css'
});

var _ref9 = _jsx('script', {
  src: '/js/jquery_3.2.0.min.js',
  type: 'text/javascript'
});

var _ref10 = _jsx('script', {
  src: '/js/jquery_googlemap.js',
  type: 'text/javascript'
});

var _ref11 = _jsx('script', {
  src: '/js/pagination_loadmore.js',
  type: 'text/javascript'
});

var _ref12 = _jsx('link', {
  rel: 'stylesheet',
  type: 'text/css',
  href: "/css/app.css?v=" + version
});

var _ref13 = _jsx('link', {
  rel: 'stylesheet',
  type: 'text/css',
  charset: 'UTF-8',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
});

var _ref14 = _jsx('link', {
  rel: 'stylesheet',
  type: 'text/css',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
});

var _ref15 = _jsx('link', {
  rel: 'stylesheet',
  type: 'text/css',
  href: 'https://karofi.com/video-js/video-js.css',
  media: 'screen'
});

var _ref16 = _jsx('link', {
  rel: 'stylesheet',
  type: 'text/css',
  href: 'https://karofi.com/fancybox/jquery.fancybox-1.3.4.css',
  media: 'screen'
});

var _ref17 = _jsx('link', {
  rel: 'stylesheet',
  href: 'https://karofi.com/css/mobile.css',
  type: 'text/css',
  media: 'screen'
});

var _ref18 = _jsx('link', {
  rel: 'stylesheet',
  href: 'https://karofi.com/css/menu_style.css',
  type: 'text/css',
  media: 'screen'
});

var _ref19 = _jsx('script', {
  type: 'text/javascript',
  src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'
});

var _ref20 = _jsx('script', {
  type: 'text/javascript',
  src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js'
});

var _ref21 = _jsx('script', {
  type: 'text/javascript',
  src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js'
});

var _ref22 = _jsx('script', {
  src: '//ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js'
});

var _ref23 = _jsx('script', {
  language: 'javascript',
  type: 'text/javascript',
  src: '/js/menu_index.js'
});

var _ref24 = _jsx('script', {
  language: 'javascript',
  type: 'text/javascript',
  src: '/js/jquery.flexslider-min.js'
});

var _ref25 = _jsx('script', {
  language: 'javascript',
  type: 'text/javascript',
  src: '/js/jquery.carouFredSel-5.5.0-packed.js'
});

var _ref26 = _jsx('script', {
  language: 'javascript',
  type: 'text/javascript',
  src: '/js/jquery.hashchange.min.js'
});

var _ref27 = _jsx('script', {
  language: 'javascript',
  type: 'text/javascript',
  src: '/js/jquery.easytabs.min.js'
});

var _ref28 = _jsx('script', {
  type: 'text/javascript',
  src: '/js/jquery.flexisel.js'
});

var _ref29 = _jsx('script', {
  type: 'text/javascript',
  src: '/fancybox/jquery.fancybox-1.3.4.pack.js'
});

var _ref30 = _jsx('script', {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
});

var _ref31 = _jsx('a', {
  href: 'tel:1900633362'
}, void 0, _jsx('div', {
  className: 'coccoc-alo-phone coccoc-alo-green coccoc-alo-show',
  id: 'coccoc-alo-phoneIcon'
}, void 0, _jsx('div', {
  className: 'coccoc-alo-ph-circle'
}), _jsx('div', {
  className: 'coccoc-alo-ph-circle-fill'
}), _jsx('div', {
  className: 'coccoc-alo-ph-img-circle'
})));

function Html(props) {
  const { title, description, styles, scripts, app, children, v, seo, scriptTop, css } = props;
  return _jsx('html', {
    className: 'no-js',
    lang: props.lang
  }, void 0, _jsx('head', {}, void 0, _ref, _ref2, _jsx('title', {}, void 0, title), _jsx('meta', {
    name: 'description',
    content: description
  }), _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _jsx('style', {
    dangerouslySetInnerHTML: { __html: css }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: scriptTop }
  })), _jsx('body', {}, void 0, _jsx('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: children }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: `window.App=${__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app)}` }
  }), _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _jsx('script', {
    src: scripts[0] + "?v=" + v
  }), _jsx('script', {
    src: scripts[1] + "?v=" + v
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: props.scriptBottom }
  }), _ref31));
}

Html.defaultProps = {
  styles: [],
  scripts: []
};


/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* eslint-disable react/no-danger */

var _ref = _jsx('meta', {
  charSet: 'utf-8'
});

var _ref2 = _jsx('meta', {
  httpEquiv: 'x-ua-compatible',
  content: 'ie=edge'
});

var _ref3 = _jsx('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
});

var _ref4 = _jsx('link', {
  rel: 'apple-touch-icon',
  href: 'apple-touch-icon.png'
});

var _ref5 = _jsx('link', {
  rel: 'stylesheet',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
});

var _ref6 = _jsx('script', {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
});

var _ref7 = _jsx('script', {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js'
});

var _ref8 = _jsx('script', {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.min.js'
});

var _ref9 = _jsx('script', {
  src: '/lib/ckeditor/ckeditor.js'
});

var _ref10 = _jsx('script', {
  src: 'https://rawgit.com/basecamp/trix/master/dist/trix.js'
});

var _ref11 = _jsx('link', {
  rel: 'stylesheet',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.10.2/antd.min.css'
});

function Html(props) {
  const { title, description, styles, scripts, app, children, v } = props;
  return _jsx('html', {
    className: 'no-js',
    lang: 'en'
  }, void 0, _jsx('head', {}, void 0, _ref, _ref2, _jsx('title', {}, void 0, title), _jsx('meta', {
    name: 'description',
    content: description
  }), _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _jsx('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: "/css/admin.css?v=" + v
  })), _jsx('body', {}, void 0, _jsx('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: children }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: `window.App=${__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app)}` }
  }), scripts.map(script => _jsx('script', {
    src: script
  }, script))));
}

Html.defaultProps = {
  styles: [],
  scripts: []
};


/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {
  className: 'fa fa-facebook'
});

var _ref2 = _jsx('span', {
  className: 'fa fa-youtube-play'
});

var _ref3 = _jsx('h6', {
  className: 'footer-top__headings'
}, void 0, 'D\u1ECACH V\u1EE4');

var _ref4 = _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
  to: '/service'
}, void 0, 'T\u1EA5t c\u1EA3 d\u1ECBch v\u1EE5'));

var _ref5 = _jsx('h6', {
  className: 'footer-top__headings'
}, void 0, 'Li\xEAn H\u1EC7');

var _ref6 = _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
  to: '/contact#form',
  className: 'btn btn-info'
}, void 0, 'G\u1EEDi tin nh\u1EAFn'));

var _ref7 = _jsx('div', {
  className: 'footer-bottom__right'
}, void 0, 'Copyright \xA9 2017 Colombus.Vn. All rights reserved.');

function Footer(props) {

  const services = props.data.information.value.services;
  const common = props.data.information.value.common;

  return _jsx('footer', {
    className: 'footer'
  }, void 0, _jsx('div', {
    className: 'footer-top'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-xs-12 col-md-4'
  }, void 0, _jsx('p', {}, void 0, _jsx('img', {
    alt: 'logo-footer',
    src: common.logo2,
    className: 'Colombus logo 2'
  })), _jsx('div', {
    dangerouslySetInnerHTML: { __html: common.footer1 }
  }), _jsx('p', {}, void 0, _jsx('a', {
    target: '_blank',
    href: common.facebook,
    className: 'icon-container icon-container--square'
  }, void 0, _ref), _jsx('a', {
    target: '_blank',
    href: common.google,
    className: 'icon-container icon-container--square'
  }, void 0, _ref2))), _jsx('div', {
    className: 'col-xs-12 col-md-2'
  }, void 0, _jsx('div', {
    className: 'widget_nav_menu'
  }, void 0, _ref3, _jsx('ul', {}, void 0, _ref4, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
    to: "/service/" + services.groundtransport.slug
  }, void 0, services.groundtransport.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
    to: "/service/" + services.cargo.slug
  }, void 0, services.cargo.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
    to: "/service/" + services.warehousing.slug
  }, void 0, services.warehousing.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
    to: "/service/" + services.logisticservice.slug
  }, void 0, services.logisticservice.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
    to: "/service/" + services.trackingservice.slug
  }, void 0, services.trackingservice.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
    to: "/service/" + services.storage.slug
  }, void 0, services.storage.title))))), _jsx('div', {
    className: 'col-xs-12 col-md-6'
  }, void 0, _ref5, _jsx('div', {
    dangerouslySetInnerHTML: { __html: common.footer2 }
  }), _ref6)))), _jsx('div', {
    className: 'footer-bottom'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'footer-bottom__left'
  }, void 0), _ref7)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Footer);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index__ = __webpack_require__(60);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('div', {}, void 0);

function Header(props) {
  // const services = this.props.data.information.value.services
  // const common = this.props.data.information.value.common
  // const en = this.props.data && this.props.data.lang === 'en'

  return _ref;
}

/* unused harmony default export */ var _unused_webpack_default_export = (Header);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('i', {
  className: 'fa fa-facebook'
});

var _ref2 = _jsx('i', {
  className: 'fa fa-youtube'
});

function HeaderNavigation(props) {

  const common = props.common;

  return _jsx('div', {
    className: 'header__navigation-widgets'
  }, void 0, _jsx('a', {
    target: '_blank',
    href: common.facebook,
    className: 'social-icons__link'
  }, void 0, _ref), _jsx('a', {
    target: '_blank',
    href: common.google,
    className: 'social-icons__link'
  }, void 0, _ref2));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HeaderNavigation);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('i', {
  className: 'fa fa-headphones'
});

var _ref2 = _jsx('i', {
  className: 'fa fa-clock-o'
});

var _ref3 = _jsx('i', {
  className: 'fa fa-envelope-o'
});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
  to: '/contact#form',
  className: 'btn btn-info',
  id: 'button_requestQuote'
}, void 0, ' Li\xEAn h\u1EC7 ngay');

function HeaderWidget(props) {

  const common = props.common;

  return _jsx('div', {
    className: 'header__widgets'
  }, void 0, _jsx('div', {
    className: 'widget-icon-box'
  }, void 0, _jsx('div', {
    className: 'icon-box'
  }, void 0, _ref, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, common.title1), _jsx('span', {
    className: 'icon-box__subtitle',
    dangerouslySetInnerHTML: { __html: common.body1 }
  }))), _jsx('div', {
    className: 'widget-icon-box'
  }, void 0, _jsx('div', {
    className: 'icon-box'
  }, void 0, _ref2, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, common.title2), _jsx('span', {
    className: 'icon-box__subtitle',
    dangerouslySetInnerHTML: { __html: common.body2 }
  }))), _jsx('div', {
    className: 'widget-icon-box'
  }, void 0, _jsx('div', {
    className: 'icon-box'
  }, void 0, _ref3, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, common.title3), _jsx('span', {
    className: 'icon-box__subtitle',
    dangerouslySetInnerHTML: { __html: common.body3 }
  }))), _ref4);
}

/* unused harmony default export */ var _unused_webpack_default_export = (HeaderWidget);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('button', {
  'data-target': '#cargopress-navbar-collapse',
  'data-toggle': 'collapse',
  className: 'navbar-toggle',
  type: 'button'
}, void 0, _jsx('span', {
  className: 'navbar-toggle__text'
}, void 0, 'MENU'), _jsx('span', {
  className: 'navbar-toggle__icon-bar'
}, void 0, _jsx('span', {
  className: 'icon-bar'
}), _jsx('span', {
  className: 'icon-bar'
}), _jsx('span', {
  className: 'icon-bar'
})));

function Logo(props) {

  const common = props.common;

  return _jsx('div', {
    className: 'header__logo'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
    to: '/'
  }, void 0, _jsx('img', {
    className: 'img-responsive',
    alt: 'Colombus Logo',
    src: common.logo1
  })), _ref);
}

/* unused harmony default export */ var _unused_webpack_default_export = (Logo);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




class Menu extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  closeMenu() {
    $('.collapse').collapse('hide');
  }

  render() {
    const services = this.props.services;
    const common = this.props.common;
    return _jsx('div', {
      className: 'header__navigation'
    }, void 0, _jsx('nav', {
      className: 'collapse navbar-collapse',
      id: 'cargopress-navbar-collapse'
    }, void 0, _jsx('ul', {
      className: 'main-navigation js-main-nav js-dropdown'
    }, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: common.menu.path1,
      onClick: this.closeMenu
    }, void 0, common.menu.menu1)), _jsx('li', {
      className: 'menu-item-has-children'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: common.menu.path2,
      onClick: this.closeMenu
    }, void 0, common.menu.menu2), _jsx('ul', {
      role: 'menu',
      className: 'sub-menu'
    }, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: "/service/" + services.groundtransport.slug,
      onClick: this.closeMenu
    }, void 0, services.groundtransport.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: "/service/" + services.cargo.slug,
      onClick: this.closeMenu
    }, void 0, services.cargo.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: "/service/" + services.warehousing.slug,
      onClick: this.closeMenu
    }, void 0, services.warehousing.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: "/service/" + services.logisticservice.slug,
      onClick: this.closeMenu
    }, void 0, services.logisticservice.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: "/service/" + services.trackingservice.slug,
      onClick: this.closeMenu
    }, void 0, services.trackingservice.title)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: "/service/" + services.storage.slug,
      onClick: this.closeMenu
    }, void 0, services.storage.title)))), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: common.menu.path3,
      onClick: this.closeMenu
    }, void 0, common.menu.menu3)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: common.menu.path4,
      onClick: this.closeMenu
    }, void 0, common.menu.menu4)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: common.menu.path5,
      onClick: this.closeMenu
    }, void 0, common.menu.menu5)), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: common.menu.path6,
      onClick: this.closeMenu
    }, void 0, common.menu.menu6)))));
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Menu);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logo__ = __webpack_require__(58);
/* unused harmony reexport Logo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__(59);
/* unused harmony reexport Menu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeaderWidget__ = __webpack_require__(57);
/* unused harmony reexport HeaderWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HeaderNavigation__ = __webpack_require__(56);
/* unused harmony reexport HeaderNavigation */






/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer__ = __webpack_require__(54);
/* unused harmony reexport Footer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(55);
/* unused harmony reexport Header */




/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch({ baseUrl, cookie }) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'POST', // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? { Cookie: cookie } : null)
  };

  return (url, options) => url.startsWith('/graphql') || url.startsWith('/api') ? __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(`${baseUrl}${url}`, _extends({}, defaults, options, {
    headers: _extends({}, defaults.headers, options && options.headers)
  })) : __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, options);
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(22);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('User', {

  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },

  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: { isEmail: true }
  },

  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false
  }

}, {

  indexes: [{ fields: ['email'] }]

});

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(22);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserClaim', {

  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },

  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserClaim);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(22);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserLogin', {

  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true
  },

  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserLogin);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(22);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserProfile', {

  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true
  },

  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  },

  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50)
  },

  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserProfile);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(7);
let autoIncrement = __webpack_require__(246);
autoIncrement.initialize(mongoose.connection);

module.exports = autoIncrement;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOneCategory: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneCategory
  },
  getCategories: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getCategories
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  title: { type: String, default: '' },
  slug: { type: String, required: true, unique: true, index: true },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Category', schema);

module.exports = model;

// get ( product )


module.exports.getOneCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getCategories = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Category',
  description: 'Category object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  listImage: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      num: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      },
      time: {
        type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
      },
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getListImageByTime
  }

});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

var schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  type: String,
  fileSize: { type: Number, default: 0 },
  dimensions: {
    width: { type: Number },
    height: { type: Number }
  },
  userUpload: String,
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Image', schema);

module.exports = model;

module.exports.getListImageByTime = (root, { num, time, filter }) => {
  if (!time) time = Date.now();
  let query = { created_at: { $lt: time } };
  if (filter) query.name = { $regex: new RegExp(filter, "ig") };
  console.log(query);
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).limit(num).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Image',
  description: 'Image object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    type: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    fileSize: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    dimensions: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
        name: 'dimensions',
        fields: () => ({
          width: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] },
          height: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] }
        })
      })
    },
    userUpload: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  information: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getInformation
  }

});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

var schema = new mongoose.Schema({
  id: { type: String },
  common: {
    logo1: { type: String, default: '/assets/images/logo.png' },
    logo2: { type: String, default: '/assets/images/logo-footer.png' },

    facebook: { type: String, default: 'https://www.facebook.com/ProteusThemes' },
    google: { type: String, default: 'https://www.youtube.com/user/ProteusNetCompany' },

    footer1: { type: String, default: 'But i must explain to you how all this mistaken idea pleasure and praising pain was born and i will give you. But i explain to you how all this mistaken idea.' },
    footer2: { type: String, default: 'But i must explain to you how all this mistaken idea pleasure and praising pain was born and i will give you. But i explain to you how all this mistaken idea.' },

    title1: { type: String, default: 'Call Us Anytime' },
    body1: { type: String, default: '1-888-123-4567' },
    title2: { type: String, default: 'Opening Time' },
    body2: { type: String, default: '08:00 - 18:00' },
    title3: { type: String, default: 'Email Us' },
    body3: { type: String, default: 'info@cargopress.io' },

    menu: {
      type: Object,
      default: {
        menu1: 'Home',
        path1: '/',
        menu2: 'Services',
        path2: '/service',
        menu3: 'About',
        path3: '/about',
        menu4: 'Track & Trace',
        path4: '/tracking',
        menu5: 'News',
        path5: '/news',
        menu6: 'Contact',
        path6: '/contact'
      }
    }

  },

  contact: {
    title: { type: String, default: 'CONTACT US' },
    description: { type: String, default: 'We are waiting you to get in touch with us' },
    header: { type: String, default: 'SEND US AN EMAIL, OR THREE' },
    body: { type: String, default: 'Nội Dung' },
    widget: { type: String, default: `<div> <div class="widget_black-studio-tinymce"> <div class="featured-widget"> <h3 class="widget-title"> <span class="widget-title__inline">OLD FASHIONED CONTACT</span> </h3> <p> <strong>CargoPress, Itd.</strong><br /> 227 Marion Street<br /> Columbia, SC 29201 </p> <p> 1-888-123-4567<br /> 1-888-123-4568<br /> <a href="mailto:info@cargopress.com">info@cargopress.com</a> </p> </div> </div> <div class="widget_pw_opening_time"> <div class="featured-widget"> <h3> <span class="icon icons-ornament-left" /> OPENING TIME <span class="icon icons-ornament-right" /> </h3> <dl class="week-day "> <dt>Monday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day light-bg"> <dt>Tuesday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day "> <dt>Wednesday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day light-bg"> <dt>Thursday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day "> <dt>Friday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day light-bg"> <dt>Saturday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day closed today"> <dt>Sunday</dt> <dd>CLOSED</dd> </dl> </div> </div> </div>` }
  },
  about: {
    title: { type: String, default: 'About Us' },
    description: { type: String, default: 'Something about us from a little bit of different perspective' },
    img1: { type: String, default: '/assets/images/placeholders/848x480.png' },
    img2: { type: String, default: '/assets/images/placeholders/848x480.png' },
    body: { type: String, default: 'Nội Dung' }
  },
  tracking: {
    title: { type: String, default: 'TRACKER' },
    description: { type: String, default: 'Know exactly where your cargo/freight is at all times' },
    body: { type: String, default: 'Nội Dung' }
  },

  allService: {
    title: { type: String, default: 'SERVICES' },
    description: { type: String, default: 'What we do and what can you expect from us' }
  },

  services: {
    groundtransport: {
      type: Object,
      default: {
        title: 'Ground Transport',
        slug: 'ground-transport',
        img1: '/assets/images/placeholders/848x480.png',
        img2: '/assets/images/placeholders/848x480.png',
        body: 'Nội Dung Ground Transport',
        description: 'Ground transport and freight forwarding services, along with other ancillary services, helps us to provide tailor made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, '
      }
    },
    cargo: {
      type: Object,
      default: {
        title: 'Cargo',
        slug: 'cargo',
        img1: '/assets/images/placeholders/848x480.png',
        img2: '/assets/images/placeholders/848x480.png',
        body: 'Nội Dung cargo',
        description: 'Team of cargo experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your'
      }
    },
    logisticservice: {
      type: Object,
      default: {
        title: 'Logistic Service',
        slug: 'logistic-service',
        img1: '/assets/images/placeholders/848x480.png',
        img2: '/assets/images/placeholders/848x480.png',
        body: 'Nội Dung Logistic Service',
        description: 'We provide logistic services in the nation, whether it is freight transportation, supply chain solutions, warehousing and distribution, customer resource area services, customs, security and insurance, temperature controlled logistics, industry '
      }
    },
    trackingservice: {
      type: Object,
      default: {
        title: 'Tracking Service',
        slug: 'tracking-service',
        img1: '/assets/images/placeholders/848x480.png',
        img2: '/assets/images/placeholders/848x480.png',
        body: 'Nội Dung Tracking Service',
        description: 'Our trucking service is based on the principle of providing our clients with the flexibility and reliability, to move legal load across town, or across the country, whenever they want. Our in-house team of experienced'
      }
    },
    warehousing: {
      type: Object,
      default: {
        title: 'Warehousing',
        slug: 'warehousing',
        img1: '/assets/images/placeholders/848x480.png',
        img2: '/assets/images/placeholders/848x480.png',
        body: 'Nội Dung Warehousing',
        description: 'Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic'
      }
    },
    storage: {
      type: Object,
      default: {
        title: 'Storage',
        slug: 'storage',
        img1: '/assets/images/placeholders/848x480.png',
        img2: '/assets/images/placeholders/848x480.png',
        body: 'Nội Dung Storage',
        description: 'We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts'
      }
    }
  },

  home: {
    slideTitle1: { type: String, default: 'GROUND OR AIR, THERE IS NO STOPPING FOR US' },
    slideBody1: { type: String, default: 'Starting from loading to unloading and maintaining the highest standards in terms of safety while in transit, we take nothing to chance' },
    slideImg1: { type: String, default: '/assets/images/placeholders/1920x600.png' },
    slideTitle2: { type: String, default: 'UNBEATABLE TRUCKING AND TRANSPORT SERVICES' },
    slideBody2: { type: String, default: 'Starting from loading to unloading and maintaining the highest standards in terms of safety while in transit, we take nothing to chance' },
    slideImg2: { type: String, default: '/assets/images/placeholders/1920x600.png' },
    aboutTitle: { type: String, default: 'GIỚI THIỆU' },
    aboutBody: { type: String, default: 'Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Our own warehouses, as well as our partner’s warehouses are located at strategic locations to ensure that there is no additional cost.' },
    about1: {
      type: Object,
      default: {
        title: 'Cargo',
        path: '/service/cargo',
        img: '/assets/images/placeholders/848x480.png',
        body: 'Team of cargo experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your'
      }
    },
    about2: {
      type: Object,
      default: {
        title: 'LOGISTIC SERVICE',
        path: '/service/logistic-service',
        img: '/assets/images/placeholders/848x480.png',
        body: 'We provide logistic services in the nation, whether it is freight transportation, supply chain solutions, warehousing and distribution, customer resource area services, customs, security and insurance, temperature controlled logistics, industry . We would study your requirements and provide you with a quote that would not only suit your'
      }
    },
    about3: {
      type: Object,
      default: {
        title: 'STORAGE',
        path: '/service/storage',
        img: '/assets/images/placeholders/848x480.png',
        body: 'We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts'
      }
    },
    service1: {
      type: Object,
      default: {
        title: 'STORAGE',
        path: '/service/storage',
        description: 'We can package and store your things.'
      }
    },
    service2: {
      type: Object,
      default: {
        title: 'Cargo',
        path: '/service/cargo',
        description: 'Let us transport your things from point A to point B fast and securely. .'
      }
    },
    service3: {
      type: Object,
      default: {
        title: 'WORLDWIDE TRANSPORT',
        path: '/service/ground-transport',
        description: 'We can transport your things anywhere in the world. .'
      }
    },
    service4: {
      type: Object,
      default: {
        title: 'WAREHOUSING',
        path: '/service/warehousing',
        description: 'We have top notch security and loads of space. Store your stuff at our warehouse..'
      }
    },
    service5: {
      type: Object,
      default: {
        title: 'DOOR-TO-DOOR DELIVERY',
        path: '/service/storage',
        description: 'Do you need something delivered? We are what you are looking for! .'
      }
    },
    service6: {
      type: Object,
      default: {
        title: 'GROUND TRANSPORT',
        path: '/service/storage',
        description: 'Transport your things with our super moving vans..'
      }
    },

    coreValue: {
      type: Object,
      default: {
        title: 'OUR CORE VALUES',
        author: 'WRITTEN BY CARGOPRESS CEO',
        body: 'Core values are the fundamental beliefs of a person or organization. The core values are the guiding principles that t dictate behavior and action. Core values can help people to know what is right from wrong, they can help companies to determine if they are on the right path and fulfilling their business goals; and they create an unwavering and unchanging guide. There are many different types of core values and many different examples of core values depending upon the context.'
      }
    },
    aboutUs: {
      type: Object,
      default: {
        title: 'ABOUT US',
        body: `<p> But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. </p> <p> But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. </p>`
      }
    },
    form: {
      type: Object,
      default: {
        header: 'REQUEST A QUICK QUOTE',
        body: 'But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count.'
      }
    },
    testimonials: {
      type: Object,
      default: {
        name1: 'Frank Martin',
        job1: 'Transporter',
        testimonial1: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.',
        name2: 'Martin Frank',
        job2: 'Transporter',
        testimonial2: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.',
        name3: 'Martin Frank',
        job3: 'Transporter',
        testimonial3: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.',
        name4: 'Martin Frank',
        job4: 'Transporter',
        testimonial4: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.'
      }
    },
    partners: {
      type: Object,
      default: {
        img1: '/assets/images/placeholders/208x98.png',
        url1: '/',
        img2: '/assets/images/placeholders/208x98.png',
        url2: '/',
        img3: '/assets/images/placeholders/208x98.png',
        url3: '/',
        img4: '/assets/images/placeholders/208x98.png',
        url4: '/',
        img5: '/assets/images/placeholders/208x98.png',
        url5: '/',
        img6: '/assets/images/placeholders/208x98.png',
        url6: '/'
      }
    }
  }
}, {
  collection: 'information'
});

let model = mongoose.model('Information', schema);

module.exports = model;

module.exports.getInformation = () => {
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);






// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Information',
  description: 'Information object',
  fields: () => ({
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    common: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    about: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    contact: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    tracking: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    allService: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    services: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    home: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a }
  })
}));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getPosts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getPosts',
      description: 'getPosts object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getPosts
  },
  getOnePost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOnePost
  },
  getAllPosts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllPosts
  },
  getAllPostsByCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllPostsByCategory
  },

  get5RecentPost: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.get5RecentPost
  },

  getPostRelative: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getPostRelative
  }
});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  category: { type: [], default: [] },
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, default: '' },
  public: { type: Boolean, default: false },
  coverUrl: { type: String, default: '/assets/images/placeholders/848x480.png' },
  description: { type: String, default: '' },
  body: { type: String, default: '' },
  view: { type: Number, default: 0 },
  tags: [Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Post', schema);

module.exports = model;

// get ( news )

module.exports.getPosts = (root, { page }) => {
  let listCategoryInNews = ['su-kien', 'tin-tuc-tong-hop'];

  return new Promise((resolve, reject) => {

    model.count({}).exec((err, count) => {
      if (err) return reject(err);
      model.find({}).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getNewsInCategory = (root, { page, slug }) => {

  return new Promise((resolve, reject) => {

    model.count({ category: slug }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: slug }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getOnePost = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllPosts = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.get5RecentPost = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).limit(5).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllPostsByCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.find({ category: slug }).sort({ created_at: -1 }).limit(5).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// get ( food )

module.exports.getFoodNews = (root, { page }) => {
  let listCategoryInNews = ['mon-ngon-tu-com', 'cach-lam-mon-ngon-tai-nha'];
  return new Promise((resolve, reject) => {
    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

// mutation

module.exports.newPost = (root, { category, slug, title, coverUrl, description, body, tags }) => {
  let data = {
    category,
    slug,
    title,
    coverUrl,
    description,
    body,
    tags
  };
  return new Promise((resolve, reject) => {
    model.create(data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostRelative = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.aggregate([{ "$sample": {
        size: 6
      } }]).exec((err, listPost) => {
      if (err) reject(err);else resolve(listPost);
    });
  });
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Post',
  description: 'Post object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    category: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    public: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    tags: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getProducts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getProducts',
      description: 'getProducts object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProducts
  },
  getOneProduct: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneProduct
  },
  getAllProduct: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllProduct
  },
  getAllProductsByCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllProductsByCategory
  },

  get5RecentProduct: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.get5RecentProduct
  },

  getProductRelative: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProductRelative
  }
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  category: { type: [], default: [] },
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, default: '' },
  price: { type: Number, default: 0 },
  donvi: { type: String, default: 'KG' },
  coverUrl: { type: String, default: '/assets/images/placeholders/848x480.png' },
  body: { type: String, default: '' },
  view: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Product', schema);

module.exports = model;

// get ( news )

module.exports.getProducts = (root, { page }) => {

  return new Promise((resolve, reject) => {
    model.count({}).exec((err, count) => {
      if (err) return reject(err);
      model.find({}).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getNewsInCategory = (root, { page, slug }) => {

  return new Promise((resolve, reject) => {

    model.count({ category: slug }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: slug }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.productByCategory = (root, { page, slug }) => {

  return new Promise((resolve, reject) => {

    model.count({ category: slug }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: slug }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getOneProduct = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllProduct = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.get5RecentProduct = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).limit(6).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllProductsByCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.find({ category: slug }).sort({ created_at: -1 }).limit(5).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// get ( food )

module.exports.getFoodNews = (root, { page }) => {
  let listCategoryInNews = ['mon-ngon-tu-com', 'cach-lam-mon-ngon-tai-nha'];
  return new Promise((resolve, reject) => {
    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

// mutation

module.exports.newPost = (root, { category, slug, title, coverUrl, description, body, tags }) => {
  let data = {
    category,
    slug,
    title,
    coverUrl,
    description,
    body,
    tags
  };
  return new Promise((resolve, reject) => {
    model.create(data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProductRelative = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.aggregate([{ "$sample": {
        size: 6
      } }]).exec((err, listPost) => {
      if (err) reject(err);else resolve(listPost);
    });
  });
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Product',
  description: 'Product object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    category: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    price: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    donvi: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOneProductCategory: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneProductCategory
  },
  getProductCategories: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProductCategories
  }
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  title: { type: String, default: '' },
  slug: { type: String, required: true, unique: true, index: true },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('ProductCategory', schema);

module.exports = model;

// get ( product )


module.exports.getOneProductCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProductCategories = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'ProductCategory',
  description: 'ProductCategory object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  seo: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      url: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getByUrl
  },
  allSeo: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllSeo
  }
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  url: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  og_title: { type: String, default: '' },
  og_image: { type: String, default: '' },
  og_description: { type: String, default: '' },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Seo', schema);

module.exports = model;

// get ( product )

module.exports.getByUrl = (root, { url }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ url: url }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllSeo = (root, { filter }) => {
  let query = {};
  if (filter) query.url = { $regex: new RegExp(filter, "ig") };
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Seo',
  description: 'Seo object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    url: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_image: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  setting: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getSetting
  }

});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

var schema = new mongoose.Schema({
  id: { type: String },
  ssr: { type: Boolean, default: true },
  css: { type: String, default: '' },
  adminId: { type: String, default: '100004231235930' },
  emailAdmin: { type: String, default: 'luanlv2591@gmail.com' },
  scriptTop: { type: String, default: '' },
  scriptBottom: { type: String, default: '' }
}, {
  collection: 'setting'
});

let model = mongoose.model('Setting', schema);

module.exports = model;

module.exports.getSetting = () => {
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.update = (root, { ssr }) => {
  let query = {};
  if (ssr !== undefined) query.ssr = ssr;
  return new Promise((resolve, reject) => {
    model.findOneAndUpdate({ id: 'setting' }, { $set: query }, { returnNewDocument: true, new: true }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Setting',
  description: 'Setting object',
  fields: () => ({
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    ssr: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    css: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptTop: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    adminId: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    emailAdmin: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptBottom: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  })
}));

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  users: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getListOfUsers
  }
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;
let findOrCreate = __webpack_require__(247);
let autoIncrement = __webpack_require__(67);
var bcrypt = __webpack_require__(230);

let UserSchema = new Schema({
  name: String,
  username: { type: String, default: 'abc@gmail.com' },
  uid: String,
  provider: String,
  accessToken: String,
  isAdmin: { type: Boolean, default: false },
  mustConfirmEmail: { type: Boolean, default: false },
  password: String,
  createAt: { type: Date, default: Date.now }
});

UserSchema.plugin(findOrCreate);

UserSchema.plugin(autoIncrement.plugin, 'User');

let User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserByEmail = function (username, callback) {
  User.find({ username: username }, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) console.log(err);
    callback(null, isMatch);
  });
};

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      User.create(newUser, callback);
    });
  });
};

module.exports.changePassword = function (email, password, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) throw err;
      console.log(hash);
      User.update({ username: email }, { $set: { password: hash } }, callback);
    });
  });
};

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);


// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  description: 'User object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    }
  })
}));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_image_queries__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_setting_queries__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_seo_queries__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_post_queries__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_category_queries__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user_queries__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_information_queries__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_product_queries__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_productCategory_queries__ = __webpack_require__(83);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */













const { listImage } = __WEBPACK_IMPORTED_MODULE_1__models_image_queries__["a" /* default */];
const { users } = __WEBPACK_IMPORTED_MODULE_6__models_user_queries__["a" /* default */];
const { setting } = __WEBPACK_IMPORTED_MODULE_2__models_setting_queries__["a" /* default */];
const { seo, allSeo } = __WEBPACK_IMPORTED_MODULE_3__models_seo_queries__["a" /* default */];
const { getPosts, getOnePost, getAllPosts, getPostRelative, get5RecentPost, getAllPostsByCategory } = __WEBPACK_IMPORTED_MODULE_4__models_post_queries__["a" /* default */];
const { getCategories, getOneCategory } = __WEBPACK_IMPORTED_MODULE_5__models_category_queries__["a" /* default */];
const { information } = __WEBPACK_IMPORTED_MODULE_7__models_information_queries__["a" /* default */];
const { getOneProduct, getProducts, getAllProduct, get5RecentProduct, getProductRelative, getAllProductsByCategory } = __WEBPACK_IMPORTED_MODULE_8__models_product_queries__["a" /* default */];
const { getOneProductCategory, getProductCategories } = __WEBPACK_IMPORTED_MODULE_9__models_productCategory_queries__["a" /* default */];

const schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      setting,
      listImage,
      seo,
      allSeo,
      getPosts,
      getOnePost,
      getAllPostsByCategory,
      getAllPosts,
      getPostRelative,
      get5RecentPost,
      getCategories,
      getOneCategory,
      users,
      information,
      getOneProduct,
      getProducts,
      getAllProduct,
      getAllProductsByCategory,
      getOneProductCategory,
      getProductCategories,
      get5RecentProduct,
      getProductRelative
    }
  })
});

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */






/**
 * Sign in with Facebook.
 */
__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_facebook__["Strategy"]({
  clientID: __WEBPACK_IMPORTED_MODULE_3__config___default.a.auth.facebook.id,
  clientSecret: __WEBPACK_IMPORTED_MODULE_3__config___default.a.auth.facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['displayName', 'name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const loginName = 'facebook';
  const claimType = 'urn:facebook:access_token';
  const fooBar = (() => {
    var _ref = _asyncToGenerator(function* () {
      if (req.user) {
        const userLogin = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */].findOne({
          attributes: ['name', 'key'],
          where: { name: loginName, key: profile.id }
        });
        if (userLogin) {
          // There is already a Facebook account that belongs to you.
          // Sign in with that account or delete it, then link it with your current account.
          done();
        } else {
          const user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
            id: req.user.id,
            email: profile._json.email,
            logins: [{ name: loginName, key: profile.id }],
            claims: [{ type: claimType, value: profile.id }],
            profile: {
              displayName: profile.displayName,
              gender: profile._json.gender,
              picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
            }
          }, {
            include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
          });
          done(null, {
            id: user.id,
            email: user.email
          });
        }
      } else {
        const users = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findAll({
          attributes: ['id', 'email'],
          where: { '$logins.name$': loginName, '$logins.key$': profile.id },
          include: [{
            attributes: ['name', 'key'],
            model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */],
            as: 'logins',
            required: true
          }]
        });
        if (users.length) {
          const user = users[0].get({ plain: true });
          done(null, user);
        } else {
          let user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findOne({ where: { email: profile._json.email } });
          if (user) {
            // There is already an account using this email address. Sign in to
            // that account and link it with Facebook manually from Account Settings.
            done(null);
          } else {
            user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
              email: profile._json.email,
              emailConfirmed: true,
              logins: [{ name: loginName, key: profile.id }],
              claims: [{ type: claimType, value: accessToken }],
              profile: {
                displayName: profile.displayName,
                gender: profile._json.gender,
                picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
              }
            }, {
              include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
            });
            done(null, {
              id: user.id,
              email: user.email
            });
          }
        }
      }
    });

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  })();

  fooBar().catch(done);
}));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function data(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */]:
      const data = action.payload.value;
      return _extends({}, state, {
        information: _extends({}, state.information, {
          value: data.information || state.information.value
        }),
        news: _extends({}, state.news, {
          value: data.news || state.news.value
        }),
        product: _extends({}, state.product, {
          value: data.product || state.product.value
        }),
        allNews: _extends({}, state.allNews, {
          value: data.allNews || state.allNews.value
        }),
        allProducts: _extends({}, state.allProducts, {
          value: data.allProducts || state.allProducts.value
        }),
        productRelative: _extends({}, state.productRelative, {
          value: data.productRelative || state.productRelative.value
        }),
        allNewsByCategory: _extends({}, state.allNewsByCategory, {
          value: data.allNewsByCategory || state.allNewsByCategory.value
        }),
        recentNews: _extends({}, state.recentNews, {
          value: data.recentNews || state.recentNews.value
        }),
        categories: _extends({}, state.categories, {
          value: data.categories || state.categories.value
        }),
        productCategories: _extends({}, state.productCategories, {
          value: data.productCategories || state.productCategories.value
        }),
        productByCategory: _extends({}, state.productByCategory, {
          value: data.productByCategory || state.productByCategory.value
        }),
        recentProduct: _extends({}, state.recentProduct, {
          value: data.recentProduct || state.recentProduct.value
        }),
        category: _extends({}, state.category, {
          value: data.category || state.category.value
        })
      });
    default:
      return state;
  }
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_3__setting__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* default */],
  loadingBar: __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__["loadingBarReducer"]
}));

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setting;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function setting(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_SETTING */]:
      return _extends({}, state, {
        ['ssr']: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(178);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(106);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('div', {
  id: 'breadCrumb',
  className: 'clearfix t-breadCrumb'
}, void 0, _jsx('div', {
  className: 'main clearfix'
}, void 0, _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('a', {
  href: '#',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'Trang ch\u1EE7'))), _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('span', {
  className: 'breadSep'
}, void 0, '>'), _jsx('a', {
  className: 'current',
  href: '#ve-chung-toi-sg1.html',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'V\u1EC1 ch\xFAng t\xF4i')))));

var _ref2 = _jsx('div', {
  className: 'clear'
});

var _ref3 = _jsx('div', {
  id: 'product_info'
}, void 0, _jsx('h2', {
  className: 'title-news title-sigle-left'
}, void 0, 'V\u1EC1 ch\xFAng t\xF4i'));

var _ref4 = _jsx('strong', {}, void 0, 'TH\xD4NG TIN LI\xCAN H\u1EC6 ');

var _ref5 = _jsx('strong', {}, void 0, 'B \u2013 GI\u1EDAI THI\u1EC6U CHUNG V\u1EC0 C\xD4NG TY');

var _ref6 = _jsx('strong', {}, void 0, 'm\xE1y l\u1ECDc n\u01B0\u1EDBc');

var _ref7 = _jsx('strong', {}, void 0, 'Ho\xE0ng Gia Kh\xE1nh');

var _ref8 = _jsx('strong', {}, void 0, 'm\xE1y l\u1ECDc n\u01B0\u1EDBc Ho\xE0ng Gia Kh\xE1nh');

var _ref9 = _jsx('strong', {}, void 0, 'm\xE1y l\u1ECDc n\u01B0\u1EDBc th\xF4ng minh iRO');

var _ref10 = _jsx('strong', {}, void 0, 'm\xE1y l\u1ECDc n\u01B0\u1EDBc t\u1ED1t nh\u1EA5t');

var _ref11 = _jsx('em', {}, void 0, 'Ngu\u1ED3n:', _jsx('a', {
  href: 'https://Ho\xE0ng Gia Kh\xE1nh.com',
  target: '_blank',
  title: 'Ho\xE0ng Gia Kh\xE1nh.com'
}, void 0, 'Ho\xE0ng Gia Kh\xE1nh.com'));

var _ref12 = _jsx('div', {
  className: 't-main_sidebar col-md-3'
}, void 0, _jsx('h3', {
  className: 'title-sigle-right'
}, void 0, 'Ho\xE0ng Gia Kh\xE1nh vi\u1EC7t nam'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#ve-chung-toi-sg1.html',
  title: 'V\u1EC1 ch\xFAng t\xF4i',
  className: 't-active'
}, void 0, 'V\u1EC1 ch\xFAng t\xF4i ')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#gia-tri-cot-loi-sg2.html',
  title: 'Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i'
}, void 0, 'Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#tam-nhin-va-su-menh-sg4.html',
  title: 'T\u1EA7m nh\xECn v\xE0 S\u1EE9 m\u1EC7nh'
}, void 0, 'T\u1EA7m nh\xECn v\xE0 S\u1EE9 m\u1EC7nh ')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#thanh-tich-dat-duoc-sg5.html',
  title: 'Th\xE0nh t\xEDch \u0111\u1EA1t \u0111\u01B0\u1EE3c'
}, void 0, 'Th\xE0nh t\xEDch \u0111\u1EA1t \u0111\u01B0\u1EE3c')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#ban-tin-Ho\xE0ng Gia Kh\xE1nh-cc5'
}, void 0, ' B\u1EA3n tin Ho\xE0ng Gia Kh\xE1nh'))));

function About(props) {

  const about = props.data.information.value.about;

  return _jsx('div', {}, void 0, _ref, _ref2, _jsx('div', {
    id: 'content_wrapper',
    className: 'product_layout product_detail_layout main clearfix'
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-md-9'
  }, void 0, _ref3, _jsx('div', {
    className: 'baiviet'
  }, void 0, _jsx('h2', {}, void 0, _jsx('span', {
    style: { fontSize: 14 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'A \u2013 ', _ref4))), _jsx('p', {}, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'C\xD4NG TY C\u1ED4 PH\u1EA6N Ho\xE0ng Gia Kh\xE1nh VI\u1EC6T NAM'))), _jsx('p', {}, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'Tr\u1EE5 s\u1EDF ch\xEDnh       :')), 'P803 - T\xF2a B2- Khu \u0111\xF4 th\u1ECB Ecopark - V\u0103n Giang - H\u01B0ng Y\xEAn '), _jsx('p', {}, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'Nh\xE0 m\xE1y             : Khu C\xF4ng nghi\u1EC7p B\xE1t Tr\xE0ng, Huy\u1EC7n Gia L\xE2m, TP. H\xE0 N\u1ED9i '))), _jsx('h2', {}, void 0, _jsx('span', {
    style: { fontSize: 14 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, _ref5))), _jsx('p', {
    style: { textAlign: 'justify' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'C\xF4ng Ty C\u1ED5 ph\u1EA7n Ho\xE0ng Gia Kh\xE1nh Vi\u1EC7t Nam ti\u1EC1n th\xE2n l\xE0 nh\xE0 nh\u1EADp kh\u1EA9u, l\u1EAFp r\xE1p v\xE0 ph\xE2n ph\u1ED1i ', _jsx('a', {
    href: '#may-loc-nuoc-28',
    target: '_blank',
    title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc'
  }, void 0, _jsx('span', {
    style: { color: '#0000ff' }
  }, void 0, _ref6)), ' cho nhi\u1EC1u \u0111\u01A1n v\u1ECB t\u1EA1i Vi\u1EC7t Nam. Nh\u1EDD th\u1EA5u hi\u1EC3u s\xE2u s\u1EAFc nhu c\u1EA7u c\u1EE7a kh\xE1ch h\xE0ng v\u1EC1 n\u01B0\u1EDBc s\u1EA1ch v\xE0 n\u01B0\u1EDBc tinh khi\u1EBFt, c\xF4ng ty C\u1ED5 ph\u1EA9n Ho\xE0ng Gia Kh\xE1nh Vi\u1EC7t Nam ra \u0111\u1EDDi nh\u1EB1m cung c\u1EA5p c\xE1c gi\u1EA3i ph\xE1p v\u1EC1 n\u01B0\u1EDBc nh\u1EB1m b\u1EA3o v\u1EC7 s\u1EE9c kh\u1ECFe cho c\u1ED9ng \u0111\u1ED3ng. K\u1EC3 t\u1EEB khi th\xE0nh l\u1EADp \u0111\u1EBFn nay, Ho\xE0ng Gia Kh\xE1nh \u0111\xE3 c\xF3 nh\u1EEFng b\u01B0\u1EDBc ph\xE1t tri\u1EC3n m\u1EA1nh m\u1EBD v\xE0 kh\u1EB3ng \u0111\u1ECBnh \u0111\u01B0\u1EE3c v\u1ECB th\u1EBF c\u1EE7a m\xECnh t\u1EA1i Vi\u1EC7t Nam v\xE0 v\u01B0\u01A1n t\u1EA7m qu\u1ED1c t\u1EBF nh\u1EDD nh\u1EEFng chi\u1EBFn l\u01B0\u1EE3c \u0111\u1ECBnh h\u01B0\u1EDBng \u0111\xFAng \u0111\u1EAFn t\u1EEB ph\xEDa Ban l\xE3nh \u0111\u1EA1o v\xE0 T\u1EADp \u0111o\xE0n.'))), _jsx('p', {
    style: { textAlign: 'justify' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, '\u0110\u1EBFn nay, ', _ref7, ' \u0111\xE3 c\xF3 \u0111\u1ED9i ng\u0169 g\u1EA7n 500 nh\xE2n s\u1EF1 t\xE0i n\u0103ng v\xE0 nhi\u1EC7t huy\u1EBFt, th\u01B0\u1EDDng xuy\xEAn \u0111\u01B0\u1EE3c b\u1ED3i d\u01B0\u1EE1ng kh\u1EA3 n\u0103ng chuy\xEAn m\xF4n c\u0169ng nh\u01B0 c\xE1c k\u1EF9 n\u0103ng kh\xE1c \u0111\u1EC3 \u0111\xE1p \u1EE9ng t\u1ED1t nh\u1EA5t m\u1ECDi c\xF4ng vi\u1EC7c. H\u1EC7 th\u1ED1ng s\u1EA3n xu\u1EA5t \u0111\u01B0\u1EE3c k\u1EBFt h\u1EE3p t\u1EF1 \u0111\u1ED9ng cao, tr\xEAn d\xE2y chuy\u1EC1n hi\u1EC7n \u0111\u1EA1i. L\u1EF1c l\u01B0\u1EE3ng k\u1EF9 s\u01B0, c\xF4ng nh\xE2n chuy\xEAn nghi\u1EC7p, c\xF3 ki\u1EBFn th\u1EE9c chuy\xEAn s\xE2u v\u1EC1 s\u1EA3n ph\u1EA9m v\xE0 \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o n\xE2ng cao v\u1EC1 chuy\xEAn m\xF4n nh\u1EB1m \u0111\xE1p \u1EE9ng m\u1ECDi y\xEAu c\u1EA7u s\u1EA3n xu\u1EA5t cho d\xF9 l\xE0 kh\u1EAFt khe nh\u1EA5t. H\u1EC7 th\u1ED1ng nh\xE0 x\u01B0\u1EDFng, kho b\xE3i v\xE0 ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn chuy\u1EC3n hi\u1EC7n \u0111\u1EA1i, c\xF3 quy m\xF4 \u0111\xE1p \u1EE9ng nhu c\u1EA7u s\u1EA3n xu\u1EA5t, l\u01B0u kho v\xE0 v\u1EADn chuy\u1EC3n cho th\u1ECB tr\u01B0\u1EDDng to\xE0n qu\u1ED1c.'))), _jsx('p', {
    style: { textAlign: 'justify' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'S\u1EA3n ph\u1EA9m ', _ref8, ' \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng nh\u1EEFng linh ki\u1EC7n t\u1ED1t nh\u1EA5t hi\u1EC7n nay. \u0110\u1EB7c bi\u1EC7t Ho\xE0ng Gia Kh\xE1nh Vi\u1EC7t Nam l\xE0 \u0111\u1ED1i t\xE1c ch\xEDnh th\u1EE9c v\xE0 duy nh\u1EA5t t\u1EA1i Vi\u1EC7t Nam \u0111\u01B0\u1EE3c Dow Chemicals trong chi\u1EBFn l\u01B0\u1EE3c \u0111\u1EA9y m\u1EA1nh th\u01B0\u01A1ng hi\u1EC7u to\xE0n c\u1EA7u c\u1EE7a h\xE3ng cho s\u1EA3n ph\u1EA9m m\xE0ng RO Filmtec. V\u1EDBi ph\u01B0\u01A1ng ch\xE2m lu\xF4n \u0111i ti\xEAn phong trong c\xF4ng ngh\u1EC7, Ho\xE0ng Gia Kh\xE1nh \u0111\xE3 cho ra \u0111\u1EDDi d\xF2ng ', _ref9, ' v\u1EDBi b\u1ED9 vi x\u1EED l\xFD th\xF4ng minh - \u0111\xE2y l\xE0 ph\xE1t minh \u0111\u1ED9t ph\xE1 l\u1EA7n \u0111\u1EA7u ti\xEAn xu\u1EA5t hi\u1EC7n t\u1EA1i Vi\u1EC7t Nam.'))), _jsx('p', {
    style: { textAlign: 'justify' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'Trung t\xE2m d\u1ECBch v\u1EE5 kh\xE1ch h\xE0ng c\u1EE7a Ho\xE0ng Gia Kh\xE1nh \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng \u0111\u1EA3m b\u1EA3o quy chu\u1EA9n qu\u1ED1c t\u1EBF. D\u1ECBch v\u1EE5 ch\u0103m s\xF3c kh\xE1ch h\xE0ng lu\xF4n \u0111\u01B0\u1EE3c ch\xFA tr\u1ECDng, \u0111\u1EA3m b\u1EA3o ti\xEAu ch\xED Ch\u1EA5t l\u01B0\u1EE3ng \u2013 Uy t\xEDn \u2013 T\u1EADn t\xE2m nh\u1EB1m ph\u1EE5c v\u1EE5 kh\xE1ch h\xE0ng m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i, m\u1ED9t c\xE1ch linh ho\u1EA1t v\xE0 k\u1ECBp th\u1EDDi nh\u1EA5t.'))), _jsx('p', {
    style: { textAlign: 'justify' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, 'T\xEDnh th\u1EDDi \u0111i\u1EC3m hi\u1EC7n t\u1EA1i ', _jsx('a', {
    href: '#may-loc-nuoc-nao-tot-nhat-cho-suc-khoe-bv1353.html',
    target: '_blank',
    title: 'M\xE1y l\u1ECDc n\u01B0\u1EDBc t\u1ED1t'
  }, void 0, _jsx('span', {
    style: { color: '#0000ff' }
  }, void 0, _ref10)), ' c\u1EE7a Ho\xE0ng Gia Kh\xE1nh \u0111\xE3 c\xF3 m\u1EB7t t\u1EA1i 3000 \u0111i\u1EC3m b\u1EA3n l\u1EBB v\xE0 ph\u1EE7 r\u1ED9ng tr\xEAn tr\xEAn to\xE0n qu\u1ED1c. S\u1EA3n ph\u1EA9m \u0111\u01B0\u1EE3c xu\u1EA5t kh\u1EA9u r\u1ED9ng r\xE3i ra th\u1ECB tr\u01B0\u1EDDng qu\u1ED1c t\u1EBF (Trung Qu\u1ED1c, Campuchia, L\xE0o, Myanmar, Trung \u0110\xF4ng, M\u1EF9 Latinh\u2026)'))), _jsx('p', {
    style: { textAlign: 'right' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _jsx('span', {
    style: { fontFamily: 'arial,helvetica,sans-serif' }
  }, void 0, _ref11))))), _ref12)));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(105);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(104);
/* unused harmony reexport BreadCrumb */



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Hoàng Gia Khánh | Giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/gioi-thieu',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, about, services, common}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(103).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (About) {
        return {
          title,
          chunk: 'about',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(About, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_sticky__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



const { Header, Content, Footer, Sider } = __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"];
const SubMenu = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].SubMenu;





var _ref = _jsx('div', {
  className: 'logo'
});

var _ref2 = _jsx('div', {
  className: 'admin-topSlide'
}, void 0, _jsx('span', {}, void 0, 'ADMIN'));

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Dashboard', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'layout'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'Dashboard'))));

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Seo', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/seo/'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'layout'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'SEO'))));

var _ref5 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'Danh m\u1EE5c'))
}, 'danhmuc', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/category?v=list'
}, void 0, 'Danh s\xE1ch danh m\u1EE5c')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/category?v=add'
}, void 0, 'Th\xEAm m\u1EDBi danh m\u1EE5c')));

var _ref6 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'B\xE0i vi\u1EBFt'))
}, 'baiviet', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/news?v=list'
}, void 0, 'Danh s\xE1ch b\xE0i vi\u1EBFt')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/news?v=add'
}, void 0, 'Th\xEAm m\u1EDBi b\xE0i vi\u1EBFt')));

var _ref7 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'Danh m\u1EE5c sp'))
}, 'danhmucsp', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'danhmucsp1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/productcategory?v=list'
}, void 0, 'C\xE1c danh m\u1EE5c sp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'danhmucsp2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/productcategory?v=add'
}, void 0, 'Th\xEAm m\u1EDBi danh m\u1EE5c sp')));

var _ref8 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'S\u1EA3n ph\u1EA9m'))
}, 'sanpham', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'sanpham1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/product?v=list'
}, void 0, 'Danh s\xE1ch s\u1EA3n ph\u1EA9m')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'sanpham2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/product?v=add'
}, void 0, 'Th\xEAm m\u1EDBi s\u1EA3n ph\u1EA9m')));

var _ref9 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Library', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/library'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'appstore-o'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'Th\u01B0 vi\u1EC7n \u1EA3nh'))));

var _ref10 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Setting', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/setting'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'C\xE0i \u0111\u1EB7t'))));

var _ref11 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Logout', _jsx('a', {
  href: '/auth/logout'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, '\u0110\u0103ng xu\u1EA5t'))));

var _ref12 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item, {}, void 0, 'Admin');

var _ref13 = _jsx('a', {
  href: 'http://thunderduck.com.vn'
}, void 0, 'Thunder Duck');

class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.onCollapse = collapsed => {
      this.setState({
        collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      });
    };

    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    this.state = {
      name: this.props.name,
      collapsed: false,
      mode: 'inline'
    };
  }

  render() {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["LocaleProvider"], {
      locale: __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default.a
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Layout"], {}, void 0, _jsx(Sider, {
      collapsible: true,
      breakpoint: 'lg',
      collapsedWidth: '0',
      collapsed: this.state.collapsed,
      onCollapse: this.onCollapse,
      width: '170'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"], {
      theme: 'dark',
      mode: this.state.mode,
      selectedKeys: [this.props.name],
      defaultOpenKeys: []
    }, void 0, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11)), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Layout"], {}, void 0, _jsx(Header, {
      style: { height: 47, background: 'white', padding: 0 }
    }, void 0), _jsx(Content, {
      style: { margin: '0 5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"], {
      style: { margin: '12px 0' }
    }, void 0, _ref12, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item, {}, void 0, this.state.name)), _jsx('div', {
      style: { background: '#fff', minHeight: 500 }
    }, void 0, this.props.children)), _jsx(Footer, {
      style: { textAlign: 'center' }
    }, void 0, 'Admin Page \xA9 Created by ', _ref13))));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_avatar_editor__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var _ref = _jsx('br', {});

var _ref2 = _jsx('b', {}, void 0, 'N\u1EC1n (Kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn \u1EA3nh):');

var _ref3 = _jsx('br', {});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'transparent'
}, void 0, 'Trong su\u1ED1t');

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'red'
}, void 0, 'N\u1EC1n \u0111\u1ECF');

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'blue'
}, void 0, 'N\u1EC1n xanh da tr\u1EDDi');

var _ref7 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'green'
}, void 0, 'N\u1EC1n xanh l\xE1 c\xE2y');

var _ref8 = _jsx('br', {});

var _ref9 = _jsx('br', {});

var _ref10 = _jsx('b', {}, void 0, 'T\u1EF7 l\u1EC7:');

var _ref11 = _jsx('br', {});

var _ref12 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'keepOld'
}, void 0, 'Nh\u01B0 \u1EA3nh c\u0169');

var _ref13 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'custom'
}, void 0, 'T\u1EF1 do');

var _ref14 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: '4-3'
}, void 0, '4/3');

var _ref15 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: '1-1'
}, void 0, '1/1');

var _ref16 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: '3-4'
}, void 0, '3/4');

var _ref17 = _jsx('br', {});

var _ref18 = _jsx('br', {});

var _ref19 = _jsx('b', {}, void 0, 'Chi\u1EC1u d\xE0i:');

var _ref20 = _jsx('br', {});

var _ref21 = _jsx('br', {});

var _ref22 = _jsx('b', {}, void 0, 'Chi\u1EC1u r\u1ED9ng:');

var _ref23 = _jsx('br', {});

var _ref24 = _jsx('br', {});

var _ref25 = _jsx('b', {}, void 0, 'Quay \u1EA3nh:');

var _ref26 = _jsx('br', {});

var _ref27 = _jsx('b', {}, void 0, '\u0110\xE8 \u1EA3nh c\u0169: ');

var _ref28 = _jsx('br', {});

var _ref29 = _jsx('br', {});

class ImageEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSave = data => {
      let that = this;
      const img = this.editor.getImageScaledToCanvas().toDataURL();
      const rect = this.editor.getCroppingRect();
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/upload/imageEditor', {
        override: this.state.override,
        name: this.state.name,
        slug: this.state.slug,
        img: img
      }).then(function (res) {
        that.props.handleOk();
      }).catch(function (err) {
        console.log(err);
      });
    };

    this.handleScale = value => {
      const scale = value;
      this.setState({ scale });
    };

    this.rotateLeft = e => {
      e.preventDefault();

      this.setState({
        rotate: this.state.rotate - 90
      });
    };

    this.rotateRight = e => {
      e.preventDefault();
      this.setState({
        rotate: this.state.rotate + 90
      });
    };

    this.handleBorderRadius = e => {
      const borderRadius = parseInt(e.target.value);
      this.setState({ borderRadius });
    };

    this.handleXPosition = value => {
      const x = value;
      this.setState({ position: _extends({}, this.state.position, { x }) });
    };

    this.handleYPosition = value => {
      const y = value;
      this.setState({ position: _extends({}, this.state.position, { y }) });
    };

    this.handleWidth = e => {
      const width = parseInt(e.target.value);
      this.setState({ width });
    };

    this.handleHeight = e => {
      console.log(e);
      const height = parseInt(e.target.value);
      this.setState({ height });
    };

    this.setEditorRef = editor => {
      if (editor) this.editor = editor;
    };

    this.handlePositionChange = position => {
      console.log('Position set to', position);
      this.setState({ position });
    };

    this.state = {
      slug: this.props.slug || '',
      name: this.props.name || '',
      imageRef: this.props.imageRef || '',
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      rate: 'keepOld',
      borderRadius: 0,
      preview: null,
      width: this.props.width || 200,
      initWidth: this.props.width || 200,
      height: this.props.height || 200,
      initHeight: this.props.height || 200,
      override: true,
      background: 'transparent'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prev => {
      return _extends({}, prev, {
        imageRef: nextProps.imageRef || '',
        width: this.props.width || 200,
        initWidth: this.props.width || 200,
        height: this.props.height || 200,
        initHeight: this.props.height || 200
      });
    });
  }

  logCallback(e) {
    console.log('callback', e);
  }

  heightWithRate(width, height) {
    if (this.state.rate === 'keepOld') {
      return Math.round(width * this.state.initHeight / this.state.initWidth);
    } else if (this.state.rate === 'custom') {
      return height;
    } else if (this.state.rate === '4-3') {
      return Math.round(width * 3 / 4);
    } else if (this.state.rate === '1-1') {
      return width;
    } else if (this.state.rate === '3-4') {
      return Math.round(width * 4 / 3);
    }
    return height;
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      xs: 12,
      style: { padding: 15 }
    }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_avatar_editor___default.a, {
      style: { background: this.state.background },
      ref: this.setEditorRef,
      scale: parseFloat(this.state.scale),
      width: this.state.width,
      height: this.heightWithRate(this.state.width, this.state.height),
      position: this.state.position,
      onPositionChange: this.handlePositionChange,
      rotate: parseFloat(this.state.rotate),
      borderRadius: this.state.borderRadius,
      onSave: this.handleSave,
      onLoadFailure: this.logCallback.bind(this, 'onLoadFailed'),
      onLoadSuccess: this.logCallback.bind(this, 'onLoadSuccess'),
      onImageReady: this.logCallback.bind(this, 'onImageReady'),
      onImageLoad: this.logCallback.bind(this, 'onImageLoad'),
      onDropFile: this.logCallback.bind(this, 'onDropFile'),
      image: this.state.imageRef
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      xs: 12
    }, void 0, _jsx('b', {}, void 0, 'T\u1EF7 l\u1EC7 ph\xF3ng to (', _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.scale, ')'), ':'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Slider"], {
      name: 'scale',
      type: 'range',
      min: 1,
      max: 5,
      step: 0.01,
      onChange: this.handleScale,
      defaultValue: 1
    }), _ref, _ref2, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group, {
      value: this.state.background,
      onChange: e => {
        this.setState(prev => {
          return {
            prev,
            background: e.target.value
          };
        });
      }
    }, void 0, _ref4, _ref5, _ref6, _ref7), _ref8, _ref9, _ref10, _ref11, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group, {
      value: this.state.rate,
      onChange: value => {
        this.setState(prev => {
          return {
            prev,
            rate: value.target.value
          };
        });
      }
    }, void 0, _ref12, _ref13, _ref14, _ref15, _ref16), _ref17, _ref18, _ref19, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      name: 'width',
      type: 'number',
      onChange: this.handleWidth,
      min: '50',
      max: '400',
      step: '10',
      value: this.state.width
    }), _ref20, _ref21, _ref22, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      disabled: this.state.rate !== 'custom',
      name: 'height',
      type: 'number',
      onChange: this.handleHeight,
      min: '50',
      max: '400',
      step: '10',
      value: this.heightWithRate(this.state.width, this.state.height)
    }), _ref23, _ref24, _ref25, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: this.rotateLeft
    }, void 0, 'Quay tr\xE1i'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: this.rotateRight
    }, void 0, 'Quay ph\u1EA3i')), _ref26, _ref27, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], {
      checked: this.state.override,
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            override: !prev.override
          });
        });
      }
    }), _ref28, _ref29, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"], {
      placement: 'right',
      onConfirm: this.handleSave,
      okText: '\u0110\u1ED3ng \xFD',
      cancelText: 'H\u1EE7y'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary'
    }, void 0, this.state.override ? 'Thay thế ảnh cũ' : 'Thêm ảnh mới')))));
    console.log(parseFloat(this.state.scale));
  }
}

class ImageWithRect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.setCanvas = this.setCanvas.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  componentDidMount() {
    this.redraw();
  }

  componentDidUpdate() {
    this.redraw();
  }

  setCanvas(canvas) {
    if (canvas) this.canvas = canvas;
  }

  handleImageLoad() {
    const ctx = this.canvas.getContext('2d');
    const { rect, width, height } = this.props;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'red';

    if (rect && (rect.width > 1 || rect.height > 1)) {
      ctx.drawImage(this.imgElement, Math.round(-rect.x * (width / rect.width)), Math.round(-rect.y * (height / rect.height)), Math.round(width / rect.width), Math.round(height / rect.height));

      if (rect) {
        ctx.strokeRect(1, 1, Math.round(width) - 2, Math.round(height) - 2);
      }
    } else {
      ctx.drawImage(this.imgElement, 0, 0, width, height);

      if (rect) {
        ctx.strokeRect(Math.round(rect.x * width) + 0.5, Math.round(rect.y * height) + 0.5, Math.round(rect.width * width), Math.round(rect.height * height));
      }
    }
  }

  redraw() {
    const img = new Image();

    img.src = this.props.image;
    img.onload = this.handleImageLoad;
    this.imgElement = img;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', {
      ref: this.setCanvas,
      style: this.props.style,
      width: this.props.width,
      height: this.props.height
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageEditor);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(17);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(19);





if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

var _ref = _jsx('b', {}, void 0, 'Title: ');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('b', {}, void 0, 'Title: ');

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('b', {}, void 0, 'Title: ');

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('b', {}, void 0, 'Slug: ');

var _ref8 = _jsx('br', {});

var _ref9 = _jsx('b', {}, void 0, 'Body : ');

var _ref10 = _jsx('br', {});

var _ref11 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 1:'));

var _ref12 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 2:'));

var _ref13 = _jsx('b', {}, void 0, 'Title: ');

var _ref14 = _jsx('br', {});

var _ref15 = _jsx('b', {}, void 0, 'Slug: ');

var _ref16 = _jsx('br', {});

var _ref17 = _jsx('b', {}, void 0, 'Body : ');

var _ref18 = _jsx('br', {});

var _ref19 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 1:'));

var _ref20 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 2:'));

var _ref21 = _jsx('b', {}, void 0, 'Title: ');

var _ref22 = _jsx('br', {});

var _ref23 = _jsx('b', {}, void 0, 'Slug: ');

var _ref24 = _jsx('br', {});

var _ref25 = _jsx('b', {}, void 0, 'Body : ');

var _ref26 = _jsx('br', {});

var _ref27 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 1:'));

var _ref28 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 2:'));

var _ref29 = _jsx('b', {}, void 0, 'Title: ');

var _ref30 = _jsx('br', {});

var _ref31 = _jsx('b', {}, void 0, 'Slug: ');

var _ref32 = _jsx('br', {});

var _ref33 = _jsx('b', {}, void 0, 'Body : ');

var _ref34 = _jsx('br', {});

var _ref35 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 1:'));

var _ref36 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 2:'));

var _ref37 = _jsx('b', {}, void 0, 'Title: ');

var _ref38 = _jsx('br', {});

var _ref39 = _jsx('b', {}, void 0, 'Slug: ');

var _ref40 = _jsx('br', {});

var _ref41 = _jsx('b', {}, void 0, 'Body : ');

var _ref42 = _jsx('br', {});

var _ref43 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 1:'));

var _ref44 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 2:'));

var _ref45 = _jsx('b', {}, void 0, 'Title: ');

var _ref46 = _jsx('br', {});

var _ref47 = _jsx('b', {}, void 0, 'Slug: ');

var _ref48 = _jsx('br', {});

var _ref49 = _jsx('b', {}, void 0, 'Body : ');

var _ref50 = _jsx('br', {});

var _ref51 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 1:'));

var _ref52 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 2:'));

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      allService: {},
      data: {},
      showModalSelectImage: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{id, about, services, common, home, contact, tracking, allService}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        allService: data.information.allService,
        services: data.information.services
      });
      // this.setState({
      //   services: data.information.services
      // })
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, this.state.allService.title !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.allService.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            allService: _extends({}, prev.allService, {
              title: value
            })
          });
        });
      }
    })), this.state.allService.description !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.allService.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            allService: _extends({}, prev.allService, {
              description: value
            })
          });
        });
      }
    })), this.state.services && _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, this.state.services && this.state.services.groundtransport && _jsx(Panel, {
      header: 'Service 1 (Ground Transport)'
    }, 'service1', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.groundtransport.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              groundtransport: _extends({}, prev.services.groundtransport, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref7, _ref8, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.groundtransport.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              groundtransport: _extends({}, prev.services.groundtransport, {
                slug: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref9, _ref10, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.services.groundtransport.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              groundtransport: _extends({}, prev.services.groundtransport, {
                body: value,
                description: jQuery(value).text().slice(0, 250)
              })
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref11, this.state.services.groundtransport.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('groundtransport1')
    }, void 0, _jsx('img', {
      src: this.state.services.groundtransport.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('groundtransport1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.groundtransport.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              groundtransport: _extends({}, prevState.groundtransport, {
                img1: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref12, this.state.services.groundtransport.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('groundtransport2')
    }, void 0, _jsx('img', {
      src: this.state.services.groundtransport.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('groundtransport2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.groundtransport.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              groundtransport: _extends({}, prevState.groundtransport, {
                img2: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Service 2 (Cargo)'
    }, 'service2', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref13, _ref14, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.cargo.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              cargo: _extends({}, prev.services.cargo, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref15, _ref16, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.cargo.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              cargo: _extends({}, prev.services.cargo, {
                slug: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref17, _ref18, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.services.cargo.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              cargo: _extends({}, prev.services.cargo, {
                body: value,
                description: jQuery(value).text().slice(0, 250)
              })
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref19, this.state.services.cargo.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cargo1')
    }, void 0, _jsx('img', {
      src: this.state.services.cargo.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cargo1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.cargo.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              cargo: _extends({}, prevState.cargo, {
                img1: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref20, this.state.services.cargo.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cargo2')
    }, void 0, _jsx('img', {
      src: this.state.services.cargo.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cargo2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.cargo.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              cargo: _extends({}, prevState.cargo, {
                img2: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Service 3 (warehousing)'
    }, 'service3', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref21, _ref22, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.warehousing.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              warehousing: _extends({}, prev.services.warehousing, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref23, _ref24, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.warehousing.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              warehousing: _extends({}, prev.services.warehousing, {
                slug: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref25, _ref26, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.services.warehousing.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              warehousing: _extends({}, prev.services.warehousing, {
                body: value,
                description: jQuery(value).text().slice(0, 250)
              })
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref27, this.state.services.warehousing.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('warehousing1')
    }, void 0, _jsx('img', {
      src: this.state.services.warehousing.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('warehousing1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.warehousing.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              warehousing: _extends({}, prevState.warehousing, {
                img1: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref28, this.state.services.warehousing.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('warehousing2')
    }, void 0, _jsx('img', {
      src: this.state.services.warehousing.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('warehousing2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.warehousing.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              warehousing: _extends({}, prevState.warehousing, {
                img2: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, this.state.services && this.state.services.logisticservice && _jsx(Panel, {
      header: 'Service 4 (Logistic Service)'
    }, 'service4', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref29, _ref30, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.logisticservice.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              logisticservice: _extends({}, prev.services.logisticservice, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref31, _ref32, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.logisticservice.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              logisticservice: _extends({}, prev.services.logisticservice, {
                slug: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref33, _ref34, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.services.logisticservice.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              logisticservice: _extends({}, prev.services.logisticservice, {
                body: value,
                description: jQuery(value).text().slice(0, 250)
              })
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref35, this.state.services.logisticservice.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('logisticservice1')
    }, void 0, _jsx('img', {
      src: this.state.services.logisticservice.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('logisticservice1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.logisticservice.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              logisticservice: _extends({}, prevState.logisticservice, {
                img1: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref36, this.state.services.logisticservice.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('logisticservice2')
    }, void 0, _jsx('img', {
      src: this.state.services.logisticservice.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('logisticservice2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.logisticservice.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              logisticservice: _extends({}, prevState.logisticservice, {
                img2: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Service  5 (Tracking Service)'
    }, 'service5', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref37, _ref38, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.trackingservice.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              trackingservice: _extends({}, prev.services.trackingservice, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref39, _ref40, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.trackingservice.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              trackingservice: _extends({}, prev.services.trackingservice, {
                slug: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref41, _ref42, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.services.trackingservice.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              trackingservice: _extends({}, prev.services.trackingservice, {
                body: value,
                description: jQuery(value).text().slice(0, 250)
              })
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref43, this.state.services.trackingservice.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('trackingservice1')
    }, void 0, _jsx('img', {
      src: this.state.services.trackingservice.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('trackingservice1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.trackingservice.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              trackingservice: _extends({}, prevState.trackingservice, {
                img1: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref44, this.state.services.trackingservice.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('trackingservice2')
    }, void 0, _jsx('img', {
      src: this.state.services.trackingservice.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('trackingservice2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.trackingservice.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              trackingservice: _extends({}, prevState.trackingservice, {
                img2: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Service 6 (storage)'
    }, 'service6', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref45, _ref46, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.storage.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              storage: _extends({}, prev.services.storage, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref47, _ref48, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.services.storage.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              storage: _extends({}, prev.services.storage, {
                slug: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref49, _ref50, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.services.storage.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            services: _extends({}, prev.services, {
              storage: _extends({}, prev.services.storage, {
                body: value,
                description: jQuery(value).text().slice(0, 250)
              })
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref51, this.state.services.storage.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('storage1')
    }, void 0, _jsx('img', {
      src: this.state.services.storage.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('storage1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.storage.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              storage: _extends({}, prevState.storage, {
                img1: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), this.state.services.storage.img2 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref52, this.state.services.storage.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('storage2')
    }, void 0, _jsx('img', {
      src: this.state.services.storage.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('storage2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.services.storage.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            services: _extends({}, prevState.services, {
              storage: _extends({}, prevState.storage, {
                img2: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh '))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({
          allService: this.state.allService,
          services: this.state.services
        });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'groundtransport1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            groundtransport: _extends({}, prevState.services.groundtransport, {
              img1: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'groundtransport2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            groundtransport: _extends({}, prevState.services.groundtransport, {
              img2: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'cargo1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            cargo: _extends({}, prevState.services.cargo, {
              img1: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'cargo2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            cargo: _extends({}, prevState.services.cargo, {
              img2: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'logisticservice1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            logisticservice: _extends({}, prevState.services.logisticservice, {
              img1: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'logisticservice2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            logisticservice: _extends({}, prevState.services.logisticservice, {
              img2: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'trackingservice1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            trackingservice: _extends({}, prevState.services.trackingservice, {
              img1: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'trackingservice2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            trackingservice: _extends({}, prevState.services.trackingservice, {
              img2: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'warehousing1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            warehousing: _extends({}, prevState.services.warehousing, {
              img1: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'warehousing2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            warehousing: _extends({}, prevState.services.warehousing, {
              img2: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'storage1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            storage: _extends({}, prevState.services.storage, {
              img1: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'storage2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          services: _extends({}, prevState.services, {
            storage: _extends({}, prevState.services.storage, {
              img2: '/image/' + img.name
            })
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Trang dịch vụ';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/cacdichvu',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.AllService, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(_jsx(Option, {}, i.toString(36) + i, i.toString(36) + i + ' value'));
}

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneCategory(slug: "' + slug + '"){slug, title, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneCategory
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/category/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push({
        pathname: '/admin/category',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/category/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }
    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.updateNews(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.addNews(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 24,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      defaultValue: this.state.data.title,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value,
              slug: newSlug()
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    })))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getCategories{title, slug, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getCategories
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/category?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/category/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Danh muc bài viết';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/category',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/category?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {

          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.ListCategories, {
            title: title
          }));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditCategory, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          console.log(query);
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditCategory, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Admin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders || []
    };
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0));
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {}, void 0, 'G\u1ECDi \u0111i\u1EC7n');

const columns = [{
  title: 'Thời gian đặt hàng',
  dataIndex: 'created_at',
  key: 'created_at',
  render: text => _jsx('span', {}, void 0, _jsx('span', {
    style: { color: 'blue' }
  }, void 0, __WEBPACK_IMPORTED_MODULE_2_moment___default()(text).format('LT')), ', ', _jsx('b', {}, void 0, __WEBPACK_IMPORTED_MODULE_2_moment___default()(text).format('L')))
}, {
  title: 'Tên',
  dataIndex: 'name',
  key: 'name',
  render: text => _jsx('span', {}, void 0, text)
}, {
  title: 'Số điện thoại',
  dataIndex: 'phone',
  key: 'phone',
  render: text => _jsx('span', {}, void 0, _jsx('a', {
    href: "tel:" + text
  }, void 0, _ref), ' ', text)
}, {
  title: 'Số lượng (kg)',
  dataIndex: 'quantity',
  key: 'quantity',
  render: text => _jsx('span', {}, void 0, text)
}, {
  title: 'Sản phẩm',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, mapProduct(record.product))
}, {
  title: 'Địa chỉ',
  dataIndex: 'address',
  key: 'address',
  render: text => _jsx('span', {}, void 0, text)
}];

function mapProduct(slug) {
  switch (slug) {
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng';
      break;
    case 'Chả Cốm':
      return 'Chả Cốm';
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì';
      break;
    default:
      return '';
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ query, fetch }) {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {}, void 0, _jsx(Admin.Dashboard, {}))
        };
      });
    })();
  }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import {Tag, Input, Tooltip, Button, DatePicker, Select} from 'antd';
// import ColorPic from '../Components/ColorPicker'
// import axios from 'axios';
var slug = __webpack_require__(45);
class EditorComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  componentDidMount() {}

  render() {
    return _jsx('div', {
      style: { width: 800, margin: '10px auto' }
    }, void 0);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditorComponent));

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(17);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(19);





if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

var _ref = _jsx('b', {}, void 0, 'Title: ');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('b', {}, void 0, 'Description :');

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('b', {}, void 0, 'Body : ');

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 1:'));

var _ref8 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh s\u1ED1 2:'));

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      data: {},
      showModalSelectImage: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{id, about, services, common, home, contact, tracking, allService}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        data: data.information.about
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, this.state.data.title !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value
            })
          });
        });
      }
    })), this.state.data.description !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              description: value
            })
          });
        });
      }
    })), this.state.data.body !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body: value
            })
          });
        });
      }
    })), this.state.data.img1 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref7, this.state.data.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('img1')
    }, void 0, _jsx('img', {
      src: this.state.data.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('img1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              img1: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), this.state.data.img2 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref8, this.state.data.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('img2')
    }, void 0, _jsx('img', {
      src: this.state.data.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('img2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              img2: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({ about: this.state.data });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'img1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            img1: '/image/' + img.name
          })
        });
      });
    } else if (this.state.selectImageType === 'img2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            img2: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/gioithieu',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.About, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// import Layout from '../../components/Layout';

const title = 'Admin Page';
const isAdmin = false;

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/admin',
  children: [__webpack_require__(116).default, __webpack_require__(122).default, __webpack_require__(139).default, __webpack_require__(145).default, __webpack_require__(111).default, __webpack_require__(119).default, __webpack_require__(143).default, __webpack_require__(124).default, __webpack_require__(141).default, __webpack_require__(114).default, __webpack_require__(126).default, __webpack_require__(129).default, __webpack_require__(137).default, __webpack_require__(132).default, __webpack_require__(135).default],
  action({ store, next, url }) {
    return _asyncToGenerator(function* () {
      let user = store.getState().user;
      if (user && url === '/admin/login') {
        return { redirect: '/admin' };
      }
      if (!user && url !== '/admin/login') {
        return { redirect: '/admin/login' };
      }
      const route = yield next();
      // Provide default values for title, description etc.
      route.title = `${route.title || 'Amdmin Page'}`;
      return route;
    })();
  }

});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageEditor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(255);



if (false) {
  message.config({
    top: 20,
    duration: 2.5
  });
}

const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

const text = 'Đồng ý?';

var _ref = _jsx('p', {
  className: 'ant-upload-drag-icon'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], {
  type: 'inbox'
}));

var _ref2 = _jsx('p', {
  className: 'ant-upload-text'
}, void 0, 'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.');

var _ref3 = _jsx('p', {
  className: 'ant-upload-hint'
}, void 0, 'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh');

var _ref4 = _jsx('img', {
  src: 'https://www.loadebar.com/images/template/load-more.png'
});

var _ref5 = _jsx('b', {}, void 0, 'T\xEAn t\u1EADp tin:');

var _ref6 = _jsx('b', {}, void 0, 'Lo\u1EA1i t\u1EADp tin:');

var _ref7 = _jsx('b', {}, void 0, '\u0110\xE3 t\u1EA3i l\xEAn v\xE0o l\xFAc:');

var _ref8 = _jsx('b', {}, void 0, 'Dung l\u01B0\u1EE3ng t\u1EC7p:');

var _ref9 = _jsx('b', {}, void 0, 'K\xEDch th\u01B0\u1EDBc:');

var _ref10 = _jsx('b', {}, void 0, 'Link :');

var _ref11 = _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
  type: 'primary'
}, void 0, 'Copy link \u1EA3nh');

var _ref12 = _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
  type: 'primary'
}, void 0, 'Gi\u1EA3m ch\u1EA5t l\u01B0\u1EE3ng \u1EA3nh');

var _ref13 = _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
  type: 'danger'
}, void 0, 'X\xF3a \u1EA3nh');

class Library extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      editImage: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {},
      vImg: '?v=' + new Date().getTime(),
      imageRef: null
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
      imageRef: null
    });
  }
  handleOkEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  handleCancelEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 16
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
      onClick: () => {
        this.setState((preState, curProps) => {
          return _extends({}, preState, {
            uploadArea: !preState.uploadArea
          });
        });
      }
    }, void 0, 'Th\xEAm \u1EA3nh')), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 8
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], {
      size: 'large',
      placeholder: 'Search by name',
      onChange: e => {
        let newInput = e.target.value;
        this.setState(prevState => {
          return _extends({}, prevState, {
            filter: newInput
          });
        });
        this.fetchImage(40, this.state.time);
      }
    }))), this.state.uploadArea && _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx('div', {
      style: { marginTop: 16, height: 180 }
    }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Dragger,
      _extends({}, props, {
        onChange: info => this.onChange(info),
        beforeUpload: this.beforeUpload
      }),
      _ref,
      _ref2,
      _ref3
    ))), _jsx('div', {
      style: { background: '#ECECEC' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {}, void 0, this.state.imgs.map((el, key) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
        className: 'padding-5'
      }, key, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
        bordered: false,
        className: 'imgWr',
        onClick: () => this.showModal(el)
      }, void 0, _jsx('img', {
        src: "/image/small/" + el.name + "?t=" + el.created_at
      })));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
    }, void 0, _ref4)))), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Modal"], {
      title: 'Basic Modal',
      visible: this.state.visible,
      onOk: e => this.handleOk(e),
      onCancel: e => this.handleCancel(e),
      width: '90%',
      maskClosable: true,
      className: 'img'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      lg: 12
    }, void 0, this.state.selectedImage.name && _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
      bordered: false,
      className: 'imgWr'
    }, void 0, _jsx('img', {
      src: "/image/" + this.state.selectedImage.name + this.state.vImg
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      lg: 12,
      className: 'padding-5'
    }, void 0, this.state.selectedImage.name && _jsx('div', {}, void 0, _ref5, ' ', this.state.selectedImage.name), this.state.selectedImage.type && _jsx('div', {}, void 0, _ref6, ' ', this.state.selectedImage.type), this.state.selectedImage.created_at && _jsx('div', {}, void 0, _ref7, ' ', this.state.selectedImage.created_at), !!this.state.selectedImage.fileSize && _jsx('div', {}, void 0, _ref8, ' ', this.state.selectedImage.fileSize, ' KB'), this.state.selectedImage.dimensions && _jsx('div', {}, void 0, _ref9, ' ', this.state.selectedImage.dimensions.width, ' \xD7 ', this.state.selectedImage.dimensions.height), _ref10, ' ', this.state.copied ? _jsx('span', {
      style: { color: 'red' }
    }, void 0, 'Copied !"') : _jsx('span', {
      style: { color: 'blue' }
    }, void 0, "/image/" + this.state.selectedImage.name), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard___default.a, {
      text: "/image/" + this.state.selectedImage.name,
      onCopy: () => {
        this.setState({ copied: true });
        setTimeout(() => {
          this.setState({ copied: false });
        }, 1000);
      }
    }, void 0, _ref11)), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"], {
      placement: 'right',
      title: text,
      onConfirm: () => {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/image/min/' + this.state.selectedImage.name, {}).then(res => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(_jsx('div', {}, void 0, '\u0110\xE3 gi\u1EA3m t\u1EEB ', _jsx('b', {
            style: { color: 'red' }
          }, void 0, Math.floor(res.data.oldSize).toLocaleString(), ' kB'), ' c\xF2n ', _jsx('b', {
            style: { color: 'blue' }
          }, void 0, Math.floor(res.data.newSize).toLocaleString(), ' kB')));
          this.setState(prev => {
            return _extends({}, prev, {
              vImg: '?v=' + new Date().getTime()
            });
          });
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
        });
      },
      okText: '\u0110\u1ED3ng \xFD',
      cancelText: 'H\u1EE7y'
    }, void 0, _ref12)), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        this.setState(prev => {
          return _extends({}, prev, {
            visible: false,
            editImage: true,
            imageRef: "/image/" + this.state.selectedImage.name + this.state.vImg
          });
        });
      }
    }, void 0, 'Ch\u1EC9nh s\u1EEDa \u1EA3nh n\xE0y')), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"], {
      placement: 'right',
      title: text,
      onConfirm: () => {
        console.log(' confirm');
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/image/delete', {
          slug: this.state.selectedImage.slug,
          name: this.state.selectedImage.name
        }).then(res => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success('Xóa thành công');
          let currentTime = new Date().toISOString();
          this.setState(prev => {
            return _extends({}, prev, {
              time: currentTime,
              editImage: false,
              visible: false
            });
          });
          this.fetchImage(40, currentTime);
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
        });
      },
      okText: '\u0110\u1ED3ng \xFD x\xF3a',
      cancelText: 'H\u1EE7y'
    }, void 0, _ref13))))), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Modal"], {
      title: 'Ch\u1EC9nh s\u1EEDa \u1EA3nh',
      visible: this.state.editImage,
      onOk: e => this.handleOkEditImage(e),
      onCancel: e => this.handleCancelEditImage(e),
      style: { top: 0 },
      width: '100%',
      maskClosable: true,
      className: 'img'
    }, void 0, this.state.imageRef && _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageEditor__["a" /* default */], {
      imageRef: this.state.imageRef,
      width: this.state.selectedImage.dimensions.width,
      height: this.state.selectedImage.dimensions.height,
      slug: this.state.selectedImage.slug,
      name: this.state.selectedImage.name,
      handleOk: () => {
        console.log('close modal !!');
        let currentTime = new Date().toISOString();
        this.setState(prev => {
          return _extends({}, prev, {
            time: currentTime,
            editImage: false,
            visible: false
          });
        });
        this.fetchImage(40, currentTime);
      }
    })));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import moment from 'moment'

const title = 'Library';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/library',

  action({ store, fetch }) {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Library, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_CustomEditor__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(19);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}



var _ref = _jsx('b', {}, void 0, 'Title: ');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('b', {}, void 0, 'Description: ');

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('b', {}, void 0, 'Headr Form: ');

var _ref6 = _jsx('br', {});

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{id, about, services, common, home, contact, tracking, allService}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        data: data.information.contact
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, this.state.data.title !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value
            })
          });
        });
      }
    })), this.state.data.description !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              description: value
            })
          });
        });
      }
    })), this.state.data.header !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.header,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              header: value
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Body Form'
    }, '2', this.state.data.body !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body: value
            })
          });
        });
      }
    }))), _jsx(Panel, {
      header: 'Widget'
    }, '3', this.state.data.widget !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(CodeMirror, {
      value: this.state.data.widget,
      onChange: value => this.setState(prev => {
        return _extends({}, prev, {
          data: _extends({}, prev.data, {
            widget: value
          })
        });
      })
    })))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({ contact: this.state.data });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')));
  }

  handleChange(value, target) {
    console.log(value);
    console.log(target);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/lienhe',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Contact, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const FormItem = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].Item;

var slug = __webpack_require__(45);

var _ref = _jsx('input', {
  type: 'text',
  id: 'username',
  name: 'username',
  placeholder: 'T\xEAn \u0111\u0103ng nh\u1EADp',
  className: 'ant-input'
});

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('input', {
  type: 'password',
  id: 'password',
  name: 'password',
  placeholder: 'M\u1EADt kh\u1EA9u',
  className: 'ant-input'
});

var _ref5 = _jsx('br', {});

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('button', {
  type: 'submit',
  className: 'ant-btn ant-btn-submit login-form-button'
}, void 0, _jsx('span', {}, void 0, '\u0110\u0103ng nh\u1EADp'));

class Login extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return _jsx('div', {}, void 0, _jsx('div', {
      style: { maxWidth: 400, paddingTop: 30, margin: '0 auto' }
    }, void 0, _jsx('h1', {
      style: { marginBottom: 20, textAlign: 'center' }
    }, void 0, '\u0110\u0103ng nh\u1EADp'), _jsx('form', {
      action: '/auth/login',
      method: 'GET',
      className: 'ant-form ant-form-horizontal login-form'
    }, void 0, _jsx('span', {
      className: 'ant-input-affix-wrapper'
    }, void 0, _jsx('span', {
      className: 'ant-input-prefix'
    }, void 0, _jsx('i', {
      className: 'anticon anticon-user',
      style: { fontSize: 13 }
    })), _ref), _ref2, _ref3, _jsx('span', {
      className: 'ant-input-affix-wrapper'
    }, void 0, _jsx('span', {
      className: 'ant-input-prefix'
    }, void 0, _jsx('i', {
      className: 'anticon anticon-lock',
      style: { fontSize: 13 }
    })), _ref4), _ref5, _ref6, _ref7)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Đăng nhập';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/login',

  action() {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.Login, {})
        };
      });
    })();
  }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__ = __webpack_require__(28);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Danh m\u1EE5c:'));

var _ref4 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

var _ref5 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'));

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);else this.init2();
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let categories = 'getCategories{title, slug, created_at}';
      let postBySlug = 'getOnePost(slug: "' + slug + '"){ coverUrl, category, slug, public, title, description, body, view, tags, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ ' + postBySlug + ',' + categories + ' }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOnePost,
          categories: data.getCategories
        });
      });
    })();
  }

  init2(slug) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let categories = 'getCategories{title, slug, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ ' + categories + ' }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this2.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          categories: data.getCategories
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }

    let listCategory = [];

    let allCategory = [];
    if (this.state.categories) allCategory = this.state.categories;

    allCategory.map(el => {
      listCategory.push(_jsx(Option, {}, el.slug, el.title));
    });

    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.updateNews(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.addNews(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(TabPane, {
      tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt'
    }, '1', _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      defaultValue: this.state.data.title,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value,
              slug: newSlug()
            })
          });
        });
      }
    })), this.state.categories && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Select"], {
      mode: 'multiple',
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn danh m\u1EE5c',
      defaultValue: this.state.data.category,
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              category: value
            })
          });
        });
      }
    }, void 0, listCategory)), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'M\xF4 t\u1EA3 ( ', this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.data.description.length) : _jsx('span', {
      style: { color: 'red' }
    }, void 0, this.state.data.description.length), ' /150) :')), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      type: 'textarea',
      autosize: { minRows: 2, maxRows: 10 },
      defaultValue: this.state.data.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              description: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref5, !this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.data.coverUrl
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              coverUrl: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(TabPane, {
      tab: 'N\u1ED9i dung'
    }, '2', _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx('div', {
      style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__["a" /* default */], {
      id: 1,
      value: this.state.data.body || '',
      onChange: value => {
        console.log(value);
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body: value
            })
          });
        });
      }
    }))))))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditNewsComponent));

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getPosts(1);
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getPosts(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getPosts(page:' + page + ' ){page,totalPage,data{coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      // console.log(data.getPosts)
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getPosts.page,
          totalPage: data.getPosts.totalPage,
          data: data.getPosts.data
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/news?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/api/post/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_5_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_5_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.ListNews, {
            title: title
          }));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditNews, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditNews, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__ = __webpack_require__(28);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\xEAn:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Danh m\u1EE5c:'));

var _ref4 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

var _ref5 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Gi\xE1 :'));

var _ref6 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'));

class EditComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);else this.init2();
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let categories = 'getProductCategories{title, slug, created_at}';
      let productBySlug = 'getOneProduct(slug: "' + slug + '"){ coverUrl, category, slug, title, body, price, view, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ ' + productBySlug + ',' + categories + ' }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneProduct,
          categories: data.getProductCategories
        });
      });
    })();
  }

  init2(slug) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let categories = 'getProductCategories{title, slug, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ ' + categories + ' }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this2.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          categories: data.getProductCategories
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/product/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__history__["a" /* default */].push({
        pathname: '/admin/product',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/product/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }

    let listCategory = [];

    let allCategory = [];
    if (this.state.categories) allCategory = this.state.categories;

    allCategory.map(el => {
      listCategory.push(_jsx(Option, {}, el.slug, el.title));
    });

    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.updateNews(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.addNews(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(TabPane, {
      tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt'
    }, '1', _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      placeholder: 'T\xEAn',
      defaultValue: this.state.data.title,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value,
              slug: newSlug()
            })
          });
        });
      }
    })), this.state.categories && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Select"], {
      mode: 'multiple',
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn danh m\u1EE5c',
      defaultValue: this.state.data.category,
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              category: value
            })
          });
        });
      }
    }, void 0, listCategory)), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref5, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["InputNumber"], {
      min: 0,
      formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      parser: value => value.replace(/(,*)/g, ''),
      style: { width: '100%' },
      placeholder: 'gi\xE1',
      defaultValue: this.state.data.price,
      onChange: value => {
        if (parseInt(value).isNaN) {
          value = 0;
        }
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              price: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref6, !this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.data.coverUrl
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              coverUrl: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(TabPane, {
      tab: 'N\u1ED9i dung'
    }, '2', _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx('div', {
      style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__["a" /* default */], {
      id: 1,
      value: this.state.data.body || '',
      onChange: value => {
        console.log(value);
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body: value
            })
          });
        });
      }
    }))))))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditComponent));

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class List extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getProducts(1);
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getProducts(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getProducts(page:' + page + ' ){page,totalPage,data{coverUrl, slug, title, body, view, price, created_at}}}'
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      // console.log(data.getProducts)
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getProducts.page,
          totalPage: data.getProducts.totalPage,
          data: data.getProducts.data
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Giá',
  dataIndex: 'price',
  key: 'price'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/product?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/api/product/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_5_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_5_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/product',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/product?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.ListProduct, {
            title: title
          }));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditProduct, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditProduct, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(_jsx(Option, {}, i.toString(36) + i, i.toString(36) + i + ' value'));
}

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\xEAn danh m\u1EE5c:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneProductCategory(slug: "' + slug + '"){slug, title, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneProductCategory
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/productcategory/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push({
        pathname: '/admin/productcategory',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/productcategory/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }
    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.updateNews(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.addNews(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 24,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\xEAn danh m\u1EE5c',
      defaultValue: this.state.data.title,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value,
              slug: newSlug()
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    })))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getProductCategories{title, slug, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getProductCategories
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/productcategory?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/productcategory/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Danh muc sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/productcategory',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/productcategory?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {

          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.ListProductCategories, {
            title: title
          }));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditProductCategory, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          console.log(query);
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditProductCategory, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








var _ref = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'URL: '));

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1: '));

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1 (OG): '));

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n (OG):'));

class View extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleOkSEO = e => {
      if (this.state.new) {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/new', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Thêm thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/update', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Cập nhập thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      }
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.state = {
      selectImageType: '',
      showModalSelectImage: false,
      new: true,
      listSEO: this.props.listSEO || [],
      showModal: false,
      selectSEO: {
        description: '',
        og_description: ''
      },
      filter_text: ''
    };
    this.fetchAllSeo();
  }

  fetchAllSeo(filter = this.state.filter_text) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ allSeo(filter:"' + filter + '"){url,title,description,og_title,og_image,og_description,created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          listSEO: data.allSeo
        });
      });
    })();
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          selectSEO: _extends({}, prevState.selectSEO, {
            og_image: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        selectSEO: _extends({}, prevState.selectSEO, {
          og_image: '/image/' + img.name
        })
      });
    });
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { marginRight: 10 },
      onClick: () => {
        this.setState(prev => {
          return _extends({}, prev, {
            new: true,
            showModal: true,
            selectSEO: {
              description: '',
              og_description: ''
            }
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"].Search, {
      placeholder: 'T\xECm ki\u1EBFm',
      style: { width: 200 },
      onSearch: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            filter_text: value
          });
        });
        this.fetchAllSeo(value);
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Table"], {
      columns: columns,
      rowKey: record => record.created_at,
      dataSource: this.state.listSEO,
      onRowClick: (record, index) => {
        console.log(record);
        this.setState(prev => {
          return _extends({}, prev, {
            new: false,
            showModal: true,
            selectSEO: record
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      width: '90%',
      wrapClassName: 'vertical-center-modal',
      visible: this.state.showModal,
      cancelText: '\u0110\xF3ng',
      okText: this.state.new ? "Thêm mới" : "Cập nhập",
      onCancel: () => this.setState({ showModal: false }),
      onOk: () => this.handleOkSEO()
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'URL',
      value: this.state.selectSEO.url || '',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              url: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      value: this.state.selectSEO.title || '',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              title: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'M\xF4 t\u1EA3 ( ', this.state.selectSEO.description.length >= 140 && this.state.selectSEO.description.length <= 150 ? _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.selectSEO.description.length) : _jsx('span', {
      style: { color: 'red' }
    }, void 0, this.state.selectSEO.description.length), ' /150) :')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      type: 'textarea',
      autosize: { minRows: 2, maxRows: 10 },
      value: this.state.selectSEO.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              description: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1 (OG)',
      value: this.state.selectSEO.og_title || '',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              og_title: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref7, !this.state.selectSEO.og_image && _jsx(__WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.selectSEO.og_image && _jsx('div', {
      style: { width: 180, height: 150 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.selectSEO.og_image
    })))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.selectSEO.og_image && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            selectSEO: _extends({}, prevState.selectSEO, {
              og_image: ''
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh '), _jsx('div', {
      style: { marginBottom: 16, marginTop: 16 }
    }, void 0, _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'M\xF4 t\u1EA3 ( ', this.state.selectSEO.og_description.length >= 140 && this.state.selectSEO.og_description.length <= 150 ? _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.selectSEO.og_description.length) : _jsx('span', {
      style: { color: 'red' }
    }, void 0, this.state.selectSEO.og_description.length), ' /150) :')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      type: 'textarea',
      autosize: { minRows: 2, maxRows: 10 },
      value: this.state.selectSEO.og_description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              og_description: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

const columns = [{
  title: 'Link trang web',
  dataIndex: 'url',
  key: 'url',
  render: url => _jsx('span', {}, void 0, url)
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  render: title => _jsx('span', {}, void 0, title)
}];

function mapProduct(slug) {
  switch (slug) {
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng';
      break;
    case 'Chả Cốm':
      return 'Chả Cốm';
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì';
      break;
    default:
      return '';
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/seo',

  action({ query }) {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Seo, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(19);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

var _ref = _jsx('b', {}, void 0, 'SSR: ');

var _ref2 = _jsx('b', {}, void 0, 'Facebook Admin ID: ');

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('b', {}, void 0, 'Facebook Admin ID: ');

var _ref5 = _jsx('br', {});

class Setting extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      setting: {}
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ setting{ssr, css, scriptTop, scriptBottom, adminId, emailAdmin} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        setting: data.setting
      });
    })();
  }

  toggleSSR() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.setState(function (prevState) {
        return _extends({}, prevState, {
          setting: _extends({}, prevState.setting, {
            ssr: !prevState.setting.ssr
          })
        });
      });
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: 'mutation { updateSetting(ssr: ' + !_this2.state.setting.ssr + ') { ssr } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      if (data.updateSetting) {
        __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Update successful');
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: data.updateSetting.ssr
            })
          });
        });
      } else {
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: !prevState.setting.ssr
            })
          });
        });
      }
    })();
  }

  updateSetting(setting) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/setting/update', setting).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, this.state.setting.ssr !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], {
      checked: this.state.setting.ssr,
      onChange: () => this.toggleSSR()
    })), this.state.setting.adminId !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref2, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.setting.adminId,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            setting: _extends({}, prev.setting, {
              adminId: value
            })
          });
        });
      }
    })), this.state.setting.emailAdmin !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref4, _ref5, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.setting.emailAdmin,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            setting: _extends({}, prev.setting, {
              emailAdmin: value
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'STYLESHEETS'
    }, '1', this.state.setting.css !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(CodeMirror, {
      value: this.state.setting.css,
      onChange: value => this.setState(prev => {
        return _extends({}, prev, {
          setting: _extends({}, prev.setting, {
            css: value
          })
        });
      })
    }))), _jsx(Panel, {
      header: 'Javascript đầu trang'
    }, '2', this.state.setting.scriptTop !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(CodeMirror, {
      value: this.state.setting.scriptTop,
      onChange: value => this.setState(prev => {
        return _extends({}, prev, {
          setting: _extends({}, prev.setting, {
            scriptTop: value
          })
        });
      })
    }))), _jsx(Panel, {
      header: 'Javascript cuối trang'
    }, '3', this.state.setting.scriptBottom !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(CodeMirror, {
      value: this.state.setting.scriptBottom,
      onChange: value => this.setState(prev => {
        return _extends({}, prev, {
          setting: _extends({}, prev.setting, {
            scriptBottom: value
          })
        });
      })
    })))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting(this.state.setting);
      }
    }, void 0, 'C\u1EADp nh\u1EADp')));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Setting, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(17);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(19);





if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

var _ref = _jsx('b', {}, void 0, 'Facebook: ');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('b', {}, void 0, 'Google: ');

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('b', {}, void 0, 'Title 1: ');

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('b', {}, void 0, 'Body 1: ');

var _ref8 = _jsx('br', {});

var _ref9 = _jsx('b', {}, void 0, 'Title 2: ');

var _ref10 = _jsx('br', {});

var _ref11 = _jsx('b', {}, void 0, 'Body 2: ');

var _ref12 = _jsx('br', {});

var _ref13 = _jsx('b', {}, void 0, 'Title 3: ');

var _ref14 = _jsx('br', {});

var _ref15 = _jsx('b', {}, void 0, 'Body 3: ');

var _ref16 = _jsx('br', {});

var _ref17 = _jsx('b', {}, void 0, 'Left: ');

var _ref18 = _jsx('br', {});

var _ref19 = _jsx('b', {}, void 0, 'Left: ');

var _ref20 = _jsx('br', {});

var _ref21 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Logo Ch\xEDnh'));

var _ref22 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Logo Ph\u1EE5:'));

var _ref23 = _jsx('b', {}, void 0, 'Menu 1: ');

var _ref24 = _jsx('br', {});

var _ref25 = _jsx('b', {}, void 0, 'Path 1: ');

var _ref26 = _jsx('br', {});

var _ref27 = _jsx('b', {}, void 0, 'Menu 2: ');

var _ref28 = _jsx('br', {});

var _ref29 = _jsx('b', {}, void 0, 'Path 2: ');

var _ref30 = _jsx('br', {});

var _ref31 = _jsx('b', {}, void 0, 'Menu 3: ');

var _ref32 = _jsx('br', {});

var _ref33 = _jsx('b', {}, void 0, 'Path 3: ');

var _ref34 = _jsx('br', {});

var _ref35 = _jsx('b', {}, void 0, 'Menu 4: ');

var _ref36 = _jsx('br', {});

var _ref37 = _jsx('b', {}, void 0, 'Path 3: ');

var _ref38 = _jsx('br', {});

var _ref39 = _jsx('b', {}, void 0, 'Menu 5: ');

var _ref40 = _jsx('br', {});

var _ref41 = _jsx('b', {}, void 0, 'Path 5: ');

var _ref42 = _jsx('br', {});

var _ref43 = _jsx('b', {}, void 0, 'Menu 6: ');

var _ref44 = _jsx('br', {});

var _ref45 = _jsx('b', {}, void 0, 'Path 6: ');

var _ref46 = _jsx('br', {});

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      data: {},
      showModalSelectImage: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{id, about, services, common, home, contact, tracking, allService}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        data: data.information.common
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Social network'
    }, 'socialnetwork', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.facebook,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              facebook: value

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.google,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              google: value

            })
          });
        });
      }
    }))), _jsx(Panel, {
      header: 'Information Header'
    }, 'informationheader', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.title1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title1: value

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref7, _ref8, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.body1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body1: value

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref9, _ref10, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.title2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title2: value

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref11, _ref12, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.body2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body2: value

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref13, _ref14, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.title3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title3: value

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref15, _ref16, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.body3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body3: value

            })
          });
        });
      }
    }))), _jsx(Panel, {
      header: 'Information Footer'
    }, 'informationfooter', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref17, _ref18, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.footer1,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              footer1: value
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref19, _ref20, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.footer2,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              footer2: value
            })
          });
        });
      }
    }))), _jsx(Panel, {
      header: 'Logo'
    }, 'logo', this.state.data.logo1 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref21, this.state.data.logo1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('logo1')
    }, void 0, _jsx('img', {
      src: this.state.data.logo1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('logo1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.logo1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              logo1: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), this.state.data.logo2 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref22, this.state.data.logo2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      style: { background: '#ddd !important' },
      onClick: () => this.showModalSelectImage('logo2')
    }, void 0, _jsx('img', {
      src: this.state.data.logo2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('logo2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.logo2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              logo2: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh '))), this.state.data.menu && _jsx(Panel, {
      header: 'Menu'
    }, 'menu', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref23, _ref24, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.menu1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                menu1: value
              })

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref25, _ref26, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.path1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                path1: value
              })

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref27, _ref28, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.menu2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                menu2: value
              })

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref29, _ref30, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.path2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                path2: value
              })

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref31, _ref32, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.menu3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                menu3: value
              })

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref33, _ref34, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.path3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                path3: value
              })

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref35, _ref36, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.menu4,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                menu4: value
              })

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref37, _ref38, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.path4,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                path4: value
              })

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref39, _ref40, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.menu5,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                menu5: value
              })

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref41, _ref42, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.path5,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                path5: value
              })

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref43, _ref44, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.menu6,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                menu6: value
              })

            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref45, _ref46, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.menu.path6,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: _extends({}, prev.data.menu, {
                path6: value
              })

            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({ common: this.state.data });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'logo1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            logo1: '/image/' + img.name
          })
        });
      });
    } else if (this.state.selectImageType === 'logo2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            logo2: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Thong tin chung';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/common',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Common, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(17);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(19);





if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

var _ref = _jsx('b', {}, void 0, 'Title: ');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('b', {}, void 0, 'Description :');

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('b', {}, void 0, 'Body : ');

var _ref6 = _jsx('br', {});

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      data: {},
      showModalSelectImage: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{id, about, services, common, home, contact, tracking, allService}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        data: data.information.tracking
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, this.state.data.title !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value
            })
          });
        });
      }
    })), this.state.data.description !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              description: value
            })
          });
        });
      }
    })), this.state.data.body !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body: value
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({ tracking: this.state.data });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'img1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            img1: '/image/' + img.name
          })
        });
      });
    } else if (this.state.selectImageType === 'img2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            img2: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Trang Tracking';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/tracking',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Tracking, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(17);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(19);





if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

var _ref = _jsx('b', {}, void 0, 'Slide Title [1]: ');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('b', {}, void 0, 'Slide Body [1]: ');

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh slide 1:'));

var _ref6 = _jsx('b', {}, void 0, 'Slide Title [2]: ');

var _ref7 = _jsx('br', {});

var _ref8 = _jsx('b', {}, void 0, 'Slide Body [2]: ');

var _ref9 = _jsx('br', {});

var _ref10 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh slide 1:'));

var _ref11 = _jsx('b', {}, void 0, 'About Title: ');

var _ref12 = _jsx('br', {});

var _ref13 = _jsx('b', {}, void 0, 'About Body: ');

var _ref14 = _jsx('br', {});

var _ref15 = _jsx('b', {}, void 0, 'Title: ');

var _ref16 = _jsx('br', {});

var _ref17 = _jsx('b', {}, void 0, 'Body: ');

var _ref18 = _jsx('br', {});

var _ref19 = _jsx('b', {}, void 0, 'Title: ');

var _ref20 = _jsx('br', {});

var _ref21 = _jsx('b', {}, void 0, 'Path: ');

var _ref22 = _jsx('br', {});

var _ref23 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh slide 1:'));

var _ref24 = _jsx('b', {}, void 0, 'Body: ');

var _ref25 = _jsx('br', {});

var _ref26 = _jsx('b', {}, void 0, 'Title: ');

var _ref27 = _jsx('br', {});

var _ref28 = _jsx('b', {}, void 0, 'Path: ');

var _ref29 = _jsx('br', {});

var _ref30 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh slide 1:'));

var _ref31 = _jsx('b', {}, void 0, 'Body: ');

var _ref32 = _jsx('br', {});

var _ref33 = _jsx('b', {}, void 0, 'Title: ');

var _ref34 = _jsx('br', {});

var _ref35 = _jsx('b', {}, void 0, 'Path: ');

var _ref36 = _jsx('br', {});

var _ref37 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh slide 1:'));

var _ref38 = _jsx('b', {}, void 0, 'Body: ');

var _ref39 = _jsx('br', {});

var _ref40 = _jsx('b', {}, void 0, 'Title: ');

var _ref41 = _jsx('br', {});

var _ref42 = _jsx('b', {}, void 0, 'Path: ');

var _ref43 = _jsx('br', {});

var _ref44 = _jsx('b', {}, void 0, 'Description: ');

var _ref45 = _jsx('br', {});

var _ref46 = _jsx('b', {}, void 0, 'Title: ');

var _ref47 = _jsx('br', {});

var _ref48 = _jsx('b', {}, void 0, 'Path: ');

var _ref49 = _jsx('br', {});

var _ref50 = _jsx('b', {}, void 0, 'Description: ');

var _ref51 = _jsx('br', {});

var _ref52 = _jsx('b', {}, void 0, 'Title: ');

var _ref53 = _jsx('br', {});

var _ref54 = _jsx('b', {}, void 0, 'Path: ');

var _ref55 = _jsx('br', {});

var _ref56 = _jsx('b', {}, void 0, 'Description: ');

var _ref57 = _jsx('br', {});

var _ref58 = _jsx('b', {}, void 0, 'Title: ');

var _ref59 = _jsx('br', {});

var _ref60 = _jsx('b', {}, void 0, 'Path: ');

var _ref61 = _jsx('br', {});

var _ref62 = _jsx('b', {}, void 0, 'Description: ');

var _ref63 = _jsx('br', {});

var _ref64 = _jsx('b', {}, void 0, 'Title: ');

var _ref65 = _jsx('br', {});

var _ref66 = _jsx('b', {}, void 0, 'Path: ');

var _ref67 = _jsx('br', {});

var _ref68 = _jsx('b', {}, void 0, 'Description: ');

var _ref69 = _jsx('br', {});

var _ref70 = _jsx('b', {}, void 0, 'Title: ');

var _ref71 = _jsx('br', {});

var _ref72 = _jsx('b', {}, void 0, 'Path: ');

var _ref73 = _jsx('br', {});

var _ref74 = _jsx('b', {}, void 0, 'Description: ');

var _ref75 = _jsx('br', {});

var _ref76 = _jsx('b', {}, void 0, 'Title: ');

var _ref77 = _jsx('br', {});

var _ref78 = _jsx('b', {}, void 0, 'Author: ');

var _ref79 = _jsx('br', {});

var _ref80 = _jsx('b', {}, void 0, 'Description: ');

var _ref81 = _jsx('br', {});

var _ref82 = _jsx('b', {}, void 0, 'Title: ');

var _ref83 = _jsx('br', {});

var _ref84 = _jsx('b', {}, void 0, 'Body: ');

var _ref85 = _jsx('br', {});

var _ref86 = _jsx('b', {}, void 0, 'Header: ');

var _ref87 = _jsx('br', {});

var _ref88 = _jsx('b', {}, void 0, 'Body: ');

var _ref89 = _jsx('br', {});

var _ref90 = _jsx('b', {}, void 0, 'Name 1: ');

var _ref91 = _jsx('br', {});

var _ref92 = _jsx('b', {}, void 0, 'Job 1: ');

var _ref93 = _jsx('br', {});

var _ref94 = _jsx('b', {}, void 0, 'Body 1: ');

var _ref95 = _jsx('br', {});

var _ref96 = _jsx('b', {}, void 0, 'Name 2: ');

var _ref97 = _jsx('br', {});

var _ref98 = _jsx('b', {}, void 0, 'Job 2: ');

var _ref99 = _jsx('br', {});

var _ref100 = _jsx('b', {}, void 0, 'Body 2: ');

var _ref101 = _jsx('br', {});

var _ref102 = _jsx('b', {}, void 0, 'Name 3: ');

var _ref103 = _jsx('br', {});

var _ref104 = _jsx('b', {}, void 0, 'Job 3: ');

var _ref105 = _jsx('br', {});

var _ref106 = _jsx('b', {}, void 0, 'Body 3: ');

var _ref107 = _jsx('br', {});

var _ref108 = _jsx('b', {}, void 0, 'Name 4: ');

var _ref109 = _jsx('br', {});

var _ref110 = _jsx('b', {}, void 0, 'Job 4: ');

var _ref111 = _jsx('br', {});

var _ref112 = _jsx('b', {}, void 0, 'Body 4: ');

var _ref113 = _jsx('br', {});

var _ref114 = _jsx('b', {}, void 0, 'Url [1]: ');

var _ref115 = _jsx('br', {});

var _ref116 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh slide 1:'));

var _ref117 = _jsx('b', {}, void 0, 'Url [2]: ');

var _ref118 = _jsx('br', {});

var _ref119 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh Partner [2]:'));

var _ref120 = _jsx('b', {}, void 0, 'Url [3]: ');

var _ref121 = _jsx('br', {});

var _ref122 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh Partner 3:'));

var _ref123 = _jsx('b', {}, void 0, 'Url [4]: ');

var _ref124 = _jsx('br', {});

var _ref125 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh Partner [4]:'));

var _ref126 = _jsx('b', {}, void 0, 'Url [5]: ');

var _ref127 = _jsx('br', {});

var _ref128 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh Partner [5]:'));

var _ref129 = _jsx('b', {}, void 0, 'Url [6]: ');

var _ref130 = _jsx('br', {});

var _ref131 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh Partner [6]:'));

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      data: {},
      showModalSelectImage: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{id, about, services, common, home, contact, tracking, allService}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        data: data.information.home
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Slide'
    }, 'slide', this.state.data.slideTitle1 !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.slideTitle1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slideTitle1: value
            })
          });
        });
      }
    })), this.state.data.slideBody1 !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.slideBody1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slideBody1: value
            })
          });
        });
      }
    })), this.state.data.slideImg1 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref5, this.state.data.slideImg1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('slideImg1')
    }, void 0, _jsx('img', {
      src: this.state.data.slideImg1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('slideImg1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.slideImg1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              slideImg1: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), this.state.data.slideTitle2 !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref6, _ref7, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.slideTitle2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slideTitle2: value
            })
          });
        });
      }
    })), this.state.data.slideBody2 !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref8, _ref9, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.slideBody2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slideBody2: value
            })
          });
        });
      }
    })), this.state.data.slideImg2 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref10, this.state.data.slideImg2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('slideImg2')
    }, void 0, _jsx('img', {
      src: this.state.data.slideImg2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('slideImg2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.slideImg2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              slideImg2: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), this.state.data.aboutTitle !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref11, _ref12, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.aboutTitle,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              aboutTitle: value
            })
          });
        });
      }
    })), this.state.data.aboutTitle !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref13, _ref14, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.aboutBody,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              aboutBody: value
            })
          });
        });
      }
    }))), this.state.data.aboutTitle !== undefined && _jsx(Panel, {
      header: 'Welcome'
    }, 'welcome', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref15, _ref16, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.aboutTitle,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              aboutTitle: value
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref17, _ref18, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.aboutBody,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              aboutBody: value
            })
          });
        });
      }
    }))), this.state.data.about1 !== undefined && _jsx(Panel, {
      header: 'About 1'
    }, 'about1', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref19, _ref20, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about1.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about1: _extends({}, prev.data.about1, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref21, _ref22, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about1.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about1: _extends({}, prev.data.about1, {
                path: value
              })
            })
          });
        });
      }
    })), this.state.data.about1 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref23, this.state.data.about1.img && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('about1')
    }, void 0, _jsx('img', {
      src: this.state.data.about1.img
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('about1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.about1.img && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              about1: _extends({}, prevState.data.about1, {
                img: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref24, _ref25, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about1.body,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about1: _extends({}, prev.data.about1, {
                body: value
              })
            })
          });
        });
      }
    }))), this.state.data.about2 !== undefined && _jsx(Panel, {
      header: 'About 2'
    }, 'about2', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref26, _ref27, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about2.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about2: _extends({}, prev.data.about2, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref28, _ref29, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about2.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about2: _extends({}, prev.data.about2, {
                path: value
              })
            })
          });
        });
      }
    })), this.state.data.about2 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref30, this.state.data.about2.img && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('about2')
    }, void 0, _jsx('img', {
      src: this.state.data.about2.img
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('about2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.about2.img && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              about2: _extends({}, prevState.data.about2, {
                img: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref31, _ref32, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about2.body,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about2: _extends({}, prev.data.about2, {
                body: value
              })
            })
          });
        });
      }
    }))), this.state.data.about3 !== undefined && _jsx(Panel, {
      header: 'About 3'
    }, 'about3', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref33, _ref34, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about3.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about3: _extends({}, prev.data.about3, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref35, _ref36, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about3.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about3: _extends({}, prev.data.about3, {
                path: value
              })
            })
          });
        });
      }
    })), this.state.data.about3 !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref37, this.state.data.about3.img && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('about3')
    }, void 0, _jsx('img', {
      src: this.state.data.about3.img
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('about3')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.about3.img && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              about3: _extends({}, prevState.data.about3, {
                img: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref38, _ref39, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.about3.body,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              about3: _extends({}, prev.data.about3, {
                body: value
              })
            })
          });
        });
      }
    }))), this.state.data.service1 !== undefined && _jsx(Panel, {
      header: 'Service 1'
    }, 'service1', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref40, _ref41, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service1.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service1: _extends({}, prev.data.service1, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref42, _ref43, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service1.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service1: _extends({}, prev.data.service1, {
                path: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref44, _ref45, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service1.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service1: _extends({}, prev.data.service1, {
                description: value
              })
            })
          });
        });
      }
    }))), this.state.data.service2 !== undefined && _jsx(Panel, {
      header: 'Service 2'
    }, 'service2', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref46, _ref47, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service2.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service2: _extends({}, prev.data.service2, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref48, _ref49, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service2.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service2: _extends({}, prev.data.service2, {
                path: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref50, _ref51, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service2.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service2: _extends({}, prev.data.service2, {
                description: value
              })
            })
          });
        });
      }
    }))), this.state.data.service3 !== undefined && _jsx(Panel, {
      header: 'Service 3'
    }, 'service3', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref52, _ref53, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service3.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service3: _extends({}, prev.data.service3, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref54, _ref55, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service3.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service3: _extends({}, prev.data.service3, {
                path: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref56, _ref57, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service3.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service3: _extends({}, prev.data.service3, {
                description: value
              })
            })
          });
        });
      }
    }))), this.state.data.service4 !== undefined && _jsx(Panel, {
      header: 'Service 4'
    }, 'service4', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref58, _ref59, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service4.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service4: _extends({}, prev.data.service4, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref60, _ref61, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service4.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service4: _extends({}, prev.data.service4, {
                path: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref62, _ref63, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service4.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service4: _extends({}, prev.data.service4, {
                description: value
              })
            })
          });
        });
      }
    }))), this.state.data.service5 !== undefined && _jsx(Panel, {
      header: 'Service 5'
    }, 'service5', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref64, _ref65, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service5.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service5: _extends({}, prev.data.service5, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref66, _ref67, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service5.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service5: _extends({}, prev.data.service5, {
                path: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref68, _ref69, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service5.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service5: _extends({}, prev.data.service5, {
                description: value
              })
            })
          });
        });
      }
    }))), this.state.data.service6 !== undefined && _jsx(Panel, {
      header: 'Service 6'
    }, 'service6', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref70, _ref71, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service6.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service6: _extends({}, prev.data.service6, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref72, _ref73, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service6.path,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service6: _extends({}, prev.data.service6, {
                path: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref74, _ref75, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.service6.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              service6: _extends({}, prev.data.service6, {
                description: value
              })
            })
          });
        });
      }
    }))), this.state.data.coreValue !== undefined && _jsx(Panel, {
      header: 'Core Values'
    }, 'corevalue', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref76, _ref77, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.coreValue.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              coreValue: _extends({}, prev.data.coreValue, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref78, _ref79, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.coreValue.author,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              coreValue: _extends({}, prev.data.coreValue, {
                author: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref80, _ref81, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.coreValue.body,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              coreValue: _extends({}, prev.data.coreValue, {
                body: value
              })
            })
          });
        });
      }
    }))), this.state.data.aboutUs !== undefined && _jsx(Panel, {
      header: 'About Us'
    }, 'aboutUs', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref82, _ref83, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.aboutUs.title,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              aboutUs: _extends({}, prev.data.aboutUs, {
                title: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref84, _ref85, _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.aboutUs.body,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              aboutUs: _extends({}, prev.data.aboutUs, {
                body: value
              })
            })
          });
        });
      }
    }))), this.state.data.form !== undefined && _jsx(Panel, {
      header: 'Form'
    }, 'form', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref86, _ref87, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.form.header,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              form: _extends({}, prev.data.form, {
                header: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref88, _ref89, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.form.body,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              form: _extends({}, prev.data.form, {
                body: value
              })
            })
          });
        });
      }
    }))), this.state.data.testimonials !== undefined && _jsx(Panel, {
      header: 'Testimonial'
    }, 'testimonial', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref90, _ref91, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.name1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                name1: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref92, _ref93, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.job1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                job1: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref94, _ref95, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.testimonial1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                testimonial1: value
              })
            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref96, _ref97, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.name2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                name2: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref98, _ref99, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.job2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                job2: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref100, _ref101, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.testimonial2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                testimonial2: value
              })
            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref102, _ref103, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.name3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                name3: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref104, _ref105, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.job3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                job3: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref106, _ref107, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.testimonial3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                testimonial3: value
              })
            })
          });
        });
      }
    })), _jsx('hr', {
      style: { borderColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref108, _ref109, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.name4,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                name4: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref110, _ref111, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.job4,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                job4: value
              })
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref112, _ref113, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.testimonials.testimonial4,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              testimonials: _extends({}, prev.data.testimonials, {
                testimonial4: value
              })
            })
          });
        });
      }
    }))), this.state.data.partners !== undefined && _jsx(Panel, {
      header: 'Partners'
    }, 'partners', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref114, _ref115, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.partners.url1,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              partners: _extends({}, prev.data.partners, {
                url1: value
              })
            })
          });
        });
      }
    })), this.state.data.partners !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref116, this.state.data.partners.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('partner1')
    }, void 0, _jsx('img', {
      src: this.state.data.partners.img1
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('partner1')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.partners.img1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              partners: _extends({}, prevState.data.partners, {
                img1: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('hr', {
      style: { backgroundColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref117, _ref118, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.partners.url2,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              partners: _extends({}, prev.data.partners, {
                url2: value
              })
            })
          });
        });
      }
    })), this.state.data.partners !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref119, this.state.data.partners.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('partner2')
    }, void 0, _jsx('img', {
      src: this.state.data.partners.img2
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('partner2')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.partners.img2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              partners: _extends({}, prevState.data.partners, {
                img2: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('hr', {
      style: { backgroundColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref120, _ref121, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.partners.url3,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              partners: _extends({}, prev.data.partners, {
                url3: value
              })
            })
          });
        });
      }
    })), this.state.data.partners !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref122, this.state.data.partners.img3 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('partner3')
    }, void 0, _jsx('img', {
      src: this.state.data.partners.img3
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('partner3')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.partners.img3 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              partners: _extends({}, prevState.data.partners, {
                img3: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('hr', {
      style: { backgroundColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref123, _ref124, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.partners.url4,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              partners: _extends({}, prev.data.partners, {
                url4: value
              })
            })
          });
        });
      }
    })), this.state.data.partners !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref125, this.state.data.partners.img4 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('partner4')
    }, void 0, _jsx('img', {
      src: this.state.data.partners.img4
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('partner4')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.partners.img4 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              partners: _extends({}, prevState.data.partners, {
                img4: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('hr', {
      style: { backgroundColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref126, _ref127, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.partners.url5,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              partners: _extends({}, prev.data.partners, {
                url5: value
              })
            })
          });
        });
      }
    })), this.state.data.partners !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref128, this.state.data.partners.img5 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('partner5')
    }, void 0, _jsx('img', {
      src: this.state.data.partners.img5
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('partner5')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.partners.img5 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              partners: _extends({}, prevState.data.partners, {
                img5: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('hr', {
      style: { backgroundColor: 'blue' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref129, _ref130, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.data.partners.url6,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              partners: _extends({}, prev.data.partners, {
                url6: value
              })
            })
          });
        });
      }
    })), this.state.data.partners !== undefined && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref131, this.state.data.partners.img6 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('partner6')
    }, void 0, _jsx('img', {
      src: this.state.data.partners.img6
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('partner6')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.partners.img6 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              partners: _extends({}, prevState.data.partners, {
                img6: null
              })
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')), _jsx('hr', {
      style: { backgroundColor: 'blue' }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({ home: this.state.data });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'slideImg1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            slideImg1: '/image/' + img.name
          })
        });
      });
    } else if (this.state.selectImageType === 'slideImg2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            slideImg2: '/image/' + img.name
          })
        });
      });
    } else if (this.state.selectImageType === 'about1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            about1: _extends({}, prevState.data.about1, {
              img: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'about2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            about2: _extends({}, prevState.data.about2, {
              img: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'about3') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            about3: _extends({}, prevState.data.about3, {
              img: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'partner1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            partners: _extends({}, prevState.data.partners, {
              img1: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'partner2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            partners: _extends({}, prevState.data.partners, {
              img2: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'partner3') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            partners: _extends({}, prevState.data.partners, {
              img3: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'partner4') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            partners: _extends({}, prevState.data.partners, {
              img4: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'partner5') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            partners: _extends({}, prevState.data.partners, {
              img5: '/image/' + img.name
            })
          })
        });
      });
    } else if (this.state.selectImageType === 'partner6') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            partners: _extends({}, prevState.data.partners, {
              img6: '/image/' + img.name
            })
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/trangchu',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(6).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Home, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(151);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('section', {
  className: 'banner check-out'
}, void 0, _jsx('div', {
  className: 'container'
}, void 0, _jsx('div', {
  className: 'morepage-banner'
}, void 0, _jsx('h2', {
  className: 'title'
}, void 0, 'Gi\u1ECF h\xE0ng'))));

var _ref2 = _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {
  colSpan: 2,
  className: 'product-name'
}, void 0, 'S\u1EA3n ph\u1EA9m'), _jsx('th', {
  className: 'product-price'
}, void 0, 'Gi\xE1'), _jsx('th', {
  className: 'product-quantity'
}, void 0, 'S\u1ED1 l\u01B0\u1EE3ng'), _jsx('th', {
  className: 'product-subtotal'
}, void 0, 'Th\xE0nh ti\u1EC1n'), _jsx('th', {
  className: 'product-remove'
})));

var _ref3 = _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111');

var _ref4 = _jsx('span', {
  className: 'woocommerce-Price-unit'
}, void 0, '/KG');

var _ref5 = _jsx('i', {
  className: 'glyphicon glyphicon-minus'
});

var _ref6 = _jsx('i', {
  className: 'glyphicon glyphicon-plus'
});

var _ref7 = _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111');

var _ref8 = _jsx('i', {
  className: 'glyphicon glyphicon-remove'
});

var _ref9 = _jsx('div', {
  className: 'col-md-7 col-xs-12'
}, void 0, _jsx('a', {
  href: '/cua-hang'
}, void 0, _jsx('div', {
  type: 'submit',
  className: 'btn btn-maincolor'
}, void 0, 'Ti\u1EBFp t\u1EE5c mua hang')), _jsx('a', {
  href: '/thanh-toan'
}, void 0, _jsx('div', {
  type: 'submit',
  className: 'btn btn-maincolor'
}, void 0, 'Thanh to\xE1n')));

var _ref10 = _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111');

var _ref11 = _jsx('section', {
  className: 'discount-shipping-payment padding-top-100 padding-bottom-100'
}, void 0, _jsx('div', {
  className: 'container'
}, void 0, _jsx('div', {
  className: 'row'
}, void 0)));

class Cart extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    let that = this;
    if (false) {
      let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
      let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
      that.setState({ cart: cart });
      console.log(cart);
    }
  }

  render() {

    const contact = this.props.data.information.value.contact;
    let sum = 0;
    this.state.cart.map(el => {
      sum += el.number * el.product.price;
    });
    return _jsx('div', {}, void 0, _jsx('div', {
      className: 'main-contents'
    }, void 0, _ref, _jsx('section', {
      className: 'shopping-cart padding-top-100'
    }, void 0, _jsx('div', {
      className: 'container'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('div', {
      className: 'col-xs-12'
    }, void 0, _jsx('form', {
      action: '#',
      method: 'post'
    }, void 0, _jsx('table', {
      className: 'shop-table cart'
    }, void 0, _ref2, _jsx('tbody', {}, void 0, this.state.cart.map((el, idx) => {
      return _jsx('tr', {
        className: 'cart-item'
      }, idx, _jsx('td', {
        className: 'product-thumbnail'
      }, void 0, _jsx('div', {
        className: 'wrapper-thumbnail'
      }, void 0, _jsx('a', {
        href: '#'
      }, void 0, _jsx('img', {
        src: el.product.coverUrl,
        alt: true,
        className: 'img-product'
      })))), _jsx('td', {
        className: 'product-name'
      }, void 0, _jsx('a', {
        href: '#',
        className: 'woocommerce-name'
      }, void 0, el.product.title)), _jsx('td', {
        className: 'product-price'
      }, void 0, _jsx('span', {
        className: 'woocommerce-Price'
      }, void 0, el.product.price.toLocaleString(), _ref3, _ref4)), _jsx('td', {
        className: 'product-quantity'
      }, void 0, _jsx('div', {
        className: 'quantity'
      }, void 0, _jsx('div', {
        className: 'quantity-button quantity-down',
        onClick: () => {
          let that = this;
          if (false) {
            let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
            let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
            let index = idx;
            if (index >= 0) {
              if (cart[index].number > 1) {
                cart[index].number = cart[index].number - 1;
              } else {
                cart.splice(index, 1);
              }
              sessionStorage.setItem('cart', JSON.stringify(cart));
              $(".cart-counter").text(cart.length);
            } else {
              cart.push({
                slug: that.state.product.slug,
                number: that.state.number,
                product: that.state.product
              });
              sessionStorage.setItem('cart', JSON.stringify(cart));
              $(".cart-counter").text(cart.length);
            }
            // $(".cart-counter").text(cart.length)
            this.setState({ cart: cart });
          }
        }
      }, void 0, _ref5), _jsx('input', {
        type: 'number',
        step: 1,
        min: 0,
        max: 999,
        value: el.number,
        className: 'input-text qty text',
        onChange: e => {
          let value = parseInt(e.target.value);
          let that = this;
          if (false) {
            let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
            let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
            let index = idx;
            if (index >= 0) {
              cart[index].number = value;
              sessionStorage.setItem('cart', JSON.stringify(cart));
              $(".cart-counter").text(cart.length);
            }
            // $(".cart-counter").text(cart.length)
            this.setState({ cart: cart });
          }
        }
      }), _jsx('div', {
        className: 'quantity-button quantity-up',
        onClick: () => {
          let that = this;
          if (false) {
            let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
            let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
            let index = idx;
            if (index >= 0) {
              cart[index].number = cart[index].number + 1;
              sessionStorage.setItem('cart', JSON.stringify(cart));
              $(".cart-counter").text(cart.length);
            } else {
              cart.push({
                slug: that.state.product.slug,
                number: that.state.number,
                product: that.state.product
              });
              sessionStorage.setItem('cart', JSON.stringify(cart));
              $(".cart-counter").text(cart.length);
            }
            // $(".cart-counter").text(cart.length)
            this.setState({ cart: cart });
          }
        }
      }, void 0, _ref6))), _jsx('td', {
        className: 'product-subtotal'
      }, void 0, _jsx('span', {
        className: 'woocommerce-Price amount'
      }, void 0, (el.product.price * el.number).toLocaleString(), _ref7)), _jsx('td', {
        className: 'product-remove'
      }, void 0, _jsx('a', {
        href: '#',
        title: 'Remove this item',
        className: 'remove'
      }, void 0, _jsx('span', {
        onClick: () => {
          let that = this;
          if (false) {
            let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
            let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
            let index = idx;
            if (index >= 0) {
              cart.splice(index, 1);
              sessionStorage.setItem('cart', JSON.stringify(cart));
              $(".cart-counter").text(cart.length);
            }
            // $(".cart-counter").text(cart.length)
            this.setState({ cart: cart });
          }
        }
      }, void 0, _ref8))));
    }))), _jsx('div', {
      className: 'cart-totals'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _ref9, _jsx('div', {
      className: 'col-md-5 col-xs-12 text-center'
    }, void 0, _jsx('div', {
      className: 'subtotal'
    }, void 0, 'T\u1ED5ng ti\u1EC1n:', _jsx('span', {
      className: 'woocommerce-Price'
    }, void 0, sum.toLocaleString(), _ref10)))))))))), _ref11));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx('input', {
  type: 'text',
  name: 'maximus'
});

var _ref2 = _jsx('input', {
  type: 'hidden',
  name: 'theSubject',
  defaultValue: 'CargoPress: Contact Request'
});

var _ref3 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'First Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-name',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Last Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'last-name',
  required: true
}))));

var _ref4 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'email',
  placeholder: 'E-mail address*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-email',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'tel',
  placeholder: 'Phone Number',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-phone'
}))));

var _ref5 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-8'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Subject*',
  'aria-invalid': 'false',
  size: 40,
  name: 'your-subject',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('textarea', {
  placeholder: 'Message*',
  'aria-invalid': 'false',
  rows: 10,
  cols: 40,
  name: 'your-message',
  required: true,
  defaultValue: ""
})), _jsx('input', {
  type: 'submit',
  className: 'btn btn-primary',
  defaultValue: 'G\u1EEDi tin nh\u1EAFn'
})));

function Form(props) {
  return _jsx('div', {
    id: 'form'
  }, void 0, _jsx('h3', {
    className: 'widget-title margin-top-0'
  }, void 0, props.header), _jsx('div', {
    dangerouslySetInnerHTML: { __html: props.body }
  }), _jsx('form', {
    'data-toggle': 'validator',
    method: 'post',
    action: 'form.php',
    className: 'aSubmit'
  }, void 0, _jsx('div', {
    style: { display: 'none' }
  }, void 0, _ref), _ref2, _ref3, _ref4, _ref5));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx("div", {}, void 0, _jsx("div", {
  className: "widget_black-studio-tinymce"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {
  className: "widget-title"
}, void 0, _jsx("span", {
  className: "widget-title__inline"
}, void 0, "OLD FASHIONED CONTACT")), _jsx("p", {}, void 0, _jsx("strong", {}, void 0, "CargoPress, Itd."), _jsx("br", {}), "227 Marion Street", _jsx("br", {}), "Columbia, SC 29201"), _jsx("p", {}, void 0, "1-888-123-4567", _jsx("br", {}), "1-888-123-4568", _jsx("br", {}), _jsx("a", {
  href: "mailto:info@cargopress.com"
}, void 0, "info@cargopress.com")))), _jsx("div", {
  className: "widget_pw_opening_time"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {}, void 0, _jsx("span", {
  className: "icon icons-ornament-left"
}), "OPENING TIME", _jsx("span", {
  className: "icon icons-ornament-right"
})), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Monday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Tuesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Wednesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Thursday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Friday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Saturday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  closed today"
}, void 0, _jsx("dt", {}, void 0, "Sunday"), _jsx("dd", {}, void 0, "CLOSED")))));

function Widget(props) {
  return _ref;
}

/* unused harmony default export */ var _unused_webpack_default_export = (Widget);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(149);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(147);
/* unused harmony reexport BreadCrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Widget__ = __webpack_require__(150);
/* unused harmony reexport Widget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(148);
/* unused harmony reexport FormEmail */





/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Happy green | Giỏ hàng';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/gio-hang',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, contact, services, common}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(146).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Cart) {
        return {
          title,
          chunk: 'cart',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(Cart, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(158);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('section', {
  className: 'banner check-out'
}, void 0, _jsx('div', {
  className: 'container'
}, void 0, _jsx('div', {
  className: 'morepage-banner'
}, void 0, _jsx('h2', {
  className: 'title'
}, void 0, 'Thanh to\xE1n'))));

var _ref2 = _jsx('div', {
  className: 'main-titles-2'
}, void 0, _jsx('h1', {
  className: 'title'
}, void 0, 'Th\xF4ng tin'));

var _ref3 = _jsx('label', {
  className: 'form-label'
}, void 0, 'H\u1ECD t\xEAn ', _jsx('span', {
  className: 'highlight'
}, void 0, '*'));

var _ref4 = _jsx('p', {
  className: 'help-block text-danger'
});

var _ref5 = _jsx('label', {
  className: 'form-label'
}, void 0, 'PHONE');

var _ref6 = _jsx('p', {
  className: 'help-block text-danger'
});

var _ref7 = _jsx('label', {
  className: 'form-label'
}, void 0, 'EMAIL ', _jsx('span', {
  className: 'highlight'
}, void 0, '*'));

var _ref8 = _jsx('p', {
  className: 'help-block text-danger'
});

var _ref9 = _jsx('label', {
  className: 'form-label'
}, void 0, '\u0110\u1ECBa ch\u1EC9 sh\xEDp h\xE0ng ', _jsx('span', {
  className: 'highlight'
}, void 0, '*'));

var _ref10 = _jsx('p', {
  className: 'help-block text-danger'
});

var _ref11 = _jsx('div', {
  className: 'col-xs-12'
}, void 0, _jsx('div', {
  className: 'main-titles-2'
}, void 0, _jsx('h1', {
  className: 'title'
}, void 0, '\u0110\u01A1n h\xE0ng')));

var _ref12 = _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {
  colSpan: 3,
  className: 'product-name'
}, void 0, 'S\u1EA3n ph\u1EA9m'), _jsx('th', {
  className: 'product-subtotal'
}, void 0, 'Th\xE0nh ti\u1EC1n')));

var _ref13 = _jsx('tr', {}, void 0, _jsx('td', {
  colSpan: 4
}, void 0, _jsx('div', {
  className: 'spacing-table'
})));

var _ref14 = _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111');

var _ref15 = _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111');

var _ref16 = _jsx('div', {
  className: 'col-md-7 col-xs-7'
}, void 0, _jsx('div', {
  className: 'subtotal'
}, void 0, 'Th\xE0nh ti\u1EC1n:'), _jsx('div', {
  className: 'shipping'
}, void 0, 'Ph\xED Shipping:'), _jsx('div', {
  className: 'total'
}, void 0, 'T\u1ED5ng c\u1ED9ng: '));

var _ref17 = _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111');

var _ref18 = _jsx('div', {
  className: 'shipping'
}, void 0, _jsx('span', {
  className: 'woocommerce-Price'
}, void 0, '0', _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111')));

var _ref19 = _jsx('span', {
  className: 'woocommerce-Price-currencySymbol'
}, void 0, '\u0111');

var _ref20 = _jsx('br', {});

class CheckOut extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      info: {
        name: "",
        phone: "",
        email: "",
        address: ""
      }
    };
  }

  componentDidMount() {
    let that = this;
    if (false) {
      let sessionStorage = window && window.sessionStorage ? window.sessionStorage : {};
      let cart = JSON.parse(sessionStorage.getItem("cart") || '[]');
      that.setState({ cart: cart });
      console.log(cart);
    }
  }

  render() {

    const contact = this.props.data.information.value.contact;
    let sum = 0;
    this.state.cart.map(el => {
      sum += el.number * el.product.price;
    });
    return _jsx('div', {}, void 0, _jsx('div', {
      className: 'main-contents'
    }, void 0, _ref, _jsx('section', {
      className: 'info-form padding-top-100'
    }, void 0, _jsx('div', {
      className: 'container'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('div', {
      className: 'col-md-12 col-xs-12 billdingForm'
    }, void 0, _ref2, _jsx('form', {
      id: 'billdingForm',
      noValidate: 'novalidate',
      className: 'checkout-form'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('div', {
      className: 'col-xs-12'
    }, void 0, _jsx('div', {
      className: 'form-group'
    }, void 0, _ref3, _jsx('input', {
      id: 'last-name',
      type: 'text',
      required: 'required',
      className: 'form-control',
      defaultValue: this.state.info.name,
      onChange: e => {
        this.setState(prev => {
          return {};
        });
      }
    }), _ref4)), _jsx('div', {
      className: 'col-xs-6'
    }, void 0, _jsx('div', {
      className: 'form-group'
    }, void 0, _ref5, _jsx('input', {
      id: 'phone',
      type: 'text',
      required: 'required',
      className: 'form-control',
      defaultValue: this.state.info.phone
    }), _ref6)), _jsx('div', {
      className: 'col-xs-6'
    }, void 0, _jsx('div', {
      className: 'form-group'
    }, void 0, _ref7, _jsx('input', {
      id: 'email',
      type: 'email',
      required: 'required',
      className: 'form-control',
      defaultValue: this.state.info.email
    }), _ref8)), _jsx('div', {
      className: 'col-xs-12'
    }, void 0, _jsx('div', {
      className: 'form-group'
    }, void 0, _ref9, _jsx('textarea', {
      id: 'message-2',
      required: 'required',
      className: 'form-control form-textarea',
      defaultValue: this.state.info.address
    }), _ref10)))))))), _jsx('section', {
      className: 'your-order padding-top-100 padding-bottom-100'
    }, void 0, _jsx('div', {
      className: 'container'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _ref11, _jsx('div', {
      className: 'col-xs-12'
    }, void 0, _jsx('form', {
      action: '#',
      method: 'post'
    }, void 0, _jsx('table', {
      className: 'shop-table cart'
    }, void 0, _ref12, _jsx('tbody', {}, void 0, _ref13, this.state.cart.map((p, idx) => {
      return _jsx('tr', {
        className: 'cart-item'
      }, idx, _jsx('td', {
        className: 'product-thumbnail'
      }, void 0, _jsx('div', {
        className: 'wrapper-thumbnail'
      }, void 0, _jsx('a', {
        href: `/sp/${p.product.slug}`
      }, void 0, _jsx('img', {
        src: p.product.coverUrl,
        alt: true,
        className: 'img-product'
      })))), _jsx('td', {
        className: 'product-name'
      }, void 0, _jsx('a', {
        href: `/sp/${p.product.slug}`,
        className: 'woocommerce-name'
      }, void 0, p.product.title), _jsx('span', {
        className: 'woocommerce-Price amount'
      }, void 0, p.product.price.toLocaleString(), _ref14)), _jsx('td', {
        className: 'product-quantity'
      }, void 0, _jsx('div', {
        className: 'quantity'
      }, void 0, _jsx('span', {
        className: 'woocommerce-puantity'
      }, void 0, p.number))), _jsx('td', {
        className: 'product-subtotal'
      }, void 0, _jsx('span', {
        className: 'woocommerce-Price'
      }, void 0, (p.number * p.product.price).toLocaleString(), _ref15)));
    }))), _jsx('div', {
      className: 'cart-totals'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _ref16, _jsx('div', {
      className: 'col-md-5 col-xs-5 text-center'
    }, void 0, _jsx('div', {
      className: 'subtotal'
    }, void 0, _jsx('span', {
      className: 'woocommerce-Price'
    }, void 0, sum.toLocaleString(), _ref17)), _ref18, _jsx('div', {
      className: 'total'
    }, void 0, _jsx('span', {
      className: 'woocommerce-Price amount'
    }, void 0, sum.toLocaleString(), _ref19)))), _ref20, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('button', {
      className: 'btn btn-maincolor',
      style: { float: 'right' }
    }, void 0, 'X\xE1c nh\u1EADn'))))))))));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CheckOut);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx('input', {
  type: 'text',
  name: 'maximus'
});

var _ref2 = _jsx('input', {
  type: 'hidden',
  name: 'theSubject',
  defaultValue: 'CargoPress: Contact Request'
});

var _ref3 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'First Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-name',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Last Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'last-name',
  required: true
}))));

var _ref4 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'email',
  placeholder: 'E-mail address*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-email',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'tel',
  placeholder: 'Phone Number',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-phone'
}))));

var _ref5 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-8'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Subject*',
  'aria-invalid': 'false',
  size: 40,
  name: 'your-subject',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('textarea', {
  placeholder: 'Message*',
  'aria-invalid': 'false',
  rows: 10,
  cols: 40,
  name: 'your-message',
  required: true,
  defaultValue: ""
})), _jsx('input', {
  type: 'submit',
  className: 'btn btn-primary',
  defaultValue: 'G\u1EEDi tin nh\u1EAFn'
})));

function Form(props) {
  return _jsx('div', {
    id: 'form'
  }, void 0, _jsx('h3', {
    className: 'widget-title margin-top-0'
  }, void 0, props.header), _jsx('div', {
    dangerouslySetInnerHTML: { __html: props.body }
  }), _jsx('form', {
    'data-toggle': 'validator',
    method: 'post',
    action: 'form.php',
    className: 'aSubmit'
  }, void 0, _jsx('div', {
    style: { display: 'none' }
  }, void 0, _ref), _ref2, _ref3, _ref4, _ref5));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx("div", {}, void 0, _jsx("div", {
  className: "widget_black-studio-tinymce"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {
  className: "widget-title"
}, void 0, _jsx("span", {
  className: "widget-title__inline"
}, void 0, "OLD FASHIONED CONTACT")), _jsx("p", {}, void 0, _jsx("strong", {}, void 0, "CargoPress, Itd."), _jsx("br", {}), "227 Marion Street", _jsx("br", {}), "Columbia, SC 29201"), _jsx("p", {}, void 0, "1-888-123-4567", _jsx("br", {}), "1-888-123-4568", _jsx("br", {}), _jsx("a", {
  href: "mailto:info@cargopress.com"
}, void 0, "info@cargopress.com")))), _jsx("div", {
  className: "widget_pw_opening_time"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {}, void 0, _jsx("span", {
  className: "icon icons-ornament-left"
}), "OPENING TIME", _jsx("span", {
  className: "icon icons-ornament-right"
})), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Monday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Tuesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Wednesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Thursday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Friday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Saturday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  closed today"
}, void 0, _jsx("dt", {}, void 0, "Sunday"), _jsx("dd", {}, void 0, "CLOSED")))));

function Widget(props) {
  return _ref;
}

/* unused harmony default export */ var _unused_webpack_default_export = (Widget);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(156);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(154);
/* unused harmony reexport BreadCrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Widget__ = __webpack_require__(157);
/* unused harmony reexport Widget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(155);
/* unused harmony reexport FormEmail */





/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Happy green | Thanh toán';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/thanh-toan',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, contact, services, common}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(153).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (CheckOut) {
        return {
          title,
          chunk: 'checkout',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(CheckOut, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(165);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('strong', {}, void 0, '\u0110i\u1EC7n tho\u1EA1i: ');

var _ref2 = _jsx('strong', {}, void 0, 'Email: ');

var _ref3 = _jsx('h3', {}, void 0, 'B\u1EA3n \u0111\u1ED3');

var _ref4 = _jsx('div', {
  className: 'contact floatRight'
}, void 0, _jsx('form', {
  method: 'post'
}, void 0, _jsx('div', {
  className: 'box'
}, void 0, _jsx('h3', {
  className: 'black'
}, void 0, 'M\u1ECDi y\xEAu c\u1EA7u th\u1EAFc m\u1EAFc xin g\u1EEDi mail v\u1EC1 cho ch\xFAng t\xF4i. Xin ch\xE2n th\xE0nh c\u1EA3m \u01A1n!'), _jsx('div', {
  className: 'row clearfix'
}, void 0, _jsx('label', {}, void 0, 'H\u1ECD v\xE0 t\xEAn: '), _jsx('input', {
  type: 'text',
  name: 'txtName'
})), _jsx('div', {
  className: 'row clearfix'
}, void 0, _jsx('label', {}, void 0, 'Email: '), _jsx('input', {
  type: 'text',
  name: 'txtEmail'
})), _jsx('div', {
  className: 'row clearfix'
}, void 0, _jsx('label', {}, void 0, '\u0110i\u1EC7n tho\u1EA1i: '), _jsx('input', {
  type: 'text',
  name: 'txtPhone'
})), _jsx('div', {
  className: 'row clearfix'
}, void 0, _jsx('label', {}, void 0, 'C\xE2u h\u1ECFi: '), _jsx('textarea', {
  name: 'txtContent',
  defaultValue: ""
})), _jsx('div', {
  className: 'row clearfix'
}, void 0, _jsx('label', {}, void 0, '\xA0 '), _jsx('input', {
  type: 'submit',
  name: 'submit',
  defaultValue: 'G\u1EEDi th\xF4ng tin'
})))));

function Contact(props) {

  const contact = props.data.information.value.contact;

  return _jsx('div', {}, void 0, _jsx('div', {
    id: 'content_wrapper',
    className: 'product_layout main clearfix'
  }, void 0, _jsx('div', {
    id: 'contact_wrapper',
    className: 'clearfix'
  }, void 0, _jsx('div', {
    className: 'contact floatLeft'
  }, void 0, _jsx('div', {
    className: 'box'
  }, void 0, _jsx('div', {
    id: 'dnn_ctr547342_ModuleContent'
  }, void 0, _jsx('div', {
    id: 'dnn_ctr547342_HtmlModule_HtmlModule_lblContent',
    className: 'Normal'
  }, void 0, _jsx('div', {
    style: { textAlign: 'justify', lineHeight: 2 }
  }, void 0, _jsx('strong', {}, void 0, _jsx('span', {
    style: { fontSize: 14 }
  }, void 0, 'C\xD4NG TY C\u1ED4 PH\u1EA6N XU\u1EA4T NH\u1EACP KH\u1EA8U HO\xC0NG GIA KH\xC1NH'))), _jsx('div', {
    style: { textAlign: 'justify', lineHeight: 2 }
  }, void 0, _jsx('strong', {}, void 0, _jsx('span', {
    style: { color: '#8b4513' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, 'Tr\u1EE5 s\u1EDF: P803 - T\xF2a B2- Khu \u0111\xF4 th\u1ECB Ecopark - V\u0103n Giang - H\u01B0ng Y\xEAn')))), _jsx('div', {
    style: { textAlign: 'justify', lineHeight: 2 }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _ref, '0911 535 999')), _jsx('div', {
    style: { textAlign: 'justify', lineHeight: 2 }
  }, void 0, _jsx('strong', {}, void 0, _jsx('span', {
    style: { color: '#b22222' }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, 'Nh\xE0 m\xE1y: khu C\xF4ng nghi\u1EC7p B\xE1t Tr\xE0ng, Huy\u1EC7n Gia L\xE2m, TP. H\xE0 N\u1ED9i')))), _jsx('div', {
    style: { textAlign: 'justify', lineHeight: 2 }
  }, void 0, _jsx('span', {
    style: { fontSize: 12 }
  }, void 0, _ref2, 'contact@maylocnuocmokin.com'))))), _jsx('div', {
    className: 'box'
  }, void 0, _ref3, _jsx('iframe', {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.390753596397!2d105.92032671544298!3d20.976968036026424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aee03fd1691f%3A0x38d59b52456c6127!2zQ-G7pW0gbMOgbmcgbmdo4buBIHThuq1wIHRydW5nIHjDoyBCw6F0IFRyw6BuZywgxJBUMzc4LCBHaWEgTMOibSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1525766668859',
    width: 600,
    height: 450,
    frameBorder: 0,
    style: { border: 0 },
    allowFullScreen: true
  }))), _ref4)));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx('input', {
  type: 'text',
  name: 'maximus'
});

var _ref2 = _jsx('input', {
  type: 'hidden',
  name: 'theSubject',
  defaultValue: 'CargoPress: Contact Request'
});

var _ref3 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'First Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-name',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Last Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'last-name',
  required: true
}))));

var _ref4 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'email',
  placeholder: 'E-mail address*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-email',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'tel',
  placeholder: 'Phone Number',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-phone'
}))));

var _ref5 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-8'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Subject*',
  'aria-invalid': 'false',
  size: 40,
  name: 'your-subject',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('textarea', {
  placeholder: 'Message*',
  'aria-invalid': 'false',
  rows: 10,
  cols: 40,
  name: 'your-message',
  required: true,
  defaultValue: ""
})), _jsx('input', {
  type: 'submit',
  className: 'btn btn-primary',
  defaultValue: 'G\u1EEDi tin nh\u1EAFn'
})));

function Form(props) {
  return _jsx('div', {
    id: 'form'
  }, void 0, _jsx('h3', {
    className: 'widget-title margin-top-0'
  }, void 0, props.header), _jsx('div', {
    dangerouslySetInnerHTML: { __html: props.body }
  }), _jsx('form', {
    'data-toggle': 'validator',
    method: 'post',
    action: 'form.php',
    className: 'aSubmit'
  }, void 0, _jsx('div', {
    style: { display: 'none' }
  }, void 0, _ref), _ref2, _ref3, _ref4, _ref5));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx("div", {}, void 0, _jsx("div", {
  className: "widget_black-studio-tinymce"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {
  className: "widget-title"
}, void 0, _jsx("span", {
  className: "widget-title__inline"
}, void 0, "OLD FASHIONED CONTACT")), _jsx("p", {}, void 0, _jsx("strong", {}, void 0, "CargoPress, Itd."), _jsx("br", {}), "227 Marion Street", _jsx("br", {}), "Columbia, SC 29201"), _jsx("p", {}, void 0, "1-888-123-4567", _jsx("br", {}), "1-888-123-4568", _jsx("br", {}), _jsx("a", {
  href: "mailto:info@cargopress.com"
}, void 0, "info@cargopress.com")))), _jsx("div", {
  className: "widget_pw_opening_time"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {}, void 0, _jsx("span", {
  className: "icon icons-ornament-left"
}), "OPENING TIME", _jsx("span", {
  className: "icon icons-ornament-right"
})), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Monday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Tuesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Wednesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Thursday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Friday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Saturday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  closed today"
}, void 0, _jsx("dt", {}, void 0, "Sunday"), _jsx("dd", {}, void 0, "CLOSED")))));

function Widget(props) {
  return _ref;
}

/* unused harmony default export */ var _unused_webpack_default_export = (Widget);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(163);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(161);
/* unused harmony reexport BreadCrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Widget__ = __webpack_require__(164);
/* unused harmony reexport Widget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(162);
/* unused harmony reexport FormEmail */





/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Hoàng Gia Khánh | Liên hệ';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/lien-he',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, contact, services, common}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(160).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Contact) {
        return {
          title,
          chunk: 'contact',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(Contact, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var _ref = _jsx('div', {}, void 0, _jsx('h1', {}, void 0, 'Error'), _jsx('p', {}, void 0, 'Sorry, a critical error occurred on this page.'));

function ErrorPage(props) {
  if (false) {
    const { error } = props;
    return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, error.name), _jsx('p', {}, void 0, error.message), _jsx('pre', {}, void 0, error.stack));
  }

  return _ref;
}


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Partial__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_slick__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_slick__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








var _ref = _jsx('br', {});

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('strong', {}, void 0, 'C\xF4ng ty c\u1ED5 ph\u1EA7n xu\u1EA5t nh\u1EADp kh\u1EA9u Ho\xE0ng Gia Kh\xE1nh');

var _ref4 = _jsx('strong', {}, void 0, 'Ho\xE0ng Gia Kh\xE1nh ');

var _ref5 = _jsx('hr', {});

var _ref6 = _jsx('div', {
  className: 'containerWr'
}, void 0, _jsx('div', {
  className: 'row brand'
}, void 0, _jsx('div', {
  className: 'col-lg-3 col-xs-6 '
}, void 0, _jsx('img', {
  src: '/otawa.jpg',
  alt: 'lamyco2'
})), _jsx('div', {
  className: 'col-lg-3 col-xs-6'
}, void 0, _jsx('img', {
  src: '/hokodai.jpg',
  alt: 'lamyco2'
})), _jsx('div', {
  className: 'col-lg-3 col-xs-6'
}, void 0, _jsx('img', {
  src: '/mokin.jpg',
  alt: 'lamyco2'
})), _jsx('div', {
  className: 'col-lg-3 col-xs-6'
}, void 0, _jsx('img', {
  src: '/lamyco.jpg',
  alt: 'lamyco2'
}))));

var _ref7 = _jsx('hr', {
  className: 'beep'
});

var _ref8 = _jsx('hr', {});

var _ref9 = _jsx('div', {
  id: 'slider',
  'data-slick': '{"slidesToShow": 4, "slidesToScroll": 4, "autoplay": true, "autoplaySpeed": 4000}'
}, void 0, _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'M\xE1y l\u1ECDc n\u01B0\u1EDBc Hokodai')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/1.png',
  alt: ''
}))), _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'Your Favourite!')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/2.png',
  alt: ''
}))), _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'Your Favourite!')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/3.png',
  alt: ''
}))), _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'Your Favourite!')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/4.png',
  alt: ''
}))), _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'Your Favourite!')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/4.png',
  alt: ''
}))), _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'Your Favourite!')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/3.png',
  alt: ''
}))), _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'Your Favourite!')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/2.png',
  alt: ''
}))), _jsx('div', {}, void 0, _jsx('div', {
  className: 'calloutWr'
}, void 0, _jsx('div', {
  className: 'callout top-right'
}, void 0, 'Your Favourite!')), _jsx('div', {
  className: 'imgWr'
}, void 0, _jsx('img', {
  src: '/product/1.png',
  alt: ''
}))));

var _ref10 = _jsx('hr', {});

var _ref11 = _jsx('a', {
  href: '#jack-lee-khong-chi-la-mot-dau-bep-tai-hoa-ma-con-la-nguoi-truyen-dam-thuc',
  title: 'Jack Lee \u2013 Kh\xF4ng ch\u1EC9 l\xE0 m\u1ED9t \u0111\u1EA7u b\u1EBFp t\xE0i hoa m\xE0 c\xF2n l\xE0 ng\u01B0\u1EDDi truy\u1EC1n \u0111am m\xEA \u1EA8m Th\u1EF1c'
}, void 0, _jsx('img', {
  width: 320,
  height: 176,
  src: '/anh1.jpeg',
  alt: true
}));

var _ref12 = _jsx('div', {
  className: 'post-excerpt'
}, void 0, 'X\xE3 h\u1ED9i ng\xE0y c\xE0ng ph\xE1t tri\u1EC3n nhanh ch\xF3ng k\xE9o theo nh\u1EEFng v\u1EA5n \u0111\u1EC1 nghi\xEAm tr\u1ECDng ph\xE1t sinh. \xD4 nhi\u1EC5m ngu\u1ED3n n\u01B0\u1EDBc d\u1EABn \u0111\u1EBFn thi\u1EBFu n\u01B0\u1EDBc ... ');

var _ref13 = _jsx('a', {
  href: '#kangaroo-nam-thu-2-lien-tiep-vao-top-100-doanh-nghiep-phat-trien-ben-vung',
  title: 'Ho\xE0ng Gia Kh\xE1nh n\u0103m th\u1EE9 2 li\xEAn ti\u1EBFp v\xE0o Top 100 doanh nghi\u1EC7p ph\xE1t tri\u1EC3n b\u1EC1n v\u1EEFng'
}, void 0, _jsx('img', {
  width: 320,
  height: 176,
  src: '/anh2.jpeg',
  className: 'scale-with-grid wp-post-image wp-post-image',
  alt: true
}));

var _ref14 = _jsx('div', {
  className: 'post-excerpt'
}, void 0, 'Nhi\u1EC1u ng\u01B0\u1EDDi ch\u1EC9 bi\u1EBFt r\u1EB1ng ch\xFAng ta ch\u1EC9 u\u1ED1ng n\u01B0\u1EDBc khi ch\xFAng ta c\u1EA3m th\u1EA5y kh\xE1t n\u01B0\u1EDBc. Nh\u01B0ng b\u1EA1n c\xF3 bi\u1EBFt r\u1EB1ng c\u01A1 th\u1EC3 ch\xFAng ta chi\u1EBFm h\u01A1n 70% l\xE0 n\u01B0\u1EDBc...');

var _ref15 = _jsx('a', {
  href: '#kangaroo-tien-gan-muc-tieu-chinh-phuc-thi-truong-700-trieu-dan',
  title: 'Ho\xE0ng Gia Kh\xE1nh ti\u1EBFn g\u1EA7n m\u1EE5c ti\xEAu chinh ph\u1EE5c th\u1ECB tr\u01B0\u1EDDng 700 tri\u1EC7u d\xE2n'
}, void 0, _jsx('img', {
  width: 320,
  height: 176,
  src: '/anh3.jpg',
  className: 'scale-with-grid wp-post-image wp-post-image',
  alt: true
}));

var _ref16 = _jsx('div', {
  className: 'post-excerpt'
}, void 0, 'D\u01B0\u1EDBi \u0111\xE2y l\xE0 nh\u1EEFng con s\u1ED1 n\xF3i l\xEAn ch\xFAng ta ph\u1EA3i chung tay ti\u1EBFt ki\u1EC7m n\u01B0\u1EDBc, v\xEC ti\u1EBFt ki\u1EC7m n\u01B0\u1EDBc ch\xEDnh l\xE0 t\u1EF1 c\u1EE9u l\u1EA5y t\u01B0\u01A1ng lai c\u1EE7a ch\xFAng ...');

class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  componentDidMount() {
    if (false) {
      $('#slider').slick({
        responsive: [{
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      });
    }
  }

  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      autoplay: true,
      speed: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return _jsx('div', {}, void 0, _jsx('div', {
      className: 'bannerWr'
    }, void 0, _jsx('div', {
      className: 'image banner',
      style: { background: 'linear-gradient( #004aca, #4775c1) !important', height: '45vw', width: '100vw', zIndex: 0, position: 'relative' }
    }, void 0, _jsx('div', {
      className: 'circle1 animated fadeIn',
      style: { width: '40vw', position: 'absolute', zIndex: 2, right: '45%', bottom: '3%' }
    }, void 0, _jsx('div', {
      className: 'spin noCPU'
    }, void 0, _jsx('img', {
      className: 'chorki-icon tran6 noCPU',
      src: '/circle01.png',
      alt: true,
      style: { width: '38vw' }
    }))), _jsx('div', {
      className: 'circle2 animated fadeIn',
      style: { width: '40vw', position: 'absolute', zIndex: 2, left: '50%', bottom: '5%' }
    }, void 0, _jsx('div', {
      className: 'spin noCPU'
    }, void 0, _jsx('img', {
      className: 'chorki-icon2 tran5 noCPU',
      src: '/circle01.png',
      alt: true,
      style: { width: '28vw' }
    }))), _jsx('div', {
      className: 'circle2 animated fadeIn',
      style: { width: '40vw', position: 'absolute', zIndex: 2, left: '48%', bottom: '55%' }
    }, void 0, _jsx('div', {
      className: 'spin noCPU'
    }, void 0, _jsx('img', {
      className: 'chorki-icon2 tran4 noCPU',
      src: '/circle01.png',
      alt: true,
      style: { width: '18vw' }
    }))), _jsx('span', {
      className: 'textHome textLeft'
    }, void 0, _jsx('figure', {}, void 0, _jsx('h1', {
      className: 'left',
      style: { textAlign: 'center' }
    }, void 0, 'OTAWA ', _ref, ' Si\xEAu ph\u1EA9m c\xF4ng ngh\u1EC7 l\u1ECDc nu\u1EDBc '))), _jsx('span', {
      className: 'textHome textRight'
    }, void 0, _jsx('figure', {}, void 0, _jsx('h1', {
      className: 'right',
      style: { textAlign: 'center' }
    }, void 0, 'Th\u01B0\u01A1ng hi\u1EC7u \u0111\u1EBFn t\u1EEB Nh\u1EADt B\u1EA3n'))), _jsx('img', {
      className: 'animated bounceInLeft',
      src: 'left.png',
      alt: true,
      style: { width: '13vw', position: 'absolute', zIndex: 2, right: '59%', bottom: '10%' }
    }), _jsx('img', {
      className: 'animated bounceInRight',
      src: 'right.png',
      alt: true,
      style: { width: '12vw', position: 'absolute', zIndex: 2, left: '58%', bottom: '20%' }
    }), _jsx('img', {
      className: 'background',
      src: '31.png',
      alt: 'chuong trinh khuyen mai 3 ngay 1 SH',
      style: { width: '100vw', height: '45vw', position: 'absolute', zIndex: 0 }
    }), _jsx('div', {
      className: 'light_opacity_img'
    }, void 0, _jsx('img', {
      className: 'light_img l1',
      src: '/Light.png',
      style: { position: 'absolute' }
    })), _jsx('div', {
      className: 'light_opacity_img'
    }, void 0, _jsx('img', {
      className: 'light_img l2',
      src: '/Light.png',
      style: { position: 'absolute' }
    })), _jsx('div', {
      className: 'light_opacity_img'
    }, void 0, _jsx('img', {
      className: 'light_img l3',
      src: '/Light.png',
      style: { position: 'absolute' }
    })), _jsx('div', {
      className: 'light_opacity_img'
    }, void 0, _jsx('img', {
      className: 'light_img l4',
      src: '/Light.png',
      style: { position: 'absolute' }
    })), _jsx('div', {
      className: 'light_opacity_img'
    }, void 0, _jsx('img', {
      className: 'light_img l5',
      src: '/Light.png',
      style: { position: 'absolute' }
    })), _jsx('div', {
      className: 'light_opacity_img'
    }, void 0, _jsx('img', {
      className: 'light_img l6',
      src: '/Light.png',
      style: { position: 'absolute' }
    })), _jsx('div', {
      style: { clear: 'both' }
    }))), _jsx('div', {
      className: 'containerWr'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('h2', {
      style: { textAlign: 'center', margin: '30px auto' }
    }, void 0, 'C\xF4ng ty c\u1ED5 ph\u1EA7n xu\u1EA5t nh\u1EADp kh\u1EA9u Ho\xE0ng Gia Kh\xE1nh'), _jsx('div', {
      className: 'col-sm-5'
    }, void 0, _jsx('img', {
      src: '/anhcty.jpg',
      alt: true,
      style: { maxWidth: '100%' }
    })), _jsx('div', {
      className: 'col-sm-7',
      style: {}
    }, void 0, _jsx('div', {
      id: 'dnn_ctr547351_ModuleContent',
      style: { padding: 5 }
    }, void 0, _jsx('div', {
      id: 'dnn_ctr547351_HtmlModule_HtmlModule_lblContent',
      className: 'Normal'
    }, void 0, _jsx('div', {
      style: { textAlign: 'justify', lineHeight: 2 }
    }, void 0, _jsx('span', {
      style: { fontFamily: 'arial,helvetica,sans-serif' }
    }, void 0, _jsx('span', {
      style: { fontSize: 12 }
    }, void 0, _jsx('em', {}, void 0, _jsx('span', {
      style: { color: '#ff0000' }
    }, void 0, _jsx('strong', {}, void 0, _jsx('span', {
      style: { fontSize: 14 }
    }, void 0, 'Ch\xE0o m\u1EEBng qu\xFD kh\xE1ch \u0111\xE3 gh\xE9 th\u0103m Website c\u1EE7a ch\xFAng t\xF4i. ')))), _ref2, 'Hi\u1EC7n nay ch\xFAng t\xF4i l\xE0 nh\xE0 ph\xE2n ph\u1ED1i s\u1EA3n ph\u1EA9m m\xE1y l\u1ECDc n\u01B0\u1EDBc nhi\u1EC1u s\u1EA3n ph\u1EA9m c\xF4ng ngh\u1EC7 cao kh\xE1c..'))), _jsx('div', {
      style: { textAlign: 'justify', lineHeight: 2 }
    }, void 0, _jsx('span', {
      style: { fontFamily: 'arial,helvetica,sans-serif' }
    }, void 0, _jsx('span', {
      style: { fontSize: 12 }
    }, void 0, 'H\u01B0\u1EDFng \u1EE9ng ch\u01B0\u01A1ng tr\xECnh v\xEC s\u1EE9c kh\u1ECFe c\u1EE7a c\u1ED9ng \u0111\u1ED3ng,', _jsx('span', {
      style: { fontSize: 14 }
    }, void 0, ' ', _jsx('span', {
      style: { color: '#000080' }
    }, void 0, _ref3), ' '), '\u0111\xE3 kh\xF4ng ng\u1EEBng nghi\xEAn c\u1EE9u, t\xECm hi\u1EC3u v\xE0 nh\u1EADp v\u1EC1 nh\u1EEFng s\u1EA3n ph\u1EA9m c\xF4ng ngh\u1EC7 cao nh\u1EA5t nh\u1EB1m b\u1EA3o v\u1EC7 m\xF4i tr\u01B0\u1EDDng, b\u1EA3o v\u1EC7 v\xE0 n\xE2ng cao s\u1EE9c kh\u1ECFe c\u1ED9ng \u0111\u1ED3ng.'))), _jsx('div', {
      style: { textAlign: 'justify', lineHeight: 2 }
    }, void 0, _jsx('span', {
      style: { fontFamily: 'arial,helvetica,sans-serif' }
    }, void 0, _jsx('span', {
      style: { fontSize: 12 }
    }, void 0, 'Nh\u1EEFng s\u1EA3n ph\u1EA9m c\u1EE7a ', _jsx('span', {
      style: { color: '#000080' }
    }, void 0, _jsx('span', {
      style: { fontSize: 14 }
    }, void 0, _ref4)), 'ph\xE2n ph\u1ED1i kh\xF4ng ch\u1EC9 t\u1ED1t cho Q\xFAy kh\xE1ch h\xE0ng s\u1EED d\u1EE5ng m\xE0 c\xF2n gi\xFAp cho Qu\xFD kh\xE1ch g\xF3p \xA0m\u1ED9t ph\u1EA7n v\xE0o ch\u01B0\u01A1ng tr\xECnh ', _jsx('span', {
      style: { fontSize: 14 }
    }, void 0, _jsx('strong', {}, void 0, _jsx('span', {
      style: { color: '#008000' }
    }, void 0, '\u201C B\u1EA3o v\u1EC7 m\xF4i tr\u01B0\u1EDDng v\xE0 N\xE2ng cao s\u1EE9c kh\u1ECFe c\u1ED9ng \u0111\u1ED3ng\u2019'))))))))))), _ref5, _jsx('div', {
      id: 'content_wrapper',
      style: { marginTop: 30 }
    }, void 0, _jsx('h3', {
      style: { textAlign: 'center', margin: '50px auto 30px auto' }
    }, void 0, 'Thu\u01A1ng hi\u1EC7u ', _jsx('span', {
      style: { fontWeight: 'lighter' }
    }, void 0, 'c\xF4ng ty')), _ref6, _ref7), _ref8, _jsx('div', {
      className: 'containerWr',
      style: { marginTop: 30 }
    }, void 0, _jsx('h3', {
      style: { textAlign: 'center', margin: '50px auto 30px auto' }
    }, void 0, 'S\u1EA3n ph\u1EA9m ', _jsx('span', {
      style: { fontWeight: 'lighter' }
    }, void 0, 'n\u1ED5i b\u1EADt')), _ref9), _ref10, _jsx('div', {
      className: 'containerWr'
    }, void 0, _jsx('h3', {
      style: { textAlign: 'center', margin: '50px auto 30px auto' }
    }, void 0, 'Tin t\u1EE9c ', _jsx('span', {
      style: { fontWeight: 'lighter' }
    }, void 0, 'n\u1ED5i b\u1EADt')), _jsx('div', {
      className: 'row',
      style: { marginTop: 30 }
    }, void 0, _jsx('div', {
      className: 'col-md-4 col-12 newWr'
    }, void 0, _jsx('div', {
      className: 'tintucWr'
    }, void 0, _ref11, _jsx('div', {
      className: 'tintuc-desc',
      style: { background: "#32529d", color: 'white' }
    }, void 0, _jsx('h4', {
      style: { color: 'white' }
    }, void 0, 'M\xE1y l\u1ECDc n\u01B0\u1EDBc gia \u0111\xECnh c\xF3 th\u1EADt s\u1EF1 c\u1EA7n thi\u1EBFt kh\xF4ng?'), _ref12))), _jsx('div', {
      className: 'col-md-4 col-12 newWr'
    }, void 0, _jsx('div', {
      className: 'tintucWr'
    }, void 0, _ref13, _jsx('div', {
      className: 'tintuc-desc',
      style: { background: "#32529d", color: 'white' }
    }, void 0, _jsx('h4', {
      style: { color: 'white' }
    }, void 0, 'B\u1EA1n c\xF3 c\u1EA7n u\u1ED1ng n\u01B0\u1EDBc s\u1EA1ch m\u1ED7i ng\xE0y ?'), _ref14))), _jsx('div', {
      className: 'col-md-4 col-12 newWr'
    }, void 0, _jsx('div', {
      className: 'tintucWr'
    }, void 0, _ref15, _jsx('div', {
      className: 'tintuc-desc',
      style: { background: "#32529d", color: 'white' }
    }, void 0, _jsx('h4', {
      style: { color: 'white' }
    }, void 0, 'T\u1EA1i sao ch\xFAng ta ph\u1EA3i ti\u1EBFt ki\u1EC7m ngu\u1ED3n n\u01B0\u1EDBc s\u1EA1ch?'), _ref16))))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  to: '/about',
  className: 'read-more'
}, void 0, 'Xem th\xEAm'));

var _ref2 = _jsx('input', {
  type: 'text',
  name: 'maximus'
});

var _ref3 = _jsx('input', {
  type: 'hidden',
  name: 'subject',
  defaultValue: 'CargoPress: Quick Quote Request'
});

var _ref4 = _jsx('div', {
  className: 'contact-form-small'
}, void 0, _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12  col-md-6'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'First and Last Name *',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'name',
  required: true
})), _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'email',
  placeholder: 'E-mail address',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'email',
  required: true
})), _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Phone',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'phone',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12  col-md-6'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Subject *',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'subject',
  required: true
})), _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('textarea', {
  placeholder: 'Message *',
  'aria-invalid': 'false',
  rows: 10,
  cols: 40,
  name: 'message',
  required: true,
  defaultValue: ""
}))), _jsx('div', {
  className: 'col-xs-12  col-md-12'
}, void 0, _jsx('input', {
  type: 'submit',
  className: 'btn btn-primary pull-right',
  defaultValue: 'G\u1EECI TIN NH\u1EAEN'
}))));

function AboutUs(props) {
  const aboutUs = props.data.information.value.home.aboutUs;
  const form = props.data.information.value.home.form;
  return _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'row margin-bottom-60'
  }, void 0, _jsx('div', {
    className: 'col-sm-6'
  }, void 0, _jsx('h3', {
    className: 'widget-title big lined'
  }, void 0, _jsx('span', {}, void 0, aboutUs.title)), _jsx('div', {
    dangerouslySetInnerHTML: { __html: aboutUs.body }
  }), _ref), _jsx('div', {
    className: 'col-sm-6',
    id: 'quickQuoteForm_wrapper'
  }, void 0, _jsx('div', {
    className: 'featured-widget'
  }, void 0, _jsx('h3', {
    className: 'widget-title'
  }, void 0, form.header), _jsx('p', {}, void 0, form.body), _jsx('form', {
    'data-toggle': 'validator',
    method: 'post',
    action: 'form.php',
    id: 'quickQuoteForm',
    className: 'aSubmit'
  }, void 0, _jsx('div', {
    style: { display: 'none' }
  }, void 0, _ref2), _ref3, _ref4)))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AboutUs);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx("hr", {
  className: "hr-quote"
});

function CoreValue(props) {
  const coreValue = props.data.information.value.home.coreValue;
  return _jsx("div", {
    className: "values margin-bottom-60"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("div", {
    className: "col-sm-8 col-sm-offset-2"
  }, void 0, _jsx("h3", {}, void 0, coreValue.title), _jsx("p", {
    className: "text-center"
  }, void 0, _jsx("span", {}, void 0, coreValue.author)), _ref, _jsx("p", {
    className: "text-center"
  }, void 0, coreValue.body))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CoreValue);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('div', {
  className: 'latest-news__date'
}, void 0, _jsx('div', {
  className: 'latest-news__date__month'
}, void 0, 'May'), _jsx('div', {
  className: 'latest-news__date__day'
}, void 0, '6'));

var _ref2 = _jsx('div', {
  className: 'latest-news__author'
}, void 0, '\u0110\u0103ng b\u1EDFi Admin');

var _ref3 = _jsx('div', {
  className: 'latest-news__author'
}, void 0, '\u0110\u0103ng b\u1EDFi Admin');

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'latest-news  latest-news--more-news',
  to: '/news'
}, void 0, 'Xem Th\xEAm');

function News(props) {

  const recentNews = props.data.recentNews.value;
  const news1 = recentNews.slice(0, 2);
  const news2 = recentNews.slice(2);

  return _jsx('div', {
    className: 'news'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, news1.map((news, index) => {
    return _jsx('div', {
      className: 'col-sm-4 margin-bottom-30'
    }, index, _jsx('div', {
      className: 'widget_pw_latest_news'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      className: 'latest-news',
      to: '/news/' + news.slug
    }, void 0, _ref, _jsx('img', {
      alt: 'Top benefits of hiring our trucking service',
      className: 'wp-post-image',
      src: news.coverUrl
    }), _jsx('div', {
      className: 'latest-news__content'
    }, void 0, _jsx('h4', {
      className: 'latest-news__title'
    }, void 0, news.title), _ref2))));
  }), _jsx('div', {
    className: 'col-sm-4 margin-bottom-30'
  }, void 0, _jsx('div', {
    className: 'widget_pw_latest_news'
  }, void 0, news2.map((news, index) => {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      className: 'latest-news  latest-news--inline',
      to: '/news/' + news.slug
    }, index, _jsx('div', {
      className: 'latest-news__content'
    }, void 0, _jsx('h4', {
      className: 'latest-news__title'
    }, void 0, news.title), _ref3));
  }), _ref4)))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (News);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('h3', {
  className: 'widget-title lined big'
}, void 0, _jsx('span', {}, void 0, 'C\xC1C \u0110\u1ED0I T\xC1C'));

function Partner(props) {
  const partners = props.data.information.value.home.partners;
  return _jsx('div', {
    className: 'container',
    style: { marginTop: 60 }
  }, void 0, _jsx('div', {
    className: 'row margin-bottom-60 margin-top-60'
  }, void 0, _jsx('div', {
    className: 'col-sm-12'
  }, void 0, _jsx('div', {
    className: 'widget_text'
  }, void 0, _ref, _jsx('div', {
    className: 'logo-panel'
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-xs-12  col-sm-2'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: partners.url1
  }, void 0, _jsx('img', {
    alt: 'Client',
    src: partners.img1
  }))), _jsx('div', {
    className: 'col-xs-12  col-sm-2'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: partners.url2
  }, void 0, _jsx('img', {
    alt: 'Client',
    src: partners.img2
  }))), _jsx('div', {
    className: 'col-xs-12  col-sm-2'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: partners.url3
  }, void 0, _jsx('img', {
    alt: 'Client',
    src: partners.img3
  }))), _jsx('div', {
    className: 'col-xs-12  col-sm-2'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: partners.url4
  }, void 0, _jsx('img', {
    alt: 'Client',
    src: partners.img4
  }))), _jsx('div', {
    className: 'col-xs-12  col-sm-2'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: partners.url5
  }, void 0, _jsx('img', {
    alt: 'Client',
    src: partners.img5
  }))), _jsx('div', {
    className: 'col-xs-12  col-sm-2'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: partners.url6
  }, void 0, _jsx('img', {
    alt: 'Client',
    src: partners.img6
  })))))))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Partner);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'read-more',
  to: '/about'
}, void 0, 'XEM TH\xCAM'));

var _ref2 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-sm-12'
}, void 0, _jsx('h3', {
  className: 'widget-title big lined'
}, void 0, _jsx('span', {}, void 0, 'C\xC1C D\u1ECACH V\u1EE4 C\u1EE6A CH\xDANG T\xD4I'))));

var _ref3 = _jsx('i', {
  className: 'fa fa-dropbox'
});

var _ref4 = _jsx('i', {
  className: 'fa fa-archive'
});

var _ref5 = _jsx('i', {
  className: 'fa fa-truck'
});

var _ref6 = _jsx('i', {
  className: 'fa fa-home'
});

var _ref7 = _jsx('i', {
  className: 'fa fa-truck'
});

var _ref8 = _jsx('i', {
  className: 'fa fa-home'
});

function Service(props) {

  const home = props.data.information.value.home;
  const services = props.data.information.value.services;

  return _jsx('div', {
    className: 'container',
    role: 'main'
  }, void 0, _jsx('div', {
    className: 'row jumbotron-overlap first'
  }, void 0, _jsx('div', {
    className: 'col-sm-3'
  }, void 0, _jsx('div', {
    className: 'featured-widget'
  }, void 0, _jsx('h3', {
    className: 'widget-title'
  }, void 0, home.aboutTitle), _jsx('p', {}, void 0, home.aboutBody), _ref)), _jsx('div', {
    className: 'col-sm-3'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.about1.path
  }, void 0, _jsx('img', {
    alt: home.about1.title,
    className: 'post-image',
    src: home.about1.img
  })), _jsx('h5', {
    className: 'page-box__title'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.about1.path
  }, void 0, home.about1.title)), _jsx('p', {}, void 0, home.about1.body, ' ...'), _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    className: 'read-more',
    to: home.about1.path
  }, void 0, 'Xem th\xEAm'))), _jsx('div', {
    className: 'col-sm-3'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.about2.path
  }, void 0, _jsx('img', {
    alt: home.about2.title,
    className: 'post-image',
    src: home.about2.img
  })), _jsx('h5', {
    className: 'page-box__title'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.about2.path
  }, void 0, home.about2.title)), _jsx('p', {}, void 0, home.about2.body, ' ...'), _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    className: 'read-more',
    to: home.about2.path
  }, void 0, 'Xem th\xEAm'))), _jsx('div', {
    className: 'col-sm-3'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.about3.path
  }, void 0, _jsx('img', {
    alt: home.about3.title,
    className: 'post-image',
    src: home.about3.img
  })), _jsx('h5', {
    className: 'page-box__title'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.about3.path
  }, void 0, home.about3.title)), _jsx('p', {}, void 0, home.about3.body, ' ...'), _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    className: 'read-more',
    to: home.about3.path
  }, void 0, 'Xem th\xEAm')))), _ref2, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-sm-4'
  }, void 0, _jsx('div', {
    className: 'widget_pw_icon_box margin-bottom-30'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.service1.path,
    className: 'icon-box'
  }, void 0, _ref3, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, home.service1.title), _jsx('span', {
    className: 'icon-box__subtitle'
  }, void 0, home.service1.description))), _jsx('div', {
    className: 'widget_pw_icon_box margin-bottom-30'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.service2.path,
    className: 'icon-box'
  }, void 0, _ref4, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, home.service2.title), _jsx('span', {
    className: 'icon-box__subtitle'
  }, void 0, home.service2.description)))), _jsx('div', {
    className: 'col-sm-4'
  }, void 0, _jsx('div', {
    className: 'widget_pw_icon_box margin-bottom-30'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.service3.path,
    className: 'icon-box'
  }, void 0, _ref5, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, home.service3.title), _jsx('span', {
    className: 'icon-box__subtitle'
  }, void 0, ' ', home.service3.description, ' '))), _jsx('div', {
    className: 'widget widget_pw_icon_box margin-bottom-30'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.service4.path,
    className: 'icon-box'
  }, void 0, _ref6, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, ' ', home.service4.title, ' '), _jsx('span', {
    className: 'icon-box__subtitle'
  }, void 0, home.service4.description)))), _jsx('div', {
    className: 'col-sm-4'
  }, void 0, _jsx('div', {
    className: 'widget_pw_icon_box margin-bottom-30'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.service5.path,
    className: 'icon-box'
  }, void 0, _ref7, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, home.service5.title), _jsx('span', {
    className: 'icon-box__subtitle'
  }, void 0, ' ', home.service5.description, ' '))), _jsx('div', {
    className: 'widget widget_pw_icon_box margin-bottom-30'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: home.service6.path,
    className: 'icon-box'
  }, void 0, _ref8, _jsx('h4', {
    className: 'icon-box__title'
  }, void 0, ' ', home.service6.title, ' '), _jsx('span', {
    className: 'icon-box__subtitle'
  }, void 0, home.service6.description))))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Service);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('p', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  to: '/service',
  className: 'btn btn-primary'
}, void 0, 'D\u1ECACH V\u1EE4 C\u1EE6A CH\xDANG T\xD4I'), ' \xA0', _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  to: '/contact',
  className: 'btn btn-secondary'
}, void 0, 'LI\xCAN H\u1EC6'));

var _ref2 = _jsx('div', {
  className: 'w69b-screencastify-mouse'
});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  target: '_self',
  to: '/about',
  className: 'btn btn-primary'
}, void 0, 'CHI TI\u1EBET');

var _ref4 = _jsx('div', {
  className: 'w69b-screencastify-mouse'
});

var _ref5 = _jsx('div', {
  className: 'container'
}, void 0, _jsx('a', {
  'data-slide': 'prev',
  role: 'button',
  href: '#headerCarousel',
  className: 'left jumbotron__control'
}, void 0, _jsx('i', {
  className: 'fa  fa-caret-left'
})), _jsx('a', {
  'data-slide': 'next',
  role: 'button',
  href: '#headerCarousel',
  className: 'right jumbotron__control'
}, void 0, _jsx('i', {
  className: 'fa  fa-caret-right'
})));

function Slide(props) {
  const home = props.data.information.value.home;
  return _jsx('div', {
    className: 'jumbotron jumbotron--with-captions'
  }, void 0, _jsx('div', {
    'data-interval': 5000,
    'data-ride': 'carousel',
    id: 'headerCarousel',
    className: 'carousel slide'
  }, void 0, _jsx('div', {
    className: 'carousel-inner'
  }, void 0, _jsx('div', {
    className: 'item'
  }, void 0, _jsx('img', {
    alt: home.slideTitle1,
    src: home.slideImg1
  }), _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'jumbotron-content'
  }, void 0, _jsx('div', {
    className: 'jumbotron-content__title'
  }, void 0, _jsx('h1', {}, void 0, home.slideTitle1)), _jsx('div', {
    className: 'jumbotron-content__description'
  }, void 0, _jsx('p', {
    className: 'p1'
  }, void 0, _jsx('span', {
    className: 's1'
  }, void 0, home.slideBody1)), _ref, _ref2)))), _jsx('div', {
    className: 'item active'
  }, void 0, _jsx('img', {
    alt: home.slideTitle2,
    src: home.slideImg2
  }), _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'jumbotron-content'
  }, void 0, _jsx('div', {
    className: 'jumbotron-content__title'
  }, void 0, _jsx('h1', {}, void 0, home.slideTitle2)), _jsx('div', {
    className: 'jumbotron-content__description'
  }, void 0, _jsx('p', {
    className: 'p1'
  }, void 0, _jsx('span', {
    className: 's1'
  }, void 0, home.slideBody2)), _ref3, _ref4))))), _ref5));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Slide);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx("h3", {
  className: "widget-title lined big"
}, void 0, _jsx("span", {}, void 0, "KH\xC1CH H\xC0NG \u0110\xC1NH GI\xC1"));

var _ref2 = _jsx("div", {
  className: "testimonial__carousel"
}, void 0, _jsx("a", {
  "data-slide": "prev",
  href: "#testimonalCarousel",
  className: "testimonial__carousel--left"
}, void 0, _jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-caret-left"
}), _jsx("span", {
  role: "button",
  className: "sr-only"
}, void 0, "Next")), _jsx("a", {
  "data-slide": "next",
  href: "#testimonalCarousel",
  className: "testimonial__carousel--right"
}, void 0, _jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-caret-right"
}), _jsx("span", {
  role: "button",
  className: "sr-only"
}, void 0, "Previous")));

function Testimonial(props) {

  const testimonials = props.data.information.value.home.testimonials;

  return _jsx("div", {
    className: "testimonials"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("div", {
    className: "row margin-bottom-60"
  }, void 0, _jsx("div", {
    className: "col-sm-12"
  }, void 0, _jsx("div", {
    className: "testimonial"
  }, void 0, _ref, _ref2, _jsx("div", {
    "data-interval": "false",
    "data-ride": "carousel",
    className: "carousel slide",
    id: "testimonalCarousel"
  }, void 0, _jsx("div", {
    role: "listbox",
    className: "carousel-inner"
  }, void 0, _jsx("div", {
    className: "item"
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _jsx("div", {
    className: "col-xs-12  col-sm-6"
  }, void 0, _jsx("blockquote", {}, void 0, _jsx("p", {
    className: "testimonial__quote"
  }, void 0, testimonials.testimonial1), _jsx("cite", {
    className: "testimonial__author"
  }, void 0, testimonials.name1, _jsx("span", {
    className: "testimonial__author-description"
  }, void 0, ", ", testimonials.job1)))), _jsx("div", {
    className: "col-xs-12  col-sm-6"
  }, void 0, _jsx("blockquote", {}, void 0, _jsx("p", {
    className: "testimonial__quote"
  }, void 0, testimonials.testimonial2), _jsx("cite", {
    className: "testimonial__author"
  }, void 0, testimonials.name2, _jsx("span", {
    className: "testimonial__author-description"
  }, void 0, ", ", testimonials.job2)))))), _jsx("div", {
    className: "item active"
  }, void 0, _jsx("div", {
    className: "row"
  }, void 0, _jsx("div", {
    className: "col-xs-12  col-sm-6"
  }, void 0, _jsx("blockquote", {}, void 0, _jsx("p", {
    className: "testimonial__quote"
  }, void 0, testimonials.testimonial3), _jsx("cite", {
    className: "testimonial__author"
  }, void 0, testimonials.name3, _jsx("span", {
    className: "testimonial__author-description"
  }, void 0, ", ", testimonials.job3)))), _jsx("div", {
    className: "col-xs-12  col-sm-6"
  }, void 0, _jsx("blockquote", {}, void 0, _jsx("p", {
    className: "testimonial__quote"
  }, void 0, testimonials.testimonial4), _jsx("cite", {
    className: "testimonial__author"
  }, void 0, testimonials.name4, _jsx("span", {
    className: "testimonial__author-description"
  }, void 0, ", ", testimonials.job4)))))))))))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Testimonial);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slide__ = __webpack_require__(174);
/* unused harmony reexport Slide */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service__ = __webpack_require__(173);
/* unused harmony reexport Service */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__News__ = __webpack_require__(171);
/* unused harmony reexport News */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CoreValue__ = __webpack_require__(170);
/* unused harmony reexport CoreValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AboutUs__ = __webpack_require__(169);
/* unused harmony reexport AboutUs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Testimonial__ = __webpack_require__(175);
/* unused harmony reexport Testimonial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Partner__ = __webpack_require__(172);
/* unused harmony reexport Partner */









/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, services, common, about, home}'
      // let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'
      // let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'
      // let productCategories = 'productCategories:getProductCategories{title, slug, created_at}'
      // let recentProduct = 'recentProduct:get5RecentProduct{ coverUrl, category, slug, title, body, price, view, created_at}'
      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__["hideLoading"])());

      return {
        title: 'Hoàng Gia Khánh | Máy lọc nước',
        component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
          data: store.getState().data
        }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], {
          data: store.getState().data
        }))
      };
    })();
  }

});

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(177).default, __webpack_require__(206).default, __webpack_require__(183).default, __webpack_require__(207).default,
  // require('./allService').default,
  // require('./service').default,
  // require('./tracking').default,
  __webpack_require__(107).default, __webpack_require__(184).default, __webpack_require__(185).default,
  // require('./category').default,
  __webpack_require__(190).default, __webpack_require__(202).default, __webpack_require__(166).default, __webpack_require__(197).default, __webpack_require__(152).default, __webpack_require__(159).default, __webpack_require__(120).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(192).default],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'}`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx('div', {
  id: 'breadCrumb',
  className: 'clearfix t-breadCrumb'
}, void 0, _jsx('div', {
  className: 'main clearfix'
}, void 0, _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('a', {
  href: '/',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'Trang ch\u1EE7'))), _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('span', {
  className: 'breadSep'
}, void 0, '>'), _jsx('a', {
  className: 'current',
  href: '#',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'Ph\u1EE5 ki\u1EC7n m\xE1y l\u1ECDc nu\u1EDBc')))));

var _ref2 = _jsx('h1', {}, void 0, 'Trang linh ph\u1EE5 ki\u1EC7n m\xE1y l\u1ECDc n\u01B0\u1EDBc');

var _ref3 = _jsx('div', {
  id: 'Gallery'
}, void 0, _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/vandientuxanh.jpg',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'Van \u0111i\u1EC7n t\u1EED xanh')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/vandientughi.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'Van \u0111i\u1EC7n t\u1EED ghi')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/ruotmayotawa.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'Ru\u1ED9t m\xE1y OTAWA')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/quatlammat.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'Qu\u1EA1t l\xE0m m\xE1t')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/nguongoldkorea.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'Ngu\u1ED3n Gold Korea')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/nguonghikorea.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'Ngu\u1ED3n ghi Korea')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/loitaokhoangtokorea.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'L\xF5i tao kho\xE1ng to Korea')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/loitaokhoangkorea.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'L\xF5i t\u1EA1o kho\xE1ng Korea')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/loitaokhoangkoreamaughi.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'L\xF5i t\u1EA1o kho\xE1ng Korea m\xE0u ghi')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/loitaokhoangkorea3.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'L\xF5i tao kho\xE1ng Korea 3')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/loilocso2.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'L\xF5i l\u1ECDc s\u1ED1 2')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/loi12cocmica.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'L\xF5i 1,2 c\u1ED1c mica')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/donghoap.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, '\u0110\u1ED3ng h\u1ED3 \xE1p')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/denuv.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, '\u0110\xE8n UV')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/denbao.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, '\u0110\xE8n b\xE1o')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/cocvat.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'C\u1ED1c v\xE1t')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/cocvatvang.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'C\u1ED1c v\xE1t v\xE0ng')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/cocso1mica.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'C\u1ED1c s\u1ED1 1 b\u1ED9 c\u1ED1c mica')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/cocbeomaugold.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'C\u1ED1c b\xE9o m\xE0u gold')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/chanbanhxe.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'Ch\xE2n b\xE1nh xe')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/bomloai1.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'B\u01A1m lo\u1EA1i 1')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/bomloai2.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'B\u01A1m lo\u1EA1i 2')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/boloilochokodai.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'B\u1ED9 l\xF5i l\u1ECDc hokodai')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/binhnong.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'B\xECnh n\xF3ng')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/binhaomautrang.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, 'B\xECnh \xE1o m\xE0u tr\u1EAFng')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/aothapjeak.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, '\xC1o th\u1EA5p jeak')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/aocaojeak.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, '\xC1o cao jeak')), _jsx('div', {
  className: 'gallery-item'
}, void 0, _jsx('a', {
  href: 'http://abvichico.com/images/full/Exterior2.jpg'
}, void 0, _jsx('img', {
  src: '/lpk/1B4A0367.png',
  alt: 'Exterior'
})), _jsx('div', {}, void 0, '1B4A0367')));

function About(props) {

  // let recentNews = this.props.data.recentNews.value
  // let allProducts = this.props.data.allProducts.value
  // let productCategories = this.props.data.productCategories.value
  //
  // let category = undefined
  //
  // if(this.props.slug){
  //   category = productCategories.find(p => p.slug === this.props.slug)
  // }

  return _jsx('div', {}, void 0, _ref, _jsx('div', {
    id: 'content_wrapper',
    className: 'product_layout main clearfix'
  }, void 0, _ref2, _ref3));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(181);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(180);
/* unused harmony reexport BreadCrumb */



/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Hoàng Gia Khánh | Danh sách sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/linh-kien',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'

      // let productCategories = 'productCategories:getProductCategories{title, slug, created_at}'
      // let products = 'allProducts:getAllProduct{ coverUrl, category, slug, title, body, price, view, created_at}'
      // let information = 'information{id, about, services, common}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(179).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (About) {
        return {
          title,
          chunk: 'linhkien',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(About, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Happy green | Tin tức';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/tin-tuc',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());
      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, contact, services, common}'
      // let allNews = 'allNews:getAllPosts{title, coverUrl, slug, public, description, view, category, created_at}'
      // let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'
      // let categories = 'categories:getCategories{title, slug, created_at}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(35).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (News) {
        return {
          title,
          description: seo.description || '',
          seo: seo,
          chunk: 'news',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(News, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Happy green | Tin tức';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/tin-tuc/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());
      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, contact, services, common}'
      let allNews = 'allNews:getAllPostsByCategory(slug: "' + params.slug + '"){title, coverUrl, slug, public, description, view, category, created_at}';
      let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}';
      let categories = 'categories:getCategories{title, slug, created_at}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + allNews + recentNews + categories + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(35).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (News) {
        return {
          title,
          description: seo.description || '',
          seo: seo,
          chunk: 'news',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(News, {
            data: store.getState().data,
            slug: params.slug
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx('i', {
  className: 'icons fa fa-calendar-o'
}, void 0, ' ');

var _ref2 = _jsx('div', {
  className: 'col-1'
}, void 0, _jsx('div', {
  className: 'search-widget widget'
}, void 0, _jsx('form', {}, void 0, _jsx('div', {
  className: 'input-group search-wrapper'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Search...',
  className: 'search-input form-control'
}), _jsx('span', {
  className: 'input-group-btn'
}, void 0, _jsx('button', {
  type: 'submit',
  className: 'btn submit-btn'
}, void 0, _jsx('span', {
  className: 'fa fa-search'
})))))));

var _ref3 = _jsx('div', {
  className: 'title-widget'
}, void 0, 'B\xE0i vi\u1EBFt m\u1EDBi');

var _ref4 = _jsx('div', {
  className: 'title-widget'
}, void 0, 'Danh m\u1EE5c');

var _ref5 = _jsx('div', {
  className: 'col-2'
}, void 0, _jsx('div', {
  className: 'gallery-widget widget'
}, void 0, _jsx('div', {
  className: 'title-widget'
}, void 0, 'from gallery'), _jsx('div', {
  className: 'content-widget'
}, void 0, _jsx('ul', {
  className: 'list-unstyled list-inline'
}, void 0, _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-5.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-5.jpg',
  alt: 'gallery image 1',
  className: 'img-responsive'
}))), _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-2.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-2.jpg',
  alt: 'gallery image 2',
  className: 'img-responsive'
}))), _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-7.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-7.jpg',
  alt: 'gallery image 3',
  className: 'img-responsive'
}))), _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-8.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-8.jpg',
  alt: 'gallery image 4',
  className: 'img-responsive'
}))), _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-6.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-6.jpg',
  alt: 'gallery image 5',
  className: 'img-responsive'
}))), _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-9.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-9.jpg',
  alt: 'gallery image 6',
  className: 'img-responsive'
}))), _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-4.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-4.jpg',
  alt: 'gallery image 7',
  className: 'img-responsive'
}))), _jsx('li', {}, void 0, _jsx('a', {
  href: '/assets/images/news/image-11.jpg',
  'data-fancybox-group': 'gallery',
  className: 'thumb fancybox'
}, void 0, _jsx('img', {
  src: '/assets/images/news/image-11.jpg',
  alt: 'gallery image 8',
  className: 'img-responsive'
})))))), _jsx('div', {
  className: 'social-widget widget'
}, void 0, _jsx('div', {
  className: 'title-widget'
}, void 0, 'social'), _jsx('div', {
  className: 'content-widget'
}, void 0, _jsx('ul', {
  className: 'list-unstyled list-inline'
}, void 0, _jsx('li', {}, void 0, _jsx('a', {
  href: 'https://fb.com/happygreen.vn',
  className: 'social-icon fa fa-facebook'
}))))));

function NewsDetail(props) {

  const news = props.data.news.value;
  const recentNews = props.data.recentNews.value;
  const categories = props.data.categories.value;

  return _jsx('div', {}, void 0, _jsx('div', {
    className: 'main-contents'
  }, void 0, _jsx('section', {
    className: 'banner blog-detail'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'morepage-banner'
  }, void 0, _jsx('h2', {
    className: 'title'
  }, void 0, news.title)))), _jsx('div', {
    className: 'page-main padding-top-100 padding-bottom-100'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-md-8 col-xs-12 main-left'
  }, void 0, _jsx('div', {
    className: 'blog-detail-wrapper'
  }, void 0, _jsx('div', {
    className: 'content-wrapper'
  }, void 0, _jsx('div', {
    className: 'title'
  }, void 0, news.title), _jsx('div', {
    className: 'block-info'
  }, void 0, _jsx('div', {
    className: 'block'
  }, void 0, _ref, _jsx('a', {
    href: '#',
    className: 'link'
  }, void 0, __WEBPACK_IMPORTED_MODULE_3_moment___default()(news.created_at).format('DD/MM/YYYY')))), _jsx('div', {
    className: 'description',
    dangerouslySetInnerHTML: { __html: news.body }
  }, void 0)))), _jsx('div', {
    className: 'col-md-4 col-xs-12 sidebar'
  }, void 0, _ref2, _jsx('div', {
    className: 'col-2'
  }, void 0, _jsx('div', {
    className: 'recent-post-widget widget'
  }, void 0, _ref3, _jsx('div', {
    className: 'content-widget'
  }, void 0, _jsx('div', {
    className: 'recent-post-list'
  }, void 0, recentNews.map((tintuc, idx) => {
    return _jsx('div', {
      className: 'single-recent-post-widget'
    }, idx, _jsx('a', {
      href: `/p/${tintuc.slug}`,
      className: 'thumb img-wrapper'
    }, void 0, _jsx('img', {
      src: tintuc.coverUrl,
      alt: ''
    })), _jsx('div', {
      className: 'post-info'
    }, void 0, _jsx('div', {
      className: 'meta-info'
    }, void 0, _jsx('span', {}, void 0, __WEBPACK_IMPORTED_MODULE_3_moment___default()(tintuc.created_at).format('DD/MM/YYYY'))), _jsx('a', {
      href: `/p/${tintuc.slug}`
    }, void 0, _jsx('div', {
      className: 'description'
    }, void 0, tintuc.title))));
  })))), _jsx('div', {
    className: 'categories-widget widget'
  }, void 0, _ref4, _jsx('div', {
    className: 'content-widget'
  }, void 0, _jsx('ul', {
    className: 'widget-list'
  }, void 0, categories.map(danhmuc => {
    return _jsx('li', {
      className: 'single-widget-item'
    }, void 0, _jsx('a', {
      href: `/danh-muc/${danhmuc.slug}`,
      className: 'link'
    }, void 0, _jsx('span', {
      className: 'fa-custom category'
    }, void 0, danhmuc.title)));
  }))))), _ref5))))));
}

function findCategoryBySlug(slug, categories) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].slug === slug) {
      return categories[i];
    }
  }
  return { slug: '/', title: 'Không tồn tại' };
}

/* harmony default export */ __webpack_exports__["default"] = (NewsDetail);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(188);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(187);
/* unused harmony reexport BreadCrumb */



/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Chi tiết tin tức';


/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/p/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());
      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, services, common}'
      let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}';
      let categories = 'categories:getCategories{title, slug, created_at}';
      let news = 'news:getOnePost(slug: "' + params.slug + '"){ coverUrl, category, slug, public, title, description, body, view, tags, created_at}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + recentNews + news + categories + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(186).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (NewsDetail) {
        return {
          title: store.getState().data.news.value.title,
          description: store.getState().data.news.value.description,
          chunk: 'newsDetail',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(NewsDetail, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






function NotFound(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.container,
    style: { minHeight: 800, backgroundColor: 'grey', color: 'white', marginTop: 0 }
  }, void 0));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a)(NotFound));

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(191);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Page Not Found';

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], {
  title: title
}));

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    return {
      title,
      component: _ref,
      status: 404
    };
  }

});

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(196);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('div', {
  id: 'breadCrumb',
  className: 'clearfix t-breadCrumb'
}, void 0, _jsx('div', {
  className: 'main clearfix'
}, void 0, _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('a', {
  href: '#',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'Trang ch\u1EE7'))), _jsx('div', {
  className: 'breadItem',
  itemScope: true,
  itemType: 'http://data-vocabulary.org/Breadcrumb'
}, void 0, _jsx('span', {
  className: 'breadSep'
}, void 0, '>'), _jsx('a', {
  className: 'current',
  href: '#ve-chung-toi-sg1.html',
  itemProp: 'url'
}, void 0, _jsx('span', {
  itemProp: 'title'
}, void 0, 'V\u1EC1 ch\xFAng t\xF4i')))));

var _ref2 = _jsx('div', {
  className: 'clear'
});

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('br', {});

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('div', {
  className: 't-main_sidebar col-md-3'
}, void 0, _jsx('h3', {
  className: 'title-sigle-right'
}, void 0, 'Ho\xE0ng Gia Kh\xE1nh vi\u1EC7t nam'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#ve-chung-toi-sg1.html',
  title: 'V\u1EC1 ch\xFAng t\xF4i',
  className: 't-active'
}, void 0, 'V\u1EC1 ch\xFAng t\xF4i ')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#gia-tri-cot-loi-sg2.html',
  title: 'Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i'
}, void 0, 'Gi\xE1 tr\u1ECB c\u1ED1t l\xF5i')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#tam-nhin-va-su-menh-sg4.html',
  title: 'T\u1EA7m nh\xECn v\xE0 S\u1EE9 m\u1EC7nh'
}, void 0, 'T\u1EA7m nh\xECn v\xE0 S\u1EE9 m\u1EC7nh ')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#thanh-tich-dat-duoc-sg5.html',
  title: 'Th\xE0nh t\xEDch \u0111\u1EA1t \u0111\u01B0\u1EE3c'
}, void 0, 'Th\xE0nh t\xEDch \u0111\u1EA1t \u0111\u01B0\u1EE3c')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#ban-tin-Ho\xE0ng Gia Kh\xE1nh-cc5'
}, void 0, ' B\u1EA3n tin Ho\xE0ng Gia Kh\xE1nh')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#trach-nhiem-xa-hoi-cc25'
}, void 0, ' Tr\xE1ch nhi\u1EC7m x\xE3 h\u1ED9i')), _jsx('li', {}, void 0, _jsx('img', {
  src: 'https://karofi.com/img/bullet.png',
  alt: true
}), ' ', _jsx('a', {
  href: '#bao-chi-noi-ve-Ho\xE0ng Gia Kh\xE1nh-cc6'
}, void 0, ' B\xE1o ch\xED n\xF3i g\xEC v\u1EC1 Ho\xE0ng Gia Kh\xE1nh'))));

function About(props) {

  const about = props.data.information.value.about;

  return _jsx('div', {}, void 0, _ref, _ref2, _jsx('div', {
    id: 'content_wrapper',
    className: 'product_layout product_detail_layout main clearfix'
  }, void 0, _jsx('div', {
    className: 'row'
  }, void 0, _jsx('div', {
    className: 'col-md-9'
  }, void 0, _jsx('div', {
    id: 'dnn_ctr530995_ModuleContent',
    style: { fontSize: '18px !important' }
  }, void 0, _jsx('div', {
    id: 'dnn_ctr530995_HtmlModule_HtmlModule_lblContent',
    className: 'Normal'
  }, void 0, _jsx('span', {
    style: { fontFamily: 'hermesRegularVNU', fontSize: 13, lineHeight: '20.7999992370605px' }
  }, void 0, 'Hi\u1EC7n nay c\xE1c s\u1EA3n ph\u1EA9m c\u1EE7a ch\xFAng t\xF4i \u0111\xE3 c\xF3 m\u1EB7t tr\xEAn \xA0h\xE0ng ch\u1EE5c ngh\xECn c\u1EEDa h\xE0ng \u0111\u1EA1i l\xFD tr\xEAn to\xE0n qu\u1ED1c'), _jsx('p', {
    style: { color: 'rgb(245, 222, 179)', fontFamily: 'hermesRegularVNU', fontSize: 13, lineHeight: '20.7999992370605px' }
  }, void 0, _jsx('span', {
    style: { color: '#000000' }
  }, void 0, 'V\u1EDBi h\u1EC7 th\u1ED1ng ph\xE2n ph\u1ED1i tr\u1EA3i d\xE0i tr\xEAn to\xE0n qu\u1ED1c ch\xFAng t\xF4i lu\xF4n mong mu\u1ED1n t\u1ED1i \u0111a h\xF3a s\u1EF1 ti\u1EC7n l\u1EE3i c\u1EE7a kh\xE1ch h\xE0ng s\u1EA3n ph\u1EA9m c\xF3 th\u1EC3 t\u1EDBi t\u1EADn tay ng\u01B0\u1EDDi ti\xEAu d\xF9ng m\u1ED9t c\xE1ch nhanh nh\u1EA5t.', _ref3, _jsx('img', {
    alt: true,
    src: 'http://maylocnuocotawa.com//Portals/27218/bandovietnam.jpg',
    style: { width: 420, height: 519, borderWidth: 0, borderStyle: 'solid' }
  }), _ref4, 'H\xECnh 1: H\u1EC7 th\u1ED1ng ph\xE2n ph\u1ED1i c\u1EE7a c\xF4ng ty tr\xEAn c\u1EA3 n\u01B0\u1EDBc.', _ref5, _jsx('img', {
    alt: true,
    src: 'http://maylocnuocotawa.com/Portals/27218/hethongphanphoi.png',
    style: { width: 616, height: 350, borderWidth: 0, borderStyle: 'solid' }
  }), _ref6, 'H\xECnh 2: K\xEAnh ph\xE2n ph\u1ED1i s\u1EA3n ph\u1EA9m nh\u1EADt kh\u1EA9u c\u1EE7a c\xF4ng ty \u0111\u1EBFn ng\u01B0\u1EDDi ti\xEAu d\xF9ng.'))))), _ref7)));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(195);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(194);
/* unused harmony reexport BreadCrumb */



/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Hoàng Gia Khánh | Hệ thống phân phối';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/phan-phoi',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, about, services, common}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(193).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (About) {
        return {
          title,
          chunk: 'about',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(About, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(201);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('div', {}, void 0);

class NewsDetail extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {

    super(props);

    this.state = {
      number: 1,
      product: props.data.product.value
    };
  }

  render() {
    // const product = this.props.data.product.value
    // const recentNews = this.props.data.recentNews.value
    // const productRelative = this.props.data.productRelative.value
    // const categories = this.props.data.categories.value
    return _ref;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NewsDetail);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(200);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(199);
/* unused harmony reexport BreadCrumb */



/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Chi tiết tin tức';


/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/sp',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());
      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let information = 'information{id, services, common}'
      // let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'
      // let categories = 'categories:getCategories{title, slug, created_at}'
      // let product = 'product:getOneProduct(slug: "'+ params.slug +'"){ coverUrl, category, slug, title, body, price, view, created_at}'
      // let productRelative = 'productRelative:getProductRelative{ coverUrl, category, slug, title, body, price, view, created_at}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(198).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (NewsDetail) {
        return {
          title,
          chunk: 'sanpham',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(NewsDetail, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(1);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(204);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(203);
/* unused harmony reexport BreadCrumb */



/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Hoàng Gia Khánh | Danh sách sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/cua-hang',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      // let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}'

      // let productCategories = 'productCategories:getProductCategories{title, slug, created_at}'
      // let products = 'allProducts:getAllProduct{ coverUrl, category, slug, title, body, price, view, created_at}'
      // let information = 'information{id, about, services, common}'

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(36).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (About) {
        return {
          title,
          chunk: 'shop',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(About, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Happy green | Gian hàng';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/cua-hang/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let recentNews = 'recentNews:get5RecentPost{title, coverUrl, slug, public, description, view, category, created_at}';

      let productCategories = 'productCategories:getProductCategories{title, slug, created_at}';

      let products = 'allProducts:getAllProductsByCategory(slug: "' + params.slug + '"){ coverUrl, category, slug, title, body, price, view, created_at}';
      // let information = 'information{id, about, services, common}'

      let seo = {};

      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + recentNews + products + productCategories + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(36).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (About) {
        return {
          title,
          chunk: 'shop',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            data: store.getState().data
          }, void 0, _jsx(About, {
            data: store.getState().data,
            slug: params.slug
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(25);
var router = express.Router();
const mongoose = __webpack_require__(7);
const Post = mongoose.model('Post');
const Product = mongoose.model('Product');
const ProductCategory = mongoose.model('ProductCategory');
const Setting = mongoose.model('Setting');
const Information = mongoose.model('Information');
const Category = mongoose.model('Category');
const Seo = mongoose.model('Seo');
let bodyParser = __webpack_require__(38);
let Mailer = __webpack_require__(211);
let axios = __webpack_require__(3);
// import {FB, FacebookApiException} from 'fb';
//
// FB.options({version: 'v2.9'});
// var comhoavangApp = FB.extend({appId: '1968072516812373', appSecret: '4e2c8135946ac8e7b7cd8cd48492d648'}),


router.post('/productcategory/new', bodyParser.json(), (req, res) => {
  ProductCategory.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/productcategory/delete', bodyParser.json(), (req, res) => {
  ProductCategory.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/productcategory/update', bodyParser.json(), (req, res) => {
  ProductCategory.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/product/new', bodyParser.json(), (req, res) => {
  Product.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/product/delete', bodyParser.json(), (req, res) => {
  Product.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/product/update', bodyParser.json(), (req, res) => {
  Product.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/post/new', bodyParser.json(), (req, res) => {
  Post.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/post/delete', bodyParser.json(), (req, res) => {
  Post.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/post/update', bodyParser.json(), (req, res) => {
  Post.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/setting/update', bodyParser.json(), (req, res) => {
  Setting.findOneAndUpdate({ id: "setting" }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
});

router.post('/information/update', bodyParser.json(), (req, res) => {
  console.log('update !!!!!!!');
  console.log(req.body);
  Information.findOneAndUpdate({ id: "information" }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
});

router.post('/category/new', bodyParser.json(), (req, res) => {
  Category.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/category/delete', bodyParser.json(), (req, res) => {
  Category.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/category/update', bodyParser.json(), (req, res) => {
  Category.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/seo/new', bodyParser.json(), (req, res) => {
  Seo.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/seo/update', bodyParser.json(), (req, res) => {
  Seo.findOneAndUpdate({ url: req.body.url }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

module.exports = router;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(25);
var router = express.Router();

let mongoose = __webpack_require__(7);
const User = mongoose.model('User');
// const Token = mongoose.model('Token')
// const Session = mongoose.model('Session')

let passport = __webpack_require__(41);
let FacebookStrategy = __webpack_require__(42).Strategy;
let GoogleStrategy = __webpack_require__(248).OAuth2Strategy;
let LocalStrategy = __webpack_require__(249).Strategy;

// let bodyParser = require('body-parser')

passport.use(new LocalStrategy(function (username, password, done) {
  console.log("strategy function starting...");
  User.getUserByEmail(username, function (err, user) {
    if (err) throw err;
    if (user.length < 1) {
      console.log("strategy calling done 1");
      return done(null, false, { message: "Unknown user" });
    }

    // User.comparePassword(password, user[0].password, function (err, isMatch) {
    //   if (err) throw err;
    //   if (isMatch) {
    //     console.log("strategy calling done 2");
    //     return done(null, user[0]);
    //   } else {
    //     console.log("strategy calling done 3");
    //     return done(null, false, {message: "Invalid password"});
    //   }
    // });
    if (password === 'admin@123') {
      return done(null, user[0]);
    } else {
      return done(null, false, { message: "Invalid password" });
    }
  });
}));

passport.use(new FacebookStrategy({
  clientID: '123093138237586',
  clientSecret: 'bfddf6c0cb2bc745914a2b3236f57202',
  // callbackURL:'http://localhost:3000/auth/facebook/callback',
  callbackURL: 'http://chungcu-timescityparkhill.com/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'emails', 'name']
}, function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'facebook',
    accessToken: accessToken,
    mustConfirmEmail: false,
    password: ''
  }, function (err, user) {
    // logoutOther(user.username)
    cb(null, user);
  });
}));

passport.use(new GoogleStrategy({
  clientID: '181209932345-e5onckmk63rbchst6djlq9tjshbkmr79.apps.googleusercontent.com',
  clientSecret: 'a6Nz9Od7WfL82VdnFwpxLvKq',
  callbackURL: "http://edu.anabim.com/auth/google/callback"
}, function (accessToken, refreshToken, profile, cb) {

  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'google',
    accessToken: accessToken,
    password: '',
    mustConfirmEmail: false
  }, function (err, user) {
    logoutOther(user.username);
    cb(null, user);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

router.get('/session/:email', (req, res) => {
  var r = new RegExp(req.params.email, 'i');
  Session.remove({ session: { $regex: r } }, (err, session) => {
    if (err) throw err;
    res.send(session);
  });
});

router.post('/signup', (req, res) => {
  User.getUserByEmail(req.body.username, function (err, user) {
    if (err) throw err;
    if (user.length > 0) res.json({ status: false, m: "Email đã được đăng ký" });else User.createUser(req.body, (err, user) => {
      if (err) throw err;
      Token.create({ type: 'signup', email: user.username }, (err, token) => {
        Mailer.sendActiveMail(user.username, user.name, 'http://edu.anabim.com/token/active/' + token.token);
        res.json({ status: true, m: user.username });
      });
    });
  });
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
  if (req.user.isAdmin) {
    return res.redirect('/admin');
  }
  return res.redirect('/');
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/admin/login');
});

router.get('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }));

router.get('/login/ok', function (req, res, next) {
  res.redirect('/admin');
});

router.get('/login/false', function (req, res, next) {
  res.redirect('/admin/login');
});

module.exports = router;

// var logoutOther = (username) => {
//   var r = new RegExp(username,'i');
//   Session.remove({session: {$regex: r}}, (err, session) => {
//     if (err) throw err
//   })
// }

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(25);
var router = express.Router();
const path = __webpack_require__(30);
const fs = __webpack_require__(39);
var request = __webpack_require__(257);
var Gm = __webpack_require__(40);
var utf8 = __webpack_require__(259);
var iconv = __webpack_require__(238);
const mongoose = __webpack_require__(7);
const Image = mongoose.model('Image');

const imagemin = __webpack_require__(240);
const imageminJpegtran = __webpack_require__(241);
const imageminPngquant = __webpack_require__(242);

router.post('/delete', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.body.name);
  let pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
  fs.unlinkSync(pathImage);
  Image.remove({ slug: req.body.slug }, (err, resData) => {
    if (err) return res.status(400).send('err');
    if (fs.existsSync(pathImage)) {
      fs.unlinkSync(pathImage);
    }
    if (fs.existsSync(pathImageSmall)) {
      fs.unlinkSync(pathImageSmall);
    }
    res.send(resData);
  });
});

router.post('/min/:name', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.params.name);
  var oldSize = fs.readFileSync(pathImage).byteLength;
  let pathImageFolder = path.join(__dirname, '../images');
  var arrayImg = [];
  arrayImg.push(pathImage);
  imagemin(arrayImg, pathImageFolder, {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  }).then(files => {
    res.send({
      oldSize: oldSize,
      newSize: files[0].data.byteLength
    });
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
  });
});

router.use('/small/', getSmallImage, express.static(path.join(__dirname, '../images-small')));

router.use('/', express.static(path.join(__dirname, '../images')));

function getSmallImage(req, res, next) {
  var imageName = decodeURI(req.path.slice(1));
  var originalPathImage = path.join(__dirname, '../images/', imageName);
  if (!fs.existsSync(originalPathImage)) {
    return next();
  }
  var pathImage = path.join(__dirname, '../images-small/', imageName);
  if (fs.existsSync(pathImage)) {
    next();
  } else {
    Gm(originalPathImage).resize(300, "!").write(pathImage, function (err) {
      if (err) next();
      next();
    });
  }
}

router.use('*', (req, res, next) => {
  console.log('not found!!');
  res.status(404).send('not found!');
});

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = router;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var api_key = 'key-4639e67edf2df3a4c479a605e8376b9b';
var domain = 'edu.anabim.com';
var mailgun = __webpack_require__(245)({ apiKey: api_key, domain: domain });

const from = 'Thông báo Đăng ký tư vấn <admin@chungcu-timescityparkhill.com>';

const RegisterMail = function (email, name) {
  return {
    from: from,
    to: email,
    subject: `Chào mừng ${name} đến với ANABIM EDUCATION!`,
    text: `Chúc mừng bạn đã là thành viên của Edu.anabim.com.
Chúng tôi hứa sẽ không ngừng nâng cao chất lượng dịch vụ của mình để giúp đỡ bạn nhiều nhất có thể.`
  };
};

const ActiveMail = function (email, name, activeUrl) {
  return {
    from: from,
    to: email,
    subject: `Kích hoạt tài khoản ${email} trên ANABIM EDUCATION!`,
    text: `Cám ơn ${name} đã đăng ký tài khoản trên Edu.anabim.com.
Để kích hoạt tài khoản bạn hay click vào link sau: ${activeUrl} `
  };
};

const NewOrderMail = function (email, name, phone) {
  return {
    from: from,
    to: email,
    subject: `Có đơn hàng từ ${name}, SĐT: ${phone}`,
    text: `Có đơn hàng từ ${name}, SĐT: ${phone}`
  };
};

const TuVan = function (email, data) {
  return {
    from: from,
    to: email,
    subject: `Đăng ký tư vấn từ ${data.name}, SĐT: ${data.sdt}, Email: ${data.email}`,
    text: `Nội dung: ${data.noidung}`
  };
};

let Mailer = {};

Mailer.sendRegister = function (email, name) {
  mailgun.messages().send(RegisterMail(email, name), function (error, body) {
    console.log(body);
  });
};

Mailer.sendActiveMail = function (email, name, activeUrl) {
  mailgun.messages().send(ActiveMail(email, name, activeUrl), function (error, body) {
    console.log(body);
  });
};

Mailer.sendNewOrderMail = function (email, name, phone) {
  mailgun.messages().send(NewOrderMail(email, name, phone), function (error, body) {
    console.log(body);
  });
};

Mailer.sendToAdmin = function (email, data) {
  mailgun.messages().send(TuVan(email, data), function (error, body) {
    // console.log(body);
  });
};

module.exports = Mailer;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(25);
var router = express.Router();
const fileUpload = __webpack_require__(233);
const path = __webpack_require__(30);
var sizeOf = __webpack_require__(239);
var fs = __webpack_require__(39);
var Gm = __webpack_require__(40);
//mongodb

const mongoose = __webpack_require__(7);
const Image = mongoose.model('Image');

router.use(fileUpload());

router.post('/image', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;

  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send("database error");
      res.send(image);
    });
  });
});

router.post('/imageCKEditor', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.upload;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  let pathWithName = path.join(__dirname, '../images', fileName);
  let pathWithName2 = path.join(__dirname, '../images', 'test.jpg');
  let watermark = path.join(__dirname, '../images', 'watermark.png');
  image.mv(pathWithName, function (err) {
    if (err) return res.status(500).send(err);
    Gm(pathWithName).draw(['image over 0,0 0,0 ' + watermark]).write(pathWithName, function (err) {
      if (err) console.log(err);
    });
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        uploaded: 1,
        fileName: image.name,
        url: '/image/' + image.name
      });
    });
  });
});

router.post('/imageFroala', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        link: '/image/' + image.name
      });
    });
  });
});

router.post('/imageEditor', function (req, res) {
  var img = req.body.img;
  var data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  let dimensions = sizeOf(buf);
  if (req.body.override) {
    var pathImage = path.join(__dirname, '../images', req.body.name);
    var pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      Image.update({ slug: req.body.slug }, {
        $set: {
          dimensions: dimensions,
          type: "image/png",
          created_at: Date.now()
        }
      }).exec((err, resData) => {
        if (err) return res.status(400).send('error');
        fs.unlinkSync(pathImageSmall);
        res.send(resData);
      });
    });
  } else {
    let id = randomString(10);
    let fileName = id + '-' + req.body.name;
    var pathImage = path.join(__dirname, '../images', fileName);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      let data = {
        slug: id,
        name: fileName,
        type: "image/png",
        dimensions: dimensions,
        userUpload: 'admin'
      };

      Image.create(data, (err, image) => {
        if (err) return res.status(400).send({
          uploaded: 0,
          error: {
            message: 'error'
          }
        });
        return res.send('ok');
      });
    });
  }
});

module.exports = router;

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(215);






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (false) {
    middleware.push(createLogger());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
  } else {
    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createGraphqlRequest(fetch) {
  return (() => {
    var _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include'
      };
      const resp = yield fetch('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

function createHelpers({ fetch, history }) {
  return {
    fetch,
    history,
    graphqlRequest: createGraphqlRequest(fetch)
  };
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);


function inspectObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

const actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: a => `queryId:${a.queryId} variables:${inspectObject(a.variables)}\n   ${singleLine(a.queryString)}`,

  APOLLO_QUERY_RESULT: a => `queryId:${a.queryId}\n   ${singleLine(inspectObject(a.result))}`,

  APOLLO_QUERY_STOP: a => `queryId:${a.queryId}`
};

// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    let formattedPayload = '';
    const actionFormatter = actionFormatters[action.type];
    if (typeof actionFormatter === 'function') {
      formattedPayload = actionFormatter(action);
    } else if (action.toString !== Object.prototype.toString) {
      formattedPayload = action.toString();
    } else if (typeof action.payload !== 'undefined') {
      formattedPayload = inspectObject(action.payload);
    } else {
      formattedPayload = inspectObject(action);
    }

    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

// exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "._3_3g8{padding-left:20px;padding-right:20px}._3FKMx{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_3_3g8",
	"container": "_3FKMx"
};

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(216);
    var insertCss = __webpack_require__(24);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(217);
    var insertCss = __webpack_require__(24);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(218);
    var insertCss = __webpack_require__(24);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(220);
    var insertCss = __webpack_require__(24);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = require("imagemin");

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = require("imagemin-jpegtran");

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = require("imagemin-pngquant");

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = require("mailgun-js");

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = require("mongoose-findorcreate");

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = require("route-cache");

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
module.exports = __webpack_require__(46);


/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = require("draft-js-editor/lib/Editor");

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = require("draft-js-editor/lib/components/defaultDecorator");

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = require("draft-js-import-html");

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map