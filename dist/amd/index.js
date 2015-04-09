define(['exports'], function (exports) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var History = (function () {
    function History() {
      _classCallCheck(this, History);
    }

    _createClass(History, [{
      key: 'activate',
      value: function activate() {
        throw new Error('History must implement activate().');
      }
    }, {
      key: 'deactivate',
      value: function deactivate() {
        throw new Error('History must implement deactivate().');
      }
    }, {
      key: 'navigate',
      value: function navigate() {
        throw new Error('History must implement navigate().');
      }
    }, {
      key: 'navigateBack',
      value: function navigateBack() {
        throw new Error('History must implement navigateBack().');
      }
    }]);

    return History;
  })();

  exports.History = History;
});