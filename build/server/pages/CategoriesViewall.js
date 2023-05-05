(() => {
var exports = {};
exports.id = 9751;
exports.ids = [9751];
exports.modules = {

/***/ 3141:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "contact_main__9v508",
	"txtExplore": "contact_txtExplore__Afs56",
	"boxwhite": "contact_boxwhite__2cE6b",
	"number": "contact_number__Y4abU",
	"textBtnTrack": "contact_textBtnTrack__yaSHo",
	"button": "contact_button__wrJrH",
	"title": "contact_title____1iQ",
	"textsub": "contact_textsub__fH9kN",
	"textsub1": "contact_textsub1__GN9fy",
	"contact": "contact_contact__vzK1O",
	"bottomsheet": "contact_bottomsheet__syR7R"
};


/***/ }),

/***/ 8626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3141);
/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_Ulits_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7248);
/* harmony import */ var _Components_CategorySliderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9203);
/* harmony import */ var _Components_products_ButtonContact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9593);
/* harmony import */ var _Apis_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9290);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Apis_Category__WEBPACK_IMPORTED_MODULE_5__]);
_Apis_Category__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const CategoriesViewall = ()=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const snapPoints = [
        400,
        600
    ]; // Define the height values that the modal can snap to
    const [categories, setcateogies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getHomeData = async ()=>{
        const res = await (0,_Apis_Category__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
        console.log(res, "ressss");
        setcateogies(res === null || res === void 0 ? void 0 : res.results);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getHomeData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
        style: {
            backgroundColor: "#EDEDED"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "Categories"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().boxwhite),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().txtExplore),
                        children: "Explore our products or "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_products_ButtonContact__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        txtColor: "#0F4392",
                        bckColor: "white",
                        BRColor: "#0F4392",
                        text: "Contact a pharmacist"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mt-3 d-flex justify-content-between align-items-center flex-wrap  ",
                style: {
                    width: "95%"
                },
                children: (categories === null || categories === void 0 ? void 0 : categories.length) > 0 && categories.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_CategorySliderCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        item: item
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesViewall);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,1664,5192,7248,3509,9593], () => (__webpack_exec__(8626)));
module.exports = __webpack_exports__;

})();