"use strict";
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("hello world");
});
// let x = 5
// let add = function(x,y){
// return x + y
// }
// console.log(add(5,6))
// const x = function(){
//     console.log("I am called within a function")
// }

// const y = function(bunny){
//     console.log("do something");
//     bunny()
// }

// y(x)
// const calc = function (num1, num2, calcType) {
//   if (calcType === "add") {
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// // };
// console.log(calc(5,6,"add"))
// const add = function (a, b) {
//   return a + b;
// };
// const multiply = function (a, b) {
//   return a * b;
// };
// const subtract = function (a, b) {
//   return a - b;
// };
// const exponent = function (a, b) {
//   return a ** b;
// };

// const calc = function (num1, num2, callback) {
//   return callback(num1, num2);
// };
// calc(5, 6, subtract);
//FUNCTION RETURNING FUNCTIONS
// const greet = function (greeting) {
//   return function (bunny) {
//   console.log(`${greeting} ${bunny}`);
//   };
// };

// const greeting1 = greet("Hey");
// greeting1("Ayo")

// function test(){
//   return 5
// }
// const story = test()
// console.log(story)
//IMMEDIATELY INVOKED FUNCTION EXPRESSION/IIFE
// const runOnce = function(){
//   console.log("this only runs once")
// }
// runOnce()
// runOnce()
// runOnce()
// (function () {
//   console.log("this only runs once");
// })();
