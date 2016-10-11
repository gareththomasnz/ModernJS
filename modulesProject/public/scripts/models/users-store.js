"use strict";

System.register(["lodash", "./user"], function (_export, _context) {
        "use strict";

        var _, User, _createClass, _users, UsersStore;

        function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                }
        }

        return {
                setters: [function (_lodash) {
                        _ = _lodash.default;
                }, function (_user) {
                        User = _user.User;
                }],
                execute: function () {
                        _createClass = function () {
                                function defineProperties(target, props) {
                                        for (var i = 0; i < props.length; i++) {
                                                var descriptor = props[i];
                                                descriptor.enumerable = descriptor.enumerable || false;
                                                descriptor.configurable = true;
                                                if ("value" in descriptor) descriptor.writable = true;
                                                Object.defineProperty(target, descriptor.key, descriptor);
                                        }
                                }

                                return function (Constructor, protoProps, staticProps) {
                                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                                        if (staticProps) defineProperties(Constructor, staticProps);
                                        return Constructor;
                                };
                        }();

                        _users = Symbol("users");

                        _export("UsersStore", UsersStore = function () {
                                _createClass(UsersStore, [{
                                        key: "users",
                                        get: function get() {
                                                return this[_users].slice();
                                        }
                                }]);

                                function UsersStore() {
                                        _classCallCheck(this, UsersStore);

                                        this[_users] = [new User(1, "Nelson", "LaQuet"), new User2(2, "Foo", "Bar")];
                                }

                                _createClass(UsersStore, [{
                                        key: "add",
                                        value: function add(first, last) {
                                                var nextId = _.max(this[_users], function (u) {
                                                        return u.id;
                                                }).id + 1;
                                                var user = new User(nextId, first, last);
                                                this[_users].push(user);
                                                return user;
                                        }
                                }, {
                                        key: "remove",
                                        value: function remove(id) {
                                                _.remove(this[_users], function (u) {
                                                        return u.id == id;
                                                });
                                        }
                                }]);

                                return UsersStore;
                        }());

                        _export("UsersStore", UsersStore);
                }
        };
});