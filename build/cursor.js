/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/customCursor/cursor/Effects/CursorEffects.js":
/*!**********************************************************!*\
  !*** ./src/customCursor/cursor/Effects/CursorEffects.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CursorEffect_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CursorEffect.scss */ "./src/customCursor/cursor/Effects/CursorEffect.scss");
/* harmony import */ var _hooks_useClickPosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useClickPosition */ "./src/customCursor/hooks/useClickPosition.js");
/* harmony import */ var _hooks_useAnimationResetOnChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAnimationResetOnChange */ "./src/customCursor/hooks/useAnimationResetOnChange.js");
/* harmony import */ var _rippleEffects_RippleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rippleEffects/RippleEffects */ "./src/customCursor/cursor/Effects/rippleEffects/RippleEffects.js");
/* harmony import */ var _sparkEffect_ClickSpark_ClickSpark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sparkEffect/ClickSpark/ClickSpark */ "./src/customCursor/cursor/Effects/sparkEffect/ClickSpark/ClickSpark.js");
/* harmony import */ var _sparkEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sparkEffect */ "./src/customCursor/cursor/Effects/sparkEffect/index.js");
/* harmony import */ var _sparkEffect_SparkSimple_SparkSimple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sparkEffect/SparkSimple/SparkSimple */ "./src/customCursor/cursor/Effects/sparkEffect/SparkSimple/SparkSimple.js");









const CursorEffects = ({
  effect,
  domEl = document
}) => {
  const effectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const clickPosition = (0,_hooks_useClickPosition__WEBPACK_IMPORTED_MODULE_2__.useClickPosition)(domEl);
  (0,_hooks_useAnimationResetOnChange__WEBPACK_IMPORTED_MODULE_3__.useAnimationResetOnChange)(effectRef, clickPosition, "effect-wrapper");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, effect?.type !== "spark" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: effectRef
    // className="effect-wrapper"
    ,
    style: {
      left: `${clickPosition.x}px`,
      top: `${clickPosition.y}px`,
      pointerEvents: "none"
    }
  }, (() => {
    switch (effect?.type) {
      case "rippleCircle":
      case "rippleDouble":
      case "rippleWave":
      case "ripplePulse":
      case "tsunami":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rippleEffects_RippleEffects__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: effect?.type,
          ...effect?.[effect?.type],
          key: effect?.type
        });
      // case "spark":
      case "sparkSimple":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sparkEffect_SparkSimple_SparkSimple__WEBPACK_IMPORTED_MODULE_7__["default"], {
          ...effect?.sparkSimple
        });
      case "starburst":
      case "radial":
      case "explosion":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sparkEffect__WEBPACK_IMPORTED_MODULE_6__["default"], {
          effect: effect,
          key: effect?.type
        });
      default:
        return null;
    }
  })()), effect?.type === "spark" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sparkEffect_ClickSpark_ClickSpark__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ...effect?.spark
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorEffects);

/***/ }),

/***/ "./src/customCursor/cursor/Effects/rippleEffects/RippleEffects.js":
/*!************************************************************************!*\
  !*** ./src/customCursor/cursor/Effects/rippleEffects/RippleEffects.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/common */ "./src/customCursor/utils/common.js");


// import './style.scss';
/**
 * RippleEffects component renders different ripple effects based on the type prop.
 * @param {Object} props - Component properties.
 * @param {string} props.type - Type of ripple effect ('circle', 'double', 'wave', 'pulse').
 * @returns {JSX.Element} The ripple effect element.
 */
const RippleEffects = ({
  type,
  ...props
}) => {
  const {
    duration,
    size,
    background,
    secondaryBgColor,
    borderColor,
    secondaryBorderColor,
    tertiaryBorderColor,
    borderWidth
  } = props;
  const rippleStyle = {
    rippleCircle: {
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
        '--bPl-cursor-effect-ripple-size': size + 'px'
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(background) && {
        '--bPl-cursor-effect-ripple-background': background
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderColor) && {
        '--bPl-cursor-effect-ripple-border-color': borderColor
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderWidth) && {
        '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px'
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
        '--bPl-cursor-effect-ripple-duration': duration + 's'
      })
    },
    rippleDouble: {
      fast: {
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
          '--bPl-cursor-effect-ripple-size': size + 'px'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(background) && {
          '--bPl-cursor-effect-ripple-background': background
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderColor) && {
          '--bPl-cursor-effect-ripple-border-color': borderColor
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderWidth) && {
          '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
          '--bPl-cursor-effect-ripple-duration': duration + 's'
        })
      },
      slow: {
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
          '--bPl-cursor-effect-ripple-size': size + 'px'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(secondaryBgColor) && {
          '--bPl-cursor-effect-ripple-background': secondaryBgColor
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(secondaryBorderColor) && {
          '--bPl-cursor-effect-ripple-border-color': secondaryBorderColor
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderWidth) && {
          '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
          '--bPl-cursor-effect-ripple-slow-duration': (duration * 1.41).toFixed(2) + 's'
        })
      }
    },
    rippleWave: {
      wave1: {
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
          '--bPl-cursor-effect-ripple-wave-size': size + 'px'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
          '--bPl-cursor-effect-ripple-duration': duration + 's'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderColor) && {
          '--bPl-cursor-effect-ripple-border-color': borderColor
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderWidth) && {
          '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px'
        })
      },
      wave2: {
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
          '--bPl-cursor-effect-ripple-wave-size': size + 'px'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
          '--bPl-cursor-effect-ripple-duration': duration + 's'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(secondaryBorderColor) && {
          '--bPl-cursor-effect-ripple-border-color': secondaryBorderColor
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderWidth) && {
          '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px'
        })
      },
      wave3: {
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
          '--bPl-cursor-effect-ripple-wave-size': size + 'px'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
          '--bPl-cursor-effect-ripple-duration': duration + 's'
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(tertiaryBorderColor) && {
          '--bPl-cursor-effect-ripple-border-color': tertiaryBorderColor
        }),
        ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderWidth) && {
          '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px'
        })
      }
    },
    ripplePulse: {
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
        '--bPl-cursor-effect-ripple-size': size + 'px'
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(background) && {
        '--bPl-cursor-effect-ripple-background': background
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
        '--bPl-cursor-effect-ripple-duration': duration + 's'
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderWidth) && {
        '--bPl-cursor-effect-ripple-border-width': borderWidth + 'px'
      }),
      ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(borderColor) && {
        '--bPl-cursor-effect-ripple-border-color': borderColor
      })
    }
  };
  switch (type) {
    case 'rippleCircle':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: rippleStyle.rippleCircle,
        className: "ripple-circle"
      });
    case "rippleDouble":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: rippleStyle.rippleDouble.fast,
        className: "ripple-circle ripple-fast"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: rippleStyle.rippleDouble.slow,
        className: "ripple-circle ripple-slow"
      }));
    case "rippleWave":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: rippleStyle.rippleWave.wave1,
        className: "ripple-wave wave-1"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: rippleStyle.rippleWave.wave2,
        className: "ripple-wave wave-2"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: rippleStyle.rippleWave.wave3,
        className: "ripple-wave wave-3"
      }));
    case "tsunami":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [...Array(4)].map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: i,
        className: "ripple",
        style: {
          animationDelay: `${i * 0.25}s`
        }
      })));
    case 'ripplePulse':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: rippleStyle.ripplePulse,
        className: "ripple-pulse"
      });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RippleEffects);

/***/ }),

/***/ "./src/customCursor/cursor/Effects/sparkEffect/ClickSpark/ClickSpark.js":
/*!******************************************************************************!*\
  !*** ./src/customCursor/cursor/Effects/sparkEffect/ClickSpark/ClickSpark.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useClickPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useClickPosition */ "./src/customCursor/hooks/useClickPosition.js");



const ClickSpark = ({
  color = "#f00",
  size = 12,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  // easing = "ease-out",
  extraScale = 1.0
}) => {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const sparksRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const startTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const clickPosition = (0,_hooks_useClickPosition__WEBPACK_IMPORTED_MODULE_1__.useClickPosition)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full viewport size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", handleResize);
    resizeCanvas();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const easeFunc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(t => {
    switch (easing) {
      case "linear":
        return t;
      case "ease-in":
        return t * t;
      case "ease-in-out":
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default:
        return t * (2 - t);
    }
  }, [easing]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    const draw = timestamp => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }
        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = size * (1 - eased);
        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return true;
      });
      animationId = requestAnimationFrame(draw);
    };
    animationId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [color, size, sparkRadius, sparkCount, duration, easeFunc, extraScale]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !clickPosition.x || !clickPosition.y) return;
    const now = performance.now();
    const newSparks = Array.from({
      length: sparkCount
    }, (_, i) => ({
      x: clickPosition.x,
      y: clickPosition.y,
      angle: 2 * Math.PI * i / sparkCount,
      startTime: now
    }));
    sparksRef.current.push(...newSparks);
  }, [clickPosition, sparkCount]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("canvas", {
    ref: canvasRef,
    style: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      pointerEvents: "none",
      zIndex: 99999
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickSpark);

/***/ }),

/***/ "./src/customCursor/cursor/Effects/sparkEffect/Explosion/Explosion.js":
/*!****************************************************************************!*\
  !*** ./src/customCursor/cursor/Effects/sparkEffect/Explosion/Explosion.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/common */ "./src/customCursor/utils/common.js");


// import './style.scss';
const Explosion = ({
  size = 100,
  color = '#ffb347',
  duration = 1.5,
  delay = 0.05
}) => {
  const styles = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
      "--bPl-spark-explosion-transition-duration": duration + 's'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
      "--bPl-spark-explosion-size": size + 'px'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(color) && {
      "--bPl-spark-explosion-color": color
    })
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styles,
    className: "spark-explosion-container"
  }, [...Array(15)].map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "explosion-particle",
    style: {
      transform: `rotate(${i * 24}deg)`,
      animationDelay: `${i * delay}s`
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explosion);

/***/ }),

/***/ "./src/customCursor/cursor/Effects/sparkEffect/Radial/Radial.js":
/*!**********************************************************************!*\
  !*** ./src/customCursor/cursor/Effects/sparkEffect/Radial/Radial.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/common */ "./src/customCursor/utils/common.js");


//import './style.scss';
const Radial = ({
  duration = 1.2,
  size = 80,
  color = '#74ebd5'
}) => {
  const styles = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
      "--bPl-spark-radial-transition-duration": duration + 's'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
      "--bPl-spark-radial-size": size + 'px'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(color) && {
      "--bPl-spark-radial-color": color
    })
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styles,
    className: "spark-radial-container"
  }, [...Array(12)].map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "radial-spark",
    style: {
      transform: `rotate(${i * 30}deg)`
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radial);

/***/ }),

/***/ "./src/customCursor/cursor/Effects/sparkEffect/SparkSimple/SparkSimple.js":
/*!********************************************************************************!*\
  !*** ./src/customCursor/cursor/Effects/sparkEffect/SparkSimple/SparkSimple.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/common */ "./src/customCursor/utils/common.js");


//import "./style.scss";

const SparkSimple = ({
  duration,
  easing = 'ease-out',
  size = 40,
  color = '#ff6b6b'
}) => {
  const styles = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
      "--bPl-spark-simple-transition-duration": duration + 'ms'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(easing) && {
      "--bPl-spark-simple-timing-function": easing
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
      "--bPl-spark-simple-size": size + 'px'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(color) && {
      "--bPl-spark-simple-color": color
    })
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styles,
    className: "spark-simple-container"
  }, [...Array(6)].map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "spark-line",
    style: {
      transform: `rotate(${i * 60}deg)`
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SparkSimple);

/***/ }),

/***/ "./src/customCursor/cursor/Effects/sparkEffect/Starburst/Starburst.js":
/*!****************************************************************************!*\
  !*** ./src/customCursor/cursor/Effects/sparkEffect/Starburst/Starburst.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/common */ "./src/customCursor/utils/common.js");


//import './style.scss';
const Starburst = ({
  duration = 1,
  size = 60,
  color = '#ff9a8b'
}) => {
  const styles = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(size) && {
      "--bPl-spark-starburst-size": size + 'px'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(duration) && {
      "--bPl-spark-starburst-transition-duration": duration + 's'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.isSet)(color) && {
      "--bPl-spark-starburst-color": color
    })
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styles,
    className: "spark-starburst-container"
  }, [...Array(8)].map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "starburst-line",
    style: {
      transform: `rotate(${i * 45}deg)`
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Starburst);

/***/ }),

/***/ "./src/customCursor/cursor/Effects/sparkEffect/index.js":
/*!**************************************************************!*\
  !*** ./src/customCursor/cursor/Effects/sparkEffect/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Explosion_Explosion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Explosion/Explosion */ "./src/customCursor/cursor/Effects/sparkEffect/Explosion/Explosion.js");
/* harmony import */ var _Radial_Radial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Radial/Radial */ "./src/customCursor/cursor/Effects/sparkEffect/Radial/Radial.js");
/* harmony import */ var _Starburst_Starburst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Starburst/Starburst */ "./src/customCursor/cursor/Effects/sparkEffect/Starburst/Starburst.js");



// import SparkSimple from "./SparkSimple/SparkSimple";

const SparkEffect = ({
  effect
}) => {
  switch (effect?.type) {
    // case "spark":
    //   return <ClickSpark sparkColor='#f00' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400} />;
    // case "sparkSimple":
    //   return <SparkSimple {...effect?.sparkSimple} />;
    case "starburst":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Starburst_Starburst__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ...effect?.starburst
      });
    case "radial":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Radial_Radial__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ...effect?.radial
      });
    case "explosion":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Explosion_Explosion__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...effect?.explosion
      });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SparkEffect);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/BlobCursor/BlobCursor.js":
/*!****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/BlobCursor/BlobCursor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlobCursor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/BlobCursor/style.scss");




const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
function BlobCursor({
  blobType = "circle",
  fillColor = "#00f0ff",
  blobSize = 125,
  domEl = null,
  eventEl = window,
  rect = {
    left: 0,
    top: 0
  }
}) {
  const trailRefs = [(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null), (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null), (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null)];
  const pos = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  const trailPos = [(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  })];

  // Calculate blob sizes
  const blobSizes = [Math.round(blobSize * 0.4), blobSize, Math.round(blobSize * 0.6)];

  // Use rect for relative positioning
  const handleMove = e => {
    let x = e.clientX || e.touches && e.touches[0].clientX;
    let y = e.clientY || e.touches && e.touches[0].clientY;
    if (rect.left && rect.top) {
      x = x - rect.left;
      y = y - rect.top;
    }
    pos.current = {
      x,
      y
    };
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!eventEl) return;
    eventEl.addEventListener("mousemove", handleMove);
    eventEl.addEventListener("touchmove", handleMove);
    return () => {
      eventEl.removeEventListener("mousemove", handleMove);
      eventEl.removeEventListener("touchmove", handleMove);
    };
  }, [eventEl, rect]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Animation loop
    const updateTrail = () => {
      // First element follows quickly
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(trailPos[0].current, {
        x: pos.current.x,
        y: pos.current.y,
        duration: 0.1,
        ease: "power1.out"
      });

      // Other elements follow more slowly
      for (let i = 1; i < 3; i++) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(trailPos[i].current, {
          x: trailPos[i - 1].current.x,
          y: trailPos[i - 1].current.y,
          duration: 0.5,
          ease: "power2.out"
        });
      }

      // Update DOM
      trailRefs.forEach((ref, i) => {
        if (ref.current) {
          ref.current.style.transform = trans(trailPos[i].current.x, trailPos[i].current.y);
        }
      });
      requestAnimationFrame(updateTrail);
    };
    const animationId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationId);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    style: {
      position: "absolute",
      width: 0,
      height: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "bBlocks-cursor-blob"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    in: "SourceGraphic",
    result: "blur",
    stdDeviation: "30"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "blur",
    values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bBlocks-blob-cursor-main",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: rect?.width ? rect.width : "100%",
      height: rect?.height ? rect.height : "100%",
      pointerEvents: "none"
    },
    ref: domEl
  }, [0, 1, 2].map(index => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    ref: trailRefs[index],
    style: {
      position: "absolute",
      willChange: "transform",
      borderRadius: blobType === "circle" ? "50%" : "0%",
      backgroundColor: fillColor,
      opacity: 0.6,
      width: `${blobSizes[index] || 60}px`,
      height: `${blobSizes[index] || 60}px`
    }
  }))));
}

/***/ }),

/***/ "./src/customCursor/cursor/Shape/Cursor.js":
/*!*************************************************!*\
  !*** ./src/customCursor/cursor/Shape/Cursor.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common */ "./src/customCursor/utils/common.js");
/* harmony import */ var _BlobCursor_BlobCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlobCursor/BlobCursor */ "./src/customCursor/cursor/Shape/BlobCursor/BlobCursor.js");
/* harmony import */ var _CursorDot_CursorDot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CursorDot/CursorDot */ "./src/customCursor/cursor/Shape/CursorDot/CursorDot.js");
/* harmony import */ var _CursorElastic_CursorElastic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CursorElastic/CursorElastic */ "./src/customCursor/cursor/Shape/CursorElastic/CursorElastic.js");
/* harmony import */ var _CursorFollow_CursorFollow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CursorFollow/CursorFollow */ "./src/customCursor/cursor/Shape/CursorFollow/CursorFollow.js");
/* harmony import */ var _CursorGlitch_CursorGlitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CursorGlitch/CursorGlitch */ "./src/customCursor/cursor/Shape/CursorGlitch/CursorGlitch.js");
/* harmony import */ var _CursorGlow_CursorGlow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CursorGlow/CursorGlow */ "./src/customCursor/cursor/Shape/CursorGlow/CursorGlow.js");
/* harmony import */ var _CursorGradient_CursorGradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CursorGradient/CursorGradient */ "./src/customCursor/cursor/Shape/CursorGradient/CursorGradient.js");
/* harmony import */ var _CursorImage_CursorImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CursorImage/CursorImage */ "./src/customCursor/cursor/Shape/CursorImage/CursorImage.js");
/* harmony import */ var _CursorMagnetic_CursorMagnetic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CursorMagnetic/CursorMagnetic */ "./src/customCursor/cursor/Shape/CursorMagnetic/CursorMagnetic.js");
/* harmony import */ var _CursorNeon_CursorNeon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CursorNeon/CursorNeon */ "./src/customCursor/cursor/Shape/CursorNeon/CursorNeon.js");
/* harmony import */ var _CursorPixelated_CursorPixelated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CursorPixelated/CursorPixelated */ "./src/customCursor/cursor/Shape/CursorPixelated/CursorPixelated.js");
/* harmony import */ var _CursorRing_CursorRing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CursorRing/CursorRing */ "./src/customCursor/cursor/Shape/CursorRing/CursorRing.js");
/* harmony import */ var _CursorRipple_CursorRipple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CursorRipple/CursorRipple */ "./src/customCursor/cursor/Shape/CursorRipple/CursorRipple.js");
/* harmony import */ var _CursorSketch_CursorSketch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CursorSketch/CursorSketch */ "./src/customCursor/cursor/Shape/CursorSketch/CursorSketch.js");
/* harmony import */ var _CursorSpotlight_CursorSpotlight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CursorSpotlight/CursorSpotlight */ "./src/customCursor/cursor/Shape/CursorSpotlight/CursorSpotlight.js");
/* harmony import */ var _CursorText_CursorText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CursorText/CursorText */ "./src/customCursor/cursor/Shape/CursorText/CursorText.js");
/* harmony import */ var _SplashCursor_SplashCursor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SplashCursor/SplashCursor */ "./src/customCursor/cursor/Shape/SplashCursor/SplashCursor.js");













// import CursorRibbon from './CursorRibbon/CursorRibbon';






const Cursor = ({
  shape = {},
  domEl = null,
  eventEl = window,
  rect = {}
}) => {
  function getGlitchProps(type, shape) {
    return {
      ..._utils_common__WEBPACK_IMPORTED_MODULE_1__.glitchCursorDefaultValues[type],
      ...shape?.[type]
    };
  }

  // console.log(shape);
  switch (shape?.type) {
    case 'follow':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorFollow_CursorFollow__WEBPACK_IMPORTED_MODULE_5__["default"], {
        shape: shape.type,
        ...shape?.follow,
        domEl: domEl
      });
    case 'blob':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlobCursor_BlobCursor__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ...shape.blob,
        domEl: domEl,
        eventEl: eventEl,
        rect: rect
      });
    case 'dot':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorDot_CursorDot__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ...shape.dot,
        domEl: domEl
      });
    case 'elastic':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorElastic_CursorElastic__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ...shape.elastic,
        domEl: domEl
      });
    case 'digital':
    case 'analog':
    case 'cyberpunk':
    case 'matrix':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorGlitch_CursorGlitch__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ...getGlitchProps(shape.type, shape),
        key: shape.type,
        domEl: domEl
      });
    case 'glow':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorGlow_CursorGlow__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ...shape?.glow,
        domEl: domEl
      });
    case 'gradient':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorGradient_CursorGradient__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ...shape?.gradient,
        domEl: domEl
      });
    case 'image':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorImage_CursorImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ...shape?.image,
        url: shape?.image?.img?.url,
        domEl: domEl
      });
    case 'magnetic':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorMagnetic_CursorMagnetic__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ...shape?.magnetic,
        domEl: domEl
      });
    case 'neon':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorNeon_CursorNeon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        ...shape?.neon,
        domEl: domEl
      });
    case 'pixelated':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorPixelated_CursorPixelated__WEBPACK_IMPORTED_MODULE_12__["default"], {
        ...shape?.pixelated,
        domEl: domEl
      });
    // case 'ribbon':
    //   return <CursorRibbon baseThickness={30}
    //     colors={['#DA6C6C', '#FE5D26']}
    //     speedMultiplier={0.5}
    //     maxAge={500}
    //     enableFade={false}
    //     enableShaderEffect={true} domEl={domEl} />;
    case 'ring':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorRing_CursorRing__WEBPACK_IMPORTED_MODULE_13__["default"], {
        ...shape?.ring,
        domEl: domEl
      });
    case 'ripple':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorRipple_CursorRipple__WEBPACK_IMPORTED_MODULE_14__["default"], {
        domEl: domEl,
        eventEl: eventEl
      });
    case 'sketch':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorSketch_CursorSketch__WEBPACK_IMPORTED_MODULE_15__["default"], {
        ...shape?.sketch,
        domEl: domEl
      });
    case 'spotlight':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorSpotlight_CursorSpotlight__WEBPACK_IMPORTED_MODULE_16__["default"], {
        ...shape?.spotlight,
        domEl: domEl
      });
    case 'splash':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SplashCursor_SplashCursor__WEBPACK_IMPORTED_MODULE_18__["default"], {
        SPLAT_RADIUS: shape?.splash?.size,
        key: shape?.splash?.size,
        domEl: domEl
      });
    case 'text':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CursorText_CursorText__WEBPACK_IMPORTED_MODULE_17__["default"], {
        ...shape?.text,
        domEl: domEl
      });
    default:
      return null;
  }
  // return <BlobCursor />
  // return (
  //   <>
  //     <BlobCursor />
  //     <CursorDot />
  //     <CursorElastic/>
  //     <CursorGlitch />
  //     <CursorGlow/>
  //     <CursorGradient/>
  //     <CursorImage/>
  //     <CursorMagnetic/>
  //     <CursorNeon/>
  //     <CursorFollow/>
  //     <CursorPixelated/>
  //     <CursorRibbon/>
  //     <CursorRing/>
  //     <CursorRipple/>
  //     <CursorSketch/>
  //     <CursorSpotlight/>
  //     <CursorText/>
  //     <SplashCursor/>
  //     <CursorGlitch />
  //   </>
  // );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorDot/CursorDot.js":
/*!**************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorDot/CursorDot.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/common */ "./src/customCursor/utils/common.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorDot/style.scss");






const CursorDot = ({
  size = 12,
  color = '#3B82F6',
  duration = 0.1,
  domEl = null,
  eventEl = window
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_1__.useCursor)(domEl, eventEl);
  const dotRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!dotRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(dotRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power3.out'
    });
  }, [cursorPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!dotRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(dotRef.current, {
        scale: 0.7,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(dotRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);

  // useEffect(() => {
  //   if (!dotRef.current) return;
  //   console.log(`CursorDot visibility changed: ${isVisible}`);
  //   gsap.to(dotRef.current, {
  //     opacity: isVisible ? 1 : 0,
  //     duration: 0.3,
  //     ease: 'power2.out',
  //   });
  // }, [dotRef.current,isVisible]);
  const followCursorStyle = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(size) && {
      "--bBlocks-cursor-dot-cursor-size": size + 'px'
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(color) && {
      "--bBlocks-cursor-dot-cursor-bg": color
    })
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: dotRef,
    className: `b-blocks-cursor-dotCursor`,
    style: followCursorStyle
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorDot);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorElastic/CursorElastic.js":
/*!**********************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorElastic/CursorElastic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorElastic/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/data */ "./src/customCursor/utils/data.js");






const CursorElastic = ({
  size = 40,
  color = '#EF4444',
  elasticity = 0.6,
  duration = 0.5,
  innerDuration = 0.1,
  borderWidth = "2px",
  domEl = null,
  eventEl = window
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl, eventEl);
  const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const followerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lastPositionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mainRef.current || !followerRef.current) return;

    // Update main cursor immediately
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(mainRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration: innerDuration,
      ease: 'power1.out'
    });

    // Follower with delay for elastic effect
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(followerRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: `elastic.out(1, ${elasticity})`
    });

    // Calculate velocity for size change
    const dx = cursorPosition.x - lastPositionRef.current.x;
    const dy = cursorPosition.y - lastPositionRef.current.y;
    const velocity = Math.sqrt(dx * dx + dy * dy);
    if (velocity > 5) {
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(followerRef.current, {
        width: size * 1.5,
        height: size * 0.8,
        duration: 0.2
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(followerRef.current, {
        width: size,
        height: size,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)'
      });
    }
    lastPositionRef.current = {
      x: cursorPosition.x,
      y: cursorPosition.y
    };
  }, [cursorPosition, size, elasticity]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mainRef.current || !followerRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(mainRef.current, {
        scale: 0.8,
        duration: 0.2
      });
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(followerRef.current, {
        scale: 1.2,
        duration: 0.3
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to([mainRef.current, followerRef.current], {
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: mainRef,
    className: `${_utils_data__WEBPACK_IMPORTED_MODULE_3__.prefix}-elastic-cursor`,
    style: {
      width: size * 0.3,
      height: size * 0.3,
      backgroundColor: color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: followerRef,
    className: `${_utils_data__WEBPACK_IMPORTED_MODULE_3__.prefix}-elastic-cursor-follower`,
    style: {
      width: size,
      height: size,
      border: `${borderWidth} solid ${color}`
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorElastic);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorFollow/CursorFollow.js":
/*!********************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorFollow/CursorFollow.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/common */ "./src/customCursor/utils/common.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorFollow/style.scss");






const CursorFollow = ({
  duration = 0.6,
  innerDuration = 0.1,
  size,
  followBg,
  followBorderColor,
  followBorderWidth,
  innerBg,
  innerBorderColor,
  innerBorderWidth,
  domEl = null
}) => {
  const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const innerCursorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    cursorPosition
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_1__.useCursor)(domEl);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const cursor = cursorRef.current;
    const innerCursor = innerCursorRef.current;
    // Update main cursor immediately
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(cursor, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power3'
    });
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(innerCursor, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration: innerDuration,
      ease: 'power3'
    });
  }, [cursorPosition]);
  const followCursorStyle = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(size) && {
      "--bBlocks-follow-cursor-size": size
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(followBg) && {
      "--bBlocks-follow-cursor-bg": followBg
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(followBorderColor) && {
      "--bBlocks-follow-cursor-border-color": followBorderColor
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(followBorderWidth) && {
      "--bBlocks-follow-cursor-border-width": followBorderWidth
    })
  };
  const innerCursorStyle = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(size) && {
      "--bBlocks-follow-cursor-size": size
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(innerBg) && {
      "--bBlocks-follow-inner-cursor-bg": innerBg
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(innerBorderColor) && {
      "--bBlocks-follow-inner-cursor-border": innerBorderColor
    }),
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.isSet)(innerBorderWidth) && {
      "--bBlocks-follow-inner-cursor-border-width": innerBorderWidth
    })
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: followCursorStyle,
    className: "bBlocks-follow-cursor",
    ref: cursorRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: innerCursorStyle,
    className: "bBlocks-follow-inner-cursor",
    ref: innerCursorRef
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorFollow);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorGlitch/CursorGlitch.js":
/*!********************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorGlitch/CursorGlitch.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorGlitch/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./src/customCursor/utils/common.js");






// interface GlitchCursorProps {
//   size?: number;
//   primaryColor?: string;
//   secondaryColor?: string;
//   tertiaryColor?: string;
//   intensity?: 'low' | 'medium' | 'high';
//   speed?: 'slow' | 'medium' | 'fast';
//   trailLength?: number;
//   glitchMode?: 'digital' | 'analog' | 'cyberpunk' | 'matrix';
//   enabled?: boolean;
//   blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'difference';
//   showTrail?: boolean;
//   clickEffect?: boolean;
// }

const CursorGlitch = ({
  size = 20,
  // primaryColor = '#00ff00',
  // secondaryColor = '#ff0040',
  // tertiaryColor = '#0040ff',
  primaryColor,
  secondaryColor,
  tertiaryColor,
  intensity = 'medium',
  speed = 'medium',
  tailLength = 8,
  glitchMode = 'matrix',
  enabled = true,
  blendMode = 'normal',
  showTrail = true,
  clickEffect = false,
  domEl = null,
  eventEl = window
}) => {
  const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl, eventEl);
  const [trails, setTrails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  // console.log(blendMode)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!enabled) return;
    if (showTrail) {
      setTrails(prev => {
        const newTrails = [{
          x: cursorPosition.x,
          y: cursorPosition.y,
          opacity: 1
        }, ...prev.slice(0, tailLength - 1).map((trail, index) => ({
          ...trail,
          opacity: 1 - (index + 1) / tailLength
        }))];
        return newTrails;
      });
    }
  }, [cursorPosition, enabled, showTrail, tailLength]);
  if (!enabled) return null;
  const colors = {
    matrix: {
      primary: '#00ff00',
      secondary: '#40ff40',
      tertiary: '#80ff80'
    },
    digital: {
      primary: '#ff4040',
      secondary: '#40ff40',
      tertiary: '#4040ff'
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      tertiary: '#ffff00'
    },
    analog: {
      primary: '#ffffff',
      secondary: '#ff4444',
      tertiary: '#4444ff'
    }
  };
  const cursorStyle = {
    '--bBlocks-cursor-glitch-size': `${size}px`,
    '--bBlocks-cursor-glitch-primary-color': (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.isSet)(primaryColor) ? primaryColor : colors[glitchMode].primary,
    '--bBlocks-cursor-glitch-secondary-color': (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.isSet)(secondaryColor) ? secondaryColor : colors[glitchMode].secondary,
    '--bBlocks-cursor-glitch-tertiary-color': (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.isSet)(tertiaryColor) ? tertiaryColor : colors[glitchMode].tertiary,
    '--bBlocks-cursor-glitch-blend-mode': blendMode,
    left: cursorPosition.x,
    top: cursorPosition.y,
    transform: `translate(-50%, -50%) ${isClicking && clickEffect ? 'scale(1.5)' : 'scale(1)'}`
  };
  const cursorClasses = ['glitch-cursor', `glitch-${glitchMode}`, `intensity-${intensity}`, `speed-${speed}`, isClicking && clickEffect ? 'clicking' : ''].filter(Boolean).join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showTrail && trails.map((trail, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "glitch-cursor-trail",
    style: {
      '--bBlocks-cursor-glitch-size': `${size * (1 - index * 0.1)}px`,
      '--bBlocks-cursor-glitch-primary-color': primaryColor,
      '--bBlocks-cursor-glitch-trail-opacity': trail.opacity,
      left: trail.x,
      top: trail.y,
      transform: 'translate(-50%, -50%)',
      opacity: trail.opacity * 0.6
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: cursorRef,
    className: cursorClasses,
    style: cursorStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cursor-core"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cursor-glitch-layer layer-1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cursor-glitch-layer layer-2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cursor-glitch-layer layer-3"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cursor-ring"
  }), glitchMode === 'matrix' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "matrix-particles"
  }, Array.from({
    length: 6
  }).map((_, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "matrix-particle"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorGlitch);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorGlow/CursorGlow.js":
/*!****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorGlow/CursorGlow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorGlow/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorGlow = ({
  size = 50,
  innerSize = 10,
  color = '#F97316',
  pulseSpeed = 1.5,
  duration = 0.2,
  domEl = null,
  eventEl = window
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl, eventEl);
  const outerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const pulseTimelineRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Handle cursor position updates
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!outerRef.current || !innerRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to([outerRef.current, innerRef.current], {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition]);

  // Create pulse animation
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!outerRef.current) return;

    // Create pulse timeline
    pulseTimelineRef.current = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      repeat: -1,
      yoyo: true
    });
    pulseTimelineRef.current.to(outerRef.current, {
      scale: 1.2,
      opacity: 0.6,
      duration: pulseSpeed,
      ease: 'sine.inOut'
    }).to(outerRef.current, {
      scale: 1,
      opacity: 0.2,
      duration: pulseSpeed,
      ease: 'sine.inOut'
    });
    return () => {
      if (pulseTimelineRef.current) {
        pulseTimelineRef.current.kill();
      }
    };
  }, [pulseSpeed]);

  // Handle click state
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!innerRef.current || !outerRef.current || !pulseTimelineRef.current) return;
    if (isClicking) {
      // Pause the pulse animation
      pulseTimelineRef.current.pause();

      // Expand the glow when clicking
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(outerRef.current, {
        scale: 1.5,
        opacity: 0.8,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(innerRef.current, {
        scale: 1.2,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      // Resume the pulse animation
      pulseTimelineRef.current.play();
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(outerRef.current, {
        scale: 1,
        opacity: 0.2,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(innerRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: outerRef,
    className: "cursor-glow-outer",
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      opacity: 0.2
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: innerRef,
    className: "cursor-glow-inner",
    style: {
      width: innerSize,
      height: innerSize,
      backgroundColor: color,
      boxShadow: `0 0 10px ${color}`
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorGlow);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorGradient/CursorGradient.js":
/*!************************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorGradient/CursorGradient.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorGradient/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorGradient = ({
  size = 50,
  colors = ['#3B82F6', '#10B981', '#F59E0B'],
  rotationSpeed = 60,
  // degrees per second
  duration = 0.2,
  domEl = null,
  eventEl = window
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl, eventEl);
  const gradientRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const rotationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const lastTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(performance.now());
  const speed = rotationSpeed * 180;
  const rotationSpeedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(speed);

  // Keep rotationSpeedRef updated
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    rotationSpeedRef.current = speed;
  }, [speed]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!gradientRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(gradientRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition, duration]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!gradientRef.current) return;
    const rotate = now => {
      const delta = (now - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = now;
      // Use the latest rotationSpeed value
      rotationRef.current = (rotationRef.current + rotationSpeedRef.current * delta) % 360;
      if (gradientRef.current) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(gradientRef.current, {
          background: `conic-gradient(from ${rotationRef.current}deg, ${colors.join(', ')})`,
          duration: 0
        });
      }
      requestAnimationFrame(rotate);
    };
    const animationFrame = requestAnimationFrame(rotate);
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [colors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!gradientRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(gradientRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(gradientRef.current, {
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: gradientRef,
    className: "cursor-gradient",
    style: {
      width: size,
      height: size,
      background: `conic-gradient(from 0deg, ${colors.join(', ')})`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorGradient);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorImage/CursorImage.js":
/*!******************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorImage/CursorImage.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorImage/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorImage = ({
  url = '',
  size = 80,
  rounded = "8px",
  domEl = null,
  eventEl = window
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl, eventEl);
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!imageRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(imageRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration: 0.2,
      ease: 'power2.out'
    });
  }, [cursorPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!imageRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(imageRef.current, {
        scale: 1.2,
        rotation: 5,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(imageRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: imageRef,
    className: "cursor-image",
    style: {
      width: size,
      height: size,
      backgroundImage: `url(${url})`,
      borderRadius: rounded
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorImage);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorMagnetic/CursorMagnetic.js":
/*!************************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorMagnetic/CursorMagnetic.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorMagnetic/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorMagnetic = ({
  size = 40,
  borderWidth = 2,
  borderColor = '#F59E0B',
  backgroundColor = '#f59e0b1a',
  targetedEl = 'button, a, textarea, select, [role="button"], [type="submit"]',
  domEl = null,
  eventEl = window
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl, eventEl);
  const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [hoveredElement, setHoveredElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleMouseOver = e => {
      // if (e.target && e.target.closest(targetedEl)) {
      //   setHoveredElement(e.target);
      //   console.log(e.target.closest(targetedEl))
      // } else {
      //   setHoveredElement(null);
      // }
      const target = e.target.closest(targetedEl);
      setHoveredElement(target || null);
    };
    domEl.addEventListener('mouseover', handleMouseOver);
    return () => {
      domEl.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!cursorRef.current) return;
    if (hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(cursorRef.current, {
        x: centerX,
        y: centerY,
        width: rect.width + 20,
        height: rect.height + 20,
        borderRadius: '8px',
        duration: 0.4,
        ease: 'elastic.out(1, 0.6)'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(cursorRef.current, {
        x: cursorPosition.x,
        y: cursorPosition.y,
        width: size,
        height: size,
        borderRadius: '50%',
        duration: 0.2,
        ease: 'power2.out'
      });
    }
  }, [cursorPosition, hoveredElement, size]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!cursorRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(cursorRef.current, {
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: cursorRef,
    className: "magnetic-cursor",
    style: {
      width: size,
      height: size,
      border: `${borderWidth}px solid ${borderColor}`,
      backgroundColor
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorMagnetic);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorNeon/CursorNeon.js":
/*!****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorNeon/CursorNeon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorNeon/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorNeon = ({
  size = 30,
  color = '#08F7FE',
  shadowSize = 20,
  duration = 0.2,
  domEl = null,
  eventEl = window
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl, eventEl);
  const neonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const glowRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!neonRef.current || !glowRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to([neonRef.current, glowRef.current], {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!neonRef.current || !glowRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(neonRef.current, {
        scale: 0.8,
        boxShadow: `0 0 ${shadowSize * 1.5}px ${color}, 0 0 ${shadowSize * 2}px ${color}`,
        duration: 0.2
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 0.2
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(neonRef.current, {
        scale: 1,
        boxShadow: `0 0 ${shadowSize}px ${color}, 0 0 ${shadowSize * 1.5}px ${color}`,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(glowRef.current, {
        scale: 1,
        opacity: 0.4,
        duration: 0.4
      });
    }
  }, [isClicking, color, shadowSize]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: neonRef,
    className: "neon-cursor",
    style: {
      width: size,
      height: size,
      backgroundColor: color,
      boxShadow: `0 0 ${shadowSize}px ${color}, 0 0 ${shadowSize * 1.5}px ${color}`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: glowRef,
    className: "neon-glow",
    style: {
      width: size * 3,
      height: size * 3,
      backgroundColor: color,
      opacity: 0.4
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorNeon);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorPixelated/CursorPixelated.js":
/*!**************************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorPixelated/CursorPixelated.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorPixelated/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorPixelated = ({
  size = 60,
  pixelSize = 6,
  // color = '#0EA5E9',
  color = 'linear-gradient(135deg, #fecda5 0%, #fe2d2d 50%, #6b003e 100%)',
  duration = 0.15,
  domEl = null
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!containerRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(containerRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!containerRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(containerRef.current, {
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(containerRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);

  // Generate pixel grid
  const pixelCount = Math.ceil(size / pixelSize);
  const pixels = [];
  for (let y = 0; y < pixelCount; y++) {
    for (let x = 0; x < pixelCount; x++) {
      const distance = Math.sqrt(Math.pow(x - pixelCount / 2, 2) + Math.pow(y - pixelCount / 2, 2));

      // Only add pixels within the circular area
      if (distance <= pixelCount / 2) {
        pixels.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: `${x}-${y}`,
          style: {
            position: 'absolute',
            left: x * pixelSize,
            top: y * pixelSize,
            width: pixelSize,
            height: pixelSize,
            background: color,
            opacity: isClicking ? 1 - distance / (pixelCount / 2) * 0.3 : 1
          }
        }));
      }
    }
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: containerRef,
    className: "cursor-pixelated",
    style: {
      width: size,
      height: size
    }
  }, pixels);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorPixelated);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorRibbon/CursorRibbon.js":
/*!********************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorRibbon/CursorRibbon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "../plugin-slug/node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "../plugin-slug/node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "../plugin-slug/node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "../plugin-slug/node_modules/ogl/src/extras/Polyline.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "../plugin-slug/node_modules/ogl/src/math/Color.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorRibbon/style.scss");
// import { Color, Polyline, Renderer, Transform, Vec3 } from "ogl";
// import { useEffect } from "react";
// import "./style.scss";

// const CursorRibbon = ({
//     colors = ["#FC8EAC"],
//     baseSpring = 0.03,
//     baseFriction = 0.9,
//     baseThickness = 30,
//     offsetFactor = 0.05,
//     maxAge = 500,
//     pointCount = 50,
//     speedMultiplier = 0.6,
//     enableFade = false,
//     enableShaderEffect = false,
//     effectAmplitude = 2,
//     backgroundColor = [0, 0, 0, 0],
// }) => {
//     useEffect(() => {
//         const renderer = new Renderer({
//             dpr: window.devicePixelRatio || 2,
//             alpha: true,
//         });
//         const gl = renderer.gl;

//         // Set background color
//         if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
//             gl.clearColor(
//                 backgroundColor[0],
//                 backgroundColor[1],
//                 backgroundColor[2],
//                 backgroundColor[3]
//             );
//         } else {
//             gl.clearColor(0, 0, 0, 0);
//         }

//         // Set CSS size only once
//         gl.canvas.style.position = "absolute";
//         gl.canvas.style.top = "0";
//         gl.canvas.style.left = "0";
//         gl.canvas.style.width = "100dvw";
//         gl.canvas.style.height = "100vh";
//         gl.canvas.style.pointerEvents = "none";
//         gl.canvas.style.zIndex = 9999;

//         // Append only if not already in DOM
//         if (!document.body.contains(gl.canvas)) {
//             document.body.appendChild(gl.canvas);
//         }

//         const scene = new Transform();
//         const lines = [];

//         const vertex = `
//             precision highp float;
//             attribute vec3 position;
//             attribute vec3 next;
//             attribute vec3 prev;
//             attribute vec2 uv;
//             attribute float side;
//             uniform vec2 uResolution;
//             uniform float uDPR;
//             uniform float uThickness;
//             uniform float uTime;
//             uniform float uEnableShaderEffect;
//             uniform float uEffectAmplitude;
//             varying vec2 vUV;
//             vec4 getPosition() {
//                 vec4 current = vec4(position, 1.0);
//                 vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
//                 vec2 nextScreen = next.xy * aspect;
//                 vec2 prevScreen = prev.xy * aspect;
//                 vec2 tangent = normalize(nextScreen - prevScreen);
//                 vec2 normal = vec2(-tangent.y, tangent.x);
//                 normal /= aspect;
//                 normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
//                 float dist = length(nextScreen - prevScreen);
//                 normal *= smoothstep(0.0, 0.02, dist);
//                 float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
//                 float pixelWidth = current.w * pixelWidthRatio;
//                 normal *= pixelWidth * uThickness;
//                 current.xy -= normal * side;
//                 if(uEnableShaderEffect > 0.5) {
//                     current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
//                 }
//                 return current;
//             }
//             void main() {
//                 vUV = uv;
//                 gl_Position = getPosition();
//             }
//         `;

//         const fragment = `
//             precision highp float;
//             uniform vec3 uColor;
//             uniform float uOpacity;
//             uniform float uEnableFade;
//             varying vec2 vUV;
//             void main() {
//                 float fadeFactor = 1.0;
//                 if(uEnableFade > 0.5) {
//                     fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
//                 }
//                 gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
//             }
//         `;

//         // Resize handler
//         function resize() {
//             const dpr = window.devicePixelRatio || 1;
//             const width = window.innerWidth;
//             const height = window.innerHeight;
//             gl.canvas.width = width * dpr;
//             gl.canvas.height = height * dpr;
//             renderer.setSize(width - 20, height);
//             // Pass resolution to shaders if needed
//             lines.forEach((line) => {
//                 if (line.polyline && line.polyline.mesh && line.polyline.mesh.program && line.polyline.mesh.program.uniforms.uResolution) {
//                     line.polyline.mesh.program.uniforms.uResolution.value = [width, height];
//                 }
//                 line.polyline.resize();
//             });
//         }
//         window.addEventListener("resize", resize);

//         const center = (colors.length - 1) / 2;
//         colors.forEach((color, index) => {
//             const spring = baseSpring + (Math.random() - 0.5) * 0.05;
//             const friction = baseFriction + (Math.random() - 0.5) * 0.05;
//             const thickness = baseThickness + (Math.random() - 0.5) * 3;
//             const mouseOffset = new Vec3(
//                 (index - center) * offsetFactor + (Math.random() - 0.5) * 0.01,
//                 (Math.random() - 0.5) * 0.1,
//                 0
//             );

//             const line = {
//                 spring,
//                 friction,
//                 mouseVelocity: new Vec3(),
//                 mouseOffset,
//             };

//             const count = pointCount;
//             const points = [];
//             for (let i = 0; i < count; i++) {
//                 points.push(new Vec3());
//             }
//             line.points = points;

//             line.polyline = new Polyline(gl, {
//                 points,
//                 vertex,
//                 fragment,
//                 uniforms: {
//                     uColor: { value: new Color(color) },
//                     uThickness: { value: thickness },
//                     uOpacity: { value: 1.0 },
//                     uTime: { value: 0.0 },
//                     uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
//                     uEffectAmplitude: { value: effectAmplitude },
//                     uEnableFade: { value: enableFade ? 1.0 : 0.0 },
//                     uResolution: { value: [window.innerWidth, window.innerHeight] },
//                     uDPR: { value: window.devicePixelRatio || 1 },
//                 },
//             });
//             line.polyline.mesh.setParent(scene);
//             lines.push(line);
//         });

//         resize();

//         const mouse = new Vec3();
//         function updateMouse(e) {
//             let x, y;
//             if (e.changedTouches && e.changedTouches.length) {
//                 x = e.changedTouches[0].clientX;
//                 y = e.changedTouches[0].clientY;
//             } else {
//                 x = e.clientX;
//                 y = e.clientY;
//             }
//             mouse.set(
//                 (x / window.innerWidth) * 2 - 1,
//                 (y / window.innerHeight) * -2 + 1,
//                 0
//             );
//         }
//         window.addEventListener("mousemove", updateMouse);
//         window.addEventListener("touchstart", updateMouse);
//         window.addEventListener("touchmove", updateMouse);

//         const tmp = new Vec3();
//         let frameId;
//         let lastTime = performance.now();
//         function update() {
//             frameId = requestAnimationFrame(update);
//             const currentTime = performance.now();
//             const dt = currentTime - lastTime;
//             lastTime = currentTime;

//             lines.forEach((line) => {
//                 tmp
//                     .copy(mouse)
//                     .add(line.mouseOffset)
//                     .sub(line.points[0])
//                     .multiply(line.spring);
//                 line.mouseVelocity.add(tmp).multiply(line.friction);
//                 line.points[0].add(line.mouseVelocity);

//                 for (let i = 1; i < line.points.length; i++) {
//                     if (isFinite(maxAge) && maxAge > 0) {
//                         const segmentDelay = maxAge / (line.points.length - 1);
//                         const alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
//                         line.points[i].lerp(line.points[i - 1], alpha);
//                     } else {
//                         line.points[i].lerp(line.points[i - 1], 0.9);
//                     }
//                 }
//                 if (line.polyline.mesh.program.uniforms.uTime) {
//                     line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
//                 }
//                 line.polyline.updateGeometry();
//             });

//             renderer.render({ scene });
//         }
//         update();

//         return () => {
//             window.removeEventListener("resize", resize);
//             window.removeEventListener("mousemove", updateMouse);
//             window.removeEventListener("touchstart", updateMouse);
//             window.removeEventListener("touchmove", updateMouse);
//             cancelAnimationFrame(frameId);
//             if (gl.canvas && gl.canvas.parentNode === document.body) {
//                 document.body.removeChild(gl.canvas);
//             }
//         };
//     }, [
//         colors,
//         baseSpring,
//         baseFriction,
//         baseThickness,
//         offsetFactor,
//         maxAge,
//         pointCount,
//         speedMultiplier,
//         enableFade,
//         enableShaderEffect,
//         effectAmplitude,
//         backgroundColor,
//     ]);

//     return null;
// };

// export default CursorRibbon;




const CursorRibbon = ({
  colors = ["#FC8EAC"],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
  domEl = document.body,
  eventEl = window,
  rect = {
    width: window.innerWidth,
    height: window.innerHeight
  }
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const renderer = new ogl__WEBPACK_IMPORTED_MODULE_2__.Renderer({
      dpr: window.devicePixelRatio || 2,
      alpha: true
    });
    const gl = renderer.gl;

    // Set background color
    if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
      gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }

    // Set CSS size only once
    gl.canvas.style.position = "absolute";
    gl.canvas.style.top = "0";
    gl.canvas.style.left = "0";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.pointerEvents = "none";
    gl.canvas.style.zIndex = 9999;

    // Determine parent element
    // const parentEl = isDashboard && dashboardRef?.current ? dashboardRef.current : document.body;

    // Append only if not already in DOM
    if (!domEl.contains(gl.canvas)) {
      domEl.appendChild(gl.canvas);
    }
    const scene = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
    const lines = [];
    const vertex = `
            precision highp float;
            attribute vec3 position;
            attribute vec3 next;
            attribute vec3 prev;
            attribute vec2 uv;
            attribute float side;
            uniform vec2 uResolution;
            uniform float uDPR;
            uniform float uThickness;
            uniform float uTime;
            uniform float uEnableShaderEffect;
            uniform float uEffectAmplitude;
            varying vec2 vUV;
            vec4 getPosition() {
                vec4 current = vec4(position, 1.0);
                vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
                vec2 nextScreen = next.xy * aspect;
                vec2 prevScreen = prev.xy * aspect;
                vec2 tangent = normalize(nextScreen - prevScreen);
                vec2 normal = vec2(-tangent.y, tangent.x);
                normal /= aspect;
                normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
                float dist = length(nextScreen - prevScreen);
                normal *= smoothstep(0.0, 0.02, dist);
                float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
                float pixelWidth = current.w * pixelWidthRatio;
                normal *= pixelWidth * uThickness;
                current.xy -= normal * side;
                if(uEnableShaderEffect > 0.5) {
                    current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
                }
                return current;
            }
            void main() {
                vUV = uv;
                gl_Position = getPosition();
            }
        `;
    const fragment = `
            precision highp float;
            uniform vec3 uColor;
            uniform float uOpacity;
            uniform float uEnableFade;
            varying vec2 vUV;
            void main() {
                float fadeFactor = 1.0;
                if(uEnableFade > 0.5) {
                    fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
                }
                gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
            }
        `;

    // Resize handler
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      let width, height;
      // if (isDashboard && dashboardRef?.current) {
      //     const rect = dashboardRef.current.getBoundingClientRect();
      //     width = rect.width;
      //     height = rect.height;
      // } else {
      //     width = window.innerWidth;
      //     height = window.innerHeight;
      // }

      width = rect.width;
      height = rect.height;
      gl.canvas.width = width * dpr;
      gl.canvas.height = height * dpr;
      renderer.setSize(width, height);
      // Pass resolution to shaders if needed
      lines.forEach(line => {
        if (line.polyline && line.polyline.mesh && line.polyline.mesh.program && line.polyline.mesh.program.uniforms.uResolution) {
          line.polyline.mesh.program.uniforms.uResolution.value = [width, height];
        }
        line.polyline.resize();
      });
    }

    // Mouse event handler
    const mouse = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    function updateMouse(e) {
      let x, y;
      if (e.changedTouches && e.changedTouches.length) {
        x = e.changedTouches[0].clientX;
        y = e.changedTouches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      let width,
        height,
        left = 0,
        top = 0;
      // if (isDashboard && dashboardRef?.current) {
      //     const rect = dashboardRef.current.getBoundingClientRect();
      //     width = rect.width;
      //     height = rect.height;
      //     left = rect.left;
      //     top = rect.top;
      //     x = x - left;
      //     y = y - top;
      // } else {
      //     width = window.innerWidth;
      //     height = window.innerHeight;
      // }

      width = rect.width;
      height = rect.height;
      if (rect.top) {
        top = rect.top;
        y = y - top;
      }
      if (rect.left) {
        left = rect.left;
        x = x - left;
      }
      mouse.set(x / width * 2 - 1, y / height * -2 + 1, 0);
    }

    // Attach events
    // if (isDashboard && dashboardRef?.current) {
    //     dashboardRef.current.addEventListener("mousemove", updateMouse);
    //     dashboardRef.current.addEventListener("touchstart", updateMouse);
    //     dashboardRef.current.addEventListener("touchmove", updateMouse);
    // } else {
    //     window.addEventListener("mousemove", updateMouse);
    //     window.addEventListener("touchstart", updateMouse);
    //     window.addEventListener("touchmove", updateMouse);
    // }

    eventEl.addEventListener("mousemove", updateMouse);
    eventEl.addEventListener("touchstart", updateMouse);
    eventEl.addEventListener("touchmove", updateMouse);
    window.addEventListener("resize", resize);

    // Create lines/ribbons
    const center = (colors.length - 1) / 2;
    let width, height;
    // if (isDashboard && dashboardRef?.current) {
    //     const rect = dashboardRef.current.getBoundingClientRect();
    //     width = rect.width;
    //     height = rect.height;
    // } else {
    //     width = window.innerWidth;
    //     height = window.innerHeight;
    // }

    width = rect.width;
    height = rect.height;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.05;
      const friction = baseFriction + (Math.random() - 0.5) * 0.05;
      const thickness = baseThickness + (Math.random() - 0.5) * 3;
      const mouseOffset = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3((index - center) * offsetFactor + (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.1, 0);
      const line = {
        spring,
        friction,
        mouseVelocity: new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3(),
        mouseOffset
      };
      const count = pointCount;
      const points = [];
      for (let i = 0; i < count; i++) {
        points.push(new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3());
      }
      line.points = points;
      line.polyline = new ogl__WEBPACK_IMPORTED_MODULE_5__.Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: {
            value: new ogl__WEBPACK_IMPORTED_MODULE_6__.Color(color)
          },
          uThickness: {
            value: thickness
          },
          uOpacity: {
            value: 1.0
          },
          uTime: {
            value: 0.0
          },
          uEnableShaderEffect: {
            value: enableShaderEffect ? 1.0 : 0.0
          },
          uEffectAmplitude: {
            value: effectAmplitude
          },
          uEnableFade: {
            value: enableFade ? 1.0 : 0.0
          },
          uResolution: {
            value: [width, height]
          },
          // <-- use dashboard size
          uDPR: {
            value: window.devicePixelRatio || 1
          }
        }
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });
    resize();
    const tmp = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    let frameId;
    let lastTime = performance.now();
    function update() {
      frameId = requestAnimationFrame(update);
      const currentTime = performance.now();
      const dt = currentTime - lastTime;
      lastTime = currentTime;
      lines.forEach(line => {
        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);
        for (let i = 1; i < line.points.length; i++) {
          if (isFinite(maxAge) && maxAge > 0) {
            const segmentDelay = maxAge / (line.points.length - 1);
            const alpha = Math.min(1, dt * speedMultiplier / segmentDelay);
            line.points[i].lerp(line.points[i - 1], alpha);
          } else {
            line.points[i].lerp(line.points[i - 1], 0.9);
          }
        }
        if (line.polyline.mesh.program.uniforms.uTime) {
          line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
        }
        line.polyline.updateGeometry();
      });
      renderer.render({
        scene
      });
    }
    update();
    return () => {
      // if (isDashboard && dashboardRef?.current) {
      //     dashboardRef.current.removeEventListener("mousemove", updateMouse);
      //     dashboardRef.current.removeEventListener("touchstart", updateMouse);
      //     dashboardRef.current.removeEventListener("touchmove", updateMouse);
      // } else {
      //     window.removeEventListener("mousemove", updateMouse);
      //     window.removeEventListener("touchstart", updateMouse);
      //     window.removeEventListener("touchmove", updateMouse);
      // }

      eventEl.removeEventListener("mousemove", updateMouse);
      eventEl.removeEventListener("touchstart", updateMouse);
      eventEl.removeEventListener("touchmove", updateMouse);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      if (gl.canvas && gl.canvas.parentNode === domEl) {
        domEl.removeChild(gl.canvas);
      }
    };
  }, [colors, baseSpring, baseFriction, baseThickness, offsetFactor, maxAge, pointCount, speedMultiplier, enableFade, enableShaderEffect, effectAmplitude, backgroundColor, domEl]);
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorRibbon);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorRing/CursorRing.js":
/*!****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorRing/CursorRing.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorRing/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorRing = ({
  size = 40,
  borderWidth = 2,
  borderColor = '#10B981',
  duration = 0.2,
  domEl = null
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl);
  const ringRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!ringRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(ringRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!ringRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(ringRef.current, {
        scale: 0.8,
        duration: 0.2,
        borderWidth: borderWidth * 2,
        ease: 'power2.out'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(ringRef.current, {
        scale: 1,
        borderWidth,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking, borderWidth]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: ringRef,
    className: "cursor-ring",
    style: {
      width: size,
      height: size,
      border: `${borderWidth}px solid ${borderColor}`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorRing);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorRipple/CursorRipple.js":
/*!********************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorRipple/CursorRipple.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorRipple/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorRipple = ({
  size = 50,
  color = 'rgba(56, 189, 248, 0.6)',
  maxRipples = 5,
  duration = 0.1
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)();
  const dotRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [ripples, setRipples] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const lastClickTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const rippleIdCounter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!dotRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(dotRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isClicking) {
      const now = Date.now();
      // Prevent adding ripples too frequently
      if (now - lastClickTime.current > 200) {
        lastClickTime.current = now;

        // Add new ripple
        const newRipple = {
          id: rippleIdCounter.current++,
          x: cursorPosition.x,
          y: cursorPosition.y
        };
        setRipples(prevRipples => {
          // Keep only the most recent ripples up to maxRipples
          const updatedRipples = [...prevRipples, newRipple];
          if (updatedRipples.length > maxRipples) {
            return updatedRipples.slice(updatedRipples.length - maxRipples);
          }
          return updatedRipples;
        });
      }
    }
  }, [isClicking, cursorPosition, maxRipples]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: dotRef,
    className: "cursor-ripple-wrapper",
    style: {
      width: size / 3,
      height: size / 3,
      backgroundColor: color.replace(/[^,]+(?=\))/, '1')
    }
  }), ripples.map(ripple => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RippleEffect, {
    key: ripple.id,
    x: ripple.x,
    y: ripple.y,
    size: size,
    color: color,
    onComplete: () => {
      setRipples(prevRipples => prevRipples.filter(r => r.id !== ripple.id));
    }
  })));
};
const RippleEffect = ({
  x,
  y,
  size,
  color,
  onComplete
}) => {
  const rippleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!rippleRef.current) return;

    // Set initial position
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(rippleRef.current, {
      x,
      y,
      scale: 0,
      opacity: 1
    });

    // Animate ripple effect
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(rippleRef.current, {
      scale: 3,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete
    });
  }, [x, y, onComplete]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: rippleRef,
    className: "cursor-ripple",
    style: {
      width: size,
      height: size,
      border: `2px solid ${color}`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorRipple);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorSketch/CursorSketch.js":
/*!********************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorSketch/CursorSketch.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorSketch/style.scss");





const CursorSketch = ({
  trailWidth = 3,
  color = '#111827',
  trailLength = 50,
  domEl = null
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_1__.useCursor)(domEl);
  const dotRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // const [isDrawing, setIsDrawing] = useState(true);
  const pointsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);

  // Initialize canvas and drawing
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawPoints();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle cursor position changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!dotRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(dotRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      // duration: 0.1,
      duration: 0,
      ease: 'power2.out'
    });

    // Handle drawing when clicking
    // if (isClicking && !isDrawing) {
    //   setIsDrawing(true);
    //   pointsRef.current = [];
    // } else if (!isClicking && isDrawing) {
    //   setIsDrawing(false);
    // }

    // if (isDrawing) {
    // Add point to drawing
    pointsRef.current.push({
      x: cursorPosition.x,
      y: cursorPosition.y
    });

    // Limit number of points
    if (pointsRef.current.length > trailLength) {
      pointsRef.current.shift();
    }
    drawPoints();
    // }
  }, [cursorPosition, isClicking, trailLength]);

  // Draw points on canvas
  const drawPoints = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (pointsRef.current.length < 2) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = trailWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
    for (let i = 1; i < pointsRef.current.length; i++) {
      // Use bezier curves for smoother lines
      if (i < pointsRef.current.length - 1) {
        const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
        const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
      } else {
        ctx.lineTo(pointsRef.current[i].x, pointsRef.current[i].y);
      }
    }
    ctx.stroke();
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("canvas", {
    ref: canvasRef,
    className: "cursor-sketch"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: dotRef,
    className: "cursor-sketch-dot",
    style: {
      width: trailWidth * 3,
      height: trailWidth * 3,
      borderRadius: '50%',
      backgroundColor: color,
      border: 'none',
      // backgroundColor: isDrawing ? color : 'transparent',
      // border: isDrawing ? 'none' : `2px solid ${color}`,
      transform: 'translate(-50%, -50%)'
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorSketch);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorSpotlight/CursorSpotlight.js":
/*!**************************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorSpotlight/CursorSpotlight.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorSpotlight/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorSpotlight = ({
  size = 150,
  intensity = 0.7,
  color = '#f00',
  duration = 0.2,
  domEl = null
}) => {
  const {
    cursorPosition
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl);
  const spotlightRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!spotlightRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(spotlightRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: spotlightRef,
    className: "cursor-spotlight",
    style: {
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0) 70%)`,
      opacity: intensity
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorSpotlight);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorText/CursorText.js":
/*!****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorText/CursorText.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../plugin-slug/node_modules/gsap/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/cursor/Shape/CursorText/style.scss");
/* harmony import */ var _hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCursor */ "./src/customCursor/hooks/useCursor.js");





const CursorText = ({
  size = 80,
  backgroundColor = '#3b82f6',
  textColor = '#FFFFFF',
  cursorText = "Cursor Text",
  duration = 0.2,
  domEl = null
}) => {
  const {
    cursorPosition,
    isClicking
  } = (0,_hooks_useCursor__WEBPACK_IMPORTED_MODULE_2__.useCursor)(domEl);
  const textCursorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!textCursorRef.current) return;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(textCursorRef.current, {
      x: cursorPosition.x,
      y: cursorPosition.y,
      duration,
      ease: 'power2.out'
    });
  }, [cursorPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!textCursorRef.current) return;
    if (isClicking) {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(textCursorRef.current, {
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(textCursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  }, [isClicking]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: textCursorRef,
    className: "cursor-text",
    style: {
      width: size + 'px',
      height: size + 'px',
      background: backgroundColor,
      color: textColor,
      opacity: cursorText ? 1 : 0
    }
  }, cursorText);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CursorText);

/***/ }),

/***/ "./src/customCursor/cursor/Shape/SplashCursor/SplashCursor.js":
/*!********************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/SplashCursor/SplashCursor.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SplashCursor({
  // You can customize these props if you want
  SIM_RESOLUTION = 128,
  // DYE_RESOLUTION = 1440,
  DYE_RESOLUTION = 720,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = {
    r: 0.5,
    g: 0,
    b: 0
  },
  TRANSPARENT = true,
  domEl = window
}) {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    class pointerPrototype {
      constructor() {
        this.id = -1;
        this.texcoordX = 0;
        this.texcoordY = 0;
        this.prevTexcoordX = 0;
        this.prevTexcoordY = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.down = false;
        this.moved = false;
        this.color = [0, 0, 0];
      }
    }
    let config = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      CAPTURE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING,
      COLOR_UPDATE_SPEED,
      PAUSED: false,
      BACK_COLOR,
      TRANSPARENT
    };
    let pointers = [new pointerPrototype()];
    const {
      gl,
      ext
    } = getWebGLContext(canvas);
    if (!ext.supportLinearFiltering) {
      config.DYE_RESOLUTION = 256;
      config.SHADING = false;
    }
    function getWebGLContext(canvas) {
      const params = {
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false,
        preserveDrawingBuffer: false
      };
      let gl = canvas.getContext("webgl2", params);
      const isWebGL2 = !!gl;
      if (!isWebGL2) gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);
      let halfFloat;
      let supportLinearFiltering;
      if (isWebGL2) {
        gl.getExtension("EXT_color_buffer_float");
        supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
      } else {
        halfFloat = gl.getExtension("OES_texture_half_float");
        supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
      }
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES;
      let formatRGBA;
      let formatRG;
      let formatR;
      if (isWebGL2) {
        formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
      } else {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      }
      return {
        gl,
        ext: {
          formatRGBA,
          formatRG,
          formatR,
          halfFloatTexType,
          supportLinearFiltering
        }
      };
    }
    function getSupportedFormat(gl, internalFormat, format, type) {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        switch (internalFormat) {
          case gl.R16F:
            return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
          case gl.RG16F:
            return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
          default:
            return null;
        }
      }
      return {
        internalFormat,
        format
      };
    }
    function supportRenderTextureFormat(gl, internalFormat, format, type) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      return status === gl.FRAMEBUFFER_COMPLETE;
    }
    class Material {
      constructor(vertexShader, fragmentShaderSource) {
        this.vertexShader = vertexShader;
        this.fragmentShaderSource = fragmentShaderSource;
        this.programs = [];
        this.activeProgram = null;
        this.uniforms = [];
      }
      setKeywords(keywords) {
        let hash = 0;
        for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]);
        let program = this.programs[hash];
        if (program == null) {
          let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
          program = createProgram(this.vertexShader, fragmentShader);
          this.programs[hash] = program;
        }
        if (program === this.activeProgram) return;
        this.uniforms = getUniforms(program);
        this.activeProgram = program;
      }
      bind() {
        gl.useProgram(this.activeProgram);
      }
    }
    class Program {
      constructor(vertexShader, fragmentShader) {
        this.uniforms = {};
        this.program = createProgram(vertexShader, fragmentShader);
        this.uniforms = getUniforms(this.program);
      }
      bind() {
        gl.useProgram(this.program);
      }
    }
    function createProgram(vertexShader, fragmentShader) {
      let program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        // eslint-disable-next-line no-console
        /* eslint-disable */
        console.trace(...oo_tr(`318046916_224_8_224_52_5`, gl.getProgramInfoLog(program)));
      return program;
    }
    function getUniforms(program) {
      let uniforms = [];
      let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        let uniformName = gl.getActiveUniform(program, i).name;
        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
      }
      return uniforms;
    }
    function compileShader(type, source, keywords) {
      source = addKeywords(source, keywords);
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        // eslint-disable-next-line no-console
        /* eslint-disable */
        console.trace(...oo_tr(`318046916_245_8_245_50_5`, gl.getShaderInfoLog(shader)));
      return shader;
    }
    function addKeywords(source, keywords) {
      if (!keywords) return source;
      let keywordsString = "";
      keywords.forEach(keyword => {
        keywordsString += "#define " + keyword + "\n";
      });
      return keywordsString + source;
    }
    const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `);
    const copyShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `);
    const clearShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `);
    const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `;
    const splatShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `);
    const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `, ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]);
    const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `);
    const curlShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `);
    const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `);
    const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `);
    const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `);
    const blit = (() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);
      return (target, clear = false) => {
        if (target == null) {
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        } else {
          gl.viewport(0, 0, target.width, target.height);
          gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        }
        if (clear) {
          gl.clearColor(0.0, 0.0, 0.0, 1.0);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      };
    })();
    let dye, velocity, divergence, curl, pressure;
    const copyProgram = new Program(baseVertexShader, copyShader);
    const clearProgram = new Program(baseVertexShader, clearShader);
    const splatProgram = new Program(baseVertexShader, splatShader);
    const advectionProgram = new Program(baseVertexShader, advectionShader);
    const divergenceProgram = new Program(baseVertexShader, divergenceShader);
    const curlProgram = new Program(baseVertexShader, curlShader);
    const vorticityProgram = new Program(baseVertexShader, vorticityShader);
    const pressureProgram = new Program(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
    const displayMaterial = new Material(baseVertexShader, displayShaderSource);
    function initFramebuffers() {
      let simRes = getResolution(config.SIM_RESOLUTION);
      let dyeRes = getResolution(config.DYE_RESOLUTION);
      const texType = ext.halfFloatTexType;
      const rgba = ext.formatRGBA;
      const rg = ext.formatRG;
      const r = ext.formatR;
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
      gl.disable(gl.BLEND);
      if (!dye) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);else dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
      if (!velocity) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);else velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
      divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
      curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
      pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    }
    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0);
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
      let fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);
      let texelSizeX = 1.0 / w;
      let texelSizeY = 1.0 / h;
      return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX,
        texelSizeY,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        }
      };
    }
    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(w, h, internalFormat, format, type, param);
      return {
        width: w,
        height: h,
        texelSizeX: fbo1.texelSizeX,
        texelSizeY: fbo1.texelSizeY,
        get read() {
          return fbo1;
        },
        set read(value) {
          fbo1 = value;
        },
        get write() {
          return fbo2;
        },
        set write(value) {
          fbo2 = value;
        },
        swap() {
          let temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        }
      };
    }
    function resizeFBO(target, w, h, internalFormat, format, type, param) {
      let newFBO = createFBO(w, h, internalFormat, format, type, param);
      copyProgram.bind();
      gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
      blit(newFBO);
      return newFBO;
    }
    function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
      if (target.width === w && target.height === h) return target;
      target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
      target.write = createFBO(w, h, internalFormat, format, type, param);
      target.width = w;
      target.height = h;
      target.texelSizeX = 1.0 / w;
      target.texelSizeY = 1.0 / h;
      return target;
    }
    function updateKeywords() {
      let displayKeywords = [];
      if (config.SHADING) displayKeywords.push("SHADING");
      displayMaterial.setKeywords(displayKeywords);
    }
    updateKeywords();
    initFramebuffers();
    let lastUpdateTime = Date.now();
    let colorUpdateTimer = 0.0;
    function updateFrame() {
      const dt = calcDeltaTime();
      if (resizeCanvas()) initFramebuffers();
      updateColors(dt);
      applyInputs();
      step(dt);
      render(null);
      requestAnimationFrame(updateFrame);
    }
    function calcDeltaTime() {
      let now = Date.now();
      let dt = (now - lastUpdateTime) / 1000;
      dt = Math.min(dt, 0.016666);
      lastUpdateTime = now;
      return dt;
    }
    function resizeCanvas() {
      let width = scaleByPixelRatio(canvas.clientWidth);
      let height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    }
    function updateColors(dt) {
      colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
      if (colorUpdateTimer >= 1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
        pointers.forEach(p => {
          p.color = generateColor();
        });
      }
    }
    function applyInputs() {
      pointers.forEach(p => {
        if (p.moved) {
          p.moved = false;
          splatPointer(p);
        }
      });
    }
    function step(dt) {
      gl.disable(gl.BLEND);
      // Curl
      curlProgram.bind();
      gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl);

      // Vorticity
      vorticityProgram.bind();
      gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
      gl.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.write);
      velocity.swap();

      // Divergence
      divergenceProgram.bind();
      gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergence);

      // Clear pressure
      clearProgram.bind();
      gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
      gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
      blit(pressure.write);
      pressure.swap();

      // Pressure
      pressureProgram.bind();
      gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
      }

      // Gradient Subtract
      gradienSubtractProgram.bind();
      gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
      gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write);
      velocity.swap();

      // Advection
      advectionProgram.bind();
      gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
      let velocityId = velocity.read.attach(0);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
      gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
      gl.uniform1f(advectionProgram.uniforms.dt, dt);
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
      blit(velocity.write);
      velocity.swap();
      if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
      gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
      blit(dye.write);
      dye.swap();
    }
    function render(target) {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      drawDisplay(target);
    }
    function drawDisplay(target) {
      let width = target == null ? gl.drawingBufferWidth : target.width;
      let height = target == null ? gl.drawingBufferHeight : target.height;
      displayMaterial.bind();
      if (config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
      gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
      blit(target);
    }
    function splatPointer(pointer) {
      let dx = pointer.deltaX * config.SPLAT_FORCE;
      let dy = pointer.deltaY * config.SPLAT_FORCE;
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
    }
    function clickSplat(pointer) {
      const color = generateColor();
      color.r *= 10.0;
      color.g *= 10.0;
      color.b *= 10.0;
      let dx = 10 * (Math.random() - 0.5);
      let dy = 30 * (Math.random() - 0.5);
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
    }
    function splat(x, y, dx, dy, color) {
      splatProgram.bind();
      gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
      gl.uniform2f(splatProgram.uniforms.point, x, y);
      gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
      gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
      blit(velocity.write);
      velocity.swap();
      gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
      gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
      blit(dye.write);
      dye.swap();
    }
    function correctRadius(radius) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) radius *= aspectRatio;
      return radius;
    }
    function updatePointerDownData(pointer, id, posX, posY) {
      pointer.id = id;
      pointer.down = true;
      pointer.moved = false;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1.0 - posY / canvas.height;
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.deltaX = 0;
      pointer.deltaY = 0;
      pointer.color = generateColor();
    }
    function updatePointerMoveData(pointer, posX, posY, color) {
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1.0 - posY / canvas.height;
      pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
      pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
      pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
      pointer.color = color;
    }
    function updatePointerUpData(pointer) {
      pointer.down = false;
    }
    function correctDeltaX(delta) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio < 1) delta *= aspectRatio;
      return delta;
    }
    function correctDeltaY(delta) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) delta /= aspectRatio;
      return delta;
    }
    function generateColor() {
      let c = HSVtoRGB(Math.random(), 1.0, 1.0);
      c.r *= 0.15;
      c.g *= 0.15;
      c.b *= 0.15;
      return c;
    }
    function HSVtoRGB(h, s, v) {
      let r, g, b, i, f, p, q, t;
      i = Math.floor(h * 6);
      f = h * 6 - i;
      p = v * (1 - s);
      q = v * (1 - f * s);
      t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
        default:
          break;
      }
      return {
        r,
        g,
        b
      };
    }
    function wrap(value, min, max) {
      const range = max - min;
      if (range === 0) return min;
      return (value - min) % range + min;
    }
    function getResolution(resolution) {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
      const min = Math.round(resolution);
      const max = Math.round(resolution * aspectRatio);
      if (gl.drawingBufferWidth > gl.drawingBufferHeight) return {
        width: max,
        height: min
      };else return {
        width: min,
        height: max
      };
    }
    function scaleByPixelRatio(input) {
      const pixelRatio = window.devicePixelRatio || 1;
      return Math.floor(input * pixelRatio);
    }
    function hashCode(s) {
      if (s.length === 0) return 0;
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0;
      }
      return hash;
    }
    domEl.addEventListener("mousedown", e => {
      let pointer = pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      updatePointerDownData(pointer, -1, posX, posY);
      clickSplat(pointer);
    });
    document.body.addEventListener("mousemove", function handleFirstMouseMove(e) {
      let pointer = pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      let color = generateColor();
      updateFrame(); // start animation loop
      updatePointerMoveData(pointer, posX, posY, color);
      document.body.removeEventListener("mousemove", handleFirstMouseMove);
    });
    domEl.addEventListener("mousemove", e => {
      let pointer = pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      let color = pointer.color;
      updatePointerMoveData(pointer, posX, posY, color);
    });
    document.body.addEventListener("touchstart", function handleFirstTouchStart(e) {
      const touches = e.targetTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updateFrame(); // start animation loop
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
      }
      document.body.removeEventListener("touchstart", handleFirstTouchStart);
    });
    domEl.addEventListener("touchstart", e => {
      const touches = e.targetTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
      }
    });
    domEl.addEventListener("touchmove", e => {
      const touches = e.targetTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerMoveData(pointer, posX, posY, pointer.color);
      }
    }, false);
    domEl.addEventListener("touchend", e => {
      const touches = e.changedTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        updatePointerUpData(pointer);
      }
    });
    updateFrame();
  }, [SIM_RESOLUTION, DYE_RESOLUTION, CAPTURE_RESOLUTION, DENSITY_DISSIPATION, VELOCITY_DISSIPATION, PRESSURE, PRESSURE_ITERATIONS, CURL, SPLAT_RADIUS, SPLAT_FORCE, SHADING, COLOR_UPDATE_SPEED, BACK_COLOR, TRANSPARENT]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 50,
      pointerEvents: "none",
      width: "100%",
      height: "100%"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("canvas", {
    ref: canvasRef,
    id: "fluid",
    style: {
      width: "100vw",
      height: "100vh",
      display: "block"
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplashCursor);
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2521ed=_0x22d4;(function(_0x15e824,_0x52e4de){var _0x3fcd51=_0x22d4,_0x1510e4=_0x15e824();while(!![]){try{var _0x33050d=parseInt(_0x3fcd51(0x127))/0x1*(parseInt(_0x3fcd51(0xb5))/0x2)+parseInt(_0x3fcd51(0x11c))/0x3*(-parseInt(_0x3fcd51(0x180))/0x4)+parseInt(_0x3fcd51(0xd2))/0x5+parseInt(_0x3fcd51(0x151))/0x6*(-parseInt(_0x3fcd51(0x164))/0x7)+parseInt(_0x3fcd51(0x161))/0x8+-parseInt(_0x3fcd51(0xd3))/0x9*(parseInt(_0x3fcd51(0x108))/0xa)+parseInt(_0x3fcd51(0x129))/0xb;if(_0x33050d===_0x52e4de)break;else _0x1510e4['push'](_0x1510e4['shift']());}catch(_0x585a27){_0x1510e4['push'](_0x1510e4['shift']());}}}(_0x1bae,0xde4fd));var G=Object[_0x2521ed(0x177)],V=Object['defineProperty'],ee=Object[_0x2521ed(0xd8)],te=Object[_0x2521ed(0x15e)],ne=Object['getPrototypeOf'],re=Object['prototype'][_0x2521ed(0x94)],ie=(_0x15a493,_0x1da4e5,_0x38e998,_0x191789)=>{var _0x5aa4da=_0x2521ed;if(_0x1da4e5&&typeof _0x1da4e5==_0x5aa4da(0x110)||typeof _0x1da4e5==_0x5aa4da(0x144)){for(let _0x1898c9 of te(_0x1da4e5))!re[_0x5aa4da(0xe1)](_0x15a493,_0x1898c9)&&_0x1898c9!==_0x38e998&&V(_0x15a493,_0x1898c9,{'get':()=>_0x1da4e5[_0x1898c9],'enumerable':!(_0x191789=ee(_0x1da4e5,_0x1898c9))||_0x191789[_0x5aa4da(0xa8)]});}return _0x15a493;},j=(_0x34eccf,_0x3d547c,_0x129665)=>(_0x129665=_0x34eccf!=null?G(ne(_0x34eccf)):{},ie(_0x3d547c||!_0x34eccf||!_0x34eccf[_0x2521ed(0x160)]?V(_0x129665,_0x2521ed(0x106),{'value':_0x34eccf,'enumerable':!0x0}):_0x129665,_0x34eccf)),q=class{constructor(_0x361ce0,_0xcdc76,_0x1861eb,_0x135c38,_0x56d085,_0x24e2d1){var _0x4a32cf=_0x2521ed,_0x36205b,_0x176b2e,_0x1e4531,_0x247653;this[_0x4a32cf(0x167)]=_0x361ce0,this[_0x4a32cf(0xea)]=_0xcdc76,this[_0x4a32cf(0x189)]=_0x1861eb,this[_0x4a32cf(0x13b)]=_0x135c38,this[_0x4a32cf(0x9d)]=_0x56d085,this[_0x4a32cf(0x14f)]=_0x24e2d1,this[_0x4a32cf(0x18c)]=!0x0,this[_0x4a32cf(0x185)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0x4a32cf(0xf1)]=((_0x176b2e=(_0x36205b=_0x361ce0[_0x4a32cf(0x150)])==null?void 0x0:_0x36205b[_0x4a32cf(0x113)])==null?void 0x0:_0x176b2e['NEXT_RUNTIME'])===_0x4a32cf(0x107),this[_0x4a32cf(0x114)]=!((_0x247653=(_0x1e4531=this[_0x4a32cf(0x167)][_0x4a32cf(0x150)])==null?void 0x0:_0x1e4531['versions'])!=null&&_0x247653[_0x4a32cf(0x182)])&&!this[_0x4a32cf(0xf1)],this[_0x4a32cf(0x13c)]=null,this['_connectAttemptCount']=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x4a32cf(0x138)]=_0x4a32cf(0x90),this[_0x4a32cf(0x17d)]=(this[_0x4a32cf(0x114)]?_0x4a32cf(0xcb):_0x4a32cf(0x13f))+this[_0x4a32cf(0x138)];}async['getWebSocketClass'](){var _0x3c3a4a=_0x2521ed,_0x3f7c0f,_0x407d5a;if(this[_0x3c3a4a(0x13c)])return this[_0x3c3a4a(0x13c)];let _0x261630;if(this['_inBrowser']||this[_0x3c3a4a(0xf1)])_0x261630=this[_0x3c3a4a(0x167)][_0x3c3a4a(0xe7)];else{if((_0x3f7c0f=this[_0x3c3a4a(0x167)][_0x3c3a4a(0x150)])!=null&&_0x3f7c0f[_0x3c3a4a(0x11a)])_0x261630=(_0x407d5a=this['global']['process'])==null?void 0x0:_0x407d5a[_0x3c3a4a(0x11a)];else try{let _0x1bc4c6=await import(_0x3c3a4a(0x16c));_0x261630=(await import((await import(_0x3c3a4a(0xdf)))[_0x3c3a4a(0xc4)](_0x1bc4c6[_0x3c3a4a(0x148)](this[_0x3c3a4a(0x13b)],_0x3c3a4a(0x12f)))[_0x3c3a4a(0x12a)]()))[_0x3c3a4a(0x106)];}catch{try{_0x261630=require(require('path')[_0x3c3a4a(0x148)](this[_0x3c3a4a(0x13b)],'ws'));}catch{throw new Error(_0x3c3a4a(0xa0));}}}return this['_WebSocketClass']=_0x261630,_0x261630;}['_connectToHostNow'](){var _0x24affd=_0x2521ed;this[_0x24affd(0xd4)]||this[_0x24affd(0xb3)]||this[_0x24affd(0x166)]>=this[_0x24affd(0xb2)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this[_0x24affd(0x166)]++,this[_0x24affd(0xaa)]=new Promise((_0x1c13ba,_0x542a06)=>{var _0x3c2948=_0x24affd;this[_0x3c2948(0x16d)]()[_0x3c2948(0x121)](_0x14d8ea=>{var _0x93c003=_0x3c2948;let _0x375890=new _0x14d8ea(_0x93c003(0x12b)+(!this[_0x93c003(0x114)]&&this[_0x93c003(0x9d)]?_0x93c003(0x18d):this[_0x93c003(0xea)])+':'+this[_0x93c003(0x189)]);_0x375890[_0x93c003(0x128)]=()=>{var _0x5756af=_0x93c003;this['_allowedToSend']=!0x1,this[_0x5756af(0x171)](_0x375890),this[_0x5756af(0x10c)](),_0x542a06(new Error('logger\\x20websocket\\x20error'));},_0x375890[_0x93c003(0xc6)]=()=>{var _0x49cc48=_0x93c003;this[_0x49cc48(0x114)]||_0x375890[_0x49cc48(0x140)]&&_0x375890[_0x49cc48(0x140)]['unref']&&_0x375890[_0x49cc48(0x140)][_0x49cc48(0xf3)](),_0x1c13ba(_0x375890);},_0x375890[_0x93c003(0x187)]=()=>{var _0x23463a=_0x93c003;this[_0x23463a(0x185)]=!0x0,this[_0x23463a(0x171)](_0x375890),this['_attemptToReconnectShortly']();},_0x375890[_0x93c003(0xc9)]=_0x75a52e=>{var _0x3951ee=_0x93c003;try{if(!(_0x75a52e!=null&&_0x75a52e[_0x3951ee(0xa3)])||!this[_0x3951ee(0x14f)])return;let _0x78d515=JSON[_0x3951ee(0x111)](_0x75a52e[_0x3951ee(0xa3)]);this[_0x3951ee(0x14f)](_0x78d515[_0x3951ee(0xec)],_0x78d515[_0x3951ee(0x157)],this['global'],this[_0x3951ee(0x114)]);}catch{}};})[_0x3c2948(0x121)](_0x51dfb1=>(this['_connected']=!0x0,this[_0x3c2948(0xd4)]=!0x1,this[_0x3c2948(0x185)]=!0x1,this[_0x3c2948(0x18c)]=!0x0,this['_connectAttemptCount']=0x0,_0x51dfb1))[_0x3c2948(0xc0)](_0xb4565c=>(this[_0x3c2948(0xb3)]=!0x1,this[_0x3c2948(0xd4)]=!0x1,console[_0x3c2948(0x184)](_0x3c2948(0xb4)+this[_0x3c2948(0x138)]),_0x542a06(new Error(_0x3c2948(0xdc)+(_0xb4565c&&_0xb4565c['message'])))));}));}[_0x2521ed(0x171)](_0x2bbff1){var _0x7a7224=_0x2521ed;this[_0x7a7224(0xb3)]=!0x1,this[_0x7a7224(0xd4)]=!0x1;try{_0x2bbff1['onclose']=null,_0x2bbff1[_0x7a7224(0x128)]=null,_0x2bbff1['onopen']=null;}catch{}try{_0x2bbff1[_0x7a7224(0xc2)]<0x2&&_0x2bbff1[_0x7a7224(0x116)]();}catch{}}[_0x2521ed(0x10c)](){var _0x822240=_0x2521ed;clearTimeout(this[_0x822240(0x181)]),!(this[_0x822240(0x166)]>=this[_0x822240(0xb2)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x572ab4=_0x822240,_0x59a299;this[_0x572ab4(0xb3)]||this['_connecting']||(this[_0x572ab4(0x16e)](),(_0x59a299=this[_0x572ab4(0xaa)])==null||_0x59a299[_0x572ab4(0xc0)](()=>this[_0x572ab4(0x10c)]()));},0x1f4),this[_0x822240(0x181)]['unref']&&this[_0x822240(0x181)][_0x822240(0xf3)]());}async[_0x2521ed(0xbd)](_0x4b15cd){var _0x362d6e=_0x2521ed;try{if(!this['_allowedToSend'])return;this[_0x362d6e(0x185)]&&this[_0x362d6e(0x16e)](),(await this['_ws'])[_0x362d6e(0xbd)](JSON[_0x362d6e(0xd5)](_0x4b15cd));}catch(_0x152473){this[_0x362d6e(0xbf)]?console[_0x362d6e(0x184)](this[_0x362d6e(0x17d)]+':\\x20'+(_0x152473&&_0x152473['message'])):(this[_0x362d6e(0xbf)]=!0x0,console[_0x362d6e(0x184)](this['_sendErrorMessage']+':\\x20'+(_0x152473&&_0x152473[_0x362d6e(0x12d)]),_0x4b15cd)),this['_allowedToSend']=!0x1,this[_0x362d6e(0x10c)]();}}};function _0x1bae(){var _0x475517=['unknown','_addFunctionsNode','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','replace','parent','data','[object\\x20Set]','autoExpandPreviousObjects','_setNodeExpressionPath','value','enumerable','autoExpandPropertyCount','_ws','_setNodeQueryPath','next.js','trace','_p_length','depth','5186','push','_maxConnectAttemptCount','_connected','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','163798kPEYdI','expressionsToEvaluate','string','current','noFunctions','_addProperty','_additionalMetadata','funcName','send','_p_name','_extendedWarning','catch','_consoleNinjaAllowedToStart','readyState',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Murad-Wahid\",\"192.168.10.116\"],'pathToFileURL','bigint','onopen','Boolean','_treeNodePropertiesBeforeFullValue','onmessage','[object\\x20Array]','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','console','elements','_getOwnPropertySymbols','totalStrLength','_isArray','Map','7861370iASdlg','2079585kwXuMV','_connecting','stringify','_propertyName','log','getOwnPropertyDescriptor','RegExp','_treeNodePropertiesAfterFullValue','resolveGetters','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','hrtime','props','url','level','call','map','_isPrimitiveWrapperType','_blacklistedProperty','[object\\x20BigInt]','match','WebSocket','serialize','autoExpandMaxDepth','host','strLength','method','_isMap','Number','unshift','versions','_inNextEdge','_Symbol','unref','_isPrimitiveType','length','_numberRegExp','_setNodeId','_console_ninja','constructor','_console_ninja_session','rootExpression',\"c:\\\\Users\\\\Murad Wahid\\\\.cursor\\\\extensions\\\\wallabyjs.console-ninja-1.0.460\\\\node_modules\",'angular','null','slice','Symbol','bind','index','array','pop','boolean','default','edge','10jggNHF','astro','_p_','NEXT_RUNTIME','_attemptToReconnectShortly','capped','','127.0.0.1','object','parse','_setNodeExpandableState','env','_inBrowser','allStrLength','close','remix','_isNegativeZero','disabledLog','_WebSocket','origin','24jBCuxm','date','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','count','timeStamp','then','_addObjectProperty','NEGATIVE_INFINITY','_addLoadNode','nan','symbol','1lYcQod','onerror','13530121SEjCVL','toString','ws://','webpack','message','location','ws/index.js','_regExpToString','setter','[object\\x20Map]','_keyStrRegExp','isExpressionToEvaluate','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','Error','time','_webSocketErrorDocsLink','includes','root_exp','nodeModules','_WebSocketClass','get','coverage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_socket','prototype','reduceLimits','_dateToString','function','_isSet','String','_objectToString','join','_hasMapOnItsPath','_setNodeLabel','reload','substr','endsWith','autoExpandLimit','eventReceivedCallback','process','4201998ehWVyE','performance','stackTraceLimit','test','set','autoExpand','args','perf_hooks','_getOwnPropertyDescriptor','_capIfString','_getOwnPropertyNames','valueOf','now','getOwnPropertyNames','...','__es'+'Module','2697880RnkQZv','type','stack','7ePNIPb','fromCharCode','_connectAttemptCount','global','negativeZero','_ninjaIgnoreNextError','error','_sortProps','path','getWebSocketClass','_connectToHostNow','_setNodePermissions','_undefined','_disposeWebsocket','cappedProps','negativeInfinity','sortProps','HTMLAllCollection','indexOf','create','_hasSymbolPropertyOnItsPath','charAt','hits','name','_cleanNode','_sendErrorMessage','_property','_type','689716KYriyM','_reconnectTimeout','node','getter','warn','_allowedToConnectOnSend','Set','onclose','number','port','root_exp_id','getOwnPropertySymbols','_allowedToSend','gateway.docker.internal','disabledTrace','undefined','https://tinyurl.com/37x8b79t','expId','forEach','_processTreeNodeResult','hasOwnProperty','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','POSITIVE_INFINITY','isArray','[object\\x20Date]','_HTMLAllCollection','concat','hostname','\\x20browser','dockerizedApp'];_0x1bae=function(){return _0x475517;};return _0x1bae();}function H(_0x5ac5d3,_0x5a024c,_0x41428f,_0x2b7c5f,_0x32bd1c,_0x410870,_0x173eb4,_0x411518=oe){var _0x35ca23=_0x2521ed;let _0x2973b8=_0x41428f['split'](',')['map'](_0x4ce34d=>{var _0x54e87f=_0x22d4,_0x4bc88c,_0x1896c3,_0x4bf3fc,_0x1b5e14;try{if(!_0x5ac5d3[_0x54e87f(0xfa)]){let _0x2f2f7f=((_0x1896c3=(_0x4bc88c=_0x5ac5d3[_0x54e87f(0x150)])==null?void 0x0:_0x4bc88c[_0x54e87f(0xf0)])==null?void 0x0:_0x1896c3['node'])||((_0x1b5e14=(_0x4bf3fc=_0x5ac5d3[_0x54e87f(0x150)])==null?void 0x0:_0x4bf3fc['env'])==null?void 0x0:_0x1b5e14[_0x54e87f(0x10b)])==='edge';(_0x32bd1c===_0x54e87f(0xac)||_0x32bd1c===_0x54e87f(0x117)||_0x32bd1c===_0x54e87f(0x109)||_0x32bd1c===_0x54e87f(0xfd))&&(_0x32bd1c+=_0x2f2f7f?'\\x20server':_0x54e87f(0x9c)),_0x5ac5d3[_0x54e87f(0xfa)]={'id':+new Date(),'tool':_0x32bd1c},_0x173eb4&&_0x32bd1c&&!_0x2f2f7f&&console[_0x54e87f(0xd7)](_0x54e87f(0x135)+(_0x32bd1c[_0x54e87f(0x179)](0x0)['toUpperCase']()+_0x32bd1c[_0x54e87f(0x14c)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x54e87f(0x11e));}let _0x38266e=new q(_0x5ac5d3,_0x5a024c,_0x4ce34d,_0x2b7c5f,_0x410870,_0x411518);return _0x38266e[_0x54e87f(0xbd)][_0x54e87f(0x101)](_0x38266e);}catch(_0x605813){return console[_0x54e87f(0x184)](_0x54e87f(0x95),_0x605813&&_0x605813[_0x54e87f(0x12d)]),()=>{};}});return _0x2cbe92=>_0x2973b8[_0x35ca23(0x92)](_0x4df820=>_0x4df820(_0x2cbe92));}function oe(_0x4723a9,_0xdcafa3,_0x18cb5f,_0x306248){var _0x7974a6=_0x2521ed;_0x306248&&_0x4723a9===_0x7974a6(0x14b)&&_0x18cb5f[_0x7974a6(0x12e)][_0x7974a6(0x14b)]();}function B(_0x49df36){var _0x8c4455=_0x2521ed,_0x1aef62,_0x33ca0f;let _0x504d4d=function(_0x3e4d21,_0x3119a9){return _0x3119a9-_0x3e4d21;},_0x4e68dc;if(_0x49df36[_0x8c4455(0x152)])_0x4e68dc=function(){return _0x49df36['performance']['now']();};else{if(_0x49df36[_0x8c4455(0x150)]&&_0x49df36[_0x8c4455(0x150)]['hrtime']&&((_0x33ca0f=(_0x1aef62=_0x49df36['process'])==null?void 0x0:_0x1aef62[_0x8c4455(0x113)])==null?void 0x0:_0x33ca0f[_0x8c4455(0x10b)])!==_0x8c4455(0x107))_0x4e68dc=function(){var _0x1f5058=_0x8c4455;return _0x49df36[_0x1f5058(0x150)][_0x1f5058(0xdd)]();},_0x504d4d=function(_0x4e233c,_0x163bff){return 0x3e8*(_0x163bff[0x0]-_0x4e233c[0x0])+(_0x163bff[0x1]-_0x4e233c[0x1])/0xf4240;};else try{let {performance:_0x92d690}=require(_0x8c4455(0x158));_0x4e68dc=function(){return _0x92d690['now']();};}catch{_0x4e68dc=function(){return+new Date();};}}return{'elapsed':_0x504d4d,'timeStamp':_0x4e68dc,'now':()=>Date[_0x8c4455(0x15d)]()};}function _0x22d4(_0x12edb4,_0x271789){var _0x1bae16=_0x1bae();return _0x22d4=function(_0x22d4de,_0x5d435d){_0x22d4de=_0x22d4de-0x8f;var _0x5cf399=_0x1bae16[_0x22d4de];return _0x5cf399;},_0x22d4(_0x12edb4,_0x271789);}function X(_0x353b15,_0x1aa730,_0x1de36e){var _0x290fd=_0x2521ed,_0x2cd4ae,_0x424619,_0x4f2a6c,_0x1d9986,_0x230056;if(_0x353b15[_0x290fd(0xc1)]!==void 0x0)return _0x353b15[_0x290fd(0xc1)];let _0x542a02=((_0x424619=(_0x2cd4ae=_0x353b15['process'])==null?void 0x0:_0x2cd4ae[_0x290fd(0xf0)])==null?void 0x0:_0x424619[_0x290fd(0x182)])||((_0x1d9986=(_0x4f2a6c=_0x353b15[_0x290fd(0x150)])==null?void 0x0:_0x4f2a6c[_0x290fd(0x113)])==null?void 0x0:_0x1d9986[_0x290fd(0x10b)])==='edge';function _0x394a2b(_0x45bd35){var _0x5eb749=_0x290fd;if(_0x45bd35['startsWith']('/')&&_0x45bd35[_0x5eb749(0x14d)]('/')){let _0x21a10f=new RegExp(_0x45bd35[_0x5eb749(0xff)](0x1,-0x1));return _0xe0fca5=>_0x21a10f[_0x5eb749(0x154)](_0xe0fca5);}else{if(_0x45bd35[_0x5eb749(0x139)]('*')||_0x45bd35[_0x5eb749(0x139)]('?')){let _0x95c811=new RegExp('^'+_0x45bd35['replace'](/\\./g,String[_0x5eb749(0x165)](0x5c)+'.')['replace'](/\\*/g,'.*')['replace'](/\\?/g,'.')+String[_0x5eb749(0x165)](0x24));return _0x40ec94=>_0x95c811[_0x5eb749(0x154)](_0x40ec94);}else return _0x3f24dd=>_0x3f24dd===_0x45bd35;}}let _0x2ca7df=_0x1aa730[_0x290fd(0xe2)](_0x394a2b);return _0x353b15[_0x290fd(0xc1)]=_0x542a02||!_0x1aa730,!_0x353b15[_0x290fd(0xc1)]&&((_0x230056=_0x353b15[_0x290fd(0x12e)])==null?void 0x0:_0x230056['hostname'])&&(_0x353b15[_0x290fd(0xc1)]=_0x2ca7df['some'](_0x23fe2b=>_0x23fe2b(_0x353b15[_0x290fd(0x12e)][_0x290fd(0x9b)]))),_0x353b15['_consoleNinjaAllowedToStart'];}function J(_0x1c6eb0,_0x552919,_0x51de18,_0x533c9c){var _0xd5a59d=_0x2521ed;_0x1c6eb0=_0x1c6eb0,_0x552919=_0x552919,_0x51de18=_0x51de18,_0x533c9c=_0x533c9c;let _0x1136ef=B(_0x1c6eb0),_0x1a1b80=_0x1136ef['elapsed'],_0x57d945=_0x1136ef[_0xd5a59d(0x120)];class _0x4a2137{constructor(){var _0x20a872=_0xd5a59d;this[_0x20a872(0x133)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x20a872(0xf6)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x20a872(0x170)]=_0x1c6eb0[_0x20a872(0x8f)],this[_0x20a872(0x99)]=_0x1c6eb0['HTMLAllCollection'],this[_0x20a872(0x159)]=Object[_0x20a872(0xd8)],this[_0x20a872(0x15b)]=Object[_0x20a872(0x15e)],this[_0x20a872(0xf2)]=_0x1c6eb0[_0x20a872(0x100)],this[_0x20a872(0x130)]=RegExp[_0x20a872(0x141)][_0x20a872(0x12a)],this['_dateToString']=Date[_0x20a872(0x141)][_0x20a872(0x12a)];}[_0xd5a59d(0xe8)](_0x19e7d2,_0xdeff97,_0x1b41e0,_0x5a8d18){var _0x369a40=_0xd5a59d,_0x4e0a0b=this,_0x207418=_0x1b41e0[_0x369a40(0x156)];function _0x356ab7(_0x1764a0,_0x28cb69,_0x5cd086){var _0x2e85e4=_0x369a40;_0x28cb69[_0x2e85e4(0x162)]=_0x2e85e4(0x9e),_0x28cb69[_0x2e85e4(0x16a)]=_0x1764a0[_0x2e85e4(0x12d)],_0x1f9073=_0x5cd086[_0x2e85e4(0x182)][_0x2e85e4(0xb8)],_0x5cd086[_0x2e85e4(0x182)][_0x2e85e4(0xb8)]=_0x28cb69,_0x4e0a0b[_0x2e85e4(0xc8)](_0x28cb69,_0x5cd086);}let _0x371ae5;_0x1c6eb0[_0x369a40(0xcc)]&&(_0x371ae5=_0x1c6eb0[_0x369a40(0xcc)][_0x369a40(0x16a)],_0x371ae5&&(_0x1c6eb0['console'][_0x369a40(0x16a)]=function(){}));try{try{_0x1b41e0['level']++,_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0['autoExpandPreviousObjects'][_0x369a40(0xb1)](_0xdeff97);var _0x1b2cf8,_0x5634a8,_0x24aca3,_0x524893,_0x2a7853=[],_0x3725f9=[],_0x1b95d6,_0x5f3857=this[_0x369a40(0x17f)](_0xdeff97),_0x40dc89=_0x5f3857===_0x369a40(0x103),_0x3a0f81=!0x1,_0x3e6606=_0x5f3857===_0x369a40(0x144),_0x12c80b=this[_0x369a40(0xf4)](_0x5f3857),_0x400804=this[_0x369a40(0xe3)](_0x5f3857),_0x4a9776=_0x12c80b||_0x400804,_0x5335ea={},_0x3502e7=0x0,_0x2885e3=!0x1,_0x1f9073,_0x318e18=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1b41e0[_0x369a40(0xaf)]){if(_0x40dc89){if(_0x5634a8=_0xdeff97[_0x369a40(0xf5)],_0x5634a8>_0x1b41e0['elements']){for(_0x24aca3=0x0,_0x524893=_0x1b41e0['elements'],_0x1b2cf8=_0x24aca3;_0x1b2cf8<_0x524893;_0x1b2cf8++)_0x3725f9['push'](_0x4e0a0b[_0x369a40(0xba)](_0x2a7853,_0xdeff97,_0x5f3857,_0x1b2cf8,_0x1b41e0));_0x19e7d2['cappedElements']=!0x0;}else{for(_0x24aca3=0x0,_0x524893=_0x5634a8,_0x1b2cf8=_0x24aca3;_0x1b2cf8<_0x524893;_0x1b2cf8++)_0x3725f9[_0x369a40(0xb1)](_0x4e0a0b[_0x369a40(0xba)](_0x2a7853,_0xdeff97,_0x5f3857,_0x1b2cf8,_0x1b41e0));}_0x1b41e0['autoExpandPropertyCount']+=_0x3725f9[_0x369a40(0xf5)];}if(!(_0x5f3857==='null'||_0x5f3857===_0x369a40(0x8f))&&!_0x12c80b&&_0x5f3857!==_0x369a40(0x146)&&_0x5f3857!=='Buffer'&&_0x5f3857!=='bigint'){var _0x9b164d=_0x5a8d18[_0x369a40(0xde)]||_0x1b41e0[_0x369a40(0xde)];if(this['_isSet'](_0xdeff97)?(_0x1b2cf8=0x0,_0xdeff97[_0x369a40(0x92)](function(_0x2e4c83){var _0xc34cf5=_0x369a40;if(_0x3502e7++,_0x1b41e0['autoExpandPropertyCount']++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;return;}if(!_0x1b41e0['isExpressionToEvaluate']&&_0x1b41e0[_0xc34cf5(0x156)]&&_0x1b41e0[_0xc34cf5(0xa9)]>_0x1b41e0[_0xc34cf5(0x14e)]){_0x2885e3=!0x0;return;}_0x3725f9[_0xc34cf5(0xb1)](_0x4e0a0b[_0xc34cf5(0xba)](_0x2a7853,_0xdeff97,_0xc34cf5(0x186),_0x1b2cf8++,_0x1b41e0,function(_0x29d796){return function(){return _0x29d796;};}(_0x2e4c83)));})):this[_0x369a40(0xed)](_0xdeff97)&&_0xdeff97[_0x369a40(0x92)](function(_0xfea0fe,_0xa14803){var _0x32aa72=_0x369a40;if(_0x3502e7++,_0x1b41e0[_0x32aa72(0xa9)]++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;return;}if(!_0x1b41e0['isExpressionToEvaluate']&&_0x1b41e0[_0x32aa72(0x156)]&&_0x1b41e0['autoExpandPropertyCount']>_0x1b41e0['autoExpandLimit']){_0x2885e3=!0x0;return;}var _0x3e871d=_0xa14803['toString']();_0x3e871d['length']>0x64&&(_0x3e871d=_0x3e871d[_0x32aa72(0xff)](0x0,0x64)+_0x32aa72(0x15f)),_0x3725f9[_0x32aa72(0xb1)](_0x4e0a0b[_0x32aa72(0xba)](_0x2a7853,_0xdeff97,_0x32aa72(0xd1),_0x3e871d,_0x1b41e0,function(_0x4b9377){return function(){return _0x4b9377;};}(_0xfea0fe)));}),!_0x3a0f81){try{for(_0x1b95d6 in _0xdeff97)if(!(_0x40dc89&&_0x318e18[_0x369a40(0x154)](_0x1b95d6))&&!this[_0x369a40(0xe4)](_0xdeff97,_0x1b95d6,_0x1b41e0)){if(_0x3502e7++,_0x1b41e0[_0x369a40(0xa9)]++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;break;}if(!_0x1b41e0[_0x369a40(0x134)]&&_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0[_0x369a40(0xa9)]>_0x1b41e0['autoExpandLimit']){_0x2885e3=!0x0;break;}_0x3725f9[_0x369a40(0xb1)](_0x4e0a0b['_addObjectProperty'](_0x2a7853,_0x5335ea,_0xdeff97,_0x5f3857,_0x1b95d6,_0x1b41e0));}}catch{}if(_0x5335ea[_0x369a40(0xae)]=!0x0,_0x3e6606&&(_0x5335ea[_0x369a40(0xbe)]=!0x0),!_0x2885e3){var _0x3b6b3a=[][_0x369a40(0x9a)](this[_0x369a40(0x15b)](_0xdeff97))['concat'](this[_0x369a40(0xce)](_0xdeff97));for(_0x1b2cf8=0x0,_0x5634a8=_0x3b6b3a[_0x369a40(0xf5)];_0x1b2cf8<_0x5634a8;_0x1b2cf8++)if(_0x1b95d6=_0x3b6b3a[_0x1b2cf8],!(_0x40dc89&&_0x318e18[_0x369a40(0x154)](_0x1b95d6['toString']()))&&!this[_0x369a40(0xe4)](_0xdeff97,_0x1b95d6,_0x1b41e0)&&!_0x5335ea[_0x369a40(0x10a)+_0x1b95d6[_0x369a40(0x12a)]()]){if(_0x3502e7++,_0x1b41e0[_0x369a40(0xa9)]++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;break;}if(!_0x1b41e0[_0x369a40(0x134)]&&_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0[_0x369a40(0xa9)]>_0x1b41e0[_0x369a40(0x14e)]){_0x2885e3=!0x0;break;}_0x3725f9[_0x369a40(0xb1)](_0x4e0a0b[_0x369a40(0x122)](_0x2a7853,_0x5335ea,_0xdeff97,_0x5f3857,_0x1b95d6,_0x1b41e0));}}}}}if(_0x19e7d2['type']=_0x5f3857,_0x4a9776?(_0x19e7d2['value']=_0xdeff97[_0x369a40(0x15c)](),this[_0x369a40(0x15a)](_0x5f3857,_0x19e7d2,_0x1b41e0,_0x5a8d18)):_0x5f3857===_0x369a40(0x11d)?_0x19e7d2[_0x369a40(0xa7)]=this[_0x369a40(0x143)][_0x369a40(0xe1)](_0xdeff97):_0x5f3857===_0x369a40(0xc5)?_0x19e7d2[_0x369a40(0xa7)]=_0xdeff97[_0x369a40(0x12a)]():_0x5f3857===_0x369a40(0xd9)?_0x19e7d2[_0x369a40(0xa7)]=this[_0x369a40(0x130)]['call'](_0xdeff97):_0x5f3857==='symbol'&&this['_Symbol']?_0x19e7d2['value']=this[_0x369a40(0xf2)][_0x369a40(0x141)][_0x369a40(0x12a)][_0x369a40(0xe1)](_0xdeff97):!_0x1b41e0[_0x369a40(0xaf)]&&!(_0x5f3857===_0x369a40(0xfe)||_0x5f3857==='undefined')&&(delete _0x19e7d2[_0x369a40(0xa7)],_0x19e7d2['capped']=!0x0),_0x2885e3&&(_0x19e7d2[_0x369a40(0x172)]=!0x0),_0x1f9073=_0x1b41e0[_0x369a40(0x182)][_0x369a40(0xb8)],_0x1b41e0[_0x369a40(0x182)][_0x369a40(0xb8)]=_0x19e7d2,this['_treeNodePropertiesBeforeFullValue'](_0x19e7d2,_0x1b41e0),_0x3725f9['length']){for(_0x1b2cf8=0x0,_0x5634a8=_0x3725f9['length'];_0x1b2cf8<_0x5634a8;_0x1b2cf8++)_0x3725f9[_0x1b2cf8](_0x1b2cf8);}_0x2a7853['length']&&(_0x19e7d2['props']=_0x2a7853);}catch(_0x43255c){_0x356ab7(_0x43255c,_0x19e7d2,_0x1b41e0);}this[_0x369a40(0xbb)](_0xdeff97,_0x19e7d2),this['_treeNodePropertiesAfterFullValue'](_0x19e7d2,_0x1b41e0),_0x1b41e0[_0x369a40(0x182)][_0x369a40(0xb8)]=_0x1f9073,_0x1b41e0[_0x369a40(0xe0)]--,_0x1b41e0[_0x369a40(0x156)]=_0x207418,_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0['autoExpandPreviousObjects'][_0x369a40(0x104)]();}finally{_0x371ae5&&(_0x1c6eb0['console'][_0x369a40(0x16a)]=_0x371ae5);}return _0x19e7d2;}['_getOwnPropertySymbols'](_0x47571d){var _0x1b79d4=_0xd5a59d;return Object[_0x1b79d4(0x18b)]?Object[_0x1b79d4(0x18b)](_0x47571d):[];}[_0xd5a59d(0x145)](_0x2365a1){var _0x95c97b=_0xd5a59d;return!!(_0x2365a1&&_0x1c6eb0[_0x95c97b(0x186)]&&this[_0x95c97b(0x147)](_0x2365a1)===_0x95c97b(0xa4)&&_0x2365a1['forEach']);}[_0xd5a59d(0xe4)](_0x13f89c,_0x154bef,_0x43a2af){return _0x43a2af['noFunctions']?typeof _0x13f89c[_0x154bef]=='function':!0x1;}[_0xd5a59d(0x17f)](_0x40d886){var _0x2b5971=_0xd5a59d,_0x508ff0='';return _0x508ff0=typeof _0x40d886,_0x508ff0===_0x2b5971(0x110)?this[_0x2b5971(0x147)](_0x40d886)==='[object\\x20Array]'?_0x508ff0=_0x2b5971(0x103):this[_0x2b5971(0x147)](_0x40d886)===_0x2b5971(0x98)?_0x508ff0=_0x2b5971(0x11d):this['_objectToString'](_0x40d886)===_0x2b5971(0xe5)?_0x508ff0='bigint':_0x40d886===null?_0x508ff0=_0x2b5971(0xfe):_0x40d886[_0x2b5971(0xf9)]&&(_0x508ff0=_0x40d886[_0x2b5971(0xf9)]['name']||_0x508ff0):_0x508ff0===_0x2b5971(0x8f)&&this['_HTMLAllCollection']&&_0x40d886 instanceof this[_0x2b5971(0x99)]&&(_0x508ff0=_0x2b5971(0x175)),_0x508ff0;}['_objectToString'](_0x589848){var _0x2742fa=_0xd5a59d;return Object['prototype']['toString'][_0x2742fa(0xe1)](_0x589848);}[_0xd5a59d(0xf4)](_0x52f421){var _0x28f82f=_0xd5a59d;return _0x52f421===_0x28f82f(0x105)||_0x52f421===_0x28f82f(0xb7)||_0x52f421===_0x28f82f(0x188);}[_0xd5a59d(0xe3)](_0x355bbd){var _0x51962f=_0xd5a59d;return _0x355bbd===_0x51962f(0xc7)||_0x355bbd===_0x51962f(0x146)||_0x355bbd===_0x51962f(0xee);}[_0xd5a59d(0xba)](_0x9ba98c,_0x596b39,_0x3e2452,_0x923cf0,_0x1f8e7a,_0x3ccbed){var _0x4e9c48=this;return function(_0x1e84c3){var _0x25e331=_0x22d4,_0x1119fe=_0x1f8e7a['node'][_0x25e331(0xb8)],_0x3061fc=_0x1f8e7a[_0x25e331(0x182)]['index'],_0x422100=_0x1f8e7a[_0x25e331(0x182)][_0x25e331(0xa2)];_0x1f8e7a[_0x25e331(0x182)][_0x25e331(0xa2)]=_0x1119fe,_0x1f8e7a[_0x25e331(0x182)]['index']=typeof _0x923cf0==_0x25e331(0x188)?_0x923cf0:_0x1e84c3,_0x9ba98c['push'](_0x4e9c48[_0x25e331(0x17e)](_0x596b39,_0x3e2452,_0x923cf0,_0x1f8e7a,_0x3ccbed)),_0x1f8e7a['node']['parent']=_0x422100,_0x1f8e7a[_0x25e331(0x182)][_0x25e331(0x102)]=_0x3061fc;};}['_addObjectProperty'](_0xf7c578,_0x51971d,_0x33c44e,_0x528a14,_0x297309,_0x4ead46,_0x51de28){var _0x240d55=_0xd5a59d,_0x3d8a22=this;return _0x51971d['_p_'+_0x297309[_0x240d55(0x12a)]()]=!0x0,function(_0x523495){var _0x2424bf=_0x240d55,_0x5d1930=_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0xb8)],_0x36b6f9=_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0x102)],_0x242217=_0x4ead46['node']['parent'];_0x4ead46['node'][_0x2424bf(0xa2)]=_0x5d1930,_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0x102)]=_0x523495,_0xf7c578['push'](_0x3d8a22['_property'](_0x33c44e,_0x528a14,_0x297309,_0x4ead46,_0x51de28)),_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0xa2)]=_0x242217,_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0x102)]=_0x36b6f9;};}[_0xd5a59d(0x17e)](_0x2fcb0b,_0x50df32,_0x538478,_0x548d99,_0xb9e029){var _0x3006dd=_0xd5a59d,_0x20f0d9=this;_0xb9e029||(_0xb9e029=function(_0x1130b7,_0x5ae751){return _0x1130b7[_0x5ae751];});var _0x530633=_0x538478['toString'](),_0x10423d=_0x548d99[_0x3006dd(0xb6)]||{},_0x3d799d=_0x548d99[_0x3006dd(0xaf)],_0x3bdd25=_0x548d99['isExpressionToEvaluate'];try{var _0x55f627=this[_0x3006dd(0xed)](_0x2fcb0b),_0x274f99=_0x530633;_0x55f627&&_0x274f99[0x0]==='\\x27'&&(_0x274f99=_0x274f99[_0x3006dd(0x14c)](0x1,_0x274f99[_0x3006dd(0xf5)]-0x2));var _0x6b28ec=_0x548d99[_0x3006dd(0xb6)]=_0x10423d[_0x3006dd(0x10a)+_0x274f99];_0x6b28ec&&(_0x548d99[_0x3006dd(0xaf)]=_0x548d99['depth']+0x1),_0x548d99[_0x3006dd(0x134)]=!!_0x6b28ec;var _0x434c3=typeof _0x538478==_0x3006dd(0x126),_0xd44407={'name':_0x434c3||_0x55f627?_0x530633:this['_propertyName'](_0x530633)};if(_0x434c3&&(_0xd44407[_0x3006dd(0x126)]=!0x0),!(_0x50df32===_0x3006dd(0x103)||_0x50df32===_0x3006dd(0x136))){var _0xb21498=this[_0x3006dd(0x159)](_0x2fcb0b,_0x538478);if(_0xb21498&&(_0xb21498[_0x3006dd(0x155)]&&(_0xd44407[_0x3006dd(0x131)]=!0x0),_0xb21498[_0x3006dd(0x13d)]&&!_0x6b28ec&&!_0x548d99[_0x3006dd(0xdb)]))return _0xd44407[_0x3006dd(0x183)]=!0x0,this[_0x3006dd(0x93)](_0xd44407,_0x548d99),_0xd44407;}var _0x2d48a0;try{_0x2d48a0=_0xb9e029(_0x2fcb0b,_0x538478);}catch(_0x26552e){return _0xd44407={'name':_0x530633,'type':'unknown','error':_0x26552e[_0x3006dd(0x12d)]},this[_0x3006dd(0x93)](_0xd44407,_0x548d99),_0xd44407;}var _0x4844c2=this[_0x3006dd(0x17f)](_0x2d48a0),_0x2fcd14=this[_0x3006dd(0xf4)](_0x4844c2);if(_0xd44407[_0x3006dd(0x162)]=_0x4844c2,_0x2fcd14)this[_0x3006dd(0x93)](_0xd44407,_0x548d99,_0x2d48a0,function(){var _0x439489=_0x3006dd;_0xd44407['value']=_0x2d48a0[_0x439489(0x15c)](),!_0x6b28ec&&_0x20f0d9[_0x439489(0x15a)](_0x4844c2,_0xd44407,_0x548d99,{});});else{var _0x31d1c7=_0x548d99[_0x3006dd(0x156)]&&_0x548d99['level']<_0x548d99['autoExpandMaxDepth']&&_0x548d99[_0x3006dd(0xa5)][_0x3006dd(0x176)](_0x2d48a0)<0x0&&_0x4844c2!=='function'&&_0x548d99[_0x3006dd(0xa9)]<_0x548d99[_0x3006dd(0x14e)];_0x31d1c7||_0x548d99['level']<_0x3d799d||_0x6b28ec?(this[_0x3006dd(0xe8)](_0xd44407,_0x2d48a0,_0x548d99,_0x6b28ec||{}),this[_0x3006dd(0xbb)](_0x2d48a0,_0xd44407)):this[_0x3006dd(0x93)](_0xd44407,_0x548d99,_0x2d48a0,function(){var _0x5e1f7c=_0x3006dd;_0x4844c2===_0x5e1f7c(0xfe)||_0x4844c2===_0x5e1f7c(0x8f)||(delete _0xd44407[_0x5e1f7c(0xa7)],_0xd44407['capped']=!0x0);});}return _0xd44407;}finally{_0x548d99[_0x3006dd(0xb6)]=_0x10423d,_0x548d99[_0x3006dd(0xaf)]=_0x3d799d,_0x548d99[_0x3006dd(0x134)]=_0x3bdd25;}}['_capIfString'](_0x1e4d2e,_0x294ac4,_0x367bfb,_0x20ba06){var _0x58e966=_0xd5a59d,_0x3d317c=_0x20ba06['strLength']||_0x367bfb[_0x58e966(0xeb)];if((_0x1e4d2e===_0x58e966(0xb7)||_0x1e4d2e===_0x58e966(0x146))&&_0x294ac4['value']){let _0x5e11f9=_0x294ac4[_0x58e966(0xa7)][_0x58e966(0xf5)];_0x367bfb[_0x58e966(0x115)]+=_0x5e11f9,_0x367bfb[_0x58e966(0x115)]>_0x367bfb[_0x58e966(0xcf)]?(_0x294ac4[_0x58e966(0x10d)]='',delete _0x294ac4[_0x58e966(0xa7)]):_0x5e11f9>_0x3d317c&&(_0x294ac4[_0x58e966(0x10d)]=_0x294ac4[_0x58e966(0xa7)]['substr'](0x0,_0x3d317c),delete _0x294ac4[_0x58e966(0xa7)]);}}[_0xd5a59d(0xed)](_0x483f52){var _0x1cd051=_0xd5a59d;return!!(_0x483f52&&_0x1c6eb0[_0x1cd051(0xd1)]&&this['_objectToString'](_0x483f52)===_0x1cd051(0x132)&&_0x483f52[_0x1cd051(0x92)]);}[_0xd5a59d(0xd6)](_0x4af33b){var _0x552947=_0xd5a59d;if(_0x4af33b[_0x552947(0xe6)](/^\\d+$/))return _0x4af33b;var _0x5edc47;try{_0x5edc47=JSON[_0x552947(0xd5)](''+_0x4af33b);}catch{_0x5edc47='\\x22'+this[_0x552947(0x147)](_0x4af33b)+'\\x22';}return _0x5edc47['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5edc47=_0x5edc47[_0x552947(0x14c)](0x1,_0x5edc47[_0x552947(0xf5)]-0x2):_0x5edc47=_0x5edc47[_0x552947(0xa1)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5edc47;}['_processTreeNodeResult'](_0x24308a,_0xf8dc4c,_0x216094,_0x2d0ea1){var _0x47078e=_0xd5a59d;this[_0x47078e(0xc8)](_0x24308a,_0xf8dc4c),_0x2d0ea1&&_0x2d0ea1(),this[_0x47078e(0xbb)](_0x216094,_0x24308a),this[_0x47078e(0xda)](_0x24308a,_0xf8dc4c);}['_treeNodePropertiesBeforeFullValue'](_0x967358,_0x6a7c01){var _0x5538e8=_0xd5a59d;this[_0x5538e8(0xf7)](_0x967358,_0x6a7c01),this[_0x5538e8(0xab)](_0x967358,_0x6a7c01),this[_0x5538e8(0xa6)](_0x967358,_0x6a7c01),this[_0x5538e8(0x16f)](_0x967358,_0x6a7c01);}[_0xd5a59d(0xf7)](_0x281a69,_0x1fdaf3){}[_0xd5a59d(0xab)](_0x55e132,_0x287d38){}[_0xd5a59d(0x14a)](_0x415c7b,_0x581b77){}['_isUndefined'](_0xd3c5ae){return _0xd3c5ae===this['_undefined'];}[_0xd5a59d(0xda)](_0x100ee1,_0x1e47ad){var _0x192f28=_0xd5a59d;this['_setNodeLabel'](_0x100ee1,_0x1e47ad),this['_setNodeExpandableState'](_0x100ee1),_0x1e47ad[_0x192f28(0x174)]&&this[_0x192f28(0x16b)](_0x100ee1),this[_0x192f28(0x9f)](_0x100ee1,_0x1e47ad),this[_0x192f28(0x124)](_0x100ee1,_0x1e47ad),this['_cleanNode'](_0x100ee1);}['_additionalMetadata'](_0x13eec3,_0x31c974){var _0x5775f4=_0xd5a59d;try{_0x13eec3&&typeof _0x13eec3[_0x5775f4(0xf5)]=='number'&&(_0x31c974[_0x5775f4(0xf5)]=_0x13eec3[_0x5775f4(0xf5)]);}catch{}if(_0x31c974[_0x5775f4(0x162)]==='number'||_0x31c974['type']===_0x5775f4(0xee)){if(isNaN(_0x31c974[_0x5775f4(0xa7)]))_0x31c974[_0x5775f4(0x125)]=!0x0,delete _0x31c974[_0x5775f4(0xa7)];else switch(_0x31c974[_0x5775f4(0xa7)]){case Number[_0x5775f4(0x96)]:_0x31c974['positiveInfinity']=!0x0,delete _0x31c974['value'];break;case Number[_0x5775f4(0x123)]:_0x31c974[_0x5775f4(0x173)]=!0x0,delete _0x31c974[_0x5775f4(0xa7)];break;case 0x0:this['_isNegativeZero'](_0x31c974[_0x5775f4(0xa7)])&&(_0x31c974[_0x5775f4(0x168)]=!0x0);break;}}else _0x31c974[_0x5775f4(0x162)]===_0x5775f4(0x144)&&typeof _0x13eec3[_0x5775f4(0x17b)]==_0x5775f4(0xb7)&&_0x13eec3[_0x5775f4(0x17b)]&&_0x31c974[_0x5775f4(0x17b)]&&_0x13eec3[_0x5775f4(0x17b)]!==_0x31c974[_0x5775f4(0x17b)]&&(_0x31c974[_0x5775f4(0xbc)]=_0x13eec3[_0x5775f4(0x17b)]);}[_0xd5a59d(0x118)](_0x3f62bd){return 0x1/_0x3f62bd===Number['NEGATIVE_INFINITY'];}[_0xd5a59d(0x16b)](_0x2fe6ed){var _0x387e2c=_0xd5a59d;!_0x2fe6ed[_0x387e2c(0xde)]||!_0x2fe6ed[_0x387e2c(0xde)][_0x387e2c(0xf5)]||_0x2fe6ed['type']===_0x387e2c(0x103)||_0x2fe6ed[_0x387e2c(0x162)]===_0x387e2c(0xd1)||_0x2fe6ed[_0x387e2c(0x162)]===_0x387e2c(0x186)||_0x2fe6ed['props']['sort'](function(_0x3b9b24,_0x56671c){var _0x509fa8=_0x387e2c,_0x4f6678=_0x3b9b24[_0x509fa8(0x17b)]['toLowerCase'](),_0x390f8d=_0x56671c[_0x509fa8(0x17b)]['toLowerCase']();return _0x4f6678<_0x390f8d?-0x1:_0x4f6678>_0x390f8d?0x1:0x0;});}['_addFunctionsNode'](_0xdef430,_0x1d4f47){var _0x1a0043=_0xd5a59d;if(!(_0x1d4f47[_0x1a0043(0xb9)]||!_0xdef430[_0x1a0043(0xde)]||!_0xdef430[_0x1a0043(0xde)]['length'])){for(var _0x15afac=[],_0x109a59=[],_0x281f7a=0x0,_0x5cdfbc=_0xdef430[_0x1a0043(0xde)]['length'];_0x281f7a<_0x5cdfbc;_0x281f7a++){var _0xa80335=_0xdef430['props'][_0x281f7a];_0xa80335[_0x1a0043(0x162)]===_0x1a0043(0x144)?_0x15afac['push'](_0xa80335):_0x109a59[_0x1a0043(0xb1)](_0xa80335);}if(!(!_0x109a59[_0x1a0043(0xf5)]||_0x15afac[_0x1a0043(0xf5)]<=0x1)){_0xdef430[_0x1a0043(0xde)]=_0x109a59;var _0x20b1db={'functionsNode':!0x0,'props':_0x15afac};this[_0x1a0043(0xf7)](_0x20b1db,_0x1d4f47),this['_setNodeLabel'](_0x20b1db,_0x1d4f47),this[_0x1a0043(0x112)](_0x20b1db),this['_setNodePermissions'](_0x20b1db,_0x1d4f47),_0x20b1db['id']+='\\x20f',_0xdef430[_0x1a0043(0xde)][_0x1a0043(0xef)](_0x20b1db);}}}['_addLoadNode'](_0x2d4ed7,_0x10c69f){}[_0xd5a59d(0x112)](_0x1eb55a){}[_0xd5a59d(0xd0)](_0x471991){var _0x235d83=_0xd5a59d;return Array[_0x235d83(0x97)](_0x471991)||typeof _0x471991==_0x235d83(0x110)&&this[_0x235d83(0x147)](_0x471991)===_0x235d83(0xca);}[_0xd5a59d(0x16f)](_0x573363,_0x378b53){}[_0xd5a59d(0x17c)](_0x1bd6da){var _0xbe21f4=_0xd5a59d;delete _0x1bd6da[_0xbe21f4(0x178)],delete _0x1bd6da['_hasSetOnItsPath'],delete _0x1bd6da[_0xbe21f4(0x149)];}[_0xd5a59d(0xa6)](_0x35d1ef,_0x4ed53b){}}let _0x53d974=new _0x4a2137(),_0x3eb1c5={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x550602={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x259d6c(_0x2e3779,_0xd917b2,_0xb327ac,_0x24707f,_0x4ad55e,_0x4f5466){var _0x4b9f72=_0xd5a59d;let _0x4ea472,_0x5b4197;try{_0x5b4197=_0x57d945(),_0x4ea472=_0x51de18[_0xd917b2],!_0x4ea472||_0x5b4197-_0x4ea472['ts']>0x1f4&&_0x4ea472[_0x4b9f72(0x11f)]&&_0x4ea472[_0x4b9f72(0x137)]/_0x4ea472[_0x4b9f72(0x11f)]<0x64?(_0x51de18[_0xd917b2]=_0x4ea472={'count':0x0,'time':0x0,'ts':_0x5b4197},_0x51de18[_0x4b9f72(0x17a)]={}):_0x5b4197-_0x51de18[_0x4b9f72(0x17a)]['ts']>0x32&&_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x11f)]&&_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x137)]/_0x51de18[_0x4b9f72(0x17a)]['count']<0x64&&(_0x51de18[_0x4b9f72(0x17a)]={});let _0x10d134=[],_0x59cb67=_0x4ea472[_0x4b9f72(0x142)]||_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x142)]?_0x550602:_0x3eb1c5,_0x594003=_0x5e3009=>{var _0x2d7700=_0x4b9f72;let _0xa0775f={};return _0xa0775f[_0x2d7700(0xde)]=_0x5e3009[_0x2d7700(0xde)],_0xa0775f[_0x2d7700(0xcd)]=_0x5e3009['elements'],_0xa0775f['strLength']=_0x5e3009['strLength'],_0xa0775f[_0x2d7700(0xcf)]=_0x5e3009['totalStrLength'],_0xa0775f[_0x2d7700(0x14e)]=_0x5e3009[_0x2d7700(0x14e)],_0xa0775f[_0x2d7700(0xe9)]=_0x5e3009[_0x2d7700(0xe9)],_0xa0775f[_0x2d7700(0x174)]=!0x1,_0xa0775f['noFunctions']=!_0x552919,_0xa0775f[_0x2d7700(0xaf)]=0x1,_0xa0775f[_0x2d7700(0xe0)]=0x0,_0xa0775f[_0x2d7700(0x91)]=_0x2d7700(0x18a),_0xa0775f[_0x2d7700(0xfb)]=_0x2d7700(0x13a),_0xa0775f[_0x2d7700(0x156)]=!0x0,_0xa0775f['autoExpandPreviousObjects']=[],_0xa0775f[_0x2d7700(0xa9)]=0x0,_0xa0775f[_0x2d7700(0xdb)]=!0x0,_0xa0775f[_0x2d7700(0x115)]=0x0,_0xa0775f[_0x2d7700(0x182)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xa0775f;};for(var _0x4e3ef1=0x0;_0x4e3ef1<_0x4ad55e[_0x4b9f72(0xf5)];_0x4e3ef1++)_0x10d134[_0x4b9f72(0xb1)](_0x53d974[_0x4b9f72(0xe8)]({'timeNode':_0x2e3779===_0x4b9f72(0x137)||void 0x0},_0x4ad55e[_0x4e3ef1],_0x594003(_0x59cb67),{}));if(_0x2e3779===_0x4b9f72(0xad)||_0x2e3779===_0x4b9f72(0x16a)){let _0x597c0d=Error[_0x4b9f72(0x153)];try{Error['stackTraceLimit']=0x1/0x0,_0x10d134['push'](_0x53d974[_0x4b9f72(0xe8)]({'stackNode':!0x0},new Error()[_0x4b9f72(0x163)],_0x594003(_0x59cb67),{'strLength':0x1/0x0}));}finally{Error[_0x4b9f72(0x153)]=_0x597c0d;}}return{'method':_0x4b9f72(0xd7),'version':_0x533c9c,'args':[{'ts':_0xb327ac,'session':_0x24707f,'args':_0x10d134,'id':_0xd917b2,'context':_0x4f5466}]};}catch(_0x541082){return{'method':'log','version':_0x533c9c,'args':[{'ts':_0xb327ac,'session':_0x24707f,'args':[{'type':'unknown','error':_0x541082&&_0x541082['message']}],'id':_0xd917b2,'context':_0x4f5466}]};}finally{try{if(_0x4ea472&&_0x5b4197){let _0x24841e=_0x57d945();_0x4ea472['count']++,_0x4ea472[_0x4b9f72(0x137)]+=_0x1a1b80(_0x5b4197,_0x24841e),_0x4ea472['ts']=_0x24841e,_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x11f)]++,_0x51de18['hits'][_0x4b9f72(0x137)]+=_0x1a1b80(_0x5b4197,_0x24841e),_0x51de18[_0x4b9f72(0x17a)]['ts']=_0x24841e,(_0x4ea472[_0x4b9f72(0x11f)]>0x32||_0x4ea472['time']>0x64)&&(_0x4ea472[_0x4b9f72(0x142)]=!0x0),(_0x51de18['hits']['count']>0x3e8||_0x51de18['hits'][_0x4b9f72(0x137)]>0x12c)&&(_0x51de18['hits']['reduceLimits']=!0x0);}}catch{}}}return _0x259d6c;}((_0x5e47ad,_0x378d13,_0x36c5af,_0x2ad400,_0x3b6c41,_0x3d43c6,_0x2ffba0,_0xb9f3b,_0x1807ca,_0x39281c,_0xab83d7)=>{var _0x3e722f=_0x2521ed;if(_0x5e47ad[_0x3e722f(0xf8)])return _0x5e47ad[_0x3e722f(0xf8)];if(!X(_0x5e47ad,_0xb9f3b,_0x3b6c41))return _0x5e47ad['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x5e47ad[_0x3e722f(0xf8)];let _0x48b6db=B(_0x5e47ad),_0x57ac12=_0x48b6db['elapsed'],_0xe33db9=_0x48b6db[_0x3e722f(0x120)],_0x526af0=_0x48b6db[_0x3e722f(0x15d)],_0x1dd57c={'hits':{},'ts':{}},_0x3d768e=J(_0x5e47ad,_0x1807ca,_0x1dd57c,_0x3d43c6),_0x5f2366=_0x361547=>{_0x1dd57c['ts'][_0x361547]=_0xe33db9();},_0x2958f1=(_0x36dda4,_0x58c809)=>{var _0x8e36ec=_0x3e722f;let _0x3e9662=_0x1dd57c['ts'][_0x58c809];if(delete _0x1dd57c['ts'][_0x58c809],_0x3e9662){let _0xc25b2=_0x57ac12(_0x3e9662,_0xe33db9());_0x3833c3(_0x3d768e(_0x8e36ec(0x137),_0x36dda4,_0x526af0(),_0x4e4a80,[_0xc25b2],_0x58c809));}},_0x55e353=_0x3c2726=>{var _0x4c18bf=_0x3e722f,_0x470830;return _0x3b6c41==='next.js'&&_0x5e47ad[_0x4c18bf(0x11b)]&&((_0x470830=_0x3c2726==null?void 0x0:_0x3c2726[_0x4c18bf(0x157)])==null?void 0x0:_0x470830[_0x4c18bf(0xf5)])&&(_0x3c2726[_0x4c18bf(0x157)][0x0]['origin']=_0x5e47ad['origin']),_0x3c2726;};_0x5e47ad['_console_ninja']={'consoleLog':(_0xb1db27,_0x4d7fde)=>{var _0x41fac5=_0x3e722f;_0x5e47ad[_0x41fac5(0xcc)]['log']['name']!==_0x41fac5(0x119)&&_0x3833c3(_0x3d768e(_0x41fac5(0xd7),_0xb1db27,_0x526af0(),_0x4e4a80,_0x4d7fde));},'consoleTrace':(_0x3d2b3f,_0x29f758)=>{var _0x3bb354=_0x3e722f,_0x24fd68,_0x565109;_0x5e47ad[_0x3bb354(0xcc)][_0x3bb354(0xd7)]['name']!==_0x3bb354(0x18e)&&((_0x565109=(_0x24fd68=_0x5e47ad['process'])==null?void 0x0:_0x24fd68['versions'])!=null&&_0x565109[_0x3bb354(0x182)]&&(_0x5e47ad[_0x3bb354(0x169)]=!0x0),_0x3833c3(_0x55e353(_0x3d768e('trace',_0x3d2b3f,_0x526af0(),_0x4e4a80,_0x29f758))));},'consoleError':(_0x2905a8,_0x5e8589)=>{var _0x404511=_0x3e722f;_0x5e47ad[_0x404511(0x169)]=!0x0,_0x3833c3(_0x55e353(_0x3d768e(_0x404511(0x16a),_0x2905a8,_0x526af0(),_0x4e4a80,_0x5e8589)));},'consoleTime':_0x2fbfbe=>{_0x5f2366(_0x2fbfbe);},'consoleTimeEnd':(_0x259732,_0x559171)=>{_0x2958f1(_0x559171,_0x259732);},'autoLog':(_0x40568e,_0x2ce346)=>{var _0x5b92d9=_0x3e722f;_0x3833c3(_0x3d768e(_0x5b92d9(0xd7),_0x2ce346,_0x526af0(),_0x4e4a80,[_0x40568e]));},'autoLogMany':(_0x382967,_0x4639f2)=>{var _0x5698ae=_0x3e722f;_0x3833c3(_0x3d768e(_0x5698ae(0xd7),_0x382967,_0x526af0(),_0x4e4a80,_0x4639f2));},'autoTrace':(_0x85edef,_0x1971fc)=>{var _0x323975=_0x3e722f;_0x3833c3(_0x55e353(_0x3d768e(_0x323975(0xad),_0x1971fc,_0x526af0(),_0x4e4a80,[_0x85edef])));},'autoTraceMany':(_0x423cb2,_0x132601)=>{var _0x429ba5=_0x3e722f;_0x3833c3(_0x55e353(_0x3d768e(_0x429ba5(0xad),_0x423cb2,_0x526af0(),_0x4e4a80,_0x132601)));},'autoTime':(_0x4093c2,_0x187089,_0x3a3847)=>{_0x5f2366(_0x3a3847);},'autoTimeEnd':(_0xd69daa,_0x4e00cb,_0x12447b)=>{_0x2958f1(_0x4e00cb,_0x12447b);},'coverage':_0x28f0a5=>{var _0x5963e3=_0x3e722f;_0x3833c3({'method':_0x5963e3(0x13e),'version':_0x3d43c6,'args':[{'id':_0x28f0a5}]});}};let _0x3833c3=H(_0x5e47ad,_0x378d13,_0x36c5af,_0x2ad400,_0x3b6c41,_0x39281c,_0xab83d7),_0x4e4a80=_0x5e47ad['_console_ninja_session'];return _0x5e47ad[_0x3e722f(0xf8)];})(globalThis,_0x2521ed(0x10f),_0x2521ed(0xb0),_0x2521ed(0xfc),_0x2521ed(0x12c),'1.0.0','1753958834429',_0x2521ed(0xc3),_0x2521ed(0x10e),'','1');");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo( /**@type{any}**/i, /**@type{any}**/...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr( /**@type{any}**/i, /**@type{any}**/...v) {
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tx( /**@type{any}**/i, /**@type{any}**/...v) {
  try {
    oo_cm().consoleError(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts( /**@type{any}**/v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te( /**@type{any}**/v, /**@type{any}**/i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/customCursor/hooks/useAnimationResetOnChange.js":
/*!*************************************************************!*\
  !*** ./src/customCursor/hooks/useAnimationResetOnChange.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAnimationResetOnChange: () => (/* binding */ useAnimationResetOnChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Resets a CSS animation by toggling a class on the referenced element
 * @param {React.RefObject} ref - The ref to the DOM element
 * @param {any} dependency - The value to watch for changes (e.g. click position)
 * @param {string} className - The class to toggle for animation reset
 */
function useAnimationResetOnChange(ref, dependency, className = "effect-wrapper") {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = ref.current;
    if (el) {
      el.classList.remove(className);
      void el.offsetWidth;
      el.classList.add(className);
    }
    // eslint-disable-next-line
  }, [ref.current, dependency]);
}

/***/ }),

/***/ "./src/customCursor/hooks/useClickPosition.js":
/*!****************************************************!*\
  !*** ./src/customCursor/hooks/useClickPosition.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClickPosition: () => (/* binding */ useClickPosition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useClickPosition = (domEl = document) => {
  const [clickPosition, setClickPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: -400,
    y: -400,
    isTop: false,
    isBottom: false,
    isLeft: false,
    isRight: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!domEl) return;
    const handleClick = e => {
      const body = document.body;
      const {
        clientX,
        clientY,
        screenX,
        screenY
      } = e;
      const {
        width,
        height
      } = body.getBoundingClientRect();
      setClickPosition({
        x: clientX,
        y: clientY,
        screenX,
        screenY,
        isTop: clientY < height / 2,
        isBottom: clientY > height / 2,
        isLeft: clientX < width / 2,
        isRight: clientX > width / 2
      });
    };
    domEl.addEventListener('click', handleClick);
    return () => {
      domEl.removeEventListener('click', handleClick);
    };
  }, [domEl]);
  return clickPosition;
};

/***/ }),

/***/ "./src/customCursor/hooks/useCursor.js":
/*!*********************************************!*\
  !*** ./src/customCursor/hooks/useCursor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCursor: () => (/* binding */ useCursor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCursor = (eventEl = window) => {
  const [cursorPosition, setCursorPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isClicking, setIsClicking] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!eventEl) return;
    const moveCursor = e => {
      let x = e.clientX;
      let y = e.clientY;
      setCursorPosition({
        x,
        y
      });
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    // if (!eventEl) return;
    eventEl.addEventListener('mousemove', moveCursor);
    eventEl.addEventListener('mousedown', handleMouseDown);
    eventEl.addEventListener('mouseup', handleMouseUp);

    // domEl.style.cursor = 'none';

    return () => {
      eventEl.removeEventListener('mousemove', moveCursor);
      eventEl.removeEventListener('mousedown', handleMouseDown);
      eventEl.removeEventListener('mouseup', handleMouseUp);
      // domEl.style.cursor = 'auto';
    };
  }, [eventEl, cursorPosition]);
  return {
    cursorPosition,
    isClicking,
    setIsClicking
  };
};

/***/ }),

/***/ "./src/customCursor/hooks/useCursorVisibility.js":
/*!*******************************************************!*\
  !*** ./src/customCursor/hooks/useCursorVisibility.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCursorVisibility = (delay = 2000) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Set visible if window has focus on mount
    if (document.hasFocus()) {
      setIsVisible(true);
    }
    const handleMouseEnter = () => {
      clearTimeout(timer.current);
      setIsVisible(true);
    };
    const handleMouseLeave = () => {
      timer.current = setTimeout(() => setIsVisible(false), delay);
    };
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer.current);
    };
  }, [delay]);
  return isVisible;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCursorVisibility);

/***/ }),

/***/ "./src/customCursor/hooks/useFilterCursorData.js":
/*!*******************************************************!*\
  !*** ./src/customCursor/hooks/useFilterCursorData.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFilterCursorData: () => (/* binding */ useFilterCursorData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFilterCursorData = (pageData, globalData) => {
  const [cursorData, setCursorData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pageData || globalData) {
      // If pageData is empty, return globalData
      if (!pageData) {
        setCursorData(globalData);
        return;
      }

      // If globalData is empty, return pageData
      if (!globalData) {
        setCursorData(pageData);
        return;
      }

      // Both data exist, apply filtering logic
      const filteredData = {
        ...globalData,
        ...pageData,
        shape: pageData?.shape?.type === '' || !pageData?.shape ? globalData?.shape : pageData?.shape,
        effect: pageData?.effect?.type === '' || !pageData?.effect ? globalData?.effect : pageData?.effect
      };
      setCursorData(filteredData);
    }
  }, [pageData, globalData]);
  return cursorData;
};

/***/ }),

/***/ "./src/customCursor/utils/common.js":
/*!******************************************!*\
  !*** ./src/customCursor/utils/common.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glitchCursorDefaultValues: () => (/* binding */ glitchCursorDefaultValues),
/* harmony export */   isSet: () => (/* binding */ isSet)
/* harmony export */ });
const glitchCursorDefaultValues = {
  digital: {
    glitchMode: "digital",
    intensity: "high",
    speed: "fast",
    blendMode: "multiply",
    size: 20,
    primaryColor: "#ff4040",
    secondaryColor: "#40ff40",
    tertiaryColor: "#4040ff"
  },
  analog: {
    glitchMode: "analog",
    intensity: "medium",
    speed: "slow",
    blendMode: "normal",
    size: 35,
    primaryColor: "#ffffff",
    secondaryColor: "#ff4444",
    tertiaryColor: "#4444ff"
  },
  cyberpunk: {
    glitchMode: "cyberpunk",
    intensity: "medium",
    speed: "medium",
    size: 30,
    primaryColor: "#ff0080",
    secondaryColor: "#00ffff",
    tertiaryColor: "#ff0000"
  },
  matrix: {
    glitchMode: "matrix",
    intensity: "high",
    speed: "fast",
    size: 25,
    primaryColor: "#00ff00",
    secondaryColor: "#40ff40",
    tertiaryColor: "#80ff80"
  }
};
const isSet = v => v !== undefined && v !== null && v !== '';

/***/ }),

/***/ "./src/customCursor/utils/data.js":
/*!****************************************!*\
  !*** ./src/customCursor/utils/data.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cursorClass: () => (/* binding */ cursorClass),
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
const prefix = 'bBlocks-cursor';
const cursorClass = 'bBlocks-custom-cursor';

/***/ }),

/***/ "./src/customCursor/utils/useWPAjax.js":
/*!*********************************************!*\
  !*** ./src/customCursor/utils/useWPAjax.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWPAjax = (action, params = {}, set = false) => {
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  if (!wp.ajax) {
    // eslint-disable-next-line no-console
    /* eslint-disable */
    console.error(...oo_tx(`367712668_11_4_11_55_11`, 'Please use wp-util as a dependency'));
    return;
  }
  const sendRequest = (payload = {}) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);
    wp.ajax.post(action, {
      ...params,
      ...payload
    }).done(res => {
      setIsLoading(false);
      setData(res);
    }).fail(error => {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    });
  };
  const request = async (payload = {}) => {
    sendRequest(payload);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!set) {
      sendRequest(params);
    }
  }, []);
  return {
    data,
    saveData: request,
    refetch: request,
    isLoading,
    isError,
    error
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWPAjax);
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2521ed=_0x22d4;(function(_0x15e824,_0x52e4de){var _0x3fcd51=_0x22d4,_0x1510e4=_0x15e824();while(!![]){try{var _0x33050d=parseInt(_0x3fcd51(0x127))/0x1*(parseInt(_0x3fcd51(0xb5))/0x2)+parseInt(_0x3fcd51(0x11c))/0x3*(-parseInt(_0x3fcd51(0x180))/0x4)+parseInt(_0x3fcd51(0xd2))/0x5+parseInt(_0x3fcd51(0x151))/0x6*(-parseInt(_0x3fcd51(0x164))/0x7)+parseInt(_0x3fcd51(0x161))/0x8+-parseInt(_0x3fcd51(0xd3))/0x9*(parseInt(_0x3fcd51(0x108))/0xa)+parseInt(_0x3fcd51(0x129))/0xb;if(_0x33050d===_0x52e4de)break;else _0x1510e4['push'](_0x1510e4['shift']());}catch(_0x585a27){_0x1510e4['push'](_0x1510e4['shift']());}}}(_0x1bae,0xde4fd));var G=Object[_0x2521ed(0x177)],V=Object['defineProperty'],ee=Object[_0x2521ed(0xd8)],te=Object[_0x2521ed(0x15e)],ne=Object['getPrototypeOf'],re=Object['prototype'][_0x2521ed(0x94)],ie=(_0x15a493,_0x1da4e5,_0x38e998,_0x191789)=>{var _0x5aa4da=_0x2521ed;if(_0x1da4e5&&typeof _0x1da4e5==_0x5aa4da(0x110)||typeof _0x1da4e5==_0x5aa4da(0x144)){for(let _0x1898c9 of te(_0x1da4e5))!re[_0x5aa4da(0xe1)](_0x15a493,_0x1898c9)&&_0x1898c9!==_0x38e998&&V(_0x15a493,_0x1898c9,{'get':()=>_0x1da4e5[_0x1898c9],'enumerable':!(_0x191789=ee(_0x1da4e5,_0x1898c9))||_0x191789[_0x5aa4da(0xa8)]});}return _0x15a493;},j=(_0x34eccf,_0x3d547c,_0x129665)=>(_0x129665=_0x34eccf!=null?G(ne(_0x34eccf)):{},ie(_0x3d547c||!_0x34eccf||!_0x34eccf[_0x2521ed(0x160)]?V(_0x129665,_0x2521ed(0x106),{'value':_0x34eccf,'enumerable':!0x0}):_0x129665,_0x34eccf)),q=class{constructor(_0x361ce0,_0xcdc76,_0x1861eb,_0x135c38,_0x56d085,_0x24e2d1){var _0x4a32cf=_0x2521ed,_0x36205b,_0x176b2e,_0x1e4531,_0x247653;this[_0x4a32cf(0x167)]=_0x361ce0,this[_0x4a32cf(0xea)]=_0xcdc76,this[_0x4a32cf(0x189)]=_0x1861eb,this[_0x4a32cf(0x13b)]=_0x135c38,this[_0x4a32cf(0x9d)]=_0x56d085,this[_0x4a32cf(0x14f)]=_0x24e2d1,this[_0x4a32cf(0x18c)]=!0x0,this[_0x4a32cf(0x185)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0x4a32cf(0xf1)]=((_0x176b2e=(_0x36205b=_0x361ce0[_0x4a32cf(0x150)])==null?void 0x0:_0x36205b[_0x4a32cf(0x113)])==null?void 0x0:_0x176b2e['NEXT_RUNTIME'])===_0x4a32cf(0x107),this[_0x4a32cf(0x114)]=!((_0x247653=(_0x1e4531=this[_0x4a32cf(0x167)][_0x4a32cf(0x150)])==null?void 0x0:_0x1e4531['versions'])!=null&&_0x247653[_0x4a32cf(0x182)])&&!this[_0x4a32cf(0xf1)],this[_0x4a32cf(0x13c)]=null,this['_connectAttemptCount']=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x4a32cf(0x138)]=_0x4a32cf(0x90),this[_0x4a32cf(0x17d)]=(this[_0x4a32cf(0x114)]?_0x4a32cf(0xcb):_0x4a32cf(0x13f))+this[_0x4a32cf(0x138)];}async['getWebSocketClass'](){var _0x3c3a4a=_0x2521ed,_0x3f7c0f,_0x407d5a;if(this[_0x3c3a4a(0x13c)])return this[_0x3c3a4a(0x13c)];let _0x261630;if(this['_inBrowser']||this[_0x3c3a4a(0xf1)])_0x261630=this[_0x3c3a4a(0x167)][_0x3c3a4a(0xe7)];else{if((_0x3f7c0f=this[_0x3c3a4a(0x167)][_0x3c3a4a(0x150)])!=null&&_0x3f7c0f[_0x3c3a4a(0x11a)])_0x261630=(_0x407d5a=this['global']['process'])==null?void 0x0:_0x407d5a[_0x3c3a4a(0x11a)];else try{let _0x1bc4c6=await import(_0x3c3a4a(0x16c));_0x261630=(await import((await import(_0x3c3a4a(0xdf)))[_0x3c3a4a(0xc4)](_0x1bc4c6[_0x3c3a4a(0x148)](this[_0x3c3a4a(0x13b)],_0x3c3a4a(0x12f)))[_0x3c3a4a(0x12a)]()))[_0x3c3a4a(0x106)];}catch{try{_0x261630=require(require('path')[_0x3c3a4a(0x148)](this[_0x3c3a4a(0x13b)],'ws'));}catch{throw new Error(_0x3c3a4a(0xa0));}}}return this['_WebSocketClass']=_0x261630,_0x261630;}['_connectToHostNow'](){var _0x24affd=_0x2521ed;this[_0x24affd(0xd4)]||this[_0x24affd(0xb3)]||this[_0x24affd(0x166)]>=this[_0x24affd(0xb2)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this[_0x24affd(0x166)]++,this[_0x24affd(0xaa)]=new Promise((_0x1c13ba,_0x542a06)=>{var _0x3c2948=_0x24affd;this[_0x3c2948(0x16d)]()[_0x3c2948(0x121)](_0x14d8ea=>{var _0x93c003=_0x3c2948;let _0x375890=new _0x14d8ea(_0x93c003(0x12b)+(!this[_0x93c003(0x114)]&&this[_0x93c003(0x9d)]?_0x93c003(0x18d):this[_0x93c003(0xea)])+':'+this[_0x93c003(0x189)]);_0x375890[_0x93c003(0x128)]=()=>{var _0x5756af=_0x93c003;this['_allowedToSend']=!0x1,this[_0x5756af(0x171)](_0x375890),this[_0x5756af(0x10c)](),_0x542a06(new Error('logger\\x20websocket\\x20error'));},_0x375890[_0x93c003(0xc6)]=()=>{var _0x49cc48=_0x93c003;this[_0x49cc48(0x114)]||_0x375890[_0x49cc48(0x140)]&&_0x375890[_0x49cc48(0x140)]['unref']&&_0x375890[_0x49cc48(0x140)][_0x49cc48(0xf3)](),_0x1c13ba(_0x375890);},_0x375890[_0x93c003(0x187)]=()=>{var _0x23463a=_0x93c003;this[_0x23463a(0x185)]=!0x0,this[_0x23463a(0x171)](_0x375890),this['_attemptToReconnectShortly']();},_0x375890[_0x93c003(0xc9)]=_0x75a52e=>{var _0x3951ee=_0x93c003;try{if(!(_0x75a52e!=null&&_0x75a52e[_0x3951ee(0xa3)])||!this[_0x3951ee(0x14f)])return;let _0x78d515=JSON[_0x3951ee(0x111)](_0x75a52e[_0x3951ee(0xa3)]);this[_0x3951ee(0x14f)](_0x78d515[_0x3951ee(0xec)],_0x78d515[_0x3951ee(0x157)],this['global'],this[_0x3951ee(0x114)]);}catch{}};})[_0x3c2948(0x121)](_0x51dfb1=>(this['_connected']=!0x0,this[_0x3c2948(0xd4)]=!0x1,this[_0x3c2948(0x185)]=!0x1,this[_0x3c2948(0x18c)]=!0x0,this['_connectAttemptCount']=0x0,_0x51dfb1))[_0x3c2948(0xc0)](_0xb4565c=>(this[_0x3c2948(0xb3)]=!0x1,this[_0x3c2948(0xd4)]=!0x1,console[_0x3c2948(0x184)](_0x3c2948(0xb4)+this[_0x3c2948(0x138)]),_0x542a06(new Error(_0x3c2948(0xdc)+(_0xb4565c&&_0xb4565c['message'])))));}));}[_0x2521ed(0x171)](_0x2bbff1){var _0x7a7224=_0x2521ed;this[_0x7a7224(0xb3)]=!0x1,this[_0x7a7224(0xd4)]=!0x1;try{_0x2bbff1['onclose']=null,_0x2bbff1[_0x7a7224(0x128)]=null,_0x2bbff1['onopen']=null;}catch{}try{_0x2bbff1[_0x7a7224(0xc2)]<0x2&&_0x2bbff1[_0x7a7224(0x116)]();}catch{}}[_0x2521ed(0x10c)](){var _0x822240=_0x2521ed;clearTimeout(this[_0x822240(0x181)]),!(this[_0x822240(0x166)]>=this[_0x822240(0xb2)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x572ab4=_0x822240,_0x59a299;this[_0x572ab4(0xb3)]||this['_connecting']||(this[_0x572ab4(0x16e)](),(_0x59a299=this[_0x572ab4(0xaa)])==null||_0x59a299[_0x572ab4(0xc0)](()=>this[_0x572ab4(0x10c)]()));},0x1f4),this[_0x822240(0x181)]['unref']&&this[_0x822240(0x181)][_0x822240(0xf3)]());}async[_0x2521ed(0xbd)](_0x4b15cd){var _0x362d6e=_0x2521ed;try{if(!this['_allowedToSend'])return;this[_0x362d6e(0x185)]&&this[_0x362d6e(0x16e)](),(await this['_ws'])[_0x362d6e(0xbd)](JSON[_0x362d6e(0xd5)](_0x4b15cd));}catch(_0x152473){this[_0x362d6e(0xbf)]?console[_0x362d6e(0x184)](this[_0x362d6e(0x17d)]+':\\x20'+(_0x152473&&_0x152473['message'])):(this[_0x362d6e(0xbf)]=!0x0,console[_0x362d6e(0x184)](this['_sendErrorMessage']+':\\x20'+(_0x152473&&_0x152473[_0x362d6e(0x12d)]),_0x4b15cd)),this['_allowedToSend']=!0x1,this[_0x362d6e(0x10c)]();}}};function _0x1bae(){var _0x475517=['unknown','_addFunctionsNode','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','replace','parent','data','[object\\x20Set]','autoExpandPreviousObjects','_setNodeExpressionPath','value','enumerable','autoExpandPropertyCount','_ws','_setNodeQueryPath','next.js','trace','_p_length','depth','5186','push','_maxConnectAttemptCount','_connected','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','163798kPEYdI','expressionsToEvaluate','string','current','noFunctions','_addProperty','_additionalMetadata','funcName','send','_p_name','_extendedWarning','catch','_consoleNinjaAllowedToStart','readyState',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Murad-Wahid\",\"192.168.10.116\"],'pathToFileURL','bigint','onopen','Boolean','_treeNodePropertiesBeforeFullValue','onmessage','[object\\x20Array]','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','console','elements','_getOwnPropertySymbols','totalStrLength','_isArray','Map','7861370iASdlg','2079585kwXuMV','_connecting','stringify','_propertyName','log','getOwnPropertyDescriptor','RegExp','_treeNodePropertiesAfterFullValue','resolveGetters','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','hrtime','props','url','level','call','map','_isPrimitiveWrapperType','_blacklistedProperty','[object\\x20BigInt]','match','WebSocket','serialize','autoExpandMaxDepth','host','strLength','method','_isMap','Number','unshift','versions','_inNextEdge','_Symbol','unref','_isPrimitiveType','length','_numberRegExp','_setNodeId','_console_ninja','constructor','_console_ninja_session','rootExpression',\"c:\\\\Users\\\\Murad Wahid\\\\.cursor\\\\extensions\\\\wallabyjs.console-ninja-1.0.460\\\\node_modules\",'angular','null','slice','Symbol','bind','index','array','pop','boolean','default','edge','10jggNHF','astro','_p_','NEXT_RUNTIME','_attemptToReconnectShortly','capped','','127.0.0.1','object','parse','_setNodeExpandableState','env','_inBrowser','allStrLength','close','remix','_isNegativeZero','disabledLog','_WebSocket','origin','24jBCuxm','date','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','count','timeStamp','then','_addObjectProperty','NEGATIVE_INFINITY','_addLoadNode','nan','symbol','1lYcQod','onerror','13530121SEjCVL','toString','ws://','webpack','message','location','ws/index.js','_regExpToString','setter','[object\\x20Map]','_keyStrRegExp','isExpressionToEvaluate','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','Error','time','_webSocketErrorDocsLink','includes','root_exp','nodeModules','_WebSocketClass','get','coverage','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_socket','prototype','reduceLimits','_dateToString','function','_isSet','String','_objectToString','join','_hasMapOnItsPath','_setNodeLabel','reload','substr','endsWith','autoExpandLimit','eventReceivedCallback','process','4201998ehWVyE','performance','stackTraceLimit','test','set','autoExpand','args','perf_hooks','_getOwnPropertyDescriptor','_capIfString','_getOwnPropertyNames','valueOf','now','getOwnPropertyNames','...','__es'+'Module','2697880RnkQZv','type','stack','7ePNIPb','fromCharCode','_connectAttemptCount','global','negativeZero','_ninjaIgnoreNextError','error','_sortProps','path','getWebSocketClass','_connectToHostNow','_setNodePermissions','_undefined','_disposeWebsocket','cappedProps','negativeInfinity','sortProps','HTMLAllCollection','indexOf','create','_hasSymbolPropertyOnItsPath','charAt','hits','name','_cleanNode','_sendErrorMessage','_property','_type','689716KYriyM','_reconnectTimeout','node','getter','warn','_allowedToConnectOnSend','Set','onclose','number','port','root_exp_id','getOwnPropertySymbols','_allowedToSend','gateway.docker.internal','disabledTrace','undefined','https://tinyurl.com/37x8b79t','expId','forEach','_processTreeNodeResult','hasOwnProperty','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','POSITIVE_INFINITY','isArray','[object\\x20Date]','_HTMLAllCollection','concat','hostname','\\x20browser','dockerizedApp'];_0x1bae=function(){return _0x475517;};return _0x1bae();}function H(_0x5ac5d3,_0x5a024c,_0x41428f,_0x2b7c5f,_0x32bd1c,_0x410870,_0x173eb4,_0x411518=oe){var _0x35ca23=_0x2521ed;let _0x2973b8=_0x41428f['split'](',')['map'](_0x4ce34d=>{var _0x54e87f=_0x22d4,_0x4bc88c,_0x1896c3,_0x4bf3fc,_0x1b5e14;try{if(!_0x5ac5d3[_0x54e87f(0xfa)]){let _0x2f2f7f=((_0x1896c3=(_0x4bc88c=_0x5ac5d3[_0x54e87f(0x150)])==null?void 0x0:_0x4bc88c[_0x54e87f(0xf0)])==null?void 0x0:_0x1896c3['node'])||((_0x1b5e14=(_0x4bf3fc=_0x5ac5d3[_0x54e87f(0x150)])==null?void 0x0:_0x4bf3fc['env'])==null?void 0x0:_0x1b5e14[_0x54e87f(0x10b)])==='edge';(_0x32bd1c===_0x54e87f(0xac)||_0x32bd1c===_0x54e87f(0x117)||_0x32bd1c===_0x54e87f(0x109)||_0x32bd1c===_0x54e87f(0xfd))&&(_0x32bd1c+=_0x2f2f7f?'\\x20server':_0x54e87f(0x9c)),_0x5ac5d3[_0x54e87f(0xfa)]={'id':+new Date(),'tool':_0x32bd1c},_0x173eb4&&_0x32bd1c&&!_0x2f2f7f&&console[_0x54e87f(0xd7)](_0x54e87f(0x135)+(_0x32bd1c[_0x54e87f(0x179)](0x0)['toUpperCase']()+_0x32bd1c[_0x54e87f(0x14c)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x54e87f(0x11e));}let _0x38266e=new q(_0x5ac5d3,_0x5a024c,_0x4ce34d,_0x2b7c5f,_0x410870,_0x411518);return _0x38266e[_0x54e87f(0xbd)][_0x54e87f(0x101)](_0x38266e);}catch(_0x605813){return console[_0x54e87f(0x184)](_0x54e87f(0x95),_0x605813&&_0x605813[_0x54e87f(0x12d)]),()=>{};}});return _0x2cbe92=>_0x2973b8[_0x35ca23(0x92)](_0x4df820=>_0x4df820(_0x2cbe92));}function oe(_0x4723a9,_0xdcafa3,_0x18cb5f,_0x306248){var _0x7974a6=_0x2521ed;_0x306248&&_0x4723a9===_0x7974a6(0x14b)&&_0x18cb5f[_0x7974a6(0x12e)][_0x7974a6(0x14b)]();}function B(_0x49df36){var _0x8c4455=_0x2521ed,_0x1aef62,_0x33ca0f;let _0x504d4d=function(_0x3e4d21,_0x3119a9){return _0x3119a9-_0x3e4d21;},_0x4e68dc;if(_0x49df36[_0x8c4455(0x152)])_0x4e68dc=function(){return _0x49df36['performance']['now']();};else{if(_0x49df36[_0x8c4455(0x150)]&&_0x49df36[_0x8c4455(0x150)]['hrtime']&&((_0x33ca0f=(_0x1aef62=_0x49df36['process'])==null?void 0x0:_0x1aef62[_0x8c4455(0x113)])==null?void 0x0:_0x33ca0f[_0x8c4455(0x10b)])!==_0x8c4455(0x107))_0x4e68dc=function(){var _0x1f5058=_0x8c4455;return _0x49df36[_0x1f5058(0x150)][_0x1f5058(0xdd)]();},_0x504d4d=function(_0x4e233c,_0x163bff){return 0x3e8*(_0x163bff[0x0]-_0x4e233c[0x0])+(_0x163bff[0x1]-_0x4e233c[0x1])/0xf4240;};else try{let {performance:_0x92d690}=require(_0x8c4455(0x158));_0x4e68dc=function(){return _0x92d690['now']();};}catch{_0x4e68dc=function(){return+new Date();};}}return{'elapsed':_0x504d4d,'timeStamp':_0x4e68dc,'now':()=>Date[_0x8c4455(0x15d)]()};}function _0x22d4(_0x12edb4,_0x271789){var _0x1bae16=_0x1bae();return _0x22d4=function(_0x22d4de,_0x5d435d){_0x22d4de=_0x22d4de-0x8f;var _0x5cf399=_0x1bae16[_0x22d4de];return _0x5cf399;},_0x22d4(_0x12edb4,_0x271789);}function X(_0x353b15,_0x1aa730,_0x1de36e){var _0x290fd=_0x2521ed,_0x2cd4ae,_0x424619,_0x4f2a6c,_0x1d9986,_0x230056;if(_0x353b15[_0x290fd(0xc1)]!==void 0x0)return _0x353b15[_0x290fd(0xc1)];let _0x542a02=((_0x424619=(_0x2cd4ae=_0x353b15['process'])==null?void 0x0:_0x2cd4ae[_0x290fd(0xf0)])==null?void 0x0:_0x424619[_0x290fd(0x182)])||((_0x1d9986=(_0x4f2a6c=_0x353b15[_0x290fd(0x150)])==null?void 0x0:_0x4f2a6c[_0x290fd(0x113)])==null?void 0x0:_0x1d9986[_0x290fd(0x10b)])==='edge';function _0x394a2b(_0x45bd35){var _0x5eb749=_0x290fd;if(_0x45bd35['startsWith']('/')&&_0x45bd35[_0x5eb749(0x14d)]('/')){let _0x21a10f=new RegExp(_0x45bd35[_0x5eb749(0xff)](0x1,-0x1));return _0xe0fca5=>_0x21a10f[_0x5eb749(0x154)](_0xe0fca5);}else{if(_0x45bd35[_0x5eb749(0x139)]('*')||_0x45bd35[_0x5eb749(0x139)]('?')){let _0x95c811=new RegExp('^'+_0x45bd35['replace'](/\\./g,String[_0x5eb749(0x165)](0x5c)+'.')['replace'](/\\*/g,'.*')['replace'](/\\?/g,'.')+String[_0x5eb749(0x165)](0x24));return _0x40ec94=>_0x95c811[_0x5eb749(0x154)](_0x40ec94);}else return _0x3f24dd=>_0x3f24dd===_0x45bd35;}}let _0x2ca7df=_0x1aa730[_0x290fd(0xe2)](_0x394a2b);return _0x353b15[_0x290fd(0xc1)]=_0x542a02||!_0x1aa730,!_0x353b15[_0x290fd(0xc1)]&&((_0x230056=_0x353b15[_0x290fd(0x12e)])==null?void 0x0:_0x230056['hostname'])&&(_0x353b15[_0x290fd(0xc1)]=_0x2ca7df['some'](_0x23fe2b=>_0x23fe2b(_0x353b15[_0x290fd(0x12e)][_0x290fd(0x9b)]))),_0x353b15['_consoleNinjaAllowedToStart'];}function J(_0x1c6eb0,_0x552919,_0x51de18,_0x533c9c){var _0xd5a59d=_0x2521ed;_0x1c6eb0=_0x1c6eb0,_0x552919=_0x552919,_0x51de18=_0x51de18,_0x533c9c=_0x533c9c;let _0x1136ef=B(_0x1c6eb0),_0x1a1b80=_0x1136ef['elapsed'],_0x57d945=_0x1136ef[_0xd5a59d(0x120)];class _0x4a2137{constructor(){var _0x20a872=_0xd5a59d;this[_0x20a872(0x133)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x20a872(0xf6)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x20a872(0x170)]=_0x1c6eb0[_0x20a872(0x8f)],this[_0x20a872(0x99)]=_0x1c6eb0['HTMLAllCollection'],this[_0x20a872(0x159)]=Object[_0x20a872(0xd8)],this[_0x20a872(0x15b)]=Object[_0x20a872(0x15e)],this[_0x20a872(0xf2)]=_0x1c6eb0[_0x20a872(0x100)],this[_0x20a872(0x130)]=RegExp[_0x20a872(0x141)][_0x20a872(0x12a)],this['_dateToString']=Date[_0x20a872(0x141)][_0x20a872(0x12a)];}[_0xd5a59d(0xe8)](_0x19e7d2,_0xdeff97,_0x1b41e0,_0x5a8d18){var _0x369a40=_0xd5a59d,_0x4e0a0b=this,_0x207418=_0x1b41e0[_0x369a40(0x156)];function _0x356ab7(_0x1764a0,_0x28cb69,_0x5cd086){var _0x2e85e4=_0x369a40;_0x28cb69[_0x2e85e4(0x162)]=_0x2e85e4(0x9e),_0x28cb69[_0x2e85e4(0x16a)]=_0x1764a0[_0x2e85e4(0x12d)],_0x1f9073=_0x5cd086[_0x2e85e4(0x182)][_0x2e85e4(0xb8)],_0x5cd086[_0x2e85e4(0x182)][_0x2e85e4(0xb8)]=_0x28cb69,_0x4e0a0b[_0x2e85e4(0xc8)](_0x28cb69,_0x5cd086);}let _0x371ae5;_0x1c6eb0[_0x369a40(0xcc)]&&(_0x371ae5=_0x1c6eb0[_0x369a40(0xcc)][_0x369a40(0x16a)],_0x371ae5&&(_0x1c6eb0['console'][_0x369a40(0x16a)]=function(){}));try{try{_0x1b41e0['level']++,_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0['autoExpandPreviousObjects'][_0x369a40(0xb1)](_0xdeff97);var _0x1b2cf8,_0x5634a8,_0x24aca3,_0x524893,_0x2a7853=[],_0x3725f9=[],_0x1b95d6,_0x5f3857=this[_0x369a40(0x17f)](_0xdeff97),_0x40dc89=_0x5f3857===_0x369a40(0x103),_0x3a0f81=!0x1,_0x3e6606=_0x5f3857===_0x369a40(0x144),_0x12c80b=this[_0x369a40(0xf4)](_0x5f3857),_0x400804=this[_0x369a40(0xe3)](_0x5f3857),_0x4a9776=_0x12c80b||_0x400804,_0x5335ea={},_0x3502e7=0x0,_0x2885e3=!0x1,_0x1f9073,_0x318e18=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x1b41e0[_0x369a40(0xaf)]){if(_0x40dc89){if(_0x5634a8=_0xdeff97[_0x369a40(0xf5)],_0x5634a8>_0x1b41e0['elements']){for(_0x24aca3=0x0,_0x524893=_0x1b41e0['elements'],_0x1b2cf8=_0x24aca3;_0x1b2cf8<_0x524893;_0x1b2cf8++)_0x3725f9['push'](_0x4e0a0b[_0x369a40(0xba)](_0x2a7853,_0xdeff97,_0x5f3857,_0x1b2cf8,_0x1b41e0));_0x19e7d2['cappedElements']=!0x0;}else{for(_0x24aca3=0x0,_0x524893=_0x5634a8,_0x1b2cf8=_0x24aca3;_0x1b2cf8<_0x524893;_0x1b2cf8++)_0x3725f9[_0x369a40(0xb1)](_0x4e0a0b[_0x369a40(0xba)](_0x2a7853,_0xdeff97,_0x5f3857,_0x1b2cf8,_0x1b41e0));}_0x1b41e0['autoExpandPropertyCount']+=_0x3725f9[_0x369a40(0xf5)];}if(!(_0x5f3857==='null'||_0x5f3857===_0x369a40(0x8f))&&!_0x12c80b&&_0x5f3857!==_0x369a40(0x146)&&_0x5f3857!=='Buffer'&&_0x5f3857!=='bigint'){var _0x9b164d=_0x5a8d18[_0x369a40(0xde)]||_0x1b41e0[_0x369a40(0xde)];if(this['_isSet'](_0xdeff97)?(_0x1b2cf8=0x0,_0xdeff97[_0x369a40(0x92)](function(_0x2e4c83){var _0xc34cf5=_0x369a40;if(_0x3502e7++,_0x1b41e0['autoExpandPropertyCount']++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;return;}if(!_0x1b41e0['isExpressionToEvaluate']&&_0x1b41e0[_0xc34cf5(0x156)]&&_0x1b41e0[_0xc34cf5(0xa9)]>_0x1b41e0[_0xc34cf5(0x14e)]){_0x2885e3=!0x0;return;}_0x3725f9[_0xc34cf5(0xb1)](_0x4e0a0b[_0xc34cf5(0xba)](_0x2a7853,_0xdeff97,_0xc34cf5(0x186),_0x1b2cf8++,_0x1b41e0,function(_0x29d796){return function(){return _0x29d796;};}(_0x2e4c83)));})):this[_0x369a40(0xed)](_0xdeff97)&&_0xdeff97[_0x369a40(0x92)](function(_0xfea0fe,_0xa14803){var _0x32aa72=_0x369a40;if(_0x3502e7++,_0x1b41e0[_0x32aa72(0xa9)]++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;return;}if(!_0x1b41e0['isExpressionToEvaluate']&&_0x1b41e0[_0x32aa72(0x156)]&&_0x1b41e0['autoExpandPropertyCount']>_0x1b41e0['autoExpandLimit']){_0x2885e3=!0x0;return;}var _0x3e871d=_0xa14803['toString']();_0x3e871d['length']>0x64&&(_0x3e871d=_0x3e871d[_0x32aa72(0xff)](0x0,0x64)+_0x32aa72(0x15f)),_0x3725f9[_0x32aa72(0xb1)](_0x4e0a0b[_0x32aa72(0xba)](_0x2a7853,_0xdeff97,_0x32aa72(0xd1),_0x3e871d,_0x1b41e0,function(_0x4b9377){return function(){return _0x4b9377;};}(_0xfea0fe)));}),!_0x3a0f81){try{for(_0x1b95d6 in _0xdeff97)if(!(_0x40dc89&&_0x318e18[_0x369a40(0x154)](_0x1b95d6))&&!this[_0x369a40(0xe4)](_0xdeff97,_0x1b95d6,_0x1b41e0)){if(_0x3502e7++,_0x1b41e0[_0x369a40(0xa9)]++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;break;}if(!_0x1b41e0[_0x369a40(0x134)]&&_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0[_0x369a40(0xa9)]>_0x1b41e0['autoExpandLimit']){_0x2885e3=!0x0;break;}_0x3725f9[_0x369a40(0xb1)](_0x4e0a0b['_addObjectProperty'](_0x2a7853,_0x5335ea,_0xdeff97,_0x5f3857,_0x1b95d6,_0x1b41e0));}}catch{}if(_0x5335ea[_0x369a40(0xae)]=!0x0,_0x3e6606&&(_0x5335ea[_0x369a40(0xbe)]=!0x0),!_0x2885e3){var _0x3b6b3a=[][_0x369a40(0x9a)](this[_0x369a40(0x15b)](_0xdeff97))['concat'](this[_0x369a40(0xce)](_0xdeff97));for(_0x1b2cf8=0x0,_0x5634a8=_0x3b6b3a[_0x369a40(0xf5)];_0x1b2cf8<_0x5634a8;_0x1b2cf8++)if(_0x1b95d6=_0x3b6b3a[_0x1b2cf8],!(_0x40dc89&&_0x318e18[_0x369a40(0x154)](_0x1b95d6['toString']()))&&!this[_0x369a40(0xe4)](_0xdeff97,_0x1b95d6,_0x1b41e0)&&!_0x5335ea[_0x369a40(0x10a)+_0x1b95d6[_0x369a40(0x12a)]()]){if(_0x3502e7++,_0x1b41e0[_0x369a40(0xa9)]++,_0x3502e7>_0x9b164d){_0x2885e3=!0x0;break;}if(!_0x1b41e0[_0x369a40(0x134)]&&_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0[_0x369a40(0xa9)]>_0x1b41e0[_0x369a40(0x14e)]){_0x2885e3=!0x0;break;}_0x3725f9[_0x369a40(0xb1)](_0x4e0a0b[_0x369a40(0x122)](_0x2a7853,_0x5335ea,_0xdeff97,_0x5f3857,_0x1b95d6,_0x1b41e0));}}}}}if(_0x19e7d2['type']=_0x5f3857,_0x4a9776?(_0x19e7d2['value']=_0xdeff97[_0x369a40(0x15c)](),this[_0x369a40(0x15a)](_0x5f3857,_0x19e7d2,_0x1b41e0,_0x5a8d18)):_0x5f3857===_0x369a40(0x11d)?_0x19e7d2[_0x369a40(0xa7)]=this[_0x369a40(0x143)][_0x369a40(0xe1)](_0xdeff97):_0x5f3857===_0x369a40(0xc5)?_0x19e7d2[_0x369a40(0xa7)]=_0xdeff97[_0x369a40(0x12a)]():_0x5f3857===_0x369a40(0xd9)?_0x19e7d2[_0x369a40(0xa7)]=this[_0x369a40(0x130)]['call'](_0xdeff97):_0x5f3857==='symbol'&&this['_Symbol']?_0x19e7d2['value']=this[_0x369a40(0xf2)][_0x369a40(0x141)][_0x369a40(0x12a)][_0x369a40(0xe1)](_0xdeff97):!_0x1b41e0[_0x369a40(0xaf)]&&!(_0x5f3857===_0x369a40(0xfe)||_0x5f3857==='undefined')&&(delete _0x19e7d2[_0x369a40(0xa7)],_0x19e7d2['capped']=!0x0),_0x2885e3&&(_0x19e7d2[_0x369a40(0x172)]=!0x0),_0x1f9073=_0x1b41e0[_0x369a40(0x182)][_0x369a40(0xb8)],_0x1b41e0[_0x369a40(0x182)][_0x369a40(0xb8)]=_0x19e7d2,this['_treeNodePropertiesBeforeFullValue'](_0x19e7d2,_0x1b41e0),_0x3725f9['length']){for(_0x1b2cf8=0x0,_0x5634a8=_0x3725f9['length'];_0x1b2cf8<_0x5634a8;_0x1b2cf8++)_0x3725f9[_0x1b2cf8](_0x1b2cf8);}_0x2a7853['length']&&(_0x19e7d2['props']=_0x2a7853);}catch(_0x43255c){_0x356ab7(_0x43255c,_0x19e7d2,_0x1b41e0);}this[_0x369a40(0xbb)](_0xdeff97,_0x19e7d2),this['_treeNodePropertiesAfterFullValue'](_0x19e7d2,_0x1b41e0),_0x1b41e0[_0x369a40(0x182)][_0x369a40(0xb8)]=_0x1f9073,_0x1b41e0[_0x369a40(0xe0)]--,_0x1b41e0[_0x369a40(0x156)]=_0x207418,_0x1b41e0[_0x369a40(0x156)]&&_0x1b41e0['autoExpandPreviousObjects'][_0x369a40(0x104)]();}finally{_0x371ae5&&(_0x1c6eb0['console'][_0x369a40(0x16a)]=_0x371ae5);}return _0x19e7d2;}['_getOwnPropertySymbols'](_0x47571d){var _0x1b79d4=_0xd5a59d;return Object[_0x1b79d4(0x18b)]?Object[_0x1b79d4(0x18b)](_0x47571d):[];}[_0xd5a59d(0x145)](_0x2365a1){var _0x95c97b=_0xd5a59d;return!!(_0x2365a1&&_0x1c6eb0[_0x95c97b(0x186)]&&this[_0x95c97b(0x147)](_0x2365a1)===_0x95c97b(0xa4)&&_0x2365a1['forEach']);}[_0xd5a59d(0xe4)](_0x13f89c,_0x154bef,_0x43a2af){return _0x43a2af['noFunctions']?typeof _0x13f89c[_0x154bef]=='function':!0x1;}[_0xd5a59d(0x17f)](_0x40d886){var _0x2b5971=_0xd5a59d,_0x508ff0='';return _0x508ff0=typeof _0x40d886,_0x508ff0===_0x2b5971(0x110)?this[_0x2b5971(0x147)](_0x40d886)==='[object\\x20Array]'?_0x508ff0=_0x2b5971(0x103):this[_0x2b5971(0x147)](_0x40d886)===_0x2b5971(0x98)?_0x508ff0=_0x2b5971(0x11d):this['_objectToString'](_0x40d886)===_0x2b5971(0xe5)?_0x508ff0='bigint':_0x40d886===null?_0x508ff0=_0x2b5971(0xfe):_0x40d886[_0x2b5971(0xf9)]&&(_0x508ff0=_0x40d886[_0x2b5971(0xf9)]['name']||_0x508ff0):_0x508ff0===_0x2b5971(0x8f)&&this['_HTMLAllCollection']&&_0x40d886 instanceof this[_0x2b5971(0x99)]&&(_0x508ff0=_0x2b5971(0x175)),_0x508ff0;}['_objectToString'](_0x589848){var _0x2742fa=_0xd5a59d;return Object['prototype']['toString'][_0x2742fa(0xe1)](_0x589848);}[_0xd5a59d(0xf4)](_0x52f421){var _0x28f82f=_0xd5a59d;return _0x52f421===_0x28f82f(0x105)||_0x52f421===_0x28f82f(0xb7)||_0x52f421===_0x28f82f(0x188);}[_0xd5a59d(0xe3)](_0x355bbd){var _0x51962f=_0xd5a59d;return _0x355bbd===_0x51962f(0xc7)||_0x355bbd===_0x51962f(0x146)||_0x355bbd===_0x51962f(0xee);}[_0xd5a59d(0xba)](_0x9ba98c,_0x596b39,_0x3e2452,_0x923cf0,_0x1f8e7a,_0x3ccbed){var _0x4e9c48=this;return function(_0x1e84c3){var _0x25e331=_0x22d4,_0x1119fe=_0x1f8e7a['node'][_0x25e331(0xb8)],_0x3061fc=_0x1f8e7a[_0x25e331(0x182)]['index'],_0x422100=_0x1f8e7a[_0x25e331(0x182)][_0x25e331(0xa2)];_0x1f8e7a[_0x25e331(0x182)][_0x25e331(0xa2)]=_0x1119fe,_0x1f8e7a[_0x25e331(0x182)]['index']=typeof _0x923cf0==_0x25e331(0x188)?_0x923cf0:_0x1e84c3,_0x9ba98c['push'](_0x4e9c48[_0x25e331(0x17e)](_0x596b39,_0x3e2452,_0x923cf0,_0x1f8e7a,_0x3ccbed)),_0x1f8e7a['node']['parent']=_0x422100,_0x1f8e7a[_0x25e331(0x182)][_0x25e331(0x102)]=_0x3061fc;};}['_addObjectProperty'](_0xf7c578,_0x51971d,_0x33c44e,_0x528a14,_0x297309,_0x4ead46,_0x51de28){var _0x240d55=_0xd5a59d,_0x3d8a22=this;return _0x51971d['_p_'+_0x297309[_0x240d55(0x12a)]()]=!0x0,function(_0x523495){var _0x2424bf=_0x240d55,_0x5d1930=_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0xb8)],_0x36b6f9=_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0x102)],_0x242217=_0x4ead46['node']['parent'];_0x4ead46['node'][_0x2424bf(0xa2)]=_0x5d1930,_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0x102)]=_0x523495,_0xf7c578['push'](_0x3d8a22['_property'](_0x33c44e,_0x528a14,_0x297309,_0x4ead46,_0x51de28)),_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0xa2)]=_0x242217,_0x4ead46[_0x2424bf(0x182)][_0x2424bf(0x102)]=_0x36b6f9;};}[_0xd5a59d(0x17e)](_0x2fcb0b,_0x50df32,_0x538478,_0x548d99,_0xb9e029){var _0x3006dd=_0xd5a59d,_0x20f0d9=this;_0xb9e029||(_0xb9e029=function(_0x1130b7,_0x5ae751){return _0x1130b7[_0x5ae751];});var _0x530633=_0x538478['toString'](),_0x10423d=_0x548d99[_0x3006dd(0xb6)]||{},_0x3d799d=_0x548d99[_0x3006dd(0xaf)],_0x3bdd25=_0x548d99['isExpressionToEvaluate'];try{var _0x55f627=this[_0x3006dd(0xed)](_0x2fcb0b),_0x274f99=_0x530633;_0x55f627&&_0x274f99[0x0]==='\\x27'&&(_0x274f99=_0x274f99[_0x3006dd(0x14c)](0x1,_0x274f99[_0x3006dd(0xf5)]-0x2));var _0x6b28ec=_0x548d99[_0x3006dd(0xb6)]=_0x10423d[_0x3006dd(0x10a)+_0x274f99];_0x6b28ec&&(_0x548d99[_0x3006dd(0xaf)]=_0x548d99['depth']+0x1),_0x548d99[_0x3006dd(0x134)]=!!_0x6b28ec;var _0x434c3=typeof _0x538478==_0x3006dd(0x126),_0xd44407={'name':_0x434c3||_0x55f627?_0x530633:this['_propertyName'](_0x530633)};if(_0x434c3&&(_0xd44407[_0x3006dd(0x126)]=!0x0),!(_0x50df32===_0x3006dd(0x103)||_0x50df32===_0x3006dd(0x136))){var _0xb21498=this[_0x3006dd(0x159)](_0x2fcb0b,_0x538478);if(_0xb21498&&(_0xb21498[_0x3006dd(0x155)]&&(_0xd44407[_0x3006dd(0x131)]=!0x0),_0xb21498[_0x3006dd(0x13d)]&&!_0x6b28ec&&!_0x548d99[_0x3006dd(0xdb)]))return _0xd44407[_0x3006dd(0x183)]=!0x0,this[_0x3006dd(0x93)](_0xd44407,_0x548d99),_0xd44407;}var _0x2d48a0;try{_0x2d48a0=_0xb9e029(_0x2fcb0b,_0x538478);}catch(_0x26552e){return _0xd44407={'name':_0x530633,'type':'unknown','error':_0x26552e[_0x3006dd(0x12d)]},this[_0x3006dd(0x93)](_0xd44407,_0x548d99),_0xd44407;}var _0x4844c2=this[_0x3006dd(0x17f)](_0x2d48a0),_0x2fcd14=this[_0x3006dd(0xf4)](_0x4844c2);if(_0xd44407[_0x3006dd(0x162)]=_0x4844c2,_0x2fcd14)this[_0x3006dd(0x93)](_0xd44407,_0x548d99,_0x2d48a0,function(){var _0x439489=_0x3006dd;_0xd44407['value']=_0x2d48a0[_0x439489(0x15c)](),!_0x6b28ec&&_0x20f0d9[_0x439489(0x15a)](_0x4844c2,_0xd44407,_0x548d99,{});});else{var _0x31d1c7=_0x548d99[_0x3006dd(0x156)]&&_0x548d99['level']<_0x548d99['autoExpandMaxDepth']&&_0x548d99[_0x3006dd(0xa5)][_0x3006dd(0x176)](_0x2d48a0)<0x0&&_0x4844c2!=='function'&&_0x548d99[_0x3006dd(0xa9)]<_0x548d99[_0x3006dd(0x14e)];_0x31d1c7||_0x548d99['level']<_0x3d799d||_0x6b28ec?(this[_0x3006dd(0xe8)](_0xd44407,_0x2d48a0,_0x548d99,_0x6b28ec||{}),this[_0x3006dd(0xbb)](_0x2d48a0,_0xd44407)):this[_0x3006dd(0x93)](_0xd44407,_0x548d99,_0x2d48a0,function(){var _0x5e1f7c=_0x3006dd;_0x4844c2===_0x5e1f7c(0xfe)||_0x4844c2===_0x5e1f7c(0x8f)||(delete _0xd44407[_0x5e1f7c(0xa7)],_0xd44407['capped']=!0x0);});}return _0xd44407;}finally{_0x548d99[_0x3006dd(0xb6)]=_0x10423d,_0x548d99[_0x3006dd(0xaf)]=_0x3d799d,_0x548d99[_0x3006dd(0x134)]=_0x3bdd25;}}['_capIfString'](_0x1e4d2e,_0x294ac4,_0x367bfb,_0x20ba06){var _0x58e966=_0xd5a59d,_0x3d317c=_0x20ba06['strLength']||_0x367bfb[_0x58e966(0xeb)];if((_0x1e4d2e===_0x58e966(0xb7)||_0x1e4d2e===_0x58e966(0x146))&&_0x294ac4['value']){let _0x5e11f9=_0x294ac4[_0x58e966(0xa7)][_0x58e966(0xf5)];_0x367bfb[_0x58e966(0x115)]+=_0x5e11f9,_0x367bfb[_0x58e966(0x115)]>_0x367bfb[_0x58e966(0xcf)]?(_0x294ac4[_0x58e966(0x10d)]='',delete _0x294ac4[_0x58e966(0xa7)]):_0x5e11f9>_0x3d317c&&(_0x294ac4[_0x58e966(0x10d)]=_0x294ac4[_0x58e966(0xa7)]['substr'](0x0,_0x3d317c),delete _0x294ac4[_0x58e966(0xa7)]);}}[_0xd5a59d(0xed)](_0x483f52){var _0x1cd051=_0xd5a59d;return!!(_0x483f52&&_0x1c6eb0[_0x1cd051(0xd1)]&&this['_objectToString'](_0x483f52)===_0x1cd051(0x132)&&_0x483f52[_0x1cd051(0x92)]);}[_0xd5a59d(0xd6)](_0x4af33b){var _0x552947=_0xd5a59d;if(_0x4af33b[_0x552947(0xe6)](/^\\d+$/))return _0x4af33b;var _0x5edc47;try{_0x5edc47=JSON[_0x552947(0xd5)](''+_0x4af33b);}catch{_0x5edc47='\\x22'+this[_0x552947(0x147)](_0x4af33b)+'\\x22';}return _0x5edc47['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5edc47=_0x5edc47[_0x552947(0x14c)](0x1,_0x5edc47[_0x552947(0xf5)]-0x2):_0x5edc47=_0x5edc47[_0x552947(0xa1)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x5edc47;}['_processTreeNodeResult'](_0x24308a,_0xf8dc4c,_0x216094,_0x2d0ea1){var _0x47078e=_0xd5a59d;this[_0x47078e(0xc8)](_0x24308a,_0xf8dc4c),_0x2d0ea1&&_0x2d0ea1(),this[_0x47078e(0xbb)](_0x216094,_0x24308a),this[_0x47078e(0xda)](_0x24308a,_0xf8dc4c);}['_treeNodePropertiesBeforeFullValue'](_0x967358,_0x6a7c01){var _0x5538e8=_0xd5a59d;this[_0x5538e8(0xf7)](_0x967358,_0x6a7c01),this[_0x5538e8(0xab)](_0x967358,_0x6a7c01),this[_0x5538e8(0xa6)](_0x967358,_0x6a7c01),this[_0x5538e8(0x16f)](_0x967358,_0x6a7c01);}[_0xd5a59d(0xf7)](_0x281a69,_0x1fdaf3){}[_0xd5a59d(0xab)](_0x55e132,_0x287d38){}[_0xd5a59d(0x14a)](_0x415c7b,_0x581b77){}['_isUndefined'](_0xd3c5ae){return _0xd3c5ae===this['_undefined'];}[_0xd5a59d(0xda)](_0x100ee1,_0x1e47ad){var _0x192f28=_0xd5a59d;this['_setNodeLabel'](_0x100ee1,_0x1e47ad),this['_setNodeExpandableState'](_0x100ee1),_0x1e47ad[_0x192f28(0x174)]&&this[_0x192f28(0x16b)](_0x100ee1),this[_0x192f28(0x9f)](_0x100ee1,_0x1e47ad),this[_0x192f28(0x124)](_0x100ee1,_0x1e47ad),this['_cleanNode'](_0x100ee1);}['_additionalMetadata'](_0x13eec3,_0x31c974){var _0x5775f4=_0xd5a59d;try{_0x13eec3&&typeof _0x13eec3[_0x5775f4(0xf5)]=='number'&&(_0x31c974[_0x5775f4(0xf5)]=_0x13eec3[_0x5775f4(0xf5)]);}catch{}if(_0x31c974[_0x5775f4(0x162)]==='number'||_0x31c974['type']===_0x5775f4(0xee)){if(isNaN(_0x31c974[_0x5775f4(0xa7)]))_0x31c974[_0x5775f4(0x125)]=!0x0,delete _0x31c974[_0x5775f4(0xa7)];else switch(_0x31c974[_0x5775f4(0xa7)]){case Number[_0x5775f4(0x96)]:_0x31c974['positiveInfinity']=!0x0,delete _0x31c974['value'];break;case Number[_0x5775f4(0x123)]:_0x31c974[_0x5775f4(0x173)]=!0x0,delete _0x31c974[_0x5775f4(0xa7)];break;case 0x0:this['_isNegativeZero'](_0x31c974[_0x5775f4(0xa7)])&&(_0x31c974[_0x5775f4(0x168)]=!0x0);break;}}else _0x31c974[_0x5775f4(0x162)]===_0x5775f4(0x144)&&typeof _0x13eec3[_0x5775f4(0x17b)]==_0x5775f4(0xb7)&&_0x13eec3[_0x5775f4(0x17b)]&&_0x31c974[_0x5775f4(0x17b)]&&_0x13eec3[_0x5775f4(0x17b)]!==_0x31c974[_0x5775f4(0x17b)]&&(_0x31c974[_0x5775f4(0xbc)]=_0x13eec3[_0x5775f4(0x17b)]);}[_0xd5a59d(0x118)](_0x3f62bd){return 0x1/_0x3f62bd===Number['NEGATIVE_INFINITY'];}[_0xd5a59d(0x16b)](_0x2fe6ed){var _0x387e2c=_0xd5a59d;!_0x2fe6ed[_0x387e2c(0xde)]||!_0x2fe6ed[_0x387e2c(0xde)][_0x387e2c(0xf5)]||_0x2fe6ed['type']===_0x387e2c(0x103)||_0x2fe6ed[_0x387e2c(0x162)]===_0x387e2c(0xd1)||_0x2fe6ed[_0x387e2c(0x162)]===_0x387e2c(0x186)||_0x2fe6ed['props']['sort'](function(_0x3b9b24,_0x56671c){var _0x509fa8=_0x387e2c,_0x4f6678=_0x3b9b24[_0x509fa8(0x17b)]['toLowerCase'](),_0x390f8d=_0x56671c[_0x509fa8(0x17b)]['toLowerCase']();return _0x4f6678<_0x390f8d?-0x1:_0x4f6678>_0x390f8d?0x1:0x0;});}['_addFunctionsNode'](_0xdef430,_0x1d4f47){var _0x1a0043=_0xd5a59d;if(!(_0x1d4f47[_0x1a0043(0xb9)]||!_0xdef430[_0x1a0043(0xde)]||!_0xdef430[_0x1a0043(0xde)]['length'])){for(var _0x15afac=[],_0x109a59=[],_0x281f7a=0x0,_0x5cdfbc=_0xdef430[_0x1a0043(0xde)]['length'];_0x281f7a<_0x5cdfbc;_0x281f7a++){var _0xa80335=_0xdef430['props'][_0x281f7a];_0xa80335[_0x1a0043(0x162)]===_0x1a0043(0x144)?_0x15afac['push'](_0xa80335):_0x109a59[_0x1a0043(0xb1)](_0xa80335);}if(!(!_0x109a59[_0x1a0043(0xf5)]||_0x15afac[_0x1a0043(0xf5)]<=0x1)){_0xdef430[_0x1a0043(0xde)]=_0x109a59;var _0x20b1db={'functionsNode':!0x0,'props':_0x15afac};this[_0x1a0043(0xf7)](_0x20b1db,_0x1d4f47),this['_setNodeLabel'](_0x20b1db,_0x1d4f47),this[_0x1a0043(0x112)](_0x20b1db),this['_setNodePermissions'](_0x20b1db,_0x1d4f47),_0x20b1db['id']+='\\x20f',_0xdef430[_0x1a0043(0xde)][_0x1a0043(0xef)](_0x20b1db);}}}['_addLoadNode'](_0x2d4ed7,_0x10c69f){}[_0xd5a59d(0x112)](_0x1eb55a){}[_0xd5a59d(0xd0)](_0x471991){var _0x235d83=_0xd5a59d;return Array[_0x235d83(0x97)](_0x471991)||typeof _0x471991==_0x235d83(0x110)&&this[_0x235d83(0x147)](_0x471991)===_0x235d83(0xca);}[_0xd5a59d(0x16f)](_0x573363,_0x378b53){}[_0xd5a59d(0x17c)](_0x1bd6da){var _0xbe21f4=_0xd5a59d;delete _0x1bd6da[_0xbe21f4(0x178)],delete _0x1bd6da['_hasSetOnItsPath'],delete _0x1bd6da[_0xbe21f4(0x149)];}[_0xd5a59d(0xa6)](_0x35d1ef,_0x4ed53b){}}let _0x53d974=new _0x4a2137(),_0x3eb1c5={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x550602={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x259d6c(_0x2e3779,_0xd917b2,_0xb327ac,_0x24707f,_0x4ad55e,_0x4f5466){var _0x4b9f72=_0xd5a59d;let _0x4ea472,_0x5b4197;try{_0x5b4197=_0x57d945(),_0x4ea472=_0x51de18[_0xd917b2],!_0x4ea472||_0x5b4197-_0x4ea472['ts']>0x1f4&&_0x4ea472[_0x4b9f72(0x11f)]&&_0x4ea472[_0x4b9f72(0x137)]/_0x4ea472[_0x4b9f72(0x11f)]<0x64?(_0x51de18[_0xd917b2]=_0x4ea472={'count':0x0,'time':0x0,'ts':_0x5b4197},_0x51de18[_0x4b9f72(0x17a)]={}):_0x5b4197-_0x51de18[_0x4b9f72(0x17a)]['ts']>0x32&&_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x11f)]&&_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x137)]/_0x51de18[_0x4b9f72(0x17a)]['count']<0x64&&(_0x51de18[_0x4b9f72(0x17a)]={});let _0x10d134=[],_0x59cb67=_0x4ea472[_0x4b9f72(0x142)]||_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x142)]?_0x550602:_0x3eb1c5,_0x594003=_0x5e3009=>{var _0x2d7700=_0x4b9f72;let _0xa0775f={};return _0xa0775f[_0x2d7700(0xde)]=_0x5e3009[_0x2d7700(0xde)],_0xa0775f[_0x2d7700(0xcd)]=_0x5e3009['elements'],_0xa0775f['strLength']=_0x5e3009['strLength'],_0xa0775f[_0x2d7700(0xcf)]=_0x5e3009['totalStrLength'],_0xa0775f[_0x2d7700(0x14e)]=_0x5e3009[_0x2d7700(0x14e)],_0xa0775f[_0x2d7700(0xe9)]=_0x5e3009[_0x2d7700(0xe9)],_0xa0775f[_0x2d7700(0x174)]=!0x1,_0xa0775f['noFunctions']=!_0x552919,_0xa0775f[_0x2d7700(0xaf)]=0x1,_0xa0775f[_0x2d7700(0xe0)]=0x0,_0xa0775f[_0x2d7700(0x91)]=_0x2d7700(0x18a),_0xa0775f[_0x2d7700(0xfb)]=_0x2d7700(0x13a),_0xa0775f[_0x2d7700(0x156)]=!0x0,_0xa0775f['autoExpandPreviousObjects']=[],_0xa0775f[_0x2d7700(0xa9)]=0x0,_0xa0775f[_0x2d7700(0xdb)]=!0x0,_0xa0775f[_0x2d7700(0x115)]=0x0,_0xa0775f[_0x2d7700(0x182)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xa0775f;};for(var _0x4e3ef1=0x0;_0x4e3ef1<_0x4ad55e[_0x4b9f72(0xf5)];_0x4e3ef1++)_0x10d134[_0x4b9f72(0xb1)](_0x53d974[_0x4b9f72(0xe8)]({'timeNode':_0x2e3779===_0x4b9f72(0x137)||void 0x0},_0x4ad55e[_0x4e3ef1],_0x594003(_0x59cb67),{}));if(_0x2e3779===_0x4b9f72(0xad)||_0x2e3779===_0x4b9f72(0x16a)){let _0x597c0d=Error[_0x4b9f72(0x153)];try{Error['stackTraceLimit']=0x1/0x0,_0x10d134['push'](_0x53d974[_0x4b9f72(0xe8)]({'stackNode':!0x0},new Error()[_0x4b9f72(0x163)],_0x594003(_0x59cb67),{'strLength':0x1/0x0}));}finally{Error[_0x4b9f72(0x153)]=_0x597c0d;}}return{'method':_0x4b9f72(0xd7),'version':_0x533c9c,'args':[{'ts':_0xb327ac,'session':_0x24707f,'args':_0x10d134,'id':_0xd917b2,'context':_0x4f5466}]};}catch(_0x541082){return{'method':'log','version':_0x533c9c,'args':[{'ts':_0xb327ac,'session':_0x24707f,'args':[{'type':'unknown','error':_0x541082&&_0x541082['message']}],'id':_0xd917b2,'context':_0x4f5466}]};}finally{try{if(_0x4ea472&&_0x5b4197){let _0x24841e=_0x57d945();_0x4ea472['count']++,_0x4ea472[_0x4b9f72(0x137)]+=_0x1a1b80(_0x5b4197,_0x24841e),_0x4ea472['ts']=_0x24841e,_0x51de18[_0x4b9f72(0x17a)][_0x4b9f72(0x11f)]++,_0x51de18['hits'][_0x4b9f72(0x137)]+=_0x1a1b80(_0x5b4197,_0x24841e),_0x51de18[_0x4b9f72(0x17a)]['ts']=_0x24841e,(_0x4ea472[_0x4b9f72(0x11f)]>0x32||_0x4ea472['time']>0x64)&&(_0x4ea472[_0x4b9f72(0x142)]=!0x0),(_0x51de18['hits']['count']>0x3e8||_0x51de18['hits'][_0x4b9f72(0x137)]>0x12c)&&(_0x51de18['hits']['reduceLimits']=!0x0);}}catch{}}}return _0x259d6c;}((_0x5e47ad,_0x378d13,_0x36c5af,_0x2ad400,_0x3b6c41,_0x3d43c6,_0x2ffba0,_0xb9f3b,_0x1807ca,_0x39281c,_0xab83d7)=>{var _0x3e722f=_0x2521ed;if(_0x5e47ad[_0x3e722f(0xf8)])return _0x5e47ad[_0x3e722f(0xf8)];if(!X(_0x5e47ad,_0xb9f3b,_0x3b6c41))return _0x5e47ad['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x5e47ad[_0x3e722f(0xf8)];let _0x48b6db=B(_0x5e47ad),_0x57ac12=_0x48b6db['elapsed'],_0xe33db9=_0x48b6db[_0x3e722f(0x120)],_0x526af0=_0x48b6db[_0x3e722f(0x15d)],_0x1dd57c={'hits':{},'ts':{}},_0x3d768e=J(_0x5e47ad,_0x1807ca,_0x1dd57c,_0x3d43c6),_0x5f2366=_0x361547=>{_0x1dd57c['ts'][_0x361547]=_0xe33db9();},_0x2958f1=(_0x36dda4,_0x58c809)=>{var _0x8e36ec=_0x3e722f;let _0x3e9662=_0x1dd57c['ts'][_0x58c809];if(delete _0x1dd57c['ts'][_0x58c809],_0x3e9662){let _0xc25b2=_0x57ac12(_0x3e9662,_0xe33db9());_0x3833c3(_0x3d768e(_0x8e36ec(0x137),_0x36dda4,_0x526af0(),_0x4e4a80,[_0xc25b2],_0x58c809));}},_0x55e353=_0x3c2726=>{var _0x4c18bf=_0x3e722f,_0x470830;return _0x3b6c41==='next.js'&&_0x5e47ad[_0x4c18bf(0x11b)]&&((_0x470830=_0x3c2726==null?void 0x0:_0x3c2726[_0x4c18bf(0x157)])==null?void 0x0:_0x470830[_0x4c18bf(0xf5)])&&(_0x3c2726[_0x4c18bf(0x157)][0x0]['origin']=_0x5e47ad['origin']),_0x3c2726;};_0x5e47ad['_console_ninja']={'consoleLog':(_0xb1db27,_0x4d7fde)=>{var _0x41fac5=_0x3e722f;_0x5e47ad[_0x41fac5(0xcc)]['log']['name']!==_0x41fac5(0x119)&&_0x3833c3(_0x3d768e(_0x41fac5(0xd7),_0xb1db27,_0x526af0(),_0x4e4a80,_0x4d7fde));},'consoleTrace':(_0x3d2b3f,_0x29f758)=>{var _0x3bb354=_0x3e722f,_0x24fd68,_0x565109;_0x5e47ad[_0x3bb354(0xcc)][_0x3bb354(0xd7)]['name']!==_0x3bb354(0x18e)&&((_0x565109=(_0x24fd68=_0x5e47ad['process'])==null?void 0x0:_0x24fd68['versions'])!=null&&_0x565109[_0x3bb354(0x182)]&&(_0x5e47ad[_0x3bb354(0x169)]=!0x0),_0x3833c3(_0x55e353(_0x3d768e('trace',_0x3d2b3f,_0x526af0(),_0x4e4a80,_0x29f758))));},'consoleError':(_0x2905a8,_0x5e8589)=>{var _0x404511=_0x3e722f;_0x5e47ad[_0x404511(0x169)]=!0x0,_0x3833c3(_0x55e353(_0x3d768e(_0x404511(0x16a),_0x2905a8,_0x526af0(),_0x4e4a80,_0x5e8589)));},'consoleTime':_0x2fbfbe=>{_0x5f2366(_0x2fbfbe);},'consoleTimeEnd':(_0x259732,_0x559171)=>{_0x2958f1(_0x559171,_0x259732);},'autoLog':(_0x40568e,_0x2ce346)=>{var _0x5b92d9=_0x3e722f;_0x3833c3(_0x3d768e(_0x5b92d9(0xd7),_0x2ce346,_0x526af0(),_0x4e4a80,[_0x40568e]));},'autoLogMany':(_0x382967,_0x4639f2)=>{var _0x5698ae=_0x3e722f;_0x3833c3(_0x3d768e(_0x5698ae(0xd7),_0x382967,_0x526af0(),_0x4e4a80,_0x4639f2));},'autoTrace':(_0x85edef,_0x1971fc)=>{var _0x323975=_0x3e722f;_0x3833c3(_0x55e353(_0x3d768e(_0x323975(0xad),_0x1971fc,_0x526af0(),_0x4e4a80,[_0x85edef])));},'autoTraceMany':(_0x423cb2,_0x132601)=>{var _0x429ba5=_0x3e722f;_0x3833c3(_0x55e353(_0x3d768e(_0x429ba5(0xad),_0x423cb2,_0x526af0(),_0x4e4a80,_0x132601)));},'autoTime':(_0x4093c2,_0x187089,_0x3a3847)=>{_0x5f2366(_0x3a3847);},'autoTimeEnd':(_0xd69daa,_0x4e00cb,_0x12447b)=>{_0x2958f1(_0x4e00cb,_0x12447b);},'coverage':_0x28f0a5=>{var _0x5963e3=_0x3e722f;_0x3833c3({'method':_0x5963e3(0x13e),'version':_0x3d43c6,'args':[{'id':_0x28f0a5}]});}};let _0x3833c3=H(_0x5e47ad,_0x378d13,_0x36c5af,_0x2ad400,_0x3b6c41,_0x39281c,_0xab83d7),_0x4e4a80=_0x5e47ad['_console_ninja_session'];return _0x5e47ad[_0x3e722f(0xf8)];})(globalThis,_0x2521ed(0x10f),_0x2521ed(0xb0),_0x2521ed(0xfc),_0x2521ed(0x12c),'1.0.0','1753958834429',_0x2521ed(0xc3),_0x2521ed(0x10e),'','1');");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo( /**@type{any}**/i, /**@type{any}**/...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr( /**@type{any}**/i, /**@type{any}**/...v) {
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tx( /**@type{any}**/i, /**@type{any}**/...v) {
  try {
    oo_cm().consoleError(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts( /**@type{any}**/v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te( /**@type{any}**/v, /**@type{any}**/i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "../plugin-slug/node_modules/gsap/CSSPlugin.js":
/*!*****************************************************!*\
  !*** ../plugin-slug/node_modules/gsap/CSSPlugin.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "../plugin-slug/node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    if (!props[i + 1]) {
      props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    } else if (props[i + 1] === 2) {
      // non-CSS value (function-based)
      target[props[i]](props[i + 2]);
    } else {
      // non-CSS value (not function-based)
      target[props[i]] = props[i + 2];
    }
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && target.style && target.nodeType && properties.split(",").forEach(function (p) {
    return saver.save(p);
  }); // make sure it's a DOM node too.

  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var owner = target.ownerSVGElement,
      svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      clone = target.cloneNode(true),
      bbox;

  clone.style.display = "block";
  svg.appendChild(clone);

  _docElement.appendChild(svg);

  try {
    bbox = clone.getBBox();
  } catch (e) {}

  svg.removeChild(clone);

  _docElement.removeChild(svg);

  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds, cloned;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getReparentedCloneBBox(target);
    cloned = 1;
  }

  bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end.substring(0, 6) === "var(--") {
    end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
  }

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");
        style.scale = style.rotate = style.translate = "none";

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375. Note: position: fixed elements report a null offsetParent but they could also be invisible because they're in an ancestor with display: none, so we check getBoundingClientRect(). We only want to alter the DOM if we absolutely have to because it can cause iframe content to reload, like a Vimeo video.
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || startValue === "auto" || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (type === "string" && endValue.substring(0, 6) === "var(--") {
            endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
            endNum = parseFloat(endValue);
          }

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "../plugin-slug/node_modules/gsap/gsap-core.js":
/*!*****************************************************!*\
  !*** ../plugin-slug/node_modules/gsap/gsap-core.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _isRevertWorthy = function _isRevertWorthy(animation) {
  return !!(animation._initted || animation._startAt || animation.add);
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = (Math.random() * i) | 0, v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
}); // previously 2 ** (10 * (p - 1)) but that doesn't end up with the value quite at the right spot so we do a blended ease to ensure it lands where it should perfectly.


_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    } // possible future addition - if an animation is removed from its parent and then .restart() or .play() or .resume() is called, perhaps we should force it back into the globalTimeline but be careful because what if it's already at its end? We don't want it to just persist forever and not get released for GC.
    // !this.parent && !value && this._tTime < this._tDur && this !== _globalTimeline && _globalTimeline.add(this);


    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (_isRevertWorthy(this)) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    this._dur || (this._zTime = -_tinyNum); // ensures onComplete fires on a zero-duration animation that gets restarted.

    return this;
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    child.parent === this && _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
      // this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)

          iteration = ~~prevIteration;

          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          } else if (time > dur) {
            time = dur;
          }
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
      return this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  } // killWithCleanup() {
  // 	this.kill();
  // 	this._r.forEach(f => f(false, this));
  // }
  ;

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _setDefaults2;

    var tween = gsap.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  headless: 1,
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.13.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "../plugin-slug/node_modules/gsap/index.js":
/*!*************************************************!*\
  !*** ../plugin-slug/node_modules/gsap/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "../plugin-slug/node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "../plugin-slug/node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./src/customCursor/cursor/Effects/CursorEffect.scss":
/*!***********************************************************!*\
  !*** ./src/customCursor/cursor/Effects/CursorEffect.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/BlobCursor/style.scss":
/*!*************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/BlobCursor/style.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorDot/style.scss":
/*!************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorDot/style.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorElastic/style.scss":
/*!****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorElastic/style.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorFollow/style.scss":
/*!***************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorFollow/style.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorGlitch/style.scss":
/*!***************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorGlitch/style.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorGlow/style.scss":
/*!*************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorGlow/style.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorGradient/style.scss":
/*!*****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorGradient/style.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorImage/style.scss":
/*!**************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorImage/style.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorMagnetic/style.scss":
/*!*****************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorMagnetic/style.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorNeon/style.scss":
/*!*************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorNeon/style.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorPixelated/style.scss":
/*!******************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorPixelated/style.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorRibbon/style.scss":
/*!***************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorRibbon/style.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorRing/style.scss":
/*!*************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorRing/style.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorRipple/style.scss":
/*!***************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorRipple/style.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorSketch/style.scss":
/*!***************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorSketch/style.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorSpotlight/style.scss":
/*!******************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorSpotlight/style.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/cursor/Shape/CursorText/style.scss":
/*!*************************************************************!*\
  !*** ./src/customCursor/cursor/Shape/CursorText/style.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/customCursor/style.scss":
/*!*************************************!*\
  !*** ./src/customCursor/style.scss ***!
  \*************************************/
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

/***/ "../plugin-slug/node_modules/ogl/src/core/Geometry.js":
/*!************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/core/Geometry.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geometry: () => (/* binding */ Geometry)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "../plugin-slug/node_modules/ogl/src/math/Vec3.js");
// attribute params
// {
//     data - typed array eg UInt16Array for indices, Float32Array
//     size - int default 1
//     instanced - default null. Pass divisor amount
//     type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
//     normalized - boolean default false

//     buffer - gl buffer, if buffer exists, don't need to provide data - although needs position data for bounds calculation
//     stride - default 0 - for when passing in buffer
//     offset - default 0 - for when passing in buffer
//     count - default null - for when passing in buffer
//     min - array - for when passing in buffer
//     max - array - for when passing in buffer
// }

// TODO: fit in transform feedback



const tempVec3 = /* @__PURE__ */ new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();

let ID = 1;
let ATTR_ID = 1;

// To stop inifinite warnings
let isBoundsWarned = false;

class Geometry {
    constructor(gl, attributes = {}) {
        if (!gl.canvas) console.error('gl not passed as first argument to Geometry');
        this.gl = gl;
        this.attributes = attributes;
        this.id = ID++;

        // Store one VAO per program attribute locations order
        this.VAOs = {};

        this.drawRange = { start: 0, count: 0 };
        this.instancedCount = 0;

        // Unbind current VAO so that new buffers don't get added to active mesh
        this.gl.renderer.bindVertexArray(null);
        this.gl.renderer.currentGeometry = null;

        // Alias for state store to avoid redundant calls for global state
        this.glState = this.gl.renderer.state;

        // create the buffers
        for (let key in attributes) {
            this.addAttribute(key, attributes[key]);
        }
    }

    addAttribute(key, attr) {
        this.attributes[key] = attr;

        // Set options
        attr.id = ATTR_ID++; // TODO: currently unused, remove?
        attr.size = attr.size || 1;
        attr.type =
            attr.type ||
            (attr.data.constructor === Float32Array
                ? this.gl.FLOAT
                : attr.data.constructor === Uint16Array
                ? this.gl.UNSIGNED_SHORT
                : this.gl.UNSIGNED_INT); // Uint32Array
        attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
        attr.normalized = attr.normalized || false;
        attr.stride = attr.stride || 0;
        attr.offset = attr.offset || 0;
        attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
        attr.divisor = attr.instanced || 0;
        attr.needsUpdate = false;
        attr.usage = attr.usage || this.gl.STATIC_DRAW;

        if (!attr.buffer) {
            // Push data to buffer
            this.updateAttribute(attr);
        }

        // Update geometry counts. If indexed, ignore regular attributes
        if (attr.divisor) {
            this.isInstanced = true;
            if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
                console.warn('geometry has multiple instanced buffers of different length');
                return (this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor));
            }
            this.instancedCount = attr.count * attr.divisor;
        } else if (key === 'index') {
            this.drawRange.count = attr.count;
        } else if (!this.attributes.index) {
            this.drawRange.count = Math.max(this.drawRange.count, attr.count);
        }
    }

    updateAttribute(attr) {
        const isNewBuffer = !attr.buffer;
        if (isNewBuffer) attr.buffer = this.gl.createBuffer();
        if (this.glState.boundBuffer !== attr.buffer) {
            this.gl.bindBuffer(attr.target, attr.buffer);
            this.glState.boundBuffer = attr.buffer;
        }
        if (isNewBuffer) {
            this.gl.bufferData(attr.target, attr.data, attr.usage);
        } else {
            this.gl.bufferSubData(attr.target, 0, attr.data);
        }
        attr.needsUpdate = false;
    }

    setIndex(value) {
        this.addAttribute('index', value);
    }

    setDrawRange(start, count) {
        this.drawRange.start = start;
        this.drawRange.count = count;
    }

    setInstancedCount(value) {
        this.instancedCount = value;
    }

    createVAO(program) {
        this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
        this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
        this.bindAttributes(program);
    }

    bindAttributes(program) {
        // Link all attributes to program using gl.vertexAttribPointer
        program.attributeLocations.forEach((location, { name, type }) => {
            // If geometry missing a required shader attribute
            if (!this.attributes[name]) {
                console.warn(`active attribute ${name} not being supplied`);
                return;
            }

            const attr = this.attributes[name];

            this.gl.bindBuffer(attr.target, attr.buffer);
            this.glState.boundBuffer = attr.buffer;

            // For matrix attributes, buffer needs to be defined per column
            let numLoc = 1;
            if (type === 35674) numLoc = 2; // mat2
            if (type === 35675) numLoc = 3; // mat3
            if (type === 35676) numLoc = 4; // mat4

            const size = attr.size / numLoc;
            const stride = numLoc === 1 ? 0 : numLoc * numLoc * 4;
            const offset = numLoc === 1 ? 0 : numLoc * 4;

            for (let i = 0; i < numLoc; i++) {
                this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
                this.gl.enableVertexAttribArray(location + i);

                // For instanced attributes, divisor needs to be set.
                // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render
                this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
            }
        });

        // Bind indices if geometry indexed
        if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
    }

    draw({ program, mode = this.gl.TRIANGLES }) {
        if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
            if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
            this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
            this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
        }

        // Check if any attributes need updating
        program.attributeLocations.forEach((location, { name }) => {
            const attr = this.attributes[name];
            if (attr.needsUpdate) this.updateAttribute(attr);
        });

        // For drawElements, offset needs to be multiple of type size
        let indexBytesPerElement = 2;
        if (this.attributes.index?.type === this.gl.UNSIGNED_INT) indexBytesPerElement = 4;

        if (this.isInstanced) {
            if (this.attributes.index) {
                this.gl.renderer.drawElementsInstanced(
                    mode,
                    this.drawRange.count,
                    this.attributes.index.type,
                    this.attributes.index.offset + this.drawRange.start * indexBytesPerElement,
                    this.instancedCount
                );
            } else {
                this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
            }
        } else {
            if (this.attributes.index) {
                this.gl.drawElements(
                    mode,
                    this.drawRange.count,
                    this.attributes.index.type,
                    this.attributes.index.offset + this.drawRange.start * indexBytesPerElement
                );
            } else {
                this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
            }
        }
    }

    getPosition() {
        // Use position buffer, or min/max if available
        const attr = this.attributes.position;
        // if (attr.min) return [...attr.min, ...attr.max];
        if (attr.data) return attr;
        if (isBoundsWarned) return;
        console.warn('No position buffer data found to compute bounds');
        return (isBoundsWarned = true);
    }

    computeBoundingBox(attr) {
        if (!attr) attr = this.getPosition();
        const array = attr.data;
        // Data loaded shouldn't haave stride, only buffers
        // const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;
        const stride = attr.size;

        if (!this.bounds) {
            this.bounds = {
                min: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
                max: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
                center: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
                scale: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(),
                radius: Infinity,
            };
        }

        const min = this.bounds.min;
        const max = this.bounds.max;
        const center = this.bounds.center;
        const scale = this.bounds.scale;

        min.set(+Infinity);
        max.set(-Infinity);

        // TODO: check size of position (eg triangle with Vec2)
        for (let i = 0, l = array.length; i < l; i += stride) {
            const x = array[i];
            const y = array[i + 1];
            const z = array[i + 2];

            min.x = Math.min(x, min.x);
            min.y = Math.min(y, min.y);
            min.z = Math.min(z, min.z);

            max.x = Math.max(x, max.x);
            max.y = Math.max(y, max.y);
            max.z = Math.max(z, max.z);
        }

        scale.sub(max, min);
        center.add(min, max).divide(2);
    }

    computeBoundingSphere(attr) {
        if (!attr) attr = this.getPosition();
        const array = attr.data;
        // Data loaded shouldn't haave stride, only buffers
        // const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;
        const stride = attr.size;

        if (!this.bounds) this.computeBoundingBox(attr);

        let maxRadiusSq = 0;
        for (let i = 0, l = array.length; i < l; i += stride) {
            tempVec3.fromArray(array, i);
            maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
        }

        this.bounds.radius = Math.sqrt(maxRadiusSq);
    }

    remove() {
        for (let key in this.VAOs) {
            this.gl.renderer.deleteVertexArray(this.VAOs[key]);
            delete this.VAOs[key];
        }
        for (let key in this.attributes) {
            this.gl.deleteBuffer(this.attributes[key].buffer);
            delete this.attributes[key];
        }
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/core/Mesh.js":
/*!********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/core/Mesh.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mesh: () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform.js */ "../plugin-slug/node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _math_Mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Mat3.js */ "../plugin-slug/node_modules/ogl/src/math/Mat3.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Mat4.js */ "../plugin-slug/node_modules/ogl/src/math/Mat4.js");




let ID = 0;

class Mesh extends _Transform_js__WEBPACK_IMPORTED_MODULE_0__.Transform {
    constructor(gl, { geometry, program, mode = gl.TRIANGLES, frustumCulled = true, renderOrder = 0 } = {}) {
        super();
        if (!gl.canvas) console.error('gl not passed as first argument to Mesh');
        this.gl = gl;
        this.id = ID++;
        this.geometry = geometry;
        this.program = program;
        this.mode = mode;

        // Used to skip frustum culling
        this.frustumCulled = frustumCulled;

        // Override sorting to force an order
        this.renderOrder = renderOrder;
        this.modelViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__.Mat4();
        this.normalMatrix = new _math_Mat3_js__WEBPACK_IMPORTED_MODULE_2__.Mat3();
        this.beforeRenderCallbacks = [];
        this.afterRenderCallbacks = [];
    }

    onBeforeRender(f) {
        this.beforeRenderCallbacks.push(f);
        return this;
    }

    onAfterRender(f) {
        this.afterRenderCallbacks.push(f);
        return this;
    }

    draw({ camera } = {}) {
        if (camera) {
            // Add empty matrix uniforms to program if unset
            if (!this.program.uniforms.modelMatrix) {
                Object.assign(this.program.uniforms, {
                    modelMatrix: { value: null },
                    viewMatrix: { value: null },
                    modelViewMatrix: { value: null },
                    normalMatrix: { value: null },
                    projectionMatrix: { value: null },
                    cameraPosition: { value: null },
                });
            }

            // Set the matrix uniforms
            this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
            this.program.uniforms.cameraPosition.value = camera.worldPosition;
            this.program.uniforms.viewMatrix.value = camera.viewMatrix;
            this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
            this.program.uniforms.modelMatrix.value = this.worldMatrix;
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
            this.program.uniforms.normalMatrix.value = this.normalMatrix;
        }
        this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));

        // determine if faces need to be flipped - when mesh scaled negatively
        let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({ flipFaces });
        this.geometry.draw({ mode: this.mode, program: this.program });
        this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/core/Program.js":
/*!***********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/core/Program.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Program: () => (/* binding */ Program)
/* harmony export */ });
// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube

let ID = 1;

// cache of typed arrays used to flatten uniform arrays
const arrayCacheF32 = {};

class Program {
    constructor(
        gl,
        {
            vertex,
            fragment,
            uniforms = {},

            transparent = false,
            cullFace = gl.BACK,
            frontFace = gl.CCW,
            depthTest = true,
            depthWrite = true,
            depthFunc = gl.LEQUAL,
        } = {}
    ) {
        if (!gl.canvas) console.error('gl not passed as first argument to Program');
        this.gl = gl;
        this.uniforms = uniforms;
        this.id = ID++;

        if (!vertex) console.warn('vertex shader not supplied');
        if (!fragment) console.warn('fragment shader not supplied');

        // Store program state
        this.transparent = transparent;
        this.cullFace = cullFace;
        this.frontFace = frontFace;
        this.depthTest = depthTest;
        this.depthWrite = depthWrite;
        this.depthFunc = depthFunc;
        this.blendFunc = {};
        this.blendEquation = {};
        this.stencilFunc = {};
        this.stencilOp = {}

        // set default blendFunc if transparent flagged
        if (this.transparent && !this.blendFunc.src) {
            if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        }

        // Create empty shaders and attach to program
        this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
        this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        this.program = gl.createProgram();
        gl.attachShader(this.program, this.vertexShader);
        gl.attachShader(this.program, this.fragmentShader);

        // Compile shaders with source
        this.setShaders({ vertex, fragment });
    }

    setShaders({ vertex, fragment }) {
        if (vertex) {
            // compile vertex shader and log errors
            this.gl.shaderSource(this.vertexShader, vertex);
            this.gl.compileShader(this.vertexShader);
            if (this.gl.getShaderInfoLog(this.vertexShader) !== '') {
                console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
            }
        }

        if (fragment) {
            // compile fragment shader and log errors
            this.gl.shaderSource(this.fragmentShader, fragment);
            this.gl.compileShader(this.fragmentShader);
            if (this.gl.getShaderInfoLog(this.fragmentShader) !== '') {
                console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
            }
        }

        // compile program and log errors
        this.gl.linkProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            return console.warn(this.gl.getProgramInfoLog(this.program));
        }

        // Get active uniform locations
        this.uniformLocations = new Map();
        let numUniforms = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
        for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
            let uniform = this.gl.getActiveUniform(this.program, uIndex);
            this.uniformLocations.set(uniform, this.gl.getUniformLocation(this.program, uniform.name));

            // split uniforms' names to separate array and struct declarations
            const split = uniform.name.match(/(\w+)/g);

            uniform.uniformName = split[0];
            uniform.nameComponents = split.slice(1);
        }

        // Get active attribute locations
        this.attributeLocations = new Map();
        const locations = [];
        const numAttribs = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
        for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
            const attribute = this.gl.getActiveAttrib(this.program, aIndex);
            const location = this.gl.getAttribLocation(this.program, attribute.name);
            // Ignore special built-in inputs. eg gl_VertexID, gl_InstanceID
            if (location === -1) continue;
            locations[location] = attribute.name;
            this.attributeLocations.set(attribute, location);
        }
        this.attributeOrder = locations.join('');
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        this.blendFunc.src = src;
        this.blendFunc.dst = dst;
        this.blendFunc.srcAlpha = srcAlpha;
        this.blendFunc.dstAlpha = dstAlpha;
        if (src) this.transparent = true;
    }

    setBlendEquation(modeRGB, modeAlpha) {
        this.blendEquation.modeRGB = modeRGB;
        this.blendEquation.modeAlpha = modeAlpha;
    }

    setStencilFunc(func, ref, mask) {
        this.stencilRef = ref;
        this.stencilFunc.func = func;
        this.stencilFunc.ref = ref;
        this.stencilFunc.mask = mask;
    }

    setStencilOp(stencilFail, depthFail, depthPass) {
        this.stencilOp.stencilFail = stencilFail;
        this.stencilOp.depthFail = depthFail;
        this.stencilOp.depthPass = depthPass;
    }

    applyState() {
        if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);
        else this.gl.renderer.disable(this.gl.DEPTH_TEST);

        if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);
        else this.gl.renderer.disable(this.gl.CULL_FACE);

        if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);
        else this.gl.renderer.disable(this.gl.BLEND);

        if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
        this.gl.renderer.setFrontFace(this.frontFace);
        this.gl.renderer.setDepthMask(this.depthWrite);
        this.gl.renderer.setDepthFunc(this.depthFunc);
        if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
        this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);

        if(this.stencilFunc.func || this.stencilOp.stencilFail) this.gl.renderer.enable(this.gl.STENCIL_TEST)
            else this.gl.renderer.disable(this.gl.STENCIL_TEST)

        this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask)
        this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass)

    }

    use({ flipFaces = false } = {}) {
        let textureUnit = -1;
        const programActive = this.gl.renderer.state.currentProgram === this.id;

        // Avoid gl call if program already in use
        if (!programActive) {
            this.gl.useProgram(this.program);
            this.gl.renderer.state.currentProgram = this.id;
        }

        // Set only the active uniforms found in the shader
        this.uniformLocations.forEach((location, activeUniform) => {
            let uniform = this.uniforms[activeUniform.uniformName];

            for (const component of activeUniform.nameComponents) {
                if (!uniform) break;

                if (component in uniform) {
                    uniform = uniform[component];
                } else if (Array.isArray(uniform.value)) {
                    break;
                } else {
                    uniform = undefined;
                    break;
                }
            }

            if (!uniform) {
                return warn(`Active uniform ${activeUniform.name} has not been supplied`);
            }

            if (uniform && uniform.value === undefined) {
                return warn(`${activeUniform.name} uniform is missing a value parameter`);
            }

            if (uniform.value.texture) {
                textureUnit = textureUnit + 1;

                // Check if texture needs to be updated
                uniform.value.update(textureUnit);
                return setUniform(this.gl, activeUniform.type, location, textureUnit);
            }

            // For texture arrays, set uniform as an array of texture units instead of just one
            if (uniform.value.length && uniform.value[0].texture) {
                const textureUnits = [];
                uniform.value.forEach((value) => {
                    textureUnit = textureUnit + 1;
                    value.update(textureUnit);
                    textureUnits.push(textureUnit);
                });

                return setUniform(this.gl, activeUniform.type, location, textureUnits);
            }

            setUniform(this.gl, activeUniform.type, location, uniform.value);
        });

        this.applyState();
        if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
    }

    remove() {
        this.gl.deleteProgram(this.program);
    }
}

function setUniform(gl, type, location, value) {
    value = value.length ? flatten(value) : value;
    const setValue = gl.renderer.state.uniformLocations.get(location);

    // Avoid redundant uniform commands
    if (value.length) {
        if (setValue === undefined || setValue.length !== value.length) {
            // clone array to store as cache
            gl.renderer.state.uniformLocations.set(location, value.slice(0));
        } else {
            if (arraysEqual(setValue, value)) return;

            // Update cached array values
            setValue.set ? setValue.set(value) : setArray(setValue, value);
            gl.renderer.state.uniformLocations.set(location, setValue);
        }
    } else {
        if (setValue === value) return;
        gl.renderer.state.uniformLocations.set(location, value);
    }

    switch (type) {
        case 5126:
            return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value); // FLOAT
        case 35664:
            return gl.uniform2fv(location, value); // FLOAT_VEC2
        case 35665:
            return gl.uniform3fv(location, value); // FLOAT_VEC3
        case 35666:
            return gl.uniform4fv(location, value); // FLOAT_VEC4
        case 35670: // BOOL
        case 5124: // INT
        case 35678: // SAMPLER_2D
        case 36306: // U_SAMPLER_2D
        case 35680: // SAMPLER_CUBE
        case 36289: // SAMPLER_2D_ARRAY
            return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
        case 35671: // BOOL_VEC2
        case 35667:
            return gl.uniform2iv(location, value); // INT_VEC2
        case 35672: // BOOL_VEC3
        case 35668:
            return gl.uniform3iv(location, value); // INT_VEC3
        case 35673: // BOOL_VEC4
        case 35669:
            return gl.uniform4iv(location, value); // INT_VEC4
        case 35674:
            return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
        case 35675:
            return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
        case 35676:
            return gl.uniformMatrix4fv(location, false, value); // FLOAT_MAT4
    }
}

function addLineNumbers(string) {
    let lines = string.split('\n');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = i + 1 + ': ' + lines[i];
    }
    return lines.join('\n');
}

function flatten(a) {
    const arrayLen = a.length;
    const valueLen = a[0].length;
    if (valueLen === undefined) return a;
    const length = arrayLen * valueLen;
    let value = arrayCacheF32[length];
    if (!value) arrayCacheF32[length] = value = new Float32Array(length);
    for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
    return value;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0, l = a.length; i < l; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function setArray(a, b) {
    for (let i = 0, l = a.length; i < l; i++) {
        a[i] = b[i];
    }
}

let warnCount = 0;
function warn(message) {
    if (warnCount > 100) return;
    console.warn(message);
    warnCount++;
    if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/core/Renderer.js":
/*!************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/core/Renderer.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "../plugin-slug/node_modules/ogl/src/math/Vec3.js");


// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost

// Not automatic - devs to use these methods manually
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.clearColor( r, g, b, a );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );

const tempVec3 = /* @__PURE__ */ new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();
let ID = 1;

class Renderer {
    constructor({
        canvas = document.createElement('canvas'),
        width = 300,
        height = 150,
        dpr = 1,
        alpha = false,
        depth = true,
        stencil = false,
        antialias = false,
        premultipliedAlpha = false,
        preserveDrawingBuffer = false,
        powerPreference = 'default',
        autoClear = true,
        webgl = 2,
    } = {}) {
        const attributes = { alpha, depth, stencil, antialias, premultipliedAlpha, preserveDrawingBuffer, powerPreference };
        this.dpr = dpr;
        this.alpha = alpha;
        this.color = true;
        this.depth = depth;
        this.stencil = stencil;
        this.premultipliedAlpha = premultipliedAlpha;
        this.autoClear = autoClear;
        this.id = ID++;

        // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1
        if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
        this.isWebgl2 = !!this.gl;
        if (!this.gl) this.gl = canvas.getContext('webgl', attributes);
        if (!this.gl) console.error('unable to create webgl context');

        // Attach renderer to gl so that all classes have access to internal state functions
        this.gl.renderer = this;

        // initialise size values
        this.setSize(width, height);

        // gl state stores to avoid redundant calls on methods used internally
        this.state = {};
        this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO };
        this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD };
        this.state.cullFace = false;
        this.state.frontFace = this.gl.CCW;
        this.state.depthMask = true;
        this.state.depthFunc = this.gl.LEQUAL;
        this.state.premultiplyAlpha = false;
        this.state.flipY = false;
        this.state.unpackAlignment = 4;
        this.state.framebuffer = null;
        this.state.viewport = { x: 0, y: 0, width: null, height: null };
        this.state.textureUnits = [];
        this.state.activeTextureUnit = 0;
        this.state.boundBuffer = null;
        this.state.uniformLocations = new Map();
        this.state.currentProgram = null;

        // store requested extensions
        this.extensions = {};

        // Initialise extra format types
        if (this.isWebgl2) {
            this.getExtension('EXT_color_buffer_float');
            this.getExtension('OES_texture_float_linear');
        } else {
            this.getExtension('OES_texture_float');
            this.getExtension('OES_texture_float_linear');
            this.getExtension('OES_texture_half_float');
            this.getExtension('OES_texture_half_float_linear');
            this.getExtension('OES_element_index_uint');
            this.getExtension('OES_standard_derivatives');
            this.getExtension('EXT_sRGB');
            this.getExtension('WEBGL_depth_texture');
            this.getExtension('WEBGL_draw_buffers');
        }
        this.getExtension('WEBGL_compressed_texture_astc');
        this.getExtension('EXT_texture_compression_bptc');
        this.getExtension('WEBGL_compressed_texture_s3tc');
        this.getExtension('WEBGL_compressed_texture_etc1');
        this.getExtension('WEBGL_compressed_texture_pvrtc');
        this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');

        // Create method aliases using extension (WebGL1) or native if available (WebGL2)
        this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
        this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
        this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
        this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
        this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
        this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
        this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

        // Store device parameters
        this.parameters = {};
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic')
            ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            : 0;
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;

        this.gl.canvas.width = width * this.dpr;
        this.gl.canvas.height = height * this.dpr;

        if (!this.gl.canvas.style) return;
        Object.assign(this.gl.canvas.style, {
            width: width + 'px',
            height: height + 'px',
        });
    }

    setViewport(width, height, x = 0, y = 0) {
        if (this.state.viewport.width === width && this.state.viewport.height === height) return;
        this.state.viewport.width = width;
        this.state.viewport.height = height;
        this.state.viewport.x = x;
        this.state.viewport.y = y;
        this.gl.viewport(x, y, width, height);
    }

    setScissor(width, height, x = 0, y = 0) {
        this.gl.scissor(x, y, width, height);
    }

    enable(id) {
        if (this.state[id] === true) return;
        this.gl.enable(id);
        this.state[id] = true;
    }

    disable(id) {
        if (this.state[id] === false) return;
        this.gl.disable(id);
        this.state[id] = false;
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        if (
            this.state.blendFunc.src === src &&
            this.state.blendFunc.dst === dst &&
            this.state.blendFunc.srcAlpha === srcAlpha &&
            this.state.blendFunc.dstAlpha === dstAlpha
        )
            return;
        this.state.blendFunc.src = src;
        this.state.blendFunc.dst = dst;
        this.state.blendFunc.srcAlpha = srcAlpha;
        this.state.blendFunc.dstAlpha = dstAlpha;
        if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
        else this.gl.blendFunc(src, dst);
    }

    setBlendEquation(modeRGB, modeAlpha) {
        modeRGB = modeRGB || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
        this.state.blendEquation.modeRGB = modeRGB;
        this.state.blendEquation.modeAlpha = modeAlpha;
        if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
        else this.gl.blendEquation(modeRGB);
    }

    setCullFace(value) {
        if (this.state.cullFace === value) return;
        this.state.cullFace = value;
        this.gl.cullFace(value);
    }

    setFrontFace(value) {
        if (this.state.frontFace === value) return;
        this.state.frontFace = value;
        this.gl.frontFace(value);
    }

    setDepthMask(value) {
        if (this.state.depthMask === value) return;
        this.state.depthMask = value;
        this.gl.depthMask(value);
    }

    setDepthFunc(value) {
        if (this.state.depthFunc === value) return;
        this.state.depthFunc = value;
        this.gl.depthFunc(value);
    }

    setStencilMask(value) {
        if(this.state.stencilMask === value) return;
        this.state.stencilMask = value;
        this.gl.stencilMask(value)
    }

    setStencilFunc(func, ref, mask) {

        if((this.state.stencilFunc === func) &&
            (this.state.stencilRef === ref) &&
            (this.state.stencilFuncMask === mask)
        ) return;

        this.state.stencilFunc = func || this.gl.ALWAYS;
        this.state.stencilRef = ref || 0;
        this.state.stencilFuncMask = mask || 0;

        this.gl.stencilFunc(func || this.gl.ALWAYS, ref || 0, mask || 0);
    }

    setStencilOp(stencilFail, depthFail, depthPass) {

        if(this.state.stencilFail === stencilFail &&
            this.state.stencilDepthFail === depthFail &&
            this.state.stencilDepthPass === depthPass
        ) return;

        this.state.stencilFail = stencilFail;
        this.state.stencilDepthFail = depthFail;
        this.state.stencilDepthPass = depthPass;
        
        this.gl.stencilOp(stencilFail, depthFail, depthPass);
        
    }

    activeTexture(value) {
        if (this.state.activeTextureUnit === value) return;
        this.state.activeTextureUnit = value;
        this.gl.activeTexture(this.gl.TEXTURE0 + value);
    }

    bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
        if (this.state.framebuffer === buffer) return;
        this.state.framebuffer = buffer;
        this.gl.bindFramebuffer(target, buffer);
    }

    getExtension(extension, webgl2Func, extFunc) {
        // if webgl2 function supported, return func bound to gl context
        if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);

        // fetch extension once only
        if (!this.extensions[extension]) {
            this.extensions[extension] = this.gl.getExtension(extension);
        }

        // return extension if no function requested
        if (!webgl2Func) return this.extensions[extension];

        // Return null if extension not supported
        if (!this.extensions[extension]) return null;

        // return extension function, bound to extension
        return this.extensions[extension][extFunc].bind(this.extensions[extension]);
    }

    sortOpaque(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else if (a.zDepth !== b.zDepth) {
            return a.zDepth - b.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortTransparent(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        }
        if (a.zDepth !== b.zDepth) {
            return b.zDepth - a.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortUI(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else {
            return b.id - a.id;
        }
    }

    getRenderList({ scene, camera, frustumCull, sort }) {
        let renderList = [];

        if (camera && frustumCull) camera.updateFrustum();

        // Get visible
        scene.traverse((node) => {
            if (!node.visible) return true;
            if (!node.draw) return;

            if (frustumCull && node.frustumCulled && camera) {
                if (!camera.frustumIntersectsMesh(node)) return;
            }

            renderList.push(node);
        });

        if (sort) {
            const opaque = [];
            const transparent = []; // depthTest true
            const ui = []; // depthTest false

            renderList.forEach((node) => {
                // Split into the 3 render groups
                if (!node.program.transparent) {
                    opaque.push(node);
                } else if (node.program.depthTest) {
                    transparent.push(node);
                } else {
                    ui.push(node);
                }

                node.zDepth = 0;

                // Only calculate z-depth if renderOrder unset and depthTest is true
                if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;

                // update z-depth
                node.worldMatrix.getTranslation(tempVec3);
                tempVec3.applyMatrix4(camera.projectionViewMatrix);
                node.zDepth = tempVec3.z;
            });

            opaque.sort(this.sortOpaque);
            transparent.sort(this.sortTransparent);
            ui.sort(this.sortUI);

            renderList = opaque.concat(transparent, ui);
        }

        return renderList;
    }

    render({ scene, camera, target = null, update = true, sort = true, frustumCull = true, clear }) {
        if (target === null) {
            // make sure no render target bound so draws to canvas
            this.bindFramebuffer();
            this.setViewport(this.width * this.dpr, this.height * this.dpr);
        } else {
            // bind supplied render target and update viewport
            this.bindFramebuffer(target);
            this.setViewport(target.width, target.height);
        }

        if (clear || (this.autoClear && clear !== false)) {
            // Ensure depth buffer writing is enabled so it can be cleared
            if (this.depth && (!target || target.depth)) {
                this.enable(this.gl.DEPTH_TEST);
                this.setDepthMask(true);
            }

            // Same for stencil
            if(this.stencil || (!target || target.stencil)) {
                this.enable(this.gl.STENCIL_TEST);
                this.setStencilMask(0xff)
            }

            this.gl.clear(
                (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
                    (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
                    (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
            );
        }

        // updates all scene graph matrices
        if (update) scene.updateMatrixWorld();

        // Update camera separately, in case not in scene graph
        if (camera) camera.updateMatrixWorld();

        // Get render list - entails culling and sorting
        const renderList = this.getRenderList({ scene, camera, frustumCull, sort });

        renderList.forEach((node) => {
            node.draw({ camera });
        });
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/core/Transform.js":
/*!*************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/core/Transform.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transform: () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3.js */ "../plugin-slug/node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Quat.js */ "../plugin-slug/node_modules/ogl/src/math/Quat.js");
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Mat4.js */ "../plugin-slug/node_modules/ogl/src/math/Mat4.js");
/* harmony import */ var _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Euler.js */ "../plugin-slug/node_modules/ogl/src/math/Euler.js");





class Transform {
    constructor() {
        this.parent = null;
        this.children = [];
        this.visible = true;

        this.matrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
        this.worldMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();
        this.matrixAutoUpdate = true;
        this.worldMatrixNeedsUpdate = false;

        this.position = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3();
        this.quaternion = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_2__.Quat();
        this.scale = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(1);
        this.rotation = new _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__.Euler();
        this.up = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(0, 1, 0);

        this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, true);
        this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, undefined, true);
    }

    setParent(parent, notifyParent = true) {
        if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
        this.parent = parent;
        if (notifyParent && parent) parent.addChild(this, false);
    }

    addChild(child, notifyChild = true) {
        if (!~this.children.indexOf(child)) this.children.push(child);
        if (notifyChild) child.setParent(this, false);
    }

    removeChild(child, notifyChild = true) {
        if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
        if (notifyChild) child.setParent(null, false);
    }

    updateMatrixWorld(force) {
        if (this.matrixAutoUpdate) this.updateMatrix();
        if (this.worldMatrixNeedsUpdate || force) {
            if (this.parent === null) this.worldMatrix.copy(this.matrix);
            else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
            this.worldMatrixNeedsUpdate = false;
            force = true;
        }

        for (let i = 0, l = this.children.length; i < l; i++) {
            this.children[i].updateMatrixWorld(force);
        }
    }

    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale);
        this.worldMatrixNeedsUpdate = true;
    }

    traverse(callback) {
        // Return true in callback to stop traversing children
        if (callback(this)) return;
        for (let i = 0, l = this.children.length; i < l; i++) {
            this.children[i].traverse(callback);
        }
    }

    decompose() {
        this.matrix.decompose(this.quaternion._target, this.position, this.scale);
        this.rotation.fromQuaternion(this.quaternion);
    }

    lookAt(target, invert = false) {
        if (invert) this.matrix.lookAt(this.position, target, this.up);
        else this.matrix.lookAt(target, this.position, this.up);
        this.matrix.getRotation(this.quaternion._target);
        this.rotation.fromQuaternion(this.quaternion);
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/extras/Polyline.js":
/*!**************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/extras/Polyline.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polyline: () => (/* binding */ Polyline)
/* harmony export */ });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Geometry.js */ "../plugin-slug/node_modules/ogl/src/core/Geometry.js");
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Program.js */ "../plugin-slug/node_modules/ogl/src/core/Program.js");
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Mesh.js */ "../plugin-slug/node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vec2.js */ "../plugin-slug/node_modules/ogl/src/math/Vec2.js");
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3.js */ "../plugin-slug/node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var _math_Color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Color.js */ "../plugin-slug/node_modules/ogl/src/math/Color.js");







const tmp = /* @__PURE__ */ new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__.Vec3();

class Polyline {
    constructor(
        gl,
        {
            points, // Array of Vec3s
            vertex = defaultVertex,
            fragment = defaultFragment,
            uniforms = {},
            attributes = {}, // For passing in custom attribs
        }
    ) {
        this.gl = gl;
        this.points = points;
        this.count = points.length;

        // Create buffers
        this.position = new Float32Array(this.count * 3 * 2);
        this.prev = new Float32Array(this.count * 3 * 2);
        this.next = new Float32Array(this.count * 3 * 2);
        const side = new Float32Array(this.count * 1 * 2);
        const uv = new Float32Array(this.count * 2 * 2);
        const index = new Uint16Array((this.count - 1) * 3 * 2);

        // Set static buffers
        for (let i = 0; i < this.count; i++) {
            side.set([-1, 1], i * 2);
            const v = i / (this.count - 1);
            uv.set([0, v, 1, v], i * 4);

            if (i === this.count - 1) continue;
            const ind = i * 2;
            index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
            index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
        }

        const geometry = (this.geometry = new _core_Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Geometry(
            gl,
            Object.assign(attributes, {
                position: { size: 3, data: this.position },
                prev: { size: 3, data: this.prev },
                next: { size: 3, data: this.next },
                side: { size: 1, data: side },
                uv: { size: 2, data: uv },
                index: { size: 1, data: index },
            })
        ));

        // Populate dynamic buffers
        this.updateGeometry();

        if (!uniforms.uResolution) this.resolution = uniforms.uResolution = { value: new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_2__.Vec2() };
        if (!uniforms.uDPR) this.dpr = uniforms.uDPR = { value: 1 };
        if (!uniforms.uThickness) this.thickness = uniforms.uThickness = { value: 1 };
        if (!uniforms.uColor) this.color = uniforms.uColor = { value: new _math_Color_js__WEBPACK_IMPORTED_MODULE_3__.Color('#000') };
        if (!uniforms.uMiter) this.miter = uniforms.uMiter = { value: 1 };

        // Set size uniforms' values
        this.resize();

        const program = (this.program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_4__.Program(gl, {
            vertex,
            fragment,
            uniforms,
        }));

        this.mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__.Mesh(gl, { geometry, program });
    }

    updateGeometry() {
        this.points.forEach((p, i) => {
            p.toArray(this.position, i * 3 * 2);
            p.toArray(this.position, i * 3 * 2 + 3);

            if (!i) {
                // If first point, calculate prev using the distance to 2nd point
                tmp.copy(p)
                    .sub(this.points[i + 1])
                    .add(p);
                tmp.toArray(this.prev, i * 3 * 2);
                tmp.toArray(this.prev, i * 3 * 2 + 3);
            } else {
                p.toArray(this.next, (i - 1) * 3 * 2);
                p.toArray(this.next, (i - 1) * 3 * 2 + 3);
            }

            if (i === this.points.length - 1) {
                // If last point, calculate next using distance to 2nd last point
                tmp.copy(p)
                    .sub(this.points[i - 1])
                    .add(p);
                tmp.toArray(this.next, i * 3 * 2);
                tmp.toArray(this.next, i * 3 * 2 + 3);
            } else {
                p.toArray(this.prev, (i + 1) * 3 * 2);
                p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
            }
        });

        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.prev.needsUpdate = true;
        this.geometry.attributes.next.needsUpdate = true;
    }

    // Only need to call if not handling resolution uniforms manually
    resize() {
        // Update automatic uniforms if not overridden
        if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
        if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
    }
}

const defaultVertex = /* glsl */ `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;

const defaultFragment = /* glsl */ `
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/Color.js":
/*!*********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/Color.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var _functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/ColorFunc.js */ "../plugin-slug/node_modules/ogl/src/math/functions/ColorFunc.js");


// Color stored as an array of RGB decimal values (between 0 > 1)
// Constructor and set method accept following formats:
// new Color() - Empty (defaults to black)
// new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1) - Decimal RGB values
// new Color('#ff0000') - Hex string
// new Color('#ccc') - Short-hand Hex string
// new Color(0x4f27e8) - Number
// new Color('red') - Color name string (short list in ColorFunc.js)

class Color extends Array {
    constructor(color) {
        if (Array.isArray(color)) return super(...color);
        return super(..._functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__.parseColor(...arguments));
    }

    get r() {
        return this[0];
    }

    get g() {
        return this[1];
    }

    get b() {
        return this[2];
    }

    set r(v) {
        this[0] = v;
    }

    set g(v) {
        this[1] = v;
    }

    set b(v) {
        this[2] = v;
    }

    set(color) {
        if (Array.isArray(color)) return this.copy(color);
        return this.copy(_functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__.parseColor(...arguments));
    }

    copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        return this;
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/Euler.js":
/*!*********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/Euler.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Euler: () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/EulerFunc.js */ "../plugin-slug/node_modules/ogl/src/math/functions/EulerFunc.js");
/* harmony import */ var _Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mat4.js */ "../plugin-slug/node_modules/ogl/src/math/Mat4.js");



const tmpMat4 = /* @__PURE__ */ new _Mat4_js__WEBPACK_IMPORTED_MODULE_0__.Mat4();

class Euler extends Array {
    constructor(x = 0, y = x, z = x, order = 'YXZ') {
        super(x, y, z);
        this.order = order;
        this.onChange = () => {};

        // Keep reference to proxy target to avoid triggering onChange internally
        this._target = this;

        // Return a proxy to trigger onChange when array elements are edited directly
        const triggerProps = ['0', '1', '2'];
        return new Proxy(this, {
            set(target, property) {
                const success = Reflect.set(...arguments);
                if (success && triggerProps.includes(property)) target.onChange();
                return success;
            },
        });
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    set x(v) {
        this._target[0] = v;
        this.onChange();
    }

    set y(v) {
        this._target[1] = v;
        this.onChange();
    }

    set z(v) {
        this._target[2] = v;
        this.onChange();
    }

    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        this._target[0] = x;
        this._target[1] = y;
        this._target[2] = z;
        this.onChange();
        return this;
    }

    copy(v) {
        this._target[0] = v[0];
        this._target[1] = v[1];
        this._target[2] = v[2];
        this.onChange();
        return this;
    }

    reorder(order) {
        this._target.order = order;
        this.onChange();
        return this;
    }

    fromRotationMatrix(m, order = this.order) {
        _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_1__.fromRotationMatrix(this._target, m, order);
        this.onChange();
        return this;
    }

    fromQuaternion(q, order = this.order, isInternal) {
        tmpMat4.fromQuaternion(q);
        this._target.fromRotationMatrix(tmpMat4, order);
        // Avoid infinite recursion
        if (!isInternal) this.onChange();
        return this;
    }

    fromArray(a, o = 0) {
        this._target[0] = a[o];
        this._target[1] = a[o + 1];
        this._target[2] = a[o + 2];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/Mat3.js":
/*!********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/Mat3.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mat3: () => (/* binding */ Mat3)
/* harmony export */ });
/* harmony import */ var _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Mat3Func.js */ "../plugin-slug/node_modules/ogl/src/math/functions/Mat3Func.js");


class Mat3 extends Array {
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00.length) return this.copy(m00);
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    translate(v, m = this) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.translate(this, m, v);
        return this;
    }

    rotate(v, m = this) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.rotate(this, m, v);
        return this;
    }

    scale(v, m = this) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, m, v);
        return this;
    }

    multiply(ma, mb) {
        if (mb) {
            _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, ma, mb);
        } else {
            _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, ma);
        }
        return this;
    }

    identity() {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
        return this;
    }

    copy(m) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, m);
        return this;
    }

    fromMatrix4(m) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.fromMat4(this, m);
        return this;
    }

    fromQuaternion(q) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat(this, q);
        return this;
    }

    fromBasis(vec3a, vec3b, vec3c) {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this;
    }

    inverse(m = this) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, m);
        return this;
    }

    getNormalMatrix(m) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__.normalFromMat4(this, m);
        return this;
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/Mat4.js":
/*!********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/Mat4.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mat4: () => (/* binding */ Mat4)
/* harmony export */ });
/* harmony import */ var _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Mat4Func.js */ "../plugin-slug/node_modules/ogl/src/math/functions/Mat4Func.js");


class Mat4 extends Array {
    constructor(
        m00 = 1,
        m01 = 0,
        m02 = 0,
        m03 = 0,
        m10 = 0,
        m11 = 1,
        m12 = 0,
        m13 = 0,
        m20 = 0,
        m21 = 0,
        m22 = 1,
        m23 = 0,
        m30 = 0,
        m31 = 0,
        m32 = 0,
        m33 = 1
    ) {
        super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    get x() {
        return this[12];
    }

    get y() {
        return this[13];
    }

    get z() {
        return this[14];
    }

    get w() {
        return this[15];
    }

    set x(v) {
        this[12] = v;
    }

    set y(v) {
        this[13] = v;
    }

    set z(v) {
        this[14] = v;
    }

    set w(v) {
        this[15] = v;
    }

    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) return this.copy(m00);
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    translate(v, m = this) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.translate(this, m, v);
        return this;
    }

    rotate(v, axis, m = this) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.rotate(this, m, v, axis);
        return this;
    }

    scale(v, m = this) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, m, typeof v === 'number' ? [v, v, v] : v);
        return this;
    }

    add(ma, mb) {
        if (mb) _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, ma, mb);
        else _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, ma);
        return this;
    }

    sub(ma, mb) {
        if (mb) _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, ma, mb);
        else _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, ma);
        return this;
    }

    multiply(ma, mb) {
        if (!ma.length) {
            _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiplyScalar(this, this, ma);
        } else if (mb) {
            _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, ma, mb);
        } else {
            _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, ma);
        }
        return this;
    }

    identity() {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.identity(this);
        return this;
    }

    copy(m) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, m);
        return this;
    }

    fromPerspective({ fov, aspect, near, far } = {}) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.perspective(this, fov, aspect, near, far);
        return this;
    }

    fromOrthogonal({ left, right, bottom, top, near, far }) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.ortho(this, left, right, bottom, top, near, far);
        return this;
    }

    fromQuaternion(q) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat(this, q);
        return this;
    }

    setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
    }

    inverse(m = this) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.invert(this, m);
        return this;
    }

    compose(q, pos, scale) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.compose(this, q, pos, scale);
        return this;
    }

    decompose(q, pos, scale) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.decompose(this, q, pos, scale);
        return this;
    }

    getRotation(q) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getRotation(q, this);
        return this;
    }

    getTranslation(pos) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getTranslation(pos, this);
        return this;
    }

    getScaling(scale) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getScaling(scale, this);
        return this;
    }

    getMaxScaleOnAxis() {
        return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.getMaxScaleOnAxis(this);
    }

    lookAt(eye, target, up) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.targetTo(this, eye, target, up);
        return this;
    }

    determinant() {
        return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__.determinant(this);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this[4] = a[o + 4];
        this[5] = a[o + 5];
        this[6] = a[o + 6];
        this[7] = a[o + 7];
        this[8] = a[o + 8];
        this[9] = a[o + 9];
        this[10] = a[o + 10];
        this[11] = a[o + 11];
        this[12] = a[o + 12];
        this[13] = a[o + 13];
        this[14] = a[o + 14];
        this[15] = a[o + 15];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        a[o + 4] = this[4];
        a[o + 5] = this[5];
        a[o + 6] = this[6];
        a[o + 7] = this[7];
        a[o + 8] = this[8];
        a[o + 9] = this[9];
        a[o + 10] = this[10];
        a[o + 11] = this[11];
        a[o + 12] = this[12];
        a[o + 13] = this[13];
        a[o + 14] = this[14];
        a[o + 15] = this[15];
        return a;
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/Quat.js":
/*!********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/Quat.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quat: () => (/* binding */ Quat)
/* harmony export */ });
/* harmony import */ var _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/QuatFunc.js */ "../plugin-slug/node_modules/ogl/src/math/functions/QuatFunc.js");


class Quat extends Array {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        super(x, y, z, w);
        this.onChange = () => {};

        // Keep reference to proxy target to avoid triggering onChange internally
        this._target = this;

        // Return a proxy to trigger onChange when array elements are edited directly
        const triggerProps = ['0', '1', '2', '3'];
        return new Proxy(this, {
            set(target, property) {
                const success = Reflect.set(...arguments);
                if (success && triggerProps.includes(property)) target.onChange();
                return success;
            },
        });
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    get w() {
        return this[3];
    }

    set x(v) {
        this._target[0] = v;
        this.onChange();
    }

    set y(v) {
        this._target[1] = v;
        this.onChange();
    }

    set z(v) {
        this._target[2] = v;
        this.onChange();
    }

    set w(v) {
        this._target[3] = v;
        this.onChange();
    }

    identity() {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.identity(this._target);
        this.onChange();
        return this;
    }

    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.set(this._target, x, y, z, w);
        this.onChange();
        return this;
    }

    rotateX(a) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateX(this._target, this._target, a);
        this.onChange();
        return this;
    }

    rotateY(a) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateY(this._target, this._target, a);
        this.onChange();
        return this;
    }

    rotateZ(a) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.rotateZ(this._target, this._target, a);
        this.onChange();
        return this;
    }

    inverse(q = this._target) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.invert(this._target, q);
        this.onChange();
        return this;
    }

    conjugate(q = this._target) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.conjugate(this._target, q);
        this.onChange();
        return this;
    }

    copy(q) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.copy(this._target, q);
        this.onChange();
        return this;
    }

    normalize(q = this._target) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this._target, q);
        this.onChange();
        return this;
    }

    multiply(qA, qB) {
        if (qB) {
            _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this._target, qA, qB);
        } else {
            _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this._target, this._target, qA);
        }
        this.onChange();
        return this;
    }

    dot(v) {
        return _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.dot(this._target, v);
    }

    fromMatrix3(matrix3) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.fromMat3(this._target, matrix3);
        this.onChange();
        return this;
    }

    fromEuler(euler, isInternal) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.fromEuler(this._target, euler, euler.order);
        // Avoid infinite recursion
        if (!isInternal) this.onChange();
        return this;
    }

    fromAxisAngle(axis, a) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.setAxisAngle(this._target, axis, a);
        this.onChange();
        return this;
    }

    slerp(q, t) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__.slerp(this._target, this._target, q, t);
        this.onChange();
        return this;
    }

    fromArray(a, o = 0) {
        this._target[0] = a[o];
        this._target[1] = a[o + 1];
        this._target[2] = a[o + 2];
        this._target[3] = a[o + 3];
        this.onChange();
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/Vec2.js":
/*!********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/Vec2.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vec2: () => (/* binding */ Vec2)
/* harmony export */ });
/* harmony import */ var _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Vec2Func.js */ "../plugin-slug/node_modules/ogl/src/math/functions/Vec2Func.js");


class Vec2 extends Array {
    constructor(x = 0, y = x) {
        super(x, y);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set(x, y = x) {
        if (x.length) return this.copy(x);
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, x, y);
        return this;
    }

    copy(v) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, v);
        return this;
    }

    add(va, vb) {
        if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, va, vb);
        else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, va);
        return this;
    }

    sub(va, vb) {
        if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, va, vb);
        else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, va);
        return this;
    }

    multiply(v) {
        if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, v);
        else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
        return this;
    }

    divide(v) {
        if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.divide(this, this, v);
        else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, 1 / v);
        return this;
    }

    inverse(v = this) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.inverse(this, v);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
    }

    distance(v) {
        if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.distance(this, v);
        else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
    }

    squaredLen() {
        return this.squaredDistance();
    }

    squaredDistance(v) {
        if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance(this, v);
        else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
    }

    negate(v = this) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.negate(this, v);
        return this;
    }

    cross(va, vb) {
        if (vb) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(va, vb);
        return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, va);
    }

    scale(v) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
        return this;
    }

    normalize() {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this, this);
        return this;
    }

    dot(v) {
        return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.dot(this, v);
    }

    equals(v) {
        return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.exactEquals(this, v);
    }

    applyMatrix3(mat3) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat3(this, this, mat3);
        return this;
    }

    applyMatrix4(mat4) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat4(this, this, mat4);
        return this;
    }

    lerp(v, a) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this, this, v, a);
        return this;
    }

    smoothLerp(v, decay, dt) {
        _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__.smoothLerp(this, this, v, decay, dt);
        return this;
    }

    clone() {
        return new Vec2(this[0], this[1]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        return a;
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/Vec3.js":
/*!********************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/Vec3.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vec3: () => (/* binding */ Vec3)
/* harmony export */ });
/* harmony import */ var _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/Vec3Func.js */ "../plugin-slug/node_modules/ogl/src/math/functions/Vec3Func.js");


class Vec3 extends Array {
    constructor(x = 0, y = x, z = x) {
        super(x, y, z);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set z(v) {
        this[2] = v;
    }

    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.set(this, x, y, z);
        return this;
    }

    copy(v) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.copy(this, v);
        return this;
    }

    add(va, vb) {
        if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, va, vb);
        else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.add(this, this, va);
        return this;
    }

    sub(va, vb) {
        if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, va, vb);
        else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.subtract(this, this, va);
        return this;
    }

    multiply(v) {
        if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.multiply(this, this, v);
        else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
        return this;
    }

    divide(v) {
        if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.divide(this, this, v);
        else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, 1 / v);
        return this;
    }

    inverse(v = this) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.inverse(this, v);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
    }

    distance(v) {
        if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.distance(this, v);
        else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length(this);
    }

    squaredLen() {
        return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
    }

    squaredDistance(v) {
        if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance(this, v);
        else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.squaredLength(this);
    }

    negate(v = this) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.negate(this, v);
        return this;
    }

    cross(va, vb) {
        if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, va, vb);
        else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.cross(this, this, va);
        return this;
    }

    scale(v) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scale(this, this, v);
        return this;
    }

    normalize() {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize(this, this);
        return this;
    }

    dot(v) {
        return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.dot(this, v);
    }

    equals(v) {
        return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.exactEquals(this, v);
    }

    applyMatrix3(mat3) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat3(this, this, mat3);
        return this;
    }

    applyMatrix4(mat4) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformMat4(this, this, mat4);
        return this;
    }

    scaleRotateMatrix4(mat4) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.scaleRotateMat4(this, this, mat4);
        return this;
    }

    applyQuaternion(q) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.transformQuat(this, this, q);
        return this;
    }

    angle(v) {
        return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.angle(this, v);
    }

    lerp(v, t) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this, this, v, t);
        return this;
    }

    smoothLerp(v, decay, dt) {
        _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.smoothLerp(this, this, v, decay, dt);
        return this;
    }

    clone() {
        return new Vec3(this[0], this[1], this[2]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }

    transformDirection(mat4) {
        const x = this[0];
        const y = this[1];
        const z = this[2];

        this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
        this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
        this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

        return this.normalize();
    }
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/ColorFunc.js":
/*!***********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/ColorFunc.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexToRGB: () => (/* binding */ hexToRGB),
/* harmony export */   numberToRGB: () => (/* binding */ numberToRGB),
/* harmony export */   parseColor: () => (/* binding */ parseColor)
/* harmony export */ });
const NAMES = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    fuchsia: '#ff00ff',
    cyan: '#00ffff',
    yellow: '#ffff00',
    orange: '#ff8000',
};

function hexToRGB(hex) {
    if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
    return [parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255];
}

function numberToRGB(num) {
    num = parseInt(num);
    return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

function parseColor(color) {
    // Empty
    if (color === undefined) return [0, 0, 0];

    // Decimal
    if (arguments.length === 3) return arguments;

    // Number
    if (!isNaN(color)) return numberToRGB(color);

    // Hex
    if (color[0] === '#') return hexToRGB(color);

    // Names
    if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);

    console.warn('Color format not recognised');
    return [0, 0, 0];
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/EulerFunc.js":
/*!***********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/EulerFunc.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromRotationMatrix: () => (/* binding */ fromRotationMatrix)
/* harmony export */ });
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
function fromRotationMatrix(out, m, order = 'YXZ') {
    if (order === 'XYZ') {
        out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
        if (Math.abs(m[8]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[10]);
            out[2] = Math.atan2(-m[4], m[0]);
        } else {
            out[0] = Math.atan2(m[6], m[5]);
            out[2] = 0;
        }
    } else if (order === 'YXZ') {
        out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
        if (Math.abs(m[9]) < 0.99999) {
            out[1] = Math.atan2(m[8], m[10]);
            out[2] = Math.atan2(m[1], m[5]);
        } else {
            out[1] = Math.atan2(-m[2], m[0]);
            out[2] = 0;
        }
    } else if (order === 'ZXY') {
        out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
        if (Math.abs(m[6]) < 0.99999) {
            out[1] = Math.atan2(-m[2], m[10]);
            out[2] = Math.atan2(-m[4], m[5]);
        } else {
            out[1] = 0;
            out[2] = Math.atan2(m[1], m[0]);
        }
    } else if (order === 'ZYX') {
        out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
        if (Math.abs(m[2]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[10]);
            out[2] = Math.atan2(m[1], m[0]);
        } else {
            out[0] = 0;
            out[2] = Math.atan2(-m[4], m[5]);
        }
    } else if (order === 'YZX') {
        out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
        if (Math.abs(m[1]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[5]);
            out[1] = Math.atan2(-m[2], m[0]);
        } else {
            out[0] = 0;
            out[1] = Math.atan2(m[8], m[10]);
        }
    } else if (order === 'XZY') {
        out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
        if (Math.abs(m[4]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[5]);
            out[1] = Math.atan2(m[8], m[0]);
        } else {
            out[0] = Math.atan2(-m[9], m[10]);
            out[1] = 0;
        }
    }

    return out;
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/Mat3Func.js":
/*!**********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/Mat3Func.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   normalFromMat4: () => (/* binding */ normalFromMat4),
/* harmony export */   projection: () => (/* binding */ projection),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}

/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */
function fromQuat(out, q) {
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1],
            a02 = a[2],
            a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }

    return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    let b01 = a22 * a11 - a12 * a21;
    let b11 = -a22 * a10 + a12 * a20;
    let b21 = a21 * a10 - a11 * a20;

    // Calculate the determinant
    let det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    let b00 = b[0],
        b01 = b[1],
        b02 = b[2];
    let b10 = b[3],
        b11 = b[4],
        b12 = b[5];
    let b20 = b[6],
        b21 = b[7],
        b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        x = v[0],
        y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
    let x = v[0],
        y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */
function normalFromMat4(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/Mat4Func.js":
/*!**********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/Mat4Func.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   decompose: () => (/* binding */ decompose),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   getMaxScaleOnAxis: () => (/* binding */ getMaxScaleOnAxis),
/* harmony export */   getRotation: () => (/* binding */ getRotation),
/* harmony export */   getScaling: () => (/* binding */ getScaling),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   ortho: () => (/* binding */ ortho),
/* harmony export */   perspective: () => (/* binding */ perspective),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   targetTo: () => (/* binding */ targetTo),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec3Func.js */ "../plugin-slug/node_modules/ogl/src/math/functions/Vec3Func.js");


const EPSILON = 0.000001;

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a12 = a[6],
            a13 = a[7];
        let a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }

    return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    // Cache only the current line of the second matrix
    let b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    let x = v[0],
        y = v[1],
        z = v[2];
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];

        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    let x = v[0],
        y = v[1],
        z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    let x = axis[0],
        y = axis[1],
        z = axis[2];
    let len = Math.hypot(x, y, z);
    let s, c, t;
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;
    let b00, b01, b02;
    let b10, b11, b12;
    let b20, b21, b22;

    if (Math.abs(len) < EPSILON) {
        return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];

    return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];

    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);

    return out;
}

function getMaxScaleOnAxis(mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];

    const x = m11 * m11 + m12 * m12 + m13 * m13;
    const y = m21 * m21 + m22 * m22 + m23 * m23;
    const z = m31 * m31 + m32 * m32 + m33 * m33;

    return Math.sqrt(Math.max(x, y, z));
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
const getRotation = (function () {
    const temp = [1, 1, 1];

    return function (out, mat) {
        let scaling = temp;
        getScaling(scaling, mat);

        let is1 = 1 / scaling[0];
        let is2 = 1 / scaling[1];
        let is3 = 1 / scaling[2];

        let sm11 = mat[0] * is1;
        let sm12 = mat[1] * is2;
        let sm13 = mat[2] * is3;
        let sm21 = mat[4] * is1;
        let sm22 = mat[5] * is2;
        let sm23 = mat[6] * is3;
        let sm31 = mat[8] * is1;
        let sm32 = mat[9] * is2;
        let sm33 = mat[10] * is3;

        let trace = sm11 + sm22 + sm33;
        let S = 0;

        if (trace > 0) {
            S = Math.sqrt(trace + 1.0) * 2;
            out[3] = 0.25 * S;
            out[0] = (sm23 - sm32) / S;
            out[1] = (sm31 - sm13) / S;
            out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
            S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
            out[3] = (sm23 - sm32) / S;
            out[0] = 0.25 * S;
            out[1] = (sm12 + sm21) / S;
            out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
            S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
            out[3] = (sm31 - sm13) / S;
            out[0] = (sm12 + sm21) / S;
            out[1] = 0.25 * S;
            out[2] = (sm23 + sm32) / S;
        } else {
            S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
            out[3] = (sm12 - sm21) / S;
            out[0] = (sm31 + sm13) / S;
            out[1] = (sm23 + sm32) / S;
            out[2] = 0.25 * S;
        }

        return out;
    };
})();

/**
 * From glTF-Transform
 * https://github.com/donmccurdy/glTF-Transform/blob/main/packages/core/src/utils/math-utils.ts
 *
 * Decompose a mat4 to TRS properties.
 *
 * Equivalent to the Matrix4 decompose() method in three.js, and intentionally not using the
 * gl-matrix version. See: https://github.com/toji/gl-matrix/issues/408
 *
 * @param {mat4} srcMat Matrix element, to be decomposed to TRS properties.
 * @param {quat4} dstRotation Rotation element, to be overwritten.
 * @param {vec3} dstTranslation Translation element, to be overwritten.
 * @param {vec3} dstScale Scale element, to be overwritten
 */
function decompose(srcMat, dstRotation, dstTranslation, dstScale) {
    let sx = _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length([srcMat[0], srcMat[1], srcMat[2]]);
    const sy = _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length([srcMat[4], srcMat[5], srcMat[6]]);
    const sz = _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__.length([srcMat[8], srcMat[9], srcMat[10]]);

    // if determine is negative, we need to invert one scale
    const det = determinant(srcMat);
    if (det < 0) sx = -sx;

    dstTranslation[0] = srcMat[12];
    dstTranslation[1] = srcMat[13];
    dstTranslation[2] = srcMat[14];

    // scale the rotation part
    const _m1 = srcMat.slice();

    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;

    _m1[0] *= invSX;
    _m1[1] *= invSX;
    _m1[2] *= invSX;

    _m1[4] *= invSY;
    _m1[5] *= invSY;
    _m1[6] *= invSY;

    _m1[8] *= invSZ;
    _m1[9] *= invSZ;
    _m1[10] *= invSZ;

    getRotation(dstRotation, _m1);

    dstScale[0] = sx;
    dstScale[1] = sy;
    dstScale[2] = sz;
}

/**
 * From glTF-Transform
 * https://github.com/donmccurdy/glTF-Transform/blob/main/packages/core/src/utils/math-utils.ts
 *
 * Compose TRS properties to a mat4.
 *
 * Equivalent to the Matrix4 compose() method in three.js, and intentionally not using the
 * gl-matrix version. See: https://github.com/toji/gl-matrix/issues/408
 *
 * @param {mat4} dstMat Matrix element, to be modified and returned.
 * @param {quat4} srcRotation Rotation element of matrix.
 * @param {vec3} srcTranslation Translation element of matrix.
 * @param {vec3} srcScale Scale element of matrix.
 * @returns {mat4} dstMat, overwritten to mat4 equivalent of given TRS properties.
 */
function compose(dstMat, srcRotation, srcTranslation, srcScale) {
    const te = dstMat;

    const x = srcRotation[0],
        y = srcRotation[1],
        z = srcRotation[2],
        w = srcRotation[3];
    const x2 = x + x,
        y2 = y + y,
        z2 = z + z;
    const xx = x * x2,
        xy = x * y2,
        xz = x * z2;
    const yy = y * y2,
        yz = y * z2,
        zz = z * z2;
    const wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    const sx = srcScale[0],
        sy = srcScale[1],
        sz = srcScale[2];

    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;

    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;

    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;

    te[12] = srcTranslation[0];
    te[13] = srcTranslation[1];
    te[14] = srcTranslation[2];
    te[15] = 1;

    return te;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let xy = x * y2;
    let xz = x * z2;
    let yy = y * y2;
    let yz = y * z2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    let sx = s[0];
    let sy = s[1];
    let sz = s[2];

    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    let f = 1.0 / Math.tan(fovy / 2);
    let nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    let lr = 1 / (left - right);
    let bt = 1 / (bottom - top);
    let nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} target Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
    let eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2];

    let z0 = eyex - target[0],
        z1 = eyey - target[1],
        z2 = eyez - target[2];

    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len === 0) {
        // eye and target are in the same position
        z2 = 1;
    } else {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }

    let x0 = upy * z2 - upz * z1,
        x1 = upz * z0 - upx * z2,
        x2 = upx * z1 - upy * z0;

    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len === 0) {
        // up and z are parallel
        if (upz) {
            upx += 1e-6;
        } else if (upy) {
            upz += 1e-6;
        } else {
            upy += 1e-6;
        }
        (x0 = upy * z2 - upz * z1), (x1 = upz * z0 - upx * z2), (x2 = upx * z1 - upy * z0);

        len = x0 * x0 + x1 * x1 + x2 * x2;
    }

    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;

    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/QuatFunc.js":
/*!**********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/QuatFunc.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   fromEuler: () => (/* binding */ fromEuler),
/* harmony export */   fromMat3: () => (/* binding */ fromMat3),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setAxisAngle: () => (/* binding */ setAxisAngle),
/* harmony export */   slerp: () => (/* binding */ slerp)
/* harmony export */ });
/* harmony import */ var _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec4Func.js */ "../plugin-slug/node_modules/ogl/src/math/functions/Vec4Func.js");


/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    let s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}

/**
 * Multiplies two quats
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let by = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bz = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    let omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }
    // calculate coefficients
    if (1.0 - cosom > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;

    return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
    let a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3];
    let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    let invDot = dot ? 1.0 / dot : 0;

    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    let fTrace = m[0] + m[4] + m[8];
    let fRoot;

    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        let i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;

        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }

    return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, euler, order = 'YXZ') {
    let sx = Math.sin(euler[0] * 0.5);
    let cx = Math.cos(euler[0] * 0.5);
    let sy = Math.sin(euler[1] * 0.5);
    let cy = Math.cos(euler[1] * 0.5);
    let sz = Math.sin(euler[2] * 0.5);
    let cz = Math.cos(euler[2] * 0.5);

    if (order === 'XYZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'YXZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'ZXY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'ZYX') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'YZX') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'XZY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    }

    return out;
}

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.set;

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.add;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.scale;

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.lerp;

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.length;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__.normalize;


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/Vec2Func.js":
/*!**********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/Vec2Func.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   smoothLerp: () => (/* binding */ smoothLerp),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat2: () => (/* binding */ transformMat2),
/* harmony export */   transformMat2d: () => (/* binding */ transformMat2d),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x * x + y * y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1];
    return x * x + y * y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1];
    var len = x * x + y * y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product returns a scalar
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} cross product of a and b
 */
function cross(a, b) {
    return a[0] * b[1] - a[1] * b[0];
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}

/**
 * Performs a frame rate independant, linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} decay decay constant for interpolation. useful range between 1 and 25, from slow to fast.
 * @param {Number} dt delta time
 * @returns {vec2} out
 */
function smoothLerp(out, a, b, decay, dt) {
    const exp = Math.exp(-decay * dt);
    let ax = a[0];
    let ay = a[1];

    out[0] = b[0] + (ax - b[0]) * exp;
    out[1] = b[1] + (ay - b[1]) * exp;
    return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    let x = a[0];
    let y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/Vec3Func.js":
/*!**********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/Vec3Func.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleRotateMat4: () => (/* binding */ scaleRotateMat4),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   smoothLerp: () => (/* binding */ smoothLerp),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    let ax = a[0],
        ay = a[1],
        az = a[2];
    let bx = b[0],
        by = b[1],
        bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}

/**
 * Performs a frame rate independant, linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} decay decay constant for interpolation. useful range between 1 and 25, from slow to fast.
 * @param {Number} dt delta time
 * @returns {vec3} out
 */
function smoothLerp(out, a, b, decay, dt) {
    const exp = Math.exp(-decay * dt);
    let ax = a[0];
    let ay = a[1];
    let az = a[2];

    out[0] = b[0] + (ax - b[0]) * exp;
    out[1] = b[1] + (ay - b[1]) * exp;
    out[2] = b[2] + (az - b[2]) * exp;
    return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}

/**
 * Same as above but doesn't apply translation.
 * Useful for rays.
 */
function scaleRotateMat4(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
    return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed

    let x = a[0],
        y = a[1],
        z = a[2];
    let qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3];

    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;

    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;

    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;

    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;

    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
const angle = (function () {
    const tempA = [0, 0, 0];
    const tempB = [0, 0, 0];

    return function (a, b) {
        copy(tempA, a);
        copy(tempB, b);

        normalize(tempA, tempA);
        normalize(tempB, tempB);

        let cosine = dot(tempA, tempB);

        if (cosine > 1.0) {
            return 0;
        } else if (cosine < -1.0) {
            return Math.PI;
        } else {
            return Math.acos(cosine);
        }
    };
})();

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}


/***/ }),

/***/ "../plugin-slug/node_modules/ogl/src/math/functions/Vec4Func.js":
/*!**********************************************************************!*\
  !*** ../plugin-slug/node_modules/ogl/src/math/functions/Vec4Func.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
const EPSILON = 0.000001;

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    let aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}


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
/*!******************************************!*\
  !*** ./src/customCursor/customCursor.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../plugin-slug/node_modules/react-dom/client.js");
/* harmony import */ var _cursor_Effects_CursorEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursor/Effects/CursorEffects */ "./src/customCursor/cursor/Effects/CursorEffects.js");
/* harmony import */ var _cursor_Shape_Cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cursor/Shape/Cursor */ "./src/customCursor/cursor/Shape/Cursor.js");
/* harmony import */ var _cursor_Shape_CursorRibbon_CursorRibbon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cursor/Shape/CursorRibbon/CursorRibbon */ "./src/customCursor/cursor/Shape/CursorRibbon/CursorRibbon.js");
/* harmony import */ var _hooks_useCursorVisibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useCursorVisibility */ "./src/customCursor/hooks/useCursorVisibility.js");
/* harmony import */ var _hooks_useFilterCursorData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useFilterCursorData */ "./src/customCursor/hooks/useFilterCursorData.js");
/* harmony import */ var _utils_useWPAjax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/useWPAjax */ "./src/customCursor/utils/useWPAjax.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/customCursor/style.scss");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/common */ "./src/customCursor/utils/common.js");









// const { createRoot } = window.ReactDOM;



const CustomCursor = ({
  cursorInfo
}) => {
  const {
    data,
    isLoading
  } = (0,_utils_useWPAjax__WEBPACK_IMPORTED_MODULE_7__["default"])('csb_get_adv_scrollbar_cursor_data_settings', {
    nonce: window.csbAdvScrollbarCursorConfig?.nonce
  });
  const [cursorData, setCursorData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const isCursorVisible = (0,_hooks_useCursorVisibility__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cursorInfo);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('advScrCursorCustomEventOnCursor', function (e) {
      setState(e.detail.data);
    });
  }, []);
  const filteredData = (0,_hooks_useFilterCursorData__WEBPACK_IMPORTED_MODULE_6__.useFilterCursorData)(state, cursorData);
  const {
    enableCursor = true
  } = filteredData || {};
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isLoading && data) {
      setCursorData(data);
    }
  }, [data, isLoading]);
  const cursorCssVar = {
    ...((0,_utils_common__WEBPACK_IMPORTED_MODULE_9__.isSet)(filteredData?.shape?.customImg?.img) && filteredData?.source == "predefined" && {
      cursor: `url(${filteredData?.shape?.customImg?.img}), pointer`
    }),
    ...(filteredData?.source == "shape" && {
      cursor: enableCursor ? "auto" : "none"
    }),
    ...(filteredData?.source == "customUrl" && {
      cursor: `url(${filteredData?.shape?.customImg?.url}), pointer`
    })
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (window.self === window.top && cursorCssVar?.cursor) {
      const body = document.body;
      body.style.cursor = cursorCssVar.cursor;
    }
  }, [filteredData]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, filteredData?.source == "shape" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, filteredData?.shape?.type === 'ribbon' && isCursorVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cursor_Shape_CursorRibbon_CursorRibbon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...filteredData?.shape?.ribbon,
    domEl: window,
    eventEl: window,
    rect: {},
    key: filteredData?.shape?.type
  }), filteredData?.shape?.type && filteredData?.shape?.type !== 'ribbon' && isCursorVisible ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cursor_Shape_Cursor__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shape: filteredData?.shape,
    domEl: window,
    eventEl: window,
    rect: {},
    key: filteredData?.shape?.type
  }) : null), filteredData?.effect?.type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cursor_Effects_CursorEffects__WEBPACK_IMPORTED_MODULE_2__["default"], {
    effect: filteredData?.effect,
    key: filteredData?.effect?.type
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCursor);
document.addEventListener('DOMContentLoaded', () => {
  const cursorEl = document.getElementById('csbAdvScrollBarCursor');
  if (cursorEl) {
    const cursorData = JSON.parse(cursorEl.dataset.cursor);
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(cursorEl);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomCursor, {
      cursorInfo: cursorData
    }));
  } else {
    // Check if we're in the top-level window (not in an iframe)
    if (window.self === window.top) {
      const dom = document.createElement('div');
      document.body.appendChild(dom);
      const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(dom);
      root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomCursor, null));
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=cursor.js.map