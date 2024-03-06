// **1. Sum of Natural Numbers:**

// let number=5
// let sum=0
// for(let i=0;i<=number;i++){
//     sum +=i
// }
// console.log(sum)

// **2. Factorial of a Number:**

// let number=5
// let factorial=1
// for(let i=1;i<=number;i++){
//     factorial *= i
// } console.log(factorial)

// **3. Fibonacci Sequence:**

// let a=0,b=1;
// let n=10
// for (let i=0;i<=n;i++){
//     let temp=a+b;
//     a=b;
//     b=temp;
//     console.log(temp)
// }

// **4. Reverse a String:**

// let string="hello world"
// let reverse=""
// for(let i=string.length-1;i>=0;i--){
//    reverse+=string[i]
// }
// console.log(reverse)

// **5. Print Pattern:**

// let row=5
// for (let i=1;i<=row;i++){
//     let pattern=""
//     for (let j=1;j<=i;j++){
//         pattern += " * "()
//     };
//     console.log(pattern)
// }

// **6. largest number:**


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
      

    // **7. smallest number:**

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

    // 8.countdigit of number

    // function countDigits(number) {
    //        // Convert the number to a string to easily get its length
    //        const numString = Math.abs(number).toString();
           
    //        return numString.length;
    //     }
        
    //     // Example usage:
    //     let num = 12345;
    //     console.log("Number of digits in " + num + ": " + countDigits(num));
        
    //     num = -9876;
    //     console.log("Number of digits in " + num + ": " + countDigits(num));


    // **09. Reverse an Array:**

//     let array=[1,2,3,4,5]
// let reverseArray=[];
// for (let i=array.length-1;i>=0;i--){
//     reverseArray.push(array[i])
// }
// console.log(reverseArray)


// **10: Find the Maximum Number in an Array**

   let array= [5,6,7,9,10,2,12]
   let max = array[0]
   for (let i=0;i<array.length;i++) {
      if (array[i]>max) {
         max=array[i]
      }
   
   }
   console.log(max)
