webpackHotUpdate("static/development/pages/covid-testing-sites/[testing-site].js",{

/***/ "./pages/covid-testing-sites/[testing-site].jsx":
/*!******************************************************!*\
  !*** ./pages/covid-testing-sites/[testing-site].jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/pages/covid-testing-sites/[testing-site].jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Post = function Post() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var _router$query = router.query,\n      pid = _router$query.pid,\n      name = _router$query.name;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('/api/testing-sites', fetcher),\n      data = _useSwr.data,\n      error = _useSwr.error;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      testing_site = _useState[0],\n      setTestingSite = _useState[1];\n\n  if (error) {\n    console.error('Error loading data from API for /api/testing-sites: ', error);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        output_key: \"\".concat(site.site_name, \"+\").concat(site.coordinates.lat, \"+\").concat(site.coordinates.lng),\n        name: site.site_name,\n        site_info: {\n          name: site.site_name,\n          provider_url: site.provider_url,\n          additional_info: site.additional_info,\n          address: site.address,\n          phone: site.phone,\n          monday: site.monday,\n          tuesday: site.tuesday,\n          wednesday: site.wednesday,\n          thursday: site.thursday,\n          friday: site.friday,\n          saturday: site.saturday,\n          sunday: site.sunday,\n          screening_required: site.screening_required,\n          appointment_required: site.appointment_required,\n          antibody_testing: site.antibody_testing\n        },\n        coordinates: {\n          lat: site.coordinates.lat,\n          lng: site.coordinates.lng\n        }\n      };\n    }); //console.log(\"formattedData\",formattedData);\n\n    setTestingSite(data.filter(function (item) {\n      return item.site_name === name;\n    }));\n  });\n  console.log(\"data\", testing_site);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 10\n    }\n  }, data.filter(function (item) {\n    return item.site_name === name;\n  }) //filtering the data here. but we want it to filter to just the item that's clicked.\n  .map(function (value, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 28\n      }\n    }, \"Address: \", value.address, \" \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 32\n      }\n    }), value.phone ? \"Phone Number: \".concat(value.phone) : '', value.phone ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 73\n      }\n    }) : '', \"You are \", value.appointment_required ? 'required' : 'not required', \" to have an appointment to get tested.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 111\n      }\n    }), \"This testing site \", value.antibody_testing ? 'provides' : 'does not provide', \" antibody testing. \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 102\n      }\n    }), \"Hours: \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 14\n      }\n    }), value.sunday ? \"Sunday: \".concat(value.sunday) : '', value.sunday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 70\n      }\n    }) : '', value.monday ? \"Monday: \".concat(value.monday) : '', value.monday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 70\n      }\n    }) : '', value.tuesday ? \"Tuesday: \".concat(value.tuesday) : '', value.tuesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 74\n      }\n    }) : '', value.wednesday ? \"Wednesday: \".concat(value.wednesday) : '', value.wednesday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 82\n      }\n    }) : '', value.thursday ? \"Thursday: \".concat(value.thursday) : '', value.thursday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 78\n      }\n    }) : '', value.friday ? \"Friday: \".concat(value.friday) : '', value.friday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 70\n      }\n    }) : '', value.saturday ? \"Saturday: \".concat(value.saturday) : '', value.saturday ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 78\n      }\n    }) : '', value.additional_info ? \"Additional Information: \".concat(value.additional_info) : '', value.additional_info ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 113\n      }\n    }) : '', value.provider_url ? \"URL: \" : '', value.provider_url ? __jsx(\"a\", {\n      href: value.provider_url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 64\n      }\n    }, value.provider_url) : '', value.provider_url ? __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 147\n      }\n    }) : '');\n  }));\n};\n\n_s(Post, \"6BI7+DlM4cnIAPBKhoV3q3VeEDM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb3ZpZC10ZXN0aW5nLXNpdGVzL1t0ZXN0aW5nLXNpdGVdLmpzeD9iNjg2Il0sIm5hbWVzIjpbImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwicGlkIiwibmFtZSIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsInVzZVN0YXRlIiwidGVzdGluZ19zaXRlIiwic2V0VGVzdGluZ1NpdGUiLCJjb25zb2xlIiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsInNpdGUiLCJrZXkiLCJzaXRlX25hbWUiLCJjb29yZGluYXRlcyIsImxhdCIsImxuZyIsIm91dHB1dF9rZXkiLCJzaXRlX2luZm8iLCJwcm92aWRlcl91cmwiLCJhZGRpdGlvbmFsX2luZm8iLCJhZGRyZXNzIiwicGhvbmUiLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzZGF5IiwidGh1cnNkYXkiLCJmcmlkYXkiLCJzYXR1cmRheSIsInN1bmRheSIsInNjcmVlbmluZ19yZXF1aXJlZCIsImFwcG9pbnRtZW50X3JlcXVpcmVkIiwiYW50aWJvZHlfdGVzdGluZyIsImZpbHRlciIsIml0ZW0iLCJsb2ciLCJ2YWx1ZSIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFhQyxLQUFLLE1BQUwsb0JBQWVDLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBdkIsQ0FBYjtBQUFBLENBQWhCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURpQixzQkFFS0QsTUFBTSxDQUFDRSxLQUZaO0FBQUEsTUFFVEMs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QUFBO0FBQUE7QUFBQSxNQUFyQixHQUFpQyxFQWZuSSxDQUFoQjtBQUFBLEdBRFAsQ0FGSyxDQUFQO0FBdUJELENBakVEOztHQUFNeEIsSTtVQUNXRSxxRCxFQUVTSSwyQzs7O0tBSHBCTixJO0FBbUVTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvdmlkLXRlc3Rpbmctc2l0ZXMvW3Rlc3Rpbmctc2l0ZV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XG5cbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbmNvbnN0IFBvc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgcGlkLCBuYW1lIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKCcvYXBpL3Rlc3Rpbmctc2l0ZXMnLCBmZXRjaGVyKTtcbiAgY29uc3QgW3Rlc3Rpbmdfc2l0ZSwgc2V0VGVzdGluZ1NpdGVdID0gdXNlU3RhdGUoXCJcIik7ICBcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGRhdGEgZnJvbSBBUEkgZm9yIC9hcGkvdGVzdGluZy1zaXRlczogJywgZXJyb3IpO1xuICB9ICAgIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKHNpdGUpID0+ICh7XG4gICAgICBrZXk6IGAke3NpdGUuc2l0ZV9uYW1lfSske3NpdGUuY29vcmRpbmF0ZXMubGF0fSske3NpdGUuY29vcmRpbmF0ZXMubG5nfWAsXG4gICAgICBvdXRwdXRfa2V5OiBgJHtzaXRlLnNpdGVfbmFtZX0rJHtzaXRlLmNvb3JkaW5hdGVzLmxhdH0rJHtzaXRlLmNvb3JkaW5hdGVzLmxuZ31gLFxuICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsICAgXG4gICAgICBzaXRlX2luZm86IHtcbiAgICAgICAgbmFtZTogc2l0ZS5zaXRlX25hbWUsIFxuICAgICAgICBwcm92aWRlcl91cmw6IHNpdGUucHJvdmlkZXJfdXJsLFxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHNpdGUuYWRkaXRpb25hbF9pbmZvLFxuICAgICAgICBhZGRyZXNzOiBzaXRlLmFkZHJlc3MsXG4gICAgICAgIHBob25lOiBzaXRlLnBob25lLFxuICAgICAgICBtb25kYXk6IHNpdGUubW9uZGF5LFxuICAgICAgICB0dWVzZGF5OiBzaXRlLnR1ZXNkYXksXG4gICAgICAgIHdlZG5lc2RheTogc2l0ZS53ZWRuZXNkYXksXG4gICAgICAgIHRodXJzZGF5OiBzaXRlLnRodXJzZGF5LFxuICAgICAgICBmcmlkYXk6IHNpdGUuZnJpZGF5LFxuICAgICAgICBzYXR1cmRheTogc2l0ZS5zYXR1cmRheSxcbiAgICAgICAgc3VuZGF5OiBzaXRlLnN1bmRheSxcbiAgICAgICAgc2NyZWVuaW5nX3JlcXVpcmVkOiBzaXRlLnNjcmVlbmluZ19yZXF1aXJlZCxcbiAgICAgICAgYXBwb2ludG1lbnRfcmVxdWlyZWQ6IHNpdGUuYXBwb2ludG1lbnRfcmVxdWlyZWQsXG4gICAgICAgIGFudGlib2R5X3Rlc3Rpbmc6IHNpdGUuYW50aWJvZHlfdGVzdGluZywgXG4gICAgICB9LCAgICAgICAgICAgICAgICAgICBcbiAgICAgIGNvb3JkaW5hdGVzOiB7XG4gICAgICAgIGxhdDogc2l0ZS5jb29yZGluYXRlcy5sYXQsXG4gICAgICAgIGxuZzogc2l0ZS5jb29yZGluYXRlcy5sbmcsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgLy9jb25zb2xlLmxvZyhcImZvcm1hdHRlZERhdGFcIixmb3JtYXR0ZWREYXRhKTtcbiAgc2V0VGVzdGluZ1NpdGUoZGF0YS5maWx0ZXIoaXRlbT0+aXRlbS5zaXRlX25hbWU9PT1uYW1lKSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhcImRhdGFcIix0ZXN0aW5nX3NpdGUpXG5cbiAgcmV0dXJuIDxkaXY+XG4gIHtcbiAgICBkYXRhLmZpbHRlcihpdGVtPT5pdGVtLnNpdGVfbmFtZT09PW5hbWUpLy9maWx0ZXJpbmcgdGhlIGRhdGEgaGVyZS4gYnV0IHdlIHdhbnQgaXQgdG8gZmlsdGVyIHRvIGp1c3QgdGhlIGl0ZW0gdGhhdCdzIGNsaWNrZWQuXG4gICAgICAubWFwKCh2YWx1ZSwgaWR4KSA9PiA8cCBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIFxuICAgICAgQWRkcmVzczoge3ZhbHVlLmFkZHJlc3N9IDxicj48L2JyPiBcbiAgICAgIHt2YWx1ZS5waG9uZSA/IGBQaG9uZSBOdW1iZXI6ICR7dmFsdWUucGhvbmV9YCA6ICcnfXt2YWx1ZS5waG9uZSA/IDxicj48L2JyPiA6ICcnfVxuICAgICAgWW91IGFyZSB7dmFsdWUuYXBwb2ludG1lbnRfcmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJ25vdCByZXF1aXJlZCd9IHRvIGhhdmUgYW4gYXBwb2ludG1lbnQgdG8gZ2V0IHRlc3RlZC48YnI+PC9icj5cbiAgICAgIFRoaXMgdGVzdGluZyBzaXRlIHt2YWx1ZS5hbnRpYm9keV90ZXN0aW5nID8gJ3Byb3ZpZGVzJyA6ICdkb2VzIG5vdCBwcm92aWRlJ30gYW50aWJvZHkgdGVzdGluZy4gPGJyPjwvYnI+ICAgICAgICBcbiAgICAgIEhvdXJzOiA8YnI+PC9icj5cbiAgICAgIHt2YWx1ZS5zdW5kYXkgPyBgU3VuZGF5OiAke3ZhbHVlLnN1bmRheX1gIDogJyd9e3ZhbHVlLnN1bmRheSA/IDxicj48L2JyPiA6ICcnfVxuICAgICAge3ZhbHVlLm1vbmRheSA/IGBNb25kYXk6ICR7dmFsdWUubW9uZGF5fWAgOiAnJ317dmFsdWUubW9uZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICB7dmFsdWUudHVlc2RheSA/IGBUdWVzZGF5OiAke3ZhbHVlLnR1ZXNkYXl9YCA6ICcnfXt2YWx1ZS50dWVzZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICB7dmFsdWUud2VkbmVzZGF5ID8gYFdlZG5lc2RheTogJHt2YWx1ZS53ZWRuZXNkYXl9YCA6ICcnfXt2YWx1ZS53ZWRuZXNkYXkgPyA8YnI+PC9icj4gOiAnJ31cbiAgICAgIHt2YWx1ZS50aHVyc2RheSA/IGBUaHVyc2RheTogJHt2YWx1ZS50aHVyc2RheX1gIDogJyd9e3ZhbHVlLnRodXJzZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICB7dmFsdWUuZnJpZGF5ID8gYEZyaWRheTogJHt2YWx1ZS5mcmlkYXl9YCA6ICcnfXt2YWx1ZS5mcmlkYXkgPyA8YnI+PC9icj4gOiAnJ31cbiAgICAgIHt2YWx1ZS5zYXR1cmRheSA/IGBTYXR1cmRheTogJHt2YWx1ZS5zYXR1cmRheX1gIDogJyd9e3ZhbHVlLnNhdHVyZGF5ID8gPGJyPjwvYnI+IDogJyd9XG4gICAgICB7dmFsdWUuYWRkaXRpb25hbF9pbmZvID8gYEFkZGl0aW9uYWwgSW5mb3JtYXRpb246ICR7dmFsdWUuYWRkaXRpb25hbF9pbmZvfWAgOiAnJ317dmFsdWUuYWRkaXRpb25hbF9pbmZvID8gPGJyPjwvYnI+IDogJyd9ICAgICAgICAgXG4gICAgICB7dmFsdWUucHJvdmlkZXJfdXJsID8gYFVSTDogYCA6ICcnfXt2YWx1ZS5wcm92aWRlcl91cmwgPyA8YSBocmVmID0ge3ZhbHVlLnByb3ZpZGVyX3VybH0+e3ZhbHVlLnByb3ZpZGVyX3VybH08L2E+IDogJyd9e3ZhbHVlLnByb3ZpZGVyX3VybCA/IDxicj48L2JyPiA6ICcnfSAgICAgICBcbiAgICA8L3A+KVxuICAgIFxuICB9XG48L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/covid-testing-sites/[testing-site].jsx\n");

/***/ })

})