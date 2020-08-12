webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_5__;\n} // function getCenter(x) {\n//   if(x === undefined){\n//     var address = \"554 76th street bay ridge\";\n//     const { coordinates, error } = useSwr(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${address}`, fetcher);\n//     if (error) {\n//       console.error('Error loading the Google Maps lng lat ', error);\n//     }\n//     return {lat: coordinates.results[0].geometry.location.lat, lng: coordinates.results[0].geometry.location.lng};    \n//   }else\n//     return {lat: 40.635,lng: -73.94};\n// }\n// function changeCenter() {  \n//   var coordinates = {lat: 40.742,lng: -73.769};\n//   return coordinates;  \n// }\n// var address = \"\";\n// function setCoordinates(address){    \n// if(address !== \"\"){             \n//     //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=${this.state.address}`,{\n//         method: \"GET\",\n//         dataType: \"JSON\",\n//         // headers: {\n//         //   \"Content-Type\": \"application/json; charset=utf-8\",\n//         // }\n//     })\n//     .then(response => response.json())\n//     .then(data => {           \n//       this.setState({ coordinates: {lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}});          \n//     });\n// }\n// }\n\n\nfunction changeCenter(address) {\n  console.log(\"address\", address);\n\n  if (address !== \"\") {\n    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL}&address=${this.state.address}`,{\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(address), {\n      method: \"GET\",\n      dataType: \"JSON\" // headers: {\n      //   \"Content-Type\": \"application/json; charset=utf-8\",\n      // }\n\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return {\n        lat: data.results[0].geometry.location.lat,\n        lng: data.results[0].geometry.location.lng\n      };\n    });\n  }\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var fetcher = function fetcher() {\n    return fetch.apply(void 0, arguments).then(function (res) {\n      return res.json();\n    });\n  };\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_4__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState2[0],\n      setCenter = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (newAddress !== \"\") {\n      fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo&address=\".concat(newAddress), {\n        method: \"GET\",\n        dataType: \"JSON\"\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        setCenter({\n          lat: data.results[0].geometry.location.lat,\n          lng: data.results[0].geometry.location.lng\n        });\n      });\n    }\n  });\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    id: \"address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setNewAddress(document.getElementById('address').value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyBe7_ta_1zNod6CsCJI6ssWk64kyO14HZo\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center,\n    defaultZoom: 13,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"MapMarker\"], {\n      key: item.key //text={item.name}            \n      ,\n      lat: item.coordinates.lat,\n      lng: item.coordinates.lng,\n      output_key: item.output_key,\n      name: item.name // coordinates = {item.coordinates}      \n      ,\n      site_info: item.site_info,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(GoogleMap, \"zMpKjgm1NEsHrWQNRF6SgO5iBak=\");\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJnZXRNYXBPcHRpb25zIiwiY29uZmlnIiwiY2hhbmdlQ2VudGVyIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImRhdGFUeXBlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsYXQiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsIkdvb2dsZU1hcCIsImZldGNoZXIiLCJyZXMiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwidXNlU3RhdGUiLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsImNlbnRlciIsInNldENlbnRlciIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImtleSIsIm1hcCIsIml0ZW0iLCJjb29yZGluYXRlcyIsIm91dHB1dF9rZXkiLCJuYW1lIiwic2l0ZV9pbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixTQUFPQyx1Q0FBUDtBQUNELEMsQ0FHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGOzs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxPQUF0QixFQUE4QjtBQUM1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQkYsT0FBdEI7O0FBQ0EsTUFBR0EsT0FBTyxLQUFLLEVBQWYsRUFBa0I7QUFDZDtBQUNBRyxTQUFLLGlI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QUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNGLEdBRFosQ0FFRTtBQUZGO0FBR0UsU0FBRyxFQUFHRSxJQUFJLENBQUNDLFdBQUwsQ0FBaUJ2QixHQUh6QjtBQUlFLFNBQUcsRUFBR3NCLElBQUksQ0FBQ0MsV0FBTCxDQUFpQm5CLEdBSnpCO0FBS0UsZ0JBQVUsRUFBSWtCLElBQUksQ0FBQ0UsVUFMckI7QUFNRSxVQUFJLEVBQUlGLElBQUksQ0FBQ0csSUFOZixDQU9FO0FBUEY7QUFRRSxlQUFTLEVBQUdILElBQUksQ0FBQ0ksU0FSbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBWixDQVBGLENBSkYsQ0FERjtBQTJCRDs7R0FqRGVyQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Hb29nbGVNYXAvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IHsgTWFwTWFya2VyIH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXInO1xyXG5pbXBvcnQgeyBNYXBNYXJrZXJzQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2Vyc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL21hcENvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiBnZXRNYXBPcHRpb25zKCkge1xyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRDZW50ZXIoeCkge1xyXG4vLyAgIGlmKHggPT09IHVuZGVmaW5lZCl7XHJcbi8vICAgICB2YXIgYWRkcmVzcyA9IFwiNTU0IDc2dGggc3RyZWV0IGJheSByaWRnZVwiO1xyXG4vLyAgICAgY29uc3QgeyBjb29yZGluYXRlcywgZXJyb3IgfSA9IHVzZVN3cihgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAsIGZldGNoZXIpO1xyXG4vLyAgICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdGhlIEdvb2dsZSBNYXBzIGxuZyBsYXQgJywgZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHtsYXQ6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGNvb3JkaW5hdGVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfTsgICAgXHJcbi8vICAgfWVsc2VcclxuLy8gICAgIHJldHVybiB7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBjaGFuZ2VDZW50ZXIoKSB7ICBcclxuLy8gICB2YXIgY29vcmRpbmF0ZXMgPSB7bGF0OiA0MC43NDIsbG5nOiAtNzMuNzY5fTtcclxuLy8gICByZXR1cm4gY29vcmRpbmF0ZXM7ICBcclxuLy8gfVxyXG5cclxuLy8gdmFyIGFkZHJlc3MgPSBcIlwiO1xyXG5cclxuLy8gZnVuY3Rpb24gc2V0Q29vcmRpbmF0ZXMoYWRkcmVzcyl7ICAgIFxyXG4gIC8vIGlmKGFkZHJlc3MgIT09IFwiXCIpeyAgICAgICAgICAgICBcclxuICAvLyAgICAgLy9mZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMfSZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gIC8vICAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHt0aGlzLnN0YXRlLmFkZHJlc3N9YCx7XHJcbiAgLy8gICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgLy8gICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgLy8gICAgICAgICAvLyBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICAvLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gIC8vICAgICAgICAgLy8gfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKGRhdGEgPT4geyAgICAgICAgICAgXHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvb3JkaW5hdGVzOiB7bGF0OiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9fSk7ICAgICAgICAgIFxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNlbnRlcihhZGRyZXNzKXtcclxuICBjb25zb2xlLmxvZyhcImFkZHJlc3NcIixhZGRyZXNzKVxyXG4gIGlmKGFkZHJlc3MgIT09IFwiXCIpeyAgICAgICAgICAgICBcclxuICAgICAgLy9mZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19CT09UU1RSQVBfVVJMfSZhZGRyZXNzPSR7dGhpcy5zdGF0ZS5hZGRyZXNzfWAse1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QmU3X3RhXzF6Tm9kNkNzQ0pJNnNzV2s2NGt5TzE0SFpvJmFkZHJlc3M9JHthZGRyZXNzfWAse1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICAgICAgLy8gaGVhZGVyczoge1xyXG4gICAgICAgICAgLy8gICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7bGF0OiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9OyBcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlTWFwKCkgeyAgXHJcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTsgIFxyXG5cclxuICBjb25zdCB7IG1hcmtlcnMgfSA9IHVzZUNvbnRleHQoTWFwTWFya2Vyc0NvbnRleHQpOyAgICBcclxuICBjb25zdCBbbmV3QWRkcmVzcywgc2V0TmV3QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2VudGVyLCBzZXRDZW50ZXJdID0gdXNlU3RhdGUoe2xhdDogNDAuNjM1LGxuZzogLTczLjk0fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7ICAgICAgICBcclxuXHJcbiAgICBpZihuZXdBZGRyZXNzICE9PSBcIlwiKXtcclxuICAgIGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lCZTdfdGFfMXpOb2Q2Q3NDSkk2c3NXazY0a3lPMTRIWm8mYWRkcmVzcz0ke25ld0FkZHJlc3N9YCx7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7ICAgICAgICAgICBcclxuICAgICAgICBzZXRDZW50ZXIoe2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfSk7IFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXAtY29udGFpbmVyXCI+ICAgICAgXHJcbiAgICAgIHsvKiB7PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDZW50ZXIoe2xhdDogNDAuNzQyLGxuZzogLTczLjc2OX0pfSA+Q2hhbmdlIENlbnRlcjwvYnV0dG9uPn0gKi99XHJcbiAgICAgIHs8aW5wdXQgaWQ9XCJhZGRyZXNzXCI+PC9pbnB1dD59XHJcbiAgICAgIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld0FkZHJlc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MnKS52YWx1ZSl9PkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICAgICAgXHJcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUJlN190YV8xek5vZDZDc0NKSTZzc1drNjRreU8xNEhab1wiIH19XHJcbiAgICAgICAgLy9ib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTCB9fVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgICBvcHRpb25zPXtnZXRNYXBPcHRpb25zfVxyXG4gICAgICA+XHJcbiAgICAgICB7bWFya2Vycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxNYXBNYXJrZXJcclxuICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgLy90ZXh0PXtpdGVtLm5hbWV9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhdD17IGl0ZW0uY29vcmRpbmF0ZXMubGF0fVxyXG4gICAgICAgICAgICBsbmc9eyBpdGVtLmNvb3JkaW5hdGVzLmxuZ31cclxuICAgICAgICAgICAgb3V0cHV0X2tleSA9IHtpdGVtLm91dHB1dF9rZXl9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hbWUgPSB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAvLyBjb29yZGluYXRlcyA9IHtpdGVtLmNvb3JkaW5hdGVzfSAgICAgIFxyXG4gICAgICAgICAgICBzaXRlX2luZm89IHtpdGVtLnNpdGVfaW5mb30gICAgICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})