webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 32\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 34\n      }\n    }), value.name !== undefined ? \"Name: \".concat(value.name).concat(__jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 57\n      }\n    })) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 104\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 33\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 33\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 33\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 33\n      }\n    }), \"Additional Information: \", value.additional_info, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 57\n      }\n    }), \"URL: \", value.provider_url);\n  } // additional_info: \"Urgent Care Clinic\"\n  // address: \"633 Driggs Ave., Brooklyn, NY 11211\"\n  // antibody_testing: true\n  // appointment_required: false\n  // coordinates: {lat: 40.7150681, lng: -73.9583843}\n  // friday: \"8AM-8PM\"\n  // monday: \"8AM-8PM\"\n  // phone: \"(347) 987-4144\"\n  // provider_url: \"http://www.umdcare.com\"\n  // saturday: \"8AM-7PM\"\n  // screening_required: true\n  // site_name: \"UMD Urgent Care - Williamsburg\"\n  // sunday: \"9AM-6PM\"\n  // thursday: \"8AM-8PM\"\n  // tuesday: \"8AM-8PM\"\n  // wednesday: \"8AM-8PM\"\n  ));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4IiwiYWRkcmVzcyIsIm5hbWUiLCJ1bmRlZmluZWQiLCJhcHBvaW50bWVudF9yZXF1aXJlZCIsImFudGlib2R5X3Rlc3RpbmciLCJzaXRlX25hbWUiLCJhZGRpdGlvbmFsX2luZm8iLCJwcm92aWRlcl91cmwiLCJDb3ZpZFRlc3RpbmdTaXRlc1BhZ2UiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJNYXBNYXJrZXJzQ29udGV4dCIsInNldE1hcE1hcmtlcnMiLCJzZXRTdGF0ZSIsInVzZVN3ciIsImVycm9yIiwiY29uc29sZSIsInVzZUVmZmVjdCIsImZvcm1hdHRlZERhdGEiLCJzaXRlIiwia2V5IiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJsbmciLCJvdXRwdXRfa2V5Iiwic2l0ZV9pbmZvIiwicGhvbmUiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImxvZyIsImdldExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QVYsSUFBa0IsTUFBQyxZQUFEO0FBQWMsUUFBSSxFQUFJQSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSnJCLENBREY7QUFTRDs7R0FyRFFZLHFCO1VBRWlCTSwyQzs7O01BRmpCTixxQjtBQXVEVEEscUJBQXFCLENBQUM0QixTQUF0QixHQUFrQ0EsOERBQWxDO0FBRWU1QixvRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvdmlkLXRlc3Rpbmctc2l0ZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBMYXlvdXQnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcbmNvbnN0IFRlc3RpbmdTaXRlcyA9ICh7IGRhdGEgfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICB7XHJcbiAgICAgIGRhdGEubWFwKCh2YWx1ZSwgaWR4KSA9PiA8cCBrZXk9e2lkeH0+XHJcbiAgICAgICAgQWRkcmVzczoge3ZhbHVlLmFkZHJlc3N9IDxicj48L2JyPiBcclxuICAgICAgICB7dmFsdWUubmFtZSE9PXVuZGVmaW5lZCA/IGBOYW1lOiAke3ZhbHVlLm5hbWV9JHs8YnI+PC9icj59YCA6ICcnfVxyXG4gICAgICAgIFlvdSBhcmUge3ZhbHVlLmFwcG9pbnRtZW50X3JlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICdub3QgcmVxdWlyZWQnfSB0byBoYXZlIGFuIGFwcG9pbnRtZW50IHRvIGdldCB0ZXN0ZWQuPGJyPjwvYnI+XHJcbiAgICAgICAgVGhpcyB0ZXN0aW5nIHNpdGUge3ZhbHVlLmFudGlib2R5X3Rlc3RpbmcgPyAncHJvdmlkZXMnIDogJ2RvZXMgbm90IHByb3ZpZGUnfSBhbnRpYm9keSB0ZXN0aW5nLiA8YnI+PC9icj5cclxuICAgICAgICBOYW1lOiB7dmFsdWUuc2l0ZV9uYW1lfSA8YnI+PC9icj4gXHJcbiAgICAgICAgTmFtZToge3ZhbHVlLnNpdGVfbmFtZX0gPGJyPjwvYnI+IFxyXG4gICAgICAgIE5hbWU6IHt2YWx1ZS5zaXRlX25hbWV9IDxicj48L2JyPiBcclxuICAgICAgICBOYW1lOiB7dmFsdWUuc2l0ZV9uYW1lfSA8YnI+PC9icj4gXHJcbiAgICAgICAgQWRkaXRpb25hbCBJbmZvcm1hdGlvbjoge3ZhbHVlLmFkZGl0aW9uYWxfaW5mb30gPGJyPjwvYnI+IFxyXG4gICAgICAgIFVSTDoge3ZhbHVlLnByb3ZpZGVyX3VybH08L3A+XHJcbiAgICAgICAgLy8gYWRkaXRpb25hbF9pbmZvOiBcIlVyZ2VudCBDYXJlIENsaW5pY1wiXHJcbiAgICAgICAgLy8gYWRkcmVzczogXCI2MzMgRHJpZ2dzIEF2ZS4sIEJyb29rbHluLCBOWSAxMTIxMVwiXHJcbiAgICAgICAgLy8gYW50aWJvZHlfdGVzdGluZzogdHJ1ZVxyXG4gICAgICAgIC8vIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBmYWxzZVxyXG4gICAgICAgIC8vIGNvb3JkaW5hdGVzOiB7bGF0OiA0MC43MTUwNjgxLCBsbmc6IC03My45NTgzODQzfVxyXG4gICAgICAgIC8vIGZyaWRheTogXCI4QU0tOFBNXCJcclxuICAgICAgICAvLyBtb25kYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgLy8gcGhvbmU6IFwiKDM0NykgOTg3LTQxNDRcIlxyXG4gICAgICAgIC8vIHByb3ZpZGVyX3VybDogXCJodHRwOi8vd3d3LnVtZGNhcmUuY29tXCJcclxuICAgICAgICAvLyBzYXR1cmRheTogXCI4QU0tN1BNXCJcclxuICAgICAgICAvLyBzY3JlZW5pbmdfcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAvLyBzaXRlX25hbWU6IFwiVU1EIFVyZ2VudCBDYXJlIC0gV2lsbGlhbXNidXJnXCJcclxuICAgICAgICAvLyBzdW5kYXk6IFwiOUFNLTZQTVwiXHJcbiAgICAgICAgLy8gdGh1cnNkYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgLy8gdHVlc2RheTogXCI4QU0tOFBNXCJcclxuICAgICAgICAvLyB3ZWRuZXNkYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgKVxyXG4gICAgICBcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIENvdmlkVGVzdGluZ1NpdGVzUGFnZSgpIHtcclxuICBjb25zdCB7IHNldFN0YXRlOiBzZXRNYXBNYXJrZXJzIH0gPSBSZWFjdC51c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTsgICAgXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YSBmcm9tIEFQSSBmb3IgL2FwaS90ZXN0aW5nLXNpdGVzOiAnLCBlcnJvcik7XHJcbiAgfSAgICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xyXG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG91dHB1dF9rZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCAgIFxyXG4gICAgICBzaXRlX2luZm86IHtcclxuICAgICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgXHJcbiAgICAgICAgcHJvdmlkZXJfdXJsOiBzaXRlLnByb3ZpZGVyX3VybCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxyXG4gICAgICAgIGFkZHJlc3M6IHNpdGUuYWRkcmVzcyxcclxuICAgICAgICBwaG9uZTogc2l0ZS5waG9uZSxcclxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxyXG4gICAgICAgIHR1ZXNkYXk6IHNpdGUudHVlc2RheSxcclxuICAgICAgICB3ZWRuZXNkYXk6IHNpdGUud2VkbmVzZGF5LFxyXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxyXG4gICAgICAgIGZyaWRheTogc2l0ZS5mcmlkYXksXHJcbiAgICAgICAgc2F0dXJkYXk6IHNpdGUuc2F0dXJkYXksXHJcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcclxuICAgICAgICBzY3JlZW5pbmdfcmVxdWlyZWQ6IHNpdGUuc2NyZWVuaW5nX3JlcXVpcmVkLFxyXG4gICAgICAgIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBzaXRlLmFwcG9pbnRtZW50X3JlcXVpcmVkLFxyXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXHJcbiAgICAgIH0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBjb29yZGluYXRlczoge1xyXG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBzaXRlLmNvb3JkaW5hdGVzLmxuZyxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJmb3JtYXR0ZWREYXRhXCIsZm9ybWF0dGVkRGF0YSk7XHJcbiAgICBzZXRNYXBNYXJrZXJzKGZvcm1hdHRlZERhdGEpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldE1hcE1hcmtlcnMoW10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBzZXRNYXBNYXJrZXJzXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxyXG4gICAgICB7ZXJyb3IgJiYgJ0Vycm9yIGxvYWRpbmcgY29udGVudCd9XHJcbiAgICAgIHshZGF0YSAmJiAhZXJyb3IgJiYgJ0xvYWRpbmcuLi4nfVxyXG4gICAgICB7LyogeyFlcnJvciAmJiBkYXRhICYmIFwieW8geW9cIn0gKi99XHJcbiAgICAgIHshZXJyb3IgJiYgZGF0YSAmJiA8VGVzdGluZ1NpdGVzIGRhdGEgPSB7ZGF0YX0vPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59XHJcblxyXG5Db3ZpZFRlc3RpbmdTaXRlc1BhZ2UuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ292aWRUZXN0aW5nU2l0ZXNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})