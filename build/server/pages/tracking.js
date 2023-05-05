"use strict";
(() => {
var exports = {};
exports.id = 8337;
exports.ids = [8337];
exports.modules = {

/***/ 5243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Group2.77054c31.png","height":258,"width":295,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAzUlEQVR42mOAgb3LF7OC6PuPHmc+uH////0HD74+ePAgiAEESpPTOUD0lZ5ilXs3b/x4+PSZ3f379xOB+BuDqy0DS318PRtIQbVDcd6Jw6f+//3/V/nunbv+YAUa9hWiDEAQ7KCSx6CS9mf91sPPnj978v/evfv/gQoqGficJhWbOhcwgxTJ6wfPCo7Mbn758sXte/fuXWIAAX7nSTy6JuosILals18RA4Pu+g8fPxrdvXtXmwEGvJ2jwCb4OQQ6RvtEZAOZYEefOnaMGQD4dFw8BFgPJQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 5756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/vector.6a698475.png","height":118,"width":167,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEUPQ5IOQ5IPQpEOQpIOQpEOQ5IOQpEPQpEOQpEPQpEOQpIPQpEPQpEPQpEOQpIOQpIOQpEPQpEOQpIOQ5IPQpEPQpEPQpEPQpEPQpEPQpEPQpEPQpEOQpFt5uGsAAAAHXRSTlMAAAAAAAEBAgIDAwQFIkpVZ36Cg4+WnZ6oqq620ye4fcIAAAA2SURBVHjaBYCHEYAwDAPfsiGE3vv+c+Zo6/A+xhf3Jmv+BiaC9TFx3GynKePLv1uVhLg6JakAMi8ByAlFg/QAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 1473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_tracking)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/Tracking.module.css
var Tracking_module = __webpack_require__(1272);
var Tracking_module_default = /*#__PURE__*/__webpack_require__.n(Tracking_module);
// EXTERNAL MODULE: ./src/Components/Ulits/Header.js
var Header = __webpack_require__(7248);
// EXTERNAL MODULE: ./src/Components/Ulits/StepProgressBar.js + 2 modules
var StepProgressBar = __webpack_require__(9342);
;// CONCATENATED MODULE: ./src/assets/img/Group.png
/* harmony default export */ const Group = ({"src":"/_next/static/media/Group.d6df7836.png","height":201,"width":398,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhElEQVR42mOYNnU2EwMU/Pv81f3b+/fb7ly/Xg/i////nxkssSeAgevm9astn3/8efbjx///5588PeezfZMoWLLrwm3ZZQf2TXl16VTfx8vn///89OPxkduP/h958r4crMA+c4a+kWen37+v745/PrH/5ZHVl+s6ll3YOa9vcSADAwMDAHYtRvpEpLE7AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./src/Components/tracking/ButtonTrack.js
var ButtonTrack = __webpack_require__(5058);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/img/Group2.png
var Group2 = __webpack_require__(5243);
// EXTERNAL MODULE: ./src/assets/img/vector.png
var vector = __webpack_require__(5756);
;// CONCATENATED MODULE: ./src/pages/tracking.js










const tracking = ()=>{
    const [value, setvalue] = (0,external_react_.useState)(70);
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: (Tracking_module_default()).main,
        style: {
            backgroundColor: "#EDEDED"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                    title: "Order tracking"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StepProgressBar/* default */.Z, {
                    value: value
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                    children: [
                        value === 35 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        //  className="w-20"
                                        src: Group,
                                        style: {
                                            marginBottom: "30px"
                                        },
                                        alt: "Next.js Logo",
                                        width: "100%",
                                        height: "100%",
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-80 text-center d-flex justify-content-center align-items-center flex-column",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Tracking_module_default()).title,
                                        children: "We are preparing your order now. Get well soon!"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonTrack/* default */.Z, {
                                    txtColor: "white",
                                    bckColor: "#0F4392",
                                    BRColor: "#0F4392",
                                    text: "Back to our products"
                                })
                            ]
                        }) : null,
                        value === 70 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        //  className="w-20"
                                        src: Group2/* default */.Z,
                                        className: "me-5",
                                        style: {
                                            marginBottom: "30px",
                                            marginLeft: "25px"
                                        },
                                        alt: "Next.js Logo",
                                        width: "100%",
                                        height: "100%",
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-80 text-center d-flex justify-content-center align-items-center flex-column",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Tracking_module_default()).title,
                                        children: "Your order is on its way to you now. Get ready!"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonTrack/* default */.Z, {
                                    txtColor: "white",
                                    bckColor: "#0F4392",
                                    BRColor: "#0F4392",
                                    text: "Back to our products"
                                })
                            ]
                        }) : null,
                        value === 100 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Tracking_module_default()).Bigcircle,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Tracking_module_default()).circle,
                                        style: {
                                            backgroundColor: "#0f439242"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: " d-flex justify-content-center align-items-center mt-3 ",
                                            style: {
                                                position: "absolute"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                //  className="w-20"
                                                src: vector/* default */.Z,
                                                style: {
                                                    position: "absolute",
                                                    bottom: "-24px",
                                                    left: "-66px"
                                                },
                                                alt: "Next.js Logo",
                                                width: 165,
                                                height: 130,
                                                priority: true
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-80 text-center d-flex justify-content-center align-items-center flex-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (Tracking_module_default()).title,
                                            children: "Your order has een delivered successfully."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (Tracking_module_default()).title,
                                            children: "We wish you speedy recovery."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ButtonTrack/* default */.Z, {
                                    txtColor: "white",
                                    bckColor: "#0F4392",
                                    BRColor: "#0F4392",
                                    text: "Write a review"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: (Tracking_module_default()).contact,
                                    style: {
                                        color: "#2C6ECB",
                                        marginTop: 0
                                    },
                                    children: "contact us"
                                })
                            ]
                        }) : null
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const pages_tracking = (tracking);


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

/***/ 8946:
/***/ ((module) => {

module.exports = require("react-step-progress-bar");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,1664,5192,7248,2810], () => (__webpack_exec__(1473)));
module.exports = __webpack_exports__;

})();