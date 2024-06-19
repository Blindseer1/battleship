/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./gameboard.js":
/*!**********************!*\
  !*** ./gameboard.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./ship.js\");\nconst GameBoard = () => {\n  let gb = {};\n  gb.ships = [];\n  let grid = [\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n  ];\n  gb.lose = 0;\n\n  gb.placeShip = (len, [x, y], dir) => {\n    let s = Ship(len);\n    if (dir == 'h' && y + len <= 10) {\n      for (let i = y; i < y + len; i++)\n        if (grid[x][i] != 0) return -1;\n      for (let i = y; i < y + len; i++)\n        grid[x][i] = s;\n\n    }\n    else if (dir == 'v' && x + len <= 10) {\n\n      for (let i = x; i < x + len; i++)\n        if (grid[i][y] != 0) return -1;\n\n      for (let i = x; i < x + len; i++)\n        grid[i][y] = s;\n\n    }\n    else\n      return -1;\n    gb.ships.push(s)\n\n  }\n\n  gb.shipStatus = () => {\n    for (let ship of gb.ships)\n      if (ship.isSunk() == false)\n        return 1;\n    return 0;\n\n  }\n\n  gb.receiveAttack = (x, y) => {\n\n    if (grid[x][y] == 0)\n      grid[x][y] = -1;\n    else\n      if (grid[x][y] != -1) {\n        grid[x][y].hit();\n        grid[x][y] = 1;\n      }\n\n    if (gb.shipStatus() == 0)\n      gb.lose = 1;\n  }\n  gb.shipsPrint = () => gb.ships;\n\n  gb.printGrid = () => {\n    for (let row of grid) {\n      console.log(row.map(cell => (cell === 0 ? '.' : cell)).join(' '));\n    }\n  };\n\n  gb.returnGrid = () => grid;\n  gb.clearBoard = () => {\n    grid = [\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n    ];\n    gb.ships.length = 0;\n  }\n  return gb;\n}\n\n\nmodule.exports = GameBoard;\n\n\n//# sourceURL=webpack://battleship/./gameboard.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-svgrepo-com.svg */ \"./ship-svgrepo-com.svg\");\n/* harmony import */ var _ship_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _explosion_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explosion-svgrepo-com.svg */ \"./explosion-svgrepo-com.svg\");\n/* harmony import */ var _explosion_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_explosion_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sea_waves_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sea-waves-svgrepo-com.svg */ \"./sea-waves-svgrepo-com.svg\");\n/* harmony import */ var _sea_waves_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sea_waves_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__);\n\nconst Player = __webpack_require__(/*! ./player */ \"./player.js\")\n;\n\n\n\nconst playerBoard = document.querySelectorAll('.gameboard')[0];\nconst computerBoard = document.querySelectorAll('.gameboard')[1];\nlet prompt = document.querySelector('.prompt');\nconst playButton = document.querySelector('#play');\nconst randomButton = document.querySelector('#random')\n\nlet gameOver = 0;\n\nlet player = Player();\nlet computer = Player();\n\nconst updateBoard = (board, player) => {\n  let cells = Array.from(board.querySelectorAll('div'))\n  let i = 0, j = 0;\n  let grid = player.gb.returnGrid();\n\n  cells.forEach((cell) => {\n    cell.innerHTML = '';\n    let ship = new Image();\n    ship.src = (_ship_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0___default());\n    ship.className = \"icons\";\n    ship.classList.add(\"ship\")\n\n    let miss = new Image();\n    miss.src = (_sea_waves_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2___default());\n    miss.className = \"icons\";\n\n    let boom = new Image();\n    boom.src = (_explosion_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1___default());\n    boom.className = \"icons\";\n\n    if (grid[i][j] == -1)\n      cell.appendChild(miss);\n    else\n      if (grid[i][j] == 1)\n        cell.appendChild(boom);\n      else\n        if (grid[i][j] != 0)\n          cell.appendChild(ship)\n\n\n    j++;\n    if (j == 10) {\n      i++;\n      j = 0;\n    }\n\n\n  }\n  )\n}\n\n\nconst computerListener = () => {\n  let i, j;\n\n  Array.from(computerBoard.querySelectorAll('div')).forEach((cell, index) => {\n    cell.addEventListener('click', () => {\n      if (gameOver == 0) {\n        i = Math.floor(index / 10);\n        j = index % 10;\n        console.log('i is ' + i + ' and j is ' + j)\n\n        computer.gb.receiveAttack(i, j);\n        updateBoard(computerBoard, computer)\n        console.log(computer.gb.lose == 1)\n        if (computer.gb.lose == 1) {\n          prompt.textContent = \"Computer Lost\";\n          gameOver = 1;\n        }\n        computerMove()\n        updateBoard(playerBoard, player)\n        if (player.gb.lose == 1) {\n          prompt.textContent = \"Player Lost\";\n          gameOver = 1;\n        }\n      }\n    })\n\n\n  })\n\n\n}\n\n\n\n\n\nconst computerMove = () => {\n  let cells = Array.from(playerBoard.querySelectorAll('div'))\n  let x = Math.floor(Math.random() * 10);\n  let y = Math.floor(Math.random() * 10)\n\n  console.log('initial coord are ' + x + ' ' + y)\n\n  while (cells[x * 10 + y].children[0] != undefined && cells[x * 10 + y].children[0].className.slice(-4) != \"ship\") {\n    x = Math.floor(Math.random() * 10);\n    y = Math.floor(Math.random() * 10)\n  }\n  player.gb.receiveAttack(x, y)\n  updateBoard(playerBoard, player)\n\n\n  console.log(x, y)\n\n\n\n}\n\nlet coordinatesGenerated = 0;\n\nconst clearB = (board, user) => {\n  user.gb.clearBoard()\n  console.log(user.gb.shipsPrint())\n  updateBoard(board, user);\n}\n\n\nplayButton.addEventListener('click', () => {\n  if (coordinatesGenerated == 1) {\n    gameOver = 0;\n    console.log(computer.gb.shipsPrint())\n\n  }\n\n})\n\nconst randomCoordinates = (player) => {\n  let dirs = ['h', 'v'];\n  let lenghts = [5, 4, 3, 3, 2]\n\n  for (let len of lenghts) {\n    let x = Math.floor(Math.random() * 10)\n    let y = Math.floor(Math.random() * 10)\n    let dir = dirs[Math.floor(Math.random() * 2)]\n    let a = player.gb.placeShip(len, [x, y], dir);\n    console.log(a);\n    while (a == -1) {\n      x = Math.floor(Math.random() * 10)\n      y = Math.floor(Math.random() * 10)\n      dir = dirs[Math.floor(Math.random() * 2)]\n      console.log('x is ' + x + ' y is ' + y + 'len is ' + len + 'and dir is ' + dir)\n      a = player.gb.placeShip(len, [x, y], dir);\n    }\n    player.gb.placeShip(len, [x, y], dir)\n  }\n\n  coordinatesGenerated = 1;\n\n}\n\nrandomButton.addEventListener('click', () => {\n  clearB(computerBoard, computer)\n  clearB(playerBoard, player)\n  randomCoordinates(computer)\n  randomCoordinates(player)\n  updateBoard(computerBoard, computer)\n  updateBoard(playerBoard, player)\n  computerListener()\n})\n\n\n\n\n//# sourceURL=webpack://battleship/./index.js?");

/***/ }),

/***/ "./explosion-svgrepo-com.svg":
/*!***********************************!*\
  !*** ./explosion-svgrepo-com.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3e %3csvg width='800px' height='800px' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_901_2909)'%3e %3cpath d='M22.4297 4.26L22.4407 4.27C22.9407 4.11 23.4507 4 23.9997 4C26.7597 4 28.9997 6.24 28.9997 9C28.9997 9.5 28.9097 9.98 28.7697 10.43C30.0897 11.09 30.9997 12.43 30.9997 14C30.9997 15.86 29.7497 17.54 28.0097 17.87C26.0897 18.24 24.9197 17.4 24.9197 17.4C24.5197 17.98 24.0307 18.48 23.4697 18.88C22.4907 19.59 21.2897 20 19.9997 20C18.4597 20 17.0597 19.41 15.9997 18.46C14.9407 19.41 13.5397 20 11.9997 20C10.6107 20 9.32969 19.52 8.30969 18.7C7.83969 18.34 7.41969 17.9 7.07969 17.4L4.00969 17.88C2.28069 17.44 0.999695 15.87 0.999695 14C0.999695 12.43 1.90969 11.09 3.23069 10.43C3.08969 9.98 2.99969 9.5 2.99969 9C2.99969 6.24 5.24069 4 7.99969 4C8.54969 4 9.0597 4.11 9.5597 4.27C11.0097 2.29 13.3497 1 15.9997 1C18.6507 1 20.9807 2.29 22.4297 4.26Z' fill='%23668077'/%3e %3cpath d='M20 20C21.29 20 22.49 19.59 23.47 18.88L23.74 19.21C22.85 19.96 20 22.61 20 25.99C20 29.99 22 30.99 22 30.99H16H9.99998C9.99998 30.99 12 29.99 12 25.99C12 22.24 8.47998 19.38 8.03998 19.03L8.30998 18.7C9.32998 19.52 10.61 20 12 20C13.54 20 14.94 19.41 16 18.46C17.06 19.41 18.46 20 20 20Z' fill='%23668077'/%3e %3cpath d='M22.4348 4.2617C21.4548 4.5917 20.6078 5.2127 20.0008 6.0287M11.9992 6.0283C11.3932 5.2133 10.5462 4.5913 9.5572 4.2723M9.5572 4.2723C11.0132 2.2913 13.353 1 16 1C18.648 1 20.987 2.291 22.444 4.272C22.937 4.109 23.453 4 24 4C26.76 4 29 6.24 29 9C29 9.501 28.912 9.977 28.773 10.432C30.088 11.086 31 12.431 31 14C31 15.861 29.729 17.426 28.008 17.873M9.5572 4.2723C9.0642 4.1093 8.547 4 8 4C5.24 4 3 6.24 3 9C3 9.501 3.088 9.977 3.228 10.432C1.912 11.086 1 12.431 1 14C1 15.868 2.281 17.437 4.012 17.877M11.0002 23C11.0002 23 12.0002 24 12.0002 26C12.0002 30 10.0002 31 10.0002 31M21.0002 23C21.0002 23 20.0002 24 20.0002 26C20.0002 30 22.0002 31 22.0002 31M16.0002 30.9902V24.9902M7.0783 17.4033C8.1603 18.9663 9.9553 20.0003 12.0003 20.0003C13.5383 20.0003 14.9373 19.4153 16.0003 18.4623C17.0613 19.4153 18.4613 20.0003 20.0003 20.0003C22.0453 20.0003 23.8403 18.9673 24.9223 17.4033' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_901_2909'%3e %3crect width='32' height='32' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e\"\n\n//# sourceURL=webpack://battleship/./explosion-svgrepo-com.svg?");

/***/ }),

/***/ "./sea-waves-svgrepo-com.svg":
/*!***********************************!*\
  !*** ./sea-waves-svgrepo-com.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e %3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools --%3e %3csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg id='SVGRepo_bgCarrier' stroke-width='0'/%3e %3cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'/%3e %3cg id='SVGRepo_iconCarrier'%3e %3cpath d='M3 6L6.10557 4.44721C6.66863 4.16569 7.33137 4.16569 7.89443 4.44721L9.31672 5.15836C11.0059 6.00294 12.9941 6.00294 14.6833 5.15836L16.1056 4.44721C16.6686 4.16569 17.3314 4.16569 17.8944 4.44721L21 6M3 10.5L6.10557 8.94721C6.66863 8.66569 7.33137 8.66569 7.89443 8.94721L9.31672 9.65836C11.0059 10.5029 12.9941 10.5029 14.6833 9.65836L16.1056 8.94721C16.6686 8.66569 17.3314 8.66569 17.8944 8.94721L21 10.5M3 15L6.10557 13.4472C6.66863 13.1657 7.33137 13.1657 7.89443 13.4472L9.31672 14.1584C11.0059 15.0029 12.9941 15.0029 14.6833 14.1584L16.1056 13.4472C16.6686 13.1657 17.3314 13.1657 17.8944 13.4472L21 15M3 19.5L6.10557 17.9472C6.66863 17.6657 7.33137 17.6657 7.89443 17.9472L9.31672 18.6584C11.0059 19.5029 12.9941 19.5029 14.6833 18.6584L16.1056 17.9472C16.6686 17.6657 17.3314 17.6657 17.8944 17.9472L21 19.5' stroke='%231c71d8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='--darkreader-inline-stroke: %2350a1e8;' data-darkreader-inline-stroke=''/%3e %3c/g%3e %3c/svg%3e\"\n\n//# sourceURL=webpack://battleship/./sea-waves-svgrepo-com.svg?");

/***/ }),

/***/ "./ship-svgrepo-com.svg":
/*!******************************!*\
  !*** ./ship-svgrepo-com.svg ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 501.999 501.999' xml:space='preserve'%3e %3cg%3e %3cpath style='fill:%23CCCCCC;' d='M492,250.488H31.49l23.462,119.046c2.422,12.292,13.201,21.153,25.729,21.153h271.12 C429.231,390.688,492,327.918,492,250.488L492,250.488z'/%3e %3cpolygon style='fill:%23CCCCCC;' points='324.17,180.9 61.168,180.9 77.541,250.488 340.544,250.488 '/%3e %3crect x='109.265' y='140.989' style='fill:%23FBB03B;' width='50.144' height='39.911'/%3e %3crect x='109.265' y='111.312' style='fill:%2329ABE2;' width='50.144' height='29.677'/%3e %3crect x='220.811' y='140.989' style='fill:%23FBB03B;' width='50.144' height='39.911'/%3e %3cg%3e %3crect x='220.811' y='111.312' style='fill:%2329ABE2;' width='50.144' height='29.677'/%3e %3cg%3e %3cpath d='M280.955,111.312c0-5.523-4.478-10-10-10h-50.144c-5.522,0-10,4.477-10,10V170.9H169.41v-59.588c0-5.523-4.478-10-10-10 h-50.145c-5.522,0-10,4.477-10,10V170.9H61.168c-3.055,0-5.942,1.396-7.839,3.791c-1.897,2.395-2.595,5.525-1.896,8.5 l13.481,57.297H31.49c-2.991,0-5.825,1.339-7.725,3.649c-1.899,2.31-2.665,5.35-2.087,8.284L45.14,371.468 c3.338,16.931,18.284,29.219,35.54,29.219H351.8c82.82,0,150.199-67.379,150.199-150.2c0-5.523-4.478-10-10-10H348.464 l-14.56-61.878c-1.063-4.517-5.094-7.709-9.734-7.709h-43.215V111.312z M230.812,121.312h30.144v9.677h-30.144V121.312z M230.812,150.989h30.144V170.9h-30.144V150.989z M119.266,121.312h30.145v9.677h-30.145 C119.266,130.989,119.266,121.312,119.266,121.312z M119.266,150.989h30.145V170.9h-30.145 C119.266,170.9,119.266,150.989,119.266,150.989z M316.25,190.9l11.668,49.588H85.461L73.794,190.9H316.25z M481.62,260.488 c-5.125,67.137-61.393,120.2-129.819,120.2H80.681c-7.729,0-14.423-5.504-15.917-13.087l-21.11-107.113L481.62,260.488 L481.62,260.488z'/%3e %3cpath d='M311.89,282.446H85.729c-5.522,0-10,4.477-10,10s4.478,10,10,10H311.89c5.522,0,10-4.477,10-10 S317.412,282.446,311.89,282.446z'/%3e %3cpath d='M354.87,302.446h17.397c5.522,0,10-4.477,10-10s-4.478-10-10-10H354.87c-5.522,0-10,4.477-10,10 S349.348,302.446,354.87,302.446z'/%3e %3cpath d='M23.304,352.034H20v-9.444c0-5.523-4.478-10-10-10s-10,4.477-10,10v39.911c0,5.523,4.478,10,10,10s10-4.477,10-10 v-10.467h3.304c5.522,0,10-4.477,10-10S28.826,352.034,23.304,352.034z'/%3e %3cpath d='M125.742,206.718h-17.5c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10h17.5c5.522,0,10-4.477,10-10 C135.742,211.195,131.265,206.718,125.742,206.718z'/%3e %3cpath d='M244.286,206.718H214.65c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10h29.636c5.522,0,10-4.477,10-10 C254.286,211.195,249.809,206.718,244.286,206.718z'/%3e %3cpath d='M185.014,206.718h-29.636c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10h29.636c5.522,0,10-4.477,10-10 C195.014,211.195,190.536,206.718,185.014,206.718z'/%3e %3cpath d='M291.423,206.718h-17.5c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10h17.5c5.522,0,10-4.477,10-10 C301.423,211.195,296.945,206.718,291.423,206.718z'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/svg%3e\"\n\n//# sourceURL=webpack://battleship/./ship-svgrepo-com.svg?");

/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameBoard = __webpack_require__(/*! ./gameboard */ \"./gameboard.js\")\n\nconst Player = () => {\n  const gb = GameBoard();\n  return { gb }\n}\n\n\nmodule.exports = Player\n\n\n//# sourceURL=webpack://battleship/./player.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/***/ ((module) => {

eval("const Ship = (length) => {\n  let ship = {}\n  ship.length = length;\n  ship.sunk;\n  ship.hits = 0;\n\n  ship.hit = () => {\n    ship.hits++;\n  }\n\n  ship.isSunk = () => (ship.hits >= ship.length)\n\n\n  return ship;\n\n}\n\nmodule.exports = Ship\n\n\n//# sourceURL=webpack://battleship/./ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;