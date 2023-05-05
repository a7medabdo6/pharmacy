exports.id = 9593;
exports.ids = [9593];
exports.modules = {

/***/ 4284:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "products_main__5PxBk",
	"boxfilter": "products_boxfilter__ga0ru",
	"iconfilter": "products_iconfilter__pdJD5",
	"boxinfo": "products_boxinfo__TAPst",
	"txtcard": "products_txtcard__uyQfd",
	"boxcardprdoduct": "products_boxcardprdoduct__L60hb",
	"discount": "products_discount__4_cwY",
	"cardproductImage": "products_cardproductImage__e7BF3",
	"titlecard": "products_titlecard__JIWDz",
	"greybox": "products_greybox__8UsvG",
	"txtofboxgrey": "products_txtofboxgrey__CrVHa",
	"button": "products_button__Pvdik",
	"ButtonMak": "products_ButtonMak__u8o20",
	"bottomsheet": "products_bottomsheet__T3_nv",
	"txtExplore": "products_txtExplore__1JSSX",
	"boxwhite": "products_boxwhite__gq4kn",
	"label": "products_label__zARY_",
	"txtfilter": "products_txtfilter__GyAqr",
	"boxsearch": "products_boxsearch__faI0N"
};


/***/ }),

/***/ 9593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_products_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4284);
/* harmony import */ var _styles_products_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ButtonContact = ({ txtColor , bckColor , BRColor , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
        style: {
            backgroundColor: bckColor,
            marginBottom: "16px",
            borderRadius: "5px",
            border: `1px solid ${BRColor}`,
            padding: 10
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            style: {
                color: txtColor
            },
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonContact);


/***/ })

};
;