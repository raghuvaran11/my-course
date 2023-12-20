// Write a function `reverseString` that takes a string as input and returns the reverse of that string.


// let string= "hello"
// const output = string.split('').reverse("").join("")
// console.log(output)

// let str= "hello"
// let op= str.split("")
// let op1=op.reverse("")
// let op2=op1.join("")
// console.log(op)
// console.log(op1)
// console.log(op2)

// this is not working method

// let str="hello"
// let op=ReverseString(str)
// console.log(op)


// **Question 2: Find the Maximum Number in an Array**

// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

// let array=["3,5,9,10,15"]
// let max=array[0]
// for(let i=0;i<array.length;i++) {
//     if(array[1]>max) {
//         max=array[i]
//     }console.log (max)
// }console.log (max)



// let arra1=["3,5,9,10,15"]
// const min= Math.min(...arra1)
// const Max= Math.max(...arra1)
// console.log(min)
// console.log(Max)

const array =["2,5,1,6,3,9,15"]
const max =0
for (let i=0;i<array.length;i++) {
    if (array[i]>max){
        max=array[i]
    }
    // else if (array[i]<max){
    //     max=array[1]
    // }

    }console.log(max)



