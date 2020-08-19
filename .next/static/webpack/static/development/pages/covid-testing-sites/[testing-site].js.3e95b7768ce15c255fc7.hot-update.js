webpackHotUpdate("static/development/pages/covid-testing-sites/[testing-site].js",{

/***/ "./pages/covid-testing-sites/[testing-site].jsx":
/*!******************************************************!*\
  !*** ./pages/covid-testing-sites/[testing-site].jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/[testing-site].jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Post = function Post() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var _router$query = router.query,\n      pid = _router$query.pid,\n      name = _router$query.name;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    });\n  }, [data]);\n  return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 10\n    }\n  }, \"Address: \", address);\n};\n\n_s(Post, \"mhn4b5EA+uZWu2+OqyWb3l+9LbI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL1t0ZXN0aW5nLXNpdGVdLmpzeD9iNjg2Il0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicGlkIiwibmFtZSIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJ1c2VFZmZlY3QiLCJmb3JtYXR0ZWREYXRhIiwibWFwIiwic2l0ZSIsImtleSIsInNpdGVfbmFtZSIsImNvb3JkaW5hdGVzIiwibGF0IiwibG5nIiwib3V0cHV0X2tleSIsInNpdGVfaW5mbyIsInByb3ZpZGVyX3VybCIsImFkZGl0aW9uYWxfaW5mbyIsImFkZHJlc3MiLCJwaG9uZSIsIm1vbmRheSIsInR1ZXNkYXkiLCJ3ZWRuZXNkYXkiLCJ0aHVyc2RheSIsImZyaWRheSIsInNhdHVyZGF5Iiwic3VuZGF5Iiwic2NyZWVuaW5nX3JlcXVpcmVkIiwiYXBwb2ludG1lbnRfcmVxdWlyZWQiLCJhbnRpYm9keV90ZXN0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGlCLHNCQUVLRCxNQUFNLENBQUNFLEtBRlo7QUFBQSxNQUVUQyxHQUZTLGlCQUVUQSxHQUZTO0FBQUEsTUFFSkMsSUFGSSxpQkFFSkEsSUFGSTs7QUFBQSxnQkFHT0MsbURBQU0sQ0FBQyxvQkFBRCxFQUF1QlgsT0FBdkIsQ0FIYjtBQUFBLE1BR1RZLElBSFMsV0FHVEEsSUFIUztBQUFBLE1BR0hDLEtBSEcsV0FHSEEsS0FIRzs7QUFLakIsTUFBSUEsS0FBSixFQUFXO0FBQ1RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjLHNEQUFkLEVBQXNFQSxLQUF0RTtBQUNEOztBQUVERSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxhQUFhLEdBQUcsQ0FBQ0osSUFBSSxJQUFJLEVBQVQsRUFBYUssR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsYUFBVztBQUNoREMsV0FBRyxZQUFLRCxJQUFJLENBQUNFLFNBQVYsY0FBdUJGLElBQUksQ0FBQ0csV0FBTCxDQUFpQkMsR0FBeEMsY0FBK0NKLElBQUksQ0FBQ0csV0FBTCxDQUFpQkUsR0FBaEUsQ0FENkM7QUFFaERDLGtCQUFVLFlBQUtOLElBQUksQ0FBQ0UsU0FBVixjQUF1QkYsSUFBSSxDQUFDRyxXQUFMLENBQWlCQyxHQUF4QyxjQUErQ0osSUFBSSxDQUFDRyxXQUFMLENBQWlCRSxHQUFoRSxDQUZzQztBQUdoRGIsWUFBSSxFQUFFUSxJQUFJLENBQUNFLFNBSHFDO0FBSWhESyxpQkFBUyxFQUFFO0FBQ1RmLGNBQUksRUFBRVEsSUFBSSxDQUFDRSxTQURGO0FBRVRNLHNCQUFZLEVBQUVSLElBQUksQ0FBQ1EsWUFGVjtBQUdUQyx5QkFBZSxFQUFFVCxJQUFJLENBQUNTLGVBSGI7QUFJVEMsaUJBQU8sRUFBRVYsSUFBSSxDQUFDVSxPQUpMO0FBS1RDLGVBQUssRUFBRVgsSUFBSSxDQUFDVyxLQUxIO0FBTVRDLGdCQUFNLEVBQUVaLElBQUksQ0FBQ1ksTUFOSjtBQU9UQyxpQkFBTyxFQUFFYixJQUFJLENBQUNhLE9BUEw7QUFRVEMsbUJBQVMsRUFBRWQsSUFBSSxDQUFDYyxTQVJQO0FBU1RDLGtCQUFRLEVBQUVmLElBQUksQ0FBQ2UsUUFUTjtBQVVUQyxnQkFBTSxFQUFFaEIsSUFBSSxDQUFDZ0IsTUFWSjtBQVdUQyxrQkFBUSxFQUFFakIsSUFBSSxDQUFDaUIsUUFYTjtBQVlUQyxnQkFBTSxFQUFFbEIsSUFBSSxDQUFDa0IsTUFaSjtBQWFUQyw0QkFBa0IsRUFBRW5CLElBQUksQ0FBQ21CLGtCQWJoQjtBQWNUQyw4QkFBb0IsRUFBRXBCLElBQUksQ0FBQ29CLG9CQWRsQjtBQWVUQywwQkFBZ0IsRUFBRXJCLElBQUksQ0FBQ3FCO0FBZmQsU0FKcUM7QUFxQmhEbEIsbUJBQVcsRUFBRTtBQUNYQyxhQUFHLEVBQUVKLElBQUksQ0FBQ0csV0FBTCxDQUFpQkMsR0FEWDtBQUVYQyxhQUFHLEVBQUVMLElBQUksQ0FBQ0csV0FBTCxDQUFpQkU7QUFGWDtBQXJCbUMsT0FBWDtBQUFBLEtBQWpCLENBQXRCO0FBMEJELEdBM0JRLEVBMkJOLENBQUNYLElBQUQsQ0EzQk0sQ0FBVDtBQTZCQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWFnQixPQUFiLENBQVA7QUFDRCxDQXZDRDs7R0FBTXZCLEk7VUFDV0UscUQsRUFFU0ksMkM7OztLQUhwQk4sSTtBQXlDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL1t0ZXN0aW5nLXNpdGVdLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbmNvbnN0IFBvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgcGlkLCBuYW1lIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGRhdGEgZnJvbSBBUEkgZm9yIC9hcGkvdGVzdGluZy1zaXRlczogJywgZXJyb3IpO1xuICB9ICAgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKHNpdGUpID0+ICh7XG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXG4gICAgICBvdXRwdXRfa2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxuICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsICAgXG4gICAgICBzaXRlX2luZm86IHtcbiAgICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsIFxuICAgICAgICBwcm92aWRlcl91cmw6IHNpdGUucHJvdmlkZXJfdXJsLFxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxuICAgICAgICBhZGRyZXNzOiBzaXRlLmFkZHJlc3MsXG4gICAgICAgIHBob25lOiBzaXRlLnBob25lLFxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxuICAgICAgICB0dWVzZGF5OiBzaXRlLnR1ZXNkYXksXG4gICAgICAgIHdlZG5lc2RheTogc2l0ZS53ZWRuZXNkYXksXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxuICAgICAgICBmcmlkYXk6IHNpdGUuZnJpZGF5LFxuICAgICAgICBzYXR1cmRheTogc2l0ZS5zYXR1cmRheSxcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcbiAgICAgICAgc2NyZWVuaW5nX3JlcXVpcmVkOiBzaXRlLnNjcmVlbmluZ19yZXF1aXJlZCxcbiAgICAgICAgYXBwb2ludG1lbnRfcmVxdWlyZWQ6IHNpdGUuYXBwb2ludG1lbnRfcmVxdWlyZWQsXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXG4gICAgICB9LCAgICAgICAgICAgICAgICAgICBcbiAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXG4gICAgICAgIGxuZzogc2l0ZS5jb29yZGluYXRlcy5sbmcsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gPHA+QWRkcmVzczoge2FkZHJlc3N9PC9wPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/[testing-site].jsx\n");

/***/ })

})