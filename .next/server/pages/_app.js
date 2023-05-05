/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/Slices/productSlice.js":
/*!************************************!*\
  !*** ./src/Slices/productSlice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductDetailsSlice\": () => (/* binding */ ProductDetailsSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setProductDetails\": () => (/* binding */ setProductDetails)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    details: null\n};\nconst ProductDetailsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"ProductDetails\",\n    initialState,\n    reducers: {\n        setProductDetails: (state, action)=>{\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n            // doesn't actually mutate the state because it uses the Immer library,\n            // which detects changes to a \"draft state\" and produces a brand new\n            // immutable state based off those changes\n            state.details = action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { setProductDetails  } = ProductDetailsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2xpY2VzL3Byb2R1Y3RTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxlQUFlO0lBQ25CQyxTQUFTLElBQUk7QUFDZjtBQUVPLE1BQU1DLHNCQUFzQkgsNkRBQVdBLENBQUM7SUFDN0NJLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxtQkFBbUIsQ0FBQ0MsT0FBT0MsU0FBVztZQUNwQyxvRUFBb0U7WUFDcEUsdUVBQXVFO1lBQ3ZFLG9FQUFvRTtZQUNwRSwwQ0FBMEM7WUFDMUNELE1BQU1MLE9BQU8sR0FBR00sT0FBT0MsT0FBTztRQUNoQztJQUNGO0FBQ0YsR0FBRztBQUVILCtEQUErRDtBQUN4RCxNQUFNLEVBQUVILGtCQUFpQixFQUFFLEdBQUdILG9CQUFvQk8sT0FBTyxDQUFDO0FBRWpFLGlFQUFlUCxvQkFBb0JRLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoYXJtYWN5Ly4vc3JjL1NsaWNlcy9wcm9kdWN0U2xpY2UuanM/ZTQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGV0YWlsczogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0RGV0YWlsc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcIlByb2R1Y3REZXRhaWxzXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRQcm9kdWN0RGV0YWlsczogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8vIFJlZHV4IFRvb2xraXQgYWxsb3dzIHVzIHRvIHdyaXRlIFwibXV0YXRpbmdcIiBsb2dpYyBpbiByZWR1Y2Vycy4gSXRcbiAgICAgIC8vIGRvZXNuJ3QgYWN0dWFsbHkgbXV0YXRlIHRoZSBzdGF0ZSBiZWNhdXNlIGl0IHVzZXMgdGhlIEltbWVyIGxpYnJhcnksXG4gICAgICAvLyB3aGljaCBkZXRlY3RzIGNoYW5nZXMgdG8gYSBcImRyYWZ0IHN0YXRlXCIgYW5kIHByb2R1Y2VzIGEgYnJhbmQgbmV3XG4gICAgICAvLyBpbW11dGFibGUgc3RhdGUgYmFzZWQgb2ZmIHRob3NlIGNoYW5nZXNcbiAgICAgIHN0YXRlLmRldGFpbHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHsgc2V0UHJvZHVjdERldGFpbHMgfSA9IFByb2R1Y3REZXRhaWxzU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHNTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiZGV0YWlscyIsIlByb2R1Y3REZXRhaWxzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRQcm9kdWN0RGV0YWlscyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Slices/productSlice.js\n");

/***/ }),

/***/ "./src/Slices/testSlice.js":
/*!*********************************!*\
  !*** ./src/Slices/testSlice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: 0\n};\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        increment: (state)=>{\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n            // doesn't actually mutate the state because it uses the Immer library,\n            // which detects changes to a \"draft state\" and produces a brand new\n            // immutable state based off those changes\n            state.value += 1;\n        },\n        decrement: (state)=>{\n            state.value -= 1;\n        },\n        incrementByAmount: (state, action)=>{\n            state.value += action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { increment , decrement , incrementByAmount  } = counterSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2xpY2VzL3Rlc3RTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLE9BQU87QUFDVDtBQUVPLE1BQU1DLGVBQWVILDZEQUFXQSxDQUFDO0lBQ3RDSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsV0FBVyxDQUFDQyxRQUFVO1lBQ3BCLG9FQUFvRTtZQUNwRSx1RUFBdUU7WUFDdkUsb0VBQW9FO1lBQ3BFLDBDQUEwQztZQUMxQ0EsTUFBTUwsS0FBSyxJQUFJO1FBQ2pCO1FBQ0FNLFdBQVcsQ0FBQ0QsUUFBVTtZQUNwQkEsTUFBTUwsS0FBSyxJQUFJO1FBQ2pCO1FBQ0FPLG1CQUFtQixDQUFDRixPQUFPRyxTQUFXO1lBQ3BDSCxNQUFNTCxLQUFLLElBQUlRLE9BQU9DLE9BQU87UUFDL0I7SUFDRjtBQUNGLEdBQUc7QUFFSCwrREFBK0Q7QUFDeEQsTUFBTSxFQUFFTCxVQUFTLEVBQUVFLFVBQVMsRUFBRUMsa0JBQWlCLEVBQUUsR0FBR04sYUFBYVMsT0FBTyxDQUFDO0FBRWhGLGlFQUFlVCxhQUFhVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGFybWFjeS8uL3NyYy9TbGljZXMvdGVzdFNsaWNlLmpzPzQ4ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHZhbHVlOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvdW50ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjb3VudGVyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgLy8gUmVkdXggVG9vbGtpdCBhbGxvd3MgdXMgdG8gd3JpdGUgXCJtdXRhdGluZ1wiIGxvZ2ljIGluIHJlZHVjZXJzLiBJdFxuICAgICAgLy8gZG9lc24ndCBhY3R1YWxseSBtdXRhdGUgdGhlIHN0YXRlIGJlY2F1c2UgaXQgdXNlcyB0aGUgSW1tZXIgbGlicmFyeSxcbiAgICAgIC8vIHdoaWNoIGRldGVjdHMgY2hhbmdlcyB0byBhIFwiZHJhZnQgc3RhdGVcIiBhbmQgcHJvZHVjZXMgYSBicmFuZCBuZXdcbiAgICAgIC8vIGltbXV0YWJsZSBzdGF0ZSBiYXNlZCBvZmYgdGhvc2UgY2hhbmdlc1xuICAgICAgc3RhdGUudmFsdWUgKz0gMTtcbiAgICB9LFxuICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSAtPSAxO1xuICAgIH0sXG4gICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gPSBjb3VudGVyU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Slices/testSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__]);\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// import Font Awesome CSS\n\n\n\n// Tell Font Awesome to skip adding the CSS automatically \n// since it's already imported above\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.config.autoAddCss = false;\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_5__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/ahmed/Desktop/pharmacy/pharmacy/src/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmed/Desktop/pharmacy/pharmacy/src/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDakI7QUFDN0IsMEJBQTBCO0FBQzRCO0FBQ1I7QUFDYTtBQUMzRCwwREFBMEQ7QUFDMUQsb0NBQW9DO0FBQ0o7QUFDTTtBQUN0Q0EsZ0ZBQWlCLEdBQUcsS0FBSztBQUNWLFNBQVNJLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxxQkFBUyw4REFBQ0osaURBQVFBO1FBQUNELE9BQU9BLHlDQUFLQTtrQkFDL0IsNEVBQUNJO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoYXJtYWN5Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuLy8gaW1wb3J0IEZvbnQgQXdlc29tZSBDU1NcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjsgXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG4vLyBUZWxsIEZvbnQgQXdlc29tZSB0byBza2lwIGFkZGluZyB0aGUgQ1NTIGF1dG9tYXRpY2FsbHkgXHJcbi8vIHNpbmNlIGl0J3MgYWxyZWFkeSBpbXBvcnRlZCBhYm92ZVxyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlOyBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgPC9Qcm92aWRlcj5cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbmZpZyIsInN0b3JlIiwiUHJvdmlkZXIiLCJhdXRvQWRkQ3NzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Slices_testSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slices/testSlice */ \"./src/Slices/testSlice.js\");\n/* harmony import */ var _Slices_productSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slices/productSlice */ \"./src/Slices/productSlice.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst reducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n    counter: _Slices_testSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ProductDetails: _Slices_productSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNGO0FBQ1U7QUFDbEI7QUFDeEMsTUFBTUksVUFBVUQsc0RBQWVBLENBQUM7SUFDOUJFLFNBQVNKLHlEQUFjQTtJQUN2QkssZ0JBQWdCSiw0REFBcUJBO0FBQ3ZDO0FBQ08sTUFBTUssUUFBUVAsZ0VBQWNBLENBQUM7SUFDbENJO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3BoYXJtYWN5Ly4vc3JjL3N0b3JlLmpzP2NkYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGNvdW50ZXJSZWR1Y2VyIGZyb20gXCIuL1NsaWNlcy90ZXN0U2xpY2VcIjtcbmltcG9ydCBQcm9kdWN0RGV0YWlsc1JlZHVjZXIgZnJvbSBcIi4vU2xpY2VzL3Byb2R1Y3RTbGljZVwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY291bnRlcjogY291bnRlclJlZHVjZXIsXG4gIFByb2R1Y3REZXRhaWxzOiBQcm9kdWN0RGV0YWlsc1JlZHVjZXIsXG59KTtcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcixcbn0pO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJQcm9kdWN0RGV0YWlsc1JlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyIiwiY291bnRlciIsIlByb2R1Y3REZXRhaWxzIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();