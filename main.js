/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\r\n\r\n(0,_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTaskModal() {\r\n  const taskModal = document.createElement(\"div\");\r\n  taskModal.classList.add(\"task-modal\");\r\n\r\n  const modalForm = document.createElement(\"form\");\r\n\r\n  function createTitle() {\r\n    const title = document.createElement(\"h2\");\r\n    title.textContent = \"New Task\";\r\n\r\n    modalForm.appendChild(title);\r\n  }\r\n\r\n  function createTaskInput() {\r\n    const description = document.createElement(\"input\");\r\n    description.id = \"task-desc\";\r\n    description.type = \"text\";\r\n    description.placeholder = \"Task\";\r\n    description.required = true;\r\n\r\n    modalForm.appendChild(description);\r\n  }\r\n\r\n  function createDropDown() {\r\n    const priority = [\"No Priority\", \"Low\", \"Medium\", \"High\"];\r\n\r\n    const select = document.createElement(\"select\");\r\n    select.id = \"task-priority\";\r\n\r\n    for (let i = 0; i < priority.length; i++) {\r\n      const option = document.createElement(\"option\");\r\n      option.textContent = priority[i];\r\n      option.value = priority[i];\r\n      select.add(option);\r\n    }\r\n\r\n    modalForm.appendChild(select);\r\n  }\r\n\r\n  function createDatetimeInput() {\r\n    const datetime = document.createElement(\"input\");\r\n    datetime.id = \"task-datetime\";\r\n    datetime.type = \"datetime-local\";\r\n\r\n    modalForm.appendChild(datetime);\r\n  }\r\n\r\n  function createSubmitBtn() {\r\n    const submit = document.createElement(\"button\");\r\n    submit.type = \"submit\";\r\n    submit.textContent = \"Add Task\";\r\n\r\n    modalForm.appendChild(submit);\r\n  }\r\n\r\n  function render() {\r\n    taskModal.appendChild(modalForm);\r\n    createTitle();\r\n    createTaskInput();\r\n    createDropDown();\r\n    createDatetimeInput();\r\n    createSubmitBtn();\r\n  }\r\n\r\n  render();\r\n\r\n  return taskModal;\r\n}\r\n\r\nfunction loadModal() {\r\n  const body = document.querySelector(\"body\");\r\n\r\n  const overlay = document.createElement(\"div\");\r\n  overlay.classList.add(\"overlay\");\r\n\r\n  body.appendChild(createTaskModal());\r\n  body.appendChild(overlay);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadModal);\r\n\n\n//# sourceURL=webpack://todo-list/./src/js/modal.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;