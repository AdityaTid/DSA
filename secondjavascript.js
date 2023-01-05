var num = parseInt(prompt("enter the number"));
var sum = 0;
var num2;

for (let i = 0; i < num.length; i++) {
    num2 = num % 10;
    sum = num / 10;
    sum = sum * 10 + num2;
}

document.write(num2);
document.write(sum);
