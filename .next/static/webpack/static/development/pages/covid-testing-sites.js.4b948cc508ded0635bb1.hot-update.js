webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  console.log(\"address\", address);\n\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return {\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      };\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setAddress = _React$useState2[1];\n\n  var coordinates_url = \"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address); //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=554%2076th%20street%20bay%20ridge`;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else if (!coordinates) {\n    console.log(\"still loading\");\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var formattedData = (data || []).map(function (site) {\n      return {\n        coordinates: {\n          lat: site.results[0].geometry.location.lat,\n          lng: site.results[0].geometry.location.lng\n        }\n      };\n    });\n  }, [formattedData, setCenter]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState2[0],\n      setCenter = _useState2[1];\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: newAddress,\n    onChange: setNewAddress,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setCenter({\n        lat: 40.742,\n        lng: -73.769\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      output_key: item.output_key,\n      name: item.name // coordinates = {item.coordinates}      \n      ,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"AgfrX7nzIcx4mSC8IBu0T1nKzPY=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsYXQiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsIkdvb2dsZU1hcCIsImZldGNoZXIiLCJyZXMiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldEFkZHJlc3MiLCJjb29yZGluYXRlc191cmwiLCJ1c2VTd3IiLCJjb29yZGluYXRlcyIsImVycm9yIiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsInNpdGUiLCJzZXRDZW50ZXIiLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsImNlbnRlciIsImtleSIsIml0ZW0iLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsU0FBT0MsdUNBQVA7QUFDRCxDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBOEI7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JGLE9BQXRCOztBQUNB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RUMsVUFBZDtBQUEwQixZQUFRLEVBQUVDLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSCxFQUdHO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUYsU0FBUyxDQUFDO0FBQUN0QixXQUFHLEVBQUUsTUFBTjtBQUFhSSxXQUFHLEVBQUUsQ0FBQztBQUFuQixPQUFELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhILEVBSUUsTUFBQyx1REFBRDtBQUNFLG9CQUFnQixFQUFFO0FBQUVzQixTQUFHLEVBQUU7QUFBUCxLQURwQixDQUVFO0FBRkY7QUFHRSxVQUFNLEVBQUVELE1BSFY7QUFJRSxlQUFXLEVBQUUsRUFKZjtBQUtFLFdBQU8sRUFBRXRDLGFBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FdUIsT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ08sSUFBRDtBQUFBLFdBQ1YsTUFBQyw4REFBRDtBQUNFLFNBQUcsRUFBRUEsSUFBSSxDQUFDRCxHQURaLENBRUU7QUFGRjtBQUdFLFNBQUcsRUFBR0MsSUFBSSxDQUFDWCxXQUFMLENBQWlCaEIsR0FIekI7QUFJRSxTQUFHLEVBQUcyQixJQUFJLENBQUNYLFdBQUwsQ0FBaUJaLEdBSnpCO0FBS0UsZ0JBQVUsRUFBSXVCLElBQUksQ0FBQ0MsVUFMckI7QUFNRSxVQUFJLEVBQUlELElBQUksQ0FBQ0UsSUFOZixDQU9FO0FBUEY7QUFRRSxlQUFTLEVBQUdGLElBQUksQ0FBQ0csU0FSbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBWixDQVBGLENBSkYsQ0FERjtBQTJCRDs7R0F2RGV6QixTO1VBT2lCVSwyQzs7O0tBUGpCVixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Hb29nbGVNYXAvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IHsgTWFwTWFya2VyIH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXInO1xyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL21hcENvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBnZXRNYXBPcHRpb25zKCkge1xyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRDZW50ZXIoeCkge1xyXG4vLyAgIGlmKHggPT09IHVuZGVmaW5lZCl7XHJcbi8vICAgICB2YXIgYWRkcmVzcyA9IFwiNTU0IDc2dGggc3RyZWV0IGJheSByaWRnZVwiO1xyXG4vLyAgICAgY29uc3QgeyBjb29yZGluYXRlcywgZXJyb3IgfSA9IHVzZVN3cihgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAsIGZldGNoZXIpO1xyXG4vLyAgICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdGhlIEdvb2dsZSBNYXBzIGxuZyBsYXQgJywgZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHtsYXQ6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfTsgICAgXHJcbi8vICAgfWVsc2VcclxuLy8gICAgIHJldHVybiB7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjaGFuZ2VDZW50ZXIoKSB7ICBcclxuLy8gICB2YXIgY29vcmRpbmF0ZXMgPSB7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fTtcclxuLy8gICByZXR1cm4gY29vcmRpbmF0ZXM7ICBcclxuLy8gfVxyXG5cclxuLy8gdmFyIGFkZHJlc3MgPSBcIlwiO1xyXG5cclxuLy8gZnVuY3Rpb24gc2V0Q29vcmRpbmF0ZXMoYWRkcmVzcyl7ICAgIFxyXG4gIC8vIGlmKGFkZHJlc3MgIT09IFwiXCIpeyAgICAgICAgICAgICBcclxuICAvLyAgICAgLy9mZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMfSZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gIC8vICAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgLy8gICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgLy8gICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgLy8gICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICAvLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gIC8vICAgICAgICAgLy8gfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKGRhdGEgPT4geyAgICAgICAgICAgXHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvb3JkaW5hdGVzOiB7bGF0OiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9fSk7ICAgICAgICAgIFxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNlbnRlcihhZGRyZXNzKXtcclxuICBjb25zb2xlLmxvZyhcImFkZHJlc3NcIixhZGRyZXNzKVxyXG4gIGlmKGFkZHJlc3MgIT09IFwiXCIpeyAgICAgICAgICAgICBcclxuICAgICAgLy9mZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMfSZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAse1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICAgICAgLy8gaGVhZGVyczoge1xyXG4gICAgICAgICAgLy8gICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7bGF0OiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9OyBcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlTWFwKCkgeyAgXHJcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTsgIFxyXG5cclxuICBjb25zdCB7IG1hcmtlcnMgfSA9IHVzZUNvbnRleHQoTWFwTWFya2Vyc0NvbnRleHQpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiNTU0IDc2dGggc3RyZWV0IGJheSByaWRnZVwiKTsgXHJcbiAgdmFyIGNvb3JkaW5hdGVzX3VybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YDtcclxuICAvL3ZhciBjb29yZGluYXRlc191cmwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9NTU0JTIwNzZ0aCUyMHN0cmVldCUyMGJheSUyMHJpZGdlYDtcclxuICBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGNvb3JkaW5hdGVzX3VybCwgZmV0Y2hlcik7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRoZSBHb29nbGUgTWFwcyBsbmcgbGF0ICcsIGVycm9yKTtcclxuICB9ZWxzZSBpZiAoIWNvb3JkaW5hdGVzKXtcclxuICAgIGNvbnNvbGUubG9nKFwic3RpbGwgbG9hZGluZ1wiKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGNvbnNvbGUubG9nKFwiY29vcmRpbmF0ZXNcIixjb29yZGluYXRlcyk7XHJcbiAgfSAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoc2l0ZSkgPT4gKHtcclxuICAgICAgY29vcmRpbmF0ZXM6IHtsYXQ6IHNpdGUucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIFxyXG4gICAgICAgIGxuZzogc2l0ZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ30sXHJcbiAgICB9KSk7XHJcbiAgICBcclxuICB9LCBbZm9ybWF0dGVkRGF0YSwgc2V0Q2VudGVyXSk7XHJcblxyXG4gIGNvbnN0IFtuZXdBZGRyZXNzLCBzZXROZXdBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZSh7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlLW1hcC1jb250YWluZXJcIj4gICAgICBcclxuICAgICAgey8qIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENlbnRlcih7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fSl9ID5DaGFuZ2UgQ2VudGVyPC9idXR0b24+fSAqL31cclxuICAgICAgezxpbnB1dCB2YWx1ZT17bmV3QWRkcmVzc30gb25DaGFuZ2U9e3NldE5ld0FkZHJlc3N9PjwvaW5wdXQ+fVxyXG4gICAgICB7PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDZW50ZXIoe2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX0pfT5DaGFuZ2UgQ2VudGVyPC9idXR0b24+fSAgICAgIFxyXG4gICAgICA8R29vZ2xlTWFwUmVhY3RcclxuICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogXCJBSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm9cIiB9fVxyXG4gICAgICAgIC8vYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkwgfX1cclxuICAgICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgICBkZWZhdWx0Wm9vbT17MTN9XHJcbiAgICAgICAgb3B0aW9ucz17Z2V0TWFwT3B0aW9uc31cclxuICAgICAgPlxyXG4gICAgICAge21hcmtlcnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8TWFwTWFya2VyXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XHJcbiAgICAgICAgICAgIC8vdGV4dD17aXRlbS5uYW1lfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYXQ9eyBpdGVtLmNvb3JkaW5hdGVzLmxhdH1cclxuICAgICAgICAgICAgbG5nPXsgaXRlbS5jb29yZGluYXRlcy5sbmd9XHJcbiAgICAgICAgICAgIG91dHB1dF9rZXkgPSB7aXRlbS5vdXRwdXRfa2V5fSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYW1lID0ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgPSB7aXRlbS5jb29yZGluYXRlc30gICAgICBcclxuICAgICAgICAgICAgc2l0ZV9pbmZvPSB7aXRlbS5zaXRlX2luZm99ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Hb29nbGVNYXBSZWFjdD4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})