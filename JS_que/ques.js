// **1. Sum of Natural Numbers:**
// Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.


// let n=5
// let sum =0
// for (let i=0;i<=n;i++){
//     sum += i;
// }
// console.log(sum)


// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

// let n= 10
// let factorial =1
// for (let i=1;i<=n;i++){
//     factorial *=i
// }
// console.log(factorial)

// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.

// let a=0,b=1;
// let n=10
// for (let i=0;i<=n;i++){
//     let temp=a+b;
//     a=b;
//     b=temp;
//     console.log(temp)
// }

// **4. Print Multiplication Table:**
// Write a program to print the multiplication table of a given number `n` using a `for` loop.

// let n=10
// for (let i=0;i<=10;i++){
//     let mult=n*i;
//     console.log(mult)
// }


// **5. Reverse a String:**
// Write a program to reverse a string using a `for` loop.


// let str= "hello world"
// let reverse =""
// for(let i=str.length-1;i>=0;i--){
//     reverse+=str[i]
// }
// console.log(reverse)

// function-- model


// const string ="hello"
// function reverseString (str) {
//      let newString=" "
//      for(let i=str.length-1;i>=0;i--){
//             newString+=str[i]
//         }
//         return newString;
// } 
// const result =reverseString(string)
// console.log(result)


let str="hello"
let x= str.split("")
let y=x.reverse("")
let z=y.join('')
console.log(z)