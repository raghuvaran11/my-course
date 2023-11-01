// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8]
// console.log("without speard",arr1)
// console.log("spead method",...arr1,...arr2)
// const combined =[...arr1,...arr2]
// console.log(combined)

// const arr1={a:1,b:2}
// const arr2={c:3,d:4}
// const mergedObjecr={...arr1,...arr2};
// console.log(mergedObjecr)

// function example (param1,param2,...rest) {
//     console.log("param1",param1)
//     console.log("param2",param2)
//     console.log("rest",rest)
// }
// example(1,2,3,4,5,6,7,8,9,0)

// function sum(...numbers) {
//     let total = 0 ;
//     for (const num of numbers) {
//         total+=num;
//     } return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,0))


// const studentDetails={
//     name:"raghu",
//     age:29
// }
// studentDetails["city"]="hyderabad"
// studentDetails.city="mancherial"
// studentDetails.name="chinna"
// studentDetails.address=("10-161,mancherial")
// console.log(studentDetails)

const studentDetails={
    name:"rakesh",
    age:29
}
const teacherDetails={
    tname:"ganesh",
    tage:35
}
const Newdetails={...studentDetails,...teacherDetails}
console.log(Newdetails)