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
// import { useEffect, useRef, useState } from "react";

// export const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false) => {
//     const [isActive, setIsActive] = useState(false);
//     const startY = useRef(0);
//     const startScrollTop = useRef(0);
//     const [isDragging, setIsDragging] = useState(false);
//     const [thumbHeight, setThumbHeight] = useState("");
//     const [thumbPosition, setThumbPosition] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);

//     const html = document.documentElement;
//     useEffect(() => {
//         setIsActive(isShowScrollbar);

//         if (!isShowScrollbar) return;
//         // const html = document.documentElement;
//         html.classList.add('csb-scrollbar-active');
//         const updateScrollbar = () => {
//             if (!thumbRef.current) return;

//             const scrollableHeight = html.scrollHeight - html.clientHeight;
//             if (scrollableHeight <= 0) return;

//             // Calculate thumb height (minimum 20px)
//             const thumbHeight = Math.max(
//                 (html.clientHeight / html.scrollHeight) * html.clientHeight,
//                 20
//             );
//             // thumbRef.current.style.height = `${thumbHeight}px`;
//             setThumbHeight(thumbHeight);

//             // Update thumb position
//             const scrollPercentage = html.scrollTop / scrollableHeight;
//             const maxThumbPosition = html.clientHeight - thumbHeight;
//             setThumbPosition(scrollPercentage * maxThumbPosition);
//             // thumbRef.current.style.transform = `translateY(${scrollPercentage * maxThumbPosition}px)`;
//         };

//         const handleMouseMove = (e) => {
//             if (!isDragging) return;

//             const deltaY = e.clientY - startY.current;
//             const scrollableHeight = html.scrollHeight - html.clientHeight;
//             const thumbTrackHeight = html.clientHeight - parseFloat(thumbRef.current.style.height);

//             html.scrollTop = startScrollTop.current + (deltaY / thumbTrackHeight) * scrollableHeight;
//         };

//         const handleMouseUp = () => {
//             setIsDragging(false)
//             // document.body.style.cursor = '';
//             // document.body.style.userSelect = '';
//         };

//         // Initial setup
//         updateScrollbar();
//         window.addEventListener('resize', updateScrollbar);
//         window.addEventListener('scroll', updateScrollbar);

//         // Drag events
//         thumbRef.current?.addEventListener('mousedown', (e) => {
//             setIsDragging(true)
//             startY.current = e.clientY;
//             startScrollTop.current = html.scrollTop;
//             document.body.style.cursor = 'grabbing';
//             document.body.style.userSelect = 'none';
//         });

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//         window.addEventListener('load', () => {
//             updateScrollbar();
//             setIsLoading(false);
//         })

//         return () => {
//             html.classList.remove('csb-scrollbar-active');
//             window.removeEventListener('resize', updateScrollbar);
//             window.removeEventListener('scroll', updateScrollbar);
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//             window.removeEventListener('load', updateScrollbar)
//         };
//     }, [isLoading, isShowScrollbar, railRef.current, thumbRef.current]);
//     useEffect(() => {
//         console.log(isDragging)
//     }, [isDragging])
//     return { isLoading, isActive, thumbHeight, thumbPosition };
// }


const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false) => {
  const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const startY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const startScrollTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [thumbHeight, setThumbHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [thumbPosition, setThumbPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const html = document.documentElement;

  // Function to handle thumb dragging and update position
  const handleThumbDrag = clientY => {
    // 1. Calculate drag distance and scroll metrics
    const dragDistanceY = clientY - startY.current;
    const totalScrollableHeight = html.scrollHeight - html.clientHeight;
    const availableTrackHeight = html.clientHeight - thumbHeight;

    // 2. Calculate new scroll position
    const scrollRatio = dragDistanceY / availableTrackHeight;
    const unboundedScrollTop = startScrollTop.current + scrollRatio * totalScrollableHeight;

    // 3. Apply boundaries to scroll position
    const boundedScrollTop = Math.max(0, Math.min(unboundedScrollTop, totalScrollableHeight));

    // 4. Update DOM scroll position
    html.scrollTop = boundedScrollTop;

    // 5. Calculate and update thumb position
    const scrollProgress = boundedScrollTop / totalScrollableHeight;
    const maxThumbOffset = html.clientHeight - thumbHeight;
    const newThumbPosition = scrollProgress * maxThumbOffset;
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
      console.log(e);
      if (!isDragging || !thumbRef?.current) return;
      handleThumbDrag(e.clientY, isDragging);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    // Initial setup
    updateScrollbar();
    window.addEventListener('resize', updateScrollbar);
    window.addEventListener('scroll', updateScrollbar);

    // Drag events
    thumbRef.current?.addEventListener('mousedown', e => {
      setIsDragging(true);
      startY.current = e.clientY;
      startScrollTop.current = html.scrollTop;
      // document.body.style.cursor = 'grabbing';
      // document.body.style.userSelect = 'none';
    });
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('load', () => {
      updateScrollbar();
      setIsLoading(false);
    });
    return () => {
      html.classList.remove('csb-scrollbar-active');
      window.removeEventListener('resize', updateScrollbar);
      window.removeEventListener('scroll', updateScrollbar);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('load', updateScrollbar);
    };
  }, [isLoading, isShowScrollbar, railRef.current, thumbRef.current, thumbHeight, isDragging]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(isDragging);
  }, [isDragging]);
  return {
    isLoading,
    isActive,
    thumbHeight,
    thumbPosition,
    isDragging
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
const isSet = v => v !== undefined && v !== null && v !== '' && !isNaN(v) && v != false;

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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/scrollbar/style.scss");
/* harmony import */ var _utils_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/function */ "./src/utils/function.js");
/* harmony import */ var _hooks_useScrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useScrollbar */ "./src/hooks/useScrollbar.js");






const Scrollbar = ({
  scrollbarData
}) => {
  const thumbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const railRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const showScrollbar = JSON.parse(scrollbarData?.asb_showscrollbar);
  const {
    isLoading,
    isActive,
    thumbHeight,
    thumbPosition
  } = (0,_hooks_useScrollbar__WEBPACK_IMPORTED_MODULE_4__.useScrollbar)(railRef, thumbRef, showScrollbar);
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
      "--csb-scrollbar-display-property": 'block'
    }),
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.isSet)(thumbPosition) && {
      "--csb-scrollbar-position": thumbPosition + "px"
    }),
    ...((0,_utils_function__WEBPACK_IMPORTED_MODULE_3__.isSet)(thumbHeight) && {
      "--csb-scrollbar-height": thumbHeight + "px"
    })
  };
  if (isLoading) return;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: railRef,
    className: "csb-scrollbar-rail",
    style: {
      ...styles
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "csb-scrollbar-rail-thumb",
    ref: thumbRef,
    key: isActive
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