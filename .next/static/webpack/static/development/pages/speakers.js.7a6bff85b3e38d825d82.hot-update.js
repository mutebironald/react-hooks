webpackHotUpdate("static/development/pages/speakers.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "/Users/ronaldmutebi/Desktop/Desktop/bench/react-hooks-trials/src/SpeakerDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var SpeakerDetail = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function (_ref) {
  var id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      favorite = _ref.favorite,
      bio = _ref.bio,
      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;
  // console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_3__["ConfigContext"]);
  console.log("context".concat(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(context)));
  return __jsx("div", {
    className: "card col-4 cardmin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "card-img-top",
    primaryImg: "/static/speakers/bw/Speaker-".concat(id, ".jpg"),
    secondaryImg: "/static/speakers/Speaker-".concat(id, ".jpg"),
    alt: "{firstName} {lastName}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
      lineNumber: 31
    },
    __self: this
  }) : null, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, firstName, " ", lastName)), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, bio)));
});
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ })

})
//# sourceMappingURL=speakers.js.7a6bff85b3e38d825d82.hot-update.js.map