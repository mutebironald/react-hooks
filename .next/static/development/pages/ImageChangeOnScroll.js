(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ImageChangeOnScroll.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnScroll.js!./":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnScroll.js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChangeOnScroll", function() {
      var mod = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js", function() {
          if(!next.router.components["/ImageChangeOnScroll"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js")
          next.router.update("/ImageChangeOnScroll", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_13346faca0e924a89b24 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_13346faca0e924a89b24 */ "dll-reference dll_13346faca0e924a89b24"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
var _jsxFileName = "/Users/ronaldmutebi/Desktop/Desktop/bench/react-hooks/pages/ImageChangeOnScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnScroll = function ImageChangeOnScroll() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (speakerId) {
    return __jsx("div", {
      key: speakerId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
      primaryImg: "https://www.how-old.net/Images/faces2/main00".concat(speakerId, ".jpg"),
      secondaryImg: "https://www.how-old.net/Images/faces2/main00".concat(speakerId, ".jpg"),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ronaldmutebi/Desktop/Desktop/bench/react-hooks/src/ImageToggleOnScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); //useRef gives us controll over dom elements

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //useEffect helps us track state when components start and finish componentWillunMount, componentDidUnmount
    window.addEventListener("scroll", scrollHandler);
    setInView(function () {
      return isInView();
    });
    setIsLoading(false);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState2[0],
      setInView = _useState2[1];

  var isInView = function isInView() {
    if (imageRef.current) {
      var rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    setInView(function () {
      return isInView();
    });
  };

  return isLoading ? null : __jsx("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    style: {
      width: "200px",
      height: "200px"
    },
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnScroll.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnScroll.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnScroll.js!./");


/***/ }),

/***/ "dll-reference dll_13346faca0e924a89b24":
/*!*******************************************!*\
  !*** external "dll_13346faca0e924a89b24" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_13346faca0e924a89b24;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChangeOnScroll.js.map