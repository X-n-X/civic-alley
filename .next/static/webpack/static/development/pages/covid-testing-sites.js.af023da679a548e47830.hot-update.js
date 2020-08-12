webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  console.log(\"address\", address);\n\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return {\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      };\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setAddress = _React$useState2[1];\n\n  var coordinates_url = \"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address); //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=554%2076th%20street%20bay%20ridge`;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else if (!coordinates) {\n    console.log(\"still loading\");\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        coordinates: {\n          lat: site.results[0].geometry.location.lat,\n          lng: site.results[0].geometry.location.lng\n        }\n      };\n    });\n    return function () {\n      setCenter([]);\n    };\n  }, [coordinates, setCenter]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState2[0],\n      setCenter = _useState2[1];\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: newAddress,\n    onChange: setNewAddress,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setCenter({\n        lat: 40.742,\n        lng: -73.769\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      output_key: item.output_key,\n      name: item.name // coordinates = {item.coordinates}      \n      ,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"AgfrX7nzIcx4mSC8IBu0T1nKzPY=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsYXQiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsIkdvb2dsZU1hcCIsImZldGNoZXIiLCJyZXMiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldEFkZHJlc3MiLCJjb29yZGluYXRlc191cmwiLCJ1c2VTd3IiLCJjb29yZGluYXRlcyIsImVycm9yIiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsInNpdGUiLCJzZXRDZW50ZXIiLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsImNlbnRlciIsImtleSIsIml0ZW0iLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsU0FBT0MsdUNBQVA7QUFDRCxDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBOEI7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JGLE9BQXRCOztBQUNBLE1BQUdBLE9BQU8sS0FBSyxFQUFmLEVBQWtCO0FBQ2Q7QUFDQUcsU0FBSyxpSEFBMEdILE9BQTFHLEdBQW9IO0FBQ3JISSxZQUFNLEVBQUUsS0FENkc7QUFFckhDLGNBQVEsRUFBRSxNQUYyRyxDQUdySDtBQUNBO0FBQ0E7O0FBTHFILEtBQXBILENBQUwsQ0FPQ0MsSUFQRCxDQU9NLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBUGQsRUFRQ0YsSUFSRCxDQVFNLFVBQUFHLElBQUksRUFBSTtBQUNaLGFBQU87QUFBQ0MsV0FBRyxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxRQUFoQixDQUF5QkMsUUFBekIsQ0FBa0NILEdBQXhDO0FBQTZDSSxXQUFHLEVBQUVMLElBQUksQ0FBQ0UsT0FBTCxDQUFhLENBQWIsRUFBZ0JDLFFBQWhCLENBQXlCQyxRQUF6QixDQUFrQ0M7QUFBcEYsT0FBUDtBQUNELEtBVkQ7QUFXSDtBQUNGOztBQUVNLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDMUIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFhYixLQUFLLE1BQUwsb0JBQWVHLElBQWYsQ0FBb0IsVUFBQVcsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ1QsSUFBSixFQUFKO0FBQUEsS0FBdkIsQ0FBYjtBQUFBLEdBQWhCOztBQUQwQixvQkFHTlUsd0RBQVUsQ0FBQ0MsOEVBQUQsQ0FISjtBQUFBLE1BR2xCQyxPQUhrQixlQUdsQkEsT0FIa0I7O0FBQUEsd0JBSUlDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSwyQkFBZixDQUpKO0FBQUE7QUFBQSxNQUluQnRCLE9BSm1CO0FBQUEsTUFJVnVCLFVBSlU7O0FBSzFCLE1BQUlDLGVBQWUsbUhBQTRHeEIsT0FBNUcsQ0FBbkIsQ0FMMEIsQ0FNMUI7O0FBTjBCLGdCQU9LeUIsbURBQU0sQ0FBQ0QsZUFBRCxFQUFrQlIsT0FBbEIsQ0FQWDtBQUFBLE1BT2xCVSxXQVBrQixXQU9sQkEsV0FQa0I7QUFBQSxNQU9MQyxLQVBLLFdBT0xBLEtBUEs7O0FBUTFCLE1BQUlBLEtBQUosRUFBVztBQUNUMUIsV0FBTyxDQUFDMEIsS0FBUixDQUFjLHdDQUFkLEVBQXdEQSxLQUF4RDtBQUNELEdBRkQsTUFFTSxJQUFJLENBQUNELFdBQUwsRUFBaUI7QUFDckJ6QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0QsR0FGSyxNQUdGO0FBQ0ZELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMEJ3QixXQUExQjtBQUNEOztBQUVERSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxhQUFhLEdBQUcsQ0FBQ3BCLElBQUksSUFBSSxFQUFULEVBQWFxQixHQUFiLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxhQUFXO0FBQ2hETCxtQkFBVyxFQUFFO0FBQUNoQixhQUFHLEVBQUVxQixJQUFJLENBQUNwQixPQUFMLENBQWEsQ0FBYixFQUFnQkMsUUFBaEIsQ0FBeUJDLFFBQXpCLENBQWtDSCxHQUF4QztBQUNYSSxhQUFHLEVBQUVpQixJQUFJLENBQUNwQixPQUFMLENBQWEsQ0FBYixFQUFnQkMsUUFBaEIsQ0FBeUJDLFFBQXpCLENBQWtDQztBQUQ1QjtBQURtQyxPQUFYO0FBQUEsS0FBakIsQ0FBdEI7QUFJQSxXQUFPLFlBQU07QUFDWGtCLGVBQVMsQ0FBQyxFQUFELENBQVQ7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNOLFdBQUQsRUFBY00sU0FBZCxDQVJNLENBQVQ7O0FBakIwQixrQkEyQlVWLHNEQUFRLENBQUMsRUFBRCxDQTNCbEI7QUFBQSxNQTJCbkJXLFVBM0JtQjtBQUFBLE1BMkJQQyxhQTNCTzs7QUFBQSxtQkE0QkVaLHNEQUFRLENBQUM7QUFBQ1osT0FBRyxFQUFFLE1BQU47QUFBYUksT0FBRyxFQUFFLENBQUM7QUFBbkIsR0FBRCxDQTVCVjtBQUFBLE1BNEJuQnFCLE1BNUJtQjtBQUFBLE1BNEJYSCxTQTVCVzs7QUE4QjFCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHO0FBQU8sU0FBSyxFQUFFQyxVQUFkO0FBQTBCLFlBQVEsRUFBRUMsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZILEVBR0c7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNRixTQUFTLENBQUM7QUFBQ3RCLFdBQUcsRUFBRSxNQUFOO0FBQWFJLFdBQUcsRUFBRSxDQUFDO0FBQW5CLE9BQUQsQ0FBZjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEgsRUFJRSxNQUFDLHVEQUFEO0FBQ0Usb0JBQWdCLEVBQUU7QUFBRXNCLFNBQUcsRUFBRTtBQUFQLEtBRHBCLENBRUU7QUFGRjtBQUdFLFVBQU0sRUFBRUQsTUFIVjtBQUlFLGVBQVcsRUFBRSxFQUpmO0FBS0UsV0FBTyxFQUFFdEMsYUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0V1QixPQUFPLENBQUNVLEdBQVIsQ0FBWSxVQUFDTyxJQUFEO0FBQUEsV0FDVixNQUFDLDhEQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNELEdBRFosQ0FFRTtBQUZGO0FBR0UsU0FBRyxFQUFHQyxJQUFJLENBQUNYLFdBQUwsQ0FBaUJoQixHQUh6QjtBQUlFLFNBQUcsRUFBRzJCLElBQUksQ0FBQ1gsV0FBTCxDQUFpQlosR0FKekI7QUFLRSxnQkFBVSxFQUFJdUIsSUFBSSxDQUFDQyxVQUxyQjtBQU1FLFVBQUksRUFBSUQsSUFBSSxDQUFDRSxJQU5mLENBT0U7QUFQRjtBQVFFLGVBQVMsRUFBR0YsSUFBSSxDQUFDRyxTQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFaLENBUEYsQ0FKRixDQURGO0FBMkJEOztHQXpEZXpCLFM7VUFPaUJVLDJDOzs7S0FQakJWLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXIgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcic7XHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vbWFwQ29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGdldE1hcE9wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldENlbnRlcih4KSB7XHJcbi8vICAgaWYoeCA9PT0gdW5kZWZpbmVkKXtcclxuLy8gICAgIHZhciBhZGRyZXNzID0gXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCI7XHJcbi8vICAgICBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YCwgZmV0Y2hlcik7XHJcbi8vICAgICBpZiAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgR29vZ2xlIE1hcHMgbG5nIGxhdCAnLCBlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4ge2xhdDogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9OyAgICBcclxuLy8gICB9ZWxzZVxyXG4vLyAgICAgcmV0dXJuIHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZUNlbnRlcigpIHsgIFxyXG4vLyAgIHZhciBjb29yZGluYXRlcyA9IHtsYXQ6IDQwLjc0Mixsbmc6IC03My43Njl9O1xyXG4vLyAgIHJldHVybiBjb29yZGluYXRlczsgIFxyXG4vLyB9XHJcblxyXG4vLyB2YXIgYWRkcmVzcyA9IFwiXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBzZXRDb29yZGluYXRlcyhhZGRyZXNzKXsgICAgXHJcbiAgLy8gaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gIC8vICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgLy8gICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAvLyAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAvLyAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAvLyAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgLy8gICAgICAgICAvLyB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgY29vcmRpbmF0ZXM6IHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ319KTsgICAgICAgICAgXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2VudGVyKGFkZHJlc3Mpe1xyXG4gIGNvbnNvbGUubG9nKFwiYWRkcmVzc1wiLGFkZHJlc3MpXHJcbiAgaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YCx7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAvLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ307IFxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHb29nbGVNYXAoKSB7ICBcclxuICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpOyAgXHJcblxyXG4gIGNvbnN0IHsgbWFya2VycyB9ID0gdXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCIpOyBcclxuICB2YXIgY29vcmRpbmF0ZXNfdXJsID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7YWRkcmVzc31gO1xyXG4gIC8vdmFyIGNvb3JkaW5hdGVzX3VybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz01NTQlMjA3NnRoJTIwc3RyZWV0JTIwYmF5JTIwcmlkZ2VgO1xyXG4gIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGVycm9yIH0gPSB1c2VTd3IoY29vcmRpbmF0ZXNfdXJsLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdGhlIEdvb2dsZSBNYXBzIGxuZyBsYXQgJywgZXJyb3IpO1xyXG4gIH1lbHNlIGlmICghY29vcmRpbmF0ZXMpe1xyXG4gICAgY29uc29sZS5sb2coXCJzdGlsbCBsb2FkaW5nXCIpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgY29uc29sZS5sb2coXCJjb29yZGluYXRlc1wiLGNvb3JkaW5hdGVzKTtcclxuICB9ICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChzaXRlKSA9PiAoe1xyXG4gICAgICBjb29yZGluYXRlczoge2xhdDogc2l0ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgXHJcbiAgICAgICAgbG5nOiBzaXRlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfSxcclxuICAgIH0pKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldENlbnRlcihbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2Nvb3JkaW5hdGVzLCBzZXRDZW50ZXJdKTtcclxuXHJcbiAgY29uc3QgW25ld0FkZHJlc3MsIHNldE5ld0FkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NlbnRlciwgc2V0Q2VudGVyXSA9IHVzZVN0YXRlKHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwLWNvbnRhaW5lclwiPiAgICAgIFxyXG4gICAgICB7LyogezxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q2VudGVyKHtsYXQ6IDQwLjc0Mixsbmc6IC03My43Njl9KX0gPkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICovfVxyXG4gICAgICB7PGlucHV0IHZhbHVlPXtuZXdBZGRyZXNzfSBvbkNoYW5nZT17c2V0TmV3QWRkcmVzc30+PC9pbnB1dD59XHJcbiAgICAgIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENlbnRlcih7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fSl9PkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICAgICAgXHJcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhab1wiIH19XHJcbiAgICAgICAgLy9ib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTCB9fVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgICBvcHRpb25zPXtnZXRNYXBPcHRpb25zfVxyXG4gICAgICA+XHJcbiAgICAgICB7bWFya2Vycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxNYXBNYXJrZXJcclxuICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgLy90ZXh0PXtpdGVtLm5hbWV9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhdD17IGl0ZW0uY29vcmRpbmF0ZXMubGF0fVxyXG4gICAgICAgICAgICBsbmc9eyBpdGVtLmNvb3JkaW5hdGVzLmxuZ31cclxuICAgICAgICAgICAgb3V0cHV0X2tleSA9IHtpdGVtLm91dHB1dF9rZXl9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hbWUgPSB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAvLyBjb29yZGluYXRlcyA9IHtpdGVtLmNvb3JkaW5hdGVzfSAgICAgIFxyXG4gICAgICAgICAgICBzaXRlX2luZm89IHtpdGVtLnNpdGVfaW5mb30gICAgICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})