exports.id = 5058;
exports.ids = [5058];
exports.modules = {

/***/ 1272:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Tracking_main__VB7ei",
	"circle": "Tracking_circle__jjRtP",
	"Bigcircle": "Tracking_Bigcircle__cUDI6",
	"textBtnTrack": "Tracking_textBtnTrack__fckVu",
	"button": "Tracking_button__pHovY",
	"title": "Tracking_title__BQYzW",
	"contact": "Tracking_contact__JOHyW"
};


/***/ }),

/***/ 5058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Tracking_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1272);
/* harmony import */ var _styles_Tracking_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Tracking_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ButtonTrack = ({ txtColor , bckColor , BRColor , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "d-block d-sm-none d-flex",
        style: {
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: 0
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Tracking_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
            style: {
                backgroundColor: bckColor,
                marginBottom: "16px",
                borderRadius: "5px",
                border: `1px solid ${BRColor}`
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                className: (_styles_Tracking_module_css__WEBPACK_IMPORTED_MODULE_2___default().textBtnTrack),
                style: {
                    color: txtColor
                },
                children: text
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonTrack);


/***/ })

};
;