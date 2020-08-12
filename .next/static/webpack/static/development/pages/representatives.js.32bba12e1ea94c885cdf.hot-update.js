webpackHotUpdate("static/development/pages/representatives.js",{

/***/ "./components/MapMarker/index.jsx":
/*!****************************************!*\
  !*** ./components/MapMarker/index.jsx ***!
  \****************************************/
/*! exports provided: MapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapMarker\", function() { return MapMarker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/MapMarker/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction titleCase(string) {\n  var y = string.split(\"_\");\n  y.forEach(function (value, i, array) {\n    array[i] = array[i][0].toUpperCase() + array[i].slice(1);\n  });\n  return y.join(\" \");\n}\n\nvar MapMarker = function MapMarker(_ref) {\n  _s();\n\n  var key = _ref.key,\n      site_info = _ref.site_info;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isInfoOpen = _useState[0],\n      setIsInfoOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      currentInfoOpen = _useState2[0],\n      setInfoOpen = _useState2[1];\n\n  var toggleInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setIsInfoOpen(function (wasOpen) {\n      return !wasOpen;\n    });\n    setInfoOpen(key);\n    console.log(\"name\", key);\n  }, [setIsInfoOpen]);\n  return __jsx(\"div\", {\n    className: \"map-marker-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: toggleInfo,\n    className: \"map-marker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, key), __jsx(\"div\", {\n    className: \"map-marker-info\".concat(currentInfoOpen === key && isInfoOpen ? ' map-marker-info--active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, Object.keys(site_info).map(function (key) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, titleCase(key), \": \", site_info[key]);\n  })));\n};\n\n_s(MapMarker, \"jDfshDY+O4z9CZ4cf4/oyOsMGqQ=\");\n\n_c = MapMarker;\n\nvar _c;\n\n$RefreshReg$(_c, \"MapMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcE1hcmtlci9pbmRleC5qc3g/YWYyNSJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHJpbmciLCJ5Iiwic3BsaXQiLCJmb3JFYWNoIiwidmFsdWUiLCJpIiwiYXJyYXkiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIk1hcE1hcmtlciIsImtleSIsInNpdGVfaW5mbyIsInVzZVN0YXRlIiwiaXNJbmZvT3BlbiIsInNldElzSW5mb09wZW4iLCJjdXJyZW50SW5mb09wZW4iLCJzZXRJbmZvT3BlbiIsInRvZ2dsZUluZm8iLCJ1c2VDYWxsYmFjayIsImUiLCJ3YXNPcGVuIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTBCO0FBQ3hCLE1BQU1DLENBQUMsR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWEsR0FBYixDQUFWO0FBQ0FELEdBQUMsQ0FBQ0UsT0FBRixDQUFVLFVBQVNDLEtBQVQsRUFBZ0JDLENBQWhCLEVBQW1CQyxLQUFuQixFQUF5QjtBQUNqQ0EsU0FBSyxDQUFDRCxDQUFELENBQUwsR0FBV0MsS0FBSyxDQUFDRCxDQUFELENBQUwsQ0FBUyxDQUFULEVBQVlFLFdBQVosS0FBNEJELEtBQUssQ0FBQ0QsQ0FBRCxDQUFMLENBQVNHLEtBQVQsQ0FBZSxDQUFmLENBQXZDO0FBQ0QsR0FGRDtBQUdBLFNBQVFQLENBQUMsQ0FBQ1EsSUFBRixDQUFPLEdBQVAsQ0FBUjtBQUNEOztBQUVNLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLEdBQXFCLFFBQXJCQSxHQUFxQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsS0FBRCxDQURHO0FBQUEsTUFDeENDLFVBRHdDO0FBQUEsTUFDNUJDLGFBRDRCOztBQUFBLG1CQUVSRixzREFBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRXhDRyxlQUZ3QztBQUFBLE1BRXZCQyxXQUZ1Qjs7QUFJL0MsTUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUNwQ0wsaUJBQWEsQ0FBQyxVQUFDTSxPQUFEO0FBQUEsYUFBYSxDQUFDQSxPQUFkO0FBQUEsS0FBRCxDQUFiO0FBQ0FKLGVBQVcsQ0FBQ04sR0FBRCxDQUFYO0FBQ0FXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBbUJaLEdBQW5CO0FBQ0QsR0FKNkIsRUFJM0IsQ0FBQ0ksYUFBRCxDQUoyQixDQUE5QjtBQU1BLFNBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQVEsV0FBTyxFQUFFRyxVQUFqQjtBQUE2QixhQUFTLEVBQUMsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdHUCxHQUhILENBRkYsRUFPRTtBQUNFLGFBQVMsMkJBQW9CSyxlQUFlLEtBQUtMLEdBQXBCLElBQTJCRyxVQUEzQixHQUF3QywwQkFBeEMsR0FBcUUsRUFBekYsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0NVLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZYixTQUFaLEVBQXVCYyxHQUF2QixDQUEyQixVQUFBZixHQUFHO0FBQUEsV0FDN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHWixTQUFTLENBQUNZLEdBQUQsQ0FEWixRQUNxQkMsU0FBUyxDQUFDRCxHQUFELENBRDlCLENBRDZCO0FBQUEsR0FBOUIsQ0FIRCxDQVBGLENBREY7QUFtQkQsQ0E3Qk07O0dBQU1ELFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcE1hcmtlci9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB0aXRsZUNhc2Uoc3RyaW5nKXtcbiAgY29uc3QgeSA9IHN0cmluZy5zcGxpdChcIl9cIik7XG4gIHkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgaSwgYXJyYXkpe1xuICAgIGFycmF5W2ldID0gYXJyYXlbaV1bMF0udG9VcHBlckNhc2UoKSArIGFycmF5W2ldLnNsaWNlKDEpO1xuICB9KTtcbiAgcmV0dXJuICh5LmpvaW4oXCIgXCIpKTtcbn1cblxuZXhwb3J0IGNvbnN0IE1hcE1hcmtlciA9ICh7IGtleSwgc2l0ZV9pbmZvIH0pID0+IHtcbiAgY29uc3QgW2lzSW5mb09wZW4sIHNldElzSW5mb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAgXG4gIGNvbnN0IFtjdXJyZW50SW5mb09wZW4sIHNldEluZm9PcGVuXSA9IHVzZVN0YXRlKFwiXCIpOyAgXG5cbiAgY29uc3QgdG9nZ2xlSW5mbyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0SXNJbmZvT3Blbigod2FzT3BlbikgPT4gIXdhc09wZW4pOyAgICBcbiAgICBzZXRJbmZvT3BlbihrZXkpOyAgXG4gICAgY29uc29sZS5sb2coXCJuYW1lXCIsa2V5KVxuICB9LCBbc2V0SXNJbmZvT3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtbWFya2VyLWNvbnRhaW5lclwiPlxuICAgICAgXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUluZm99IGNsYXNzTmFtZT1cIm1hcC1tYXJrZXJcIj5cbiAgICAgICAgey8qIHt0ZXh0fSAqL31cbiAgICAgICAgey8qIDxpbWcgb25DbGljaz17dG9nZ2xlSW5mb30gc3JjPVwiaHR0cHM6Ly93d3cuZnVsdG9uY291bnR5Z2EuZ292Ly0vbWVkaWEvSW1hZ2VzL0lDT05TL0NPVklEL2Nvcm9uYXZpcnVzLXRlc3RpbmctaWNvbi0wMS5hc2h4P2g9MzAwJnc9MzAwJmxhPWVuJmhhc2g9MTY3RjVFODFBNjY0RDg1REM5M0M2NDk4MUYzNzQyNDBcIiBjbGFzc05hbWU9XCJtYXAtbWFya2VyXCIgPjwvaW1nPiAqL31cbiAgICAgICAge2tleX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtYXAtbWFya2VyLWluZm8ke2N1cnJlbnRJbmZvT3BlbiA9PT0ga2V5ICYmIGlzSW5mb09wZW4gPyAnIG1hcC1tYXJrZXItaW5mby0tYWN0aXZlJyA6ICcnfWB9ICAgICAgICBcbiAgICAgID4gICBcbiAgICAgIHtPYmplY3Qua2V5cyhzaXRlX2luZm8pLm1hcChrZXkgPT4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGl0bGVDYXNlKGtleSl9OiB7c2l0ZV9pbmZvW2tleV19XG4gICAgICAgIDwvcD5cbiAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapMarker/index.jsx\n");

/***/ })

})