"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
        var Person = function () {
                _createClass(Person, [{
                        key: "name",
                        get: function get() {
                                return this._name;
                        },
                        set: function set(name) {
                                console.log("Setting name to " + name);
                                this._name = name;
                        }
                }]);

                function Person(name) {
                        _classCallCheck(this, Person);

                        this._name = name;
                }

                _createClass(Person, [{
                        key: "render",
                        value: function render() {
                                console.log("My name is " + this._name);
                        }
                }], [{
                        key: "loadPeople",
                        value: function loadPeople() {
                                return [new Person("person1"), new Person("person2")];
                        }
                }]);

                return Person;
        }();

        //const nelson = new Person("Nelson");
        //nelson.render();
        //
        //nelson._name = "Who?";
        //nelson.render();

        var _Person$loadPeople = Person.loadPeople();

        var _Person$loadPeople2 = _slicedToArray(_Person$loadPeople, 2);

        var p1 = _Person$loadPeople2[0];
        var p2 = _Person$loadPeople2[1];

        p1.render();
        p2.render();
})();