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
// import { useCallback, useEffect, useRef, useState } from "react";

// export const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false, mouseScrollStep = 40, scrollSpeed = 60) => {
//     const isClick = true, isDrag = true;
//     const [isActive, setIsActive] = useState(false);
//     const startY = useRef(0);
//     const startScrollTop = useRef(0);
//     const [isDragging, setIsDragging] = useState(false);
//     const [thumbHeight, setThumbHeight] = useState("");
//     const [thumbPosition, setThumbPosition] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isWheel, setIsWheel] = useState(true);
//     const animationFrameId = useRef();
//     const targetScroll = useRef(0);
//     const currentScroll = useRef(0);
//     const isScrolling = useRef(false);

//     const html = document.documentElement;

//     const animate = useCallback(() => {
//         if (isScrolling.current) {
//             const difference = targetScroll.current - currentScroll.current;
//             currentScroll.current += difference / (scrollSpeed / 10);

//             window.scrollTo(0, currentScroll.current);

//             if (Math.abs(difference) < 0.5) {
//                 currentScroll.current = targetScroll.current;
//                 window.scrollTo(0, currentScroll.current);
//                 isScrolling.current = false;
//             }
//         }

//         animationFrameId.current = requestAnimationFrame(animate);
//     }, [scrollSpeed]);

//     let wheelId;

//     const handleWheel = useCallback((e) => {
//         e.preventDefault();
//         setIsWheel(false)
//         // Calculate scroll amount based on mouseScrollStep
//         const delta = Math.sign(e.deltaY) * mouseScrollStep;

//         // Update target position
//         targetScroll.current += delta;

//         // Keep within document bounds
//         // targetScroll.current = Math.max(
//         //   0,
//         //   Math.min(
//         //     targetScroll.current,
//         //     document.body.scrollHeight - window.innerHeight
//         //   )
//         // );
//         const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//         targetScroll.current = Math.max(
//             0,
//             Math.min(targetScroll.current, maxScroll)
//         );

//         if (!isScrolling.current) {
//             isScrolling.current = true;
//         }

//         wheelId = setTimeout(() => {
//             setIsWheel(true);
//         }, 500);

//     }, [mouseScrollStep]);

//     const handleScroll = useCallback((e) => {
//         if (isScrolling.current) {
//             e.preventDefault();
//             window.scrollTo(0, currentScroll.current);
//         }
//     }, []);

//     // Function to handle thumb dragging and update position
//     const handleThumbDrag = (clientY) => {
//         // 1. Get current metrics
//         const totalScrollableHeight = html.scrollHeight - html.clientHeight;
//         if (totalScrollableHeight <= 0) return; // No scrolling needed

//         // 2. Calculate drag distance and scroll ratio
//         const dragDistanceY = clientY - startY.current;
//         const availableTrackHeight = html.clientHeight - thumbHeight;

//         // 3. Calculate new scroll position with boundaries
//         const scrollRatio = dragDistanceY / availableTrackHeight;
//         const unboundedScrollTop = startScrollTop.current + (scrollRatio * totalScrollableHeight);
//         const boundedScrollTop = Math.max(0, Math.min(unboundedScrollTop, totalScrollableHeight));

//         // 4. Update scroll position immediately
//         html.scrollTop = boundedScrollTop;

//         // 5. Calculate and set thumb position
//         const scrollProgress = boundedScrollTop / totalScrollableHeight;
//         const newThumbPosition = scrollProgress * availableTrackHeight;

//         // Use direct assignment if possible, or ensure setThumbPosition is synchronous
//         // thumbRef.current.style.top= `${newThumbPosition}px`;
//         // Alternatively:
//         setThumbPosition(newThumbPosition);
//     };

//     useEffect(() => {
//         setIsActive(isShowScrollbar);
//         if (!isShowScrollbar) return;
//         html.classList.add('csb-scrollbar-active');

//         const updateScrollbar = (e) => {
//             handleScroll(e)
//             if (!thumbRef.current) return;

//             const scrollableHeight = html.scrollHeight - html.clientHeight;
//             if (scrollableHeight <= 0) return;

//             // Calculate thumb height (minimum 20px)
//             const newThumbHeight = Math.max(
//                 (html.clientHeight / html.scrollHeight) * html.clientHeight,
//                 20
//             );
//             setThumbHeight(newThumbHeight);

//             // Update thumb position
//             const scrollPercentage = html.scrollTop / scrollableHeight;
//             const maxThumbPosition = html.clientHeight - newThumbHeight;
//             setThumbPosition(scrollPercentage * maxThumbPosition);
//         };

//         const handleMouseMove = (e) => {
//             // e.preventDefault();
//             if (!isDragging || !thumbRef?.current || !isDrag) return;
//             handleThumbDrag(e.clientY);
//         };

//         const handleMouseUp = () => {
//             setIsDragging(false);
//             document.body.style.cursor = '';
//             document.body.style.userSelect = '';

//         };

//         const handleMouseClick = (e) => {

//             e.preventDefault();
//             if (!railRef.current || !thumbRef.current || !isClick) return;

//             const scrollableHeight = html.scrollHeight - html.clientHeight;
//             if (scrollableHeight <= 0) return;

//             const viewportHeight = html.clientHeight;
//             const currentScrollTop = html.scrollTop;
//             const thumbRect = thumbRef.current.getBoundingClientRect();

//             let newScrollTop;

//             if (e.clientY < thumbRect.top) {
//                 // Clicked above the thumb, scroll up by one page (100dvh)
//                 newScrollTop = currentScrollTop - viewportHeight;
//             } else if (e.clientY > thumbRect.bottom) {
//                 // Clicked below the thumb, scroll down by one page (100dvh)
//                 newScrollTop = currentScrollTop + viewportHeight;
//             } else {
//                 // Clicked on the thumb itself, do nothing.
//                 return;
//             }

//             // Clamp the new scroll position to stay within the valid range.
//             const boundedScrollTop = Math.max(0, Math.min(newScrollTop, scrollableHeight));
//             window.scrollTo({
//                 top: boundedScrollTop,
//                 behavior: 'smooth',
//             });
//         };

//         // Initial setup
//         updateScrollbar();
//         window.addEventListener('resize', updateScrollbar);
//         window.addEventListener('scroll', updateScrollbar,{ passive: false });

//         // Drag events
//         thumbRef.current?.addEventListener('mousedown', (e) => {
//             e.stopPropagation();
//             setIsDragging(true);
//             startY.current = e.clientY;
//             startScrollTop.current = html.scrollTop;
//             // document.body.style.cursor = 'grabbing';
//             document.body.style.userSelect = 'none';
//         });

//         const handleThumbClick = (e) => {
//             e.stopPropagation();
//         }
//         // click event on the rail
//         railRef?.current?.addEventListener('click', handleMouseClick);
//         thumbRef.current?.addEventListener('click', handleThumbClick);

//         // Initialize scroll positions
//         targetScroll.current = window.pageYOffset;
//         currentScroll.current = window.pageYOffset;

//         // Start animation loop
//         animationFrameId.current = requestAnimationFrame(animate);

//         // Add event listeners
//         window.addEventListener('wheel', handleWheel, { passive: false });

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//         window.addEventListener('load', () => {
//             updateScrollbar();
//             setIsLoading(false);
//         });

//         return () => {
//             html.classList.remove('csb-scrollbar-active');
//             window.removeEventListener('resize', updateScrollbar);
//             window.removeEventListener('scroll', updateScrollbar);
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//             window.removeEventListener('load', updateScrollbar);
//             railRef?.current?.removeEventListener('click', handleMouseClick)
//             thumbRef.current?.removeEventListener('click', handleThumbClick);
//             // if (wheelStep) {
//             // document.removeEventListener('wheel', handleWheel);
//             // }
//             if (animationFrameId.current) {
//                 cancelAnimationFrame(animationFrameId.current);
//             }
//             window.removeEventListener('wheel', handleWheel);
//             isScrolling.current = false;
//             clearTimeout(wheelId);
//         };
//     }, [isLoading, isShowScrollbar, railRef.current, thumbRef.current, thumbHeight, isDragging]);
//     return { isLoading, isActive, thumbHeight, thumbPosition, isDragging, isWheel };
// };


const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false, mouseScrollStep = 40, scrollSpeed = 60) => {
  const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [thumbHeight, setThumbHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [thumbPosition, setThumbPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isWheel, setIsWheel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const html = document.documentElement;
  const startY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const startScrollTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const animationFrameId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const targetScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const currentScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const isScrolling = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const wheelTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  // Update thumb position based on current scroll
  const updateThumbPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!thumbRef?.current) return;
    const scrollableHeight = html.scrollHeight - html.clientHeight;
    if (scrollableHeight <= 0) return;

    // Calculate thumb height (minimum 20px)
    const newThumbHeight = Math.max(html.clientHeight / html.scrollHeight * html.clientHeight, 20);
    setThumbHeight(newThumbHeight);

    // Update thumb position based on current scroll
    const scrollPercentage = currentScroll.current / scrollableHeight;
    const maxThumbPosition = html.clientHeight - newThumbHeight;
    const newPosition = scrollPercentage * maxThumbPosition;
    setThumbPosition(newPosition);
  }, [html, thumbRef]);

  // Smooth scroll animation
  const animate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isScrolling.current) {
      const difference = targetScroll.current - currentScroll.current;

      // Adjusted speed calculation:
      // - Higher scrollSpeed (>60) = slower, smoother (smaller steps)
      // - Lower scrollSpeed (<60) = faster, less smooth (larger steps)
      const speedFactor = scrollSpeed / 60; // Normalize to 1.0 at 60
      const step = difference * (0.1 / speedFactor); // Inverse relationship

      currentScroll.current += step;
      window.scrollTo(0, currentScroll.current);
      updateThumbPosition();
      if (Math.abs(difference) < 1) {
        currentScroll.current = targetScroll.current;
        window.scrollTo(0, currentScroll.current);
        isScrolling.current = false;
      }
    }
    animationFrameId.current = requestAnimationFrame(animate);
  }, [scrollSpeed, updateThumbPosition]);

  // Wheel event handler
  const handleWheel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    setIsWheel(false);

    // Calculate scroll amount based on mouseScrollStep
    const delta = Math.sign(e.deltaY) * mouseScrollStep;

    // Update target position
    targetScroll.current += delta;

    // Keep within document bounds
    const maxScroll = html.scrollHeight - window.innerHeight;
    targetScroll.current = Math.max(0, Math.min(targetScroll.current, maxScroll));
    if (!isScrolling.current) {
      isScrolling.current = true;
    }

    // Clear any existing timeout
    if (wheelTimeout.current) {
      clearTimeout(wheelTimeout.current);
    }

    // Set timeout to reset wheel state
    wheelTimeout.current = setTimeout(() => {
      setIsWheel(true);
    }, 500);
  }, [mouseScrollStep, html]);

  // Handle thumb dragging
  const handleThumbDrag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(clientY => {
    const totalScrollableHeight = html.scrollHeight - html.clientHeight;
    if (totalScrollableHeight <= 0) return;
    const dragDistanceY = clientY - startY.current;
    const availableTrackHeight = html.clientHeight - thumbHeight;
    const scrollRatio = dragDistanceY / availableTrackHeight;
    const unboundedScrollTop = startScrollTop.current + scrollRatio * totalScrollableHeight;
    const boundedScrollTop = Math.max(0, Math.min(unboundedScrollTop, totalScrollableHeight));

    // Update both scroll position and thumb position
    html.scrollTop = boundedScrollTop;
    currentScroll.current = boundedScrollTop;
    targetScroll.current = boundedScrollTop;
    const scrollProgress = boundedScrollTop / totalScrollableHeight;
    const newThumbPosition = scrollProgress * availableTrackHeight;
    setThumbPosition(newThumbPosition);
  }, [html, thumbHeight]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsActive(isShowScrollbar);
    if (!isShowScrollbar) return;
    html.classList.add('csb-scrollbar-active');
    const updateScrollbar = () => {
      if (!thumbRef?.current) return;
      const scrollableHeight = html.scrollHeight - html.clientHeight;
      if (scrollableHeight <= 0) return;

      // Update thumb dimensions and position
      const newThumbHeight = Math.max(html.clientHeight / html.scrollHeight * html.clientHeight, 20);
      setThumbHeight(newThumbHeight);
      const scrollPercentage = html.scrollTop / scrollableHeight;
      const maxThumbPosition = html.clientHeight - newThumbHeight;
      setThumbPosition(scrollPercentage * maxThumbPosition);
    };
    const handleMouseMove = e => {
      if (!isDragging || !thumbRef?.current) return;
      handleThumbDrag(e.clientY);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
    };
    const handleRailClick = e => {
      e.preventDefault();
      if (!railRef.current || !thumbRef.current) return;
      const scrollableHeight = html.scrollHeight - html.clientHeight;
      if (scrollableHeight <= 0) return;
      const viewportHeight = html.clientHeight;
      const currentScrollTop = html.scrollTop;
      const thumbRect = thumbRef.current.getBoundingClientRect();
      let newScrollTop;
      if (e.clientY < thumbRect.top) {
        newScrollTop = currentScrollTop - viewportHeight;
      } else if (e.clientY > thumbRect.bottom) {
        newScrollTop = currentScrollTop + viewportHeight;
      } else {
        return;
      }
      const boundedScrollTop = Math.max(0, Math.min(newScrollTop, scrollableHeight));
      targetScroll.current = boundedScrollTop;
      isScrolling.current = true;
    };

    // Initial setup
    updateScrollbar();
    targetScroll.current = window.pageYOffset;
    currentScroll.current = window.pageYOffset;

    // Start animation loop immediately
    animationFrameId.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('resize', updateScrollbar);
    window.addEventListener('scroll', updateScrollbar);
    window.addEventListener('wheel', handleWheel, {
      passive: false
    });
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    if (thumbRef.current) {
      thumbRef.current.addEventListener('mousedown', e => {
        e.stopPropagation();
        setIsDragging(true);
        startY.current = e.clientY;
        startScrollTop.current = html.scrollTop;
        document.body.style.userSelect = 'none';
      });
      thumbRef.current.addEventListener('click', e => {
        e.stopPropagation();
      });
    }
    if (railRef.current) {
      railRef.current.addEventListener('click', handleRailClick);
    }
    window.addEventListener('load', () => {
      updateScrollbar();
      setIsLoading(false);
    });

    // In the cleanup function of useEffect:
    return () => {
      html.classList.remove('csb-scrollbar-active');
      window.removeEventListener('resize', updateScrollbar);
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('load', updateScrollbar);

      // Fix for thumbRef event listeners
      // if (thumbRef.current) {
      // const thumbElement = thumbRef.current;
      // thumbElement.removeEventListener('mousedown', handleThumbMouseDown);
      // thumbElement.removeEventListener('click', handleThumbClick);
      // }

      if (railRef.current) {
        railRef.current.removeEventListener('click', handleRailClick);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
      isScrolling.current = false;
    };
  }, [isShowScrollbar, html, thumbRef, railRef, isDragging, handleWheel, handleThumbDrag, animate]);
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




// import { useSmoothScroll } from '../hooks/useSmoothScroll';


const Scrollbar = ({
  scrollbarData
}) => {
  const {
    asb_showscrollbar,
    asb_color = '',
    asb_background = '',
    asb_mousescrollstep = 40,
    asb_autohidemode = false,
    asb_railalign = "right",
    asb_scrollspeed = 60
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
  } = (0,_hooks_useScrollbar__WEBPACK_IMPORTED_MODULE_2__.useScrollbar)(railRef, thumbRef, showScrollbar, Number(asb_mousescrollstep), Number(asb_scrollspeed));
  // const { isWheel } = useSmoothScroll({
  //     scrollSpeed: Number(asb_scrollspeed),    // Normal scrolling speed
  //     mouseScrollStep: Number(asb_mousescrollstep) // Pixels per mouse wheel step
  // });
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