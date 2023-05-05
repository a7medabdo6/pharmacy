exports.id = 4758;
exports.ids = [4758];
exports.modules = {

/***/ 9219:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "requests_btn__LYZ3M",
	"btnConfirm": "requests_btnConfirm__wySog",
	"buttonReview": "requests_buttonReview__AbeJB",
	"ButtonWriteReview": "requests_ButtonWriteReview__pKYNq",
	"btnCheckOurPrpducts": "requests_btnCheckOurPrpducts__PuL_X",
	"btnEditInfo": "requests_btnEditInfo__Bgxms",
	"button": "requests_button__X_VVX",
	"heddin": "requests_heddin__kJ8Jh",
	"main": "requests_main__7loHD"
};


/***/ }),

/***/ 4758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_requests_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9219);
/* harmony import */ var _styles_requests_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_requests_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ButtonRequests = ({ txtColor , bckColor , BRColor , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_requests_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
        style: {
            backgroundColor: bckColor,
            marginBottom: "16px",
            borderRadius: "5px",
            border: `1px solid ${BRColor}`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            style: {
                color: txtColor
            },
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonRequests);


/***/ })

};
;