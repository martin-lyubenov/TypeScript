// decorators are added to classes

// decorator funciton
function Logger(contstructor: Function) {
  console.log("loggin decorator");
  console.log(contstructor);
}

// we can create a decorator generator so we can pass custom properties
function LoggerGenerator(ConfigString: string) {
  return function (contstructor: Function) {
    console.log(ConfigString);
  };
}

// the decorator will run during the creation of the class, not when we instantiate new objects
// @Logger // we use the @ to attach a decorator to a class - TS specific
@LoggerGenerator("Random string")
class Person {
  name = "John";

  constructor() {
    console.log("Constructor");
  }
}

const p1 = new Person();
console.log(p1);
