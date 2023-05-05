exports.id = 8015;
exports.ids = [8015];
exports.modules = {

/***/ 8710:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__EtNt2",
	"background": "Home_background__Nc_su",
	"btn": "Home_btn__EvEvw",
	"btn-primary": "Home_btn-primary__IGCEC",
	"description": "Home_description__Qwq1f",
	"code": "Home_code__aGV0U",
	"grid": "Home_grid__c_g6N",
	"card": "Home_card__7oz7W",
	"center": "Home_center__V0nxp",
	"logo": "Home_logo__80mSr",
	"thirteen": "Home_thirteen__ocdUI",
	"welcome": "Home_welcome__2Q1Ed",
	"rotate": "Home_rotate__99GkW",
	"content": "Home_content___fOQz",
	"vercelLogo": "Home_vercelLogo__lhIxO",
	"form-control": "Home_form-control__CAkdV"
};


/***/ }),

/***/ 4143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Frame.cdc8e20d.png","height":444,"width":594,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AQAAWgA0RzMXzM8OBBfqZSDpAADiACWb/CYf9AXa9P/mAXB4oQKQsOMaKkYw/I1CApT6+gHYe6TgsNTs9vk/GAbZAWJvnwOey+wZAMb/9eHhXLHi5uzGPTmmnyZKGgkQBQHVASY9hgEfHA4eu6eK9N7ewafm5+m3PDuQsT1VPRPD5/nRASVDiQL3/QUL5MDvAXZ5/2v29/zZlJAttCtF4Qvr+gfyARA9igHw+QMFPhX4BNy1tyogFxn78UVW1urY1QL5Cgz6sE9fpqQ8KtsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 5664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/well.4fc904c8.png","height":122,"width":381,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWUlEQVR42mOAA5cp/MpOE+YFOnS5MXivYIaL8ztNEucDYmGnidLszpNC7Bz7LOWdJoqzOk0S4neayA9SYAlkOPE4TfKScZqodlbDUVzWaaIFp9MkO36niY4AvC8WU47qZ5kAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 4016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.085e78c2.png","height":70,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAJ0lEQVR42gXAMQoAEAAF0J/RWRQWi02O58wvRUT1XEUkpmU7mm7oHzkzElu9x+3LAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 5385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/welcome.5161d01d.png","height":182,"width":244,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAw0lEQVR42g3IPW7CMBQA4PfcZ+xEJZYydWHsz9ALdOUurXqF3qAX6VSp6i3YEAdAwABiQYEY2Q6OnQff+KHzXvcxvt5XVf75+3WhaR4/3j9DezrZPqUFQYxCaf00dN34LfPLmUbPCPDNw6Ci90hIxLfQsiiSKspijMIwgAPEUkophCDCLoQGAFZ75ze+LBUCTLRStXUuU0qpZ+Y5AHSz9frhsN39f02nizvEZIxBstbmkZRHuJlcwrIi2Li2bU1dR2DOV+b7Wly7usPHAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 2871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function loginUser(credentials) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://18.130.40.220/accounts/register/", credentials);
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        return response.data;
    } catch (error) {
        console.log(error.response);
    // throw new Error(error.response.data.message);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4463:
/***/ (() => {



/***/ })

};
;