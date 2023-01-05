var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var num3 = parseInt(prompt("Enter third number"));

if (num1 < num2) {
    if (num2 < num3 ) {
        console.log(num3 +" is largest");
    } else {
        console.log(num2 +" is largest ");
    }
} else if (num1 < num3) {
    console.log(num3 +" is largest ");
} else {
    console.log(num1 +" is largest ");
} 
    

    


