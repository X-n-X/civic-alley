webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 32\n      }\n    }, \"URL: \", value.provider_url);\n  }));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4IiwicHJvdmlkZXJfdXJsIiwiQ292aWRUZXN0aW5nU2l0ZXNQYWdlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJzZXRNYXBNYXJrZXJzIiwic2V0U3RhdGUiLCJ1c2VTd3IiLCJlcnJvciIsImNvbnNvbGUiLCJ1c2VFZmZlY3QiLCJmb3JtYXR0ZWREYXRhIiwic2l0ZSIsImtleSIsInNpdGVfbmFtZSIsImNvb3JkaW5hdGVzIiwibGF0IiwibG5nIiwib3V0cHV0X2tleSIsIm5hbWUiLCJzaXRlX2luZm8iLCJhZGRpdGlvbmFsX2luZm8iLCJhZGRyZXNzIiwicGhvbmUiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImFwcG9pbnRtZW50X3JlcXVpcmVkIiwiYW50aWJvZHlfdGVzdGluZyIsImxvZyIsImdldExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlB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SSx1QkFEWixFQUVHLENBQUNaLElBQUQsSUFBUyxDQUFDWSxLQUFWLElBQW1CLFlBRnRCLEVBSUcsQ0FBQ0EsS0FBRCxJQUFVWixJQUFWLElBQWtCLE1BQUMsWUFBRDtBQUFjLFFBQUksRUFBSUEsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpyQixDQURGO0FBU0Q7O0dBckRRSyxxQjtVQUVpQk0sMkM7OztNQUZqQk4scUI7QUF1RFRBLHFCQUFxQixDQUFDa0MsU0FBdEIsR0FBa0NBLDhEQUFsQztBQUVlbEMsb0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJztcclxuXHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTGF5b3V0JztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblxyXG5jb25zdCBUZXN0aW5nU2l0ZXMgPSAoeyBkYXRhIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAge1xyXG4gICAgICBkYXRhLm1hcCgodmFsdWUsIGlkeCkgPT4gPHAga2V5PXtpZHh9PlVSTDoge3ZhbHVlLnByb3ZpZGVyX3VybH08L3A+KVxyXG4gICAgICBcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIENvdmlkVGVzdGluZ1NpdGVzUGFnZSgpIHtcclxuICBjb25zdCB7IHNldFN0YXRlOiBzZXRNYXBNYXJrZXJzIH0gPSBSZWFjdC51c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTsgICAgXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YSBmcm9tIEFQSSBmb3IgL2FwaS90ZXN0aW5nLXNpdGVzOiAnLCBlcnJvcik7XHJcbiAgfSAgICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xyXG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG91dHB1dF9rZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCAgIFxyXG4gICAgICBzaXRlX2luZm86IHtcclxuICAgICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgXHJcbiAgICAgICAgcHJvdmlkZXJfdXJsOiBzaXRlLnByb3ZpZGVyX3VybCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxyXG4gICAgICAgIGFkZHJlc3M6IHNpdGUuYWRkcmVzcyxcclxuICAgICAgICBwaG9uZTogc2l0ZS5waG9uZSxcclxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxyXG4gICAgICAgIHR1ZXNkYXk6IHNpdGUudHVlc2RheSxcclxuICAgICAgICB3ZWRuZXNkYXk6IHNpdGUud2VkbmVzZGF5LFxyXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxyXG4gICAgICAgIGZyaWRheTogc2l0ZS5mcmlkYXksXHJcbiAgICAgICAgc2F0dXJkYXk6IHNpdGUuc2F0dXJkYXksXHJcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcclxuICAgICAgICBzY3JlZW5pbmdfcmVxdWlyZWQ6IHNpdGUuc2NyZWVuaW5nX3JlcXVpcmVkLFxyXG4gICAgICAgIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBzaXRlLmFwcG9pbnRtZW50X3JlcXVpcmVkLFxyXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXHJcbiAgICAgIH0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBjb29yZGluYXRlczoge1xyXG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBzaXRlLmNvb3JkaW5hdGVzLmxuZyxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJmb3JtYXR0ZWREYXRhXCIsZm9ybWF0dGVkRGF0YSk7XHJcbiAgICBzZXRNYXBNYXJrZXJzKGZvcm1hdHRlZERhdGEpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldE1hcE1hcmtlcnMoW10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBzZXRNYXBNYXJrZXJzXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxyXG4gICAgICB7ZXJyb3IgJiYgJ0Vycm9yIGxvYWRpbmcgY29udGVudCd9XHJcbiAgICAgIHshZGF0YSAmJiAhZXJyb3IgJiYgJ0xvYWRpbmcuLi4nfVxyXG4gICAgICB7LyogeyFlcnJvciAmJiBkYXRhICYmIFwieW8geW9cIn0gKi99XHJcbiAgICAgIHshZXJyb3IgJiYgZGF0YSAmJiA8VGVzdGluZ1NpdGVzIGRhdGEgPSB7ZGF0YX0vPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59XHJcblxyXG5Db3ZpZFRlc3RpbmdTaXRlc1BhZ2UuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ292aWRUZXN0aW5nU2l0ZXNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})