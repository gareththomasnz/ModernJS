define(["./models/users-store", "./controllers/users-controller", "./lib/util", "./script"], function (_usersStore, _usersController, _util) {
  "use strict";

  var _usersController2 = _interopRequireDefault(_usersController);

  var fuu = _interopRequireWildcard(_util);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log("LOADING APPLICATION");

  var store = new _usersStore.UsersStore();
  var $mount = $("#mount");
  (0, _usersController2.default)($mount, store);

  fuu.func1();
  fuu.func2();
});