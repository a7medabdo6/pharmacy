"use strict";
(() => {
var exports = {};
exports.id = 1187;
exports.ids = [1187];
exports.modules = {

/***/ 2024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_confirmation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/styles/confirmation.module.css
var confirmation_module = __webpack_require__(9148);
var confirmation_module_default = /*#__PURE__*/__webpack_require__.n(confirmation_module);
// EXTERNAL MODULE: ./src/assets/img/vector.png
var vector = __webpack_require__(5756);
// EXTERNAL MODULE: ./src/assets/img/icon.png
var icon = __webpack_require__(8414);
// EXTERNAL MODULE: ./src/assets/img/alert.png
var img_alert = __webpack_require__(4481);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/requests.module.css
var requests_module = __webpack_require__(9219);
var requests_module_default = /*#__PURE__*/__webpack_require__.n(requests_module);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./src/Components/Requests/ButtonConfirmation.js




const ButtonConfirmation = ({ txtColor , bckColor , BRColor , text , clicking  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        className: (requests_module_default()).btnConfirm,
        style: {
            backgroundColor: bckColor,
            marginBottom: "16px",
            borderRadius: "4px",
            border: `1px solid ${BRColor}`
        },
        onClick: clicking,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
            className: "m-0",
            style: {
                color: txtColor,
                fontSize: "15px"
            },
            children: text
        })
    });
};
/* harmony default export */ const Requests_ButtonConfirmation = (ButtonConfirmation);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
;// CONCATENATED MODULE: ./src/pages/confirmation.js












const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    padding: "7px"
};
const confirmation = ()=>{
    const [modalShow, setModalShow] = external_react_default().useState(false);
    const [open, setOpen] = external_react_default().useState(false);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (confirmation_module_default()).main,
        style: {
            backgroundColor: "#EDEDED"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center ",
                style: {
                    backgroundColor: "#0F4392",
                    borderRadius: 10,
                    height: "117px",
                    position: "relative"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " d-flex justify-content-center align-items-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            style: {
                                color: "white",
                                margin: "0px",
                                fontWeight: "500"
                            },
                            children: "confirmation"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            //  className="w-20"
                            src: img_alert/* default */.Z,
                            style: {
                                position: "absolute",
                                right: "60px"
                            },
                            alt: "Next.js Logo",
                            width: 19,
                            height: 24,
                            priority: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " d-flex justify-content-center align-items-center ",
                            style: {
                                height: "24px",
                                width: "24px",
                                borderRadius: "50%",
                                backgroundColor: "#C5CAD4",
                                position: "absolute",
                                right: "20px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                //  className="w-20"
                                src: icon/* default */.Z,
                                alt: "Next.js Logo",
                                width: 14,
                                height: 16,
                                priority: true
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " d-flex justify-content-center align-items-center my-5 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    style: {
                        color: "#0F4392",
                        fontWeight: "900",
                        fontSize: "27px"
                    },
                    children: "Thank you"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (confirmation_module_default()).Bigcircle,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (confirmation_module_default()).circle,
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
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " d-flex justify-content-center align-items-center flex-column mt-3 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "m-0",
                        style: {
                            fontSize: "29px",
                            color: "black",
                            fontWeight: "200"
                        },
                        children: " Your order has been placed  "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "m-0",
                        style: {
                            fontSize: "29px",
                            color: "black",
                            fontWeight: "200"
                        },
                        children: " succesfully , you will receice a call to  "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "m-0",
                        style: {
                            fontSize: "29px",
                            color: "black",
                            fontWeight: "200"
                        },
                        children: " confirm. "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        style: {
                            fontSize: "29px",
                            color: "black",
                            fontWeight: "200"
                        },
                        children: "Get Well Soon!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-100  d-flex justify-content-center align-items-center mt-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Requests_ButtonConfirmation, {
                        clicking: handleOpen,
                        txtColor: "red",
                        bckColor: "#EDEDED",
                        BRColor: "red",
                        text: "Cancel order"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Requests_ButtonConfirmation, {
                        txtColor: "white",
                        bckColor: "#0F4392",
                        BRColor: "#0F4392",
                        text: "Got it "
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-100  d-flex justify-content-center align-items-center mt-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    style: {
                        fontSize: "15px",
                        color: "#2C6ECB",
                        fontWeight: "bold"
                    },
                    children: "Track Your Order"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                    open: open,
                    onClose: handleClose,
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: style,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                id: "modal-modal-title",
                                variant: "h6",
                                component: "h2",
                                className: "text-center",
                                style: {
                                    color: "#0F4392",
                                    fontWeight: "bold",
                                    fontSize: "20px"
                                },
                                children: "Order Cancellation"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                id: "modal-modal-description",
                                sx: {
                                    mt: 2
                                },
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "m-0",
                                        children: "Are you sure you want to cancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "m-0",
                                        children: "your order ?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-100  d-flex justify-content-center align-items-center mt-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Requests_ButtonConfirmation, {
                                                txtColor: "red",
                                                bckColor: "white",
                                                BRColor: "red",
                                                text: "Yes Cancel "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Requests_ButtonConfirmation, {
                                                txtColor: "white",
                                                bckColor: "#0F4392",
                                                BRColor: "#0F4392",
                                                text: "Keep it "
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const pages_confirmation = (confirmation);


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9564:
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,5192,6395], () => (__webpack_exec__(2024)));
module.exports = __webpack_exports__;

})();