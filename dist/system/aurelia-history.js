'use strict';

System.register([], function (_export, _context) {
  var History;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('History', History = function () {
        function History() {
          _classCallCheck(this, History);
        }

        History.prototype.activate = function activate(options) {
          throw new Error('History must implement activate().');
        };

        History.prototype.deactivate = function deactivate() {
          throw new Error('History must implement deactivate().');
        };

        History.prototype.navigate = function navigate(fragment, options) {
          throw new Error('History must implement navigate().');
        };

        History.prototype.navigateBack = function navigateBack() {
          throw new Error('History must implement navigateBack().');
        };

        History.prototype.setTitle = function setTitle(title) {
          throw new Error('History must implement setTitle().');
        };

        return History;
      }());

      _export('History', History);
    }
  };
});