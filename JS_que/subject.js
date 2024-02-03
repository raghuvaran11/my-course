
// ....................................STRING ---METHODS.........................................


// total string methods

// const string = "total string methods"
// console.log(typeof(string))
// const op = typeof(string)
// console.log(op)

// NUMBER METHOD

// const number =10
// console.log(typeof(number))
// const op= typeof(number)
// console.log(op)

// STRING AND NUMBER METHOD

// const string = "this is string"
// const number= 10
// const op =string+number
// console.log(op)
// console.log(typeof(op))

// STRING LENGTH METHOD

// const string= "this is a string length"
// console.log(string)
// console.log(string.length)

// QUOTES METHODS

// let text = "We are the so-called \"Vikings\" from the north."
// console.log(text)

// let text1 = 'We are the so-called "Vikings" from the north.'
// console.log(text1)

// let text = "The character \\ is called backslash."
// console.log(text)

// let y = new String("John");
// console.log(typeof(y))


// let x = "string"
// let y = new String("John");
// console.log(typeof(x))
// console.log(typeof(y))

// JavaScript String at() method

// at method lo number tiskonte manam tiskonna string lo vunna letter ni chupistadhi 

// let string ="JavaScript String at"
// let op = string.at(11)
// console.log(op)


// let str ="javascript string"
// let op1=str[11]
// console.log(op1)

// JavaScript String slice() ......................................

// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// let str ="JavaScript String slice"
// let op = str.slice(6)
// let op1= str.slice(1,12)
// let op2= str.slice(0,4)
// let op3= str.slice(-5,-1)
// console.log(op)
// console.log(op1)
// console.log(op2)


// console.log(op3)
// 1)Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// let x="Robin Singh"
// let y=x.slice(0,4)
// console.log(y)

// let name ="Robin Singh"
// let outputname= name.slice(0,4)
// console.log(outputname)



// SUBSTRING---METHOD  ....................................

// let string = "javascript substring method"
// let op = string.substring(1,8)
// let op1 = string.substring(8)
// // let op2 = string.substring(-5,-1)  this method is not working on substring 
// console.log(op)
// console.log(op1)
// console.log(op2)

// 2)Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// let string = "Robin Singh"
// let op =string.substring(0,7)
// console.log(op)



// SUBSTR ---METHOD ......................................................

// let string ="this is a substr method"
// const op =string.substr(6)
// console.log(op) 
// e method kuda same substring lane vuntadhi last nundi count cheyalemu


// function func() {
// 	// Original Array
// 	let arr = [23, 56, 87, 32, 75, 13];
// 	// Extracted array
// 	let new_arr = arr.slice(2, 4);
// 	console.log(arr);
// 	console.log(new_arr);
// }
// func();

// function string () {
//     let arr1=[1,2,3,4,6,5,9]
//     let newarr1 = arr1.slice(1,3)
//     console.log(newarr1)
// }
// string()


// function func() {
// 	//Original Array
// 	let arr = [23, 56, 87, 32, 75, 13];
// 	//Extracted array
// 	let new_arr = arr.slice(2);
// 	console.log(arr);
// 	console.log(new_arr);
// }
// func();



// JavaScript String toUpperCase()..........................................

// let string = "javascript string touppercase"
// let op = string.toUpperCase()
// console.log(op)

// function uppercase(){
//  let string ="javascript string touppercase"
//  let op=string.toUpperCase()
//  console.log(op)
// }
// uppercase()


// 4)Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// let string = "js string exercise"
// let op =string[0].toUpperCase()+string.slice(1)
// console.log(op)

// let string = "js string exercise"
// let op1=string.slice(0,7)+string[7].toUpperCase()+string.slice(8)
// console.log(op1)

// let capitalize=(str)=>{
//     let parts=str.split(" ")
//     let newString=" "
// //     console.log(parts)
// //     console.log('${parts[0][0].toUpperCase()}${parts[0].slice(1)')
// parts.map((items)=>{
// // console.log(items)
// newString+='${items[0].toUpperCase()}${items.slice(1)}'
// console.log("newString",newString)
// })
// }
// console.log(capitalize("js string exercise"))

// TOLOWERCASE METHOD ......................................................

//  let string = "JS TOLOWERCASE METHOD"
//  let op = string.toLowerCase()
//  console.log(op)

// let string = "JS TOLOWERCASE METHOD"
// let op= string[0].toLowerCase()+string.slice(1)
// console.log(op)

// let string = "js string exercise"
// let op1=string.slice(0,7)+string[7].toUpperCase()+string.slice(8)
// console.log(op1)

// JavaScript String concat() ....................................................


// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3)


// let text1 = "Hello";
// let text2 = "World";
// let text3 =201
// let text4 = text1.concat(" ", text2," ",text3);
// console.log(text4)



// JavaScript String trim()......................................................
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2)


// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2)


// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// console.log(text2)


// JavaScript String Padding.........................................
// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded)


// let text = "5";
// let padded = text.padStart(4,"x");
// console.log(padded)


// let string = "raghu"
// let op=string.padEnd(5,"*")
// console.log(op)


// let string="raghuvaran"
// let op=string.slice(5)
// console.log(op)
// let op1=string.padStart(5,"*")
// console.log(op1)

// let name= "raghuvaran"
// let halfname=name.slice(-5)
// let markname=halfname.padStart(name.length,"*")
// console.log(markname)


// let name1="manthena raghuvaran"
// let halfname1=name1.slice(-10)
// console.log(halfname1)
// let markname1=halfname1.padStart(name1.length,"*")
// console.log(markname1)

// let name="raghu"
// let half=name.slice(0,3)
// console.log(half)
// let op =half.padEnd(name.length,"*")
// console.log(op)

// let name= "raghuvaran"
// let op1=name.slice(0,3)
// console.log(op1)
// let op2=op1.padEnd(name.length,"*")
// console.log(op2)

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


// javascript replace method ....................................................

// let string = "javascript replace"
// let op = string.replace( "replace","add")
// console.log(op)


// let string = "javascript replaceall method" 
// let op = string.replaceAll("javascript replaceall method" ,"javascrpt")
// console.log(op)

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:.............


// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");
// console.log(newText)

// To replace all matches, use a regular expression with a /g flag (global match):......................

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText)

// let string = "please visit msoffcie and msoffice and msoffice"
// let newString=string.replace(/msoffice/g,"google")
// console.log(newString)

// To replace case insensitive, use a regular expression with an /i flag (insensitive):................
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/i, "W3Schools");
// console.log(newText)



// .........................................ARRAY-- METHODS................................................



// let array = []
// array[0]="raghu"
// array[1]="varan"
// array[2]="manthena"
// console.log(array)

// let array =["raghu,varan,manthena"]
// let op = array.length
// console.log(op)

// let array =["raghu","varan","manthena"]
// let op = array.length
// console.log(op)

// let array =["raghu","varan","manthena"]
// array[0]="suresh"
// array[2]="ramesh"
// console.log(array)

// let array =["raghu","varan","manthena"]
// const op =array[array.length-1]
// console.log(op)

// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(new Array)
// console.log(cars)

// const points = new Array(40, 100, 1, 5, 25, 10);
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points)

// JavaScript Array length......................................

// const array = ["raghu","mallesh","suresh"]
// const size =array.length
// console.log(size)

// JavaScript Array toString().................................

// let array = ["raghu","mallesh","suresh"]
// let string =array.toString()
// console.log(string)

// string to array........

// let string =("raghu,varan")
// let array =string.split()
// console.log(array)

// JavaScript Array at()..........................................................


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit)

// JavasCript Array join()........................................................................

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const op = fruits.join(" * ")
// console.log(op)

// JavaScript Array pop()......................................................................
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// const op =fruits.pop()
// console.log(op)

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.pop()
// console.log(fruits)

// JavaScript Array push().............................................................
// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// const op =fruits.push("raghu")
// console.log(op)

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.push("raghu")
// console.log(fruits)


// JavaScript Array shift().............................................................................

// const names =["raghu","ramesh","school"]
// names.shift()
// console.log(names)

// const names =["raghu","ramesh","school"]
// const names1=names.shift()
// console.log(names1)


//  JavaScript Array unshift().............................................................................

// const names =["raghu","ramesh","school"]
// const names1=names.unshift("manthena")
// console.log(names1)

// const array = ["raghu","varan"]
// array.unshift("manthena")
// console.log(array)

// const array = ["raghu","varan"]
// console.log(array.unshift("manthena"))

// JavaScript Array delete().............................................................

// const text = ["apple","banana","custred apple","dragon fruit"]
// delete text[0]
// console.log(text)


// const text = ["apple","banana","custred apple","dragon fruit"]
// console.log(delete text[0])

// JavaScript Array concat()........................................................

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const text =["raghu","varan"]
// const myChildren = myGirls.concat(myBoys,text);
// console.log(myChildren)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const text =["raghu","varan"]
// const myChildren = myBoys.concat(myGirls,text);
// console.log(myChildren)

// Array copyWithin()....................................................

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi"];
// fruits.copyWithin(2, 0,2);
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi"];
// fruits.copyWithin(2, 0);
// console.log(fruits)


// JavaScript Array flat()...................................................
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)

// const myArr = [[1,2,3],[3,4,5],[5,6,7]];
// const newArr = myArr.flat();
// console.log(newArr)

// JavaScript Array splice()..................................................................

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1, 2, "Lemon", "Kiwi");
// console.log(fruits)

// JavaScript Array toSpliced()...................................................................


// const months = ["Jan", "Feb", "Mar", "Apr]
// const spliced = months.toSp"];liced(0, 1);
// console.log(spliced)

// JavaScript Array slice().............................

// const string = ["Jan", "Feb", "Mar", "Apr"]
// const op = string.slice(0,1)
// console.log(op)

// const string = ["Jan", "Feb", "Mar", "Apr"]
// const op = string.slice(1,3)
// console.log(op)



// ................................................................................................................
// ............................................ASSIGNMENTS.........................................................
// ................................................................................................................



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


// 7)console.log(truncateText("This is a long sentence.", 10));
// Output: "This is a..."
// console.log(truncateText("Short text.", 15));
// Output: "Short text."



// 8)Time of Day Greeting
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

// 9)Leap Year Check
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


// 10)Positive, Negative, or Zero
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


// 11)Grade Calculator
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
  
// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is
// even, and "Odd" if the number is odd.

// let number =9
// if(number%2  ==0) {
//     console.log("this is even number")
// } else {
//     console.log("this is odd number")
// }

// 13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the
// age is between 18 and 65 (inclusive), and "Not allowed" otherwise.
// let age=15
// if (age>=18 && age<=65){
//     console.log("allowed")
// } else {
//     console.log("not-allowed")
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




// ................................................FUNCTIONS METHOD ................................................
// let x = myFunction(4, 3);

// function myFunction(a, b) {

//   return a * b;
// }
// console.log(x)

// let sum = myfunction (1,15);
// function myfunction (a,b) {
//     return a+b;
// }
// console.log(sum)

// let string = mystring("raghu")
// function mystring (){
//   let op = mystring.length
// }
// console.log(string)

// const sum1 =(a,b) =>{
//     console.log(a,b)
// }
// sum1("raghu"," 1")
// const name =(a,b)=>{
//  console.log(a+b)
// }
// name("super","10")
// const output=(a,b,operator)=>{
//     if(operator=="+"){
//         console.log(a+b)
//     }  else if (operator=="-"){
//         console.log(a-b)
//     }  else if (operator=="*"){
//         console.log(a*b)
//     } else if (operator=="/"){
//         console.log(a/b)
//     }
// }
// output(12,14,"/")


// function functionName (num1,num2){
//     let results=num1+num2
   
//    console.log(results)
// }

// functionName(10,5)

// function division () {
//     let op = 10/5
//     console.log(op)
// }
// division (10,5)
 
// let sum = function (num1,num2){
//     let results= num1+num2 
//     // console.log(results)
//     return results;
// }
// console.log(sum(10,15))

// function sum (str1,str2){
//     let results =str1+str2
//     return results;
// }
// console.log(sum("raghu","varan"))


// function string = ()=>{
//     let resluts= typeof(string) 
//     return resluts;
     
// }
// console.log(string("this is my function topic"))

// function string() {
//     let result = string.length
// console.log(result)
// }
// string("this is a function menthod")
// let string ="raghu"
// function stringLength ( ){
//     console.log (stringLength= string.length)
// }
// console.log(stringLength)

// let inputString="raghu"
// function findStringLength(inputString) {
// let length = 0;
// for (let i = 0; i < inputString.length; i++) {
//     length++;
// }
// return length;
// }

// let findStringLength ="hello world";
// function findStringLength(inputString) {
//     return findStringLength.length;
// }
// console.log(findStringLength)

// function findStringLength (inputString) {
//     return inputString.length
// }
// console.log(findStringLength("hello world"))


// function findString (inputValue) {
//     let result = inputValue.length
//     // return result;
//     console.log(result)

// }
// findString("hello world")

// function string(inputValue) {
//     return inputValue.slice(3)
// }
// console.log(string("hello world"))


// function string (inputValue) {
//     return inputValue.slice(0,8)
// } 
// console.log(string("hello world"))

// function string (inputValue) {
//     let result = inputValue.slice(0,8)
//     return result
// }
// console.log(string("hello world"))

// function string (inputValue) {
//     let result= inputValue.slice(-5)
//     return result
// }
// console.log(string("hello world"))


// function string (inputValue) {
//     let result= inputValue.substring(1,5)
//     return result
// }
// console.log(string("hello world"))


// function string (inputValue) {
//     let result= inputValue.substr1,5)
//     return result
// }
// console.log(string("hello world"))


// function AddTwostrings (inputValue1,inputValue2){
//     let result= inputValue1.concat(inputValue2)
//     return result
// }
// console.log(AddTwostrings("raghu","varan"))

// function stringUppercase (inputValue) {
//     return inputValue.toUpperCase()
// }
// console.log(stringUppercase("this is a uppercase method"))


// 1)Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// function truncateString (inputValue){
//     return inputValue.slice(0,4);
// }
// console.log(truncateString("Robin Singh"))

// 2)Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// function abbrev_name (inputValue) {
//     return inputValue.slice(0,7)+"."
// }
// console.log(abbrev_name("Robin Singh"))

// 3)Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protectEmail (inputValue) {
    let email= inputValue.slice(0,5)
    let emailPad = email.padEnd(14,".")
    let lastId =inputValue.slice(11)
    return emailPad.concat(lastId)
}
console.log (protectEmail("Robin_Singh@gmail.com"))