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


// let str="hello"
// let x= str.split("")
// let y=x.reverse("")
// let z=y.join('')
// console.log(z)

// **6. Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.

// function prime(n) {
//     if (n<2)
//     return '${n} is not a prime number'
//     for (let i = 2; i<n; i++){
//         if( n % i === 0) {
//             return `${n} is not a Prime Number`

//         }
//     }
//     return `${n} is a Prime Number`
// }
// console.log(prime(29))


// **7. Count Digits in a Number:**
// Write a program to count the number of digits in a given number `n` using a `for` loop.



// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.


// let row=5
// for (let i=1;i<=row;i++){
//     let pattern=""
//     for (let j=1;j<=i;j++){
//         pattern += " * "
//     }
//     console.log(pattern)
// }


// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

// const number =[2,5,6,9,8,7,1,3]
// const largest=number[0]
// for (let i=1;i<=number.length;i++) {
//     if(number[i] < largest) {
//      largest = number[i]

//     }
// } 
// console.log(largest)

// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.

// let array=[1,2,3,4,5]
// let reverseArray=[];
// for (let i=array.length-1;i>=0;i--){
//     reverseArray.push(array[i])
// }
// console.log(reverseArray)



// **Question 1: Reverse a String**

// Write a function `reverseString` that takes a string as input and returns the reverse of that string.
   
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


// **Question 2: Find the Maximum Number in an Array**

// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

   // let array= [5,6,7,9,10,2,12]
   // let max = array[0]
   // for (let i=0;i<array.length;i++) {
   //    if (array[i]>max) {
   //       max=array[i]
   //    }
   
   // }
   // console.log(max)

   // find minimum value of array

   // let array = [2,1,3,5,9,8,7,0]
   // let min= array[0]
   // for(let i=0;i<array.length;i++) {
   //    if (array[i]<min) {
   //       min=array[i]
   //    }
   // }
   // console.log (min)

// **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.

// let str="this is a string"
// for(let i in str) 
//    let  print=(i,"=",str.Count(i),"times")
// }
// console.log(print)

//    let  print=(i,"=",str.count(i),"times")
// }
// console.log(print)



// **Question 4: Remove Duplicates from an Array**

// Write a function `removeDuplicates` that takes an array of numbers as input and returns a new array with duplicate values removed.

// const removeDuplicates=(input)=>{
// // for(let i=0;i<input.length;i++) {
// // console.log("for", i )
// // }
// let newarr=[]
// for(let i of input) {

//     if(!newarr.includes(i)){
//         newarr.push(i)
//       }
//        console.log("newarr1",newarr)
//   }
//   console.log("newarr2",newarr)
// }
// const input =[1,2,3,1,4,5,2,4,3,6]
//  const output=removeDuplicates(input)
//  console.log(output)

// <<<<<<< HEAD
// let str="dad"
// let len=str.length
// for(let i=0;i<len/2;i++){
//    if(str[i] !=str[len-1-i]) {
//       var msg="it is not a palindrome"
//    }
// }
// console.log("$ {str} : ${msg}")
// =======

// 14. Write a function `findAverage` that takes an array of numbers as input and returns
// the average of all the numbers.


//    let array=[5,2,6,8]
//    let sum =0
//    for(let i=0;i<array.length;i++) {
//  sum += array[i]
//    }
//    console.log(sum/array.length)



// **Question 6: Merge Two Sorted Arrays**
// Write a function `mergeSortedArrays` that takes two sorted arrays as input and merges
// them into a single sorted array.


// function mergeSortedArrays(arr1,arr2) {
//    let mergearray=[...arr1,...arr2]
//    let result=[...new Set(mergearray)]
//    console.log (result)
// }
// let arr1 =[0,1,2,3,4]
// let arr2 =[3,4,5,6,7,8,9]
// mergeSortedArrays(arr1,arr2)


// **Question 5: Check for Palindrome**
// Write a function `isPalindrome` that takes a string as input and returns `true` if it's a
// palindrome (reads the same forwards and backward), and `false` otherwise.


// function checkpalindrome(){
//    let input = "level"
//    let reverse=
// }


// 11. Write a function `isAnagram` that takes two strings as input and returns `true` if they
// are anagrams (contain the same characters in a different order), and `false` otherwise.
// **Example:**
// ```javascript
// const input1 = "listen";
// const input2 = "silent";
// const output = isAnagram(input1, input2);
// console.log(output); // true
// >>>>>>> 2b7e546216a2c66aec6e48872214f91f4cf392da



// let str1= "listens"
// let str2 = "slient"
// function  AreAnagram(str1, str2) {
//      return str1.split("").sort().join("")
//      === str2.split("").sort().join("")
// } 
// console.log(AreAnagram(str1,str2))




// let arr2=[1,2,3,4,5,6,7]
// for(let i=0;i<arr2.length;i++){
//    if (i%2==0){
      
//    }
// }
const scorers =[
   //    {name: "ram", goals: 4},
   //    {name: "raghu", goals :3},
   //    {name: "raju",goals:3},
   //    {name:"seetha",goals:3}
   // ];
   // console.log(scoreres[0].name);
   // console.log(scorers[0].goals);
   
   // console.log(scorers[1].name);
   // console.log(scorers[1].goals);
   