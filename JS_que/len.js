// let str ="hello"
// let op =str.split('').reverse('').join('')
// console.log(op)

// let a=0,b=1;
// for (let i=0;i<=10;i++) {
//     let temp=a+b ;
//     a=b;
//     b=temp;
// console.log(temp)
// }


let row= 5
for (let i = 1; i <= row; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
  