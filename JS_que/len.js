// let str ="hello"
// let op =str.split('').reverse('').join('')
// console.log(op)

// let a=0,b=1;
// for (let i=0;i<=10;i++) {
//     let temp=a+b ;
//     a=b;
//     b=temp;
// console.log(temp)
// }


// let row= 5
// for (let i = 1; i <= row; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
  

// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.

// let array=[1,2,3,4,5]
// let reverseArray=[];
// for (let i=array.length-1;i>=0;i--){
//     reverseArray.push(array[i])
// }
// console.log(reverseArray)



// sum of natural numbers

// let numbers=10
// let sum = 0
// for (let i=0;i<=numbers;i++){
//   sum +=i;
// }
// console.log(sum)

// factorial of numbers

// let numbers=10
// let factorial =1
// for (let i=1;i<=numbers;i++) {
//   factorial*=i
// }
// console.log(factorial)



// fibonacci method

let a=0,b=1
let fibo=10
for(let i =0;i<=fibo;i++){
  let temp=a+b
  a=b
  b=temp
  console.log(temp)
}