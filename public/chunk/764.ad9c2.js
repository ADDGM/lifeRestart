"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[764],{9600:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval("\nvar $ = __webpack_require__(2109);\nvar IndexedObject = __webpack_require__(8361);\nvar toIndexedObject = __webpack_require__(5656);\nvar arrayMethodIsStrict = __webpack_require__(9341);\n\nvar nativeJoin = [].join;\n\nvar ES3_STRINGS = IndexedObject != Object;\nvar STRICT_METHOD = arrayMethodIsStrict('join', ',');\n\n// `Array.prototype.join` method\n// https://tc39.es/ecma262/#sec-array.prototype.join\n$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {\n  join: function join(separator) {\n    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYwMC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlX3Jlc3RhcnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanM/YTE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9600\n")},8614:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Trajectory)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4747);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9600);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1249);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2222);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4129);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8478);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nfunction _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }\n\nfunction _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _speed = /*#__PURE__*/new WeakMap();\n\nvar _auto = /*#__PURE__*/new WeakMap();\n\nvar _createTrajectoryItem = /*#__PURE__*/new WeakSet();\n\nvar _isEnd = /*#__PURE__*/new WeakMap();\n\nvar _trajectoryItems = /*#__PURE__*/new WeakMap();\n\nvar _talents = /*#__PURE__*/new WeakMap();\n\nvar Trajectory = /*#__PURE__*/function (_ui$view$DefaultTheme) {\n  _inherits(Trajectory, _ui$view$DefaultTheme);\n\n  var _super = _createSuper(Trajectory);\n\n  function Trajectory() {\n    var _this;\n\n    _classCallCheck(this, Trajectory);\n\n    _this = _super.call(this);\n\n    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createTrajectoryItem);\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _speed, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _auto, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _isEnd, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _trajectoryItems, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _talents, {\n      writable: true,\n      value: void 0\n    });\n\n    var pos1 = [0, 0];\n\n    _this.panelTrajectory.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), function (e) {\n      return pos1 = [e.stageX, e.stageY];\n    });\n\n    _this.panelTrajectory.on(Laya.Event.MOUSE_UP, _assertThisInitialized(_this), function (e) {\n      var distanceX = e.stageX - pos1[0];\n      var distanceY = e.stageY - pos1[1];\n\n      if (Math.sqrt(Math.abs(distanceX) + Math.abs(distanceY)) > 10) {\n        return;\n      }\n\n      _this.onNext();\n    });\n\n    _this.btnSummary.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onSummary);\n\n    _this.panelTrajectory.vScrollBar.elasticDistance = 150;\n\n    _this.scbSpeed.on(Laya.Event.CHANGE, _assertThisInitialized(_this), function () {\n      return _this.speed = _this.scbSpeed.value;\n    });\n\n    _this.scbSpeed.on(Laya.Event.MOUSE_UP, _assertThisInitialized(_this), function () {\n      return _this.onNext();\n    });\n\n    return _this;\n  }\n\n  _createClass(Trajectory, [{\n    key: "init",\n    value: function init(_ref) {\n      var propertyAllocate = _ref.propertyAllocate,\n          talents = _ref.talents;\n      this.boxParticle.visible = false;\n      this.boxSpeed.visible = true;\n      this.btnSummary.visible = false;\n\n      _classPrivateFieldSet(this, _trajectoryItems, []);\n\n      _classPrivateFieldSet(this, _isEnd, false);\n\n      _classPrivateFieldSet(this, _talents, talents);\n\n      core.restart(propertyAllocate);\n      this.updateProperty();\n      this.onNext();\n    }\n  }, {\n    key: "close",\n    value: function close() {\n      this.scbSpeed.value = 0;\n      this.speed = 0;\n\n      _classPrivateFieldGet(this, _trajectoryItems).forEach(function (item) {\n        item.removeSelf();\n        item.destroy();\n      });\n\n      _classPrivateFieldSet(this, _trajectoryItems, null);\n    }\n  }, {\n    key: "updateProperty",\n    value: function updateProperty() {\n      var types = core.PropertyTypes;\n      var propertys = core.propertys;\n      this.labCharm.text = propertys[types.CHR];\n      this.labIntelligence.text = propertys[types.INT];\n      this.labStrength.text = propertys[types.STR];\n      this.labMoney.text = propertys[types.MNY];\n      this.labSpirit.text = propertys[types.SPR];\n    }\n  }, {\n    key: "onNext",\n    value: function onNext() {\n      var _this2 = this;\n\n      if (_classPrivateFieldGet(this, _isEnd)) return;\n\n      var _core$next = core.next(),\n          age = _core$next.age,\n          content = _core$next.content,\n          isEnd = _core$next.isEnd;\n\n      _classPrivateFieldSet(this, _isEnd, isEnd);\n\n      if (isEnd) {\n        this.boxSpeed.visible = false;\n        this.btnSummary.visible = true;\n      }\n\n      this.renderTrajectory(age, content);\n\n      if (age >= 100) {\n        this.boxParticle.visible = true;\n      }\n\n      Laya.timer.frameOnce(1, this, function () {\n        _this2.panelTrajectory.scrollTo(0, _this2.panelTrajectory.contentHeight);\n      });\n      this.updateProperty();\n    }\n  }, {\n    key: "renderTrajectory",\n    value: function renderTrajectory(age, content) {\n      var item = _classPrivateMethodGet(this, _createTrajectoryItem, _createTrajectoryItem2).call(this);\n\n      item.labAge.text = \'\' + age;\n      item.labContent.text = content.map(function (_ref2) {\n        var type = _ref2.type,\n            description = _ref2.description,\n            grade = _ref2.grade,\n            name = _ref2.name,\n            postEvent = _ref2.postEvent;\n\n        switch (type) {\n          case \'TLT\':\n            return "\\u5929\\u8D4B\\u3010".concat(name, "\\u3011\\u53D1\\u52A8\\uFF1A").concat(description);\n\n          case \'EVT\':\n            return description + (postEvent ? "\\n".concat(postEvent) : \'\');\n        }\n      }).join(\'\\n\');\n      this.vboxTrajectory.addChild(item);\n\n      _classPrivateFieldGet(this, _trajectoryItems).push(item);\n\n      _classPrivateFieldGet(this, _trajectoryItems).forEach(function (item, index) {\n        return item.y = index;\n      });\n    }\n  }, {\n    key: "onSummary",\n    value: function onSummary() {\n      var talents = _classPrivateFieldGet(this, _talents);\n\n      $ui.switchView(UI.pages.SUMMARY, {\n        talents: talents\n      });\n    }\n  }, {\n    key: "speed",\n    get: function get() {\n      return _classPrivateFieldGet(this, _speed);\n    },\n    set: function set(speed) {\n      var _this3 = this;\n\n      _classPrivateFieldSet(this, _speed, speed);\n\n      this.prgSpeed.value = speed / this.scbSpeed.max;\n      clearInterval(_classPrivateFieldGet(this, _auto));\n\n      _classPrivateFieldSet(this, _auto, null);\n\n      if (!speed) return;\n\n      _classPrivateFieldSet(this, _auto, setInterval(function () {\n        return _this3.onNext();\n      }, 3000 * (1 - this.prgSpeed.value) + 300));\n    }\n  }], [{\n    key: "load",\n    value: function load() {\n      return ["images/atlas/images/progress.atlas", \'images/atlas/images/slider.atlas\'];\n    }\n  }]);\n\n  return Trajectory;\n}(ui.view.DefaultTheme.TrajectoryUI);\n\nfunction _createTrajectoryItem2() {\n  var item = _classStaticPrivateFieldSpecGet(Trajectory, Trajectory, _createComponent).call(Trajectory, \'boxTrajectoryItem\');\n\n  item.labContent = item.getChildByName(\'labContent\');\n  item.labAge = item.getChildByName(\'hboxAge\').getChildByName(\'labAge\');\n  var config = $ui.common.trajectoryItem;\n  $_.deepMapSet(item, config.box);\n\n  item.getChildByName(\'hboxAge\')._childs.forEach(function (child) {\n    return child.color = config.ageColor;\n  });\n\n  item.labContent.color = config.contentColor;\n  return item;\n}\n\nvar _createComponent = {\n  writable: true,\n  value: Laya.plugin.extractComponents(Trajectory.uiView, [\'boxTrajectoryItem\'])\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODYxNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTs7QUFEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUVBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBaEJBO0FBaUJBOzs7O0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7QUFsSEE7QUFDQTtBQUlBOzs7O0FBNUJBOztBQStCQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFWQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvZGVmYXVsdC90cmFqZWN0b3J5LmpzP2NlNGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhamVjdG9yeSBleHRlbmRzIHVpLnZpZXcuRGVmYXVsdFRoZW1lLlRyYWplY3RvcnlVSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBwb3MxID0gWzAsIDBdO1xyXG4gICAgICAgIHRoaXMucGFuZWxUcmFqZWN0b3J5Lm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgZSA9PiBwb3MxID0gW2Uuc3RhZ2VYLCBlLnN0YWdlWV0pO1xyXG4gICAgICAgIHRoaXMucGFuZWxUcmFqZWN0b3J5Lm9uKExheWEuRXZlbnQuTU9VU0VfVVAsIHRoaXMsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZVggPSBlLnN0YWdlWCAtIHBvczFbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlWSA9IGUuc3RhZ2VZIC0gcG9zMVsxXTtcclxuICAgICAgICAgICAgaWYoTWF0aC5zcXJ0KE1hdGguYWJzKGRpc3RhbmNlWCkgKyBNYXRoLmFicyhkaXN0YW5jZVkpKSA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbk5leHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0blN1bW1hcnkub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblN1bW1hcnkpO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsVHJhamVjdG9yeS52U2Nyb2xsQmFyLmVsYXN0aWNEaXN0YW5jZSA9IDE1MDtcclxuICAgICAgICB0aGlzLnNjYlNwZWVkLm9uKExheWEuRXZlbnQuQ0hBTkdFLCB0aGlzLCAoKSA9PiB0aGlzLnNwZWVkID0gdGhpcy5zY2JTcGVlZC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zY2JTcGVlZC5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLCB0aGlzLCAoKSA9PiB0aGlzLm9uTmV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3BlZWQ7XHJcbiAgICAjYXV0bztcclxuXHJcbiAgICBzdGF0aWMgbG9hZCgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBcImltYWdlcy9hdGxhcy9pbWFnZXMvcHJvZ3Jlc3MuYXRsYXNcIixcclxuICAgICAgICAgICAgJ2ltYWdlcy9hdGxhcy9pbWFnZXMvc2xpZGVyLmF0bGFzJyxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjY3JlYXRlQ29tcG9uZW50ID0gTGF5YS5wbHVnaW4uZXh0cmFjdENvbXBvbmVudHMoVHJhamVjdG9yeS51aVZpZXcsIFsnYm94VHJhamVjdG9yeUl0ZW0nXSk7XHJcbiAgICAjY3JlYXRlVHJhamVjdG9yeUl0ZW0oKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IFRyYWplY3RvcnkuI2NyZWF0ZUNvbXBvbmVudCgnYm94VHJhamVjdG9yeUl0ZW0nKTtcclxuICAgICAgICBpdGVtLmxhYkNvbnRlbnQgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdsYWJDb250ZW50Jyk7XHJcbiAgICAgICAgaXRlbS5sYWJBZ2UgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdoYm94QWdlJykuZ2V0Q2hpbGRCeU5hbWUoJ2xhYkFnZScpO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9ICR1aS5jb21tb24udHJhamVjdG9yeUl0ZW07XHJcbiAgICAgICAgJF8uZGVlcE1hcFNldChpdGVtLCBjb25maWcuYm94KTtcclxuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdoYm94QWdlJykuX2NoaWxkcy5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmNvbG9yID0gY29uZmlnLmFnZUNvbG9yKTtcclxuICAgICAgICBpdGVtLmxhYkNvbnRlbnQuY29sb3IgPSBjb25maWcuY29udGVudENvbG9yO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgI2lzRW5kO1xyXG4gICAgI3RyYWplY3RvcnlJdGVtcztcclxuICAgICN0YWxlbnRzO1xyXG5cclxuICAgIGluaXQoe3Byb3BlcnR5QWxsb2NhdGUsIHRhbGVudHN9KSB7XHJcbiAgICAgICAgdGhpcy5ib3hQYXJ0aWNsZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib3hTcGVlZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0blN1bW1hcnkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuI3RyYWplY3RvcnlJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuI2lzRW5kID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4jdGFsZW50cyA9IHRhbGVudHM7XHJcbiAgICAgICAgY29yZS5yZXN0YXJ0KHByb3BlcnR5QWxsb2NhdGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydHkoKTtcclxuICAgICAgICB0aGlzLm9uTmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuc2NiU3BlZWQudmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuI3RyYWplY3RvcnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4jdHJhamVjdG9yeUl0ZW1zID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9wZXJ0eSgpIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IGNvcmUuUHJvcGVydHlUeXBlcztcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eXMgPSBjb3JlLnByb3BlcnR5cztcclxuXHJcbiAgICAgICAgdGhpcy5sYWJDaGFybS50ZXh0ID0gcHJvcGVydHlzW3R5cGVzLkNIUl07XHJcbiAgICAgICAgdGhpcy5sYWJJbnRlbGxpZ2VuY2UudGV4dCA9IHByb3BlcnR5c1t0eXBlcy5JTlRdO1xyXG4gICAgICAgIHRoaXMubGFiU3RyZW5ndGgudGV4dCA9IHByb3BlcnR5c1t0eXBlcy5TVFJdO1xyXG4gICAgICAgIHRoaXMubGFiTW9uZXkudGV4dCA9IHByb3BlcnR5c1t0eXBlcy5NTlldO1xyXG4gICAgICAgIHRoaXMubGFiU3Bpcml0LnRleHQgPSBwcm9wZXJ0eXNbdHlwZXMuU1BSXTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5leHQoKSB7XHJcbiAgICAgICAgaWYodGhpcy4jaXNFbmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeyBhZ2UsIGNvbnRlbnQsIGlzRW5kIH0gPSBjb3JlLm5leHQoKTtcclxuICAgICAgICB0aGlzLiNpc0VuZCA9IGlzRW5kO1xyXG5cclxuICAgICAgICBpZihpc0VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJveFNwZWVkLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5TdW1tYXJ5LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJUcmFqZWN0b3J5KGFnZSwgY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmKGFnZSA+PSAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy5ib3hQYXJ0aWNsZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsVHJhamVjdG9yeS5zY3JvbGxUbygwLCB0aGlzLnBhbmVsVHJhamVjdG9yeS5jb250ZW50SGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVHJhamVjdG9yeShhZ2UsIGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy4jY3JlYXRlVHJhamVjdG9yeUl0ZW0oKTtcclxuICAgICAgICBpdGVtLmxhYkFnZS50ZXh0ID0gJycrYWdlO1xyXG4gICAgICAgIGl0ZW0ubGFiQ29udGVudC50ZXh0ID0gY29udGVudC5tYXAoXHJcbiAgICAgICAgICAgICh7dHlwZSwgZGVzY3JpcHRpb24sIGdyYWRlLCBuYW1lLCBwb3N0RXZlbnR9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2godHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1RMVCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBg5aSp6LWL44CQJHtuYW1lfeOAkeWPkeWKqO+8miR7ZGVzY3JpcHRpb259YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdFVlQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRpb24gKyAocG9zdEV2ZW50P2BcXG4ke3Bvc3RFdmVudH1gOicnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkuam9pbignXFxuJyk7XHJcbiAgICAgICAgdGhpcy52Ym94VHJhamVjdG9yeS5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICB0aGlzLiN0cmFqZWN0b3J5SXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLiN0cmFqZWN0b3J5SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IGl0ZW0ueSA9IGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1bW1hcnkoKSB7XHJcbiAgICAgICAgY29uc3QgdGFsZW50cyA9IHRoaXMuI3RhbGVudHM7XHJcbiAgICAgICAgJHVpLnN3aXRjaFZpZXcoVUkucGFnZXMuU1VNTUFSWSwge3RhbGVudHN9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3BlZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzcGVlZChzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuI3NwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5wcmdTcGVlZC52YWx1ZSA9IHNwZWVkIC8gdGhpcy5zY2JTcGVlZC5tYXg7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLiNhdXRvKTtcclxuICAgICAgICB0aGlzLiNhdXRvID0gbnVsbDtcclxuICAgICAgICBpZighc3BlZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLiNhdXRvID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMub25OZXh0KCksXHJcbiAgICAgICAgICAgIDMwMDAgKiAoMSAtIHRoaXMucHJnU3BlZWQudmFsdWUpICsgMzAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8614\n')}}]);