/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/variables/class-names.js":
/*!*****************************************!*\
  !*** ./src/js/variables/class-names.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASS_NAMES": () => (/* binding */ CLASS_NAMES)
/* harmony export */ });
var CLASS_NAMES = {
  BODY: "body",
  BODY_MENU: "body-menu",
  HAS_CHILD: "has-child",
  HAS_CHILD_ACTIVE: "has-child--active",
  HAS_CHILD_LINK: "has-child-link",
  HEADER_WRAPPER_MENU: "header__wrapper-menu",
  HEADER_WRAPPER_HAMBURGER: "header__wrapper-hamburger",
  MENU_ACTIVE: "menu-active",
  OPEN: "open"
};

/***/ }),

/***/ "./src/js/variables/events.js":
/*!************************************!*\
  !*** ./src/js/variables/events.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENTS": () => (/* binding */ EVENTS)
/* harmony export */ });
var EVENTS = {
  CLICK: "click",
  ONCHANGE: "onChange",
  ONCLICK: "onClick"
};

/***/ }),

/***/ "./src/js/variables/index.js":
/*!***********************************!*\
  !*** ./src/js/variables/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASS_NAMES": () => (/* reexport safe */ _class_names__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES),
/* harmony export */   "EVENTS": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_1__.EVENTS),
/* harmony export */   "SELECTORS": () => (/* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_2__.SELECTORS)
/* harmony export */ });
/* harmony import */ var _class_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-names */ "./src/js/variables/class-names.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/js/variables/events.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/js/variables/selectors.js");




/***/ }),

/***/ "./src/js/variables/selectors.js":
/*!***************************************!*\
  !*** ./src/js/variables/selectors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECTORS": () => (/* binding */ SELECTORS)
/* harmony export */ });
var SELECTORS = {
  ANCHOR: "a",
  BODY: "body"
};

/***/ }),

/***/ "./src/js/views/Header.js":
/*!********************************!*\
  !*** ./src/js/views/Header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = /*#__PURE__*/_createClass(function Header() {
  _classCallCheck(this, Header);

  console.log("header");
});



/***/ }),

/***/ "./src/js/views/NavMenu.js":
/*!*********************************!*\
  !*** ./src/js/views/NavMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ "./src/js/variables/index.js");


function NavMenu() {
  var body = document.querySelector(_variables__WEBPACK_IMPORTED_MODULE_0__.SELECTORS.BODY);
  var hamburgermenudiv = document.querySelector(".".concat(_variables__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.HEADER_WRAPPER_HAMBURGER));
  var menuwrapper = document.querySelector(".".concat(_variables__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.HEADER_WRAPPER_MENU));
  var submenuslink = document.querySelectorAll(".".concat(_variables__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.HAS_CHILD_LINK));
  hamburgerMenuOpen();
  mobileSubMenuOpen();

  function hamburgerMenuOpen() {
    hamburgermenudiv.addEventListener(_variables__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLICK, function (event) {
      hamburgermenudiv.classList.toggle(_variables__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.OPEN);
      menuwrapper.classList.toggle(_variables__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.MENU_ACTIVE);
      body.classList.toggle(_variables__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.BODY_MENU);
    });
  }

  function mobileSubMenuOpen() {
    submenuslink.forEach(function (ChildItems) {
      ChildItems.addEventListener(_variables__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CLICK, function (event) {
        event.preventDefault();
        ChildItems.parentNode.classList.toggle(_variables__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAMES.HAS_CHILD_ACTIVE);
      });
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_NavMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/NavMenu */ "./src/js/views/NavMenu.js");
/* harmony import */ var _views_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Header */ "./src/js/views/Header.js");


new _views_NavMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _views_Header__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=App.js.map