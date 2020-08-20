webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n //add another context that allows tracking what is in the info panel. It could possibly be a specific page in the pages folder\n//url for each specific info box. so once you click on a specific info box it could take you to a page where the data is loaded. so you could copy url and send somebody a testing site\n//more specific for each route: covid-testing-sites/\"identifier\" – Dynamic Routing using [] around the name of the file [site].jsx directly mapped to request.params. Max to send me next.js docs\n//still make a context, but handle more from the page so it will be easier \n//we would link to the page so you wouldn't have a click handler, but the page itself will have a specific one it's looking at request?params=\"identifier\"\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n}; //this is the data for the side of the map. however, it should only show up on click.\n//will have to figure out how to do context to pass onClick so that it will show up\n\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }\n  }, data.filter(function (item) {\n    return item.site_name === \"AdvantageCare Kings Highway\";\n  }) //filtering the data here. but we want it to filter to just the item that's clicked.\n  .map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 30\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 34\n      }\n    }), value.phone ? \"Phone Number: \".concat(value.phone) : '', value.phone ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 75\n      }\n    }) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 104\n      }\n    }), \"Hours: \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 16\n      }\n    }), value.sunday ? \"Sunday: \".concat(value.sunday) : '', value.sunday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 72\n      }\n    }) : '', value.monday ? \"Monday: \".concat(value.monday) : '', value.monday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 72\n      }\n    }) : '', value.tuesday ? \"Tuesday: \".concat(value.tuesday) : '', value.tuesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 76\n      }\n    }) : '', value.wednesday ? \"Wednesday: \".concat(value.wednesday) : '', value.wednesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 84\n      }\n    }) : '', value.thursday ? \"Thursday: \".concat(value.thursday) : '', value.thursday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 80\n      }\n    }) : '', value.friday ? \"Friday: \".concat(value.friday) : '', value.friday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 72\n      }\n    }) : '', value.saturday ? \"Saturday: \".concat(value.saturday) : '', value.saturday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 80\n      }\n    }) : '', value.additional_info ? \"Additional Information: \".concat(value.additional_info) : '', value.additional_info ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 115\n      }\n    }) : '', value.provider_url ? \"URL: \" : '', value.provider_url ? __jsx(\"a\", {\n      href: value.provider_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 66\n      }\n    }, value.provider_url) : '', value.provider_url ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 149\n      }\n    }) : '', __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/covid-testing-sites/[site]\",\n      as: \"/covid-testing-sites/\".concat(value.site_name, \"?address=\").concat(address),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }\n    }, \"Link to this Info\")));\n  }));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_4__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_5__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsImZpbHRlciIsIml0ZW0iLCJzaXRlX25hbWUiLCJtYXAiLCJ2YWx1ZSIsImlkeCIsImFkZHJlc3MiLCJwaG9uZSIsImFwcG9pbnRtZW50X3JlcXVpcmVkIiwiYW50aWJvZHlfdGVzdGluZyIsInN1bmRheSIsIm1vbmRheSIsInR1ZXNkYXkiLCJ3ZWRuZXNkYXkiLCJ0aHVyc2RheSIsImZyaWRheSIsInNhdHVyZGF5IiwiYWRkaXRpb25hbF9pbmZvIiwicHJvdmlkZXJfdXJsIiwiQ292aWRUZXN0aW5nU2l0ZXNQYWdlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJzZXRNYXBNYXJrZXJzIiwic2V0U3RhdGUiLCJ1c2VTd3IiLCJlcnJvciIsImNvbnNvbGUiLCJ1c2VFZmZlY3QiLCJmb3JtYXR0ZWREYXRhIiwic2l0ZSIsImtleSIsImNvb3JkaW5hdGVzIiwibGF0IiwibG5nIiwib3V0cHV0X2tleSIsIm5hbWUiLCJzaXRlX2luZm8iLCJzY3JlZW5pbmdfcmVxdWlyZWQiLCJnZXRMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEIsQyxDQUVBO0FBQ0E7OztBQUNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFBQyxJQUFJO0FBQUEsV0FBRUEsSUFBSSxDQUFDQyxTQUFMLEtBQWlCLDZCQUFuQjtBQUFBLEdBQWhCLEVBQWlFO0FBQWpFLEdBQ0dDLEdBREgsQ0FDTyxVQUFDQyxLQUFELEVBQVFDLEdBQVI7QUFBQSxXQUFnQjtBQUFHLFNBQUcsRUFBRUEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUVYRCxLQUFLLENBQUNFLE9BRkssT0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHcEJGLEtBQUssQ0FBQ0csS0FBTiwyQkFBK0JILEtBQUssQ0FBQ0csS0FBckMsSUFBK0MsRUFIM0IsRUFHK0JILEtBQUssQ0FBQ0csS0FBTixHQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBZCxHQUEwQixFQUh6RCxjQUlaSCxLQUFLLENBQUNJLG9CQUFOLEdBQTZCLFVBQTdCLEdBQTBDLGNBSjlCLDRDQUltRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSm5GLHdCQUtGSixLQUFLLENBQUNLLGdCQUFOLEdBQXlCLFVBQXpCLEdBQXNDLGtCQUxwQyx5QkFLMEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUwxRSxhQU1kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOYyxFQU9wQkwsS0FBSyxDQUFDTSxNQUFOLHFCQUEwQk4sS0FBSyxDQUFDTSxNQUFoQyxJQUEyQyxFQVB2QixFQU8yQk4sS0FBSyxDQUFDTSxNQUFOLEdBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFmLEdBQTJCLEVBUHRELEVBUXBCTixLQUFLLENBQUNPLE1BQU4scUJBQTBCUCxLQUFLLENBQUNPLE1BQWhDLElBQTJDLEVBUnZCLEVBUTJCUCxLQUFLLENBQUNPLE1BQU4sR0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWYsR0FBMkIsRUFSdEQsRUFTcEJQLEtBQUssQ0FBQ1EsT0FBTixzQkFBNEJSLEtBQUssQ0FBQ1EsT0FBbEMsSUFBOEMsRUFUMUIsRUFTOEJSLEtBQUssQ0FBQ1EsT0FBTixHQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWhCLEdBQTRCLEVBVDFELEVBVXBCUixLQUFLLENBQUNTLFNBQU4sd0JBQWdDVCxLQUFLLENBQUNTLFNBQXRDLElBQW9ELEVBVmhDLEVBVW9DVCxLQUFLLENBQUNTLFNBQU4sR0FBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFsQixHQUE4QixFQVZsRSxFQVdwQlQsS0FBSyxDQUFDVSxRQUFOLHVCQUE4QlYsS0FBSyxDQUFDVSxRQUFwQyxJQUFpRCxFQVg3QixFQVdpQ1YsS0FBSyxDQUFDVSxRQUFOLEdBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBakIsR0FBNkIsRUFYOUQsRUFZcEJWLEtBQUssQ0FBQ1csTUFBTixxQkFBMEJYLEtBQUssQ0FBQ1csTUFBaEMsSUFBMkMsRUFadkIsRUFZMkJYLEtBQUssQ0FBQ1csTUFBTixHQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBZixHQUEyQixFQVp0RCxFQWFwQlgsS0FBSyxDQUFDWSxRQUFOLHVCQUE4QlosS0FBSyxDQUFDWSxRQUFwQyxJQUFpRCxFQWI3QixFQWFpQ1osS0FBSyxDQUFDWSxRQUFOLEdBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBakIsR0FBNkIsRUFiOUQsRUFjcEJaLEtBQUssQ0FBQ2EsZUFBTixxQ0FBbURiLEtBQUssQ0FBQ2EsZUFBekQsSUFBNkUsRUFkekQsRUFjNkRiLEtBQUssQ0FBQ2EsZUFBTixHQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXhCLEdBQW9DLEVBZGpHLEVBZXBCYixLQUFLLENBQUNjLFlBQU4sYUFBK0IsRUFmWCxFQWVlZCxLQUFLLENBQUNjLFlBQU4sR0FBcUI7QUFBRyxVQUFJLEVBQUlkLEtBQUssQ0FBQ2MsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ2QsS0FBSyxDQUFDYyxZQUF0QyxDQUFyQixHQUErRSxFQWY5RixFQWVrR2QsS0FBSyxDQUFDYyxZQUFOLEdBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBckIsR0FBaUMsRUFmbkksRUFnQnJCLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsNkJBQVg7QUFBeUMsUUFBRSxpQ0FBMEJkLEtBQUssQ0FBQ0YsU0FBaEMsc0JBQXFESSxPQUFyRCxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixDQWhCcUIsQ0FBaEI7QUFBQSxHQURQLENBRkosQ0FEbUI7QUFBQSxDQUFyQjs7S0FBTVIsWTs7QUE2Qk4sU0FBU3FCLHFCQUFULEdBQWlDO0FBQUE7O0FBQUEsMEJBQ0tDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLDhFQUFqQixDQURMO0FBQUEsTUFDYkMsYUFEYSxxQkFDdkJDLFFBRHVCOztBQUFBLGdCQUVQQyxtREFBTSxDQUFDLG9CQUFELEVBQXVCaEMsT0FBdkIsQ0FGQztBQUFBLE1BRXZCTSxJQUZ1QixXQUV2QkEsSUFGdUI7QUFBQSxNQUVqQjJCLEtBRmlCLFdBRWpCQSxLQUZpQjs7QUFHL0IsTUFBSUEsS0FBSixFQUFXO0FBQ1RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjLHNEQUFkLEVBQXNFQSxLQUF0RTtBQUNEOztBQUVERSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxhQUFhLEdBQUcsQ0FBQzlCLElBQUksSUFBSSxFQUFULEVBQWFJLEdBQWIsQ0FBaUIsVUFBQzJCLElBQUQ7QUFBQSxhQUFXO0FBQ2hEQyxXQUFHLFlBQUtELElBQUksQ0FBQzVCLFNBQVYsY0FBdUI0QixJQUFJLENBQUNFLFdBQUwsQ0FBaUJDLEdBQXhDLGNBQStDSCxJQUFJLENBQUNFLFdBQUwsQ0FBaUJFLEdBQWhFLENBRDZDO0FBRWhEQyxrQkFBVSxZQUFLTCxJQUFJLENBQUM1QixTQUFWLGNBQXVCNEIsSUFBSSxDQUFDRSxXQUFMLENBQWlCQyxHQUF4QyxjQUErQ0gsSUFBSSxDQUFDRSxXQUFMLENBQWlCRSxHQUFoRSxDQUZzQztBQUdoREUsWUFBSSxFQUFFTixJQUFJLENBQUM1QixTQUhxQztBQUloRG1DLGlCQUFTLEVBQUU7QUFDVEQsY0FBSSxFQUFFTixJQUFJLENBQUM1QixTQURGO0FBRVRnQixzQkFBWSxFQUFFWSxJQUFJLENBQUNaLFlBRlY7QUFHVEQseUJBQWUsRUFBRWEsSUFBSSxDQUFDYixlQUhiO0FBSVRYLGlCQUFPLEVBQUV3QixJQUFJLENBQUN4QixPQUpMO0FBS1RDLGVBQUssRUFBRXVCLElBQUksQ0FBQ3ZCLEtBTEg7QUFNVEksZ0JBQU0sRUFBRW1CLElBQUksQ0FBQ25CLE1BTko7QUFPVEMsaUJBQU8sRUFBRWtCLElBQUksQ0FBQ2xCLE9BUEw7QUFRVEMsbUJBQVMsRUFBRWlCLElBQUksQ0FBQ2pCLFNBUlA7QUFTVEMsa0JBQVEsRUFBRWdCLElBQUksQ0FBQ2hCLFFBVE47QUFVVEMsZ0JBQU0sRUFBRWUsSUFBSSxDQUFDZixNQVZKO0FBV1RDLGtCQUFRLEVBQUVjLElBQUksQ0FBQ2QsUUFYTjtBQVlUTixnQkFBTSxFQUFFb0IsSUFBSSxDQUFDcEIsTUFaSjtBQWFUNEIsNEJBQWtCLEVBQUVSLElBQUksQ0FBQ1Esa0JBYmhCO0FBY1Q5Qiw4QkFBb0IsRUFBRXNCLElBQUksQ0FBQ3RCLG9CQWRsQjtBQWVUQywwQkFBZ0IsRUFBRXFCLElBQUksQ0FBQ3JCO0FBZmQsU0FKcUM7QUFxQmhEdUIsbUJBQVcsRUFBRTtBQUNYQyxhQUFHLEVBQUVILElBQUksQ0FBQ0UsV0FBTCxDQUFpQkMsR0FEWDtBQUVYQyxhQUFHLEVBQUVKLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkU7QUFGWDtBQXJCbUMsT0FBWDtBQUFBLEtBQWpCLENBQXRCLENBRGMsQ0EyQmQ7O0FBQ0FYLGlCQUFhLENBQUNNLGFBQUQsQ0FBYjtBQUVBLFdBQU8sWUFBTTtBQUNYTixtQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQWpDUSxFQWlDTixDQUFDeEIsSUFBRCxFQUFPd0IsYUFBUCxDQWpDTSxDQUFUO0FBbUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxLQUFLLElBQUksdUJBRFosRUFFRyxDQUFDM0IsSUFBRCxJQUFTLENBQUMyQixLQUFWLElBQW1CLFlBRnRCLEVBSUcsQ0FBQ0EsS0FBRCxJQUFVM0IsSUFBVixJQUFrQixNQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUlBLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKckIsQ0FERjtBQVNEOztHQW5EUW9CLHFCO1VBRWlCTSwyQzs7O01BRmpCTixxQjtBQXFEVEEscUJBQXFCLENBQUNvQixTQUF0QixHQUFrQ0EsOERBQWxDO0FBRWVwQixvRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvdmlkLXRlc3Rpbmctc2l0ZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcblxyXG4vL2FkZCBhbm90aGVyIGNvbnRleHQgdGhhdCBhbGxvd3MgdHJhY2tpbmcgd2hhdCBpcyBpbiB0aGUgaW5mbyBwYW5lbC4gSXQgY291bGQgcG9zc2libHkgYmUgYSBzcGVjaWZpYyBwYWdlIGluIHRoZSBwYWdlcyBmb2xkZXJcclxuLy91cmwgZm9yIGVhY2ggc3BlY2lmaWMgaW5mbyBib3guIHNvIG9uY2UgeW91IGNsaWNrIG9uIGEgc3BlY2lmaWMgaW5mbyBib3ggaXQgY291bGQgdGFrZSB5b3UgdG8gYSBwYWdlIHdoZXJlIHRoZSBkYXRhIGlzIGxvYWRlZC4gc28geW91IGNvdWxkIGNvcHkgdXJsIGFuZCBzZW5kIHNvbWVib2R5IGEgdGVzdGluZyBzaXRlXHJcbi8vbW9yZSBzcGVjaWZpYyBmb3IgZWFjaCByb3V0ZTogY292aWQtdGVzdGluZy1zaXRlcy9cImlkZW50aWZpZXJcIiDigJMgRHluYW1pYyBSb3V0aW5nIHVzaW5nIFtdIGFyb3VuZCB0aGUgbmFtZSBvZiB0aGUgZmlsZSBbc2l0ZV0uanN4IGRpcmVjdGx5IG1hcHBlZCB0byByZXF1ZXN0LnBhcmFtcy4gTWF4IHRvIHNlbmQgbWUgbmV4dC5qcyBkb2NzXHJcbi8vc3RpbGwgbWFrZSBhIGNvbnRleHQsIGJ1dCBoYW5kbGUgbW9yZSBmcm9tIHRoZSBwYWdlIHNvIGl0IHdpbGwgYmUgZWFzaWVyIFxyXG4vL3dlIHdvdWxkIGxpbmsgdG8gdGhlIHBhZ2Ugc28geW91IHdvdWxkbid0IGhhdmUgYSBjbGljayBoYW5kbGVyLCBidXQgdGhlIHBhZ2UgaXRzZWxmIHdpbGwgaGF2ZSBhIHNwZWNpZmljIG9uZSBpdCdzIGxvb2tpbmcgYXQgcmVxdWVzdD9wYXJhbXM9XCJpZGVudGlmaWVyXCJcclxuXHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTGF5b3V0JztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblxyXG4vL3RoaXMgaXMgdGhlIGRhdGEgZm9yIHRoZSBzaWRlIG9mIHRoZSBtYXAuIGhvd2V2ZXIsIGl0IHNob3VsZCBvbmx5IHNob3cgdXAgb24gY2xpY2suXHJcbi8vd2lsbCBoYXZlIHRvIGZpZ3VyZSBvdXQgaG93IHRvIGRvIGNvbnRleHQgdG8gcGFzcyBvbkNsaWNrIHNvIHRoYXQgaXQgd2lsbCBzaG93IHVwXHJcbmNvbnN0IFRlc3RpbmdTaXRlcyA9ICh7IGRhdGEgfSkgPT4gKCAgXHJcbiAgPGRpdj5cclxuICAgIHtcclxuICAgICAgZGF0YS5maWx0ZXIoaXRlbT0+aXRlbS5zaXRlX25hbWU9PT1cIkFkdmFudGFnZUNhcmUgS2luZ3MgSGlnaHdheVwiKS8vZmlsdGVyaW5nIHRoZSBkYXRhIGhlcmUuIGJ1dCB3ZSB3YW50IGl0IHRvIGZpbHRlciB0byBqdXN0IHRoZSBpdGVtIHRoYXQncyBjbGlja2VkLlxyXG4gICAgICAgIC5tYXAoKHZhbHVlLCBpZHgpID0+IDxwIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIEFkZHJlc3M6IHt2YWx1ZS5hZGRyZXNzfSA8YnI+PC9icj4gXHJcbiAgICAgICAge3ZhbHVlLnBob25lID8gYFBob25lIE51bWJlcjogJHt2YWx1ZS5waG9uZX1gIDogJyd9e3ZhbHVlLnBob25lID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAgWW91IGFyZSB7dmFsdWUuYXBwb2ludG1lbnRfcmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJ25vdCByZXF1aXJlZCd9IHRvIGhhdmUgYW4gYXBwb2ludG1lbnQgdG8gZ2V0IHRlc3RlZC48YnI+PC9icj5cclxuICAgICAgICBUaGlzIHRlc3Rpbmcgc2l0ZSB7dmFsdWUuYW50aWJvZHlfdGVzdGluZyA/ICdwcm92aWRlcycgOiAnZG9lcyBub3QgcHJvdmlkZSd9IGFudGlib2R5IHRlc3RpbmcuIDxicj48L2JyPiAgICAgICAgXHJcbiAgICAgICAgSG91cnM6IDxicj48L2JyPlxyXG4gICAgICAgIHt2YWx1ZS5zdW5kYXkgPyBgU3VuZGF5OiAke3ZhbHVlLnN1bmRheX1gIDogJyd9e3ZhbHVlLnN1bmRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5tb25kYXkgPyBgTW9uZGF5OiAke3ZhbHVlLm1vbmRheX1gIDogJyd9e3ZhbHVlLm1vbmRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS50dWVzZGF5ID8gYFR1ZXNkYXk6ICR7dmFsdWUudHVlc2RheX1gIDogJyd9e3ZhbHVlLnR1ZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUud2VkbmVzZGF5ID8gYFdlZG5lc2RheTogJHt2YWx1ZS53ZWRuZXNkYXl9YCA6ICcnfXt2YWx1ZS53ZWRuZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUudGh1cnNkYXkgPyBgVGh1cnNkYXk6ICR7dmFsdWUudGh1cnNkYXl9YCA6ICcnfXt2YWx1ZS50aHVyc2RheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5mcmlkYXkgPyBgRnJpZGF5OiAke3ZhbHVlLmZyaWRheX1gIDogJyd9e3ZhbHVlLmZyaWRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5zYXR1cmRheSA/IGBTYXR1cmRheTogJHt2YWx1ZS5zYXR1cmRheX1gIDogJyd9e3ZhbHVlLnNhdHVyZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLmFkZGl0aW9uYWxfaW5mbyA/IGBBZGRpdGlvbmFsIEluZm9ybWF0aW9uOiAke3ZhbHVlLmFkZGl0aW9uYWxfaW5mb31gIDogJyd9e3ZhbHVlLmFkZGl0aW9uYWxfaW5mbyA/IDxicj48L2JyPiA6ICcnfSAgICAgICAgIFxyXG4gICAgICAgIHt2YWx1ZS5wcm92aWRlcl91cmwgPyBgVVJMOiBgIDogJyd9e3ZhbHVlLnByb3ZpZGVyX3VybCA/IDxhIGhyZWYgPSB7dmFsdWUucHJvdmlkZXJfdXJsfT57dmFsdWUucHJvdmlkZXJfdXJsfTwvYT4gOiAnJ317dmFsdWUucHJvdmlkZXJfdXJsID8gPGJyPjwvYnI+IDogJyd9IFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY292aWQtdGVzdGluZy1zaXRlcy9bc2l0ZV1cIiBhcz17YC9jb3ZpZC10ZXN0aW5nLXNpdGVzLyR7dmFsdWUuc2l0ZV9uYW1lfT9hZGRyZXNzPSR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgPGE+TGluayB0byB0aGlzIEluZm88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L3A+KVxyXG4gICAgICBcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIENvdmlkVGVzdGluZ1NpdGVzUGFnZSgpIHtcclxuICBjb25zdCB7IHNldFN0YXRlOiBzZXRNYXBNYXJrZXJzIH0gPSBSZWFjdC51c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTsgICAgXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YSBmcm9tIEFQSSBmb3IgL2FwaS90ZXN0aW5nLXNpdGVzOiAnLCBlcnJvcik7XHJcbiAgfSAgICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xyXG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG91dHB1dF9rZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCAgIFxyXG4gICAgICBzaXRlX2luZm86IHtcclxuICAgICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgXHJcbiAgICAgICAgcHJvdmlkZXJfdXJsOiBzaXRlLnByb3ZpZGVyX3VybCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxyXG4gICAgICAgIGFkZHJlc3M6IHNpdGUuYWRkcmVzcyxcclxuICAgICAgICBwaG9uZTogc2l0ZS5waG9uZSxcclxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxyXG4gICAgICAgIHR1ZXNkYXk6IHNpdGUudHVlc2RheSxcclxuICAgICAgICB3ZWRuZXNkYXk6IHNpdGUud2VkbmVzZGF5LFxyXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxyXG4gICAgICAgIGZyaWRheTogc2l0ZS5mcmlkYXksXHJcbiAgICAgICAgc2F0dXJkYXk6IHNpdGUuc2F0dXJkYXksXHJcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcclxuICAgICAgICBzY3JlZW5pbmdfcmVxdWlyZWQ6IHNpdGUuc2NyZWVuaW5nX3JlcXVpcmVkLFxyXG4gICAgICAgIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBzaXRlLmFwcG9pbnRtZW50X3JlcXVpcmVkLFxyXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXHJcbiAgICAgIH0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBjb29yZGluYXRlczoge1xyXG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBzaXRlLmNvb3JkaW5hdGVzLmxuZyxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJmb3JtYXR0ZWREYXRhXCIsZm9ybWF0dGVkRGF0YSk7XHJcbiAgICBzZXRNYXBNYXJrZXJzKGZvcm1hdHRlZERhdGEpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldE1hcE1hcmtlcnMoW10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBzZXRNYXBNYXJrZXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxyXG4gICAgICB7ZXJyb3IgJiYgJ0Vycm9yIGxvYWRpbmcgY29udGVudCd9XHJcbiAgICAgIHshZGF0YSAmJiAhZXJyb3IgJiYgJ0xvYWRpbmcuLi4nfVxyXG4gICAgICB7LyogeyFlcnJvciAmJiBkYXRhICYmIFwiZGF0YSBoZXJlXCJ9ICovfVxyXG4gICAgICB7IWVycm9yICYmIGRhdGEgJiYgPFRlc3RpbmdTaXRlcyBkYXRhID0ge2RhdGF9Lz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxufVxyXG5cclxuQ292aWRUZXN0aW5nU2l0ZXNQYWdlLmdldExheW91dCA9IGdldExheW91dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdmlkVGVzdGluZ1NpdGVzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})