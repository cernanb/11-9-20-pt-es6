// Arrow functions

// function sayHello() {
//   console.log("hello");
// }

// const sayGoodbye = function () {
//   console.log("goodbye");
// };

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(getFullName("Cernan", "Bernardo"));

// const students = ["Cernan", "Ashley", "Daisy"];

// let filteredStudents = students.filter((student) => student[0] === "C");

// fetch('//')
//     .then(res => res.json())

// console.log(filteredStudents);

// Destructuring
// Array destructuring
// const languages = ["Javascript", "Python", "Elixir"];

// // const lang1 = languages[0]
// const lang2 = languages[1]

// const [lang1, lang2, , , , , , , , , , , , , , , , , , lang100] = languages;

// console.log(`My favorite language is ${lang2}`);

// React example with useState
// const [name, setName] = useState()

// Object destructuring
// const person = {
//   name: "Cernan",
//   grade: 5,
//   favLang: "Javascript",
// };

// const { grade } = person;

// function bankAccount({ name: firstName, number: accountNumber, balance }) {
//     const {name} = account
//   console.log(`My account number is ${firstName}`);
// }

// bankAccount({ name: "Cernan", number: "dsfdsf4343423", balance: 1 });

// Key/property shorthand
// function getAge({ personAge: age }) {
//   return {
//     age,
//   };
// }

// const name = "Cernan";
// const age = 100;

// const person = {
//   name: name,
//   age: age,
// };

// console.log(person.age);

// Spread syntax

// const names = ["Cernan", "Ashley", "Daisy"];
// const updatedNames = ["John", ...names, "Sally"];
// const updatedNames = names.concat("John");

// console.log(updatedNames);

// const person = {
//   name: "Cernan",
//   age: 100,
//   favLang: "React",
// };

// const updatedPerson = { ...person, favLang: "Ruby" };
// console.log(person);
// console.log(updatedPerson);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  formatDiv() {
    return `
          <div>
              <h1>${this.name}</h1>
              <h3>${this.age}</h3>
          </div>
     `;
  }
}

const people = [
  { name: "Cernan", age: 100 },
  { name: "Ashley", age: 50 },
  { name: "Daisy", age: 4 },
];

people.forEach((person) => {
  const newPerson = new Person(person.name, person.age);
  document.getElementById("app").innerHTML += newPerson.formatDiv();
});
