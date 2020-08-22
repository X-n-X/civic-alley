webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/MapMarker/index.jsx":
/*!****************************************!*\
  !*** ./components/MapMarker/index.jsx ***!
  \****************************************/
/*! exports provided: MapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapMarker\", function() { return MapMarker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/MapMarker/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction titleCase(string) {\n  var y = string.split(\"_\");\n  y.forEach(function (value, i, array) {\n    array[i] = array[i][0].toUpperCase() + array[i].slice(1);\n  });\n  return y.join(\" \");\n}\n\nvar MapMarker = function MapMarker(_ref) {\n  _s();\n\n  var output_key = _ref.output_key,\n      key = _ref.key,\n      name = _ref.name,\n      coordinates = _ref.coordinates,\n      site_info = _ref.site_info,\n      function_to_run = _ref.function_to_run;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isInfoOpen = _useState[0],\n      setIsInfoOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      currentInfoOpen = _useState2[0],\n      setInfoOpen = _useState2[1]; // const toggleInfo = useCallback((e) => {\n  //   setIsInfoOpen((wasOpen) => !wasOpen);    \n  //   setInfoOpen(output_key);      \n  // }, [setIsInfoOpen]);\n\n\n  return __jsx(\"div\", {\n    className: \"map-marker-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: function_to_run,\n    className: \"map-marker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    //className={`map-marker-info${currentInfoOpen === output_key.key && isInfoOpen ? ' map-marker-info--active' : ''}`}\n    className: \"map-marker-info\".concat(isInfoOpen ? ' map-marker-info--active' : ''),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, coordinates, name ? \"\".concat(titleCase(name)) : '', __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 41\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 50\n    }\n  }), site_info.address));\n};\n\n_s(MapMarker, \"aihBnDssByg7jS2YbHMWFRWlpO4=\");\n\n_c = MapMarker;\n\nvar _c;\n\n$RefreshReg$(_c, \"MapMarker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcE1hcmtlci9pbmRleC5qc3g/YWYyNSJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHJpbmciLCJ5Iiwic3BsaXQiLCJmb3JFYWNoIiwidmFsdWUiLCJpIiwiYXJyYXkiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIk1hcE1hcmtlciIsIm91dHB1dF9rZXkiLCJrZXkiLCJuYW1lIiwiY29vcmRpbmF0ZXMiLCJzaXRlX2luZm8iLCJmdW5jdGlvbl90b19ydW4iLCJ1c2VTdGF0ZSIsImlzSW5mb09wZW4iLCJzZXRJc0luZm9PcGVuIiwiY3VycmVudEluZm9PcGVuIiwic2V0SW5mb09wZW4iLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEwQjtBQUN4QixNQUFNQyxDQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBVjtBQUNBRCxHQUFDLENBQUNFLE9BQUYsQ0FBVSxVQUFTQyxLQUFULEVBQWdCQyxDQUFoQixFQUFtQkMsS0FBbkIsRUFBeUI7QUFDakNBLFNBQUssQ0FBQ0QsQ0FBRCxDQUFMLEdBQVdDLEtBQUssQ0FBQ0QsQ0FBRCxDQUFMLENBQVMsQ0FBVCxFQUFZRSxXQUFaLEtBQTRCRCxLQUFLLENBQUNELENBQUQsQ0FBTCxDQUFTRyxLQUFULENBQWUsQ0FBZixDQUF2QztBQUNELEdBRkQ7QUFHQSxTQUFRUCxDQUFDLENBQUNRLElBQUYsQ0FBTyxHQUFQLENBQVI7QUFDRDs7QUFFTSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF3RTtBQUFBOztBQUFBLE1BQXJFQyxVQUFxRSxRQUFyRUEsVUFBcUU7QUFBQSxNQUF6REMsR0FBeUQsUUFBekRBLEdBQXlEO0FBQUEsTUFBcERDLElBQW9ELFFBQXBEQSxJQUFvRDtBQUFBLE1BQTlDQyxXQUE4QyxRQUE5Q0EsV0FBOEM7QUFBQSxNQUFqQ0MsU0FBaUMsUUFBakNBLFNBQWlDO0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjs7QUFBQSxrQkFDM0RDLHNEQUFRLENBQUMsS0FBRCxDQURtRDtBQUFBLE1BQ3hGQyxVQUR3RjtBQUFBLE1BQzVFQyxhQUQ0RTs7QUFBQSxtQkFFeERGLHNEQUFRLENBQUMsRUFBRCxDQUZnRDtBQUFBLE1BRXhGRyxlQUZ3RjtBQUFBLE1BRXZFQyxXQUZ1RSxrQkFJL0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQVEsV0FBTyxFQUFFTCxlQUFqQjtBQUFrQyxhQUFTLEVBQUMsWUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBTUU7QUFDRTtBQUNBLGFBQVMsMkJBQXFCRSxVQUFVLEdBQUcsMEJBQUgsR0FBZ0MsRUFBL0QsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUNKLFdBSkQsRUFLQ0QsSUFBSSxhQUFNZCxTQUFTLENBQUNjLElBQUQsQ0FBZixJQUEwQixFQUwvQixFQUtrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTGxDLEVBSzJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMM0MsRUFNQ0UsU0FBUyxDQUFDTyxPQU5YLENBTkYsQ0FERjtBQXNCRCxDQS9CTTs7R0FBTVosUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwTWFya2VyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHRpdGxlQ2FzZShzdHJpbmcpe1xuICBjb25zdCB5ID0gc3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgeS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBpLCBhcnJheSl7XG4gICAgYXJyYXlbaV0gPSBhcnJheVtpXVswXS50b1VwcGVyQ2FzZSgpICsgYXJyYXlbaV0uc2xpY2UoMSk7XG4gIH0pO1xuICByZXR1cm4gKHkuam9pbihcIiBcIikpO1xufVxuXG5leHBvcnQgY29uc3QgTWFwTWFya2VyID0gKHsgb3V0cHV0X2tleSwga2V5LCBuYW1lLCBjb29yZGluYXRlcywgc2l0ZV9pbmZvLCBmdW5jdGlvbl90b19ydW4gfSkgPT4ge1xuICBjb25zdCBbaXNJbmZvT3Blbiwgc2V0SXNJbmZvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7ICBcbiAgY29uc3QgW2N1cnJlbnRJbmZvT3Blbiwgc2V0SW5mb09wZW5dID0gdXNlU3RhdGUoXCJcIik7ICBcblxuICAvLyBjb25zdCB0b2dnbGVJbmZvID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgLy8gICBzZXRJc0luZm9PcGVuKCh3YXNPcGVuKSA9PiAhd2FzT3Blbik7ICAgIFxuICAvLyAgIHNldEluZm9PcGVuKG91dHB1dF9rZXkpOyAgICAgIFxuICAvLyB9LCBbc2V0SXNJbmZvT3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtbWFya2VyLWNvbnRhaW5lclwiPlxuICAgICAgXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Z1bmN0aW9uX3RvX3J1bn0gY2xhc3NOYW1lPVwibWFwLW1hcmtlclwiPlxuICAgICAgICB7Lyoge3RleHR9ICovfVxuICAgICAgICB7LyogPGltZyBvbkNsaWNrPXt0b2dnbGVJbmZvfSBzcmM9XCJodHRwczovL3d3dy5mdWx0b25jb3VudHlnYS5nb3YvLS9tZWRpYS9JbWFnZXMvSUNPTlMvQ09WSUQvY29yb25hdmlydXMtdGVzdGluZy1pY29uLTAxLmFzaHg/aD0zMDAmdz0zMDAmbGE9ZW4maGFzaD0xNjdGNUU4MUE2NjREODVEQzkzQzY0OTgxRjM3NDI0MFwiIGNsYXNzTmFtZT1cIm1hcC1tYXJrZXJcIiA+PC9pbWc+ICovfSAgICAgICAgXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgLy9jbGFzc05hbWU9e2BtYXAtbWFya2VyLWluZm8ke2N1cnJlbnRJbmZvT3BlbiA9PT0gb3V0cHV0X2tleS5rZXkgJiYgaXNJbmZvT3BlbiA/ICcgbWFwLW1hcmtlci1pbmZvLS1hY3RpdmUnIDogJyd9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtgbWFwLW1hcmtlci1pbmZvJHsgaXNJbmZvT3BlbiA/ICcgbWFwLW1hcmtlci1pbmZvLS1hY3RpdmUnIDogJyd9YH1cbiAgICAgID5cbiAgICAgIHtjb29yZGluYXRlc30gICAgICAgICAgIFxuICAgICAge25hbWUgPyBgJHt0aXRsZUNhc2UobmFtZSl9YCA6ICcnfTxicj48L2JyPjxicj48L2JyPlxuICAgICAge3NpdGVfaW5mby5hZGRyZXNzfVxuICAgICAgey8qIHtPYmplY3Qua2V5cyhzaXRlX2luZm8pLm1hcChrZXkgPT4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICB7c2l0ZV9pbmZvW2tleV0gPyBgJHt0aXRsZUNhc2Uoa2V5KX06ICR7c2l0ZV9pbmZvW2tleV19YCA6ICcnfVxuICAgICAgICA8L3A+XG4gICAgICApKX0gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapMarker/index.jsx\n");

/***/ })

})