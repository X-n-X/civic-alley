webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 32\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 34\n      }\n    }), value.phone ? \"Phone Number: \".concat(value.phone) : '', value.phone ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 75\n      }\n    }) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 104\n      }\n    }), \"Hours: \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 16\n      }\n    }), value.sunday ? \"Sunday: \".concat(value.sunday) : '', value.sunday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 72\n      }\n    }) : '', value.monday ? \"Monday: \".concat(value.monday) : '', value.monday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 72\n      }\n    }) : '', value.tuesday ? \"Tuesday: \".concat(value.tuesday) : '', value.tuesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 76\n      }\n    }) : '', value.wednesday ? \"Wednesday: \".concat(value.wednesday) : '', value.wednesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 84\n      }\n    }) : '', value.thursday ? \"Thursday: \".concat(value.thursday) : '', value.thursday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 80\n      }\n    }) : '', value.friday ? \"Friday: \".concat(value.friday) : '', value.friday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 72\n      }\n    }) : '', value.saturday ? \"Saturday: \".concat(value.saturday) : '', value.saturday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 80\n      }\n    }) : '', value.additional_info ? \"Additional Information: \".concat(value.additional_info) : '', value.additional_info ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 115\n      }\n    }) : '', value.provider_url ? \"URL: \".concat(JSON.stringify(__jsx(\"a\", {\n      href: value.provider_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 54\n      }\n    }, value.provider_url))) : '');\n  }));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4IiwiYWRkcmVzcyIsInBob25lIiwiYXBwb2ludG1lbnRfcmVxdWlyZWQiLCJhbnRpYm9keV90ZXN0aW5nIiwic3VuZGF5IiwibW9uZGF5IiwidHVlc2RheSIsIndlZG5lc2RheSIsInRodXJzZGF5IiwiZnJpZGF5Iiwic2F0dXJkYXkiLCJhZGRpdGlvbmFsX2luZm8iLCJwcm92aWRlcl91cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiQ292aWRUZXN0aW5nU2l0ZXNQYWdlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJzZXRNYXBNYXJrZXJzIiwic2V0U3RhdGUiLCJ1c2VTd3IiLCJlcnJvciIsImNvbnNvbGUiLCJ1c2VFZmZlY3QiLCJmb3JtYXR0ZWREYXRhIiwic2l0ZSIsImtleSIsInNpdGVfbmFtZSIsImNvb3JkaW5hdGVzIiwibGF0IiwibG5nIiwib3V0cHV0X2tleSIsIm5hbWUiLCJzaXRlX2luZm8iLCJzY3JlZW5pbmdfcmVxdWlyZWQiLCJsb2ciLCJnZXRMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFhQyxLQUFLLE1BQUwsb0JBQWVDLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBdkIsQ0FBYjtBQUFBLENBQWhCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LElBQW1CLFlBRnRCLEVBSUcsQ0FBQ0EsS0FBRCxJQUFVMUIsSUFBVixJQUFrQixNQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUlBLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKckIsQ0FERjtBQVNEOztHQXJEUW1CLHFCO1VBRWlCTSwyQzs7O01BRmpCTixxQjtBQXVEVEEscUJBQXFCLENBQUNzQixTQUF0QixHQUFrQ0EsOERBQWxDO0FBRWV0QixvRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvdmlkLXRlc3Rpbmctc2l0ZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBMYXlvdXQnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcbmNvbnN0IFRlc3RpbmdTaXRlcyA9ICh7IGRhdGEgfSkgPT4gKCAgXHJcbiAgPGRpdj5cclxuICAgIHtcclxuICAgICAgZGF0YS5tYXAoKHZhbHVlLCBpZHgpID0+IDxwIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIEFkZHJlc3M6IHt2YWx1ZS5hZGRyZXNzfSA8YnI+PC9icj4gXHJcbiAgICAgICAge3ZhbHVlLnBob25lID8gYFBob25lIE51bWJlcjogJHt2YWx1ZS5waG9uZX1gIDogJyd9e3ZhbHVlLnBob25lID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAgWW91IGFyZSB7dmFsdWUuYXBwb2ludG1lbnRfcmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJ25vdCByZXF1aXJlZCd9IHRvIGhhdmUgYW4gYXBwb2ludG1lbnQgdG8gZ2V0IHRlc3RlZC48YnI+PC9icj5cclxuICAgICAgICBUaGlzIHRlc3Rpbmcgc2l0ZSB7dmFsdWUuYW50aWJvZHlfdGVzdGluZyA/ICdwcm92aWRlcycgOiAnZG9lcyBub3QgcHJvdmlkZSd9IGFudGlib2R5IHRlc3RpbmcuIDxicj48L2JyPiAgICAgICAgXHJcbiAgICAgICAgSG91cnM6IDxicj48L2JyPlxyXG4gICAgICAgIHt2YWx1ZS5zdW5kYXkgPyBgU3VuZGF5OiAke3ZhbHVlLnN1bmRheX1gIDogJyd9e3ZhbHVlLnN1bmRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5tb25kYXkgPyBgTW9uZGF5OiAke3ZhbHVlLm1vbmRheX1gIDogJyd9e3ZhbHVlLm1vbmRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS50dWVzZGF5ID8gYFR1ZXNkYXk6ICR7dmFsdWUudHVlc2RheX1gIDogJyd9e3ZhbHVlLnR1ZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUud2VkbmVzZGF5ID8gYFdlZG5lc2RheTogJHt2YWx1ZS53ZWRuZXNkYXl9YCA6ICcnfXt2YWx1ZS53ZWRuZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUudGh1cnNkYXkgPyBgVGh1cnNkYXk6ICR7dmFsdWUudGh1cnNkYXl9YCA6ICcnfXt2YWx1ZS50aHVyc2RheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5mcmlkYXkgPyBgRnJpZGF5OiAke3ZhbHVlLmZyaWRheX1gIDogJyd9e3ZhbHVlLmZyaWRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5zYXR1cmRheSA/IGBTYXR1cmRheTogJHt2YWx1ZS5zYXR1cmRheX1gIDogJyd9e3ZhbHVlLnNhdHVyZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLmFkZGl0aW9uYWxfaW5mbyA/IGBBZGRpdGlvbmFsIEluZm9ybWF0aW9uOiAke3ZhbHVlLmFkZGl0aW9uYWxfaW5mb31gIDogJyd9e3ZhbHVlLmFkZGl0aW9uYWxfaW5mbyA/IDxicj48L2JyPiA6ICcnfSAgICAgICAgIFxyXG4gICAgICAgIHt2YWx1ZS5wcm92aWRlcl91cmwgPyBgVVJMOiAke0pTT04uc3RyaW5naWZ5KDxhIGhyZWYgPSB7dmFsdWUucHJvdmlkZXJfdXJsfT57dmFsdWUucHJvdmlkZXJfdXJsfTwvYT4pfWAgOiAnJ308L3A+XHJcbiAgICAgICAgKVxyXG4gICAgICBcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIENvdmlkVGVzdGluZ1NpdGVzUGFnZSgpIHtcclxuICBjb25zdCB7IHNldFN0YXRlOiBzZXRNYXBNYXJrZXJzIH0gPSBSZWFjdC51c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTsgICAgXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZGF0YSBmcm9tIEFQSSBmb3IgL2FwaS90ZXN0aW5nLXNpdGVzOiAnLCBlcnJvcik7XHJcbiAgfSAgICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xyXG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG91dHB1dF9rZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXHJcbiAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCAgIFxyXG4gICAgICBzaXRlX2luZm86IHtcclxuICAgICAgICBuYW1lOiBzaXRlLnNpdGVfbmFtZSwgXHJcbiAgICAgICAgcHJvdmlkZXJfdXJsOiBzaXRlLnByb3ZpZGVyX3VybCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxyXG4gICAgICAgIGFkZHJlc3M6IHNpdGUuYWRkcmVzcyxcclxuICAgICAgICBwaG9uZTogc2l0ZS5waG9uZSxcclxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxyXG4gICAgICAgIHR1ZXNkYXk6IHNpdGUudHVlc2RheSxcclxuICAgICAgICB3ZWRuZXNkYXk6IHNpdGUud2VkbmVzZGF5LFxyXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxyXG4gICAgICAgIGZyaWRheTogc2l0ZS5mcmlkYXksXHJcbiAgICAgICAgc2F0dXJkYXk6IHNpdGUuc2F0dXJkYXksXHJcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcclxuICAgICAgICBzY3JlZW5pbmdfcmVxdWlyZWQ6IHNpdGUuc2NyZWVuaW5nX3JlcXVpcmVkLFxyXG4gICAgICAgIGFwcG9pbnRtZW50X3JlcXVpcmVkOiBzaXRlLmFwcG9pbnRtZW50X3JlcXVpcmVkLFxyXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXHJcbiAgICAgIH0sICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBjb29yZGluYXRlczoge1xyXG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXHJcbiAgICAgICAgbG5nOiBzaXRlLmNvb3JkaW5hdGVzLmxuZyxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJmb3JtYXR0ZWREYXRhXCIsZm9ybWF0dGVkRGF0YSk7XHJcbiAgICBzZXRNYXBNYXJrZXJzKGZvcm1hdHRlZERhdGEpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldE1hcE1hcmtlcnMoW10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBzZXRNYXBNYXJrZXJzXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGVudFwiPlxyXG4gICAgICB7ZXJyb3IgJiYgJ0Vycm9yIGxvYWRpbmcgY29udGVudCd9XHJcbiAgICAgIHshZGF0YSAmJiAhZXJyb3IgJiYgJ0xvYWRpbmcuLi4nfVxyXG4gICAgICB7LyogeyFlcnJvciAmJiBkYXRhICYmIFwieW8geW9cIn0gKi99XHJcbiAgICAgIHshZXJyb3IgJiYgZGF0YSAmJiA8VGVzdGluZ1NpdGVzIGRhdGEgPSB7ZGF0YX0vPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59XHJcblxyXG5Db3ZpZFRlc3RpbmdTaXRlc1BhZ2UuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ292aWRUZXN0aW5nU2l0ZXNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})