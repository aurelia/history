define(["exports"], function (exports) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var History = exports.History = (function () {
    function History() {
      _classCallCheck(this, History);
    }

    _prototypeProperties(History, null, {
      activate: {
        value: function activate() {
          throw new Error("History must implement activate().");
        },
        writable: true,
        configurable: true
      },
      deactivate: {
        value: function deactivate() {
          throw new Error("History must implement deactivate().");
        },
        writable: true,
        configurable: true
      },
      navigate: {
        value: function navigate() {
          throw new Error("History must implement navigate().");
        },
        writable: true,
        configurable: true
      },
      navigateBack: {
        value: function navigateBack() {
          throw new Error("History must implement navigateBack().");
        },
        writable: true,
        configurable: true
      }
    });

    return History;
  })();

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});