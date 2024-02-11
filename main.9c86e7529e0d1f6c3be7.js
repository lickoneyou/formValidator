/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addError.js":
/*!*********************************!*\
  !*** ./src/modules/addError.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addError(el) {
  el.style.borderBottom = '2px solid red';
  const elem = el.children[0].name;
  return [elem, false];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addError);

/***/ }),

/***/ "./src/modules/addValidate.js":
/*!************************************!*\
  !*** ./src/modules/addValidate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addValidate(el) {
  el.style.borderBottom = '2px solid green';
  const elem = el.children[0].name;
  return [elem, el.children[0].value];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addValidate);

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function data(fields) {
  return Object.fromEntries(fields);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./src/modules/drowMessage.js":
/*!************************************!*\
  !*** ./src/modules/drowMessage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const parMessage = document.querySelector('.regMessage');
const form = document.querySelector('form').children;
function drowMessage(status) {
  let msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (status === 'error') {
    parMessage.style.color = 'red';
    parMessage.innerHTML = Object.values(fields).map(el => "<p>".concat(el, "</p>")).join(' ');
  } else {
    parMessage.style.color = 'green';
    parMessage.textContent = msg;
    for (const elem of form) {
      elem.children[0].value = '';
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drowMessage);

/***/ }),

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ (() => {

const btn = document.querySelector('.modal_btn');
const modalWindowWrapper = document.querySelector('.modal_window_wrapper');
const modalWindow = document.querySelector('.modal_window');
const body = document.body;
function toggleClass(e) {
  modalWindowWrapper.classList.toggle('active');
  body.classList.toggle('hidden');
}
btn.addEventListener('click', e => toggleClass(e));
modalWindowWrapper.addEventListener('click', e => toggleClass(e));
modalWindow.addEventListener('click', e => e.stopPropagation());

/***/ }),

/***/ "./src/modules/phoneMask.js":
/*!**********************************!*\
  !*** ./src/modules/phoneMask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phone_mask_ruby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phone-mask-ruby */ "./node_modules/phone-mask-ruby/index.js");
/* harmony import */ var phone_mask_ruby__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phone_mask_ruby__WEBPACK_IMPORTED_MODULE_0__);

phone_mask_ruby__WEBPACK_IMPORTED_MODULE_0___default()('.tel_inp');

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drowMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drowMessage */ "./src/modules/drowMessage.js");

const postData = async function () {
  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const {
    status,
    message,
    fields
  } = await response.json();
  (0,_drowMessage__WEBPACK_IMPORTED_MODULE_0__["default"])(status, message, fields);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addError */ "./src/modules/addError.js");
/* harmony import */ var _addValidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addValidate */ "./src/modules/addValidate.js");
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postData */ "./src/modules/postData.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/modules/data.js");




const form = document.querySelector('form');
const btn = document.querySelector('.btn_submit');
const parMessage = document.querySelector('.regMessage');
function validateName(el) {
  const input = el.children[0];
  return input.value.length <= 1 ? (0,_addError__WEBPACK_IMPORTED_MODULE_0__["default"])(el) : (0,_addValidate__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
}
function validateEmail(el) {
  const re = /^\S+@\S+\.\S+$/;
  const email = el.children[0].value;
  return re.test(email) ? (0,_addValidate__WEBPACK_IMPORTED_MODULE_1__["default"])(el) : (0,_addError__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
}
function validatePhone(el) {
  const phone = el.children[0].value.replace(/[^0-9]/g, '');
  return phone.length === 12 ? (0,_addValidate__WEBPACK_IMPORTED_MODULE_1__["default"])(el) : (0,_addError__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
}
function validateAll() {
  validateName(form.children[0]);
  validateEmail(form.children[1]);
  validatePhone(form.children[2]);
  validateName(form.children[3]);
  return [validateName(form.children[0]), validateEmail(form.children[1]), validatePhone(form.children[2]), validateName(form.children[3])];
}
btn.addEventListener('click', () => {
  parMessage.textContent = '';
  (0,_postData__WEBPACK_IMPORTED_MODULE_2__["default"])('http://localhost:9090/api/registration', (0,_data__WEBPACK_IMPORTED_MODULE_3__["default"])(validateAll()));
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(htpps://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Protest Strike", sans-serif;
}

header {
  margin-bottom: 20px;
  padding: 20px 60px;
  width: 1000px;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

header > button {
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-family: "Protest Strike", sans-serif;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  -webkit-user-select: none;
          user-select: none;
}

header > button:hover {
  box-shadow: 0px 5px 10px 2px rgba(23, 112, 180, 0.6);
  transition: all 300ms ease;
}

.modal_window_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(4, 10, 41, 0.6);
  width: 100%;
  height: 100%;
  z-index: 100;
  display: none;
  animation: open 400ms ease-in-out;
}

@keyframes open {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    display: flex;
    opacity: 1;
  }
}
.active {
  display: flex;
}

.modal_window {
  color: black;
  width: 500px;
  height: 500px;
  text-align: center;
  background-color: #ffffff;
  padding: 40px 20px;
}

.hidden {
  overflow: hidden;
}

input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
  resize: none;
}

.form_title {
  display: block;
  font-size: 30px;
  color: #333;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 20px;
}

.wrap_input {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
}

.input {
  font-size: 15px;
  color: #555;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 45px;
  background: 0 0;
  padding: 0 5px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 390px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 10px;
}

.container a {
  position: relative;
  width: 160px;
  height: 60px;
  display: inline-block;
  background: #fff;
  margin: 20px;
}

.container a:before,
.container a:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.5s;
  background: #f00;
}

.container a:nth-child(1):before,
.container a:nth-child(1):after {
  background: linear-gradient(45deg, #00ccff, #0e1538, #d400d4);
}

.container a:nth-child(2):before,
.container a:nth-child(2):after {
  background: linear-gradient(45deg, #f0075b, #0e1538, #1aff22);
}

.container a:hover:before {
  top: -3px;
  right: -3px;
  bottom: -3px;
  left: -3px;
}

.container a:hover:after {
  top: -3px;
  right: -3px;
  bottom: -3px;
  left: -3px;
  filter: blur(10px);
}

.container a span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: #0e1538;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  border: 1px solid #040a29;
  overflow: hidden;
}

.container a span::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.075);
  transform: skew(25deg);
}`, "",{"version":3,"sources":["webpack://./src/style/_style.scss","webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACGF;;ADAA;;EAEE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yCAAA;ACGF;;ADAA;EACE,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,aAAA;EACA,yBAAA;EACA,kDAAA;ACGF;;ADAA;EACE,kBAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;EACA,yCAAA;EACA,kDAAA;EACA,eAAA;EACA,yBAAA;UAAA,iBAAA;ACGF;;ADAA;EACE,oDAAA;EACA,0BAAA;ACGF;;ADAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,sCAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EAEA,aAAA;EAEA,iCAAA;ACCF;;ADEA;EACE;IACE,aAAA;IACA,UAAA;ECCF;EDEA;IACE,aAAA;IACA,UAAA;ECAF;EDGA;IACE,aAAA;IACA,UAAA;ECDF;AACF;ADIA;EACE,aAAA;ACFF;;ADKA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;ACFF;;ADKA;EACE,gBAAA;ACFF;;ADKA;EACE,aAAA;EACA,YAAA;ACFF;;ADKA;EACE,aAAA;EACA,YAAA;EACA,YAAA;ACFF;;ADKA;EACE,cAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;ACFF;;ADKA;EACE,WAAA;EACA,kBAAA;EACA,gCAAA;EACA,mBAAA;ACFF;;ADKA;EACE,eAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;ACFF;;ADKA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,2CAAA;EACA,kBAAA;ACFF;;ADKA;EACE,kBAAA;EACA,YAAA;EACA,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,YAAA;ACFF;;ADIA;;EAEE,WAAA;EACA,kBAAA;EACA,MAAA;EAAA,QAAA;EAAA,SAAA;EAAA,OAAA;EACA,gBAAA;EACA,gBAAA;ACDF;;ADGA;;EAEE,6DAAA;ACAF;;ADEA;;EAEE,6DAAA;ACCF;;ADCA;EACE,SAAA;EAAA,WAAA;EAAA,YAAA;EAAA,UAAA;ACEF;;ADAA;EACE,SAAA;EAAA,WAAA;EAAA,YAAA;EAAA,UAAA;EACA,kBAAA;ACGF;;ADDA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;ACIF;;ADFA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sCAAA;EACA,sBAAA;ACKF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Protest Strike', sans-serif;\n}\n\nheader {\n  margin-bottom: 20px;\n  padding: 20px 60px;\n  width: 1000px;\n  display: flex;\n  justify-content: flex-end;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\nheader > button {\n  padding: 10px 20px;\n  background-color: transparent;\n  border: none;\n  font-size: 20px;\n  font-family: 'Protest Strike', sans-serif;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  cursor: pointer;\n  user-select: none;\n}\n\nheader > button:hover {\n  box-shadow: 0px 5px 10px 2px rgba(23, 112, 180, 0.6);\n  transition: all 300ms ease;\n}\n\n.modal_window_wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba($color: #040a29, $alpha: 0.6);\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n\n  display: none;\n\n  animation: open 400ms ease-in-out;\n}\n\n@keyframes open {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: flex;\n    opacity: 0;\n  }\n\n  100% {\n    display: flex;\n    opacity: 1;\n  }\n}\n\n.active {\n  display: flex;\n}\n\n.modal_window {\n  color: black;\n  width: 500px;\n  height: 500px;\n  text-align: center;\n  background-color: #ffffff;\n  padding: 40px 20px;\n}\n\n.hidden {\n  overflow: hidden;\n}\n\ninput {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  outline: none;\n  border: none;\n  resize: none;\n}\n\n.form_title {\n  display: block;\n  font-size: 30px;\n  color: #333;\n  line-height: 1.2;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.wrap_input {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid #adadad;\n  margin-bottom: 37px;\n}\n\n.input {\n  font-size: 15px;\n  color: #555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: 0 0;\n  padding: 0 5px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 390px;\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);\n  padding: 20px 10px;\n}\n\n.container a {\n  position: relative;\n  width: 160px;\n  height: 60px;\n  display: inline-block;\n  background: #fff;\n  margin: 20px;\n}\n.container a:before,\n.container a:after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  transition: 0.5s;\n  background: #f00;\n}\n.container a:nth-child(1):before,\n.container a:nth-child(1):after {\n  background: linear-gradient(45deg, #00ccff, #0e1538, #d400d4);\n}\n.container a:nth-child(2):before,\n.container a:nth-child(2):after {\n  background: linear-gradient(45deg, #f0075b, #0e1538, #1aff22);\n}\n.container a:hover:before {\n  inset: -3px;\n}\n.container a:hover:after {\n  inset: -3px;\n  filter: blur(10px);\n}\n.container a span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  background: #0e1538;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #fff;\n  border: 1px solid #040a29;\n  overflow: hidden;\n}\n.container a span::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.075);\n  transform: skew(25deg);\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap\");\n@import url(\"htpps://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Protest Strike\", sans-serif;\n}\n\nheader {\n  margin-bottom: 20px;\n  padding: 20px 60px;\n  width: 1000px;\n  display: flex;\n  justify-content: flex-end;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\nheader > button {\n  padding: 10px 20px;\n  background-color: transparent;\n  border: none;\n  font-size: 20px;\n  font-family: \"Protest Strike\", sans-serif;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  cursor: pointer;\n  user-select: none;\n}\n\nheader > button:hover {\n  box-shadow: 0px 5px 10px 2px rgba(23, 112, 180, 0.6);\n  transition: all 300ms ease;\n}\n\n.modal_window_wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(4, 10, 41, 0.6);\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: none;\n  animation: open 400ms ease-in-out;\n}\n\n@keyframes open {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n  1% {\n    display: flex;\n    opacity: 0;\n  }\n  100% {\n    display: flex;\n    opacity: 1;\n  }\n}\n.active {\n  display: flex;\n}\n\n.modal_window {\n  color: black;\n  width: 500px;\n  height: 500px;\n  text-align: center;\n  background-color: #ffffff;\n  padding: 40px 20px;\n}\n\n.hidden {\n  overflow: hidden;\n}\n\ninput {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  outline: none;\n  border: none;\n  resize: none;\n}\n\n.form_title {\n  display: block;\n  font-size: 30px;\n  color: #333;\n  line-height: 1.2;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.wrap_input {\n  width: 100%;\n  position: relative;\n  border-bottom: 2px solid #adadad;\n  margin-bottom: 37px;\n}\n\n.input {\n  font-size: 15px;\n  color: #555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: 0 0;\n  padding: 0 5px;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 390px;\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);\n  padding: 20px 10px;\n}\n\n.container a {\n  position: relative;\n  width: 160px;\n  height: 60px;\n  display: inline-block;\n  background: #fff;\n  margin: 20px;\n}\n\n.container a:before,\n.container a:after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  transition: 0.5s;\n  background: #f00;\n}\n\n.container a:nth-child(1):before,\n.container a:nth-child(1):after {\n  background: linear-gradient(45deg, #00ccff, #0e1538, #d400d4);\n}\n\n.container a:nth-child(2):before,\n.container a:nth-child(2):after {\n  background: linear-gradient(45deg, #f0075b, #0e1538, #1aff22);\n}\n\n.container a:hover:before {\n  inset: -3px;\n}\n\n.container a:hover:after {\n  inset: -3px;\n  filter: blur(10px);\n}\n\n.container a span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  background: #0e1538;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2em;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #fff;\n  border: 1px solid #040a29;\n  overflow: hidden;\n}\n\n.container a span::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -50%;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.075);\n  transform: skew(25deg);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/phone-mask-ruby/index.js":
/*!***********************************************!*\
  !*** ./node_modules/phone-mask-ruby/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// @ts-check
const options = __webpack_require__(/*! ./phonemasks.json */ "./node_modules/phone-mask-ruby/phonemasks.json");
module.exports = function (sel) {
	document.addEventListener("DOMContentLoaded", function () {
		const selector = sel || "input[data-phone-input]",
			phoneInputs = document.querySelectorAll(selector);
		options["handleEvent"] = onPhoneInput;
		phoneInputs.forEach((it) => {
			it.addEventListener("keydown", onPhoneKeyDown);
			it.addEventListener("input", options);
			it.addEventListener("paste", onPhonePaste);
		});
	});
};
function getInputNumbersValue(input) {
	return input.value.replace(/\D/g, "");
}
function onPhonePaste(e) {
	const input = e.target,
		pasted = e.clipboardData;
	let inputNumbersValue = getInputNumbersValue(input);
	if (pasted) {
		const pastedText = pasted.getData("Text");
		if (/\D/g.test(pastedText)) {
			input.value = inputNumbersValue;
			return;
		}
	}
}
function onPhoneInput(e) {
	const input = e.target,
		selectionStart = input.selectionStart;
	let inputNumbersValue = getInputNumbersValue(input),
		formattedInputValue = "";
	if (!inputNumbersValue) {
		input.value = "";
		return;
	}
	if (input.value.length != selectionStart) {
		if (e.data && isNaN(+e.data)) {
			input.setSelectionRange(input.selectionStart - 1, input.selectionStart, "backward");
			input.setRangeText("");
		}
		return;
	}
	if (~["7", "8", "9"].indexOf(inputNumbersValue[0])) {
		if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
		const firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
		renderMask(firstSymbols, this.ru);
	} else if (inputNumbersValue.startsWith("375")) {
		const firstSymbols = "+375";
		renderMask(firstSymbols, this.by);
	} else {
		if (inputNumbersValue) {
			formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
		}
	}
	input.value = formattedInputValue;
	function renderMask(firstSymbols, opt) {
		formattedInputValue = input.value = firstSymbols;
		if (inputNumbersValue.length > +opt.fb.from) {
			formattedInputValue += " (" + inputNumbersValue.substring(+opt.fb.from, +opt.fb.to);
		}
		if (inputNumbersValue.length > +opt.sb.from) {
			formattedInputValue += ") " + inputNumbersValue.substring(+opt.sb.from, +opt.sb.to);
		}
		if (inputNumbersValue.length > +opt.fn.from) {
			formattedInputValue += "-" + inputNumbersValue.substring(+opt.fn.from, +opt.fn.to);
		}
		if (inputNumbersValue.length > +opt.sn.from) {
			formattedInputValue += "-" + inputNumbersValue.substring(+opt.sn.from, +opt.sn.to);
		}
	}
}
function onPhoneKeyDown(e) {
	const inputValue = e.target.value.replace(/\D/g, "");
	if (e.keyCode == 8 && inputValue.length == 1) {
		e.target.value = "";
	}
}


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/phone-mask-ruby/phonemasks.json":
/*!******************************************************!*\
  !*** ./node_modules/phone-mask-ruby/phonemasks.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"by":{"fb":{"from":"3","to":"5"},"sb":{"from":"5","to":"8"},"fn":{"from":"8","to":"10"},"sn":{"from":"10","to":"12"}},"ru":{"fb":{"from":"1","to":"4"},"sb":{"from":"4","to":"7"},"fn":{"from":"7","to":"9"},"sn":{"from":"9","to":"11"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/phoneMask */ "./src/modules/phoneMask.js");
/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validate */ "./src/modules/validate.js");
/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalWindow */ "./src/modules/modalWindow.js");
/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_modalWindow__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.9c86e7529e0d1f6c3be7.js.map