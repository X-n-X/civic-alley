webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  console.log(\"address\", address);\n\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return {\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      };\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setAddress = _React$useState2[1];\n\n  var coordinates_url = \"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address); //var coordinates_url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=554%2076th%20street%20bay%20ridge`;\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else if (!coordinates) {\n    console.log(\"still loading\");\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState2[0],\n      setCenter = _useState2[1]; // useEffect(() => {\n  //   coordinates = {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};\n  //   return () => {\n  //     setMapMarkers([]);\n  //   }\n  // }, [coordinates, setMapMarkers]);\n\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    value: newAddress,\n    onChange: setNewAddress,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setCenter({\n        lat: 40.742,\n        lng: -73.769\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      output_key: item.output_key,\n      name: item.name // coordinates = {item.coordinates}      \n      ,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"bv0H+kp3ep3JNmG8Pf38WOpb+is=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsYXQiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsIkdvb2dsZU1hcCIsImZldGNoZXIiLCJyZXMiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldEFkZHJlc3MiLCJjb29yZGluYXRlc191cmwiLCJ1c2VTd3IiLCJjb29yZGluYXRlcyIsImVycm9yIiwibmV3QWRkcmVzcyIsInNldE5ld0FkZHJlc3MiLCJjZW50ZXIiLCJzZXRDZW50ZXIiLCJrZXkiLCJtYXAiLCJpdGVtIiwib3V0cHV0X2tleSIsIm5hbWUiLCJzaXRlX2luZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLFNBQU9DLHVDQUFQO0FBQ0QsQyxDQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7OztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQThCO0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCRixPQUF0Qjs7QUFDQSxNQUFHQSxPQUFPLEtBQUssRUFBZixFQUFrQjtBQUNkO0FB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QUFBO0FBQUE7QUFBQTtBQUFBLEtBT0V1QixPQUFPLENBQUNhLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsV0FDVixNQUFDLDhEQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNGLEdBRFosQ0FFRTtBQUZGO0FBR0UsU0FBRyxFQUFHRSxJQUFJLENBQUNSLFdBQUwsQ0FBaUJoQixHQUh6QjtBQUlFLFNBQUcsRUFBR3dCLElBQUksQ0FBQ1IsV0FBTCxDQUFpQlosR0FKekI7QUFLRSxnQkFBVSxFQUFJb0IsSUFBSSxDQUFDQyxVQUxyQjtBQU1FLFVBQUksRUFBSUQsSUFBSSxDQUFDRSxJQU5mLENBT0U7QUFQRjtBQVFFLGVBQVMsRUFBR0YsSUFBSSxDQUFDRyxTQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFaLENBUEYsQ0FKRixDQURGO0FBMkJEOztHQXREZXRCLFM7VUFPaUJVLDJDOzs7S0FQakJWLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXIgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcic7XHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vbWFwQ29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGdldE1hcE9wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldENlbnRlcih4KSB7XHJcbi8vICAgaWYoeCA9PT0gdW5kZWZpbmVkKXtcclxuLy8gICAgIHZhciBhZGRyZXNzID0gXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCI7XHJcbi8vICAgICBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YCwgZmV0Y2hlcik7XHJcbi8vICAgICBpZiAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgR29vZ2xlIE1hcHMgbG5nIGxhdCAnLCBlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4ge2xhdDogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9OyAgICBcclxuLy8gICB9ZWxzZVxyXG4vLyAgICAgcmV0dXJuIHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZUNlbnRlcigpIHsgIFxyXG4vLyAgIHZhciBjb29yZGluYXRlcyA9IHtsYXQ6IDQwLjc0Mixsbmc6IC03My43Njl9O1xyXG4vLyAgIHJldHVybiBjb29yZGluYXRlczsgIFxyXG4vLyB9XHJcblxyXG4vLyB2YXIgYWRkcmVzcyA9IFwiXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBzZXRDb29yZGluYXRlcyhhZGRyZXNzKXsgICAgXHJcbiAgLy8gaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gIC8vICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgLy8gICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAvLyAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAvLyAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAvLyAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgLy8gICAgICAgICAvLyB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgY29vcmRpbmF0ZXM6IHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ319KTsgICAgICAgICAgXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2VudGVyKGFkZHJlc3Mpe1xyXG4gIGNvbnNvbGUubG9nKFwiYWRkcmVzc1wiLGFkZHJlc3MpXHJcbiAgaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YCx7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAvLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ307IFxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHb29nbGVNYXAoKSB7ICBcclxuICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpOyAgXHJcblxyXG4gIGNvbnN0IHsgbWFya2VycyB9ID0gdXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7XHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUoXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCIpOyBcclxuICB2YXIgY29vcmRpbmF0ZXNfdXJsID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7YWRkcmVzc31gO1xyXG4gIC8vdmFyIGNvb3JkaW5hdGVzX3VybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz01NTQlMjA3NnRoJTIwc3RyZWV0JTIwYmF5JTIwcmlkZ2VgO1xyXG4gIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGVycm9yIH0gPSB1c2VTd3IoY29vcmRpbmF0ZXNfdXJsLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdGhlIEdvb2dsZSBNYXBzIGxuZyBsYXQgJywgZXJyb3IpO1xyXG4gIH1lbHNlIGlmICghY29vcmRpbmF0ZXMpe1xyXG4gICAgY29uc29sZS5sb2coXCJzdGlsbCBsb2FkaW5nXCIpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgY29uc29sZS5sb2coXCJjb29yZGluYXRlc1wiLGNvb3JkaW5hdGVzKTtcclxuICB9ICBcclxuXHJcbiAgY29uc3QgW25ld0FkZHJlc3MsIHNldE5ld0FkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NlbnRlciwgc2V0Q2VudGVyXSA9IHVzZVN0YXRlKHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29vcmRpbmF0ZXMgPSB7bGF0OiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ307XHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICBzZXRNYXBNYXJrZXJzKFtdKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbY29vcmRpbmF0ZXMsIHNldE1hcE1hcmtlcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlLW1hcC1jb250YWluZXJcIj4gICAgICBcclxuICAgICAgey8qIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENlbnRlcih7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fSl9ID5DaGFuZ2UgQ2VudGVyPC9idXR0b24+fSAqL31cclxuICAgICAgezxpbnB1dCB2YWx1ZT17bmV3QWRkcmVzc30gb25DaGFuZ2U9e3NldE5ld0FkZHJlc3N9PjwvaW5wdXQ+fVxyXG4gICAgICB7PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDZW50ZXIoe2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX0pfT5DaGFuZ2UgQ2VudGVyPC9idXR0b24+fSAgICAgIFxyXG4gICAgICA8R29vZ2xlTWFwUmVhY3RcclxuICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogXCJBSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm9cIiB9fVxyXG4gICAgICAgIC8vYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkwgfX1cclxuICAgICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgICBkZWZhdWx0Wm9vbT17MTN9XHJcbiAgICAgICAgb3B0aW9ucz17Z2V0TWFwT3B0aW9uc31cclxuICAgICAgPlxyXG4gICAgICAge21hcmtlcnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8TWFwTWFya2VyXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XHJcbiAgICAgICAgICAgIC8vdGV4dD17aXRlbS5uYW1lfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYXQ9eyBpdGVtLmNvb3JkaW5hdGVzLmxhdH1cclxuICAgICAgICAgICAgbG5nPXsgaXRlbS5jb29yZGluYXRlcy5sbmd9XHJcbiAgICAgICAgICAgIG91dHB1dF9rZXkgPSB7aXRlbS5vdXRwdXRfa2V5fSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYW1lID0ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgPSB7aXRlbS5jb29yZGluYXRlc30gICAgICBcclxuICAgICAgICAgICAgc2l0ZV9pbmZvPSB7aXRlbS5zaXRlX2luZm99ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Hb29nbGVNYXBSZWFjdD4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})