webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  console.log(\"address\", address);\n\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return {\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      };\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setAddress = _React$useState2[1];\n\n  var coordinates_url = \"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address); //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=554%2076th%20street%20bay%20ridge`;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else if (!coordinates) {\n    console.log(\"still loading\");\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // const { coordinates, error } = useSwr(coordinates_url, fetcher);\n    // if (error) {\n    //   console.error('Error loading the Google Maps lng lat ', error);\n    // }\n    // coordinates = (data || []).map((site) => ({\n    //   lat: coordinates.results[0].geometry.location.lat, \n    //     lng: coordinates.results[0].geometry.location.lng,\n    // }));\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setcoordinates = {\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      };\n    });\n  });\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: newAddress,\n    onChange: setNewAddress,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setCenter({\n        lat: 40.742,\n        lng: -73.769\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      output_key: item.output_key,\n      name: item.name // coordinates = {item.coordinates}      \n      ,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"Dwx8XaX7a8nPM3p7gF5WzGboVEs=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsYXQiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsIkdvb2dsZU1hcCIsImZldGNoZXIiLCJyZXMiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldEFkZHJlc3MiLCJjb29yZGluYXRlc191cmwiLCJ1c2VTd3IiLCJjb29yZGluYXRlcyIsImVycm9yIiwidXNlRWZmZWN0Iiwic2V0Y29vcmRpbmF0ZXMiLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsInNldENlbnRlciIsImtleSIsImNlbnRlciIsIm1hcCIsIml0ZW0iLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsU0FBT0MsdUNBQVA7QUFDRCxDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBOEI7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JGLE9BQXRCOztBQUNBLE1BQUdB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QU8sRUFBRTtBQUFBLGFBQU1DLFNBQVMsQ0FBQztBQUFDdEIsV0FBRyxFQUFFLE1BQU47QUFBYUksV0FBRyxFQUFFLENBQUM7QUFBbkIsT0FBRCxDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISCxFQUlFLE1BQUMsdURBQUQ7QUFDRSxvQkFBZ0IsRUFBRTtBQUFFbUIsU0FBRyxFQUFFO0FBQVAsS0FEcEIsQ0FFRTtBQUZGO0FBR0UsVUFBTSxFQUFFQyxNQUhWO0FBSUUsZUFBVyxFQUFFLEVBSmY7QUFLRSxXQUFPLEVBQUVyQyxhQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRXVCLE9BQU8sQ0FBQ2UsR0FBUixDQUFZLFVBQUNDLElBQUQ7QUFBQSxXQUNWLE1BQUMsOERBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ0gsR0FEWixDQUVFO0FBRkY7QUFHRSxTQUFHLEVBQUdHLElBQUksQ0FBQ1YsV0FBTCxDQUFpQmhCLEdBSHpCO0FBSUUsU0FBRyxFQUFHMEIsSUFBSSxDQUFDVixXQUFMLENBQWlCWixHQUp6QjtBQUtFLGdCQUFVLEVBQUlzQixJQUFJLENBQUNDLFVBTHJCO0FBTUUsVUFBSSxFQUFJRCxJQUFJLENBQUNFLElBTmYsQ0FPRTtBQVBGO0FBUUUsZUFBUyxFQUFHRixJQUFJLENBQUNHLFNBUm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVTtBQUFBLEdBQVosQ0FQRixDQUpGLENBREY7QUEyQkQ7O0dBcEVleEIsUztVQU9pQlUsMkM7OztLQVBqQlYsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR29vZ2xlTWFwL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJztcclxuXHJcbmltcG9ydCB7IE1hcE1hcmtlciB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2VyJztcclxuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9tYXBDb25maWcnO1xyXG5cclxuZnVuY3Rpb24gZ2V0TWFwT3B0aW9ucygpIHtcclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0Q2VudGVyKHgpIHtcclxuLy8gICBpZih4ID09PSB1bmRlZmluZWQpe1xyXG4vLyAgICAgdmFyIGFkZHJlc3MgPSBcIjU1NCA3NnRoIHN0cmVldCBiYXkgcmlkZ2VcIjtcclxuLy8gICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGVycm9yIH0gPSB1c2VTd3IoYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7YWRkcmVzc31gLCBmZXRjaGVyKTtcclxuLy8gICAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRoZSBHb29nbGUgTWFwcyBsbmcgbGF0ICcsIGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiB7bGF0OiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ307ICAgIFxyXG4vLyAgIH1lbHNlXHJcbi8vICAgICByZXR1cm4ge2xhdDogNDAuNjM1LGxuZzogLTczLjk0fTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY2hhbmdlQ2VudGVyKCkgeyAgXHJcbi8vICAgdmFyIGNvb3JkaW5hdGVzID0ge2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX07XHJcbi8vICAgcmV0dXJuIGNvb3JkaW5hdGVzOyAgXHJcbi8vIH1cclxuXHJcbi8vIHZhciBhZGRyZXNzID0gXCJcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIHNldENvb3JkaW5hdGVzKGFkZHJlc3MpeyAgICBcclxuICAvLyBpZihhZGRyZXNzICE9PSBcIlwiKXsgICAgICAgICAgICAgXHJcbiAgLy8gICAgIC8vZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTH0mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAvLyAgICAgZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gIC8vICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIC8vICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gIC8vICAgICAgICAgLy8gaGVhZGVyczoge1xyXG4gIC8vICAgICAgICAgLy8gICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAvLyAgICAgICAgIC8vIH1cclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC8vICAgICAudGhlbihkYXRhID0+IHsgICAgICAgICAgIFxyXG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb29yZGluYXRlczoge2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfX0pOyAgICAgICAgICBcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDZW50ZXIoYWRkcmVzcyl7XHJcbiAgY29uc29sZS5sb2coXCJhZGRyZXNzXCIsYWRkcmVzcylcclxuICBpZihhZGRyZXNzICE9PSBcIlwiKXsgICAgICAgICAgICAgXHJcbiAgICAgIC8vZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTH0mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAgICAgZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7YWRkcmVzc31gLHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4ge2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfTsgXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdvb2dsZU1hcCgpIHsgIFxyXG4gIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7ICBcclxuXHJcbiAgY29uc3QgeyBtYXJrZXJzIH0gPSB1c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTtcclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSBSZWFjdC51c2VTdGF0ZShcIjU1NCA3NnRoIHN0cmVldCBiYXkgcmlkZ2VcIik7IFxyXG4gIHZhciBjb29yZGluYXRlc191cmwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWA7XHJcbiAgLy92YXIgY29vcmRpbmF0ZXNfdXJsID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPTU1NCUyMDc2dGglMjBzdHJlZXQlMjBiYXklMjByaWRnZWA7XHJcbiAgY29uc3QgeyBjb29yZGluYXRlcywgZXJyb3IgfSA9IHVzZVN3cihjb29yZGluYXRlc191cmwsIGZldGNoZXIpO1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgR29vZ2xlIE1hcHMgbG5nIGxhdCAnLCBlcnJvcik7XHJcbiAgfWVsc2UgaWYgKCFjb29yZGluYXRlcyl7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0aWxsIGxvYWRpbmdcIik7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvb3JkaW5hdGVzXCIsY29vcmRpbmF0ZXMpO1xyXG4gIH0gIFxyXG4gIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgXHJcbiAgICAvLyBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGNvb3JkaW5hdGVzX3VybCwgZmV0Y2hlcik7XHJcbiAgICAvLyBpZiAoZXJyb3IpIHtcclxuICAgIC8vICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgR29vZ2xlIE1hcHMgbG5nIGxhdCAnLCBlcnJvcik7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb29yZGluYXRlcyA9IChkYXRhIHx8IFtdKS5tYXAoKHNpdGUpID0+ICh7XHJcbiAgICAvLyAgIGxhdDogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIFxyXG4gICAgLy8gICAgIGxuZzogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcsXHJcbiAgICAvLyB9KSk7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAse1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICAgICAgLy8gaGVhZGVyczoge1xyXG4gICAgICAgICAgLy8gICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgIHNldGNvb3JkaW5hdGVzID0ge2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfTsgXHJcbiAgICAgIH0pO1xyXG5cclxuICB9KTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwLWNvbnRhaW5lclwiPiAgICAgIFxyXG4gICAgICB7LyogezxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q2VudGVyKHtsYXQ6IDQwLjc0Mixsbmc6IC03My43Njl9KX0gPkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICovfVxyXG4gICAgICB7PGlucHV0IHZhbHVlPXtuZXdBZGRyZXNzfSBvbkNoYW5nZT17c2V0TmV3QWRkcmVzc30+PC9pbnB1dD59XHJcbiAgICAgIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENlbnRlcih7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fSl9PkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICAgICAgXHJcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhab1wiIH19XHJcbiAgICAgICAgLy9ib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTCB9fVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgICBvcHRpb25zPXtnZXRNYXBPcHRpb25zfVxyXG4gICAgICA+XHJcbiAgICAgICB7bWFya2Vycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxNYXBNYXJrZXJcclxuICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgLy90ZXh0PXtpdGVtLm5hbWV9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhdD17IGl0ZW0uY29vcmRpbmF0ZXMubGF0fVxyXG4gICAgICAgICAgICBsbmc9eyBpdGVtLmNvb3JkaW5hdGVzLmxuZ31cclxuICAgICAgICAgICAgb3V0cHV0X2tleSA9IHtpdGVtLm91dHB1dF9rZXl9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hbWUgPSB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAvLyBjb29yZGluYXRlcyA9IHtpdGVtLmNvb3JkaW5hdGVzfSAgICAgIFxyXG4gICAgICAgICAgICBzaXRlX2luZm89IHtpdGVtLnNpdGVfaW5mb30gICAgICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})