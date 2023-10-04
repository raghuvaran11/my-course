// // 1)Write a JavaScript function to extract a specified number of characters from a string.
// // Test Data :
// // console.log(truncate_string("Robin Singh",4));
// // "Robi"

// let x="Robin Singh"
// let y=x.slice(0,4)
// console.log(y)



// // 2)Write a JavaScript function to convert a string into abbreviated form.
// // Test Data :
// // console.log(abbrev_name("Robin Singh"));
// // "Robin S."

let abbrev_name="Robin Singh"
let output=abbrev_name.substring(0,7)
console.log(output)



// // 3)Write a JavaScript function that hides email addresses to prevent unauthorized access.
// // Test Data :
// // console.log(protect_email("robin_singh@example.com"));
// // "robin...@example.com"

// let email="robin_singh@example.com"
// let first_name=email.slice(0,5)
// let pad=first_name.padEnd(12,".")
// let remaining=email.substring(11)
// let output=pad.concat(remaining)
// console.log(output)



// // 4)Write a JavaScript function to capitalize the first letter of a string.
// // Test Data :
// // console.log(capitalize('js string exercises'));
// // "Js string exercises"

// let string="js string exercises"
// let output=string.replace("j","J")
// console.log(output)

// let string="js string exercises"
// const output= string[0].toUpperCase()+string.slice(1)
// console.log(output)


// // 5)Write a JavaScript function to uncapitalize the first character of a string.
// // Test Data :
// // console.log(Uncapitalize('Js string exercises'));
// // "js string exercises"

// let string="Js string exercises"
// let output=string.replace("J","j")
// console.log(output)

// let string="Js string exercises"
// const output= string[0].toLowerCase()+string.slice(1)
// console.log(output)

// // 6)Write a function truncateText that takes a string and a maximum length as input and returns a
// // truncated version of the string if it exceeds the maximum length, adding "..." at the end.


// // 7)console.log(truncateText("This is a long sentence.", 10));
// // // Output: "This is a..."
// // console.log(truncateText("Short text.", 15));
// // // Output: "Short text."



// // 8)Time of Day Greeting
// // Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and
// // prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for
// // hours 12-17, and "Good evening" for hours 18-23.


// let time = 24
// if (time<=11){
//     console.log("GOOD MORINGN")
// }
//   else if (time<=17){
//     console.log("good after noon")
// } 
// else if (time<=23){
//     console.log("good evening")
// } 
// else {
//     console.log("greeting")
// }


// let time =12
// for (let i=6; time<=11; i++) {
//     if (time<=11){
//             console.log("GOOD MORINGN")
//         }
//           else if (time<=17){
//             console.log("good after noon")
//         } 
//         else if (time<=23){
//             console.log("good evening")
//         } 
//         else {
//             console.log("greeting")
//         }

// }




// // 9)Leap Year Check
// // Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is
// // divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap
// // year."

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


// // 10)Positive, Negative, or Zero
// // Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the
// // number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

// let number = 6
// if (number>0){
//     console.log("Positive number")
// } else if (number==0){
//     console.log("zero number")

// }else {
//     console.log("negative number")
// }

// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their
// corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79,
// "D" for scores 60-69, and "F" for scores below 60.

// let score=35
//  if (score >= 90) {
//     console.log("A GRADE")
// }
//  else if (score >=89) 
// {
//     console.log("B GRADE")
// } 
// else if (score>=79) 
// {
//     console.log("C GRADE");
// }
//  else if (score>=69) 
//  {
//     console.log("D GRADE")
// }
//  else 
// {
//     console.log("F GRADE")
// }



// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is
// even, and "Odd" if the number is odd.

// let number =5
// if (number % 2 ==0) {
//     console.log("this is a even number")
// }
//     else {
//         console.log("this is a odd number")
//     }




// 13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the
// age is between 18 and 65 (inclusive), and "Not allowed" otherwise.

// let age=66
// if (age>=18 && age<=65) {
//     console.log("allowed")
// } else {
//     console.log("Not Allowed")
// }

// 14)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether
// they have a student ID (true or false). If the person is under 18 or a student, they get a discount.
// If both conditions are met, return "Discounted price," otherwise return "Regular price."

// let student = 21
// if (student>=18 && isstudent)  {
//     console.log("discount price")
// } else {
//     console.log ("regular price")
// }  2 conditions ni add cheyadam ala ???????????????????????????????



// 15)Username Validation
// Write a function validateUsername that takes a username as input. The function should return
// "Valid" if the username has at least 6 characters and contains only letters and numbers.
// Otherwise, return "Invalid."

// let username=9
// if (username>=6) {
//     console.log("Valid")
// }
//  else {
//     console.log("Invalid")
// }

// 16)Color Selection
// Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the
// color is available (true or false). If the color is available and the choice is "blue" or "green,"
// return "Selected." If the choice is "red," return "Not available." For any other choice, return
// "Invalid choice."


// let color="green"
// if (color=="blue") {
//     console.log("is available")
// } else if (color=="green"){
//     console.log("is available")
// } else if (color== "red") {
//     console.log("is not available")
// }else {
//     console.log("invaild choice")
// }


// 17) Adding and Removing Elements
// Create an array called `fruits` with initial values ["apple", "banana"]. Using the appropriate array
// methods, perform the following actions:
// - Add "orange" to the end of the array.
// - Remove the last element from the array.
// - Add "grape" to the beginning of the array.
// - Remove the first element from the array.
// Print the final array after each step.

// const fruits=["apple","banana"]
// let add= fruits.push("orange")
// fruits.pop()
// fruits.unshift("grape")
// fruits.shift()
// console.log(fruits)



// 18)Stack Operations
// Implement a stack using an array. Create a stack called `myStack` and perform the following
// operations:
// - Push the values 10, 20, and 30 onto the stack.
// - Pop the top element from the stack.
// - Push the value 40 onto the stack.
// Print the stack after each operation.

// let stack=[]
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// stack.push(40)
// console.log(stack)
  
// let stack=[ ]
// stack.push ( "10","20","30" )
// stack.pop()
// stack.push("40")
// console.log(stack)

// 19)Queue Operations
// Implement a queue using an array. Create a queue called `myQueue` and perform the following
// operations:
// - Enqueue the values "a", "b", and "c" into the queue.
// - Dequeue an element from the queue.
// - Enqueue the value "d" into the queue.
// Print the queue after each operation.

// let queue=[]
// queue.push(a)
// queue.push(b)
// queue.push(c)





// 20): Shopping List
// Create an empty array called `shoppingList`. Using the appropriate methods, add the items
// "eggs", "milk", "bread", and "vegetables" to the shopping list. Then, remove the "bread" from the
// list.
// Print the shopping list after each operation

// const shoppinglist=[ ]
// shoppinglist.push("eggs,milk,bread,vegetables")
// delete shoppinglist[2] 
// console.log(shoppinglist)


