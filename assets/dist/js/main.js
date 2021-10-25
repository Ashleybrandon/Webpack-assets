/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/***/ (() => {

var btns = document.querySelectorAll(".acc-btn"); // fn

function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open"); // the acc-content

  var content = this.nextElementSibling; // IF open, close | else open

  if (content.style.maxHeight) content.style.maxHeight = null;else content.style.maxHeight = content.scrollHeight + "px";
} // event


btns.forEach(function (el) {
  return el.addEventListener("click", accordion);
});

/***/ }),

/***/ "./src/js/btt.js":
/*!***********************!*\
  !*** ./src/js/btt.js ***!
  \***********************/
/***/ (() => {

(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }

    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ "./src/js/accordion.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _btt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btt */ "./src/js/btt.js");
/* harmony import */ var _btt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_btt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _splide_auto_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splide-auto-scroll */ "./src/js/splide-auto-scroll.js");
/* harmony import */ var _splide_auto_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_splide_auto_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");






/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var menuIcon = document.querySelector('.menu-icon');
var mobileMenu = document.querySelector('.inner-menu-container'); //mobile menu toggle

menuIcon.addEventListener('click', function (e) {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('active');
  } else {
    mobileMenu.classList.add('active');
    menuIcon.classList.add('active');
  }

  e.preventDefault();
}); //Sub menu toggle

function addListenerToElement(element, eventType, listener) {
  element.addEventListener(eventType, listener);
} // Add "active" class to clicked element, remove it from siblings and toggle show in sub-menus


function toggleActiveClass() {
  var parentElement = this.parentNode;
  var siblings = parentElement.parentNode.children;
  var dropDown = this.nextElementSibling;

  if (dropDown !== null) {
    dropDown.classList.toggle('sub-menu-show');
    console.log(dropDown);
  }
} // Close the open dropdown clicking everywhere


function closeDropdown(event) {
  var dropDownShow = document.getElementsByClassName('sub-menu-show')[0];

  if (dropDownShow !== undefined && dropDownShow.previousElementSibling !== event.target) {
    dropDownShow.classList.remove('sub-menu-show');
  }
}

var menuItems = document.querySelectorAll('.child-trigger');

var _iterator = _createForOfIteratorHelper(menuItems),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var value = _step.value;
    addListenerToElement(value, 'click', toggleActiveClass);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

addListenerToElement(window, 'mouseup', closeDropdown); //Scroll down on click

function scrollWin() {
  window.scrollBy(0, 650);
}

/***/ }),

/***/ "./src/js/splide-auto-scroll.js":
/*!**************************************!*\
  !*** ./src/js/splide-auto-scroll.js ***!
  \**************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // Create the AutoScroll extension.
  var AutoScroll = function AutoScroll(Splide, Components) {
    var Track = Components.Track;
    var pxPerFrame = 2;
    var paused = true;
    var page = 0;
    return {
      mount: function mount() {
        var _this = this;

        this.update = this.update.bind(this);
        Splide.on('mouseenter', function () {
          _this.pause();
        }, Splide.root);
        Splide.on('mouseleave', function () {
          _this.play();
        }, Splide.root);
      },
      // Start scroll after load.
      mounted: function mounted() {
        setTimeout(this.play.bind(this), 1000);
      },
      // Start scroll.
      play: function play() {
        if (paused) {
          paused = false;
          Components.Elements.list.style.transition = '';
          requestAnimationFrame(this.update);
        }
      },
      // Pause scroll.
      pause: function pause() {
        paused = true;
      },
      // Update the slider position on every frame.
      update: function update() {
        Track.translate(Track.position - pxPerFrame);
        Track.shift();
        var currentPage = Track.toIndex(Track.position);

        if (page !== currentPage) {
          this.onPageChanged(currentPage, page);
          page = currentPage;
        }

        if (!paused) {
          requestAnimationFrame(this.update);
        }
      },
      // Called when the page is changed.
      onPageChanged: function onPageChanged(newPage, prevPage) {
        console.log(prevPage + '->' + newPage);
      }
    };
  };

  new Splide('.splide.splide-auto-scroll').mount({
    AutoScroll: AutoScroll
  });
});

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map