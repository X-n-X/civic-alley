webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 32\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 34\n      }\n    }), value.name ? \"Name: \".concat(value.name).concat(__jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 45\n      }\n    })) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 104\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 33\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 33\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 33\n      }\n    }), \"Name: \", value.site_name, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 33\n      }\n    }), \"Additional Information: \", value.additional_info, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 57\n      }\n    }), \"URL: \", value.provider_url);\n  } // additional_info: \"Urgent Care Clinic\"\n  // address: \"633 Driggs Ave., Brooklyn, NY 11211\"\n  // antibody_testing: true\n  // appointment_required: false\n  // coordinates: {lat: 40.7150681, lng: -73.9583843}\n  // friday: \"8AM-8PM\"\n  // monday: \"8AM-8PM\"\n  // phone: \"(347) 987-4144\"\n  // provider_url: \"http://www.umdcare.com\"\n  // saturday: \"8AM-7PM\"\n  // screening_required: true\n  // site_name: \"UMD Urgent Care - Williamsburg\"\n  // sunday: \"9AM-6PM\"\n  // thursday: \"8AM-8PM\"\n  // tuesday: \"8AM-8PM\"\n  // wednesday: \"8AM-8PM\"\n  ));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4IiwiYWRkcmVzcyIsIm5hbWUiLCJhcHBvaW50bWVudF9yZXF1aXJlZCIsImFudGlib2R5X3Rlc3RpbmciLCJzaXRlX25hbWUiLCJhZGRpdGlvbmFsX2luZm8iLCJwcm92aWRlcl91cmwiLCJDb3ZpZFRlc3RpbmdTaXRlc1BhZ2UiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJNYXBNYXJrZXJzQ29udGV4dCIsInNldE1hcE1hcmtlcnMiLCJzZXRTdGF0ZSIsInVzZVN3ciIsImVycm9yIiwiY29uc29sZSIsInVzZUVmZmVjdCIsImZvcm1hdHRlZERhdGEiLCJzaXRlIiwia2V5IiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJsbmciLCJvdXRwdXRfa2V5Iiwic2l0ZV9pbmZvIiwicGhvbmUiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImxvZyIsImdldExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFdBQWdCO0FBQUcsU0FBRyxFQUFFQSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2JELEtBQUssQ0FBQ0UsT0FETyxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUV0QkYsS0FBSyxDQUFDRyxJQUFOLG1CQUFzQkgsS0FBSyxDQUFDRyxJQUE1QixTQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQW5DLElBQWlELEVBRjNCLGNBR2RILEtBQUssQ0FBQ0ksb0JBQU4sR0FBNkIsVUFBN0IsR0FBMEMsY0FINUIsNENBR2lGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIakYsd0JBSUpKLEtBQUssQ0FBQ0ssZ0JBQU4sR0FBeUIsVUFBekIsR0FBc0Msa0JBSmxDLHlCQUl3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSnhFLFlBS2hCTCxLQUFLLENBQUNNLFNBTFUsT0FLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEQsWUFNaEJOLEtBQUssQ0FBQ00sU0FOVSxPQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORCxZQU9oQk4sS0FBSyxDQUFDTSxTQVBVLE9BT0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBELFlBUWhCTixLQUFLLENBQUNNLFNBUlUsT0FRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkQsOEJBU0VOLEtBQUssQ0FBQ08sZUFUUixPQVN5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVHpCLFdBVWpCUCxLQUFLLENBQUNRLFlBVlcsQ0FBaEI7QUFBQSxHQUFULENBV0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkYsR0FGSixDQURtQjtBQUFBLENBQXJCOztLQUFNWCxZOztBQW9DTixTQUFTWSxxQkFBVCxHQUFpQztBQUFBOztBQUFBLDBCQUNLQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyw4RUFBakIsQ0FETDtBQUFBLE1BQ2JDLGFBRGEscUJBQ3ZCQyxRQUR1Qjs7QUFBQSxnQkFFUEMsbURBQU0sQ0FBQyxvQkFBRCxFQUF1QnZCLE9BQXZCLENBRkM7QUFBQSxNQUV2Qk0sSUFGdUIsV0FFdkJBLElBRnVCO0FBQUEsTUFFakJrQixLQUZpQixXQUVqQkEsS0FGaUI7O0FBRy9CLE1BQUlBLEtBQUosRUFBVztBQUNUQyxXQUFPLENBQUNELEtBQVIsQ0FBYyxzREFBZCxFQUFzRUEsS0FBdEU7QUFDRDs7QUFFREUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsYUFBYSxHQUFHLENBQUNyQixJQUFJLElBQUksRUFBVCxFQUFhQyxHQUFiLENBQWlCLFVBQUNxQixJQUFEO0FBQUEsYUFBVztBQUNoREMsV0FBRyxZQUFLRCxJQUFJLENBQUNkLFNBQVYsY0FBdUJjLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkMsR0FBeEMsY0FBK0NILElBQUksQ0FBQ0UsV0FBTCxDQUFpQkUsR0FBaEUsQ0FENkM7QUFFaERDLGtCQUFVLFlBQUtMLElBQUksQ0FBQ2QsU0FBVixjQUF1QmMsSUFBSSxDQUFDRSxXQUFMLENBQWlCQyxHQUF4QyxjQUErQ0gsSUFBSSxDQUFDRSxXQUFMLENBQWlCRSxHQUFoRSxDQUZzQztBQUdoRHJCLFlBQUksRUFBRWlCLElBQUksQ0FBQ2QsU0FIcUM7QUFJaERvQixpQkFBUyxFQUFFO0FBQ1R2QixjQUFJLEVBQUVpQixJQUFJLENBQUNkLFNBREY7QUFFVEUsc0JBQVksRUFBRVksSUFBSSxDQUFDWixZQUZWO0FBR1RELHlCQUFlLEVBQUVhLElBQUksQ0FBQ2IsZUFIYjtBQUlUTCxpQkFBTyxFQUFFa0IsSUFBSSxDQUFDbEIsT0FKTDtBQUtUeUIsZUFBSyxFQUFFUCxJQUFJLENBQUNPLEtBTEg7QUFNVEMsZ0JBQU0sRUFBRVIsSUFBSSxDQUFDUSxNQU5KO0FBT1RDLGlCQUFPLEVBQUVULElBQUksQ0FBQ1MsT0FQTDtBQVFUQyxtQkFBUyxFQUFFVixJQUFJLENBQUNVLFNBUlA7QUFTVEMsa0JBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQVROO0FBVVRDLGdCQUFNLEVBQUVaLElBQUksQ0FBQ1ksTUFWSjtBQVdUQyxrQkFBUSxFQUFFYixJQUFJLENBQUNhLFFBWE47QUFZVEMsZ0JBQU0sRUFBRWQsSUFBSSxDQUFDYyxNQVpKO0FBYVRDLDRCQUFrQixFQUFFZixJQUFJLENBQUNlLGtCQWJoQjtBQWNUL0IsOEJBQW9CLEVBQUVnQixJQUFJLENBQUNoQixvQkFkbEI7QUFlVEMsMEJBQWdCLEVBQUVlLElBQUksQ0FBQ2Y7QUFmZCxTQUpxQztBQXFCaERpQixtQkFBVyxFQUFFO0FBQ1hDLGFBQUcsRUFBRUgsSUFBSSxDQUFDRSxXQUFMLENBQWlCQyxHQURYO0FBRVhDLGFBQUcsRUFBRUosSUFBSSxDQUFDRSxXQUFMLENBQWlCRTtBQUZYO0FBckJtQyxPQUFYO0FBQUEsS0FBakIsQ0FBdEIsQ0FEYyxDQTJCZDs7QUFDQVgsaUJBQWEsQ0FBQ00sYUFBRCxDQUFiO0FBRUEsV0FBTyxZQUFNO0FBQ1hOLG1CQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBakNRLEVBaUNOLENBQUNmLElBQUQsRUFBT2UsYUFBUCxDQWpDTSxDQUFUO0FBbUNBSSxTQUFPLENBQUNtQixHQUFSLENBQVksTUFBWixFQUFtQnRDLElBQW5CO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0drQixLQUFLLElBQUksdUJBRFosRUFFRyxDQUFDbEIsSUFBRCxJQUFTLENBQUNrQixLQUFWLElBQW1CLFlBRnRCLEVBSUcsQ0FBQ0EsS0FBRCxJQUFVbEIsSUFBVixJQUFrQixNQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUlBLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKckIsQ0FERjtBQVNEOztHQXJEUVcscUI7VUFFaUJNLDJDOzs7TUFGakJOLHFCO0FBdURUQSxxQkFBcUIsQ0FBQzRCLFNBQXRCLEdBQWtDQSw4REFBbEM7QUFFZTVCLG9GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY292aWQtdGVzdGluZy1zaXRlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL01hcExheW91dCc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cclxuY29uc3QgVGVzdGluZ1NpdGVzID0gKHsgZGF0YSB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIHtcclxuICAgICAgZGF0YS5tYXAoKHZhbHVlLCBpZHgpID0+IDxwIGtleT17aWR4fT5cclxuICAgICAgICBBZGRyZXNzOiB7dmFsdWUuYWRkcmVzc30gPGJyPjwvYnI+IFxyXG4gICAgICAgIHt2YWx1ZS5uYW1lID8gYE5hbWU6ICR7dmFsdWUubmFtZX0kezxicj48L2JyPn1gIDogJyd9XHJcbiAgICAgICAgWW91IGFyZSB7dmFsdWUuYXBwb2ludG1lbnRfcmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJ25vdCByZXF1aXJlZCd9IHRvIGhhdmUgYW4gYXBwb2ludG1lbnQgdG8gZ2V0IHRlc3RlZC48YnI+PC9icj5cclxuICAgICAgICBUaGlzIHRlc3Rpbmcgc2l0ZSB7dmFsdWUuYW50aWJvZHlfdGVzdGluZyA/ICdwcm92aWRlcycgOiAnZG9lcyBub3QgcHJvdmlkZSd9IGFudGlib2R5IHRlc3RpbmcuIDxicj48L2JyPlxyXG4gICAgICAgIE5hbWU6IHt2YWx1ZS5zaXRlX25hbWV9IDxicj48L2JyPiBcclxuICAgICAgICBOYW1lOiB7dmFsdWUuc2l0ZV9uYW1lfSA8YnI+PC9icj4gXHJcbiAgICAgICAgTmFtZToge3ZhbHVlLnNpdGVfbmFtZX0gPGJyPjwvYnI+IFxyXG4gICAgICAgIE5hbWU6IHt2YWx1ZS5zaXRlX25hbWV9IDxicj48L2JyPiBcclxuICAgICAgICBBZGRpdGlvbmFsIEluZm9ybWF0aW9uOiB7dmFsdWUuYWRkaXRpb25hbF9pbmZvfSA8YnI+PC9icj4gXHJcbiAgICAgICAgVVJMOiB7dmFsdWUucHJvdmlkZXJfdXJsfTwvcD5cclxuICAgICAgICAvLyBhZGRpdGlvbmFsX2luZm86IFwiVXJnZW50IENhcmUgQ2xpbmljXCJcclxuICAgICAgICAvLyBhZGRyZXNzOiBcIjYzMyBEcmlnZ3MgQXZlLiwgQnJvb2tseW4sIE5ZIDExMjExXCJcclxuICAgICAgICAvLyBhbnRpYm9keV90ZXN0aW5nOiB0cnVlXHJcbiAgICAgICAgLy8gYXBwb2ludG1lbnRfcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgICAgLy8gY29vcmRpbmF0ZXM6IHtsYXQ6IDQwLjcxNTA2ODEsIGxuZzogLTczLjk1ODM4NDN9XHJcbiAgICAgICAgLy8gZnJpZGF5OiBcIjhBTS04UE1cIlxyXG4gICAgICAgIC8vIG1vbmRheTogXCI4QU0tOFBNXCJcclxuICAgICAgICAvLyBwaG9uZTogXCIoMzQ3KSA5ODctNDE0NFwiXHJcbiAgICAgICAgLy8gcHJvdmlkZXJfdXJsOiBcImh0dHA6Ly93d3cudW1kY2FyZS5jb21cIlxyXG4gICAgICAgIC8vIHNhdHVyZGF5OiBcIjhBTS03UE1cIlxyXG4gICAgICAgIC8vIHNjcmVlbmluZ19yZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIC8vIHNpdGVfbmFtZTogXCJVTUQgVXJnZW50IENhcmUgLSBXaWxsaWFtc2J1cmdcIlxyXG4gICAgICAgIC8vIHN1bmRheTogXCI5QU0tNlBNXCJcclxuICAgICAgICAvLyB0aHVyc2RheTogXCI4QU0tOFBNXCJcclxuICAgICAgICAvLyB0dWVzZGF5OiBcIjhBTS04UE1cIlxyXG4gICAgICAgIC8vIHdlZG5lc2RheTogXCI4QU0tOFBNXCJcclxuICAgICAgICApXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gQ292aWRUZXN0aW5nU2l0ZXNQYWdlKCkge1xyXG4gIGNvbnN0IHsgc2V0U3RhdGU6IHNldE1hcE1hcmtlcnMgfSA9IFJlYWN0LnVzZUNvbnRleHQoTWFwTWFya2Vyc0NvbnRleHQpOyAgICBcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvdGVzdGluZy1zaXRlcycsIGZldGNoZXIpO1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBkYXRhIGZyb20gQVBJIGZvciAvYXBpL3Rlc3Rpbmctc2l0ZXM6ICcsIGVycm9yKTtcclxuICB9ICAgIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKHNpdGUpID0+ICh7XHJcbiAgICAgIGtleTogYCR7c2l0ZS5zaXRlX25hbWV9KyR7c2l0ZS5jb29yZGluYXRlcy5sYXR9KyR7c2l0ZS5jb29yZGluYXRlcy5sbmd9YCxcclxuICAgICAgb3V0cHV0X2tleTogYCR7c2l0ZS5zaXRlX25hbWV9KyR7c2l0ZS5jb29yZGluYXRlcy5sYXR9KyR7c2l0ZS5jb29yZGluYXRlcy5sbmd9YCxcclxuICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsICAgXHJcbiAgICAgIHNpdGVfaW5mbzoge1xyXG4gICAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCBcclxuICAgICAgICBwcm92aWRlcl91cmw6IHNpdGUucHJvdmlkZXJfdXJsLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfaW5mbzogc2l0ZS5hZGRpdGlvbmFsX2luZm8sXHJcbiAgICAgICAgYWRkcmVzczogc2l0ZS5hZGRyZXNzLFxyXG4gICAgICAgIHBob25lOiBzaXRlLnBob25lLFxyXG4gICAgICAgIG1vbmRheTogc2l0ZS5tb25kYXksXHJcbiAgICAgICAgdHVlc2RheTogc2l0ZS50dWVzZGF5LFxyXG4gICAgICAgIHdlZG5lc2RheTogc2l0ZS53ZWRuZXNkYXksXHJcbiAgICAgICAgdGh1cnNkYXk6IHNpdGUudGh1cnNkYXksXHJcbiAgICAgICAgZnJpZGF5OiBzaXRlLmZyaWRheSxcclxuICAgICAgICBzYXR1cmRheTogc2l0ZS5zYXR1cmRheSxcclxuICAgICAgICBzdW5kYXk6IHNpdGUuc3VuZGF5LFxyXG4gICAgICAgIHNjcmVlbmluZ19yZXF1aXJlZDogc2l0ZS5zY3JlZW5pbmdfcmVxdWlyZWQsXHJcbiAgICAgICAgYXBwb2ludG1lbnRfcmVxdWlyZWQ6IHNpdGUuYXBwb2ludG1lbnRfcmVxdWlyZWQsXHJcbiAgICAgICAgYW50aWJvZHlfdGVzdGluZzogc2l0ZS5hbnRpYm9keV90ZXN0aW5nLCBcclxuICAgICAgfSwgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGNvb3JkaW5hdGVzOiB7XHJcbiAgICAgICAgbGF0OiBzaXRlLmNvb3JkaW5hdGVzLmxhdCxcclxuICAgICAgICBsbmc6IHNpdGUuY29vcmRpbmF0ZXMubG5nLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImZvcm1hdHRlZERhdGFcIixmb3JtYXR0ZWREYXRhKTtcclxuICAgIHNldE1hcE1hcmtlcnMoZm9ybWF0dGVkRGF0YSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2V0TWFwTWFya2VycyhbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIHNldE1hcE1hcmtlcnNdKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250ZW50XCI+XHJcbiAgICAgIHtlcnJvciAmJiAnRXJyb3IgbG9hZGluZyBjb250ZW50J31cclxuICAgICAgeyFkYXRhICYmICFlcnJvciAmJiAnTG9hZGluZy4uLid9XHJcbiAgICAgIHsvKiB7IWVycm9yICYmIGRhdGEgJiYgXCJ5byB5b1wifSAqL31cclxuICAgICAgeyFlcnJvciAmJiBkYXRhICYmIDxUZXN0aW5nU2l0ZXMgZGF0YSA9IHtkYXRhfS8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbkNvdmlkVGVzdGluZ1NpdGVzUGFnZS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3ZpZFRlc3RpbmdTaXRlc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})