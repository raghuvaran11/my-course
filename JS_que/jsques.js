// ** Sum of Natural Numbers:**...............................

// let number=5
// let sum=0
// for(let i=0;i<=number;i++){
//     sum +=i
// }
// console.log(sum)

// **  Factorial of a Number:**.....................

// let number=5
// let factorial=1
// for(let i=1;i<=number;i++){
//     factorial *= i
// } console.log(factorial)

// ** Fibonacci Sequence:**...................................

// let a=0,b=1;
// let n=10
// for (let i=0;i<=n;i++){
//     let temp=a+b;
//     a=b;
//     b=temp;
//     console.log(temp)
// }

// ** Reverse a String:**...............................

// let string="hello world"
// let reverse=""
// for(let i=string.length-1;i>=0;i--){
//    reverse+=string[i]
// }
// console.log(reverse)

// ** Reverse an Array:**......................................

//     let array=[1,2,3,4,5]
// let reverseArray=[];
// for (let i=array.length-1;i>=0;i--){
//     reverseArray.push(array[i])
// }
// console.log(reverseArray)

// ** Print Pattern:**...........................

// let row=5
// for (let i=1;i<=row;i++){
//     let pattern=""
//     for (let j=1;j<=i;j++){
//         pattern += " * "()
//     };
//     console.log(pattern)
// }

// ** largest number:**...............................


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
      
    //   // Example usage:
    //   let numbersList = [10, 5, 8, 20, 15];
    //   console.log(findLargestNumber(numbersList));
      

    // ** smallest number:**..................................

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
    
    // // Example usage:
    // let numbersList = [10, 5, 8, 20, 15];
    // console.log(findSmallestValue(numbersList));


// ** Find the Maximum Number in an Array**...............................

//    let array= [5,6,7,9,10,2,12]
//    let max = array[0]
//    for (let i=0;i<array.length;i++) {
//       if (array[i]>max) {
//          max=array[i]
//       }
   
//    }
//    console.log(max)

// **  find minimum value of array **.........................

// let array = [2,1,3,5,9,8,7,0]
// let min= array[0]
// for(let i=0;i<array.length;i++) {
//    if (array[i]<min) {
//       min=array[i]
//    }
// }
// console.log (min)


// **  countdigit of number  **................................

// function countDigits(number) 
// Convert the number to a string to easily get its length
//        const numString = Math.abs(number).toString();
//        return numString.length;
//     }        
//    Example usage:
//     let num = 12345;
//     console.log("Number of digits in " + num + ": " + countDigits(num));
        
//     num = -9876;
//     console.log("Number of digits in " + num + ": " + countDigits(num));

// **  Count the Occurrences of a Character in a String**..........................................

// function countChar(inputString, char) {
//     let count = 0;
//     for (let i = 0; i < inputString.length; i++) {
//         if (inputString[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// // Example usage:
// const inputStr = "hello world";
// const characterToCount = "o";
// const result = countChar(inputStr, characterToCount);
// console.log(`The character '${characterToCount}' appears ${result} times in the string '${inputStr}'.`);

// ** Average value of the numbers **.......................

// function findAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; // To avoid division by zero if the array is empty
//     }

//     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     const average = sum / numbers.length;

//     return average;
// }

// // Example usage:
// const numbersArray = [10, 20, 30, 40, 50];
// const result = findAverage(numbersArray);
// console.log(`The average of the numbers is: ${result}`);

// **  Remove Duplicates from an Array  **.....................

// function removeDuplicates(numbers) {
//     // Use a Set to store unique values
//     let uniqueNumbers = new Set(numbers);
  
//     // Convert the Set back to an array
//     let uniqueArray = Array.from(uniqueNumbers);
  
//     return uniqueArray;
//   }
  
//   // Example usage:
//   let inputArray = [1, 2, 2, 3, 4, 4, 5];
//   let resultArray = removeDuplicates(inputArray);
  
//   console.log(resultArray);
  

// **  Merge Two Sorted Arrays**............................................

// function mergeSortedArrays(arr1,arr2) {
//        let mergearray=[...arr1,...arr2]
//        let result=[...new Set(mergearray)]
//        console.log (result)
//     }
//     let arr1 =[0,1,2,3,4]
//     let arr2 =[3,4,5,6,7,8,9]
//     mergeSortedArrays(arr1,arr2)
    
// **  Check for Palindrome **.........................................

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
//     // Compare the cleaned string with its reverse
//     const reversedStr = cleanedStr.split('').reverse().join('');
  
//     return cleanedStr === reversedStr;
//   }
  
//   // Example usage:
//   let inputString = "A man, a plan, a canal, Panama!";
//   let result = isPalindrome(inputString);
  
//   console.log(result); // Output: true
  

//**    isAnagram ***...........................................

// let str1= "listens"
// let str2 = "slients"
// function  AreAnagram(str1, str2) {
//      return str1.split("").sort().join("")
//      === str2.split("").sort().join("")
// } 
// console.log(AreAnagram(str1,str2))


// ** findIndex ** ............................................

// const numbers = [1,2,3,4,5,6]
// const op= numbers.findIndex(findThree)
// function findThree(value) {
//    return value===3;
// }
// console.log(op)


// Write a function `findIntersection` that takes two arrays as input and returns an array
// containing the elements that are common to both input arrays.............................................

// function findIntersection(arr1, arr2) {
//     // Use the filter method to find common elements
//     let intersection = arr1.filter(element => arr2.includes(element));
  
//     return intersection;
//   }
  
//   // Example usage:
//   let array1 = [1, 2, 3, 4, 5];
//   let array2 = [3, 4, 5, 6, 7];
//   let result = findIntersection(array1, array2);
  
//   console.log(result); // Output: [3, 4, 5]
  

//  Write a function `findUnique` that takes two arrays as input and returns an array
// containing elements that are unique to each input array (i.e., not common between
// them).....................................................................................

// function findUnique(array1, array2) {
//     // Initialize arrays to store unique elements
//     let uniqueArray1 = [];
//     let uniqueArray2 = [];
    
//     // Loop through array1 and check for unique elements
//     for (let element of array1) {
//         if (!array2.includes(element)) {
//             uniqueArray1.push(element);
//         }
//     }
    
//     // Loop through array2 and check for unique elements
//     for (let element of array2) {
//         if (!array1.includes(element)) {
//             uniqueArray2.push(element);
//         }
//     }
    
//     // Concatenate and return unique elements from both arrays
//     return uniqueArray1.concat(uniqueArray2);
// }

// // Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findUnique(array1, array2)); // Output: [1, 2, 6, 7]

  
// Write a function `rotateArray` that takes an array and a number `k` as input and rotates the array to the right by `k` positions........................................................

// let array =[1,2,3,5,6,7]
// let k=5
// function ArrayRotation(arr,numberOfShifts) {
//     for (let i=0; i<numberOfShifts;i++) {
//  arr.unshift(arr.pop());
//  console.log('step ${i+1}',arr)
//     }
// }
// console.log('final output:',ArrayRotation(array,k));


// Write a function `removeFalsyValues` that takes an array and removes all falsy values (e.g., `false`, `null`, `0`, `""`, `undefined`, `NaN`)...............................................................................

// function removeFalsyValues(array) {
//     // Use the filter method to remove falsy values
//     return array.filter(value => !!value);
// }

// // Example usage:
// const originalArray = [1, 0, false, "", undefined, null, NaN, 42, "hello"];
// const newArray = removeFalsyValues(originalArray);

// console.log(newArray);
// // Output: [1, 42, 'hello']


// Write a function `filterEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers...............................................................................................

// let array =[1,2,3,4,5,6]
// const evenNumber=array.filter(num =>{
//     return num%2 ==0;
// }) 
// console.log(evenNumber)

// odd number in array.........................................................................

// let array =[1,2,3,4,5,6,7,8,9,10,11]
// const oddNumber =array.filter(num =>{
//     return num%2!=0;
// })
// console.log(oddNumber)