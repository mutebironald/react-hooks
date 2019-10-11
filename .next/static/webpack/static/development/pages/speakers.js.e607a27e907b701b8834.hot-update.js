webpackHotUpdate("static/development/pages/speakers.js",{

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/ronaldmutebi/Desktop/Desktop/bench/react-hooks-trials/src/SpeakerDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SpeakerDetail = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      favorite = _ref.favorite,
      bio = _ref.bio,
      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;
  // console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])();
  return __jsx("div", {
    className: "card col-4 cardmin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "card-img-top",
    primaryImg: "/static/speakers/bw/Speaker-".concat(id, ".jpg"),
    secondaryImg: "/static/speakers/Speaker-".concat(id, ".jpg"),
    alt: "{firstName} {lastName}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, context.loggedInUserEmail ? __jsx("button", {
    "data-sessionid": id,
    className: favorite ? "heartredbutton" : "heartdarkbutton",
    onClick: function onClick(e) {
      onHeartFavoriteHandler(e, !favorite);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }) : null, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, firstName, " ", lastName)), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, bio)));
});
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ })

})
//# sourceMappingURL=speakers.js.e607a27e907b701b8834.hot-update.js.map