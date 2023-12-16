// let string ="this is a string"
// console.log(typeof(string))

// let string = "this is a string method"
// let output = typeof((string))
// console.log(output)

// let number = 25
// let output = typeof(number)
// console.log(output)

// let string ="raghu"
// let number = 26
// let add = string.concat(number)
// console.log(add)
// console.log(typeof(add))
// const length= add.length
// console.log(length)


// let string= ("raghu","ramesh")
// let string1= ("suresh","sunitha")
// let add = string.concat(string1)
// console.log(add)




// 1. How do you find the length of a string in JavaScript?

// let str =" How do you find the length of a string in JavaScript"
// let op =str.length
// console.log(op)
// console.log(str.length,str)


// 2. What method is used to convert a string to lowercase in JavaScript?
// let str="WHAT METHOD IS USED TO CONVET A STRING TO LOWERCASE IN JAVASCRIPT?"
// let op =str.toLowerCase()
// console.log(op)
// let op1=str.toLowerCase().length
// console.log(op1)

// let str1 ="WHAT METHOD IS USED TO CONVET A STRING TO LOWERCASE IN JAVASCRIPT"
// let str2=str1.slice(0,10)
// console.log(str2)
// let op3 = str1[10].toLowerCase()+str1.slice(11)
// console.log(str2+op3)


// 3. Explain the purpose of the `toUpperCase()` method in JavaScript

// let str1 ="Explain the purpose of the `toUpperCase()` method in JavaScript"
// let op=str1.toUpperCase()
// console.log(op)


// let str= "Explain the purpose of the \"toUpperCase()\" method in JavaScript "
// console.log(str)

// let str = "this one waste course of \"my self\" to hard course. "
// console.log(str)

// let x = "raghu"
// let y = new String("varan")
// console.log(typeof(y))
// console.log(typeof(x))
// let z= x+y
// console.log(typeof(z))


// let x = new String("John");
// let y = new String("John");
// console.log(x==y)

// let x ="John"
// let y = new String("John");
// console.log(x==y)


// slice method


// let str ="this a practice time "
// let op =str.slice(0,8)
// let op1 = str.slice(6)
// let op3 = str.slice(-6)
// let op4=str.slice(-6,-3)
// console.log(op)
// console.log(op1)
// console.log(op3)
// console.log(op4)



// substring -Method

// let str = "The difference is that start and end values less than 0 are treated as 0 in"
// let op=str.substring(15)
// let op1=str.substring(10,20)
// console.log(op)
// console.log(op1)

// SubStr--Method

// let str = "The difference is that start and end values less than 0 are treated as 0 in"
// let op= str.substr(5)
// let op1 =str.substr(5,10)
// console.log(op)
// console.log(op1)

// Replace--Method

// let str =  "The difference is that start and end values less than 0 are treated as 0 in"
// let op=str.replace("is","A")
// console.log(op)

// let x= "raghuvaran"
// let y = x.replaceAll("raghuvaran","vanitha")
// console.log(y)


// Pad --Method 

// let x= "6"
// let y = x.padStart(3,"*")
// console.log(y)

// let string = "raghuvaran"
// let op = string.padStart(6,"*")
// console.log(op)



// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");
// console.log(padded)

// let string="raghuvaran"
// let op=string.slice(5)
// console.log(op)
// let op1=padStart(5,"*")
// console.log(op1)


let x = " raghu,rahul,ramesh,ravi"
let y = x.split(",")
console.log(y)