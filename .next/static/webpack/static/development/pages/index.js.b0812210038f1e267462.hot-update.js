webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_5__;\n}\n\nfunction getCenter(center) {\n  if (center == \"\") return {\n    lat: 40.635,\n    lng: -73.94\n  };else return center;\n}\n\nvar address = \"\";\n\nfunction setCoordinates(address) {\n  var _this = this;\n\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(this.state.address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      _this.setState({\n        coordinates: {\n          lat: data.results[0].geometry.location.lat,\n          lng: data.results[0].geometry.location.lng\n        }\n      });\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this2 = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_4__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(\"label\", {\n    \"for\": \"address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, \"Enter address\"), __jsx(\"input\", {\n    name: \"address\",\n    value: address,\n    onChange: setCoordinates(address),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    defaultCenter: getCenter(\"\"),\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      site_info: item.site_info,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"6bHIUK6FefCzYPchy3Z8d3vS+xY=\");\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldE1hcE9wdGlvbnMiLCJjb25maWciLCJnZXRDZW50ZXIiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJhZGRyZXNzIiwic2V0Q29vcmRpbmF0ZXMiLCJzdGF0ZSIsIm1ldGhvZCIsImRhdGFUeXBlIiwicmVzcG9uc2UiLCJkYXRhIiwic2V0U3RhdGUiLCJjb29yZGluYXRlcyIsInJlc3VsdHMiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwiR29vZ2xlTWFwIiwidXNlQ29udGV4dCIsIk1hcE1hcmtlcnNDb250ZXh0IiwibWFya2VycyIsImtleSIsIm1hcCIsIml0ZW0iLCJzaXRlX2luZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsU0FBU0MsYUFBVCxHQUF5QjtBQUN2QixTQUFPQyx1Q0FBUDtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3pCLE1BQUdBLE1BQU0sSUFBSSxFQUFiLEVBQ0UsT0FBTztBQUFDQyxPQUFHLEVBQUUsTUFBTjtBQUFhQyxPQUFHLEVBQUUsQ0FBQztBQUFuQixHQUFQLENBREYsS0FHRSxPQUFPRixNQUFQO0FBQ0g7O0FBRUQsSUFBSUcsT0FBTyxHQUFHLEVBQWQ7O0FBRUEsU0FBU0MsY0FBVCxDQUF3QkQsT0FBeEIsRUFBZ0M7QUFBQTs7QUFDOUIsTUFBR0EsT0FBTyxLQUFLLEVBQWYsRUFBa0I7QUFDZDtBQUNBVixTQUFLLGlIQUEwRyxLQUFLWSxLQUFMLENBQVdGLE9BQXJILEdBQStIO0FBQ2hJRyxZQUFNLEVBQUUsS0FEd0g7QUFFaElDLGNBQVEsRUFBRSxNQUZzSCxDQUdoSTtBQUNBO0FBQ0E7O0FBTGdJLEtBQS9ILENBQUwsQ0FPQ2IsSUFQRCxDQU9NLFVBQUFjLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNaLElBQVQsRUFBSjtBQUFBLEtBUGQsRUFRQ0YsSUFSRCxDQVFNLFVBQUFlLElBQUksRUFBSTtBQUNaLFdBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLG1CQUFXLEVBQUU7QUFBQ1YsYUFBRyxFQUFFUSxJQUFJLENBQUNHLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxRQUFoQixDQUF5QkMsUUFBekIsQ0FBa0NiLEdBQXhDO0FBQTZDQyxhQUFHLEVBQUVPLElBQUksQ0FBQ0csT0FBTCxDQUFhLENBQWIsRUFBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ1o7QUFBcEY7QUFBZixPQUFkO0FBQ0QsS0FWRDtBQVdIO0FBQ0Y7O0FBRU0sU0FBU2EsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLG9CQUNOQyx3REFBVSxDQUFDQyw4RUFBRCxDQURKO0FBQUEsTUFDbEJDLE9BRGtCLGVBQ2xCQSxPQURrQjs7QUFJMUIsU0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBTyxXQUFJLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFO0FBQU8sUUFBSSxFQUFFLFNBQWI7QUFBdUIsU0FBSyxFQUFJZixPQUFoQztBQUF5QyxZQUFRLEVBQUVDLGNBQWMsQ0FBQ0QsT0FBRCxDQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLHVEQUFEO0FBQ0Usb0JBQWdCLEVBQUU7QUFBRWdCLFNBQUcsRUFBRTtBQUFQLEtBRHBCLENBRUU7QUFGRjtBQUdFLGlCQUFhLEVBQUVwQixTQUFTLENBQUMsRUFBRCxDQUgxQjtBQUlFLGVBQVcsRUFBRSxFQUpmO0FBS0UsV0FBTyxFQUFFRixhQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRXFCLE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLElBQUQ7QUFBQSxXQUNWLE1BQUMsOERBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ0YsR0FEWixDQUVFO0FBRkY7QUFHRSxTQUFHLEVBQUdFLElBQUksQ0FBQ1YsV0FBTCxDQUFpQlYsR0FIekI7QUFJRSxTQUFHLEVBQUdvQixJQUFJLENBQUNWLFdBQUwsQ0FBaUJULEdBSnpCO0FBS0UsZUFBUyxFQUFHbUIsSUFBSSxDQUFDQyxTQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFaLENBUEYsQ0FMRixDQURGO0FBeUJEOztHQTdCZVAsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR29vZ2xlTWFwL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJztcclxuXHJcbmltcG9ydCB7IE1hcE1hcmtlciB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2VyJztcclxuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9tYXBDb25maWcnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFwT3B0aW9ucygpIHtcclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDZW50ZXIoY2VudGVyKSB7XHJcbiAgaWYoY2VudGVyID09IFwiXCIpXHJcbiAgICByZXR1cm4ge2xhdDogNDAuNjM1LGxuZzogLTczLjk0fTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gY2VudGVyO1xyXG59XHJcblxyXG52YXIgYWRkcmVzcyA9IFwiXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRDb29yZGluYXRlcyhhZGRyZXNzKXsgICAgXHJcbiAgaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29vcmRpbmF0ZXM6IHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ319KTsgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdvb2dsZU1hcCgpIHsgIFxyXG4gIGNvbnN0IHsgbWFya2VycyB9ID0gdXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7IFxyXG4gICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlLW1hcC1jb250YWluZXJcIj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIHsvKiA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc30gb25DaGFuZ2U9e3RoaXMuc2V0Q29vcmRpbmF0ZXN9PjwvaW5wdXQ+ICovfVxyXG4gICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc1wiPkVudGVyIGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgbmFtZSA9XCJhZGRyZXNzXCIgdmFsdWUgPSB7YWRkcmVzc30gb25DaGFuZ2U9e3NldENvb3JkaW5hdGVzKGFkZHJlc3MpfT48L2lucHV0PlxyXG4gICAgICA8R29vZ2xlTWFwUmVhY3RcclxuICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogXCJBSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm9cIiB9fVxyXG4gICAgICAgIC8vYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkwgfX1cclxuICAgICAgICBkZWZhdWx0Q2VudGVyPXtnZXRDZW50ZXIoXCJcIil9XHJcbiAgICAgICAgZGVmYXVsdFpvb209ezEzfVxyXG4gICAgICAgIG9wdGlvbnM9e2dldE1hcE9wdGlvbnN9XHJcbiAgICAgID5cclxuICAgICAgIHttYXJrZXJzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPE1hcE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAvL3RleHQ9e2l0ZW0ubmFtZX0gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGF0PXsgaXRlbS5jb29yZGluYXRlcy5sYXR9XHJcbiAgICAgICAgICAgIGxuZz17IGl0ZW0uY29vcmRpbmF0ZXMubG5nfVxyXG4gICAgICAgICAgICBzaXRlX2luZm89IHtpdGVtLnNpdGVfaW5mb30gICAgICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})