webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _this = this;\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && data.map(function (item) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 43\n      }\n    }, item.site_info);\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiQ292aWRUZXN0aW5nU2l0ZXNQYWdlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJzZXRNYXBNYXJrZXJzIiwic2V0U3RhdGUiLCJ1c2VTd3IiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsInNpdGUiLCJrZXkiLCJzaXRlX25hbWUiLCJjb29yZGluYXRlcyIsImxhdCIsImxuZyIsIm91dHB1dF9rZXkiLCJuYW1lIiwic2l0ZV9pbmZvIiwicHJvdmlkZXJfdXJsIiwiYWRkaXRpb25hbF9pbmZvIiwiYWRkcmVzcyIsInBob25lIiwibW9uZGF5IiwidHVlc2RheSIsIndlZG5lc2RheSIsInRodXJzZGF5IiwiZnJpZGF5Iiwic2F0dXJkYXkiLCJzdW5kYXkiLCJzY3JlZW5pbmdfcmVxdWlyZWQiLCJhcHBvaW50bWVudF9yZXF1aXJlZCIsImFudGlib2R5X3Rlc3RpbmciLCJpdGVtIiwiZ2V0TGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFhQyxLQUFLLE1BQUwsb0JBQWVDLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBdkIsQ0FBYjtBQUFBLENBQWhCOztBQUVBLFNBQVNDLHFCQUFULEdBQWlDO0FBQUE7O0FBQUE7O0FBQUEsMEJBQ0tDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLDhFQUFqQixDQURMO0FBQUEsTUFDYkMsYUFEYSxxQkFDdkJDLFFBRHVCOztBQUFBLGdCQUVQQyxtREFBTSxDQUFDLG9C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Q29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL01hcExheW91dCc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG5mdW5jdGlvbiBDb3ZpZFRlc3RpbmdTaXRlc1BhZ2UoKSB7XHJcbiAgY29uc3QgeyBzZXRTdGF0ZTogc2V0TWFwTWFya2VycyB9ID0gUmVhY3QudXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7ICAgIFxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cignL2FwaS90ZXN0aW5nLXNpdGVzJywgZmV0Y2hlcik7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGRhdGEgZnJvbSBBUEkgZm9yIC9hcGkvdGVzdGluZy1zaXRlczogJywgZXJyb3IpO1xyXG4gIH0gICAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoc2l0ZSkgPT4gKHtcclxuICAgICAga2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxyXG4gICAgICBvdXRwdXRfa2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxyXG4gICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgICBcclxuICAgICAgc2l0ZV9pbmZvOiB7XHJcbiAgICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsIFxyXG4gICAgICAgIHByb3ZpZGVyX3VybDogc2l0ZS5wcm92aWRlcl91cmwsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiBzaXRlLmFkZGl0aW9uYWxfaW5mbyxcclxuICAgICAgICBhZGRyZXNzOiBzaXRlLmFkZHJlc3MsXHJcbiAgICAgICAgcGhvbmU6IHNpdGUucGhvbmUsXHJcbiAgICAgICAgbW9uZGF5OiBzaXRlLm1vbmRheSxcclxuICAgICAgICB0dWVzZGF5OiBzaXRlLnR1ZXNkYXksXHJcbiAgICAgICAgd2VkbmVzZGF5OiBzaXRlLndlZG5lc2RheSxcclxuICAgICAgICB0aHVyc2RheTogc2l0ZS50aHVyc2RheSxcclxuICAgICAgICBmcmlkYXk6IHNpdGUuZnJpZGF5LFxyXG4gICAgICAgIHNhdHVyZGF5OiBzaXRlLnNhdHVyZGF5LFxyXG4gICAgICAgIHN1bmRheTogc2l0ZS5zdW5kYXksXHJcbiAgICAgICAgc2NyZWVuaW5nX3JlcXVpcmVkOiBzaXRlLnNjcmVlbmluZ19yZXF1aXJlZCxcclxuICAgICAgICBhcHBvaW50bWVudF9yZXF1aXJlZDogc2l0ZS5hcHBvaW50bWVudF9yZXF1aXJlZCxcclxuICAgICAgICBhbnRpYm9keV90ZXN0aW5nOiBzaXRlLmFudGlib2R5X3Rlc3RpbmcsIFxyXG4gICAgICB9LCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgY29vcmRpbmF0ZXM6IHtcclxuICAgICAgICBsYXQ6IHNpdGUuY29vcmRpbmF0ZXMubGF0LFxyXG4gICAgICAgIGxuZzogc2l0ZS5jb29yZGluYXRlcy5sbmcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZm9ybWF0dGVkRGF0YVwiLGZvcm1hdHRlZERhdGEpO1xyXG4gICAgc2V0TWFwTWFya2Vycyhmb3JtYXR0ZWREYXRhKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRNYXBNYXJrZXJzKFtdKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgc2V0TWFwTWFya2Vyc10pO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250ZW50XCI+XHJcbiAgICAgIHtlcnJvciAmJiAnRXJyb3IgbG9hZGluZyBjb250ZW50J31cclxuICAgICAgeyFkYXRhICYmICFlcnJvciAmJiAnTG9hZGluZy4uLid9XHJcbiAgICAgIHshZXJyb3IgJiYgZGF0YSAmJiBkYXRhLm1hcChpdGVtID0+IDxwPntpdGVtLnNpdGVfaW5mb308L3A+KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNvdmlkVGVzdGluZ1NpdGVzUGFnZS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3ZpZFRlc3RpbmdTaXRlc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})