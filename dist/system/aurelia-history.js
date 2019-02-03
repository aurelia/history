'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var History;

  

  function mi(name) {
    throw new Error('History must implement ' + name + '().');
  }

  return {
    setters: [],
    execute: function () {
      _export('History', History = function () {
        function History() {
          
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

        History.prototype.setState = function setState(key, value) {
          mi('setState');
        };

        History.prototype.getState = function getState(key) {
          mi('getState');
        };

        History.prototype.getHistoryIndex = function getHistoryIndex() {
          mi('getHistoryIndex');
        };

        History.prototype.go = function go(movement) {
          mi('go');
        };

        return History;
      }());

      _export('History', History);
    }
  };
});