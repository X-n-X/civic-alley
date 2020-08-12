webpackHotUpdate("static/development/pages/representatives.js",{

/***/ "./components/MapMarker/index.jsx":
/*!****************************************!*\
  !*** ./components/MapMarker/index.jsx ***!
  \****************************************/
/*! exports provided: MapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapMarker\", function() { return MapMarker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/MapMarker/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction titleCase(string) {\n  var y = string.split(\"_\");\n  y.forEach(function (value, i, array) {\n    array[i] = array[i][0].toUpperCase() + array[i].slice(1);\n  });\n  return y.join(\" \");\n}\n\nvar MapMarker = function MapMarker(_ref) {\n  _s();\n\n  var text = _ref.text,\n      key = _ref.key,\n      site_info = _ref.site_info;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isInfoOpen = _useState[0],\n      setIsInfoOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      currentInfoOpen = _useState2[0],\n      setInfoOpen = _useState2[1];\n\n  var toggleInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setIsInfoOpen(function (wasOpen) {\n      return !wasOpen;\n    });\n    setInfoOpen(key);\n  }, [setIsInfoOpen]);\n  return __jsx(\"div\", {\n    className: \"map-marker-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: toggleInfo,\n    className: \"map-marker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"map-marker-info\".concat(currentInfoOpen !== undefined && isInfoOpen ? ' map-marker-info--active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, Object.keys(site_info).map(function (key) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }, titleCase(key), \": \", site_info[key]);\n  })));\n};\n\n_s(MapMarker, \"WNVj3slMltw6UatWHKBcywJawFE=\");\n\n_c = MapMarker;\n\nvar _c;\n\n$RefreshReg$(_c, \"MapMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcE1hcmtlci9pbmRleC5qc3g/YWYyNSJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHJpbmciLCJ5Iiwic3BsaXQiLCJmb3JFYWNoIiwidmFsdWUiLCJpIiwiYXJyYXkiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIk1hcE1hcmtlciIsInRleHQiLCJrZXkiLCJzaXRlX2luZm8iLCJ1c2VTdGF0ZSIsImlzSW5mb09wZW4iLCJzZXRJc0luZm9PcGVuIiwidW5kZWZpbmVkIiwiY3VycmVudEluZm9PcGVuIiwic2V0SW5mb09wZW4iLCJ0b2dnbGVJbmZvIiwidXNlQ2FsbGJhY2siLCJlIiwid2FzT3BlbiIsIk9iamVjdCIsImtleXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTBCO0FBQ3hCLE1BQU1DLENBQUMsR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWEsR0FBYixDQUFWO0FBQ0FELEdBQUMsQ0FBQ0UsT0FBRixDQUFVLFVBQVNDLEtBQVQsRUFBZ0JDLENBQWhCLEVBQW1CQyxLQUFuQixFQUF5QjtBQUNqQ0EsU0FBSyxDQUFDRCxDQUFELENBQUwsR0FBV0MsS0FBSyxDQUFDRCxDQUFELENBQUwsQ0FBUyxDQUFULEVBQVlFLFdBQVosS0FBNEJELEtBQUssQ0FBQ0QsQ0FBRCxDQUFMLENBQVNHLEtBQVQsQ0FBZSxDQUFmLENBQXZDO0FBQ0QsR0FGRDtBQUdBLFNBQVFQLENBQUMsQ0FBQ1EsSUFBRixDQUFPLEdBQVAsQ0FBUjtBQUNEOztBQUVNLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxHQUFxQixRQUFyQkEsR0FBcUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBQyxLQUFELENBRFM7QUFBQSxNQUM5Q0MsVUFEOEM7QUFBQSxNQUNsQ0MsYUFEa0M7O0FBQUEsbUJBRWRGLHNEQUFRLENBQUNHLFNBQUQsQ0FGTTtBQUFBLE1BRTlDQyxlQUY4QztBQUFBLE1BRTdCQyxXQUY2Qjs7QUFJckQsTUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUNwQ04saUJBQWEsQ0FBQyxVQUFDTyxPQUFEO0FBQUEsYUFBYSxDQUFDQSxPQUFkO0FBQUEsS0FBRCxDQUFiO0FBQ0FKLGVBQVcsQ0FBQ1AsR0FBRCxDQUFYO0FBQ0QsR0FINkIsRUFHM0IsQ0FBQ0ksYUFBRCxDQUgyQixDQUE5QjtBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQVEsV0FBTyxFQUFFSSxVQUFqQjtBQUE2QixhQUFTLEVBQUMsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBTUU7QUFDRSxhQUFTLDJCQUFvQkYsZUFBZSxLQUFJRCxTQUFuQixJQUFnQ0YsVUFBaEMsR0FBNkMsMEJBQTdDLEdBQTBFLEVBQTlGLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdDUyxNQUFNLENBQUNDLElBQVAsQ0FBWVosU0FBWixFQUF1QmEsR0FBdkIsQ0FBMkIsVUFBQWQsR0FBRztBQUFBLFdBQzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2IsU0FBUyxDQUFDYSxHQUFELENBRFosUUFDcUJDLFNBQVMsQ0FBQ0QsR0FBRCxDQUQ5QixDQUQ2QjtBQUFBLEdBQTlCLENBSEQsQ0FORixDQURGO0FBa0JELENBM0JNOztHQUFNRixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYXBNYXJrZXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdGl0bGVDYXNlKHN0cmluZyl7XG4gIGNvbnN0IHkgPSBzdHJpbmcuc3BsaXQoXCJfXCIpO1xuICB5LmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGksIGFycmF5KXtcbiAgICBhcnJheVtpXSA9IGFycmF5W2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBhcnJheVtpXS5zbGljZSgxKTtcbiAgfSk7XG4gIHJldHVybiAoeS5qb2luKFwiIFwiKSk7XG59XG5cbmV4cG9ydCBjb25zdCBNYXBNYXJrZXIgPSAoeyB0ZXh0LCBrZXksIHNpdGVfaW5mbyB9KSA9PiB7XG4gIGNvbnN0IFtpc0luZm9PcGVuLCBzZXRJc0luZm9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgIFxuICBjb25zdCBbY3VycmVudEluZm9PcGVuLCBzZXRJbmZvT3Blbl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpOyAgXG5cbiAgY29uc3QgdG9nZ2xlSW5mbyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0SXNJbmZvT3Blbigod2FzT3BlbikgPT4gIXdhc09wZW4pOyAgICBcbiAgICBzZXRJbmZvT3BlbihrZXkpOyAgXG4gIH0sIFtzZXRJc0luZm9PcGVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1tYXJrZXItY29udGFpbmVyXCI+XG4gICAgICBcbiAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlSW5mb30gY2xhc3NOYW1lPVwibWFwLW1hcmtlclwiPlxuICAgICAgICB7Lyoge3RleHR9ICovfVxuICAgICAgICB7LyogPGltZyBvbkNsaWNrPXt0b2dnbGVJbmZvfSBzcmM9XCJodHRwczovL3d3dy5mdWx0b25jb3VudHlnYS5nb3YvLS9tZWRpYS9JbWFnZXMvSUNPTlMvQ09WSUQvY29yb25hdmlydXMtdGVzdGluZy1pY29uLTAxLmFzaHg/aD0zMDAmdz0zMDAmbGE9ZW4maGFzaD0xNjdGNUU4MUE2NjREODVEQzkzQzY0OTgxRjM3NDI0MFwiIGNsYXNzTmFtZT1cIm1hcC1tYXJrZXJcIiA+PC9pbWc+ICovfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1hcC1tYXJrZXItaW5mbyR7Y3VycmVudEluZm9PcGVuIT09IHVuZGVmaW5lZCAmJiBpc0luZm9PcGVuID8gJyBtYXAtbWFya2VyLWluZm8tLWFjdGl2ZScgOiAnJ31gfSAgICAgICAgXG4gICAgICA+ICAgXG4gICAgICB7T2JqZWN0LmtleXMoc2l0ZV9pbmZvKS5tYXAoa2V5ID0+IChcbiAgICAgICAgPHA+XG4gICAgICAgICAge3RpdGxlQ2FzZShrZXkpfToge3NpdGVfaW5mb1trZXldfVxuICAgICAgICA8L3A+XG4gICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapMarker/index.jsx\n");

/***/ })

})