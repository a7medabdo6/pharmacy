exports.id = 2810;
exports.ids = [2810];
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

/***/ 263:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "ulits_btn__TYzRU",
	"circlecontainer": "ulits_circlecontainer__FVsKm",
	"ButtonRequestOrder": "ulits_ButtonRequestOrder__cLRDW",
	"circleBeg": "ulits_circleBeg__L7s75"
};


/***/ }),

/***/ 9342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ StepProgressBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/react-step-progress-bar/styles.css
var styles = __webpack_require__(3917);
// EXTERNAL MODULE: external "react-step-progress-bar"
var external_react_step_progress_bar_ = __webpack_require__(8946);
;// CONCATENATED MODULE: ./src/Components/Ulits/MyRedCircle.js


const MyRedCircle = ({ accomplished  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            marginTop: "7px",
            backgroundColor: accomplished ? "#DD1717" : "#ECC1C1"
        }
    });
};
/* harmony default export */ const Ulits_MyRedCircle = (MyRedCircle);

// EXTERNAL MODULE: ./src/styles/ulits.module.css
var ulits_module = __webpack_require__(263);
var ulits_module_default = /*#__PURE__*/__webpack_require__.n(ulits_module);
;// CONCATENATED MODULE: ./src/Components/Ulits/Circle.js



const Circle = ({ accomplished  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ulits_module_default()).circlecontainer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (ulits_module_default()).circleBeg,
            style: {
                backgroundColor: "#DD1717"
            }
        })
    });
};
/* harmony default export */ const Ulits_Circle = (Circle);

;// CONCATENATED MODULE: ./src/Components/Ulits/StepProgressBar.js






const StepProgress = ({ value  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-80 m-5 ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_step_progress_bar_.ProgressBar, {
            percent: value,
            height: 4,
            unfilledBackground: "#ECC1C1",
            filledBackground: "linear-gradient(to right, #DD1717, #DD1717)",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_step_progress_bar_.Step, {
                    transition: "scale",
                    children: ({ accomplished  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                marginTop: "22px",
                                height: "53px"
                            },
                            className: "d-flex justify-content-between align-items-center flex-column",
                            children: [
                                accomplished && value < 35 ? /*#__PURE__*/ jsx_runtime_.jsx(Ulits_Circle, {
                                    accomplished: accomplished
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(Ulits_MyRedCircle, {
                                    accomplished: accomplished
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Received "
                                }),
                                " "
                            ]
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_step_progress_bar_.Step, {
                    transition: "scale",
                    children: ({ accomplished  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                marginTop: "22px",
                                height: "53px"
                            },
                            className: "d-flex justify-content-between align-items-center flex-column",
                            children: [
                                accomplished && value < 70 ? /*#__PURE__*/ jsx_runtime_.jsx(Ulits_Circle, {
                                    accomplished: accomplished
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(Ulits_MyRedCircle, {
                                    accomplished: accomplished
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Prepared"
                                }),
                                " "
                            ]
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_step_progress_bar_.Step, {
                    transition: "scale",
                    children: ({ accomplished  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                marginTop: "22px",
                                height: "53px"
                            },
                            className: "d-flex justify-content-between align-items-center flex-column",
                            children: [
                                accomplished && value < 100 ? /*#__PURE__*/ jsx_runtime_.jsx(Ulits_Circle, {
                                    accomplished: accomplished
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(Ulits_MyRedCircle, {
                                    accomplished: accomplished
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "On its way"
                                }),
                                " "
                            ]
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_step_progress_bar_.Step, {
                    transition: "scale",
                    children: ({ accomplished  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            style: {
                                marginTop: "22px",
                                height: "53px"
                            },
                            className: "d-flex justify-content-between align-items-center flex-column",
                            children: [
                                accomplished && value === 100 ? /*#__PURE__*/ jsx_runtime_.jsx(Ulits_MyRedCircle, {
                                    accomplished: accomplished
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(Ulits_MyRedCircle, {
                                    accomplished: accomplished
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Delivered"
                                }),
                                " "
                            ]
                        })
                })
            ]
        })
    });
};
/* harmony default export */ const StepProgressBar = (StepProgress);


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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonTrack);


/***/ }),

/***/ 3917:
/***/ (() => {



/***/ })

};
;