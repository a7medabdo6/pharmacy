"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5678);
/* harmony import */ var _mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7307);
/* harmony import */ var _mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4193);
/* harmony import */ var _mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_PhoneEnabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(704);
/* harmony import */ var _mui_icons_material_PhoneEnabled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PhoneEnabled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Apis_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Apis_Contact__WEBPACK_IMPORTED_MODULE_9__]);
_Apis_Contact__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








 // Import useRouter hook from next/router

const BottomNav = ()=>{
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)(); // Initialize useRouter hook
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const handleIconClick = (route)=>{
        router.push(route); // Navigate to the specified route using next/router
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            width: "100%",
            height: "100px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_BottomNavigation__WEBPACK_IMPORTED_MODULE_3___default()), {
            showLabels: true,
            value: value,
            onChange: (event, newValue)=>{
                setValue(newValue);
            },
            sx: {
                borderRadius: "15px 15px 0 0"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "Home",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    onClick: ()=>handleIconClick("/Home")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "Products",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Store__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                    onClick: ()=>handleIconClick("/products")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "Requests",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    onClick: ()=>handleIconClick("/requests")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "Contact Us",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_PhoneEnabled__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                    onClick: ()=>handleIconClick("/contactus")
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;