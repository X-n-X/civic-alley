webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCoordinates({\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      });\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setAddress = _React$useState2[1]; //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`;\n  //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=554%2076th%20street%20bay%20ridge`;\n\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else if (!coordinates) {\n    console.log(\"still loading\");\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState[0],\n      setCenter = _useState[1]; // useEffect(() => {\n  //   coordinates = {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};\n  //   return () => {\n  //     setMapMarkers([]);\n  //   }\n  // }, [coordinates, setMapMarkers]);\n\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return setCenter({\n        lat: 40.742,\n        lng: -73.769\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"FaHZ9D/EBEFdCIUCwUksKxuyoNI=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImZldGNoIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldENvb3JkaW5hdGVzIiwibGF0IiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsbmciLCJHb29nbGVNYXAiLCJmZXRjaGVyIiwicmVzIiwidXNlQ29udGV4dCIsIk1hcE1hcmtlcnNDb250ZXh0IiwibWFya2VycyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRBZGRyZXNzIiwidXNlU3dyIiwiY29vcmRpbmF0ZXNfdXJsIiwiY29vcmRpbmF0ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjZW50ZXIiLCJzZXRDZW50ZXIiLCJrZXkiLCJtYXAiLCJpdGVtIiwic2l0ZV9pbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixTQUFPQyx1Q0FBUDtBQUNELEMsQ0FHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGOzs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxPQUF0QixFQUE4QjtBQUM1QixNQUFHQSxPQUFPLEtBQUssRUFBZixFQUFrQjtBQUNkO0FBQ0FDLFNBQUssaUhBQTBHRCxPQUExRyxHQUFvSDtBQUNySEUsWUFBTSxFQUFFLEtBRDZHO0FBRXJIQyxjQUFRLEVBQUUsTUFGMkcsQ0FH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QUFBO0FBQUEsTUFEVTtBQUFBLEdBQVosQ0FQRixDQUpGLENBREY7QUF3QkQ7O0dBbERlcEIsUztVQU9pQlMsMkM7OztLQVBqQlQsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR29vZ2xlTWFwL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJztcclxuXHJcbmltcG9ydCB7IE1hcE1hcmtlciB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2VyJztcclxuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9tYXBDb25maWcnO1xyXG5cclxuZnVuY3Rpb24gZ2V0TWFwT3B0aW9ucygpIHtcclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0Q2VudGVyKHgpIHtcclxuLy8gICBpZih4ID09PSB1bmRlZmluZWQpe1xyXG4vLyAgICAgdmFyIGFkZHJlc3MgPSBcIjU1NCA3NnRoIHN0cmVldCBiYXkgcmlkZ2VcIjtcclxuLy8gICAgIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGVycm9yIH0gPSB1c2VTd3IoYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7YWRkcmVzc31gLCBmZXRjaGVyKTtcclxuLy8gICAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRoZSBHb29nbGUgTWFwcyBsbmcgbGF0ICcsIGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiB7bGF0OiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ307ICAgIFxyXG4vLyAgIH1lbHNlXHJcbi8vICAgICByZXR1cm4ge2xhdDogNDAuNjM1LGxuZzogLTczLjk0fTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY2hhbmdlQ2VudGVyKCkgeyAgXHJcbi8vICAgdmFyIGNvb3JkaW5hdGVzID0ge2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX07XHJcbi8vICAgcmV0dXJuIGNvb3JkaW5hdGVzOyAgXHJcbi8vIH1cclxuXHJcbi8vIHZhciBhZGRyZXNzID0gXCJcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIHNldENvb3JkaW5hdGVzKGFkZHJlc3MpeyAgICBcclxuICAvLyBpZihhZGRyZXNzICE9PSBcIlwiKXsgICAgICAgICAgICAgXHJcbiAgLy8gICAgIC8vZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTH0mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAvLyAgICAgZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gIC8vICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIC8vICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gIC8vICAgICAgICAgLy8gaGVhZGVyczoge1xyXG4gIC8vICAgICAgICAgLy8gICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAvLyAgICAgICAgIC8vIH1cclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC8vICAgICAudGhlbihkYXRhID0+IHsgICAgICAgICAgIFxyXG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb29yZGluYXRlczoge2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfX0pOyAgICAgICAgICBcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDZW50ZXIoYWRkcmVzcyl7XHJcbiAgaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YCx7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAvLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXMoe2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfSk7IFxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHb29nbGVNYXAoKSB7ICBcclxuICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpOyAgXHJcblxyXG4gIGNvbnN0IHsgbWFya2VycyB9ID0gdXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCIpOyBcclxuICAvL3ZhciBjb29yZGluYXRlc191cmwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWA7XHJcbiAgLy92YXIgY29vcmRpbmF0ZXNfdXJsID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPTU1NCUyMDc2dGglMjBzdHJlZXQlMjBiYXklMjByaWRnZWA7XHJcbiAgY29uc3QgeyBjb29yZGluYXRlcywgZXJyb3IgfSA9IHVzZVN3cihjb29yZGluYXRlc191cmwsIGZldGNoZXIpO1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgR29vZ2xlIE1hcHMgbG5nIGxhdCAnLCBlcnJvcik7XHJcbiAgfWVsc2UgaWYgKCFjb29yZGluYXRlcyl7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0aWxsIGxvYWRpbmdcIik7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvb3JkaW5hdGVzXCIsY29vcmRpbmF0ZXMpO1xyXG4gIH0gIFxyXG5cclxuICBjb25zdCBbY2VudGVyLCBzZXRDZW50ZXJdID0gdXNlU3RhdGUoe2xhdDogNDAuNjM1LGxuZzogLTczLjk0fSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb29yZGluYXRlcyA9IHtsYXQ6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfTtcclxuICAvLyAgIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAgIHNldE1hcE1hcmtlcnMoW10pO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtjb29yZGluYXRlcywgc2V0TWFwTWFya2Vyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwLWNvbnRhaW5lclwiPiAgICAgIFxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENlbnRlcih7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fSl9ID5DaGFuZ2UgQ2VudGVyPC9idXR0b24+XHJcbiAgICBcclxuICAgICAgey8qIDxidXR0b24gbmFtZSA9XCJhZGRyZXNzXCIgdmFsdWUgPSBcImNoYW5nZVwiIG9uQ2hhbmdlPXtzZXRDZW50ZXIoe2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX0pfT48L2J1dHRvbj4gKi99XHJcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhab1wiIH19XHJcbiAgICAgICAgLy9ib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTCB9fVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgICBvcHRpb25zPXtnZXRNYXBPcHRpb25zfVxyXG4gICAgICA+XHJcbiAgICAgICB7bWFya2Vycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxNYXBNYXJrZXJcclxuICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgLy90ZXh0PXtpdGVtLm5hbWV9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhdD17IGl0ZW0uY29vcmRpbmF0ZXMubGF0fVxyXG4gICAgICAgICAgICBsbmc9eyBpdGVtLmNvb3JkaW5hdGVzLmxuZ31cclxuICAgICAgICAgICAgc2l0ZV9pbmZvPSB7aXRlbS5zaXRlX2luZm99ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Hb29nbGVNYXBSZWFjdD4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})