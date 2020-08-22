webpackHotUpdate("static/development/pages/covid-testing-sites.js",{

/***/ "./components/GoogleMap/index.jsx":
/*!****************************************!*\
  !*** ./components/GoogleMap/index.jsx ***!
  \****************************************/
/*! exports provided: GoogleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GoogleMap\", function() { return GoogleMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_MapMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapMarker */ \"./components/MapMarker/index.jsx\");\n/* harmony import */ var components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/MapMarkersContext */ \"./components/MapMarkersContext/index.jsx\");\n/* harmony import */ var components_ClickedItemContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ClickedItemContext */ \"./components/ClickedItemContext/index.jsx\");\n/* harmony import */ var _mapConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\");\nvar _mapConfig__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mapConfig */ \"./components/GoogleMap/mapConfig.json\", 1);\nvar _jsxFileName = \"/Users/benjamingordon/Documents/X&X/townie/components/GoogleMap/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar fetcher = function fetcher() {\n  return fetch.apply(void 0, arguments).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction getMapOptions() {\n  return _mapConfig__WEBPACK_IMPORTED_MODULE_8__;\n}\n\nfunction GoogleMap() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(components_MapMarkersContext__WEBPACK_IMPORTED_MODULE_6__[\"MapMarkersContext\"]),\n      markers = _useContext.markers;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      newAddress = _useState[0],\n      setNewAddress = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      markerClick = _useState2[0],\n      setMarkerClick = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      currentPointClicked = _useState3[0],\n      addCurrentPointClicked = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    lat: 40.635,\n    lng: -73.94\n  }),\n      center = _useState4[0],\n      setCenter = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(13),\n      zoom = _useState5[0],\n      setZoom = _useState5[1];\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(components_ClickedItemContext__WEBPACK_IMPORTED_MODULE_7__[\"ClickedItemContext\"]),\n      clicked_item = _React$useContext.clicked_item,\n      setClickedItem = _React$useContext.setClickedItem;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (newAddress !== \"\") {\n      fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU&address=\".concat(newAddress), {\n        method: \"GET\",\n        dataType: \"JSON\"\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        setCenter({\n          lat: data.results[0].geometry.location.lat,\n          lng: data.results[0].geometry.location.lng\n        });\n        setZoom(14);\n      });\n    } else if (markerClick !== \"\") {\n      console.log(\"called\", markerClick);\n      setCenter({\n        lat: markerClick.lat,\n        lng: markerClick.lng\n      });\n      setZoom(14);\n      var clicked_items = currentPointClicked;\n      clicked_items.push(markerClick);\n      addCurrentPointClicked(clicked_items); // setClickedItem(clicked_items);\n      //console.log(\"set clicked item\",clicked_items)\n\n      console.log(currentPointClicked);\n      setMarkerClick(\"\");\n    }\n\n    if (currentPointClicked.length > 0) {\n      setClickedItem(currentPointClicked[currentPointClicked.length - 1]);\n    }\n\n    return function () {\n      setClickedItem(\"\");\n    };\n  }, [clicked_item, setClickedItem]);\n  return __jsx(\"div\", {\n    className: \"google-map-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    id: \"address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 8\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setNewAddress(document.getElementById('address').value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 8\n    }\n  }, \"Change Center\"), __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    bootstrapURLKeys: {\n      key: \"AIzaSyAJOTmiaxGzBHyK-MI9o3jRSwnHq0u-MvU\"\n    } //bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BOOTSTRAP_URL }}\n    ,\n    center: center // defaultZoom={13}\n    ,\n    zoom: zoom,\n    options: getMapOptions,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, markers.map(function (item) {\n    return (//  <div onClick = {()=>setMarkerClick({lat: item.coordinates.lat,lng: item.coordinates.lng})}>\n      __jsx(components_MapMarker__WEBPACK_IMPORTED_MODULE_5__[\"MapMarker\"], {\n        key: item.key //text={item.name}            \n        ,\n        lat: item.coordinates.lat,\n        lng: item.coordinates.lng,\n        output_key: item.output_key,\n        name: item.name // coordinates = {item.coordinates}      \n        ,\n        site_info: item.site_info,\n        function_to_run: function function_to_run() {\n          return setMarkerClick({\n            name: item.name,\n            site_info: item.site_info,\n            lat: item.coordinates.lat,\n            lng: item.coordinates.lng\n          });\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }\n      })\n    );\n  })));\n}\n\n_s(GoogleMap, \"yrU4IjL1Pyx13CFl4Z36dlXn0mY=\");\n\n_c = GoogleMap;\n\nvar _c;\n\n$RefreshReg$(_c, \"GoogleMap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3g/OTVkNSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImdldE1hcE9wdGlvbnMiLCJjb25maWciLCJHb29nbGVNYXAiLCJ1c2VDb250ZXh0IiwiTWFwTWFya2Vyc0NvbnRleHQiLCJtYXJrZXJzIiwidXNlU3RhdGUiLCJuZXdBZGRyZXNzIiwic2V0TmV3QWRkcmVzcyIsIm1hcmtlckNsaWNrIiwic2V0TWFya2VyQ2xpY2siLCJjdXJyZW50UG9pbnRDbGlja2VkIiwiYWRkQ3VycmVudFBvaW50Q2xpY2tlZCIsImxhdCIsImxuZyIsImNlbnRlciIsInNldENlbnRlciIsInpvb20iLCJzZXRab29tIiwiUmVhY3QiLCJDbGlja2VkSXRlbUNvbnRleHQiLCJjbGlja2VkX2l0ZW0iLCJzZXRDbGlja2VkSXRlbSIsInVzZUVmZmVjdCIsIm1ldGhvZCIsImRhdGFUeXBlIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwiY2xpY2tlZF9pdGVtcyIsInB1c2giLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJrZXkiLCJtYXAiLCJpdGVtIiwiY29vcmRpbmF0ZXMiLCJvdXRwdXRfa2V5IiwibmFtZSIsInNpdGVfaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUFhQyxLQUFLLE1BQUwsb0JBQWVDLElBQWYsQ0FBb0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBdkIsQ0FBYjtBQUFBLENBQWhCOztBQUVBLFNBQVNDLGFBQVQs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QUNDLFdBQUwsQ0FBaUI1QjtBQUE3RixXQUFELENBQWxCO0FBQUEsU0FUckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZVO0FBQUEsR0FBWixDQVJGLENBSEYsQ0FERjtBQTZCRDs7R0F6RWVaLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dvb2dsZU1hcC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgeyBNYXBNYXJrZXIgfSBmcm9tICdjb21wb25lbnRzL01hcE1hcmtlcic7XHJcbmltcG9ydCB7IE1hcE1hcmtlcnNDb250ZXh0IH0gZnJvbSAnY29tcG9uZW50cy9NYXBNYXJrZXJzQ29udGV4dCc7XHJcbmltcG9ydCB7IENsaWNrZWRJdGVtQ29udGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvQ2xpY2tlZEl0ZW1Db250ZXh0JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9tYXBDb25maWcnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcbmZ1bmN0aW9uIGdldE1hcE9wdGlvbnMoKSB7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdvb2dsZU1hcCgpIHsgIFxyXG4gIGNvbnN0IHsgbWFya2VycyB9ID0gdXNlQ29udGV4dChNYXBNYXJrZXJzQ29udGV4dCk7ICAgIFxyXG4gIGNvbnN0IFtuZXdBZGRyZXNzLCBzZXROZXdBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttYXJrZXJDbGljaywgc2V0TWFya2VyQ2xpY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1cnJlbnRQb2ludENsaWNrZWQsIGFkZEN1cnJlbnRQb2ludENsaWNrZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZSh7bGF0OiA0MC42MzUsbG5nOiAtNzMuOTR9KTtcclxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxMyk7XHJcbiAgY29uc3QgeyBjbGlja2VkX2l0ZW0sIHNldENsaWNrZWRJdGVtIH0gPSBSZWFjdC51c2VDb250ZXh0KENsaWNrZWRJdGVtQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7ICAgICAgICBcclxuICAgIGlmKG5ld0FkZHJlc3MgIT09IFwiXCIpe1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PUFJemFTeUFKT1RtaWF4R3pCSHlLLU1JOW8zalJTd25IcTB1LU12VSZhZGRyZXNzPSR7bmV3QWRkcmVzc31gLHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXRDZW50ZXIoe2xhdDogZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfSk7IFxyXG4gICAgICAgIHNldFpvb20oMTQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYobWFya2VyQ2xpY2sgIT09IFwiXCIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxlZFwiLCBtYXJrZXJDbGljaylcclxuICAgICAgc2V0Q2VudGVyKHtsYXQ6IMKgbWFya2VyQ2xpY2subGF0LCBsbmc6IG1hcmtlckNsaWNrLmxuZ30pOyBcclxuICAgICAgc2V0Wm9vbSgxNCk7XHJcbiAgICAgIHZhciBjbGlja2VkX2l0ZW1zID0gY3VycmVudFBvaW50Q2xpY2tlZDtcclxuICAgICAgY2xpY2tlZF9pdGVtcy5wdXNoKG1hcmtlckNsaWNrKTtcclxuICAgICAgYWRkQ3VycmVudFBvaW50Q2xpY2tlZChjbGlja2VkX2l0ZW1zKTtcclxuICAgICAgLy8gc2V0Q2xpY2tlZEl0ZW0oY2xpY2tlZF9pdGVtcyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJzZXQgY2xpY2tlZCBpdGVtXCIsY2xpY2tlZF9pdGVtcylcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFBvaW50Q2xpY2tlZCk7XHJcbiAgICAgIHNldE1hcmtlckNsaWNrKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgaWYoY3VycmVudFBvaW50Q2xpY2tlZC5sZW5ndGggPiAwKXtcclxuICAgICAgc2V0Q2xpY2tlZEl0ZW0oY3VycmVudFBvaW50Q2xpY2tlZFtjdXJyZW50UG9pbnRDbGlja2VkLmxlbmd0aC0xXSk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHNldENsaWNrZWRJdGVtKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbY2xpY2tlZF9pdGVtLHNldENsaWNrZWRJdGVtXSk7XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwLWNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICB7PGlucHV0IGlkPVwiYWRkcmVzc1wiPjwvaW5wdXQ+fVxyXG4gICAgICB7PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXROZXdBZGRyZXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJykudmFsdWUpfT5DaGFuZ2UgQ2VudGVyPC9idXR0b24+fSAgICAgIFxyXG4gICAgICA8R29vZ2xlTWFwUmVhY3RcclxuICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogXCJBSXphU3lBSk9UbWlheEd6Qkh5Sy1NSTlvM2pSU3duSHEwdS1NdlVcIiB9fVxyXG4gICAgICAgIC8vYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0JPT1RTVFJBUF9VUkwgfX1cclxuICAgICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgICAvLyBkZWZhdWx0Wm9vbT17MTN9XHJcbiAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICBvcHRpb25zPXtnZXRNYXBPcHRpb25zfVxyXG4gICAgICA+XHJcbiAgICAgICB7bWFya2Vycy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAvLyAgPGRpdiBvbkNsaWNrID0geygpPT5zZXRNYXJrZXJDbGljayh7bGF0OiBpdGVtLmNvb3JkaW5hdGVzLmxhdCxsbmc6IGl0ZW0uY29vcmRpbmF0ZXMubG5nfSl9PlxyXG4gICAgICAgICAgPE1hcE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAvL3RleHQ9e2l0ZW0ubmFtZX0gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGF0PXsgaXRlbS5jb29yZGluYXRlcy5sYXR9XHJcbiAgICAgICAgICAgIGxuZz17IGl0ZW0uY29vcmRpbmF0ZXMubG5nfVxyXG4gICAgICAgICAgICBvdXRwdXRfa2V5ID0ge2l0ZW0ub3V0cHV0X2tleX0gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmFtZSA9IHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIC8vIGNvb3JkaW5hdGVzID0ge2l0ZW0uY29vcmRpbmF0ZXN9ICAgICAgXHJcbiAgICAgICAgICAgIHNpdGVfaW5mbz0ge2l0ZW0uc2l0ZV9pbmZvfVxyXG4gICAgICAgICAgICBmdW5jdGlvbl90b19ydW4gPSB7KCk9PnNldE1hcmtlckNsaWNrKHtuYW1lOiBpdGVtLm5hbWUsIHNpdGVfaW5mbzogaXRlbS5zaXRlX2luZm8sIGxhdDogaXRlbS5jb29yZGluYXRlcy5sYXQsbG5nOiBpdGVtLmNvb3JkaW5hdGVzLmxuZ30pfVxyXG4gICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GoogleMap/index.jsx\n");

/***/ })

})