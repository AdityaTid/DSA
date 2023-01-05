console.log("Enter the three side values");

var side1 = parseInt(prompt("Enter side1"));
var side2 = parseInt(prompt("Enter side2"));
var side3 = parseInt(prompt("Enter side3"));

const p = (side1 + side2 + side3 )/2 ;

const ar = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3) );
console.log("Area Of Triangle = "+ar);
