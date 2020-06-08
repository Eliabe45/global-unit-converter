"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
var Converter = /** @class */ (function () {
    function Converter(units) {
        this.units = units;
    }
    Converter.prototype.convert = function (data) {
        var to = data.to, from = data.from, value = data.value;
        if (!this.units[from]) {
            throw new Error("Invalid unit, these are the options: \n " + Object.keys(this.units).join(', '));
        }
        // it can be a multiplier or a formula
        var factor = this.units[from][to];
        if (typeof factor === 'function') {
            return factor(value);
        }
        else {
            return factor * value;
        }
    };
    return Converter;
}());
exports.Converter = Converter;
