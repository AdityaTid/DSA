console.log("Enter the two number");

var num1 = parseInt(prompt("Enter num1"));
var num2 = parseInt(prompt("Enter num2"));

console.log(num1 + " === " + num2);

num1 = num1 + num2 ;
num2 =  num1 - num2 ;
num1 = num1 - num2 ;

console.log(num1 + " === " + num2);
