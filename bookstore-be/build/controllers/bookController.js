"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _bookService = _interopRequireDefault(require("../services/bookService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var handleCreatNewNXB = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var keyMap, tenNXB, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          keyMap = req.body.keyMap;
          tenNXB = req.body.tenNXB;
          if (!(!keyMap || !tenNXB)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input parament!'
          }));
        case 7:
          _context.next = 9;
          return _bookService["default"].handleCreatNewNXB({
            keyMap: keyMap,
            tenNXB: tenNXB
          });
        case 9:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 11:
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function handleCreatNewNXB(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleCreateNewNCC = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var keyMap, tenNCC, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          keyMap = req.body.keyMap;
          tenNCC = req.body.tenNCC;
          if (!(!keyMap || !tenNCC)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input parament!'
          }));
        case 7:
          _context2.next = 9;
          return _bookService["default"].handleCreateNewNCC({
            keyMap: keyMap,
            tenNCC: tenNCC
          });
        case 9:
          data = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 11:
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function handleCreateNewNCC(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var handleCreateNewTL = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var keyMap, theLoai, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          keyMap = req.body.keyMap;
          theLoai = req.body.theLoai;
          if (!(!keyMap || !theLoai)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input parament!'
          }));
        case 7:
          _context3.next = 9;
          return _bookService["default"].handleCreateNewTL({
            keyMap: keyMap,
            theLoai: theLoai
          });
        case 9:
          data = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 11:
          _context3.next = 16;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function handleCreateNewTL(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var handlegetAllNCC = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var keyMap, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          keyMap = req.query.keyMap;
          if (keyMap) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context4.next = 8;
          return _bookService["default"].handlegetAllNCC(keyMap);
        case 8:
          data = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data && data.data ? data.data : {}
          }));
        case 10:
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function handlegetAllNCC(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var handlegetAllNXB = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var keyMap, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          keyMap = req.query.keyMap;
          if (keyMap) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context5.next = 8;
          return _bookService["default"].handlegetAllNXB(keyMap);
        case 8:
          data = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data && data.data ? data.data : {}
          }));
        case 10:
          _context5.next = 15;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function handlegetAllNXB(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var handlegetAllTL = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var keyMap, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          keyMap = req.query.keyMap;
          if (keyMap) {
            _context6.next = 6;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context6.next = 8;
          return _bookService["default"].handlegetAllTL(keyMap);
        case 8:
          data = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data && data.data ? data.data : {}
          }));
        case 10:
          _context6.next = 15;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function handlegetAllTL(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var handleDeleteNCC = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var keyMap, data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          keyMap = req.body.keyMap;
          if (keyMap) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input parament!'
          }));
        case 6:
          _context7.next = 8;
          return _bookService["default"].handleDeleteNCC(keyMap);
        case 8:
          data = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 10:
          _context7.next = 15;
          break;
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 12]]);
  }));
  return function handleDeleteNCC(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var handleDeleteNXB = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var keyMap, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          keyMap = req.body.keyMap;
          if (keyMap) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input parament!'
          }));
        case 6:
          _context8.next = 8;
          return _bookService["default"].handleDeleteNXB(keyMap);
        case 8:
          data = _context8.sent;
          return _context8.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 10:
          _context8.next = 15;
          break;
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 12]]);
  }));
  return function handleDeleteNXB(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var handleDeleteTL = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var keyMap, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          keyMap = req.body.keyMap;
          if (keyMap) {
            _context9.next = 6;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input parament!'
          }));
        case 6:
          _context9.next = 8;
          return _bookService["default"].handleDeleteTL(keyMap);
        case 8:
          data = _context9.sent;
          return _context9.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 10:
          _context9.next = 15;
          break;
        case 12:
          _context9.prev = 12;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 12]]);
  }));
  return function handleDeleteTL(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var handleUpdateNCC = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var NCC, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          NCC = req.body;
          if (!(!NCC.keyMap || !NCC.tenNCC)) {
            _context10.next = 6;
            break;
          }
          res.status(200).json({
            errCode: 1,
            errMessager: 'Missing input paramenter'
          });
          _context10.next = 10;
          break;
        case 6:
          _context10.next = 8;
          return _bookService["default"].handleUpdateNCC(NCC);
        case 8:
          data = _context10.sent;
          res.status(200).json({
            errCode: data.errCode,
            errMessager: data.errMessager
          });
        case 10:
          _context10.next = 15;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function handleUpdateNCC(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var handleUpdateNXB = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var NXB, data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          NXB = req.body;
          if (!(!NXB.keyMap || !NXB.tenNXB)) {
            _context11.next = 6;
            break;
          }
          res.status(200).json({
            errCode: 1,
            errMessager: 'Missing input paramenter'
          });
          _context11.next = 10;
          break;
        case 6:
          _context11.next = 8;
          return _bookService["default"].handleUpdateNXB(NXB);
        case 8:
          data = _context11.sent;
          res.status(200).json({
            errCode: data.errCode,
            errMessager: data.errMessager
          });
        case 10:
          _context11.next = 15;
          break;
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
        case 15:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 12]]);
  }));
  return function handleUpdateNXB(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var handleUpdateTL = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var TL, data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          TL = req.body;
          if (!(!TL.keyMap || !TL.theLoai)) {
            _context12.next = 6;
            break;
          }
          res.status(200).json({
            errCode: 1,
            errMessager: 'Missing input paramenter'
          });
          _context12.next = 10;
          break;
        case 6:
          _context12.next = 8;
          return _bookService["default"].handleUpdateTL(TL);
        case 8:
          data = _context12.sent;
          res.status(200).json({
            errCode: data.errCode,
            errMessager: data.errMessager
          });
        case 10:
          _context12.next = 15;
          break;
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](0);
          console.log(_context12.t0);
        case 15:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 12]]);
  }));
  return function handleUpdateTL(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var handleCreateNewBook = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var bookdata, file, data;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          bookdata = req.body;
          file = req.file;
          if (!(!bookdata.NCC || !bookdata.NXB || !bookdata.TL || !bookdata.tenSach || !bookdata.gia || !bookdata.tacGia || !bookdata.soLuong || !bookdata.keyMap || !bookdata.sanPham)) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 7:
          _context13.next = 9;
          return _bookService["default"].handleCreateNewBook(bookdata, file);
        case 9:
          data = _context13.sent;
          return _context13.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 11:
          _context13.next = 16;
          break;
        case 13:
          _context13.prev = 13;
          _context13.t0 = _context13["catch"](0);
          console.log(_context13.t0);
        case 16:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 13]]);
  }));
  return function handleCreateNewBook(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var handleUpdateBook = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var bookdata, file, data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          bookdata = req.body;
          file = req.file;
          if (!(!bookdata.NCC || !bookdata.NXB || !bookdata.TL || !bookdata.tenSach || !bookdata.gia || !bookdata.tacGia || !bookdata.soLuong || !bookdata.keyMap || !bookdata.image || !bookdata.sanPham)) {
            _context14.next = 7;
            break;
          }
          res.status(200).json({
            errCode: 1,
            errMessager: 'Missing input paramenter'
          });
          _context14.next = 11;
          break;
        case 7:
          _context14.next = 9;
          return _bookService["default"].handleUpdateBook(bookdata, file);
        case 9:
          data = _context14.sent;
          res.status(200).json({
            errCode: data.errCode,
            errMessager: data.errMessager
          });
        case 11:
          _context14.next = 16;
          break;
        case 13:
          _context14.prev = 13;
          _context14.t0 = _context14["catch"](0);
          console.log(_context14.t0);
        case 16:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 13]]);
  }));
  return function handleUpdateBook(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var handlegetAllBook = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var type, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          type = req.query.type;
          if (type) {
            _context15.next = 6;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context15.next = 8;
          return _bookService["default"].handlegetAllBook(type);
        case 8:
          data = _context15.sent;
          return _context15.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 10:
          _context15.next = 15;
          break;
        case 12:
          _context15.prev = 12;
          _context15.t0 = _context15["catch"](0);
          console.log(_context15.t0);
        case 15:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 12]]);
  }));
  return function handlegetAllBook(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var handleDeleteBook = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var keyMap, data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          keyMap = req.body.keyMap;
          if (keyMap) {
            _context16.next = 6;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context16.next = 8;
          return _bookService["default"].handleDeleteBook(keyMap);
        case 8:
          data = _context16.sent;
          return _context16.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 10:
          _context16.next = 15;
          break;
        case 12:
          _context16.prev = 12;
          _context16.t0 = _context16["catch"](0);
          console.log(_context16.t0);
        case 15:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 12]]);
  }));
  return function handleDeleteBook(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var handleCreateNewdiscount = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var discountdata, data;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          discountdata = req.body;
          if (!(!discountdata.maSach || !discountdata.tenSach || !discountdata.ngayBD || !discountdata.ngayKT || !discountdata.discount)) {
            _context17.next = 6;
            break;
          }
          res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input body'
          });
          _context17.next = 10;
          break;
        case 6:
          _context17.next = 8;
          return _bookService["default"].handleCreateNewdiscount(discountdata);
        case 8:
          data = _context17.sent;
          res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          });
        case 10:
          _context17.next = 15;
          break;
        case 12:
          _context17.prev = 12;
          _context17.t0 = _context17["catch"](0);
          console.log(_context17.t0);
        case 15:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 12]]);
  }));
  return function handleCreateNewdiscount(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var handlegetAlldiscount = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var maSach, data;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          maSach = req.query.maSach;
          if (maSach) {
            _context18.next = 6;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context18.next = 8;
          return _bookService["default"].handlegetAlldiscount(maSach);
        case 8:
          data = _context18.sent;
          return _context18.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 10:
          _context18.next = 15;
          break;
        case 12:
          _context18.prev = 12;
          _context18.t0 = _context18["catch"](0);
          console.log(_context18.t0);
        case 15:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 12]]);
  }));
  return function handlegetAlldiscount(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var handleUpdatediscout = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var discount, data;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          discount = req.body;
          if (!(!discount.maSach || !discount.tenSach || !discount.discount || !discount.ngayBD || !discount.ngayKT)) {
            _context19.next = 6;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessager: 'Missing input paramenter'
          }));
        case 6:
          _context19.next = 8;
          return _bookService["default"].handleUpdatediscout(discount);
        case 8:
          data = _context19.sent;
          return _context19.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessager: data.errMessager
          }));
        case 10:
          _context19.next = 15;
          break;
        case 12:
          _context19.prev = 12;
          _context19.t0 = _context19["catch"](0);
          console.log(_context19.t0);
        case 15:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 12]]);
  }));
  return function handleUpdatediscout(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var handleDeletediscount = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var maSach, data;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          maSach = req.body.maSach;
          if (maSach) {
            _context20.next = 6;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context20.next = 8;
          return _bookService["default"].handleDeletediscount(maSach);
        case 8:
          data = _context20.sent;
          return _context20.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          }));
        case 10:
          _context20.next = 15;
          break;
        case 12:
          _context20.prev = 12;
          _context20.t0 = _context20["catch"](0);
          console.log(_context20.t0);
        case 15:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 12]]);
  }));
  return function handleDeletediscount(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var handleCreateNewBookInfo = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var discountdata, data;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          discountdata = req.body;
          if (!(!discountdata.bookId || !discountdata.descriptionHTML || !discountdata.descriptionMarkDown)) {
            _context21.next = 6;
            break;
          }
          res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input body'
          });
          _context21.next = 10;
          break;
        case 6:
          _context21.next = 8;
          return _bookService["default"].handleCreateNewBookInfo(discountdata);
        case 8:
          data = _context21.sent;
          res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage
          });
        case 10:
          _context21.next = 15;
          break;
        case 12:
          _context21.prev = 12;
          _context21.t0 = _context21["catch"](0);
          console.log(_context21.t0);
        case 15:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 12]]);
  }));
  return function handleCreateNewBookInfo(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var handlegetAllBookInfo = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var bookId, data;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          bookId = req.query.bookId;
          if (bookId) {
            _context22.next = 6;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context22.next = 8;
          return _bookService["default"].handlegetAllBookInfo(bookId);
        case 8:
          data = _context22.sent;
          return _context22.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 10:
          _context22.next = 15;
          break;
        case 12:
          _context22.prev = 12;
          _context22.t0 = _context22["catch"](0);
          console.log(_context22.t0);
        case 15:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 12]]);
  }));
  return function handlegetAllBookInfo(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var handleUpdateBookInfo = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var discount, data;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          discount = req.body;
          if (!(!discount.bookId || !discount.descriptionHTML || !discount.descriptionMarkDown)) {
            _context23.next = 6;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessager: 'Missing input paramenter'
          }));
        case 6:
          _context23.next = 8;
          return _bookService["default"].handleUpdateBookInfo(discount);
        case 8:
          data = _context23.sent;
          return _context23.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessager: data.errMessager
          }));
        case 10:
          _context23.next = 15;
          break;
        case 12:
          _context23.prev = 12;
          _context23.t0 = _context23["catch"](0);
          console.log(_context23.t0);
        case 15:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 12]]);
  }));
  return function handleUpdateBookInfo(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
var handlegetAllBookbyCart = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var type, data;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          type = req.query.type;
          if (type) {
            _context24.next = 6;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context24.next = 8;
          return _bookService["default"].handlegetAllBookbyCart(type);
        case 8:
          data = _context24.sent;
          return _context24.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 10:
          _context24.next = 15;
          break;
        case 12:
          _context24.prev = 12;
          _context24.t0 = _context24["catch"](0);
          console.log(_context24.t0);
        case 15:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 12]]);
  }));
  return function handlegetAllBookbyCart(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
var handlegetAllBookbyTL = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var type, data;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          type = req.query.type;
          if (type) {
            _context25.next = 6;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context25.next = 8;
          return _bookService["default"].handlegetAllBookbyTL(type);
        case 8:
          data = _context25.sent;
          return _context25.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 10:
          _context25.next = 15;
          break;
        case 12:
          _context25.prev = 12;
          _context25.t0 = _context25["catch"](0);
          console.log(_context25.t0);
        case 15:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 12]]);
  }));
  return function handlegetAllBookbyTL(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
var handleCountALL = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return _bookService["default"].handleCountALL();
        case 3:
          data = _context26.sent;
          return _context26.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 7:
          _context26.prev = 7;
          _context26.t0 = _context26["catch"](0);
          console.log(_context26.t0);
        case 10:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 7]]);
  }));
  return function handleCountALL(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
var handlegetAllBookbySP = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var sanPham, data;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          sanPham = req.query.sanPham;
          if (sanPham) {
            _context27.next = 6;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context27.next = 8;
          return _bookService["default"].handlegetAllBookbySP(sanPham);
        case 8:
          data = _context27.sent;
          return _context27.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 10:
          _context27.next = 15;
          break;
        case 12:
          _context27.prev = 12;
          _context27.t0 = _context27["catch"](0);
          console.log(_context27.t0);
        case 15:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 12]]);
  }));
  return function handlegetAllBookbySP(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
var handlegetAllNXBbySP = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var sanPham, data;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          sanPham = req.query.sanPham;
          if (sanPham) {
            _context28.next = 6;
            break;
          }
          return _context28.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context28.next = 8;
          return _bookService["default"].handlegetAllNXBbySP(sanPham);
        case 8:
          data = _context28.sent;
          return _context28.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data && data.data ? data.data : {}
          }));
        case 10:
          _context28.next = 15;
          break;
        case 12:
          _context28.prev = 12;
          _context28.t0 = _context28["catch"](0);
          console.log(_context28.t0);
        case 15:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 12]]);
  }));
  return function handlegetAllNXBbySP(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
var handlegetAllTLbySP = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var sanPham, data;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          sanPham = req.query.sanPham;
          if (sanPham) {
            _context29.next = 6;
            break;
          }
          return _context29.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context29.next = 8;
          return _bookService["default"].handlegetAllTLbySP(sanPham);
        case 8:
          data = _context29.sent;
          return _context29.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data && data.data ? data.data : {}
          }));
        case 10:
          _context29.next = 15;
          break;
        case 12:
          _context29.prev = 12;
          _context29.t0 = _context29["catch"](0);
          console.log(_context29.t0);
        case 15:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 12]]);
  }));
  return function handlegetAllTLbySP(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
var handlegetAllNCCbySP = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var sanPham, data;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.prev = 0;
          sanPham = req.query.sanPham;
          if (sanPham) {
            _context30.next = 6;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context30.next = 8;
          return _bookService["default"].handlegetAllNCCbySP(sanPham);
        case 8:
          data = _context30.sent;
          return _context30.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data && data.data ? data.data : {}
          }));
        case 10:
          _context30.next = 15;
          break;
        case 12:
          _context30.prev = 12;
          _context30.t0 = _context30["catch"](0);
          console.log(_context30.t0);
        case 15:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[0, 12]]);
  }));
  return function handlegetAllNCCbySP(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}();
var handleCountALLTL = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.prev = 0;
          _context31.next = 3;
          return _bookService["default"].handleCountALLTL();
        case 3:
          data = _context31.sent;
          return _context31.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 7:
          _context31.prev = 7;
          _context31.t0 = _context31["catch"](0);
          console.log(_context31.t0);
        case 10:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[0, 7]]);
  }));
  return function handleCountALLTL(_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}();
var handleCountALLNCC = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.prev = 0;
          _context32.next = 3;
          return _bookService["default"].handleCountALLNCC();
        case 3:
          data = _context32.sent;
          return _context32.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 7:
          _context32.prev = 7;
          _context32.t0 = _context32["catch"](0);
          console.log(_context32.t0);
        case 10:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[0, 7]]);
  }));
  return function handleCountALLNCC(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}();
var handleCountALLNXB = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          _context33.next = 3;
          return _bookService["default"].handleCountALLNXB();
        case 3:
          data = _context33.sent;
          return _context33.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 7:
          _context33.prev = 7;
          _context33.t0 = _context33["catch"](0);
          console.log(_context33.t0);
        case 10:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 7]]);
  }));
  return function handleCountALLNXB(_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}();
var handlegetAllBookbyNCC = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var type, data;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.prev = 0;
          type = req.query.type;
          if (type) {
            _context34.next = 6;
            break;
          }
          return _context34.abrupt("return", res.status(200).json({
            errCode: 1,
            errMessage: 'Missing input paramenter!'
          }));
        case 6:
          _context34.next = 8;
          return _bookService["default"].handlegetAllBookbyNCC(type);
        case 8:
          data = _context34.sent;
          return _context34.abrupt("return", res.status(200).json({
            errCode: data.errCode,
            errMessage: data.errMessage,
            data: data.data
          }));
        case 10:
          _context34.next = 15;
          break;
        case 12:
          _context34.prev = 12;
          _context34.t0 = _context34["catch"](0);
          console.log(_context34.t0);
        case 15:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[0, 12]]);
  }));
  return function handlegetAllBookbyNCC(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}();
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