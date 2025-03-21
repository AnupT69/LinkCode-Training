//Object:- it is a collection of Key-value pairs , also known as properties , it is used to store and manipulate datas.
const person = {
  name: "Anup",
  age: 21,
  occupation: "Programmer",
};
//Accessing properties
console.log(person.name);

//adding properties
person.experience = "2months";
console.log(person);

//delegting properties
delete person.age;
console.log(person);
