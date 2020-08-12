webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 32\n      }\n    }, value.site_name ? \"Name: \".concat(value.site_name) : '', value.site_name ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 28\n      }\n    }) : '', \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 34\n      }\n    }), \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 104\n      }\n    }), \"Additional Information: \", value.additional_info, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 57\n      }\n    }), \"Hours: \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 16\n      }\n    }), value.sunday ? \"Sunday: \".concat(value.sunday) : '', value.monday ? \"Monday: \".concat(value.monday) : '', value.tuesday ? \"Tuesday: \".concat(value.tuesday) : '', value.wednesday ? \"Wednesday: \".concat(value.wednesday) : '', value.thursday ? \"Thursday: \".concat(value.thursday) : '', value.friday ? \"Friday: \".concat(value.friday) : '', value.saturday ? \"Saturday: \".concat(value.saturday) : '', \"URL: \", __jsx(\"a\", {\n      href: value.provider_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 14\n      }\n    }, value.provider_url), \" \");\n  } // additional_info: \"Urgent Care Clinic\"\n  // address: \"633 Driggs Ave., Brooklyn, NY 11211\"\n  // antibody_testing: true\n  // appointment_required: false\n  // coordinates: {lat: 40.7150681, lng: -73.9583843}\n  // friday: \"8AM-8PM\"\n  // monday: \"8AM-8PM\"\n  // phone: \"(347) 987-4144\"\n  // provider_url: \"http://www.umdcare.com\"\n  // saturday: \"8AM-7PM\"\n  // screening_required: true\n  // site_name: \"UMD Urgent Care - Williamsburg\"\n  // sunday: \"9AM-6PM\"\n  // thursday: \"8AM-8PM\"\n  // tuesday: \"8AM-8PM\"\n  // wednesday: \"8AM-8PM\"\n  ));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4Iiwic2l0ZV9uYW1lIiwiYWRkcmVzcyIsImFwcG9pbnRtZW50X3JlcXVpcmVkIiwiYW50aWJvZHlfdGVzdGluZyIsImFkZGl0aW9uYWxfaW5mbyIsInN1bmRheSIsIm1vbmRheSIsInR1ZXNkYXkiLCJ3ZWRuZXNkYXkiLCJ0aHVyc2RheSIsImZyaWRheSIsInNhdHVyZGF5IiwicHJvdmlkZXJfdXJsIiwiQ292aWRUZXN0aW5nU2l0ZXNQYWdlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJzZXRNYXBNYXJrZXJzIiwic2V0U3RhdGUiLCJ1c2VTd3IiLCJlcnJvciIsImNvbnNvbGUiLCJ1c2VFZmZlY3QiLCJmb3JtYXR0ZWREYXRhIiwic2l0ZSIsImtleSIsImNvb3JkaW5hdGVzIiwibGF0IiwibG5nIiwib3V0cHV0X2tleSIsIm5hbWUiLCJzaXRlX2luZm8iLCJwaG9uZSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImxvZyIsImdldExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlB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QU8sWUFBTTtBQUNYTixtQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQWpDUSxFQWlDTixDQUFDckIsSUFBRCxFQUFPcUIsYUFBUCxDQWpDTSxDQUFUO0FBbUNBSSxTQUFPLENBQUNhLEdBQVIsQ0FBWSxNQUFaLEVBQW1CdEMsSUFBbkI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3dCLEtBQUssSUFBSSx1QkFEWixFQUVHLENBQUN4QixJQUFELElBQVMsQ0FBQ3dCLEtBQVYsSUFBbUIsWUFGdEIsRUFJRyxDQUFDQSxLQUFELElBQVV4QixJQUFWLElBQWtCLE1BQUMsWUFBRDtBQUFjLFFBQUksRUFBSUEsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpyQixDQURGO0FBU0Q7O0dBckRRaUIscUI7VUFFaUJNLDJDOzs7TUFGakJOLHFCO0FBdURUQSxxQkFBcUIsQ0FBQ3NCLFNBQXRCLEdBQWtDQSw4REFBbEM7QUFFZXRCLG9GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY292aWQtdGVzdGluZy1zaXRlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL01hcExheW91dCc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cclxuY29uc3QgVGVzdGluZ1NpdGVzID0gKHsgZGF0YSB9KSA9PiAoICBcclxuICA8ZGl2PlxyXG4gICAge1xyXG4gICAgICBkYXRhLm1hcCgodmFsdWUsIGlkeCkgPT4gPHAga2V5PXtpZHh9PlxyXG4gICAgICAgIHt2YWx1ZS5zaXRlX25hbWUgPyBgTmFtZTogJHt2YWx1ZS5zaXRlX25hbWV9YCA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5zaXRlX25hbWUgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICBBZGRyZXNzOiB7dmFsdWUuYWRkcmVzc30gPGJyPjwvYnI+ICAgICAgICAgXHJcbiAgICAgICAgWW91IGFyZSB7dmFsdWUuYXBwb2ludG1lbnRfcmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJ25vdCByZXF1aXJlZCd9IHRvIGhhdmUgYW4gYXBwb2ludG1lbnQgdG8gZ2V0IHRlc3RlZC48YnI+PC9icj5cclxuICAgICAgICBUaGlzIHRlc3Rpbmcgc2l0ZSB7dmFsdWUuYW50aWJvZHlfdGVzdGluZyA/ICdwcm92aWRlcycgOiAnZG9lcyBub3QgcHJvdmlkZSd9IGFudGlib2R5IHRlc3RpbmcuIDxicj48L2JyPlxyXG4gICAgICAgIEFkZGl0aW9uYWwgSW5mb3JtYXRpb246IHt2YWx1ZS5hZGRpdGlvbmFsX2luZm99IDxicj48L2JyPiBcclxuICAgICAgICBIb3VyczogPGJyPjwvYnI+XHJcbiAgICAgICAge3ZhbHVlLnN1bmRheSA/IGBTdW5kYXk6ICR7dmFsdWUuc3VuZGF5fWAgOiAnJ31cclxuICAgICAgICB7dmFsdWUubW9uZGF5ID8gYE1vbmRheTogJHt2YWx1ZS5tb25kYXl9YCA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS50dWVzZGF5ID8gYFR1ZXNkYXk6ICR7dmFsdWUudHVlc2RheX1gIDogJyd9XHJcbiAgICAgICAge3ZhbHVlLndlZG5lc2RheSA/IGBXZWRuZXNkYXk6ICR7dmFsdWUud2VkbmVzZGF5fWAgOiAnJ31cclxuICAgICAgICB7dmFsdWUudGh1cnNkYXkgPyBgVGh1cnNkYXk6ICR7dmFsdWUudGh1cnNkYXl9YCA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5mcmlkYXkgPyBgRnJpZGF5OiAke3ZhbHVlLmZyaWRheX1gIDogJyd9XHJcbiAgICAgICAge3ZhbHVlLnNhdHVyZGF5ID8gYFNhdHVyZGF5OiAke3ZhbHVlLnNhdHVyZGF5fWAgOiAnJ31cclxuICAgICAgICBVUkw6IDxhIGhyZWYgPSB7dmFsdWUucHJvdmlkZXJfdXJsfT57dmFsdWUucHJvdmlkZXJfdXJsfTwvYT4gPC9wPlxyXG4gICAgICAgIC8vIGFkZGl0aW9uYWxfaW5mbzogXCJVcmdlbnQgQ2FyZSBDbGluaWNcIlxyXG4gICAgICAgIC8vIGFkZHJlc3M6IFwiNjMzIERyaWdncyBBdmUuLCBCcm9va2x5biwgTlkgMTEyMTFcIlxyXG4gICAgICAgIC8vIGFudGlib2R5X3Rlc3Rpbmc6IHRydWVcclxuICAgICAgICAvLyBhcHBvaW50bWVudF9yZXF1aXJlZDogZmFsc2VcclxuICAgICAgICAvLyBjb29yZGluYXRlczoge2xhdDogNDAuNzE1MDY4MSwgbG5nOiAtNzMuOTU4Mzg0M31cclxuICAgICAgICAvLyBmcmlkYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgLy8gbW9uZGF5OiBcIjhBTS04UE1cIlxyXG4gICAgICAgIC8vIHBob25lOiBcIigzNDcpIDk4Ny00MTQ0XCJcclxuICAgICAgICAvLyBwcm92aWRlcl91cmw6IFwiaHR0cDovL3d3dy51bWRjYXJlLmNvbVwiXHJcbiAgICAgICAgLy8gc2F0dXJkYXk6IFwiOEFNLTdQTVwiXHJcbiAgICAgICAgLy8gc2NyZWVuaW5nX3JlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgLy8gc2l0ZV9uYW1lOiBcIlVNRCBVcmdlbnQgQ2FyZSAtIFdpbGxpYW1zYnVyZ1wiXHJcbiAgICAgICAgLy8gc3VuZGF5OiBcIjlBTS02UE1cIlxyXG4gICAgICAgIC8vIHRodXJzZGF5OiBcIjhBTS04UE1cIlxyXG4gICAgICAgIC8vIHR1ZXNkYXk6IFwiOEFNLThQTVwiXHJcbiAgICAgICAgLy8gd2VkbmVzZGF5OiBcIjhBTS04UE1cIlxyXG4gICAgICAgIClcclxuICAgICAgXHJcbiAgICB9XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBDb3ZpZFRlc3RpbmdTaXRlc1BhZ2UoKSB7XHJcbiAgY29uc3QgeyBzZXRTdGF0ZTogc2V0TWFwTWFya2VycyB9ID0gUmVhY3QudXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7ICAgIFxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cignL2FwaS90ZXN0aW5nLXNpdGVzJywgZmV0Y2hlcik7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGRhdGEgZnJvbSBBUEkgZm9yIC9hcGkvdGVzdGluZy1zaXRlczogJywgZXJyb3IpO1xyXG4gIH0gICAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoc2l0ZSkgPT4gKHtcclxuICAgICAga2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxyXG4gICAgICBvdXRwdXRfa2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxyXG4gICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgICBcclxuICAgICAgc2l0ZV9pbmZvOiB7XHJcbiAgICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsIFxyXG4gICAgICAgIHByb3ZpZGVyX3VybDogc2l0ZS5wcm92aWRlcl91cmwsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiBzaXRlLmFkZGl0aW9uYWxfaW5mbyxcclxuICAgICAgICBhZGRyZXNzOiBzaXRlLmFkZHJlc3MsXHJcbiAgICAgICAgcGhvbmU6IHNpdGUucGhvbmUsXHJcbiAgICAgICAgbW9uZGF5OiBzaXRlLm1vbmRheSxcclxuICAgICAgICB0dWVzZGF5OiBzaXRlLnR1ZXNkYXksXHJcbiAgICAgICAgd2VkbmVzZGF5OiBzaXRlLndlZG5lc2RheSxcclxuICAgICAgICB0aHVyc2RheTogc2l0ZS50aHVyc2RheSxcclxuICAgICAgICBmcmlkYXk6IHNpdGUuZnJpZGF5LFxyXG4gICAgICAgIHNhdHVyZGF5OiBzaXRlLnNhdHVyZGF5LFxyXG4gICAgICAgIHN1bmRheTogc2l0ZS5zdW5kYXksXHJcbiAgICAgICAgc2NyZWVuaW5nX3JlcXVpcmVkOiBzaXRlLnNjcmVlbmluZ19yZXF1aXJlZCxcclxuICAgICAgICBhcHBvaW50bWVudF9yZXF1aXJlZDogc2l0ZS5hcHBvaW50bWVudF9yZXF1aXJlZCxcclxuICAgICAgICBhbnRpYm9keV90ZXN0aW5nOiBzaXRlLmFudGlib2R5X3Rlc3RpbmcsIFxyXG4gICAgICB9LCAgICAgICAgICAgICAgICAgICBcclxuICAgICAgY29vcmRpbmF0ZXM6IHtcclxuICAgICAgICBsYXQ6IHNpdGUuY29vcmRpbmF0ZXMubGF0LFxyXG4gICAgICAgIGxuZzogc2l0ZS5jb29yZGluYXRlcy5sbmcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZm9ybWF0dGVkRGF0YVwiLGZvcm1hdHRlZERhdGEpO1xyXG4gICAgc2V0TWFwTWFya2Vycyhmb3JtYXR0ZWREYXRhKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRNYXBNYXJrZXJzKFtdKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgc2V0TWFwTWFya2Vyc10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWNvbnRlbnRcIj5cclxuICAgICAge2Vycm9yICYmICdFcnJvciBsb2FkaW5nIGNvbnRlbnQnfVxyXG4gICAgICB7IWRhdGEgJiYgIWVycm9yICYmICdMb2FkaW5nLi4uJ31cclxuICAgICAgey8qIHshZXJyb3IgJiYgZGF0YSAmJiBcInlvIHlvXCJ9ICovfVxyXG4gICAgICB7IWVycm9yICYmIGRhdGEgJiYgPFRlc3RpbmdTaXRlcyBkYXRhID0ge2RhdGF9Lz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxufVxyXG5cclxuQ292aWRUZXN0aW5nU2l0ZXNQYWdlLmdldExheW91dCA9IGdldExheW91dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdmlkVGVzdGluZ1NpdGVzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})