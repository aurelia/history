System.register([], function (_export) {
  "use strict";

  var History;
  return {
    setters: [],
    execute: function () {
      History = function History() {};

      History.prototype.activate = function () {
        throw new Error("History must implement activate().");
      };

      History.prototype.deactivate = function () {
        throw new Error("History must implement deactivate().");
      };

      History.prototype.navigate = function () {
        throw new Error("History must implement navigate().");
      };

      History.prototype.navigateBack = function () {
        throw new Error("History must implement navigateBack().");
      };

      _export("History", History);
    }
  };
});