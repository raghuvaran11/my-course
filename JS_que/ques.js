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

let a=0,b=1;
let n=10
for (let i=0;i<=n;i++){
    let temp=a+b;
    a=b;
    b=temp;
    console.log(temp)
}

