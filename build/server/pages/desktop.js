"use strict";
(() => {
var exports = {};
exports.id = 2099;
exports.ids = [2099];
exports.modules = {

/***/ 5619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo2.4e2bc54b.png","height":56,"width":105,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAf0lEQVR42mPgd5p0jN9poqW60wRdBp9lAv8ZGNSuyegaM8AAv/PECUBFywSdJr5kcJ603M2hpxuoiIXBezGLiNNEJwagpBy/86T/fM6TzgEV/Qcq2sngPMVG2GliCp/TxFkQU5wmzgZiez6nSdMlnSZ6SDhN9OR1mhTO7zQxEADU2icsdiDB0AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 8049:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_OurServicesCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4242);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9747);
/* harmony import */ var _assets_desk_ver_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9730);
/* harmony import */ var _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5619);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_desk_Steps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5930);
/* harmony import */ var _assets_desk_step1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2448);
/* harmony import */ var _assets_desk_step2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8551);
/* harmony import */ var _assets_desk_step3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9601);
/* harmony import */ var _assets_desk_cart_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7924);
/* harmony import */ var _assets_desk_line_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1617);
/* harmony import */ var _assets_desk_maik_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5534);
/* harmony import */ var _assets_desk_descond_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2538);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_CategorySliderCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9203);
/* harmony import */ var _Apis_Category__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9290);
/* harmony import */ var _Components_Testimonial__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1186);
/* harmony import */ var _Components_desk_CategorySliderDesk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3886);
/* harmony import */ var _Components_desk_Testimonialdesk__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8468);
/* harmony import */ var _Components_desk_FooterDesk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2727);
/* harmony import */ var _Components_desk_SliderOffer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Apis_Category__WEBPACK_IMPORTED_MODULE_19__]);
_Apis_Category__WEBPACK_IMPORTED_MODULE_19__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


























const desktop = ()=>{
    const [categories, setcateogies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getHomeData = async ()=>{
        const res = await (0,_Apis_Category__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)();
        setcateogies(res === null || res === void 0 ? void 0 : res.results);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getHomeData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "d-flex justify-content-between align-items-start flex-column  position-relative w-100",
        style: {
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    backgroundColor: "#DD1717",
                    width: "130px",
                    height: "25px",
                    right: "-52px",
                    top: "19%",
                    transform: "rotate(-90deg)",
                    textAlign: "center"
                },
                className: "position-absolute d-flex justify-content-center align-items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    style: {
                        color: "white",
                        fontSize: "12px !important"
                    },
                    children: "Write Review"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-start align-items-start flex-column    w-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            className: "navbar navbar-expand-lg bg-body-tertiary boxshadow w-100",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "container-fluid",
                                style: {
                                    width: "80%"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-center align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "navbar-brand",
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        //  className="w-20"
                                                        src: _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                        alt: "Next.js Logo",
                                                        width: 50,
                                                        height: 30,
                                                        priority: true
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "navbar-toggler",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#navbarSupportedContent",
                                                "aria-controls": "navbarSupportedContent",
                                                "aria-expanded": "false",
                                                "aria-label": "Toggle navigation",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "navbar-toggler-icon"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-center align-items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "collapse navbar-collapse",
                                            id: "navbarSupportedContent",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "navbar-nav me-auto mb-2 mb-lg-0",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-item mx-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "nav-link active",
                                                            "aria-current": "page",
                                                            href: "#",
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-item mx-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "nav-link",
                                                            href: "#",
                                                            children: "Our Products"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-item mx-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "nav-link",
                                                            href: "#",
                                                            children: "Requests"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "nav-item mx-3",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "nav-link ",
                                                            href: "#",
                                                            children: "Contact us"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-center align-items-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: "d-flex",
                                            role: "search",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn btn-outline-success me-2",
                                                    type: "submit",
                                                    style: {
                                                        backgroundColor: "white",
                                                        borderColor: "#0F4392",
                                                        color: "#0F4392",
                                                        width: "100px"
                                                    },
                                                    children: "sign in"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn btn-outline-success",
                                                    style: {
                                                        color: "white",
                                                        backgroundColor: "#0F4392",
                                                        width: "100px"
                                                    },
                                                    type: "submit",
                                                    children: "sign up"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "input-group mb-3 position-relative mt-3 d-flex justify-content-center align-items-center flex-column",
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            style: {
                                backgroundColor: "#FAFBFB",
                                borderRadius: "10px",
                                width: "78% !important"
                            },
                            className: "form-control w-100 inputsearch",
                            placeholder: "Search products",
                            "aria-label": "Search",
                            "aria-describedby": "button-addon2"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-center align-items-center flex-column mt-5   w-100",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                style: {
                                    color: "#0F4392"
                                },
                                children: "How it works"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex justify-content-around align-items-center  position-relative  ",
                                style: {
                                    width: "78%"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_Steps__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        imgsource: _assets_desk_step1_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                        title: "step1",
                                        text: " Select your products",
                                        desc: "You can contact our pharmacists for help and consultations"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_Steps__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        imgsource: _assets_desk_step2_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                        title: "Step2",
                                        text: "  confirm your order",
                                        desc: "We will contact you with prices before we ship the order to you "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_Steps__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        imgsource: _assets_desk_step3_png__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                        title: "Step3",
                                        text: " shipment and delivery",
                                        desc: "After confirming your order price, we will deliver the order to your address"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-between align-items-center mt-5 getofferbox w-100",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "60%",
                            marginLeft: "2%"
                        },
                        className: "position-relative d-flex justify-content-center align-items-center ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    left: "-20px"
                                },
                                className: "position-absolute",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        //  className="w-20"
                                        src: _assets_desk_maik_png__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
                                        style: {
                                            width: "100%",
                                            height: "100%"
                                        },
                                        alt: "Next.js Logo",
                                        height: 50,
                                        width: 50,
                                        priority: true
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    height: "95%"
                                },
                                className: "position-absolute",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        //  className="w-20"
                                        src: _assets_desk_line_png__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
                                        style: {
                                            width: "100%",
                                            height: "100%"
                                        },
                                        alt: "Next.js Logo",
                                        priority: true
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_SliderOffer__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginRight: "20px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                //  className="w-20"
                                src: _assets_desk_cart_png__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                                alt: "Next.js Logo",
                                width: 200,
                                height: 180,
                                priority: true
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-center align-items-center flex-column mt-5 w-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        style: {
                            marginBottom: 0,
                            color: "#0F4392"
                        },
                        children: " Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " mt-3 d-flex justify-content-center align-items-center flex-row w-100 ",
                        style: {
                            width: "100%",
                            overflow: "scroll"
                        },
                        children: (categories === null || categories === void 0 ? void 0 : categories.length) > 0 && categories.map((item)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_CategorySliderDesk__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                item: item,
                                text: "All medicines"
                            });
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-center align-items-center flex-column mb-5 mt-5  ",
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        style: {
                            marginBottom: 0,
                            color: "#0F4392"
                        },
                        children: " Our services"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-center align-items-center  mt-5 boxshadow boxshadow",
                        style: {
                            width: "78%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OurServicesCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OurServicesCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_OurServicesCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-flex justify-content-center align-items-center flex-column mb-5 mt-5  ",
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        style: {
                            marginBottom: 0,
                            color: "#0F4392"
                        },
                        children: "Testimonial"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "d-flex justify-content-between align-items-center  mt-5  ",
                        style: {
                            width: "78%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "boxshadow ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_Testimonialdesk__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "boxshadow mx-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_Testimonialdesk__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "boxshadow ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_Testimonialdesk__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " mt-3 d-flex justify-content-center align-items-center flex-column w-100 ",
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        style: {
                            color: "#0F4392",
                            fontSize: "14px !important"
                        },
                        children: "Check all reviews"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_FooterDesk__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (desktop);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

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
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,1664,2508,2727,8468,3509,9730,3852], () => (__webpack_exec__(8049)));
module.exports = __webpack_exports__;

})();