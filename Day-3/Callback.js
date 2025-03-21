//A callback function is a function that is passed as an argument to another function and is executed by that functions
//Types:- 1.Synchronous callback functions:- These functions are executed immediately after the operation has completed
//2. Asynchronous:- These function are executed at a later time, after the operation has completed

function greet(name, callback) {
  console.log(`Hello,${name}!`);
  callback();
}

function farewell() {
  console.log("GoodBye!");
}

greet("Anup", farewell);

greet("Anup", () => {
  console.log("Arrow functions");
});
