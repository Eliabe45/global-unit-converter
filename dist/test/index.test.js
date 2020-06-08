"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('Temperature Converter', function () {
    test('convert celsius to fahrenheit', function () {
        expect(src_1.TemperatureConverter.convert({
            from: 'celsius',
            value: 731.654,
            to: 'fahrenheit',
        })).toBe(1348.9772);
    });
    test('convert celsius to kelvin', function () {
        expect(src_1.TemperatureConverter.convert({
            from: 'celsius',
            value: 9143.22,
            to: 'kelvin',
        })).toBe(9416.37);
    });
    test('convert fahrenheit to celsius', function () {
        expect(src_1.TemperatureConverter.convert({
            from: 'fahrenheit',
            value: 354.213,
            to: 'celsius',
        })).toBe(179.00722222222223);
    });
    test('convert fahrenheit to kelvin', function () {
        expect(src_1.TemperatureConverter.convert({
            from: 'fahrenheit',
            value: 34.113,
            to: 'kelvin',
        })).toBe(274.32388888888886);
    });
});
