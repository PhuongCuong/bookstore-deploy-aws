"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
var _uploadS = require("./uploadS3");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var handleLoginUser = function handleLoginUser(email, password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var userData, check, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            userData = {};
            _context.next = 4;
            return checkemail(email);
          case 4:
            check = _context.sent;
            if (!(check === true)) {
              _context.next = 12;
              break;
            }
            _context.next = 8;
            return _index["default"].User.findOne({
              where: {
                email: email
              }
            });
          case 8:
            data = _context.sent;
            if (data) {
              if (password === data.password) {
                userData.errCode = 0;
                userData.errMessager = 'Ok';
                userData.data = data;
              } else {
                userData.errCode = 2;
                userData.errMessager = 'password infomation is not defined';
              }
            } else {
              userData.errCode = 3;
              userData.errMessager = 'Email not exist';
            }
            _context.next = 14;
            break;
          case 12:
            userData.errCode = 3;
            userData.errMessager = 'Email not exist';
          case 14:
            resolve(userData);
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 20:
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
var checkemail = function checkemail(email) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].User.findOne({
              where: {
                email: email
              },
              raw: true
            });
          case 3:
            data = _context2.sent;
            if (data) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var handleCreatenNewUser = function handleCreatenNewUser(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var userData, check, finduser, datas;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            userData = {};
            _context3.next = 4;
            return checkemail(data.email);
          case 4:
            check = _context3.sent;
            if (!(check === true)) {
              _context3.next = 19;
              break;
            }
            _context3.next = 8;
            return _index["default"].User.findOne({
              where: {
                email: data.email
              }
            });
          case 8:
            finduser = _context3.sent;
            if (!(finduser && !finduser.password)) {
              _context3.next = 16;
              break;
            }
            _context3.next = 12;
            return _index["default"].User.update({
              password: data.password
            }, {
              where: {
                email: data.email
              }
            });
          case 12:
            userData.errCode = 0;
            userData.errMessager = 'create new user success!';
            _context3.next = 17;
            break;
          case 16:
            if (finduser && finduser.password) {
              userData.errCode = 2;
              userData.errMessager = 'Email existed';
            }
          case 17:
            _context3.next = 23;
            break;
          case 19:
            _context3.next = 21;
            return _index["default"].User.create({
              email: data.email,
              password: data.password,
              firstName: data.name,
              roleId: 'R2'
            });
          case 21:
            datas = _context3.sent;
            if (datas) {
              userData.errCode = 0;
              userData.errMessager = 'create new user success!';
            } else {
              userData.errCode = 3;
              userData.errMessager = 'create new user not success!';
            }
          case 23:
            resolve(userData);
            _context3.next = 29;
            break;
          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 29:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 26]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var handlegetAlluser = function handlegetAlluser(userId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var userData, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            userData = {};
            data = '';
            if (!(userId === 'ALL')) {
              _context4.next = 7;
              break;
            }
            _context4.next = 6;
            return _index["default"].User.findAll({
              include: [{
                model: _index["default"].allCode,
                as: 'genderData',
                attributes: ['value']
              }, {
                model: _index["default"].allCode,
                as: 'roleData',
                attributes: ['value']
              }]
            });
          case 6:
            data = _context4.sent;
          case 7:
            if (!(userId && userId !== 'ALL')) {
              _context4.next = 13;
              break;
            }
            _context4.next = 10;
            return _index["default"].User.findOne({
              where: {
                id: userId
              },
              include: [{
                model: _index["default"].allCode,
                as: 'genderData',
                attributes: ['value']
              }, {
                model: _index["default"].allCode,
                as: 'roleData',
                attributes: ['value']
              }]
            });
          case 10:
            data = _context4.sent;
            _context4.next = 16;
            break;
          case 13:
            userData.errCode = 1;
            userData.errMessager = 'Missing valid undefid!';
            userData.data = {};
          case 16:
            if (data) {
              userData.errCode = 0;
              userData.errMessager = 'ok!';
              userData.data = data;
            } else {
              userData.errCode = 1;
              userData.errMessager = 'Missing valid undefid!';
              userData.data = {};
            }
            resolve(userData);
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 20]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var handlegetAllallCodebytype = function handlegetAllallCodebytype(type) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var userData, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            userData = {};
            if (type) {
              _context5.next = 7;
              break;
            }
            userData.errCode = 1;
            userData.errMessager = 'vaild not type';
            _context5.next = 12;
            break;
          case 7:
            _context5.next = 9;
            return _index["default"].allCode.findAll({
              where: {
                type: type
              }
            });
          case 9:
            data = _context5.sent;
            if (data) {
              userData.errCode = 0;
              userData.errMessager = 'ok';
              userData.data = data;
            } else {
              userData.errCode = 2;
              userData.errMessager = 'no data';
              userData.data = {};
            }
            resolve(userData);
          case 12:
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var handleCreatenNewUseradmin = function handleCreatenNewUseradmin(data, file) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var userData, check, link, datas;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            userData = {};
            _context6.next = 4;
            return checkemail(data.email);
          case 4:
            check = _context6.sent;
            if (!(check === true)) {
              _context6.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'Email existed';
            _context6.next = 17;
            break;
          case 10:
            _context6.next = 12;
            return (0, _uploadS.uploadfile)(file);
          case 12:
            link = _context6.sent;
            _context6.next = 15;
            return _index["default"].User.create({
              email: data.email,
              password: data.password,
              firstName: data.firstName,
              lastName: data.lastName,
              address: data.address,
              phoneNumber: data.phonenumber,
              gender: data.gender,
              roleId: data.roleId,
              image: link
            });
          case 15:
            datas = _context6.sent;
            if (datas) {
              userData.errCode = 0;
              userData.errMessager = 'create new user success!';
              userData.id = datas.id;
            } else {
              userData.errCode = 3;
              userData.errMessager = 'create new user not success!';
            }
          case 17:
            resolve(userData);
            _context6.next = 23;
            break;
          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 23:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 20]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var handleDeleteUser = function handleDeleteUser(userId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var userData, user;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            userData = {};
            _context7.prev = 1;
            _context7.next = 4;
            return _index["default"].User.findOne({
              where: {
                id: userId
              }
            });
          case 4:
            user = _context7.sent;
            if (user) {
              _context7.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'not find user!';
            _context7.next = 14;
            break;
          case 10:
            _context7.next = 12;
            return _index["default"].User.destroy({
              where: {
                id: userId
              }
            });
          case 12:
            userData.errCode = 0;
            userData.errMessager = 'OK!';
          case 14:
            resolve(userData);
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
var handleUpdateUser = function handleUpdateUser(userId, file) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var userData, user, link;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            userData = {};
            _context8.next = 4;
            return _index["default"].User.findOne({
              where: {
                id: userId.id
              }
            });
          case 4:
            user = _context8.sent;
            if (user) {
              _context8.next = 10;
              break;
            }
            userData.errCode = 2;
            userData.errMessager = 'not find user';
            _context8.next = 22;
            break;
          case 10:
            link = '';
            if (!file) {
              _context8.next = 17;
              break;
            }
            _context8.next = 14;
            return (0, _uploadS.uploadfile)(file);
          case 14:
            link = _context8.sent;
            _context8.next = 18;
            break;
          case 17:
            link = userId.image;
          case 18:
            _context8.next = 20;
            return _index["default"].User.update({
              firstName: userId.firstName,
              lastName: userId.lastName,
              email: userId.email,
              password: userId.password,
              address: userId.address,
              phoneNumber: userId.phoneNumber,
              gender: userId.gender,
              roleId: userId.roleId,
              image: link
            }, {
              where: {
                id: userId.id
              }
            });
          case 20:
            userData.errCode = 0;
            userData.errMessager = 'Ok';
          case 22:
            resolve(userData);
            _context8.next = 28;
            break;
          case 25:
            _context8.prev = 25;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 28:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 25]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var handlegetAlluserbyEmail = function handlegetAlluserbyEmail(userId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var userData, data;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            userData = {};
            data = '';
            if (!(userId === 'ALL')) {
              _context9.next = 7;
              break;
            }
            _context9.next = 6;
            return _index["default"].User.findAll({
              include: [{
                model: _index["default"].allCode,
                as: 'genderData',
                attributes: ['value']
              }, {
                model: _index["default"].allCode,
                as: 'roleData',
                attributes: ['value']
              }]
            });
          case 6:
            data = _context9.sent;
          case 7:
            if (!(userId && userId !== 'ALL')) {
              _context9.next = 13;
              break;
            }
            _context9.next = 10;
            return _index["default"].User.findOne({
              where: {
                email: userId
              },
              include: [{
                model: _index["default"].allCode,
                as: 'genderData',
                attributes: ['value']
              }, {
                model: _index["default"].allCode,
                as: 'roleData',
                attributes: ['value']
              }]
            });
          case 10:
            data = _context9.sent;
            _context9.next = 16;
            break;
          case 13:
            userData.errCode = 1;
            userData.errMessager = 'Missing valid undefid!';
            userData.data = {};
          case 16:
            if (data) {
              userData.errCode = 0;
              userData.errMessager = 'ok!';
              userData.data = data;
            } else {
              userData.errCode = 1;
              userData.errMessager = 'Missing valid undefid!';
              userData.data = {};
            }
            resolve(userData);
            _context9.next = 23;
            break;
          case 20:
            _context9.prev = 20;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 23:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 20]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var updatePassword = function updatePassword(datainput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var userData, data;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            userData = {};
            data = '';
            _context10.next = 5;
            return _index["default"].User.findOne({
              where: {
                id: datainput.id
              }
            });
          case 5:
            data = _context10.sent;
            if (!(data && data.password === datainput.passwordbefor)) {
              _context10.next = 13;
              break;
            }
            _context10.next = 9;
            return _index["default"].User.update({
              password: datainput.passwordcomfim
            }, {
              where: {
                id: datainput.id
              }
            });
          case 9:
            userData.errCode = 0;
            userData.errMessager = 'ok!';
            _context10.next = 15;
            break;
          case 13:
            userData.errCode = 1;
            userData.errMessager = 'Password chưa chính xác!';
          case 15:
            resolve(userData);
            _context10.next = 21;
            break;
          case 18:
            _context10.prev = 18;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 21:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 18]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
module.exports = {
  handleLoginUser: handleLoginUser,
  checkemail: checkemail,
  handleCreatenNewUser: handleCreatenNewUser,
  handlegetAlluser: handlegetAlluser,
  handlegetAllallCodebytype: handlegetAllallCodebytype,
  handleCreatenNewUseradmin: handleCreatenNewUseradmin,
  handleDeleteUser: handleDeleteUser,
  handleUpdateUser: handleUpdateUser,
  handlegetAlluserbyEmail: handlegetAlluserbyEmail,
  updatePassword: updatePassword
};