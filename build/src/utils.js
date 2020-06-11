"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPrecision = void 0;
exports.toPrecision = function (n) {
    var precision = n.toPrecision(12);
    var firstPart = precision.split('.')[0];
    var decimal = precision.split('.')[1].slice(0, 12);
    return parseFloat(firstPart + "." + decimal);
};
