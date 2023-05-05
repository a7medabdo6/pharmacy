"use strict";
exports.id = 3509;
exports.ids = [3509];
exports.modules = {

/***/ 9154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/category.81e3cb19.png","height":52,"width":74,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AdfL1nH1/fsy8evmFysnKMrVJiGZQv//4wAA3wAAACEAAcWzv7Xr+fdK8/XvABwXG/T06/SoO0U/kxIYDdL///8FAa0AGzPsc2zM/CYdAPTw9Pf6+/vfIRsUz+30Exfz8veqAeAAAAqpU3Zp6CogTQkHC+SGfF8Tr6y0SOLlEwBvb9J/AUq6zwQn1ONa7ufo8wkEAfK/maJskqiNUOfp/QBgXdFxAZbN6gDetrc1UDIo+Obq2u/j1N8mKUJGHQEIDPPm6efdDv9ncb0X9GMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 9290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getallCategories(credentials) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://18.130.40.220/category/", {
            headers: {
                Authorization: ""
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response);
    // throw new Error(error.response.data.message);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getallCategories);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_category_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9154);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





function CategorySliderCard({ item  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: `/products/${item?.id}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " mt-5 m-4  d-flex justify-content-center align-items-center flex-wrap",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "CategorySliderCard",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: " product",
                    src: _assets_img_category_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    alt: "Next.js Logo",
                    width: 150,
                    height: 100,
                    priority: true
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySliderCard);


/***/ })

};
;