webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 32\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 34\n      }\n    }), value.phone ? \"Phone Number: \".concat(value.phone) : '', value.phone ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 75\n      }\n    }) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 104\n      }\n    }), \"Hours: \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 16\n      }\n    }), value.sunday ? \"Sunday: \".concat(value.sunday) : '', value.sunday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 72\n      }\n    }) : '', value.monday ? \"Monday: \".concat(value.monday) : '', value.monday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 72\n      }\n    }) : '', value.tuesday ? \"Tuesday: \".concat(value.tuesday) : '', value.tuesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 76\n      }\n    }) : '', value.wednesday ? \"Wednesday: \".concat(value.wednesday) : '', value.wednesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 84\n      }\n    }) : '', value.thursday ? \"Thursday: \".concat(value.thursday) : '', value.thursday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 80\n      }\n    }) : '', value.friday ? \"Friday: \".concat(value.friday) : '', value.friday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 72\n      }\n    }) : '', value.saturday ? \"Saturday: \".concat(value.saturday) : '', value.saturday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 80\n      }\n    }) : '', value.site_name ? \"Additional Information:: \".concat(value.additional_info) : '', value.additional_info ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 110\n      }\n    }) : '', \"URL: \", __jsx(\"a\", {\n      href: value.provider_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 14\n      }\n    }, value.provider_url), \" \");\n  } // additional_info: \"Urgent Care Clinic\"\n  // address: \"633 Driggs Ave., Brooklyn, NY 11211\"\n  // antibody_testing: true\n  // appointment_required: false\n  // coordinates: {lat: 40.7150681, lng: -73.9583843}\n  // friday: \"8AM-8PM\"\n  // monday: \"8AM-8PM\"\n  // phone: \"(347) 987-4144\"\n  // provider_url: \"http://www.umdcare.com\"\n  // saturday: \"8AM-7PM\"\n  // screening_required: true\n  // site_name: \"UMD Urgent Care - Williamsburg\"\n  // sunday: \"9AM-6PM\"\n  // thursday: \"8AM-8PM\"\n  // tuesday: \"8AM-8PM\"\n  // wednesday: \"8AM-8PM\"\n  ));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4IiwiYWRkcmVzcyIsInBob25lIiwiYXBwb2ludG1lbnRfcmVxdWlyZWQiLCJhbnRpYm9keV90ZXN0aW5nIiwic3VuZGF5IiwibW9uZGF5IiwidHVlc2RheSIsIndlZG5lc2RheSIsInRodXJzZGF5IiwiZnJpZGF5Iiwic2F0dXJkYXkiLCJzaXRlX25hbWUiLCJhZGRpdGlvbmFsX2luZm8iLCJwcm92aWRlcl91cmwiLCJDb3ZpZFRlc3RpbmdTaXRlc1BhZ2UiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJNYXBNYXJrZXJzQ29udGV4dCIsInNldE1hcE1hcmtlcnMiLCJzZXRTdGF0ZSIsInVzZVN3ciIsImVycm9yIiwiY29uc29sZSIsInVzZUVmZmVjdCIsImZvcm1hdHRlZERhdGEiLCJzaXRlIiwia2V5IiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJsbmciLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyIsInNjcmVlbmluZ19yZXF1aXJlZCIsImxvZyIsImdldExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFdBQWdCO0FBQUcsU0FBRyxFQUFFQSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRWJELEtBQUssQ0FBQ0UsT0FGTyxPQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUd0QkYsS0FBSyxDQUFDRyxLQUFOLDJCQUErQkgsS0FBSyxDQUFDRyxLQUFyQyxJQUErQyxFQUh6QixFQUc2QkgsS0FBSyxDQUFDRyxLQUFOLEdBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFkLEdBQTBCLEVBSHZELGNBSWRILEtBQUssQ0FBQ0ksb0JBQU4sR0FBNkIsVUFBN0IsR0FBMEMsY0FKNUIsNENBSWlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKakYsd0JBS0pKLEtBQUssQ0FBQ0ssZ0JBQU4sR0FBeUIsVUFBekIsR0FBc0Msa0JBTGxDLHlCQUt3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTHhFLGFBTWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOZ0IsRUFPdEJMLEtBQUssQ0FBQ00sTUFBTixxQkFBMEJOLEtBQUssQ0FBQ00sTUFBaEMsSUFBMkMsRUFQckIsRUFPeUJOLEtBQUssQ0FBQ00sTUFBTixHQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBZixHQUEyQixFQVBwRCxFQVF0Qk4sS0FBSyxDQUFDTyxNQUFOLHFCQUEwQlAsS0FBSyxDQUFDTyxNQUFoQyxJQUEyQyxFQVJyQixFQVF5QlAsS0FBSyxDQUFDTyxNQUFOLEdBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFmLEdBQTJCLEVBUnBELEVBU3RCUCxLQUFLLENBQUNRLE9BQU4sc0JBQTRCUixLQUFLLENBQUNRLE9BQWxDLElBQThDLEVBVHhCLEVBUzRCUixLQUFLLENBQUNRLE9BQU4sR0FBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoQixHQUE0QixFQVR4RCxFQVV0QlIsS0FBSyxDQUFDUyxTQUFOLHdCQUFnQ1QsS0FBSyxDQUFDUyxTQUF0QyxJQUFvRCxFQVY5QixFQVVrQ1QsS0FBSyxDQUFDUyxTQUFOLEdBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbEIsR0FBOEIsRUFWaEUsRUFXdEJULEtBQUssQ0FBQ1UsUUFBTix1QkFBOEJWLEtBQUssQ0FBQ1UsUUFBcEMsSUFBaUQsRUFYM0IsRUFXK0JWLEtBQUssQ0FBQ1UsUUFBTixHQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpCLEdBQTZCLEVBWDVELEVBWXRCVixLQUFLLENBQUNXLE1BQU4scUJBQTBCWCxLQUFLLENBQUNXLE1BQWhDLElBQTJDLEVBWnJCLEVBWXlCWCxLQUFLLENBQUNXLE1BQU4sR0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWYsR0FBMkIsRUFacEQsRUFhdEJYLEtBQUssQ0FBQ1ksUUFBTix1QkFBOEJaLEtBQUssQ0FBQ1ksUUFBcEMsSUFBaUQsRUFiM0IsRUFhK0JaLEtBQUssQ0FBQ1ksUUFBTixHQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpCLEdBQTZCLEVBYjVELEVBY3RCWixLQUFLLENBQUNhLFNBQU4sc0NBQThDYixLQUFLLENBQUNjLGVBQXBELElBQXdFLEVBZGxELEVBY3NEZCxLQUFLLENBQUNjLGVBQU4sR0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF4QixHQUFvQyxFQWQxRixXQWVsQjtBQUFHLFVBQUksRUFBSWQsS0FBSyxDQUFDZSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDZixLQUFLLENBQUNlLFlBQXRDLENBZmtCLE1BQWhCO0FBQUEsR0FBVCxDQWdCRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CRixHQUZKLENBRG1CO0FBQUEsQ0FBckI7O0tBQU1sQixZOztBQXlDTixTQUFTbUIscUJBQVQsR0FBaUM7QUFBQTs7QUFBQSwwQkFDS0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsOEVBQWpCLENBREw7QUFBQSxNQUNiQyxhQURhLHFCQUN2QkMsUUFEdUI7O0FBQUEsZ0JBRVBDLG1EQUFNLENBQUMsb0JBQUQsRUFBdUI5QixPQUF2QixDQUZDO0FBQUEsTUFFdkJNLElBRnVCLFdBRXZCQSxJQUZ1QjtBQUFBLE1BRWpCeUIsS0FGaUIsV0FFakJBLEtBRmlCOztBQUcvQixNQUFJQSxLQUFKLEVBQVc7QUFDVEMsV0FBTyxDQUFDRCxLQUFSLENBQWMsc0RBQWQsRUFBc0VBLEtBQXRFO0FBQ0Q7O0FBRURFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGFBQWEsR0FBRyxDQUFDNUIsSUFBSSxJQUFJLEVBQVQsRUFBYUMsR0FBYixDQUFpQixVQUFDNEIsSUFBRDtBQUFBLGFBQVc7QUFDaERDLFdBQUcsWUFBS0QsSUFBSSxDQUFDZCxTQUFWLGNBQXVCYyxJQUFJLENBQUNFLFdBQUwsQ0FBaUJDLEdBQXhDLGNBQStDSCxJQUFJLENBQUNFLFdBQUwsQ0FBaUJFLEdBQWhFLENBRDZDO0FBRWhEQyxrQkFBVSxZQUFLTCxJQUFJLENBQUNkLFNBQVYsY0FBdUJjLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkMsR0FBeEMsY0FBK0NILElBQUksQ0FBQ0UsV0FBTCxDQUFpQkUsR0FBaEUsQ0FGc0M7QUFHaERFLFlBQUksRUFBRU4sSUFBSSxDQUFDZCxTQUhxQztBQUloRHFCLGlCQUFTLEVBQUU7QUFDVEQsY0FBSSxFQUFFTixJQUFJLENBQUNkLFNBREY7QUFFVEUsc0JBQVksRUFBRVksSUFBSSxDQUFDWixZQUZWO0FBR1RELHlCQUFlLEVBQUVhLElBQUksQ0FBQ2IsZUFIYjtBQUlUWixpQkFBTyxFQUFFeUIsSUFBSSxDQUFDekIsT0FKTDtBQUtUQyxlQUFLLEVBQUV3QixJQUFJLENBQUN4QixLQUxIO0FBTVRJLGdCQUFNLEVBQUVvQixJQUFJLENBQUNwQixNQU5KO0FBT1RDLGlCQUFPLEVBQUVtQixJQUFJLENBQUNuQixPQVBMO0FBUVRDLG1CQUFTLEVBQUVrQixJQUFJLENBQUNsQixTQVJQO0FBU1RDLGtCQUFRLEVBQUVpQixJQUFJLENBQUNqQixRQVROO0FBVVRDLGdCQUFNLEVBQUVnQixJQUFJLENBQUNoQixNQVZKO0FBV1RDLGtCQUFRLEVBQUVlLElBQUksQ0FBQ2YsUUFYTjtBQVlUTixnQkFBTSxFQUFFcUIsSUFBSSxDQUFDckIsTUFaSjtBQWFUNkIsNEJBQWtCLEVBQUVSLElBQUksQ0FBQ1Esa0JBYmhCO0FBY1QvQiw4QkFBb0IsRUFBRXVCLElBQUksQ0FBQ3ZCLG9CQWRsQjtBQWVUQywwQkFBZ0IsRUFBRXNCLElBQUksQ0FBQ3RCO0FBZmQsU0FKcUM7QUFxQmhEd0IsbUJBQVcsRUFBRTtBQUNYQyxhQUFHLEVBQUVILElBQUksQ0FBQ0UsV0FBTCxDQUFpQkMsR0FEWDtBQUVYQyxhQUFHLEVBQUVKLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkU7QUFGWDtBQXJCbUMsT0FBWDtBQUFBLEtBQWpCLENBQXRCLENBRGMsQ0EyQmQ7O0FBQ0FYLGlCQUFhLENBQUNNLGFBQUQsQ0FBYjtBQUVBLFdBQU8sWUFBTTtBQUNYTixtQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQWpDUSxFQWlDTixDQUFDdEIsSUFBRCxFQUFPc0IsYUFBUCxDQWpDTSxDQUFUO0FBbUNBSSxTQUFPLENBQUNZLEdBQVIsQ0FBWSxNQUFaLEVBQW1CdEMsSUFBbkI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3lCLEtBQUssSUFBSSx1QkFEWixFQUVHLENBQUN6QixJQUFELElBQVMsQ0FBQ3lCLEtBQVYsSUFBbUIsWUFGdEIsRUFJRyxDQUFDQSxLQUFELElBQVV6QixJQUFWLElBQWtCLE1BQUMsWUFBRDtBQUFjLFFBQUksRUFBSUEsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpyQixDQURGO0FBU0Q7O0dBckRRa0IscUI7VUFFaUJNLDJDOzs7TUFGakJOLHFCO0FBdURUQSxxQkFBcUIsQ0FBQ3FCLFNBQXRCLEdBQWtDQSw4REFBbEM7QUFFZXJCLG9GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY292aWQtdGVzdGluZy1zaXRlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL01hcExheW91dCc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cclxuY29uc3QgVGVzdGluZ1NpdGVzID0gKHsgZGF0YSB9KSA9PiAoICBcclxuICA8ZGl2PlxyXG4gICAge1xyXG4gICAgICBkYXRhLm1hcCgodmFsdWUsIGlkeCkgPT4gPHAga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgQWRkcmVzczoge3ZhbHVlLmFkZHJlc3N9IDxicj48L2JyPiBcclxuICAgICAgICB7dmFsdWUucGhvbmUgPyBgUGhvbmUgTnVtYmVyOiAke3ZhbHVlLnBob25lfWAgOiAnJ317dmFsdWUucGhvbmUgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICBZb3UgYXJlIHt2YWx1ZS5hcHBvaW50bWVudF9yZXF1aXJlZCA/ICdyZXF1aXJlZCcgOiAnbm90IHJlcXVpcmVkJ30gdG8gaGF2ZSBhbiBhcHBvaW50bWVudCB0byBnZXQgdGVzdGVkLjxicj48L2JyPlxyXG4gICAgICAgIFRoaXMgdGVzdGluZyBzaXRlIHt2YWx1ZS5hbnRpYm9keV90ZXN0aW5nID8gJ3Byb3ZpZGVzJyA6ICdkb2VzIG5vdCBwcm92aWRlJ30gYW50aWJvZHkgdGVzdGluZy4gPGJyPjwvYnI+ICAgICAgICBcclxuICAgICAgICBIb3VyczogPGJyPjwvYnI+XHJcbiAgICAgICAge3ZhbHVlLnN1bmRheSA/IGBTdW5kYXk6ICR7dmFsdWUuc3VuZGF5fWAgOiAnJ317dmFsdWUuc3VuZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLm1vbmRheSA/IGBNb25kYXk6ICR7dmFsdWUubW9uZGF5fWAgOiAnJ317dmFsdWUubW9uZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLnR1ZXNkYXkgPyBgVHVlc2RheTogJHt2YWx1ZS50dWVzZGF5fWAgOiAnJ317dmFsdWUudHVlc2RheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS53ZWRuZXNkYXkgPyBgV2VkbmVzZGF5OiAke3ZhbHVlLndlZG5lc2RheX1gIDogJyd9e3ZhbHVlLndlZG5lc2RheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS50aHVyc2RheSA/IGBUaHVyc2RheTogJHt2YWx1ZS50aHVyc2RheX1gIDogJyd9e3ZhbHVlLnRodXJzZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLmZyaWRheSA/IGBGcmlkYXk6ICR7dmFsdWUuZnJpZGF5fWAgOiAnJ317dmFsdWUuZnJpZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLnNhdHVyZGF5ID8gYFNhdHVyZGF5OiAke3ZhbHVlLnNhdHVyZGF5fWAgOiAnJ317dmFsdWUuc2F0dXJkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUuc2l0ZV9uYW1lID8gYEFkZGl0aW9uYWwgSW5mb3JtYXRpb246OiAke3ZhbHVlLmFkZGl0aW9uYWxfaW5mb31gIDogJyd9e3ZhbHVlLmFkZGl0aW9uYWxfaW5mbyA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIFVSTDogPGEgaHJlZiA9IHt2YWx1ZS5wcm92aWRlcl91cmx9Pnt2YWx1ZS5wcm92aWRlcl91cmx9PC9hPiA8L3A+XHJcbiAgICAgICAgLy8gYWRkaXRpb25hbF9pbmZvOiBcIlVyZ2VudCBDYXJlIENsaW5pY1wiXHJcbiAgICAgICAgLy8gYWRkcmVzczogXCI2MzMgRHJpZ2dzIEF2ZS4sIEJyb29rbHluLCBOWSAxMTIxMVwiXHJcbiAgICAgICAgLy8gYW50aWJvZHlfdGVzdGluZzogdHJ1ZVxyXG4gICAgICAgIC8vIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBmYWxzZVxyXG4gICAgICAgIC8vIGNvb3JkaW5hdGVzOiB7bGF0OiA0MC43MTUwNjgxLCBsbmc6IC03My45NTgzODQzfVxyXG4gICAgICAgIC8vIGZyaWRheTogXCI4QU0tOFBNXCJcclxuICAgICAgICAvLyBtb25kYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgLy8gcGhvbmU6IFwiKDM0NykgOTg3LTQxNDRcIlxyXG4gICAgICAgIC8vIHByb3ZpZGVyX3VybDogXCJodHRwOi8vd3d3LnVtZGNhcmUuY29tXCJcclxuICAgICAgICAvLyBzYXR1cmRheTogXCI4QU0tN1BNXCJcclxuICAgICAgICAvLyBzY3JlZW5pbmdfcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAvLyBzaXRlX25hbWU6IFwiVU1EIFVyZ2VudCBDYXJlIC0gV2lsbGlhbXNidXJnXCJcclxuICAgICAgICAvLyBzdW5kYXk6IFwiOUFNLTZQTVwiXHJcbiAgICAgICAgLy8gdGh1cnNkYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgLy8gdHVlc2RheTogXCI4QU0tOFBNXCJcclxuICAgICAgICAvLyB3ZWRuZXNkYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgKVxyXG4gICAgICBcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIENvdmlkVGVzdGluZ1NpdGVzUGFnZSgpIHtcclxuICBjb25zdCB7IHNldFN0YXRlOiBzZXRNYXBNYXJrZXJzIH0gPSBSZWFjdC51c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTsgICAgXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YSBmcm9tIEFQSSBmb3IgL2FwaS90ZXN0aW5nLXNpdGVzOiAnLCBlcnJvcik7XHJcbiAgfSAgICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xyXG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG91dHB1dF9rZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCAgIFxyXG4gICAgICBzaXRlX2luZm86IHtcclxuICAgICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgXHJcbiAgICAgICAgcHJvdmlkZXJfdXJsOiBzaXRlLnByb3ZpZGVyX3VybCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxyXG4gICAgICAgIGFkZHJlc3M6IHNpdGUuYWRkcmVzcyxcclxuICAgICAgICBwaG9uZTogc2l0ZS5waG9uZSxcclxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxyXG4gICAgICAgIHR1ZXNkYXk6IHNpdGUudHVlc2RheSxcclxuICAgICAgICB3ZWRuZXNkYXk6IHNpdGUud2VkbmVzZGF5LFxyXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxyXG4gICAgICAgIGZyaWRheTogc2l0ZS5mcmlkYXksXHJcbiAgICAgICAgc2F0dXJkYXk6IHNpdGUuc2F0dXJkYXksXHJcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcclxuICAgICAgICBzY3JlZW5pbmdfcmVxdWlyZWQ6IHNpdGUuc2NyZWVuaW5nX3JlcXVpcmVkLFxyXG4gICAgICAgIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBzaXRlLmFwcG9pbnRtZW50X3JlcXVpcmVkLFxyXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXHJcbiAgICAgIH0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBjb29yZGluYXRlczoge1xyXG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBzaXRlLmNvb3JkaW5hdGVzLmxuZyxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJmb3JtYXR0ZWREYXRhXCIsZm9ybWF0dGVkRGF0YSk7XHJcbiAgICBzZXRNYXBNYXJrZXJzKGZvcm1hdHRlZERhdGEpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldE1hcE1hcmtlcnMoW10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBzZXRNYXBNYXJrZXJzXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxyXG4gICAgICB7ZXJyb3IgJiYgJ0Vycm9yIGxvYWRpbmcgY29udGVudCd9XHJcbiAgICAgIHshZGF0YSAmJiAhZXJyb3IgJiYgJ0xvYWRpbmcuLi4nfVxyXG4gICAgICB7LyogeyFlcnJvciAmJiBkYXRhICYmIFwieW8geW9cIn0gKi99XHJcbiAgICAgIHshZXJyb3IgJiYgZGF0YSAmJiA8VGVzdGluZ1NpdGVzIGRhdGEgPSB7ZGF0YX0vPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59XHJcblxyXG5Db3ZpZFRlc3RpbmdTaXRlc1BhZ2UuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ292aWRUZXN0aW5nU2l0ZXNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})