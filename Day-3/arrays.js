//Arrays functions
//1. Slice Method:- does not change the arrays

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));

console.log(arr.slice(2, 4));

//2. Splice Method:- same as slice but this method makes change in arrays also

console.log(arr.splice(2));

//3. Map functions:-  this function is used to transform arrays
//it takes callback functions as a parameter

let arrays = [1, 2, 3, 4, 5];
const doubledNumbers = arrays.map((num) => num * 2);
console.log(doubledNumbers);
console.log(arrays);

//4.filter:- this function is used to filter out elements from array based on condition
arrays = [1, 2, 3, 4, 5, 8, 10, 12, 16, 17];
const evenNumbers = arrays.filter((num) => num % 2 === 0);
console.log(evenNumbers);
