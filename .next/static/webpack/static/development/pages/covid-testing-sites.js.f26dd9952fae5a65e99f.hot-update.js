webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n}; //this is the data for the side of the map. however, it should only show up on click.\n//will have to figure out how to do context to pass onClick so that it will show up\n\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 32\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 34\n      }\n    }), value.phone ? \"Phone Number: \".concat(value.phone) : '', value.phone ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 75\n      }\n    }) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 104\n      }\n    }), \"Hours: \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 16\n      }\n    }), value.sunday ? \"Sunday: \".concat(value.sunday) : '', value.sunday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 72\n      }\n    }) : '', value.monday ? \"Monday: \".concat(value.monday) : '', value.monday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 72\n      }\n    }) : '', value.tuesday ? \"Tuesday: \".concat(value.tuesday) : '', value.tuesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 76\n      }\n    }) : '', value.wednesday ? \"Wednesday: \".concat(value.wednesday) : '', value.wednesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 84\n      }\n    }) : '', value.thursday ? \"Thursday: \".concat(value.thursday) : '', value.thursday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 80\n      }\n    }) : '', value.friday ? \"Friday: \".concat(value.friday) : '', value.friday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 72\n      }\n    }) : '', value.saturday ? \"Saturday: \".concat(value.saturday) : '', value.saturday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 80\n      }\n    }) : '', value.additional_info ? \"Additional Information: \".concat(value.additional_info) : '', value.additional_info ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 115\n      }\n    }) : '', value.site_name, value.provider_url ? \"URL: \" : '', value.provider_url ? __jsx(\"a\", {\n      href: value.provider_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 66\n      }\n    }, value.provider_url) : '');\n  }));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && \"data here\", !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4IiwiYWRkcmVzcyIsInBob25lIiwiYXBwb2ludG1lbnRfcmVxdWlyZWQiLCJhbnRpYm9keV90ZXN0aW5nIiwic3VuZGF5IiwibW9uZGF5IiwidHVlc2RheSIsIndlZG5lc2RheSIsInRodXJzZGF5IiwiZnJpZGF5Iiwic2F0dXJkYXkiLCJhZGRpdGlvbmFsX2luZm8iLCJzaXRlX25hbWUiLCJwcm92aWRlcl91cmwiLCJDb3ZpZFRlc3RpbmdTaXRlc1BhZ2UiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJNYXBNYXJrZXJzQ29udGV4dCIsInNldE1hcE1hcmtlcnMiLCJzZXRTdGF0ZSIsInVzZVN3ciIsImVycm9yIiwiY29uc29sZSIsInVzZUVmZmVjdCIsImZvcm1hdHRlZERhdGEiLCJzaXRlIiwia2V5IiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJsbmciLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyIsInNjcmVlbmluZ19yZXF1aXJlZCIsImxvZyIsImdldExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEIsQyxDQUVBO0FBQ0E7OztBQUNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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ekIsSUFBRCxJQUFTLENBQUN5QixLQUFWLElBQW1CLFlBRnRCLEVBR0csQ0FBQ0EsS0FBRCxJQUFVekIsSUFBVixJQUFrQixXQUhyQixFQUlHLENBQUN5QixLQUFELElBQVV6QixJQUFWLElBQWtCLE1BQUMsWUFBRDtBQUFjLFFBQUksRUFBSUEsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpyQixDQURGO0FBU0Q7O0dBckRRa0IscUI7VUFFaUJNLDJDOzs7TUFGakJOLHFCO0FBdURUQSxxQkFBcUIsQ0FBQ3FCLFNBQXRCLEdBQWtDQSw4REFBbEM7QUFFZXJCLG9GQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY292aWQtdGVzdGluZy1zaXRlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL01hcExheW91dCc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cclxuLy90aGlzIGlzIHRoZSBkYXRhIGZvciB0aGUgc2lkZSBvZiB0aGUgbWFwLiBob3dldmVyLCBpdCBzaG91bGQgb25seSBzaG93IHVwIG9uIGNsaWNrLlxyXG4vL3dpbGwgaGF2ZSB0byBmaWd1cmUgb3V0IGhvdyB0byBkbyBjb250ZXh0IHRvIHBhc3Mgb25DbGljayBzbyB0aGF0IGl0IHdpbGwgc2hvdyB1cFxyXG5jb25zdCBUZXN0aW5nU2l0ZXMgPSAoeyBkYXRhIH0pID0+ICggIFxyXG4gIDxkaXY+XHJcbiAgICB7XHJcbiAgICAgIGRhdGEubWFwKCh2YWx1ZSwgaWR4KSA9PiA8cCBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBBZGRyZXNzOiB7dmFsdWUuYWRkcmVzc30gPGJyPjwvYnI+IFxyXG4gICAgICAgIHt2YWx1ZS5waG9uZSA/IGBQaG9uZSBOdW1iZXI6ICR7dmFsdWUucGhvbmV9YCA6ICcnfXt2YWx1ZS5waG9uZSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIFlvdSBhcmUge3ZhbHVlLmFwcG9pbnRtZW50X3JlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICdub3QgcmVxdWlyZWQnfSB0byBoYXZlIGFuIGFwcG9pbnRtZW50IHRvIGdldCB0ZXN0ZWQuPGJyPjwvYnI+XHJcbiAgICAgICAgVGhpcyB0ZXN0aW5nIHNpdGUge3ZhbHVlLmFudGlib2R5X3Rlc3RpbmcgPyAncHJvdmlkZXMnIDogJ2RvZXMgbm90IHByb3ZpZGUnfSBhbnRpYm9keSB0ZXN0aW5nLiA8YnI+PC9icj4gICAgICAgIFxyXG4gICAgICAgIEhvdXJzOiA8YnI+PC9icj5cclxuICAgICAgICB7dmFsdWUuc3VuZGF5ID8gYFN1bmRheTogJHt2YWx1ZS5zdW5kYXl9YCA6ICcnfXt2YWx1ZS5zdW5kYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUubW9uZGF5ID8gYE1vbmRheTogJHt2YWx1ZS5tb25kYXl9YCA6ICcnfXt2YWx1ZS5tb25kYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUudHVlc2RheSA/IGBUdWVzZGF5OiAke3ZhbHVlLnR1ZXNkYXl9YCA6ICcnfXt2YWx1ZS50dWVzZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLndlZG5lc2RheSA/IGBXZWRuZXNkYXk6ICR7dmFsdWUud2VkbmVzZGF5fWAgOiAnJ317dmFsdWUud2VkbmVzZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLnRodXJzZGF5ID8gYFRodXJzZGF5OiAke3ZhbHVlLnRodXJzZGF5fWAgOiAnJ317dmFsdWUudGh1cnNkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUuZnJpZGF5ID8gYEZyaWRheTogJHt2YWx1ZS5mcmlkYXl9YCA6ICcnfXt2YWx1ZS5mcmlkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUuc2F0dXJkYXkgPyBgU2F0dXJkYXk6ICR7dmFsdWUuc2F0dXJkYXl9YCA6ICcnfXt2YWx1ZS5zYXR1cmRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5hZGRpdGlvbmFsX2luZm8gPyBgQWRkaXRpb25hbCBJbmZvcm1hdGlvbjogJHt2YWx1ZS5hZGRpdGlvbmFsX2luZm99YCA6ICcnfXt2YWx1ZS5hZGRpdGlvbmFsX2luZm8gPyA8YnI+PC9icj4gOiAnJ30gICAgICAgICBcclxuICAgICAgICB7dmFsdWUuc2l0ZV9uYW1lfVxyXG4gICAgICAgIHt2YWx1ZS5wcm92aWRlcl91cmwgPyBgVVJMOiBgIDogJyd9e3ZhbHVlLnByb3ZpZGVyX3VybCA/IDxhIGhyZWYgPSB7dmFsdWUucHJvdmlkZXJfdXJsfT57dmFsdWUucHJvdmlkZXJfdXJsfTwvYT4gOiAnJ308L3A+XHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgICBcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIENvdmlkVGVzdGluZ1NpdGVzUGFnZSgpIHtcclxuICBjb25zdCB7IHNldFN0YXRlOiBzZXRNYXBNYXJrZXJzIH0gPSBSZWFjdC51c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTsgICAgXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YSBmcm9tIEFQSSBmb3IgL2FwaS90ZXN0aW5nLXNpdGVzOiAnLCBlcnJvcik7XHJcbiAgfSAgICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xyXG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG91dHB1dF9rZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCAgIFxyXG4gICAgICBzaXRlX2luZm86IHtcclxuICAgICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgXHJcbiAgICAgICAgcHJvdmlkZXJfdXJsOiBzaXRlLnByb3ZpZGVyX3VybCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxyXG4gICAgICAgIGFkZHJlc3M6IHNpdGUuYWRkcmVzcyxcclxuICAgICAgICBwaG9uZTogc2l0ZS5waG9uZSxcclxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxyXG4gICAgICAgIHR1ZXNkYXk6IHNpdGUudHVlc2RheSxcclxuICAgICAgICB3ZWRuZXNkYXk6IHNpdGUud2VkbmVzZGF5LFxyXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxyXG4gICAgICAgIGZyaWRheTogc2l0ZS5mcmlkYXksXHJcbiAgICAgICAgc2F0dXJkYXk6IHNpdGUuc2F0dXJkYXksXHJcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcclxuICAgICAgICBzY3JlZW5pbmdfcmVxdWlyZWQ6IHNpdGUuc2NyZWVuaW5nX3JlcXVpcmVkLFxyXG4gICAgICAgIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBzaXRlLmFwcG9pbnRtZW50X3JlcXVpcmVkLFxyXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXHJcbiAgICAgIH0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBjb29yZGluYXRlczoge1xyXG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBzaXRlLmNvb3JkaW5hdGVzLmxuZyxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJmb3JtYXR0ZWREYXRhXCIsZm9ybWF0dGVkRGF0YSk7XHJcbiAgICBzZXRNYXBNYXJrZXJzKGZvcm1hdHRlZERhdGEpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldE1hcE1hcmtlcnMoW10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBzZXRNYXBNYXJrZXJzXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxyXG4gICAgICB7ZXJyb3IgJiYgJ0Vycm9yIGxvYWRpbmcgY29udGVudCd9XHJcbiAgICAgIHshZGF0YSAmJiAhZXJyb3IgJiYgJ0xvYWRpbmcuLi4nfVxyXG4gICAgICB7IWVycm9yICYmIGRhdGEgJiYgXCJkYXRhIGhlcmVcIn1cclxuICAgICAgeyFlcnJvciAmJiBkYXRhICYmIDxUZXN0aW5nU2l0ZXMgZGF0YSA9IHtkYXRhfS8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbkNvdmlkVGVzdGluZ1NpdGVzUGFnZS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3ZpZFRlc3RpbmdTaXRlc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})