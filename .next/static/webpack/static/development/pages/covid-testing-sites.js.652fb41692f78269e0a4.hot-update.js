webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_ClickedItemContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ClickedItemContext */ \"./components/ClickedItemContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_8__;\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_6__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      markerClick = _useState2[0],\n      setMarkerClick = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      currentPointClicked = _useState3[0],\n      addCurrentPointClicked = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState4[0],\n      setCenter = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(13),\n      zoom = _useState5[0],\n      setZoom = _useState5[1];\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_ClickedItemContext__WEBPACK_IMPORTED_MODULE_7__[\"ClickedItemContext\"]),\n      clicked_items = _React$useContext.clicked_items;\n\n  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_ClickedItemContext__WEBPACK_IMPORTED_MODULE_7__[\"ClickedItemContext\"]),\n      setClickedItem = _React$useContext2.setState;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (newAddress !== \"\") {\n      fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU&address=\".concat(newAddress), {\n        method: \"GET\",\n        dataType: \"JSON\"\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        setCenter({\n          lat: data.results[0].geometry.location.lat,\n          lng: data.results[0].geometry.location.lng\n        });\n        setZoom(14);\n      });\n    } else if (markerClick !== \"\") {\n      console.log(\"called\", markerClick);\n      setCenter({\n        lat: markerClick.lat,\n        lng: markerClick.lng\n      });\n      setZoom(14);\n      var clicked_items = currentPointClicked;\n      clicked_items.push(markerClick);\n      addCurrentPointClicked(clicked_items); // setClickedItem(markerClick.name);\n      // console.log(\"set clicked item\",clicked_items)\n\n      console.log(currentPointClicked);\n      setMarkerClick(\"\");\n    }\n  });\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    id: \"address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setNewAddress(document.getElementById('address').value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center // defaultZoom={13}\n    ,\n    zoom: zoom,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return (//  <div onClick = {()=>setMarkerClick({lat: item.coordinates.lat,lng: item.coordinates.lng})}>\n      __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_5__[\"MapMarker\"], {\n        key: item.key //text={item.name}            \n        ,\n        lat: item.coordinates.lat,\n        lng: item.coordinates.lng,\n        output_key: item.output_key,\n        name: item.name // coordinates = {item.coordinates}      \n        ,\n        site_info: item.site_info,\n        function_to_run: function function_to_run() {\n          return setMarkerClick({\n            name: item.name,\n            site_info: item.site_info,\n            lat: item.coordinates.lat,\n            lng: item.coordinates.lng\n          });\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }\n      })\n    );\n  })));\n}\n\n_s(GoogleMap, \"iuHm/aRpsdrcmnl8W+KIMdLPstY=\");\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldE1hcE9wdGlvbnMiLCJjb25maWciLCJHb29nbGVNYXAiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwidXNlU3RhdGUiLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsIm1hcmtlckNsaWNrIiwic2V0TWFya2VyQ2xpY2siLCJjdXJyZW50UG9pbnRDbGlja2VkIiwiYWRkQ3VycmVudFBvaW50Q2xpY2tlZCIsImxhdCIsImxuZyIsImNlbnRlciIsInNldENlbnRlciIsInpvb20iLCJzZXRab29tIiwiUmVhY3QiLCJDbGlja2VkSXRlbUNvbnRleHQiLCJjbGlja2VkX2l0ZW1zIiwic2V0Q2xpY2tlZEl0ZW0iLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsIm1ldGhvZCIsImRhdGFUeXBlIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImtleSIsIm1hcCIsIml0ZW0iLCJjb29yZGluYXRlcyIsIm91dHB1dF9rZXkiLCJuYW1lIiwic2l0ZV9pbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQWFDLEtBQUssTUFBTCxvQkFBZUMsSUFBZixDQUFvQixVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQUF2QixDQUFiO0FBQUEsQ0FBaEI7O0FBRUEsU0FBU0MsYUFBVCxHQUF5QjtBQUN2QixT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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXIgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcic7XHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcbmltcG9ydCB7IENsaWNrZWRJdGVtQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvQ2xpY2tlZEl0ZW1Db250ZXh0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9tYXBDb25maWcnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcbmZ1bmN0aW9uIGdldE1hcE9wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdvb2dsZU1hcCgpIHsgIFxyXG4gIGNvbnN0IHsgbWFya2VycyB9ID0gdXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7ICAgIFxyXG4gIGNvbnN0IFtuZXdBZGRyZXNzLCBzZXROZXdBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttYXJrZXJDbGljaywgc2V0TWFya2VyQ2xpY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRQb2ludENsaWNrZWQsIGFkZEN1cnJlbnRQb2ludENsaWNrZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZSh7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9KTtcclxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxMyk7XHJcbiAgY29uc3QgeyBjbGlja2VkX2l0ZW1zIH0gPSBSZWFjdC51c2VDb250ZXh0KENsaWNrZWRJdGVtQ29udGV4dCk7XHJcbiAgY29uc3QgeyBzZXRTdGF0ZTogc2V0Q2xpY2tlZEl0ZW0gfSA9IFJlYWN0LnVzZUNvbnRleHQoQ2xpY2tlZEl0ZW1Db250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgICAgICAgIFxyXG4gICAgaWYobmV3QWRkcmVzcyAhPT0gXCJcIil7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5QUpPVG1pYXhHekJIeUstTUk5bzNqUlN3bkhxMHUtTXZVJmFkZHJlc3M9JHtuZXdBZGRyZXNzfWAse1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4geyAgICAgICAgICAgXHJcbiAgICAgICAgc2V0Q2VudGVyKHtsYXQ6IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ30pOyBcclxuICAgICAgICBzZXRab29tKDE0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKG1hcmtlckNsaWNrICE9PSBcIlwiKXtcclxuICAgICAgY29uc29sZS5sb2coXCJjYWxsZWRcIiwgbWFya2VyQ2xpY2spICAgICAgXHJcbiAgICAgIHNldENlbnRlcih7bGF0OiDCoG1hcmtlckNsaWNrLmxhdCwgbG5nOiBtYXJrZXJDbGljay5sbmd9KTsgXHJcbiAgICAgIHNldFpvb20oMTQpO1xyXG4gICAgICB2YXIgY2xpY2tlZF9pdGVtcyA9IGN1cnJlbnRQb2ludENsaWNrZWQ7XHJcbiAgICAgIGNsaWNrZWRfaXRlbXMucHVzaChtYXJrZXJDbGljayk7XHJcbiAgICAgIGFkZEN1cnJlbnRQb2ludENsaWNrZWQoY2xpY2tlZF9pdGVtcyk7XHJcbiAgICAgIC8vIHNldENsaWNrZWRJdGVtKG1hcmtlckNsaWNrLm5hbWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNldCBjbGlja2VkIGl0ZW1cIixjbGlja2VkX2l0ZW1zKVxyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50UG9pbnRDbGlja2VkKTtcclxuICAgICAgc2V0TWFya2VyQ2xpY2soXCJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXAtY29udGFpbmVyXCI+ICAgICAgICAgICAgXHJcbiAgICAgIHs8aW5wdXQgaWQ9XCJhZGRyZXNzXCI+PC9pbnB1dD59XHJcbiAgICAgIHs8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld0FkZHJlc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MnKS52YWx1ZSl9PkNoYW5nZSBDZW50ZXI8L2J1dHRvbj59ICAgICAgXHJcbiAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUFKT1RtaWF4R3pCSHlLLU1JOW8zalJTd25IcTB1LU12VVwiIH19XHJcbiAgICAgICAgLy9ib290c3RyYXBVUkxLZXlzPXt7IGtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQk9PVFNUUkFQX1VSTCB9fVxyXG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgIC8vIGRlZmF1bHRab29tPXsxM31cclxuICAgICAgICB6b29tPXt6b29tfVxyXG4gICAgICAgIG9wdGlvbnM9e2dldE1hcE9wdGlvbnN9XHJcbiAgICAgID5cclxuICAgICAgIHttYXJrZXJzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIC8vICA8ZGl2IG9uQ2xpY2sgPSB7KCk9PnNldE1hcmtlckNsaWNrKHtsYXQ6IGl0ZW0uY29vcmRpbmF0ZXMubGF0LGxuZzogaXRlbS5jb29yZGluYXRlcy5sbmd9KX0+XHJcbiAgICAgICAgICA8TWFwTWFya2VyXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XHJcbiAgICAgICAgICAgIC8vdGV4dD17aXRlbS5uYW1lfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYXQ9eyBpdGVtLmNvb3JkaW5hdGVzLmxhdH1cclxuICAgICAgICAgICAgbG5nPXsgaXRlbS5jb29yZGluYXRlcy5sbmd9XHJcbiAgICAgICAgICAgIG91dHB1dF9rZXkgPSB7aXRlbS5vdXRwdXRfa2V5fSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYW1lID0ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgLy8gY29vcmRpbmF0ZXMgPSB7aXRlbS5jb29yZGluYXRlc30gICAgICBcclxuICAgICAgICAgICAgc2l0ZV9pbmZvPSB7aXRlbS5zaXRlX2luZm99XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uX3RvX3J1biA9IHsoKT0+c2V0TWFya2VyQ2xpY2soe25hbWU6IGl0ZW0ubmFtZSwgc2l0ZV9pbmZvOiBpdGVtLnNpdGVfaW5mbywgbGF0OiBpdGVtLmNvb3JkaW5hdGVzLmxhdCxsbmc6IGl0ZW0uY29vcmRpbmF0ZXMubG5nfSl9XHJcbiAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+ICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})