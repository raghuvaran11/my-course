// Write a function `reverseString` that takes a string as input and returns the reverse of that string.


// let string= "hello"
// const output = string.split('').reverse("").join("")
// console.log(output)

// let str= "hello"
// let op= str.split("")
// let op1=op.reverse("")
// let op2=op1.join("")
// console.log(op)
// console.log(op1)
// console.log(op2)

// this is not working method

// let str="hello"
// let op=ReverseString(str)
// console.log(op)


// **Question 2: Find the Maximum Number in an Array**

// // Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

// let array=["3,5,9,10,15"]
// let max=array[0]
// for(let i=0;i<array.length;i++) {
//     if(array[1]>max) {
//         max=array[i]
//     }console.log (max)
// }console.log (max)



// let arra1=["3,5,9,10,15"]
// const min= Math.min(...arra1)
// const Max= Math.max(...arra1)
// console.log(min)
// console.log(Max)

// const array =["2,5,1,6,3,9,15"]
// const max =0
// for (let i=0;i<array.length;i++) {
//     if (array[i]>max){
//         max=array[i]
//     }
//     // else if (array[i]<max){
//     //     max=array[1]
//     // }

//     }console.log(max)




// 7. Write a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized.

// let string ="hello world"
// let op=string[0].toUpperCase()+string.slice(1)
//     console.log(op)



//8. Write a function `countWords` that takes a string as input and returns the number of words in the string.
// let str ="This is a sample sentence.";
// let op = str.split(' ')
// console.log(op)
// let op1=op.length
// console.log(op1)
// for-loop method

// let str="this is a sample sentene"
// let count=0
// for(let i=0;i<=str.length;i++) {
//     if(str.charAt(i) ==' ') {
//         count++;
//     }
// }console.log(count)

// 9. Write a function `reverseWords` that takes a string as input and returns the string with its words reversed.

// let str ="hello world"
// let op=str.split(" ")
// console.log(op) 
// let op1 = op.reverse(' ')
// console.log(op1)
// let op2=op1.join(' ')
// console.log(op2)


// 10. Write a function `removeVowels` that takes a string as input and returns the string with all vowels removed.


// let str= "this is a sample sentence"
// let op =str.split("") 
// console.log(op)
// let remove =/[aeiou]/ig
// let arr=remove.match(remove)
// console.log(arr)


// 11. Write a function `isAnagram` that takes two strings as input and returns `true` if they are anagrams (contain the same characters in a different order), and `false` otherwise.


//  E method lo length match cheyali 

// let str1= "listens"
// let str2 = "slient"
// function  AreAnagram(str1, str2) {
//      return str1.split("").sort().join("")
//      === str2.split("").sort().join("")
// } 
// console.log(AreAnagram(str1,str2))


// 12. Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers


// const array=[1,2,3,4,5]
// const sum = array.reduce((acc,val)=> acc+val,0)
// console.log(sum)


// 13. Write a function `findMin` that takes an array of numbers as input and returns the minimum number in the array





// 15. Write a function `rotateArray` that takes an array and a number `k` as input and rotates the array to the right by `k` positions

// let array =[1,2,3,5,6,7]
// let k=10
// function ArrayRotation(arr,numberOfShifts) {
//     for (let i=0; i<numberOfShifts;i++) {
//  arr.unshift(arr.pop());
//  console.log('step ${i+1}',arr)
//     }
// }
// console.log('final output:',ArrayRotation(array,k));



// 16. Write a function `removeFalsyValues` that takes an array and removes all falsy values (e.g., `false`, `null`, `0`, `""`, `undefined`, `NaN`).






// 17. Write a function `findIndex` that takes an array and an element as input and returns the index of the first occurrence of the element in the array. If the element is not found, return -1.


// let array = [1,2,3,4,5,6,7]
// const op =array.findIndex(findThree)
// function  findThree(value) {
//     return value === 5;
// } console.log(op)

// 18. Write a function `filterEvenNumbers` that takes an array of numbers as input and returns a new array containing only the even numbers.


// let array =[1,2,3,4,5,6]
// const evenNumber=array.filter(num =>{
//     return num%2 ==0;
// }) 
// console.log(evenNumber)

// 19. odd number in array
// let array =[1,2,3,4,5,6,7,8,9,10,11]
// const oddNumber =array.filter(num =>{
//     return num%2!=0;
// })
// console.log(oddNumber)



// string lo first letter captilize cheyadam ala 

const str ="js string working"
const capitalized=(str)=> {
    let parts=str.spilt(" ")
    let newString= " "
    parts.map((item)=>{
        newString= ${item[0].toUpperCase()}${item.slice(1)}
        console.log(newString)
    }) 
} 
