// const arr1=[1,2,3]
// const arr2=[4,5,6]
// console.log(arr1)
// console.log(...arr1,...arr2)
// console.log("spread operate",...arr1)  
//  spread operte anedhi array nundi spread ithundhi ex:[1,2,3] manaku output 1,2,3 vastundhi


// function example(param1,param2,...rest){
//     console.log("param1",param1)
//     console.log("param2",param2)
//     console.log("rest",...rest)
// }
// example(1,2,3,4,5)

// rest operator anedhi inifinity numbers ni echinapudu manam total evvacahu

// function sum (...numbers){
//     let total=0
//     for(const num of numbers){
//         total+=num;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5));

// sum of the given numbers  
// function sum (...numbers){
//     let total=0
//     for(const num of numbers){
//         total+=num
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5))

// const studentDetail={
//     name:"raghu",
//     age: 22
// }
// studentDetail["city"]="hyderabad"
// studentDetail.flat=103
// studentDetail,name="ravi"
// console.log(studentDetail)

// const studentDetail={
//     name:"raghu",
//     age:30,
//     qualification:"btech"
// }
// const teacherdetails={
//     tname:"rakesh",
//     age:33,
//     qualification1:"btech"
// }
// const newdetail={...studentDetail,...teacherdetails}
// console.log(newdetail)


// const studentDetail={
//     name:"raghu",
//     age:30,
//     qualification:"btech",
//     address:"mancherial"

// }
// const teacherdetails={
//     tname:"rakesh",
//     tage:33,
//     tqualification:"btech",
//     taddress:"hyderabad"
// }
// const newdetail={...studentDetail,...teacherdetails}
// console.log(newdetail)

// const details=[{name:"raghu",age:30},{name:"suman",age:25},{name:"vinod",age:10}]
// details.map((item)=>{
//     console.log(item)
// })
const studentDetail=[{name:"raghu",age:30},{name:"suman",age:25},{name:"vinod",age:10}]
studentDetail.map((item,index)=>{
    console.log(index,item)
})