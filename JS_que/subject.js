
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