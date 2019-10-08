"use strict";

require("@babel/polyfill");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class
 * For online testing purpose in Google Apps Script projects
 */
var Kava =
/*#__PURE__*/
function () {
  function Kava() {
    var moduleName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Kava);

    this._moduleName = moduleName; // eslint-disable-line

    this.results = [];
  }

  _createClass(Kava, [{
    key: "make",
    value: function make(task, fn) {
      try {
        // invocation funciton
        fn();
        this.results = [].concat(this.results, [{
          task: task,
          result: 'OK',
          success: true
        }]);
      } catch (e) {
        this.results = [].concat(this.results, [{
          task: task,
          result: e,
          success: false
        }]);
      }
    }
    /**
    * Set module name that testing
    * @param {String} name module name
    */

  }, {
    key: "moduleName",
    value: function moduleName(name) {
      this._moduleName = name; // eslint-disable-line

      return this;
    }
    /**
     * Check, if all keys and values from sample has comparing object.
     * @param {Object} reference Key-value object that used for sample for comparing
     * @returns {Function} that take as argument object for comparing
     */

  }, {
    key: "compareWith",
    value: function compareWith(reference) {
      var _this = this;

      return function (source) {
        var keys = Object.keys(reference);
        var result = keys.map(function (key) {
          return _this.isEqualByKey(source, reference, key);
        }).reduce(function (acc, item) {
          return item === true ? item : acc;
        }, false); // eslint-disable-line 

        return result;
      };
    }
    /**
     * Comparing values by same key in the two objects.
     * Throw exception, if is not equal.
     * @param {String} key Key by which the value will be checked
     * @param {Object} received Object, which compared
     * @param {Object} expected Object, used as reference
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "isEqualByKey",
    value: function isEqualByKey(received, expected, key) {
      if (received[key] === expected[key]) {
        return true;
      }

      throw new Error("".concat(key, " expected ").concat(expected[key], ", but received ").concat(received[key]));
    }
    /**
     * Compare two primitive type values.
     * @param {*} received value, that compared
     * @param {*} expected sample value
     */
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "isEqual",
    value: function isEqual(received, expected) {
      if (received instanceof Object || expected instanceof Object) {
        throw new Error('Only primitive types can be compared');
      }

      if (received === expected) {
        return true;
      }

      throw new Error("expected ".concat(expected, ", but received ").concat(received));
    }
    /**
     * Return count of errors
     */

  }, {
    key: "errCount",
    get: function get() {
      return this.results.filter(function (item) {
        return !item.success;
      }).length;
    }
    /**
     * Make formatted text output of test results.
     * Start it at finish tests
     */

  }, {
    key: "output",
    get: function get() {
      var errors = this.errCount;
      var total = this.results.length;
      var results = this.results.map(function (item, index) {
        var task = item.task,
            success = item.success,
            result = item.result;

        if (!success) {
          return "".concat(index + 1, ". ").concat(task, " - ERROR\n") + "> ".concat(result, "\n");
        }

        return "".concat(index + 1, ". ").concat(task, " - ").concat(result, "\n");
      }).join('----\n'); // eslint-disable-next-line

      return '\n' + "".concat(this._moduleName, ":\n") // eslint-disable-line
      + '----\n' + results + '----\n' + "* Total: ".concat(total, ", errors:").concat(errors);
    }
  }]);

  return Kava;
}();
