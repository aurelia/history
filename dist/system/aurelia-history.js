'use strict';

System.register([], function (_export, _context) {
  var History;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function mi(name) {
    throw new Error('History must implement ' + name + '().');
  }

  return {
    setters: [],
    execute: function () {
      _export('History', History = function () {
        function History() {
          _classCallCheck(this, History);
        }

        History.prototype.activate = function activate(options) {
          mi('activate');
        };

        History.prototype.deactivate = function deactivate() {
          mi('deactivate');
        };

        History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
          mi('getAbsoluteRoot');
        };

        History.prototype.navigate = function navigate(fragment, options) {
          mi('navigate');
        };

        History.prototype.navigateBack = function navigateBack() {
          mi('navigateBack');
        };

        History.prototype.setTitle = function setTitle(title) {
          mi('setTitle');
        };

        return History;
      }());

      _export('History', History);
    }
  };
});