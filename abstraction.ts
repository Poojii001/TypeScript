class One {
    public a:number =10
    protected b:number =20
    private c:number =30
    display() {
        console.log(`In display() of test class a =${this.a} b=${this.b} c=${this.c}`)
    }
}
// class sample extends Test {
//     show() {
//         console.log(`In show() of test class a =${this.a} b=${this.b} c =${this.c}`)
//     }
// }
// var obj = new sample()
// obj.display()
// obj.show()
// console.log(`In main scope a = ${obj.a} b={obj.b} c=${obj.c}`)