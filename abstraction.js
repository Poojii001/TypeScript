var One = /** @class */ (function () {
    function One() {
        this.a = 10;
        this.b = 20;
        this.c = 30;
    }
    One.prototype.display = function () {
        console.log("In display() of test class a =".concat(this.a, " b=").concat(this.b, " c=").concat(this.c));
    };
    return One;
}());
// class sample extends Test {
//     show() {
//         console.log(`In show() of test class a =${this.a} b=${this.b} c =${this.c}`)
//     }
// }
// var obj = new sample()
// obj.display()
// obj.show()
// console.log(`In main scope a = ${obj.a} b={obj.b} c=${obj.c}`)
