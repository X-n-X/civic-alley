webpackHotUpdate("static/development/pages/covid-testing-sites/[testing-site].js",{

/***/ "./pages/covid-testing-sites/[testing-site].jsx":
/*!******************************************************!*\
  !*** ./pages/covid-testing-sites/[testing-site].jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/[testing-site].jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Post = function Post() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var _router$query = router.query,\n      pid = _router$query.pid,\n      name = _router$query.name;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      testing_site = _useState[0],\n      setTestingSite = _useState[1];\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    });\n    console.log(\"formattedData\", formattedData);\n    setTestingSite(formattedData.filter(function (item) {\n      return item.name === name;\n    })[0].site_info);\n  }, [data]);\n  console.log(\"data\", testing_site);\n  console.log(testing_site.site_info);\n  console.log();\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 10\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, \"Address: \", testing_site[0].site_info.address, \" \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 54\n    }\n  }), testing_site[0].site_info.phone ? \"Phone Number: \".concat(testing_site[0].site_info.phone) : '', testing_site[0].site_info.phone ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 135\n    }\n  }) : '', \"You are \", testing_site[0].site_info.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 133\n    }\n  }), \"This testing site \", testing_site[0].site_info.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 124\n    }\n  }), \"Hours: \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 16\n    }\n  }), testing_site[0].site_info.sunday ? \"Sunday: \".concat(testing_site[0].site_info.sunday) : '', testing_site[0].site_info.sunday ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 132\n    }\n  }) : '', testing_site[0].site_info.monday ? \"Monday: \".concat(testing_site[0].site_info.monday) : '', testing_site[0].site_info.monday ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 132\n    }\n  }) : '', testing_site[0].site_info.tuesday ? \"Tuesday: \".concat(testing_site[0].site_info.tuesday) : '', testing_site[0].site_info.tuesday ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 136\n    }\n  }) : '', testing_site[0].site_info.wednesday ? \"Wednesday: \".concat(testing_site[0].site_info.wednesday) : '', testing_site[0].site_info.wednesday ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 144\n    }\n  }) : '', testing_site[0].site_info.thursday ? \"Thursday: \".concat(testing_site[0].site_info.thursday) : '', testing_site[0].site_info.thursday ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 140\n    }\n  }) : '', testing_site[0].site_info.friday ? \"Friday: \".concat(testing_site[0].site_info.friday) : '', testing_site[0].site_info.friday ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 132\n    }\n  }) : '', testing_site[0].site_info.saturday ? \"Saturday: \".concat(testing_site[0].site_info.saturday) : '', testing_site[0].site_info.saturday ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 140\n    }\n  }) : '', testing_site[0].site_info.additional_info ? \"Additional Information: \".concat(testing_site[0].site_info.additional_info) : '', testing_site[0].site_info.additional_info ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 175\n    }\n  }) : '', testing_site[0].site_info.provider_url ? \"URL: \" : '', testing_site[0].site_info.provider_url ? __jsx(\"a\", {\n    href: testing_site[0].site_info.provider_url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 106\n    }\n  }, testing_site[0].site_info.provider_url) : '', testing_site[0].site_info.provider_url ? __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 249\n    }\n  }) : '', __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/covid-testing-sites/[site]\",\n    as: \"/covid-testing-sites/\".concat(testing_site[0].site_info.site_name, \"?name=\").concat(testing_site[0].site_info.site_name),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Link to this Info\"))));\n};\n\n_s(Post, \"6BI7+DlM4cnIAPBKhoV3q3VeEDM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL1t0ZXN0aW5nLXNpdGVdLmpzeD9iNjg2Il0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicGlkIiwibmFtZSIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsInVzZVN0YXRlIiwidGVzdGluZ19zaXRlIiwic2V0VGVzdGluZ1NpdGUiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsInNpdGUiLCJrZXkiLCJzaXRlX25hbWUiLCJjb29yZGluYXRlcyIsImxhdCIsImxuZyIsIm91dHB1dF9rZXkiLCJzaXRlX2luZm8iLCJwcm92aWRlcl91cmwiLCJhZGRpdGlvbmFsX2luZm8iLCJhZGRyZXNzIiwicGhvbmUiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImFwcG9pbnRtZW50X3JlcXVpcmVkIiwiYW50aWJvZHlfdGVzdGluZyIsImxvZyIsImZpbHRlciIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGlCLHNCQUVLRCxNQUFNLENBQUNFLEtBRlo7QUFBQSxNQUVUQyxHQUZTLGlCQUVUQSxHQUZTO0FBQUEsTUFFSkMsSUFGSSxpQkFFSkEsSUFGSTs7QUFBQSxnQkFHT0MsbURBQU0sQ0FBQyxvQkFBRCxFQUF1QlgsT0FBdkIsQ0FIYjtBQUFBLE1BR1RZLElBSFMsV0FHVEEsSUFIUztBQUFBLE1BR0hDLEtBSEcsV0FHSEEsS0FIRzs7QUFBQSxrQkFJc0JDLHNEQUFRLENBQUMsRUFBRCxDQUo5QjtBQUFBLE1BSVZDLFlBSlU7QUFBQSxNQUlJQyxjQUpKOztBQU1qQixNQUFJSCxLQUFKLEVBQVc7QUFDVEksV0FBTyxDQUFDSixLQUFSLENBQWMsc0RBQWQsRUFBc0VBLEtBQXRFO0FBQ0Q7O0FBRURLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGFBQWEsR0FBRyxDQUFDUCxJQUFJLElBQUksRUFBVCxFQUFhUSxHQUFiLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxhQUFXO0FBQ2hEQyxXQUFHLFlBQUtELElBQUksQ0FBQ0UsU0FBVixjQUF1QkYsSUFBSSxDQUFDRyxXQUFMLENBQWlCQyxHQUF4QyxjQUErQ0osSUFBSSxDQUFDRyxXQUFMLENBQWlCRSxHQUFoRSxDQUQ2QztBQUVoREMsa0JBQVUsWUFBS04sSUFBSSxDQUFDRSxTQUFWLGNBQXVCRixJQUFJLENBQUNHLFdBQUwsQ0FBaUJDLEdBQXhDLGNBQStDSixJQUFJLENBQUNHLFdBQUwsQ0FBaUJFLEdBQWhFLENBRnNDO0FBR2hEaEIsWUFBSSxFQUFFVyxJQUFJLENBQUNFLFNBSHFDO0FBSWhESyxpQkFBUyxFQUFFO0FBQ1RsQixjQUFJLEVBQUVXLElBQUksQ0FBQ0UsU0FERjtBQUVUTSxzQkFBWSxFQUFFUixJQUFJLENBQUNRLFlBRlY7QUFHVEMseUJBQWUsRUFBRVQsSUFBSSxDQUFDUyxlQUhiO0FBSVRDLGlCQUFPLEVBQUVWLElBQUksQ0FBQ1UsT0FKTDtBQUtUQyxlQUFLLEVBQUVYLElBQUksQ0FBQ1csS0FMSDtBQU1UQyxnQkFBTSxFQUFFWixJQUFJLENBQUNZLE1BTko7QUFPVEMsaUJBQU8sRUFBRWIsSUFBSSxDQUFDYSxPQVBMO0FBUVRDLG1CQUFTLEVBQUVkLElBQUksQ0FBQ2MsU0FSUDtBQVNUQyxrQkFBUSxFQUFFZixJQUFJLENBQUNlLFFBVE47QUFVVEMsZ0JBQU0sRUFBRWhCLElBQUksQ0FBQ2dCLE1BVko7QUFXVEMsa0JBQVEsRUFBRWpCLElBQUksQ0FBQ2lCLFFBWE47QUFZVEMsZ0JBQU0sRUFBRWxCLElBQUksQ0FBQ2tCLE1BWko7QUFhVEMsNEJBQWtCLEVBQUVuQixJQUFJLENBQUNtQixrQkFiaEI7QUFjVEMsOEJBQW9CLEVBQUVwQixJQUFJLENBQUNvQixvQkFkbEI7QUFlVEMsMEJBQWdCLEVBQUVyQixJQUFJLENBQUNxQjtBQWZkLFNBSnFDO0FBcUJoRGxCLG1CQUFXLEVBQUU7QUFDWEMsYUFBRyxFQUFFSixJQUFJLENBQUNHLFdBQUwsQ0FBaUJDLEdBRFg7QUFFWEMsYUFBRyxFQUFFTCxJQUFJLENBQUNHLFdBQUwsQ0FBaUJFO0FBRlg7QUFyQm1DLE9BQVg7QUFBQSxLQUFqQixDQUF0QjtBQTBCQVQsV0FBTyxDQUFDMEIsR0FBUixDQUFZLGVBQVosRUFBNEJ4QixhQUE1QjtBQUNBSCxrQkFBYyxDQUFDRyxhQUFhLENBQUN5QixNQUFkLENBQXFCLFVBQUFDLElBQUk7QUFBQSxhQUFFQSxJQUFJLENBQUNuQyxJQUFMLEtBQVlBLElBQWQ7QUFBQSxLQUF6QixFQUE2QyxDQUE3QyxFQUFnRGtCLFNBQWpELENBQWQ7QUFDRCxHQTdCUSxFQTZCTixDQUFDaEIsSUFBRCxDQTdCTSxDQUFUO0FBOEJBSyxTQUFPLENBQUMwQixHQUFSLENBQVksTUFBWixFQUFtQjVCLFlBQW5CO0FBQ0FFLFNBQU8sQ0FBQzBCLEdBQVIsQ0FBWTVCLFlBQVksQ0FBQ2EsU0FBekI7QUFDQVgsU0FBTyxDQUFDMEIsR0FBUjtBQUVBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1k1QixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQkcsT0FEdEMsT0FDK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQvQyxFQUVHaEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJJLEtBQTFCLDJCQUFtRGpCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCSSxLQUE3RSxJQUF1RixFQUYxRixFQUU4RmpCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCSSxLQUExQixHQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWxDLEdBQThDLEVBRjVJLGNBR1dqQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQmEsb0JBQTFCLEdBQWlELFVBQWpELEdBQThELGNBSHpFLDRDQUc4SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSDlILHdCQUlxQjFCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCYyxnQkFBMUIsR0FBNkMsVUFBN0MsR0FBMEQsa0JBSi9FLHlCQUlxSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSnJILGFBS1M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxULEVBTUczQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQlcsTUFBMUIscUJBQThDeEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJXLE1BQXhFLElBQW1GLEVBTnRGLEVBTTBGeEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJXLE1BQTFCLEdBQW1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkMsR0FBK0MsRUFOekksRUFPR3hCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCSyxNQUExQixxQkFBOENsQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQkssTUFBeEUsSUFBbUYsRUFQdEYsRUFPMEZsQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQkssTUFBMUIsR0FBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuQyxHQUErQyxFQVB6SSxFQVFHbEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJNLE9BQTFCLHNCQUFnRG5CLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCTSxPQUExRSxJQUFzRixFQVJ6RixFQVE2Rm5CLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCTSxPQUExQixHQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBDLEdBQWdELEVBUjdJLEVBU0duQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQk8sU0FBMUIsd0JBQW9EcEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJPLFNBQTlFLElBQTRGLEVBVC9GLEVBU21HcEIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJPLFNBQTFCLEdBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEMsR0FBa0QsRUFUckosRUFVR3BCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCUSxRQUExQix1QkFBa0RyQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQlEsUUFBNUUsSUFBeUYsRUFWNUYsRUFVZ0dyQixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQlEsUUFBMUIsR0FBcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyQyxHQUFpRCxFQVZqSixFQVdHckIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJTLE1BQTFCLHFCQUE4Q3RCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCUyxNQUF4RSxJQUFtRixFQVh0RixFQVcwRnRCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCUyxNQUExQixHQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5DLEdBQStDLEVBWHpJLEVBWUd0QixZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQlUsUUFBMUIsdUJBQWtEdkIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJVLFFBQTVFLElBQXlGLEVBWjVGLEVBWWdHdkIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJVLFFBQTFCLEdBQXFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckMsR0FBaUQsRUFaakosRUFhR3ZCLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCRSxlQUExQixxQ0FBdUVmLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCRSxlQUFqRyxJQUFxSCxFQWJ4SCxFQWE0SGYsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJFLGVBQTFCLEdBQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBNUMsR0FBd0QsRUFicEwsRUFjR2YsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJDLFlBQTFCLGFBQW1ELEVBZHRELEVBYzBEZCxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQkMsWUFBMUIsR0FBeUM7QUFBRyxRQUFJLEVBQUlkLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCQyxZQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9EZCxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxTQUFoQixDQUEwQkMsWUFBOUUsQ0FBekMsR0FBMkksRUFkck0sRUFjeU1kLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JhLFNBQWhCLENBQTBCQyxZQUExQixHQUF5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXpDLEdBQXFELEVBZDlQLEVBZUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyw2QkFBWDtBQUF5QyxNQUFFLGlDQUEwQmQsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJMLFNBQXBELG1CQUFzRVIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQmEsU0FBaEIsQ0FBMEJMLFNBQWhHLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLENBZkYsQ0FGRyxDQUFQO0FBd0JELENBcEVEOztHQUFNbEIsSTtVQUNXRSxxRCxFQUVTSSwyQzs7O0tBSHBCTixJO0FBc0VTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvdmlkLXRlc3Rpbmctc2l0ZXMvW3Rlc3Rpbmctc2l0ZV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbmNvbnN0IFBvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgcGlkLCBuYW1lIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcbiAgY29uc3QgW3Rlc3Rpbmdfc2l0ZSwgc2V0VGVzdGluZ1NpdGVdID0gdXNlU3RhdGUoXCJcIik7ICBcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGRhdGEgZnJvbSBBUEkgZm9yIC9hcGkvdGVzdGluZy1zaXRlczogJywgZXJyb3IpO1xuICB9ICAgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKHNpdGUpID0+ICh7XG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXG4gICAgICBvdXRwdXRfa2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxuICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsICAgXG4gICAgICBzaXRlX2luZm86IHtcbiAgICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsIFxuICAgICAgICBwcm92aWRlcl91cmw6IHNpdGUucHJvdmlkZXJfdXJsLFxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxuICAgICAgICBhZGRyZXNzOiBzaXRlLmFkZHJlc3MsXG4gICAgICAgIHBob25lOiBzaXRlLnBob25lLFxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxuICAgICAgICB0dWVzZGF5OiBzaXRlLnR1ZXNkYXksXG4gICAgICAgIHdlZG5lc2RheTogc2l0ZS53ZWRuZXNkYXksXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxuICAgICAgICBmcmlkYXk6IHNpdGUuZnJpZGF5LFxuICAgICAgICBzYXR1cmRheTogc2l0ZS5zYXR1cmRheSxcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcbiAgICAgICAgc2NyZWVuaW5nX3JlcXVpcmVkOiBzaXRlLnNjcmVlbmluZ19yZXF1aXJlZCxcbiAgICAgICAgYXBwb2ludG1lbnRfcmVxdWlyZWQ6IHNpdGUuYXBwb2ludG1lbnRfcmVxdWlyZWQsXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXG4gICAgICB9LCAgICAgICAgICAgICAgICAgICBcbiAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXG4gICAgICAgIGxuZzogc2l0ZS5jb29yZGluYXRlcy5sbmcsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgICBjb25zb2xlLmxvZyhcImZvcm1hdHRlZERhdGFcIixmb3JtYXR0ZWREYXRhKTtcbiAgICBzZXRUZXN0aW5nU2l0ZShmb3JtYXR0ZWREYXRhLmZpbHRlcihpdGVtPT5pdGVtLm5hbWU9PT1uYW1lKVswXS5zaXRlX2luZm8pO1xuICB9LCBbZGF0YV0pO1xuICBjb25zb2xlLmxvZyhcImRhdGFcIix0ZXN0aW5nX3NpdGUpXG4gIGNvbnNvbGUubG9nKHRlc3Rpbmdfc2l0ZS5zaXRlX2luZm8pXG4gIGNvbnNvbGUubG9nKClcblxuICByZXR1cm4gPGRpdj5cbiAgICB7XG4gICAgICA8cD4gICAgICAgICAgICAgICAgXG4gICAgICAgIEFkZHJlc3M6IHt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLmFkZHJlc3N9IDxicj48L2JyPiBcbiAgICAgICAge3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8ucGhvbmUgPyBgUGhvbmUgTnVtYmVyOiAke3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8ucGhvbmV9YCA6ICcnfXt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLnBob25lID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICAgIFlvdSBhcmUge3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uYXBwb2ludG1lbnRfcmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJ25vdCByZXF1aXJlZCd9IHRvIGhhdmUgYW4gYXBwb2ludG1lbnQgdG8gZ2V0IHRlc3RlZC48YnI+PC9icj5cbiAgICAgICAgVGhpcyB0ZXN0aW5nIHNpdGUge3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uYW50aWJvZHlfdGVzdGluZyA/ICdwcm92aWRlcycgOiAnZG9lcyBub3QgcHJvdmlkZSd9IGFudGlib2R5IHRlc3RpbmcuIDxicj48L2JyPiAgICAgICAgXG4gICAgICAgIEhvdXJzOiA8YnI+PC9icj5cbiAgICAgICAge3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uc3VuZGF5ID8gYFN1bmRheTogJHt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLnN1bmRheX1gIDogJyd9e3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uc3VuZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICAgIHt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLm1vbmRheSA/IGBNb25kYXk6ICR7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5tb25kYXl9YCA6ICcnfXt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLm1vbmRheSA/IDxicj48L2JyPiA6ICcnfVxuICAgICAgICB7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby50dWVzZGF5ID8gYFR1ZXNkYXk6ICR7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby50dWVzZGF5fWAgOiAnJ317dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby50dWVzZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICAgIHt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLndlZG5lc2RheSA/IGBXZWRuZXNkYXk6ICR7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby53ZWRuZXNkYXl9YCA6ICcnfXt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLndlZG5lc2RheSA/IDxicj48L2JyPiA6ICcnfVxuICAgICAgICB7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby50aHVyc2RheSA/IGBUaHVyc2RheTogJHt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLnRodXJzZGF5fWAgOiAnJ317dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby50aHVyc2RheSA/IDxicj48L2JyPiA6ICcnfVxuICAgICAgICB7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5mcmlkYXkgPyBgRnJpZGF5OiAke3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uZnJpZGF5fWAgOiAnJ317dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5mcmlkYXkgPyA8YnI+PC9icj4gOiAnJ31cbiAgICAgICAge3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uc2F0dXJkYXkgPyBgU2F0dXJkYXk6ICR7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5zYXR1cmRheX1gIDogJyd9e3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uc2F0dXJkYXkgPyA8YnI+PC9icj4gOiAnJ31cbiAgICAgICAge3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8uYWRkaXRpb25hbF9pbmZvID8gYEFkZGl0aW9uYWwgSW5mb3JtYXRpb246ICR7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5hZGRpdGlvbmFsX2luZm99YCA6ICcnfXt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLmFkZGl0aW9uYWxfaW5mbyA/IDxicj48L2JyPiA6ICcnfSAgICAgICAgIFxuICAgICAgICB7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5wcm92aWRlcl91cmwgPyBgVVJMOiBgIDogJyd9e3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8ucHJvdmlkZXJfdXJsID8gPGEgaHJlZiA9IHt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLnByb3ZpZGVyX3VybH0+e3Rlc3Rpbmdfc2l0ZVswXS5zaXRlX2luZm8ucHJvdmlkZXJfdXJsfTwvYT4gOiAnJ317dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5wcm92aWRlcl91cmwgPyA8YnI+PC9icj4gOiAnJ30gXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY292aWQtdGVzdGluZy1zaXRlcy9bc2l0ZV1cIiBhcz17YC9jb3ZpZC10ZXN0aW5nLXNpdGVzLyR7dGVzdGluZ19zaXRlWzBdLnNpdGVfaW5mby5zaXRlX25hbWV9P25hbWU9JHt0ZXN0aW5nX3NpdGVbMF0uc2l0ZV9pbmZvLnNpdGVfbmFtZX1gfT5cbiAgICAgICAgICAgIDxhPkxpbmsgdG8gdGhpcyBJbmZvPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3A+XG4gICAgICBcbiAgICB9XG4gIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/[testing-site].jsx\n");

/***/ })

})