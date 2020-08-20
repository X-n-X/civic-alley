webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_ClickedItemContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ClickedItemContext */ \"./components/ClickedItemContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_8__;\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_6__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      markerClick = _useState2[0],\n      setMarkerClick = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      currentPointClicked = _useState3[0],\n      addCurrentPointClicked = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState4[0],\n      setCenter = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(13),\n      zoom = _useState5[0],\n      setZoom = _useState5[1];\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_ClickedItemContext__WEBPACK_IMPORTED_MODULE_7__[\"ClickedItemContext\"]),\n      clicked_item = _React$useContext.clicked_item,\n      setClickedItem = _React$useContext.setClickedItem;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (newAddress !== \"\") {\n      fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU&address=\".concat(newAddress), {\n        method: \"GET\",\n        dataType: \"JSON\"\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        setCenter({\n          lat: data.results[0].geometry.location.lat,\n          lng: data.results[0].geometry.location.lng\n        });\n        setZoom(14);\n      });\n    } else if (markerClick !== \"\") {\n      console.log(\"called\", markerClick);\n      setCenter({\n        lat: markerClick.lat,\n        lng: markerClick.lng\n      });\n      setZoom(14);\n      var clicked_items = currentPointClicked;\n      clicked_items.push(markerClick);\n      addCurrentPointClicked(clicked_items); //setClickedItem(clicked_items);\n      // console.log(\"set clicked item\",clicked_items)\n\n      console.log(currentPointClicked);\n      setMarkerClick(\"\");\n    }\n  });\n\n  if (currentPointClicked.length > 0) {\n    setClickedItem(currentPointClicked[currentPointClicked.length - 1]);\n  }\n\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    id: \"address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setNewAddress(document.getElementById('address').value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center // defaultZoom={13}\n    ,\n    zoom: zoom,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return (//  <div onClick = {()=>setMarkerClick({lat: item.coordinates.lat,lng: item.coordinates.lng})}>\n      __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_5__[\"MapMarker\"], {\n        key: item.key //text={item.name}            \n        ,\n        lat: item.coordinates.lat,\n        lng: item.coordinates.lng,\n        output_key: item.output_key,\n        name: item.name // coordinates = {item.coordinates}      \n        ,\n        site_info: item.site_info,\n        function_to_run: function function_to_run() {\n          return setMarkerClick({\n            name: item.name,\n            site_info: item.site_info,\n            lat: item.coordinates.lat,\n            lng: item.coordinates.lng\n          });\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }\n      })\n    );\n  })));\n}\n\n_s(GoogleMap, \"aT4I3+aA0ryaYfM1NM0nTiqniww=\");\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldE1hcE9wdGlvbnMiLCJjb25maWciLCJHb29nbGVNYXAiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwidXNlU3RhdGUiLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsIm1hcmtlckNsaWNrIiwic2V0TWFya2VyQ2xpY2siLCJjdXJyZW50UG9pbnRDbGlja2VkIiwiYWRkQ3VycmVudFBvaW50Q2xpY2tlZCIsImxhdCIsImxuZyIsImNlbnRlciIsInNldENlbnRlciIsInpvb20iLCJzZXRab29tIiwiUmVhY3QiLCJDbGlja2VkSXRlbUNvbnRleHQiLCJjbGlja2VkX2l0ZW0iLCJzZXRDbGlja2VkSXRlbSIsInVzZUVmZmVjdCIsIm1ldGhvZCIsImRhdGFUeXBlIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwiY2xpY2tlZF9pdGVtcyIsInB1c2giLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJrZXkiLCJtYXAiLCJpdGVtIiwiY29vcmRpbmF0ZXMiLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFhQyxLQUFLLE1BQUwsb0JBQWVDLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBdkIsQ0FBYjtBQUFBLENBQWhCOztBQUVBLFNBQVNDLGFBQVQs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QUFBQSxHQUFaLENBUkYsQ0FIRixDQURGO0FBNkJEOztHQXBFZVosUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR29vZ2xlTWFwL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCB7IE1hcE1hcmtlciB9IGZyb20gJ2NvbXBvbmVudHMvTWFwTWFya2VyJztcclxuaW1wb3J0IHsgTWFwTWFya2Vyc0NvbnRleHQgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcnNDb250ZXh0JztcclxuaW1wb3J0IHsgQ2xpY2tlZEl0ZW1Db250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9DbGlja2VkSXRlbUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL21hcENvbmZpZyc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cclxuZnVuY3Rpb24gZ2V0TWFwT3B0aW9ucygpIHtcclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlTWFwKCkgeyAgXHJcbiAgY29uc3QgeyBtYXJrZXJzIH0gPSB1c2VDb250ZXh0KE1hcE1hcmtlcnNDb250ZXh0KTsgICAgXHJcbiAgY29uc3QgW25ld0FkZHJlc3MsIHNldE5ld0FkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21hcmtlckNsaWNrLCBzZXRNYXJrZXJDbGlja10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VycmVudFBvaW50Q2xpY2tlZCwgYWRkQ3VycmVudFBvaW50Q2xpY2tlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NlbnRlciwgc2V0Q2VudGVyXSA9IHVzZVN0YXRlKHtsYXQ6IDQwLjYzNSxsbmc6IC03My45NH0pO1xyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEzKTtcclxuICBjb25zdCB7IGNsaWNrZWRfaXRlbSAsc2V0Q2xpY2tlZEl0ZW0gfSA9IFJlYWN0LnVzZUNvbnRleHQoQ2xpY2tlZEl0ZW1Db250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgICAgICAgIFxyXG4gICAgaWYobmV3QWRkcmVzcyAhPT0gXCJcIil7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QUpPVG1pYXhHekJIeUstTUk5bzNqUlN3bkhxMHUtTXZVJmFkZHJlc3M9JHtuZXdBZGRyZXNzfWAse1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldENlbnRlcih7bGF0OiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsbmc6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9KTsgXHJcbiAgICAgICAgc2V0Wm9vbSgxNCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihtYXJrZXJDbGljayAhPT0gXCJcIil7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkXCIsIG1hcmtlckNsaWNrKVxyXG4gICAgICBzZXRDZW50ZXIoe2xhdDogwqBtYXJrZXJDbGljay5sYXQsIGxuZzogbWFya2VyQ2xpY2subG5nfSk7IFxyXG4gICAgICBzZXRab29tKDE0KTtcclxuICAgICAgdmFyIGNsaWNrZWRfaXRlbXMgPSBjdXJyZW50UG9pbnRDbGlja2VkO1xyXG4gICAgICBjbGlja2VkX2l0ZW1zLnB1c2gobWFya2VyQ2xpY2spO1xyXG4gICAgICBhZGRDdXJyZW50UG9pbnRDbGlja2VkKGNsaWNrZWRfaXRlbXMpO1xyXG4gICAgICAvL3NldENsaWNrZWRJdGVtKGNsaWNrZWRfaXRlbXMpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNldCBjbGlja2VkIGl0ZW1cIixjbGlja2VkX2l0ZW1zKVxyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50UG9pbnRDbGlja2VkKTtcclxuICAgICAgc2V0TWFya2VyQ2xpY2soXCJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmKGN1cnJlbnRQb2ludENsaWNrZWQubGVuZ3RoID4gMCl7XHJcbiAgICBzZXRDbGlja2VkSXRlbShjdXJyZW50UG9pbnRDbGlja2VkW2N1cnJlbnRQb2ludENsaWNrZWQubGVuZ3RoLTFdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXAtY29udGFpbmVyXCI+ICAgICAgICAgICAgXHJcbiAgICAgIHs8aW5wdXQgaWQ9XCJhZGRyZXNzXCI+PC9pbnB1dD59XHJcbiAgICAgIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld0FkZHJlc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MnKS52YWx1ZSl9PkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICAgICAgXHJcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUFKT1RtaWF4R3pCSHlLLU1JOW8zalJTd25IcTB1LU12VVwiIH19XHJcbiAgICAgICAgLy9ib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTCB9fVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIC8vIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgICB6b29tPXt6b29tfVxyXG4gICAgICAgIG9wdGlvbnM9e2dldE1hcE9wdGlvbnN9XHJcbiAgICAgID5cclxuICAgICAgIHttYXJrZXJzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIC8vICA8ZGl2IG9uQ2xpY2sgPSB7KCk9PnNldE1hcmtlckNsaWNrKHtsYXQ6IGl0ZW0uY29vcmRpbmF0ZXMubGF0LGxuZzogaXRlbS5jb29yZGluYXRlcy5sbmd9KX0+XHJcbiAgICAgICAgICA8TWFwTWFya2VyXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XHJcbiAgICAgICAgICAgIC8vdGV4dD17aXRlbS5uYW1lfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYXQ9eyBpdGVtLmNvb3JkaW5hdGVzLmxhdH1cclxuICAgICAgICAgICAgbG5nPXsgaXRlbS5jb29yZGluYXRlcy5sbmd9XHJcbiAgICAgICAgICAgIG91dHB1dF9rZXkgPSB7aXRlbS5vdXRwdXRfa2V5fSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYW1lID0ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgPSB7aXRlbS5jb29yZGluYXRlc30gICAgICBcclxuICAgICAgICAgICAgc2l0ZV9pbmZvPSB7aXRlbS5zaXRlX2luZm99XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uX3RvX3J1biA9IHsoKT0+c2V0TWFya2VyQ2xpY2soe25hbWU6IGl0ZW0ubmFtZSwgc2l0ZV9pbmZvOiBpdGVtLnNpdGVfaW5mbywgbGF0OiBpdGVtLmNvb3JkaW5hdGVzLmxhdCxsbmc6IGl0ZW0uY29vcmRpbmF0ZXMubG5nfSl9XHJcbiAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+ICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})