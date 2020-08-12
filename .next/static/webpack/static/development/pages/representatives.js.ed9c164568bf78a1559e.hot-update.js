webpackHotUpdate("static/development/pages/representatives.js",{

/***/ "./components/MapMarker/index.jsx":
/*!****************************************!*\
  !*** ./components/MapMarker/index.jsx ***!
  \****************************************/
/*! exports provided: MapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapMarker\", function() { return MapMarker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/MapMarker/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction titleCase(string) {\n  var y = string.split(\"_\");\n  y.forEach(function (value, i, array) {\n    array[i] = array[i][0].toUpperCase() + array[i].slice(1);\n  });\n  return y.join(\" \");\n}\n\nvar MapMarker = function MapMarker(_ref) {\n  _s();\n\n  var output_key = _ref.output_key,\n      key = _ref.key,\n      name = _ref.name,\n      coordinates = _ref.coordinates,\n      site_info = _ref.site_info;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isInfoOpen = _useState[0],\n      setIsInfoOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      currentInfoOpen = _useState2[0],\n      setInfoOpen = _useState2[1];\n\n  var toggleInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setIsInfoOpen(function (wasOpen) {\n      return !wasOpen;\n    });\n    setInfoOpen(output_key);\n    console.log(\"name\", output_key);\n  }, [setIsInfoOpen]);\n  return __jsx(\"div\", {\n    className: \"map-marker-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: toggleInfo,\n    className: \"map-marker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    //className={`map-marker-info${currentInfoOpen === output_key.key && isInfoOpen ? ' map-marker-info--active' : ''}`}\n    className: \"map-marker-info\".concat(isInfoOpen ? ' map-marker-info--active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, output_key, key, name, coordinates, Object.keys(site_info).map(function (key) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }\n    }, titleCase(key), \": \", site_info[key]);\n  })));\n};\n\n_s(MapMarker, \"jDfshDY+O4z9CZ4cf4/oyOsMGqQ=\");\n\n_c = MapMarker;\n\nvar _c;\n\n$RefreshReg$(_c, \"MapMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcE1hcmtlci9pbmRleC5qc3g/YWYyNSJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHJpbmciLCJ5Iiwic3BsaXQiLCJmb3JFYWNoIiwidmFsdWUiLCJpIiwiYXJyYXkiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIk1hcE1hcmtlciIsIm91dHB1dF9rZXkiLCJrZXkiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJzaXRlX2luZm8iLCJ1c2VTdGF0ZSIsImlzSW5mb09wZW4iLCJzZXRJc0luZm9PcGVuIiwiY3VycmVudEluZm9PcGVuIiwic2V0SW5mb09wZW4iLCJ0b2dnbGVJbmZvIiwidXNlQ2FsbGJhY2siLCJlIiwid2FzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEwQjtBQUN4QixNQUFNQyxDQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBVjtBQUNBRCxHQUFDLENBQUNFLE9BQUYsQ0FBVSxVQUFTQyxLQUFULEVBQWdCQyxDQUFoQixFQUFtQkMsS0FBbkIsRUFBeUI7QUFDakNBLFNBQUssQ0FBQ0QsQ0FBRCxDQUFMLEdBQVdDLEtBQUssQ0FBQ0QsQ0FBRCxDQUFMLENBQVMsQ0FBVCxFQUFZRSxXQUFaLEtBQTRCRCxLQUFLLENBQUNELENBQUQsQ0FBTCxDQUFTRyxLQUFULENBQWUsQ0FBZixDQUF2QztBQUNELEdBRkQ7QUFHQSxTQUFRUCxDQUFDLENBQUNRLElBQUYsQ0FBTyxHQUFQLENBQVI7QUFDRDs7QUFFTSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1RDtBQUFBOztBQUFBLE1BQXBEQyxVQUFvRCxRQUFwREEsVUFBb0Q7QUFBQSxNQUF4Q0MsR0FBd0MsUUFBeENBLEdBQXdDO0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxXQUE2QixRQUE3QkEsV0FBNkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUMxQ0Msc0RBQVEsQ0FBQyxLQUFELENBRGtDO0FBQUEsTUFDdkVDLFVBRHVFO0FBQUEsTUFDM0RDLGFBRDJEOztBQUFBLG1CQUV2Q0Ysc0RBQVEsQ0FBQyxFQUFELENBRitCO0FBQUEsTUFFdkVHLGVBRnVFO0FBQUEsTUFFdERDLFdBRnNEOztBQUk5RSxNQUFNQyxVQUFVLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDTCxpQkFBYSxDQUFDLFVBQUNNLE9BQUQ7QUFBQSxhQUFhLENBQUNBLE9BQWQ7QUFBQSxLQUFELENBQWI7QUFDQUosZUFBVyxDQUFDVCxVQUFELENBQVg7QUFDQWMsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFtQmYsVUFBbkI7QUFDRCxHQUo2QixFQUkzQixDQUFDTyxhQUFELENBSjJCLENBQTlCO0FBTUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBUSxXQUFPLEVBQUVHLFVBQWpCO0FBQTZCLGFBQVMsRUFBQyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFNRTtBQUNFO0FBQ0EsYUFBUywyQkFBcUJKLFVBQVUsR0FBRywwQkFBSCxHQUFnQyxFQUEvRCxDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQ04sVUFKRCxFQUtDQyxHQUxELEVBTUNDLElBTkQsRUFPQ0MsV0FQRCxFQVFDYSxNQUFNLENBQUNDLElBQVAsQ0FBWWIsU0FBWixFQUF1QmMsR0FBdkIsQ0FBMkIsVUFBQWpCLEdBQUc7QUFBQSxXQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0diLFNBQVMsQ0FBQ2EsR0FBRCxDQURaLFFBQ3FCRyxTQUFTLENBQUNILEdBQUQsQ0FEOUIsQ0FENkI7QUFBQSxHQUE5QixDQVJELENBTkYsQ0FERjtBQXVCRCxDQWpDTTs7R0FBTUYsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwTWFya2VyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHRpdGxlQ2FzZShzdHJpbmcpe1xuICBjb25zdCB5ID0gc3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgeS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBpLCBhcnJheSl7XG4gICAgYXJyYXlbaV0gPSBhcnJheVtpXVswXS50b1VwcGVyQ2FzZSgpICsgYXJyYXlbaV0uc2xpY2UoMSk7XG4gIH0pO1xuICByZXR1cm4gKHkuam9pbihcIiBcIikpO1xufVxuXG5leHBvcnQgY29uc3QgTWFwTWFya2VyID0gKHsgb3V0cHV0X2tleSwga2V5LCBuYW1lLCBjb29yZGluYXRlcywgc2l0ZV9pbmZvIH0pID0+IHtcbiAgY29uc3QgW2lzSW5mb09wZW4sIHNldElzSW5mb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAgXG4gIGNvbnN0IFtjdXJyZW50SW5mb09wZW4sIHNldEluZm9PcGVuXSA9IHVzZVN0YXRlKFwiXCIpOyAgXG5cbiAgY29uc3QgdG9nZ2xlSW5mbyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0SXNJbmZvT3Blbigod2FzT3BlbikgPT4gIXdhc09wZW4pOyAgICBcbiAgICBzZXRJbmZvT3BlbihvdXRwdXRfa2V5KTsgIFxuICAgIGNvbnNvbGUubG9nKFwibmFtZVwiLG91dHB1dF9rZXkpXG4gIH0sIFtzZXRJc0luZm9PcGVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1tYXJrZXItY29udGFpbmVyXCI+XG4gICAgICBcbiAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlSW5mb30gY2xhc3NOYW1lPVwibWFwLW1hcmtlclwiPlxuICAgICAgICB7Lyoge3RleHR9ICovfVxuICAgICAgICB7LyogPGltZyBvbkNsaWNrPXt0b2dnbGVJbmZvfSBzcmM9XCJodHRwczovL3d3dy5mdWx0b25jb3VudHlnYS5nb3YvLS9tZWRpYS9JbWFnZXMvSUNPTlMvQ09WSUQvY29yb25hdmlydXMtdGVzdGluZy1pY29uLTAxLmFzaHg/aD0zMDAmdz0zMDAmbGE9ZW4maGFzaD0xNjdGNUU4MUE2NjREODVEQzkzQzY0OTgxRjM3NDI0MFwiIGNsYXNzTmFtZT1cIm1hcC1tYXJrZXJcIiA+PC9pbWc+ICovfSAgICAgICAgXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgLy9jbGFzc05hbWU9e2BtYXAtbWFya2VyLWluZm8ke2N1cnJlbnRJbmZvT3BlbiA9PT0gb3V0cHV0X2tleS5rZXkgJiYgaXNJbmZvT3BlbiA/ICcgbWFwLW1hcmtlci1pbmZvLS1hY3RpdmUnIDogJyd9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtgbWFwLW1hcmtlci1pbmZvJHsgaXNJbmZvT3BlbiA/ICcgbWFwLW1hcmtlci1pbmZvLS1hY3RpdmUnIDogJyd9YH1cbiAgICAgID4gICBcbiAgICAgIHtvdXRwdXRfa2V5fVxuICAgICAge2tleX1cbiAgICAgIHtuYW1lfVxuICAgICAge2Nvb3JkaW5hdGVzfSAgICAgICAgICAgXG4gICAgICB7T2JqZWN0LmtleXMoc2l0ZV9pbmZvKS5tYXAoa2V5ID0+IChcbiAgICAgICAgPHA+XG4gICAgICAgICAge3RpdGxlQ2FzZShrZXkpfToge3NpdGVfaW5mb1trZXldfVxuICAgICAgICA8L3A+XG4gICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapMarker/index.jsx\n");

/***/ })

})