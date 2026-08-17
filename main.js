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

/***/ "./js/modules/accordion.js"
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"ativo\";\n  }\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  //adiciona os eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach(item => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  //iniciar função\n  init() {\n    if (this.accordionList.length) {\n      //ativar primeiro item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?\n}");

/***/ },

/***/ "./js/modules/anima-numeros.js"
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n  animaNumeros() {\n    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));\n  }\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observerTarget, {\n      attributes: true\n    });\n  }\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?\n}");

/***/ },

/***/ "./js/modules/debounce.js"
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?\n}");

/***/ },

/***/ "./js/modules/dropdown-menu.js"
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nclass DropdownMenu {\n  constructor(dropdownMenus, events) {\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];else this.events = events;\n    this.activeClass = \"active\";\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\n  }\n  activeDropdownMenu(event) {\n    event.preventDefault();\n    const element = event.currentTarget;\n    element.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\n      element.classList.remove(this.activeClass);\n    });\n  }\n  addDropdownMenusEvent() {\n    this.dropdownMenus.forEach(menu => {\n      this.events.forEach(userEvent => {\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\n      });\n    });\n  }\n  init() {\n    if (this.dropdownMenus.length) {\n      this.addDropdownMenusEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?\n}");

/***/ },

/***/ "./js/modules/fetch-animais.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\nfunction fetchAnimais(url, target) {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n  const numerosGrid = document.querySelector(target);\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n  function animaAnimaisNumeros() {\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", \"ativo\");\n    animaNumeros.init();\n  }\n  async function criarAnimais() {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      animaisJSON.forEach(animal => preencherAnimais(animal));\n      animaAnimaisNumeros();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  return criarAnimais();\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?\n}");

/***/ },

/***/ "./js/modules/fetch-bitcoin.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\n  fetch(url).then(response => response.json()).then(bitcoin => {\n    const btcPreco = document.querySelector(target);\n    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n  }).catch(erro => {\n    console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?\n}");

/***/ },

/***/ "./js/modules/funcionamento.js"
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\n  constructor(funcionamento, activeClass) {\n    this.funcionamento = document.querySelector(funcionamento);\n    this.activeClass = activeClass;\n  }\n  dadosFuncionamento() {\n    this.diasSemana = this.funcionamento.dataset.semana.split(\",\").map(Number);\n    this.horarioSemana = this.funcionamento.dataset.horario.split(\",\").map(Number);\n  }\n  dadosAgora() {\n    this.dataAgora = new Date();\n    this.diaAgora = this.dataAgora.getDay();\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\n  }\n  estaAberto() {\n    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;\n    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];\n    return semanaAberto && horarioAberto;\n  }\n  ativaAberto() {\n    if (this.estaAberto()) {\n      this.funcionamento.classList.add(this.activeClass);\n    }\n  }\n  init() {\n    if (this.funcionamento) {\n      this.dadosFuncionamento();\n      this.dadosAgora();\n      this.ativaAberto();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?\n}");

/***/ },

/***/ "./js/modules/menu-mobile.js"
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nclass MenuMobile {\n  constructor(menuButton, menuList, events) {\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.activeClass = \"active\";\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];else this.events = events;\n    this.openMenu = this.openMenu.bind(this);\n  }\n  openMenu(event) {\n    event.preventDefault();\n    this.menuList.classList.add(this.activeClass);\n    this.menuButton.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\n      this.menuList.classList.remove(this.activeClass);\n      this.menuButton.classList.remove(this.activeClass);\n    });\n  }\n  addMenuMobileEvents() {\n    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));\n  }\n  init() {\n    if (this.menuButton && this.menuList) {\n      this.addMenuMobileEvents();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?\n}");

/***/ },

/***/ "./js/modules/modal.js"
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n  toggleModal(event) {\n    this.containerModal.classList.toggle(\"ativo\");\n  }\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n  cliqueForaModal(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal(event);\n    }\n  }\n  addModalEvents() {\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\n  }\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvents();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?\n}");

/***/ },

/***/ "./js/modules/outsideclick.js"
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n  if (!element.hasAttribute(outside)) {\n    events.forEach(userEvent => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, \"\");\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside, \"\");\n      events.forEach(userEvent => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?\n}");

/***/ },

/***/ "./js/modules/scroll-anima.js"
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\nclass ScrollAnima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\n  }\n  getDistance() {\n    this.distance = [...this.sections].map(section => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade)\n      };\n    });\n  }\n  checkDistance() {\n    this.distance.forEach(item => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add(\"ativo\");\n      } else if (item.element.classList.contains(\"ativo\")) {\n        item.element.classList.remove(\"ativo\");\n      }\n    });\n  }\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener(\"scroll\", this.checkDistance);\n    }\n    return this;\n  }\n  stop() {\n    window.removeEventListener(\"scroll\", this.checkDistance);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-anima.js?\n}");

/***/ },

/***/ "./js/modules/scroll-suave.js"
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n    if (section) {\n      section.scrollIntoView(this.options);\n    }\n  }\n  addLinkEvent() {\n    this.linksInternos.forEach(link => {\n      link.addEventListener(\"click\", this.scrollToSection);\n    });\n  }\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?\n}");

/***/ },

/***/ "./js/modules/slide.js"
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\nclass Slide {\n  constructor(slide, wrapper) {\n    this.slide = document.querySelector(slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.dist = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0\n    };\n    this.activeClass = \"active\";\n    this.changeEvent = new Event(\"changeEvent\");\n  }\n  transition(active) {\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\n  }\n  moveSlide(distX) {\n    this.dist.movePosition = distX;\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\n  }\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.5;\n    return this.dist.finalPosition - this.dist.movement;\n  }\n  onStart(event) {\n    let moveType;\n    if (event.type === \"mousedown\") {\n      event.preventDefault();\n      this.dist.startX = event.clientX;\n      moveType = \"mousemove\";\n    } else {\n      this.dist.startX = event.changedTouches[0].clientX;\n      moveType = \"touchmove\";\n    }\n    this.wrapper.addEventListener(moveType, this.onMove);\n    this.transition(false);\n  }\n  onMove(event) {\n    const pointerPosition = event.type === \"mousemove\" ? event.clientX : event.changedTouches[0].clientX;\n    const finalPosition = this.updatePosition(pointerPosition);\n    this.moveSlide(finalPosition);\n  }\n  onEnd(event) {\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\n    this.wrapper.removeEventListener(movetype, this.onMove);\n    this.dist.finalPosition = this.dist.movePosition;\n    this.transition(true);\n    this.changeSlideOnEnd();\n  }\n  changeSlideOnEnd() {\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\n      this.activeNextSlide();\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n      this.activePrevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n  addSlideEvents() {\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\n  }\n\n  //Slides config\n\n  slidePosition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map(element => {\n      const position = this.slidePosition(element);\n      return {\n        position,\n        element\n      };\n    });\n  }\n  slidesIndexNav(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1\n    };\n  }\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.moveSlide(activeSlide.position);\n    this.slidesIndexNav(index);\n    this.dist.finalPosition = activeSlide.position;\n    this.changeActiveClass();\n    this.wrapper.dispatchEvent(this.changeEvent);\n  }\n  changeActiveClass() {\n    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass));\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\n  }\n  activePrevSlide() {\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n  }\n  activeNextSlide() {\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\n  }\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfig();\n      this.changeSlide(this.index.active);\n    }, 1000);\n    this.slidesConfig();\n    this.changeSlide(this.index.active);\n  }\n  addResizeEvent() {\n    window.addEventListener(\"resize\", this.onResize);\n  }\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n    this.activePrevSlide = this.activePrevSlide.bind(this);\n    this.activeNextSlide = this.activeNextSlide.bind(this);\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\n  }\n  init() {\n    this.bindEvents();\n    this.transition(true);\n    this.addSlideEvents();\n    this.slidesConfig();\n    this.addResizeEvent();\n    this.changeSlide(0);\n    return this;\n  }\n}\nclass SlideNav extends Slide {\n  constructor(slide, wrapper) {\n    super(slide, wrapper);\n    this.bindControlEvents();\n  }\n  addArrow(prev, next) {\n    this.prevElement = document.querySelector(prev);\n    this.nextElement = document.querySelector(next);\n    this.addArrowEvent();\n  }\n  addArrowEvent() {\n    this.prevElement.addEventListener(\"click\", this.activePrevSlide);\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\n  }\n  createControl() {\n    const control = document.createElement(\"ul\");\n    control.dataset.control = \"slide\";\n    this.slideArray.forEach((item, index) => {\n      control.innerHTML += `<li><a href=\"#slide\"${index + 1}\">${index + 1}</a></li>`;\n    });\n    this.wrapper.appendChild(control);\n    return control;\n  }\n  eventControl(item, index) {\n    item.addEventListener(\"click\", event => {\n      event.preventDefault();\n      this.changeSlide(index);\n    });\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\n  }\n  activeControlItem() {\n    this.controlArray.forEach(item => item.classList.remove(this.activeClass));\n    this.controlArray[this.index.active].classList.add(this.activeClass);\n  }\n  addControl(customControl) {\n    this.control = document.querySelector(customControl) || this.createControl();\n    this.controlArray = [...this.control.children];\n    this.activeControlItem();\n    this.controlArray.forEach(this.eventControl);\n  }\n  bindControlEvents() {\n    this.eventControl = this.eventControl.bind(this);\n    this.activeControlItem = this.activeControlItem.bind(this);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/slide.js?\n}");

/***/ },

/***/ "./js/modules/tabnav.js"
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = \"ativo\";\n  }\n  activeTab(index) {\n    this.tabContent.forEach(section => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index));\n    });\n  }\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?\n}");

/***/ },

/***/ "./js/script.js"
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-anime=\"scroll\"]');\nscrollAnima.init();\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-dropdown]\");\ndropdownMenu.init();\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\nconst funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-semana]\", \"aberto\");\nfuncionamento.init();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"./animaisapi.json\", \".numeros-grid\");\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\".slide\", \".slide-wrapper\");\nslide.init();\nslide.addControl(\".custom-controls\");\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
/******/ 	let __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;