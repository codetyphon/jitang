webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/apple/github/codetyphon/jitang/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      text2 = _useState2[0],\n      setText2 = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    get();\n  }, []);\n\n  var get = function get() {\n    fetch('/static/text.json', {\n      method: 'GET',\n      mode: 'cors',\n      // 允许发送跨域请求\n      credentials: 'include'\n    }).then(function (response) {\n      //打印返回的json数据\n      response.json().then(function (data) {\n        var one = data[Math.floor(Math.random() * data.length)];\n        setText(one.text);\n        setText2(one.console);\n      });\n    })[\"catch\"](function (e) {\n      console.log('error: ' + e.toString());\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"flex-center position-ref full-height\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    onClick: get,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"title m-b-md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, text), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, text2))));\n}, \"ZRs+2d/fDZZqD9JAi8wtevZaa3Y=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJ0ZXh0MiIsInNldFRleHQyIiwidXNlRWZmZWN0IiwiZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9uZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbnNvbGUiLCJlIiwibG9nIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDZSw4RUFBTTtBQUFBOztBQUFBLGtCQUNPQSxzREFBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFHakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxPQUFHO0FBQ04sR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFHQSxNQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2RDLFNBQUssQ0FBQyxtQkFBRCxFQUFzQjtBQUN2QkMsWUFBTSxFQUFFLEtBRGU7QUFFdkJDLFVBQUksRUFBRSxNQUZpQjtBQUVWO0FBQ2JDLGlCQUFXLEVBQUU7QUFIVSxLQUF0QixDQUFMLENBSUdDLElBSkgsQ0FJUSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCO0FBQ0FBLGNBQVEsQ0FBQ0MsSUFBVCxHQUFnQkYsSUFBaEIsQ0FBcUIsVUFBVUcsSUFBVixFQUFnQjtBQUNqQyxZQUFJQyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVlELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosSUFBSSxDQUFDSyxNQUFqQyxDQUFELENBQWQ7QUFDQWpCLGVBQU8sQ0FBQ2EsR0FBRyxDQUFDZCxJQUFMLENBQVA7QUFDQUcsZ0JBQVEsQ0FBQ1csR0FBRyxDQUFDSyxPQUFMLENBQVI7QUFDSCxPQUpEO0FBS0gsS0FYRCxXQVdTLFVBQVVDLENBQVYsRUFBYTtBQUNsQkQsYUFBTyxDQUFDRSxHQUFSLENBQVksWUFBWUQsQ0FBQyxDQUFDRSxRQUFGLEVBQXhCO0FBQ0gsS0FiRDtBQWNILEdBZkQ7O0FBZ0JBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsV0FBTyxFQUFFakIsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0wsSUFBTCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRSxLQUFKLENBRkosQ0FESixDQURKLENBREo7QUFXSCxDQWpDRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0ZXh0Miwgc2V0VGV4dDJdID0gdXNlU3RhdGUoJycpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldCgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvc3RhdGljL3RleHQuanNvbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsLy8g5YWB6K645Y+R6YCB6Leo5Z+f6K+35rGCXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL+aJk+WNsOi/lOWbnueahGpzb27mlbDmja5cbiAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9uZSA9IGRhdGFbTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKSldO1xuICAgICAgICAgICAgICAgIHNldFRleHQob25lLnRleHQpO1xuICAgICAgICAgICAgICAgIHNldFRleHQyKG9uZS5jb25zb2xlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcgKyBlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBvc2l0aW9uLXJlZiBmdWxsLWhlaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgb25DbGljaz17Z2V0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG0tYi1tZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RleHR9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RleHQyfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})