"use strict";
exports.__esModule = true;
var Character = /** @class */ (function () {
    function Character(type, name, power, pm) {
        this.type = undefined;
        this.name = undefined;
        this.power = 0;
        this.pv = 100;
        this.pm = 0;
        this.type = type;
        this.name = name;
        this.power = power;
        this.pm = pm;
    }
    return Character;
}());
exports.Character = Character;
