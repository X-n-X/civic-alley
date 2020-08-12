webpackHotUpdate("static/development/pages/representatives.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setCoordinates({\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      });\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setAddress = _React$useState2[1];\n\n  var coordinates_url = \"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address); //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=554%2076th%20street%20bay%20ridge`;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else if (!coordinates) {\n    console.log(\"still loading\");\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState2[0],\n      setCenter = _useState2[1]; // useEffect(() => {\n  //   coordinates = {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};\n  //   return () => {\n  //     setMapMarkers([]);\n  //   }\n  // }, [coordinates, setMapMarkers]);\n\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    name: \"address\",\n    value: \"change\",\n    onChange: changeCenter(address),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      output_key: item.output_key,\n      name: item.name // coordinates = {item.coordinates}      \n      ,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"bv0H+kp3ep3JNmG8Pf38WOpb+is=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImZldGNoIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldENvb3JkaW5hdGVzIiwibGF0IiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsbmciLCJHb29nbGVNYXAiLCJmZXRjaGVyIiwicmVzIiwidXNlQ29udGV4dCIsIk1hcE1hcmtlcnNDb250ZXh0IiwibWFya2VycyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRBZGRyZXNzIiwiY29vcmRpbmF0ZXNfdXJsIiwidXNlU3dyIiwiY29vcmRpbmF0ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsImNlbnRlciIsInNldENlbnRlciIsImtleSIsIm1hcCIsIml0ZW0iLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsU0FBT0MsdUNBQVA7QUFDRCxDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBOEI7QUFDNUIsTUFBR0EsT0FBTyxLQUFLLEVBQWYsRUFBa0I7QUFDZDtBQUNBQyxTQUFLLGlIQUEwR0QsT0FBMUcsR0FBb0g7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RSxJQUFJLENBQUNWLFdBQUwsQ0FBaUJoQixHQUh6QjtBQUlFLFNBQUcsRUFBRzBCLElBQUksQ0FBQ1YsV0FBTCxDQUFpQlosR0FKekI7QUFLRSxnQkFBVSxFQUFJc0IsSUFBSSxDQUFDQyxVQUxyQjtBQU1FLFVBQUksRUFBSUQsSUFBSSxDQUFDRSxJQU5mLENBT0U7QUFQRjtBQVFFLGVBQVMsRUFBR0YsSUFBSSxDQUFDRyxTQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFaLENBUEYsQ0FMRixDQURGO0FBNEJEOztHQXZEZXhCLFM7VUFPaUJVLDJDOzs7S0FQakJWLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXIgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcic7XHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vbWFwQ29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGdldE1hcE9wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldENlbnRlcih4KSB7XHJcbi8vICAgaWYoeCA9PT0gdW5kZWZpbmVkKXtcclxuLy8gICAgIHZhciBhZGRyZXNzID0gXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCI7XHJcbi8vICAgICBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YCwgZmV0Y2hlcik7XHJcbi8vICAgICBpZiAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgR29vZ2xlIE1hcHMgbG5nIGxhdCAnLCBlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4ge2xhdDogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9OyAgICBcclxuLy8gICB9ZWxzZVxyXG4vLyAgICAgcmV0dXJuIHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZUNlbnRlcigpIHsgIFxyXG4vLyAgIHZhciBjb29yZGluYXRlcyA9IHtsYXQ6IDQwLjc0Mixsbmc6IC03My43Njl9O1xyXG4vLyAgIHJldHVybiBjb29yZGluYXRlczsgIFxyXG4vLyB9XHJcblxyXG4vLyB2YXIgYWRkcmVzcyA9IFwiXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBzZXRDb29yZGluYXRlcyhhZGRyZXNzKXsgICAgXHJcbiAgLy8gaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gIC8vICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgLy8gICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAvLyAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAvLyAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAvLyAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgLy8gICAgICAgICAvLyB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgY29vcmRpbmF0ZXM6IHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ319KTsgICAgICAgICAgXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2VudGVyKGFkZHJlc3Mpe1xyXG4gIGlmKGFkZHJlc3MgIT09IFwiXCIpeyAgICAgICAgICAgICBcclxuICAgICAgLy9mZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMfSZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAse1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICAgICAgLy8gaGVhZGVyczoge1xyXG4gICAgICAgICAgLy8gICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgIHNldENvb3JkaW5hdGVzKHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ30pOyBcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlTWFwKCkgeyAgXHJcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTsgIFxyXG5cclxuICBjb25zdCB7IG1hcmtlcnMgfSA9IHVzZUNvbnRleHQoTWFwTWFya2Vyc0NvbnRleHQpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKFwiNTU0IDc2dGggc3RyZWV0IGJheSByaWRnZVwiKTsgXHJcbiAgdmFyIGNvb3JkaW5hdGVzX3VybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YDtcclxuICAvL3ZhciBjb29yZGluYXRlc191cmwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9NTU0JTIwNzZ0aCUyMHN0cmVldCUyMGJheSUyMHJpZGdlYDtcclxuICBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGNvb3JkaW5hdGVzX3VybCwgZmV0Y2hlcik7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRoZSBHb29nbGUgTWFwcyBsbmcgbGF0ICcsIGVycm9yKTtcclxuICB9ZWxzZSBpZiAoIWNvb3JkaW5hdGVzKXtcclxuICAgIGNvbnNvbGUubG9nKFwic3RpbGwgbG9hZGluZ1wiKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGNvbnNvbGUubG9nKFwiY29vcmRpbmF0ZXNcIixjb29yZGluYXRlcyk7XHJcbiAgfSAgXHJcblxyXG4gIGNvbnN0IFtuZXdBZGRyZXNzLCBzZXROZXdBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZSh7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9KTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvb3JkaW5hdGVzID0ge2xhdDogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9O1xyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuICAvLyAgICAgc2V0TWFwTWFya2VycyhbXSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW2Nvb3JkaW5hdGVzLCBzZXRNYXBNYXJrZXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXAtY29udGFpbmVyXCI+ICAgICAgXHJcbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENlbnRlcih7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fSl9ID5DaGFuZ2UgQ2VudGVyPC9idXR0b24+ICovfVxyXG4gICAgICB7LyogPGlucHV0IHZhbHVlPXtuZXdBZGRyZXNzfSBvbkNoYW5nZT17c2V0TmV3QWRkcmVzc30+PC9pbnB1dD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDZW50ZXIoe2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX0pfT5DaGFuZ2UgQ2VudGVyPC9idXR0b24+ICovfVxyXG4gICAgICA8YnV0dG9uIG5hbWUgPVwiYWRkcmVzc1wiIHZhbHVlID0gXCJjaGFuZ2VcIiBvbkNoYW5nZT17Y2hhbmdlQ2VudGVyKGFkZHJlc3MpfT48L2J1dHRvbj5cclxuICAgICAgPEdvb2dsZU1hcFJlYWN0XHJcbiAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IFwiQUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvXCIgfX1cclxuICAgICAgICAvL2Jvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMIH19XHJcbiAgICAgICAgY2VudGVyPXtjZW50ZXJ9XHJcbiAgICAgICAgZGVmYXVsdFpvb209ezEzfVxyXG4gICAgICAgIG9wdGlvbnM9e2dldE1hcE9wdGlvbnN9XHJcbiAgICAgID5cclxuICAgICAgIHttYXJrZXJzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPE1hcE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAvL3RleHQ9e2l0ZW0ubmFtZX0gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGF0PXsgaXRlbS5jb29yZGluYXRlcy5sYXR9XHJcbiAgICAgICAgICAgIGxuZz17IGl0ZW0uY29vcmRpbmF0ZXMubG5nfVxyXG4gICAgICAgICAgICBvdXRwdXRfa2V5ID0ge2l0ZW0ub3V0cHV0X2tleX0gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmFtZSA9IHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIC8vIGNvb3JkaW5hdGVzID0ge2l0ZW0uY29vcmRpbmF0ZXN9ICAgICAgXHJcbiAgICAgICAgICAgIHNpdGVfaW5mbz0ge2l0ZW0uc2l0ZV9pbmZvfSAgICAgICAgICAgICBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+ICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})