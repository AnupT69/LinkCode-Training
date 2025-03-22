//ForEach :- iterates over an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((num) => console.log(num * 5));

//the main difference between Arrow function and normal functions are arrow function cannot be used as constructor
console.log("Example:- ");
const Person = {
  name: "Anup",
  age: 21,
  greet: function () {
    console.log("Hello " + this.name); //can use this
  },
};

Person.greet();

const Per = {
  name: "Anup",
  age: 21,
  greet: () => {
    console.log(this.name); //Error , behaves differently
  },
};

//split():- Converts a string into an array
//join():- Converts an array into a string
//reverse():- Reverse an array
const str = "Hello World";
const arr = str.split(" ");
const newStr = arr.join("-");
const reversed = arr.reverse();
console.log(reversed.join(" "));

//array Destructuring:-
//Unpacking values from an array into variables
let numss = [10, 20, 30];
let [a, b, c] = numss;
console.log(a, b, c);

function hello() {
  console.log("Hello");
}
let ex = [12, 20, hello];
[a, b, c] = ex;
console.log(c);
