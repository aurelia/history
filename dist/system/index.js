System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, History;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      History = (function () {
        var History = function History() {};

        _prototypeProperties(History, null, {
          activate: {
            value: function () {
              throw new Error("History must implement activate().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          deactivate: {
            value: function () {
              throw new Error("History must implement deactivate().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          navigate: {
            value: function () {
              throw new Error("History must implement navigate().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          navigateBack: {
            value: function () {
              throw new Error("History must implement navigateBack().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return History;
      })();
      _export("History", History);
    }
  };
});