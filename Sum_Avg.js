var sum = 0;
var avg = 0;
var count = 0;
for (let i = 1; i <= 10; i++) {
var num =  prompt("Enter "+i);
sum = sum + num;
    count++;
}
console.log("Sum = "+sum);
avg = sum / count;

console.log("Average = "+avg);