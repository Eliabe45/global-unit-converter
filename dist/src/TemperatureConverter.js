var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Converter } from './Converter';
import { units } from './units/temperature';
var Temperature = /** @class */ (function (_super) {
    __extends(Temperature, _super);
    function Temperature() {
        return _super.call(this, units) || this;
    }
    return Temperature;
}(Converter));
export var TemperatureConverter = new Temperature();
