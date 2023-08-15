"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
var _uploadS = require("./uploadS3");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('sequelize'),
  QueryTypes = _require.QueryTypes;
var handleCreatNewNXB = function handleCreatNewNXB(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var bookData, res, datacreate;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            bookData = {};
            _context.next = 4;
            return _index["default"].nhaxuatban.findOne({
              where: {
                keyMap: data.keyMap
              }
            });
          case 4:
            res = _context.sent;
            if (res) {
              bookData.errCode = 2;
              bookData.errMessage = 'NXB existed';
            } else {
              datacreate = _index["default"].nhaxuatban.create({
                keyMap: data.keyMap,
                tenNXB: data.tenNXB
              });
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
            }
            resolve(bookData);
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var handleCreateNewNCC = function handleCreateNewNCC(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var bookData, res, datacreate;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            bookData = {};
            _context2.next = 4;
            return _index["default"].nhacungcap.findOne({
              where: {
                keyMap: data.keyMap
              }
            });
          case 4:
            res = _context2.sent;
            if (res) {
              bookData.errCode = 2;
              bookData.errMessage = 'NCC existed';
            } else {
              datacreate = _index["default"].nhacungcap.create({
                keyMap: data.keyMap,
                tenNCC: data.tenNCC
              });
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
            }
            resolve(bookData);
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var handleCreateNewTL = function handleCreateNewTL(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var bookData, res, datacreate;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            bookData = {};
            _context3.next = 4;
            return _index["default"].theloai.findOne({
              where: {
                keyMap: data.keyMap
              }
            });
          case 4:
            res = _context3.sent;
            if (res) {
              bookData.errCode = 2;
              bookData.errMessage = 'TL existed';
            } else {
              datacreate = _index["default"].theloai.create({
                keyMap: data.keyMap,
                theLoai: data.theLoai
              });
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
            }
            resolve(bookData);
            _context3.next = 12;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var handlegetAllNCC = function handlegetAllNCC(keyMap) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            bookData = {};
            data = '';
            if (!(keyMap === 'ALL')) {
              _context4.next = 10;
              break;
            }
            _context4.next = 6;
            return _index["default"].nhacungcap.findAll();
          case 6:
            data = _context4.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errCode = 'data is not fond';
              bookData.data = {};
            }
            _context4.next = 14;
            break;
          case 10:
            _context4.next = 12;
            return _index["default"].nhacungcap.findOne({
              where: {
                keyMap: keyMap
              }
            });
          case 12:
            data = _context4.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context4.next = 20;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 17]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var handlegetAllNXB = function handlegetAllNXB(keyMap) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            bookData = {};
            data = '';
            if (!(keyMap === 'ALL')) {
              _context5.next = 10;
              break;
            }
            _context5.next = 6;
            return _index["default"].nhaxuatban.findAll();
          case 6:
            data = _context5.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
            _context5.next = 14;
            break;
          case 10:
            _context5.next = 12;
            return _index["default"].nhaxuatban.findOne({
              where: {
                keyMap: keyMap
              }
            });
          case 12:
            data = _context5.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context5.next = 20;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 17]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var handlegetAllTL = function handlegetAllTL(keyMap) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            bookData = {};
            data = '';
            if (!(keyMap === 'ALL')) {
              _context6.next = 10;
              break;
            }
            _context6.next = 6;
            return _index["default"].theloai.findAll();
          case 6:
            data = _context6.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
            _context6.next = 14;
            break;
          case 10:
            _context6.next = 12;
            return _index["default"].theloai.findOne({
              where: {
                keyMap: keyMap
              }
            });
          case 12:
            data = _context6.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context6.next = 20;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 17]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var handleDeleteNCC = function handleDeleteNCC(keyMap) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var NCCData, NCC;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            NCCData = {};
            _context7.prev = 1;
            _context7.next = 4;
            return _index["default"].nhacungcap.findOne({
              where: {
                keyMap: keyMap
              }
            });
          case 4:
            NCC = _context7.sent;
            if (NCC) {
              _context7.next = 10;
              break;
            }
            NCCData.errCode = 2;
            NCCData.errMessage = 'NCC is undefined';
            _context7.next = 14;
            break;
          case 10:
            _context7.next = 12;
            return _index["default"].nhacungcap.destroy({
              where: {
                keyMap: keyMap
              }
            });
          case 12:
            NCCData.errCode = 0;
            NCCData.errMessage = 'OK';
          case 14:
            resolve(NCCData);
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](1);
            reject(_context7.t0);
          case 20:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 17]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var handleDeleteNXB = function handleDeleteNXB(keyMap) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var NCCData, NCC;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            NCCData = {};
            _context8.prev = 1;
            _context8.next = 4;
            return _index["default"].nhaxuatban.findOne({
              where: {
                keyMap: keyMap
              }
            });
          case 4:
            NCC = _context8.sent;
            if (NCC) {
              _context8.next = 10;
              break;
            }
            NCCData.errCode = 2;
            NCCData.errMessage = 'NXB is undefined';
            _context8.next = 14;
            break;
          case 10:
            _context8.next = 12;
            return _index["default"].nhaxuatban.destroy({
              where: {
                keyMap: keyMap
              }
            });
          case 12:
            NCCData.errCode = 0;
            NCCData.errMessage = 'OK';
          case 14:
            resolve(NCCData);
            _context8.next = 20;
            break;
          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](1);
            reject(_context8.t0);
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 17]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var handleDeleteTL = function handleDeleteTL(keyMap) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var NCCData, NCC;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            NCCData = {};
            _context9.prev = 1;
            _context9.next = 4;
            return _index["default"].theloai.findOne({
              where: {
                keyMap: keyMap
              }
            });
          case 4:
            NCC = _context9.sent;
            if (NCC) {
              _context9.next = 10;
              break;
            }
            NCCData.errCode = 2;
            NCCData.errMessage = 'TL is undefined';
            _context9.next = 14;
            break;
          case 10:
            _context9.next = 12;
            return _index["default"].theloai.destroy({
              where: {
                keyMap: keyMap
              }
            });
          case 12:
            NCCData.errCode = 0;
            NCCData.errMessage = 'OK';
          case 14:
            resolve(NCCData);
            _context9.next = 20;
            break;
          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9["catch"](1);
            reject(_context9.t0);
          case 20:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[1, 17]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var handleUpdateNCC = function handleUpdateNCC(NCC) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var userData, ncc;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            userData = {};
            _context10.next = 4;
            return _index["default"].nhacungcap.findOne({
              where: {
                keyMap: NCC.keyMap
              }
            });
          case 4:
            ncc = _context10.sent;
            if (ncc) {
              _context10.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'not find NCC';
            _context10.next = 14;
            break;
          case 10:
            _context10.next = 12;
            return _index["default"].nhacungcap.update({
              keyMap: NCC.keyMap,
              tenNCC: NCC.tenNCC
            }, {
              where: {
                keyMap: NCC.keyMap
              }
            });
          case 12:
            userData.errCode = 0;
            userData.errMessager = 'Ok';
          case 14:
            resolve(userData);
            _context10.next = 20;
            break;
          case 17:
            _context10.prev = 17;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 20:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 17]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var handleUpdateNXB = function handleUpdateNXB(NXB) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var userData, nxb;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            userData = {};
            _context11.next = 4;
            return _index["default"].nhaxuatban.findOne({
              where: {
                keyMap: NXB.keyMap
              }
            });
          case 4:
            nxb = _context11.sent;
            if (nxb) {
              _context11.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'not find NXB';
            _context11.next = 14;
            break;
          case 10:
            _context11.next = 12;
            return _index["default"].nhaxuatban.update({
              keyMap: NXB.keyMap,
              tenNXB: NXB.tenNXB
            }, {
              where: {
                keyMap: NXB.keyMap
              }
            });
          case 12:
            userData.errCode = 0;
            userData.errMessager = 'Ok';
          case 14:
            resolve(userData);
            _context11.next = 20;
            break;
          case 17:
            _context11.prev = 17;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 20:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 17]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var handleUpdateTL = function handleUpdateTL(TL) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var userData, tl;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            userData = {};
            _context12.next = 4;
            return _index["default"].theloai.findOne({
              where: {
                keyMap: TL.keyMap
              }
            });
          case 4:
            tl = _context12.sent;
            if (tl) {
              _context12.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'not find TL';
            _context12.next = 14;
            break;
          case 10:
            _context12.next = 12;
            return _index["default"].theloai.update({
              keyMap: TL.keyMap,
              theLoai: TL.theLoai
            }, {
              where: {
                keyMap: TL.keyMap
              }
            });
          case 12:
            userData.errCode = 0;
            userData.errMessager = 'Ok';
          case 14:
            resolve(userData);
            _context12.next = 20;
            break;
          case 17:
            _context12.prev = 17;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 20:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 17]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var handleCreateNewBook = function handleCreateNewBook(bookinput, file) {
  return new Promise( /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var bookdata, data, link;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            bookdata = {};
            _context13.next = 4;
            return _index["default"].Book.findOne({
              where: {
                keyMap: bookinput.keyMap
              }
            });
          case 4:
            data = _context13.sent;
            if (!data) {
              _context13.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessage = 'Book existed!';
            _context13.next = 17;
            break;
          case 10:
            _context13.next = 12;
            return (0, _uploadS.uploadfile)(file);
          case 12:
            link = _context13.sent;
            _context13.next = 15;
            return _index["default"].Book.create({
              tenSach: bookinput.tenSach,
              nhaCungCap: bookinput.NCC,
              nhaXuatBan: bookinput.NXB,
              tacGia: bookinput.tacGia,
              gia: bookinput.gia,
              theLoai: bookinput.TL,
              keyMap: bookinput.keyMap,
              soLuong: bookinput.soLuong,
              image: link,
              sanPham: bookinput.sanPham
            });
          case 15:
            bookdata.errCode = 0;
            bookdata.errMessage = 'create a new book is success!';
          case 17:
            resolve(bookdata);
            _context13.next = 23;
            break;
          case 20:
            _context13.prev = 20;
            _context13.t0 = _context13["catch"](0);
            reject(_context13.t0);
          case 23:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 20]]);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};
var handlegetAllBook = function handlegetAllBook(type) {
  return new Promise( /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            bookdata = {};
            data = {};
            if (!(type === 'ALL')) {
              _context14.next = 10;
              break;
            }
            _context14.next = 6;
            return _index["default"].Book.findAll({
              include: [{
                model: _index["default"].nhaxuatban,
                as: 'nhaxuatbanData'
              }, {
                model: _index["default"].nhacungcap,
                as: 'nhacungcapData'
              }, {
                model: _index["default"].theloai,
                as: 'theloaiData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }, {
                model: _index["default"].BookInfor,
                as: 'BookInfoData'
              }, {
                model: _index["default"].allCode,
                as: 'sanPhamData'
              }]
            });
          case 6:
            data = _context14.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 2;
              bookdata.errMessage = 'error find book';
              bookdata.data = {};
            }
            _context14.next = 14;
            break;
          case 10:
            _context14.next = 12;
            return _index["default"].Book.findOne({
              where: {
                keyMap: type
              },
              include: [{
                model: _index["default"].nhaxuatban,
                as: 'nhaxuatbanData'
              }, {
                model: _index["default"].nhacungcap,
                as: 'nhacungcapData'
              }, {
                model: _index["default"].theloai,
                as: 'theloaiData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }, {
                model: _index["default"].BookInfor,
                as: 'BookInfoData'
              }, {
                model: _index["default"].allCode,
                as: 'sanPhamData'
              }]
            });
          case 12:
            data = _context14.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find one book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find one book';
              bookdata.data = {};
            }
          case 14:
            resolve(bookdata);
            _context14.next = 20;
            break;
          case 17:
            _context14.prev = 17;
            _context14.t0 = _context14["catch"](0);
            reject(_context14.t0);
          case 20:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 17]]);
    }));
    return function (_x27, _x28) {
      return _ref14.apply(this, arguments);
    };
  }());
};
var handleDeleteBook = function handleDeleteBook(keyMap) {
  return new Promise( /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            bookdata = {};
            _context15.next = 4;
            return _index["default"].Book.findOne({
              where: {
                keyMap: keyMap
              }
            });
          case 4:
            data = _context15.sent;
            if (data) {
              _context15.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessage = 'not find book';
            _context15.next = 14;
            break;
          case 10:
            _context15.next = 12;
            return _index["default"].Book.destroy({
              where: {
                keyMap: keyMap
              }
            });
          case 12:
            bookdata.errCode = 0;
            bookdata.errMessage = 'delete book success!';
          case 14:
            resolve(bookdata);
            _context15.next = 20;
            break;
          case 17:
            _context15.prev = 17;
            _context15.t0 = _context15["catch"](0);
            reject(_context15.t0);
          case 20:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 17]]);
    }));
    return function (_x29, _x30) {
      return _ref15.apply(this, arguments);
    };
  }());
};
var handleUpdateBook = function handleUpdateBook(data, file) {
  return new Promise( /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
      var bookdata, book, link;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            bookdata = {};
            _context16.next = 4;
            return _index["default"].Book.findOne({
              where: {
                keyMap: data.keyMap
              }
            });
          case 4:
            book = _context16.sent;
            if (book) {
              _context16.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessager = 'not find book';
            _context16.next = 22;
            break;
          case 10:
            link = '';
            if (!file) {
              _context16.next = 17;
              break;
            }
            _context16.next = 14;
            return (0, _uploadS.uploadfile)(file);
          case 14:
            link = _context16.sent;
            _context16.next = 18;
            break;
          case 17:
            link = data.image;
          case 18:
            _context16.next = 20;
            return _index["default"].Book.update({
              tenSach: data.tenSach,
              nhaCungCap: data.NCC,
              nhaXuatBan: data.NXB,
              tacGia: data.tacGia,
              gia: data.gia,
              theLoai: data.TL,
              keyMap: data.keyMap,
              soLuong: data.soLuong,
              image: link,
              sanPham: data.sanPham
            }, {
              where: {
                keyMap: data.keyMap
              }
            });
          case 20:
            bookdata.errCode = 0;
            bookdata.errMessager = 'Ok';
          case 22:
            resolve(bookdata);
            _context16.next = 28;
            break;
          case 25:
            _context16.prev = 25;
            _context16.t0 = _context16["catch"](0);
            reject(_context16.t0);
          case 28:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 25]]);
    }));
    return function (_x31, _x32) {
      return _ref16.apply(this, arguments);
    };
  }());
};
var handleCreateNewdiscount = function handleCreateNewdiscount(datainput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            bookdata = {};
            _context17.next = 4;
            return _index["default"].discount.findOne({
              where: {
                maSach: datainput.maSach
              }
            });
          case 4:
            data = _context17.sent;
            if (!data) {
              _context17.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessage = 'discount existed!';
            _context17.next = 14;
            break;
          case 10:
            _context17.next = 12;
            return _index["default"].discount.create({
              tenSach: datainput.tenSach,
              maSach: datainput.maSach,
              discount: datainput.discount,
              ngayBD: datainput.ngayBD,
              ngayKT: datainput.ngayKT
            });
          case 12:
            bookdata.errCode = 0;
            bookdata.errMessage = 'create a new discount is success!';
          case 14:
            resolve(bookdata);
            _context17.next = 20;
            break;
          case 17:
            _context17.prev = 17;
            _context17.t0 = _context17["catch"](0);
            reject(_context17.t0);
          case 20:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 17]]);
    }));
    return function (_x33, _x34) {
      return _ref17.apply(this, arguments);
    };
  }());
};
var handlegetAlldiscount = function handlegetAlldiscount(maSach) {
  return new Promise( /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            bookData = {};
            data = '';
            if (!(maSach === 'ALL')) {
              _context18.next = 10;
              break;
            }
            _context18.next = 6;
            return _index["default"].discount.findAll();
          case 6:
            data = _context18.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
            _context18.next = 14;
            break;
          case 10:
            _context18.next = 12;
            return _index["default"].discount.findOne({
              where: {
                maSach: maSach
              }
            });
          case 12:
            data = _context18.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context18.next = 20;
            break;
          case 17:
            _context18.prev = 17;
            _context18.t0 = _context18["catch"](0);
            reject(_context18.t0);
          case 20:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 17]]);
    }));
    return function (_x35, _x36) {
      return _ref18.apply(this, arguments);
    };
  }());
};
var handleUpdatediscout = function handleUpdatediscout(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve, reject) {
      var bookdata, book;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            bookdata = {};
            _context19.next = 4;
            return _index["default"].discount.findOne({
              where: {
                maSach: data.maSach
              }
            });
          case 4:
            book = _context19.sent;
            if (book) {
              _context19.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessager = 'not find discount';
            _context19.next = 14;
            break;
          case 10:
            _context19.next = 12;
            return _index["default"].discount.update({
              maSach: data.maSach,
              tenSach: data.tenSach,
              discount: data.discount,
              ngayBD: data.ngayBD,
              ngayKT: data.ngayKT
            }, {
              where: {
                maSach: data.maSach
              }
            });
          case 12:
            bookdata.errCode = 0;
            bookdata.errMessager = 'Ok';
          case 14:
            resolve(bookdata);
            _context19.next = 20;
            break;
          case 17:
            _context19.prev = 17;
            _context19.t0 = _context19["catch"](0);
            reject(_context19.t0);
          case 20:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[0, 17]]);
    }));
    return function (_x37, _x38) {
      return _ref19.apply(this, arguments);
    };
  }());
};
var handleDeletediscount = function handleDeletediscount(maSach) {
  return new Promise( /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            bookdata = {};
            _context20.next = 4;
            return _index["default"].discount.findOne({
              where: {
                maSach: maSach
              }
            });
          case 4:
            data = _context20.sent;
            if (data) {
              _context20.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessage = 'not find discount';
            _context20.next = 14;
            break;
          case 10:
            _context20.next = 12;
            return _index["default"].discount.destroy({
              where: {
                maSach: maSach
              }
            });
          case 12:
            bookdata.errCode = 0;
            bookdata.errMessage = 'delete discount success!';
          case 14:
            resolve(bookdata);
            _context20.next = 20;
            break;
          case 17:
            _context20.prev = 17;
            _context20.t0 = _context20["catch"](0);
            reject(_context20.t0);
          case 20:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 17]]);
    }));
    return function (_x39, _x40) {
      return _ref20.apply(this, arguments);
    };
  }());
};
var handleCreateNewBookInfo = function handleCreateNewBookInfo(datainput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            bookdata = {};
            _context21.next = 4;
            return _index["default"].BookInfor.findOne({
              where: {
                bookId: datainput.bookId
              }
            });
          case 4:
            data = _context21.sent;
            if (!data) {
              _context21.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessage = 'bookinfo existed!';
            _context21.next = 14;
            break;
          case 10:
            _context21.next = 12;
            return _index["default"].BookInfor.create({
              bookId: datainput.bookId,
              descriptionHTML: datainput.descriptionHTML,
              descriptionMarkDown: datainput.descriptionMarkDown
            });
          case 12:
            bookdata.errCode = 0;
            bookdata.errMessage = 'create a new bookinfo is success!';
          case 14:
            resolve(bookdata);
            _context21.next = 20;
            break;
          case 17:
            _context21.prev = 17;
            _context21.t0 = _context21["catch"](0);
            reject(_context21.t0);
          case 20:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[0, 17]]);
    }));
    return function (_x41, _x42) {
      return _ref21.apply(this, arguments);
    };
  }());
};
var handlegetAllBookInfo = function handlegetAllBookInfo(maSach) {
  return new Promise( /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            bookData = {};
            data = '';
            if (!(maSach === 'ALL')) {
              _context22.next = 10;
              break;
            }
            _context22.next = 6;
            return _index["default"].BookInfor.findAll();
          case 6:
            data = _context22.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
            _context22.next = 14;
            break;
          case 10:
            _context22.next = 12;
            return _index["default"].BookInfor.findOne({
              where: {
                bookId: maSach
              }
            });
          case 12:
            data = _context22.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context22.next = 20;
            break;
          case 17:
            _context22.prev = 17;
            _context22.t0 = _context22["catch"](0);
            reject(_context22.t0);
          case 20:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[0, 17]]);
    }));
    return function (_x43, _x44) {
      return _ref22.apply(this, arguments);
    };
  }());
};
var handleUpdateBookInfo = function handleUpdateBookInfo(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(resolve, reject) {
      var bookdata, book;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            bookdata = {};
            _context23.next = 4;
            return _index["default"].BookInfor.findOne({
              where: {
                bookId: data.bookId
              }
            });
          case 4:
            book = _context23.sent;
            if (book) {
              _context23.next = 10;
              break;
            }
            bookdata.errCode = 2;
            bookdata.errMessager = 'not find book';
            _context23.next = 14;
            break;
          case 10:
            _context23.next = 12;
            return _index["default"].BookInfor.update({
              bookId: data.bookId,
              descriptionHTML: data.descriptionHTML,
              descriptionMarkDown: data.descriptionMarkDown
            }, {
              where: {
                bookId: data.bookId
              }
            });
          case 12:
            bookdata.errCode = 0;
            bookdata.errMessager = 'Ok';
          case 14:
            resolve(bookdata);
            _context23.next = 20;
            break;
          case 17:
            _context23.prev = 17;
            _context23.t0 = _context23["catch"](0);
            reject(_context23.t0);
          case 20:
          case "end":
            return _context23.stop();
        }
      }, _callee23, null, [[0, 17]]);
    }));
    return function (_x45, _x46) {
      return _ref23.apply(this, arguments);
    };
  }());
};
var handlegetAllBookbyCart = function handlegetAllBookbyCart(type) {
  return new Promise( /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            bookdata = {};
            data = {};
            if (!(type === 'ALL')) {
              _context24.next = 10;
              break;
            }
            _context24.next = 6;
            return _index["default"].Book.findAll({
              include: [{
                model: _index["default"].theloai,
                as: 'theloaiData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }, {
                model: _index["default"].allCode,
                as: 'sanPhamData'
              }],
              attributes: ['image', 'gia', 'tenSach', 'keyMap', 'soLuong']
            });
          case 6:
            data = _context24.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 2;
              bookdata.errMessage = 'error find book';
              bookdata.data = {};
            }
            _context24.next = 14;
            break;
          case 10:
            _context24.next = 12;
            return _index["default"].Book.findOne({
              where: {
                keyMap: type
              },
              include: [{
                model: _index["default"].theloai,
                as: 'theloaiData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }, {
                model: _index["default"].allCode,
                as: 'sanPhamData'
              }],
              attributes: ['image', 'gia', 'tenSach', 'keyMap', 'soLuong']
            });
          case 12:
            data = _context24.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find one book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find one book';
              bookdata.data = {};
            }
          case 14:
            resolve(bookdata);
            _context24.next = 20;
            break;
          case 17:
            _context24.prev = 17;
            _context24.t0 = _context24["catch"](0);
            reject(_context24.t0);
          case 20:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[0, 17]]);
    }));
    return function (_x47, _x48) {
      return _ref24.apply(this, arguments);
    };
  }());
};
var handlegetAllBookbyTL = function handlegetAllBookbyTL(type) {
  return new Promise( /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            bookdata = {};
            data = {};
            if (!(type === 'ALL')) {
              _context25.next = 10;
              break;
            }
            _context25.next = 6;
            return _index["default"].Book.findAll({
              include: [{
                model: _index["default"].discount,
                as: 'discountData'
              }],
              attributes: ['image', 'gia', 'tenSach', 'keyMap', 'soLuong']
            });
          case 6:
            data = _context25.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 2;
              bookdata.errMessage = 'error find book';
              bookdata.data = {};
            }
            _context25.next = 14;
            break;
          case 10:
            _context25.next = 12;
            return _index["default"].Book.findAll({
              where: {
                theLoai: type
              },
              include: [{
                model: _index["default"].discount,
                as: 'discountData'
              }],
              attributes: ['image', 'gia', 'tenSach', 'keyMap', 'soLuong']
            });
          case 12:
            data = _context25.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find one book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find one book';
              bookdata.data = {};
            }
          case 14:
            resolve(bookdata);
            _context25.next = 20;
            break;
          case 17:
            _context25.prev = 17;
            _context25.t0 = _context25["catch"](0);
            reject(_context25.t0);
          case 20:
          case "end":
            return _context25.stop();
        }
      }, _callee25, null, [[0, 17]]);
    }));
    return function (_x49, _x50) {
      return _ref25.apply(this, arguments);
    };
  }());
};
var handleCountALL = function handleCountALL() {
  return new Promise( /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            bookdata = {};
            _context26.next = 4;
            return _index["default"].Book.count();
          case 4:
            data = _context26.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find sanPham book';
              bookdata.data = {};
            }
            resolve(bookdata);
            _context26.next = 12;
            break;
          case 9:
            _context26.prev = 9;
            _context26.t0 = _context26["catch"](0);
            reject(_context26.t0);
          case 12:
          case "end":
            return _context26.stop();
        }
      }, _callee26, null, [[0, 9]]);
    }));
    return function (_x51, _x52) {
      return _ref26.apply(this, arguments);
    };
  }());
};
var handlegetAllBookbySP = function handlegetAllBookbySP(sanPham) {
  return new Promise( /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            bookdata = {};
            data = {};
            if (!(sanPham === 'ALL')) {
              _context27.next = 10;
              break;
            }
            _context27.next = 6;
            return _index["default"].Book.findAll({
              include: [{
                model: _index["default"].nhaxuatban,
                as: 'nhaxuatbanData'
              }, {
                model: _index["default"].nhacungcap,
                as: 'nhacungcapData'
              }, {
                model: _index["default"].theloai,
                as: 'theloaiData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }, {
                model: _index["default"].BookInfor,
                as: 'BookInfoData'
              }, {
                model: _index["default"].allCode,
                as: 'sanPhamData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }]
            });
          case 6:
            data = _context27.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 2;
              bookdata.errMessage = 'error find book';
              bookdata.data = {};
            }
            _context27.next = 14;
            break;
          case 10:
            _context27.next = 12;
            return _index["default"].Book.findAll({
              where: {
                sanPham: sanPham
              },
              include: [{
                model: _index["default"].nhaxuatban,
                as: 'nhaxuatbanData'
              }, {
                model: _index["default"].nhacungcap,
                as: 'nhacungcapData'
              }, {
                model: _index["default"].theloai,
                as: 'theloaiData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }, {
                model: _index["default"].BookInfor,
                as: 'BookInfoData'
              }, {
                model: _index["default"].allCode,
                as: 'sanPhamData'
              }, {
                model: _index["default"].discount,
                as: 'discountData'
              }]
            });
          case 12:
            data = _context27.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find one book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find one book';
              bookdata.data = {};
            }
          case 14:
            resolve(bookdata);
            _context27.next = 20;
            break;
          case 17:
            _context27.prev = 17;
            _context27.t0 = _context27["catch"](0);
            reject(_context27.t0);
          case 20:
          case "end":
            return _context27.stop();
        }
      }, _callee27, null, [[0, 17]]);
    }));
    return function (_x53, _x54) {
      return _ref27.apply(this, arguments);
    };
  }());
};
var handlegetAllNXBbySP = function handlegetAllNXBbySP(sanPham) {
  return new Promise( /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            bookData = {};
            data = '';
            if (!(sanPham === 'ALL')) {
              _context28.next = 10;
              break;
            }
            _context28.next = 6;
            return _index["default"].nhaxuatban.findAll({
              include: 'BookData'
            });
          case 6:
            data = _context28.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
            _context28.next = 14;
            break;
          case 10:
            _context28.next = 12;
            return _index["default"].nhaxuatban.findAll({
              include: [{
                model: _index["default"].Book,
                as: 'BookData',
                where: {
                  sanPham: sanPham
                }
              }]
            });
          case 12:
            data = _context28.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context28.next = 20;
            break;
          case 17:
            _context28.prev = 17;
            _context28.t0 = _context28["catch"](0);
            reject(_context28.t0);
          case 20:
          case "end":
            return _context28.stop();
        }
      }, _callee28, null, [[0, 17]]);
    }));
    return function (_x55, _x56) {
      return _ref28.apply(this, arguments);
    };
  }());
};
var handlegetAllTLbySP = function handlegetAllTLbySP(sanPham) {
  return new Promise( /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee29$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            bookData = {};
            data = '';
            if (!(sanPham === 'ALL')) {
              _context29.next = 10;
              break;
            }
            _context29.next = 6;
            return _index["default"].theloai.findAll();
          case 6:
            data = _context29.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
            _context29.next = 14;
            break;
          case 10:
            _context29.next = 12;
            return _index["default"].theloai.findAll({
              include: [{
                model: _index["default"].Book,
                as: 'BookData',
                where: {
                  sanPham: sanPham
                }
              }]
            });
          case 12:
            data = _context29.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context29.next = 20;
            break;
          case 17:
            _context29.prev = 17;
            _context29.t0 = _context29["catch"](0);
            reject(_context29.t0);
          case 20:
          case "end":
            return _context29.stop();
        }
      }, _callee29, null, [[0, 17]]);
    }));
    return function (_x57, _x58) {
      return _ref29.apply(this, arguments);
    };
  }());
};
var handlegetAllNCCbySP = function handlegetAllNCCbySP(sanPham) {
  return new Promise( /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(resolve, reject) {
      var bookData, data;
      return _regeneratorRuntime().wrap(function _callee30$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            bookData = {};
            data = '';
            if (!(sanPham === 'ALL')) {
              _context30.next = 10;
              break;
            }
            _context30.next = 6;
            return _index["default"].nhacungcap.findAll();
          case 6:
            data = _context30.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
            _context30.next = 14;
            break;
          case 10:
            _context30.next = 12;
            return _index["default"].nhacungcap.findAll({
              include: [{
                model: _index["default"].Book,
                as: 'BookData',
                where: {
                  sanPham: sanPham
                }
              }]
            });
          case 12:
            data = _context30.sent;
            if (data) {
              bookData.errCode = 0;
              bookData.errMessage = 'Ok';
              bookData.data = data;
            } else {
              bookData.errCode = 2;
              bookData.errMessage = 'data is not fond';
              bookData.data = {};
            }
          case 14:
            resolve(bookData);
            _context30.next = 20;
            break;
          case 17:
            _context30.prev = 17;
            _context30.t0 = _context30["catch"](0);
            reject(_context30.t0);
          case 20:
          case "end":
            return _context30.stop();
        }
      }, _callee30, null, [[0, 17]]);
    }));
    return function (_x59, _x60) {
      return _ref30.apply(this, arguments);
    };
  }());
};
var handleCountALLTL = function handleCountALLTL() {
  return new Promise( /*#__PURE__*/function () {
    var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            bookdata = {};
            _context31.next = 4;
            return _index["default"].theloai.count();
          case 4:
            data = _context31.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find sanPham book';
              bookdata.data = {};
            }
            resolve(bookdata);
            _context31.next = 12;
            break;
          case 9:
            _context31.prev = 9;
            _context31.t0 = _context31["catch"](0);
            reject(_context31.t0);
          case 12:
          case "end":
            return _context31.stop();
        }
      }, _callee31, null, [[0, 9]]);
    }));
    return function (_x61, _x62) {
      return _ref31.apply(this, arguments);
    };
  }());
};
var handleCountALLNCC = function handleCountALLNCC() {
  return new Promise( /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee32$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            bookdata = {};
            _context32.next = 4;
            return _index["default"].nhacungcap.count();
          case 4:
            data = _context32.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find sanPham book';
              bookdata.data = {};
            }
            resolve(bookdata);
            _context32.next = 12;
            break;
          case 9:
            _context32.prev = 9;
            _context32.t0 = _context32["catch"](0);
            reject(_context32.t0);
          case 12:
          case "end":
            return _context32.stop();
        }
      }, _callee32, null, [[0, 9]]);
    }));
    return function (_x63, _x64) {
      return _ref32.apply(this, arguments);
    };
  }());
};
var handleCountALLNXB = function handleCountALLNXB() {
  return new Promise( /*#__PURE__*/function () {
    var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee33$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            bookdata = {};
            _context33.next = 4;
            return _index["default"].nhaxuatban.count();
          case 4:
            data = _context33.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find sanPham book';
              bookdata.data = {};
            }
            resolve(bookdata);
            _context33.next = 12;
            break;
          case 9:
            _context33.prev = 9;
            _context33.t0 = _context33["catch"](0);
            reject(_context33.t0);
          case 12:
          case "end":
            return _context33.stop();
        }
      }, _callee33, null, [[0, 9]]);
    }));
    return function (_x65, _x66) {
      return _ref33.apply(this, arguments);
    };
  }());
};
var handlegetAllBookbyNCC = function handlegetAllBookbyNCC(type) {
  return new Promise( /*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(resolve, reject) {
      var bookdata, data;
      return _regeneratorRuntime().wrap(function _callee34$(_context34) {
        while (1) switch (_context34.prev = _context34.next) {
          case 0:
            _context34.prev = 0;
            bookdata = {};
            data = {};
            if (!(type === 'ALL')) {
              _context34.next = 10;
              break;
            }
            _context34.next = 6;
            return _index["default"].Book.findAll({
              include: [{
                model: _index["default"].discount,
                as: 'discountData'
              }],
              attributes: ['image', 'gia', 'tenSach', 'keyMap', 'soLuong']
            });
          case 6:
            data = _context34.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find all book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 2;
              bookdata.errMessage = 'error find book';
              bookdata.data = {};
            }
            _context34.next = 14;
            break;
          case 10:
            _context34.next = 12;
            return _index["default"].Book.findAll({
              where: {
                nhaCungCap: type
              },
              include: [{
                model: _index["default"].discount,
                as: 'discountData'
              }],
              attributes: ['image', 'gia', 'tenSach', 'keyMap', 'soLuong']
            });
          case 12:
            data = _context34.sent;
            if (data) {
              bookdata.errCode = 0;
              bookdata.errMessage = 'OK find one book';
              bookdata.data = data;
            } else {
              bookdata.errCode = 3;
              bookdata.errMessage = 'error find one book';
              bookdata.data = {};
            }
          case 14:
            resolve(bookdata);
            _context34.next = 20;
            break;
          case 17:
            _context34.prev = 17;
            _context34.t0 = _context34["catch"](0);
            reject(_context34.t0);
          case 20:
          case "end":
            return _context34.stop();
        }
      }, _callee34, null, [[0, 17]]);
    }));
    return function (_x67, _x68) {
      return _ref34.apply(this, arguments);
    };
  }());
};
module.exports = {
  handleCreatNewNXB: handleCreatNewNXB,
  handleCreateNewNCC: handleCreateNewNCC,
  handleCreateNewTL: handleCreateNewTL,
  handlegetAllNCC: handlegetAllNCC,
  handlegetAllNXB: handlegetAllNXB,
  handlegetAllTL: handlegetAllTL,
  handleDeleteNCC: handleDeleteNCC,
  handleDeleteNXB: handleDeleteNXB,
  handleDeleteTL: handleDeleteTL,
  handleUpdateNCC: handleUpdateNCC,
  handleUpdateNXB: handleUpdateNXB,
  handleUpdateTL: handleUpdateTL,
  handleCreateNewBook: handleCreateNewBook,
  handlegetAllBook: handlegetAllBook,
  handleDeleteBook: handleDeleteBook,
  handleUpdateBook: handleUpdateBook,
  handleCreateNewdiscount: handleCreateNewdiscount,
  handlegetAlldiscount: handlegetAlldiscount,
  handleDeletediscount: handleDeletediscount,
  handleUpdatediscout: handleUpdatediscout,
  handleCreateNewBookInfo: handleCreateNewBookInfo,
  handlegetAllBookInfo: handlegetAllBookInfo,
  handleUpdateBookInfo: handleUpdateBookInfo,
  handlegetAllBookbyCart: handlegetAllBookbyCart,
  handlegetAllBookbyTL: handlegetAllBookbyTL,
  handleCountALL: handleCountALL,
  handlegetAllBookbySP: handlegetAllBookbySP,
  handlegetAllNXBbySP: handlegetAllNXBbySP,
  handlegetAllTLbySP: handlegetAllTLbySP,
  handlegetAllNCCbySP: handlegetAllNCCbySP,
  handleCountALLTL: handleCountALLTL,
  handleCountALLNCC: handleCountALLNCC,
  handleCountALLNXB: handleCountALLNXB,
  handlegetAllBookbyNCC: handlegetAllBookbyNCC
};