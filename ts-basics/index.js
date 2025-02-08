"use strict";
let fNmae = "Dash";
function sayHello(name) {
    console.log(name);
}
sayHello(fNmae);
let a = 10;
let b = 10;
function sum(a, b) {
    return a + b;
}
function ageCheck(age) {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}
console.log(ageCheck(20));
function delayedFn() {
    console.log("hello");
}
function delay(fn, delay) {
    setTimeout(fn, delay);
}
delay(delayedFn, 1000);
