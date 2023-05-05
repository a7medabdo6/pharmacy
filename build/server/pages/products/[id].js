"use strict";
(() => {
var exports = {};
exports.id = 9304;
exports.ids = [9304];
exports.modules = {

/***/ 2410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Leftwhite.9d69bf21.png","height":16,"width":14,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAATklEQVR42l2NQQqAIAAEV8Qg6BP13g5dKoKe0LkXCCL+aRQFL85tYJkVVsLxsEkYVQgkFiyuys+nDp7MzcHFyT7oMO6pyNxS7WjiZZUwBd0yNo3ImkF6AAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 8242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/exit.e5ab6d52.png","height":10,"width":10,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAGFBMVEXBfwCTchN2ZlBbX2FbX2FbX2FaXmJbXmLHToikAAAAB3RSTlMAAAKjpKv4UJ7lYwAAACVJREFUeNpjSFUUCmMId2ApZVApNndiEDAvZgQTYC5EIlVRKAwAl4EHk2bAy+wAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/iconfilter.1ad6ae9b.png","height":12,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEUPRZEPRJIPQ5IPQpIPQpIPQ5IPQ5EPQ5IPQ5EPQZEPQpIPQ5IPQpIPQpIPQpIPQpIPQpIPQpEPQpIPQ5IPQ5LBpb/lAAAAFXRSTlMAAAAAAgUFCAgICQshkcTFy8vMztEOzU/kAAAALklEQVR42gVAhREAIAh8OwmB/Wf1IK5P1QWp7zl3S8gUzEEZWGeMs4Bartkt9QMoBQGZ6bHuVQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 8055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function Postcontactus(Data) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://18.130.40.220/contactus/", Data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response);
    // throw new Error(error.response.data.message);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Postcontactus);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getallProducts(data) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`http://18.130.40.220/product/?category=${data.id}`, {
            headers: {
                Authorization: ""
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response);
    // throw new Error(error.response.data.message);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getallProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_CardProduct)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/products.module.css
var products_module = __webpack_require__(4284);
var products_module_default = /*#__PURE__*/__webpack_require__.n(products_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/Slices/productSlice.js
var productSlice = __webpack_require__(9640);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
;// CONCATENATED MODULE: ./src/Components/products/ButtonMak.js



const ButtonMak = ({ txtColor , bckColor , BRColor , text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (products_module_default()).ButtonMak,
        style: {
            backgroundColor: bckColor,
            marginBottom: "16px",
            borderRadius: "5px",
            border: `1px solid ${BRColor}`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            style: {
                color: txtColor
            },
            children: text
        })
    });
};
/* harmony default export */ const products_ButtonMak = (ButtonMak);

;// CONCATENATED MODULE: ./src/Components/products/CardProduct.js









const CardProduct = ({ item , id  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,navigation.useRouter)();
    const onCardClick = ()=>{
        router.push(`/products/${id}/details/${item === null || item === void 0 ? void 0 : item.id}`);
        dispatch((0,productSlice/* setProductDetails */.AB)(item));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (products_module_default()).boxcardprdoduct,
        onClick: onCardClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                //  className="w-20"
                loader: ()=>{
                    return item === null || item === void 0 ? void 0 : item.home_image;
                },
                src: item === null || item === void 0 ? void 0 : item.home_image,
                className: (products_module_default()).cardproductImage,
                alt: "Next.js Logo",
                width: 92,
                height: 200,
                priority: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (products_module_default()).boxinfo,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (products_module_default()).titlecard,
                        children: item === null || item === void 0 ? void 0 : item.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (products_module_default()).txtcard,
                        children: item === null || item === void 0 ? void 0 : item.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(products_ButtonMak, {
                txtColor: "white",
                bckColor: "#0F4392",
                BRColor: "#0F4392",
                text: "Make a request"
            }),
            (item === null || item === void 0 ? void 0 : item.description) === true ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (products_module_default()).discount,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        color: "#0F4392",
                        fontSize: "10px"
                    },
                    children: "-10 %"
                })
            }) : null
        ]
    });
};
/* harmony default export */ const products_CardProduct = (CardProduct);


/***/ }),

/***/ 9496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_DropdownFilter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "multiselect-react-dropdown"
const external_multiselect_react_dropdown_namespaceObject = require("multiselect-react-dropdown");
var external_multiselect_react_dropdown_default = /*#__PURE__*/__webpack_require__.n(external_multiselect_react_dropdown_namespaceObject);
;// CONCATENATED MODULE: ./src/Components/products/DropdownFilter.js




const DropdownFilter = ({ options , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-100 mb-2 mt-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-1",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_multiselect_react_dropdown_default()), {
                options: options,
                // Function will trigger on remove event
                showCheckbox: true,
                placeholder: "All",
                disablePreSelectedValues: false,
                displayValue: "name" // Property name to display in the dropdown options
            })
        ]
    });
};
/* harmony default export */ const products_DropdownFilter = (DropdownFilter);


/***/ }),

/***/ 9433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _styles_products_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4284);
/* harmony import */ var _styles_products_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SearchInput = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_4___default().boxsearch),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "text",
            className: "form-control w-100",
            placeholder: "Search...",
            "aria-label": "Search",
            "aria-describedby": "search-icon"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AB": () => (/* binding */ setProductDetails),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ProductDetailsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    details: null
};
const ProductDetailsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ProductDetails",
    initialState,
    reducers: {
        setProductDetails: (state, action)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.details = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setProductDetails  } = ProductDetailsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailsSlice.reducer);


/***/ }),

/***/ 7635:
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
/* harmony import */ var _styles_products_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4284);
/* harmony import */ var _styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Components_Ulits_BottomNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(259);
/* harmony import */ var react_modal_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal_sheet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8414);
/* harmony import */ var _assets_img_alert_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4481);
/* harmony import */ var _assets_img_Leftwhite_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2410);
/* harmony import */ var _assets_img_exit_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8242);
/* harmony import */ var _Components_desk_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7647);
/* harmony import */ var _Components_desk_FooterDesk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2727);
/* harmony import */ var _assets_img_iconfilter_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2911);
/* harmony import */ var _Components_products_SearchInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9433);
/* harmony import */ var _Components_products_ButtonContact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9593);
/* harmony import */ var _Components_products_CardProduct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3736);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Components_products_DropdownFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9496);
/* harmony import */ var _Apis_products__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5909);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Ulits_BottomNav__WEBPACK_IMPORTED_MODULE_2__, _Components_products_SearchInput__WEBPACK_IMPORTED_MODULE_12__, _Apis_products__WEBPACK_IMPORTED_MODULE_18__]);
([_Components_Ulits_BottomNav__WEBPACK_IMPORTED_MODULE_2__, _Components_products_SearchInput__WEBPACK_IMPORTED_MODULE_12__, _Apis_products__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const products = ()=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [products, setproducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const snapPoints = [
        400,
        600
    ]; // Define the height values that the modal can snap to
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const { id  } = router.query;
    console.log(id, "idd");
    const getHomeData = async (e)=>{
        const res = await (0,_Apis_products__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)({
            id: e
        });
        console.log(res, "ressss");
        setproducts(res === null || res === void 0 ? void 0 : res.results);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (id) {
            getHomeData(id);
        }
    }, [
        id
    ]);
    const handleBack = ()=>{
        router.back();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "d-none d-sm-block w-100 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_NavBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
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
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().main),
                style: {
                    backgroundColor: "transparent"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-100 text-center d-flex justify-content-center align-items-center flex-column",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center  d-block d-sm-none align-items-center flex-column ",
                                style: {
                                    backgroundColor: "#0F4392",
                                    borderRadius: 10,
                                    height: "150px",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-100 d-flex justify-content-between align-items-center ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: handleBack,
                                                className: "d-flex justify-content-center align-items-center ms-3",
                                                style: {
                                                    border: "1px solid white",
                                                    borderRadius: "5px",
                                                    width: "25px",
                                                    height: "25px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    //  className="w-20"
                                                    src: _assets_img_Leftwhite_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
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
                                                    children: "products"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex justify-content-center align-items-center ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                        href: "/Notifications",
                                                        className: "w-100",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            //  className="w-20"
                                                            src: _assets_img_alert_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                                            style: {
                                                                position: "absolute",
                                                                right: "80px",
                                                                top: "24px"
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
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            //  className="w-20"
                                                            src: _assets_img_icon_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                                            alt: "Next.js Logo",
                                                            width: 14,
                                                            height: 16,
                                                            priority: true
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            width: "95%"
                                        },
                                        className: " d-flex justify-content-between mx-3 align-items-center flex-row-reverse mt-5 ",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                onClick: ()=>setOpen(true),
                                                className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().boxfilter),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        //  className="w-20"
                                                        src: _assets_img_iconfilter_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().iconfilter),
                                                        alt: "Next.js Logo",
                                                        width: 14,
                                                        height: 16,
                                                        priority: true
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().txtfilter),
                                                        children: "Filter"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_products_SearchInput__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex justify-content-start align-items-center  mt-3 flex-wrap",
                                style: {
                                    width: "95%"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-center align-items-center ",
                                        style: {
                                            backgroundColor: "#DD1717",
                                            borderRadius: "4px",
                                            width: "32px",
                                            height: "28px",
                                            margin: 5
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().label),
                                            children: "all"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-center align-items-center mx-2",
                                        style: {
                                            backgroundColor: "rgba(221, 23, 23, 0.2)",
                                            borderRadius: "4px",
                                            width: "119px",
                                            height: "28px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().label),
                                            children: "Top 50 medicines"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-center align-items-center mx-2",
                                        style: {
                                            backgroundColor: "rgba(221, 23, 23, 0.2)",
                                            borderRadius: "4px",
                                            width: "119px",
                                            height: "28px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().label),
                                            children: "Natural oils and herbs "
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-flex justify-content-center align-items-center mx-2",
                                        style: {
                                            backgroundColor: "rgba(221, 23, 23, 0.2)",
                                            borderRadius: "4px",
                                            width: "119px",
                                            height: "28px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().label),
                                            children: "Cosmtics "
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.Row, {
                        className: "mt-3 m-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.Col, {
                                md: 3,
                                sm: 12,
                                className: "d-none d-sm-block",
                                children: "tt"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.Col, {
                                md: 9,
                                sm: 12,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "d-flex justify-content-start align-items-center flex-wrap  mb-3 ",
                                        style: {
                                            width: "95%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().greybox),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().txtofboxgrey),
                                                        children: "Diclofenac Sodium"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        //  className="w-20"
                                                        src: _assets_img_exit_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                        className: "mx-1",
                                                        alt: "Next.js Logo",
                                                        width: 10,
                                                        height: 10,
                                                        priority: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().greybox),
                                                style: {
                                                    width: "134px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().txtofboxgrey),
                                                        children: "Sodium Chloride"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        //  className="w-20"
                                                        src: _assets_img_exit_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                        className: "mx-1",
                                                        alt: "Next.js Logo",
                                                        width: 10,
                                                        height: 10,
                                                        priority: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().greybox),
                                                style: {
                                                    width: "94px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().txtofboxgrey),
                                                        children: "Ibuprofen"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        //  className="w-20"
                                                        src: _assets_img_exit_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                        className: "mx-1",
                                                        alt: "Next.js Logo",
                                                        width: 10,
                                                        height: 10,
                                                        priority: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().greybox),
                                                style: {
                                                    width: "134px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().txtofboxgrey),
                                                        children: "Sodium Chloride"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        //  className="w-20"
                                                        src: _assets_img_exit_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                        className: "mx-1",
                                                        alt: "Next.js Logo",
                                                        width: 10,
                                                        height: 10,
                                                        priority: true
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().boxwhite),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().txtExplore),
                                                children: "Explore our products or "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_products_ButtonContact__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                txtColor: "#0F4392",
                                                bckColor: "white",
                                                BRColor: "#0F4392",
                                                text: "Contact a pharmacist"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.Row, {
                                        children: products === null || products === void 0 ? void 0 : products.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.Col, {
                                                className: "col-md-6 col-lg-4 col-sm-6 col-12",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_products_CardProduct__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                    item: item,
                                                    id: id
                                                })
                                            }))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-80 d-flex  justify-content-start align-items-center  ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal_sheet__WEBPACK_IMPORTED_MODULE_4___default()), {
                            isOpen: isOpen,
                            onClose: ()=>setOpen(false),
                            snapPoints: snapPoints,
                            className: "w-100 d-flex  justify-content-center align-items-center  ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal_sheet__WEBPACK_IMPORTED_MODULE_4___default().Container), {
                                    className: (_styles_products_module_css__WEBPACK_IMPORTED_MODULE_20___default().bottomsheet),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal_sheet__WEBPACK_IMPORTED_MODULE_4___default().Header), {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-100 d-flex  justify-content-center align-items-center mb-3 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                style: {
                                                    color: "#0F4392"
                                                },
                                                children: "Filter by"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal_sheet__WEBPACK_IMPORTED_MODULE_4___default().Content), {
                                            className: " d-flex    ",
                                            style: {
                                                width: "90%",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_products_DropdownFilter__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    title: "By Disease",
                                                    options: [
                                                        {
                                                            name: "Option ",
                                                            id: 1
                                                        },
                                                        {
                                                            name: "Option ",
                                                            id: 2
                                                        }
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_products_DropdownFilter__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    title: "By Users",
                                                    options: [
                                                        {
                                                            name: "All ",
                                                            id: 1
                                                        },
                                                        {
                                                            name: "Option",
                                                            id: 2
                                                        }
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_products_DropdownFilter__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                    title: "By ingredients",
                                                    options: [
                                                        {
                                                            name: "All ",
                                                            id: 1
                                                        },
                                                        {
                                                            name: "Option",
                                                            id: 2
                                                        }
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex justify-content-between mt-5",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "btn btn-primary pb-2 pt-2 pr-5 pl-5",
                                                            style: {
                                                                paddingInline: "25px",
                                                                width: "45%"
                                                            },
                                                            children: "Aplly"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "btn btn-outline-primary pb-2 pt-2 pr-5 pl-5",
                                                            style: {
                                                                paddingInline: "25px",
                                                                width: "45%"
                                                            },
                                                            children: "Clear all"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal_sheet__WEBPACK_IMPORTED_MODULE_4___default().Backdrop), {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "position-relative ",
                        style: {
                            bottom: 0,
                            width: "100%",
                            borderRadius: "15px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_BottomNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-none d-sm-block w-100 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_desk_FooterDesk__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 704:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PhoneEnabled");

/***/ }),

/***/ 4193:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Store");

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

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

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

/***/ 9274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

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

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

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

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 259:
/***/ ((module) => {

module.exports = require("react-modal-sheet");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,1664,9332,5192,2508,7647,2727,730,9593], () => (__webpack_exec__(7635)));
module.exports = __webpack_exports__;

})();