(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ImageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnMouseOver.js!./":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnMouseOver.js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChangeOnMouseOver", function() {
      var mod = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js", function() {
          if(!next.router.components["/ImageChangeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
          next.router.update("/ImageChangeOnMouseOver", updatedPage)
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

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");
var _jsxFileName = "/Users/ronaldmutebi/Desktop/Desktop/bench/react-hooks/pages/ImageChangeOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "https://www.how-old.net/Images/faces2/main003.jpg",
    secondaryImg: "https://www.how-old.net/Images/faces2/main003.jpg",
    alt: "face1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "\xA0\xA0\xA0", __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    secondaryImg: "https://www.how-old.net/Images/faces2/main001.jpg",
    primaryImg: "https://www.how-old.net/Images/faces2/main001.jpg",
    alt: "face2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ronaldmutebi/Desktop/Desktop/bench/react-hooks/src/ImageToggleOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
      console.log(imageRef.current.src, 'ref');
    },
    src: primaryImg,
    alt: "",
    style: {
      height: "355px"
    },
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnMouseOver.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fronaldmutebi%2FDesktop%2FDesktop%2Fbench%2Freact-hooks%2Fpages%2FImageChangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_13346faca0e924a89b24":
/*!*******************************************!*\
  !*** external "dll_13346faca0e924a89b24" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_13346faca0e924a89b24;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChangeOnMouseOver.js.map