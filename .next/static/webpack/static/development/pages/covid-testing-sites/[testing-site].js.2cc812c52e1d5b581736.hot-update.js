webpackHotUpdate("static/development/pages/covid-testing-sites/[testing-site].js",{

/***/ "./pages/covid-testing-sites/[testing-site].jsx":
/*!******************************************************!*\
  !*** ./pages/covid-testing-sites/[testing-site].jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/[testing-site].jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Post = function Post() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var _router$query = router.query,\n      pid = _router$query.pid,\n      name = _router$query.name;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      testing_site = _useState[0],\n      setTestingSite = _useState[1];\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setTestingSite(formattedData.filter(function (item) {\n      return item.site_name === name;\n    }));\n  });\n  console.log(\"data\", testing_site);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 10\n    }\n  }, \"yo\");\n};\n\n_s(Post, \"6BI7+DlM4cnIAPBKhoV3q3VeEDM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL1t0ZXN0aW5nLXNpdGVdLmpzeD9iNjg2Il0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicGlkIiwibmFtZSIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsInVzZVN0YXRlIiwidGVzdGluZ19zaXRlIiwic2V0VGVzdGluZ1NpdGUiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsInNpdGUiLCJrZXkiLCJzaXRlX25hbWUiLCJjb29yZGluYXRlcyIsImxhdCIsImxuZyIsIm91dHB1dF9rZXkiLCJzaXRlX2luZm8iLCJwcm92aWRlcl91cmwiLCJhZGRpdGlvbmFsX2luZm8iLCJhZGRyZXNzIiwicGhvbmUiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImFwcG9pbnRtZW50X3JlcXVpcmVkIiwiYW50aWJvZHlfdGVzdGluZyIsImZpbHRlciIsIml0ZW0iLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBYUMsS0FBSyxNQUFMLG9CQUFlQyxJQUFmLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQXZCLENBQWI7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEaUIsc0JBRUtELE1BQU0sQ0FBQ0UsS0FGWjtBQUFBLE1BRVRDLEdBRlMsaUJBRVRBLEdBRlM7QUFBQSxNQUVKQyxJQUZJLGlCQUVKQSxJQUZJOztBQUFBLGdCQUdPQyxtREFBTSxDQUFDLG9CQUFELEVBQXVCWCxPQUF2QixDQUhiO0FBQUEsTUFHVFksSUFIUyxXQUdUQSxJQUhTO0FBQUEsTUFHSEMsS0FIRyxXQUdIQSxLQUhHOztBQUFBLGtCQUlzQkMsc0RBQVEsQ0FBQyxFQUFELENBSjlCO0FBQUEsTUFJVkMsWUFKVTtBQUFBLE1BSUlDLGNBSko7O0FBTWpCLE1BQUlILEtBQUosRUFBVztBQUNUSSxXQUFPLENBQUNKLEtBQVIsQ0FBYyxzREFBZCxFQUFzRUEsS0FBdEU7QUFDRDs7QUFFREsseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsYUFBYSxHQUFHLENBQUNQLElBQUksSUFBSSxFQUFULEVBQWFRLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGFBQVc7QUFDaERDLFdBQUcsWUFBS0QsSUFBSSxDQUFDRSxTQUFWLGNBQXVCRixJQUFJLENBQUNHLFdBQUwsQ0FBaUJDLEdBQXhDLGNBQStDSixJQUFJLENBQUNHLFdBQUwsQ0FBaUJFLEdBQWhFLENBRDZDO0FBRWhEQyxrQkFBVSxZQUFLTixJQUFJLENBQUNFLFNBQVYsY0FBdUJGLElBQUksQ0FBQ0csV0FBTCxDQUFpQkMsR0FBeEMsY0FBK0NKLElBQUksQ0FBQ0csV0FBTCxDQUFpQkUsR0FBaEUsQ0FGc0M7QUFHaERoQixZQUFJLEVBQUVXLElBQUksQ0FBQ0UsU0FIcUM7QUFJaERLLGlCQUFTLEVBQUU7QUFDVGxCLGNBQUksRUFBRVcsSUFBSSxDQUFDRSxTQURGO0FBRVRNLHNCQUFZLEVBQUVSLElBQUksQ0FBQ1EsWUFGVjtBQUdUQyx5QkFBZSxFQUFFVCxJQUFJLENBQUNTLGVBSGI7QUFJVEMsaUJBQU8sRUFBRVYsSUFBSSxDQUFDVSxPQUpMO0FBS1RDLGVBQUssRUFBRVgsSUFBSSxDQUFDVyxLQUxIO0FBTVRDLGdCQUFNLEVBQUVaLElBQUksQ0FBQ1ksTUFOSjtBQU9UQyxpQkFBTyxFQUFFYixJQUFJLENBQUNhLE9BUEw7QUFRVEMsbUJBQVMsRUFBRWQsSUFBSSxDQUFDYyxTQVJQO0FBU1RDLGtCQUFRLEVBQUVmLElBQUksQ0FBQ2UsUUFUTjtBQVVUQyxnQkFBTSxFQUFFaEIsSUFBSSxDQUFDZ0IsTUFWSjtBQVdUQyxrQkFBUSxFQUFFakIsSUFBSSxDQUFDaUIsUUFYTjtBQVlUQyxnQkFBTSxFQUFFbEIsSUFBSSxDQUFDa0IsTUFaSjtBQWFUQyw0QkFBa0IsRUFBRW5CLElBQUksQ0FBQ21CLGtCQWJoQjtBQWNUQyw4QkFBb0IsRUFBRXBCLElBQUksQ0FBQ29CLG9CQWRsQjtBQWVUQywwQkFBZ0IsRUFBRXJCLElBQUksQ0FBQ3FCO0FBZmQsU0FKcUM7QUFxQmhEbEIsbUJBQVcsRUFBRTtBQUNYQyxhQUFHLEVBQUVKLElBQUksQ0FBQ0csV0FBTCxDQUFpQkMsR0FEWDtBQUVYQyxhQUFHLEVBQUVMLElBQUksQ0FBQ0csV0FBTCxDQUFpQkU7QUFGWDtBQXJCbUMsT0FBWDtBQUFBLEtBQWpCLENBQXRCLENBRGMsQ0EyQmhCOztBQUNBVixrQkFBYyxDQUFDRyxhQUFhLENBQUN3QixNQUFkLENBQXFCLFVBQUFDLElBQUk7QUFBQSxhQUFFQSxJQUFJLENBQUNyQixTQUFMLEtBQWlCYixJQUFuQjtBQUFBLEtBQXpCLENBQUQsQ0FBZDtBQUNDLEdBN0JRLENBQVQ7QUE4QkFPLFNBQU8sQ0FBQzRCLEdBQVIsQ0FBWSxNQUFaLEVBQW1COUIsWUFBbkI7QUFFQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdELENBN0NEOztHQUFNVixJO1VBQ1dFLHFELEVBRVNJLDJDOzs7S0FIcEJOLEk7QUErQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY292aWQtdGVzdGluZy1zaXRlcy9bdGVzdGluZy1zaXRlXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJztcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcblxuY29uc3QgUG9zdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBwaWQsIG5hbWUgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvdGVzdGluZy1zaXRlcycsIGZldGNoZXIpO1xuICBjb25zdCBbdGVzdGluZ19zaXRlLCBzZXRUZXN0aW5nU2l0ZV0gPSB1c2VTdGF0ZShcIlwiKTsgIFxuXG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YSBmcm9tIEFQSSBmb3IgL2FwaS90ZXN0aW5nLXNpdGVzOiAnLCBlcnJvcik7XG4gIH0gICAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoc2l0ZSkgPT4gKHtcbiAgICAgIGtleTogYCR7c2l0ZS5zaXRlX25hbWV9KyR7c2l0ZS5jb29yZGluYXRlcy5sYXR9KyR7c2l0ZS5jb29yZGluYXRlcy5sbmd9YCxcbiAgICAgIG91dHB1dF9rZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXG4gICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgICBcbiAgICAgIHNpdGVfaW5mbzoge1xuICAgICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgXG4gICAgICAgIHByb3ZpZGVyX3VybDogc2l0ZS5wcm92aWRlcl91cmwsXG4gICAgICAgIGFkZGl0aW9uYWxfaW5mbzogc2l0ZS5hZGRpdGlvbmFsX2luZm8sXG4gICAgICAgIGFkZHJlc3M6IHNpdGUuYWRkcmVzcyxcbiAgICAgICAgcGhvbmU6IHNpdGUucGhvbmUsXG4gICAgICAgIG1vbmRheTogc2l0ZS5tb25kYXksXG4gICAgICAgIHR1ZXNkYXk6IHNpdGUudHVlc2RheSxcbiAgICAgICAgd2VkbmVzZGF5OiBzaXRlLndlZG5lc2RheSxcbiAgICAgICAgdGh1cnNkYXk6IHNpdGUudGh1cnNkYXksXG4gICAgICAgIGZyaWRheTogc2l0ZS5mcmlkYXksXG4gICAgICAgIHNhdHVyZGF5OiBzaXRlLnNhdHVyZGF5LFxuICAgICAgICBzdW5kYXk6IHNpdGUuc3VuZGF5LFxuICAgICAgICBzY3JlZW5pbmdfcmVxdWlyZWQ6IHNpdGUuc2NyZWVuaW5nX3JlcXVpcmVkLFxuICAgICAgICBhcHBvaW50bWVudF9yZXF1aXJlZDogc2l0ZS5hcHBvaW50bWVudF9yZXF1aXJlZCxcbiAgICAgICAgYW50aWJvZHlfdGVzdGluZzogc2l0ZS5hbnRpYm9keV90ZXN0aW5nLCBcbiAgICAgIH0sICAgICAgICAgICAgICAgICAgIFxuICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgbGF0OiBzaXRlLmNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgbG5nOiBzaXRlLmNvb3JkaW5hdGVzLmxuZyxcbiAgICAgIH0sXG4gICAgfSkpO1xuICAvL2NvbnNvbGUubG9nKFwiZm9ybWF0dGVkRGF0YVwiLGZvcm1hdHRlZERhdGEpO1xuICBzZXRUZXN0aW5nU2l0ZShmb3JtYXR0ZWREYXRhLmZpbHRlcihpdGVtPT5pdGVtLnNpdGVfbmFtZT09PW5hbWUpKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLHRlc3Rpbmdfc2l0ZSlcblxuICByZXR1cm4gPGRpdj5cbiAgeW9cbjwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/[testing-site].jsx\n");

/***/ })

})