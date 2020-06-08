var celsius = {
    fahrenheit: function (temperature) {
        return (temperature * 9) / 5 + 32;
    },
    kelvin: function (temperature) {
        return temperature + 273.15;
    },
    celsius: function (temperature) {
        return temperature;
    },
};
var kelvin = {
    fahrenheit: function (temperature) {
        return (temperature * 9) / 5 - 459.67;
    },
    kelvin: function (temperature) {
        return temperature;
    },
    celsius: function (temperature) {
        return temperature - 273.15;
    },
};
var fahrenheit = {
    fahrenheit: function (temperature) {
        return temperature;
    },
    kelvin: function (temperature) {
        return ((temperature + 459.67) * 5) / 9;
    },
    celsius: function (temperature) {
        return (temperature - 32) / 1.8;
    },
};
export var celsiusToFahrenheit = function (temperature) {
    return;
};
export var fahrenheitToCelsius = function (temperature) { };
export var units = {
    celsius: celsius,
    fahrenheit: fahrenheit,
    kelvin: kelvin,
};
