exports.id = 3223;
exports.ids = [3223];
exports.modules = {

/***/ 9219:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "requests_btn__LYZ3M",
	"btnConfirm": "requests_btnConfirm__wySog",
	"buttonReview": "requests_buttonReview__AbeJB",
	"ButtonWriteReview": "requests_ButtonWriteReview__pKYNq",
	"btnCheckOurPrpducts": "requests_btnCheckOurPrpducts__PuL_X",
	"btnEditInfo": "requests_btnEditInfo__Bgxms",
	"button": "requests_button__X_VVX",
	"heddin": "requests_heddin__kJ8Jh",
	"main": "requests_main__7loHD"
};


/***/ }),

/***/ 5830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow_up.fa6cc2f9.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42j2PzQrCMBCECxH8aXcbbT35DJ713DZpCtXiwbfxLIU2McGX8DHdbcXAB8PMkGEjftktCGwcoLI5apejGSE1vZjCtPMCjZMU7JO2XzGsUVspi1FEWFtgY3N/LLAMLROTZg+0hYhEBs2QYOnPWIQPlow/sUeFjAp2R79sUb0OFF6JDkizB5RFUDuY9i/PJVb+yLD+T8QmCCpJNtBYZH6hjKthviSu3iLRDngT1ASs1Rx+AXc0OtQfq0CCAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/thanksrate.5b7b26bc.png","height":315,"width":366,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAuElEQVR42mMAAkYGCOBkYMjW1fGZrspg2cvJAAT8TpMYGUqr2pkZgKC5Y3pKXV1nKAMQFGS1sDI4TIFoTPz/H8xYsWrf6rXrj7QyMIQaywXNNISYMBEkJwU2QUVZfZMWv6GXj/dUTwaLbj6wAseJEFPCsrN5dC3tdroGheowAMGhvVtZrl6/xfzkySMmBijQB+IoIGZjQAc3b960fHD/fvTB/QdbgeyShw8f5t2/fz8TiCPv379vCgDH9D2jwb14MgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 4631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function PostReview(formdata) {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        };
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://18.130.40.220/reviews/", formdata, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response);
    // throw new Error(error.response.data.message);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostReview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_requests_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9219);
/* harmony import */ var _styles_requests_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_requests_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);




const ButtomReview = ({ txtColor , bckColor , BRColor , text , clicking  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: (_styles_requests_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonReview),
        style: {
            backgroundColor: bckColor,
            marginBottom: "16px",
            borderRadius: "4px",
            border: `1px solid ${BRColor}`
        },
        onClick: clicking,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "m-0",
            style: {
                color: txtColor,
                fontSize: "10px"
            },
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtomReview);


/***/ }),

/***/ 2997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Ulits_Rateing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-rating-stars-component"
var external_react_rating_stars_component_ = __webpack_require__(9906);
var external_react_rating_stars_component_default = /*#__PURE__*/__webpack_require__.n(external_react_rating_stars_component_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(3973);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/img/star_good.png
/* harmony default export */ const star_good = ({"src":"/_next/static/media/star_good.5f5070a3.png","height":98,"width":65,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAhUlEQVR42mOAgZ/7TIIYkMGv/aYeP/eb/gfSXjCBWT/2Gv//ttvo93cgDeTPY/h7yFzx+x7jV6836vwH0m/+HTZXZvi931QAaN7tb3uM9wDpO0CVwgzf95pw/z9pIccABP9PmMt932PCA7OLM92HXxxIczDAgI02qxqQsrDVYVVlYGBgAACThzqHcSqSZwAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/Components/Ulits/Rateing.js






const Rateing = ({ setrate  })=>{
    const ratingChanged = (newRating)=>{
        setrate(newRating);
        console.log(newRating);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "d-flex",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_rating_stars_component_default()), {
            count: 5,
            onChange: ratingChanged,
            size: 24,
            isHalf: true,
            emptyIcon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: star_good,
                alt: "empty star",
                width: 24,
                height: 24
            }),
            halfIcon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: star_good,
                alt: "half star",
                width: 24,
                height: 24
            }),
            fullIcon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: star_good,
                alt: "full star",
                width: 24,
                height: 24
            }),
            activeColor: "#ffd700"
        })
    });
};
/* harmony default export */ const Ulits_Rateing = (Rateing);


/***/ }),

/***/ 5429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(879);
/* harmony import */ var uploader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uploader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9830);
/* harmony import */ var react_uploader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_uploader__WEBPACK_IMPORTED_MODULE_3__);


 // Installed by "react-uploader".

const UploadFile = ({ setfile  })=>{
    const handleComplete = (files)=>{
        var _file_originalFile;
        const file = files[0];
        setfile(file === null || file === void 0 ? void 0 : (_file_originalFile = file.originalFile) === null || _file_originalFile === void 0 ? void 0 : _file_originalFile.file);
        console.log(file);
        files.forEach((file)=>{
            console.log(`Uploaded file: ${file.name} (${file.type}, ${file.size} bytes)`);
        });
    };
    const handleUpload = (file, response)=>{
        setfile((prevState)=>[
                ...prevState,
                file
            ]);
    };
    const uploader = (0,uploader__WEBPACK_IMPORTED_MODULE_2__.Uploader)({
        apiKey: "free",
        on: {
            upload: handleUpload
        }
    });
    // Configuration options: https://upload.io/uploader#customize
    const options = {
        multi: true
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_uploader__WEBPACK_IMPORTED_MODULE_3__.UploadButton, {
            uploader: uploader,
            options: options,
            onComplete: handleComplete,
            children: ({ onClick  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    onClick: onClick,
                    children: "Add a file..."
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadFile);


/***/ }),

/***/ 3223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_thanksrate_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1110);
/* harmony import */ var _Components_Ulits_Rateing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2997);
/* harmony import */ var _Components_Ulits_UploadFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5429);
/* harmony import */ var _assets_img_arrow_up_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5830);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4463);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_Requests_ButtomReview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7798);
/* harmony import */ var _Apis_PostReview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Apis_PostReview__WEBPACK_IMPORTED_MODULE_13__]);
_Apis_PostReview__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const ReviewDesk = ()=>{
    const [phone, setphone] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("us");
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
    const handleFileChange = (event)=>{
        setSelectedFile(event.target.files[0]);
    };
    const [modalShow, setModalShow] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [description, setdescription] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const [file, setfile] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const [rate, setrate] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)();
    const Onchangemessage = (e)=>{
        setdescription(e.target.value);
    };
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        height: "90%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid white",
        boxShadow: 24,
        p: 4,
        borderRadius: "10px",
        padding: "7px"
    };
    const SendReview = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("description", description);
        formData.append("file", file);
        formData.append("rate", rate);
        formData.append("user", 1);
        const res = await (0,_Apis_PostReview__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(formData);
        if (res) setData(res);
        if (res) handleOpen();
        return res;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            style: {
                maxWidth: "100%"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-flex justify-content-center  align-items-center ",
                    style: {
                        width: "83%"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "Rate your experience"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-flex justify-content-around align-items-around flex-row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_Rateing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        setrate: setrate
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-flex justify-content-center align-items-center flex-column w-80 m-auto ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group w-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-0",
                                    htmlFor: "exampleFormControlTextarea1",
                                    children: "Leave your message*"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    onChange: Onchangemessage,
                                    className: "form-control",
                                    id: "exampleFormControlTextarea1",
                                    rows: 3
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "w-100 m-0 mt-2",
                            children: "Upload a file"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex justify-content-center align-items-center flex-column box-grey",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _assets_img_arrow_up_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                    alt: "Next.js Logo",
                                    // width={80}
                                    // height={37}
                                    priority: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    className: "d-flex justify-content-center align-items-center flex-column box-grey-20 ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Ulits_UploadFile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        setfile: setfile
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-muted m-2",
                                    children: "Or drop files to upload"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: SendReview,
                            type: "submit",
                            className: "btn btn-primary mb-3 mt-3 w-100",
                            children: "Submit"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_11___default()), {
                        open: open,
                        onClose: handleClose,
                        "aria-labelledby": "modal-modal-title",
                        "aria-describedby": "modal-modal-description",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_9___default()), {
                            sx: style,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    id: "modal-modal-title",
                                    variant: "h6",
                                    component: "h2",
                                    className: "text-center",
                                    style: {
                                        color: "#0F4392",
                                        fontWeight: "bold",
                                        fontSize: "20px"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    id: "modal-modal-description",
                                    sx: {
                                        mt: 2
                                    },
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: _assets_img_thanksrate_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                    alt: "Next.js Logo",
                                                    width: 366,
                                                    height: 315,
                                                    priority: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Your review has been submitted successfully"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-100  d-flex justify-content-center align-items-center mt-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Requests_ButtomReview__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                txtColor: "white",
                                                bckColor: "#0F4392",
                                                BRColor: "#0F4392",
                                                text: "Go To Home Page "
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewDesk);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4463:
/***/ (() => {



/***/ })

};
;