abstract class Demo {
    show() {
        console.log(`In show of Test class`)
    }
}
class sample extends Demo {
    display() {
        console.log("In display of Test class")
    }
}
var obj = new sample()
obj.show()
obj.display()