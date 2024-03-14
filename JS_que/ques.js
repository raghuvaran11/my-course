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


// const scorers =[
   //    {name: "ram", goals: 4},
   //    {name: "raghu", goals :3},
   //    {name: "raju",goals:3},
   //    {name:"seetha",goals:3}
   // ];
   // console.log(scoreres[0].name);
   // console.log(scorers[0].goals);
   
   // console.log(scorers[1].name);
   // console.log(scorers[1].goals
 

// const arr1 =[1,2]
// const arr2 = [3,4]
// const arr3 =arr1.contact(arr2);
// console.log(arr3==);


// / const input2 = "silent";
// const output = isAnagram(input1, input2);
// console.log(output); // true


// const array = [1,2,3,4,5];
// let sum=0;
// array.forEach(n=> sum += n);
// console.log(sum)


// <html>
//    <script language="javascript">
//       var a,b;
//       a=10;
//       b=20;
//       c=a+b;
//       document. write("sum of no.s" +c)
//    </script>
// </html>



// const findVowels =(str) => {
//    const vowels =["a","e","i","o","u"];
//    let count = 0;
//    for (let char of str. toLowerCase()){
//       if (vowels.includes(char)){
//      count++;
//    }
// }
// return count;
// const scorers =[
//    {name: "ram", goals: 4},
//    {name: "raghu", goals :3},
//    {name: "raju",goals:3},
//    {name:"seetha",goals:3}
// ];
// console.log(scoreres[0].name);
// console.log(scorers[0].goals);

// console.log(scorers[1].name);
// console.log(scorers[1].goals);



// let number =4;
// if(number %2==0){
//    console.log("the number is even")
// }
// else{
//    console.log("the number is odd")
// }


// let number =4;
// if(number %2==0){
//    console.log("the number is even")
// }
// else{
//    console.log("the number is odd")
// }

// let email="robin_singh@example.com"
// let first_name=email.slice(0,5)
// let pad=first_name.padEnd(12,".")
// let remaining=email.substring(11)
// let output=pad.concat(remaining)
// console.log(output)



// 17. Write a function `findIndex` that takes an array and an element as input and returns
// the index of the first occurrence of the element in the array. If the element is not found,
// return -1.

// const numbers = [1,2,3,4,5,6]
// const op= numbers.findIndex(findThree)
// function findThree(value) {
//    return value===3;
// }
// console.log(op)

// reverse of array method 

// const arr=[1,2,3,4,5,6]
// const op=arr.reverse()
// console.log(op)


// const arr=[1,2,3,4,5,6]
// const op=[...arr].reverse()
// console.log(op)


// Write a function `findIntersection` that takes two arrays as input and returns an array
// containing the elements that are common to both input arrays.



// const arr1=[1,2,3,4,5]
// const arr2=[6,3,4,5,2]
// for(let i= 0;i<arr1.length;i++){
//    for (j=0;j<arr2.length;j++){
//       if(arr1[i]==arr2[j])

//    }
// }


// Write a function `findIntersection` that takes two arrays as input and returns an array
// containing the elements that are common to both input arrays.


// const arr1=[1,2,3,4,5]
// const arr2=[6,3,4,5,2]
// for(let i= 0;i<arr1.length;i++){
//    for (j=0;j<arr2.length;j++){
//       if(arr1[i]==arr2[j])

//    }
// }

// 21. Write a function `findUnique` that takes two arrays as input and returns an array
// containing elements that are unique to each input array (i.e., not common between
// them).
// **Example:**
// ```javascript
// const inputArray1 = [1, 2, 3, 4, 5];
// const inputArray2 = [3, 4, 5, 6, 7];
// const output = findUnique(inputArray1, inputArray2);
// console.log(output); // [1, 2, 6, 7]


// 22. Write a function `countWords` that takes a string as input and returns the number of
// words in the string.
// function CountWord (str){
//    return str.split(' ').length;
// }
// console.log(CountWord('hello there,how are you?'))


// 23. Write a function `reverseWords` that takes a string as input and returns the string
// with its words reversed.

// / let str= "hello world"
// let reverse =""
// for(let i=str.length-1;i>=0;i--){
//     reverse+=str[i]
// }
// console.log(reverse)

// function-- model


// 24. Write a function `removeVowels` that takes a string as input and returns the string
// with all vowels removed.


// function isPalindrome(str){
//   const cleanstr=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//   return cleanstr===cleanstr.split('').reverse().join('');
// }
// const testString="madam"
// if(isPalindrome(testString)){
//   console.log(`"${testString}" is a palindrome.`);
// } else {
//   console.log(`"${testString}" is not a palindrome.`);
// }

// function isPalindrome(str){
//    const cleanstr=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//    return cleanstr=== cleanstr.split('').reverse().join('')
// }const teststring="madam"
// if(isPalindrome(teststring)){
//    console.log(`"${testString}" is a palindrome.`)
// } else {
//    console.log(`"${testString}" is not a palindrome.`)
// }


// const string ="this is a vowels "
// const coumt=0
// const vowels=['a','e','i','o','u']
// for (result of string.toLowerCase()){
//    if(vowels.includes(result)){
//        count++
//    }
// }
// console.log(count)


// 23. Write a function `reverseWords` that takes a string as input and returns the string
// with its words reversed.

// / let str= "hello world"
// let reverse =""
// for(let i=str.length-1;i>=0;i--){
//     reverse+=str[i]
// }
// console.log(reverse)

// let str="hello world"
// let reverse=""
// for (let i = str.length-1;i>=0;i--){
//    reverse=str[i]
// } console.log(reverse)


// 22. Write a function `countWords` that takes a string as input and returns the number of
// words in the string.
// function CountWord (str){
//    return str.split(' ').length;
// }
// console.log(CountWord('hello there,how are you?'))

// function countword(str){
//    return str.split('').length;
// }
// console.log(countword("hello, how are you "))



// onst inputArray1 = [1, 2, 3, 4, 5];
// const inputArray2 = [3, 4, 5, 6, 7];
// const output = findUnique(inputArray1, inputArray2);
// console.log(output); // [1, 2, 6, 7]

// onst inputArray1 = [1, 2, 3, 4, 5];
// const inputArray2 = [3, 4, 5, 6, 7];
// const output = findUnique(inputArray1, inputArray2);
// console.log(output); // [1, 2, 6, 7]


// let array=[1,2,3]
// array.push(4)
// console.log(array)
// let array =[1,2,3,4]
// array.pop()
// console.log(array)

// let string=("Enumerating objects: 7, done.")
// console.log(string.toUpperCase())

// let array=[1,2,3,4]
// array.push(5)
// console.log(array)

// const inputArray1 = [1, 2, 3, 4, 5];
// const inputArray2 = [3, 4, 5, 6, 7];
// const output = findUnique(inputArray1, inputArray2);
// console.log(output); // [1, 2, 6, 7]


// function countword(str){
//    return str.split('').length;
// }
// console.log(countword("hello, how are you "))



// const string ="this is a vowels "
// const coumt=0
// const vowels=['a','e','i','o','u']
// for (result of string.toLowerCase()){
//    if(vowels.includes(result)){
//        count++
//    }
// }
// console.log(count)


// let str="hello world"
// let reverse=""
// for (let i = str.length-1;i>=0;i--){
//    reverse=str[i]
// } console.log(reverse)

// function isPalindrome(str){
//      const cleanstr=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//      return cleanstr===cleanstr.split('').reverse().join('');
//    }
//    const testString="madam"
//    if(isPalindrome(testString)){
//      console.log(`"${testString}" is a palindrome.`);
//    } else {
//      console.log(`"${testString}" is not a palindrome.`);
//    }
   
// const string ="hello world"
// const results=string.toUpperCase()
// console.log(results)

// function string(str){
//   const result=string.toUpperCase()
//   console.log(result)
// }
// string("hello world")


// const string ="THIS IS MY HELLO PAGE"
// console.log(string.toLowerCase())

// const string ="this is a my life"
// console.log(string.slice(2))

// **1. Sum of Natural Numbers:**
// let number=10;
// let sum =0;
// for (let i=0;i<=number;i++){
//    sum +=i;
// }
// console.log(sum)

// let n=5
// let sum =0
// for (let i=0;i<=n;i++){
//     sum += i;
// }
// console.log(sum)


// **2. Factorial of a Number:**
// let number=5
// let factorial=1
// for(let i=1;i<=number;i++){
//    factorial *= i
// }
// console.log(factorial)
// 3.mutlfication
// let number=10
// for(let i=0;i<=10;i++){
// let multi=number*i;
// console.log(multi)
// }

// **3. Fibonacci Sequence:**
// let a=0,b=1;
// let n=10
// for (let i=0;i<=n;i++){
//     let temp=a+b;
//     a=b;
//     b=temp;
//     console.log(temp)
// }
// let a=0
// let b=1
// let n=10
// for(let i=0;i<=n;i++){
//    let fibo=a+b;
//    a=b;
//    b=fibo;
//    console.log(fibo)
// }


// **5. Reverse a String:**
// let string="hello world"
// let reverse=""
// for(let i=string.length-1;i>=0;i--){
//    reverse+=string[i]
// }
// console.log(reverse)

// let str="hello world"
// let reverse =""
// for (let i=str.length-1;i>=0;i--){
//    reverse+=str[i]
// }
// console.log(reverse)

// let str="hello"
// let reverse=""
// for(let i=str.length-1;i>=0;i--){
//    reverse+=str[i]
// }
// console.log(reverse)


// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.


// let row=5
// for (let i=1;i<=row;i++){
//     let pattern=""
//     for (let j=1;j<=i;j++){
//         pattern += " * "()
//     };
//     console.log(pattern)
// }

// let row =5
// for(let i=1;i<=row;i++){
//    let pattern=""
//    for(let j=1;j<=i;j++){
//       pattern+="*"
//    };
//    console.log(pattern)
// }

// let row =5 
// for(let i=1;i<=row;i++){
//    let pattern=""
//    for (let j=1;j<=i;j++){
//       pattern += "*"
//    }console.log(pattern)
// }

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
// console.log(prime(9))

// function prime(n) {
//    if(n<2)
//    return`${n} is not a prime number`
// for (let i =2;i<n;i++){
//    if(n%i===0){
//       return `${n} is not a prime number`
//    }
// }return `${n} is a Prime Number`
// }
// console.log(prime(9))


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

// print pattern

// let row =5 
// for(let i=1;i<=row;i++){
//    let pattern=""
//    for (let j=1;j<=i;j++){
//       pattern += "*"
//    }console.log(pattern)
// }

// let row=5
// for(let i=1;i<=row;i++){
//    let pattern=""
//    for(let j=1;j<=i;j++){
//       pattern+="*"
//    }console.log(pattern)
// }
// let row=5
// for(let i=1;i<=row;i++){
//    let pattern=""
//    for(let j=1;j<=i;j++){
//       pattern += "*"
//    }console.log(pattern)
// }
// function prime(n) {
   //    if(n<2)
   //    return`${n} is not a prime number`
   // for (let i =2;i<n;i++){
   //    if(n%i===0){
   //       return `${n} is not a prime number`
   //    }
   // }return `${n} is a Prime Number`
   // }
   // console.log(prime(9))

   //  function prime (n){
   //    if(n<2)
   //    return `${n}is not a prime number`
   // for(let i=2;i<n;i++){
   //    if(n%i===0){
   //       return `${n}is not a prime number`
   //    }
   // }return `${n} is a Prime Number`
   //  }console.log(prime(9))

  
   // const number =[2,5,6,9,8,7,1,3]
   // const largest=number[0]
   // for (let i=1;i<=number.length;i++) {
   //     if(number[i] < largest) {
   //      largest == number[i]
   
   //     }
   // } 
   // console.log(largest)

   // const number=[1,2,3,4,5,6,7,8,9]
   // let largest= number[0]
   // for(let i=1;i<=number.length;i++){
   //    if(number[i]>largest){
   //       lnumber=number[i]
   //    }
   // } console.log(largest)
   
//    function findLargestNumber(numbers) {
//       if (numbers.length === 0) {
//           return "The list is empty.";
//       }
  
//       let largestNumber = numbers[0];
  
//       for (let i = 1; i < numbers.length; i++) {
//           if (numbers[i] > largestNumber) {
//               largestNumber = numbers[i];
//           }
//       }
  
//       return "The largest number is: " + largestNumber;
//   }
  
//   // Example usage:
//   let numbersList = [10, 5, 8, 20, 15];
//   console.log(findLargestNumber(numbersList));
  
// function findSmallestValue(numbers) {
//    if (numbers.length === 0) {
//        return "The list is empty.";
//    }

//    let smallestValue = numbers[0];

//    for (let i = 1; i < numbers.length; i++) {
//        if (numbers[i] < smallestValue) {
//            smallestValue = numbers[i];
//        }
//    }

//    return "The smallest value is: " + smallestValue;
// }

// // Example usage:
// let numbersList = [10, 5, 8, 20, 15];
// console.log(findSmallestValue(numbersList));


// function countDigits(number) {
//    // Convert the number to a string to easily get its length
//    const numString = Math.abs(number).toString();
   
//    return numString.length;
// }

// // Example usage:
// let num = 12345;
// console.log("Number of digits in " + num + ": " + countDigits(num));

// num = -9876;
// console.log("Number of digits in " + num + ": " + countDigits(num));

// sum

// let num=5
// let sum =0
// for (let i=0;i<=num;i++){
//    sum += i
// }
// console.log(sum)

// *  Factorial of a Number:**.....................

// let num=5
// let factorial=1
// for(let i=1;i<=num;i++){
//    factorial *=i
// }
// console.log(factorial)

// ** Fibonacci Sequence:**...................................
// let a=0, b=1
// let num=10
// for(let i=1;i<=num;i++){
//    let temp =a+b
//    a=b
//    b=temp
//    console.log(temp)
// }


// ** Reverse a String:**...............................
// let str="hello world"
// let reverse= ""
// for(let i=str.length-1;i>=0;i--){
//    reverse+=str[i]
// }
// console.log(reverse)


// let array=[1,2,3,4,5,6]
// let reverseArray=[]
// for(let i=array.length-1;i>=0;i--){
//    reverseArray.push(array[i])
// }
// console.log(reverseArray)

// let array=[1,2,3,4,5]
// let reversearray=[]
// for(let i=array.length-1;i>=0;i--){
//    reversearray.push(array[i])
// } 
// console.log(reversearray)


// let num=5
// let sum=0
// for(let i=0;i<=num;i++){
//    sum += i
// }
// console.log(sum)

// let num=5
// let factorial=1
// for(let i=1;i<=num;i++){
//    factorial *= i
// }
// console.log(factorial)

// let a=0,b=1
// let num=10
// for(let i=1;i<=num;i++){
//    let temp=a+b
//    a=b
//    b=temp
//    console.log(temp)
// }

// let str="hello"
// let reversestring=""
// for(let i=str.length-1;i>=0;i--){
//    reversestring +=str[i]
// }
// console.log(reversestring)

// let array=[1,2,3,4,5,6]
// let reversearray=[]
// for(let i=array.length-1;i>=0;i--){
//    reversearray.push(array[i])
// }
// console.log(reversearray)

// let row=5
// for (let i=1;i<=row;i++){
//     let pattern=""
//     for (let j=1;j<=i;j++){
//         pattern += " * "()
//     };
//     console.log(pattern)
// } 
// let row=5
// for(let i=1;i<=row;i++){
//    let pattren=""
//    for(let j=1;j<=i;j++){
//       pattren += " * "
//    } 
//    console.log(pattren)
// }

// let row=5
// for(let i=1;i<=row;i++){
//    let pattern =""
//    for (let j=1;j<=i;j++){
//       pattern += " * "
//    }
//    console.log(pattern)
// }


    // function findLargestNumber(numbers) {
    //       if (numbers.length === 0) {
    //           return "The list is empty.";
    //       }
      
    //       let largestNumber = numbers[0];
      
    //       for (let i = 1; i < numbers.length; i++) {
    //           if (numbers[i] > largestNumber) {
    //               largestNumber = numbers[i];
    //           }
    //       }
      
    //       return "The largest number is: " + largestNumber;
    //   }
    //   let numbersList = [10, 5, 8, 20, 15];
    //   console.log(findLargestNumber(numbersList));
      
// function findLargestNumber(number){
//    if(number.length===0){
//       return "this list is empty."
//    }let largestNumber=number[0]
//    for(let i=1;i<number.length;i++){
//       if (number[i]>largestNumber){
//          largestNumber=number[i]
//       }
//    } return "the largest number is: " +largestNumber
// } let numbersList = [10, 5, 8, 20, 15];
//   console.log(findLargestNumber(numbersList));

//   function findLargestNumber(number){
//    if(number.length===0){
//       return "this list is empty."
//    }let largestNumber=number[0]
//    for(let i=1;i<number.length;i++){
//       if (number[i]<largestNumber){
//          largestNumber=number[i]
//       }
//    } return "the largest number is: " +largestNumber
// } let numbersList = [10, 5, 8, 20, 15];
//   console.log(findLargestNumber(numbersList));
  
    // function findSmallestValue(numbers) {
    //     if (numbers.length === 0) {
    //         return "The list is empty.";
    //     }
    
    //     let smallestValue = numbers[0];
    
    //     for (let i = 1; i < numbers.length; i++) {
    //         if (numbers[i] < smallestValue) {
    //             smallestValue = numbers[i];
    //         }
    //     }
    
    //     return "The smallest value is: " + smallestValue;
    // }
    
    function smallestvalue(number){
      if(number.length===0){
         return "the list is empty"
      }
      let smallestvalue=number[0]
      for(let  i=1;i<=number.length;i++){
         if(number[i]<smallestvalue){
         smallestvalue=number[i] }
      }
      return "the smallest value is : "+smallestvalue;
    } 
    let number = [10, 5, 8, 20, 15];
  console.log(smallestvalue(number));