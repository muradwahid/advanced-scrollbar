/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hooks/useScrollbar.js":
/*!***********************************!*\
  !*** ./src/hooks/useScrollbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScrollbar: () => (/* binding */ useScrollbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false, wheelStep = 40) => {
  const isClick = true,
    isDrag = true;
  const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const startY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const startScrollTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [thumbHeight, setThumbHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [thumbPosition, setThumbPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isWheel, setIsWheel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const html = document.documentElement;

  // Function to handle thumb dragging and update position
  const handleThumbDrag = clientY => {
    // 1. Get current metrics
    const totalScrollableHeight = html.scrollHeight - html.clientHeight;
    if (totalScrollableHeight <= 0) return; // No scrolling needed

    // 2. Calculate drag distance and scroll ratio
    const dragDistanceY = clientY - startY.current;
    const availableTrackHeight = html.clientHeight - thumbHeight;

    // 3. Calculate new scroll position with boundaries
    const scrollRatio = dragDistanceY / availableTrackHeight;
    const unboundedScrollTop = startScrollTop.current + scrollRatio * totalScrollableHeight;
    const boundedScrollTop = Math.max(0, Math.min(unboundedScrollTop, totalScrollableHeight));

    // 4. Update scroll position immediately
    html.scrollTop = boundedScrollTop;

    // 5. Calculate and set thumb position
    const scrollProgress = boundedScrollTop / totalScrollableHeight;
    const newThumbPosition = scrollProgress * availableTrackHeight;

    // Use direct assignment if possible, or ensure setThumbPosition is synchronous
    // thumbRef.current.style.top= `${newThumbPosition}px`;
    // Alternatively:  
    setThumbPosition(newThumbPosition);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsActive(isShowScrollbar);
    if (!isShowScrollbar) return;
    html.classList.add('csb-scrollbar-active');
    const updateScrollbar = () => {
      if (!thumbRef.current) return;
      const scrollableHeight = html.scrollHeight - html.clientHeight;
      if (scrollableHeight <= 0) return;

      // Calculate thumb height (minimum 20px)
      const newThumbHeight = Math.max(html.clientHeight / html.scrollHeight * html.clientHeight, 20);
      setThumbHeight(newThumbHeight);

      // Update thumb position
      const scrollPercentage = html.scrollTop / scrollableHeight;
      const maxThumbPosition = html.clientHeight - newThumbHeight;
      setThumbPosition(scrollPercentage * maxThumbPosition);
    };
    const handleMouseMove = e => {
      // e.preventDefault();
      if (!isDragging || !thumbRef?.current || !isDrag) return;
      handleThumbDrag(e.clientY);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    const handleMouseClick = e => {
      // e.preventDefault();
      // if (!railRef.current || !thumbRef.current || typeof thumbHeight !== 'number' || !isClick) return;

      // const scrollableHeight = html.scrollHeight - html.clientHeight;
      // if (scrollableHeight <= 0) return;

      // const railHeight = html.clientHeight;
      // const clickY = e.clientY;

      // // Center the thumb on the click position
      // const newThumbTop = clickY - (thumbHeight / 2);
      // const thumbTrackHeight = railHeight - thumbHeight;

      // // Clamp the thumb position to stay within the track
      // const clampedThumbTop = Math.max(0, Math.min(newThumbTop, thumbTrackHeight));

      // const scrollRatio = thumbTrackHeight > 0 ? (clampedThumbTop / thumbTrackHeight) : 0;

      // // Set the new scroll position of the page
      // // html.scrollTop = scrollRatio * scrollableHeight;
      // window.scrollTo({
      //     top: scrollRatio * scrollableHeight,
      //     behavior: 'smooth'
      // });

      e.preventDefault();
      if (!railRef.current || !thumbRef.current || !isClick) return;
      const scrollableHeight = html.scrollHeight - html.clientHeight;
      if (scrollableHeight <= 0) return;
      const viewportHeight = html.clientHeight;
      const currentScrollTop = html.scrollTop;
      const thumbRect = thumbRef.current.getBoundingClientRect();
      let newScrollTop;
      if (e.clientY < thumbRect.top) {
        // Clicked above the thumb, scroll up by one page (100dvh)
        newScrollTop = currentScrollTop - viewportHeight;
      } else if (e.clientY > thumbRect.bottom) {
        // Clicked below the thumb, scroll down by one page (100dvh)
        newScrollTop = currentScrollTop + viewportHeight;
      } else {
        // Clicked on the thumb itself, do nothing.
        return;
      }

      // Clamp the new scroll position to stay within the valid range.
      const boundedScrollTop = Math.max(0, Math.min(newScrollTop, scrollableHeight));
      window.scrollTo({
        top: boundedScrollTop,
        behavior: 'smooth'
      });
    };
    let wheelId;
    const handleWheel = e => {
      // This handler is only attached if wheelStep is a truthy number.
      e.preventDefault();
      setIsWheel(false);
      const totalScrollableHeight = html.scrollHeight - html.clientHeight;
      if (totalScrollableHeight <= 0) return; // No scrolling needed

      const currentScrollTop = html.scrollTop;
      // Use Math.sign to determine direction and apply the step.
      const scrollAmount = Math.sign(e.deltaY) * wheelStep;
      const newScrollTop = currentScrollTop + scrollAmount;

      // Clamp the new scroll position to stay within the valid range.
      const boundedScrollTop = Math.max(0, Math.min(newScrollTop, totalScrollableHeight));

      // Programmatically scroll the page.
      html.scrollTop = boundedScrollTop;
      window.scroll({
        top: e.deltaY * 600,
        left: 0,
        behavior: 'smooth'
      });
      wheelId = setTimeout(() => {
        setIsWheel(true);
      }, 500);
    };

    // Initial setup
    updateScrollbar();
    window.addEventListener('resize', updateScrollbar);
    window.addEventListener('scroll', updateScrollbar);

    // Drag events
    thumbRef.current?.addEventListener('mousedown', e => {
      e.stopPropagation();
      setIsDragging(true);
      startY.current = e.clientY;
      startScrollTop.current = html.scrollTop;
      // document.body.style.cursor = 'grabbing';
      // document.body.style.userSelect = 'none';
    });
    const handleThumbClick = e => {
      e.stopPropagation();
    };
    // click event on the rail
    railRef?.current?.addEventListener('click', handleMouseClick);
    thumbRef.current?.addEventListener('click', handleThumbClick);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('load', () => {
      updateScrollbar();
      setIsLoading(false);
    });

    // Add wheel event listener if wheelStep is provided
    // if (wheelStep) {
    //     document.addEventListener('wheel', handleWheel, { passive: false });
    // }
    document.addEventListener('wheel', handleWheel, {
      passive: false
    });

    // document.addEventListener('scrollend', () => { 
    //     setIsWheel(true);
    // })

    return () => {
      html.classList.remove('csb-scrollbar-active');
      window.removeEventListener('resize', updateScrollbar);
      window.removeEventListener('scroll', updateScrollbar);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('load', updateScrollbar);
      railRef?.current?.removeEventListener('click', handleMouseClick);
      thumbRef.current?.removeEventListener('click', handleThumbClick);
      if (wheelStep) {
        document.removeEventListener('wheel', handleWheel);
      }
      clearTimeout(wheelId);
    };
  }, [isLoading, isShowScrollbar, railRef.current, thumbRef.current, thumbHeight, isDragging]);
  return {
    isLoading,
    isActive,
    thumbHeight,
    thumbPosition,
    isDragging,
    isWheel
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
/* harmony export */   isSet: () => (/* binding */ isSet)
/* harmony export */ });
const isSet = v => v !== undefined && v !== null && v !== '';

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
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../plugin-slug/node_modules/react-dom/client.js");
/* harmony import */ var _hooks_useScrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useScrollbar */ "./src/hooks/useScrollbar.js");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/function */ "./src/utils/function.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/scrollbar/style.scss");






const Scrollbar = ({
  scrollbarData
}) => {
  const {
    asb_showscrollbar,
    asb_color = '',
    asb_background = '',
    asb_mousescrollstep = 40,
    asb_autohidemode = false,
    asb_railalign = "right"
  } = scrollbarData;
  // console.log(scrollbarData)
  const thumbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const railRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const showScrollbar = JSON.parse(asb_showscrollbar);
  const autoHideMode = asb_autohidemode === "coursor" ? "coursor" : JSON.parse(asb_autohidemode);
  const {
    isWheel,
    isLoading,
    thumbHeight,
    thumbPosition
  } = (0,_hooks_useScrollbar__WEBPACK_IMPORTED_MODULE_2__.useScrollbar)(railRef, thumbRef, showScrollbar, Number(asb_mousescrollstep));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.self === window.top && showScrollbar) {
      document.documentElement.classList.add('csb-scrollbar-active');
    } else {
      document.documentElement.classList.remove('csb-scrollbar-active');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.documentElement.classList.remove('csb-scrollbar-active');
    };
  }, [showScrollbar]);
  const styles = {
    ...(showScrollbar && {
      "--csb-scrollbar-rail-display-property": 'block'
    }),
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.isSet)(asb_background) && {
      "--csb-scrollbar-rail-background-color": asb_background
    })
  };
  const thumbStyles = {
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.isSet)(thumbHeight) && {
      "--csb-scrollbar-thumb-height": thumbHeight + "px"
    }),
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.isSet)(thumbPosition) && {
      "--csb-scrollbar-thumb-position": thumbPosition + "px"
    }),
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.isSet)(asb_color) && {
      "--csb-scrollbar-thumb-color": asb_color
    })
  };

  // const dynamicClassRail = autoHideMode === "cursor" ? "csb-scrollbar-rail-cursor" : autoHideMode ? isWheel ?"csb-scrollbar-auto-hide":"":""

  let dynamicClassRail = '';
  if (autoHideMode == 'coursor') {
    // This class shows the scrollbar on hover
    dynamicClassRail = 'csb-scrollbar-rail-cursor-hover';
  } else if (autoHideMode) {
    // This class hides the scrollbar when not actively wheel-scrolling
    dynamicClassRail = 'csb-scrollbar-auto-hide';
  }
  if (isLoading) return;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: railRef,
    className: `csb-scrollbar-rail railAlign${asb_railalign} ${isWheel ? dynamicClassRail : ""}`,
    style: {
      ...styles
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "csb-scrollbar-rail-thumb",
    ref: thumbRef,
    style: {
      ...thumbStyles
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);
document.addEventListener('DOMContentLoaded', () => {
  const scrollbarEl = document.getElementById("csbScrollbar");
  const scrollbarData = JSON.parse(scrollbarEl.dataset.scrollbar);
  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(scrollbarEl);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Scrollbar, {
    scrollbarData: scrollbarData
  }));
  scrollbarEl.removeAttribute('data-scrollbar');
});
})();

/******/ })()
;
//# sourceMappingURL=scrollbar.js.map