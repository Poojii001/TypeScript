// type Employee = {
//     id : number,
//     name : string,
//     dsg : string,
//     salary : number,
//     city : string,
//     state : string,
// }

// interface Employee = {
//     id : 1001,
//     name: "Pooja",
//     dsg : "student",
//     salary : 149000,
//     city : Lucknow,
//     state : UP,
// }
// console.log(emp)


//type alias vs interface

type Test1 = {
    a:number,
    b:number
}
type Test2 = Test1 & {
    c:number,
    d:number
}
interface Test2 extends Test1{
    c:number,
    d:number
}