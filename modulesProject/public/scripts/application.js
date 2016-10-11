"use strict";

System.register(["./models/users-store", "./controllers/users-controller", "./lib/util", "./script"], function (_export, _context) {
  "use strict";

  var UsersStore, usersController, fuu, store, $mount;
  return {
    setters: [function (_modelsUsersStore) {
      UsersStore = _modelsUsersStore.UsersStore;
    }, function (_controllersUsersController) {
      usersController = _controllersUsersController.default;
    }, function (_libUtil) {
      fuu = _libUtil;
    }, function (_script) {}],
    execute: function () {

      console.log("LOADING APPLICATION");

      store = new UsersStore();
      $mount = $("#mount");

      usersController($mount, store);

      fuu.func1();
      fuu.func2();
    }
  };
});