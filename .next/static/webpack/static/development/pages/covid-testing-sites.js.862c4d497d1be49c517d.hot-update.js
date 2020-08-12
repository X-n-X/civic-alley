webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./pages/covid-testing-sites/index.jsx":
/*!*********************************************!*\
  !*** ./pages/covid-testing-sites/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_MapLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapLayout */ \"./components/MapLayout/index.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar TestingSites = function TestingSites(_ref) {\n  var data = _ref.data;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, data.map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 32\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 34\n      }\n    }), value.phone ? \"Phone Number: \".concat(value.phone) : '', value.phone ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 75\n      }\n    }) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 113\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 104\n      }\n    }), \"Hours: \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 16\n      }\n    }), value.sunday ? \"Sunday: \".concat(value.sunday) : '', value.sunday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 72\n      }\n    }) : '', value.monday ? \"Monday: \".concat(value.monday) : '', value.monday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 72\n      }\n    }) : '', value.tuesday ? \"Tuesday: \".concat(value.tuesday) : '', value.tuesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 76\n      }\n    }) : '', value.wednesday ? \"Wednesday: \".concat(value.wednesday) : '', value.wednesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 84\n      }\n    }) : '', value.thursday ? \"Thursday: \".concat(value.thursday) : '', value.thursday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 80\n      }\n    }) : '', value.friday ? \"Friday: \".concat(value.friday) : '', value.friday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 72\n      }\n    }) : '', value.saturday ? \"Saturday: \".concat(value.saturday) : '', value.saturday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 80\n      }\n    }) : '', value.additional_info ? \"Additional Information: \".concat(value.additional_info) : '', value.additional_info ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 115\n      }\n    }) : '', value.provider_url ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 31\n      }\n    }) : '', value.provider_url ? __jsx(\"a\", {\n      href: value.provider_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 68\n      }\n    }, value.provider_url) : '');\n  }));\n};\n\n_c = TestingSites;\n\nfunction CovidTestingSitesPage() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__[\"MapMarkersContext\"]),\n      setMapMarkers = _React$useContext.setState;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setMapMarkers(formattedData);\n    return function () {\n      setMapMarkers([]);\n    };\n  }, [data, setMapMarkers]);\n  console.log(\"data\", data);\n  return __jsx(\"div\", {\n    className: \"sidebar-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, error && 'Error loading content', !data && !error && 'Loading...', !error && data && __jsx(TestingSites, {\n    data: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 26\n    }\n  }));\n}\n\n_s(CovidTestingSitesPage, \"4XOVNxxC375nAunT48kTk7Pt1E0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c2 = CovidTestingSitesPage;\nCovidTestingSitesPage.getLayout = components_MapLayout__WEBPACK_IMPORTED_MODULE_3__[\"getLayout\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidTestingSitesPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TestingSites\");\n$RefreshReg$(_c2, \"CovidTestingSitesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL2luZGV4LmpzeD84Y2UyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiVGVzdGluZ1NpdGVzIiwiZGF0YSIsIm1hcCIsInZhbHVlIiwiaWR4IiwiYWRkcmVzcyIsInBob25lIiwiYXBwb2ludG1lbnRfcmVxdWlyZWQiLCJhbnRpYm9keV90ZXN0aW5nIiwic3VuZGF5IiwibW9uZGF5IiwidHVlc2RheSIsIndlZG5lc2RheSIsInRodXJzZGF5IiwiZnJpZGF5Iiwic2F0dXJkYXkiLCJhZGRpdGlvbmFsX2luZm8iLCJwcm92aWRlcl91cmwiLCJDb3ZpZFRlc3RpbmdTaXRlc1BhZ2UiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJNYXBNYXJrZXJzQ29udGV4dCIsInNldE1hcE1hcmtlcnMiLCJzZXRTdGF0ZSIsInVzZVN3ciIsImVycm9yIiwiY29uc29sZSIsInVzZUVmZmVjdCIsImZvcm1hdHRlZERhdGEiLCJzaXRlIiwia2V5Iiwic2l0ZV9uYW1lIiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJsbmciLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyIsInNjcmVlbmluZ19yZXF1aXJlZCIsImxvZyIsImdldExheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlB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QUFDeEIsSUFBRCxJQUFTLENBQUN3QixLQUFWLElBQW1CLFlBRnRCLEVBSUcsQ0FBQ0EsS0FBRCxJQUFVeEIsSUFBVixJQUFrQixNQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUlBLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKckIsQ0FERjtBQVNEOztHQXJEUWlCLHFCO1VBRWlCTSwyQzs7O01BRmpCTixxQjtBQXVEVEEscUJBQXFCLENBQUNzQixTQUF0QixHQUFrQ0EsOERBQWxDO0FBRWV0QixvRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvdmlkLXRlc3Rpbmctc2l0ZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBMYXlvdXQnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcbmNvbnN0IFRlc3RpbmdTaXRlcyA9ICh7IGRhdGEgfSkgPT4gKCAgXHJcbiAgPGRpdj5cclxuICAgIHtcclxuICAgICAgZGF0YS5tYXAoKHZhbHVlLCBpZHgpID0+IDxwIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIEFkZHJlc3M6IHt2YWx1ZS5hZGRyZXNzfSA8YnI+PC9icj4gXHJcbiAgICAgICAge3ZhbHVlLnBob25lID8gYFBob25lIE51bWJlcjogJHt2YWx1ZS5waG9uZX1gIDogJyd9e3ZhbHVlLnBob25lID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAgWW91IGFyZSB7dmFsdWUuYXBwb2ludG1lbnRfcmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJ25vdCByZXF1aXJlZCd9IHRvIGhhdmUgYW4gYXBwb2ludG1lbnQgdG8gZ2V0IHRlc3RlZC48YnI+PC9icj5cclxuICAgICAgICBUaGlzIHRlc3Rpbmcgc2l0ZSB7dmFsdWUuYW50aWJvZHlfdGVzdGluZyA/ICdwcm92aWRlcycgOiAnZG9lcyBub3QgcHJvdmlkZSd9IGFudGlib2R5IHRlc3RpbmcuIDxicj48L2JyPiAgICAgICAgXHJcbiAgICAgICAgSG91cnM6IDxicj48L2JyPlxyXG4gICAgICAgIHt2YWx1ZS5zdW5kYXkgPyBgU3VuZGF5OiAke3ZhbHVlLnN1bmRheX1gIDogJyd9e3ZhbHVlLnN1bmRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5tb25kYXkgPyBgTW9uZGF5OiAke3ZhbHVlLm1vbmRheX1gIDogJyd9e3ZhbHVlLm1vbmRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS50dWVzZGF5ID8gYFR1ZXNkYXk6ICR7dmFsdWUudHVlc2RheX1gIDogJyd9e3ZhbHVlLnR1ZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUud2VkbmVzZGF5ID8gYFdlZG5lc2RheTogJHt2YWx1ZS53ZWRuZXNkYXl9YCA6ICcnfXt2YWx1ZS53ZWRuZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cclxuICAgICAgICB7dmFsdWUudGh1cnNkYXkgPyBgVGh1cnNkYXk6ICR7dmFsdWUudGh1cnNkYXl9YCA6ICcnfXt2YWx1ZS50aHVyc2RheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5mcmlkYXkgPyBgRnJpZGF5OiAke3ZhbHVlLmZyaWRheX1gIDogJyd9e3ZhbHVlLmZyaWRheSA/IDxicj48L2JyPiA6ICcnfVxyXG4gICAgICAgIHt2YWx1ZS5zYXR1cmRheSA/IGBTYXR1cmRheTogJHt2YWx1ZS5zYXR1cmRheX1gIDogJyd9e3ZhbHVlLnNhdHVyZGF5ID8gPGJyPjwvYnI+IDogJyd9XHJcbiAgICAgICAge3ZhbHVlLmFkZGl0aW9uYWxfaW5mbyA/IGBBZGRpdGlvbmFsIEluZm9ybWF0aW9uOiAke3ZhbHVlLmFkZGl0aW9uYWxfaW5mb31gIDogJyd9e3ZhbHVlLmFkZGl0aW9uYWxfaW5mbyA/IDxicj48L2JyPiA6ICcnfSAgICAgICAgIFxyXG4gICAgICAgIHt2YWx1ZS5wcm92aWRlcl91cmwgPyA8YnI+PC9icj4gOiAnJ317dmFsdWUucHJvdmlkZXJfdXJsID8gPGEgaHJlZiA9IHt2YWx1ZS5wcm92aWRlcl91cmx9Pnt2YWx1ZS5wcm92aWRlcl91cmx9PC9hPiA6ICcnfTwvcD5cclxuICAgICAgICApXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gQ292aWRUZXN0aW5nU2l0ZXNQYWdlKCkge1xyXG4gIGNvbnN0IHsgc2V0U3RhdGU6IHNldE1hcE1hcmtlcnMgfSA9IFJlYWN0LnVzZUNvbnRleHQoTWFwTWFya2Vyc0NvbnRleHQpOyAgICBcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoJy9hcGkvdGVzdGluZy1zaXRlcycsIGZldGNoZXIpO1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBkYXRhIGZyb20gQVBJIGZvciAvYXBpL3Rlc3Rpbmctc2l0ZXM6ICcsIGVycm9yKTtcclxuICB9ICAgIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKHNpdGUpID0+ICh7XHJcbiAgICAgIGtleTogYCR7c2l0ZS5zaXRlX25hbWV9KyR7c2l0ZS5jb29yZGluYXRlcy5sYXR9KyR7c2l0ZS5jb29yZGluYXRlcy5sbmd9YCxcclxuICAgICAgb3V0cHV0X2tleTogYCR7c2l0ZS5zaXRlX25hbWV9KyR7c2l0ZS5jb29yZGluYXRlcy5sYXR9KyR7c2l0ZS5jb29yZGluYXRlcy5sbmd9YCxcclxuICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsICAgXHJcbiAgICAgIHNpdGVfaW5mbzoge1xyXG4gICAgICAgIG5hbWU6IHNpdGUuc2l0ZV9uYW1lLCBcclxuICAgICAgICBwcm92aWRlcl91cmw6IHNpdGUucHJvdmlkZXJfdXJsLFxyXG4gICAgICAgIGFkZGl0aW9uYWxfaW5mbzogc2l0ZS5hZGRpdGlvbmFsX2luZm8sXHJcbiAgICAgICAgYWRkcmVzczogc2l0ZS5hZGRyZXNzLFxyXG4gICAgICAgIHBob25lOiBzaXRlLnBob25lLFxyXG4gICAgICAgIG1vbmRheTogc2l0ZS5tb25kYXksXHJcbiAgICAgICAgdHVlc2RheTogc2l0ZS50dWVzZGF5LFxyXG4gICAgICAgIHdlZG5lc2RheTogc2l0ZS53ZWRuZXNkYXksXHJcbiAgICAgICAgdGh1cnNkYXk6IHNpdGUudGh1cnNkYXksXHJcbiAgICAgICAgZnJpZGF5OiBzaXRlLmZyaWRheSxcclxuICAgICAgICBzYXR1cmRheTogc2l0ZS5zYXR1cmRheSxcclxuICAgICAgICBzdW5kYXk6IHNpdGUuc3VuZGF5LFxyXG4gICAgICAgIHNjcmVlbmluZ19yZXF1aXJlZDogc2l0ZS5zY3JlZW5pbmdfcmVxdWlyZWQsXHJcbiAgICAgICAgYXBwb2ludG1lbnRfcmVxdWlyZWQ6IHNpdGUuYXBwb2ludG1lbnRfcmVxdWlyZWQsXHJcbiAgICAgICAgYW50aWJvZHlfdGVzdGluZzogc2l0ZS5hbnRpYm9keV90ZXN0aW5nLCBcclxuICAgICAgfSwgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGNvb3JkaW5hdGVzOiB7XHJcbiAgICAgICAgbGF0OiBzaXRlLmNvb3JkaW5hdGVzLmxhdCxcclxuICAgICAgICBsbmc6IHNpdGUuY29vcmRpbmF0ZXMubG5nLFxyXG4gICAgICB9LFxyXG4gICAgfSkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImZvcm1hdHRlZERhdGFcIixmb3JtYXR0ZWREYXRhKTtcclxuICAgIHNldE1hcE1hcmtlcnMoZm9ybWF0dGVkRGF0YSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2V0TWFwTWFya2VycyhbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIHNldE1hcE1hcmtlcnNdKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250ZW50XCI+XHJcbiAgICAgIHtlcnJvciAmJiAnRXJyb3IgbG9hZGluZyBjb250ZW50J31cclxuICAgICAgeyFkYXRhICYmICFlcnJvciAmJiAnTG9hZGluZy4uLid9XHJcbiAgICAgIHsvKiB7IWVycm9yICYmIGRhdGEgJiYgXCJ5byB5b1wifSAqL31cclxuICAgICAgeyFlcnJvciAmJiBkYXRhICYmIDxUZXN0aW5nU2l0ZXMgZGF0YSA9IHtkYXRhfS8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbkNvdmlkVGVzdGluZ1NpdGVzUGFnZS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3ZpZFRlc3RpbmdTaXRlc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/index.jsx\n");

/***/ })

})