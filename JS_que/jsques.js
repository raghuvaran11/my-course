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


// *** vowels count ****......................................................................


// function countVowels(str) {
//     // Convert the string to lowercase to handle both uppercase and lowercase vowels
//     str = str.toLowerCase();

//     // Define the set of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     // Initialize a counter for vowels
//     let vowelCount = 0;

//     // Iterate through each character in the string
//     for (let char of str) {
//         // Check if the character is a vowel
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }

//     // Return the count of vowels
//     return vowelCount;
// }

// // Example usage:
// const inputString = "this is the vowels count programme";
// const result = countVowels(inputString);
// console.log(`Number of vowels in "${inputString}": ${result}`);


// *** vowels remove *****.........................................................................

// function removeVowels(str) {
//     // Define the set of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     // Convert the string to an array of characters
//     const charArray = str.split('');

//     // Filter out vowels from the array
//     const filteredArray = charArray.filter(char => !vowels.includes(char.toLowerCase()));

//     // Join the characters back into a string
//     const resultString = filteredArray.join('');

//     return resultString;
// }

// // Example usage:
// const inputString = "Hello, World!";
// const result = removeVowels(inputString);
// console.log(`String without vowels: ${result}`);


// rite a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized......................................................................................

// function capitalizeFirstLetter(inputString) {
//     // Check if the input is an empty string
//     if (inputString.length === 0) {
//         return inputString;
//     }

//     // Capitalize the first letter and concatenate with the rest of the string
//     const resultString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

//     return resultString;
// }

// // Example usage:
// const inputString = "hello, world!";
// const result = capitalizeFirstLetter(inputString);
// console.log(`Original string: ${inputString}`);
// console.log(`String with first letter capitalized: ${result}`);


// ...............................................ASSIGNMENTS-QUESTIONS............................................

// 1)Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// let name = "Robin Singh"
// let op = name.slice(0,4)
// console.log(op)

// function name () {
//     let op=name.slice(0,5)
//     console.log(op)
// }
// name="robin singh";


// 2)Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// let testdata ="Robin Singh"
// let op= testdata.slice(0,7)+"."
// let op1=op+"."
// console.log(op)

// 3)Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"


// let email ="raghu.mr199@gmail.com"
// let halfname=email.slice(0,4)
// console.log(halfname)
// let padendname= halfname.padEnd(9,".")
// console.log(padendname)
// let endname = email.slice(11)
// console.log(endname)
// const finaloutput=padendname+endname
// console.log(finaloutput)


// 4)Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// let string= "js string exercises"
// let op = string[0].toUpperCase()+string.slice(1)
// console.log(op)

// let string="js string exercises"
// let output=string.replace("j","J")
// console.log(output)

// let string="js string exercises"
// let parts=string.split()
// console.log(parts)


// 5)Write a JavaScript function to uncapitalize the first character of a string.
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

// let string='Js string exercises'
// let op= string[0].toLowerCase()+string.slice(1)
// console.log(op)

// let string = "JS STRING EXCERCISES"
// let op = string.toLowerCase()
// console.log(op)

// let string='js string exercises'
// let op = string.replace("e","E")
// console.log(op)

// 6)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and
// prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for
// hours 12-17, and "Good evening" for hours 18-23

// let time=13
// if(time<=11){
//     console.log("Good Morning")
// }
// else if(time<=17) {
//     console.log("GOOd Afternoon")
// }
// else if(time<=23){
//     console.log("good evening")
// } else {
//     console.log("good night")
// }



// 7)Leap Year Check
// Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is
// divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap
// year."


// let year= 2023
// if (year % 400==0,year % 100 ==0) 
// {
//     console.log("this is leap year")
// }
//   else if (year % 4==0,year %=! 0)  
//   {
//     console.log("this is  leap year")
// } 
//   else 
//   {
//     console.log("not leap year")
// }

// 8)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the
// number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

// let number = 6
// if (number>0){
//     console.log("Positive number")
// } else if (number==0){
//     console.log("zero number")

// }else {
//     console.log("negative number")
// }

// 09)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their
// corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79,
// "D" for scores 60-69, and "F" for scores below 60.
//   let score= 70
//   if (score>=90){
//     console.log("GRADE-A")
//   } 
//   else if (score>90){
//     console.log("GRADE-B")
//   }
//   else if (score>80){
//     console.log("GRADE-C")
//   }
//   else if (score>70){
//     console.log("GRADE-D")
//   } else{
//     console.log("GRADE- F")
//   }

// 10)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is
// even, and "Odd" if the number is odd.

// let number =9
// if(number%2  ==0) {
//     console.log("this is even number")
// } else {
//     console.log("this is odd number")
// }

// 11)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the
// age is between 18 and 65 (inclusive), and "Not allowed" otherwise.
// let age=15
// if (age>=18 && age<=65){
//     console.log("allowed")
// } else {
//     console.log("not-allowed")
// }

// 12)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether
// they have a student ID (true or false). If the person is under 18 or a student, they get a discount.
// If both conditions are met, return "Discounted price," otherwise return "Regular price."
// let student = 21
// if (student>=18 && isstudent)  {
//     console.log("discount price")
// } else {
//     console.log ("regular price")
// }  2 conditions ni add cheyadam ala ???????????????????????????????
