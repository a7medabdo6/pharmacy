exports.id = 6712;
exports.ids = [6712];
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

/***/ 8055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4463);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Apis_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8055);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Apis_Contact__WEBPACK_IMPORTED_MODULE_4__]);
_Apis_Contact__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ModalContent = ({ setOpen  })=>{
    const [phone, setphone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("us");
    const [Name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    console.log(Data);
    const HandelName = (e)=>{
        setName(e.target.value);
    };
    console.log(Name);
    function handleOnChange(value) {
        setphone(value);
    }
    const SentContactUs = async (e)=>{
        e.preventDefault();
        let Data = {
            name: Name,
            phone_number: phone
        };
        const res = await (0,_Apis_Contact__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Data);
        if (res) setData(res);
        return res;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            if (Data) {
                setOpen(false);
            }
        }, 2000);
    }, [
        Data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "d-flex justify-content-center m-5 flex-column",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group m-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "exampleInputEmail1",
                        className: "my-2",
                        children: "Your Name*"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: HandelName,
                        type: "text",
                        className: "form-control",
                        id: "exampleInputEmail1",
                        "aria-describedby": "emailHelp",
                        placeholder: "Write here"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group m-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "exampleInputPassword1",
                        className: "my-2",
                        children: [
                            "Phone Number*",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_2___default()), {
                        defaultCountry: "us",
                        value: phone,
                        style: {
                            width: "100%"
                        },
                        onChange: handleOnChange
                    })
                ]
            }),
            Data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    width: "100%"
                },
                spacing: 2,
                style: {
                    position: "absolute",
                    top: 0,
                    width: "80%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5___default()), {
                    severity: "success",
                    children: "Your request has been sent!"
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>SentContactUs(e),
                type: "submit",
                style: {
                    borderRadius: "4px"
                },
                className: "btn btn-primary mb-3 mt-3",
                children: "send the request"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4463:
/***/ (() => {



/***/ })

};
;