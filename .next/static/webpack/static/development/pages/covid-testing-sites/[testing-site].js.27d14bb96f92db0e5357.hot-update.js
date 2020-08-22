webpackHotUpdate("static/development/pages/covid-testing-sites/[testing-site].js",{

/***/ "./pages/covid-testing-sites/[testing-site].jsx":
/*!******************************************************!*\
  !*** ./pages/covid-testing-sites/[testing-site].jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/[testing-site].jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Post = function Post() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var _router$query = router.query,\n      pid = _router$query.pid,\n      name = _router$query.name;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      testing_site = _useState[0],\n      setTestingSite = _useState[1];\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    });\n    console.log(\"formattedData\", formattedData);\n    setTestingSite(formattedData.filter(function (item) {\n      return item.name === name;\n    }));\n  }, [data]);\n  console.log(\"data\", testing_site);\n  console.log(\"data\", testing_site.site_info);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 10\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Post, \"6BI7+DlM4cnIAPBKhoV3q3VeEDM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL1t0ZXN0aW5nLXNpdGVdLmpzeD9iNjg2Il0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicGlkIiwibmFtZSIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsInVzZVN0YXRlIiwidGVzdGluZ19zaXRlIiwic2V0VGVzdGluZ1NpdGUiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsInNpdGUiLCJrZXkiLCJzaXRlX25hbWUiLCJjb29yZGluYXRlcyIsImxhdCIsImxuZyIsIm91dHB1dF9rZXkiLCJzaXRlX2luZm8iLCJwcm92aWRlcl91cmwiLCJhZGRpdGlvbmFsX2luZm8iLCJhZGRyZXNzIiwicGhvbmUiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImFwcG9pbnRtZW50X3JlcXVpcmVkIiwiYW50aWJvZHlfdGVzdGluZyIsImxvZyIsImZpbHRlciIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBYUMsS0FBSyxNQUFMLG9CQUFlQyxJQUFmLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQXZCLENBQWI7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEaUIsc0JBRUtELE1BQU0sQ0FBQ0UsS0FGWjtBQUFBLE1BRVRDLEdBRlMsaUJBRVRBLEdB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IjoiLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL1t0ZXN0aW5nLXNpdGVdLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xuXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHBpZCwgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cignL2FwaS90ZXN0aW5nLXNpdGVzJywgZmV0Y2hlcik7XG4gIGNvbnN0IFt0ZXN0aW5nX3NpdGUsIHNldFRlc3RpbmdTaXRlXSA9IHVzZVN0YXRlKFwiXCIpOyAgXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBkYXRhIGZyb20gQVBJIGZvciAvYXBpL3Rlc3Rpbmctc2l0ZXM6ICcsIGVycm9yKTtcbiAgfSAgICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xuICAgICAga2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxuICAgICAgb3V0cHV0X2tleTogYCR7c2l0ZS5zaXRlX25hbWV9KyR7c2l0ZS5jb29yZGluYXRlcy5sYXR9KyR7c2l0ZS5jb29yZGluYXRlcy5sbmd9YCxcbiAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCAgIFxuICAgICAgc2l0ZV9pbmZvOiB7XG4gICAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCBcbiAgICAgICAgcHJvdmlkZXJfdXJsOiBzaXRlLnByb3ZpZGVyX3VybCxcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiBzaXRlLmFkZGl0aW9uYWxfaW5mbyxcbiAgICAgICAgYWRkcmVzczogc2l0ZS5hZGRyZXNzLFxuICAgICAgICBwaG9uZTogc2l0ZS5waG9uZSxcbiAgICAgICAgbW9uZGF5OiBzaXRlLm1vbmRheSxcbiAgICAgICAgdHVlc2RheTogc2l0ZS50dWVzZGF5LFxuICAgICAgICB3ZWRuZXNkYXk6IHNpdGUud2VkbmVzZGF5LFxuICAgICAgICB0aHVyc2RheTogc2l0ZS50aHVyc2RheSxcbiAgICAgICAgZnJpZGF5OiBzaXRlLmZyaWRheSxcbiAgICAgICAgc2F0dXJkYXk6IHNpdGUuc2F0dXJkYXksXG4gICAgICAgIHN1bmRheTogc2l0ZS5zdW5kYXksXG4gICAgICAgIHNjcmVlbmluZ19yZXF1aXJlZDogc2l0ZS5zY3JlZW5pbmdfcmVxdWlyZWQsXG4gICAgICAgIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBzaXRlLmFwcG9pbnRtZW50X3JlcXVpcmVkLFxuICAgICAgICBhbnRpYm9keV90ZXN0aW5nOiBzaXRlLmFudGlib2R5X3Rlc3RpbmcsIFxuICAgICAgfSwgICAgICAgICAgICAgICAgICAgXG4gICAgICBjb29yZGluYXRlczoge1xuICAgICAgICBsYXQ6IHNpdGUuY29vcmRpbmF0ZXMubGF0LFxuICAgICAgICBsbmc6IHNpdGUuY29vcmRpbmF0ZXMubG5nLFxuICAgICAgfSxcbiAgICB9KSk7XG4gICAgY29uc29sZS5sb2coXCJmb3JtYXR0ZWREYXRhXCIsZm9ybWF0dGVkRGF0YSk7XG4gICAgc2V0VGVzdGluZ1NpdGUoZm9ybWF0dGVkRGF0YS5maWx0ZXIoaXRlbT0+aXRlbS5uYW1lPT09bmFtZSkpO1xuICB9LCBbZGF0YV0pO1xuICBjb25zb2xlLmxvZyhcImRhdGFcIix0ZXN0aW5nX3NpdGUpXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLHRlc3Rpbmdfc2l0ZS5zaXRlX2luZm8pXG5cbiAgcmV0dXJuIDxkaXY+XG4gICAge1xuICAgICAgPHA+ICAgICAgICAgICAgICAgIFxuICAgICAgICB7LyogQWRkcmVzczoge3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8uYWRkcmVzc30gPGJyPjwvYnI+IFxuICAgICAgICB7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5waG9uZSA/IGBQaG9uZSBOdW1iZXI6ICR7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5waG9uZX1gIDogJyd9e3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8ucGhvbmUgPyA8YnI+PC9icj4gOiAnJ31cbiAgICAgICAgWW91IGFyZSB7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5hcHBvaW50bWVudF9yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnbm90IHJlcXVpcmVkJ30gdG8gaGF2ZSBhbiBhcHBvaW50bWVudCB0byBnZXQgdGVzdGVkLjxicj48L2JyPlxuICAgICAgICBUaGlzIHRlc3Rpbmcgc2l0ZSB7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5hbnRpYm9keV90ZXN0aW5nID8gJ3Byb3ZpZGVzJyA6ICdkb2VzIG5vdCBwcm92aWRlJ30gYW50aWJvZHkgdGVzdGluZy4gPGJyPjwvYnI+ICAgICAgICBcbiAgICAgICAgSG91cnM6IDxicj48L2JyPlxuICAgICAgICB7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5zdW5kYXkgPyBgU3VuZGF5OiAke3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8uc3VuZGF5fWAgOiAnJ317dGVzdGluZ19zaXRlLnNpdGVfaW5mby5zdW5kYXkgPyA8YnI+PC9icj4gOiAnJ31cbiAgICAgICAge3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8ubW9uZGF5ID8gYE1vbmRheTogJHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLm1vbmRheX1gIDogJyd9e3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8ubW9uZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICAgIHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnR1ZXNkYXkgPyBgVHVlc2RheTogJHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnR1ZXNkYXl9YCA6ICcnfXt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnR1ZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cbiAgICAgICAge3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8ud2VkbmVzZGF5ID8gYFdlZG5lc2RheTogJHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLndlZG5lc2RheX1gIDogJyd9e3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8ud2VkbmVzZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICAgIHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnRodXJzZGF5ID8gYFRodXJzZGF5OiAke3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8udGh1cnNkYXl9YCA6ICcnfXt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnRodXJzZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICAgIHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLmZyaWRheSA/IGBGcmlkYXk6ICR7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5mcmlkYXl9YCA6ICcnfXt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLmZyaWRheSA/IDxicj48L2JyPiA6ICcnfVxuICAgICAgICB7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5zYXR1cmRheSA/IGBTYXR1cmRheTogJHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnNhdHVyZGF5fWAgOiAnJ317dGVzdGluZ19zaXRlLnNpdGVfaW5mby5zYXR1cmRheSA/IDxicj48L2JyPiA6ICcnfVxuICAgICAgICB7dGVzdGluZ19zaXRlLnNpdGVfaW5mby5hZGRpdGlvbmFsX2luZm8gPyBgQWRkaXRpb25hbCBJbmZvcm1hdGlvbjogJHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLmFkZGl0aW9uYWxfaW5mb31gIDogJyd9e3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8uYWRkaXRpb25hbF9pbmZvID8gPGJyPjwvYnI+IDogJyd9ICAgICAgICAgXG4gICAgICAgIHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnByb3ZpZGVyX3VybCA/IGBVUkw6IGAgOiAnJ317dGVzdGluZ19zaXRlLnNpdGVfaW5mby5wcm92aWRlcl91cmwgPyA8YSBocmVmID0ge3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8ucHJvdmlkZXJfdXJsfT57dGVzdGluZ19zaXRlLnNpdGVfaW5mby5wcm92aWRlcl91cmx9PC9hPiA6ICcnfXt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnByb3ZpZGVyX3VybCA/IDxicj48L2JyPiA6ICcnfSBcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb3ZpZC10ZXN0aW5nLXNpdGVzL1tzaXRlXVwiIGFzPXtgL2NvdmlkLXRlc3Rpbmctc2l0ZXMvJHt0ZXN0aW5nX3NpdGUuc2l0ZV9pbmZvLnNpdGVfbmFtZX0/bmFtZT0ke3Rlc3Rpbmdfc2l0ZS5zaXRlX2luZm8uc2l0ZV9uYW1lfWB9PlxuICAgICAgICAgICAgPGE+TGluayB0byB0aGlzIEluZm88L2E+XG4gICAgICAgIDwvTGluaz4gKi99XG4gICAgICA8L3A+XG4gICAgICBcbiAgICB9XG4gIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/[testing-site].jsx\n");

/***/ })

})