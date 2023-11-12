"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var greeting = () => {
  let today = new Date();
  let hoursNow = today.getHours();
  if (hoursNow > 18) {
    return "Good evening!";
  } else if (hoursNow > 12) {
    return "Good afternoon!";
  } else if (hoursNow > 0) {
    return "Good morning!";
  } else {
    return "Wow! Thank you for visiting so late at night!";
  }
};
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Hank Holmes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "QA Analyst @ Paymentus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, greeting(), " SaaS professional with 5+ years of quality assurance and sales experience, working with clients of all shapes & sizes across USA."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is my personal portfolio that I'm using to record my continuing Full Stack Web Development education. If you're interested in connecting, please shoot me an", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:github.unlocking468@passmail.net"
  }, "email"), " or message me on", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.linkedin.com/in/henryhamiltonholmes/",
    target: "_blank"
  }, "LinkedIn"), " ", "and I'll be in touch!"));
};
const Head = () => {
  /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Hank Holmes");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map