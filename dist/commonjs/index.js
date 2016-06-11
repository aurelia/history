'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaHistory = require('./aurelia-history');

Object.keys(_aureliaHistory).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaHistory[key];
    }
  });
});