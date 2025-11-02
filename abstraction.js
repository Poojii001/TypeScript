var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Test = /** @class */ (function () {
    function Test() {
        this.a = 10;
        this.b = 20;
        this.c = 30;
    }
    Test.prototype.display = function () {
        console.log("In display() of test class a =".concat(this.a, " b=").concat(this.b, " c=").concat(this.c));
    };
    return Test;
}());
var sample = /** @class */ (function (_super) {
    __extends(sample, _super);
    function sample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sample.prototype.show = function () {
        console.log("In show() of test class a =".concat(this.a, " b=").concat(this.b, " c =").concat(this.c));
    };
    return sample;
}(Test));
var obj = new sample();
obj.display();
obj.show();
console.log("In main scope a = ".concat(obj.a, " b={obj.b} c=").concat(obj.c));
