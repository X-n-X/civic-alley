webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/MapMarker/index.jsx":
/*!****************************************!*\
  !*** ./components/MapMarker/index.jsx ***!
  \****************************************/
/*! exports provided: MapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapMarker\", function() { return MapMarker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/MapMarker/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction titleCase(string) {\n  var y = string.split(\"_\");\n  y.forEach(function (value, i, array) {\n    array[i] = array[i][0].toUpperCase() + array[i].slice(1);\n  });\n  return y.join(\" \");\n}\n\nvar MapMarker = function MapMarker(_ref) {\n  _s();\n\n  var text = _ref.text,\n      key = _ref.key,\n      site_info = _ref.site_info;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isInfoOpen = _useState[0],\n      setIsInfoOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      currentInfoOpen = _useState2[0],\n      setInfoOpen = _useState2[1];\n\n  var toggleInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setIsInfoOpen(function (wasOpen) {\n      return !wasOpen;\n    });\n    setInfoOpen(key);\n  }, [setIsInfoOpen]);\n  return __jsx(\"div\", {\n    className: \"map-marker-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: toggleInfo,\n    className: \"map-marker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"map-marker-info\".concat(currentInfoOpen && isInfoOpen ? ' map-marker-info--active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, Object.keys(site_info).map(function (key) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }, titleCase(key), \": \", site_info[key]);\n  })));\n};\n\n_s(MapMarker, \"jDfshDY+O4z9CZ4cf4/oyOsMGqQ=\");\n\n_c = MapMarker;\n\nvar _c;\n\n$RefreshReg$(_c, \"MapMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcE1hcmtlci9pbmRleC5qc3g/YWYyNSJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHJpbmciLCJ5Iiwic3BsaXQiLCJmb3JFYWNoIiwidmFsdWUiLCJpIiwiYXJyYXkiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIk1hcE1hcmtlciIsInRleHQiLCJrZXkiLCJzaXRlX2luZm8iLCJ1c2VTdGF0ZSIsImlzSW5mb09wZW4iLCJzZXRJc0luZm9PcGVuIiwiY3VycmVudEluZm9PcGVuIiwic2V0SW5mb09wZW4iLCJ0b2dnbGVJbmZvIiwidXNlQ2FsbGJhY2siLCJlIiwid2FzT3BlbiIsIk9iamVjdCIsImtleXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTBCO0FBQ3hCLE1BQU1DLENBQUMsR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWEsR0FBYixDQUFWO0FBQ0FELEdBQUMsQ0FBQ0UsT0FBRixDQUFVLFVBQVNDLEtBQVQsRUFBZ0JDLENBQWhCLEVBQW1CQyxLQUFuQixFQUF5QjtBQUNqQ0EsU0FBSyxDQUFDRCxDQUFELENBQUwsR0FBV0MsS0FBSyxDQUFDRCxDQUFELENBQUwsQ0FBUyxDQUFULEVBQVlFLFdBQVosS0FBNEJELEtBQUssQ0FBQ0QsQ0FBRCxDQUFMLENBQVNHLEtBQVQsQ0FBZSxDQUFmLENBQXZDO0FBQ0QsR0FGRDtBQUdBLFNBQVFQLENBQUMsQ0FBQ1EsSUFBRixDQUFPLEdBQVAsQ0FBUjtBQUNEOztBQUVNLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxHQUFxQixRQUFyQkEsR0FBcUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBQyxLQUFELENBRFM7QUFBQSxNQUM5Q0MsVUFEOEM7QUFBQSxNQUNsQ0MsYUFEa0M7O0FBQUEsbUJBRWRGLHNEQUFRLENBQUMsRUFBRCxDQUZNO0FBQUEsTUFFOUNHLGVBRjhDO0FBQUEsTUFFN0JDLFdBRjZCOztBQUlyRCxNQUFNQyxVQUFVLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDTCxpQkFBYSxDQUFDLFVBQUNNLE9BQUQ7QUFBQSxhQUFhLENBQUNBLE9BQWQ7QUFBQSxLQUFELENBQWI7QUFDQUosZUFBVyxDQUFDTixHQUFELENBQVg7QUFDRCxHQUg2QixFQUczQixDQUFDSSxhQUFELENBSDJCLENBQTlCO0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBUSxXQUFPLEVBQUVHLFVBQWpCO0FBQTZCLGFBQVMsRUFBQyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFNRTtBQUNFLGFBQVMsMkJBQW9CRixlQUFlLElBQUlGLFVBQW5CLEdBQWdDLDBCQUFoQyxHQUE2RCxFQUFqRixDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQ1EsTUFBTSxDQUFDQyxJQUFQLENBQVlYLFNBQVosRUFBdUJZLEdBQXZCLENBQTJCLFVBQUFiLEdBQUc7QUFBQSxXQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0diLFNBQVMsQ0FBQ2EsR0FBRCxDQURaLFFBQ3FCQyxTQUFTLENBQUNELEdBQUQsQ0FEOUIsQ0FENkI7QUFBQSxHQUE5QixDQUhELENBTkYsQ0FERjtBQWtCRCxDQTNCTTs7R0FBTUYsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwTWFya2VyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHRpdGxlQ2FzZShzdHJpbmcpe1xuICBjb25zdCB5ID0gc3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgeS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBpLCBhcnJheSl7XG4gICAgYXJyYXlbaV0gPSBhcnJheVtpXVswXS50b1VwcGVyQ2FzZSgpICsgYXJyYXlbaV0uc2xpY2UoMSk7XG4gIH0pO1xuICByZXR1cm4gKHkuam9pbihcIiBcIikpO1xufVxuXG5leHBvcnQgY29uc3QgTWFwTWFya2VyID0gKHsgdGV4dCwga2V5LCBzaXRlX2luZm8gfSkgPT4ge1xuICBjb25zdCBbaXNJbmZvT3Blbiwgc2V0SXNJbmZvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7ICBcbiAgY29uc3QgW2N1cnJlbnRJbmZvT3Blbiwgc2V0SW5mb09wZW5dID0gdXNlU3RhdGUoXCJcIik7ICBcblxuICBjb25zdCB0b2dnbGVJbmZvID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRJc0luZm9PcGVuKCh3YXNPcGVuKSA9PiAhd2FzT3Blbik7ICAgIFxuICAgIHNldEluZm9PcGVuKGtleSk7ICBcbiAgfSwgW3NldElzSW5mb09wZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLW1hcmtlci1jb250YWluZXJcIj5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVJbmZvfSBjbGFzc05hbWU9XCJtYXAtbWFya2VyXCI+XG4gICAgICAgIHsvKiB7dGV4dH0gKi99XG4gICAgICAgIHsvKiA8aW1nIG9uQ2xpY2s9e3RvZ2dsZUluZm99IHNyYz1cImh0dHBzOi8vd3d3LmZ1bHRvbmNvdW50eWdhLmdvdi8tL21lZGlhL0ltYWdlcy9JQ09OUy9DT1ZJRC9jb3JvbmF2aXJ1cy10ZXN0aW5nLWljb24tMDEuYXNoeD9oPTMwMCZ3PTMwMCZsYT1lbiZoYXNoPTE2N0Y1RTgxQTY2NEQ4NURDOTNDNjQ5ODFGMzc0MjQwXCIgY2xhc3NOYW1lPVwibWFwLW1hcmtlclwiID48L2ltZz4gKi99XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbWFwLW1hcmtlci1pbmZvJHtjdXJyZW50SW5mb09wZW4gJiYgaXNJbmZvT3BlbiA/ICcgbWFwLW1hcmtlci1pbmZvLS1hY3RpdmUnIDogJyd9YH0gICAgICAgIFxuICAgICAgPiAgIFxuICAgICAge09iamVjdC5rZXlzKHNpdGVfaW5mbykubWFwKGtleSA9PiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aXRsZUNhc2Uoa2V5KX06IHtzaXRlX2luZm9ba2V5XX1cbiAgICAgICAgPC9wPlxuICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapMarker/index.jsx\n");

/***/ })

})