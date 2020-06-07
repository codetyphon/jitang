webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/apple/github/codetyphon/jitang/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    get();\n  }, []);\n\n  var get = function get() {\n    fetch('/static/text.json', {\n      method: 'GET',\n      mode: 'cors',\n      // 允许发送跨域请求\n      credentials: 'include'\n    }).then(function (response) {\n      //打印返回的json数据\n      response.json().then(function (data) {\n        var one = data[Math.floor(Math.random() * data.length)];\n        setText(one.text);\n        console.log(one.text, one.console);\n      });\n    })[\"catch\"](function (e) {\n      console.log('error: ' + e.toString());\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"flex-center position-ref full-height\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    onClick: get,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"title m-b-md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, text), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }))));\n}, \"4ujWDM02ns4tez/JXYjL1bw6ipA=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJ1c2VFZmZlY3QiLCJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib25lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNlLDhFQUFNO0FBQUE7O0FBQUEsa0JBQ09BLHNEQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBRWpCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsT0FBRztBQUNOLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsTUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNkQyxTQUFLLENBQUMsbUJBQUQsRUFBc0I7QUFDdkJDLFlBQU0sRUFBRSxLQURlO0FBRXZCQyxVQUFJLEVBQUUsTUFGaUI7QUFFVjtBQUNiQyxpQkFBVyxFQUFFO0FBSFUsS0FBdEIsQ0FBTCxDQUlHQyxJQUpILENBSVEsVUFBVUMsUUFBVixFQUFvQjtBQUN4QjtBQUNBQSxjQUFRLENBQUNDLElBQVQsR0FBZ0JGLElBQWhCLENBQXFCLFVBQVVHLElBQVYsRUFBZ0I7QUFDakMsWUFBSUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFZRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLElBQUksQ0FBQ0ssTUFBakMsQ0FBRCxDQUFkO0FBQ0FmLGVBQU8sQ0FBQ1csR0FBRyxDQUFDWixJQUFMLENBQVA7QUFDQWlCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFHLENBQUNaLElBQWhCLEVBQXNCWSxHQUFHLENBQUNLLE9BQTFCO0FBQ0gsT0FKRDtBQUtILEtBWEQsV0FXUyxVQUFVRSxDQUFWLEVBQWE7QUFDbEJGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVlDLENBQUMsQ0FBQ0MsUUFBRixFQUF4QjtBQUNILEtBYkQ7QUFjSCxHQWZEOztBQWdCQSxTQUNJO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFdBQU8sRUFBRWpCLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtILElBQUwsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBREosQ0FESjtBQVdILENBaENEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0KCk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goJy9zdGF0aWMvdGV4dC5qc29uJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJywvLyDlhYHorrjlj5HpgIHot6jln5/or7fmsYJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8v5omT5Y2w6L+U5Zue55qEanNvbuaVsOaNrlxuICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgb25lID0gZGF0YVtNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogZGF0YS5sZW5ndGgpKV07XG4gICAgICAgICAgICAgICAgc2V0VGV4dChvbmUudGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob25lLnRleHQsIG9uZS5jb25zb2xlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIGUudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jZW50ZXIgcG9zaXRpb24tcmVmIGZ1bGwtaGVpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBvbkNsaWNrPXtnZXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbS1iLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57dGV4dH08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD57fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})