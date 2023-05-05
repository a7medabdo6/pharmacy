"use strict";
(() => {
var exports = {};
exports.id = 1753;
exports.ids = [1753];
exports.modules = {

/***/ 7672:
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
/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3141);
/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Components_Ulits_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7248);
/* harmony import */ var _Components_Ulits_StepProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9342);
/* harmony import */ var _assets_img_Frame_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1634);
/* harmony import */ var _assets_img_viber_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1436);
/* harmony import */ var _assets_img_messenger_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3020);
/* harmony import */ var _assets_img_whatsapp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5757);
/* harmony import */ var _assets_img_telegram_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9421);
/* harmony import */ var _assets_img_location_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(790);
/* harmony import */ var _assets_img_phone_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6114);
/* harmony import */ var _Components_Ulits_BottomNav_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(730);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6872);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_tracking_ButtonTrack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5058);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Components_Ulits_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8888);
/* harmony import */ var _Components_Ulits_ButtonRequestOrder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2474);
/* harmony import */ var react_modal_sheet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(259);
/* harmony import */ var react_modal_sheet__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_modal_sheet__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_Ulits_ModalContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Ulits_BottomNav_js__WEBPACK_IMPORTED_MODULE_11__, _Components_Ulits_ModalContent__WEBPACK_IMPORTED_MODULE_18__]);
([_Components_Ulits_BottomNav_js__WEBPACK_IMPORTED_MODULE_11__, _Components_Ulits_ModalContent__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const contactus = ()=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const snapPoints = [
        400,
        600
    ]; // Define the height values that the modal can snap to
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().main),
        style: {
            backgroundColor: "#EDEDED"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "Contact us"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    backgroundColor: "white",
                    width: "95%",
                    borderRadius: "15px"
                },
                className: " mt-2  d-flex justify-content-center align-items-center flex-column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().title),
                        children: " We are here for you"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                            //  className="w-20"
                            src: _assets_img_Frame_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                            alt: "Next.js Logo",
                            width: "100%",
                            height: "100%",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().textsub),
                        children: " Social media contacts"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().textsub1),
                        children: [
                            " ",
                            "If you need a help from our pharmacists or want to order a specific prescription contact us via",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-100 text-center d-flex justify-content-center align-items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                //  className="w-20"
                                src: _assets_img_telegram_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                style: {
                                    margin: "10px"
                                },
                                alt: "Next.js Logo",
                                width: "32px",
                                height: "32px",
                                priority: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                //  className="w-20"
                                src: _assets_img_whatsapp_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                style: {
                                    margin: "10px"
                                },
                                alt: "Next.js Logo",
                                width: "32px",
                                height: "32px",
                                priority: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                //  className="w-20"
                                src: _assets_img_messenger_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                style: {
                                    margin: "10px"
                                },
                                alt: "Next.js Logo",
                                width: "32px",
                                height: "32px",
                                priority: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                //  className="w-20"
                                src: _assets_img_viber_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                style: {
                                    margin: "10px"
                                },
                                alt: "Next.js Logo",
                                width: "32px",
                                height: "32px",
                                priority: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-2",
                        style: {
                            height: "1px",
                            backgroundColor: "grey",
                            width: "80%"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().textsub),
                        children: " Reach us via"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-90 d-flex text-center justify-content-around align-items-center  flex-column",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-100 d-flex text-center justify-content-between align-items-center mx-5 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " d-flex text-center justify-content-center align-items-center ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                //  className="w-20"
                                                src: _assets_img_phone_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                                alt: "Next.js Logo",
                                                width: "15px",
                                                height: "20px",
                                                priority: true
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().number),
                                                children: "(+20)1050777117"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " d-flex justify-content-center align-items-center  ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_Button__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            txtColor: "#0F4392",
                                            bckColor: "white",
                                            BRColor: "#0F4392",
                                            text: "Call now"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-100 d-flex text-center justify-content-start align-items-center mt-3 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        //  className="w-20"
                                        src: _assets_img_location_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                        alt: "Next.js Logo",
                                        width: "15px",
                                        height: "20px",
                                        priority: true
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().number),
                                        children: "Tal avenu- white hills hotel, Sharm Elsheikh, Egypt"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-80 d-flex  justify-content-start align-items-center  ",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal_sheet__WEBPACK_IMPORTED_MODULE_17___default()), {
                                            isOpen: isOpen,
                                            onClose: ()=>setOpen(false),
                                            snapPoints: snapPoints,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal_sheet__WEBPACK_IMPORTED_MODULE_17___default().Container), {
                                                    className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_19___default().bottomsheet),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal_sheet__WEBPACK_IMPORTED_MODULE_17___default().Header), {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-100 d-flex  justify-content-center align-items-center  ",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                style: {
                                                                    color: "#0F4392"
                                                                },
                                                                children: "Request a call"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal_sheet__WEBPACK_IMPORTED_MODULE_17___default().Content), {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_ModalContent__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                                setOpen: setOpen
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal_sheet__WEBPACK_IMPORTED_MODULE_17___default().Backdrop), {})
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: "95%"
                                },
                                onClick: ()=>setOpen(true),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_ButtonRequestOrder__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    txtColor: "white",
                                    bckColor: "#0F4392",
                                    BRColor: "#0F4392",
                                    text: "Request a call"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "position-absolute ",
                style: {
                    bottom: 0,
                    width: "95%",
                    borderRadius: "15px"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "position-absolute ",
                style: {
                    bottom: 0,
                    width: "100%",
                    borderRadius: "15px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_BottomNav_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactus);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 6872:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Phone");

/***/ }),

/***/ 704:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PhoneEnabled");

/***/ }),

/***/ 4193:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Store");

/***/ }),

/***/ 3765:
/***/ ((module) => {

module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 5678:
/***/ ((module) => {

module.exports = require("@mui/material/BottomNavigation");

/***/ }),

/***/ 7307:
/***/ ((module) => {

module.exports = require("@mui/material/BottomNavigationAction");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

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

/***/ 8946:
/***/ ((module) => {

module.exports = require("react-step-progress-bar");

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
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,1664,5192,7248,2508,2810,6712,730,5544], () => (__webpack_exec__(7672)));
module.exports = __webpack_exports__;

})();