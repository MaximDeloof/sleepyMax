/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GameConfig = void 0;\nvar game_scene_1 = __webpack_require__(/*! ./game-scene */ \"./src/game-scene.ts\");\nvar lost_scene_1 = __webpack_require__(/*! ./lost_scene */ \"./src/lost_scene.ts\");\nvar start_scene_1 = __webpack_require__(/*! ./start-scene */ \"./src/start-scene.ts\");\nexports.GameConfig = {\n    width: 800,\n    height: 600,\n    type: Phaser.AUTO,\n    parent: 'game',\n    scene: [start_scene_1.StartScene, game_scene_1.GameScene, lost_scene_1.LoseScene],\n    physics: {\n        default: 'arcade',\n        arcade: {\n            gravity: { y: 40 },\n            debug: false\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ }),

/***/ "./src/game-scene.ts":
/*!***************************!*\
  !*** ./src/game-scene.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GameScene = void 0;\nvar player_1 = __webpack_require__(/*! ./objects/player */ \"./src/objects/player.ts\");\nvar item_1 = __webpack_require__(/*! ./objects/item */ \"./src/objects/item.ts\");\nvar energy_bar_1 = __webpack_require__(/*! ./ui/energy-bar */ \"./src/ui/energy-bar.ts\");\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: 'Game',\n};\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        var _this = _super.call(this, sceneConfig) || this;\n        _this.energy_items = ['chocomelk', 'loempialand', 'capri-sun'];\n        _this.sleepy_items = ['management'];\n        return _this;\n    }\n    GameScene.prototype.init = function () {\n        this.items = this.add.group({ runChildUpdate: true });\n        this.energy = 100;\n    };\n    GameScene.prototype.preload = function () {\n        this.load.image('background', 'assets/images/groep_t_aula.jpg');\n        this.load.image('player', 'assets/images/maxim.png');\n        this.load.image('chocomelk', 'assets/images/chocomelk.png');\n        this.load.image('capri-sun', 'assets/images/capri-sun.png');\n        this.load.image('management', 'assets/images/management.png');\n        this.load.image('loempialand', 'assets/images/loempialand.png');\n        this.load.image('energy-bar-decoration', 'assets/images/energie_bar.png');\n    };\n    GameScene.prototype.create = function () {\n        var background = this.add.image(800, 600, 'background');\n        background.setOrigin(1, 1).setDisplaySize(800, 600);\n        this.physics.world.setBounds(0, 0, 800, 600);\n        this.player = new player_1.Player(this, 200, 200, 'player');\n        this.energyBar = new energy_bar_1.EnergyBar(this);\n    };\n    GameScene.prototype.update = function () {\n        var _this = this;\n        if (this.player.active) {\n            if (this.energy > 0) {\n                this.energy -= 0.05;\n            }\n            else {\n                this.scene.start('Lose');\n            }\n            this.player.update();\n            this.energyBar.setValue(this.energy);\n            this.items.children.each(function (item) {\n                item.update();\n                _this.physics.overlap(_this.items, _this.player, _this.itemHitPlayer, null, _this);\n            }, this);\n            // Spawn new items at random\n            if (Math.random() < 0.01) {\n                var type = void 0;\n                var x = Math.random() * 800;\n                var y = -40;\n                var rand = Math.random();\n                if (rand > 0.8) {\n                    type = 'chocomelk';\n                }\n                else if (rand < 0.8 && rand > 0.6) {\n                    type = 'loempialand';\n                }\n                else if (rand < 0.3) {\n                    type = 'management';\n                }\n                else {\n                    type = 'capri-sun';\n                }\n                this.items.add(new item_1.Item(this, x, y, type));\n            }\n        }\n    };\n    GameScene.prototype.itemHitPlayer = function (item, player) {\n        var itemType = item.itemType;\n        if (this.energy_items.includes(itemType)) {\n            this.energy += 5;\n        }\n        else if (this.sleepy_items.includes(itemType)) {\n            this.energy -= 5;\n        }\n        item.destroy();\n    };\n    return GameScene;\n}(Phaser.Scene));\nexports.GameScene = GameScene;\n\n\n//# sourceURL=webpack:///./src/game-scene.ts?");

/***/ }),

/***/ "./src/lost_scene.ts":
/*!***************************!*\
  !*** ./src/lost_scene.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LoseScene = void 0;\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: 'Lose',\n};\nvar LoseScene = /** @class */ (function (_super) {\n    __extends(LoseScene, _super);\n    function LoseScene() {\n        return _super.call(this, sceneConfig) || this;\n    }\n    LoseScene.prototype.init = function () {\n    };\n    LoseScene.prototype.preload = function () {\n        this.load.image('losecreen', 'assets/images/lose-screen.png');\n    };\n    LoseScene.prototype.create = function () {\n        this.cursors = this.input.keyboard.createCursorKeys();\n        this.counter = 360;\n        this.splashScreen = this.add.image(800, 600, 'losecreen');\n        this.splashScreen.setOrigin(1, 1).setDisplaySize(800, 600);\n    };\n    LoseScene.prototype.update = function () {\n        if (this.counter <= 0) {\n            this.scene.start('Game');\n        }\n        this.counter--;\n    };\n    return LoseScene;\n}(Phaser.Scene));\nexports.LoseScene = LoseScene;\n\n\n//# sourceURL=webpack:///./src/lost_scene.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Game = void 0;\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/config.ts\");\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game(config) {\n        return _super.call(this, config) || this;\n    }\n    return Game;\n}(Phaser.Game));\nexports.Game = Game;\n// when the page has finished loading, create our game\nwindow.onload = function () {\n    var game = new Game(config_1.GameConfig);\n};\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/objects/item.ts":
/*!*****************************!*\
  !*** ./src/objects/item.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Item = void 0;\nvar Item = /** @class */ (function (_super) {\n    __extends(Item, _super);\n    function Item(scene, x, y, texture) {\n        var _this = _super.call(this, scene, x, y, texture) || this;\n        _this.initVariables(texture);\n        _this.initImage();\n        _this.initPhysics();\n        _this.scene.add.existing(_this);\n        return _this;\n    }\n    Item.prototype.initVariables = function (textureType) {\n        this.itemType = textureType;\n        switch (this.itemType) {\n            case 'chocomelk':\n                break;\n            case 'loempialand':\n                break;\n        }\n    };\n    Item.prototype.initImage = function () {\n        this.setOrigin(0.5, 0.5);\n        switch (this.itemType) {\n            case 'chocomelk':\n                this.setDisplaySize(100, 100);\n                break;\n            case 'loempialand':\n                this.setDisplaySize(100, 100);\n            case 'capri-sun':\n                this.setDisplaySize(70, 100);\n            case 'management':\n                this.setDisplaySize(70, 100);\n                break;\n        }\n        this.setActive(true);\n    };\n    Item.prototype.initPhysics = function () {\n        this.scene.physics.world.enable(this);\n        switch (this.itemType) {\n            case 'chocomelk':\n                this.body.setSize(100, 100);\n                break;\n            case 'loempialand':\n                this.setDisplaySize(100, 100);\n                break;\n            case 'management':\n                this.body.setSize(150, 250);\n                break;\n        }\n    };\n    Item.prototype.update = function () {\n        if (this.y > 800) {\n            this.destroy();\n        }\n    };\n    return Item;\n}(Phaser.GameObjects.Image));\nexports.Item = Item;\n\n\n//# sourceURL=webpack:///./src/objects/item.ts?");

/***/ }),

/***/ "./src/objects/player.ts":
/*!*******************************!*\
  !*** ./src/objects/player.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Player = void 0;\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player(scene, x, y, texture) {\n        var _this = _super.call(this, scene, x, y, texture) || this;\n        _this.setOrigin(0.5, 1).setPosition(400, 610).setDisplaySize(175, 175);\n        _this.cursors = _this.scene.input.keyboard.createCursorKeys();\n        _this.scene.physics.world.enable(_this);\n        _this.scene.physics.world.setBounds(0, 0, 800, 610);\n        _this.body.setSize(100, 250);\n        _this.body.setOffset(100, 50);\n        _this.body.setCollideWorldBounds(true);\n        _this.body.maxVelocity.x = 200;\n        _this.scene.add.existing(_this);\n        return _this;\n    }\n    Player.prototype.preload = function () {\n    };\n    Player.prototype.update = function () {\n        if (this.cursors.left.isDown) {\n            this.body.setVelocityX(-300);\n        }\n        else if (this.cursors.right.isDown) {\n            this.body.setVelocityX(300);\n        }\n        else {\n            this.body.setVelocityX(0);\n        }\n    };\n    return Player;\n}(Phaser.GameObjects.Image));\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./src/objects/player.ts?");

/***/ }),

/***/ "./src/start-scene.ts":
/*!****************************!*\
  !*** ./src/start-scene.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StartScene = void 0;\nvar sceneConfig = {\n    active: false,\n    visible: false,\n    key: 'Start',\n};\nvar StartScene = /** @class */ (function (_super) {\n    __extends(StartScene, _super);\n    function StartScene() {\n        return _super.call(this, sceneConfig) || this;\n    }\n    StartScene.prototype.init = function () {\n    };\n    StartScene.prototype.preload = function () {\n        this.load.image('splashscreen', 'assets/images/splash-screen.png');\n    };\n    StartScene.prototype.create = function () {\n        this.cursors = this.input.keyboard.createCursorKeys();\n        this.counter = 360;\n        this.splashScreen = this.add.image(800, 600, 'splashscreen');\n        this.splashScreen.setOrigin(1, 1).setDisplaySize(800, 600);\n        this.countDown = this.add.text(400, 220, 'testst');\n        this.countDown.setFontSize(50).setFontFamily('Arial');\n    };\n    StartScene.prototype.update = function () {\n        if (this.counter <= 0) {\n            this.scene.start('Game');\n        }\n        this.countDown.setText(String(Math.floor(this.counter / 60)));\n        this.counter--;\n    };\n    return StartScene;\n}(Phaser.Scene));\nexports.StartScene = StartScene;\n\n\n//# sourceURL=webpack:///./src/start-scene.ts?");

/***/ }),

/***/ "./src/ui/energy-bar.ts":
/*!******************************!*\
  !*** ./src/ui/energy-bar.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.EnergyBar = void 0;\nvar EnergyBar = /** @class */ (function (_super) {\n    __extends(EnergyBar, _super);\n    function EnergyBar(scene) {\n        var _this = _super.call(this, scene) || this;\n        _this.energyBar = _this.scene.add.graphics();\n        _this.energyBar.fillStyle(0x3ce16c, 1);\n        _this.energyBar.fillRect(0, 0, 382, 51);\n        _this.energyBar.x = 204;\n        _this.energyBar.y = 60;\n        _this.energyBar.setDepth(100);\n        _this.backgroundFill = _this.scene.add.graphics();\n        _this.backgroundFill.fillStyle(0x064800, 1);\n        _this.backgroundFill.fillRect(0, 0, 400, 62);\n        _this.backgroundFill.x = 200;\n        _this.backgroundFill.y = 55;\n        _this.backgroundFill.setDepth(99);\n        _this.energyBarDecoration = _this.scene.add.image(1000, 351, 'energy-bar-decoration');\n        _this.energyBarDecoration.setOrigin(0.5, 0.5).setPosition(400, 86).setDisplaySize(500, 175).setDepth(101);\n        _this.scene.add.existing(_this);\n        return _this;\n    }\n    EnergyBar.prototype.setValue = function (percentage) {\n        if (percentage > 100) {\n            percentage = 100;\n        }\n        else if (percentage < 0) {\n            percentage = 0;\n        }\n        //scale the bar\n        this.energyBar.scaleX = percentage / 100;\n    };\n    return EnergyBar;\n}(Phaser.GameObjects.Graphics));\nexports.EnergyBar = EnergyBar;\n\n\n//# sourceURL=webpack:///./src/ui/energy-bar.ts?");

/***/ })

/******/ });