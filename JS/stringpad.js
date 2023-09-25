
// string startpadding method
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded)

// let text = "5";
// let padded = text.padStart(4,"*");
// console.log(padded)

// NOTE: numbers echinapudu first echina number ni string loki convert cheskovali  next paddding ni cheyali 

// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");
// console.log(padded)

// let num="10"
// let text= num.padEnd(6,"x")
// console.log(text)

// TASK 

// raghuvaranmanthena@gmail.com

// raghu********thena@gmail.com 

let email="raghuvaranmanthena@gmail.com"
let first_name =email.slice(0,5)
let starname=first_name.padEnd(14,"*")
let output=email.slice(14)
let result=starname.concat(output)
console.log(result)