// const names = ["Martin", "Lyubenov"];

// generic typev- a type connected to another type - example - Array to string, number, union ( number | string), etc...
const names: Array<string> = [];
names[0].split(",");

const numbers: Array<number> = [];
numbers[0].toFixed(2);

// generic type - promise
const promist: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(15);
  }, 1000);
});

promist.then((data) => {
  data.toFixed(2); // TS knows the return type because it was spesified with the generic type
});

// you can combine generic types with interfaces and types
interface Person {
  name: string;
  age: number;
}

const users: Array<Person> = [];

const user1: Person = {
  name: "John",
  age: 25,
};

const user2 = {
  name: "Pesho",
};

users.push(user1);
// users.push(user2); - throws an error
