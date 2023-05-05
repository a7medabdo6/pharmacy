exports.id = 5749;
exports.ids = [5749];
exports.modules = {

/***/ 263:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "ulits_btn__TYzRU",
	"circlecontainer": "ulits_circlecontainer__FVsKm",
	"ButtonRequestOrder": "ulits_ButtonRequestOrder__cLRDW",
	"circleBeg": "ulits_circleBeg__L7s75"
};


/***/ }),

/***/ 787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Components_Slideshow)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(4508);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/img/pandolproduct.png
/* harmony default export */ const pandolproduct = ({"src":"/_next/static/media/pandolproduct.b4a3a37f.png","height":112,"width":92,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AbiXnoYb3NQoFru7Bv4q5AoQXu8H7dhAE5WrH8cBT2N94BoC/R9HAPcANA/mAAssBgDyx+EAovMz4AFzb3vSBg0NLeIDCPxjQjMCNd/T/+xgagPvcXLWARhLa9Q2IRcrShQG/kQE7AIT+uz/98nRAfkEFdgBoX+H1B3b1CseMyz+/BIUAgMBAf8A/foB+MbN2AHGAADR96m4LhUUCvwVup4C8Or//gL2+QQC4+TWAbguLN7zYnYhFfrxABvq1wABDhkAAvPyAADf4OEBqRsggRXl4CkBAAAE+W94CxQaEgYB/PoRDNfYzNmgZN0nBEWvAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/Components/Slideshow.js


 // requires a loader



const Slideshow_images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
];
const Slideshow = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_.Carousel, {
        renderThumbs: ()=>Slideshow_images.map((thumbnail)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: thumbnail.thumbnail
                }, thumbnail.thumbnail)),
        showIndicators: false,
        style: {
            backgroundColor: "white",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundColor: "white",
                    marginTop: "10px",
                    borderRadius: "15px",
                    width: "100%"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    //  className="w-20"
                    src: pandolproduct,
                    style: {
                        width: "27%"
                    },
                    alt: "Next.js Logo",
                    width: 259,
                    height: 200,
                    priority: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundColor: "white"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    //  className="w-20"
                    src: pandolproduct,
                    style: {
                        width: "27%"
                    },
                    alt: "Next.js Logo",
                    width: 259,
                    height: 152,
                    priority: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    backgroundColor: "white"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    //  className="w-20"
                    src: pandolproduct,
                    style: {
                        width: "27%"
                    },
                    alt: "Next.js Logo",
                    width: 259,
                    height: 152,
                    priority: true
                })
            })
        ]
    });
};
/* harmony default export */ const Components_Slideshow = (Slideshow);


/***/ }),

/***/ 5727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ulits_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(263);
/* harmony import */ var _styles_ulits_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ulits_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ButtonProductDetails = ({ txtColor , bckColor , BRColor , text , width  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_ulits_module_css__WEBPACK_IMPORTED_MODULE_2___default().ButtonRequestOrder),
        style: {
            width: {
                width
            },
            backgroundColor: bckColor,
            marginBottom: "16px",
            borderRadius: "5px",
            border: `1px solid ${BRColor}`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: (_styles_ulits_module_css__WEBPACK_IMPORTED_MODULE_2___default().textBtnTrack),
            style: {
                color: txtColor
            },
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonProductDetails);


/***/ }),

/***/ 3559:
/***/ (() => {



/***/ })

};
;