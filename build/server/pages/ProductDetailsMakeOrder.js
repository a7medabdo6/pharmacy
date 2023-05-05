"use strict";
(() => {
var exports = {};
exports.id = 2363;
exports.ids = [2363];
exports.modules = {

/***/ 8723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3141);
/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Ulits_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7248);
/* harmony import */ var react_modal_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(259);
/* harmony import */ var react_modal_sheet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_sheet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Ulits_ModalContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2575);
/* harmony import */ var _Components_Slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(787);
/* harmony import */ var _Components_Ulits_ButtonProductDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5727);
/* harmony import */ var _Components_Requests_ButtonRequests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Ulits_ModalContent__WEBPACK_IMPORTED_MODULE_4__]);
_Components_Ulits_ModalContent__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ProductDetailsMakeOrder = ()=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const snapPoints = [
        400,
        600
    ]; // Define the height values that the modal can snap to
    const circleStyle = {
        backgroundColor: "#0F4392",
        height: "32px",
        width: "32px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "16px"
    };
    const makerequest = ()=>{};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
        style: {
            backgroundColor: "#EDEDED"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "Product details"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "  d-flex justify-content-center align-items-center flex-column bg-white ",
                style: {
                    bottom: 0,
                    height: "166px",
                    width: "100%",
                    borderRadius: "15px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "95%",
                            marginBottom: "20px"
                        },
                        className: "  d-flex justify-content-start align-items-center  ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: circleStyle,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: "#0F4392",
                                    fontFamily: "400",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    marginLeft: "10px"
                                },
                                children: "Products have been selected"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "95%"
                        },
                        className: " d-flex justify-content-start align-items-center ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Requests_ButtonRequests__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            txtColor: "white",
                            bckColor: "#0F4392",
                            BRColor: "#0F4392",
                            text: "Place Order"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "95%"
                        },
                        className: "  d-flex justify-content-start align-items-center ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                textAlign: "center",
                                color: "#DD1717"
                            },
                            children: "Note that: your order will not be confirmed before you receive a call from us to let you know your order price to confirm."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%"
                },
                className: " d-flex justify-content-center align-items-center ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Slideshow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "95%"
                },
                className: "d-flex justify-content-between align-items-center mx-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "50%",
                            marginRight: "10px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                style: {
                                    fontSize: "14px",
                                    lineHeight: "16px",
                                    fontWeight: "bold",
                                    color: "black",
                                    marginBottom: 0
                                },
                                children: "Product Category"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                style: {
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "bold",
                                    color: "black",
                                    marginBottom: "5px",
                                    marginTop: "5px"
                                },
                                children: "pandol extra xx mg"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                style: {
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    color: "#828282"
                                },
                                children: [
                                    " ",
                                    "lorem loremm sdg sgdgsdfg gdfgdfg gsflorem loremm sdg sgdgsdfg gdfgdfg gsfgg"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "50%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_ButtonProductDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            txtColor: "white",
                            bckColor: "#0F4392",
                            BRColor: "#0F4392",
                            text: "Make a  request"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    background: "grey",
                    width: "95%",
                    height: "1px",
                    marginTop: "15px",
                    marginBottom: "30px"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "95%"
                },
                className: "d-flex justify-content-start align-items-center  mx-2",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        style: {
                            color: "#0F4392"
                        },
                        children: "Product details"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "95%"
                },
                className: "d-flex justify-content-start align-items-center flex-column  mx-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "95%"
                        },
                        className: "d-flex justify-content-start align-items-start mt-2 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginBottom: 0,
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    opacity: "77%"
                                },
                                children: "Brand:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: "grey",
                                    fontSize: "18px"
                                },
                                children: "Lorem Ipsum"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "95%"
                        },
                        className: "d-flex justify-content-start align-items-start mt-2 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginBottom: 0,
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    opacity: "77%"
                                },
                                children: "Active ingredients :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: "grey",
                                    fontSize: "18px"
                                },
                                children: "Lorem Ipsum"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "95%"
                        },
                        className: "d-flex justify-content-start align-items-start mt-2  ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginBottom: 0,
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    opacity: "77%"
                                },
                                children: "User:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: "grey",
                                    fontSize: "18px"
                                },
                                children: "Lorem Ipsum"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "95%"
                        },
                        className: "d-flex justify-content-start align-items-start mt-2 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    marginBottom: 0,
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    opacity: "77%"
                                },
                                children: "Russian similar:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: "grey",
                                    fontSize: "18px"
                                },
                                children: "Lorem Ipsum"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "95%"
                        },
                        className: "d-flex justify-content-start align-items-start mt-2 ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        marginBottom: 0,
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        opacity: "77%"
                                    },
                                    children: "Description:"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        color: "grey",
                                        fontSize: "18px"
                                    },
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailsMakeOrder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3765:
/***/ ((module) => {

module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 259:
/***/ ((module) => {

module.exports = require("react-modal-sheet");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 4508:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,1664,5192,7248,6712,5749,4758], () => (__webpack_exec__(8723)));
module.exports = __webpack_exports__;

})();