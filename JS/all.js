// string method 
// var Name = "raghu"
// console.log(Name)
// console.log(Name,typeof(Name))
// console.log(typeof(Name))

// number method
// var num=25
// console.log(num)
// console.log(num,typeof(num))
// console.log(typeof(num))

// string and number mixing method 

// var num =25
// var name = "raghu"
// console.log(num+name)
// console.log(num+name,typeof(num+name))

// var num =25
// var name = "raghu"
// var variable= num+name
// console.log(num+name)
// console.log(num+name,typeof(num+name))
// console.log(variable,typeof(variable))

// number to string convertors 
// let num2 =4
// let num= "25"
// let num1 =2
// let finaloutput= num2-num1+num
// console.log(finaloutput ,typeof(finaloutput))
// o/p 225string

// let num2 =4
// let num= "25"
// let num1 =2
// let finaloutput= num2+num-num1
// console.log(finaloutput ,typeof(finaloutput))
// // o/p 423number

// let name= "raghu"
// if (true) {
//     let first ="manthena" 
//     console.log(first)
// }
// console.log(name)

// differents between var and let and const 
// var x =20
// x=10
// console.log(x)

// var x=10
// var x=20
// console.log(x) in this method values can be assign and redeclear 

// let x="raghu"
// let x="mantena"
// console.log(x)
// o/p -----> SyntaxError: Identifier 'x' has already been declared

// let x="raghu"
// x="manthena"
// console.log(x)

// o/p-----> manthena ----> in this method we can reassign values but not redeclear variable 

// const method is have a no reassign values and redeclearation 


// ---------------------->     strings methods <------------------------ 

// let text = 'John Doe';
// console.log(text)

// let text= "const method is 'have a no reassign values' and redeclearation "
// console.log(text,typeof(text),text.length)

// let text= 'const method is "have a no reassign values" and redeclearation '
// console.log(text,typeof(text),text.length)

// let x = "abcdefghijklmnopqrstwuvxyz"
// console.log(x.length)

// let text = "We are the so-called \"Vikings\" from the north.";
// console.log(text)
//e method lo double quotations at a time lo use cheyavachu 

// <-----------string methods ----------------> 
// 1. method  slice
// let string = ("raghu,vinod,naresh,suresh,ramu,akhil")
// let output = string.slice(6)
// console.log(output)
// let string="const method is have a no reassign values and redeclearation"
// let output= string.slice(6,20)
// let output1= output.length
// console.log(output1)
// output= 14

// let string = ("raghu,vinod,naresh,suresh,ramu,akhil")
// let op = string.slice(6,20)
// let x=op.length
// console.log(x+op)
// // console.log(op)
// // console.log(op.length)


// let string = ("raghu,vinod,naresh,suresh,ramu,akhil")
// let op = string.slice(-20,-6)
// let x=op.length
// console.log(x+op)

// <---------2.method substring---------------> 


// let string = ("raghu,vinod,naresh,suresh,ramu,akhil")
// let op = string.substring(6,20)
// let x=op.length
// console.log(x+op)

// <-----------3.method substr-------------->


// let string = ("raghu,vinod,naresh,suresh,ramu,akhil")
// let op = string.substr(6,20)
// let x=op.length
// console.log(x+op)

// <------------4th.method replace-------------->
// let x= "raghu,rahul,ramesh,ravi,ramu,ramya,"
// let y=x.replace("raghu","vanitha")
// console.log(y)

// let x= "raghu,rahul,ramesh,ravi,ramu,ramya,"
// let y=x.replaceAll("r","v")
// console.log(y)

// let x= "this is best web site for searching google"
// let y = x.replace( /google/i,"internet")
// console.log(y)

// let x= "this is best google web site google for searching google best in world google easy to operate google"
// let y = x.replace( /google/g,"internet")
// console.log(y)

// <---------------5th.method uppercase and lowercase------------> 
// let x= "this is a good website"
// let y = x.toUpperCase()
// console.log(y)

// let x= "THIS IS A GOOD WEBSITE"
// let y = x.toLowerCase()
// console.log(y)


//  let string= "THIS IS A GOOD WEBSITE"
//  let output =string.slice(0,9)+string[10].toLowerCase()+string.slice(11)
//  console.log(output)

// <-------------------6th.method trimstart and trimend -----------------------> 
// let trim="          hello world          "
// let output = trim.trimStart()
// console.log(output)

// let trim="          hello world          "
// let output = trim.trimEnd()
// console.log(output)

// let trim="          hello world         "
// let output = trim.trim()
// console.log(output)

// <--------------------7th.method padstart and padend---------------------.> 

// let x="5"
// let y=x.padStart(4,"0")
// console.log(y)


// let x="5"
// let y=x.padEnd(4,"0")
// console.log(y)


// let x="5"
// let y=x.padStart(4,"*")
// console.log(y)


// let x="5"
// let y=x.padStart(4,".")
// console.log(y)


// let x="5"
// let y=x.padStart(4,"/")
// console.log(y)


// let x="5"
// let y=x.padStart(4,"?")
// console.log(y)

// let email="raghu.mr199@gmail.com"
// let output= email.slice(0,3)
// let op=output.padEnd(12,"*")+email.substring(11)
// console.log(op)


// let email="robin_singh@example.com"
// let first_name=email.slice(0,5)
// let pad=first_name.padEnd(12,".")
// let remaining=email.substring(11)
// let output=pad.concat(remaining)
// console.log(output)

// <----------------8th.method charat and charcodeat------------------> 
// let text= "this is a web development class"
// let text1= text.charAt(10)
// console.log(text1)

// let text= "this is a web development class"
// let text1= text.charCodeAt(10)
// console.log(text1)

// <-------------------9th.method split--------------------> 
// let x = "If you want to work with a string as an array you can convert it to an array."
// let y= x.split(x[15],",")
// console.log(y)

// <------------------ARRAY CONCEPT ----------------------->

// let array=[]
// array[0]="raghu"
// array[1]="vinod"
// array[2]="suresh"
// array[3]=" "
// array[6]="rahul"
// console.log(array)

// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars)

// const cars = ["Saab", "Volvo", "BMW"];
// let op=cars[0]
// console.log(op)

// const names =["raghu","rahul","suresh","mahesh"]
// names[1]="vanitha"
// console.log(names)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString())
const nums = fruits.toString()
console.log(nums)