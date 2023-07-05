function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;

  if (showResult) {
    console.log(phrase + result);
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = "Result is: ";

add(number1, number2, printResult, phrase);

// object

const person: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "John",
  age: 30,
  role: [2, 'admin']
}

console.log(person.name);

// array
let hobbies: string[];
hobbies = ['sports', 'athletes'];


// better autocomplete
for (const item of hobbies) {
  console.log(item.toLocaleLowerCase());
  // item.map(item => item) GIVES error when you try to use an unsupported method
  
}

// tuple
const personTwo: {
  name: string;
  age: number;
  role: [number, string];
} = {
  name: "John",
  age: 30,
  role: [2, 'admin'] // tuple
}


// personTwo.role[1] = 10; Error of type wrong assignment
personTwo.role.push('hello'); // push is an exception, you should not be able to add more items to a Tuple
// personTwo.role = [1, 'admin', 'hello']  Error - too many items assign

// enum - exists only in TS
enum Role {ADMIN, READ_ONLY, AUTHOR}; // authomatically assigns numbers to the roles ADMIN = 0, READ_ONLY = 1, etc
enum RoleTest {ADMIN = 5, READ_ONLY, AUTHOR}; // change the initial starting number ADMIN = 5, READ_ONLY = 6, etc
enum RoleTestTwo {ADMIN = 'Hello', READ_ONLY = 5, AUTHOR = 'Author'}; // you can assign unique value to each role

const personThree = {
  name: "John",
  age: 30,
  role: Role.ADMIN,
}

if (personThree.role === Role.ADMIN) {
  console.log('is admin');
  
}

// any type - allows all types to be stored, not recommended as you lose the benefits of TS
let anyArray: any[];
anyArray = [1, 'admin', null]

