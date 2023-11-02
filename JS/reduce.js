// const numbers =[ 1, 2, 3, 4, 5, 6, 7 ];
// let sum=0
// numbers.map((item)=>{
//     sum +=item
// })

// let accumulator=0 ;
// numbers.map((currentvalue)=>{
//     console.log("currentvalue",currentvalue);
// return (
//    accumulator+currentvalue);
// }
// )

// const numbers =[ 1, 2, 3, 4, 5, 6, 7 ];
// const sum= numbers.reduce((accumulator,CurrentValue) => {
// return (
// accumulator + CurrentValue )
// },0);
// console.log(sum);


// 1.find the max value in the array

// const numbers1=[12, 15, 31, 25, 30]
// const max= numbers1.reduce((accumulator,CurrentValue) => {
// return accumulator>CurrentValue?accumulator:CurrentValue
// },-Infinity);
// console.log(max)

// 2. find the minimum value in the array 

// const numbers=[12, 15, 31, 25, 30]
// const minimum = numbers.reduce((accumulator,CurrentValue) => {
//     return accumulator<CurrentValue?accumulator:CurrentValue
//     },Infinity);
//     console.log(minimum)


// 3. concating an array of strings
// const numbers=["hello", " ", "world!"]
// const minimum = numbers.reduce((accumulator,CurrentValue) => {
//     return accumulator+CurrentValue
// }," ");
//     console.log(minimum)

// 4. flattening an array of arrays

const flat=[[1, 2],[3, 4],[5, 6]]
const mix=flat.reduce((accumulator,CurrentValue) => {
        return accumulator.concat(CurrentValue)
},[])
console.log(mix)
