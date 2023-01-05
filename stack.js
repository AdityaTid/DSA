// JavaScript program to implement basic stack operations
// Aditya Tidke [ MCA - B ]
// Date: 27/12/2022

var t =  -1 ;
var max = 100;
var a = Array(max).fill(0);// Maximum size of stack 

//  verify Top element is Empty 
function isEmpty(){
    return( t < 0 );
}

// Perform push operation and also verify weather stack is full
const data = document.getElementById("demo");
function data(data) {
    
}

function push (data) {
    if (t >= (max - 1 )) {
        console.log(" Stack Overflow");
        return false;
        
    } else {
        t += 1;
        a[t] = data ;
            console.log(data+"Pusher into Stack <br>");
        return true;
      }
}

function pop() {
    if (t < 0) {
        console.log("Stack underflow");
        return 0;
    } else {
        var x = a[t];
        t -= 1;
        return x;
    }
}

function peek() {
    if (t < 0) {
        console.log("Stack underflow");
        return 0 ;
    } else {
        var x = a[t];        
    }
}

function print() {
    for (let i = t; i > -1; i--) {
        console.log(""+a[i]);
    }
}


