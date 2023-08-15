"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireWildcard(require("../models/index"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var handlegetAllBill = function handlegetAllBill(maHD) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var billData, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            billData = {};
            data = '';
            if (!(maHD === 'ALL')) {
              _context.next = 10;
              break;
            }
            _context.next = 6;
            return _index["default"].HoaDon.findAll({
              include: [{
                model: _index["default"].User,
                as: 'UserData'
              }, {
                model: _index["default"].allCode,
                as: 'statusData'
              }]
            });
          case 6:
            data = _context.sent;
            if (data) {
              billData.errCode = 0;
              billData.errMessage = 'Ok';
              billData.data = data;
            } else {
              billData.errCode = 2;
              billData.errCode = 'data is not fond';
              billData.data = {};
            }
            _context.next = 14;
            break;
          case 10:
            _context.next = 12;
            return _index["default"].HoaDon.findOne({
              where: {
                hoaDonId: maHD
              },
              include: [{
                model: _index["default"].User,
                as: 'UserData'
              }, {
                model: _index["default"].allCode,
                as: 'statusData'
              }]
            });
          case 12:
            data = _context.sent;
            if (data) {
              billData.errCode = 0;
              billData.errMessage = 'Ok';
              billData.data = data;
            } else {
              billData.errCode = 2;
              billData.errMessage = 'data is not fond';
              billData.data = {};
            }
          case 14:
            resolve(billData);
            _context.next = 21;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            reject(_context.t0);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 17]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var handlegetAllBilldetail = function handlegetAllBilldetail(maHD) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var billData, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            billData = {};
            data = '';
            if (!(maHD === 'ALL')) {
              _context2.next = 10;
              break;
            }
            _context2.next = 6;
            return _index["default"].ChitietHoaDon.findAll({
              include: [{
                model: _index["default"].Book,
                as: 'BookData'
              }]
            });
          case 6:
            data = _context2.sent;
            if (data) {
              billData.errCode = 0;
              billData.errMessage = 'Ok';
              billData.data = data;
            } else {
              billData.errCode = 2;
              billData.errCode = 'data is not fond';
              billData.data = {};
            }
            _context2.next = 14;
            break;
          case 10:
            _context2.next = 12;
            return _index["default"].ChitietHoaDon.findAll({
              where: {
                hoaDonId: maHD
              },
              include: [{
                model: _index["default"].Book,
                as: 'BookData'
              }]
            });
          case 12:
            data = _context2.sent;
            if (data) {
              billData.errCode = 0;
              billData.errMessage = 'Ok';
              billData.data = data;
            } else {
              billData.errCode = 2;
              billData.errMessage = 'data is not fond';
              billData.data = {};
            }
          case 14:
            resolve(billData);
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 17]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var handleCreateNewBill = function handleCreateNewBill(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var bookData, datacreate;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            bookData = {};
            _context3.next = 4;
            return _index["default"].HoaDon.create({
              userId: data.userId,
              tongTien: data.tongTien,
              status: data.status
            });
          case 4:
            datacreate = _context3.sent;
            bookData.errCode = 0;
            bookData.errMessage = 'Ok';
            bookData.id = datacreate.id;
            resolve(bookData);
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var handleCreateNewBilldetail = function handleCreateNewBilldetail(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var bookData;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            bookData = {};
            _context4.next = 4;
            return _index["default"].ChitietHoaDon.bulkCreate(data);
          case 4:
            bookData.errCode = 0;
            bookData.errMessage = 'Ok';
            resolve(bookData);
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 9]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var handleDeleteBill = function handleDeleteBill(maHD) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var NCCData, HD;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            NCCData = {};
            _context5.prev = 1;
            _context5.next = 4;
            return _index["default"].HoaDon.findOne({
              where: {
                id: maHD
              }
            });
          case 4:
            HD = _context5.sent;
            if (HD) {
              _context5.next = 10;
              break;
            }
            NCCData.errCode = 2;
            NCCData.errMessage = 'HD is undefined';
            _context5.next = 14;
            break;
          case 10:
            _context5.next = 12;
            return _index["default"].HoaDon.destroy({
              where: {
                id: maHD
              }
            });
          case 12:
            NCCData.errCode = 0;
            NCCData.errMessage = 'OK';
          case 14:
            resolve(NCCData);
            _context5.next = 20;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](1);
            reject(_context5.t0);
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 17]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var handleDeleteBilldetail = function handleDeleteBilldetail(maHD) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var NCCData, HD;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            NCCData = {};
            _context6.prev = 1;
            _context6.next = 4;
            return _index["default"].ChitietHoaDon.findAll({
              where: {
                hoaDonId: maHD
              }
            });
          case 4:
            HD = _context6.sent;
            if (HD) {
              _context6.next = 10;
              break;
            }
            NCCData.errCode = 2;
            NCCData.errMessage = 'TL is undefined';
            _context6.next = 14;
            break;
          case 10:
            _context6.next = 12;
            return _index["default"].ChitietHoaDon.destroy({
              where: {
                hoaDonId: maHD
              }
            });
          case 12:
            NCCData.errCode = 0;
            NCCData.errMessage = 'OK';
          case 14:
            resolve(NCCData);
            _context6.next = 20;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](1);
            reject(_context6.t0);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 17]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var handleUpdateBill = function handleUpdateBill(HDinput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var userData, HD;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            userData = {};
            _context7.next = 4;
            return _index["default"].HoaDon.findOne({
              where: {
                id: HDinput.maHD
              }
            });
          case 4:
            HD = _context7.sent;
            if (HD) {
              _context7.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'not find HD';
            _context7.next = 14;
            break;
          case 10:
            _context7.next = 12;
            return _index["default"].HoaDon.update({
              tongTien: HDinput.tongTien,
              status: HDinput.status
            }, {
              where: {
                id: HDinput.maHD
              }
            });
          case 12:
            userData.errCode = 0;
            userData.errMessager = 'Ok';
          case 14:
            resolve(userData);
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 20:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 17]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var handleUpdateBilldetail = function handleUpdateBilldetail(HDinput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var userData, HD;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            userData = {};
            _context8.next = 4;
            return _index["default"].ChitietHoaDon.findOne({
              where: {
                id: HDinput.id,
                hoaDonId: HDinput.hoaDonId,
                bookId: HDinput.bookId
              }
            });
          case 4:
            HD = _context8.sent;
            if (HD) {
              _context8.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'not find CTHD';
            _context8.next = 14;
            break;
          case 10:
            _context8.next = 12;
            return _index["default"].ChitietHoaDon.update({
              soLuong: HDinput.soLuong,
              thanhTien: HDinput.thanhTien
            }, {
              where: {
                id: HDinput.id,
                hoaDonId: HDinput.hoaDonId,
                bookId: HDinput.bookId
              }
            });
          case 12:
            userData.errCode = 0;
            userData.errMessager = 'Ok';
          case 14:
            resolve(userData);
            _context8.next = 20;
            break;
          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 17]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var handleUpdateFull = function handleUpdateFull(bill, billdetail, product) {
  return new Promise(function (resolve, reject) {
    try {} catch (e) {
      reject(e);
    }
  });
};
var handleUpdateCreateBillDetail = function handleUpdateCreateBillDetail(datainput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var userData, soluong, tongtien, data, arrdetail, _loop, i, _iterator, _step, item;
      return _regeneratorRuntime().wrap(function _callee9$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            userData = {};
            soluong = 0;
            tongtien = 0;
            data = {};
            _context10.next = 7;
            return _index["default"].ChitietHoaDon.findAll({
              where: {
                hoaDonId: datainput[0].hoaDonId
              }
            });
          case 7:
            arrdetail = _context10.sent;
            if (!(arrdetail.length > datainput.length)) {
              _context10.next = 18;
              break;
            }
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var existingItem, foundInDataInput, databook, _i;
              return _regeneratorRuntime().wrap(function _loop$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    existingItem = arrdetail[i];
                    foundInDataInput = datainput.find(function (item) {
                      return item.hoaDonId === existingItem.hoaDonId && item.bookId === existingItem.bookId;
                    });
                    if (foundInDataInput) {
                      _context9.next = 20;
                      break;
                    }
                    console.log('check found', foundInDataInput);
                    _context9.next = 6;
                    return _index["default"].ChitietHoaDon.destroy({
                      where: {
                        id: existingItem.id
                      }
                    });
                  case 6:
                    _context9.next = 8;
                    return _index["default"].Book.findOne({
                      where: {
                        keyMap: existingItem.bookId
                      }
                    });
                  case 8:
                    databook = _context9.sent;
                    if (!databook) {
                      _context9.next = 12;
                      break;
                    }
                    _context9.next = 12;
                    return _index["default"].Book.update({
                      soLuong: databook.soLuong + existingItem.soLuong
                    }, {
                      where: {
                        keyMap: existingItem.bookId
                      }
                    });
                  case 12:
                    _i = 0;
                  case 13:
                    if (!(_i < datainput.length)) {
                      _context9.next = 20;
                      break;
                    }
                    tongtien += +datainput[_i].thanhTien;
                    _context9.next = 17;
                    return _index["default"].HoaDon.update({
                      tongTien: tongtien
                    }, {
                      where: {
                        id: datainput[_i].hoaDonId
                      }
                    });
                  case 17:
                    _i++;
                    _context9.next = 13;
                    break;
                  case 20:
                  case "end":
                    return _context9.stop();
                }
              }, _loop);
            });
            i = 0;
          case 11:
            if (!(i < arrdetail.length)) {
              _context10.next = 16;
              break;
            }
            return _context10.delegateYield(_loop(), "t0", 13);
          case 13:
            i++;
            _context10.next = 11;
            break;
          case 16:
            _context10.next = 51;
            break;
          case 18:
            _iterator = _createForOfIteratorHelper(datainput);
            _context10.prev = 19;
            _iterator.s();
          case 21:
            if ((_step = _iterator.n()).done) {
              _context10.next = 43;
              break;
            }
            item = _step.value;
            _context10.next = 25;
            return _index["default"].ChitietHoaDon.findOne({
              where: {
                hoaDonId: item.hoaDonId,
                bookId: item.bookId
              }
            });
          case 25:
            data = _context10.sent;
            if (!data) {
              _context10.next = 34;
              break;
            }
            soluong = data.soLuong;
            _context10.next = 30;
            return _index["default"].ChitietHoaDon.update({
              soLuong: item.soLuong,
              thanhTien: item.thanhTien
            }, {
              where: {
                hoaDonId: item.hoaDonId,
                bookId: item.bookId
              }
            });
          case 30:
            _context10.next = 32;
            return _index["default"].Book.update({
              soLuong: item.BookData.soLuong - (item.soLuong - soluong)
            }, {
              where: {
                keyMap: item.bookId
              }
            });
          case 32:
            _context10.next = 38;
            break;
          case 34:
            _context10.next = 36;
            return _index["default"].ChitietHoaDon.create({
              hoaDonId: item.hoaDonId,
              bookId: item.bookId,
              soLuong: item.soLuong,
              thanhTien: item.thanhTien,
              image: item.BookData.image
            });
          case 36:
            _context10.next = 38;
            return _index["default"].Book.update({
              soLuong: item.BookData.soLuong - item.soLuong
            }, {
              where: {
                keyMap: item.bookId
              }
            });
          case 38:
            tongtien += +item.thanhTien;
            _context10.next = 41;
            return _index["default"].HoaDon.update({
              tongTien: tongtien
            }, {
              where: {
                id: item.hoaDonId
              }
            });
          case 41:
            _context10.next = 21;
            break;
          case 43:
            _context10.next = 48;
            break;
          case 45:
            _context10.prev = 45;
            _context10.t1 = _context10["catch"](19);
            _iterator.e(_context10.t1);
          case 48:
            _context10.prev = 48;
            _iterator.f();
            return _context10.finish(48);
          case 51:
            userData.errCode = 0;
            userData.errMessager = 'Ok';
            resolve(userData);
            _context10.next = 59;
            break;
          case 56:
            _context10.prev = 56;
            _context10.t2 = _context10["catch"](0);
            reject(_context10.t2);
          case 59:
          case "end":
            return _context10.stop();
        }
      }, _callee9, null, [[0, 56], [19, 45, 48, 51]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var handledeletebillandBillDetail = function handledeletebillandBillDetail(datainput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var billdata, data, billdetail, i, databook;
      return _regeneratorRuntime().wrap(function _callee10$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            billdata = {};
            if (datainput) {
              _context11.next = 7;
              break;
            }
            billdata.errCode = 1;
            billdata.errMessager = 'Missing input parament';
            _context11.next = 40;
            break;
          case 7:
            _context11.next = 9;
            return _index["default"].HoaDon.findOne({
              where: {
                id: datainput.maHD
              }
            });
          case 9:
            data = _context11.sent;
            if (data) {
              _context11.next = 15;
              break;
            }
            billdata.errCode = 2;
            billdata.errMessager = 'not find bill';
            _context11.next = 40;
            break;
          case 15:
            _context11.next = 17;
            return _index["default"].HoaDon.destroy({
              where: {
                id: datainput.maHD
              }
            });
          case 17:
            _context11.next = 19;
            return _index["default"].ChitietHoaDon.findAll({
              where: {
                hoaDonId: datainput.maHD
              }
            });
          case 19:
            billdetail = _context11.sent;
            if (!billdetail) {
              _context11.next = 38;
              break;
            }
            i = 0;
          case 22:
            if (!(i < billdetail.length)) {
              _context11.next = 34;
              break;
            }
            _context11.next = 25;
            return _index["default"].ChitietHoaDon.destroy({
              where: {
                hoaDonId: datainput.maHD
              }
            });
          case 25:
            _context11.next = 27;
            return _index["default"].Book.findOne({
              where: {
                keyMap: billdetail[i].bookId
              }
            });
          case 27:
            databook = _context11.sent;
            if (!databook) {
              _context11.next = 31;
              break;
            }
            _context11.next = 31;
            return _index["default"].Book.update({
              soLuong: databook.soLuong + billdetail[i].soLuong
            }, {
              where: {
                keyMap: billdetail[i].bookId
              }
            });
          case 31:
            i++;
            _context11.next = 22;
            break;
          case 34:
            billdata.errCode = 0;
            billdata.errMessager = 'delete bill is success';
            _context11.next = 40;
            break;
          case 38:
            billdata.errCode = 3;
            billdata.errMessager = 'not find detailbill';
          case 40:
            resolve(billdata);
            _context11.next = 46;
            break;
          case 43:
            _context11.prev = 43;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 46:
          case "end":
            return _context11.stop();
        }
      }, _callee10, null, [[0, 43]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var handlegetAllbillbyUserId = function handlegetAllbillbyUserId(userId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var billData, data;
      return _regeneratorRuntime().wrap(function _callee11$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            billData = {};
            data = '';
            if (!(userId === 'ALL')) {
              _context12.next = 10;
              break;
            }
            _context12.next = 6;
            return _index["default"].HoaDon.findAll({
              include: [{
                model: _index["default"].User,
                as: 'UserData'
              }, {
                model: _index["default"].allCode,
                as: 'statusData'
              }]
            });
          case 6:
            data = _context12.sent;
            if (data) {
              billData.errCode = 0;
              billData.errMessage = 'Ok';
              billData.data = data;
            } else {
              billData.errCode = 2;
              billData.errCode = 'data is not fond';
              billData.data = {};
            }
            _context12.next = 14;
            break;
          case 10:
            _context12.next = 12;
            return _index["default"].HoaDon.findAll({
              where: {
                userId: userId
              },
              include: [{
                model: _index["default"].User,
                as: 'UserData'
              }, {
                model: _index["default"].allCode,
                as: 'statusData'
              }]
            });
          case 12:
            data = _context12.sent;
            if (data) {
              billData.errCode = 0;
              billData.errMessage = 'Ok';
              billData.data = data;
            } else {
              billData.errCode = 2;
              billData.errMessage = 'data is not fond';
              billData.data = {};
            }
          case 14:
            resolve(billData);
            _context12.next = 21;
            break;
          case 17:
            _context12.prev = 17;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);
            reject(_context12.t0);
          case 21:
          case "end":
            return _context12.stop();
        }
      }, _callee11, null, [[0, 17]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var handleComfimbillUser = function handleComfimbillUser(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var bookData, findUser, createbill, billDetailDataArray, createUser, _createbill, _billDetailDataArray;
      return _regeneratorRuntime().wrap(function _callee13$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            bookData = {};
            _context14.next = 4;
            return _index["default"].User.findOne({
              where: {
                email: data.email
              }
            });
          case 4:
            findUser = _context14.sent;
            if (!findUser) {
              _context14.next = 19;
              break;
            }
            _context14.next = 8;
            return _index["default"].User.update({
              firstName: data.firstName,
              address: data.address,
              phoneNumber: data.phonenumber
            }, {
              where: {
                email: data.email
              }
            });
          case 8:
            _context14.next = 10;
            return _index["default"].HoaDon.create({
              userId: findUser.id,
              tongTien: data.tongTien,
              status: data.status
            });
          case 10:
            createbill = _context14.sent;
            data.billDetailDataArray.map( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(item) {
                var findBook;
                return _regeneratorRuntime().wrap(function _callee12$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return _index["default"].Book.findOne({
                        where: {
                          keyMap: item.bookId
                        }
                      });
                    case 2:
                      findBook = _context13.sent;
                      if (!findBook) {
                        _context13.next = 6;
                        break;
                      }
                      _context13.next = 6;
                      return _index["default"].Book.update({
                        soLuong: findBook.soLuong - item.soLuong
                      }, {
                        where: {
                          keyMap: item.bookId
                        }
                      });
                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee12);
              }));
              return function (_x25) {
                return _ref13.apply(this, arguments);
              };
            }());
            billDetailDataArray = data.billDetailDataArray.map(function (item) {
              return {
                hoaDonId: createbill.id,
                bookId: item.bookId,
                soLuong: item.soLuong,
                thanhTien: item.thanhTien,
                image: item.image
              };
            });
            _context14.next = 15;
            return _index["default"].ChitietHoaDon.bulkCreate(billDetailDataArray);
          case 15:
            bookData.errCode = 0;
            bookData.errMessage = 'Ok';
            _context14.next = 30;
            break;
          case 19:
            _context14.next = 21;
            return _index["default"].User.create({
              firstName: data.firstName,
              email: data.email,
              address: data.address,
              phoneNumber: data.phonenumber,
              roleId: data.roleId
            });
          case 21:
            createUser = _context14.sent;
            _context14.next = 24;
            return _index["default"].HoaDon.create({
              userId: createUser.id,
              tongTien: data.tongTien,
              status: data.status
            });
          case 24:
            _createbill = _context14.sent;
            _billDetailDataArray = data.billDetailDataArray.map(function (item) {
              return {
                hoaDonId: _createbill.id,
                bookId: item.bookId,
                soLuong: item.soLuong,
                thanhTien: item.thanhTien,
                image: item.image
              };
            });
            _context14.next = 28;
            return _index["default"].ChitietHoaDon.bulkCreate(_billDetailDataArray);
          case 28:
            bookData.errCode = 0;
            bookData.errMessage = 'Ok';
          case 30:
            resolve(bookData);
            _context14.next = 36;
            break;
          case 33:
            _context14.prev = 33;
            _context14.t0 = _context14["catch"](0);
            reject(_context14.t0);
          case 36:
          case "end":
            return _context14.stop();
        }
      }, _callee13, null, [[0, 33]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var handlegetAllBillMore = function handlegetAllBillMore() {
  return new Promise( /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var billData, data;
      return _regeneratorRuntime().wrap(function _callee14$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            billData = {};
            _context15.next = 4;
            return _index["default"].ChitietHoaDon.findAll({
              attributes: ['bookId', [_index.sequelize.fn('SUM', _index.sequelize.col('soLuong')), 'soluong']],
              group: ['bookId']
            });
          case 4:
            data = _context15.sent;
            if (data) {
              billData.errCode = 0;
              billData.errMessage = 'Ok';
              billData.data = data;
            } else {
              billData.errCode = 2;
              billData.errMessage = 'data is not fond';
              billData.data = {};
            }
            resolve(billData);
            _context15.next = 12;
            break;
          case 9:
            _context15.prev = 9;
            _context15.t0 = _context15["catch"](0);
            reject(_context15.t0);
          case 12:
          case "end":
            return _context15.stop();
        }
      }, _callee14, null, [[0, 9]]);
    }));
    return function (_x26, _x27) {
      return _ref14.apply(this, arguments);
    };
  }());
};
module.exports = {
  handlegetAllBill: handlegetAllBill,
  handlegetAllBilldetail: handlegetAllBilldetail,
  handleCreateNewBill: handleCreateNewBill,
  handleCreateNewBilldetail: handleCreateNewBilldetail,
  handleDeleteBill: handleDeleteBill,
  handleDeleteBilldetail: handleDeleteBilldetail,
  handleUpdateBill: handleUpdateBill,
  handleUpdateBilldetail: handleUpdateBilldetail,
  handleUpdateFull: handleUpdateFull,
  handleUpdateCreateBillDetail: handleUpdateCreateBillDetail,
  handledeletebillandBillDetail: handledeletebillandBillDetail,
  handlegetAllbillbyUserId: handlegetAllbillbyUserId,
  handleComfimbillUser: handleComfimbillUser,
  handlegetAllBillMore: handlegetAllBillMore
};