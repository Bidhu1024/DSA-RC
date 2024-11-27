
console.log(a); // undefined (declaration is hoisted, initialization is not)
var a = 5;

console.log(b); // ReferenceError: b is not defined
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;

greet(); // "Hello!" (function declaration is hoisted)
function greet() {
  console.log("Hello!");
}

sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};
Hi();//ReferenceError: Cannot access 'Hi' before initialization

const Hi = function(){
    console.log('')
}