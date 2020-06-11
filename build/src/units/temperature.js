"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.units = void 0;
var utils_1 = require("../utils");
var celsius = {
    fahrenheit: function (temperature) {
        return utils_1.toPrecision((temperature * 9) / 5 + 32);
    },
    kelvin: function (temperature) {
        return utils_1.toPrecision(temperature + 273.15);
    },
    celsius: function (temperature) {
        return temperature;
    },
};
var kelvin = {
    fahrenheit: function (temperature) {
        return utils_1.toPrecision((temperature * 9) / 5 - 459.67);
    },
    kelvin: function (temperature) {
        return temperature;
    },
    celsius: function (temperature) {
        return utils_1.toPrecision(temperature - 273.15);
    },
};
var fahrenheit = {
    fahrenheit: function (temperature) {
        return temperature;
    },
    kelvin: function (temperature) {
        return utils_1.toPrecision(((temperature + 459.67) * 5) / 9);
    },
    celsius: function (temperature) {
        return utils_1.toPrecision((temperature - 32) / 1.8);
    },
};
exports.units = {
    celsius: celsius,
    fahrenheit: fahrenheit,
    kelvin: kelvin,
};
