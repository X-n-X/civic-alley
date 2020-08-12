webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  console.log(\"address\", address);\n\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return {\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      };\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setAddress = _React$useState2[1];\n\n  var coordinates_url = \"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address); //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=554%2076th%20street%20bay%20ridge`;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else if (!coordinates) {\n    console.log(\"still loading\");\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState2[0],\n      setCenter = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // const { coordinates, error } = useSwr(coordinates_url, fetcher);\n    // if (error) {\n    //   console.error('Error loading the Google Maps lng lat ', error);\n    // }\n    // coordinates = (data || []).map((site) => ({\n    //   lat: coordinates.results[0].geometry.location.lat, \n    //     lng: coordinates.results[0].geometry.location.lng,\n    // }));\n    if (newAddress !== \"\") {\n      fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(newAddress), {\n        method: \"GET\",\n        dataType: \"JSON\" // headers: {\n        //   \"Content-Type\": \"application/json; charset=utf-8\",\n        // }\n\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        setCenter({\n          lat: data.results[0].geometry.location.lat,\n          lng: data.results[0].geometry.location.lng\n        });\n      });\n    }\n  });\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    id: \"address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setNewAddress(document.getElementById('address').value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      output_key: item.output_key,\n      name: item.name // coordinates = {item.coordinates}      \n      ,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"bvzA6Q9bF4aSCfrTa5ctd0pgPS0=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsYXQiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsIkdvb2dsZU1hcCIsImZldGNoZXIiLCJyZXMiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldEFkZHJlc3MiLCJjb29yZGluYXRlc191cmwiLCJ1c2VTd3IiLCJjb29yZGluYXRlcyIsImVycm9yIiwibmV3QWRkcmVzcyIsInNldE5ld0FkZHJlc3MiLCJjZW50ZXIiLCJzZXRDZW50ZXIiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJrZXkiLCJtYXAiLCJpdGVtIiwib3V0cHV0X2tleSIsIm5hbWUiLCJzaXRlX2luZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLFNBQU9DLHVDQUFQO0FBQ0QsQyxDQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7OztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQThCO0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXNC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SkYsQ0FERjtBQTJCRDs7R0EzRWUxQixTO1VBT2lCVSwyQzs7O0tBUGpCVixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Hb29nbGVNYXAvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IHsgTWFwTWFya2VyIH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXInO1xyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL21hcENvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBnZXRNYXBPcHRpb25zKCkge1xyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRDZW50ZXIoeCkge1xyXG4vLyAgIGlmKHggPT09IHVuZGVmaW5lZCl7XHJcbi8vICAgICB2YXIgYWRkcmVzcyA9IFwiNTU0IDc2dGggc3RyZWV0IGJheSByaWRnZVwiO1xyXG4vLyAgICAgY29uc3QgeyBjb29yZGluYXRlcywgZXJyb3IgfSA9IHVzZVN3cihgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAsIGZldGNoZXIpO1xyXG4vLyAgICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdGhlIEdvb2dsZSBNYXBzIGxuZyBsYXQgJywgZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHtsYXQ6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfTsgICAgXHJcbi8vICAgfWVsc2VcclxuLy8gICAgIHJldHVybiB7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjaGFuZ2VDZW50ZXIoKSB7ICBcclxuLy8gICB2YXIgY29vcmRpbmF0ZXMgPSB7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fTtcclxuLy8gICByZXR1cm4gY29vcmRpbmF0ZXM7ICBcclxuLy8gfVxyXG5cclxuLy8gdmFyIGFkZHJlc3MgPSBcIlwiO1xyXG5cclxuLy8gZnVuY3Rpb24gc2V0Q29vcmRpbmF0ZXMoYWRkcmVzcyl7ICAgIFxyXG4gIC8vIGlmKGFkZHJlc3MgIT09IFwiXCIpeyAgICAgICAgICAgICBcclxuICAvLyAgICAgLy9mZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMfSZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gIC8vICAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgLy8gICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgLy8gICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgLy8gICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICAvLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gIC8vICAgICAgICAgLy8gfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKGRhdGEgPT4geyAgICAgICAgICAgXHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvb3JkaW5hdGVzOiB7bGF0OiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9fSk7ICAgICAgICAgIFxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNlbnRlcihhZGRyZXNzKXtcclxuICBjb25zb2xlLmxvZyhcImFkZHJlc3NcIixhZGRyZXNzKVxyXG4gIGlmKGFkZHJlc3MgIT09IFwiXCIpeyAgICAgICAgICAgICBcclxuICAgICAgLy9mZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMfSZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAse1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICAgICAgLy8gaGVhZGVyczoge1xyXG4gICAgICAgICAgLy8gICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7bGF0OiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9OyBcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlTWFwKCkgeyAgXHJcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTsgIFxyXG5cclxuICBjb25zdCB7IG1hcmtlcnMgfSA9IHVzZUNvbnRleHQoTWFwTWFya2Vyc0NvbnRleHQpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiNTU0IDc2dGggc3RyZWV0IGJheSByaWRnZVwiKTsgXHJcbiAgdmFyIGNvb3JkaW5hdGVzX3VybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YDtcclxuICAvL3ZhciBjb29yZGluYXRlc191cmwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9NTU0JTIwNzZ0aCUyMHN0cmVldCUyMGJheSUyMHJpZGdlYDtcclxuICBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGNvb3JkaW5hdGVzX3VybCwgZmV0Y2hlcik7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRoZSBHb29nbGUgTWFwcyBsbmcgbGF0ICcsIGVycm9yKTtcclxuICB9ZWxzZSBpZiAoIWNvb3JkaW5hdGVzKXtcclxuICAgIGNvbnNvbGUubG9nKFwic3RpbGwgbG9hZGluZ1wiKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGNvbnNvbGUubG9nKFwiY29vcmRpbmF0ZXNcIixjb29yZGluYXRlcyk7XHJcbiAgfSAgXHJcblxyXG4gIFxyXG4gIGNvbnN0IFtuZXdBZGRyZXNzLCBzZXROZXdBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZSh7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9KTtcclxuXHJcbiAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7ICAgICAgICBcclxuICAgIC8vIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGVycm9yIH0gPSB1c2VTd3IoY29vcmRpbmF0ZXNfdXJsLCBmZXRjaGVyKTtcclxuICAgIC8vIGlmIChlcnJvcikge1xyXG4gICAgLy8gICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRoZSBHb29nbGUgTWFwcyBsbmcgbGF0ICcsIGVycm9yKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGNvb3JkaW5hdGVzID0gKGRhdGEgfHwgW10pLm1hcCgoc2l0ZSkgPT4gKHtcclxuICAgIC8vICAgbGF0OiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgXHJcbiAgICAvLyAgICAgbG5nOiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyxcclxuICAgIC8vIH0pKTtcclxuICAgIGlmKG5ld0FkZHJlc3MgIT09IFwiXCIpe1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7bmV3QWRkcmVzc31gLHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICBzZXRDZW50ZXIoe2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfSk7IFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXAtY29udGFpbmVyXCI+ICAgICAgXHJcbiAgICAgIHsvKiB7PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDZW50ZXIoe2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX0pfSA+Q2hhbmdlIENlbnRlcjwvYnV0dG9uPn0gKi99XHJcbiAgICAgIHs8aW5wdXQgaWQ9XCJhZGRyZXNzXCI+PC9pbnB1dD59XHJcbiAgICAgIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld0FkZHJlc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MnKS52YWx1ZSl9PkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICAgICAgXHJcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhab1wiIH19XHJcbiAgICAgICAgLy9ib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTCB9fVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgICBvcHRpb25zPXtnZXRNYXBPcHRpb25zfVxyXG4gICAgICA+XHJcbiAgICAgICB7bWFya2Vycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxNYXBNYXJrZXJcclxuICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgLy90ZXh0PXtpdGVtLm5hbWV9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhdD17IGl0ZW0uY29vcmRpbmF0ZXMubGF0fVxyXG4gICAgICAgICAgICBsbmc9eyBpdGVtLmNvb3JkaW5hdGVzLmxuZ31cclxuICAgICAgICAgICAgb3V0cHV0X2tleSA9IHtpdGVtLm91dHB1dF9rZXl9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hbWUgPSB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAvLyBjb29yZGluYXRlcyA9IHtpdGVtLmNvb3JkaW5hdGVzfSAgICAgIFxyXG4gICAgICAgICAgICBzaXRlX2luZm89IHtpdGVtLnNpdGVfaW5mb30gICAgICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})