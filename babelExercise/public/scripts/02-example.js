"use strict";

(function () {
        function func1() {
                var hey = 10;

                var test = 20;
        }

        for (var i = 0; i < 10; i++) {
                window.setTimeout(function () {
                        console.log(i);
                }, 500);
        }

        for (var i = 0; i < 10; i++) {
                (function (j) {
                        window.setTimeout(function () {
                                console.log(j);
                        }, 0);
                })(i);
        }

        var _loop = function _loop(_i) {
                window.setTimeout(function () {
                        console.log(_i);
                }, 0);
        };

        for (var _i = 0; _i < 10; _i++) {
                _loop(_i);
        }

        var thing = 10;

        console.log(thing);

        //thing = 20;
})();