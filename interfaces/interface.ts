// interface TS spesific - description of how an object should look like
// interface can be used with a class while a type cannot
interface PersonInterface {
  name: string;
  readonly age: number; // you can add readonly in an interface
  email: string;
  // test: string = 'test'; we cannot assign values in an interface

  greeting(phrase: string): void;
}

class Person implements PersonInterface {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greeting(phrase: string) {
    console.log(phrase);
  }
}

const user1: Person = new Person("John", 25, "test@test.com");
user1.age = 26; // should not be able to change the value but still can ??

console.log(user1);
user1.greeting("Kalabanga duuude");

// you can extending interfaces similar to classes
interface First{
    name: string;
}

interface Second extends First{
    age: number;
}

interface Third extends First, Second{
    email: string;
}

// const user3: Third = {} must have all 3 properties - name, age, email


// you can have optional properties in interfaces
interface Optional{
    name?: string;
}
