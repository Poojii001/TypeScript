// type Employee = {
//     id : number,
//     name : string,
//     dsg : string,
//     salary : number,
//     city : string,
//     state : string
// }

// interface Employee = {
//     id: number,
//         name: string,
//             dsg : string,
//                 salary : number,
//                     city : string,
//                         state : string
// }
// var emp: Employee {
//     id: 1001,
//     name: Pooja,
//     dsg: student,
//     salary:287924,
//     city:"Faridavbad",
//     state: "Hariyana"
// }
// console.log(emp)


//type alias vs interface

// type Test1 = {
//     a:number,
//     b:number
// }
// type Test2 = Test1 & {
//     c:number,
//     d:number
// }


// interface Test1 {
//     a:number,
//     b:number
// }
// interface Test2 extends Test1{
//     c:number,
//     d:number
// }

//readonly

type Employee = {
    readonly id: number,
    name : string,
    dsg : string,
    salary : number,
    city?: string,
    state?: string
}

// interface Employee = {
//     readonly id: number,
//     name : string,
//     dsg : string,
//     salary : number,
//     city?: string,
//     state?: string
// }