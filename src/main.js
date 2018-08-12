"use strict";
exports.__esModule = true;
var test_1 = require("./test");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.printMyNameAgain = function () {
        var v = test_1.DBkeys.printMyName();
        console.log(v);
    };
    return Main;
}());
var myNewClass = new Main();
myNewClass.printMyNameAgain();
