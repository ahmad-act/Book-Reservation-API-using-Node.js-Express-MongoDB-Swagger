/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/businessLayer/bookCategoryBL.js":
/*!*********************************************!*\
  !*** ./src/businessLayer/bookCategoryBL.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookCategoryModel = __webpack_require__(/*! ../models/bookCategoryModel */ "./src/models/bookCategoryModel.js");
var bookCategoryDL = __webpack_require__(/*! ../dataAccessLayer/bookCategoryDL */ "./src/dataAccessLayer/bookCategoryDL.js");
var userAccessibilityOperation = __webpack_require__(/*! ../lib/userAccessibilityOperation */ "./src/lib/userAccessibilityOperation.js");
var idAndPropertyValidationUtil = __webpack_require__(/*! ../lib/idAndPropertyValidationUtil */ "./src/lib/idAndPropertyValidationUtil.js");

//---------------------- Get methods ----------------------\\
exports.getBookCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(authUser, pagingQuery) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookCategoryDL, existingBookCategories, totalBookCategory, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookCategories()");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context.next = 5;
          return bookCategoryDL.getBookCategories({
            bookCategoryAccessLevel: roleFilter
          }, pagingQuery);
        case 5:
          _yield$bookCategoryDL = _context.sent;
          existingBookCategories = _yield$bookCategoryDL.bookCategories;
          totalBookCategory = _yield$bookCategoryDL.totalBookCategory;
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context.next = 14;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book category not found";
          error.error = "Book category not found or you do not have access to the data";
          throw error;
        case 14:
          return _context.abrupt("return", existingBookCategories);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getBookCategoryById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(authUser, bookCategoryId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookCategoryDL2, existingBookCategories, totalBookCategory, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookCategoryById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(bookCategoryId, "book category");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context2.next = 6;
          return bookCategoryDL.getBookCategories({
            bookCategoryAccessLevel: roleFilter,
            _id: bookCategoryId
          });
        case 6:
          _yield$bookCategoryDL2 = _context2.sent;
          existingBookCategories = _yield$bookCategoryDL2.bookCategories;
          totalBookCategory = _yield$bookCategoryDL2.totalBookCategory;
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context2.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book category not found with the provided book category ID";
          error.error = "Book category not found by the provided ID (".concat(bookCategoryId, ") or you do not have access to the data");
          throw error;
        case 15:
          return _context2.abrupt("return", existingBookCategories);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getBookCategoriesByIds = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(authUser, bookCategoryIds, pagingQuery) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error, roleFilter, _yield$bookCategoryDL3, existingBookCategories, totalBookCategory, presentIds, absentIds, wrongIds, _error2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 1 for all
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookCategories()");

          // Valid and invalid IDs separation
          _idAndPropertyValidat = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookCategoryIds, "book category IDs"), validIds = _idAndPropertyValidat.validIds, invalidIds = _idAndPropertyValidat.invalidIds, duplicateIds = _idAndPropertyValidat.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context3.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context3.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error = new Error();
          _error.status = 400;
          _error.message = "Invalid book category ids";
          _error.error = "All book category ids (".concat(displayInvalidIds, ") are invalid, no book category found by the provided IDs");
          throw _error;
        case 18:
          _context3.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context3.sent;
          _context3.next = 23;
          return bookCategoryDL.getBookCategories({
            bookCategoryAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          }, pagingQuery);
        case 23:
          _yield$bookCategoryDL3 = _context3.sent;
          existingBookCategories = _yield$bookCategoryDL3.bookCategories;
          totalBookCategory = _yield$bookCategoryDL3.totalBookCategory;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingBookCategories.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context3.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error2 = new Error();
          _error2.status = 404;
          _error2.message = "Book category not found with the provided book category IDs";
          _error2.error = "Book category not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error2;
        case 36:
          return _context3.abrupt("return", {
            bookCategories: existingBookCategories,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 37:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createBookCategory = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(authUser, newBookCategory) {
    var thisOperationAccessibilityLevel;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookCategory()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(newBookCategory, bookCategoryModel.schema.paths, "book category", []);
          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newBookCategory, "book category");
          _context4.next = 6;
          return bookCategoryDL.createBookCategory(newBookCategory);
        case 6:
          return _context4.abrupt("return", _context4.sent);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
exports.createBulkBookCategory = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(authUser, newBookCategories) {
    var thisOperationAccessibilityLevel;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBulkBookCategory()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(newBookCategories, bookCategoryModel.schema.paths, "book category", []);
          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevelOfList(authUser, newBookCategories, "book category");

          // create new book categories in bulk
          _context5.next = 6;
          return bookCategoryDL.createBulkBookCategory(newBookCategories);
        case 6:
          return _context5.abrupt("return", _context5.sent);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateBookCategoryById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(authUser, bookCategoryId, updatableBookCategory) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookCategoryDL4, existingBookCategories, totalBookCategory, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBookCategoryById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(bookCategoryId, "book category");
          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(updatableBookCategory, bookCategoryModel.schema.paths, "book category", []);

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context6.next = 7;
          return bookCategoryDL.getBookCategories({
            bookCategoryAccessLevel: roleFilter,
            _id: bookCategoryId
          });
        case 7:
          _yield$bookCategoryDL4 = _context6.sent;
          existingBookCategories = _yield$bookCategoryDL4.bookCategories;
          totalBookCategory = _yield$bookCategoryDL4.totalBookCategory;
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context6.next = 16;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book category not found with the provided book category ID";
          error.error = "Book category not found by the provided ID (".concat(bookCategoryId, ") or you do not have access to the data");
          throw error;
        case 16:
          _context6.next = 18;
          return bookCategoryDL.updateBookCategoryById(bookCategoryId, updatableBookCategory);
        case 18:
          return _context6.abrupt("return", _context6.sent);
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateBulkBookCategories = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(authUser, updatableBookCategories) {
    var thisOperationAccessibilityLevel, bookCategoryIds, _idAndPropertyValidat2, validIds, invalidIds, displayInvalidIds, error, roleFilter, _yield$bookCategoryDL5, existingBookCategories, totalBookCategory, presentIds, absentIds, wrongIds, _error3, validUpdatableBookCategories, bulkUpdateOperations, updatedBookCategories;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBulkBookCategories()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(updatableBookCategories, bookCategoryModel.schema.paths, "book category", []);

          // IDs validation and separation
          bookCategoryIds = updatableBookCategories.map(function (user) {
            return user._id;
          });
          _idAndPropertyValidat2 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookCategoryIds, "book category IDs"), validIds = _idAndPropertyValidat2.validIds, invalidIds = _idAndPropertyValidat2.invalidIds;
          if (!(validIds.length === 0)) {
            _context7.next = 12;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          error = new Error();
          error.status = 400;
          error.message = "Invalid book category ids";
          error.error = "All book category ids (".concat(displayInvalidIds, ") are invalid, no book category found by the provided IDs");
          throw error;
        case 12:
          _context7.next = 14;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 14:
          roleFilter = _context7.sent;
          _context7.next = 17;
          return bookCategoryDL.getBookCategories({
            bookCategoryAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 17:
          _yield$bookCategoryDL5 = _context7.sent;
          existingBookCategories = _yield$bookCategoryDL5.bookCategories;
          totalBookCategory = _yield$bookCategoryDL5.totalBookCategory;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingBookCategories.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context7.next = 30;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error3 = new Error();
          _error3.status = 404;
          _error3.message = "Book category not found with the provided book category IDs";
          _error3.error = "Book category not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error3;
        case 30:
          // Valid data
          validUpdatableBookCategories = updatableBookCategories.filter(function (user) {
            return presentIds.includes(user._id);
          }); // Bulk operation generator
          _context7.next = 33;
          return bookCategoryModel.generateBulkUpdateOperations(validUpdatableBookCategories);
        case 33:
          bulkUpdateOperations = _context7.sent;
          _context7.next = 36;
          return bookCategoryDL.updateBulkBookCategories(bulkUpdateOperations);
        case 36:
          updatedBookCategories = _context7.sent;
          return _context7.abrupt("return", {
            bookCategory: updatedBookCategories,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 38:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteBookCategoryById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(authUser, bookCategoryId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookCategoryDL6, existingBookCategories, totalBookCategory, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBookCategoryById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(bookCategoryId, "book category");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context8.next = 6;
          return bookCategoryDL.getBookCategories({
            bookCategoryAccessLevel: roleFilter,
            _id: bookCategoryId
          });
        case 6:
          _yield$bookCategoryDL6 = _context8.sent;
          existingBookCategories = _yield$bookCategoryDL6.bookCategories;
          totalBookCategory = _yield$bookCategoryDL6.totalBookCategory;
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context8.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book category not found with the provided book category ID";
          error.error = "Book category not found by the provided ID (".concat(bookCategoryId, ") or you do not have access to the data");
          throw error;
        case 15:
          _context8.next = 17;
          return bookCategoryDL.deleteBookCategoryById(existingBookCategories[0]._id);
        case 17:
          return _context8.abrupt("return", _context8.sent);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteBulkBookCategories = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(authUser, bookCategoryIds) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat3, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error4, roleFilter, _yield$bookCategoryDL7, existingBookCategories, totalBookCategory, presentIds, absentIds, wrongIds, _error5, bulkDeleteOperations, deletedBookCategories;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookCategories()");

          // Valid and invalid IDs separation
          _idAndPropertyValidat3 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookCategoryIds, "book category IDs"), validIds = _idAndPropertyValidat3.validIds, invalidIds = _idAndPropertyValidat3.invalidIds, duplicateIds = _idAndPropertyValidat3.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context9.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context9.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error4 = new Error();
          _error4.status = 400;
          _error4.message = "Invalid book category IDs";
          _error4.error = "All book category ids (".concat(displayInvalidIds, ") are invalid, no book category found by the provided IDs");
          throw _error4;
        case 18:
          _context9.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context9.sent;
          _context9.next = 23;
          return bookCategoryDL.getBookCategories({
            bookCategoryAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 23:
          _yield$bookCategoryDL7 = _context9.sent;
          existingBookCategories = _yield$bookCategoryDL7.bookCategories;
          totalBookCategory = _yield$bookCategoryDL7.totalBookCategory;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingBookCategories.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context9.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error5 = new Error();
          _error5.status = 404;
          _error5.message = "Book category not found with the provided book category IDs";
          _error5.error = "Book category not found with the provided book category IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error5;
        case 36:
          _context9.next = 38;
          return bookCategoryModel.generateBulkDeleteOperations(existingBookCategories);
        case 38:
          bulkDeleteOperations = _context9.sent;
          _context9.next = 41;
          return bookCategoryDL.deleteBulkBookCategory(bulkDeleteOperations);
        case 41:
          deletedBookCategories = _context9.sent;
          return _context9.abrupt("return", {
            bookCategory: deletedBookCategories,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 43:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
exports.searchBookCategory = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(authUser, searchTermsForBookCategory, pagingQuery) {
    var thisOperationAccessibilityLevel, searchBookCategoryFilter, _yield$bookCategoryDL8, existingBookCategories, totalBookCategory, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 10 for all
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "searchBookCategory()");
          // ID and property validation
          idAndPropertyValidationUtil.checkWrongProperty(searchTermsForBookCategory, bookCategoryModel.schema.paths, "book category", []);

          // Filter generator
          _context10.next = 5;
          return bookCategoryModel.generateSearchOperations(authUser.roleSerial, searchTermsForBookCategory);
        case 5:
          searchBookCategoryFilter = _context10.sent;
          _context10.next = 8;
          return bookCategoryDL.getBookCategories(searchBookCategoryFilter, pagingQuery);
        case 8:
          _yield$bookCategoryDL8 = _context10.sent;
          existingBookCategories = _yield$bookCategoryDL8.bookCategories;
          totalBookCategory = _yield$bookCategoryDL8.totalBookCategory;
          if (!(!existingBookCategories || existingBookCategories.length === 0)) {
            _context10.next = 17;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book category not found";
          error.error = "Book category not found with the provided search criteria or you do not have access to the data";
          throw error;
        case 17:
          return _context10.abrupt("return", existingBookCategories);
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x21, _x22, _x23) {
    return _ref10.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/businessLayer/bookInfoBL.js":
/*!*****************************************!*\
  !*** ./src/businessLayer/bookInfoBL.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookInfoModel = __webpack_require__(/*! ../models/bookInfoModel */ "./src/models/bookInfoModel.js");
var bookInfoDL = __webpack_require__(/*! ../dataAccessLayer/bookInfoDL */ "./src/dataAccessLayer/bookInfoDL.js");
var userAccessibilityOperation = __webpack_require__(/*! ../lib/userAccessibilityOperation */ "./src/lib/userAccessibilityOperation.js");
var idAndPropertyValidationUtil = __webpack_require__(/*! ../lib/idAndPropertyValidationUtil */ "./src/lib/idAndPropertyValidationUtil.js");

//---------------------- Get methods ----------------------\\
exports.getBookInfos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(authUser, pagingQuery) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookInfoDL$get, existingBookInfos, totalBookInfo, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookInfos()");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context.next = 5;
          return bookInfoDL.getBookInfos({
            bookInfoAccessLevel: roleFilter
          }, pagingQuery);
        case 5:
          _yield$bookInfoDL$get = _context.sent;
          existingBookInfos = _yield$bookInfoDL$get.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get.totalBookInfo;
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context.next = 14;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book info not found";
          error.error = "Book info not found or you do not have access to the data";
          throw error;
        case 14:
          return _context.abrupt("return", existingBookInfos);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getBookInfoById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(authUser, bookInfoId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookInfoDL$get2, existingBookInfos, totalBookInfo, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookInfoById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(bookInfoId, "book info");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context2.next = 6;
          return bookInfoDL.getBookInfos({
            bookInfoAccessLevel: roleFilter,
            _id: bookInfoId
          });
        case 6:
          _yield$bookInfoDL$get2 = _context2.sent;
          existingBookInfos = _yield$bookInfoDL$get2.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get2.totalBookInfo;
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context2.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book info not found with the provided book info ID";
          error.error = "Book info not found by the provided ID (".concat(bookInfoId, ") or you do not have access to the data");
          throw error;
        case 15:
          return _context2.abrupt("return", existingBookInfos);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getBookInfosByIds = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(authUser, bookInfoIds, pagingQuery) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error, roleFilter, _yield$bookInfoDL$get3, existingBookInfos, totalBookInfo, presentIds, absentIds, wrongIds, _error2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 1 for all
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookInfos()");

          // Valid and invalid IDs separation
          _idAndPropertyValidat = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookInfoIds, "book info IDs"), validIds = _idAndPropertyValidat.validIds, invalidIds = _idAndPropertyValidat.invalidIds, duplicateIds = _idAndPropertyValidat.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context3.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context3.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error = new Error();
          _error.status = 400;
          _error.message = "Invalid book info ids";
          _error.error = "All book info ids (".concat(displayInvalidIds, ") are invalid, no book info found by the provided IDs");
          throw _error;
        case 18:
          _context3.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context3.sent;
          _context3.next = 23;
          return bookInfoDL.getBookInfos({
            bookInfoAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          }, pagingQuery);
        case 23:
          _yield$bookInfoDL$get3 = _context3.sent;
          existingBookInfos = _yield$bookInfoDL$get3.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get3.totalBookInfo;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingBookInfos.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context3.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error2 = new Error();
          _error2.status = 404;
          _error2.message = "Book info not found with the provided book info IDs";
          _error2.error = "Book info not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error2;
        case 36:
          return _context3.abrupt("return", {
            bookInfos: existingBookInfos,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 37:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createBookInfo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(authUser, newBookInfo) {
    var thisOperationAccessibilityLevel;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookInfo()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(newBookInfo, bookInfoModel.schema.paths, "book info", []);
          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newBookInfo, "book info");
          _context4.next = 6;
          return bookInfoDL.createBookInfo(newBookInfo);
        case 6:
          return _context4.abrupt("return", _context4.sent);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
exports.createBulkBookInfo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(authUser, newBookInfos) {
    var thisOperationAccessibilityLevel;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBulkBookInfo()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(newBookInfos, bookInfoModel.schema.paths, "book info", []);
          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevelOfList(authUser, newBookInfos, "book info");

          // create new book infos in bulk
          _context5.next = 6;
          return bookInfoDL.createBulkBookInfo(newBookInfos);
        case 6:
          return _context5.abrupt("return", _context5.sent);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateBookInfoById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(authUser, bookInfoId, updatableBookInfo) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookInfoDL$get4, existingBookInfos, totalBookInfo, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBookInfoById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(bookInfoId, "book info");
          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(updatableBookInfo, bookInfoModel.schema.paths, "book info", []);

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context6.next = 7;
          return bookInfoDL.getBookInfos({
            bookInfoAccessLevel: roleFilter,
            _id: bookInfoId
          });
        case 7:
          _yield$bookInfoDL$get4 = _context6.sent;
          existingBookInfos = _yield$bookInfoDL$get4.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get4.totalBookInfo;
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context6.next = 16;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book info not found with the provided book info ID";
          error.error = "Book info not found by the provided ID (".concat(bookInfoId, ") or you do not have access to the data");
          throw error;
        case 16:
          _context6.next = 18;
          return bookInfoDL.updateBookInfoById(bookInfoId, updatableBookInfo);
        case 18:
          return _context6.abrupt("return", _context6.sent);
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateBulkBookInfos = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(authUser, updatableBookInfos) {
    var thisOperationAccessibilityLevel, bookInfoIds, _idAndPropertyValidat2, validIds, invalidIds, displayInvalidIds, error, roleFilter, _yield$bookInfoDL$get5, existingBookInfos, totalBookInfo, presentIds, absentIds, wrongIds, _error3, validUpdatableBookInfos, bulkUpdateOperations, updatedBookInfos;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBulkBookInfos()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(updatableBookInfos, bookInfoModel.schema.paths, "book info", []);

          // IDs validation and separation
          bookInfoIds = updatableBookInfos.map(function (user) {
            return user._id;
          });
          _idAndPropertyValidat2 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookInfoIds, "book info IDs"), validIds = _idAndPropertyValidat2.validIds, invalidIds = _idAndPropertyValidat2.invalidIds;
          if (!(validIds.length === 0)) {
            _context7.next = 12;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          error = new Error();
          error.status = 400;
          error.message = "Invalid book info ids";
          error.error = "All book info ids (".concat(displayInvalidIds, ") are invalid, no book info found by the provided IDs");
          throw error;
        case 12:
          _context7.next = 14;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 14:
          roleFilter = _context7.sent;
          _context7.next = 17;
          return bookInfoDL.getBookInfos({
            bookInfoAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 17:
          _yield$bookInfoDL$get5 = _context7.sent;
          existingBookInfos = _yield$bookInfoDL$get5.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get5.totalBookInfo;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingBookInfos.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context7.next = 30;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error3 = new Error();
          _error3.status = 404;
          _error3.message = "Book info not found with the provided book info IDs";
          _error3.error = "Book info not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error3;
        case 30:
          // Valid data
          validUpdatableBookInfos = updatableBookInfos.filter(function (user) {
            return presentIds.includes(user._id);
          }); // Bulk operation generator
          _context7.next = 33;
          return bookInfoModel.generateBulkUpdateOperations(validUpdatableBookInfos);
        case 33:
          bulkUpdateOperations = _context7.sent;
          _context7.next = 36;
          return bookInfoDL.updateBulkBookInfos(bulkUpdateOperations);
        case 36:
          updatedBookInfos = _context7.sent;
          return _context7.abrupt("return", {
            bookInfo: updatedBookInfos,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 38:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteBookInfoById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(authUser, bookInfoId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookInfoDL$get6, existingBookInfos, totalBookInfo, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBookInfoById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(bookInfoId, "book info");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context8.next = 6;
          return bookInfoDL.getBookInfos({
            bookInfoAccessLevel: roleFilter,
            _id: bookInfoId
          });
        case 6:
          _yield$bookInfoDL$get6 = _context8.sent;
          existingBookInfos = _yield$bookInfoDL$get6.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get6.totalBookInfo;
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context8.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book info not found with the provided book info ID";
          error.error = "Book info not found by the provided ID (".concat(bookInfoId, ") or you do not have access to the data");
          throw error;
        case 15:
          _context8.next = 17;
          return bookInfoDL.deleteBookInfoById(existingBookInfos[0]._id);
        case 17:
          return _context8.abrupt("return", _context8.sent);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteBulkBookInfos = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(authUser, bookInfoIds) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat3, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error4, roleFilter, _yield$bookInfoDL$get7, existingBookInfos, totalBookInfo, presentIds, absentIds, wrongIds, _error5, bulkDeleteOperations, deletedBookInfos;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkBookInfos()");

          // Valid and invalid IDs separation
          _idAndPropertyValidat3 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(bookInfoIds, "book info IDs"), validIds = _idAndPropertyValidat3.validIds, invalidIds = _idAndPropertyValidat3.invalidIds, duplicateIds = _idAndPropertyValidat3.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context9.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context9.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error4 = new Error();
          _error4.status = 400;
          _error4.message = "Invalid book info IDs";
          _error4.error = "All book info ids (".concat(displayInvalidIds, ") are invalid, no book info found by the provided IDs");
          throw _error4;
        case 18:
          _context9.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context9.sent;
          _context9.next = 23;
          return bookInfoDL.getBookInfos({
            bookInfoAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 23:
          _yield$bookInfoDL$get7 = _context9.sent;
          existingBookInfos = _yield$bookInfoDL$get7.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get7.totalBookInfo;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingBookInfos.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context9.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error5 = new Error();
          _error5.status = 404;
          _error5.message = "Book info not found with the provided book info IDs";
          _error5.error = "Book info not found with the provided book info IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error5;
        case 36:
          _context9.next = 38;
          return bookInfoModel.generateBulkDeleteOperations(existingBookInfos);
        case 38:
          bulkDeleteOperations = _context9.sent;
          _context9.next = 41;
          return bookInfoDL.deleteBulkBookInfo(bulkDeleteOperations);
        case 41:
          deletedBookInfos = _context9.sent;
          return _context9.abrupt("return", {
            bookInfo: deletedBookInfos,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 43:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
exports.searchBookInfo = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(authUser, searchTermsForBookInfo, pagingQuery) {
    var thisOperationAccessibilityLevel, searchBookInfoFilter, _yield$bookInfoDL$get8, existingBookInfos, totalBookInfo, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 10 for all
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "searchBookInfo()");
          // ID and property validation
          idAndPropertyValidationUtil.checkWrongProperty(searchTermsForBookInfo, bookInfoModel.schema.paths, "book info", []);

          // Filter generator
          _context10.next = 5;
          return bookInfoModel.generateSearchOperations(authUser.roleSerial, searchTermsForBookInfo);
        case 5:
          searchBookInfoFilter = _context10.sent;
          _context10.next = 8;
          return bookInfoDL.getBookInfos(searchBookInfoFilter, pagingQuery);
        case 8:
          _yield$bookInfoDL$get8 = _context10.sent;
          existingBookInfos = _yield$bookInfoDL$get8.bookInfos;
          totalBookInfo = _yield$bookInfoDL$get8.totalBookInfo;
          if (!(!existingBookInfos || existingBookInfos.length === 0)) {
            _context10.next = 17;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book info not found";
          error.error = "Book info not found with the provided search criteria or you do not have access to the data";
          throw error;
        case 17:
          return _context10.abrupt("return", existingBookInfos);
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x21, _x22, _x23) {
    return _ref10.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/businessLayer/bookReservationBL.js":
/*!************************************************!*\
  !*** ./src/businessLayer/bookReservationBL.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookReservationModel = __webpack_require__(/*! ../models/bookReservationModel */ "./src/models/bookReservationModel.js");
var reservationDetailModel = __webpack_require__(/*! ../models/reservationDetailModel */ "./src/models/reservationDetailModel.js");
var bookReservationDL = __webpack_require__(/*! ../dataAccessLayer/bookReservationDL */ "./src/dataAccessLayer/bookReservationDL.js");
var userAccessibilityOperation = __webpack_require__(/*! ../lib/userAccessibilityOperation */ "./src/lib/userAccessibilityOperation.js");
var idAndPropertyValidationUtil = __webpack_require__(/*! ../lib/idAndPropertyValidationUtil */ "./src/lib/idAndPropertyValidationUtil.js");
var userBL = __webpack_require__(/*! ../businessLayer/userBL */ "./src/businessLayer/userBL.js");
var _require = __webpack_require__(/*! ../lib/commonUtil */ "./src/lib/commonUtil.js"),
  generateReferenceNumber = _require.generateReferenceNumber;

//---------------------- Get methods ----------------------\\
exports.getBookReservations = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(authUser, pagingQuery) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookReservatio, existingBookReservations, totalBookReservation, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookReservations()");
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
          _context.next = 5;
          return bookReservationDL.getBookReservations({
            reservationAccessLevel: roleFilter
          }, pagingQuery);
        case 5:
          _yield$bookReservatio = _context.sent;
          existingBookReservations = _yield$bookReservatio.bookReservations;
          totalBookReservation = _yield$bookReservatio.totalBookReservation;
          if (!(!existingBookReservations || existingBookReservations.length === 0)) {
            _context.next = 14;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book reservation not found";
          error.error = "Book reservation not found or you do not have access to the data";
          throw error;
        case 14:
          return _context.abrupt("return", existingBookReservations);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getBookReservationById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(authUser, bookReservationId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookReservatio2, existingBookReservations, totalBookReservation, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getBookReservationById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(bookReservationId, "book reservation");
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
          _context2.next = 6;
          return bookReservationDL.getBookReservations({
            reservationAccessLevel: roleFilter,
            _id: bookReservationId
          });
        case 6:
          _yield$bookReservatio2 = _context2.sent;
          existingBookReservations = _yield$bookReservatio2.bookReservations;
          totalBookReservation = _yield$bookReservatio2.totalBookReservation;
          if (!(!existingBookReservations || existingBookReservations.length === 0)) {
            _context2.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book reservation not found with the provided book reservation ID";
          error.error = "Book reservation not found by the provided ID (".concat(bookReservationId, ") or you do not have access to the data");
          throw error;
        case 15:
          return _context2.abrupt("return", existingBookReservations);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createBookReservation = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(authUser, newBookReservation, pagingQuery) {
    var thisOperationAccessibilityLevel, error, userData, user, createdBookReservation, _error, reservationDetails, savedDetails;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookReservation()");

          // Property validation
          // Master property validation
          idAndPropertyValidationUtil.checkWrongProperty(newBookReservation, bookReservationModel.schema.paths, "book reservation", ["reservationDetails", "user"]);
          // Detail property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(newBookReservation.reservationDetails, reservationDetailModel.schema.paths, "reservation detail", []);

          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newBookReservation, "book reservation");
          // Check if reservation details are provided
          if (newBookReservation.reservationDetails) {
            _context3.next = 11;
            break;
          }
          error = new Error();
          error.status = 400;
          error.message = "Reservation details are required";
          error.error = "Reservation details are required";
          throw error;
        case 11:
          // Generate reference number if not provided
          newBookReservation.reservationRef || (newBookReservation.reservationRef = generateReferenceNumber());

          // Set reservation date if not provided
          newBookReservation.reservationDate || (newBookReservation.reservationDate = new Date());

          // Check if user already exists by email
          // if exists, get the user ID and update the user
          // if not exists, create a new user and get the user ID
          userData = {
            name: newBookReservation.user.customerName,
            email: newBookReservation.user.customerEmail,
            mobile: newBookReservation.user.customerPhone,
            address: [{
              street: newBookReservation.user.address.street,
              postalCode: newBookReservation.user.address.postalCode,
              city: newBookReservation.user.address.city,
              state: newBookReservation.user.address.state,
              country: newBookReservation.user.address.country
            }]
          };
          _context3.next = 16;
          return userBL.getAndUpdateOrCreateUserBasedOnEmail(authUser, userData);
        case 16:
          user = _context3.sent;
          // Set user ID to new book reservation who brow the book
          newBookReservation.userId = user._id;

          // Create new book reservation and get book reservation ID
          _context3.next = 20;
          return bookReservationDL.createBookReservation(newBookReservation, pagingQuery);
        case 20:
          createdBookReservation = _context3.sent;
          if (createdBookReservation) {
            _context3.next = 27;
            break;
          }
          _error = new Error();
          _error.status = 400;
          _error.message = "Book reservation not created";
          _error.error = "Book reservation not created";
          throw _error;
        case 27:
          newBookReservation._id = createdBookReservation._id;

          // Create detail data and associate it with the book reservation
          reservationDetails = newBookReservation.reservationDetails.map(function (detail) {
            return _objectSpread(_objectSpread({}, detail), {}, {
              bookReservationId: createdBookReservation._id // Assign book reservation ID to each detail
            });
          }); // Insert details data into details table
          _context3.next = 31;
          return reservationDetailModel.insertMany(reservationDetails);
        case 31:
          savedDetails = _context3.sent;
          newBookReservation.reservationDetails = savedDetails;
          return _context3.abrupt("return", newBookReservation);
        case 34:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateBookReservationById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(authUser, bookReservationId, updatableBookReservation) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookReservatio3, existingBookReservations, totalBookReservation, error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          thisOperationAccessibilityLevel = 2;
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBookReservationById()");
          idAndPropertyValidationUtil.checkWrongProperty(updatableBookReservation, bookReservationModel.schema.paths, "book reservation", ["reservationDetails"]);
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
          _context4.next = 6;
          return bookReservationDL.getBookReservations({
            reservationAccessLevel: roleFilter,
            _id: bookReservationId
          });
        case 6:
          _yield$bookReservatio3 = _context4.sent;
          existingBookReservations = _yield$bookReservatio3.bookReservations;
          totalBookReservation = _yield$bookReservatio3.totalBookReservation;
          if (!(!existingBookReservations || existingBookReservations.length === 0)) {
            _context4.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book reservation not found with the provided book reservation ID";
          error.error = "Book reservation not found by the provided ID (".concat(bookReservationId, ") or you do not have access to the data");
          throw error;
        case 15:
          _context4.next = 17;
          return bookReservationDL.updateBookReservationById(bookReservationId, updatableBookReservation);
        case 17:
          return _context4.abrupt("return", _context4.sent);
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteBookReservationById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(authUser, bookReservationId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$bookReservatio4, existingBookReservations, totalBookReservation, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          thisOperationAccessibilityLevel = 2;
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBookReservationById()");
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
          _context5.next = 5;
          return bookReservationDL.getBookReservations({
            reservationAccessLevel: roleFilter,
            _id: bookReservationId
          });
        case 5:
          _yield$bookReservatio4 = _context5.sent;
          existingBookReservations = _yield$bookReservatio4.bookReservations;
          totalBookReservation = _yield$bookReservatio4.totalBookReservation;
          if (!(!existingBookReservations || existingBookReservations.length === 0)) {
            _context5.next = 14;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book reservation not found with the provided book reservation ID";
          error.error = "Book reservation not found by the provided ID (".concat(bookReservationId, ") or you do not have access to the data");
          throw error;
        case 14:
          _context5.next = 16;
          return bookReservationDL.deleteBookReservationById(existingBookReservations[0]._id);
        case 16:
          return _context5.abrupt("return", _context5.sent);
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
exports.searchBookReservation = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(authUser, searchTermsForBookReservation, pagingQuery) {
    var thisOperationAccessibilityLevel, searchBookReservationFilter, _yield$bookReservatio5, existingBookReservations, totalBookReservation, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 10 for all
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "searchBookReservation()");
          idAndPropertyValidationUtil.checkWrongProperty(searchTermsForBookReservation, bookReservationModel.schema.paths, "book reservation", ["reservationDetails"]);
          _context6.next = 5;
          return bookReservationModel.generateSearchOperations(authUser.roleSerial, searchTermsForBookReservation);
        case 5:
          searchBookReservationFilter = _context6.sent;
          _context6.next = 8;
          return bookReservationDL.getBookReservations(searchBookReservationFilter, pagingQuery);
        case 8:
          _yield$bookReservatio5 = _context6.sent;
          existingBookReservations = _yield$bookReservatio5.bookReservations;
          totalBookReservation = _yield$bookReservatio5.totalBookReservation;
          if (!(!existingBookReservations || existingBookReservations.length === 0)) {
            _context6.next = 17;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Book reservation not found";
          error.error = "Book reservation not found with the provided search criteria or you do not have access to the data";
          throw error;
        case 17:
          return _context6.abrupt("return", existingBookReservations);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x13, _x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

// ---------------------- Extra methods ----------------------\\
exports.getAvailableBook = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(authUser, pagingQuery) {
    var thisOperationAccessibilityLevel, defaultPagingQuery, applyPagingQuery, startIndex;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          thisOperationAccessibilityLevel = 2;
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookInfo.bookTitle',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize; //const sortedQuery = {};
          //sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
          _context7.next = 6;
          return reservationDetailModel.aggregate([{
            $lookup: {
              from: "bookreservations",
              localField: "bookReservationId",
              foreignField: "_id",
              as: "bookReservation"
            }
          }, {
            $unwind: "$bookReservation"
          }, {
            $match: {
              "bookReservation.reservationStatusNum": 1
            }
          }, {
            $group: {
              _id: "$bookInfoId",
              totalReserved: {
                $sum: "$quantity"
              }
            }
          }, {
            $lookup: {
              from: "bookinfos",
              localField: "_id",
              foreignField: "_id",
              as: "bookInfo"
            }
          }, {
            $unwind: "$bookInfo"
          }, {
            $lookup: {
              from: "bookcategories",
              localField: "bookInfo.bookCategoryId",
              foreignField: "_id",
              as: "bookCategory"
            }
          }, {
            $unwind: {
              path: "$bookCategory",
              preserveNullAndEmptyArrays: true // Preserve documents that don't have a matching category
            }
          }, {
            $project: {
              totalReserved: 1,
              bookInfoId: 1,
              "bookInfo.bookTitle": 1,
              "bookInfo.stock": 1,
              "bookInfo.bookCategoryId": 1,
              "bookInfo.author": 1,
              "bookInfo.ISBN": 1,
              "bookInfo.publisher": 1,
              "bookInfo.publishDate": 1,
              "bookInfo.language": 1,
              "bookInfo.coverImage": 1,
              "bookInfo.note": 1,
              "bookCategory.bookCategoryName": 1,
              // Include the category data in the projection
              remainingStock: {
                $subtract: ["$bookInfo.stock", "$totalReserved"]
              }
            }
          }, {
            $match: {
              remainingStock: {
                $gt: 0
              } // Filter where remainingStock is greater than 0
            }
          }, {
            $sort: _defineProperty({}, defaultPagingQuery.sortBy, applyPagingQuery.sortOrder === 'desc' ? -1 : 1)
          }, {
            $skip: startIndex
          }, {
            $limit: applyPagingQuery.pageSize
          }]);
        case 6:
          return _context7.abrupt("return", _context7.sent);
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getReservedBook = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(authUser, pagingQuery) {
    var thisOperationAccessibilityLevel, defaultPagingQuery, applyPagingQuery, startIndex;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          thisOperationAccessibilityLevel = 2;
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookInfo.bookTitle',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize; //const sortedQuery = {};
          //sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
          _context8.next = 6;
          return reservationDetailModel.aggregate([{
            $lookup: {
              from: "bookreservations",
              localField: "bookReservationId",
              foreignField: "_id",
              as: "bookReservation"
            }
          }, {
            $unwind: "$bookReservation"
          }, {
            $match: {
              "bookReservation.reservationStatusNum": 1
            }
          }, {
            $group: {
              _id: "$bookInfoId",
              totalReserved: {
                $sum: "$quantity"
              }
            }
          }, {
            $lookup: {
              from: "bookinfos",
              localField: "_id",
              foreignField: "_id",
              as: "bookInfo"
            }
          }, {
            $unwind: "$bookInfo"
          }, {
            $lookup: {
              from: "bookcategories",
              localField: "bookInfo.bookCategoryId",
              foreignField: "_id",
              as: "bookCategory"
            }
          }, {
            $unwind: {
              path: "$bookCategory",
              preserveNullAndEmptyArrays: true // Preserve documents that don't have a matching category
            }
          }, {
            $project: {
              totalReserved: 1,
              bookInfoId: 1,
              "bookInfo.bookTitle": 1,
              "bookInfo.stock": 1,
              "bookInfo.bookCategoryId": 1,
              "bookInfo.author": 1,
              "bookInfo.ISBN": 1,
              "bookInfo.publisher": 1,
              "bookInfo.publishDate": 1,
              "bookInfo.language": 1,
              "bookInfo.coverImage": 1,
              "bookInfo.note": 1,
              "bookCategory.bookCategoryName": 1,
              // Include the category data in the projection
              remainingStock: {
                $subtract: ["$bookInfo.stock", "$totalReserved"]
              }
            }
          }, {
            $match: {
              remainingStock: {
                $eq: 0
              } // Filter where remainingStock is greater than 0
            }
          }, {
            $sort: _defineProperty({}, defaultPagingQuery.sortBy, applyPagingQuery.sortOrder === 'desc' ? -1 : 1)
          }, {
            $skip: startIndex
          }, {
            $limit: applyPagingQuery.pageSize
          }]);
        case 6:
          return _context8.abrupt("return", _context8.sent);
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/businessLayer/enumTableBL.js":
/*!******************************************!*\
  !*** ./src/businessLayer/enumTableBL.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var enumTableModel = __webpack_require__(/*! ../models/enumTableModel */ "./src/models/enumTableModel.js");
var enumTableDL = __webpack_require__(/*! ../dataAccessLayer/enumTableDL */ "./src/dataAccessLayer/enumTableDL.js");
var userAccessibilityOperation = __webpack_require__(/*! ../lib/userAccessibilityOperation */ "./src/lib/userAccessibilityOperation.js");
var idAndPropertyValidationUtil = __webpack_require__(/*! ../lib/idAndPropertyValidationUtil */ "./src/lib/idAndPropertyValidationUtil.js");

//---------------------- Get methods ----------------------\\
exports.getEnumTables = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(authUser, pagingQuery) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$enumTableDL$ge, existingEnumTables, totalEnumTable, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getEnumTables()");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context.next = 5;
          return enumTableDL.getEnumTables({
            enumTableAccessLevel: roleFilter
          }, pagingQuery);
        case 5:
          _yield$enumTableDL$ge = _context.sent;
          existingEnumTables = _yield$enumTableDL$ge.enumTables;
          totalEnumTable = _yield$enumTableDL$ge.totalEnumTable;
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context.next = 14;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Enum table not found";
          error.error = "Enum table not found or you do not have access to the data";
          throw error;
        case 14:
          return _context.abrupt("return", existingEnumTables);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getEnumTableById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(authUser, enumTableId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$enumTableDL$ge2, existingEnumTables, totalEnumTable, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getEnumTableById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(enumTableId, "enum table");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context2.next = 6;
          return enumTableDL.getEnumTables({
            enumTableAccessLevel: roleFilter,
            _id: enumTableId
          });
        case 6:
          _yield$enumTableDL$ge2 = _context2.sent;
          existingEnumTables = _yield$enumTableDL$ge2.enumTables;
          totalEnumTable = _yield$enumTableDL$ge2.totalEnumTable;
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context2.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Enum table not found with the provided enum table ID";
          error.error = "Enum table not found by the provided ID (".concat(enumTableId, ") or you do not have access to the data");
          throw error;
        case 15:
          return _context2.abrupt("return", existingEnumTables);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getEnumTablesByIds = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(authUser, enumTableIds, pagingQuery) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error, roleFilter, _yield$enumTableDL$ge3, existingEnumTables, totalEnumTable, presentIds, absentIds, wrongIds, _error2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 1 for all
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkEnumTables()");

          // Valid and invalid IDs separation
          _idAndPropertyValidat = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(enumTableIds, "enum table IDs"), validIds = _idAndPropertyValidat.validIds, invalidIds = _idAndPropertyValidat.invalidIds, duplicateIds = _idAndPropertyValidat.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context3.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context3.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error = new Error();
          _error.status = 400;
          _error.message = "Invalid enum table ids";
          _error.error = "All enum table ids (".concat(displayInvalidIds, ") are invalid, no enum table found by the provided IDs");
          throw _error;
        case 18:
          _context3.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context3.sent;
          _context3.next = 23;
          return enumTableDL.getEnumTables({
            enumTableAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          }, pagingQuery);
        case 23:
          _yield$enumTableDL$ge3 = _context3.sent;
          existingEnumTables = _yield$enumTableDL$ge3.enumTables;
          totalEnumTable = _yield$enumTableDL$ge3.totalEnumTable;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingEnumTables.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context3.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error2 = new Error();
          _error2.status = 404;
          _error2.message = "Enum table not found with the provided enum table IDs";
          _error2.error = "Enum table not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error2;
        case 36:
          return _context3.abrupt("return", {
            enumTables: existingEnumTables,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 37:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createEnumTable = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(authUser, newEnumTable) {
    var thisOperationAccessibilityLevel;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createEnumTable()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(newEnumTable, enumTableModel.schema.paths, "enum table", []);
          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newEnumTable, "enum table");
          _context4.next = 6;
          return enumTableDL.createEnumTable(newEnumTable);
        case 6:
          return _context4.abrupt("return", _context4.sent);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
exports.createBulkEnumTable = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(authUser, newEnumTables) {
    var thisOperationAccessibilityLevel;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBulkEnumTable()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(newEnumTables, enumTableModel.schema.paths, "enum table", []);
          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevelOfList(authUser, newEnumTables, "enum table");

          // create new enum tables in bulk
          _context5.next = 6;
          return enumTableDL.createBulkEnumTable(newEnumTables);
        case 6:
          return _context5.abrupt("return", _context5.sent);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateEnumTableById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(authUser, enumTableId, updatableEnumTable) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$enumTableDL$ge4, existingEnumTables, totalEnumTable, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateEnumTableById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(enumTableId, "enum table");
          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(updatableEnumTable, enumTableModel.schema.paths, "enum table", []);

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context6.next = 7;
          return enumTableDL.getEnumTables({
            enumTableAccessLevel: roleFilter,
            _id: enumTableId
          });
        case 7:
          _yield$enumTableDL$ge4 = _context6.sent;
          existingEnumTables = _yield$enumTableDL$ge4.enumTables;
          totalEnumTable = _yield$enumTableDL$ge4.totalEnumTable;
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context6.next = 16;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Enum table not found with the provided enum table ID";
          error.error = "Enum table not found by the provided ID (".concat(enumTableId, ") or you do not have access to the data");
          throw error;
        case 16:
          _context6.next = 18;
          return enumTableDL.updateEnumTableById(enumTableId, updatableEnumTable);
        case 18:
          return _context6.abrupt("return", _context6.sent);
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateBulkEnumTables = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(authUser, updatableEnumTables) {
    var thisOperationAccessibilityLevel, enumTableIds, _idAndPropertyValidat2, validIds, invalidIds, displayInvalidIds, error, roleFilter, _yield$enumTableDL$ge5, existingEnumTables, totalEnumTable, presentIds, absentIds, wrongIds, _error3, validUpdatableEnumTables, bulkUpdateOperations, updatedEnumTables;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBulkEnumTables()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(updatableEnumTables, enumTableModel.schema.paths, "enum table", []);

          // IDs validation and separation
          enumTableIds = updatableEnumTables.map(function (user) {
            return user._id;
          });
          _idAndPropertyValidat2 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(enumTableIds, "enum table IDs"), validIds = _idAndPropertyValidat2.validIds, invalidIds = _idAndPropertyValidat2.invalidIds;
          if (!(validIds.length === 0)) {
            _context7.next = 12;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          error = new Error();
          error.status = 400;
          error.message = "Invalid enum table ids";
          error.error = "All enum table ids (".concat(displayInvalidIds, ") are invalid, no enum table found by the provided IDs");
          throw error;
        case 12:
          _context7.next = 14;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 14:
          roleFilter = _context7.sent;
          _context7.next = 17;
          return enumTableDL.getEnumTables({
            enumTableAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 17:
          _yield$enumTableDL$ge5 = _context7.sent;
          existingEnumTables = _yield$enumTableDL$ge5.enumTables;
          totalEnumTable = _yield$enumTableDL$ge5.totalEnumTable;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingEnumTables.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context7.next = 30;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error3 = new Error();
          _error3.status = 404;
          _error3.message = "Enum table not found with the provided enum table IDs";
          _error3.error = "Enum table not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error3;
        case 30:
          // Valid data
          validUpdatableEnumTables = updatableEnumTables.filter(function (user) {
            return presentIds.includes(user._id);
          }); // Bulk operation generator
          _context7.next = 33;
          return enumTableModel.generateBulkUpdateOperations(validUpdatableEnumTables);
        case 33:
          bulkUpdateOperations = _context7.sent;
          _context7.next = 36;
          return enumTableDL.updateBulkEnumTables(bulkUpdateOperations);
        case 36:
          updatedEnumTables = _context7.sent;
          return _context7.abrupt("return", {
            enumTable: updatedEnumTables,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 38:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteEnumTableById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(authUser, enumTableId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$enumTableDL$ge6, existingEnumTables, totalEnumTable, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteEnumTableById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(enumTableId, "enum table");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context8.next = 6;
          return enumTableDL.getEnumTables({
            enumTableAccessLevel: roleFilter,
            _id: enumTableId
          });
        case 6:
          _yield$enumTableDL$ge6 = _context8.sent;
          existingEnumTables = _yield$enumTableDL$ge6.enumTables;
          totalEnumTable = _yield$enumTableDL$ge6.totalEnumTable;
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context8.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Enum table not found with the provided enum table ID";
          error.error = "Enum table not found by the provided ID (".concat(enumTableId, ") or you do not have access to the data");
          throw error;
        case 15:
          _context8.next = 17;
          return enumTableDL.deleteEnumTableById(existingEnumTables[0]._id);
        case 17:
          return _context8.abrupt("return", _context8.sent);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteBulkEnumTables = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(authUser, enumTableIds) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat3, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error4, roleFilter, _yield$enumTableDL$ge7, existingEnumTables, totalEnumTable, presentIds, absentIds, wrongIds, _error5, bulkDeleteOperations, deletedEnumTables;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkEnumTables()");

          // Valid and invalid IDs separation
          _idAndPropertyValidat3 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(enumTableIds, "enum table IDs"), validIds = _idAndPropertyValidat3.validIds, invalidIds = _idAndPropertyValidat3.invalidIds, duplicateIds = _idAndPropertyValidat3.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context9.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context9.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error4 = new Error();
          _error4.status = 400;
          _error4.message = "Invalid enum table IDs";
          _error4.error = "All enum table ids (".concat(displayInvalidIds, ") are invalid, no enum table found by the provided IDs");
          throw _error4;
        case 18:
          _context9.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context9.sent;
          _context9.next = 23;
          return enumTableDL.getEnumTables({
            enumTableAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 23:
          _yield$enumTableDL$ge7 = _context9.sent;
          existingEnumTables = _yield$enumTableDL$ge7.enumTables;
          totalEnumTable = _yield$enumTableDL$ge7.totalEnumTable;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingEnumTables.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context9.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error5 = new Error();
          _error5.status = 404;
          _error5.message = "Enum table not found with the provided enum table IDs";
          _error5.error = "Enum table not found with the provided enum table IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error5;
        case 36:
          _context9.next = 38;
          return enumTableModel.generateBulkDeleteOperations(existingEnumTables);
        case 38:
          bulkDeleteOperations = _context9.sent;
          _context9.next = 41;
          return enumTableDL.deleteBulkEnumTable(bulkDeleteOperations);
        case 41:
          deletedEnumTables = _context9.sent;
          return _context9.abrupt("return", {
            enumTable: deletedEnumTables,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 43:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
exports.searchEnumTable = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(authUser, searchTermsForEnumTable, pagingQuery) {
    var thisOperationAccessibilityLevel, searchEnumTableFilter, _yield$enumTableDL$ge8, existingEnumTables, totalEnumTable, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 10 for all
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "searchEnumTable()");
          // ID and property validation
          idAndPropertyValidationUtil.checkWrongProperty(searchTermsForEnumTable, enumTableModel.schema.paths, "enum table", []);

          // Filter generator
          _context10.next = 5;
          return enumTableModel.generateSearchOperations(authUser.roleSerial, searchTermsForEnumTable);
        case 5:
          searchEnumTableFilter = _context10.sent;
          _context10.next = 8;
          return enumTableDL.getEnumTables(searchEnumTableFilter, pagingQuery);
        case 8:
          _yield$enumTableDL$ge8 = _context10.sent;
          existingEnumTables = _yield$enumTableDL$ge8.enumTables;
          totalEnumTable = _yield$enumTableDL$ge8.totalEnumTable;
          if (!(!existingEnumTables || existingEnumTables.length === 0)) {
            _context10.next = 17;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "Enum table not found";
          error.error = "Enum table not found with the provided search criteria or you do not have access to the data";
          throw error;
        case 17:
          return _context10.abrupt("return", existingEnumTables);
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x21, _x22, _x23) {
    return _ref10.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/businessLayer/userBL.js":
/*!*************************************!*\
  !*** ./src/businessLayer/userBL.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["password"],
  _excluded2 = ["password"],
  _excluded3 = ["password"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var userModel = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
var userDL = __webpack_require__(/*! ../dataAccessLayer/userDL */ "./src/dataAccessLayer/userDL.js");
var userAccessibilityOperation = __webpack_require__(/*! ../lib/userAccessibilityOperation */ "./src/lib/userAccessibilityOperation.js");
var idAndPropertyValidationUtil = __webpack_require__(/*! ../lib/idAndPropertyValidationUtil */ "./src/lib/idAndPropertyValidationUtil.js");

//---------------------- Get methods ----------------------\\
exports.getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(authUser, pagingQuery) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$userDL$getUser, existingUsers, totalUser, error, usersWithoutPassword;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getUsers()");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context.next = 5;
          return userDL.getUsers({
            roleSerial: roleFilter
          }, pagingQuery);
        case 5:
          _yield$userDL$getUser = _context.sent;
          existingUsers = _yield$userDL$getUser.users;
          totalUser = _yield$userDL$getUser.totalUser;
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context.next = 14;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "User not found";
          error.error = "User not found or you do not have access to the data";
          throw error;
        case 14:
          // Exclude password field from each user object
          usersWithoutPassword = existingUsers.map(function (user) {
            var _user$toObject = user.toObject(),
              password = _user$toObject.password,
              userWithoutPassword = _objectWithoutProperties(_user$toObject, _excluded);
            return userWithoutPassword;
          });
          return _context.abrupt("return", usersWithoutPassword);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getUserById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(authUser, userId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$userDL$getUser2, existingUsers, totalUser, error, usersWithoutPassword;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "getUserById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(userId, "user");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Get data
          _context2.next = 6;
          return userDL.getUsers({
            roleSerial: roleFilter,
            _id: userId
          });
        case 6:
          _yield$userDL$getUser2 = _context2.sent;
          existingUsers = _yield$userDL$getUser2.users;
          totalUser = _yield$userDL$getUser2.totalUser;
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context2.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "user not found with the provided user ID";
          error.error = "user not found by the provided ID (".concat(userId, ") or you do not have access to the data");
          throw error;
        case 15:
          // Exclude password field from each user object
          usersWithoutPassword = existingUsers.map(function (user) {
            var _user$toObject2 = user.toObject(),
              password = _user$toObject2.password,
              userWithoutPassword = _objectWithoutProperties(_user$toObject2, _excluded2);
            return userWithoutPassword;
          });
          return _context2.abrupt("return", usersWithoutPassword);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getUsersByIds = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(authUser, userIds, pagingQuery) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error, roleFilter, _yield$userDL$getUser3, existingUsers, totalUser, presentIds, absentIds, wrongIds, _error2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          thisOperationAccessibilityLevel = 10; // 1 for all
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkUsers()");

          // Valid, Invalid and Duplicate IDs separation
          _idAndPropertyValidat = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userIds, "user IDs"), validIds = _idAndPropertyValidat.validIds, invalidIds = _idAndPropertyValidat.invalidIds, duplicateIds = _idAndPropertyValidat.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context3.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context3.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error = new Error();
          _error.status = 400;
          _error.message = "Invalid user ids";
          _error.error = "All user ids (".concat(displayInvalidIds, ") are invalid, no user found by the provided IDs");
          throw _error;
        case 18:
          _context3.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context3.sent;
          _context3.next = 23;
          return userDL.getUsers({
            userAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          }, pagingQuery);
        case 23:
          _yield$userDL$getUser3 = _context3.sent;
          existingUsers = _yield$userDL$getUser3.users;
          totalUser = _yield$userDL$getUser3.totalUser;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingUsers.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context3.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error2 = new Error();
          _error2.status = 404;
          _error2.message = "User not found with the provided user IDs";
          _error2.error = "User not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error2;
        case 36:
          return _context3.abrupt("return", {
            users: existingUsers,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds,
            duplicateIds: duplicateIds
          });
        case 37:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(authUser, newUser) {
    var thisOperationAccessibilityLevel, createdUser, _createdUser$toObject, password, userWithoutPassword;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // This operation access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createUser()");

          // Property validation for given input object
          idAndPropertyValidationUtil.checkWrongProperty(newUser, userModel.schema.paths, "user", []);

          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, newUser, "user");

          // create new user
          _context4.next = 6;
          return userDL.createUser(newUser);
        case 6:
          createdUser = _context4.sent;
          // Exclude password field from each user object
          _createdUser$toObject = createdUser.toObject(), password = _createdUser$toObject.password, userWithoutPassword = _objectWithoutProperties(_createdUser$toObject, _excluded3);
          return _context4.abrupt("return", userWithoutPassword);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
exports.createBulkUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(authUser, newUsers) {
    var thisOperationAccessibilityLevel;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBulkUser()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(newUsers, userModel.schema.paths, "user", []);
          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevelOfList(authUser, newUsers, "user");

          // create new users in bulk
          _context5.next = 6;
          return userDL.createBulkUser(newUsers);
        case 6:
          return _context5.abrupt("return", _context5.sent);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateUserById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(authUser, userId, updatableUser) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$userDL$getUser4, existingUsers, totalUser, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateUserById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(userId, "user");
          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(updatableUser, userModel.schema.paths, "user", []);

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Check data existence
          _context6.next = 7;
          return userDL.getUsers({
            roleSerial: roleFilter,
            _id: userId
          });
        case 7:
          _yield$userDL$getUser4 = _context6.sent;
          existingUsers = _yield$userDL$getUser4.users;
          totalUser = _yield$userDL$getUser4.totalUser;
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context6.next = 16;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "User not found with the provided user ID";
          error.error = "User not found by the provided ID (".concat(userId, ") or you do not have access to the data");
          throw error;
        case 16:
          _context6.next = 18;
          return userDL.updateUserById(userId, updatableUser);
        case 18:
          return _context6.abrupt("return", _context6.sent);
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateBulkUsers = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(authUser, updatableUsers) {
    var thisOperationAccessibilityLevel, userIds, _idAndPropertyValidat2, validIds, invalidIds, displayInvalidIds, error, roleFilter, _yield$userDL$getUser5, existingUsers, totalUser, presentIds, absentIds, wrongIds, _error3, validUpdatableUsers, bulkUpdateOperations, updatedUsers;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "updateBulkUsers()");
          // Property validation
          idAndPropertyValidationUtil.checkWrongPropertyOfList(updatableUsers, userModel.schema.paths, "user", []);

          // ID validation
          userIds = updatableUsers.map(function (user) {
            return user._id;
          });
          _idAndPropertyValidat2 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userIds, "user IDs"), validIds = _idAndPropertyValidat2.validIds, invalidIds = _idAndPropertyValidat2.invalidIds;
          if (!(validIds.length === 0)) {
            _context7.next = 12;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          error = new Error();
          error.status = 400;
          error.message = "Invalid user ids";
          error.error = "All user ids (".concat(displayInvalidIds, ") are invalid, no user found by the provided IDs");
          throw error;
        case 12:
          _context7.next = 14;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 14:
          roleFilter = _context7.sent;
          _context7.next = 17;
          return userDL.getUsers({
            userAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 17:
          _yield$userDL$getUser5 = _context7.sent;
          existingUsers = _yield$userDL$getUser5.users;
          totalUser = _yield$userDL$getUser5.totalUser;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingUsers.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context7.next = 30;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error3 = new Error();
          _error3.status = 404;
          _error3.message = "User not found with the provided user IDs";
          _error3.error = "User not found by the provided IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error3;
        case 30:
          // Valid data
          validUpdatableUsers = updatableUsers.filter(function (user) {
            return presentIds.includes(user._id);
          }); // Bulk operation generator
          _context7.next = 33;
          return userModel.generateBulkUpdateOperations(validUpdatableUsers);
        case 33:
          bulkUpdateOperations = _context7.sent;
          _context7.next = 36;
          return userDL.updateBulkUsers(bulkUpdateOperations);
        case 36:
          updatedUsers = _context7.sent;
          return _context7.abrupt("return", {
            user: updatedUsers,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 38:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteUserById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(authUser, userId) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$userDL$getUser6, existingUsers, totalUser, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteUserById()");
          // ID validation
          idAndPropertyValidationUtil.checkWrongId(userId, "user");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Check data existence
          _context8.next = 6;
          return userDL.getUsers({
            roleSerial: roleFilter,
            _id: userId
          });
        case 6:
          _yield$userDL$getUser6 = _context8.sent;
          existingUsers = _yield$userDL$getUser6.users;
          totalUser = _yield$userDL$getUser6.totalUser;
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context8.next = 15;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "User not found with the provided user ID";
          error.error = "User not found by the provided ID (".concat(userId, ") or you do not have access to the data");
          throw error;
        case 15:
          _context8.next = 17;
          return userDL.deleteUserById(existingUsers[0]._id);
        case 17:
          return _context8.abrupt("return", _context8.sent);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteBulkUsers = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(authUser, userIds) {
    var thisOperationAccessibilityLevel, _idAndPropertyValidat3, validIds, invalidIds, duplicateIds, pluralSuffix, duplicateIdsString, error, displayInvalidIds, _error4, roleFilter, _yield$userDL$getUser7, existingUsers, totalUser, presentIds, absentIds, wrongIds, _error5, bulkDeleteOperations, deletedUsers;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "deleteBulkUsers()");

          // Valid, Invalid and Duplicate IDs separation
          _idAndPropertyValidat3 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userIds, "user IDs"), validIds = _idAndPropertyValidat3.validIds, invalidIds = _idAndPropertyValidat3.invalidIds, duplicateIds = _idAndPropertyValidat3.duplicateIds; // Check for duplicate IDs
          if (!(duplicateIds && duplicateIds.length > 0)) {
            _context9.next = 11;
            break;
          }
          pluralSuffix = duplicateIds.length > 1 ? 's' : '';
          duplicateIdsString = JSON.stringify(duplicateIds);
          error = new Error();
          error.status = 400;
          error.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          error.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
          throw error;
        case 11:
          if (!(validIds.length === 0)) {
            _context9.next = 18;
            break;
          }
          displayInvalidIds = invalidIds.map(function (item) {
            return String(item);
          });
          _error4 = new Error();
          _error4.status = 400;
          _error4.message = "Invalid user IDs";
          _error4.error = "All user ids (".concat(displayInvalidIds, ") are invalid, no user found by the provided IDs");
          throw _error4;
        case 18:
          _context9.next = 20;
          return userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial);
        case 20:
          roleFilter = _context9.sent;
          _context9.next = 23;
          return userDL.getUsers({
            userAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          });
        case 23:
          _yield$userDL$getUser7 = _context9.sent;
          existingUsers = _yield$userDL$getUser7.users;
          totalUser = _yield$userDL$getUser7.totalUser;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingUsers.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context9.next = 36;
            break;
          }
          wrongIds = invalidIds.concat(absentIds);
          _error5 = new Error();
          _error5.status = 404;
          _error5.message = "User not found with the provided user IDs";
          _error5.error = "User not found with the provided user IDs (".concat(wrongIds, ") or you do not have access to the data");
          throw _error5;
        case 36:
          _context9.next = 38;
          return userModel.generateBulkDeleteOperations(existingUsers);
        case 38:
          bulkDeleteOperations = _context9.sent;
          _context9.next = 41;
          return userDL.deleteBulkUser(bulkDeleteOperations);
        case 41:
          deletedUsers = _context9.sent;
          return _context9.abrupt("return", {
            user: deletedUsers,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds,
            duplicateIds: duplicateIds
          });
        case 43:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
exports.searchUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(authUser, searchTermsForUser, pagingQuery) {
    var thisOperationAccessibilityLevel, searchUserFilter, _yield$userDL$getUser8, existingUsers, totalUser, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // Access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createBookReservation()");

          // Property validation
          idAndPropertyValidationUtil.checkWrongProperty(searchTermsForUser, userModel.schema.paths, "user", []);

          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, searchTermsForUser, "user");

          // Filter generator
          _context10.next = 6;
          return userModel.generateSearchOperations(authUser.roleSerial, searchTermsForUser);
        case 6:
          searchUserFilter = _context10.sent;
          _context10.next = 9;
          return userDL.getUsers(searchUserFilter, pagingQuery);
        case 9:
          _yield$userDL$getUser8 = _context10.sent;
          existingUsers = _yield$userDL$getUser8.users;
          totalUser = _yield$userDL$getUser8.totalUser;
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context10.next = 18;
            break;
          }
          error = new Error();
          error.status = 404;
          error.message = "User not found";
          error.error = "User not found with the provided search criteria or you do not have access to the data";
          throw error;
        case 18:
          return _context10.abrupt("return", existingUsers);
        case 19:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x21, _x22, _x23) {
    return _ref10.apply(this, arguments);
  };
}();

// Specific operations - able to search by user role, category etc.

// Authentication
exports.registerUser = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(user) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          user.role = 'user';
          _context11.next = 3;
          return userDL.createUser(user);
        case 3:
          return _context11.abrupt("return", _context11.sent);
        case 4:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x24) {
    return _ref11.apply(this, arguments);
  };
}();

// Special user operations
exports.getAndUpdateOrCreateUserBasedOnEmail = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(authUser, user) {
    var thisOperationAccessibilityLevel, roleFilter, _yield$userDL$getUser9, existingUsers, totalUser, createdUser, updatedUser;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          thisOperationAccessibilityLevel = 2; // This operation access validation
          userAccessibilityOperation.checkOperationAccessibilityByRole(authUser.roleSerial, thisOperationAccessibilityLevel, "createUser()");

          // Property validation for given input object
          idAndPropertyValidationUtil.checkWrongProperty(user, userModel.schema.paths, "user", []);

          // Data Access validation
          idAndPropertyValidationUtil.checkWrongAccessLevel(authUser, user, "user");

          // Filter generator
          roleFilter = userAccessibilityOperation.getDataAccessibilityRoleFilter(authUser.roleSerial); // Check data existence
          _context12.next = 7;
          return userDL.getUsers({
            roleSerial: roleFilter,
            email: user.email
          });
        case 7:
          _yield$userDL$getUser9 = _context12.sent;
          existingUsers = _yield$userDL$getUser9.users;
          totalUser = _yield$userDL$getUser9.totalUser;
          if (!(!existingUsers || existingUsers.length === 0)) {
            _context12.next = 17;
            break;
          }
          user.roleSerial = 10;
          user.password = '12345';
          _context12.next = 15;
          return userDL.createUser(user);
        case 15:
          createdUser = _context12.sent;
          return _context12.abrupt("return", createdUser);
        case 17:
          _context12.next = 19;
          return userDL.updateUserById(existingUsers[0]._id, user);
        case 19:
          updatedUser = _context12.sent;
          return _context12.abrupt("return", updatedUser);
        case 21:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function (_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/businessLayer/userRoleBL.js":
/*!*****************************************!*\
  !*** ./src/businessLayer/userRoleBL.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//const getAuthUser = require('../lib/getAuthUser');
var userRoleModel = __webpack_require__(/*! ../models/userRoleModel */ "./src/models/userRoleModel.js");
var userRoleDL = __webpack_require__(/*! ../dataAccessLayer/userRoleDL */ "./src/dataAccessLayer/userRoleDL.js");
var userAccessibilityOperation = __webpack_require__(/*! ../lib/userAccessibilityOperation */ "./src/lib/userAccessibilityOperation.js");
var idAndPropertyValidationUtil = __webpack_require__(/*! ../lib/idAndPropertyValidationUtil */ "./src/lib/idAndPropertyValidationUtil.js");

//---------------------- Get methods ----------------------\\
exports.getUserRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(jwtToken) {
    var thisOperationAccessibilityLevel, authUser, roleFilter, filter;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          thisOperationAccessibilityLevel = 1; // 1 for Admin only
          _context.next = 3;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, thisOperationAccessibilityLevel);
        case 3:
          authUser = _context.sent;
          _context.next = 6;
          return userRoleModel.generateSearchOperations(authUser.role, thisOperationAccessibilityLevel);
        case 6:
          roleFilter = _context.sent;
          filter = {
            userRoleAccessLevel: roleFilter
          };
          _context.next = 10;
          return userRoleDL.getUserRoles(filter);
        case 10:
          return _context.abrupt("return", _context.sent);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getUserRoleById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(jwtToken, userRoleId) {
    var authUser, roleFilter, filter, userRole, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);
        case 2:
          authUser = _context2.sent;
          idAndPropertyValidationUtil.checkMongoDbIdType(userRoleId);
          _context2.next = 6;
          return userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
        case 6:
          roleFilter = _context2.sent;
          filter = {
            userRoleAccessLevel: roleFilter,
            _id: userRoleId
          };
          _context2.next = 10;
          return userRoleDL.getUserRoles(filter);
        case 10:
          userRole = _context2.sent;
          if (userRole) {
            _context2.next = 15;
            break;
          }
          error = new Error("UserRole not found");
          error.status = 404;
          throw error;
        case 15:
          return _context2.abrupt("return", userRole);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getUserRolesByIds = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(jwtToken, ids) {
    var authUser, _idAndPropertyValidat, validIds, invalidIds, error, roleFilter, filter, existingUserRoles, presentIds, absentIds, _error;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);
        case 2:
          authUser = _context3.sent;
          _idAndPropertyValidat = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(ids), validIds = _idAndPropertyValidat.validIds, invalidIds = _idAndPropertyValidat.invalidIds;
          if (!(validIds.length === 0)) {
            _context3.next = 8;
            break;
          }
          error = new Error('Invalid user ids');
          error.status = 500;
          throw error;
        case 8:
          _context3.next = 10;
          return userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
        case 10:
          roleFilter = _context3.sent;
          filter = {
            userRoleAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          };
          _context3.next = 14;
          return userRoleDL.getUserRoles(filter);
        case 14:
          existingUserRoles = _context3.sent;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingUserRoles.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingUserRoles || existingUserRoles.length === 0)) {
            _context3.next = 22;
            break;
          }
          _error = new Error('User role(s) not found');
          _error.status = 500;
          throw _error;
        case 22:
          return _context3.abrupt("return", {
            users: existingUserRoles,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 23:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createUserRole = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(jwtToken, newUserRole) {
    var error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);
        case 2:
          if (newUserRole) {
            _context4.next = 6;
            break;
          }
          error = new Error("Please provide a valid userRole");
          error.status = 400;
          throw error;
        case 6:
          _context4.next = 8;
          return userRoleDL.createUserRole(newUserRole);
        case 8:
          return _context4.abrupt("return", _context4.sent);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
exports.createBulkUserRole = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(jwtToken, userRoles) {
    var error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);
        case 2:
          if (!(!userRoles || !userRoles.length)) {
            _context5.next = 6;
            break;
          }
          error = new Error("Please provide a valid userRoles");
          error.status = 400;
          throw error;
        case 6:
          _context5.next = 8;
          return userRoleDL.createBulkUserRole(user);
        case 8:
          return _context5.abrupt("return", _context5.sent);
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateUserRoleById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(jwtToken, userRoleId, user) {
    var authUser, roleFilter, filter, existingUserRole, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);
        case 2:
          authUser = _context6.sent;
          idAndPropertyValidationUtil.checkMongoDbIdType(userRoleId);
          _context6.next = 6;
          return userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
        case 6:
          roleFilter = _context6.sent;
          filter = {
            userRoleAccessLevel: roleFilter
          };
          _context6.next = 10;
          return userRoleDL.getUserRoles({
            filter: filter,
            _id: userRoleId
          });
        case 10:
          existingUserRole = _context6.sent;
          if (existingUserRole) {
            _context6.next = 15;
            break;
          }
          error = new Error('UserRole not found');
          error.status = 404;
          throw error;
        case 15:
          _context6.next = 17;
          return userRoleDL.updateUserRoleById(userRoleId, user);
        case 17:
          return _context6.abrupt("return", _context6.sent);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x10, _x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateBulkUserRoles = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(jwtToken, updateUserRoles) {
    var authUser, error, userRoleIds, _idAndPropertyValidat2, validIds, invalidIds, _error2, roleFilter, filter, existingUserRoles, presentIds, absentIds, _error3, bulkUpdateOperations, updatedUserRoles;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);
        case 2:
          authUser = _context7.sent;
          if (updateUserRoles) {
            _context7.next = 7;
            break;
          }
          error = new Error("Please provide valid userRoles");
          error.status = 400;
          throw error;
        case 7:
          userRoleIds = updateUserRoles.map(function (user) {
            return user._id;
          });
          _idAndPropertyValidat2 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userRoleIds), validIds = _idAndPropertyValidat2.validIds, invalidIds = _idAndPropertyValidat2.invalidIds;
          if (!(validIds.length === 0)) {
            _context7.next = 13;
            break;
          }
          _error2 = new Error('Invalid user ids');
          _error2.status = 500;
          throw _error2;
        case 13:
          _context7.next = 15;
          return userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
        case 15:
          roleFilter = _context7.sent;
          filter = {
            userRoleAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          };
          _context7.next = 19;
          return userRoleDL.getUserRoles(filter);
        case 19:
          existingUserRoles = _context7.sent;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingUserRoles.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingUserRoles || existingUserRoles.length === 0)) {
            _context7.next = 27;
            break;
          }
          _error3 = new Error('User role(s) not found');
          _error3.status = 500;
          throw _error3;
        case 27:
          _context7.next = 29;
          return userRoleModel.generateBulkUpdateOperations(existingUserRoles);
        case 29:
          bulkUpdateOperations = _context7.sent;
          _context7.next = 32;
          return userRoleDL.updateBulkUserRoles(bulkUpdateOperations);
        case 32:
          updatedUserRoles = _context7.sent;
          return _context7.abrupt("return", {
            users: updatedUserRoles,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 34:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteUserRoleById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(jwtToken, userRoleId) {
    var authUser, roleFilter, filter, existingUserRole, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);
        case 2:
          authUser = _context8.sent;
          idAndPropertyValidationUtil.checkMongoDbIdType(userRoleId);
          _context8.next = 6;
          return userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
        case 6:
          roleFilter = _context8.sent;
          filter = {
            userRoleAccessLevel: roleFilter
          };
          _context8.next = 10;
          return userRoleDL.getUserRoles({
            filter: filter,
            _id: userRoleId
          });
        case 10:
          existingUserRole = _context8.sent;
          if (existingUserRole) {
            _context8.next = 15;
            break;
          }
          error = new Error('UserRole not found');
          error.status = 404;
          throw error;
        case 15:
          _context8.next = 17;
          return userRoleDL.deleteUserRole(existingUserRole._id);
        case 17:
          return _context8.abrupt("return", _context8.sent);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteBulkUserRoles = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(jwtToken, userRoleIds) {
    var authUser, _idAndPropertyValidat3, validIds, invalidIds, error, roleFilter, filter, existingUserRoles, presentIds, absentIds, _error4, bulkDeleteOperations, deletedUserRoles;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 1);
        case 2:
          authUser = _context9.sent;
          _idAndPropertyValidat3 = idAndPropertyValidationUtil.separateMongoDbValidAndInvalidIds(userRoleIds), validIds = _idAndPropertyValidat3.validIds, invalidIds = _idAndPropertyValidat3.invalidIds;
          if (!(validIds.length === 0)) {
            _context9.next = 8;
            break;
          }
          error = new Error('Invalid user ids');
          error.status = 400;
          throw error;
        case 8:
          _context9.next = 10;
          return userRoleModel.getDataAccessibilityRoleFilter(authUser.role);
        case 10:
          roleFilter = _context9.sent;
          filter = {
            userRoleAccessLevel: roleFilter,
            _id: {
              $in: validIds
            }
          };
          _context9.next = 14;
          return userRoleDL.getUserRoles(filter);
        case 14:
          existingUserRoles = _context9.sent;
          presentIds = [];
          absentIds = [];
          validIds.forEach(function (id) {
            if (existingUserRoles.some(function (user) {
              return user._id.equals(id);
            })) {
              presentIds.push(id);
            } else {
              absentIds.push(id);
            }
          });
          if (!(!existingUserRoles || existingUserRoles.length === 0)) {
            _context9.next = 22;
            break;
          }
          _error4 = new Error('User role(s) not found');
          _error4.status = 500;
          throw _error4;
        case 22:
          _context9.next = 24;
          return userRoleModel.generateBulkDeleteOperations(existingUserRoles);
        case 24:
          bulkDeleteOperations = _context9.sent;
          _context9.next = 27;
          return userRoleDL.deleteBulkUserRole(bulkDeleteOperations);
        case 27:
          deletedUserRoles = _context9.sent;
          return _context9.abrupt("return", {
            users: deletedUserRoles,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
        case 29:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
exports.searchUserRole = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(jwtToken, searchUserRole) {
    var authUser, searchUserRoleFilter, users;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return userAccessibilityOperation.checkOperationAccessibility(jwtToken, 2);
        case 2:
          authUser = _context10.sent;
          _context10.next = 5;
          return userRoleModel.generateSearchOperations(searchUserRole, authUser.role);
        case 5:
          searchUserRoleFilter = _context10.sent;
          _context10.next = 8;
          return userRoleDL.searchUserRole(searchUserRoleFilter);
        case 8:
          users = _context10.sent;
          return _context10.abrupt("return", users);
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

// Specific operations - able to search by user role, category etc.

/***/ }),

/***/ "./src/controllers/bookCategoryController.js":
/*!***************************************************!*\
  !*** ./src/controllers/bookCategoryController.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookCategoryBL = __webpack_require__(/*! ../businessLayer/bookCategoryBL */ "./src/businessLayer/bookCategoryBL.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var getAuthUser = __webpack_require__(/*! ../lib/getAuthUser */ "./src/lib/getAuthUser.js");

//---------------------- Get methods ----------------------\\
var getBookCategoriesController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var authUser, pagingQuery, bookCategories, _error$status, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context.sent;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context.next = 7;
          return bookCategoryBL.getBookCategories(authUser, pagingQuery);
        case 7:
          bookCategories = _context.sent;
          return _context.abrupt("return", res.status(200).send({
            success: true,
            message: "Book categories retrieved successfully",
            bookCategories: bookCategories
          }));
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          error = errorLog(_context.t0.message, _context.t0);
          return _context.abrupt("return", res.status((_error$status = error.status) !== null && _error$status !== void 0 ? _error$status : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getBookCategoriesController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getBookCategoryByIdController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var authUser, bookCategoryId, bookCategory, _error$status2, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context2.sent;
          bookCategoryId = req.params.id;
          _context2.next = 7;
          return bookCategoryBL.getBookCategoryById(authUser, bookCategoryId);
        case 7:
          bookCategory = _context2.sent;
          res.status(200).send({
            success: true,
            message: "Book category retrieved successfully",
            bookCategory: bookCategory
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          error = errorLog(_context2.t0.message, _context2.t0);
          res.status((_error$status2 = error.status) !== null && _error$status2 !== void 0 ? _error$status2 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getBookCategoryByIdController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getBookCategoriesByIdsController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var authUser, bookCategoryIds, pagingQuery, _yield$bookCategoryBL, bookCategories, presentIds, absentIds, invalidIds, _error$status3, error;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context3.sent;
          bookCategoryIds = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context3.next = 8;
          return bookCategoryBL.getBookCategoriesByIds(authUser, bookCategoryIds, pagingQuery);
        case 8:
          _yield$bookCategoryBL = _context3.sent;
          bookCategories = _yield$bookCategoryBL.bookCategories;
          presentIds = _yield$bookCategoryBL.presentIds;
          absentIds = _yield$bookCategoryBL.absentIds;
          invalidIds = _yield$bookCategoryBL.invalidIds;
          return _context3.abrupt("return", res.status(200).send({
            success: true,
            message: "BookCategories retrieved successfully",
            bookCategories: bookCategories,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          error = errorLog(_context3.t0.message, _context3.t0);
          return _context3.abrupt("return", res.status((_error$status3 = error.status) !== null && _error$status3 !== void 0 ? _error$status3 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function getBookCategoriesByIdsController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
var createBookCategoryController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var authUser, newBookCategory, createdBookCategory, _error$status4, error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context4.sent;
          newBookCategory = req.body;
          _context4.next = 7;
          return bookCategoryBL.createBookCategory(authUser, newBookCategory);
        case 7:
          createdBookCategory = _context4.sent;
          res.status(201).send({
            success: true,
            message: "New book category created successfully",
            createdBookCategory: createdBookCategory
          });
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          error = errorLog(_context4.t0.message, _context4.t0);
          res.status((_error$status4 = error.status) !== null && _error$status4 !== void 0 ? _error$status4 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function createBookCategoryController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var createBulkBookCategoryController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var authUser, newBookCategories, bookCategories, _error$status5, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context5.sent;
          newBookCategories = req.body;
          _context5.next = 7;
          return bookCategoryBL.createBulkBookCategory(authUser, newBookCategories);
        case 7:
          bookCategories = _context5.sent;
          res.status(201).send({
            success: true,
            message: "New book category created successfully",
            bookCategories: bookCategories
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          error = errorLog(_context5.t0.message, _context5.t0);
          res.status((_error$status5 = error.status) !== null && _error$status5 !== void 0 ? _error$status5 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function createBulkBookCategoryController(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
var updateBookCategoryByIdController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var authUser, bookCategoryId, updatableBookCategory, updatedBookCategory, _error$status6, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context6.sent;
          bookCategoryId = req.params.id;
          updatableBookCategory = req.body;
          _context6.next = 8;
          return bookCategoryBL.updateBookCategoryById(authUser, bookCategoryId, updatableBookCategory);
        case 8:
          updatedBookCategory = _context6.sent;
          res.status(200).send({
            success: true,
            message: "Book category updated successfully",
            bookCategory: updatedBookCategory
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          error = errorLog(_context6.t0.message, _context6.t0);
          res.status((_error$status6 = error.status) !== null && _error$status6 !== void 0 ? _error$status6 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function updateBookCategoryByIdController(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateBalkBookCategoryController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var authUser, updatableBookCategories, _yield$bookCategoryBL2, bookCategory, presentIds, absentIds, invalidIds, _error$status7, error;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context7.sent;
          updatableBookCategories = req.body;
          _context7.next = 7;
          return bookCategoryBL.updateBulkBookCategories(authUser, updatableBookCategories);
        case 7:
          _yield$bookCategoryBL2 = _context7.sent;
          bookCategory = _yield$bookCategoryBL2.bookCategory;
          presentIds = _yield$bookCategoryBL2.presentIds;
          absentIds = _yield$bookCategoryBL2.absentIds;
          invalidIds = _yield$bookCategoryBL2.invalidIds;
          res.status(200).send({
            success: true,
            message: "Book category updated successfully",
            updatedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context7.next = 19;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](0);
          error = errorLog(_context7.t0.message, _context7.t0);
          res.status((_error$status7 = error.status) !== null && _error$status7 !== void 0 ? _error$status7 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 15]]);
  }));
  return function updateBalkBookCategoryController(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
var deleteBookCategoryByIdController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var authUser, bookCategoryId, deletedBookCategory, _error$status8, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context8.sent;
          bookCategoryId = req.params.id;
          _context8.next = 7;
          return bookCategoryBL.deleteBookCategoryById(authUser, bookCategoryId);
        case 7:
          deletedBookCategory = _context8.sent;
          res.status(200).send({
            success: true,
            message: "Book category deleted successfully",
            bookCategory: deletedBookCategory
          });
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          error = errorLog(_context8.t0.message, _context8.t0);
          res.status((_error$status8 = error.status) !== null && _error$status8 !== void 0 ? _error$status8 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function deleteBookCategoryByIdController(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteBulkBookCategoryController = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var authUser, bookCategoryIds, _yield$bookCategoryBL3, bookCategory, presentIds, absentIds, invalidIds, _error$status9, error;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context9.sent;
          bookCategoryIds = req.body;
          _context9.next = 7;
          return bookCategoryBL.deleteBulkBookCategories(authUser, bookCategoryIds);
        case 7:
          _yield$bookCategoryBL3 = _context9.sent;
          bookCategory = _yield$bookCategoryBL3.bookCategory;
          presentIds = _yield$bookCategoryBL3.presentIds;
          absentIds = _yield$bookCategoryBL3.absentIds;
          invalidIds = _yield$bookCategoryBL3.invalidIds;
          res.status(200).send({
            success: true,
            message: "Book category deleted successfully",
            deletedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context9.next = 19;
          break;
        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](0);
          error = errorLog(_context9.t0.message, _context9.t0);
          res.status((_error$status9 = error.status) !== null && _error$status9 !== void 0 ? _error$status9 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 15]]);
  }));
  return function deleteBulkBookCategoryController(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
var searchBookCategoryController = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var authUser, searchTermsForBookCategory, pagingQuery, bookCategories, _error$status10, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context10.sent;
          searchTermsForBookCategory = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context10.next = 8;
          return bookCategoryBL.searchBookCategory(authUser, searchTermsForBookCategory, pagingQuery);
        case 8:
          bookCategories = _context10.sent;
          res.status(200).send({
            success: true,
            message: "Book categories retrieved successfully based on the search criteria",
            bookCategories: bookCategories
          });
          _context10.next = 16;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          error = errorLog(_context10.t0.message, _context10.t0);
          res.status((_error$status10 = error.status) !== null && _error$status10 !== void 0 ? _error$status10 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function searchBookCategoryController(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  getBookCategoriesController: getBookCategoriesController,
  getBookCategoryByIdController: getBookCategoryByIdController,
  getBookCategoriesByIdsController: getBookCategoriesByIdsController,
  createBookCategoryController: createBookCategoryController,
  createBulkBookCategoryController: createBulkBookCategoryController,
  updateBookCategoryByIdController: updateBookCategoryByIdController,
  updateBalkBookCategoryController: updateBalkBookCategoryController,
  deleteBookCategoryByIdController: deleteBookCategoryByIdController,
  deleteBulkBookCategoryController: deleteBulkBookCategoryController,
  searchBookCategoryController: searchBookCategoryController
};

/***/ }),

/***/ "./src/controllers/bookInfoController.js":
/*!***********************************************!*\
  !*** ./src/controllers/bookInfoController.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookInfoBL = __webpack_require__(/*! ../businessLayer/bookInfoBL */ "./src/businessLayer/bookInfoBL.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var getAuthUser = __webpack_require__(/*! ../lib/getAuthUser */ "./src/lib/getAuthUser.js");

//---------------------- Get methods ----------------------\\
var getBookInfosController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var authUser, pagingQuery, bookInfos, _error$status, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context.sent;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context.next = 7;
          return bookInfoBL.getBookInfos(authUser, pagingQuery);
        case 7:
          bookInfos = _context.sent;
          return _context.abrupt("return", res.status(200).send({
            success: true,
            message: "Book infos retrieved successfully",
            bookInfos: bookInfos
          }));
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          error = errorLog(_context.t0.message, _context.t0);
          return _context.abrupt("return", res.status((_error$status = error.status) !== null && _error$status !== void 0 ? _error$status : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getBookInfosController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getBookInfoByIdController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var authUser, bookInfoId, bookInfo, _error$status2, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context2.sent;
          bookInfoId = req.params.id;
          _context2.next = 7;
          return bookInfoBL.getBookInfoById(authUser, bookInfoId);
        case 7:
          bookInfo = _context2.sent;
          res.status(200).send({
            success: true,
            message: "Book info retrieved successfully",
            bookInfo: bookInfo
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          error = errorLog(_context2.t0.message, _context2.t0);
          res.status((_error$status2 = error.status) !== null && _error$status2 !== void 0 ? _error$status2 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getBookInfoByIdController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getBookInfosByIdsController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var authUser, bookInfoIds, pagingQuery, _yield$bookInfoBL$get, bookInfos, presentIds, absentIds, invalidIds, _error$status3, error;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context3.sent;
          bookInfoIds = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context3.next = 8;
          return bookInfoBL.getBookInfosByIds(authUser, bookInfoIds, pagingQuery);
        case 8:
          _yield$bookInfoBL$get = _context3.sent;
          bookInfos = _yield$bookInfoBL$get.bookInfos;
          presentIds = _yield$bookInfoBL$get.presentIds;
          absentIds = _yield$bookInfoBL$get.absentIds;
          invalidIds = _yield$bookInfoBL$get.invalidIds;
          return _context3.abrupt("return", res.status(200).send({
            success: true,
            message: "BookInfos retrieved successfully",
            bookInfos: bookInfos,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          error = errorLog(_context3.t0.message, _context3.t0);
          return _context3.abrupt("return", res.status((_error$status3 = error.status) !== null && _error$status3 !== void 0 ? _error$status3 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function getBookInfosByIdsController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
var createBookInfoController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var authUser, newBookInfo, _req$file, filename, filePath, originalname, createdBookInfo, _error$status4, error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context4.sent;
          newBookInfo = req.body;
          newBookInfo.coverImage = '';
          if (req.file) {
            // Extract file details
            _req$file = req.file, filename = _req$file.filename, filePath = _req$file.path, originalname = _req$file.originalname; // set the storage cover image name in uploads folder
            newBookInfo.coverImage = filename;
          }
          _context4.next = 9;
          return bookInfoBL.createBookInfo(authUser, newBookInfo);
        case 9:
          createdBookInfo = _context4.sent;
          res.status(201).send({
            success: true,
            message: "New book info created successfully",
            createdBookInfo: createdBookInfo
          });
          _context4.next = 17;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          error = errorLog(_context4.t0.message, _context4.t0);
          res.status((_error$status4 = error.status) !== null && _error$status4 !== void 0 ? _error$status4 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function createBookInfoController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var createBulkBookInfoController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var authUser, newBookInfos, bookInfos, _error$status5, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context5.sent;
          newBookInfos = req.body;
          _context5.next = 7;
          return bookInfoBL.createBulkBookInfo(authUser, newBookInfos);
        case 7:
          bookInfos = _context5.sent;
          res.status(201).send({
            success: true,
            message: "New book info created successfully",
            bookInfos: bookInfos
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          error = errorLog(_context5.t0.message, _context5.t0);
          res.status((_error$status5 = error.status) !== null && _error$status5 !== void 0 ? _error$status5 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function createBulkBookInfoController(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
var updateBookInfoByIdController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var authUser, bookInfoId, updatableBookInfo, updatedBookInfo, _error$status6, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context6.sent;
          bookInfoId = req.params.id;
          updatableBookInfo = req.body;
          _context6.next = 8;
          return bookInfoBL.updateBookInfoById(authUser, bookInfoId, updatableBookInfo);
        case 8:
          updatedBookInfo = _context6.sent;
          res.status(200).send({
            success: true,
            message: "Book info updated successfully",
            bookInfo: updatedBookInfo
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          error = errorLog(_context6.t0.message, _context6.t0);
          res.status((_error$status6 = error.status) !== null && _error$status6 !== void 0 ? _error$status6 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function updateBookInfoByIdController(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateBalkBookInfoController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var authUser, updatableBookInfos, _yield$bookInfoBL$upd, bookInfo, presentIds, absentIds, invalidIds, _error$status7, error;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context7.sent;
          updatableBookInfos = req.body;
          _context7.next = 7;
          return bookInfoBL.updateBulkBookInfos(authUser, updatableBookInfos);
        case 7:
          _yield$bookInfoBL$upd = _context7.sent;
          bookInfo = _yield$bookInfoBL$upd.bookInfo;
          presentIds = _yield$bookInfoBL$upd.presentIds;
          absentIds = _yield$bookInfoBL$upd.absentIds;
          invalidIds = _yield$bookInfoBL$upd.invalidIds;
          res.status(200).send({
            success: true,
            message: "Book info updated successfully",
            updatedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context7.next = 19;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](0);
          error = errorLog(_context7.t0.message, _context7.t0);
          res.status((_error$status7 = error.status) !== null && _error$status7 !== void 0 ? _error$status7 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 15]]);
  }));
  return function updateBalkBookInfoController(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
var deleteBookInfoByIdController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var authUser, bookInfoId, deletedBookInfo, _error$status8, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context8.sent;
          bookInfoId = req.params.id;
          _context8.next = 7;
          return bookInfoBL.deleteBookInfoById(authUser, bookInfoId);
        case 7:
          deletedBookInfo = _context8.sent;
          res.status(200).send({
            success: true,
            message: "Book info deleted successfully",
            bookInfo: deletedBookInfo
          });
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          error = errorLog(_context8.t0.message, _context8.t0);
          res.status((_error$status8 = error.status) !== null && _error$status8 !== void 0 ? _error$status8 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function deleteBookInfoByIdController(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteBulkBookInfoController = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var authUser, bookInfoIds, _yield$bookInfoBL$del, bookInfo, presentIds, absentIds, invalidIds, _error$status9, error;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context9.sent;
          bookInfoIds = req.body;
          _context9.next = 7;
          return bookInfoBL.deleteBulkBookInfos(authUser, bookInfoIds);
        case 7:
          _yield$bookInfoBL$del = _context9.sent;
          bookInfo = _yield$bookInfoBL$del.bookInfo;
          presentIds = _yield$bookInfoBL$del.presentIds;
          absentIds = _yield$bookInfoBL$del.absentIds;
          invalidIds = _yield$bookInfoBL$del.invalidIds;
          res.status(200).send({
            success: true,
            message: "Book info deleted successfully",
            deletedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context9.next = 19;
          break;
        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](0);
          error = errorLog(_context9.t0.message, _context9.t0);
          res.status((_error$status9 = error.status) !== null && _error$status9 !== void 0 ? _error$status9 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 15]]);
  }));
  return function deleteBulkBookInfoController(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
var searchBookInfoController = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var authUser, searchTermsForBookInfo, pagingQuery, bookInfos, _error$status10, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context10.sent;
          searchTermsForBookInfo = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context10.next = 8;
          return bookInfoBL.searchBookInfo(authUser, searchTermsForBookInfo, pagingQuery);
        case 8:
          bookInfos = _context10.sent;
          res.status(200).send({
            success: true,
            message: "Book infos retrieved successfully based on the search criteria",
            bookInfos: bookInfos
          });
          _context10.next = 16;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          error = errorLog(_context10.t0.message, _context10.t0);
          res.status((_error$status10 = error.status) !== null && _error$status10 !== void 0 ? _error$status10 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function searchBookInfoController(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  getBookInfosController: getBookInfosController,
  getBookInfoByIdController: getBookInfoByIdController,
  getBookInfosByIdsController: getBookInfosByIdsController,
  createBookInfoController: createBookInfoController,
  createBulkBookInfoController: createBulkBookInfoController,
  updateBookInfoByIdController: updateBookInfoByIdController,
  updateBalkBookInfoController: updateBalkBookInfoController,
  deleteBookInfoByIdController: deleteBookInfoByIdController,
  deleteBulkBookInfoController: deleteBulkBookInfoController,
  searchBookInfoController: searchBookInfoController
};

/***/ }),

/***/ "./src/controllers/bookReservationController.js":
/*!******************************************************!*\
  !*** ./src/controllers/bookReservationController.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookReservationBL = __webpack_require__(/*! ../businessLayer/bookReservationBL */ "./src/businessLayer/bookReservationBL.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var getAuthUser = __webpack_require__(/*! ../lib/getAuthUser */ "./src/lib/getAuthUser.js");

//---------------------- Get methods ----------------------\\
var getBookReservationsController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var authUser, pagingQuery, bookReservations, _err$status, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context.sent;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context.next = 7;
          return bookReservationBL.getBookReservations(authUser, pagingQuery);
        case 7:
          bookReservations = _context.sent;
          return _context.abrupt("return", res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully",
            bookReservations: bookReservations
          }));
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          error = errorLog(_context.t0.message, _context.t0);
          return _context.abrupt("return", res.status((_err$status = _context.t0.status) !== null && _err$status !== void 0 ? _err$status : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getBookReservationsController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getBookReservationByIdController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var authUser, bookReservationId, bookReservation, _err$status2, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context2.sent;
          bookReservationId = req.params.id;
          _context2.next = 7;
          return bookReservationBL.getBookReservationById(authUser, bookReservationId);
        case 7:
          bookReservation = _context2.sent;
          res.status(200).send({
            success: true,
            message: "Book reservation retrieved successfully",
            bookReservation: bookReservation
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          error = errorLog(_context2.t0.message, _context2.t0);
          res.status((_err$status2 = _context2.t0.status) !== null && _err$status2 !== void 0 ? _err$status2 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getBookReservationByIdController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
var createBookReservationController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var authUser, newBookReservation, createdBookReservation, _err$status3, error;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context3.sent;
          newBookReservation = req.body;
          _context3.next = 7;
          return bookReservationBL.createBookReservation(authUser, newBookReservation);
        case 7:
          createdBookReservation = _context3.sent;
          res.status(201).send({
            success: true,
            message: "New book reservation created successfully",
            createdBookReservation: createdBookReservation
          });
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          error = errorLog(_context3.t0.message, _context3.t0);
          res.status((_err$status3 = _context3.t0.status) !== null && _err$status3 !== void 0 ? _err$status3 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function createBookReservationController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
var updateBookReservationByIdController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var authUser, bookReservationId, updatableBookReservation, updatedBookReservation, _err$status4, error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context4.sent;
          bookReservationId = req.params.id;
          updatableBookReservation = req.body;
          _context4.next = 8;
          return bookReservationBL.updateBookReservationById(authUser, bookReservationId, updatableBookReservation);
        case 8:
          updatedBookReservation = _context4.sent;
          res.status(200).send({
            success: true,
            message: "Book reservation updated successfully",
            updatedBookReservation: updatedBookReservation
          });
          _context4.next = 16;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          error = errorLog(_context4.t0.message, _context4.t0);
          res.status((_err$status4 = _context4.t0.status) !== null && _err$status4 !== void 0 ? _err$status4 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function updateBookReservationByIdController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
var deleteBookReservationByIdController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var authUser, bookReservationId, deletedBookReservation, _err$status5, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context5.sent;
          bookReservationId = req.params.id;
          _context5.next = 7;
          return bookReservationBL.deleteBookReservationById(authUser, bookReservationId);
        case 7:
          deletedBookReservation = _context5.sent;
          res.status(200).send({
            success: true,
            message: "Book reservation deleted successfully",
            bookReservation: deletedBookReservation
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          error = errorLog(_context5.t0.message, _context5.t0);
          res.status((_err$status5 = _context5.t0.status) !== null && _err$status5 !== void 0 ? _err$status5 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function deleteBookReservationByIdController(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
var searchBookReservationController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var authUser, searchTermsForBookReservation, pagingQuery, bookReservations, _err$status6, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context6.sent;
          searchTermsForBookReservation = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context6.next = 8;
          return bookReservationBL.searchBookReservation(authUser, searchTermsForBookReservation, pagingQuery);
        case 8:
          bookReservations = _context6.sent;
          res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully based on the search criteria",
            bookReservations: bookReservations
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          error = errorLog(_context6.t0.message, _context6.t0);
          res.status((_err$status6 = _context6.t0.status) !== null && _err$status6 !== void 0 ? _err$status6 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function searchBookReservationController(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// ---------------------- Extra methods ----------------------\\
var getAvailableBookController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var authUser, pagingQuery, availableBooks, _err$status7, error;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context7.sent;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context7.next = 7;
          return bookReservationBL.getAvailableBook(authUser, pagingQuery);
        case 7:
          availableBooks = _context7.sent;
          res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully based on the search criteria",
            availableBooks: availableBooks
          });
          _context7.next = 15;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          error = errorLog(_context7.t0.message, _context7.t0);
          res.status((_err$status7 = _context7.t0.status) !== null && _err$status7 !== void 0 ? _err$status7 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 11]]);
  }));
  return function getAvailableBookController(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getReservedBookController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var authUser, pagingQuery, availableBooks, _err$status8, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context8.sent;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context8.next = 7;
          return bookReservationBL.getReservedBook(authUser, pagingQuery);
        case 7:
          availableBooks = _context8.sent;
          res.status(200).send({
            success: true,
            message: "Book reservations retrieved successfully based on the search criteria",
            availableBooks: availableBooks
          });
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          error = errorLog(_context8.t0.message, _context8.t0);
          res.status((_err$status8 = _context8.t0.status) !== null && _err$status8 !== void 0 ? _err$status8 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function getReservedBookController(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  getBookReservationsController: getBookReservationsController,
  getBookReservationByIdController: getBookReservationByIdController,
  createBookReservationController: createBookReservationController,
  updateBookReservationByIdController: updateBookReservationByIdController,
  deleteBookReservationByIdController: deleteBookReservationByIdController,
  searchBookReservationController: searchBookReservationController,
  getAvailableBookController: getAvailableBookController,
  getReservedBookController: getReservedBookController
};

/***/ }),

/***/ "./src/controllers/enumTableController.js":
/*!************************************************!*\
  !*** ./src/controllers/enumTableController.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var enumTableBL = __webpack_require__(/*! ../businessLayer/enumTableBL */ "./src/businessLayer/enumTableBL.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var getAuthUser = __webpack_require__(/*! ../lib/getAuthUser */ "./src/lib/getAuthUser.js");

//---------------------- Get methods ----------------------\\
var getEnumTablesController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var authUser, pagingQuery, enumTables, _error$status, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context.sent;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context.next = 7;
          return enumTableBL.getEnumTables(authUser, pagingQuery);
        case 7:
          enumTables = _context.sent;
          return _context.abrupt("return", res.status(200).send({
            success: true,
            message: "Enum tables retrieved successfully",
            enumTables: enumTables
          }));
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          error = errorLog(_context.t0.message, _context.t0);
          return _context.abrupt("return", res.status((_error$status = error.status) !== null && _error$status !== void 0 ? _error$status : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getEnumTablesController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getEnumTableByIdController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var authUser, enumTableId, enumTable, _error$status2, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context2.sent;
          enumTableId = req.params.id;
          _context2.next = 7;
          return enumTableBL.getEnumTableById(authUser, enumTableId);
        case 7:
          enumTable = _context2.sent;
          res.status(200).send({
            success: true,
            message: "Enum table retrieved successfully",
            enumTable: enumTable
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          error = errorLog(_context2.t0.message, _context2.t0);
          res.status((_error$status2 = error.status) !== null && _error$status2 !== void 0 ? _error$status2 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getEnumTableByIdController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getEnumTablesByIdsController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var authUser, enumTableIds, pagingQuery, _yield$enumTableBL$ge, enumTables, presentIds, absentIds, invalidIds, _error$status3, error;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context3.sent;
          enumTableIds = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context3.next = 8;
          return enumTableBL.getEnumTablesByIds(authUser, enumTableIds, pagingQuery);
        case 8:
          _yield$enumTableBL$ge = _context3.sent;
          enumTables = _yield$enumTableBL$ge.enumTables;
          presentIds = _yield$enumTableBL$ge.presentIds;
          absentIds = _yield$enumTableBL$ge.absentIds;
          invalidIds = _yield$enumTableBL$ge.invalidIds;
          return _context3.abrupt("return", res.status(200).send({
            success: true,
            message: "EnumTables retrieved successfully",
            enumTables: enumTables,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          error = errorLog(_context3.t0.message, _context3.t0);
          return _context3.abrupt("return", res.status((_error$status3 = error.status) !== null && _error$status3 !== void 0 ? _error$status3 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function getEnumTablesByIdsController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
var createEnumTableController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var authUser, newEnumTable, createdEnumTable, _error$status4, error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context4.sent;
          newEnumTable = req.body;
          _context4.next = 7;
          return enumTableBL.createEnumTable(authUser, newEnumTable);
        case 7:
          createdEnumTable = _context4.sent;
          res.status(201).send({
            success: true,
            message: "New enum table created successfully",
            createdEnumTable: createdEnumTable
          });
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          error = errorLog(_context4.t0.message, _context4.t0);
          res.status((_error$status4 = error.status) !== null && _error$status4 !== void 0 ? _error$status4 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function createEnumTableController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var createBulkEnumTableController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var authUser, newEnumTables, enumTables, _error$status5, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context5.sent;
          newEnumTables = req.body;
          _context5.next = 7;
          return enumTableBL.createBulkEnumTable(authUser, newEnumTables);
        case 7:
          enumTables = _context5.sent;
          res.status(201).send({
            success: true,
            message: "New enum table created successfully",
            enumTables: enumTables
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          error = errorLog(_context5.t0.message, _context5.t0);
          res.status((_error$status5 = error.status) !== null && _error$status5 !== void 0 ? _error$status5 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function createBulkEnumTableController(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
var updateEnumTableByIdController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var authUser, enumTableId, updatableEnumTable, updatedEnumTable, _error$status6, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context6.sent;
          enumTableId = req.params.id;
          updatableEnumTable = req.body;
          _context6.next = 8;
          return enumTableBL.updateEnumTableById(authUser, enumTableId, updatableEnumTable);
        case 8:
          updatedEnumTable = _context6.sent;
          res.status(200).send({
            success: true,
            message: "Enum table updated successfully",
            enumTable: updatedEnumTable
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          error = errorLog(_context6.t0.message, _context6.t0);
          res.status((_error$status6 = error.status) !== null && _error$status6 !== void 0 ? _error$status6 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function updateEnumTableByIdController(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateBalkEnumTableController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var authUser, updatableEnumTables, _yield$enumTableBL$up, enumTable, presentIds, absentIds, invalidIds, _error$status7, error;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context7.sent;
          updatableEnumTables = req.body;
          _context7.next = 7;
          return enumTableBL.updateBulkEnumTables(authUser, updatableEnumTables);
        case 7:
          _yield$enumTableBL$up = _context7.sent;
          enumTable = _yield$enumTableBL$up.enumTable;
          presentIds = _yield$enumTableBL$up.presentIds;
          absentIds = _yield$enumTableBL$up.absentIds;
          invalidIds = _yield$enumTableBL$up.invalidIds;
          res.status(200).send({
            success: true,
            message: "Enum table updated successfully",
            updatedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context7.next = 19;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](0);
          error = errorLog(_context7.t0.message, _context7.t0);
          res.status((_error$status7 = error.status) !== null && _error$status7 !== void 0 ? _error$status7 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 15]]);
  }));
  return function updateBalkEnumTableController(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
var deleteEnumTableByIdController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var authUser, enumTableId, deletedEnumTable, _error$status8, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context8.sent;
          enumTableId = req.params.id;
          _context8.next = 7;
          return enumTableBL.deleteEnumTableById(authUser, enumTableId);
        case 7:
          deletedEnumTable = _context8.sent;
          res.status(200).send({
            success: true,
            message: "Enum table deleted successfully",
            enumTable: deletedEnumTable
          });
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          error = errorLog(_context8.t0.message, _context8.t0);
          res.status((_error$status8 = error.status) !== null && _error$status8 !== void 0 ? _error$status8 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function deleteEnumTableByIdController(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteBulkEnumTableController = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var authUser, enumTableIds, _yield$enumTableBL$de, enumTable, presentIds, absentIds, invalidIds, _error$status9, error;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context9.sent;
          enumTableIds = req.body;
          _context9.next = 7;
          return enumTableBL.deleteBulkEnumTables(authUser, enumTableIds);
        case 7:
          _yield$enumTableBL$de = _context9.sent;
          enumTable = _yield$enumTableBL$de.enumTable;
          presentIds = _yield$enumTableBL$de.presentIds;
          absentIds = _yield$enumTableBL$de.absentIds;
          invalidIds = _yield$enumTableBL$de.invalidIds;
          res.status(200).send({
            success: true,
            message: "Enum table deleted successfully",
            deletedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context9.next = 19;
          break;
        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](0);
          error = errorLog(_context9.t0.message, _context9.t0);
          res.status((_error$status9 = error.status) !== null && _error$status9 !== void 0 ? _error$status9 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 15]]);
  }));
  return function deleteBulkEnumTableController(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
var searchEnumTableController = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var authUser, searchTermsForEnumTable, pagingQuery, enumTables, _error$status10, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context10.sent;
          searchTermsForEnumTable = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context10.next = 8;
          return enumTableBL.searchEnumTable(authUser, searchTermsForEnumTable, pagingQuery);
        case 8:
          enumTables = _context10.sent;
          res.status(200).send({
            success: true,
            message: "Enum tables retrieved successfully based on the search criteria",
            enumTables: enumTables
          });
          _context10.next = 16;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          error = errorLog(_context10.t0.message, _context10.t0);
          res.status((_error$status10 = error.status) !== null && _error$status10 !== void 0 ? _error$status10 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function searchEnumTableController(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  getEnumTablesController: getEnumTablesController,
  getEnumTableByIdController: getEnumTableByIdController,
  getEnumTablesByIdsController: getEnumTablesByIdsController,
  createEnumTableController: createEnumTableController,
  createBulkEnumTableController: createBulkEnumTableController,
  updateEnumTableByIdController: updateEnumTableByIdController,
  updateBalkEnumTableController: updateBalkEnumTableController,
  deleteEnumTableByIdController: deleteEnumTableByIdController,
  deleteBulkEnumTableController: deleteBulkEnumTableController,
  searchEnumTableController: searchEnumTableController
};

/***/ }),

/***/ "./src/controllers/userController.js":
/*!*******************************************!*\
  !*** ./src/controllers/userController.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var userBL = __webpack_require__(/*! ../businessLayer/userBL */ "./src/businessLayer/userBL.js");
var userModel = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
var setJwtTokenInCookie = __webpack_require__(/*! ../lib/setJwtTokenInCookie */ "./src/lib/setJwtTokenInCookie.js");
var getAuthUser = __webpack_require__(/*! ../lib/getAuthUser */ "./src/lib/getAuthUser.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var errorLogLogin = __webpack_require__(/*! ../lib/errorLogLogin */ "./src/lib/errorLogLogin.js");

//---------------------- Get methods ----------------------\\
var getUsersController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var authUser, pagingQuery, users, _error$status, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context.sent;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context.next = 7;
          return userBL.getUsers(authUser, pagingQuery);
        case 7:
          users = _context.sent;
          return _context.abrupt("return", res.status(200).send({
            success: true,
            message: "Users retrieved successfully",
            users: users
          }));
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          error = errorLog(_context.t0.message, _context.t0);
          return _context.abrupt("return", res.status((_error$status = error.status) !== null && _error$status !== void 0 ? _error$status : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getUsersController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getUserByIdController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var authUser, UserId, User, _error$status2, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context2.sent;
          UserId = req.params.id;
          _context2.next = 7;
          return userBL.getUserById(authUser, UserId);
        case 7:
          User = _context2.sent;
          res.status(200).send({
            success: true,
            message: "User retrieved successfully",
            User: User
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          error = errorLog(_context2.t0.message, _context2.t0);
          res.status((_error$status2 = error.status) !== null && _error$status2 !== void 0 ? _error$status2 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getUserByIdController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUsersByIdsController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var authUser, userIds, pagingQuery, _yield$userBL$getUser, users, presentIds, absentIds, invalidIds, _error$status3, error;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context3.sent;
          userIds = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context3.next = 8;
          return userBL.getUsersByIds(authUser, userIds, pagingQuery);
        case 8:
          _yield$userBL$getUser = _context3.sent;
          users = _yield$userBL$getUser.users;
          presentIds = _yield$userBL$getUser.presentIds;
          absentIds = _yield$userBL$getUser.absentIds;
          invalidIds = _yield$userBL$getUser.invalidIds;
          return _context3.abrupt("return", res.status(200).send({
            success: true,
            message: "Users retrieved successfully",
            users: users,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          error = errorLog(_context3.t0.message, _context3.t0);
          return _context3.abrupt("return", res.status((_error$status3 = error.status) !== null && _error$status3 !== void 0 ? _error$status3 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function getUsersByIdsController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
var createUserController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var authUser, newUser, _req$file, filename, filePath, originalname, createdUser, _error$status4, error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context4.sent;
          newUser = req.body; // Extract file details
          _req$file = req.file, filename = _req$file.filename, filePath = _req$file.path, originalname = _req$file.originalname;
          newUser.photo = filename;
          _context4.next = 9;
          return userBL.createUser(authUser, newUser);
        case 9:
          createdUser = _context4.sent;
          res.status(201).send({
            success: true,
            message: "New user created successfully",
            user: createdUser
          });
          _context4.next = 17;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          error = errorLog(_context4.t0.message, _context4.t0);
          res.status((_error$status4 = error.status) !== null && _error$status4 !== void 0 ? _error$status4 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function createUserController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var createBulkUserController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var authUser, newUsers, users, _error$status5, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context5.sent;
          newUsers = req.body;
          _context5.next = 7;
          return userBL.createBulkUser(authUser, newUsers);
        case 7:
          users = _context5.sent;
          res.status(201).send({
            success: true,
            message: "New user created successfully",
            users: users
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          error = errorLog(_context5.t0.message, _context5.t0);
          res.status((_error$status5 = error.status) !== null && _error$status5 !== void 0 ? _error$status5 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function createBulkUserController(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
var updateUserByIdController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var authUser, userId, updatableUser, updatedUser, _error$status6, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context6.sent;
          userId = req.params.id;
          updatableUser = req.body;
          _context6.next = 8;
          return userBL.updateUserById(authUser, userId, updatableUser);
        case 8:
          updatedUser = _context6.sent;
          res.status(200).send({
            success: true,
            message: "User updated successfully",
            user: updatedUser
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          error = errorLog(_context6.t0.message, _context6.t0);
          res.status((_error$status6 = error.status) !== null && _error$status6 !== void 0 ? _error$status6 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function updateUserByIdController(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateBalkUserController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var authUser, updatableUsers, _yield$userBL$updateB, user, presentIds, absentIds, invalidIds, _error$status7, error;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context7.sent;
          updatableUsers = req.body;
          _context7.next = 7;
          return userBL.updateBulkUsers(authUser, updatableUsers);
        case 7:
          _yield$userBL$updateB = _context7.sent;
          user = _yield$userBL$updateB.user;
          presentIds = _yield$userBL$updateB.presentIds;
          absentIds = _yield$userBL$updateB.absentIds;
          invalidIds = _yield$userBL$updateB.invalidIds;
          res.status(200).send({
            success: true,
            message: "User updated successfully",
            updatedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context7.next = 19;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](0);
          error = errorLog(_context7.t0.message, _context7.t0);
          res.status((_error$status7 = error.status) !== null && _error$status7 !== void 0 ? _error$status7 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 15]]);
  }));
  return function updateBalkUserController(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
var deleteUserByIdController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var authUser, userId, deletedUser, _error$status8, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context8.sent;
          userId = req.params.id;
          _context8.next = 7;
          return userBL.deleteUserById(authUser, userId);
        case 7:
          deletedUser = _context8.sent;
          res.status(200).send({
            success: true,
            message: "User deleted successfully",
            user: deletedUser
          });
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          error = errorLog(_context8.t0.message, _context8.t0);
          res.status((_error$status8 = error.status) !== null && _error$status8 !== void 0 ? _error$status8 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function deleteUserByIdController(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteBulkUserController = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var authUser, userIds, _yield$userBL$deleteB, user, presentIds, absentIds, invalidIds, _error$status9, error;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context9.sent;
          userIds = req.body;
          _context9.next = 7;
          return userBL.deleteBulkUsers(authUser, userIds);
        case 7:
          _yield$userBL$deleteB = _context9.sent;
          user = _yield$userBL$deleteB.user;
          presentIds = _yield$userBL$deleteB.presentIds;
          absentIds = _yield$userBL$deleteB.absentIds;
          invalidIds = _yield$userBL$deleteB.invalidIds;
          res.status(200).send({
            success: true,
            message: "User deleted successfully",
            deletedIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds
          });
          _context9.next = 19;
          break;
        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](0);
          error = errorLog(_context9.t0.message, _context9.t0);
          res.status((_error$status9 = error.status) !== null && _error$status9 !== void 0 ? _error$status9 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 19:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 15]]);
  }));
  return function deleteBulkUserController(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
var searchUserController = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var authUser, searchTermsForUser, pagingQuery, users, _error$status10, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context10.sent;
          searchTermsForUser = req.body;
          pagingQuery = {
            page: parseInt(req.query.page),
            pageSize: parseInt(req.query.pageSize),
            sortBy: req.query.sortBy,
            sortOrder: req.query.sortOrder
          };
          _context10.next = 8;
          return userBL.searchUser(authUser, searchTermsForUser, pagingQuery);
        case 8:
          users = _context10.sent;
          res.status(200).send({
            success: true,
            users: users,
            message: "Users retrieved successfully based on the search criteria"
          });
          _context10.next = 16;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          error = errorLog(_context10.t0.message, _context10.t0);
          res.status((_error$status10 = error.status) !== null && _error$status10 !== void 0 ? _error$status10 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function searchUserController(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

// ------------------ Sign in/Sign up methods ------------------\\
var registerUserController = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var user, error1;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          user = req.body; // validation
          if (user) {
            _context11.next = 4;
            break;
          }
          return _context11.abrupt("return", res.status(400).send({
            success: false,
            message: "Please provide a valid user"
          }));
        case 4:
          _context11.next = 6;
          return userBL.registerUser(user);
        case 6:
          res.status(201).send({
            success: true,
            message: "New user created successfully"
          });
          _context11.next = 13;
          break;
        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](0);
          error1 = errorLogLogin(_context11.t0);
          res.status(500).send({
            success: false,
            email: error1.email,
            password: error1.password
          });
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 9]]);
  }));
  return function registerUserController(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var loginUserController = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body, email, password, user, jwtToken, error;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context12.prev = 1;
          _context12.next = 4;
          return userModel.login(email, password);
        case 4:
          user = _context12.sent;
          // const token = createToken(user._id);
          // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          jwtToken = setJwtTokenInCookie(res, user._id);
          res.status(200).json({
            user: user._id,
            token: jwtToken
          });
          _context12.next = 13;
          break;
        case 9:
          _context12.prev = 9;
          _context12.t0 = _context12["catch"](1);
          error = errorLogLogin(_context12.t0);
          res.status(500).send({
            success: false,
            email: error.email,
            password: error.password
          });
        case 13:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 9]]);
  }));
  return function loginUserController(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var logoutUserController = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var authUser, error;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context13.sent;
          res.cookie('jwt', '', {
            maxAge: 1
          }); // expires in 1 second regardless of existence
          if (!authUser) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(200).send({
            success: true,
            message: "Logout successful"
          }));
        case 7:
          _context13.next = 13;
          break;
        case 9:
          _context13.prev = 9;
          _context13.t0 = _context13["catch"](0);
          error = errorLog("Failed to logout", _context13.t0);
          res.status(500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 13:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 9]]);
  }));
  return function logoutUserController(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var checkUserController = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var authUser, error;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return getAuthUser(req.cookies.jwt);
        case 3:
          authUser = _context14.sent;
          if (!authUser) {
            _context14.next = 8;
            break;
          }
          return _context14.abrupt("return", res.status(200).send({
            success: true,
            message: "Authenticated",
            user: authUser
          }));
        case 8:
          return _context14.abrupt("return", res.status(401).send({
            success: false,
            message: "Unauthorized"
          }));
        case 9:
          _context14.next = 15;
          break;
        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14["catch"](0);
          error = errorLog("Failed to login", _context14.t0);
          res.status(500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 15:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 11]]);
  }));
  return function checkUserController(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
module.exports = {
  getUsersController: getUsersController,
  getUserByIdController: getUserByIdController,
  getUsersByIdsController: getUsersByIdsController,
  createUserController: createUserController,
  createBulkUserController: createBulkUserController,
  updateUserController: updateUserByIdController,
  updateBalkUserController: updateBalkUserController,
  deleteUserController: deleteUserByIdController,
  deleteBulkUserController: deleteBulkUserController,
  searchUserController: searchUserController,
  registerUserController: registerUserController,
  loginUserController: loginUserController,
  logoutUserController: logoutUserController,
  checkUserController: checkUserController
};

/***/ }),

/***/ "./src/controllers/userRoleController.js":
/*!***********************************************!*\
  !*** ./src/controllers/userRoleController.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var userRoleBL = __webpack_require__(/*! ../businessLayer/userRoleBL */ "./src/businessLayer/userRoleBL.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");

//---------------------- Get methods ----------------------\\
var getUserRolesController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var userRoles, _err$status, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return userRoleBL.getUserRoles(req.cookies.jwt);
        case 3:
          userRoles = _context.sent;
          return _context.abrupt("return", res.status(200).send({
            success: true,
            userRoles: userRoles,
            message: "UserRoles retrieved successfully"
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          error = errorLog("Error while retrieving userRoles", _context.t0);
          return _context.abrupt("return", res.status((_err$status = _context.t0.status) !== null && _err$status !== void 0 ? _err$status : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getUserRolesController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getUserRoleByIdController = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userRoleId, userRole, _err$status2, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          userRoleId = req.params.id;
          _context2.next = 4;
          return userRoleBL.getUserRoleById(req.cookies.jwt, userRoleId);
        case 4:
          userRole = _context2.sent;
          res.status(200).send({
            success: true,
            userRole: userRole,
            message: "UserRole retrieved successfully"
          });
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          error = errorLog("Error while retrieving the userRole", _context2.t0);
          res.status((_err$status2 = _context2.t0.status) !== null && _err$status2 !== void 0 ? _err$status2 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getUserRoleByIdController(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUserRolesByIdsController = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var ids, _yield$userRoleBL$get, userRoles, presentIds, absentIds, invalidIds, _err$status3, error;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          ids = req.body;
          _context3.next = 4;
          return userRoleBL.getUserRolesByIds(req.cookies.jwt, ids);
        case 4:
          _yield$userRoleBL$get = _context3.sent;
          userRoles = _yield$userRoleBL$get.userRoles;
          presentIds = _yield$userRoleBL$get.presentIds;
          absentIds = _yield$userRoleBL$get.absentIds;
          invalidIds = _yield$userRoleBL$get.invalidIds;
          return _context3.abrupt("return", res.status(200).send({
            success: true,
            userRoles: userRoles,
            presentIds: presentIds,
            absentIds: absentIds,
            invalidIds: invalidIds,
            message: "UserRoles retrieved successfully"
          }));
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          error = errorLog("Error while retrieving userRoles", _context3.t0);
          return _context3.abrupt("return", res.status((_err$status3 = _context3.t0.status) !== null && _err$status3 !== void 0 ? _err$status3 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          }));
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function getUserRolesByIdsController(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
var createUserRoleController = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var newUserRole, createdUserRole, _err$status4, error;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          newUserRole = req.body;
          _context4.next = 4;
          return userRoleBL.createUserRole(req.cookies.jwt, newUserRole);
        case 4:
          createdUserRole = _context4.sent;
          res.status(201).send({
            success: true,
            message: "New userRole created successfully",
            createdUserRole: createdUserRole
          });
          _context4.next = 12;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          error = errorLog("Error while creating the userRole", _context4.t0);
          res.status((_err$status4 = _context4.t0.status) !== null && _err$status4 !== void 0 ? _err$status4 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function createUserRoleController(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var createBulkUserRoleController = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userRole, userRoles, _err$status5, error;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          userRole = req.body;
          _context5.next = 4;
          return userRoleBL.createBulkUserRole(req.cookies.jwt, userRole);
        case 4:
          userRoles = _context5.sent;
          res.status(201).send({
            success: true,
            message: "New userRole created successfully",
            userRoles: userRoles
          });
          _context5.next = 12;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          error = errorLog("Error while creating the userRole", _context5.t0);
          res.status((_err$status5 = _context5.t0.status) !== null && _err$status5 !== void 0 ? _err$status5 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function createBulkUserRoleController(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
var updateUserRoleByIdController = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var userRoleId, updateUserRole, updatedUserRole, _err$status6, error;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          userRoleId = req.params.id;
          updateUserRole = req.body;
          _context6.next = 5;
          return userRoleBL.updateUserRoleById(req.cookies.jwt, userRoleId, updateUserRole);
        case 5:
          updatedUserRole = _context6.sent;
          res.status(200).send({
            success: true,
            message: "UserRole updated successfully",
            updatedUserRole: updatedUserRole
          });
          _context6.next = 13;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          error = errorLog("Error while updating the userRole", _context6.t0);
          res.status((_err$status6 = _context6.t0.status) !== null && _err$status6 !== void 0 ? _err$status6 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function updateUserRoleByIdController(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateBalkUserRoleController = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var updateUserRoles, updatedUserRole, _err$status7, error;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          updateUserRoles = req.body;
          _context7.next = 4;
          return userRoleBL.updateBulkUserRoles(req.cookies.jwt, updateUserRoles);
        case 4:
          updatedUserRole = _context7.sent;
          res.status(200).send({
            success: true,
            message: "UserRole updated successfully",
            updatedUserRole: updatedUserRole
          });
          _context7.next = 12;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          error = errorLog("Error while updating the userRole", _context7.t0);
          res.status((_err$status7 = _context7.t0.status) !== null && _err$status7 !== void 0 ? _err$status7 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function updateBalkUserRoleController(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
var deleteUserRoleByIdController = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var userRoleId, deletedUserRole, _err$status8, error;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          userRoleId = req.params.id;
          _context8.next = 4;
          return userRoleBL.deleteUserRoleById(req.cookies.jwt, userRoleId);
        case 4:
          deletedUserRole = _context8.sent;
          res.status(200).send({
            success: true,
            message: "UserRole deleted successfully",
            userRole: deletedUserRole
          });
          _context8.next = 12;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          error = errorLog("Error while deleting the userRole", _context8.t0);
          res.status((_err$status8 = _context8.t0.status) !== null && _err$status8 !== void 0 ? _err$status8 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return function deleteUserRoleByIdController(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteBulkUserRoleController = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userRoleIds, deletedUserRole, _err$status9, error;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          userRoleIds = req.body;
          _context9.next = 4;
          return userRoleBL.deleteBulkUserRoles(req.cookies.jwt, userRoleIds);
        case 4:
          deletedUserRole = _context9.sent;
          res.status(200).send({
            success: true,
            message: "UserRole deleted successfully",
            userRole: deletedUserRole
          });
          _context9.next = 12;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          error = errorLog("Error while deleting the userRole", _context9.t0);
          res.status((_err$status9 = _context9.t0.status) !== null && _err$status9 !== void 0 ? _err$status9 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 12:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function deleteBulkUserRoleController(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// ---------------------- Search methods ----------------------\\
var searchUserRoleController = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var searchUserRole, userRoles, _err$status10, error;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          searchUserRole = req.body;
          _context10.next = 4;
          return userRoleBL.searchUserRole(req.cookies.jwt, searchUserRole);
        case 4:
          userRoles = _context10.sent;
          res.status(200).send({
            success: true,
            userRoles: userRoles,
            message: "UserRoles retrieved based on search criteria"
          });
          _context10.next = 12;
          break;
        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          error = errorLog("Error while searching for userRoles", _context10.t0);
          res.status((_err$status10 = _context10.t0.status) !== null && _err$status10 !== void 0 ? _err$status10 : 500).send({
            success: false,
            message: error.message,
            error: error.error
          });
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return function searchUserRoleController(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  getUserRolesController: getUserRolesController,
  getUserRoleByIdController: getUserRoleByIdController,
  getUserRolesByIdsController: getUserRolesByIdsController,
  createUserRoleController: createUserRoleController,
  createBulkUserRoleController: createBulkUserRoleController,
  updateUserRoleByIdController: updateUserRoleByIdController,
  updateBalkUserRoleController: updateBalkUserRoleController,
  deleteUserRoleByIdController: deleteUserRoleByIdController,
  deleteBulkUserRoleController: deleteBulkUserRoleController,
  searchUserRoleController: searchUserRoleController
};

/***/ }),

/***/ "./src/dataAccessLayer/bookCategoryDL.js":
/*!***********************************************!*\
  !*** ./src/dataAccessLayer/bookCategoryDL.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookCategoryModel = __webpack_require__(/*! ../models/bookCategoryModel */ "./src/models/bookCategoryModel.js");

//---------------------- Get methods ----------------------\\
exports.getBookCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchBookCategory, pagingQuery) {
    var defaultPagingQuery, startIndex, sortedQuery, totalBookCategory, bookCategories;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookCategory',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
          sortedQuery = {};
          sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
          _context.next = 7;
          return bookCategoryModel.countDocuments();
        case 7:
          totalBookCategory = _context.sent;
          _context.next = 10;
          return bookCategoryModel.find(searchBookCategory).sort(sortedQuery).skip(startIndex).limit(applyPagingQuery.pageSize);
        case 10:
          bookCategories = _context.sent;
          return _context.abrupt("return", {
            bookCategories: bookCategories,
            totalBookCategory: totalBookCategory
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createBookCategory = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bookCategory) {
    var newBookCategory;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          newBookCategory = new bookCategoryModel(bookCategory); //const options = { wtimeout: 20000 };
          _context2.next = 3;
          return newBookCategory.save();
        case 3:
          return _context2.abrupt("return", _context2.sent);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createBulkBookCategory = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(users) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return bookCategoryModel.insertMany(users, {
            ordered: false
          });
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateBookCategoryById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId, user) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return bookCategoryModel.findByIdAndUpdate(userId, user, {
            "new": true
          });
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateBulkBookCategories = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bulkUpdateOperations) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return bookCategoryModel.bulkWrite(bulkUpdateOperations, {
            ordered: false
          });
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x7) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteBookCategoryById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bookCategoryId) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return bookCategoryModel.findByIdAndDelete(bookCategoryId);
        case 2:
          return _context6.abrupt("return", _context6.sent);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x8) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteBulkBookCategory = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bulkDeleteOperations) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return bookCategoryModel.bulkWrite(bulkDeleteOperations);
        case 2:
          return _context7.abrupt("return", _context7.sent);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/dataAccessLayer/bookInfoDL.js":
/*!*******************************************!*\
  !*** ./src/dataAccessLayer/bookInfoDL.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookInfoModel = __webpack_require__(/*! ../models/bookInfoModel */ "./src/models/bookInfoModel.js");

//---------------------- Get methods ----------------------\\
exports.getBookInfos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchBookInfo, pagingQuery) {
    var defaultPagingQuery, startIndex, sortedQuery, totalBookInfo, bookInfos;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookTitle',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
          sortedQuery = {};
          sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
          _context.next = 7;
          return bookInfoModel.countDocuments();
        case 7:
          totalBookInfo = _context.sent;
          _context.next = 10;
          return bookInfoModel.find(searchBookInfo).sort(sortedQuery).skip(startIndex).limit(applyPagingQuery.pageSize);
        case 10:
          bookInfos = _context.sent;
          return _context.abrupt("return", {
            bookInfos: bookInfos,
            totalBookInfo: totalBookInfo
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createBookInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bookInfo) {
    var newBookInfo;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          newBookInfo = new bookInfoModel(bookInfo); //const options = { wtimeout: 20000 };
          _context2.next = 3;
          return newBookInfo.save();
        case 3:
          return _context2.abrupt("return", _context2.sent);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createBulkBookInfo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(users) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return bookInfoModel.insertMany(users, {
            ordered: false
          });
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateBookInfoById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId, user) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return bookInfoModel.findByIdAndUpdate(userId, user, {
            "new": true
          });
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateBulkBookInfos = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bulkUpdateOperations) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return bookInfoModel.bulkWrite(bulkUpdateOperations, {
            ordered: false
          });
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x7) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteBookInfoById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bookInfoId) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return bookInfoModel.findByIdAndDelete(bookInfoId);
        case 2:
          return _context6.abrupt("return", _context6.sent);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x8) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteBulkBookInfo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bulkDeleteOperations) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return bookInfoModel.bulkWrite(bulkDeleteOperations);
        case 2:
          return _context7.abrupt("return", _context7.sent);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/dataAccessLayer/bookReservationDL.js":
/*!**************************************************!*\
  !*** ./src/dataAccessLayer/bookReservationDL.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var bookReservationModel = __webpack_require__(/*! ../models/bookReservationModel */ "./src/models/bookReservationModel.js");
var reservationDetailModel = __webpack_require__(/*! ../models/reservationDetailModel */ "./src/models/reservationDetailModel.js");

//---------------------- Get methods ----------------------\\
exports.getBookReservations = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(searchBookReservation, pagingQuery) {
    var defaultPagingQuery, applyPagingQuery, startIndex, sortedQuery, _yield$Promise$all, _yield$Promise$all2, bookReservations, totalBookReservation, bookReservationsWithDetails;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookReservationName',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
          sortedQuery = {};
          sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
          _context2.prev = 5;
          _context2.next = 8;
          return Promise.all([bookReservationModel.find(searchBookReservation).sort(sortedQuery).skip(startIndex).limit(applyPagingQuery.pageSize), bookReservationModel.countDocuments()]);
        case 8:
          _yield$Promise$all = _context2.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          bookReservations = _yield$Promise$all2[0];
          totalBookReservation = _yield$Promise$all2[1];
          _context2.next = 14;
          return Promise.all(bookReservations.map( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(bookReservation) {
              var details;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return reservationDetailModel.find({
                      bookReservationId: bookReservation._id
                    });
                  case 2:
                    details = _context.sent;
                    return _context.abrupt("return", _objectSpread(_objectSpread({}, bookReservation.toObject()), {}, {
                      detailTable: details.map(function (detail) {
                        return detail.toObject();
                      })
                    }));
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 14:
          bookReservationsWithDetails = _context2.sent;
          return _context2.abrupt("return", {
            bookReservations: bookReservationsWithDetails,
            totalBookReservation: totalBookReservation
          });
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](5);
          // Handle errors
          console.error('Error retrieving book reservations:', _context2.t0);
          throw _context2.t0;
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 18]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createBookReservation = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bookReservation) {
    var newBookReservation;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          newBookReservation = new bookReservationModel(bookReservation);
          _context3.next = 3;
          return newBookReservation.save();
        case 3:
          return _context3.abrupt("return", _context3.sent);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateBookReservationById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bookReservationId, updatedBookReservation) {
    var updatedMaster, updateDetailsPromises;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return bookReservationModel.findByIdAndUpdate(bookReservationId, updatedBookReservation, {
            "new": true
          });
        case 2:
          updatedMaster = _context5.sent;
          if (!(updatedMaster && updatedBookReservation.detailTable && updatedBookReservation.detailTable.length > 0)) {
            _context5.next = 7;
            break;
          }
          updateDetailsPromises = updatedBookReservation.detailTable.map( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(detail) {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return reservationDetailModel.findByIdAndUpdate(detail._id, {
                      detailTableName: detail.detailTableName,
                      detailTableAccessLevel: detail.detailTableAccessLevel,
                      detailTableDescription: detail.detailTableDescription
                    }, {
                      "new": true
                    });
                  case 2:
                    return _context4.abrupt("return", _context4.sent);
                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x7) {
              return _ref5.apply(this, arguments);
            };
          }());
          _context5.next = 7;
          return Promise.all(updateDetailsPromises);
        case 7:
          return _context5.abrupt("return", updatedMaster);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteBookReservationById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bookReservationId) {
    var deletedBookReservation;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return bookReservationModel.findByIdAndDelete(bookReservationId);
        case 2:
          deletedBookReservation = _context6.sent;
          if (!deletedBookReservation) {
            _context6.next = 6;
            break;
          }
          _context6.next = 6;
          return reservationDetailModel.deleteMany({
            bookReservationId: bookReservationId
          });
        case 6:
          return _context6.abrupt("return", deletedBookReservation);
        case 7:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x8) {
    return _ref6.apply(this, arguments);
  };
}();

// ---------------------- Extra methods ----------------------\\
exports.getAvailableBook = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(pipeline, pagingQuery) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          reservationDetailModel.aggregate(pipeline);
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getReservedBook = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(pagingQuery) {
    var defaultPagingQuery, applyPagingQuery, startIndex, sortedQuery;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'bookReservationName',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
          sortedQuery = {};
          sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x11) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/dataAccessLayer/enumTableDL.js":
/*!********************************************!*\
  !*** ./src/dataAccessLayer/enumTableDL.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var enumTableModel = __webpack_require__(/*! ../models/enumTableModel */ "./src/models/enumTableModel.js");

//---------------------- Get methods ----------------------\\
exports.getEnumTables = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchEnumTable, pagingQuery) {
    var defaultPagingQuery, startIndex, sortedQuery, totalEnumTable, enumTables;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'enumTableName',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
          sortedQuery = {};
          sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
          _context.next = 7;
          return enumTableModel.countDocuments();
        case 7:
          totalEnumTable = _context.sent;
          _context.next = 10;
          return enumTableModel.find(searchEnumTable).sort(sortedQuery).skip(startIndex).limit(applyPagingQuery.pageSize);
        case 10:
          enumTables = _context.sent;
          return _context.abrupt("return", {
            enumTables: enumTables,
            totalEnumTable: totalEnumTable
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ---------------------- Create methods ----------------------\\
exports.createEnumTable = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(enumTable) {
    var newEnumTable;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          newEnumTable = new enumTableModel(enumTable); //const options = { wtimeout: 20000 };
          _context2.next = 3;
          return newEnumTable.save();
        case 3:
          return _context2.abrupt("return", _context2.sent);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createBulkEnumTable = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(enumTables) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return enumTableModel.insertMany(enumTables, {
            ordered: false
          });
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();

// ---------------------- Update methods ----------------------\\
exports.updateEnumTableById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId, user) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return enumTableModel.findByIdAndUpdate(userId, user, {
            "new": true
          });
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateBulkEnumTables = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bulkUpdateOperations) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return enumTableModel.bulkWrite(bulkUpdateOperations, {
            ordered: false
          });
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x7) {
    return _ref5.apply(this, arguments);
  };
}();

// ---------------------- Delete methods ----------------------\\
exports.deleteEnumTableById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(enumTableId) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return enumTableModel.findByIdAndDelete(enumTableId);
        case 2:
          return _context6.abrupt("return", _context6.sent);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x8) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteBulkEnumTable = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bulkDeleteOperations) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return enumTableModel.bulkWrite(bulkDeleteOperations);
        case 2:
          return _context7.abrupt("return", _context7.sent);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/dataAccessLayer/userDL.js":
/*!***************************************!*\
  !*** ./src/dataAccessLayer/userDL.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var userModel = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
exports.getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchUser, pagingQuery) {
    var defaultPagingQuery, startIndex, sortedQuery, totalUser, users;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          defaultPagingQuery = {
            page: 1,
            pageSize: 100,
            sortBy: 'userName',
            sortOrder: 1
          };
          applyPagingQuery = !pagingQuery || isNaN(pagingQuery.page) || isNaN(pagingQuery.pageSize) || !pagingQuery.sortBy || !pagingQuery.sortOrder || pagingQuery.pageSize < 1 ? defaultPagingQuery : pagingQuery;
          startIndex = (applyPagingQuery.page - 1) * applyPagingQuery.pageSize;
          sortedQuery = {};
          sortedQuery[applyPagingQuery.sortBy] = applyPagingQuery.sortOrder;
          _context.next = 7;
          return userModel.countDocuments();
        case 7:
          totalUser = _context.sent;
          _context.next = 10;
          return userModel.find(searchUser).sort(sortedQuery).skip(startIndex).limit(applyPagingQuery.pageSize);
        case 10:
          users = _context.sent;
          return _context.abrupt("return", {
            users: users,
            totalUser: totalUser
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getUserById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userId) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return userModel.findById(userId);
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user) {
    var newUser;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          newUser = new userModel(user);
          _context3.next = 3;
          return newUser.save();
        case 3:
          return _context3.abrupt("return", _context3.sent);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createBulkUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(users) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return userModel.insertMany(users, {
            ordered: false
          });
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateUserById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId, user) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return userModel.findByIdAndUpdate(userId, user, {
            "new": true
          });
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateBulkUsers = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bulkUpdateOperations) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return userModel.bulkWrite(bulkUpdateOperations, {
            ordered: false
          });
        case 2:
          return _context6.abrupt("return", _context6.sent);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x8) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteUserById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userId) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return userModel.findByIdAndDelete(userId);
        case 2:
          return _context7.abrupt("return", _context7.sent);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteBulkUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(bulkDeleteOperations) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return userModel.bulkWrite(bulkDeleteOperations);
        case 2:
          return _context8.abrupt("return", _context8.sent);
        case 3:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x10) {
    return _ref8.apply(this, arguments);
  };
}();
exports.searchUser = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(searchUser) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return userModel.find(searchUser);
        case 2:
          return _context9.abrupt("return", _context9.sent);
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x11) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/dataAccessLayer/userRoleDL.js":
/*!*******************************************!*\
  !*** ./src/dataAccessLayer/userRoleDL.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var userRoleModel = __webpack_require__(/*! ../models/userRoleModel */ "./src/models/userRoleModel.js");
exports.getUserRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(searchUserRole) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return userRoleModel.find(searchUserRole);
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getUserRoleById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userId) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return userRoleModel.findById(userId);
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createUserRole = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user) {
    var newUserRole;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          newUserRole = new userRoleModel(user);
          _context3.next = 3;
          return newUserRole.save();
        case 3:
          return _context3.abrupt("return", _context3.sent);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createBulkUserRole = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(users) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return userRoleModel.insertMany(users, {
            ordered: false
          });
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateUserRoleById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId, user) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return userRoleModel.findByIdAndUpdate(userId, user, {
            "new": true
          });
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateBulkUserRoles = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bulkUpdateOperations) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return userRoleModel.bulkWrite(bulkUpdateOperations, {
            ordered: false
          });
        case 2:
          return _context6.abrupt("return", _context6.sent);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x7) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteUserRole = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userRoleId) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return userRoleModel.findByIdAndDelete(userRoleId);
        case 2:
          return _context7.abrupt("return", _context7.sent);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x8) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteBulkUserRole = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(bulkDeleteOperations) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return userRoleModel.bulkWrite(bulkDeleteOperations);
        case 2:
          return _context8.abrupt("return", _context8.sent);
        case 3:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x9) {
    return _ref8.apply(this, arguments);
  };
}();
exports.searchUserRole = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(searchUserRole) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return userRoleModel.find(searchUserRole);
        case 2:
          return _context9.abrupt("return", _context9.sent);
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x10) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/lib/commonUtil.js":
/*!*******************************!*\
  !*** ./src/lib/commonUtil.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

exports.generateReferenceNumber = function () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'REF';
  // Add a prefix to the reference number
  var referenceNumber = prefix;

  // Add timestamp to the reference number (optional, you can customize the format)
  var timestamp = new Date().toISOString().replace(/[-:T.]/g, '');
  referenceNumber += timestamp;

  // Add a random number to the reference number
  var randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  referenceNumber += randomPart;
  return referenceNumber;
};
exports.isEmptyStringNullOrUndefined = function (value) {
  // Check for empty string, null, or undefined
  if (value === '' || value === null || value === undefined) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ "./src/lib/createJwtToken.js":
/*!***********************************!*\
  !*** ./src/lib/createJwtToken.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
function createJwtToken(userId) {
  var maxAge = parseInt(process.env.MAX_AGE, 10); // 7 days

  return jwt.sign({
    userId: userId
  }, process.env.JWT_SECRET, {
    expiresIn: maxAge // expires in second
  });
}
module.exports = createJwtToken;

/***/ }),

/***/ "./src/lib/dbConnection.js":
/*!*********************************!*\
  !*** ./src/lib/dbConnection.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(__webpack_require__(/*! dotenv */ "dotenv").config)();
var messageLog = __webpack_require__(/*! ./messageLog */ "./src/lib/messageLog.js");
var errorLog = __webpack_require__(/*! ./errorLog */ "./src/lib/errorLog.js");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var connectDB = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(mongoDbUrl) {
    var conn;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return mongoose.connect(mongoDbUrl !== null && mongoDbUrl !== void 0 ? mongoDbUrl : process.env.MONGODB_URL, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useCreateIndex: true,
          });
        case 3:
          conn = _context.sent;
          messageLog("Connected To Database (".concat(mongoose.connection.host, ")"));
          return _context.abrupt("return", conn);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          errorLog("DB connection error", _context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function connectDB(_x) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = connectDB;

/***/ }),

/***/ "./src/lib/decodeJwtToken.js":
/*!***********************************!*\
  !*** ./src/lib/decodeJwtToken.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
function decodeJwtToken(jwtToken) {
  var finalDecodedToken = null;
  if (jwtToken) {
    jwt.verify(jwtToken, process.env.JWT_SECRET, function (err, decodedToken) {
      if (err) {
        throw new Error(err);
      } else {
        finalDecodedToken = decodedToken;
      }
    });
  } else {
    var error = new Error('Token not found');
    error.status = 401;
    error.message = 'Please login again';
    error.error = 'Token not found';
    throw error;
  }
  return finalDecodedToken;
}
module.exports = decodeJwtToken;

/***/ }),

/***/ "./src/lib/errorLog.js":
/*!*****************************!*\
  !*** ./src/lib/errorLog.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var errorLogger = (__webpack_require__(/*! ./logger */ "./src/lib/logger.js").errorLogger);
function errorLog(message, error) {
  var _error$error;
  var flug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var errors = {
    message: message,
    error: (_error$error = error.error) !== null && _error$error !== void 0 ? _error$error : error.message,
    status: error.statusCode
  };

  // duplicate email error form MongoDB Atlas database
  if (error.message.includes('E11000')) {
    errors.status = 400;
    if (flug === 'login-user-register') {
      errors.message = 'The email is already existed';
    } else {
      errors.message = 'The value is already existed, please check unique value field';
    }
  }

  // if table id not match form MongoDB Atlas database
  if (error.message.includes('Cast to ObjectId failed for value')) {
    errors.error = 'The record is not found';
  }
  errorLogger.error("Message : ".concat(message, " /nError : ").concat(errors.error, "/nStatusCode : ").concat(errors.status, "/nDetails : ").concat(error));
  return errors;
}
module.exports = errorLog;

/***/ }),

/***/ "./src/lib/errorLogLogin.js":
/*!**********************************!*\
  !*** ./src/lib/errorLogLogin.js ***!
  \**********************************/
/***/ ((module) => {

function errorLogLogin(error) {
  var errors = {
    email: '',
    password: ''
  };

  // incorrect email
  if (error.message === 'incorrect email') {
    errors.email = 'The email is not registered';
  }

  // incorrect password
  if (error.message === 'incorrect password') {
    errors.password = 'The password is incorrect';
  }

  // duplicate email error
  if (error.code === 11000) {
    errors.email = 'The email is already existed';
    return errors;
  }

  // validation errors
  if (error.message.includes('user validation failed')) {
    Object.values(error.errors).forEach(function (_ref) {
      var properties = _ref.properties;
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}
module.exports = errorLogLogin;

/***/ }),

/***/ "./src/lib/getAuthUser.js":
/*!********************************!*\
  !*** ./src/lib/getAuthUser.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var userModel = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
var decodeJwtToken = __webpack_require__(/*! ./decodeJwtToken */ "./src/lib/decodeJwtToken.js");
function getAuthUser(_x) {
  return _getAuthUser.apply(this, arguments);
}
function _getAuthUser() {
  _getAuthUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(jwtToken) {
    var decodedToken, user, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          decodedToken = decodeJwtToken(jwtToken);
          _context.next = 3;
          return userModel.findById(decodedToken.userId);
        case 3:
          user = _context.sent;
          if (user) {
            _context.next = 10;
            break;
          }
          error = new Error();
          error.status = 401;
          error.message = 'You are not authorized to access this application, please login again';
          error.error = "Login unauthenticated attempt from ".concat(decodedToken.email);
          throw error;
        case 10:
          return _context.abrupt("return", user);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getAuthUser.apply(this, arguments);
}
module.exports = getAuthUser;

/***/ }),

/***/ "./src/lib/idAndPropertyValidationUtil.js":
/*!************************************************!*\
  !*** ./src/lib/idAndPropertyValidationUtil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

// Private function
function getWrongPropertyList(modelSchema, enumTable, modelName) {
  var ignorePropertyList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var displayModelName = modelName || 'object';
  if (_typeof(enumTable) !== 'object' || enumTable === null) {
    var error = new Error();
    error.status = 400;
    error.message = "Invalid ".concat(displayModelName, ", please provide a valid ").concat(displayModelName);
    error.error = "Invalid ".concat(displayModelName, " structure");
    throw error;
  }
  var modelProperties = Object.keys(modelSchema);
  var givenObjectProperties = Object.keys(enumTable);
  return givenObjectProperties.filter(function (property) {
    return !modelProperties.includes(property) && !ignorePropertyList.includes(property);
  });
}

// Public function
exports.checkWrongId = function (id, idName) {
  var displayIdName = idName || 'id';

  // Given id validation
  if (!id) {
    var error = new Error();
    error.status = 400;
    error.message = "Please provide a valid ".concat(displayIdName, " ID");
    error.error = "Invalid ".concat(displayIdName, " ID");
    throw error;
  }

  // MongoDB id type validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    var _error = new Error();
    _error.status = 400;
    _error.message = "Invalid ".concat(displayIdName, " ID");
    _error.error = "Invalid type of MongoDB ".concat(displayIdName, " ID");
    throw _error;
  }
};

// exports.checkWrongIdOfList = (ids, idName) => {
//     let displayIdName = idName || 'id';

//     // Check if given ids is null or undefined
//     if (!ids) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide a valid ${displayIdName} ID`;
//         error.error = `Invalid ${displayIdName} ID`;
//         throw error;
//     }

//     // Check if given data is an array
//     if (!Array.isArray(ids)) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide a valid array of ${displayModelName}(s)`;
//         error.error = `The array of ${displayModelName} is not a valid array`;
//         throw error;
//     }

//     const wrongIdList = [];
//     const idsList = [];
//     const duplicateIds = [];

//     for (const id of ids) {
//         if (id) {
//             if (idsList.includes(obj._id) && !duplicateIds.includes(obj._id)) {
//                 duplicateIds.push(obj._id);
//             }

//             idsList.push(obj._id);
//         }

//         // MongoDB id type validation
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             wrongIdList.push(id);
//         }
//     }

//     // Check for duplicate IDs
//     if (duplicateIds && duplicateIds.length > 0) {
//         const pluralSuffix = duplicateIds.length > 1 ? 's' : '';
//         const duplicateIdsString = JSON.stringify(duplicateIds);
//         const error = new Error();
//         error.status = 400;
//         error.message = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         error.error = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         throw error;
//     }

//     // Check for wrong IDs
//     if (wrongIdList && wrongIdList.length > 0) {
//         const pluralSuffix = wrongIdList.length > 1 ? 'ies' : 'y';
//         const propertiesString = JSON.stringify(wrongIdList);
//         const error = new Error();
//         error.status = 400;
//         error.message = `Invalid ID${pluralSuffix}: (${propertiesString}) in one or more of the given ${displayModelName}s`;
//         error.error = `Invalid ID${pluralSuffix}: (${propertiesString}) in one or more of the given ${displayModelName}s`;
//         throw error;
//     }
// };

exports.checkWrongProperty = function (obj, modelSchema, modelName) {
  var ignorePropertyList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var displayModelName = modelName || 'object';

  // Check if given enum tables is null or undefined
  if (!obj) {
    var error = new Error();
    error.status = 400;
    error.message = "Please provide valid ".concat(displayModelName);
    error.error = "The ".concat(displayModelName, " is null or undefined");
    throw error;
  }
  var wrongProperties = getWrongPropertyList(modelSchema, obj, modelName, ignorePropertyList);
  if (wrongProperties && wrongProperties.length > 0) {
    var pluralSuffix = wrongProperties.length > 1 ? 'ies' : 'y';
    var propertiesString = JSON.stringify(wrongProperties); //wrongProperties.join('", "');

    var _error2 = new Error();
    _error2.status = 400;
    _error2.message = "Invalid propert".concat(pluralSuffix, ": ").concat(propertiesString, " in one or more of the given ").concat(displayModelName);
    _error2.error = "Invalid propert".concat(pluralSuffix, ": ").concat(propertiesString, " in one or more of the given ").concat(displayModelName);
    throw _error2;
  }
};
exports.checkWrongPropertyOfList = function (objectList, modelSchema, modelName) {
  var ignorePropertyList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var displayModelName = modelName || 'array of objects';

  // Check if given enum tables is null or undefined
  if (!objectList) {
    var error = new Error();
    error.status = 400;
    error.message = "Please provide valid ".concat(displayModelName, "(s)");
    error.error = "The ".concat(displayModelName, " is null or undefined");
    throw error;
  }

  // Check if given data is an array
  if (!Array.isArray(objectList)) {
    var _error3 = new Error();
    _error3.status = 400;
    _error3.message = "Please provide a valid array of ".concat(displayModelName, "(s)");
    _error3.error = "The array of ".concat(displayModelName, " is not a valid array");
    throw _error3;
  }
  var wrongPropertiesList = [];
  var idsList = [];
  var duplicateIds = [];
  var _iterator = _createForOfIteratorHelper(objectList),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var obj = _step.value;
      if (obj._id) {
        if (idsList.includes(obj._id) && !duplicateIds.includes(obj._id)) {
          duplicateIds.push(obj._id);
        }
        idsList.push(obj._id);
      }
      var wrongProperties = getWrongPropertyList(modelSchema, obj, ignorePropertyList);
      if (wrongProperties && wrongProperties.length > 0) {
        wrongPropertiesList.push(wrongProperties);
      }
    }

    // Check for duplicate IDs
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (duplicateIds && duplicateIds.length > 0) {
    var pluralSuffix = duplicateIds.length > 1 ? 's' : '';
    var duplicateIdsString = JSON.stringify(duplicateIds);
    var _error4 = new Error();
    _error4.status = 400;
    _error4.message = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
    _error4.error = "Duplicate ID".concat(pluralSuffix, " found: ").concat(duplicateIdsString);
    throw _error4;
  }

  // Check for wrong properties
  if (wrongPropertiesList && wrongPropertiesList.length > 0) {
    var _pluralSuffix = wrongPropertiesList.length > 1 ? 'ies' : 'y';
    var propertiesString = JSON.stringify(wrongPropertiesList);
    var _error5 = new Error();
    _error5.status = 400;
    _error5.message = "Invalid propert".concat(_pluralSuffix, ": (").concat(propertiesString, ") in one or more of the given ").concat(displayModelName, "s");
    _error5.error = "Invalid propert".concat(_pluralSuffix, ": (").concat(propertiesString, ") in one or more of the given ").concat(displayModelName, "s");
    throw _error5;
  }
};
exports.separateMongoDbValidAndInvalidIds = function (ids, idName) {
  var displayIdName = idName || 'IDs';

  // Check if given enum tables is null or undefined
  if (!ids) {
    var error = new Error();
    error.status = 400;
    error.message = "Please provide valid ".concat(displayIdName);
    error.error = "The ".concat(displayIdName, " is null or undefined");
    throw error;
  }

  // Check if given data is an array
  var idArray = Array.isArray(ids);
  if (!idArray) {
    var _error6 = new Error();
    _error6.status = 400;
    _error6.message = "Invalid array of ".concat(displayIdName, ", please provide a valid array of ").concat(displayIdName);
    _error6.error = "Invalid array of ".concat(displayIdName);
    throw _error6;
  }
  var validIds = [];
  var invalidIds = [];
  var duplicateIds = [];
  var checkedIdsList = [];
  ids.forEach(function (id) {
    if (mongoose.Types.ObjectId.isValid(id)) {
      validIds.push(id);
    } else {
      invalidIds.push(id);
    }
    if (checkedIdsList.includes(id) && !duplicateIds.includes(id)) {
      duplicateIds.push(id);
    }
    checkedIdsList.push(id);
  });
  return {
    validIds: validIds,
    invalidIds: invalidIds,
    duplicateIds: duplicateIds
  };

  //Read: const { validIds, invalidIds, duplicateIds } = userModel.separateValidAndInvalidIds(idList);
};

// exports.checkDuplicateIdsOfList = (enumTableIds, modelName) => {
//     let displayModelName = modelName || 'array of objects';

//     // Check if given enum tables is null or undefined
//     if (!enumTableIds) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide valid ${displayModelName}(s) ID`;
//         error.error = `The ${displayModelName} is null or undefined`;
//         throw error;
//     }

//     if (!Array.isArray(enumTableIds)) {
//         const error = new Error();
//         error.status = 400;
//         error.message = `Please provide a valid array of ${displayModelName}(s) ID`;
//         error.error = `The array of ${displayModelName} is not a valid array of IDs`;
//         throw error;
//     }

//     const idsList = [];
//     const duplicateIds = [];

//     for (const enumTableId of enumTableIds) {

//         if (idsList.includes(enumTableId) && !duplicateIds.includes(enumTableId)) {
//             duplicateIds.push(enumTableId);
//         }

//         idsList.push(enumTableId);

//     }

//     // Check for duplicate IDs
//     if (duplicateIds && duplicateIds.length > 0) {
//         const pluralSuffix = duplicateIds.length > 1 ? 's' : '';
//         const duplicateIdsString = JSON.stringify(duplicateIds);
//         const error = new Error();
//         error.status = 400;
//         error.message = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         error.error = `Duplicate ID${pluralSuffix} found: ${duplicateIdsString}`;
//         throw error;
//     }
// };

exports.checkWrongAccessLevel = function (authUser, newEnumTable, modelName) {
  if (newEnumTable.enumTableAccessLevel < authUser.roleSerial) {
    var error = new Error();
    error.status = 400;
    error.message = "Invalid ".concat(modelName, " access level");
    error.error = "The ".concat(modelName, " access level (").concat(newEnumTable.enumTableAccessLevel, ") cannot be less than logged in user access level (").concat(authUser.roleSerial, ")");
    throw error;
  }
};
exports.checkWrongAccessLevelOfList = function (authUser, newEnumTables, modelName) {
  newEnumTables.forEach(function (enumTable) {
    if (enumTable.enumTableAccessLevel < authUser.roleSerial) {
      var error = new Error();
      error.status = 400;
      error.message = "Invalid ".concat(modelName, " access level");
      error.error = "The ".concat(modelName, " access level (").concat(enumTable.enumTableAccessLevel, ") cannot be less than logged in user access level (").concat(authUser.roleSerial, ")");
      throw error;
    }
  });
};

/***/ }),

/***/ "./src/lib/logger.js":
/*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var winston = __webpack_require__(/*! winston */ "winston");
var winstonRotator = __webpack_require__(/*! winston-daily-rotate-file */ "winston-daily-rotate-file");
var _require = __webpack_require__(/*! ./toTimestamp */ "./src/lib/toTimestamp.js"),
  toTimestampLog = _require.toTimestampLog;

// Console transport configuration for both success and error loggers
var consoleConfig = [new winston.transports.Console({
  colorize: true
})];

// Function to add timestamp to log messages
var addTimestamp = winston.format(function (info, opts) {
  if (opts.tz) {
    info.timestamp = toTimestampLog(opts.tz);
  } else {
    info.timestamp = new Date().toISOString();
  }
  return info;
});

// Success Logger Configuration
var successLoggerWinston = function successLoggerWinston() {
  try {
    return winston.createLogger({
      transports: [].concat(consoleConfig, [new winstonRotator({
        name: 'success-file',
        level: 'info',
        filename: './logs/success_%DATE%.log',
        // Adding %DATE% in the filename
        json: false,
        // Set to true if you want JSON logs
        datePattern: 'YYYY-MM',
        // 'YYYY-MM-DD'
        prepend: true,
        format: winston.format.combine(addTimestamp({
          tz: process.env.TIMEZONE
        }),
        // Finland time zone
        winston.format.simple(), winston.format.printf(function (_ref) {
          var timestamp = _ref.timestamp,
            level = _ref.level,
            message = _ref.message;
          return JSON.stringify({
            timestamp: timestamp,
            level: level.toUpperCase(),
            message: message
          });
        }))
      })])
    });
  } catch (error) {
    console.error('Error creating success logger:', error);
    return winston.createLogger();
  }
};

// Error Logger Configuration
var errorLoggerWinston = function errorLoggerWinston() {
  try {
    return winston.createLogger({
      transports: [].concat(consoleConfig, [new winstonRotator({
        name: 'error-file',
        level: 'error',
        filename: './logs/error_%DATE%.log',
        // Adding %DATE% in the filename
        json: false,
        // Set to true if you want JSON logs
        datePattern: 'YYYY-MM',
        // 'YYYY-MM-DD'
        prepend: true,
        format: winston.format.combine(addTimestamp({
          tz: process.env.TIMEZONE
        }),
        // Finland time zone
        winston.format.simple(), winston.format.printf(function (_ref2) {
          var timestamp = _ref2.timestamp,
            level = _ref2.level,
            message = _ref2.message;
          return JSON.stringify({
            timestamp: timestamp,
            level: level.toUpperCase(),
            message: message
          });
        }))
      })])
    });
  } catch (error) {
    console.error('Error creating error logger:', error);
    return winston.createLogger();
  }
};
module.exports = {
  successLogger: successLoggerWinston(),
  errorLogger: errorLoggerWinston()
};

/***/ }),

/***/ "./src/lib/messageLog.js":
/*!*******************************!*\
  !*** ./src/lib/messageLog.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var successLogger = (__webpack_require__(/*! ./logger */ "./src/lib/logger.js").successLogger);
function messageLog(message) {
  var flug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  successLogger.info("Message : ".concat(message));
}
module.exports = messageLog;

/***/ }),

/***/ "./src/lib/setJwtTokenInCookie.js":
/*!****************************************!*\
  !*** ./src/lib/setJwtTokenInCookie.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createJwtToken = __webpack_require__(/*! ./createJwtToken */ "./src/lib/createJwtToken.js");
function setJwtTokenInCookie(response, userId) {
  var maxAge = parseInt(process.env.MAX_AGE, 10) * 1000; // 7 days
  var jwtToken = createJwtToken(userId);
  response.cookie('jwt', jwtToken, {
    httpOnly: true,
    maxAge: maxAge,
    //maxAge in millisecond
    sameSite: 'None',
    secure: true
  });
  return jwtToken;
}
module.exports = setJwtTokenInCookie;

/***/ }),

/***/ "./src/lib/swagger.js":
/*!****************************!*\
  !*** ./src/lib/swagger.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var swaggerJSDoc = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
var swaggerUi = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
var options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js Express MongoDB CRUD API',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
    //security: [
    //{
    //bearerAuth: [],
    //},
    //],
  },
  // Path to the API docs
  apis: ['./swagger/*.js'] // Modify this based on your project structure
};
var swaggerSpec = swaggerJSDoc(options);
module.exports = {
  swaggerUi: swaggerUi,
  swaggerSpec: swaggerSpec
};

/***/ }),

/***/ "./src/lib/toTimestamp.js":
/*!********************************!*\
  !*** ./src/lib/toTimestamp.js ***!
  \********************************/
/***/ ((module) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function toTimezone(tz) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  // Get parts except timezone name
  var opts = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: tz,
    timeZoneName: 'shortOffset',
    hour12: false
  };
  // To get full timezone name
  var opts2 = {
    hour: 'numeric',
    timeZone: tz,
    timeZoneName: 'long'
  };
  var toParts = function toParts(opts) {
    return new Intl.DateTimeFormat('en', opts).formatToParts(date).reduce(function (acc, part) {
      acc[part.type] = part.value;
      return acc;
    }, Object.create(null));
  };
  var _toParts = toParts(opts),
    year = _toParts.year,
    month = _toParts.month,
    day = _toParts.day,
    weekday = _toParts.weekday,
    hour = _toParts.hour,
    minute = _toParts.minute,
    second = _toParts.second,
    timeZoneName = _toParts.timeZoneName;
  // Fix offset
  var sign = /\+/.test(timeZoneName) ? '+' : '-';
  var _timeZoneName$substr$ = timeZoneName.substr(4).split(':'),
    _timeZoneName$substr$2 = _slicedToArray(_timeZoneName$substr$, 2),
    oH = _timeZoneName$substr$2[0],
    oM = _timeZoneName$substr$2[1];
  var offset = "GMT".concat(sign).concat(oH.padStart(2, '0')).concat(oM || '00');
  // Get timezone name
  timeZoneName = toParts(opts2).timeZoneName;
  return "".concat(weekday, " ").concat(month, " ").concat(day, " ").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second, " ").concat(offset, " (").concat(timeZoneName, ")");
}
function toTimestampLog(tz) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  // Get parts except timezone name
  var opts = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: tz,
    timeZoneName: 'shortOffset',
    hour12: false
  };
  // To get full timezone name
  var opts2 = {
    hour: 'numeric',
    timeZone: tz,
    timeZoneName: 'long'
  };
  var toParts = function toParts(opts) {
    return new Intl.DateTimeFormat('en', opts).formatToParts(date).reduce(function (acc, part) {
      acc[part.type] = part.value;
      return acc;
    }, Object.create(null));
  };
  var _toParts2 = toParts(opts),
    year = _toParts2.year,
    month = _toParts2.month,
    day = _toParts2.day,
    weekday = _toParts2.weekday,
    hour = _toParts2.hour,
    minute = _toParts2.minute,
    second = _toParts2.second,
    timeZoneName = _toParts2.timeZoneName;
  // Fix offset
  var sign = /\+/.test(timeZoneName) ? '+' : '-';
  var _timeZoneName$substr$3 = timeZoneName.substr(4).split(':'),
    _timeZoneName$substr$4 = _slicedToArray(_timeZoneName$substr$3, 2),
    oH = _timeZoneName$substr$4[0],
    oM = _timeZoneName$substr$4[1];
  var offset = "GMT".concat(sign).concat(oH.padStart(2, '0')).concat(oM || '00');
  // Get timezone name
  timeZoneName = toParts(opts2).timeZoneName;
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(second, " ").concat(offset);
}
module.exports = {
  toTimezone: toTimezone,
  toTimestampLog: toTimestampLog
};

/***/ }),

/***/ "./src/lib/uploadFile.js":
/*!*******************************!*\
  !*** ./src/lib/uploadFile.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var multer = __webpack_require__(/*! multer */ "multer");
var path = __webpack_require__(/*! path */ "path");

// Set up storage for uploaded files
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/'); // The folder where uploaded files will be stored
  },
  filename: function filename(req, file, cb) {
    var ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Rename file to include timestamp
  }
});
var uploadFile = multer({
  storage: storage
});
module.exports = uploadFile;

/***/ }),

/***/ "./src/lib/userAccessibilityOperation.js":
/*!***********************************************!*\
  !*** ./src/lib/userAccessibilityOperation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

// Private methods

// Public methods
exports.checkOperationAccessibilityByRole = function (authUserRoleSerial, maxAccessibilityLevel, operationName) {
  var start = 1;
  var end = maxAccessibilityLevel;

  // Generate an array of numbers from start to end
  var filterArray = Array.from({
    length: end - start + 1
  }, function (_, index) {
    return start + index;
  });
  // Check if 5 exists in the array
  var isExists = filterArray.includes(authUserRoleSerial);
  if (!isExists) {
    var error = new Error();
    error.status = 403;
    error.message = 'You are not authorized. Please contact your administrator.';
    error.error = "You are not authorized to access the ".concat(operationName);
    throw error;
  }
};
exports.getDataAccessibilityRoleFilter = function (authUserRoleSerial) {
  if (authUserRoleSerial === 99) {
    var error = new Error();
    error.status = 403;
    error.message = 'You are not authorized. Please contact your administrator.';
    error.error = "You are not authorized to access this data";
    throw error;
  }
  var endRoleSerial = 10; // See Role Serial of userSchema

  var accessibilityRoleSerials = [];
  for (var i = authUserRoleSerial; i <= endRoleSerial; i++) {
    accessibilityRoleSerials.push(i);
  }
  return {
    $in: accessibilityRoleSerials
  };
};

/***/ }),

/***/ "./src/middlewares/authMiddleware.js":
/*!*******************************************!*\
  !*** ./src/middlewares/authMiddleware.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var userModel = __webpack_require__(/*! ../models/userModel */ "./src/models/userModel.js");
var requireAuth = function requireAuth(req, res, next) {
  var token = req.cookies.jwt;

  // check json web token exists
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decodedToken) {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "You are not authorized",
          error: err.message
        });
        //res.redirect('/v1/user/login'); // Redirect if token is not valid
      } else {
        next();
      }
    });
  } else {
    return res.status(401).send({
      success: false,
      message: "You are not authorized",
      error: "Token not found"
    });
    //res.redirect('/v1/user/login'); // Redirect if token is not present
  }
};

// check current user
var checkUser = function checkUser(req, res, next) {
  var token = req.body.token;
  if (!token) {
    token = req.cookies.jwt;
  }
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, decodedToken) {
        var user;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!err) {
                _context.next = 4;
                break;
              }
              res.locals.user = null;
              _context.next = 8;
              break;
            case 4:
              _context.next = 6;
              return userModel.findById(decodedToken.id);
            case 6:
              user = _context.sent;
              res.locals.user = user;
            case 8:
              next();
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  } else {
    res.locals.user = null;
    next();
  }
};
module.exports = {
  requireAuth: requireAuth,
  checkUser: checkUser
};

/***/ }),

/***/ "./src/models/bookCategoryModel.js":
/*!*****************************************!*\
  !*** ./src/models/bookCategoryModel.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var messageLog = __webpack_require__(/*! ../lib/messageLog */ "./src/lib/messageLog.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

//schema/Model
var bookCategorySchema = new mongoose.Schema({
  bookCategoryName: {
    type: String,
    required: [true, "Book category name is required"],
    unique: true,
    validate: {
      validator: function () {
        var _validator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
          var existingBookCategory;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.constructor.findOne({
                  bookCategoryName: {
                    $regex: new RegExp("^".concat(value, "$"), 'i')
                  }
                });
              case 2:
                existingBookCategory = _context.sent;
                return _context.abrupt("return", !existingBookCategory);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function validator(_x) {
          return _validator.apply(this, arguments);
        }
        return validator;
      }(),
      message: function message(props) {
        return "Book category '".concat(props.value, "' already exists.");
      }
    }
  },
  bookCategoryDescription: {
    type: String
  },
  bookCategoryAccessLevel: {
    type: Number,
    //required: [true, "Book category role access level is required"],
    "default": 10
  }
}, {
  timestamps: true
});

// create a default admin user when the server starts
bookCategorySchema.statics.createDefaultBookCategory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var adminUser;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.prev = 0;
        _context2.next = 3;
        return bookCategoryModel.findOne({
          bookCategoryName: 'Undefined'
        });
      case 3:
        adminUser = _context2.sent;
        if (adminUser) {
          _context2.next = 8;
          break;
        }
        _context2.next = 7;
        return bookCategoryModel.create({
          bookCategoryName: 'Undefined',
          bookCategoryDescription: 'Undefined',
          bookCategoryAccessLevel: 10
        });
      case 7:
        messageLog('Default book category is created.');
      case 8:
        _context2.next = 13;
        break;
      case 10:
        _context2.prev = 10;
        _context2.t0 = _context2["catch"](0);
        errorLog('Error creating default book category:', _context2.t0);
      case 13:
      case "end":
        return _context2.stop();
    }
  }, _callee2, null, [[0, 10]]);
}));

// Common methods
// Function to check if a value is an object and contains specific properties
var isAllPropertiesPresence = function isAllPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error = new Error();
    _error.status = 400;
    _error.message = 'The book category is not valid';
    _error.error = 'The book category is null or undefined';
    throw _error;
  }

  // Check for specific properties including _id
  if ('_id' in value && 'bookCategoryName' in value && 'bookCategoryDescription' in value && 'bookCategoryAccessLevel' in value) {
    // Check the types of properties
    if (typeof value._id === 'string' &&
    // Assuming _id is a string, modify if it's a different type
    typeof value.bookCategoryName === 'string' && (typeof value.bookCategoryDescription === 'string' || value.bookCategoryDescription === undefined) && (typeof value.bookCategoryAccessLevel === 'number' || value.bookCategoryAccessLevel === undefined)) {
      return;
    }
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The book category is invalid';
  error.error = 'The book category is not containing all of the required properties';
  throw error;
};

// Function to check if a list of objects are valid
var isAllPropertiesPresenceOfListObjects = function isAllPropertiesPresenceOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'Please provide a valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      // Check for all of the specific properties including _id presence
      isAllPropertiesPresence(value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return; // All objects in the array are valid
};
var isIdPropertyPresence = function isIdPropertyPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var error = new Error();
    error.status = 400;
    error.message = 'The book category is not valid';
    error.error = 'The book category is null or undefined';
    throw error;
  }
  if (!('_id' in value && typeof value._id === 'string')) {
    var _error2 = new Error();
    _error2.status = 400;
    _error2.message = 'The book category is not valid';
    _error2.error = 'The book category is not containing _id property';
    throw _error2;
  }
};

// Function to check if a value is an object and contains specific properties
var isOneOfPropertiesPresence = function isOneOfPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error3 = new Error();
    _error3.status = 400;
    _error3.message = 'The book category is not valid';
    _error3.error = 'The book category is null or undefined';
    throw _error3;
  }

  // Check for at least one of the specific properties
  if ('bookCategoryName' in value && typeof value.bookCategoryName === 'string' || 'bookCategoryDescription' in value && (typeof value.bookCategoryDescription === 'string' || value.bookCategoryDescription === undefined) || 'bookCategoryAccessLevel' in value && (typeof value.bookCategoryAccessLevel === 'number' || value.bookCategoryAccessLevel === undefined)) {
    return;
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The book category is invalid';
  error.error = 'The book category is not containing at least one of the required properties';
  throw error;
};
var isOneOfPropertiesPresenceWithIdOfListObjects = function isOneOfPropertiesPresenceWithIdOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator2 = _createForOfIteratorHelper(list),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      // Check if id is present
      isIdPropertyPresence(value);
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return; // All objects in the array are valid
};

// Function to check if a list of objects are valid
var isOneOfPropertiesPresenceOfListObjects = function isOneOfPropertiesPresenceOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator3 = _createForOfIteratorHelper(list),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var value = _step3.value;
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return; // All objects in the array are valid
};

// Public static methods
bookCategorySchema.statics.generateBulkUpdateOperations = function (updatableBookCategories) {
  isOneOfPropertiesPresenceWithIdOfListObjects(updatableBookCategories);
  return updatableBookCategories.map(function (_ref2) {
    var _id = _ref2._id,
      bookCategoryName = _ref2.bookCategoryName,
      bookCategoryDescription = _ref2.bookCategoryDescription,
      bookCategoryAccessLevel = _ref2.bookCategoryAccessLevel;
    return {
      updateOne: {
        filter: {
          _id: _id
        },
        update: {
          $set: {
            bookCategoryName: bookCategoryName,
            bookCategoryDescription: bookCategoryDescription,
            bookCategoryAccessLevel: bookCategoryAccessLevel
          }
        }
      }
    };
  });
};
bookCategorySchema.statics.generateBulkDeleteOperations = function (deletableBookCategories) {
  return deletableBookCategories.map(function (_ref3) {
    var _id = _ref3._id,
      bookCategoryName = _ref3.bookCategoryName,
      bookCategoryDescription = _ref3.bookCategoryDescription,
      bookCategoryAccessLevel = _ref3.bookCategoryAccessLevel;
    return {
      deleteOne: {
        filter: {
          $or: [{
            _id: _id
          }, {
            bookCategoryName: bookCategoryName
          }, {
            bookCategoryDescription: bookCategoryDescription
          }, {
            bookCategoryAccessLevel: bookCategoryAccessLevel
          }]
        }
      }
    };
  });
};
bookCategorySchema.statics.generateSearchOperations = function (authRoleSerial, searchTermsOfBookCategory) {
  isOneOfPropertiesPresence(searchTermsOfBookCategory);
  var bookCategoryName = searchTermsOfBookCategory.bookCategoryName,
    bookCategoryDescription = searchTermsOfBookCategory.bookCategoryDescription,
    bookCategoryAccessLevel = searchTermsOfBookCategory.bookCategoryAccessLevel;
  var endRoleSerial = 10; // See Role enum of userRoleSchema

  var accessibilityRoleSerials = [];
  for (var i = authRoleSerial; i <= endRoleSerial; i++) {
    accessibilityRoleSerials.push(i);
  }
  if (!accessibilityRoleSerials.includes(authRoleSerial)) {
    var error = new Error();
    error.status = 401;
    error.message = 'You are not authorized. Please contact your administrator.';
    error.error = "You are not authorized to access this data, request user role serial: ".concat(authRoleSerial);
    throw error;
  }
  return {
    $or: [bookCategoryName ? {
      bookCategoryName: {
        $regex: new RegExp(bookCategoryName, 'i')
      }
    } : {
      role: 999
    }, bookCategoryDescription ? {
      bookCategoryDescription: {
        $regex: new RegExp(bookCategoryDescription, 'i')
      }
    } : {
      role: 999
    }, bookCategoryAccessLevel ? {
      bookCategoryAccessLevel: {
        $eq: bookCategoryAccessLevel
      }
    } : {
      role: 999
    }],
    $and: [{
      bookCategoryAccessLevel: {
        $in: accessibilityRoleSerials
      }
    }]
  };
};

// Mapping the mongoose model to the MongoDB collection
var bookCategoryModel = mongoose.model('bookCategory', bookCategorySchema);

//export the model
module.exports = bookCategoryModel;

/***/ }),

/***/ "./src/models/bookInfoModel.js":
/*!*************************************!*\
  !*** ./src/models/bookInfoModel.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

//schema/Model
var bookInfoSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: [true, "Book title is required"],
    unique: true,
    validate: {
      validator: function () {
        var _validator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
          var existingBook;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.constructor.findOne({
                  bookTitle: {
                    $regex: new RegExp("^".concat(value, "$"), 'i')
                  }
                });
              case 2:
                existingBook = _context.sent;
                return _context.abrupt("return", !existingBook);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function validator(_x) {
          return _validator.apply(this, arguments);
        }
        return validator;
      }(),
      message: function message(props) {
        return "Book title '".concat(props.value, "' already exists.");
      }
    }
  },
  stock: {
    type: Number,
    required: [true, "Stock is required"],
    "default": 1
  },
  bookCategoryId: {
    type: mongoose.Schema.Types.ObjectId
  },
  author: {
    type: String,
    required: [true, "Author name is required"]
  },
  ISBN: {
    type: String
  },
  publisher: {
    type: String
  },
  publishDate: {
    type: Date
  },
  language: {
    type: String
  },
  coverImage: {
    type: String
  },
  note: {
    type: String
  },
  bookInfoAccessLevel: {
    type: Number,
    //required: [true, "Enum table role access level is required"],
    "default": 10
  }
}, {
  timestamps: true
});

// Private methods
var isIdPropertyPresence = function isIdPropertyPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var error = new Error();
    error.status = 400;
    error.message = 'The user is not valid';
    error.error = 'The user is null or undefined';
    throw error;
  }
  if (!('_id' in value && typeof value._id === 'string')) {
    var _error = new Error();
    _error.status = 400;
    _error.message = 'The user is not valid';
    _error.error = 'The user is not containing _id property';
    throw _error;
  }
};
var isOneOfPropertiesPresence = function isOneOfPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error2 = new Error();
    _error2.status = 400;
    _error2.message = 'The user is not valid';
    _error2.error = 'The user is null or undefined';
    throw _error2;
  }

  // Check for at least one of the specific properties presence
  if ('bookTitle' in value && typeof value.bookTitle === 'string' || 'stock' in value && typeof value.stock === 'number' || 'bookCategoryId' in value && (typeof value.bookCategoryId === 'string' || value.bookCategoryId === undefined) || 'author' in value && (typeof value.author === 'string' || value.author === undefined) || 'ISBN' in value && (typeof value.ISBN === 'number' || value.ISBN === undefined) || 'Publisher' in value && typeof value.Publisher === 'string' || value.Publisher === undefined || 'publishDate' in value && typeof value.publishDate === 'date' || value.publishDate === undefined || 'language' in value && (typeof value.language === 'string' || value.language === undefined) || 'coverImage' in value && (typeof value.coverImage === 'string' || value.coverImage === undefined) || 'note' in value && (typeof value.note === 'string' || value.note === undefined) || 'bookInfoAccessLevel' in value && typeof value.bookInfoAccessLevel === 'number') {
    return;
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The user is invalid';
  error.error = 'The user is not containing at least one of the required properties';
  throw error;
};
var isOneOfPropertiesPresenceWithIdOfListObjects = function isOneOfPropertiesPresenceWithIdOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      // Check if id is present
      isIdPropertyPresence(value);
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return; // All objects in the array are valid
};

// Public methods
bookInfoSchema.statics.generateBulkUpdateOperations = function (updatableUsers) {
  isOneOfPropertiesPresenceWithIdOfListObjects(updatableUsers);
  return updatableUsers.map(function (_ref) {
    var _id = _ref._id,
      bookTitle = _ref.bookTitle,
      stock = _ref.stock,
      bookCategoryId = _ref.bookCategoryId,
      author = _ref.author,
      ISBN = _ref.ISBN,
      Publisher = _ref.Publisher,
      publishDate = _ref.publishDate,
      language = _ref.language,
      coverImage = _ref.coverImage,
      note = _ref.note,
      bookInfoAccessLevel = _ref.bookInfoAccessLevel;
    return {
      updateOne: {
        filter: {
          _id: _id
        },
        update: {
          $set: {
            bookTitle: bookTitle,
            stock: stock,
            bookCategoryId: bookCategoryId,
            author: author,
            ISBN: ISBN,
            Publisher: Publisher,
            publishDate: publishDate,
            language: language,
            coverImage: coverImage,
            note: note,
            bookInfoAccessLevel: bookInfoAccessLevel
          }
        }
      }
    };
  });
};
bookInfoSchema.statics.generateBulkDeleteOperations = function (deletableUsers) {
  return deletableUsers.map(function (_ref2) {
    var _id = _ref2._id,
      bookTitle = _ref2.bookTitle,
      stock = _ref2.stock,
      bookCategoryId = _ref2.bookCategoryId,
      author = _ref2.author,
      ISBN = _ref2.ISBN,
      Publisher = _ref2.Publisher,
      publishDate = _ref2.publishDate,
      language = _ref2.language,
      coverImage = _ref2.coverImage,
      note = _ref2.note,
      bookInfoAccessLevel = _ref2.bookInfoAccessLevel;
    return {
      deleteOne: {
        filter: {
          $or: [{
            bookTitle: bookTitle
          }, {
            stock: stock
          }, {
            bookCategoryId: bookCategoryId
          }, {
            author: author
          }, {
            ISBN: ISBN
          }, {
            Publisher: Publisher
          }, {
            publishDate: publishDate
          }, {
            language: language
          }, {
            coverImage: coverImage
          }, {
            note: note
          }, {
            bookInfoAccessLevel: bookInfoAccessLevel
          }]
        }
      }
    };
  });
};
bookInfoSchema.statics.generateSearchOperations = function (authRoleSerial, searchTermsOfUser) {
  // Check for at least one of the specific properties presence
  isOneOfPropertiesPresence(searchTermsOfUser);
  var bookTitle = searchTermsOfUser.bookTitle,
    stock = searchTermsOfUser.stock,
    author = searchTermsOfUser.author,
    ISBN = searchTermsOfUser.ISBN,
    Publisher = searchTermsOfUser.Publisher,
    publishDate = searchTermsOfUser.publishDate,
    language = searchTermsOfUser.language,
    coverImage = searchTermsOfUser.coverImage,
    note = searchTermsOfUser.note,
    bookInfoAccessLevel = searchTermsOfUser.bookInfoAccessLevel;
  var endRoleSerial = 10; // See Role enum of userRoleSchema

  var accessibilityRoleSerials = [];
  for (var i = authRoleSerial; i <= endRoleSerial; i++) {
    accessibilityRoleSerials.push(i);
  }
  if (!accessibilityRoleSerials.includes(authRoleSerial)) {
    var error = new Error();
    error.status = 401;
    error.message = 'You are not authorized. Please contact your administrator.';
    error.error = "You are not authorized to access this data, request user role serial: ".concat(authRoleSerial);
    throw error;
  }
  return {
    $or: [bookTitle ? {
      bookTitle: {
        $regex: new RegExp(bookTitle, 'i')
      }
    } : {
      role: 999
    }, stock ? {
      stock: {
        $eq: stock
      }
    } : {
      role: 999
    }, author ? {
      author: {
        $regex: new RegExp(author, 'i')
      }
    } : {
      role: 999
    }, ISBN ? {
      ISBN: {
        $regex: new RegExp(ISBN, 'i')
      }
    } : {
      role: 999
    }, Publisher ? {
      Publisher: {
        $regex: new RegExp(Publisher, 'i')
      }
    } : {
      role: 999
    }, publishDate ? {
      publishDate: {
        $gte: moment(publishDate).startOf('day').toISOString(),
        $lt: moment(publishDate).endOf('day').toISOString()
      }
    } : {
      role: 999
    }, language ? {
      language: {
        $regex: new RegExp(language, 'i')
      }
    } : {
      role: 999
    }, coverImage ? {
      coverImage: {
        $regex: new RegExp(coverImage, 'i')
      }
    } : {
      role: 999
    }, note ? {
      note: {
        $regex: new RegExp(note, 'i')
      }
    } : {
      role: 999
    }, bookInfoAccessLevel ? {
      bookInfoAccessLevel: {
        $eq: bookInfoAccessLevel
      }
    } : {
      role: 999
    }],
    $and: [{
      roleSerial: {
        $in: accessibilityRoleSerials
      }
    }]
  };
};

// Mapping the mongoose model to the MongoDB collection
var bookInfoModel = mongoose.model('bookInfo', bookInfoSchema);

//export the model
module.exports = bookInfoModel;

/***/ }),

/***/ "./src/models/bookReservationModel.js":
/*!********************************************!*\
  !*** ./src/models/bookReservationModel.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var moment = __webpack_require__(/*! moment */ "moment");

//schema
var bookReservationSchema = new mongoose.Schema({
  reservationRef: {
    type: String,
    required: [true, "Book reservation reference is required"],
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, "User ID is required"]
  },
  reservationStatusNum: {
    type: Number,
    required: [true, "Reservation status number is required"],
    "enum": [1, 2, 3],
    // 1 for reserved, 2 for returned, 3 for canceled
    "default": 1
  },
  reservationDate: {
    type: Date,
    required: [true, "Reservation date is required"],
    "default": Date.now()
  },
  reservationAccessLevel: {
    type: Number,
    "default": 10
  },
  reservationComment: {
    type: String
  }
}, {
  timestamps: true
});

// Common methods
// Function to check if a value is an object and contains specific properties
var isAllPropertiesPresence = function isAllPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error = new Error();
    _error.status = 400;
    _error.message = 'The book reservation is not valid';
    _error.error = 'The book reservation is null or undefined';
    throw _error;
  }

  // Check for specific properties including _id
  if ('_id' in value && 'reservationRef' in value && 'userId' in value && 'reservationStatusNum' in value && 'reservationDate' in value && 'reservationAccessLevel' in value && 'reservationComment' in value) {
    // Check the types of properties
    if (typeof value._id === 'string' &&
    // Assuming _id is a string, modify if it's a different type
    typeof value.reservationRef === 'string' && typeof value.userId === 'string' && typeof value.reservationStatusNum === 'number' && typeof value.reservationDate === 'date' && typeof value.reservationAccessLevel === 'number' && (typeof value.reservationComment === 'string' || value.reservationComment === undefined)) {
      return;
    }
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The book reservation is invalid';
  error.error = 'The book reservation is not containing all of the required properties';
  throw error;
};

// Function to check if a list of objects are valid
var isAllPropertiesPresenceOfListObjects = function isAllPropertiesPresenceOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'Please provide a valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      // Check for all of the specific properties including _id presence
      isAllPropertiesPresence(value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return; // All objects in the array are valid
};
var isIdPropertyPresence = function isIdPropertyPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var error = new Error();
    error.status = 400;
    error.message = 'The book reservation is not valid';
    error.error = 'The book reservation is null or undefined';
    throw error;
  }
  if (!('_id' in value && typeof value._id === 'string')) {
    var _error2 = new Error();
    _error2.status = 400;
    _error2.message = 'The book reservation is not valid';
    _error2.error = 'The book reservation is not containing _id property';
    throw _error2;
  }
};

// Function to check if a value is an object and contains specific properties
var isOneOfPropertiesPresence = function isOneOfPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error3 = new Error();
    _error3.status = 400;
    _error3.message = 'The book reservation is not valid';
    _error3.error = 'The book reservation is null or undefined';
    throw _error3;
  }

  // Check for at least one of the specific properties
  if ('reservationRef' in value && typeof value.reservationRef === 'string' || 'userId' in value && typeof value.userId === 'string' || 'reservationStatusNum' in value && typeof value.reservationStatusNum === 'number' || 'reservationDate' in value && typeof value.reservationDate === 'date' || 'reservationAccessLevel' in value && typeof value.reservationAccessLevel === 'number' || 'reservationComment' in value && (typeof value.reservationComment === 'string' || value.reservationComment === undefined)) {
    return;
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The book reservation is invalid';
  error.error = 'The book reservation is not containing at least one of the required properties';
  throw error;
};
var isOneOfPropertiesPresenceWithIdOfListObjects = function isOneOfPropertiesPresenceWithIdOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator2 = _createForOfIteratorHelper(list),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      // Check if id is present
      isIdPropertyPresence(value);
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return; // All objects in the array are valid
};

// Function to check if a list of objects are valid
var isOneOfPropertiesPresenceOfListObjects = function isOneOfPropertiesPresenceOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator3 = _createForOfIteratorHelper(list),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var value = _step3.value;
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return; // All objects in the array are valid
};

// Public static methods
bookReservationSchema.statics.generateBulkUpdateOperations = function (updatableBookReservations) {
  isOneOfPropertiesPresenceWithIdOfListObjects(updatableBookReservations);
  return updatableBookReservations.map(function (_ref) {
    var _id = _ref._id,
      reservationRef = _ref.reservationRef,
      userId = _ref.userId,
      reservationStatusNum = _ref.reservationStatusNum,
      reservationDate = _ref.reservationDate,
      reservationAccessLevel = _ref.reservationAccessLevel,
      reservationComment = _ref.reservationComment;
    return {
      updateOne: {
        filter: {
          _id: _id
        },
        update: {
          $set: {
            reservationRef: reservationRef,
            userId: userId,
            reservationStatusNum: reservationStatusNum,
            reservationDate: reservationDate,
            reservationAccessLevel: reservationAccessLevel,
            reservationComment: reservationComment
          }
        }
      }
    };
  });
};
bookReservationSchema.statics.generateBulkDeleteOperations = function (deletableBookReservations) {
  return deletableBookReservations.map(function (_ref2) {
    var _id = _ref2._id,
      reservationRef = _ref2.reservationRef,
      bookReservationSerial = _ref2.bookReservationSerial,
      bookReservationDescription = _ref2.bookReservationDescription,
      reservationAccessLevel = _ref2.reservationAccessLevel;
    return {
      deleteOne: {
        filter: {
          $or: [{
            _id: _id
          }, {
            reservationRef: reservationRef
          }, {
            userId: userId
          }, {
            reservationStatusNum: reservationStatusNum
          }, {
            reservationDate: reservationDate
          }, {
            reservationAccessLevel: reservationAccessLevel
          }, {
            reservationComment: reservationComment
          }]
        }
      }
    };
  });
};
bookReservationSchema.statics.generateSearchOperations = function (authRoleSerial, searchTermsOfBookReservation) {
  isOneOfPropertiesPresence(searchTermsOfBookReservation);
  var reservationRef = searchTermsOfBookReservation.reservationRef,
    userId = searchTermsOfBookReservation.userId,
    reservationStatusNum = searchTermsOfBookReservation.reservationStatusNum,
    reservationDate = searchTermsOfBookReservation.reservationDate,
    reservationAccessLevel = searchTermsOfBookReservation.reservationAccessLevel,
    reservationComment = searchTermsOfBookReservation.reservationComment;
  var endRoleSerial = 10; // See Role enum of userRoleSchema

  var accessibilityRoleSerials = [];
  for (var i = authRoleSerial; i <= endRoleSerial; i++) {
    accessibilityRoleSerials.push(i);
  }
  if (!accessibilityRoleSerials.includes(authRoleSerial)) {
    var error = new Error();
    error.status = 401;
    error.message = 'You are not authorized. Please contact your administrator.';
    error.error = "You are not authorized to access this data, request user role serial: ".concat(authRoleSerial);
    throw error;
  }
  return {
    $or: [reservationRef ? {
      reservationRef: {
        $regex: new RegExp(reservationRef, 'i')
      }
    } : {
      role: 999
    }, userId ? {
      userId: {
        $regex: new RegExp(userId, 'i')
      }
    } : {
      role: 999
    }, reservationStatusNum ? {
      reservationStatusNum: {
        $eq: reservationStatusNum
      }
    } : {
      role: 999
    }, reservationDate ? {
      reservationDate: {
        $gte: moment(reservationDate).startOf('day').toISOString(),
        $lt: moment(reservationDate).endOf('day').toISOString()
      }
    } : {
      role: 999
    }, reservationAccessLevel ? {
      reservationAccessLevel: {
        $eq: reservationAccessLevel
      }
    } : {
      role: 999
    }, reservationComment ? {
      reservationComment: {
        $regex: new RegExp(reservationComment, 'i')
      }
    } : {
      role: 999
    }],
    $and: [{
      reservationAccessLevel: {
        $in: accessibilityRoleSerials
      }
    }]
  };
};

// Mapping the mongoose model to the MongoDB collection
var bookReservationModel = mongoose.model('bookReservation', bookReservationSchema);

//export the model
module.exports = bookReservationModel;

/***/ }),

/***/ "./src/models/enumTableModel.js":
/*!**************************************!*\
  !*** ./src/models/enumTableModel.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var messageLog = __webpack_require__(/*! ../lib/messageLog */ "./src/lib/messageLog.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

//schema/Model
var enumTableSchema = new mongoose.Schema({
  enumTableName: {
    type: String,
    required: [true, "Enum table name is required"],
    unique: true,
    validate: {
      validator: function () {
        var _validator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
          var existingEnumTable;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.constructor.findOne({
                  enumTableName: {
                    $regex: new RegExp("^".concat(value, "$"), 'i')
                  }
                });
              case 2:
                existingEnumTable = _context.sent;
                return _context.abrupt("return", !existingEnumTable);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function validator(_x) {
          return _validator.apply(this, arguments);
        }
        return validator;
      }(),
      message: function message(props) {
        return "Enum table name '".concat(props.value, "' already exists.");
      }
    }
  },
  enumTableSerial: {
    type: Number,
    required: [true, "Enum table number is required"],
    unique: true,
    "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 1 for 'admin', 2 for 'user', ... 10 for 'guest'
  },
  enumTableDescription: {
    type: String
  },
  enumTableAccessLevel: {
    type: Number,
    //required: [true, "Enum table role access level is required"],
    "default": 10
  }
}, {
  timestamps: true
});

// Common methods
// Function to check if a value is an object and contains specific properties
var isAllPropertiesPresence = function isAllPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error = new Error();
    _error.status = 400;
    _error.message = 'The enum table is not valid';
    _error.error = 'The enum table is null or undefined';
    throw _error;
  }

  // Check for specific properties including _id
  if ('_id' in value && 'enumTableName' in value && 'enumTableSerial' in value && 'enumTableDescription' in value && 'enumTableAccessLevel' in value) {
    // Check the types of properties
    if (typeof value._id === 'string' &&
    // Assuming _id is a string, modify if it's a different type
    typeof value.enumTableName === 'string' && typeof value.enumTableSerial === 'number' && (typeof value.enumTableDescription === 'string' || value.enumTableDescription === undefined) && (typeof value.enumTableAccessLevel === 'number' || value.enumTableAccessLevel === undefined)) {
      return;
    }
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The enum table is invalid';
  error.error = 'The enum table is not containing all of the required properties';
  throw error;
};

// Function to check if a list of objects are valid
var isAllPropertiesPresenceOfListObjects = function isAllPropertiesPresenceOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'Please provide a valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      // Check for all of the specific properties including _id presence
      isAllPropertiesPresence(value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return; // All objects in the array are valid
};
var isIdPropertyPresence = function isIdPropertyPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var error = new Error();
    error.status = 400;
    error.message = 'The enum table is not valid';
    error.error = 'The enum table is null or undefined';
    throw error;
  }
  if (!('_id' in value && typeof value._id === 'string')) {
    var _error2 = new Error();
    _error2.status = 400;
    _error2.message = 'The enum table is not valid';
    _error2.error = 'The enum table is not containing _id property';
    throw _error2;
  }
};

// Function to check if a value is an object and contains specific properties
var isOneOfPropertiesPresence = function isOneOfPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error3 = new Error();
    _error3.status = 400;
    _error3.message = 'The enum table is not valid';
    _error3.error = 'The enum table is null or undefined';
    throw _error3;
  }

  // Check for at least one of the specific properties
  if ('enumTableName' in value && typeof value.enumTableName === 'string' || 'enumTableSerial' in value && typeof value.enumTableSerial === 'number' || 'enumTableDescription' in value && (typeof value.enumTableDescription === 'string' || value.enumTableDescription === undefined) || 'enumTableAccessLevel' in value && (typeof value.enumTableAccessLevel === 'number' || value.enumTableAccessLevel === undefined)) {
    return;
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The enum table is invalid';
  error.error = 'The enum table is not containing at least one of the required properties';
  throw error;
};
var isOneOfPropertiesPresenceWithIdOfListObjects = function isOneOfPropertiesPresenceWithIdOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator2 = _createForOfIteratorHelper(list),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      // Check if id is present
      isIdPropertyPresence(value);
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return; // All objects in the array are valid
};

// Function to check if a list of objects are valid
var isOneOfPropertiesPresenceOfListObjects = function isOneOfPropertiesPresenceOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator3 = _createForOfIteratorHelper(list),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var value = _step3.value;
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return; // All objects in the array are valid
};

// Public static methods
enumTableSchema.statics.generateBulkUpdateOperations = function (updatableEnumTables) {
  isOneOfPropertiesPresenceWithIdOfListObjects(updatableEnumTables);
  return updatableEnumTables.map(function (_ref) {
    var _id = _ref._id,
      enumTableName = _ref.enumTableName,
      enumTableSerial = _ref.enumTableSerial,
      enumTableDescription = _ref.enumTableDescription,
      enumTableAccessLevel = _ref.enumTableAccessLevel;
    return {
      updateOne: {
        filter: {
          _id: _id
        },
        update: {
          $set: {
            enumTableName: enumTableName,
            enumTableSerial: enumTableSerial,
            enumTableDescription: enumTableDescription,
            enumTableAccessLevel: enumTableAccessLevel
          }
        }
      }
    };
  });
};
enumTableSchema.statics.generateBulkDeleteOperations = function (deletableEnumTables) {
  return deletableEnumTables.map(function (_ref2) {
    var _id = _ref2._id,
      enumTableName = _ref2.enumTableName,
      enumTableSerial = _ref2.enumTableSerial,
      enumTableDescription = _ref2.enumTableDescription,
      enumTableAccessLevel = _ref2.enumTableAccessLevel;
    return {
      deleteOne: {
        filter: {
          $or: [{
            _id: _id
          }, {
            enumTableName: enumTableName
          }, {
            enumTableSerial: enumTableSerial
          }, {
            enumTableDescription: enumTableDescription
          }, {
            enumTableAccessLevel: enumTableAccessLevel
          }]
        }
      }
    };
  });
};
enumTableSchema.statics.generateSearchOperations = function (authRoleSerial, searchTermsOfEnumTable) {
  isOneOfPropertiesPresence(searchTermsOfEnumTable);
  var enumTableName = searchTermsOfEnumTable.enumTableName,
    enumTableSerial = searchTermsOfEnumTable.enumTableSerial,
    enumTableDescription = searchTermsOfEnumTable.enumTableDescription,
    enumTableAccessLevel = searchTermsOfEnumTable.enumTableAccessLevel;
  var endRoleSerial = 10; // See Role enum of userRoleSchema

  var accessibilityRoleSerials = [];
  for (var i = authRoleSerial; i <= endRoleSerial; i++) {
    accessibilityRoleSerials.push(i);
  }
  if (!accessibilityRoleSerials.includes(authRoleSerial)) {
    var error = new Error();
    error.status = 401;
    error.message = 'You are not authorized. Please contact your administrator.';
    error.error = "You are not authorized to access this data, request user role serial: ".concat(authRoleSerial);
    throw error;
  }
  return {
    $or: [enumTableName ? {
      enumTableName: {
        $regex: new RegExp(enumTableName, 'i')
      }
    } : {
      role: 999
    }, enumTableSerial ? {
      enumTableSerial: {
        $eq: enumTableSerial
      }
    } : {
      role: 999
    }, enumTableDescription ? {
      enumTableDescription: {
        $regex: new RegExp(enumTableDescription, 'i')
      }
    } : {
      role: 999
    }, enumTableAccessLevel ? {
      enumTableAccessLevel: {
        $eq: enumTableAccessLevel
      }
    } : {
      role: 999
    }],
    $and: [{
      enumTableAccessLevel: {
        $in: accessibilityRoleSerials
      }
    }]
  };
};

// Mapping the mongoose model to the MongoDB collection
var enumTableModel = mongoose.model('enumTable', enumTableSchema);

//export the model
module.exports = enumTableModel;

/***/ }),

/***/ "./src/models/reservationDetailModel.js":
/*!**********************************************!*\
  !*** ./src/models/reservationDetailModel.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

//schema/Model
var reservationDetailSchema = new mongoose.Schema({
  bookReservationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bookReservation',
    required: [true, "Book reservation ID is required"]
  },
  bookInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bookInfo',
    required: [true, "Book info ID is required"]
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    "default": 1
  },
  note: {
    type: String
  }
}, {
  timestamps: false
});

// Define the combined unique index
reservationDetailSchema.index({
  bookReservationId: 1,
  bookInfoId: 1
}, {
  unique: true
});

// Mapping the mongoose model to the MongoDB collection
var reservationDetailModel = mongoose.model('reservationDetail', reservationDetailSchema);

//export the model
module.exports = reservationDetailModel;

/***/ }),

/***/ "./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var messageLog = __webpack_require__(/*! ../lib/messageLog */ "./src/lib/messageLog.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var _require = __webpack_require__(/*! validator */ "validator"),
  isEmail = _require.isEmail;
var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");

//schema
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is required"]
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  mobile: {
    type: String,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [5, 'Minimum password length is 5 characters']
  },
  username: {
    type: String,
    unique: true,
    sparse: true
  },
  roleSerial: {
    type: Number,
    "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // 1 for 'admin', 2 for 'user', ... 10 for 'guest'
    "default": 99 // Default role is 'Unauthorized'
  },
  photo: {
    type: String
  },
  address: {
    type: Array
  }
}, {
  timestamps: true
});

// fire a function before doc saved to db
userSchema.pre('save', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(next) {
    var salt;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return bcrypt.genSalt();
        case 2:
          salt = _context.sent;
          _context.next = 5;
          return bcrypt.hash(this.password, salt);
        case 5:
          this.password = _context.sent;
          next();
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// static method to login user
userSchema.statics.login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email, password) {
    var user, auth;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return this.findOne({
            email: email
          });
        case 2:
          user = _context2.sent;
          if (!user) {
            _context2.next = 10;
            break;
          }
          _context2.next = 6;
          return bcrypt.compare(password, user.password);
        case 6:
          auth = _context2.sent;
          if (!auth) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", user);
        case 9:
          throw Error('incorrect password');
        case 10:
          throw Error('incorrect email');
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

// create a default admin user when the server starts
userSchema.statics.createDefaultAdminUser = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  var adminUser;
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.prev = 0;
        _context3.next = 3;
        return userModel.findOne({
          roleSerial: 1
        });
      case 3:
        adminUser = _context3.sent;
        if (adminUser) {
          _context3.next = 8;
          break;
        }
        _context3.next = 7;
        return userModel.create({
          name: 'Admin User',
          email: 'admin@example.com',
          password: 'admin',
          roleSerial: 1
        });
      case 7:
        messageLog('Default admin user is created.');
      case 8:
        _context3.next = 13;
        break;
      case 10:
        _context3.prev = 10;
        _context3.t0 = _context3["catch"](0);
        errorLog('Error creating default admin user:', _context3.t0);
      case 13:
      case "end":
        return _context3.stop();
    }
  }, _callee3, null, [[0, 10]]);
}));

// Private methods
var isIdPropertyPresence = function isIdPropertyPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var error = new Error();
    error.status = 400;
    error.message = 'The user is not valid';
    error.error = 'The user is null or undefined';
    throw error;
  }
  if (!('_id' in value && typeof value._id === 'string')) {
    var _error = new Error();
    _error.status = 400;
    _error.message = 'The user is not valid';
    _error.error = 'The user is not containing _id property';
    throw _error;
  }
};
var isOneOfPropertiesPresence = function isOneOfPropertiesPresence(value) {
  // Check if it's an object
  if (_typeof(value) !== 'object' || value === null) {
    var _error2 = new Error();
    _error2.status = 400;
    _error2.message = 'The user is not valid';
    _error2.error = 'The user is null or undefined';
    throw _error2;
  }

  // Check for at least one of the specific properties presence
  if ('name' in value && typeof value.name === 'string' || 'email' in value && typeof value.userSerial === 'string' || 'mobile' in value && (typeof value.mobile === 'string' || value.mobile === undefined) || 'username' in value && (typeof value.username === 'string' || value.username === undefined) || 'roleSerial' in value && (typeof value.roleSerial === 'number' || value.roleSerial === undefined)) {
    return;
  }
  var error = new Error();
  error.status = 400;
  error.message = 'The user is invalid';
  error.error = 'The user is not containing at least one of the required properties';
  throw error;
};
var isOneOfPropertiesPresenceWithIdOfListObjects = function isOneOfPropertiesPresenceWithIdOfListObjects(list) {
  // Check if it's an array
  if (!Array.isArray(list)) {
    var error = new Error();
    error.status = 400;
    error.message = 'The input value is not valid array';
    error.error = 'The list is not valid array';
    throw error;
  }

  // Check each object in the array
  var _iterator = _createForOfIteratorHelper(list),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      // Check if id is present
      isIdPropertyPresence(value);
      // Check for at least one of the specific properties presence
      isOneOfPropertiesPresence(value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return; // All objects in the array are valid
};

// Public methods
userSchema.statics.generateBulkUpdateOperations = function (updatableUsers) {
  isOneOfPropertiesPresenceWithIdOfListObjects(updatableUsers);
  return updatableUsers.map(function (_ref4) {
    var _id = _ref4._id,
      name = _ref4.name,
      email = _ref4.email,
      mobile = _ref4.mobile,
      password = _ref4.password,
      username = _ref4.username,
      roleSerial = _ref4.roleSerial,
      address = _ref4.address;
    return {
      updateOne: {
        filter: {
          _id: _id
        },
        update: {
          $set: {
            name: name,
            email: email,
            mobile: mobile,
            password: password,
            username: username,
            roleSerial: roleSerial,
            address: address
          }
        }
      }
    };
  });
};
userSchema.statics.generateBulkDeleteOperations = function (deletableUsers) {
  return deletableUsers.map(function (_ref5) {
    var _id = _ref5._id,
      name = _ref5.name,
      email = _ref5.email,
      mobile = _ref5.mobile,
      password = _ref5.password,
      username = _ref5.username,
      roleSerial = _ref5.roleSerial,
      address = _ref5.address;
    return {
      deleteOne: {
        filter: {
          $or: [{
            _id: _id
          }, {
            name: name
          }, {
            email: email
          }, {
            mobile: mobile
          }, {
            password: password
          }, {
            username: username
          }, {
            roleSerial: roleSerial
          }, {
            address: address
          }]
        }
      }
    };
  });
};
userSchema.statics.generateSearchOperations = function (authRoleSerial, searchTermsOfUser) {
  // Check for at least one of the specific properties presence
  isOneOfPropertiesPresence(searchTermsOfUser);
  var name = searchTermsOfUser.name,
    email = searchTermsOfUser.email,
    mobile = searchTermsOfUser.mobile,
    username = searchTermsOfUser.username,
    roleSerial = searchTermsOfUser.roleSerial;
  var endRoleSerial = 10; // See Role enum of userRoleSchema

  var accessibilityRoleSerials = [];
  for (var i = authRoleSerial; i <= endRoleSerial; i++) {
    accessibilityRoleSerials.push(i);
  }
  if (!accessibilityRoleSerials.includes(authRoleSerial)) {
    var error = new Error();
    error.status = 401;
    error.message = 'You are not authorized. Please contact your administrator.';
    error.error = "You are not authorized to access this data, request user role serial: ".concat(authRoleSerial);
    throw error;
  }
  return {
    $or: [name ? {
      name: {
        $regex: new RegExp(name, 'i')
      }
    } : {
      role: 999
    }, email ? {
      email: {
        $regex: new RegExp(email, 'i')
      }
    } : {
      role: 999
    }, mobile ? {
      mobile: {
        $regex: new RegExp(mobile, 'i')
      }
    } : {
      role: 999
    }, username ? {
      username: {
        $regex: new RegExp(username, 'i')
      }
    } : {
      role: 999
    }, roleSerial ? {
      roleSerial: {
        $eq: roleSerial
      }
    } : {
      role: 999
    }],
    $and: [{
      roleSerial: {
        $in: accessibilityRoleSerials
      }
    }]
  };
};
var userModel = mongoose.model('user', userSchema);

//export
module.exports = userModel;

/***/ }),

/***/ "./src/models/userRoleModel.js":
/*!*************************************!*\
  !*** ./src/models/userRoleModel.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var messageLog = __webpack_require__(/*! ../lib/messageLog */ "./src/lib/messageLog.js");
var errorLog = __webpack_require__(/*! ../lib/errorLog */ "./src/lib/errorLog.js");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

//schema
var userRoleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: [true, "user name is required"],
    unique: true
  },
  roleSerial: {
    type: Number,
    required: [true, "user role is required"],
    unique: true,
    "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 1 for 'admin', 2 for 'user', ... 10 for 'guest'
  },
  Description: {
    type: String
  },
  userRoleAccessLevel: {
    type: Number,
    //required: [true, "user role access level is required"],
    "default": 10
  }
}, {
  timestamps: true
});

// create user roles
userRoleSchema.statics.createDefaultUserRoles = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var userRoles, existingUsers, absentRoles, absentUserRoles;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        userRoles = [{
          roleName: 'Admin',
          roleSerial: 1,
          Description: 'Only Admin can access',
          userRoleAccessLevel: 1
        }, {
          roleName: 'User',
          roleSerial: 2,
          Description: 'User as well as Admin can access',
          userRoleAccessLevel: 2
        }];
        _context.next = 4;
        return userRoleModel.find({});
      case 4:
        existingUsers = _context.sent;
        absentRoles = userRoles.filter(function (role) {
          return !existingUsers.some(function (user) {
            return user.roleSerial === role.roleSerial;
          });
        });
        absentUserRoles = [];
        if (!(absentRoles.length > 0)) {
          _context.next = 12;
          break;
        }
        absentRoles.forEach(function (role) {
          absentUserRoles.push({
            roleName: role.roleName,
            roleSerial: role.roleSerial,
            Description: role.Description,
            userRoleAccessLevel: role.userRoleAccessLevel
          });
        });
        _context.next = 11;
        return userRoleModel.insertMany(absentUserRoles);
      case 11:
        console.log('Default user roles are created.');
      case 12:
        _context.next = 17;
        break;
      case 14:
        _context.prev = 14;
        _context.t0 = _context["catch"](0);
        errorLog('Error creating default user roles:', _context.t0);
      case 17:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 14]]);
}));
userRoleSchema.statics.generateBulkUpdateOperations = function (userRoles) {
  return userRoles.map(function (_ref2) {
    var _id = _ref2._id,
      roleName = _ref2.roleName,
      roleSerial = _ref2.roleSerial,
      Description = _ref2.Description,
      userRoleAccessLevel = _ref2.userRoleAccessLevel;
    return {
      updateOne: {
        filter: {
          _id: _id
        },
        update: {
          $set: {
            roleName: roleName,
            roleSerial: roleSerial,
            Description: Description,
            userRoleAccessLevel: userRoleAccessLevel
          }
        }
      }
    };
  });
};
userRoleSchema.statics.generateBulkDeleteOperations = function (userRoles) {
  return userRoles.map(function (_ref3) {
    var _id = _ref3._id,
      roleName = _ref3.roleName,
      roleSerial = _ref3.roleSerial,
      Description = _ref3.Description,
      userRoleAccessLevel = _ref3.userRoleAccessLevel;
    return {
      deleteOne: {
        filter: {
          $or: [{
            _id: _id
          }, {
            roleName: roleName
          }, {
            roleSerial: roleSerial
          }, {
            Description: Description
          }, {
            userRoleAccessLevel: userRoleAccessLevel
          }]
        }
      }
    };
  });
};
userRoleSchema.statics.generateSearchOperations = function (authRoleSerial, operationAccessibilityLevel) {
  if (authRoleSerial === 99) {
    var error = new Error('You are not authorized to access this data');
    error.status = 401;
    throw error;
  }
  if (!operationAccessibilityLevel) {
    var _error = new Error('Please provide valid Operation Accessibility Level for the method');
    _error.status = 401;
    throw _error;
  }
  var roleName = operationAccessibilityLevel.roleName,
    roleSerial = operationAccessibilityLevel.roleSerial,
    Description = operationAccessibilityLevel.Description,
    userRoleAccessLevel = operationAccessibilityLevel.userRoleAccessLevel;
  var endRole = 10; // See Role enum of userRoleSchema

  var accessableRoles = [];
  for (var i = operationAccessibilityLevel; i <= endRole; i++) {
    accessableRoles.push(i);
  }
  if (!accessableRoles.includes(authRoleSerial)) {
    var _error2 = new Error('You are not authorized to access this data');
    _error2.status = 401;
    throw _error2;
  }
  return {
    $or: [roleName ? {
      name: {
        $regex: new RegExp(roleName, 'i')
      }
    } : {
      role: 999
    }, roleSerial ? {
      roleSerial: {
        $regex: new RegExp(roleSerial, 'i')
      }
    } : {
      role: 999
    }, Description ? {
      Description: {
        $regex: new RegExp(Description, 'i')
      }
    } : {
      role: 999
    }, userRoleAccessLevel ? {
      userRoleAccessLevel: {
        $eq: userRoleAccessLevel
      }
    } : {
      role: 999
    }],
    $and: [{
      userRoleAccessLevel: {
        $in: accessableRoles
      }
    }]
  };
};

// userRoleSchema.statics.separateValidAndInvalidIds = (ids) => {
//     const idArray = Array.isArray(ids);

//     if (!idArray) {
//         throw new Error('Invalid array of ids');
//     }

//     const validIds = [];
//     const invalidIds = [];

//     ids.forEach((id) => {
//         if (mongoose.Types.ObjectId.isValid(id)) {
//             validIds.push(id);
//         } else {
//             invalidIds.push(id);
//         }
//     });

//     return {
//         validIds,
//         invalidIds,
//     };

//     //Read: const { validIds, invalidIds } = userModel.separateValidAndInvalidIds(idList);
// };

var userRoleModel = mongoose.model('userRole', userRoleSchema);

//Search options using index
//userRoleSchema.index({ name: 'text' });

//export
module.exports = userRoleModel;

/***/ }),

/***/ "./src/routes/bookCategoryRoutes.js":
/*!******************************************!*\
  !*** ./src/routes/bookCategoryRoutes.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var express = __webpack_require__(/*! express */ "express");
var _require = __webpack_require__(/*! ../middlewares/authMiddleware */ "./src/middlewares/authMiddleware.js"),
  requireAuth = _require.requireAuth;
var router = express.Router();
var _require2 = __webpack_require__(/*! ../controllers/bookCategoryController */ "./src/controllers/bookCategoryController.js"),
  getBookCategoriesController = _require2.getBookCategoriesController,
  getBookCategoryByIdController = _require2.getBookCategoryByIdController,
  getBookCategoriesByIdsController = _require2.getBookCategoriesByIdsController,
  createBookCategoryController = _require2.createBookCategoryController,
  createBulkBookCategoryController = _require2.createBulkBookCategoryController,
  updateBookCategoryByIdController = _require2.updateBookCategoryByIdController,
  updateBalkBookCategoryController = _require2.updateBalkBookCategoryController,
  deleteBookCategoryByIdController = _require2.deleteBookCategoryByIdController,
  deleteBulkBookCategoryController = _require2.deleteBulkBookCategoryController,
  searchBookCategoryController = _require2.searchBookCategoryController;

// Get book category
router.get('/', requireAuth, getBookCategoriesController);
router.get('/:id', requireAuth, getBookCategoryByIdController);
router.post('/by-ids', requireAuth, getBookCategoriesByIdsController);

// Create book category
router.post('/', requireAuth, createBookCategoryController);
router.post('/bulk-create', requireAuth, createBulkBookCategoryController);

// Update book category
router.put('/:id', requireAuth, updateBookCategoryByIdController);
router.post('/bulk-update', requireAuth, updateBalkBookCategoryController);

// Delete book category
router["delete"]('/bulk-delete', requireAuth, deleteBulkBookCategoryController); // Line order matters for same http method
router["delete"]('/:id', requireAuth, deleteBookCategoryByIdController);

// Search book category
router.post('/search', requireAuth, searchBookCategoryController);
module.exports = router;

/***/ }),

/***/ "./src/routes/bookInfoRoutes.js":
/*!**************************************!*\
  !*** ./src/routes/bookInfoRoutes.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var express = __webpack_require__(/*! express */ "express");
var _require = __webpack_require__(/*! ../middlewares/authMiddleware */ "./src/middlewares/authMiddleware.js"),
  requireAuth = _require.requireAuth;
var router = express.Router();
var uploadFile = __webpack_require__(/*! ../lib/uploadFile */ "./src/lib/uploadFile.js");
var _require2 = __webpack_require__(/*! ../controllers/bookInfoController */ "./src/controllers/bookInfoController.js"),
  getBookInfosController = _require2.getBookInfosController,
  getBookInfoByIdController = _require2.getBookInfoByIdController,
  getBookInfosByIdsController = _require2.getBookInfosByIdsController,
  createBookInfoController = _require2.createBookInfoController,
  createBulkBookInfoController = _require2.createBulkBookInfoController,
  updateBookInfoByIdController = _require2.updateBookInfoByIdController,
  updateBalkBookInfoController = _require2.updateBalkBookInfoController,
  deleteBookInfoByIdController = _require2.deleteBookInfoByIdController,
  deleteBulkBookInfoController = _require2.deleteBulkBookInfoController,
  searchBookInfoController = _require2.searchBookInfoController;

// Get book info
router.get('/', requireAuth, getBookInfosController);
router.get('/:id', requireAuth, getBookInfoByIdController);
router.post('/by-ids', requireAuth, getBookInfosByIdsController);

// Create book info
router.post('/', requireAuth, uploadFile.single('coverImage'), createBookInfoController);
router.post('/bulk-create', requireAuth, createBulkBookInfoController);

// Update book info
router.put('/:id', requireAuth, updateBookInfoByIdController);
router.post('/bulk-update', requireAuth, updateBalkBookInfoController);

// Delete book info
router["delete"]('/bulk-delete', requireAuth, deleteBulkBookInfoController); // Line order matters for same http method
router["delete"]('/:id', requireAuth, deleteBookInfoByIdController);

// Search book info
router.post('/search', requireAuth, searchBookInfoController);
module.exports = router;

/***/ }),

/***/ "./src/routes/bookReservationRoutes.js":
/*!*********************************************!*\
  !*** ./src/routes/bookReservationRoutes.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var express = __webpack_require__(/*! express */ "express");
var _require = __webpack_require__(/*! ../middlewares/authMiddleware */ "./src/middlewares/authMiddleware.js"),
  requireAuth = _require.requireAuth;
var router = express.Router();
var _require2 = __webpack_require__(/*! ../controllers/bookReservationController */ "./src/controllers/bookReservationController.js"),
  getBookReservationsController = _require2.getBookReservationsController,
  getBookReservationByIdController = _require2.getBookReservationByIdController,
  createBookReservationController = _require2.createBookReservationController,
  updateBookReservationByIdController = _require2.updateBookReservationByIdController,
  deleteBookReservationByIdController = _require2.deleteBookReservationByIdController,
  searchBookReservationController = _require2.searchBookReservationController,
  getAvailableBookController = _require2.getAvailableBookController,
  getReservedBookController = _require2.getReservedBookController;

// Extra methods
router.get('/available-book', requireAuth, getAvailableBookController);
router.get('/reserved-book', requireAuth, getReservedBookController);

// Get book reservation
router.get('/', requireAuth, getBookReservationsController);
router.get('/:id', requireAuth, getReservedBookController);

// Create book reservation
router.post('/', requireAuth, createBookReservationController);

// Update book reservation
router.put('/:id', requireAuth, updateBookReservationByIdController);

// Delete book reservation
router["delete"]('/:id', requireAuth, deleteBookReservationByIdController);

// Search book reservation
router.post('/search', requireAuth, searchBookReservationController);
module.exports = router;

/***/ }),

/***/ "./src/routes/enumTableRoutes.js":
/*!***************************************!*\
  !*** ./src/routes/enumTableRoutes.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var express = __webpack_require__(/*! express */ "express");
var _require = __webpack_require__(/*! ../middlewares/authMiddleware */ "./src/middlewares/authMiddleware.js"),
  requireAuth = _require.requireAuth;
var router = express.Router();
var _require2 = __webpack_require__(/*! ../controllers/enumTableController */ "./src/controllers/enumTableController.js"),
  getEnumTablesController = _require2.getEnumTablesController,
  getEnumTableByIdController = _require2.getEnumTableByIdController,
  getEnumTablesByIdsController = _require2.getEnumTablesByIdsController,
  createEnumTableController = _require2.createEnumTableController,
  createBulkEnumTableController = _require2.createBulkEnumTableController,
  updateEnumTableByIdController = _require2.updateEnumTableByIdController,
  updateBalkEnumTableController = _require2.updateBalkEnumTableController,
  deleteEnumTableByIdController = _require2.deleteEnumTableByIdController,
  deleteBulkEnumTableController = _require2.deleteBulkEnumTableController,
  searchEnumTableController = _require2.searchEnumTableController;

// Get enum table
router.get('/', requireAuth, getEnumTablesController);
router.get('/:id', requireAuth, getEnumTableByIdController);
router.post('/by-ids', requireAuth, getEnumTablesByIdsController);

// Create enum table
router.post('/', requireAuth, createEnumTableController);
router.post('/bulk-create', requireAuth, createBulkEnumTableController);

// Update enum table
router.put('/:id', requireAuth, updateEnumTableByIdController);
router.post('/bulk-update', requireAuth, updateBalkEnumTableController);

// Delete enum table
router["delete"]('/bulk-delete', requireAuth, deleteBulkEnumTableController); // Line order matters for same http method
router["delete"]('/:id', requireAuth, deleteEnumTableByIdController);

// Search enum table
router.post('/search', requireAuth, searchEnumTableController);
module.exports = router;

/***/ }),

/***/ "./src/routes/userRoleRoutes.js":
/*!**************************************!*\
  !*** ./src/routes/userRoleRoutes.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var express = __webpack_require__(/*! express */ "express");
var _require = __webpack_require__(/*! ../middlewares/authMiddleware */ "./src/middlewares/authMiddleware.js"),
  requireAuth = _require.requireAuth;
var router = express.Router();
var _require2 = __webpack_require__(/*! ../controllers/userRoleController */ "./src/controllers/userRoleController.js"),
  getUserRolesController = _require2.getUserRolesController,
  getUserRoleByIdController = _require2.getUserRoleByIdController,
  getUserRolesByIdsController = _require2.getUserRolesByIdsController,
  createUserRoleController = _require2.createUserRoleController,
  createBulkUserRoleController = _require2.createBulkUserRoleController,
  updateUserRoleByIdController = _require2.updateUserRoleByIdController,
  updateBalkUserRoleController = _require2.updateBalkUserRoleController,
  deleteUserRoleByIdController = _require2.deleteUserRoleByIdController,
  deleteBulkUserRoleController = _require2.deleteBulkUserRoleController,
  searchUserRoleController = _require2.searchUserRoleController;

// Get user
router.get('/', requireAuth, getUserRolesController);
router.get('/:id', requireAuth, getUserRoleByIdController);
router.post('/by-ids', requireAuth, getUserRolesByIdsController);

// Create user
router.post('/', requireAuth, createUserRoleController);
router.post('/bulk-create', requireAuth, createBulkUserRoleController);

// Update user
router.put('/:id', requireAuth, updateUserRoleByIdController);
router.post('/bulk-update', requireAuth, updateBalkUserRoleController);

// Delete user
router["delete"]('/:id', requireAuth, deleteUserRoleByIdController);
router["delete"]('/bulk-delete', requireAuth, deleteBulkUserRoleController);

// Search user
router.post('/search', requireAuth, searchUserRoleController);
module.exports = router;

/***/ }),

/***/ "./src/routes/userRoutes.js":
/*!**********************************!*\
  !*** ./src/routes/userRoutes.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var express = __webpack_require__(/*! express */ "express");
var _require = __webpack_require__(/*! ../middlewares/authMiddleware */ "./src/middlewares/authMiddleware.js"),
  requireAuth = _require.requireAuth;
var router = express.Router();
var uploadFile = __webpack_require__(/*! ../lib/uploadFile */ "./src/lib/uploadFile.js");
var _require2 = __webpack_require__(/*! ../controllers/userController */ "./src/controllers/userController.js"),
  getUsersController = _require2.getUsersController,
  getUserByIdController = _require2.getUserByIdController,
  getUsersByIdsController = _require2.getUsersByIdsController,
  createUserController = _require2.createUserController,
  createBulkUserController = _require2.createBulkUserController,
  updateUserController = _require2.updateUserController,
  updateBalkUserController = _require2.updateBalkUserController,
  deleteUserController = _require2.deleteUserController,
  deleteBulkUserController = _require2.deleteBulkUserController,
  searchUserController = _require2.searchUserController,
  loginUserController = _require2.loginUserController,
  logoutUserController = _require2.logoutUserController,
  registerUserController = _require2.registerUserController,
  checkUserController = _require2.checkUserController;

// Get user
router.get('/', requireAuth, getUsersController);
router.get('/:id', requireAuth, getUserByIdController);
router.post('/by-ids', requireAuth, getUsersByIdsController);

// Create user
router.post('/', requireAuth, uploadFile.single('photo'), createUserController);
router.post('/bulk-create', requireAuth, createBulkUserController);

// Update user
router.put('/:id', requireAuth, updateUserController);
router.post('/bulk-update', requireAuth, updateBalkUserController);

// Delete user
router["delete"]('/bulk-delete', requireAuth, deleteBulkUserController); // Line order matters for same http method
router["delete"]('/:id', requireAuth, deleteUserController);

// Search user
router.post('/search', requireAuth, searchUserController);

// Authentication
router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.post('/logout', logoutUserController);
router.post('/check', checkUserController);
module.exports = router;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("swagger-ui-express");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("validator");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("winston");

/***/ }),

/***/ "winston-daily-rotate-file":
/*!********************************************!*\
  !*** external "winston-daily-rotate-file" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("winston-daily-rotate-file");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"book-reservation-api","version":"1.0.0","description":"","main":"index.js","scripts":{"start":"node src/index.js","test":"mocha --config mocha.config.json","start:build":"node build/index.js","build":"babel src -d build","start:dev":"node dev-build/main.js","start:prod":"node prod-build/main.js","build:dev":"webpack --config webpack.dev.js","build:prod":"webpack --config webpack.prod.js"},"author":"Ahmad A. Zaman","license":"ISC","dependencies":{"bcrypt":"^5.1.1","cookie-parser":"^1.4.6","dotenv":"^16.3.1","express":"^4.18.2","jsonwebtoken":"^9.0.2","moment":"^2.30.1","mongoose":"^8.0.4","multer":"^1.4.5-lts.1","swagger-jsdoc":"^6.2.8","swagger-ui-express":"^5.0.0","validator":"^13.11.0","winston":"^3.11.0","winston-daily-rotate-file":"^4.7.1"},"devDependencies":{"@babel/cli":"^7.23.9","@babel/core":"^7.23.9","@babel/node":"^7.23.9","@babel/preset-env":"^7.23.9","babel-loader":"^9.1.3","babel-plugin-minify-replace":"^0.5.0","babel-plugin-transform-remove-console":"^6.9.4","chai":"^4.2.0","chai-as-promised":"^7.1.1","chai-http":"^4.4.0","clean-webpack-plugin":"^4.0.0","css-minimizer-webpack-plugin":"^6.0.0","esm":"^3.2.25","mini-css-extract-plugin":"^2.8.0","mocha":"^10.2.0","sinon":"^17.0.1","webpack":"^5.90.2","webpack-cli":"^5.1.4","webpack-node-externals":"^3.0.0"}}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(__webpack_require__(/*! dotenv */ "dotenv").config)();
var packageJson = __webpack_require__(/*! ../package.json */ "./package.json");
var messageLog = __webpack_require__(/*! ./lib/messageLog */ "./src/lib/messageLog.js");
var express = __webpack_require__(/*! express */ "express");
var connectDB = __webpack_require__(/*! ./lib/dbConnection */ "./src/lib/dbConnection.js");
var swagger = __webpack_require__(/*! ./lib/swagger */ "./src/lib/swagger.js");
var cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var userModel = __webpack_require__(/*! ./models/userModel */ "./src/models/userModel.js");
var userRoleModel = __webpack_require__(/*! ./models/userRoleModel */ "./src/models/userRoleModel.js");
var bookCategoryModel = __webpack_require__(/*! ./models/bookCategoryModel */ "./src/models/bookCategoryModel.js");
var _require = __webpack_require__(/*! ./middlewares/authMiddleware */ "./src/middlewares/authMiddleware.js"),
  checkUser = _require.checkUser;
connectDB();
var app = express();
app.use(express.json());
app.use(cookieParser());

// Serve static files from the 'uploads' directory
app.use('/v1/uploads', express["static"]('uploads'));
app.get('*', checkUser);

// Serve Swagger UI
app.use('/v1/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));
app.use('/v1/user', __webpack_require__(/*! ./routes/userRoutes */ "./src/routes/userRoutes.js"));
app.use('/v1/user-role', __webpack_require__(/*! ./routes/userRoleRoutes */ "./src/routes/userRoleRoutes.js"));
app.use('/v1/enum-table', __webpack_require__(/*! ./routes/enumTableRoutes */ "./src/routes/enumTableRoutes.js"));
app.use('/v1/book-info', __webpack_require__(/*! ./routes/bookInfoRoutes */ "./src/routes/bookInfoRoutes.js"));
app.use('/v1/book-reservation', __webpack_require__(/*! ./routes/bookReservationRoutes */ "./src/routes/bookReservationRoutes.js"));
app.use('/v1/book-category', __webpack_require__(/*! ./routes/bookCategoryRoutes */ "./src/routes/bookCategoryRoutes.js"));
app.get('/', function (req, res) {
  //res.send('nodejs-express-mongodb-CURD-basic-1')
  res.redirect('/v1/api-docs');
});

//PORT
var PORT = process.env.PORT || 3000;
app.listen(PORT, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return userRoleModel.createDefaultUserRoles();
      case 2:
        _context.next = 4;
        return userModel.createDefaultAdminUser();
      case 4:
        _context.next = 6;
        return bookCategoryModel.createDefaultBookCategory();
      case 6:
        messageLog("".concat(packageJson.name, " app, version ").concat(packageJson.version, ", is listening on port ").concat(PORT));
      case 7:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
})();

/******/ })()
;
//# sourceMappingURL=main.js.map