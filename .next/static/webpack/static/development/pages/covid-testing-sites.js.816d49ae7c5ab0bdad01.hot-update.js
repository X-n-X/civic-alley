webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_6__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_5__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(\"554 76th street bay ridge\"),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      address = _React$useState2[0],\n      setState = _React$useState2[1];\n\n  var coordinates_url = \"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address);\n\n  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates_url, fetcher),\n      coordinates = _useSwr.coordinates,\n      error = _useSwr.error;\n\n  if (error) {\n    console.error('Error loading the Google Maps lng lat ', error);\n  } else {\n    console.log(\"coordinates\", coordinates);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState[0],\n      setCenter = _useState[1]; // useEffect(() => {\n  //   coordinates = {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};\n  //   return () => {\n  //     setMapMarkers([]);\n  //   }\n  // }, [coordinates, setMapMarkers]);\n\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return setCenter({\n        lat: 40.742,\n        lng: -73.769\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_4__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"INXS1yEnQpc7NxkB4Gnoez/rlqY=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiR29vZ2xlTWFwIiwiZmV0Y2hlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImNvb3JkaW5hdGVzX3VybCIsInVzZVN3ciIsImNvb3JkaW5hdGVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGF0IiwibG5nIiwiY2VudGVyIiwic2V0Q2VudGVyIiwia2V5IiwibWFwIiwiaXRlbSIsInNpdGVfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsU0FBT0MsdUNBQVA7QUFDRCxDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7O0FBRU8sU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUMxQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQUF2QixDQUFiO0FBQUEsR0FBaEI7O0FBRDBCLG9CQUdOQyx3REFBVSxDQUFDQyw4RUFBRCxDQUhKO0FBQUEsTUFHbEJDLE9BSGtCLGVBR2xCQSxPQUhrQjs7QUFBQSx3QkFJRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLDJCQUFmLENBSkY7QUFBQTtBQUFBLE1BSW5CQyxPQUptQjtBQUFBLE1BSVZDLFFBSlU7O0FBSzFCLE1BQUlDLGVBQWUsbUhBQTRHRixPQUE1RyxDQUFuQjs7QUFMMEIsZ0JBTUtHLG1EQUFNLENBQUNELGVBQUQsRUFBa0JaLE9BQWxCLENBTlg7QUFBQSxNQU1sQmMsV0FOa0IsV0FNbEJBLFdBTmtCO0FBQUEsTUFNTEMsS0FOSyxXQU1MQSxLQU5LOztBQU8xQixNQUFJQSxLQUFKLEVBQVc7QUFDVEMsV0FBTyxDQUFDRCxLQUFSLENBQWMsd0NBQWQsRUFBd0RBLEtBQXhEO0FBQ0QsR0FGRCxNQUVLO0FBQ0hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMEJILFdBQTFCO0FBQ0Q7O0FBWHlCLGtCQWFFTCxzREFBUSxDQUFDO0FBQUNTLE9BQUcsRUFBRSxNQUFOO0FBQWFDLE9BQUcsRUFBRSxDQUFDO0FBQW5CLEdBQUQsQ0FiVjtBQUFBLE1BYW5CQyxNQWJtQjtBQUFBLE1BYVhDLFNBYlcsaUJBZTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUM7QUFBQ0gsV0FBRyxFQUFFLE1BQU47QUFBYUMsV0FBRyxFQUFFLENBQUM7QUFBbkIsT0FBRCxDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUdFLE1BQUMsdURBQUQ7QUFDRSxvQkFBZ0IsRUFBRTtBQUFFRyxTQUFHLEVBQUU7QUFBUCxLQURwQixDQUVFO0FBRkY7QUFHRSxVQUFNLEVBQUVGLE1BSFY7QUFJRSxlQUFXLEVBQUUsRUFKZjtBQUtFLFdBQU8sRUFBRXZCLGFBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FVSxPQUFPLENBQUNnQixHQUFSLENBQVksVUFBQ0MsSUFBRDtBQUFBLFdBQ1YsTUFBQyw4REFBRDtBQUNFLFNBQUcsRUFBRUEsSUFBSSxDQUFDRixHQURaLENBRUU7QUFGRjtBQUdFLFNBQUcsRUFBR0UsSUFBSSxDQUFDVixXQUFMLENBQWlCSSxHQUh6QjtBQUlFLFNBQUcsRUFBR00sSUFBSSxDQUFDVixXQUFMLENBQWlCSyxHQUp6QjtBQUtFLGVBQVMsRUFBR0ssSUFBSSxDQUFDQyxTQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFaLENBUEYsQ0FIRixDQURGO0FBdUJEOztHQTdDZTFCLFM7VUFNaUJjLDJDOzs7S0FOakJkLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXIgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcic7XHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vbWFwQ29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIGdldE1hcE9wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldENlbnRlcih4KSB7XHJcbi8vICAgaWYoeCA9PT0gdW5kZWZpbmVkKXtcclxuLy8gICAgIHZhciBhZGRyZXNzID0gXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCI7XHJcbi8vICAgICBjb25zdCB7IGNvb3JkaW5hdGVzLCBlcnJvciB9ID0gdXNlU3dyKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke2FkZHJlc3N9YCwgZmV0Y2hlcik7XHJcbi8vICAgICBpZiAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0aGUgR29vZ2xlIE1hcHMgbG5nIGxhdCAnLCBlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4ge2xhdDogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogY29vcmRpbmF0ZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9OyAgICBcclxuLy8gICB9ZWxzZVxyXG4vLyAgICAgcmV0dXJuIHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZUNlbnRlcigpIHsgIFxyXG4vLyAgIHZhciBjb29yZGluYXRlcyA9IHtsYXQ6IDQwLjc0Mixsbmc6IC03My43Njl9O1xyXG4vLyAgIHJldHVybiBjb29yZGluYXRlczsgIFxyXG4vLyB9XHJcblxyXG4vLyB2YXIgYWRkcmVzcyA9IFwiXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBzZXRDb29yZGluYXRlcyhhZGRyZXNzKXsgICAgXHJcbiAgLy8gaWYoYWRkcmVzcyAhPT0gXCJcIil7ICAgICAgICAgICAgIFxyXG4gIC8vICAgICAvL2ZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkx9JmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgLy8gICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke3RoaXMuc3RhdGUuYWRkcmVzc31gLHtcclxuICAvLyAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAvLyAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAvLyAgICAgICAgIC8vIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgLy8gICAgICAgICAvLyB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgY29vcmRpbmF0ZXM6IHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ319KTsgICAgICAgICAgXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdvb2dsZU1hcCgpIHsgIFxyXG4gIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbiAgY29uc3QgeyBtYXJrZXJzIH0gPSB1c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTtcclxuICBjb25zdCBbYWRkcmVzcywgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoXCI1NTQgNzZ0aCBzdHJlZXQgYmF5IHJpZGdlXCIpOyBcclxuICB2YXIgY29vcmRpbmF0ZXNfdXJsID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhabyZhZGRyZXNzPSR7YWRkcmVzc31gO1xyXG4gIGNvbnN0IHsgY29vcmRpbmF0ZXMsIGVycm9yIH0gPSB1c2VTd3IoY29vcmRpbmF0ZXNfdXJsLCBmZXRjaGVyKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdGhlIEdvb2dsZSBNYXBzIGxuZyBsYXQgJywgZXJyb3IpO1xyXG4gIH1lbHNle1xyXG4gICAgY29uc29sZS5sb2coXCJjb29yZGluYXRlc1wiLGNvb3JkaW5hdGVzKTtcclxuICB9ICBcclxuXHJcbiAgY29uc3QgW2NlbnRlciwgc2V0Q2VudGVyXSA9IHVzZVN0YXRlKHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29vcmRpbmF0ZXMgPSB7bGF0OiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBjb29yZGluYXRlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ307XHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICBzZXRNYXBNYXJrZXJzKFtdKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbY29vcmRpbmF0ZXMsIHNldE1hcE1hcmtlcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlLW1hcC1jb250YWluZXJcIj4gICAgICBcclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDZW50ZXIoe2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX0pfSA+Q2hhbmdlIENlbnRlcjwvYnV0dG9uPlxyXG4gICAgICB7LyogPGJ1dHRvbiBuYW1lID1cImFkZHJlc3NcIiB2YWx1ZSA9IFwiY2hhbmdlXCIgb25DaGFuZ2U9e3NldENlbnRlcih7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fSl9PjwvYnV0dG9uPiAqL31cclxuICAgICAgPEdvb2dsZU1hcFJlYWN0XHJcbiAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IFwiQUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvXCIgfX1cclxuICAgICAgICAvL2Jvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMIH19XHJcbiAgICAgICAgY2VudGVyPXtjZW50ZXJ9XHJcbiAgICAgICAgZGVmYXVsdFpvb209ezEzfVxyXG4gICAgICAgIG9wdGlvbnM9e2dldE1hcE9wdGlvbnN9XHJcbiAgICAgID5cclxuICAgICAgIHttYXJrZXJzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPE1hcE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAvL3RleHQ9e2l0ZW0ubmFtZX0gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGF0PXsgaXRlbS5jb29yZGluYXRlcy5sYXR9XHJcbiAgICAgICAgICAgIGxuZz17IGl0ZW0uY29vcmRpbmF0ZXMubG5nfVxyXG4gICAgICAgICAgICBzaXRlX2luZm89IHtpdGVtLnNpdGVfaW5mb30gICAgICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})