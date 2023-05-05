"use strict";
exports.id = 7248;
exports.ids = [7248];
exports.modules = {

/***/ 2410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Leftwhite.9d69bf21.png","height":16,"width":14,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAATklEQVR42l2NQQqAIAAEV8Qg6BP13g5dKoKe0LkXCCL+aRQFL85tYJkVVsLxsEkYVQgkFiyuys+nDp7MzcHFyT7oMO6pyNxS7WjiZZUwBd0yNo3ImkF6AAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 7248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8414);
/* harmony import */ var _assets_img_alert_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4481);
/* harmony import */ var _assets_img_Leftwhite_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2410);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);








const Header = ({ title  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const handleBack = ()=>{
        router.back();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-100  pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center ",
        style: {
            backgroundColor: "#0F4392",
            borderRadius: 10,
            height: "117px",
            position: "relative"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-100 d-flex justify-content-between align-items-center ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: handleBack,
                    className: "d-flex justify-content-center align-items-center ms-3",
                    style: {
                        border: "1px solid white",
                        borderRadius: "5px",
                        width: "32px",
                        height: "25px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                        src: _assets_img_Leftwhite_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "Next.js Logo",
                        width: 14,
                        height: 16,
                        priority: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-100 d-flex justify-content-center align-items-center me-5 ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        style: {
                            color: "white",
                            margin: "0px",
                            fontWeight: "500"
                        },
                        children: title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex justify-content-center align-items-center ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                            href: "/Notifications",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                src: _assets_img_alert_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                style: {
                                    position: "absolute",
                                    right: "80px",
                                    top: "46px"
                                },
                                alt: "Next.js Logo",
                                width: 19,
                                height: 24,
                                priority: true
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " d-flex justify-content-center align-items-center ",
                            style: {
                                height: "24px",
                                width: "24px",
                                borderRadius: "50%",
                                backgroundColor: "#C5CAD4",
                                position: "absolute",
                                right: "20px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                //  className="w-20"
                                src: _assets_img_icon_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                alt: "Next.js Logo",
                                width: 14,
                                height: 16,
                                priority: true
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;