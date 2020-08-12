webpackHotUpdate("static/development/pages/representatives.js",{

/***/ "./components/MapMarker/index.jsx":
/*!****************************************!*\
  !*** ./components/MapMarker/index.jsx ***!
  \****************************************/
/*! exports provided: MapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapMarker\", function() { return MapMarker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/MapMarker/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction titleCase(string) {\n  var y = string.split(\"_\");\n  y.forEach(function (value, i, array) {\n    array[i] = array[i][0].toUpperCase() + array[i].slice(1);\n  });\n  return y.join(\" \");\n}\n\nvar MapMarker = function MapMarker(_ref) {\n  _s();\n\n  var output_key = _ref.output_key,\n      key = _ref.key,\n      name = _ref.name,\n      coordinates = _ref.coordinates,\n      site_info = _ref.site_info;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isInfoOpen = _useState[0],\n      setIsInfoOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      currentInfoOpen = _useState2[0],\n      setInfoOpen = _useState2[1];\n\n  var toggleInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setIsInfoOpen(function (wasOpen) {\n      return !wasOpen;\n    });\n    setInfoOpen(output_key);\n  }, [setIsInfoOpen]);\n  return __jsx(\"div\", {\n    className: \"map-marker-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: toggleInfo,\n    className: \"map-marker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    //className={`map-marker-info${currentInfoOpen === output_key.key && isInfoOpen ? ' map-marker-info--active' : ''}`}\n    className: \"map-marker-info\".concat(isInfoOpen ? ' map-marker-info--active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, coordinates, site_info.name ? \"\".concat(titleCase(name)) : '', __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 51\n    }\n  }), site_info.address));\n};\n\n_s(MapMarker, \"jDfshDY+O4z9CZ4cf4/oyOsMGqQ=\");\n\n_c = MapMarker;\n\nvar _c;\n\n$RefreshReg$(_c, \"MapMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcE1hcmtlci9pbmRleC5qc3g/YWYyNSJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHJpbmciLCJ5Iiwic3BsaXQiLCJmb3JFYWNoIiwidmFsdWUiLCJpIiwiYXJyYXkiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIk1hcE1hcmtlciIsIm91dHB1dF9rZXkiLCJrZXkiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJzaXRlX2luZm8iLCJ1c2VTdGF0ZSIsImlzSW5mb09wZW4iLCJzZXRJc0luZm9PcGVuIiwiY3VycmVudEluZm9PcGVuIiwic2V0SW5mb09wZW4iLCJ0b2dnbGVJbmZvIiwidXNlQ2FsbGJhY2siLCJlIiwid2FzT3BlbiIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTBCO0FBQ3hCLE1BQU1DLENBQUMsR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWEsR0FBYixDQUFWO0FBQ0FELEdBQUMsQ0FBQ0UsT0FBRixDQUFVLFVBQVNDLEtBQVQsRUFBZ0JDLENBQWhCLEVBQW1CQyxLQUFuQixFQUF5QjtBQUNqQ0EsU0FBSyxDQUFDRCxDQUFELENBQUwsR0FBV0MsS0FBSyxDQUFDRCxDQUFELENBQUwsQ0FBUyxDQUFULEVBQVlFLFdBQVosS0FBNEJELEtBQUssQ0FBQ0QsQ0FBRCxDQUFMLENBQVNHLEtBQVQsQ0FBZSxDQUFmLENBQXZDO0FBQ0QsR0FGRDtBQUdBLFNBQVFQLENBQUMsQ0FBQ1EsSUFBRixDQUFPLEdBQVAsQ0FBUjtBQUNEOztBQUVNLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXVEO0FBQUE7O0FBQUEsTUFBcERDLFVBQW9ELFFBQXBEQSxVQUFvRDtBQUFBLE1BQXhDQyxHQUF3QyxRQUF4Q0EsR0FBd0M7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLFdBQTZCLFFBQTdCQSxXQUE2QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQzFDQyxzREFBUSxDQUFDLEtBQUQsQ0FEa0M7QUFBQSxNQUN2RUMsVUFEdUU7QUFBQSxNQUMzREMsYUFEMkQ7O0FBQUEsbUJBRXZDRixzREFBUSxDQUFDLEVBQUQsQ0FGK0I7QUFBQSxNQUV2RUcsZUFGdUU7QUFBQSxNQUV0REMsV0FGc0Q7O0FBSTlFLE1BQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDcENMLGlCQUFhLENBQUMsVUFBQ00sT0FBRDtBQUFBLGFBQWEsQ0FBQ0EsT0FBZDtBQUFBLEtBQUQsQ0FBYjtBQUNBSixlQUFXLENBQUNULFVBQUQsQ0FBWDtBQUNELEdBSDZCLEVBRzNCLENBQUNPLGFBQUQsQ0FIMkIsQ0FBOUI7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFRLFdBQU8sRUFBRUcsVUFBakI7QUFBNkIsYUFBUyxFQUFDLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU1FO0FBQ0U7QUFDQSxhQUFTLDJCQUFxQkosVUFBVSxHQUFHLDBCQUFILEdBQWdDLEVBQS9ELENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDSCxXQUpELEVBS0NDLFNBQVMsQ0FBQ0YsSUFBVixhQUFvQmQsU0FBUyxDQUFDYyxJQUFELENBQTdCLElBQXdDLEVBTHpDLEVBSzRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMNUMsRUFNQ0UsU0FBUyxDQUFDVSxPQU5YLENBTkYsQ0FERjtBQXNCRCxDQS9CTTs7R0FBTWYsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwTWFya2VyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHRpdGxlQ2FzZShzdHJpbmcpe1xuICBjb25zdCB5ID0gc3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgeS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBpLCBhcnJheSl7XG4gICAgYXJyYXlbaV0gPSBhcnJheVtpXVswXS50b1VwcGVyQ2FzZSgpICsgYXJyYXlbaV0uc2xpY2UoMSk7XG4gIH0pO1xuICByZXR1cm4gKHkuam9pbihcIiBcIikpO1xufVxuXG5leHBvcnQgY29uc3QgTWFwTWFya2VyID0gKHsgb3V0cHV0X2tleSwga2V5LCBuYW1lLCBjb29yZGluYXRlcywgc2l0ZV9pbmZvIH0pID0+IHtcbiAgY29uc3QgW2lzSW5mb09wZW4sIHNldElzSW5mb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAgXG4gIGNvbnN0IFtjdXJyZW50SW5mb09wZW4sIHNldEluZm9PcGVuXSA9IHVzZVN0YXRlKFwiXCIpOyAgXG5cbiAgY29uc3QgdG9nZ2xlSW5mbyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0SXNJbmZvT3Blbigod2FzT3BlbikgPT4gIXdhc09wZW4pOyAgICBcbiAgICBzZXRJbmZvT3BlbihvdXRwdXRfa2V5KTsgICAgICBcbiAgfSwgW3NldElzSW5mb09wZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLW1hcmtlci1jb250YWluZXJcIj5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVJbmZvfSBjbGFzc05hbWU9XCJtYXAtbWFya2VyXCI+XG4gICAgICAgIHsvKiB7dGV4dH0gKi99XG4gICAgICAgIHsvKiA8aW1nIG9uQ2xpY2s9e3RvZ2dsZUluZm99IHNyYz1cImh0dHBzOi8vd3d3LmZ1bHRvbmNvdW50eWdhLmdvdi8tL21lZGlhL0ltYWdlcy9JQ09OUy9DT1ZJRC9jb3JvbmF2aXJ1cy10ZXN0aW5nLWljb24tMDEuYXNoeD9oPTMwMCZ3PTMwMCZsYT1lbiZoYXNoPTE2N0Y1RTgxQTY2NEQ4NURDOTNDNjQ5ODFGMzc0MjQwXCIgY2xhc3NOYW1lPVwibWFwLW1hcmtlclwiID48L2ltZz4gKi99ICAgICAgICBcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICAvL2NsYXNzTmFtZT17YG1hcC1tYXJrZXItaW5mbyR7Y3VycmVudEluZm9PcGVuID09PSBvdXRwdXRfa2V5LmtleSAmJiBpc0luZm9PcGVuID8gJyBtYXAtbWFya2VyLWluZm8tLWFjdGl2ZScgOiAnJ31gfVxuICAgICAgICBjbGFzc05hbWU9e2BtYXAtbWFya2VyLWluZm8keyBpc0luZm9PcGVuID8gJyBtYXAtbWFya2VyLWluZm8tLWFjdGl2ZScgOiAnJ31gfVxuICAgICAgPlxuICAgICAge2Nvb3JkaW5hdGVzfSAgICAgICAgICAgXG4gICAgICB7c2l0ZV9pbmZvLm5hbWUgPyBgJHt0aXRsZUNhc2UobmFtZSl9YCA6ICcnfTxicj48L2JyPlxuICAgICAge3NpdGVfaW5mby5hZGRyZXNzfVxuICAgICAgey8qIHtPYmplY3Qua2V5cyhzaXRlX2luZm8pLm1hcChrZXkgPT4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICB7c2l0ZV9pbmZvW2tleV0gPyBgJHt0aXRsZUNhc2Uoa2V5KX06ICR7c2l0ZV9pbmZvW2tleV19YCA6ICcnfVxuICAgICAgICA8L3A+XG4gICAgICApKX0gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapMarker/index.jsx\n");

/***/ })

})