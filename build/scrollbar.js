/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hooks/useMovePosition.js":
/*!**************************************!*\
  !*** ./src/hooks/useMovePosition.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMovePosition: () => (/* binding */ useMovePosition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMovePosition = floating => {
  const [cursorPosition, setCursorPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [scrollPercentage, setScrollPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [dynamicHeight, setDynamicHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const html = document.documentElement;
  const handlePercentScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollPercent = scrollTop / (documentHeight - windowHeight) * 100;
    setScrollPercentage(parseInt(scrollPercent));
    setDynamicHeight(scrollPercent * html.clientHeight);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!window.self === window.top && floating == "off") return;
    const moveCursor = e => {
      let x = e.clientX;
      let y = e.clientY;
      setCursorPosition({
        x,
        y
      });
    };
    handlePercentScroll();

    // if (!eventEl) return;
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('resize', handlePercentScroll);
    window.addEventListener('scroll', handlePercentScroll);
    window.addEventListener('wheel', handlePercentScroll);

    // domEl.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', handlePercentScroll);
      window.removeEventListener('scroll', handlePercentScroll);
      window.removeEventListener('wheel', handlePercentScroll);
      // domEl.style.cursor = 'auto';
    };
  }, [window, cursorPosition]);
  return {
    cursorPosition,
    scrollPercentage,
    dynamicHeight
  };
};

/***/ }),

/***/ "./src/utils/function.js":
/*!*******************************!*\
  !*** ./src/utils/function.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateGradient: () => (/* binding */ generateGradient),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   isSet: () => (/* binding */ isSet)
/* harmony export */ });
const isSet = v => v !== undefined && v !== null && v !== '';
const generateGradient = colorObject => {
  const validColors = Object.values(colorObject).filter(color => color && String(color).trim());
  if (validColors.length >= 2) {
    return `linear-gradient(to top, ${validColors.join(', ')})`;
  } else if (validColors.length === 1) {
    return validColors[0];
  } else {
    return 'transparent';
  }
};
const getBorderCSS = (border = {}) => {
  // Default values
  const defaults = {
    top: '1',
    right: '1',
    bottom: '1',
    left: '1',
    style: 'solid',
    color: '#fff'
  };

  // Merge with defaults
  const finalBorder = {
    ...defaults,
    ...border
  };

  // Extract values
  const {
    top,
    right,
    bottom,
    left,
    style,
    color
  } = finalBorder;

  // Check if all sides have the same width
  if (top === right && right === bottom && bottom === left) {
    // Use shorthand if all sides are equal
    return `${top}px ${style} ${color}`;
  }
};

/***/ }),

/***/ "./src/scrollbar/style.scss":
/*!**********************************!*\
  !*** ./src/scrollbar/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../plugin-slug/node_modules/react-dom/client.js":
/*!*******************************************************!*\
  !*** ../plugin-slug/node_modules/react-dom/client.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/scrollbar/scrollbar.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "../plugin-slug/node_modules/react-dom/client.js");
/* harmony import */ var _hooks_useMovePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useMovePosition */ "./src/hooks/useMovePosition.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/function */ "./src/utils/function.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/scrollbar/style.scss");







const Scrollbar = ({
  scrollbarData
}) => {
  const {
    asb_showscrollbar,
    asb_color = '#46b3e6',
    asb_background = '',
    asb_mousescrollstep = 40,
    asb_autohidemode = false,
    asb_railalign = "right",
    asb_scrollspeed = "60",
    asb_touchbehavior,
    asb_dynamic_height_scrollbar = 'off',
    asb_floating_scrollbar = "off",
    asb_gradient_color = {
      "color-1": "#ffce4b",
      "color-2": "#ff395e",
      "color-3": "#833ab4"
    },
    asb_floating_scrollbar_bg_color = "#9837bf",
    asb_floating_scrollbar_text_color = "#ffffff",
    asb_width = {
      spinner: 10,
      unit: "px"
    },
    asb_border = {},
    asb_border_radius = {
      spinner: 12
    }
  } = scrollbarData;
  const floatingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const touchBehavior = asb_touchbehavior == 1 ? true : false;
  const showScrollbar = typeof asb_showscrollbar == "string" ? JSON.parse(asb_showscrollbar) : false;
  const autoHideMode = asb_autohidemode === "cursor" || asb_autohidemode === "coursor" ? "cursor" : JSON.parse(asb_autohidemode);
  const isShowScrollBar = asb_dynamic_height_scrollbar == "off" && asb_floating_scrollbar == "off" && showScrollbar;
  const {
    cursorPosition,
    scrollPercentage
  } = (0,_hooks_useMovePosition__WEBPACK_IMPORTED_MODULE_3__.useMovePosition)(asb_floating_scrollbar);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isShowScrollBar) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("html").niceScroll({
        hwacceleration: true,
        cursorcolor: asb_color,
        cursorwidth: asb_width?.spinner + "px",
        cursorborder: (0,_utils_function__WEBPACK_IMPORTED_MODULE_4__.getBorderCSS)(asb_border),
        cursorborderradius: asb_border_radius?.spinner + "px",
        scrollspeed: asb_scrollspeed,
        railalign: asb_railalign,
        background: asb_background,
        touchbehavior: touchBehavior,
        grabcursorenabled: true,
        mousescrollstep: asb_mousescrollstep,
        autohidemode: autoHideMode
      });
    }

    // Cleanup function
    return () => {
      if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("html").getNiceScroll()) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()("html").getNiceScroll().remove();
      }
    };
  }, [JSON.stringify(scrollbarData), isShowScrollBar, showScrollbar, asb_dynamic_height_scrollbar, asb_floating_scrollbar, asb_color, asb_width?.spinner, (0,_utils_function__WEBPACK_IMPORTED_MODULE_4__.getBorderCSS)(asb_border), asb_border_radius?.spinner, asb_scrollspeed, asb_scrollspeed, asb_railalign, asb_background, touchBehavior, asb_mousescrollstep, autoHideMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const html = document.documentElement;
    if (asb_dynamic_height_scrollbar == "on" || asb_floating_scrollbar == "on") {
      html.classList.add('csb-scrollbar-active');
    }
    return () => {
      html.classList.remove('csb-scrollbar-active');
    };
  }, [asb_dynamic_height_scrollbar, asb_floating_scrollbar]);
  const dynamicHeightStyle = {
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_4__.isSet)(scrollPercentage) && {
      "--csb-scrollbar-rail-dynamic-height": scrollPercentage + "%"
    })
  };
  const floatingStyle = {
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_4__.isSet)(asb_floating_scrollbar_bg_color) && {
      "--csb-scrollbar-floating-bg-color": asb_floating_scrollbar_bg_color
    }),
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_4__.isSet)(asb_floating_scrollbar_text_color) && {
      "--csb-scrollbar-floating-text-color": asb_floating_scrollbar_text_color
    })
  };

  // if (isLoading ) return;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, asb_dynamic_height_scrollbar == "on" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `csb-scrollbar-dynamic-height`,
    style: {
      background: (0,_utils_function__WEBPACK_IMPORTED_MODULE_4__.generateGradient)(asb_gradient_color),
      ...dynamicHeightStyle
    }
  }), asb_floating_scrollbar == "on" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: floatingRef,
    className: `csb-scrollbar-floating`,
    style: {
      top: cursorPosition.y + 20,
      left: cursorPosition.x + 20,
      ...floatingStyle
    }
  }, "Page Scrolled ", scrollPercentage, " %"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);
document.addEventListener('DOMContentLoaded', () => {
  const scrollbarEl = document.getElementById("csbScrollbar");
  if (!scrollbarEl) return;
  const scrollbarData = JSON.parse(scrollbarEl.dataset.scrollbar);
  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(scrollbarEl);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Scrollbar, {
    scrollbarData: scrollbarData
  }));
  scrollbarEl.removeAttribute('data-scrollbar');
});
})();

/******/ })()
;
//# sourceMappingURL=scrollbar.js.map