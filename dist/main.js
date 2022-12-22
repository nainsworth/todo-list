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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n\r\n\r\n\r\n(0,_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadTaskModal() {\r\n  const body = document.querySelector(\"body\");\r\n\r\n  const overlay = document.createElement(\"div\");\r\n  overlay.classList.add(\"overlay\");\r\n  overlay.addEventListener(\"click\", closeModal);\r\n\r\n  const taskModal = document.createElement(\"div\");\r\n  taskModal.classList.add(\"task-modal\");\r\n\r\n  const modalForm = document.createElement(\"form\");\r\n\r\n  function createTitle() {\r\n    const title = document.createElement(\"h2\");\r\n    title.textContent = \"New Task\";\r\n\r\n    modalForm.appendChild(title);\r\n  }\r\n\r\n  function createTaskInput() {\r\n    const description = document.createElement(\"input\");\r\n    description.id = \"task-desc\";\r\n    description.type = \"text\";\r\n    description.placeholder = \"Task\";\r\n    description.required = true;\r\n\r\n    modalForm.appendChild(description);\r\n  }\r\n\r\n  function createDropDown() {\r\n    const priority = [\"No Priority\", \"Low\", \"Medium\", \"High\"];\r\n\r\n    const select = document.createElement(\"select\");\r\n    select.id = \"task-priority\";\r\n\r\n    for (let i = 0; i < priority.length; i++) {\r\n      const option = document.createElement(\"option\");\r\n      option.textContent = priority[i];\r\n      option.value = priority[i];\r\n      select.add(option);\r\n    }\r\n\r\n    modalForm.appendChild(select);\r\n  }\r\n\r\n  function createDateTimeInput() {\r\n    const dateTime = document.createElement(\"input\");\r\n    dateTime.id = \"task-dateTime\";\r\n    dateTime.type = \"dateTime-local\";\r\n\r\n    modalForm.appendChild(dateTime);\r\n  }\r\n\r\n  function createSubmitBtn() {\r\n    const submit = document.createElement(\"button\");\r\n    submit.type = \"submit\";\r\n    submit.textContent = \"Add Task\";\r\n\r\n    modalForm.appendChild(submit);\r\n  }\r\n\r\n  //close modal\r\n  function closeModal() {\r\n    taskModal.classList.remove(\"active\");\r\n    overlay.classList.remove(\"active\");\r\n  }\r\n\r\n  function render() {\r\n    body.appendChild(taskModal);\r\n    body.appendChild(overlay);\r\n\r\n    taskModal.appendChild(modalForm);\r\n    createTitle();\r\n    createTaskInput();\r\n    createDropDown();\r\n    createDateTimeInput();\r\n    createSubmitBtn();\r\n  }\r\n\r\n  render();\r\n\r\n  return taskModal;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTaskModal);\r\n\n\n//# sourceURL=webpack://todo-list/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Create Task\r\n\r\n// Create Task Objects\r\nclass Task {\r\n  constructor(description, priority, dateTime) {\r\n    this.description = description;\r\n    this.priority = priority;\r\n    this.dateTime = dateTime;\r\n  }\r\n}\r\n\r\nclass List {\r\n  constructor() {\r\n    this.allList = [];\r\n  }\r\n\r\n  addToList(newTask) {\r\n    this.allList.push(newTask);\r\n  }\r\n}\r\n\r\nconst list = new List();\r\n\r\n// Generate Task Section with HTML DOM\r\n\r\nfunction loadTaskSection() {\r\n  const taskSection = document.querySelector(\".task-section\");\r\n  const taskContainer = document.createElement(\"div\");\r\n  const taskModal = document.querySelector(\".task-modal\");\r\n  const overlay = document.querySelector(\".overlay\");\r\n\r\n  // DOM List Title\r\n  function createTitle(list) {\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = list;\r\n\r\n    taskSection.appendChild(title);\r\n  }\r\n\r\n  // DOM Tasks Card\r\n  function createTaskCard(task) {\r\n    const taskCard = document.createElement(\"div\");\r\n    taskCard.classList.add(\"task-card\");\r\n\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.type = \"checkbox\";\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.classList.add(\"task-desc\");\r\n    description.textContent = task.description;\r\n\r\n    const date = document.createElement(\"p\");\r\n    date.classList.add(\"task-date\");\r\n    date.textContent = task.dateTime;\r\n\r\n    const deleteBtn = document.createElement(\"button\");\r\n    deleteBtn.classList.add(\"delete\");\r\n    deleteBtn.textContent = \"✖\";\r\n\r\n    // Add if statement to display priority\r\n    if ((task.priority = \"High\")) {\r\n      taskCard.classList.add(\"high\");\r\n    } else if ((task.priority = \"Medium\")) {\r\n      taskCard.classList.add(\"medium\");\r\n    } else if ((task.priority = \"low\")) {\r\n      taskCard.classList.add(\"low\");\r\n    } else {\r\n      return;\r\n    }\r\n\r\n    taskContainer.appendChild(taskCard);\r\n    taskCard.appendChild(checkbox);\r\n    taskCard.appendChild(description);\r\n    taskCard.appendChild(date);\r\n    taskCard.appendChild(deleteBtn);\r\n  }\r\n\r\n  // Add Task Button Displays New Task Modal\r\n\r\n  // DOM Task Button\r\n  function createNewTaskBtn() {\r\n    const newTaskBtn = document.createElement(\"button\");\r\n    newTaskBtn.classList.add(\"add-task\");\r\n    newTaskBtn.textContent = \"+ Add Task\";\r\n\r\n    taskSection.appendChild(newTaskBtn);\r\n\r\n    newTaskBtn.addEventListener(\"click\", openModal);\r\n  }\r\n\r\n   //open modal\r\n  function openModal() {\r\n    taskModal.classList.add(\"active\");\r\n    overlay.classList.add(\"active\");\r\n  }\r\n\r\n  \r\n\r\n   // update list\r\n   function updateList() {\r\n    taskContainer.textContent = \"\";\r\n    for (let task of list.allList) createTaskCard(task);\r\n  }\r\n\r\n  // Render Task Container\r\n  function render() {\r\n    createTitle(\"All\");\r\n    taskSection.appendChild(taskContainer);\r\n    updateList();\r\n    createNewTaskBtn();\r\n  }\r\n\r\n  render();\r\n}\r\n\r\n// Load Tasks Section\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTaskSection);\r\n\n\n//# sourceURL=webpack://todo-list/./src/js/task.js?");

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